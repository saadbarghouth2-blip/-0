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

export type PageHeroStyle =
  | 'cinematic'
  | 'splitShowcase'
  | 'dashboard'
  | 'editorial'
  | 'proofWall'
  | 'processMap';

export type PageContentRhythm =
  | 'zigzag'
  | 'magazine'
  | 'cardsDense'
  | 'timelineFirst'
  | 'dashboardGrid'
  | 'storyScroll';

export type PageVisualTreatment =
  | 'glass'
  | 'editorial'
  | 'technical'
  | 'commerce'
  | 'proof'
  | 'minimal';

export type PageMediaRole =
  | 'backgroundVideo'
  | 'heroImage'
  | 'storyImage'
  | 'galleryStrip'
  | 'mockupPanel';

export interface PageExperienceConfig {
  heroStyle: PageHeroStyle;
  contentRhythm: PageContentRhythm;
  visualTreatment: PageVisualTreatment;
  mediaRole: PageMediaRole;
}

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
  pageExperience?: PageExperienceConfig;
  eyebrow?: { ar: string; en: string };
  title?: { ar: string; en: string };
  lead?: { ar: string; en: string };
  ctaTitle?: { ar: string; en: string };
  ctaText?: { ar: string; en: string };
  metrics?: Array<{ value: string; label: { ar: string; en: string } }>;
}

const routeKey = (path: string) => path.replace(/^\/en(?=\/|$)/, '') || '/';

const serviceMediaByFamily: Record<string, Pick<PageVariationConfig, 'heroMediaId' | 'storyMediaId' | 'videoMediaId' | 'layoutVariant' | 'heroComposition' | 'tone' | 'accent' | 'sectionOrder' | 'pageExperience'>> = {
  presence: {
    heroMediaId: 'detail-presence-interface',
    storyMediaId: 'detail-blueprint-board',
    videoMediaId: 'home-interface',
    layoutVariant: 'service',
    heroComposition: 'text-right',
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-sky-500/10 to-transparent',
    sectionOrder: ['comparison', 'deliverables', 'timeline', 'matrix', 'proof', 'faq'],
    pageExperience: { heroStyle: 'splitShowcase', contentRhythm: 'zigzag', visualTreatment: 'glass', mediaRole: 'mockupPanel' },
  },
  sales: {
    heroMediaId: 'detail-commerce-store',
    storyMediaId: 'subpage-commerce-analytics',
    videoMediaId: 'projects-interface-scroll',
    layoutVariant: 'visual-hub',
    heroComposition: 'metrics-bottom',
    tone: 'amber',
    accent: 'from-amber-300/20 via-orange-500/10 to-transparent',
    sectionOrder: ['scenarios', 'comparison', 'matrix', 'deliverables', 'proof', 'faq'],
    pageExperience: { heroStyle: 'dashboard', contentRhythm: 'dashboardGrid', visualTreatment: 'commerce', mediaRole: 'galleryStrip' },
  },
  systems: {
    heroMediaId: 'detail-dashboard-mockup',
    storyMediaId: 'subpage-systems-dashboard',
    videoMediaId: 'digital-workflow',
    layoutVariant: 'method',
    heroComposition: 'split-media',
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-teal-500/10 to-transparent',
    sectionOrder: ['timeline', 'matrix', 'scenarios', 'comparison', 'proof', 'faq'],
    pageExperience: { heroStyle: 'dashboard', contentRhythm: 'timelineFirst', visualTreatment: 'technical', mediaRole: 'mockupPanel' },
  },
  marketing: {
    heroMediaId: 'detail-editorial-desk',
    storyMediaId: 'blog-story-research',
    videoMediaId: 'blog-writing',
    layoutVariant: 'editorial',
    heroComposition: 'centered',
    tone: 'rose',
    accent: 'from-rose-400/18 via-amber-500/10 to-transparent',
    sectionOrder: ['proof', 'comparison', 'scenarios', 'deliverables', 'matrix', 'faq'],
    pageExperience: { heroStyle: 'editorial', contentRhythm: 'magazine', visualTreatment: 'editorial', mediaRole: 'storyImage' },
  },
  experience: {
    heroMediaId: 'detail-brand-system',
    storyMediaId: 'about-story-notes',
    videoMediaId: 'about-team-review',
    layoutVariant: 'visual-hub',
    heroComposition: 'text-left',
    tone: 'violet',
    accent: 'from-violet-400/20 via-cyan-500/10 to-transparent',
    sectionOrder: ['comparison', 'proof', 'matrix', 'timeline', 'scenarios', 'faq'],
    pageExperience: { heroStyle: 'cinematic', contentRhythm: 'storyScroll', visualTreatment: 'glass', mediaRole: 'heroImage' },
  },
  ai: {
    heroMediaId: 'detail-ai-product',
    storyMediaId: 'subpage-ai-workflow',
    videoMediaId: 'digital-workflow',
    layoutVariant: 'method',
    heroComposition: 'split-media',
    tone: 'blue',
    accent: 'from-blue-400/18 via-fuchsia-500/10 to-transparent',
    sectionOrder: ['scenarios', 'matrix', 'comparison', 'timeline', 'proof', 'faq'],
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'cardsDense', visualTreatment: 'technical', mediaRole: 'backgroundVideo' },
  },
  operations: {
    heroMediaId: 'detail-quality-workspace',
    storyMediaId: 'subpage-standards-desk',
    videoMediaId: 'services-code-build',
    layoutVariant: 'contact',
    heroComposition: 'metrics-bottom',
    tone: 'teal',
    accent: 'from-teal-400/20 via-amber-500/10 to-transparent',
    sectionOrder: ['checklist', 'timeline', 'comparison', 'proof', 'matrix', 'faq'],
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'timelineFirst', visualTreatment: 'minimal', mediaRole: 'storyImage' },
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

