import { blogPosts, getBlogPostBySlug, type BlogPost } from '../data/blog';
import {
  aboutDetailPages,
  allDetailRoutes,
  blogCategoryPages,
  contactDetailPages,
  contactBriefContent,
  homeDetailPages,
  serviceDetailPages,
  testimonialStoryPages,
  type BlogCategoryPageContent,
  type DetailPageContent,
} from '../data/company';
import { contactFaqs } from '../data/contactPageContent';
import {
  findProjectBySlug,
  portfolioProfile,
  projects,
  services,
  type PortfolioProject,
} from '../data/portfolio';
import type { Language } from '../hooks/useLanguage';
import { getLocalizedPath, getPathLanguage, stripLanguagePrefix } from './localizedPath';
import { SITE_URL } from './siteConfig';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildPersonSchema,
  buildWebsiteSchema,
  getLocalizedAbsoluteUrl,
  normalizePath,
  toAbsoluteUrl,
  type JsonLdObject,
  type PageSeoInput,
} from './seo';

export interface PrerenderRoute {
  path: string;
  lang: Language;
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
    ? 'نُطق | مواقع شركات وصفحات خدمات ومتاجر إلكترونية في مصر والخليج'
    : 'Notaq | Websites, service pages, and e-commerce for Egypt and the Gulf';
  const description = isArabic
    ? 'نُطق وكالة رقمية في القاهرة تبني مواقع شركات وصفحات خدمات ومتاجر إلكترونية سريعة وواضحة ومهيأة للظهور وخدمة شركات في مصر والخليج.'
    : 'Notaq builds fast, clear, SEO-ready company websites, service pages, and e-commerce experiences for businesses across Egypt and the Gulf.';

  return {
    title,
    description,
    path: '/',
    lang,
    keywords: isArabic
      ? [
          'نُطق',
          'نطق',
          'تصميم مواقع',
          'تطوير مواقع شركات',
          'صفحات خدمات',
          'متاجر إلكترونية',
          'مصر',
          'الخليج',
          'SEO',
        ]
      : [
          'Notaq',
          'web design agency',
          'website development',
          'service page design',
          'e-commerce development',
          'SEO-ready websites',
          'Egypt and Gulf web agency',
        ],
    structuredData: [
      buildOrganizationSchema(lang),
      buildWebsiteSchema(lang),
      buildPersonSchema(lang),
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
  const title = isArabic ? 'من نحن | نُطق' : 'About Notaq';
  const description = isArabic
    ? 'تعرّف على نُطق، وكالة رقمية من القاهرة تبني مواقع الشركات وصفحات الخدمات والتجارب الرقمية التي تجمع بين الوضوح، الثقة، والأداء.'
    : 'Meet Notaq, a Cairo-based digital agency focused on company websites, service pages, and digital experiences built for clarity and trust.';

  return {
    title,
    description,
    path: '/about',
    lang,
    keywords: isArabic
      ? ['من نحن', 'نُطق', 'وكالة رقمية', 'تصميم مواقع', 'القاهرة']
      : ['about Notaq', 'digital agency Cairo', 'website design team', 'service page studio'],
    structuredData: [
      createWebPageSchema('/about', lang, title, description, 'AboutPage'),
      buildPersonSchema(lang),
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'من نحن' : 'About', path: '/about' },
        ],
        lang,
      ),
    ],
  };
};

const createServicesSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic
    ? 'خدمات نُطق | مواقع شركات وصفحات خدمات وتجارب رقمية'
    : 'Notaq Services | Company websites, service pages, and digital experiences';
  const description = isArabic
    ? 'اكتشف خدمات نُطق في مواقع الشركات، صفحات الخدمات، المتاجر الإلكترونية، والواجهات السريعة المهيأة للظهور والمناسبة لشركات في مصر والخليج.'
    : 'Explore Notaq services for company websites, service pages, e-commerce, and fast SEO-ready interfaces built for Egypt and Gulf markets.';

  return {
    title,
    description,
    path: '/services',
    lang,
    keywords: isArabic
      ? ['خدمات تصميم مواقع', 'صفحات خدمات', 'متاجر إلكترونية', 'واجهات رقمية', 'SEO']
      : ['web design services', 'service pages', 'e-commerce services', 'SEO-ready development'],
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
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'الخدمات' : 'Services', path: '/services' },
        ],
        lang,
      ),
    ],
  };
};

const createProjectsSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'أعمال نُطق | مشاريع ومواقع ودراسات حالة' : 'Notaq Work and Case Studies';
  const description = isArabic
    ? 'تصفّح أعمال نُطق ودراسات الحالة لمواقع الشركات، المتاجر الإلكترونية، والمنتجات الرقمية المنفذة لقطاعات مختلفة.'
    : 'Browse Notaq work and case studies across company websites, e-commerce, and digital products delivered for different industries.';

  return {
    title,
    description,
    path: '/projects',
    lang,
    keywords: isArabic
      ? ['أعمال نُطق', 'دراسة حالة', 'مشاريع مواقع', 'متاجر إلكترونية', 'نماذج أعمال']
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
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'الأعمال' : 'Projects', path: '/projects' },
        ],
        lang,
      ),
    ],
  };
};

const createBlogSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'مدونة نُطق | مقالات تصميم المواقع وSEO' : 'Notaq Blog on Web Design and SEO';
  const description = isArabic
    ? 'مدونة نُطق تقدّم مقالات عملية عن تصميم المواقع، تجربة المستخدم، التجارة الإلكترونية، وتحسين الظهور في محركات البحث.'
    : 'The Notaq blog publishes practical articles on web design, user experience, e-commerce, and search visibility.';

  return {
    title,
    description,
    path: '/blog',
    lang,
    keywords: isArabic
      ? ['مدونة تصميم مواقع', 'مقالات SEO', 'تجربة المستخدم', 'التجارة الإلكترونية', 'نُطق']
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
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'المدونة' : 'Blog', path: '/blog' },
        ],
        lang,
      ),
    ],
  };
};

const createTestimonialsSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? 'آراء العملاء | نُطق' : 'Client Testimonials and Results';
  const description = isArabic
    ? 'اقرأ آراء العملاء عن العمل مع نُطق وكيف ساعدت المواقع والواجهات الجديدة على رفع الثقة وتحسين عرض الخدمات.'
    : 'Read how clients describe their work with Notaq and how the new websites and interfaces improved trust and presentation.';

  return {
    title,
    description,
    path: '/testimonials',
    lang,
    keywords: isArabic
      ? ['آراء العملاء', 'تقييمات العملاء', 'نتائج المشاريع', 'نُطق']
      : ['client testimonials', 'customer reviews', 'project results', 'Notaq feedback'],
    structuredData: [
      createWebPageSchema('/testimonials', lang, title, description, 'CollectionPage'),
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'آراء العملاء' : 'Testimonials', path: '/testimonials' },
        ],
        lang,
      ),
    ],
  };
};

const createContactSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic
    ? 'تواصل مع نُطق ورتّب احتياج شركتك الرقمي'
    : 'Contact Notaq and organize your company�s digital need';
  const description = isArabic
    ? 'تواصل مع نُطق لبدء موقع شركة، صفحة خدمة، أو تجربة رقمية تستهدف مصر والخليج، واحصل على خطوة أولى واضحة وسريعة.'
    : 'Contact Notaq to start a company website, service page, or digital experience for Egypt and Gulf audiences and get a clear next step.';

  return {
    title,
    description,
    path: '/contact',
    lang,
    keywords: isArabic
      ? ['تواصل معنا', 'مناقشة مشروع', 'صفحة خدمة', 'موقع شركة', 'نُطق']
      : ['contact Notaq', 'project discussion', 'service page consultation', 'website consultation'],
    structuredData: [
      createWebPageSchema('/contact', lang, title, description, 'ContactPage'),
      buildPersonSchema(lang),
      buildFaqSchema(
        contactFaqs.map((item) => ({
          question: isArabic ? item.qAr : item.qEn,
          answer: isArabic ? item.aAr : item.aEn,
        })),
      ),
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
          areaServed: ['Egypt', 'Saudi Arabia', 'United Arab Emirates', 'Middle East'],
        },
      },
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'تواصل معنا' : 'Contact', path: '/contact' },
        ],
        lang,
      ),
    ],
  };
};

