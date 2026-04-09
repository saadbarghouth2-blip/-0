import type { Language } from '../hooks/useLanguage';
import {
  DEFAULT_ROBOTS_POLICY,
  DEFAULT_SEO_IMAGE,
  DEFAULT_SEO_IMAGE_ALT,
  ORGANIZATION_INFO,
  SITE_DESCRIPTION_AR,
  SITE_DESCRIPTION_EN,
  SITE_NAME,
  SITE_NAME_AR,
  SITE_NAME_EN,
  SITE_TITLE_SUFFIX,
  SITE_URL,
} from './siteConfig';

export type JsonLdObject = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSeoInput {
  title: string;
  description: string;
  path?: string;
  lang?: Language;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  noindex?: boolean;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  author?: string;
  structuredData?: JsonLdObject | JsonLdObject[];
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

export interface PageSeoState extends PageSeoInput {
  lang: Language;
  title: string;
  canonicalUrl: string;
  imageUrl: string;
  imageAlt: string;
  locale: string;
  robots: string;
  alternateLinks: AlternateLink[];
  structuredDataList: JsonLdObject[];
}

const trailingSlashPattern = /\/+$/;
const protocolPattern = /^https?:\/\//i;

const localeMap: Record<Language, string> = {
  ar: 'ar_EG',
  en: 'en_US',
};

export const normalizePath = (path = '/') => {
  const pathname = path.trim() || '/';

  if (pathname === '/') {
    return pathname;
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(trailingSlashPattern, '');
};

const appendLanguageSearchParam = (path: string, lang: Language) => {
  if (lang !== 'en') {
    return path;
  }

  return `${path}${path.includes('?') ? '&' : '?'}lang=en`;
};

export const toAbsoluteUrl = (value: string) => {
  if (protocolPattern.test(value)) {
    return value;
  }

  const normalizedValue = value.startsWith('/') ? value : `/${value}`;
  return new URL(normalizedValue, `${SITE_URL}/`).toString();
};

export const getLocalizedAbsoluteUrl = (path: string, lang: Language) =>
  toAbsoluteUrl(appendLanguageSearchParam(normalizePath(path), lang));

export const getSiteDescription = (lang: Language) =>
  lang === 'ar' ? SITE_DESCRIPTION_AR : SITE_DESCRIPTION_EN;

const withTitleSuffix = (title: string) => {
  if (title.includes(SITE_NAME_AR) || title.includes(SITE_NAME_EN)) {
    return title;
  }

  return `${title} | ${SITE_TITLE_SUFFIX}`;
};

export const toStructuredDataArray = (
  structuredData?: JsonLdObject | JsonLdObject[],
) => {
  if (!structuredData) {
    return [];
  }

  return Array.isArray(structuredData) ? structuredData : [structuredData];
};

export const buildPageSeoState = (input: PageSeoInput): PageSeoState => {
  const lang =
    input.lang ??
    (typeof document !== 'undefined' && document.documentElement.lang.startsWith('en')
      ? 'en'
      : 'ar');
  const normalizedPath = normalizePath(
    input.path ?? (typeof window !== 'undefined' ? window.location.pathname : '/'),
  );

  return {
    ...input,
    lang,
    path: normalizedPath,
    title: withTitleSuffix(input.title),
    canonicalUrl: getLocalizedAbsoluteUrl(normalizedPath, lang),
    imageUrl: toAbsoluteUrl(input.image ?? DEFAULT_SEO_IMAGE),
    imageAlt: input.imageAlt ?? DEFAULT_SEO_IMAGE_ALT,
    locale: localeMap[lang],
    robots: input.noindex ? 'noindex,nofollow' : DEFAULT_ROBOTS_POLICY,
    alternateLinks: [
      { hreflang: 'ar', href: getLocalizedAbsoluteUrl(normalizedPath, 'ar') },
      { hreflang: 'en', href: getLocalizedAbsoluteUrl(normalizedPath, 'en') },
      { hreflang: 'x-default', href: getLocalizedAbsoluteUrl(normalizedPath, 'ar') },
    ],
    structuredDataList: toStructuredDataArray(input.structuredData),
  };
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const renderMetaTag = (attribute: 'name' | 'property', name: string, content: string) =>
  `<meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}" />`;

const renderLinkTag = (rel: string, href: string, hreflang?: string) =>
  hreflang
    ? `<link rel="${escapeHtml(rel)}" hreflang="${escapeHtml(hreflang)}" href="${escapeHtml(href)}" />`
    : `<link rel="${escapeHtml(rel)}" href="${escapeHtml(href)}" />`;

const serializeJsonLd = (value: JsonLdObject) =>
  JSON.stringify(value).replace(/</g, '\\u003c');

export const renderSeoBlock = (input: PageSeoInput) => {
  const state = buildPageSeoState(input);
  const tags = [
    `<title>${escapeHtml(state.title)}</title>`,
    renderMetaTag('name', 'description', state.description),
    renderMetaTag('name', 'robots', state.robots),
    renderMetaTag('name', 'author', state.author ?? ORGANIZATION_INFO.founder),
    renderMetaTag('name', 'language', state.lang),
    renderMetaTag('property', 'og:locale', state.locale),
    renderMetaTag('property', 'og:site_name', SITE_NAME),
    renderMetaTag('property', 'og:url', state.canonicalUrl),
    renderMetaTag('property', 'og:title', state.title),
    renderMetaTag('property', 'og:description', state.description),
    renderMetaTag('property', 'og:type', state.type ?? 'website'),
    renderMetaTag('property', 'og:image', state.imageUrl),
    renderMetaTag('property', 'og:image:alt', state.imageAlt),
    renderMetaTag('name', 'twitter:card', 'summary_large_image'),
    renderMetaTag('name', 'twitter:title', state.title),
    renderMetaTag('name', 'twitter:description', state.description),
    renderMetaTag('name', 'twitter:image', state.imageUrl),
    renderLinkTag('canonical', state.canonicalUrl),
    ...state.alternateLinks.map(
      (link) =>
        `<link rel="alternate" hreflang="${escapeHtml(link.hreflang)}" href="${escapeHtml(link.href)}" data-seo-generated="true" />`,
    ),
  ];

  if (state.keywords && state.keywords.length > 0) {
    tags.splice(2, 0, renderMetaTag('name', 'keywords', state.keywords.join(', ')));
  }

  if (state.publishedTime) {
    tags.push(renderMetaTag('property', 'article:published_time', state.publishedTime));
  }

  if (state.modifiedTime) {
    tags.push(renderMetaTag('property', 'article:modified_time', state.modifiedTime));
  }

  if (state.section) {
    tags.push(renderMetaTag('property', 'article:section', state.section));
  }

  if (state.tags && state.tags.length > 0) {
    state.tags.forEach((tag) => {
      tags.push(renderMetaTag('property', 'article:tag', tag));
    });
  }

  state.structuredDataList.forEach((entry) => {
    tags.push(
      `<script type="application/ld+json" data-seo-script="structured-data">${serializeJsonLd(entry)}</script>`,
    );
  });

  return tags.join('\n    ');
};

export const buildOrganizationSchema = (lang: Language): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}#organization`,
  name: lang === 'ar' ? SITE_NAME_AR : SITE_NAME_EN,
  alternateName: lang === 'ar' ? SITE_NAME_EN : SITE_NAME_AR,
  url: SITE_URL,
  description: getSiteDescription(lang),
  email: ORGANIZATION_INFO.email,
  telephone: ORGANIZATION_INFO.phone,
  logo: toAbsoluteUrl(DEFAULT_SEO_IMAGE),
  image: toAbsoluteUrl(DEFAULT_SEO_IMAGE),
  founder: {
    '@type': 'Person',
    name: ORGANIZATION_INFO.founder,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: ORGANIZATION_INFO.city,
    addressCountry: ORGANIZATION_INFO.country,
  },
  areaServed: ['Egypt', 'Saudi Arabia', 'United Arab Emirates', 'Middle East', 'North Africa'],
  knowsAbout: [
    'Web design',
    'Web development',
    'Search engine optimization',
    'Landing pages',
    'Corporate websites',
    'E-commerce',
  ],
  sameAs: [...ORGANIZATION_INFO.sameAs],
});

export const buildWebsiteSchema = (lang: Language): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  name: lang === 'ar' ? SITE_NAME_AR : SITE_NAME_EN,
  alternateName: SITE_NAME,
  url: SITE_URL,
  inLanguage: lang,
  publisher: {
    '@id': `${SITE_URL}#organization`,
  },
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(normalizePath(item.path)),
  })),
});
