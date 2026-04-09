import { useEffect } from 'react';
import { buildPageSeoState, type PageSeoInput } from '../lib/seo';

const setMetaTag = (
  selector: string,
  attribute: 'name' | 'property',
  value: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const removeElements = (selector: string) => {
  document.head.querySelectorAll(selector).forEach((element) => element.remove());
};

const setLinkTag = (
  selector: string,
  attributes: Record<string, string>,
) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
};

export const usePageMetadata = (input: PageSeoInput) => {
  useEffect(() => {
    const state = buildPageSeoState(input);

    document.title = state.title;

    setMetaTag('meta[name="description"]', 'name', 'description', state.description);
    setMetaTag('meta[name="robots"]', 'name', 'robots', state.robots);
    setMetaTag('meta[name="author"]', 'name', 'author', state.author ?? 'Saad Elsayed Barghouth');
    setMetaTag('meta[name="language"]', 'name', 'language', state.lang);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', state.locale);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'نُطق | Notaq');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', state.canonicalUrl);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', state.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', state.description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', state.type ?? 'website');
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', state.imageUrl);
    setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', state.imageAlt);
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', state.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', state.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', state.imageUrl);

    if (state.keywords && state.keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', state.keywords.join(', '));
    } else {
      removeElements('meta[name="keywords"]');
    }

    if (state.publishedTime) {
      setMetaTag(
        'meta[property="article:published_time"]',
        'property',
        'article:published_time',
        state.publishedTime,
      );
    } else {
      removeElements('meta[property="article:published_time"]');
    }

    if (state.modifiedTime) {
      setMetaTag(
        'meta[property="article:modified_time"]',
        'property',
        'article:modified_time',
        state.modifiedTime,
      );
    } else {
      removeElements('meta[property="article:modified_time"]');
    }

    if (state.section) {
      setMetaTag('meta[property="article:section"]', 'property', 'article:section', state.section);
    } else {
      removeElements('meta[property="article:section"]');
    }

    removeElements('meta[property="article:tag"][data-seo-generated="true"]');
    state.tags?.forEach((tag) => {
      const element = document.createElement('meta');
      element.setAttribute('property', 'article:tag');
      element.setAttribute('content', tag);
      element.setAttribute('data-seo-generated', 'true');
      document.head.appendChild(element);
    });

    setLinkTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: state.canonicalUrl,
    });

    removeElements('link[rel="alternate"][data-seo-generated="true"]');
    state.alternateLinks.forEach((link) => {
      const element = document.createElement('link');
      element.setAttribute('rel', 'alternate');
      element.setAttribute('hreflang', link.hreflang);
      element.setAttribute('href', link.href);
      element.setAttribute('data-seo-generated', 'true');
      document.head.appendChild(element);
    });

    removeElements('script[type="application/ld+json"][data-seo-script="structured-data"]');
    state.structuredDataList.forEach((entry) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-script', 'structured-data');
      script.textContent = JSON.stringify(entry).replace(/</g, '\\u003c');
      document.head.appendChild(script);
    });
  }, [
    input.author,
    input.description,
    input.image,
    input.imageAlt,
    JSON.stringify(input.keywords ?? []),
    input.lang,
    input.modifiedTime,
    input.noindex,
    input.path,
    input.publishedTime,
    input.section,
    JSON.stringify(input.structuredData ?? []),
    JSON.stringify(input.tags ?? []),
    input.title,
    input.type,
  ]);
};
