import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const serverEntryUrl = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href;

const SEO_START = '<!--app-seo:start-->';
const SEO_END = '<!--app-seo:end-->';
const englishPrefix = '/en';
const trimTrailingSlash = (value) => value.replace(/\/+$/, '');

const toOutputFilePath = (routePath) => {
  if (routePath === '/') {
    return path.join(distDir, 'index.html');
  }

  const segments = routePath.split('/').filter(Boolean);
  return path.join(distDir, ...segments, 'index.html');
};

const normalizePath = (routePath) => {
  if (!routePath || routePath === '/') {
    return '/';
  }

  const withLeadingSlash = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return withLeadingSlash.replace(/\/+$/, '') || '/';
};

const stripLanguagePrefix = (routePath) => {
  const normalizedPath = normalizePath(routePath);

  if (normalizedPath === englishPrefix) {
    return '/';
  }

  if (normalizedPath.startsWith(`${englishPrefix}/`)) {
    return normalizedPath.slice(englishPrefix.length) || '/';
  }

  return normalizedPath;
};

const localizePath = (routePath, lang) => {
  const basePath = stripLanguagePrefix(routePath);

  if (lang === 'en') {
    return basePath === '/' ? englishPrefix : `${englishPrefix}${basePath}`;
  }

  return basePath;
};

const toAbsoluteUrl = (siteUrl, routePath) => {
  const normalizedRoute = normalizePath(routePath);
  const pathname = normalizedRoute === '/' ? '/' : `${normalizedRoute}/`;

  return `${trimTrailingSlash(siteUrl)}${pathname}`;
};

const replaceSeoBlock = (template, seoMarkup) => {
  const startIndex = template.indexOf(SEO_START);
  const endIndex = template.indexOf(SEO_END);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('SEO markers were not found in index.html.');
  }

  return `${template.slice(0, startIndex + SEO_START.length)}
    ${seoMarkup}
    ${template.slice(endIndex)}`;
};

const injectRenderedApp = (template, appMarkup) =>
  template.replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`);

const replaceDocumentLanguage = (template, lang) =>
  template.replace(
    /<html[^>]*lang="[^"]+"[^>]*dir="[^"]+"[^>]*>/i,
    `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`,
  );

const formatDate = (value) => new Date(value).toISOString().slice(0, 10);

const renderSitemap = (siteUrl, routes) => {
  const entries = routes
    .map((route) => {
      const loc = toAbsoluteUrl(siteUrl, route.path);
      const alternateAr = toAbsoluteUrl(siteUrl, localizePath(route.path, 'ar'));
      const alternateEn = toAbsoluteUrl(siteUrl, localizePath(route.path, 'en'));
      const lastModified = formatDate(route.lastModified ?? new Date().toISOString());

      return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${alternateAr}" />
    <xhtml:link rel="alternate" hreflang="en" href="${alternateEn}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${alternateAr}" />
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
>
${entries}
</urlset>
`;
};

const renderRobots = (siteUrl) => `User-agent: *
Allow: /

Sitemap: ${trimTrailingSlash(siteUrl)}/sitemap.xml
Host: ${trimTrailingSlash(siteUrl).replace(/^https?:\/\//, '')}
`;

const main = async () => {
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
  const { SITE_URL, prerenderRoutes, render, renderSeoBlock } = await import(serverEntryUrl);

  for (const route of prerenderRoutes) {
    const { app, seo } = await render(route.path, route.lang);
    const html = injectRenderedApp(
      replaceDocumentLanguage(replaceSeoBlock(template, renderSeoBlock(seo)), route.lang),
      app,
    );
    const outputFilePath = toOutputFilePath(route.path);

    await mkdir(path.dirname(outputFilePath), { recursive: true });
    await writeFile(outputFilePath, html, 'utf8');
  }

  const notFound = await render('/404', 'ar');
  const notFoundHtml = injectRenderedApp(
    replaceDocumentLanguage(replaceSeoBlock(template, renderSeoBlock(notFound.seo)), 'ar'),
    notFound.app,
  );

  await writeFile(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
  await writeFile(path.join(distDir, 'sitemap.xml'), renderSitemap(SITE_URL, prerenderRoutes), 'utf8');
  await writeFile(path.join(distDir, 'robots.txt'), renderRobots(SITE_URL), 'utf8');
  await rm(path.join(distDir, 'server'), { recursive: true, force: true });
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
