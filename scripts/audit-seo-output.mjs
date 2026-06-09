import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const expectedSiteHost = 'xn--2gbwk.site';
const blockedSiteHosts = ['www.xn--2gbwk.site', 'notaq.dev'];
const requiredMeta = [
  /<title>[^<]{12,}<\/title>/i,
  /<meta\s+name="description"\s+content="[^"]{50,}"/i,
  /<meta\s+name="robots"\s+content="(?:index,follow|noindex,nofollow)[^"]*"/i,
  /<meta\s+property="og:title"\s+content="[^"]{12,}"/i,
  /<meta\s+property="og:description"\s+content="[^"]{50,}"/i,
  /<meta\s+property="og:image"\s+content="https?:\/\/[^"]+"/i,
  /<meta\s+name="twitter:card"\s+content="summary_large_image"/i,
  /<link\s+rel="canonical"\s+href="https?:\/\/[^"]+"/i,
  /<link\s+rel="alternate"\s+hreflang="ar"\s+href="https?:\/\/[^"]+"/i,
  /<link\s+rel="alternate"\s+hreflang="en"\s+href="https?:\/\/[^"]+"/i,
  /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="https?:\/\/[^"]+"/i,
  /<script\s+type="application\/ld\+json"[^>]*>/i,
];

const importantRoutePatterns = [
  /^index\.html$/,
  /^en\/index\.html$/,
  /^services\/index\.html$/,
  /^en\/services\/index\.html$/,
  /^projects\/index\.html$/,
  /^en\/projects\/index\.html$/,
  /^about\/index\.html$/,
  /^en\/about\/index\.html$/,
  /^contact\/index\.html$/,
  /^en\/contact\/index\.html$/,
  /^blog\/index\.html$/,
  /^en\/blog\/index\.html$/,
  /^testimonials\/index\.html$/,
  /^en\/testimonials\/index\.html$/,
  /^pricing\/index\.html$/,
  /^en\/pricing\/index\.html$/,
  /^faq\/index\.html$/,
  /^en\/faq\/index\.html$/,
  /^sub-services\/index\.html$/,
  /^en\/sub-services\/index\.html$/,
  /^sub-pages-portal\/index\.html$/,
  /^en\/sub-pages-portal\/index\.html$/,
];

function walk(dir) {
  const out = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      out.push(...walk(fullPath));
    } else if (entry === 'index.html' || entry === '404.html') {
      out.push(fullPath);
    }
  }

  return out;
}

if (!existsSync(distDir)) {
  console.error('SEO audit failed: dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

const failures = [];
const files = walk(distDir);
const relFiles = files.map((file) => path.relative(distDir, file).replaceAll(path.sep, '/'));

for (const expectedPattern of importantRoutePatterns) {
  if (!relFiles.some((rel) => expectedPattern.test(rel))) {
    failures.push(`Missing prerendered route matching ${expectedPattern}`);
  }
}

for (const file of files) {
  const rel = path.relative(distDir, file).replaceAll(path.sep, '/');
  const html = readFileSync(file, 'utf8');
  const isNotFound = rel === '404.html';

  for (const pattern of requiredMeta) {
    if (!pattern.test(html)) {
      failures.push(`${rel}: missing required SEO pattern ${pattern}`);
    }
  }

  if (!isNotFound && /<meta\s+name="robots"\s+content="noindex/i.test(html)) {
    failures.push(`${rel}: important page must not be noindex`);
  }

  if (!isNotFound && /404\s*\|?\s*(?:Page not found|الصفحة غير موجودة)/i.test(html)) {
    failures.push(`${rel}: rendered 404 content on an indexable page`);
  }

  if (isNotFound && !/<meta\s+name="robots"\s+content="noindex,nofollow"/i.test(html)) {
    failures.push(`${rel}: 404 page must be noindex,nofollow`);
  }

  if (/Ù|Ø|ï¿½/.test(html)) {
    failures.push(`${rel}: contains unrepaired mojibake characters in HTML output`);
  }

  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (canonicalMatch?.[1] && !canonicalMatch[1].endsWith('/')) {
    failures.push(`${rel}: canonical URL should end with a trailing slash`);
  }

  if (canonicalMatch?.[1]) {
    const canonicalUrl = new URL(canonicalMatch[1]);
    if (canonicalUrl.hostname !== expectedSiteHost) {
      failures.push(`${rel}: canonical host should be ${expectedSiteHost}, found ${canonicalUrl.hostname}`);
    }
  }

  const ogUrlMatch = html.match(/<meta\s+property="og:url"\s+content="([^"]+)"/i);
  if (ogUrlMatch?.[1]) {
    const ogUrl = new URL(ogUrlMatch[1]);
    if (ogUrl.hostname !== expectedSiteHost) {
      failures.push(`${rel}: og:url host should be ${expectedSiteHost}, found ${ogUrl.hostname}`);
    }
  }

  for (const blockedHost of blockedSiteHosts) {
    if (html.includes(blockedHost)) {
      failures.push(`${rel}: contains blocked legacy host ${blockedHost}`);
    }
  }
}

for (const requiredFile of ['sitemap.xml', 'robots.txt']) {
  if (!existsSync(path.join(distDir, requiredFile))) {
    failures.push(`Missing ${requiredFile}`);
  }
}

for (const siteFile of ['sitemap.xml', 'robots.txt']) {
  const filePath = path.join(distDir, siteFile);
  if (!existsSync(filePath)) {
    continue;
  }

  const content = readFileSync(filePath, 'utf8');
  if (!content.includes(expectedSiteHost)) {
    failures.push(`${siteFile}: missing expected site host ${expectedSiteHost}`);
  }

  for (const blockedHost of blockedSiteHosts) {
    if (content.includes(blockedHost)) {
      failures.push(`${siteFile}: contains blocked legacy host ${blockedHost}`);
    }
  }
}

if (failures.length) {
  console.error('SEO audit failed:\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO audit passed. Checked ${files.length} prerendered HTML file(s).`);
