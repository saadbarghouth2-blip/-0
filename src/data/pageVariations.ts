import { serviceLibrary } from './serviceLibrary';

export type VariationLayout =
  | 'narrative'
  | 'method'
  | 'service'
  | 'proof'
  | 'contact'
  | 'editorial'
  | 'case-study'
  | 'visual-hub';

export type HeroComposition =
  | 'text-right'
  | 'text-left'
  | 'centered'
  | 'split-media'
  | 'metrics-bottom';

export type VariationSection =
  | 'timeline'
  | 'comparison'
  | 'matrix'
  | 'scenarios'
  | 'proof'
  | 'faq'
  | 'checklist'
  | 'gallery'
  | 'deliverables';

export interface PageVariationConfig {
  layoutVariant: VariationLayout;
  heroComposition: HeroComposition;
  sectionOrder: VariationSection[];
  tone: 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose' | 'blue' | 'teal';
  accent: string;
  heroMediaId: string;
  storyMediaId: string;
  videoMediaId: string;
  eyebrow?: { ar: string; en: string };
  title?: { ar: string; en: string };
  lead?: { ar: string; en: string };
  ctaTitle?: { ar: string; en: string };
  ctaText?: { ar: string; en: string };
  metrics?: Array<{ value: string; label: { ar: string; en: string } }>;
}

const routeKey = (path: string) => path.replace(/^\/en(?=\/|$)/, '') || '/';

const serviceMediaByFamily: Record<string, Pick<PageVariationConfig, 'heroMediaId' | 'storyMediaId' | 'videoMediaId' | 'layoutVariant' | 'heroComposition' | 'tone' | 'accent' | 'sectionOrder'>> = {
  presence: {
    heroMediaId: 'subpage-service-interface',
    storyMediaId: 'services-story-code',
    videoMediaId: 'home-interface',
    layoutVariant: 'service',
    heroComposition: 'text-right',
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-sky-500/10 to-transparent',
    sectionOrder: ['comparison', 'deliverables', 'timeline', 'matrix', 'proof', 'faq'],
  },
  sales: {
    heroMediaId: 'subpage-commerce-analytics',
    storyMediaId: 'product-build',
    videoMediaId: 'projects-interface-scroll',
    layoutVariant: 'visual-hub',
    heroComposition: 'metrics-bottom',
    tone: 'amber',
    accent: 'from-amber-300/20 via-orange-500/10 to-transparent',
    sectionOrder: ['scenarios', 'comparison', 'matrix', 'deliverables', 'proof', 'faq'],
  },
  systems: {
    heroMediaId: 'subpage-systems-dashboard',
    storyMediaId: 'strategy-board',
    videoMediaId: 'digital-workflow',
    layoutVariant: 'method',
    heroComposition: 'split-media',
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-teal-500/10 to-transparent',
    sectionOrder: ['timeline', 'matrix', 'scenarios', 'comparison', 'proof', 'faq'],
  },
  marketing: {
    heroMediaId: 'subpage-content-writing',
    storyMediaId: 'blog-story-research',
    videoMediaId: 'blog-writing',
    layoutVariant: 'editorial',
    heroComposition: 'centered',
    tone: 'rose',
    accent: 'from-rose-400/18 via-amber-500/10 to-transparent',
    sectionOrder: ['proof', 'comparison', 'scenarios', 'deliverables', 'matrix', 'faq'],
  },
  experience: {
    heroMediaId: 'subpage-brand-board',
    storyMediaId: 'about-story-notes',
    videoMediaId: 'about-team-review',
    layoutVariant: 'visual-hub',
    heroComposition: 'text-left',
    tone: 'violet',
    accent: 'from-violet-400/20 via-cyan-500/10 to-transparent',
    sectionOrder: ['comparison', 'proof', 'matrix', 'timeline', 'scenarios', 'faq'],
  },
  ai: {
    heroMediaId: 'subpage-ai-workflow',
    storyMediaId: 'product-build',
    videoMediaId: 'digital-workflow',
    layoutVariant: 'method',
    heroComposition: 'split-media',
    tone: 'blue',
    accent: 'from-blue-400/18 via-fuchsia-500/10 to-transparent',
    sectionOrder: ['scenarios', 'matrix', 'comparison', 'timeline', 'proof', 'faq'],
  },
  operations: {
    heroMediaId: 'subpage-standards-desk',
    storyMediaId: 'services-story-code',
    videoMediaId: 'services-code-build',
    layoutVariant: 'contact',
    heroComposition: 'metrics-bottom',
    tone: 'teal',
    accent: 'from-teal-400/20 via-amber-500/10 to-transparent',
    sectionOrder: ['checklist', 'timeline', 'comparison', 'proof', 'matrix', 'faq'],
  },
};

