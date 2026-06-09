import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scanRoots = ['src/data', 'src/pages', 'src/components', 'src/lib'];
const allowedExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs']);

const blocked = [
  {
    pattern: /\bcoding\s*&\s*building your future\b/i,
    reason: 'Use company-owner language, not a generic developer/future slogan.',
  },
  {
    pattern: /\bStart your journey with us\b/i,
    reason: 'Use a concrete CTA such as "Discuss your company need".',
  },
  {
    pattern: /ابدأ رحلتك معنا/,
    reason: 'Use a concrete company CTA such as "ناقش احتياج شركتك".',
  },
  {
    pattern: /\bKnow what happens after your message so you can start with confidence\b/i,
    reason: 'Frame the message as a clear execution step for the company.',
  },
  {
    pattern: /\bReady to Get Started\b/i,
    reason: 'Use a concrete company CTA instead of a generic start prompt.',
  },
  {
    pattern: /\byour digital needs\b/i,
    reason: 'Use company need / visitor outcome language instead of broad personal needs.',
  },
  {
    pattern: /\byour goals\b/i,
    reason: 'Tie goals to the company and the decision to contact.',
  },
  {
    pattern: /\bachieving your goals\b/i,
    reason: 'Tie outcomes to company clarity and visitor decisions.',
  },
  {
    pattern: /\bCan I reach out directly on WhatsApp\b/i,
    reason: 'Avoid first-person FAQ wording; frame it around the company need.',
  },
  {
    pattern: /\bCan you help improve my search engine ranking\b/i,
    reason: 'Avoid first-person SEO wording; refer to company search visibility.',
  },
  {
    pattern: /\bDo I need technical knowledge to work with you\b/i,
    reason: 'Address the decision-maker and company readiness.',
  },
  {
    pattern: /\bDo I need to prepare all the content before we start\b/i,
    reason: 'Address company content readiness, not a personal task list.',
  },
  {
    pattern: /\bDo I receive site access and assets after handoff\b/i,
    reason: 'Address company ownership and handoff.',
  },
  {
    pattern: /\bcoding your future\b/i,
    reason: 'Developer-style slogan is not suitable for a company owner.',
  },
  {
    pattern: /\bwe build your needs\b/i,
    reason: 'Unnatural internal phrasing; explain the result for the company.',
  },
  {
    pattern: /\byour future\b/i,
    reason: 'Generic future language should be tied to company outcomes.',
  },
  {
    pattern: /احتياجاتك الرقمية/,
    reason: 'Use company need language instead of broad personal digital needs.',
  },
  {
    pattern: /أهدافك/,
    reason: 'Tie goals to the company and the decision to contact.',
  },
  {
    pattern: /نجاحك/,
    reason: 'Avoid generic personal success copy; describe the company outcome.',
  },
];

function listFiles(dir) {
  const abs = path.join(root, dir);
  const out = [];

  for (const entry of readdirSync(abs)) {
    const full = path.join(abs, entry);
    const stat = statSync(full);

    if (stat.isDirectory()) {
      out.push(...listFiles(path.relative(root, full)));
      continue;
    }

    if (allowedExtensions.has(path.extname(full))) {
      out.push(full);
    }
  }

  return out;
}

const failures = [];

for (const file of scanRoots.flatMap(listFiles)) {
  const rel = path.relative(root, file).replaceAll(path.sep, '/');
  const content = readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    for (const rule of blocked) {
      if (rule.pattern.test(line)) {
        failures.push({
          file: rel,
          line: index + 1,
          text: line.trim(),
          reason: rule.reason,
        });
      }
    }
  });
}

if (failures.length) {
  console.error('Audience copy audit failed. Rewrite these strings for company owners / decision-makers:\n');
  for (const item of failures) {
    console.error(`- ${item.file}:${item.line}`);
    console.error(`  ${item.reason}`);
    console.error(`  ${item.text}`);
  }
  process.exit(1);
}

console.log('Audience copy audit passed: no blocked developer/internal phrasing found.');
