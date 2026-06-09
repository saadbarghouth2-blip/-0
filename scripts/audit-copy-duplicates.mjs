import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();

const scanFiles = [
  'src/data/portfolio.ts',
  'src/data/subPagesData.ts',
  'src/data/subServicesData.ts',
  'src/pages/SubServicesPage.tsx',
  'src/pages/SubPagesPortalPage.tsx',
  'src/components/SubServiceCard.tsx',
  'src/components/SubServiceDetailPage.tsx',
  'src/components/SubPagesOverview.tsx',
];

const normalizeCopy = (value) =>
  value
    .replace(/\\'/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/[ØŒ,.;:!ØŸ?]+$/g, '')
    .trim()
    .toLowerCase();

const isNarrativeCopy = (value) => {
  const normalized = normalizeCopy(value);
  if (normalized.length < 32) return false;
  if (/^[\w-]+$/.test(normalized)) return false;
  if (/^(?:https?:|\/images\/|\/media\/)/i.test(normalized)) return false;
  return true;
};

const stringPattern = /'(?<value>(?:\\'|[^'])*)'/g;
const seen = new Map();

for (const relative of scanFiles) {
  const filePath = path.join(repoRoot, relative);
  if (!fs.existsSync(filePath)) continue;

  const text = fs.readFileSync(filePath, 'utf8');

  for (const match of text.matchAll(stringPattern)) {
    const value = match.groups?.value ?? '';
    if (!isNarrativeCopy(value)) continue;

    const lineStart = text.lastIndexOf('\n', match.index) + 1;
    const lineEnd = text.indexOf('\n', match.index);
    const lineText = text.slice(lineStart, lineEnd === -1 ? undefined : lineEnd);
    if (/\b(?:className|import|from|type)\b/.test(lineText)) continue;

    const normalized = normalizeCopy(value);
    const line = text.slice(0, match.index).split(/\r?\n/).length;
    const entries = seen.get(normalized) ?? [];
    entries.push(`${relative}:${line}`);
    seen.set(normalized, entries);
  }
}

const duplicates = [...seen.entries()]
  .filter(([, locations]) => locations.length > 1)
  .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

if (duplicates.length) {
  console.error('Duplicate narrative copy found:\n');
  for (const [copy, locations] of duplicates) {
    console.error(copy);
    for (const location of locations) console.error(`  - ${location}`);
    console.error('');
  }
  process.exit(1);
}

console.log(`Copy audit passed. Checked ${seen.size} narrative text value(s) across ${scanFiles.length} file(s).`);
