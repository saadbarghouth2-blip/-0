import { blogPosts, getBlogPostBySlug, type BlogPost } from '../data/blog';
import {
  findProjectBySlug,
  portfolioProfile,
  projects,
  services,
  type PortfolioProject,
} from '../data/portfolio';
import type { Language } from '../hooks/useLanguage';
import { SITE_URL } from './siteConfig';
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  getLocalizedAbsoluteUrl,
  normalizePath,
  toAbsoluteUrl,
  type JsonLdObject,
  type PageSeoInput,
} from './seo';

export interface PrerenderRoute {
  path: string;
  priority: number;
  changeFrequency: 'daily' | 'weekly' | 'monthly';
  lastModified?: string;
}

const stripSearchAndHash = (path: string) => path.split('#')[0]?.split('?')[0] ?? path;

const createWebPageSchema = (
  path: string,
  lang: Language,
  name: string,
  description: string,
  pageType: string,
) => ({
  '@context': 'https://schema.org',
  '@type': pageType,
  name,
  description,
  url: getLocalizedAbsoluteUrl(path, lang),
  inLanguage: lang,
  isPartOf: {
    '@id': `${SITE_URL}#website`,
  },
  about: {
    '@id': `${SITE_URL}#organization`,
  },
});

const createListSchema = (
  name: string,
  items: Array<{ name: string; url: string; description?: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: item.url,
    ...(item.description ? { description: item.description } : {}),
  })),
});

const createHomeSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic
    ? 'تصميم مواقع شركات ومتاجر إلكترونية في مصر'
    : 'Web Design and Development Agency in Cairo';
  const description = isArabic
    ? 'نُطق تبني مواقع شركات ومتاجر إلكترونية وصفحات خدمات سريعة وواضحة ومهيأة لمحركات البحث لمساعدة العلامات التجارية على الظهور وكسب العملاء.'
    : 'Notaq builds fast, clear, SEO-ready company websites, e-commerce experiences, and service pages that help brands show up and win customers.';

  return {
    title,
    description,
    path: '/',
    lang,
    keywords: isArabic
      ? [
          'تصميم مواقع',
          'تطوير مواقع شركات',
          'متاجر إلكترونية',
          'SEO',
          'وكالة رقمية',
          'نطق',
        ]
      : [
          'web design agency',
          'website development',
          'e-commerce development',
          'SEO-ready websites',
          'digital agency Cairo',
          'Notaq',
        ],
    structuredData: [
      buildOrganizationSchema(lang),
      buildWebsiteSchema(lang),
      createWebPageSchema('/', lang, title, description, 'WebPage'),
      createListSchema(
        isArabic ? 'خدمات نُطق' : 'Notaq services',
        services.map((service) => ({
          name: isArabic ? service.title : service.englishTitle ?? service.title,
          url: getLocalizedAbsoluteUrl('/services', lang),
          description: isArabic
            ? service.description
            : service.englishDescription ?? service.description,
        })),
      ),
    ],
  };
};

const createAboutSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'من نحن | وكالة نُطق' : 'About Notaq';
  const description = isArabic
    ? 'تعرف على نُطق، وكالة رقمية من القاهرة متخصصة في تصميم مواقع الشركات والمتاجر الإلكترونية والواجهات التي تبني الثقة وتزيد التحويل.'
    : 'Meet Notaq, a Cairo-based digital agency focused on company websites, e-commerce experiences, and interfaces built for trust and conversion.';

  return {
    title,
    description,
    path: '/about',
    lang,
    keywords: isArabic
      ? ['من نحن', 'وكالة تصميم مواقع', 'نُطق', 'تطوير مواقع', 'وكالة رقمية القاهرة']
      : ['about Notaq', 'web agency Cairo', 'digital studio', 'website design team'],
    structuredData: [
      createWebPageSchema('/about', lang, title, description, 'AboutPage'),
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'من نحن' : 'About', path: '/about' },
      ]),
    ],
  };
};

const createServicesSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'خدمات تصميم المواقع وتطوير الواجهات' : 'Web Design and Development Services';
  const description = isArabic
    ? 'اكتشف خدمات نُطق في تصميم مواقع الشركات، المتاجر الإلكترونية، الواجهات التفاعلية، والأنظمة الرقمية السريعة والمهيأة لمحركات البحث.'
    : 'Explore Notaq services in company websites, e-commerce, interactive interfaces, and fast SEO-ready digital systems.';

  return {
    title,
    description,
    path: '/services',
    lang,
    keywords: isArabic
      ? [
          'خدمات تصميم مواقع',
          'تطوير واجهات',
          'متاجر إلكترونية',
          'صفحات هبوط',
          'SEO',
        ]
      : ['web design services', 'landing pages', 'e-commerce services', 'SEO-ready development'],
    structuredData: [
      createWebPageSchema('/services', lang, title, description, 'CollectionPage'),
      createListSchema(
        isArabic ? 'خدمات نُطق الرقمية' : 'Notaq digital services',
        services.map((service) => ({
          name: isArabic ? service.title : service.englishTitle ?? service.title,
          url: getLocalizedAbsoluteUrl('/services', lang),
          description: isArabic
            ? service.description
            : service.englishDescription ?? service.description,
        })),
      ),
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'الخدمات' : 'Services', path: '/services' },
      ]),
    ],
  };
};

const createProjectsSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'أعمال نُطق | مشاريع مواقع ومتاجر إلكترونية' : 'Notaq Work and Case Studies';
  const description = isArabic
    ? 'تصفح أعمال نُطق ودراسات الحالة لمواقع الشركات والمتاجر الإلكترونية والمنتجات الرقمية المنفذة لعملاء من قطاعات مختلفة.'
    : 'Browse Notaq work and case studies across company websites, e-commerce, and digital products delivered for different industries.';

  return {
    title,
    description,
    path: '/projects',
    lang,
    keywords: isArabic
      ? ['أعمال نطق', 'دراسة حالة', 'مشاريع مواقع', 'متاجر إلكترونية', 'نماذج أعمال']
      : ['case studies', 'portfolio', 'web projects', 'e-commerce projects', 'Notaq work'],
    structuredData: [
      createWebPageSchema('/projects', lang, title, description, 'CollectionPage'),
      createListSchema(
        isArabic ? 'مشاريع نُطق' : 'Notaq projects',
        projects.map((project) => ({
          name: isArabic ? project.title : project.englishTitle ?? project.title,
          url: getLocalizedAbsoluteUrl(`/projects/${project.slug}`, lang),
          description: isArabic
            ? project.excerpt
            : project.englishExcerpt ?? project.excerpt,
        })),
      ),
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'الأعمال' : 'Projects', path: '/projects' },
      ]),
    ],
  };
};

const createBlogSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'مدونة نُطق | مقالات تصميم المواقع وSEO' : 'Notaq Blog on Web Design and SEO';
  const description = isArabic
    ? 'مدونة نُطق تقدم مقالات عملية عن تصميم المواقع، تجربة المستخدم، التجارة الإلكترونية، وتحسين الظهور في محركات البحث.'
    : 'The Notaq blog publishes practical articles on web design, user experience, e-commerce, and search visibility.';

  return {
    title,
    description,
    path: '/blog',
    lang,
    keywords: isArabic
      ? ['مدونة تصميم مواقع', 'مقالات SEO', 'تجربة المستخدم', 'التجارة الإلكترونية', 'نطق']
      : ['web design blog', 'SEO articles', 'UX blog', 'e-commerce content', 'Notaq blog'],
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: title,
        description,
        url: getLocalizedAbsoluteUrl('/blog', lang),
        inLanguage: lang,
        publisher: {
          '@id': `${SITE_URL}#organization`,
        },
      },
      createListSchema(
        isArabic ? 'مقالات نُطق' : 'Notaq articles',
        blogPosts.map((post) => ({
          name: isArabic ? post.titleAr : post.titleEn,
          url: getLocalizedAbsoluteUrl(`/blog/${post.slug}`, lang),
          description: isArabic ? post.excerptAr : post.excerptEn,
        })),
      ),
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'المدونة' : 'Blog', path: '/blog' },
      ]),
    ],
  };
};

const createTestimonialsSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'آراء العملاء وتجارب العمل مع نُطق' : 'Client Testimonials and Results';
  const description = isArabic
    ? 'اقرأ آراء العملاء عن تجربة العمل مع نُطق وكيف ساعدت المواقع والواجهات الجديدة على رفع الثقة وتحسين عرض الخدمات.'
    : 'Read how clients describe their work with Notaq and how the new websites and interfaces improved trust and presentation.';

  return {
    title,
    description,
    path: '/testimonials',
    lang,
    keywords: isArabic
      ? ['آراء العملاء', 'تقييمات العملاء', 'نتائج المشاريع', 'نطق']
      : ['client testimonials', 'customer reviews', 'project results', 'Notaq feedback'],
    structuredData: [
      createWebPageSchema('/testimonials', lang, title, description, 'CollectionPage'),
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'آراء العملاء' : 'Testimonials', path: '/testimonials' },
      ]),
    ],
  };
};

const createContactSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'تواصل مع نُطق وابدأ مشروع موقعك' : 'Contact Notaq and Start Your Project';
  const description = isArabic
    ? 'تواصل مع نُطق لبدء تصميم موقع شركتك أو متجرك الإلكتروني أو صفحة الخدمة الخاصة بك، واحصل على استشارة أولية واضحة.'
    : 'Contact Notaq to start your company website, e-commerce, or service page project and get a clear first consultation.';

  return {
    title,
    description,
    path: '/contact',
    lang,
    keywords: isArabic
      ? ['تواصل معنا', 'ابدأ مشروعك', 'تصميم موقع شركة', 'نطق']
      : ['contact Notaq', 'start your project', 'website consultation', 'digital agency contact'],
    structuredData: [
      createWebPageSchema('/contact', lang, title, description, 'ContactPage'),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: title,
        description,
        url: getLocalizedAbsoluteUrl('/contact', lang),
        inLanguage: lang,
        mainEntity: {
          '@id': `${SITE_URL}#organization`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: portfolioProfile.email,
          telephone: portfolioProfile.phone,
          availableLanguage: ['Arabic', 'English'],
        },
      },
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'تواصل معنا' : 'Contact', path: '/contact' },
      ]),
    ],
  };
};

const createNotFoundSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';

  return {
    title: isArabic ? '404 الصفحة غير موجودة' : '404 Page not found',
    description: isArabic
      ? 'الصفحة التي تحاول الوصول إليها غير متاحة حالياً. يمكنك العودة إلى الرئيسية أو تصفح الأعمال والمدونة.'
      : 'The page you are trying to reach is not available. You can return home or browse the work and blog pages.',
    path: '/404',
    lang,
    noindex: true,
    structuredData: createWebPageSchema(
      '/404',
      lang,
      isArabic ? 'صفحة غير موجودة' : 'Page not found',
      isArabic
        ? 'الصفحة غير متاحة حالياً.'
        : 'This page is currently unavailable.',
      'WebPage',
    ),
  };
};

