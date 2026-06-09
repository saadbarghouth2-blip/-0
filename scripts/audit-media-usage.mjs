import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const repoRoot = process.cwd();
const scanRoots = ['src', 'index.html', 'public/site.webmanifest'];
const mediaExtensions = String.raw`(?:png|jpe?g|webp|gif|svg|mp4|webm|mov)`;
const directMediaPattern = new RegExp(
  String.raw`(?<asset>(?:https?:\/\/[^'"<>\s)]*?\.${mediaExtensions}(?:\?[^'"<>\s)]*)?|https:\/\/www\.youtube\.com\/embed\/[^'"<>\s)]+|\/(?:images|media|favicon)[^'"<>\s)]*?\.${mediaExtensions}))`,
  'gi',
);
const enrichmentMediaPattern = /enrichmentMediaById\[['"](?<asset>[^'"]+)['"]\]/g;

const ignoredFragments = [
  '${',
  '/images/${',
  '/media/enrichment/${',
];

const manifestFiles = new Set(['src/data/enrichmentMedia.ts', 'src/data/localImageInventory.ts']);

const allowedDuplicateAssets = new Set([
  '/favicon-256.png',
  '/favicon-32.png',
  '/favicon.ico',
  '/images/notaq-logo-lockup.png',
  '/images/notaq-logo-lockup.webp',
  '/images/notaq-brand-mark.webp',
]);

const allowedBinaryDuplicateFiles = new Set([
  'public/favicon-256.png',
  'public/favicon-32.png',
  'public/favicon.ico',
  'public/images/notaq-logo-lockup.png',
  'public/images/notaq-logo-lockup.webp',
  'public/images/notaq-brand-mark.webp',
]);

const allowedRepeatedEnrichmentKeys = new Set([
  'enrichmentMediaById:team-planning',
]);

const isAllowedDuplicate = (asset) =>
  allowedDuplicateAssets.has(asset) ||
  allowedRepeatedEnrichmentKeys.has(asset);

const walk = (target) => {
  const fullPath = path.join(repoRoot, target);
  if (!fs.existsSync(fullPath)) return [];
  const stat = fs.statSync(fullPath);
  if (stat.isFile()) return [fullPath];

  return fs.readdirSync(fullPath, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === 'node_modules' || entry.name === 'dist') return [];
    const entryPath = path.join(fullPath, entry.name);
    if (entry.isDirectory()) return walk(path.relative(repoRoot, entryPath));
    if (!/\.(tsx?|jsx?|css|html|json)$/.test(entry.name)) return [];
    return [entryPath];
  });
};

const walkPublicMedia = (target) => {
  const fullPath = path.join(repoRoot, target);
  if (!fs.existsSync(fullPath)) return [];
  const stat = fs.statSync(fullPath);
  if (stat.isFile()) return [fullPath];

  return fs.readdirSync(fullPath, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(fullPath, entry.name);
    if (entry.isDirectory()) return walkPublicMedia(path.relative(repoRoot, entryPath));
    return [entryPath];
  });
};

const addUsage = (usage, asset, location) => {
  const entries = usage.get(asset) ?? [];
  entries.push(location);
  usage.set(asset, entries);
};

const files = scanRoots.flatMap(walk);
const globalUsage = new Map();
const perFileUsage = new Map();
const manifestMediaSources = new Map();
const genericAltFailures = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const relative = path.relative(repoRoot, file).replaceAll(path.sep, '/');
  const fileUsage = new Map();
  const isManifest = manifestFiles.has(relative);

  const record = (asset, index) => {
    if (!asset || ignoredFragments.some((fragment) => asset.includes(fragment))) return;

    const lineStart = text.lastIndexOf('\n', index) + 1;
    const lineEnd = text.indexOf('\n', index);
    const lineText = text.slice(lineStart, lineEnd === -1 ? undefined : lineEnd);
    if (/\b(?:sourceUrl|licenseUrl)\s*:/.test(lineText)) return;

    const line = text.slice(0, index).split(/\r?\n/).length;
    const normalized = asset.replace(/&amp;/g, '&');
    const location = `${relative}:${line}`;
    if (isManifest) {
      addUsage(manifestMediaSources, normalized, location);
      return;
    }

    addUsage(globalUsage, normalized, location);
    addUsage(fileUsage, normalized, location);
  };

  for (const match of text.matchAll(directMediaPattern)) {
    record(match.groups?.asset, match.index);
  }

  for (const match of text.matchAll(enrichmentMediaPattern)) {
    record(`enrichmentMediaById:${match.groups?.asset}`, match.index);
  }

  perFileUsage.set(relative, fileUsage);

  if (isManifest) {
    for (const match of text.matchAll(/\balt\s*:\s*{[\s\S]*?en:\s*['"](?<alt>[^'"]+)['"]/g)) {
      const alt = match.groups?.alt ?? '';
      if (/\b(?:subpage visual|varied local visual|image placeholder|fallback image)\b/i.test(alt)) {
        const line = text.slice(0, match.index).split(/\r?\n/).length;
        genericAltFailures.push(`${relative}:${line} uses generic visible media alt: "${alt}"`);
      }
    }
  }
}

