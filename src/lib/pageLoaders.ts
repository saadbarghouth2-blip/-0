import { lazy } from 'react';
import type { ComponentType } from 'react';

type PageModule = { default: ComponentType };
type PageLoader = () => Promise<PageModule>;

const pageLoaders = {
  home: () => import('../pages/HomePage'),
  about: () => import('../pages/AboutPage'),
  services: () => import('../pages/ServicesPage'),
  projects: () => import('../pages/ProjectsPage'),
  projectDetail: () => import('../pages/ProjectDetailPage'),
  blog: () => import('../pages/BlogPage'),
  blogDetail: () => import('../pages/BlogDetailPage'),
  testimonials: () => import('../pages/TestimonialsPage'),
  contact: () => import('../pages/ContactPage'),
} satisfies Record<string, PageLoader>;

const createLazyPage = (loader: PageLoader) => lazy(loader);

export const HomePage = createLazyPage(pageLoaders.home);
export const AboutPage = createLazyPage(pageLoaders.about);
export const ServicesPage = createLazyPage(pageLoaders.services);
export const ProjectsPage = createLazyPage(pageLoaders.projects);
export const ProjectDetailPage = createLazyPage(pageLoaders.projectDetail);
export const BlogPage = createLazyPage(pageLoaders.blog);
export const BlogDetailPage = createLazyPage(pageLoaders.blogDetail);
export const TestimonialsPage = createLazyPage(pageLoaders.testimonials);
export const ContactPage = createLazyPage(pageLoaders.contact);

const preloadedLoaders = new Map<PageLoader, Promise<void>>();

const normalizePath = (path: string) => {
  const pathname = path.split('#')[0]?.split('?')[0]?.trim() || '/';

  if (pathname === '/') {
    return pathname;
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const routeMatchers: Array<{ match: RegExp; loaders: PageLoader[] }> = [
  { match: /^\/$/, loaders: [pageLoaders.home] },
  { match: /^\/about$/, loaders: [pageLoaders.about] },
  { match: /^\/services$/, loaders: [pageLoaders.services] },
  { match: /^\/projects$/, loaders: [pageLoaders.projects] },
  { match: /^\/projects\/[^/]+$/, loaders: [pageLoaders.projectDetail] },
  { match: /^\/blog$/, loaders: [pageLoaders.blog] },
  { match: /^\/blog\/[^/]+$/, loaders: [pageLoaders.blogDetail] },
  { match: /^\/testimonials$/, loaders: [pageLoaders.testimonials] },
  { match: /^\/contact$/, loaders: [pageLoaders.contact] },
];

const preloadLoader = (loader: PageLoader) => {
  const cachedPromise = preloadedLoaders.get(loader);

  if (cachedPromise) {
    return cachedPromise;
  }

  const loaderPromise = loader()
    .then(() => undefined)
    .catch(() => {
      preloadedLoaders.delete(loader);
    });

  preloadedLoaders.set(loader, loaderPromise);

  return loaderPromise;
};

export const preloadPath = (path: string) => {
  const pathname = normalizePath(path);
  const matchedRoute = routeMatchers.find((route) => route.match.test(pathname));

  if (!matchedRoute) {
    return Promise.resolve();
  }

  return Promise.all(matchedRoute.loaders.map(preloadLoader)).then(() => undefined);
};
