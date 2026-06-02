import { lazy } from 'react';
import type { ComponentType } from 'react';
import { stripLanguagePrefix } from './localizedPath';

type PageModule = { default: ComponentType };
type PageLoader = () => Promise<PageModule>;

const pageLoaders = {
  home: () => import('../pages/HomePage'),
  about: () => import('../pages/AboutPage'),
  aboutEnhanced: () => import('../pages/EnhancedAboutPageComponent'),
  services: () => import('../pages/ServicesPage'),
  serviceDetailEnhanced: () => import('../pages/ServiceDetailEnhancedPage'),
  projects: () => import('../pages/ProjectsPage'),
  projectDetail: () => import('../pages/ProjectDetailPage'),
  projectDetailEnhanced: () => import('../pages/EnhancedProjectDetailPage'),
  detail: () => import('../pages/DetailPage'),
  blog: () => import('../pages/BlogPage'),
  blogCategory: () => import('../pages/BlogCategoryPage'),
  blogDetail: () => import('../pages/BlogDetailPage'),
  blogDetailEnhanced: () => import('../pages/EnhancedBlogDetailPage'),
  testimonials: () => import('../pages/TestimonialsPage'),
  contact: () => import('../pages/ContactPage'),
  contactBrief: () => import('../pages/ContactBriefPage'),
  caseStudies: () => import('../pages/CaseStudiesPage'),
  stats: () => import('../pages/StatsDashboardPage'),
  gallery: () => import('../pages/GalleryPage'),
  pricing: () => import('../pages/PricingPage'),
  faq: () => import('../pages/FAQPage'),
  team: () => import('../pages/TeamPage'),
  process: () => import('../pages/ProcessPage'),
  careers: () => import('../pages/CareersPage'),
} satisfies Record<string, PageLoader>;

const createLazyPage = (loader: PageLoader) => lazy(loader);

export const HomePage = createLazyPage(pageLoaders.home);
export const AboutPage = createLazyPage(pageLoaders.about);
export const EnhancedAboutPageComponent = createLazyPage(pageLoaders.aboutEnhanced);
export const ServicesPage = createLazyPage(pageLoaders.services);
export const ServiceDetailEnhancedPage = createLazyPage(pageLoaders.serviceDetailEnhanced);
export const ProjectsPage = createLazyPage(pageLoaders.projects);
export const ProjectDetailPage = createLazyPage(pageLoaders.projectDetail);
export const EnhancedProjectDetailPage = createLazyPage(pageLoaders.projectDetailEnhanced);
export const DetailPage = createLazyPage(pageLoaders.detail);
export const BlogPage = createLazyPage(pageLoaders.blog);
export const BlogCategoryPage = createLazyPage(pageLoaders.blogCategory);
export const BlogDetailPage = createLazyPage(pageLoaders.blogDetail);
export const EnhancedBlogDetailPage = createLazyPage(pageLoaders.blogDetailEnhanced);
export const TestimonialsPage = createLazyPage(pageLoaders.testimonials);
export const ContactPage = createLazyPage(pageLoaders.contact);
export const ContactBriefPage = createLazyPage(pageLoaders.contactBrief);
export const CaseStudiesPage = createLazyPage(pageLoaders.caseStudies);
export const StatsDashboardPage = createLazyPage(pageLoaders.stats);
export const GalleryPage = createLazyPage(pageLoaders.gallery);
export const PricingPage = createLazyPage(pageLoaders.pricing);
export const FAQPage = createLazyPage(pageLoaders.faq);
export const TeamPage = createLazyPage(pageLoaders.team);
export const ProcessPage = createLazyPage(pageLoaders.process);
export const CareersPage = createLazyPage(pageLoaders.careers);

const preloadedLoaders = new Map<PageLoader, Promise<void>>();

const normalizePath = (path: string) => {
  const pathname = path.split('#')[0]?.split('?')[0]?.trim() || '/';

  if (pathname === '/') {
    return pathname;
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const routeMatchers: Array<{ match: RegExp; loaders: PageLoader[] }> = [
  { match: /^\/$/,loaders: [pageLoaders.home] },
  { match: /^\/home\/[^/]+$/, loaders: [pageLoaders.detail] },
  { match: /^\/about$/, loaders: [pageLoaders.about, pageLoaders.aboutEnhanced] },
  { match: /^\/about\/[^/]+$/, loaders: [pageLoaders.detail] },
  { match: /^\/services$/, loaders: [pageLoaders.services] },
  { match: /^\/services\/[^/]+$/, loaders: [pageLoaders.serviceDetailEnhanced] },
  { match: /^\/projects$/, loaders: [pageLoaders.projects] },
  { match: /^\/projects\/[^/]+$/, loaders: [pageLoaders.projectDetail, pageLoaders.projectDetailEnhanced] },
  { match: /^\/blog$/, loaders: [pageLoaders.blog] },
  { match: /^\/blog\/category\/[^/]+$/, loaders: [pageLoaders.blogCategory] },
  { match: /^\/blog\/[^/]+$/, loaders: [pageLoaders.blogDetail, pageLoaders.blogDetailEnhanced] },
  { match: /^\/testimonials$/, loaders: [pageLoaders.testimonials] },
  { match: /^\/testimonials\/[^/]+$/, loaders: [pageLoaders.detail] },
  { match: /^\/contact$/, loaders: [pageLoaders.contact] },
  { match: /^\/contact\/brief$/, loaders: [pageLoaders.contactBrief] },
  { match: /^\/contact\/[^/]+$/, loaders: [pageLoaders.detail] },
  { match: /^\/case-studies$/, loaders: [pageLoaders.caseStudies] },
  { match: /^\/stats$/, loaders: [pageLoaders.stats] },
  { match: /^\/gallery$/, loaders: [pageLoaders.gallery] },
  { match: /^\/pricing$/, loaders: [pageLoaders.pricing] },
  { match: /^\/faq$/, loaders: [pageLoaders.faq] },
  { match: /^\/team$/, loaders: [pageLoaders.team] },
  { match: /^\/process$/, loaders: [pageLoaders.process] },
  { match: /^\/careers$/, loaders: [pageLoaders.careers] },
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
  const pathname = stripLanguagePrefix(normalizePath(path));
  const matchedRoute = routeMatchers.find((route) => route.match.test(pathname));

  if (!matchedRoute) {
    return Promise.resolve();
  }

  return Promise.all(matchedRoute.loaders.map(preloadLoader)).then(() => undefined);
};
