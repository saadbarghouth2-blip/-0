import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const checks = [
  {
    file: 'src/index.css',
    needles: [
      '--mobile-section-pt: 1.45rem',
      '[class*="py-20"]',
      '[class*="mb-24"]',
      '[class*="min-h-[38rem]"]',
      '[class*="h-[360px]"]',
      '[class*="blur-[200px]"]',
      '.page-enrichment img',
    ],
  },
  {
    file: 'src/components/PageHero.tsx',
    needles: ['px-3 pb-4 pt-5', 'sm:pt-20'],
  },
  {
    file: 'src/pages/TeamPage.tsx',
    needles: ['h-[285px]', 'sm:h-[360px]', 'mb-8 text-center md:mb-24'],
  },
  {
    file: 'src/pages/StatsDashboardPage.tsx',
    needles: ['min-h-[210px]', 'mb-10 md:mb-24', 'gap-3 md:gap-6'],
  },
  {
    file: 'src/pages/DetailPage.tsx',
    needles: ['min-h-[30rem]', 'sm:min-h-[34rem]', 'md:min-h-[42rem]'],
  },
  {
    file: 'src/components/DetailPageEnhanced.tsx',
    needles: ['min-h-[30rem]', 'sm:min-h-[34rem]', 'md:min-h-[42rem]'],
  },
];

const failures = [];

for (const check of checks) {
  const filePath = path.join(root, check.file);
  const content = readFileSync(filePath, 'utf8');

  for (const needle of check.needles) {
    if (!content.includes(needle)) {
      failures.push(`${check.file} is missing mobile compact guard: ${needle}`);
    }
  }
}

if (failures.length) {
  console.error('Mobile layout audit failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Mobile layout audit passed (${checks.length} files checked).`);