export const getBlogPostPageSeo = (post: BlogPost, lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? post.titleAr : post.titleEn;
  const description = isArabic ? post.excerptAr : post.excerptEn;
  const section = isArabic ? post.categoryAr : post.categoryEn;
  const keywords = isArabic ? post.tagsAr : post.tagsEn;
  const path = `/blog/${post.slug}`;

  const articleSchema: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    name: title,
    description,
    url: getLocalizedAbsoluteUrl(path, lang),
    image: [toAbsoluteUrl(post.coverImage)],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: lang,
    articleSection: section,
    keywords,
    wordCount: (isArabic ? post.bodySections.flatMap((sectionItem) => sectionItem.paragraphsAr) : post.bodySections.flatMap((sectionItem) => sectionItem.paragraphsEn))
      .join(' ')
      .split(/\s+/)
      .filter(Boolean).length,
    author: {
      '@type': 'Organization',
      name: isArabic ? post.authorAr : post.authorEn,
    },
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getLocalizedAbsoluteUrl(path, lang),
    },
  };

  return {
    title,
    description,
    path,
    lang,
    image: post.coverImage,
    imageAlt: title,
    type: 'article',
    author: isArabic ? post.authorAr : post.authorEn,
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt,
    section,
    tags: keywords,
    keywords,
    structuredData: [
      articleSchema,
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'المدونة' : 'Blog', path: '/blog' },
        { name: title, path },
      ]),
    ],
  };
};

export const getProjectPageSeo = (
  project: PortfolioProject,
  lang: Language,
): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? project.title : project.englishTitle ?? project.title;
  const description = isArabic
    ? project.summary || project.excerpt
    : project.englishSummary ?? project.englishExcerpt ?? project.summary ?? project.excerpt;
  const category = isArabic ? project.category : project.englishCategory ?? project.category;
  const path = `/projects/${project.slug}`;
  const keywords = [
    category,
    ...(project.focus ?? []),
    ...(project.techStack ?? []),
  ];

  const projectSchema: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    headline: title,
    description,
    url: getLocalizedAbsoluteUrl(path, lang),
    image: [toAbsoluteUrl(project.coverImage)],
    inLanguage: lang,
    genre: category,
    keywords,
    creator: {
      '@id': `${SITE_URL}#organization`,
    },
    author: {
      '@id': `${SITE_URL}#organization`,
    },
    about: [
      {
        '@type': 'Thing',
        name: category,
      },
      ...project.focus.map((item) => ({
        '@type': 'Thing',
        name: item,
      })),
    ],
  };

  return {
    title: isArabic ? `${title} | دراسة حالة مشروع` : `${title} Case Study`,
    description,
    path,
    lang,
    image: project.coverImage,
    imageAlt: title,
    keywords,
    structuredData: [
      projectSchema,
      buildBreadcrumbSchema([
        { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
        { name: isArabic ? 'الأعمال' : 'Projects', path: '/projects' },
        { name: title, path },
      ]),
    ],
  };
};

const staticSeoFactories = {
  '/': createHomeSeo,
  '/about': createAboutSeo,
  '/services': createServicesSeo,
  '/projects': createProjectsSeo,
  '/blog': createBlogSeo,
  '/testimonials': createTestimonialsSeo,
  '/contact': createContactSeo,
} satisfies Record<string, (lang: Language) => PageSeoInput>;

export const getPageSeoByPath = (path: string, lang: Language = 'ar'): PageSeoInput => {
  const normalizedPath = normalizePath(stripSearchAndHash(path));

  if (normalizedPath.startsWith('/blog/')) {
    const slug = normalizedPath.replace('/blog/', '');
    const post = getBlogPostBySlug(slug);

    if (post) {
      return getBlogPostPageSeo(post, lang);
    }
  }

  if (normalizedPath.startsWith('/projects/')) {
    const slug = normalizedPath.replace('/projects/', '');
    const project = findProjectBySlug(slug);

    if (project) {
      return getProjectPageSeo(project, lang);
    }
  }

  const factory = staticSeoFactories[normalizedPath as keyof typeof staticSeoFactories];

  if (factory) {
    return factory(lang);
  }

  return createNotFoundSeo(lang);
};

export const prerenderRoutes: PrerenderRoute[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  })),
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: post.publishedAt,
  })),
];
