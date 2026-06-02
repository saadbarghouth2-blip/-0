import type { Language } from '../hooks/useLanguage';

const trailingSlashPattern = /\/+$/;
const englishPrefix = '/en';

const splitPathParts = (value: string) => {
  const [withoutHash, hashPart = ''] = value.split('#');
  const [pathnamePart, searchPart = ''] = withoutHash.split('?');

  return {
    pathname: pathnamePart || '/',
    search: searchPart ? `?${searchPart}` : '',
    hash: hashPart ? `#${hashPart}` : '',
  };
};

const cleanSearch = (search: string) => {
  const searchParams = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);

  searchParams.delete('lang');

  const nextSearch = searchParams.toString();
  return nextSearch ? `?${nextSearch}` : '';
};

export const normalizeAppPath = (path = '/') => {
  const { pathname } = splitPathParts(path.trim() || '/');

  if (pathname === '/' || pathname === '') {
    return '/';
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const normalizedPath = withLeadingSlash.replace(trailingSlashPattern, '');

  return normalizedPath || '/';
};

export const getPathLanguage = (path: string): Language => {
  const { pathname, search } = splitPathParts(path);
  const normalizedPath = normalizeAppPath(pathname);

  if (normalizedPath === englishPrefix || normalizedPath.startsWith(`${englishPrefix}/`)) {
    return 'en';
  }

  const searchParams = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);

  return searchParams.get('lang') === 'en' ? 'en' : 'ar';
};

export const stripLanguagePrefix = (path: string) => {
  const normalizedPath = normalizeAppPath(path);

  if (normalizedPath === englishPrefix) {
    return '/';
  }

  if (normalizedPath.startsWith(`${englishPrefix}/`)) {
    return normalizedPath.slice(englishPrefix.length) || '/';
  }

  return normalizedPath;
};

export const getLocalizedPath = (path: string, lang: Language) => {
  const { pathname, search, hash } = splitPathParts(path);
  const basePath = stripLanguagePrefix(pathname);
  const suffix = `${cleanSearch(search)}${hash}`;

  if (lang === 'en') {
    return `${basePath === '/' ? englishPrefix : `${englishPrefix}${basePath}`}${suffix}`;
  }

  return `${basePath}${suffix}`;
};

export const buildLocalizedUrlPath = (value: string, lang: Language) => {
  const { pathname, search, hash } = splitPathParts(value);
  const localizedPath = getLocalizedPath(pathname, lang);

  return `${localizedPath}${cleanSearch(search)}${hash}`;
};