const createSimpleStaticSeo = (
  path: string,
  lang: Language,
  arTitle: string,
  enTitle: string,
  arDescription: string,
  enDescription: string,
  pageType = 'CollectionPage',
): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? arTitle : enTitle;
  const description = isArabic ? arDescription : enDescription;

  return {
    title,
    description,
    path,
    lang,
    structuredData: [
      createWebPageSchema(path, lang, title, description, pageType),
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: title, path },
        ],
        lang,
      ),
    ],
  };
};

const createCaseStudiesSeo = (lang: Language) =>
  createSimpleStaticSeo(
    '/case-studies',
    lang,
    'دراسات الحالة | نُطق',
    'Notaq Case Studies',
    'نماذج تفصيلية لطريقة تفكير نُطق في التحديات وتحويلها إلى تجارب رقمية أوضح.',
    'Detailed examples of how Notaq thinks through challenges and turns them into clearer digital experiences.',
  );

const createStatsSeo = (lang: Language) =>
  createSimpleStaticSeo(
    '/stats',
    lang,
    'لوحة الإحصائيات | نُطق',
    'Notaq Statistics Dashboard',
    'أرقام وملخصات منظمة عن حضور نُطق ومشاريعها وطريقة عرض النتائج.',
    'Organized numbers and summaries about Notaq presence, projects, and presentation results.',
  );

const createGallerySeo = (lang: Language) =>
  createSimpleStaticSeo(
    '/gallery',
    lang,
    'معرض الأعمال | نُطق',
    'Notaq Portfolio Gallery',
    'معرض بصري يضم لقطات وصورًا من مشاريع وتجارب نُطق الرقمية.',
    'A visual gallery with snapshots from Notaq digital projects and experiences.',
  );

const detailCollections = [
  ...homeDetailPages,
  ...aboutDetailPages,
  ...serviceDetailPages,
  ...contactDetailPages,
  ...testimonialStoryPages,
];

const findDetailPageByPath = (path: string) => {
  const normalizedPath = stripLanguagePrefix(normalizePath(stripSearchAndHash(path)));

  return detailCollections.find((page) => `${page.parentPath}/${page.slug}` === normalizedPath);
};

const createDetailSeo = (page: DetailPageContent, lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? page.title.ar : page.title.en;
  const description = isArabic ? page.summary.ar : page.summary.en;
  const path = `${page.parentPath}/${page.slug}`;

  return {
    title,
    description,
    path,
    lang,
    keywords: [
      isArabic ? page.eyebrow.ar : page.eyebrow.en,
      isArabic ? page.parentLabel.ar : page.parentLabel.en,
      ...page.useCases.map((item) => (isArabic ? item.ar : item.en)),
    ],
    structuredData: [
      createWebPageSchema(path, lang, title, description, 'WebPage'),
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? page.parentLabel.ar : page.parentLabel.en, path: page.parentPath },
          { name: title, path },
        ],
        lang,
      ),
    ],
  };
};

const createContactBriefSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? contactBriefContent.title.ar : contactBriefContent.title.en;
  const description = isArabic ? contactBriefContent.summary.ar : contactBriefContent.summary.en;

  return {
    title,
    description,
    path: '/contact/brief',
    lang,
    structuredData: [
      createWebPageSchema('/contact/brief', lang, title, description, 'ContactPage'),
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'تواصل معنا' : 'Contact', path: '/contact' },
          { name: title, path: '/contact/brief' },
        ],
        lang,
      ),
    ],
  };
};

const findBlogCategoryByPath = (path: string) => {
  const slug = stripLanguagePrefix(normalizePath(stripSearchAndHash(path))).replace('/blog/category/', '');
  return blogCategoryPages.find((category) => category.slug === slug);
};

const createBlogCategorySeo = (category: BlogCategoryPageContent, lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';
  const title = isArabic ? `${category.label.ar} | مدونة نُطق` : `${category.label.en} | Notaq Blog`;
  const description = isArabic ? category.description.ar : category.description.en;
  const path = `/blog/category/${category.slug}`;

  return {
    title,
    description,
    path,
    lang,
    keywords: category.categoryMatchers,
    structuredData: [
      createWebPageSchema(path, lang, title, description, 'CollectionPage'),
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'المدونة' : 'Blog', path: '/blog' },
          { name: isArabic ? category.label.ar : category.label.en, path },
        ],
        lang,
      ),
    ],
  };
};