const detailRouteVariations: Record<string, PageVariationConfig> = {
  '/home/homepage-blueprint': {
    layoutVariant: 'editorial',
    heroComposition: 'split-media',
    sectionOrder: ['timeline', 'matrix', 'comparison', 'proof', 'scenarios', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-emerald-500/10 to-transparent',
    heroMediaId: 'detail-cinematic-home',
    storyMediaId: 'detail-blueprint-board',
    videoMediaId: 'home-interface',
    pageExperience: { heroStyle: 'cinematic', contentRhythm: 'storyScroll', visualTreatment: 'glass', mediaRole: 'mockupPanel' },
  },
  '/home/trust-layers': {
    layoutVariant: 'proof',
    heroComposition: 'centered',
    sectionOrder: ['proof', 'comparison', 'scenarios', 'matrix', 'timeline', 'faq'],
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-proof-interface',
    storyMediaId: 'subpage-proof-meeting',
    videoMediaId: 'testimonials-client-call',
    pageExperience: { heroStyle: 'proofWall', contentRhythm: 'cardsDense', visualTreatment: 'proof', mediaRole: 'galleryStrip' },
  },
  '/home/conversion-path': {
    layoutVariant: 'method',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['matrix', 'timeline', 'scenarios', 'comparison', 'proof', 'faq'],
    tone: 'amber',
    accent: 'from-amber-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-conversion-path',
    storyMediaId: 'subpage-commerce-analytics',
    videoMediaId: 'projects-interface-scroll',
    pageExperience: { heroStyle: 'dashboard', contentRhythm: 'dashboardGrid', visualTreatment: 'commerce', mediaRole: 'backgroundVideo' },
  },
  '/home/mobile-first-journey': {
    layoutVariant: 'method',
    heroComposition: 'text-left',
    sectionOrder: ['checklist', 'scenarios', 'timeline', 'matrix', 'proof', 'faq'],
    tone: 'blue',
    accent: 'from-blue-400/18 via-violet-500/10 to-transparent',
    heroMediaId: 'detail-mobile-flow',
    storyMediaId: 'home-story-strategy',
    videoMediaId: 'home-interface',
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'zigzag', visualTreatment: 'technical', mediaRole: 'storyImage' },
  },
  '/about/quality-system': {
    layoutVariant: 'method',
    heroComposition: 'split-media',
    sectionOrder: ['checklist', 'timeline', 'matrix', 'proof', 'comparison', 'faq'],
    tone: 'teal',
    accent: 'from-teal-400/20 via-emerald-500/10 to-transparent',
    heroMediaId: 'detail-quality-workspace',
    storyMediaId: 'subpage-standards-desk',
    videoMediaId: 'services-code-build',
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'timelineFirst', visualTreatment: 'minimal', mediaRole: 'storyImage' },
  },
  '/about/collaboration-style': {
    layoutVariant: 'narrative',
    heroComposition: 'centered',
    sectionOrder: ['timeline', 'scenarios', 'proof', 'matrix', 'comparison', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-blue-500/10 to-transparent',
    heroMediaId: 'detail-collaboration-room',
    storyMediaId: 'client-workshop',
    videoMediaId: 'about-team-review',
    pageExperience: { heroStyle: 'splitShowcase', contentRhythm: 'storyScroll', visualTreatment: 'glass', mediaRole: 'galleryStrip' },
  },
  '/about/tools-and-standards': {
    layoutVariant: 'method',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['matrix', 'checklist', 'timeline', 'proof', 'scenarios', 'faq'],
    tone: 'blue',
    accent: 'from-blue-400/18 via-emerald-500/10 to-transparent',
    heroMediaId: 'detail-standards-stack',
    storyMediaId: 'services-story-code',
    videoMediaId: 'digital-workflow',
    pageExperience: { heroStyle: 'dashboard', contentRhythm: 'dashboardGrid', visualTreatment: 'technical', mediaRole: 'mockupPanel' },
  },
  '/about/why-notaq': {
    layoutVariant: 'proof',
    heroComposition: 'text-left',
    sectionOrder: ['comparison', 'proof', 'scenarios', 'timeline', 'matrix', 'faq'],
    tone: 'violet',
    accent: 'from-violet-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-brand-system',
    storyMediaId: 'about-story-notes',
    videoMediaId: 'contact-organizing-tasks',
    pageExperience: { heroStyle: 'cinematic', contentRhythm: 'magazine', visualTreatment: 'proof', mediaRole: 'heroImage' },
  },
  '/services/service-audit': {
    layoutVariant: 'method',
    heroComposition: 'split-media',
    sectionOrder: ['checklist', 'matrix', 'comparison', 'timeline', 'proof', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-blue-500/10 to-transparent',
    heroMediaId: 'detail-audit-board',
    storyMediaId: 'subpage-standards-desk',
    videoMediaId: 'digital-workflow',
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'timelineFirst', visualTreatment: 'technical', mediaRole: 'storyImage' },
  },
  '/services/service-bundles': {
    layoutVariant: 'visual-hub',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['matrix', 'scenarios', 'comparison', 'proof', 'timeline', 'faq'],
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-bundles-map',
    storyMediaId: 'strategy-board',
    videoMediaId: 'home-interface',
    pageExperience: { heroStyle: 'dashboard', contentRhythm: 'dashboardGrid', visualTreatment: 'glass', mediaRole: 'mockupPanel' },
  },
  '/services/launch-readiness': {
    layoutVariant: 'contact',
    heroComposition: 'text-right',
    sectionOrder: ['checklist', 'timeline', 'matrix', 'proof', 'comparison', 'faq'],
    tone: 'amber',
    accent: 'from-amber-400/20 via-teal-500/10 to-transparent',
    heroMediaId: 'detail-launch-checklist',
    storyMediaId: 'detail-quality-workspace',
    videoMediaId: 'services-code-build',
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'timelineFirst', visualTreatment: 'minimal', mediaRole: 'storyImage' },
  },
  '/services/support-maintenance': {
    layoutVariant: 'method',
    heroComposition: 'centered',
    sectionOrder: ['timeline', 'checklist', 'scenarios', 'matrix', 'proof', 'faq'],
    tone: 'teal',
    accent: 'from-teal-400/20 via-amber-500/10 to-transparent',
    heroMediaId: 'detail-support-loop',
    storyMediaId: 'subpage-standards-desk',
    videoMediaId: 'contact-organizing-tasks',
    pageExperience: { heroStyle: 'editorial', contentRhythm: 'storyScroll', visualTreatment: 'minimal', mediaRole: 'storyImage' },
  },
  '/services/integration-map': {
    layoutVariant: 'method',
    heroComposition: 'split-media',
    sectionOrder: ['matrix', 'scenarios', 'timeline', 'comparison', 'proof', 'faq'],
    tone: 'blue',
    accent: 'from-blue-400/18 via-emerald-500/10 to-transparent',
    heroMediaId: 'detail-integration-map',
    storyMediaId: 'subpage-systems-dashboard',
    videoMediaId: 'digital-workflow',
    pageExperience: { heroStyle: 'dashboard', contentRhythm: 'dashboardGrid', visualTreatment: 'technical', mediaRole: 'mockupPanel' },
  },
  '/services/growth-roadmap': {
    layoutVariant: 'editorial',
    heroComposition: 'text-left',
    sectionOrder: ['timeline', 'proof', 'scenarios', 'matrix', 'comparison', 'faq'],
    tone: 'violet',
    accent: 'from-violet-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-growth-roadmap',
    storyMediaId: 'subpage-editorial-research',
    videoMediaId: 'blog-writing',
    pageExperience: { heroStyle: 'editorial', contentRhythm: 'magazine', visualTreatment: 'editorial', mediaRole: 'galleryStrip' },
  },
  '/testimonials/result-types': {
    layoutVariant: 'proof',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['proof', 'matrix', 'comparison', 'scenarios', 'timeline', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-emerald-500/10 to-transparent',
    heroMediaId: 'detail-proof-interface',
    storyMediaId: 'testimonials-story-handshake',
    videoMediaId: 'testimonials-client-call',
    pageExperience: { heroStyle: 'proofWall', contentRhythm: 'dashboardGrid', visualTreatment: 'proof', mediaRole: 'galleryStrip' },
  },
  '/testimonials/client-before-after': {
    layoutVariant: 'proof',
    heroComposition: 'split-media',
    sectionOrder: ['comparison', 'proof', 'timeline', 'scenarios', 'matrix', 'faq'],
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-before-after',
    storyMediaId: 'projects-story-mockup',
    videoMediaId: 'projects-interface-scroll',
    pageExperience: { heroStyle: 'splitShowcase', contentRhythm: 'zigzag', visualTreatment: 'proof', mediaRole: 'mockupPanel' },
  },
  '/testimonials/review-audit': {
    layoutVariant: 'editorial',
    heroComposition: 'centered',
    sectionOrder: ['checklist', 'matrix', 'proof', 'comparison', 'scenarios', 'faq'],
    tone: 'amber',
    accent: 'from-amber-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-review-audit',
    storyMediaId: 'subpage-editorial-research',
    videoMediaId: 'about-team-review',
    pageExperience: { heroStyle: 'editorial', contentRhythm: 'magazine', visualTreatment: 'editorial', mediaRole: 'storyImage' },
  },
  '/testimonials/proof-library': {
    layoutVariant: 'proof',
    heroComposition: 'text-right',
    sectionOrder: ['proof', 'scenarios', 'comparison', 'matrix', 'timeline', 'faq'],
    tone: 'blue',
    accent: 'from-blue-400/18 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-proof-library',
    storyMediaId: 'subpage-proof-meeting',
    videoMediaId: 'contact-organizing-tasks',
    pageExperience: { heroStyle: 'proofWall', contentRhythm: 'cardsDense', visualTreatment: 'proof', mediaRole: 'galleryStrip' },
  },
  '/contact/project-readiness': {
    layoutVariant: 'contact',
    heroComposition: 'split-media',
    sectionOrder: ['checklist', 'matrix', 'timeline', 'scenarios', 'proof', 'faq'],
    tone: 'cyan',
    accent: 'from-cyan-400/20 via-emerald-500/10 to-transparent',
    heroMediaId: 'detail-contact-ready',
    storyMediaId: 'subpage-contact-brief',
    videoMediaId: 'contact-organizing-tasks',
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'timelineFirst', visualTreatment: 'minimal', mediaRole: 'storyImage' },
  },
  '/contact/meeting-prep': {
    layoutVariant: 'contact',
    heroComposition: 'centered',
    sectionOrder: ['timeline', 'checklist', 'scenarios', 'matrix', 'proof', 'faq'],
    tone: 'amber',
    accent: 'from-amber-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-meeting-prep',
    storyMediaId: 'client-workshop',
    videoMediaId: 'about-team-review',
    pageExperience: { heroStyle: 'splitShowcase', contentRhythm: 'storyScroll', visualTreatment: 'glass', mediaRole: 'galleryStrip' },
  },
  '/contact/response-process': {
    layoutVariant: 'contact',
    heroComposition: 'metrics-bottom',
    sectionOrder: ['timeline', 'matrix', 'comparison', 'proof', 'checklist', 'faq'],
    tone: 'emerald',
    accent: 'from-emerald-400/20 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-response-process',
    storyMediaId: 'contact-story-brief',
    videoMediaId: 'contact-organizing-tasks',
    pageExperience: { heroStyle: 'processMap', contentRhythm: 'dashboardGrid', visualTreatment: 'technical', mediaRole: 'backgroundVideo' },
  },
  '/contact/scope-request': {
    layoutVariant: 'contact',
    heroComposition: 'text-left',
    sectionOrder: ['matrix', 'checklist', 'comparison', 'timeline', 'scenarios', 'faq'],
    tone: 'blue',
    accent: 'from-blue-400/18 via-cyan-500/10 to-transparent',
    heroMediaId: 'detail-scope-request',
    storyMediaId: 'subpage-contact-brief',
    videoMediaId: 'blog-writing',
    pageExperience: { heroStyle: 'dashboard', contentRhythm: 'cardsDense', visualTreatment: 'technical', mediaRole: 'mockupPanel' },
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

const routeSeed = (path: string) =>
  [...path].reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 3), 0);

