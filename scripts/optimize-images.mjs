import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const rootDir = path.resolve(import.meta.dirname, '..');

const projectImagesDir = path.join(rootDir, 'public', 'images', 'projects');

const assetTransforms = [
  {
    input: ['public', 'images', 'Cloud sync-bro.png'],
    output: ['public', 'images', 'cloud-sync-bro.webp'],
    width: 1200,
    format: 'webp',
  },
  {
    input: ['public', 'images', 'WhatsApp Image 2026-02-15 at 2.31.19 AM (1).jpeg'],
    output: ['public', 'images', 'workspace-team.webp'],
    width: 1400,
    format: 'webp',
  },
  {
    input: ['public', 'images', 'Gemini_Generated_Image_96cd0396cd0396cd.png'],
    output: ['public', 'images', 'service-structure.webp'],
    width: 1200,
    format: 'webp',
  },
  {
    input: ['public', 'images', 'Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png'],
    output: ['public', 'images', 'service-trust.webp'],
    width: 1200,
    format: 'webp',
  },
  {
    input: ['public', 'images', 'Gemini_Generated_Image_nfqqnnfqqnnfqqnn.png'],
    output: ['public', 'images', 'hero-background.webp'],
    width: 1600,
    format: 'webp',
  },
  {
    input: ['public', 'images', 'Gemini_Generated_Image_9ooasm9ooasm9ooa (1).png'],
    output: ['public', 'images', 'hero-mobile-overlay.webp'],
    width: 1200,
    format: 'webp',
  },
  {
    input: ['public', 'images', 'notaq_web_identity_01.png'],
    output: ['public', 'images', 'notaq-brand-mark.webp'],
    width: 720,
    format: 'webp',
  },
  {
    input: ['public', 'images', 'notaq_hero_branding.png'],
    output: ['public', 'images', 'notaq-og-cover.jpg'],
    width: 1200,
    format: 'jpeg',
  },
];

const formatBytes = (value) => `${(value / 1024).toFixed(1)} KB`;

const ensureParentDir = async (targetFile) => {
  await mkdir(path.dirname(targetFile), { recursive: true });
};

const renderImage = async ({ input, output, width, format }) => {
  const inputPath = path.join(rootDir, ...input);
  const outputPath = path.join(rootDir, ...output);

  await ensureParentDir(outputPath);

  let transformer = sharp(inputPath, { animated: false }).rotate();

  if (width) {
    transformer = transformer.resize({ width, withoutEnlargement: true });
  }

  if (format === 'jpeg') {
    await transformer.jpeg({ quality: 82, mozjpeg: true }).toFile(outputPath);
  } else {
    await transformer.webp({ quality: 76, effort: 6 }).toFile(outputPath);
  }

  const [inputStats, outputStats] = await Promise.all([stat(inputPath), stat(outputPath)]);
  console.log(
    `[optimize] ${path.basename(outputPath)} ${formatBytes(inputStats.size)} -> ${formatBytes(outputStats.size)}`,
  );
};

const convertProjectGallery = async () => {
  const entries = await readdir(projectImagesDir, { withFileTypes: true });
  const pngFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.png'));

  for (const file of pngFiles) {
    const inputPath = path.join(projectImagesDir, file.name);
    const outputPath = path.join(projectImagesDir, file.name.replace(/\.png$/i, '.webp'));

    let transformer = sharp(inputPath).rotate().resize({
      width: 1440,
      withoutEnlargement: true,
    });

    await transformer.webp({ quality: 74, effort: 6 }).toFile(outputPath);

    const [inputStats, outputStats] = await Promise.all([stat(inputPath), stat(outputPath)]);
    console.log(
      `[optimize] ${path.basename(outputPath)} ${formatBytes(inputStats.size)} -> ${formatBytes(outputStats.size)}`,
    );
  }
};

const main = async () => {
  for (const asset of assetTransforms) {
    await renderImage(asset);
  }

  await convertProjectGallery();
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