const globalDuplicates = [...globalUsage.entries()]
  .filter(([asset, locations]) => locations.length > 1 && !isAllowedDuplicate(asset) && !asset.startsWith('enrichmentMediaById:'))
  .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

const fileDuplicates = [...perFileUsage.entries()]
  .flatMap(([relative, usage]) =>
    [...usage.entries()]
      .filter(([asset, locations]) => locations.length > 1 && !isAllowedDuplicate(asset))
      .map(([asset, locations]) => [relative, asset, locations]),
  )
  .sort((a, b) => b[2].length - a[2].length || a[1].localeCompare(b[1]));

const localAssetPath = (asset) => {
  if (!asset.startsWith('/')) return null;
  const cleanAsset = asset.split(/[?#]/)[0];
  return path.join(repoRoot, 'public', decodeURIComponent(cleanAsset.replace(/^\//, '')));
};

const missingLocalAssets = [...globalUsage.entries()]
  .filter(([asset]) => asset.startsWith('/'))
  .filter(([asset]) => {
    const fullPath = localAssetPath(asset);
    return fullPath && !fs.existsSync(fullPath);
  })
  .sort((a, b) => a[0].localeCompare(b[0]));

const manifestMissingLocalAssets = [...manifestMediaSources.entries()]
  .filter(([asset]) => asset.startsWith('/'))
  .filter(([asset]) => {
    const fullPath = localAssetPath(asset);
    return fullPath && !fs.existsSync(fullPath);
  })
  .sort((a, b) => a[0].localeCompare(b[0]));

const hasWebpSibling = (asset) => {
  if (!asset.startsWith('/')) return false;
  const cleanAsset = asset.split(/[?#]/)[0];
  if (!/\.png$/i.test(cleanAsset)) return false;
  const fullPath = path.join(repoRoot, 'public', decodeURIComponent(cleanAsset.replace(/^\//, '')));
  return fs.existsSync(fullPath.replace(/\.png$/i, '.webp'));
};

const pngAssetsWithWebpSibling = [
  ...[...globalUsage.entries()].map(([asset, locations]) => [asset, locations]),
  ...[...manifestMediaSources.entries()].map(([asset, locations]) => [asset, locations]),
]
  .filter(([asset]) => hasWebpSibling(asset) && !isAllowedDuplicate(asset))
  .sort((a, b) => a[0].localeCompare(b[0]));

const publicMediaExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.mp4', '.webm', '.mov']);
const publicMediaFiles = walkPublicMedia('public').filter((file) =>
  publicMediaExtensions.has(path.extname(file).toLowerCase()),
);
const binaryUsage = new Map();

for (const file of publicMediaFiles) {
  const buffer = fs.readFileSync(file);
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  const relative = path.relative(repoRoot, file).replaceAll(path.sep, '/');
  const entries = binaryUsage.get(hash) ?? [];
  entries.push(relative);
  binaryUsage.set(hash, entries);
}

const binaryDuplicateGroups = [...binaryUsage.values()]
  .filter((entries) => entries.length > 1)
  .filter((entries) => !entries.every((entry) => allowedBinaryDuplicateFiles.has(entry)))
  .sort((a, b) => b.length - a.length || a[0].localeCompare(b[0]));

const inventoryPath = path.join(repoRoot, 'src/data/localImageInventory.ts');
const projectImagePath = path.join(repoRoot, 'src/components/ProjectImage.tsx');
const localImageAssets = new Map();
const missingInventoryAssets = [];
const duplicateShowcaseAssets = [];
const projectImageFallbackFailures = [];

if (fs.existsSync(projectImagePath)) {
  const projectImageText = fs.readFileSync(projectImagePath, 'utf8');
  if (/DEFAULT_IMAGE_FALLBACK|generated\/subpage-visual-\d+/i.test(projectImageText)) {
    projectImageFallbackFailures.push(
      'src/components/ProjectImage.tsx uses one global generated fallback image. Use explicit fallbacks per item or a non-media placeholder instead.',
    );
  }
}

if (fs.existsSync(inventoryPath)) {
  const inventoryText = fs.readFileSync(inventoryPath, 'utf8');
  const helperRoots = {
    image: '/images/',
    projectImage: '/images/projects/',
    enrichmentImage: '/media/enrichment/',
  };

  for (const match of inventoryText.matchAll(/(?<key>\w+):\s*{[\s\S]*?src:\s*(?<helper>image|projectImage|enrichmentImage)\('(?<file>[^']+)'\)/g)) {
    const key = match.groups?.key;
    const helper = match.groups?.helper;
    const fileName = match.groups?.file;
    if (!key || !helper || !fileName) continue;

    const asset = encodeURI(`${helperRoots[helper]}${fileName}`);
    localImageAssets.set(key, asset);

    const fullPath = localAssetPath(asset);
    if (fullPath && !fs.existsSync(fullPath)) {
      missingInventoryAssets.push([key, asset]);
    }
  }

  const showcasePath = path.join(repoRoot, 'src/data/pageImageShowcases.ts');
  if (fs.existsSync(showcasePath)) {
    const showcaseText = fs.readFileSync(showcasePath, 'utf8');
    const showcaseUsage = new Map();

    for (const match of showcaseText.matchAll(/localImages\.(?<key>\w+)/g)) {
      const key = match.groups?.key;
      const asset = key ? localImageAssets.get(key) : null;
      if (!key || !asset) continue;

      const line = showcaseText.slice(0, match.index).split(/\r?\n/).length;
      addUsage(showcaseUsage, asset, `src/data/pageImageShowcases.ts:${line}`);
    }

    for (const [asset, locations] of showcaseUsage.entries()) {
      if (locations.length > 1 && !isAllowedDuplicate(asset)) {
        duplicateShowcaseAssets.push([asset, locations]);
      }
    }
  }
}

if (
  globalDuplicates.length ||
  fileDuplicates.length ||
  missingLocalAssets.length ||
  manifestMissingLocalAssets.length ||
  pngAssetsWithWebpSibling.length ||
  missingInventoryAssets.length ||
  duplicateShowcaseAssets.length ||
  binaryDuplicateGroups.length ||
  genericAltFailures.length ||
  projectImageFallbackFailures.length
) {
  if (globalDuplicates.length) {
    console.error('Duplicate media sources found:\n');
    for (const [asset, locations] of globalDuplicates) {
      console.error(`${asset}`);
      for (const location of locations) console.error(`  - ${location}`);
      console.error('');
    }
  }

  if (fileDuplicates.length) {
    console.error('Duplicate media sources inside the same file:\n');
    for (const [relative, asset, locations] of fileDuplicates) {
      console.error(`${asset} (${relative})`);
      for (const location of locations) console.error(`  - ${location}`);
      console.error('');
    }
  }

  if (missingLocalAssets.length) {
    console.error('Missing local media files found:\n');
    for (const [asset, locations] of missingLocalAssets) {
      console.error(`${asset}`);
      for (const location of locations) console.error(`  - ${location}`);
      console.error('');
    }
  }

  if (manifestMissingLocalAssets.length) {
    console.error('Missing local media files found in media manifests:\n');
    for (const [asset, locations] of manifestMissingLocalAssets) {
      console.error(`${asset}`);
      for (const location of locations) console.error(`  - ${location}`);
      console.error('');
    }
  }

  if (pngAssetsWithWebpSibling.length) {
    console.error('PNG media references with an available WebP sibling found:\n');
    for (const [asset, locations] of pngAssetsWithWebpSibling) {
      console.error(`${asset}`);
      for (const location of locations) console.error(`  - ${location}`);
      console.error('');
    }
  }

  if (missingInventoryAssets.length) {
    console.error('Missing localImageInventory files found:\n');
    for (const [key, asset] of missingInventoryAssets) {
      console.error(`${key}: ${asset}`);
    }
    console.error('');
  }

  if (duplicateShowcaseAssets.length) {
    console.error('Duplicate media inside page image showcases:\n');
    for (const [asset, locations] of duplicateShowcaseAssets) {
      console.error(`${asset}`);
      for (const location of locations) console.error(`  - ${location}`);
      console.error('');
    }
  }

  if (binaryDuplicateGroups.length) {
    console.error('Binary-identical media files found in public:\n');
    for (const entries of binaryDuplicateGroups) {
      for (const entry of entries) console.error(`  - ${entry}`);
      console.error('');
    }
  }

  if (genericAltFailures.length) {
    console.error('Generic visible media alt text found:\n');
    for (const failure of genericAltFailures) console.error(`- ${failure}`);
    console.error('');
  }

  if (projectImageFallbackFailures.length) {
    console.error('Global generated media fallback found:\n');
    for (const failure of projectImageFallbackFailures) console.error(`- ${failure}`);
    console.error('');
  }

  process.exit(1);
}

console.log(`Media audit passed. Checked ${globalUsage.size} unique media source(s).`);