const createNotFoundSeo = (lang: Language): PageSeoInput => {
  const isArabic = lang === 'ar';

  return {
    title: isArabic ? '404 | الصفحة غير موجودة' : '404 | Page not found',
    description: isArabic
      ? 'الصفحة التي تحاول الوصول إليها غير متاحة حاليًا. يمكنك العودة إلى الرئيسية أو تصفح الأعمال والمدونة.'
      : 'The page you are trying to reach is not available. You can return home or browse the work and blog pages.',
    path: '/404',
    lang,
    noindex: true,
    structuredData: createWebPageSchema(
      '/404',
      lang,
      isArabic ? 'الصفحة غير موجودة' : 'Page not found',
      isArabic ? 'هذه الصفحة غير متاحة حاليًا.' : 'This page is currently unavailable.',
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

  const wordCount = (
    isArabic
      ? post.bodySections.flatMap((sectionItem) => sectionItem.paragraphsAr)
      : post.bodySections.flatMap((sectionItem) => sectionItem.paragraphsEn)
  )
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;

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
    wordCount,
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
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'المدونة' : 'Blog', path: '/blog' },
          { name: title, path },
        ],
        lang,
      ),
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
  const keywords = [category, ...(project.focus ?? []), ...(project.techStack ?? [])];

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
      buildBreadcrumbSchema(
        [
          { name: isArabic ? 'الرئيسية' : 'Home', path: '/' },
          { name: isArabic ? 'الأعمال' : 'Projects', path: '/projects' },
          { name: title, path },
        ],
        lang,
      ),
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
  '/case-studies': createCaseStudiesSeo,
  '/stats': createStatsSeo,
  '/gallery': createGallerySeo,
} satisfies Record<string, (lang: Language) => PageSeoInput>;

export const getPageSeoByPath = (path: string, lang?: Language): PageSeoInput => {
  const resolvedLang = lang ?? getPathLanguage(path);
  const normalizedPath = stripLanguagePrefix(normalizePath(stripSearchAndHash(path)));

  if (normalizedPath.startsWith('/blog/category/')) {
    const category = findBlogCategoryByPath(normalizedPath);

    if (category) {
      return createBlogCategorySeo(category, resolvedLang);
    }
  }

  if (normalizedPath === '/contact/brief') {
    return createContactBriefSeo(resolvedLang);
  }

  const detailPage = findDetailPageByPath(normalizedPath);

  if (detailPage) {
    return createDetailSeo(detailPage, resolvedLang);
  }

  if (normalizedPath.startsWith('/blog/')) {
    const slug = normalizedPath.replace('/blog/', '');
    const post = getBlogPostBySlug(slug);

    if (post) {
      return getBlogPostPageSeo(post, resolvedLang);
    }
  }

  if (normalizedPath.startsWith('/projects/')) {
    const slug = normalizedPath.replace('/projects/', '');
    const project = findProjectBySlug(slug);

    if (project) {
      return getProjectPageSeo(project, resolvedLang);
    }
  }

  const factory = staticSeoFactories[normalizedPath as keyof typeof staticSeoFactories];

  if (factory) {
    return factory(resolvedLang);
  }

  return createNotFoundSeo(resolvedLang);
};

const localizedPrerenderRoute = (
  path: string,
  lang: Language,
  priority: number,
  changeFrequency: PrerenderRoute['changeFrequency'],
  lastModified?: string,
): PrerenderRoute => ({
  path: getLocalizedPath(path, lang),
  lang,
  priority,
  changeFrequency,
  lastModified,
});

const basePrerenderRoutes: Array<
  Omit<PrerenderRoute, 'lang' | 'path'> & { path: string }
> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/stats', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact/brief', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about/company', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/process', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.8, changeFrequency: 'monthly' },
  ...allDetailRoutes.map((path) => ({
    path,
    priority: 0.65,
    changeFrequency: 'monthly' as const,
  })),
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

export const prerenderRoutes: PrerenderRoute[] = basePrerenderRoutes.flatMap((route) => [
  localizedPrerenderRoute(
    route.path,
    'ar',
    route.priority,
    route.changeFrequency,
    route.lastModified,
  ),
  localizedPrerenderRoute(
    route.path,
    'en',
    route.priority,
    route.changeFrequency,
    route.lastModified,
  ),
]);
