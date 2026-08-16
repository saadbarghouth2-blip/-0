import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const failures = [];

function walk(dir, matcher) {
  const results = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      results.push(...walk(fullPath, matcher));
    } else if (matcher(entry)) {
      results.push(fullPath);
    }
  }

  return results;
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isExternalOrNonNavigational(href) {
  return /^(https?:|mailto:|tel:|sms:|whatsapp:|javascript:|data:)/i.test(href) || href.startsWith('#');
}

function internalTargetExists(href, sourceFile) {
  const cleanHref = safeDecode(href.split('#')[0].split('?')[0]);

  if (!cleanHref || cleanHref === '/') {
    return existsSync(path.join(distDir, 'index.html'));
  }

  const target = cleanHref.startsWith('/')
    ? path.join(distDir, cleanHref)
    : path.resolve(path.dirname(sourceFile), cleanHref);

  const candidates = [target, path.join(target, 'index.html')];

  if (!path.extname(target)) {
    candidates.push(`${target}.html`);
  }

  return candidates.some((candidate) => existsSync(candidate));
}

if (!existsSync(distDir)) {
  console.error('Internal link audit failed: dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = walk(distDir, (entry) => entry.endsWith('.html'));

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const relFile = path.relative(distDir, file).replaceAll(path.sep, '/');
  const hrefMatches = html.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi);

  for (const match of hrefMatches) {
    const href = match[1]?.trim();

    if (!href || isExternalOrNonNavigational(href)) {
      continue;
    }

    if (!internalTargetExists(href, file)) {
      failures.push(`${relFile}: broken internal href "${href}"`);
    }
  }
}

if (failures.length) {
  console.error('Internal link audit failed:\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Internal link audit passed. Checked ${htmlFiles.length} HTML file(s).`);