const itemIndex = (items: readonly string[], value: string) => {
  const index = items.indexOf(value);
  return index >= 0 ? index : routeSeed(value);
};

const heroStyles: PageHeroStyle[] = ['cinematic', 'splitShowcase', 'dashboard', 'editorial', 'proofWall', 'processMap'];
const contentRhythms: PageContentRhythm[] = ['zigzag', 'magazine', 'cardsDense', 'timelineFirst', 'dashboardGrid', 'storyScroll'];
const visualTreatments: PageVisualTreatment[] = ['glass', 'editorial', 'technical', 'commerce', 'proof', 'minimal'];
const mediaRoles: PageMediaRole[] = ['backgroundVideo', 'heroImage', 'storyImage', 'galleryStrip', 'mockupPanel'];
const heroCompositions: HeroComposition[] = ['text-right', 'split-media', 'metrics-bottom', 'centered', 'text-left'];
const sectionOrders: VariationSection[][] = [
  ['timeline', 'matrix', 'proof', 'scenarios', 'comparison', 'faq'],
  ['proof', 'comparison', 'deliverables', 'matrix', 'scenarios', 'faq'],
  ['checklist', 'timeline', 'matrix', 'proof', 'comparison', 'faq'],
  ['scenarios', 'matrix', 'timeline', 'comparison', 'proof', 'faq'],
  ['comparison', 'proof', 'scenarios', 'deliverables', 'timeline', 'faq'],
  ['matrix', 'checklist', 'scenarios', 'proof', 'comparison', 'faq'],
  ['gallery', 'proof', 'timeline', 'matrix', 'scenarios', 'faq'],
  ['deliverables', 'comparison', 'matrix', 'timeline', 'proof', 'faq'],
];

