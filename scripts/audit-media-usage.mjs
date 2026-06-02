import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const scanRoots = ['src', 'index.html', 'public/site.webmanifest'];
const mediaExtensions = String.raw`(?:png|jpe?g|webp|gif|svg|mp4|webm|mov)`;
const mediaPattern = new RegExp(
  String.raw`(?<asset>(?:https?:\/\/[^'"<>\s)]*?\.${mediaExtensions}(?:\?[^'"<>\s)]*)?|https:\/\/www\.youtube\.com\/embed\/[^'"<>\s)]+|\/(?:images|media|favicon)[^'"<>\s)]*?\.${mediaExtensions}))`,
  'gi',
);

const ignoredFragments = [
  '${',
  '/images/${',
  '/media/enrichment/${',
];

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

const files = scanRoots.flatMap(walk);
const usage = new Map();

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const relative = path.relative(repoRoot, file).replaceAll(path.sep, '/');

  for (const match of text.matchAll(mediaPattern)) {
    const asset = match.groups?.asset;
    if (!asset || ignoredFragments.some((fragment) => asset.includes(fragment))) continue;
    const normalized = asset.replace(/&amp;/g, '&');
    const line = text.slice(0, match.index).split(/\r?\n/).length;
    const entries = usage.get(normalized) ?? [];
    entries.push(`${relative}:${line}`);
    usage.set(normalized, entries);
  }
}

const duplicates = [...usage.entries()]
  .filter(([, locations]) => locations.length > 1)
  .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

if (duplicates.length) {
  console.error('Duplicate media sources found:\n');
  for (const [asset, locations] of duplicates) {
    console.error(`${asset}`);
    for (const location of locations) console.error(`  - ${location}`);
    console.error('');
  }
  process.exit(1);
}

console.log(`Media audit passed. Checked ${usage.size} unique media source(s).`);
