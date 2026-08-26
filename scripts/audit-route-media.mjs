import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const rootDir = path.resolve(import.meta.dirname, '..');
const source = await readFile(path.join(rootDir, 'src/data/routeHeroMedia.ts'), 'utf8');
const variationSource = await readFile(path.join(rootDir, 'src/data/pageVariations.ts'), 'utf8');
const listSource = source.match(/routeHeroPhotoIds\s*=\s*\[([\s\S]*?)\]\s*as const/)?.[1] ?? '';
const photoIds = [...listSource.matchAll(/\d+/g)].map(([value]) => Number(value));
const errors = [];
const assignedIndexes = [];

if (photoIds.length < 82) {
  errors.push(`Expected at least 82 route hero images, found ${photoIds.length}.`);
}

if (new Set(photoIds).size !== photoIds.length) {
  errors.push('Route hero photo IDs contain duplicates.');
}

for (const match of variationSource.matchAll(/\w+:\s*\{\s*offset:\s*(\d+),\s*order:\s*\[([\s\S]*?)\]/g)) {
  const offset = Number(match[1]);
  const routeCount = [...match[2].matchAll(/'[^']+'/g)].length;
  assignedIndexes.push(...Array.from({ length: routeCount }, (_, index) => offset + index));
}

const blogIndexSource = variationSource.match(/blogCategoryHeroIndexes[^=]*=\s*\{([\s\S]*?)\};/)?.[1] ?? '';
assignedIndexes.push(...[...blogIndexSource.matchAll(/:\s*(\d+)/g)].map((match) => Number(match[1])));

if (assignedIndexes.length !== 82) {
  errors.push(`Expected 82 routed hero assignments, found ${assignedIndexes.length}.`);
}

if (new Set(assignedIndexes).size !== assignedIndexes.length) {
  errors.push('Two routes point at the same hero image index.');
}

if (assignedIndexes.some((index) => index < 0 || index >= photoIds.length)) {
  errors.push('A routed hero index points outside the imported media list.');
}

const hashes = new Map();

for (const photoId of photoIds) {
  const filePath = path.join(rootDir, 'public/media/route-heroes', `pexels-${photoId}.webp`);

  try {
    const buffer = await readFile(filePath);
    const metadata = await sharp(buffer).metadata();
    const hash = createHash('sha256').update(buffer).digest('hex');

    if (metadata.width !== 1600 || metadata.height !== 900) {
      errors.push(`pexels-${photoId}.webp is ${metadata.width}x${metadata.height}, expected 1600x900.`);
    }

    if (hashes.has(hash)) {
      errors.push(`pexels-${photoId}.webp duplicates pexels-${hashes.get(hash)}.webp.`);
    } else {
      hashes.set(hash, photoId);
    }
  } catch (error) {
    errors.push(`pexels-${photoId}.webp is missing or unreadable: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`[route-media] ${photoIds.length} unique 1600x900 images and ${assignedIndexes.length} unique route assignments verified.`);