const pageExperienceForIndex = (index: number): PageExperienceConfig => ({
  heroStyle: heroStyles[index % heroStyles.length],
  contentRhythm: contentRhythms[Math.floor(index / heroStyles.length) % contentRhythms.length],
  visualTreatment: visualTreatments[Math.floor(index / (heroStyles.length * contentRhythms.length)) % visualTreatments.length],
  mediaRole: mediaRoles[(index + Math.floor(index / 2)) % mediaRoles.length],
});

const routeMediaPools = {
  home: {
    order: ['visitor-journey', 'pre-project-questions', 'homepage-blueprint', 'trust-layers', 'conversion-path', 'mobile-first-journey'],
    images: ['detail-cinematic-home', 'detail-proof-interface', 'detail-conversion-path', 'detail-mobile-flow', 'detail-blueprint-board', 'home-story-strategy'],
    videos: ['home-interface', 'projects-interface-scroll', 'digital-workflow', 'contact-organizing-tasks', 'about-team-review', 'services-code-build'],
  },
  about: {
    order: ['story', 'method', 'culture', 'quality-system', 'collaboration-style', 'tools-and-standards', 'why-notaq', 'brand-clarity', 'execution-quality', 'client-journey', 'content-thinking', 'technical-standards'],
    images: ['client-workshop', 'subpage-method-workshop', 'subpage-brand-board', 'detail-quality-workspace', 'detail-collaboration-room', 'detail-standards-stack', 'detail-brand-system', 'about-hero-team', 'about-story-notes', 'team-planning', 'strategy-board', 'subpage-editorial-research'],
    videos: ['about-team-review', 'digital-workflow', 'contact-organizing-tasks', 'testimonials-client-call', 'services-code-build', 'home-interface', 'blog-writing'],
  },
  services: {
    order: [
      'company-websites', 'ecommerce', 'custom-systems', 'ai-products', 'service-audit', 'service-bundles',
      'launch-readiness', 'support-maintenance', 'integration-map', 'growth-roadmap', 'seo', 'ui-ux',
      'landing-pages', 'brand-content', 'web-apps', 'dashboards', 'maintenance', 'consultation',
      'service-pages', 'portfolio-websites', 'personal-brand', 'product-pages', 'checkout-optimization',
      'catalog-websites', 'crm-systems', 'booking-systems', 'internal-tools', 'blog-systems',
      'content-strategy', 'copywriting', 'conversion-pages', 'design-systems', 'motion-interactions',
      'chatbot-interfaces', 'automation-flows', 'prompt-workflows', 'speed-optimization', 'launch-audit',
    ],
    images: [
      'detail-presence-interface', 'detail-commerce-store', 'detail-dashboard-mockup', 'detail-ai-product',
      'detail-audit-board', 'detail-bundles-map', 'detail-launch-checklist', 'detail-support-loop',
      'detail-integration-map', 'detail-growth-roadmap', 'subpage-service-interface', 'subpage-commerce-analytics',
      'subpage-systems-dashboard', 'subpage-ai-workflow', 'subpage-content-writing', 'subpage-standards-desk',
      'product-build', 'strategy-board', 'team-planning', 'projects-story-mockup', 'projects-hero-review',
      'blog-hero-writing', 'blog-story-research', 'services-hero-product', 'services-story-code',
      'contact-story-brief', 'subpage-contact-brief', 'subpage-project-review', 'detail-before-after',
      'detail-proof-library', 'detail-scope-request', 'detail-response-process', 'detail-meeting-prep',
      'home-hero-workshop', 'home-story-strategy', 'about-hero-team', 'about-story-notes',
      'testimonials-hero-client', 'testimonials-story-handshake', 'contact-hero-message',
    ],
    videos: ['services-code-build', 'digital-workflow', 'home-interface', 'projects-interface-scroll', 'blog-writing', 'contact-organizing-tasks', 'about-team-review', 'testimonials-client-call'],
  },
  testimonials: {
    order: ['trust-stories', 'questions-before-deciding', 'result-types', 'client-before-after', 'review-audit', 'proof-library', 'outcomes-proof', 'objections-handled', 'process-feedback', 'trust-library'],
    images: ['testimonials-hero-client', 'testimonials-story-handshake', 'detail-proof-interface', 'detail-before-after', 'detail-review-audit', 'detail-proof-library', 'subpage-proof-meeting', 'projects-story-mockup', 'client-workshop', 'subpage-project-review'],
    videos: ['testimonials-client-call', 'about-team-review', 'contact-organizing-tasks', 'projects-interface-scroll', 'digital-workflow', 'home-interface', 'services-code-build', 'blog-writing'],
  },
  contact: {
    order: ['direct', 'project-readiness', 'meeting-prep', 'response-process', 'scope-request', 'pricing', 'timeline', 'before-contact', 'decision-questions'],
    images: ['contact-hero-message', 'detail-contact-ready', 'detail-meeting-prep', 'detail-response-process', 'detail-scope-request', 'contact-story-brief', 'subpage-contact-brief', 'client-workshop', 'strategy-board'],
    videos: ['contact-organizing-tasks', 'blog-writing', 'about-team-review', 'digital-workflow', 'home-interface', 'projects-interface-scroll', 'services-code-build', 'testimonials-client-call'],
  },
} as const;

