import { createHash } from 'node:crypto';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');
const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp']);
const videoExtensions = new Set(['.mp4', '.webm']);

const walk = async (directory) => {
  const files = [];

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }

  return files;
};

const hasValidVideoSignature = (extension, buffer) => {
  if (extension === '.mp4') return buffer.subarray(4, 12).toString('ascii').includes('ftyp');
  if (extension === '.webm') return buffer.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]));
  return false;
};

const mediaFiles = (await walk(publicDir)).filter((file) => {
  const extension = path.extname(file).toLowerCase();
  return imageExtensions.has(extension) || videoExtensions.has(extension);
});

const failures = [];
const hashes = new Map();

for (const file of mediaFiles) {
  const extension = path.extname(file).toLowerCase();
  const relativePath = path.relative(publicDir, file).replaceAll(path.sep, '/');
  const fileStat = await stat(file);

  if (fileStat.size === 0) {
    failures.push(`${relativePath}: empty file`);
    continue;
  }

  const contents = await readFile(file);
  const hash = createHash('sha256').update(contents).digest('hex');
  const duplicateOf = hashes.get(hash);

  if (duplicateOf) failures.push(`${relativePath}: exact duplicate of ${duplicateOf}`);
  else hashes.set(hash, relativePath);

  if (imageExtensions.has(extension)) {
    try {
      const metadata = await sharp(file, { animated: extension === '.gif' }).metadata();
      if (!metadata.width || !metadata.height || !metadata.format) {
        failures.push(`${relativePath}: missing valid image dimensions or format`);
      }
    } catch (error) {
      failures.push(`${relativePath}: unreadable image (${error.message})`);
    }
  } else if (!hasValidVideoSignature(extension, contents.subarray(0, 32))) {
    failures.push(`${relativePath}: invalid ${extension.slice(1).toUpperCase()} signature`);
  }
}

if (failures.length) {
  console.error('Media integrity audit failed:\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Media integrity audit passed. Verified ${mediaFiles.length} files with no broken or exact duplicate media.`);