const explicitVariations: Record<string, PageVariationConfig> = {
  '/about/story': {
    layoutVariant: 'narrative',
    heroComposition: 'centered',
    sectionOrder: ['timeline', 'proof', 'comparison', 'scenarios', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-white/[0.04] to-blue-500/10',
    heroMediaId: 'client-workshop',
    storyMediaId: 'about-story-notes',
    videoMediaId: 'about-team-review',
    title: { ar: 'قصة نُطق كما يراها العميل في تفاصيل العمل', en: 'Notaq’s story through the details clients experience' },
  },
  '/about/method': {
    layoutVariant: 'method',
    heroComposition: 'split-media',
    sectionOrder: ['timeline', 'matrix', 'proof', 'comparison', 'scenarios', 'faq'],
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'subpage-method-workshop',
    storyMediaId: 'team-planning',
    videoMediaId: 'about-team-review',
    title: { ar: 'منهجية تنفيذ واضحة من أول سؤال إلى التسليم', en: 'A clear delivery method from first question to handoff' },
  },
  '/about/brand-clarity': {
    layoutVariant: 'visual-hub',
    heroComposition: 'text-left',
    sectionOrder: ['comparison', 'matrix', 'proof', 'scenarios', 'timeline', 'faq'],
    tone: 'violet',
    accent: 'from-violet-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'subpage-brand-board',
    storyMediaId: 'about-story-notes',
    videoMediaId: 'home-interface',
    title: { ar: 'وضوح البراند يبدأ من الرسالة لا من الشكل فقط', en: 'Brand clarity starts with the message, not visuals alone' },
  },
  '/about/execution-quality': {
    layoutVariant: 'method',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['checklist', 'timeline', 'proof', 'comparison', 'matrix', 'faq'],
    tone: 'teal',
    accent: 'from-teal-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'subpage-standards-desk',
    storyMediaId: 'strategy-board',
    videoMediaId: 'digital-workflow',
  },
  '/about/content-thinking': {
    layoutVariant: 'editorial',
    heroComposition: 'centered',
    sectionOrder: ['proof', 'scenarios', 'comparison', 'matrix', 'timeline', 'faq'],
    tone: 'rose',
    accent: 'from-rose-400/18 via-amber-500/10 to-transparent',
    heroMediaId: 'subpage-editorial-research',
    storyMediaId: 'blog-story-research',
    videoMediaId: 'blog-writing',
  },
  '/about/technical-standards': {
    layoutVariant: 'method',
    heroComposition: 'text-right',
    sectionOrder: ['checklist', 'matrix', 'timeline', 'proof', 'comparison', 'faq'],
    tone: 'blue',
    accent: 'from-blue-400/18 via-emerald-500/10 to-transparent',
    heroMediaId: 'subpage-standards-desk',
    storyMediaId: 'services-story-code',
    videoMediaId: 'services-code-build',
  },
  '/contact/brief': {
    layoutVariant: 'contact',
    heroComposition: 'split-media',
    sectionOrder: ['checklist', 'timeline', 'matrix', 'comparison', 'proof', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/18 via-emerald-500/10 to-transparent',
    heroMediaId: 'subpage-contact-brief',
    storyMediaId: 'contact-story-brief',
    videoMediaId: 'contact-organizing-tasks',
  },
  '/contact/pricing': {
    layoutVariant: 'contact',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['comparison', 'matrix', 'proof', 'timeline', 'faq'],
    tone: 'amber',
    accent: 'from-amber-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'subpage-commerce-analytics',
    storyMediaId: 'contact-story-brief',
    videoMediaId: 'blog-writing',
  },
  '/contact/timeline': {
    layoutVariant: 'method',
    heroComposition: 'text-right',
    sectionOrder: ['timeline', 'checklist', 'scenarios', 'proof', 'faq'],
    tone: 'blue',
    accent: 'from-blue-400/18 via-cyan-500/10 to-transparent',
    heroMediaId: 'subpage-method-workshop',
    storyMediaId: 'team-planning',
    videoMediaId: 'contact-organizing-tasks',
  },
  '/testimonials/trust-library': {
    layoutVariant: 'proof',
    heroComposition: 'centered',
    sectionOrder: ['proof', 'comparison', 'scenarios', 'matrix', 'faq'],
    tone: 'teal',
    accent: 'from-teal-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'subpage-proof-meeting',
    storyMediaId: 'testimonials-story-handshake',
    videoMediaId: 'testimonials-client-call',
  },
  '/testimonials/trust-stories': {
    layoutVariant: 'proof',
    heroComposition: 'text-left',
    sectionOrder: ['comparison', 'timeline', 'proof', 'scenarios', 'faq'],
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'subpage-proof-meeting',
    storyMediaId: 'testimonials-story-handshake',
    videoMediaId: 'about-team-review',
  },
};

const blogCategoryVariations: Record<string, PageVariationConfig> = {
  '/blog/category/seo': {
    layoutVariant: 'editorial',
    heroComposition: 'centered',
    sectionOrder: ['proof', 'comparison', 'matrix', 'scenarios', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-blue-500/10 to-transparent',
    heroMediaId: 'subpage-content-writing',
    storyMediaId: 'blog-story-research',
    videoMediaId: 'blog-writing',
    title: { ar: 'SEO عملي يربط نية البحث بقرار التواصل', en: 'Practical SEO that connects search intent to inquiries' },
  },
  '/blog/category/ecommerce': {
    layoutVariant: 'visual-hub',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['scenarios', 'comparison', 'proof', 'matrix', 'faq'],
    tone: 'amber',
    accent: 'from-amber-400/20 via-orange-500/10 to-transparent',
    heroMediaId: 'subpage-commerce-analytics',
    storyMediaId: 'product-build',
    videoMediaId: 'projects-interface-scroll',
  },
};

const projectVariation: PageVariationConfig = {
  layoutVariant: 'case-study',
  heroComposition: 'split-media',
  sectionOrder: ['gallery', 'comparison', 'proof', 'timeline', 'matrix', 'faq'],
  tone: 'blue',
  accent: 'from-blue-400/18 via-cyan-500/10 to-transparent',
  heroMediaId: 'subpage-project-review',
  storyMediaId: 'projects-story-mockup',
  videoMediaId: 'projects-interface-scroll',
};

const fallbackFamilyVariation = (path: string): PageVariationConfig | undefined => {
  if (path.startsWith('/services/')) {
    const slug = path.split('/').pop();
    const service = serviceLibrary.find((item) => item.slug === slug);
    const family = service ? serviceMediaByFamily[service.familyId] : serviceMediaByFamily.presence;

    return {
      ...family,
      eyebrow: service?.eyebrow,
      title: service?.title,
      lead: service?.summary,
      ctaTitle: service?.promise,
      ctaText: service?.bestFor,
      metrics: [
        { value: `${service?.deliverables.length ?? 3}`, label: { ar: 'مخرجات محددة', en: 'defined outputs' } },
        { value: `${service?.useCases.length ?? 3}`, label: { ar: 'حالات استخدام', en: 'use cases' } },
        { value: '1', label: { ar: 'مسار قرار واضح', en: 'clear decision path' } },
      ],
    };
  }

  if (path.startsWith('/blog/category/')) {
    return blogCategoryVariations[path] ?? {
      layoutVariant: 'editorial',
      heroComposition: 'centered',
      sectionOrder: ['proof', 'scenarios', 'comparison', 'matrix', 'faq'],
      tone: 'rose',
      accent: 'from-rose-400/18 via-cyan-500/10 to-transparent',
      heroMediaId: 'subpage-editorial-research',
      storyMediaId: 'blog-story-research',
      videoMediaId: 'blog-writing',
    };
  }

  if (path.startsWith('/projects/')) {
    return projectVariation;
  }

  return undefined;
};

export const getPageVariation = (path: string): PageVariationConfig | undefined => {
  const normalized = routeKey(path);
  return explicitVariations[normalized] ?? fallbackFamilyVariation(normalized);
};