const getRouteVariety = (path: string) => {
  const slug = path.split('/').pop() ?? path;
  if (path.startsWith('/home/')) return { group: routeMediaPools.home, index: itemIndex(routeMediaPools.home.order, slug) };
  if (path.startsWith('/about/')) return { group: routeMediaPools.about, index: itemIndex(routeMediaPools.about.order, slug) };
  if (path.startsWith('/services/')) return { group: routeMediaPools.services, index: itemIndex(routeMediaPools.services.order, slug) };
  if (path.startsWith('/testimonials/')) return { group: routeMediaPools.testimonials, index: itemIndex(routeMediaPools.testimonials.order, slug) };
  if (path.startsWith('/contact/')) return { group: routeMediaPools.contact, index: itemIndex(routeMediaPools.contact.order, slug) };
  return null;
};

const enforceRouteVariety = (path: string, variation: PageVariationConfig): PageVariationConfig => {
  const variety = getRouteVariety(path);
  if (!variety) return variation;

  const { group, index } = variety;
  const heroMediaId = group.images[index % group.images.length];
  const storyMediaId = group.images[(index + 3) % group.images.length];
  const videoMediaId = group.videos[index % group.videos.length];

  return {
    ...variation,
    heroComposition: heroCompositions[index % heroCompositions.length],
    sectionOrder: sectionOrders[index % sectionOrders.length],
    heroMediaId,
    storyMediaId,
    videoMediaId,
    pageExperience: pageExperienceForIndex(index),
  };
};

const fallbackFamilyVariation = (path: string): PageVariationConfig | undefined => {
  if (path.startsWith('/home/')) {
    return {
      layoutVariant: 'narrative',
      heroComposition: 'split-media',
      sectionOrder: ['timeline', 'matrix', 'proof', 'scenarios', 'comparison', 'faq'],
      tone: 'cyan',
      accent: 'from-cyan-400/20 via-emerald-500/10 to-transparent',
      heroMediaId: 'detail-cinematic-home',
      storyMediaId: 'detail-blueprint-board',
      videoMediaId: 'home-interface',
      pageExperience: { heroStyle: 'cinematic', contentRhythm: 'zigzag', visualTreatment: 'glass', mediaRole: 'mockupPanel' },
    };
  }

  if (path.startsWith('/about/')) {
    return {
      layoutVariant: 'method',
      heroComposition: 'split-media',
      sectionOrder: ['timeline', 'matrix', 'proof', 'comparison', 'scenarios', 'faq'],
      tone: 'emerald',
      accent: 'from-emerald-400/20 via-cyan-500/10 to-transparent',
      heroMediaId: 'detail-quality-workspace',
      storyMediaId: 'about-story-notes',
      videoMediaId: 'about-team-review',
      pageExperience: { heroStyle: 'processMap', contentRhythm: 'timelineFirst', visualTreatment: 'minimal', mediaRole: 'storyImage' },
    };
  }

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

  if (path.startsWith('/testimonials/')) {
    return {
      layoutVariant: 'proof',
      heroComposition: 'metrics-bottom',
      sectionOrder: ['proof', 'comparison', 'scenarios', 'matrix', 'timeline', 'faq'],
      tone: 'teal',
      accent: 'from-teal-400/20 via-cyan-500/10 to-transparent',
      heroMediaId: 'detail-proof-library',
      storyMediaId: 'testimonials-story-handshake',
      videoMediaId: 'testimonials-client-call',
      pageExperience: { heroStyle: 'proofWall', contentRhythm: 'cardsDense', visualTreatment: 'proof', mediaRole: 'galleryStrip' },
    };
  }

  if (path.startsWith('/contact/')) {
    return {
      layoutVariant: 'contact',
      heroComposition: 'split-media',
      sectionOrder: ['checklist', 'timeline', 'matrix', 'comparison', 'proof', 'faq'],
      tone: 'blue',
      accent: 'from-blue-400/18 via-cyan-500/10 to-transparent',
      heroMediaId: 'detail-contact-ready',
      storyMediaId: 'subpage-contact-brief',
      videoMediaId: 'contact-organizing-tasks',
      pageExperience: { heroStyle: 'processMap', contentRhythm: 'timelineFirst', visualTreatment: 'technical', mediaRole: 'storyImage' },
    };
  }

  return undefined;
};

export const getPageVariation = (path: string): PageVariationConfig | undefined => {
  const normalized = routeKey(path);
  const variation = explicitVariations[normalized] ?? detailRouteVariations[normalized] ?? fallbackFamilyVariation(normalized);
  return variation ? enforceRouteVariety(normalized, variation) : undefined;
};
