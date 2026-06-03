import { serviceLibrary } from './serviceLibrary';

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface CompanyCapability {
  title: LocalizedText;
  description: LocalizedText;
  proof: LocalizedText;
  tone: string;
}

export interface TrustSignal {
  value: string;
  label: LocalizedText;
  note: LocalizedText;
}

export interface ServicePackage {
  name: LocalizedText;
  bestFor: LocalizedText;
  promise: LocalizedText;
  deliverables: LocalizedText[];
  accent: string;
}

export interface DeliveryArtifact {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ClientJourneyStep {
  phase: string;
  title: LocalizedText;
  description: LocalizedText;
  handoff: LocalizedText;
}

export interface IndustryUseCase {
  sector: LocalizedText;
  need: LocalizedText;
  solution: LocalizedText;
}

export interface CorporatePrinciple {
  title: LocalizedText;
  description: LocalizedText;
}

export interface NavGroupItem {
  label: LocalizedText;
  description: LocalizedText;
  to: string;
  badge?: LocalizedText;
}

export interface NavGroup {
  id: string;
  labelKey: string;
  fallbackLabel: LocalizedText;
  description: LocalizedText;
  mainTo: string;
  cta: LocalizedText;
  items: NavGroupItem[];
}

export interface DetailSection {
  title: LocalizedText;
  body: LocalizedText;
}

export interface DetailPageContent {
  slug: string;
  parentPath: string;
  parentLabel: LocalizedText;
  layoutVariant?: 'method' | 'service' | 'proof' | 'contact' | 'project' | 'editorial';
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  audience: LocalizedText;
  promise: LocalizedText;
  sections: DetailSection[];
  deliverables: LocalizedText[];
  useCases: LocalizedText[];
  cta: LocalizedText;
  accent: string;
  metrics?: Array<{
    value: string;
    label: LocalizedText;
  }>;
  faq?: Array<{
    question: LocalizedText;
    answer: LocalizedText;
  }>;
  insights?: DetailSection[];
  comparison?: Array<{
    before: LocalizedText;
    after: LocalizedText;
  }>;
  roadmap?: Array<{
    phase: string;
    title: LocalizedText;
    body: LocalizedText;
  }>;
  decisionMatrix?: Array<{
    label: LocalizedText;
    value: LocalizedText;
    note: LocalizedText;
  }>;
  scenarios?: Array<{
    title: LocalizedText;
    body: LocalizedText;
  }>;
  proofPoints?: Array<{
    title: LocalizedText;
    body: LocalizedText;
  }>;
  timeline?: Array<{
    phase: string;
    title: LocalizedText;
    body: LocalizedText;
    icon?: string;
    color?: string;
  }>;
  statsCounter?: Array<{
    number: string;
    label: LocalizedText;
    description: LocalizedText;
  }>;
  toolsDeliverables?: Array<{
    name: LocalizedText;
    description: LocalizedText;
    icon?: string;
    impact: LocalizedText;
  }>;
  testimonialSpotlight?: {
    quote: LocalizedText;
    author: LocalizedText;
    role: LocalizedText;
    avatar?: string;
    impact: LocalizedText;
  };
  checklist?: Array<{
    item: LocalizedText;
    details: LocalizedText;
  }>;
}

export type DetailWorldEnhancement = Pick<
  DetailPageContent,
  | 'metrics'
  | 'faq'
  | 'insights'
  | 'comparison'
  | 'roadmap'
  | 'decisionMatrix'
  | 'scenarios'
  | 'proofPoints'
  | 'timeline'
  | 'statsCounter'
  | 'toolsDeliverables'
  | 'testimonialSpotlight'
  | 'checklist'
>;

export interface ContactBriefContent {
  title: LocalizedText;
  summary: LocalizedText;
  fields: Array<{
    label: LocalizedText;
    hint: LocalizedText;
  }>;
  steps: DetailSection[];
}

export interface BlogCategoryPageContent {
  slug: string;
  label: LocalizedText;
  description: LocalizedText;
  categoryMatchers: string[];
  heroTitle: LocalizedText;
  heroLead: LocalizedText;
  metrics: Array<{
    value: string;
    label: LocalizedText;
  }>;
  pillars: Array<{
    stage: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
  }>;
  process: Array<{
    step: string;
    title: LocalizedText;
    body: LocalizedText;
  }>;
  deepDives: Array<{
    title: LocalizedText;
    body: LocalizedText;
  }>;
  faq: Array<{
    question: LocalizedText;
    answer: LocalizedText;
  }>;
  servicePath: string;
  serviceLabel: LocalizedText;
}

export const companyCapabilities: CompanyCapability[] = [
  {
    title: {
      ar: 'تفهم الرسالة قبل الشكل',
      en: 'Understand the message before the visuals',
    },
    description: {
      ar: 'من أول دقيقة تعرف ما يقدمه المكان، لماذا يهمك، وما الخطوة المناسبة لك بعدها.',
      en: 'From the first minute, you know what is offered, why it matters, and the right next step for you.',
    },
    proof: {
      ar: 'مناسب عندما تريد قرارًا أوضح بدون قراءة طويلة أو بحث متعب.',
      en: 'Useful when you want a clearer decision without long reading or tiring exploration.',
    },
    tone: 'from-cyan-400/18 via-sky-500/8 to-transparent',
  },
  {
    title: {
      ar: 'تشعر بالوضوح في كل تفصيلة',
      en: 'Feel clarity in every detail',
    },
    description: {
      ar: 'الحركة، التباعد، وضوح الكروت، وسرعة التفاعل تجعل رحلتك أسهل وتبني الثقة خطوة بخطوة.',
      en: 'Motion, spacing, card clarity, and interaction speed make your journey easier and build trust step by step.',
    },
    proof: {
      ar: 'كل جزء في الصفحة يساعدك تفهم أسرع بدل ما يزحم الشاشة.',
      en: 'Every part of the page helps you understand faster instead of crowding the screen.',
    },
    tone: 'from-emerald-400/16 via-teal-500/8 to-transparent',
  },
  {
    title: {
      ar: 'تجد مساحة تكبر مع احتياجك',
      en: 'Find room that grows with your needs',
    },
    description: {
      ar: 'تتنقل بين الخدمات، المقالات، دراسات الحالة، ومعارض الأعمال في بنية واضحة قابلة للتوسع.',
      en: 'You move through services, articles, case studies, and work galleries in a clear structure that can grow.',
    },
    proof: {
      ar: 'كلما زاد المحتوى، تظل الرحلة منظمة وسهلة المتابعة.',
      en: 'As the content grows, the journey stays organized and easy to follow.',
    },
    tone: 'from-amber-400/16 via-orange-500/8 to-transparent',
  },
];

export const trustSignals: TrustSignal[] = [
  {
    value: 'Clear path',
    label: { ar: 'تصل لما تحتاجه', en: 'Reach what you need' },
    note: { ar: 'تتعرف على الخدمات، الأعمال، وطريقة التواصل من مسار واحد واضح.', en: 'Explore services, work, and contact options through one clear path.' },
  },
  {
    value: 'Arabic-first',
    label: { ar: 'تقرأ بوضوح', en: 'Read with clarity' },
    note: { ar: 'صياغة عربية واتجاه مريح يساعدك تفهم العرض بدون ترجمة جامدة.', en: 'Arabic copy and flow that help you understand the offer without stiff translation.' },
  },
  {
    value: 'Search-ready',
    label: { ar: 'تجدنا أسرع', en: 'Find us faster' },
    note: { ar: 'صفحات منظمة تساعدك تصل للمعلومة من البحث أو التصفح مباشرة.', en: 'Organized pages help you reach information from search or browsing directly.' },
  },
  {
    value: 'After launch',
    label: { ar: 'تجربة لا تُترك وحدها', en: 'A cared-for experience' },
    note: { ar: 'متابعة وتحسينات تجعل التصفح أوضح وأكثر راحة مع الاستخدام.', en: 'Follow-up and refinements keep browsing clearer and more comfortable over time.' },
  },
];

export const servicePackages: ServicePackage[] = [
  {
    name: { ar: 'موقع شركة قيادي', en: 'Authority company website' },
    bestFor: { ar: 'الشركات التي تريد حضورًا رسميًا يشرح الخدمات ويقود للتواصل.', en: 'Companies that need a formal presence that explains services and drives inquiries.' },
    promise: { ar: 'موقع منظم يشبه شركة كبيرة من أول شاشة إلى صفحة التواصل.', en: 'A structured site that feels enterprise-grade from the first screen to contact.' },
    deliverables: [
      { ar: 'صفحات تعريف وخدمات منظمة', en: 'Organized company and service pages' },
      { ar: 'رسائل بيع واضحة ودعوات فعل', en: 'Clear sales messaging and calls to action' },
      { ar: 'SEO أساسي وتجهيز إطلاق', en: 'Basic SEO and launch setup' },
    ],
    accent: 'from-cyan-400/20 to-sky-500/5',
  },
  {
    name: { ar: 'منصة أو نظام خاص', en: 'Custom platform or system' },
    bestFor: { ar: 'الفرق التي تحتاج لوحة تحكم أو تجربة تشغيلية أو منتج تفاعلي.', en: 'Teams that need a dashboard, operational experience, or interactive product.' },
    promise: { ar: 'واجهة عملية تحوّل التعقيد الداخلي إلى تجربة سهلة ومقروءة.', en: 'A practical interface that turns internal complexity into a readable workflow.' },
    deliverables: [
      { ar: 'تدفقات استخدام وشاشات رئيسية', en: 'User flows and core screens' },
      { ar: 'مكونات قابلة لإعادة الاستخدام', en: 'Reusable interface components' },
      { ar: 'أساس قابل للتوسع', en: 'Scalable technical foundation' },
    ],
    accent: 'from-emerald-400/18 to-teal-500/5',
  },
  {
    name: { ar: 'تجربة بيع أو إطلاق', en: 'Launch or sales experience' },
    bestFor: { ar: 'منتج جديد، حملة، صفحة خدمة، أو عرض يحتاج إقناعًا سريعًا.', en: 'A new product, campaign, service page, or offer that needs fast persuasion.' },
    promise: { ar: 'صفحة مركزة تشرح القيمة وتقلل التردد قبل التواصل.', en: 'A focused page that explains value and reduces hesitation before contact.' },
    deliverables: [
      { ar: 'Hero قوي وسرد مزايا', en: 'Strong hero and value narrative' },
      { ar: 'دلائل ثقة وأسئلة شائعة', en: 'Trust signals and FAQs' },
      { ar: 'مسار تحويل واضح', en: 'Clear conversion path' },
    ],
    accent: 'from-amber-400/18 to-orange-500/5',
  },
];

export const deliveryArtifacts: DeliveryArtifact[] = [
  {
    title: { ar: 'خريطة الرسائل والمحتوى', en: 'Messaging and content map' },
    description: { ar: 'ترتيب ما يقال في كل قسم حتى لا يظهر الموقع كصفحات جميلة فقط.', en: 'A clear order for what each section says so the site is not only visually polished.' },
  },
  {
    title: { ar: 'نظام واجهة قابل للتكرار', en: 'Repeatable interface system' },
    description: { ar: 'مكونات وأقسام يمكن إعادة استخدامها في صفحات أخرى بدون فقدان التناسق.', en: 'Components and sections that can scale across pages without losing consistency.' },
  },
  {
    title: { ar: 'تجهيز إطلاق وتسليم', en: 'Launch and handoff setup' },
    description: { ar: 'تحسينات أداء، بيانات SEO، وروابط تواصل واضحة قبل النشر.', en: 'Performance refinements, SEO metadata, and clear contact routes before release.' },
  },
];

export const clientJourney: ClientJourneyStep[] = [
  {
    phase: '01',
    title: { ar: 'تشخيص تجاري سريع', en: 'Business diagnosis' },
    description: { ar: 'نحدد الجمهور، الاعتراضات، والرسالة التي يجب أن تصل قبل التصميم.', en: 'We define the audience, objections, and core message before design starts.' },
    handoff: { ar: 'ملخص أهداف واتجاه المحتوى', en: 'Goals and content direction brief' },
  },
  {
    phase: '02',
    title: { ar: 'هندسة التجربة', en: 'Experience architecture' },
    description: { ar: 'نرتب الأقسام، نقاط الثقة، ودعوات الفعل في مسار منطقي.', en: 'We organize sections, trust points, and calls to action into a logical journey.' },
    handoff: { ar: 'هيكل صفحات ومسار تحويل', en: 'Page structure and conversion path' },
  },
  {
    phase: '03',
    title: { ar: 'تصميم وبناء متوازي', en: 'Parallel design and build' },
    description: { ar: 'يتحول الاتجاه إلى واجهة حية مع مراجعات قصيرة وتحسينات مستمرة.', en: 'The direction becomes a live interface with short review loops and refinements.' },
    handoff: { ar: 'نسخة قابلة للمراجعة', en: 'Reviewable working build' },
  },
  {
    phase: '04',
    title: { ar: 'إطلاق وتحسين', en: 'Launch and refinement' },
    description: { ar: 'نراجع الأداء، الروابط، ووضوح الرسائل قبل وبعد النشر.', en: 'We check performance, links, and message clarity before and after publishing.' },
    handoff: { ar: 'موقع منشور وخطة متابعة', en: 'Published site and follow-up plan' },
  },
];

export const industryUseCases: IndustryUseCase[] = [
  {
    sector: { ar: 'شركات الخدمات', en: 'Service companies' },
    need: { ar: 'شرح عروض متعددة بدون تشتيت.', en: 'Explain multiple offers without confusion.' },
    solution: { ar: 'صفحات خدمات، مقارنة، أسئلة شائعة، وشهادات ثقة.', en: 'Service pages, comparisons, FAQs, and credibility proof.' },
  },
  {
    sector: { ar: 'التجارة الإلكترونية', en: 'E-commerce' },
    need: { ar: 'ثقة أسرع ومسار شراء أوضح.', en: 'Faster trust and clearer buying paths.' },
    solution: { ar: 'عرض منتجات منظم، مزايا، ضمانات، وسرعة تحميل.', en: 'Organized merchandising, benefits, guarantees, and speed.' },
  },
  {
    sector: { ar: 'التعليم والمنصات', en: 'Education and platforms' },
    need: { ar: 'تبسيط المحتوى والتفاعل.', en: 'Simplify content and interaction.' },
    solution: { ar: 'رحلات تعلم ولوحات تحكم وتجارب موبايل واضحة.', en: 'Learning journeys, dashboards, and clear mobile experiences.' },
  },
  {
    sector: { ar: 'الاستشارات والجهات المتخصصة', en: 'Consulting and specialized teams' },
    need: { ar: 'إظهار الخبرة دون لغة معقدة.', en: 'Show expertise without dense language.' },
    solution: { ar: 'دراسات حالة، منهجية عمل، ومحتوى قرار تنفيذي.', en: 'Case studies, process proof, and executive-level content.' },
  },
];

export const corporatePrinciples: CorporatePrinciple[] = [
  {
    title: { ar: 'الوضوح قبل الإبهار', en: 'Clarity before spectacle' },
    description: { ar: 'التفاصيل الكثيرة يجب أن تقود للفهم، لا أن تخفي الرسالة.', en: 'Rich detail should guide understanding, not bury the message.' },
  },
  {
    title: { ar: 'الثقة تُبنى على الأدلة', en: 'Trust is built through proof' },
    description: { ar: 'تظهر المشاريع، المنهجية، الأسئلة، والضمانات في أماكن تخدم قرار زائرك.', en: 'Projects, process, FAQs, and guarantees appear where they help your visitor decide.' },
  },
  {
    title: { ar: 'التوسع جزء من التصميم', en: 'Scalability is part of design' },
    description: { ar: 'الموقع الجيد لا ينتهي عند الإطلاق، بل يسمح بإضافة صفحات وخدمات لاحقًا.', en: 'A good site does not stop at launch; it allows more pages and services later.' },
  },
];

export const homeDetailPages: DetailPageContent[] = [
  {
    slug: 'visitor-journey',
    parentPath: '/home',
    parentLabel: { ar: 'الرئيسية', en: 'Home' },
    eyebrow: { ar: 'رحلة الزائر', en: 'Visitor Journey' },
    title: { ar: 'رحلة كاملة تجعل الزائر ينتقل من الفضول إلى طلب التواصل', en: 'A complete journey that moves visitors from curiosity to contact' },
    summary: { ar: 'هذه الصفحة تشرح كيف تُبنى الصفحة الرئيسية كمسار قرار: أول انطباع، فهم سريع، دليل ثقة، خدمات واضحة، ثم خطوة تواصل مريحة.', en: 'This page explains how a homepage becomes a decision path: first impression, quick understanding, trust proof, clear services, then a comfortable contact step.' },
    audience: { ar: 'لمن يريد أن يشعر زائره أن الموقع كبير ومنظم منذ أول دقيقة.', en: 'For anyone who wants visitors to feel the site is substantial and organized from the first minute.' },
    promise: { ar: 'كل قسم يقود لما بعده بحيث لا يضيع الزائر بين معلومات كثيرة بلا اتجاه.', en: 'Every section leads to the next so visitors do not get lost in rich information without direction.' },
    sections: [
      { title: { ar: 'أول انطباع محسوب', en: 'Calculated first impression' }, body: { ar: 'الزائر يرى فورًا من أنتم، ماذا تقدمون، ولماذا يستحق أن يكمل القراءة بدل الخروج.', en: 'Visitors immediately see who you are, what you offer, and why it is worth continuing instead of leaving.' } },
      { title: { ar: 'مسار فهم واضح', en: 'Clear understanding path' }, body: { ar: 'نرتب الخدمات، الأعمال، والأدلة بحيث تتحول الصفحة إلى جولة منظمة لا مجموعة أقسام متفرقة.', en: 'We order services, work, and proof so the page becomes an organized tour, not disconnected sections.' } },
      { title: { ar: 'نقطة تواصل طبيعية', en: 'Natural contact point' }, body: { ar: 'بعد أن يفهم الزائر القيمة ويرى الدليل، يصبح التواصل خطوة طبيعية لا قرارًا مفاجئًا.', en: 'After visitors understand value and see proof, contact becomes a natural step rather than a sudden ask.' } },
    ],
    deliverables: [{ ar: 'خريطة رحلة', en: 'Journey map' }, { ar: 'طبقات ثقة', en: 'Trust layers' }, { ar: 'دعوات فعل موزعة', en: 'Distributed CTAs' }],
    useCases: [{ ar: 'الصفحات الرئيسية', en: 'Homepages' }, { ar: 'مواقع الشركات', en: 'Company sites' }, { ar: 'إعادة ترتيب المحتوى', en: 'Content restructuring' }],
    cta: { ar: 'ناقش احتياج شركتك', en: 'Discuss your company need' },
    accent: 'from-cyan-400/18 via-white/[0.03] to-emerald-500/10',
    metrics: [
      { value: '5', label: { ar: 'محطات قرار داخل الرحلة', en: 'decision stations in the journey' } },
      { value: '3', label: { ar: 'طبقات ثقة قبل التواصل', en: 'trust layers before contact' } },
      { value: '1', label: { ar: 'مسار واضح للنهاية', en: 'clear path to the end' } },
    ],
  },
  {
    slug: 'pre-project-questions',
    parentPath: '/home',
    parentLabel: { ar: 'الرئيسية', en: 'Home' },
    eyebrow: { ar: 'أسئلة قبل التعاقد', en: 'Pre-project Questions' },
    title: { ar: 'إجابات كبيرة للأسئلة التي تمنع العميل من بدء المشروع', en: 'Large answers for the questions that block clients from starting' },
    summary: { ar: 'بدل أن تترك الزائر يسأل وحده عن الوقت، الدعم، الملكية، والنتيجة، نجعل هذه الأسئلة جزءًا من تجربة منظمة تبني الثقة.', en: 'Instead of leaving visitors alone with questions about timing, support, ownership, and outcomes, we turn those questions into an organized trust-building experience.' },
    audience: { ar: 'للشركات التي تريد تقليل التردد قبل أول رسالة.', en: 'For companies that want to reduce hesitation before the first message.' },
    promise: { ar: 'الزائر يجد إجابات واضحة قبل أن يضغط تواصل، فيبدأ الحديث بجديّة أكبر.', en: 'Visitors find clear answers before pressing contact, so the conversation starts with more seriousness.' },
    sections: [
      { title: { ar: 'التردد الطبيعي', en: 'Natural hesitation' }, body: { ar: 'العميل لا يرفض دائمًا، أحيانًا يحتاج أن يفهم ما سيحدث بعد التواصل وما الذي سيحصل عليه.', en: 'Clients do not always reject the offer; sometimes they need to understand what happens after contact and what they will receive.' } },
      { title: { ar: 'إجابات مرتبة', en: 'Organized answers' }, body: { ar: 'نرتب الأسئلة حسب رحلة القرار: قبل البداية، أثناء التنفيذ، وبعد الإطلاق.', en: 'We arrange questions by decision stage: before starting, during delivery, and after launch.' } },
      { title: { ar: 'ثقة قبل البيع', en: 'Trust before selling' }, body: { ar: 'الإجابة الجيدة لا تدافع، بل تطمئن وتوضح طريقة العمل وتفتح باب التواصل بثقة.', en: 'A good answer does not defend; it reassures, explains the workflow, and opens contact with confidence.' } },
    ],
    deliverables: [{ ar: 'FAQ عميق', en: 'Deep FAQ' }, { ar: 'رسائل طمأنة', en: 'Reassurance copy' }, { ar: 'خطوات ما بعد التواصل', en: 'Post-contact steps' }],
    useCases: [{ ar: 'صفحات البيع', en: 'Sales pages' }, { ar: 'صفحات التواصل', en: 'Contact pages' }, { ar: 'مواقع الخدمات', en: 'Service websites' }],
    cta: { ar: 'اسأل عن احتياج شركتك', en: 'Ask about your company need' },
    accent: 'from-amber-400/16 via-white/[0.03] to-cyan-500/10',
    metrics: [
      { value: '9+', label: { ar: 'أسئلة قرار متوقعة', en: 'expected decision questions' } },
      { value: '3', label: { ar: 'مراحل قبل وبعد الإطلاق', en: 'before and after launch stages' } },
      { value: '0', label: { ar: 'غموض في البداية', en: 'early ambiguity' } },
    ],
  },
];

export const aboutDetailPages: DetailPageContent[] = [
  {
    slug: 'story',
    parentPath: '/about',
    parentLabel: { ar: 'من نحن', en: 'About' },
    eyebrow: { ar: 'قصة نُطق', en: 'Notaq Story' },
    title: { ar: 'من فكرة حضور رقمي إلى طريقة عمل كاملة', en: 'From digital presence idea to a complete working method' },
    summary: { ar: 'هذه الصفحة تشرح كيف نفكر في بناء شركة رقمية تبدو واضحة، موثوقة، وقابلة للنمو من أول زيارة.', en: 'This page explains how we think about building a digital company presence that feels clear, trusted, and ready to grow from the first visit.' },
    audience: { ar: 'مناسبة لك إذا أردت فهم خلفية نُطق وطريقة التفكير قبل بدء المشروع.', en: 'For you if you want to understand Notaq�s background and thinking before starting.' },
    promise: { ar: 'حوّل موقع الشركة من بطاقة تعريف إلى أصل تجاري يساعد على الثقة والبيع.', en: 'Turn the company website from a profile card into a business asset that supports trust and sales.' },
    sections: [
      { title: { ar: 'البداية', en: 'The beginning' }, body: { ar: 'بدأت نُطق من ملاحظة بسيطة: أغلب المواقع العربية تبدو جميلة أحيانًا، لكنها لا تشرح القيمة بوضوح ولا تساعد الزائر على القرار.', en: 'Notaq started from a simple observation: many Arabic websites may look nice, but they often do not explain value clearly or help visitors decide.' } },
      { title: { ar: 'ما تغير', en: 'What changed' }, body: { ar: 'بدل التركيز على الشكل وحده، أصبحنا نبني التجربة حول الرسالة، الجمهور، نقاط الثقة، وطريقة انتقال الزائر من الفهم إلى التواصل.', en: 'Instead of focusing on visuals alone, we build around message, audience, trust points, and the visitor journey from understanding to contact.' } },
      { title: { ar: 'شكل النتيجة', en: 'The result' }, body: { ar: 'النتيجة موقع يجعل الشركة تظهر أمام زائرها كجهة منظمة، لا صفحة مؤقتة أو قالب جاهز.', en: 'The result is a site that presents the company to visitors as an organized business, not a temporary page or recycled template.' } },
    ],
    deliverables: [{ ar: 'رسالة شركة أوضح', en: 'Clearer company message' }, { ar: 'أقسام ثقة منظمة', en: 'Organized trust sections' }, { ar: 'لغة بصرية أكثر نضجًا', en: 'More mature visual language' }],
    useCases: [{ ar: 'مواقع الشركات', en: 'Company websites' }, { ar: 'الصفحات التعريفية', en: 'Profile pages' }, { ar: 'إعادة بناء الهوية الرقمية', en: 'Digital presence rebuilds' }],
    cta: { ar: 'ناقش قصة شركتك', en: 'Discuss your company story' },
    accent: 'from-cyan-400/18 via-white/[0.03] to-sky-500/10',
  },
  {
    slug: 'method',
    parentPath: '/about',
    parentLabel: { ar: 'من نحن', en: 'About' },
    eyebrow: { ar: 'منهجية العمل', en: 'Working Method' },
    title: { ar: 'طريقة تنفيذ تجعل التفاصيل الكثيرة سهلة', en: 'A delivery method that makes rich detail feel easy' },
    summary: { ar: 'نعمل بمراحل واضحة حتى لا يتحول المشروع الكبير إلى فوضى: تشخيص، هندسة محتوى، تصميم، بناء، ثم إطلاق وتحسين.', en: 'We work in clear stages so a large project does not become chaos: diagnosis, content architecture, design, build, then launch and refinement.' },
    audience: { ar: 'مناسبة للفرق التي تريد مشروعًا واضح الخطوات قبل الدفع أو التنفيذ.', en: 'For teams that want a clear process before payment or execution.' },
    promise: { ar: 'كل مرحلة لها مخرجات، وكل مخرج يساعد في تقليل التردد وسرعة القرار.', en: 'Every stage has outputs, and every output reduces hesitation and speeds decisions.' },
    sections: [
      { title: { ar: 'تشخيص قبل التصميم', en: 'Diagnosis before design' }, body: { ar: 'نبدأ بفهم نشاط الشركة والزائر المستهدف والاعتراضات المتوقعة قبل اختيار الألوان أو شكل الأقسام.', en: 'We start by understanding the company, target visitors, and likely objections before choosing colors or sections.' } },
      { title: { ar: 'هندسة المحتوى', en: 'Content architecture' }, body: { ar: 'نرتب الرسائل بحيث يظهر كل تفصيل في مكانه، ويقود الزائر من سؤال إلى إجابة.', en: 'We arrange messages so every detail appears in the right place and guides visitors from question to answer.' } },
      { title: { ar: 'تسليم قابل للتطوير', en: 'Scalable handoff' }, body: { ar: 'نبني الصفحات والمكونات بحيث يمكن إضافة خدمات ومقالات ودراسات حالة لاحقًا بسهولة.', en: 'We build pages and components so more services, articles, and case studies can be added later easily.' } },
    ],
    deliverables: [{ ar: 'خريطة محتوى', en: 'Content map' }, { ar: 'مكونات قابلة للتكرار', en: 'Reusable components' }, { ar: 'خطة إطلاق', en: 'Launch plan' }],
    useCases: [{ ar: 'المواقع الكبيرة', en: 'Large websites' }, { ar: 'منصات الخدمات', en: 'Service platforms' }, { ar: 'التوسع المرحلي', en: 'Phased expansion' }],
    cta: { ar: 'ناقش المنهجية معنا', en: 'Discuss the method with us' },
    accent: 'from-emerald-400/16 via-white/[0.03] to-teal-500/10',
  },
  {
    slug: 'culture',
    parentPath: '/about',
    parentLabel: { ar: 'من نحن', en: 'About' },
    eyebrow: { ar: 'القيم والثقافة', en: 'Values and Culture' },
    title: { ar: 'ثقافة تهتم بالوضوح قبل الاستعراض', en: 'A culture that values clarity before spectacle' },
    summary: { ar: 'نحب الإبهار، لكن الإبهار الحقيقي عندنا هو أن يفهم الزائر ما تقدمه الشركة بسرعة ويشعر بالثقة.', en: 'We like visual impact, but real impact means visitors understand what the company offers quickly and feel confident.' },
    audience: { ar: 'مناسبة لك إذا أردت معرفة المبادئ التي تحكم قرارات التصميم والتنفيذ.', en: 'For you if you want to know the principles behind design and implementation decisions.' },
    promise: { ar: 'تفاصيل كثيرة بدون ازدحام، وواجهة قوية بدون تضحية بالقراءة.', en: 'Rich details without clutter, and a strong interface without sacrificing readability.' },
    sections: corporatePrinciples.map((principle) => ({ title: principle.title, body: principle.description })),
    deliverables: [{ ar: 'قرارات تصميم مبررة', en: 'Reasoned design decisions' }, { ar: 'تجربة قراءة مريحة', en: 'Comfortable reading experience' }, { ar: 'ثقة مبنية على أدلة', en: 'Proof-based trust' }],
    useCases: [{ ar: 'العلامات الناشئة', en: 'Growing brands' }, { ar: 'الشركات الخدمية', en: 'Service companies' }, { ar: 'المواقع المؤسسية', en: 'Corporate websites' }],
    cta: { ar: 'اعرف كيف نشتغل', en: 'See how we work' },
    accent: 'from-amber-400/16 via-white/[0.03] to-orange-500/10',
  },
];

export const serviceDetailPages: DetailPageContent[] = [
  {
    slug: 'company-websites',
    parentPath: '/services',
    parentLabel: { ar: 'خدماتنا', en: 'Services' },
    eyebrow: { ar: 'مواقع الشركات', en: 'Company Websites' },
    title: { ar: 'موقع شركة يبدو كبيرًا من أول شاشة', en: 'A company website that feels substantial from the first screen' },
    summary: { ar: 'احصل على موقع يشرح شركتك، خدماتك، الثقة، وطريقة التواصل في تجربة واحدة منظمة.', en: 'Get a site that explains your company, services, trust, and contact path in one organized experience.' },
    audience: { ar: 'للشركات التي تريد حضورًا رسميًا أقوى أمام العملاء والشركاء.', en: 'For companies that need a stronger formal presence for clients and partners.' },
    promise: { ar: 'نقلل الغموض، ونرفع الإحساس بالاحتراف، ونجعل التواصل أسهل.', en: 'We reduce ambiguity, raise the professional impression, and make contact easier.' },
    sections: [
      { title: { ar: 'المشكلة', en: 'The problem' }, body: { ar: 'كثير من مواقع الشركات تعرض اسم الشركة فقط ولا تشرح القيمة أو الفروقات أو لماذا يتواصل الزائر الآن.', en: 'Many company websites only show the company name without explaining value, differentiation, or why visitors should contact now.' } },
      { title: { ar: 'الحل', en: 'The solution' }, body: { ar: 'نبني صفحات ذات رسالة واضحة، خدمات مقسمة، دلائل ثقة، وأسئلة شائعة تجعل القرار أسهل.', en: 'We build pages with clear messaging, structured services, proof points, and FAQs that make decisions easier.' } },
      { title: { ar: 'التجسيد الواقعي', en: 'Real-world shape' }, body: { ar: 'الموقع يظهر كواجهة شركة حقيقية: أقسام خدمات، منهجية عمل، أعمال سابقة، وتواصل مباشر.', en: 'The site looks like a real company front: service sections, working method, previous work, and direct contact.' } },
    ],
    deliverables: [{ ar: 'هيكل صفحات كامل', en: 'Full page structure' }, { ar: 'محتوى خدمات', en: 'Service content' }, { ar: 'SEO وتجهيز إطلاق', en: 'SEO and launch setup' }],
    useCases: [{ ar: 'شركات خدمات', en: 'Service companies' }, { ar: 'استشارات', en: 'Consulting' }, { ar: 'شركات تقنية', en: 'Tech companies' }],
    cta: { ar: 'اطلب موقع شركة', en: 'Request a company website' },
    accent: 'from-cyan-400/18 via-white/[0.03] to-blue-500/10',
  },
  {
    slug: 'ecommerce',
    parentPath: '/services',
    parentLabel: { ar: 'خدماتنا', en: 'Services' },
    eyebrow: { ar: 'تجارة إلكترونية', en: 'E-commerce' },
    title: { ar: 'متجر واضح يبني الثقة قبل الشراء', en: 'A clear store that builds trust before purchase' },
    summary: { ar: 'احصل على واجهات بيع تشرح المنتج، تسهل المقارنة، وتبرز الضمانات بدون تعقيد.', en: 'Get storefronts that explain products, simplify comparison, and show guarantees without friction.' },
    audience: { ar: 'للمتاجر والبراندات التي تريد تجربة بيع أكثر تنظيمًا.', en: 'For stores and brands that want a more organized sales experience.' },
    promise: { ar: 'منتجات أوضح، قرار شراء أسهل، وثقة أعلى في الرحلة.', en: 'Clearer products, easier buying decisions, and stronger journey trust.' },
    sections: [
      { title: { ar: 'المشكلة', en: 'The problem' }, body: { ar: 'الزائر يتردد حين لا يفهم الشحن، الضمان، أو الفرق بين المنتجات بسرعة.', en: 'Visitors hesitate when shipping, guarantees, or product differences are not clear quickly.' } },
      { title: { ar: 'الحل', en: 'The solution' }, body: { ar: 'نرتب الواجهة حول الصور، الفئات، نقاط الثقة، وسياسات واضحة تظهر قبل لحظة القرار.', en: 'We structure the interface around imagery, categories, trust points, and clear policies before the decision moment.' } },
      { title: { ar: 'التجسيد الواقعي', en: 'Real-world shape' }, body: { ar: 'واجهة متجر، صفحات منتجات، أقسام مزايا، وأسئلة شراء تجعل التجربة مريحة.', en: 'Storefront, product pages, benefit sections, and buying FAQs that make the experience comfortable.' } },
    ],
    deliverables: [{ ar: 'واجهة متجر', en: 'Storefront UI' }, { ar: 'مسار شراء واضح', en: 'Clear purchase path' }, { ar: 'أقسام ثقة وسياسات', en: 'Trust and policy sections' }],
    useCases: [{ ar: 'ملابس ومنتجات', en: 'Fashion and products' }, { ar: 'منتجات رقمية', en: 'Digital products' }, { ar: 'كتالوجات بيع', en: 'Sales catalogs' }],
    cta: { ar: 'ابدأ متجرًا أوضح', en: 'Start a clearer store' },
    accent: 'from-emerald-400/16 via-white/[0.03] to-teal-500/10',
  },
  {
    slug: 'custom-systems',
    parentPath: '/services',
    parentLabel: { ar: 'خدماتنا', en: 'Services' },
    eyebrow: { ar: 'أنظمة خاصة', en: 'Custom Systems' },
    title: { ar: 'لوحات وأنظمة تجعل التشغيل أسهل', en: 'Dashboards and systems that make operations easier' },
    summary: { ar: 'حوّل البيانات والعمليات الداخلية إلى واجهات عملية تساعد فريقك على المتابعة والقرار.', en: 'Turn internal data and workflows into practical interfaces that help your team monitor and decide.' },
    audience: { ar: 'للشركات التي تحتاج لوحة تحكم، CRM، نظام متابعة، أو تجربة تشغيلية.', en: 'For companies needing dashboards, CRM, tracking systems, or operational interfaces.' },
    promise: { ar: 'تقليل التعقيد الداخلي، وتقديم شاشة واضحة لكل دور داخل الفريق.', en: 'Reduce internal complexity and provide a clear screen for each team role.' },
    sections: [
      { title: { ar: 'المشكلة', en: 'The problem' }, body: { ar: 'الملفات المتفرقة والجداول اليدوية تجعل المتابعة بطيئة والأخطاء أكثر احتمالًا.', en: 'Scattered files and manual sheets slow follow-up and increase mistakes.' } },
      { title: { ar: 'الحل', en: 'The solution' }, body: { ar: 'تحصل على تدفقات وشاشات واضحة للمهام، البيانات، الحالات، والتقارير المهمة.', en: 'You get clear flows and screens for tasks, data, statuses, and important reports.' } },
      { title: { ar: 'التجسيد الواقعي', en: 'Real-world shape' }, body: { ar: 'Dashboard، فلاتر، جداول، بطاقات حالة، ونماذج إدخال سهلة.', en: 'Dashboards, filters, tables, status cards, and easy input forms.' } },
    ],
    deliverables: [{ ar: 'تدفقات استخدام', en: 'User flows' }, { ar: 'شاشات نظام', en: 'System screens' }, { ar: 'مكونات بيانات', en: 'Data components' }],
    useCases: [{ ar: 'CRM', en: 'CRM' }, { ar: 'لوحات إدارة', en: 'Admin dashboards' }, { ar: 'متابعة تشغيلية', en: 'Operational tracking' }],
    cta: { ar: 'صمم نظامك الخاص', en: 'Design your custom system' },
    accent: 'from-violet-400/16 via-white/[0.03] to-indigo-500/10',
  },
  {
    slug: 'ai-products',
    parentPath: '/services',
    parentLabel: { ar: 'خدماتنا', en: 'Services' },
    eyebrow: { ar: 'منتجات AI', en: 'AI Products' },
    title: { ar: 'تجارب ذكاء اصطناعي مفهومة ومفيدة', en: 'AI experiences that feel understandable and useful' },
    summary: { ar: 'اجعل واجهات مساعدي ومنتجات AI تشرح القيمة وتقلل رهبة التقنية.', en: 'Make AI assistant and product interfaces explain value and reduce technical intimidation.' },
    audience: { ar: 'لمن يريد منتجًا ذكيًا أو مساعدًا رقميًا له استخدام واضح.', en: 'For teams building smart products or assistants with a clear use case.' },
    promise: { ar: 'تجربة محادثة أو أداة ذكية يعرف المستخدم كيف يبدأ معها بسرعة.', en: 'A conversational or smart tool experience users know how to start with quickly.' },
    sections: [
      { title: { ar: 'المشكلة', en: 'The problem' }, body: { ar: 'منتجات AI قد تبدو مبهمة إذا لم تشرح ما تفعله وكيف يستفيد المستخدم منها.', en: 'AI products can feel vague if they do not explain what they do and how users benefit.' } },
      { title: { ar: 'الحل', en: 'The solution' }, body: { ar: 'نبني الواجهة حول أمثلة استخدام، رسائل توجيه، حالات فارغة، ونتائج مفهومة.', en: 'We build around use examples, guidance prompts, empty states, and understandable results.' } },
      { title: { ar: 'التجسيد الواقعي', en: 'Real-world shape' }, body: { ar: 'مساعد، صفحة منتج، تجربة onboarding، ولوحة نتائج أو محادثة واضحة.', en: 'Assistant, product page, onboarding flow, and clear result or chat interface.' } },
    ],
    deliverables: [{ ar: 'تصميم تجربة المحادثة', en: 'Conversation UX' }, { ar: 'واجهات المنتج', en: 'Product interfaces' }, { ar: 'حالات استخدام واضحة', en: 'Clear use cases' }],
    useCases: [{ ar: 'مساعد معرفة', en: 'Knowledge assistant' }, { ar: 'منتج SaaS ذكي', en: 'AI SaaS product' }, { ar: 'أدوات داخلية', en: 'Internal tools' }],
    cta: { ar: 'ابدأ منتج AI', en: 'Start an AI product' },
    accent: 'from-rose-400/14 via-white/[0.03] to-cyan-500/10',
  },
];

export const contactBriefContent: ContactBriefContent = {
  title: { ar: 'Brief سريع قبل التواصل', en: 'Quick project brief before contact' },
    summary: { ar: 'رتّب متطلبات شركتك قبل إرسال الرسالة، واجعل أول مكالمة أوضح وأسرع من البداية.', en: 'Organize your company requirements before sending the message, and make the first call clearer and faster from the start.' },
  fields: [
    { label: { ar: 'نوع المشروع', en: 'Project type' }, hint: { ar: 'موقع شركة، متجر، نظام، صفحة خدمة، أو منتج AI.', en: 'Company site, store, system, service page, or AI product.' } },
    { label: { ar: 'الهدف الأساسي', en: 'Primary goal' }, hint: { ar: 'ثقة، مبيعات، حجز، عرض خدمات، أو تنظيم تشغيل.', en: 'Trust, sales, booking, service presentation, or operations.' } },
    { label: { ar: 'الجمهور المستهدف', en: 'Target audience' }, hint: { ar: 'من سيزور الموقع؟ وما الذي يحتاج أن يفهمه؟', en: 'Who will visit, and what do they need to understand?' } },
    { label: { ar: 'المحتوى المتوفر', en: 'Available content' }, hint: { ar: 'شعار، صور، نصوص، مشاريع سابقة، أو حسابات تواصل.', en: 'Logo, images, copy, previous work, or social accounts.' } },
  ],
  steps: [
    { title: { ar: 'اكتب الفكرة ببساطة', en: 'Write the idea simply' }, body: { ar: 'لا تحتاج مواصفات تقنية. نحتاج فقط فهم النشاط والهدف.', en: 'No technical specs needed. We only need to understand the business and goal.' } },
    { title: { ar: 'حدد أول نتيجة تريدها', en: 'Choose the first result you want' }, body: { ar: 'هل تريد تواصل أكثر؟ ثقة أعلى؟ عرض خدمات أوضح؟', en: 'Do you want more inquiries, stronger trust, or clearer service presentation?' } },
    { title: { ar: 'أرسل التفاصيل', en: 'Send the details' }, body: { ar: 'بعدها نرد عليك بخطوة أولى واضحة ومناسبة لحجم المشروع.', en: 'Then we reply with a clear first step that fits the project size.' } },
  ],
};

export const contactDetailPages: DetailPageContent[] = [
  {
    slug: 'direct',
    parentPath: '/contact',
    parentLabel: { ar: 'تواصل معنا', en: 'Contact' },
    eyebrow: { ar: 'واتساب وهاتف', en: 'Phone and WhatsApp' },
    title: { ar: 'تواصل مباشر لكن بمنهج واضح لا رسالة عشوائية', en: 'Direct contact with a clear method, not a random message' },
    summary: { ar: 'هذه الصفحة تجعل التواصل السريع منظمًا: متى تستخدم واتساب، ماذا ترسل في أول رسالة، وكيف يتحول الحديث إلى خطوة مشروع واضحة.', en: 'This page keeps fast contact organized: when to use WhatsApp, what to send first, and how the conversation becomes a clear project step.' },
    audience: { ar: 'لمن يريد بداية سريعة بدون فقدان التفاصيل المهمة.', en: 'For people who want a fast start without losing important details.' },
    promise: { ar: 'تبدأ المحادثة بسرعة، لكن تظل مركزة حول الهدف والنطاق والخطوة التالية.', en: 'The conversation starts quickly while staying focused on goal, scope, and the next step.' },
    sections: [
      { title: { ar: 'متى تختار التواصل المباشر؟', en: 'When to choose direct contact' }, body: { ar: 'عندما تكون الفكرة واضحة مبدئيًا وتحتاج ردًا سريعًا أو ترتيب مكالمة قصيرة.', en: 'When the idea is initially clear and you need a quick reply or a short call.' } },
      { title: { ar: 'ماذا ترسل؟', en: 'What to send' }, body: { ar: 'اسم النشاط، نوع المشروع، الهدف الأول، رابط موجود إن وُجد، وأي موعد مهم.', en: 'Business name, project type, first goal, existing link if available, and any important deadline.' } },
      { title: { ar: 'ما الذي يحدث بعدها؟', en: 'What happens after' }, body: { ar: 'نرد بخطوة مناسبة: سؤالين مركزين، brief قصير، أو موعد نقاش حسب وضوح الفكرة.', en: 'We reply with the right step: focused questions, a short brief, or a discussion slot depending on clarity.' } },
    ],
    deliverables: [{ ar: 'رد أول منظم', en: 'Organized first reply' }, { ar: 'تحديد خطوة تالية', en: 'Next-step definition' }, { ar: 'تقدير نطاق مبدئي', en: 'Initial scope direction' }],
    useCases: [{ ar: 'طلبات عاجلة', en: 'Urgent inquiries' }, { ar: 'مكالمة تعريفية', en: 'Intro call' }, { ar: 'توضيح فكرة', en: 'Idea clarification' }],
    cta: { ar: 'ابدأ تواصل مباشر', en: 'Start direct contact' },
    accent: 'from-emerald-400/16 via-white/[0.03] to-cyan-500/10',
    metrics: [
      { value: '3', label: { ar: 'معلومات تكفي للبداية', en: 'details enough to start' } },
      { value: '1', label: { ar: 'خطوة تالية واضحة', en: 'clear next step' } },
      { value: '0', label: { ar: 'رسائل مشتتة', en: 'scattered messages' } },
    ],
  },
];

export const testimonialStoryPages: DetailPageContent[] = [
  {
    slug: 'trust-stories',
    parentPath: '/testimonials',
    parentLabel: { ar: 'آراء العملاء', en: 'Testimonials' },
    eyebrow: { ar: 'قصص ثقة', en: 'Trust Stories' },
    title: { ar: 'كيف يشعر زائرك بعد أن يصبح الموقع أوضح؟', en: 'How visitors feel when the website becomes clearer' },
    summary: { ar: 'هذه الصفحة تجمع نوع التغيير الذي نركز عليه: ثقة أعلى، فهم أسرع، وتواصل أسهل.', en: 'This page gathers the kind of change we focus on: stronger trust, faster understanding, and easier contact.' },
    audience: { ar: 'لمن يريد رؤية أثر التجربة على قرار التواصل وليس شكل التصميم فقط.', en: 'For those who want to see the effect on contact decisions, not only the visual look.' },
    promise: { ar: 'اجعل زائرك يشعر أن شركتك جاهزة ومنظمة من أول لحظة.', en: 'Make visitors feel your company is ready and organized from the first moment.' },
    sections: [
      { title: { ar: 'قبل التحسين', en: 'Before refinement' }, body: { ar: 'زائرك يدخل ولا يعرف بسرعة ما الخدمة أو لماذا يثق أو أين يبدأ.', en: 'Visitors arrive without quickly knowing the service, why to trust, or where to start.' } },
      { title: { ar: 'بعد التحسين', en: 'After refinement' }, body: { ar: 'الصفحة تقوده من الرسالة إلى الدليل إلى خطوة التواصل.', en: 'The page guides them from message to proof to contact.' } },
      { title: { ar: 'الأثر الحقيقي', en: 'The real effect' }, body: { ar: 'الأثر ليس في عدد الحركات، بل في تقليل الأسئلة التي تمنع زائرك من التواصل.', en: 'The impact is not in the amount of motion, but in reducing questions that block contact.' } },
    ],
    deliverables: [{ ar: 'رسائل ثقة', en: 'Trust messaging' }, { ar: 'قصص عميل', en: 'Client stories' }, { ar: 'دعوات فعل أوضح', en: 'Clearer calls to action' }],
    useCases: [{ ar: 'صفحات الخدمات', en: 'Service pages' }, { ar: 'مواقع الشركات', en: 'Company websites' }, { ar: 'إعادة التصميم', en: 'Redesigns' }],
    cta: { ar: 'اقرأ آراء العملاء', en: 'Read testimonials' },
    accent: 'from-cyan-400/16 via-white/[0.03] to-violet-500/10',
  },
  {
    slug: 'questions-before-deciding',
    parentPath: '/testimonials',
    parentLabel: { ar: 'آراء العملاء', en: 'Testimonials' },
    eyebrow: { ar: 'أسئلة قبل القرار', en: 'Questions Before Deciding' },
    title: { ar: 'ما الذي تحتاج أن تعرفه قبل أن تثق في تجربة عميل؟', en: 'What should you know before trusting a client story?' },
    summary: { ar: 'الشهادة القوية لا تكفي وحدها. نوضح السياق: ما المشكلة، كيف تغيرت التجربة، وما الذي يمكن أن يعنيه ذلك لاحتياج شركتك.', en: 'A strong testimonial is not enough by itself. We clarify context: the problem, how the experience changed, and what that can mean for your company need.' },
    audience: { ar: 'لمن يريد قراءة آراء العملاء بعين عملية لا كاقتباسات جميلة فقط.', en: 'For those who want to read testimonials practically, not only as nice quotes.' },
    promise: { ar: 'تفهم لماذا كانت التجربة ناجحة، وهل يشبه هذا ما تحتاجه شركتك.', en: 'You understand why the experience worked and whether it resembles what your company needs.' },
    sections: [
      { title: { ar: 'ما قبل التجربة', en: 'Before the experience' }, body: { ar: 'ننظر إلى حالة العميل قبل التحسين: هل كانت المشكلة وضوحًا، ثقة، سرعة، أو عرض خدمات؟', en: 'We look at the client state before improvement: was the issue clarity, trust, speed, or service presentation?' } },
      { title: { ar: 'أثناء التنفيذ', en: 'During delivery' }, body: { ar: 'القيمة تظهر في التواصل، المراجعات، ترتيب القرار، وطريقة تحويل الملاحظات إلى واجهة.', en: 'Value appears in communication, reviews, decision order, and turning feedback into interface improvements.' } },
      { title: { ar: 'بعد الإطلاق', en: 'After launch' }, body: { ar: 'الشهادة المهمة تشرح أثر التجربة على الثقة أو الفهم أو سهولة التواصل بعد النشر.', en: 'A useful testimonial explains the effect on trust, understanding, or contact ease after launch.' } },
    ],
    deliverables: [{ ar: 'سياق شهادة', en: 'Testimonial context' }, { ar: 'أثر قابل للفهم', en: 'Understandable impact' }, { ar: 'ربط بحالة شركتك', en: 'Connection to your company case' }],
    useCases: [{ ar: 'اختيار فريق تنفيذ', en: 'Choosing a delivery team' }, { ar: 'إعادة تصميم', en: 'Redesigns' }, { ar: 'صفحات ثقة', en: 'Trust pages' }],
    cta: { ar: 'ناقش تجربة مشابهة', en: 'Discuss a similar experience' },
    accent: 'from-violet-400/16 via-white/[0.03] to-cyan-500/10',
    metrics: [
      { value: '3', label: { ar: 'زوايا لفهم الشهادة', en: 'angles for reading proof' } },
      { value: '4', label: { ar: 'أنواع أثر يمكن قياسها', en: 'impact types to compare' } },
      { value: '1', label: { ar: 'قرار أكثر اطمئنانًا', en: 'more confident decision' } },
    ],
  },
];

export const blogCategoryPages: BlogCategoryPageContent[] = [
  {
    slug: 'ux-ui',
    label: { ar: 'UX/UI', en: 'UX/UI' },
    description: { ar: 'مقالات عن تجربة المستخدم، ترتيب المحتوى، وتصميم الواجهات.', en: 'Articles about user experience, content order, and interface design.' },
    categoryMatchers: ['UX Design', 'تجربة المستخدم', 'UI', 'User Experience'],
    heroTitle: { ar: 'تصميم تجربة لا يكتفي بالشكل، بل يصنع مسار قرار واضح من أول شاشة', en: 'Experience design that does more than look good: it creates a clear decision path from the first screen' },
    heroLead: { ar: 'هذه الصفحة تجمع منظور نُطق في UX/UI: كيف نفهم المستخدم، نرتب المحتوى، نبني نظام واجهة قابل للتوسع، ونضيف حركة دقيقة تساعد الزائر على الفهم لا على الانبهار فقط.', en: 'This page gathers Notaq thinking on UX/UI: understanding users, ordering content, building a scalable interface system, and adding precise motion that helps visitors understand rather than only feel impressed.' },
    metrics: [
      { value: '5', label: { ar: 'طبقات لتجربة مستخدم ناضجة', en: 'layers for mature UX' } },
      { value: '12+', label: { ar: 'نقطة قرار داخل الصفحة', en: 'decision points on a page' } },
      { value: '1', label: { ar: 'نظام واجهة قابل للتوسع', en: 'scalable interface system' } },
    ],
    pillars: [
      { stage: { ar: 'المشكلة', en: 'Problem' }, title: { ar: 'واجهة جميلة لا تعني تجربة مفهومة', en: 'A beautiful interface is not always understandable' }, body: { ar: 'المستخدم لا يقرأ التصميم كلوحة فنية. هو يبحث عن إجابة: ماذا أفعل الآن؟ لماذا أثق؟ وما الخطوة التالية؟ لذلك نعامل كل قسم كقرار صغير داخل رحلة أكبر.', en: 'Users do not read interfaces like artwork. They look for answers: what should I do now, why should I trust this, and what comes next? Every section is treated as a small decision inside a larger journey.' } },
      { stage: { ar: 'المنهج', en: 'Method' }, title: { ar: 'نبدأ بالرحلة قبل المكوّنات', en: 'We start with the journey before components' }, body: { ar: 'نحدد الأسئلة، الاعتراضات، لحظات الثقة، والبيانات التي يجب أن تظهر في كل مرحلة، ثم نحولها إلى wireframes وتدفقات استخدام واضحة.', en: 'We identify questions, objections, trust moments, and the information needed at each stage, then translate that into wireframes and clear user flows.' } },
      { stage: { ar: 'التنفيذ', en: 'Execution' }, title: { ar: 'Design system يحافظ على الاتساق', en: 'A design system keeps the experience consistent' }, body: { ar: 'الأزرار، الكروت، الجداول، حالات التحميل، ونصوص التوجيه كلها تتبع منطقًا واحدًا حتى تشعر الصفحة أنها جزء من نظام شركة لا تجميع عناصر منفصلة.', en: 'Buttons, cards, tables, loading states, and guidance copy follow one logic so the page feels like a company system, not a collection of disconnected elements.' } },
      { stage: { ar: 'النتيجة', en: 'Outcome' }, title: { ar: 'تفاعل يساعد على الفهم', en: 'Interaction that supports understanding' }, body: { ar: 'الحركة الدقيقة، hover states، والتنقل بين الأقسام تجعل القراءة أسهل وتوضح العلاقات بين المعلومات دون زيادة ضجيج بصري.', en: 'Micro-motion, hover states, and section transitions make reading easier and clarify relationships between information without visual noise.' } },
    ],
    process: [
      { step: '01', title: { ar: 'رسم رحلة المستخدم', en: 'Map the user journey' }, body: { ar: 'نحدد ما يعرفه الزائر عند الدخول وما يحتاج أن يفهمه قبل التواصل أو الشراء.', en: 'We define what visitors know when they arrive and what they must understand before contact or purchase.' } },
      { step: '02', title: { ar: 'Wireframes ورسائل', en: 'Wireframes and messaging' }, body: { ar: 'نرتب الأقسام، العناوين، الأدلة، والدعوات بحيث تتحرك الصفحة بمنطق واضح.', en: 'We order sections, headlines, proof, and calls to action so the page moves with clear logic.' } },
      { step: '03', title: { ar: 'نظام واجهة', en: 'Interface system' }, body: { ar: 'نبني مكونات قابلة للتكرار مع حالات تفاعل واستخدام حقيقية.', en: 'We build reusable components with real interaction and usage states.' } },
      { step: '04', title: { ar: 'اختبار القراءة', en: 'Reading test' }, body: { ar: 'نراجع هل يستطيع المستخدم فهم القيمة والقرار التالي بدون شرح خارجي.', en: 'We check whether users can understand value and the next step without external explanation.' } },
    ],
    deepDives: [
      { title: { ar: 'قابلية الاستخدام', en: 'Usability' }, body: { ar: 'وضوح labels، حجم الأزرار، ترتيب الحقول، ورسائل الخطأ تؤثر على الثقة بقدر تأثير الشكل العام.', en: 'Labels, button size, field order, and error messages affect trust as much as the visual style.' } },
      { title: { ar: 'Micro-interactions', en: 'Micro-interactions' }, body: { ar: 'التفاعل الصغير يخبر المستخدم أن النظام يستجيب له: فتح قائمة، اختيار فلتر، إرسال نموذج، أو الانتقال لقسم جديد.', en: 'Small interactions tell users the system is responding: opening a menu, choosing a filter, submitting a form, or moving to a new section.' } },
      { title: { ar: 'تصميم المحتوى', en: 'Content design' }, body: { ar: 'النص جزء من الواجهة. العنوان الجيد يقلل التردد، والوصف الجيد يمنع الأسئلة المتكررة.', en: 'Copy is part of the interface. A good headline reduces hesitation, and a good description prevents repeated questions.' } },
      { title: { ar: 'Responsive behavior', en: 'Responsive behavior' }, body: { ar: 'لا نضغط الديسكتوب داخل الموبايل. نعيد ترتيب الأولويات حتى تظل الرحلة مريحة على كل شاشة.', en: 'We do not squeeze desktop into mobile. We reorder priorities so the journey remains comfortable on every screen.' } },
    ],
    faq: [
      { question: { ar: 'هل UI/UX مهم لموقع شركة وليس تطبيق فقط؟', en: 'Does UX/UI matter for a company website, not only an app?' }, answer: { ar: 'نعم. موقع الشركة يحتوي قرارات كثيرة: فهم الخدمة، الثقة، مقارنة البدائل، وطلب التواصل. كل قرار يحتاج تجربة واضحة.', en: 'Yes. A company website contains many decisions: understanding the service, trusting it, comparing alternatives, and contacting. Every decision needs a clear experience.' } },
      { question: { ar: 'هل كثرة الحركة تجعل الموقع أفضل؟', en: 'Does more motion make the site better?' }, answer: { ar: 'ليس بالضرورة. الحركة الجيدة تشرح العلاقة بين العناصر أو تؤكد استجابة النظام، ولا تتحول إلى استعراض يبطئ القراءة.', en: 'Not necessarily. Good motion explains relationships or confirms system response, without becoming a show that slows reading.' } },
    ],
    servicePath: '/services/custom-systems',
    serviceLabel: { ar: 'استكشف تصميم الأنظمة والواجهات', en: 'Explore interface and system design' },
  },
  {
    slug: 'seo',
    label: { ar: 'SEO', en: 'SEO' },
    description: { ar: 'مقالات عن تحسين الظهور وبناء صفحات قابلة للفهم لمحركات البحث والزائر المستهدف.', en: 'Articles about search visibility and pages that are understandable for both search engines and target visitors.' },
    categoryMatchers: ['SEO', 'Search', 'محركات البحث'],
    heroTitle: { ar: 'SEO قوي يبدأ من صفحة مفهومة للناس قبل أن تكون مفهومة لمحركات البحث', en: 'Strong SEO starts with a page people understand before search engines understand it' },
    heroLead: { ar: 'ننظر إلى SEO كمنظومة كاملة: نية البحث، بنية الصفحة، العناوين، البيانات الوصفية، الربط الداخلي، سرعة التحميل، وقدرة الزائر على اتخاذ خطوة بعد الوصول من البحث.', en: 'We treat SEO as a complete system: search intent, page structure, headings, metadata, internal linking, loading speed, and the visitor ability to take action after arriving from search.' },
    metrics: [
      { value: '4', label: { ar: 'محاور لصفحة قابلة للظهور', en: 'pillars of visible pages' } },
      { value: '8+', label: { ar: 'إشارات بنية داخلية', en: 'internal structure signals' } },
      { value: '0', label: { ar: 'حشو كلمات بلا معنى', en: 'meaningless keyword stuffing' } },
    ],
    pillars: [
      { stage: { ar: 'المشكلة', en: 'Problem' }, title: { ar: 'الزيارات لا تكفي إذا لم تفهم الصفحة نية الباحث', en: 'Traffic is not enough if the page misses search intent' }, body: { ar: 'قد تظهر الصفحة في نتائج البحث، لكن الزائر يغادر إذا لم يجد إجابة مباشرة ووعدًا واضحًا وخطوة مناسبة. SEO التجاري يربط الظهور بالثقة والتحويل.', en: 'A page may appear in search results, but visitors leave if they do not find a direct answer, a clear promise, and a relevant next step. Commercial SEO connects visibility with trust and conversion.' } },
      { stage: { ar: 'المنهج', en: 'Method' }, title: { ar: 'نرتب الصفحة حول أسئلة حقيقية', en: 'We structure the page around real questions' }, body: { ar: 'نحدد الكلمات التي يستخدمها الجمهور، الأسئلة التي تمنعه من القرار، والموضوعات الفرعية التي يجب أن تظهر في صفحة واحدة أو في روابط داخلية.', en: 'We define the words the audience uses, the questions blocking decisions, and the subtopics that should appear on one page or through internal links.' } },
      { stage: { ar: 'التنفيذ', en: 'Execution' }, title: { ar: 'بنية واضحة لمحركات البحث والبشر', en: 'Clear structure for search engines and humans' }, body: { ar: 'العناوين، meta description، schema عند الحاجة، alt text، الروابط الداخلية، وسرعة التحميل كلها تعمل مع النص لا بدلاً عنه.', en: 'Headings, meta descriptions, schema when useful, alt text, internal links, and loading speed all work with the copy, not instead of it.' } },
      { stage: { ar: 'النتيجة', en: 'Outcome' }, title: { ar: 'صفحات تجيب وتبيع بهدوء', en: 'Pages that answer and sell quietly' }, body: { ar: 'الزائر يصل من البحث فيجد سياقًا، أمثلة، إثباتًا، وطريقًا واضحًا للمتابعة بدل قائمة كلمات مفتاحية.', en: 'Visitors arrive from search and find context, examples, proof, and a clear path forward instead of a list of keywords.' } },
    ],
    process: [
      { step: '01', title: { ar: 'تحليل نية البحث', en: 'Analyze search intent' }, body: { ar: 'نفرق بين الباحث الذي يريد تعلمًا، مقارنة، خدمة، أو قرار شراء.', en: 'We separate users looking to learn, compare, hire, or buy.' } },
      { step: '02', title: { ar: 'خريطة محتوى', en: 'Content map' }, body: { ar: 'نرتب H1/H2، الأسئلة، الأمثلة، والروابط الداخلية حول موضوع واضح.', en: 'We order H1/H2s, questions, examples, and internal links around a clear topic.' } },
      { step: '03', title: { ar: 'تهيئة تقنية', en: 'Technical readiness' }, body: { ar: 'نراجع الأداء، الصور، البيانات الوصفية، canonical، والسكيما عند الحاجة.', en: 'We review performance, images, metadata, canonical tags, and schema when useful.' } },
      { step: '04', title: { ar: 'قياس وتحسين', en: 'Measure and improve' }, body: { ar: 'نربط الظهور بسلوك الزائر: هل قرأ؟ هل ضغط؟ هل تواصل؟', en: 'We connect visibility with visitor behavior: did they read, click, and contact?' } },
    ],
    deepDives: [
      { title: { ar: 'Search intent', en: 'Search intent' }, body: { ar: 'الفرق بين "تصميم موقع شركة" و"أفضل شركة تصميم مواقع" يغير الرسالة وترتيب الأدلة داخل الصفحة.', en: 'The difference between �company website design� and �best web design company� changes the message and proof order.' } },
      { title: { ar: 'Internal linking', en: 'Internal linking' }, body: { ar: 'الروابط بين المقالات والخدمات والأعمال تساعد الزائر وجوجل على فهم بنية الموقع.', en: 'Links between articles, services, and work help visitors and Google understand the site structure.' } },
      { title: { ar: 'Schema و Metadata', en: 'Schema and metadata' }, body: { ar: 'لا نستخدمها كزينة تقنية، بل لتوضيح نوع الصفحة والسياق ومساعدة النتائج الغنية عند وجود فرصة حقيقية.', en: 'We do not use them as technical decoration, but to clarify page type and context when rich-result opportunities exist.' } },
      { title: { ar: 'Performance', en: 'Performance' }, body: { ar: 'الصفحة البطيئة تهدر الظهور. ضغط الصور، التحميل المؤجل، وحجم الجافاسكريبت جزء من SEO العملي.', en: 'A slow page wastes visibility. Image compression, deferred loading, and JavaScript weight are part of practical SEO.' } },
    ],
    faq: [
      { question: { ar: 'هل SEO يعني كتابة كلمات مفتاحية كثيرة؟', en: 'Does SEO mean writing many keywords?' }, answer: { ar: 'لا. الكلمات مهمة، لكن الأهم أن تجيب الصفحة نية البحث بوضوح وتقدم مسارًا منطقيًا للزائر.', en: 'No. Keywords matter, but the page must clearly answer search intent and give visitors a logical path.' } },
      { question: { ar: 'هل يمكن تحسين SEO بعد إطلاق الموقع؟', en: 'Can SEO be improved after launch?' }, answer: { ar: 'نعم، لكن الأفضل أن تبدأ البنية صحيحة من البداية: مسارات واضحة، عناوين سليمة، وسرعة جيدة.', en: 'Yes, but it is better to start with a healthy structure: clear routes, proper headings, and good speed.' } },
    ],
    servicePath: '/services/company-websites',
    serviceLabel: { ar: 'استكشف مواقع الشركات المهيأة للظهور', en: 'Explore SEO-ready company websites' },
  },
  {
    slug: 'ecommerce',
    label: { ar: 'التجارة الإلكترونية', en: 'E-commerce' },
    description: { ar: 'مقالات عن المتاجر، الثقة، التحويل، وتجربة الشراء.', en: 'Articles about stores, trust, conversion, and buying experience.' },
    categoryMatchers: ['E-commerce', 'التجارة الإلكترونية'],
    heroTitle: { ar: 'المتجر القوي ليس كتالوج منتجات، بل رحلة ثقة وشراء وما بعد شراء', en: 'A strong store is not a product catalog, but a journey of trust, purchase, and post-purchase care' },
    heroLead: { ar: 'نجمع هنا أفكار نُطق عن المتاجر: كيف يرى العميل المنتج، كيف يطمئن قبل الدفع، كيف يمر من السلة إلى checkout، وكيف يشعر بعد الشراء أن العلامة منظمة.', en: 'This gathers Notaq thinking on stores: how customers see products, feel safe before payment, move from cart to checkout, and feel after purchase that the brand is organized.' },
    metrics: [
      { value: '6', label: { ar: 'لحظات ثقة قبل الدفع', en: 'trust moments before payment' } },
      { value: '3', label: { ar: 'مراحل حرجة في الشراء', en: 'critical buying stages' } },
      { value: '1', label: { ar: 'رحلة متصلة بعد الطلب', en: 'connected post-order journey' } },
    ],
    pillars: [
      { stage: { ar: 'المشكلة', en: 'Problem' }, title: { ar: 'العميل لا يترك المتجر بسبب المنتج فقط', en: 'Customers do not leave only because of the product' }, body: { ar: 'أحيانًا يترك العميل لأن المقاسات غير واضحة، الصور لا تكفي، الشحن غامض، أو خطوة الدفع تبدو غير مطمئنة. الثقة هنا جزء من التصميم.', en: 'Customers often leave because sizes are unclear, images are weak, shipping is vague, or payment feels unsafe. Trust is part of the design.' } },
      { stage: { ar: 'المنهج', en: 'Method' }, title: { ar: 'نصمم الشراء كسلسلة طمأنة', en: 'We design buying as a chain of reassurance' }, body: { ar: 'كل خطوة من التصنيف إلى صفحة المنتج إلى السلة تحتاج دليلًا بسيطًا: تفاصيل، ضمان، مراجعات، سياسة إرجاع، أو رسالة متابعة.', en: 'Every step from category to product page to cart needs simple proof: details, guarantee, reviews, return policy, or follow-up message.' } },
      { stage: { ar: 'التنفيذ', en: 'Execution' }, title: { ar: 'Checkout واضح وسريع', en: 'A clear and fast checkout' }, body: { ar: 'نقلل الحقول غير الضرورية، نوضح تفاصيل الطلب قبل المفاجأة، ونحافظ على تفاعل سريع في الموبايل حيث تحدث أغلب القرارات.', en: 'We reduce unnecessary fields, clarify order details before surprises, and keep interaction fast on mobile where most decisions happen.' } },
      { stage: { ar: 'النتيجة', en: 'Outcome' }, title: { ar: 'شراء أسهل وعودة أقوى', en: 'Easier purchase and stronger return' }, body: { ar: 'الرحلة لا تنتهي عند الدفع. رسائل التأكيد، التتبع، والدعم تجعل العميل يشعر أن العلامة تستحق العودة.', en: 'The journey does not end at payment. Confirmation messages, tracking, and support make customers feel the brand is worth returning to.' } },
    ],
    process: [
      { step: '01', title: { ar: 'تصنيف ومنتجات', en: 'Categories and products' }, body: { ar: 'نبني طريقة اكتشاف تجعل العميل يصل للمنتج الصحيح دون مجهود.', en: 'We structure discovery so customers reach the right product without effort.' } },
      { step: '02', title: { ar: 'صفحة منتج مقنعة', en: 'Persuasive product page' }, body: { ar: 'نرتب الصور، المزايا، الضمان، والمراجعات حسب قرار الشراء.', en: 'We order images, benefits, guarantees, and reviews around the buying decision.' } },
      { step: '03', title: { ar: 'سلة و Checkout', en: 'Cart and checkout' }, body: { ar: 'نقلل التردد ونوضح الشحن والدفع والخطوة التالية.', en: 'We reduce hesitation and clarify shipping, payment, and the next step.' } },
      { step: '04', title: { ar: 'ما بعد الشراء', en: 'After purchase' }, body: { ar: 'نصمم رسائل وتحديثات تجعل الثقة تمتد بعد إغلاق الطلب.', en: 'We design messages and updates that extend trust after the order closes.' } },
    ],
    deepDives: [
      { title: { ar: 'Product detail', en: 'Product detail' }, body: { ar: 'الصور وحدها لا تبيع. المقاسات، الخامات، الاستخدام، المقارنة، والأسئلة الشائعة تصنع قرارًا أوضح.', en: 'Images alone do not sell. Sizes, materials, usage, comparisons, and FAQs make the decision clearer.' } },
      { title: { ar: 'Trust signals', en: 'Trust signals' }, body: { ar: 'الدفع الآمن، سياسة الإرجاع، التقييمات، وطرق التواصل يجب أن تظهر في لحظات القرار لا في نهاية بعيدة.', en: 'Safe payment, return policy, reviews, and contact routes should appear at decision moments, not far away at the end.' } },
      { title: { ar: 'Offers and bundles', en: 'Offers and bundles' }, body: { ar: 'العروض القوية لا تكون مزعجة. نعرضها عندما تساعد العميل على اختيار أفضل، لا عندما تقاطع الشراء.', en: 'Strong offers are not noisy. We show them when they help customers choose better, not when they interrupt buying.' } },
      { title: { ar: 'Retention', en: 'Retention' }, body: { ar: 'تجربة ما بعد الشراء، الرسائل، والدعم تصنع عودة العميل أكثر من خصم سريع بلا نظام.', en: 'Post-purchase experience, messages, and support drive return visits more than a quick discount without a system.' } },
    ],
    faq: [
      { question: { ar: 'هل أهم شيء في المتجر هو شكل صفحة المنتج؟', en: 'Is the product page visual style the most important thing?' }, answer: { ar: 'الشكل مهم، لكن الوضوح والثقة أهم: معلومات المنتج، الشحن، الدفع، الإرجاع، والدعم.', en: 'Visual style matters, but clarity and trust matter more: product information, shipping, payment, returns, and support.' } },
      { question: { ar: 'هل تحسين checkout وحده يكفي؟', en: 'Is improving checkout alone enough?' }, answer: { ar: 'لا. checkout مهم، لكنه يأتي بعد رحلة كاملة من الاكتشاف والثقة وفهم المنتج.', en: 'No. Checkout matters, but it comes after a full journey of discovery, trust, and product understanding.' } },
    ],
    servicePath: '/services/ecommerce',
    serviceLabel: { ar: 'استكشف بناء المتاجر وتجارب الشراء', en: 'Explore e-commerce experiences' },
  },
];

const richCopy = (ar: string, en: string): LocalizedText => ({ ar, en });

const makeInternalDetailPage = (
  slug: string,
  parentPath: string,
  parentLabel: LocalizedText,
  layoutVariant: NonNullable<DetailPageContent['layoutVariant']>,
  eyebrow: LocalizedText,
  title: LocalizedText,
  summary: LocalizedText,
  accent: string,
): DetailPageContent => ({
  slug,
  parentPath,
  parentLabel,
  layoutVariant,
  eyebrow,
  title,
  summary,
  audience: richCopy(
    'مناسبة لمن يريد صفحة داخلية لا تكتفي بعنوان مختصر، بل تشرح السياق والقرار والنتيجة المتوقعة بتفاصيل واضحة.',
    'For teams that need an internal page that explains context, decision logic, and expected outcomes with real depth.',
  ),
  promise: richCopy(
    'الزائر يخرج بفهم عملي لما يحدث، وما الذي سيستلمه، ولماذا هذه الصفحة مختلفة عن صفحة عامة أو بطاقة مختصرة.',
    'Visitors leave with a practical understanding of what happens, what they receive, and why the page is more than a short card.',
  ),
  sections: [
    {
      title: richCopy('السياق قبل التفاصيل', 'Context before detail'),
      body: richCopy(
        'نبدأ بتوضيح سبب وجود الصفحة وما القرار الذي تساعد الزائر على اتخاذه، حتى لا تبدو التفاصيل كثيرة بلا اتجاه.',
        'We start by clarifying why the page exists and which decision it helps visitors make, so depth never feels directionless.',
      ),
    },
    {
      title: richCopy('طبقات فهم متدرجة', 'Layered understanding'),
      body: richCopy(
        'المحتوى يقسم إلى طبقات: وعد واضح، أمثلة، مراحل، اعتراضات، ثم دعوة فعل مناسبة للحظة نضج القرار.',
        'The content is layered: clear promise, examples, stages, objections, then a CTA that matches the visitor decision stage.',
      ),
    },
    {
      title: richCopy('إثباتات لا تشبه الحشو', 'Proof without filler'),
      body: richCopy(
        'نستخدم الأرقام والقوائم والمقارنات والسيناريوهات كأدلة تساعد على الفهم، لا كزينة لملء المساحة.',
        'Metrics, lists, comparisons, and scenarios work as proof that supports understanding, not decoration to fill space.',
      ),
    },
    {
      title: richCopy('خطوة تالية واضحة', 'Clear next step'),
      body: richCopy(
        'في نهاية الصفحة يعرف الزائر هل يحتاج قراءة أكثر، إرسال brief، مشاهدة مشروع، أو بدء تواصل مباشر.',
        'By the end, visitors know whether to read more, send a brief, view work, or start direct contact.',
      ),
    },
  ],
  deliverables: [
    richCopy('خريطة محتوى تفصيلية', 'Detailed content map'),
    richCopy('مقارنات قبل وبعد', 'Before-and-after comparisons'),
    richCopy('سيناريوهات استخدام واقعية', 'Realistic usage scenarios'),
    richCopy('أسئلة وإجابات قبل القرار', 'Decision-stage FAQs'),
    richCopy('قائمة فحص قابلة للتنفيذ', 'Actionable checklist'),
  ],
  useCases: [
    richCopy('صفحات الخدمات الطويلة', 'Long service pages'),
    richCopy('صفحات الثقة والإثبات', 'Trust and proof pages'),
    richCopy('صفحات القرار قبل التواصل', 'Pre-contact decision pages'),
    richCopy('صفحات الشركات متعددة الأقسام', 'Multi-section company pages'),
  ],
  cta: richCopy('حوّل التفاصيل إلى brief واضح', 'Turn the details into a clear brief'),
  accent,
  metrics: [
    { value: '8+', label: richCopy('كتل محتوى داخلية', 'internal content blocks') },
    { value: '5', label: richCopy('أنواع أدلة مختلفة', 'different proof types') },
    { value: '0', label: richCopy('كروت ضخمة بلا وظيفة', 'large cards without purpose') },
  ],
  faq: [
    {
      question: richCopy('هل كثرة التفاصيل ستجعل الصفحة ثقيلة؟', 'Will rich detail make the page heavy?'),
      answer: richCopy(
        'لا، لأن التفاصيل تقسم إلى وحدات قصيرة ومتنوعة، مع عناوين واضحة ومساحات قراءة مريحة على الديسكتوب والموبايل.',
        'No. Details are divided into short varied modules with clear headings and comfortable reading on desktop and mobile.',
      ),
    },
    {
      question: richCopy('كيف تختلف هذه الصفحة عن صفحة عادية؟', 'How is this different from a normal page?'),
      answer: richCopy(
        'الصفحة العادية تعرض معلومات، أما الصفحة العميقة فتقود قرار الزائر عبر سياق وإثبات ومقارنة وخطوة تالية.',
        'A normal page presents information; a deep page guides a visitor decision through context, proof, comparison, and a next step.',
      ),
    },
    {
      question: richCopy('هل يمكن إضافة صفحات أكثر لاحقاً؟', 'Can more pages be added later?'),
      answer: richCopy(
        'نعم، لأن القوالب مبنية كعائلات تصميم ومحتوى، مما يسمح بالتوسع بدون تكرار ممل أو فوضى في النافجيشن.',
        'Yes. The layouts are built as content and design families, allowing expansion without repetitive or chaotic navigation.',
      ),
    },
  ],
});

const makeDeepEnhancement = (page: DetailPageContent): DetailWorldEnhancement => ({
  insights: [
    { title: richCopy('إشارة القرار الأساسية', 'Primary decision signal'), body: page.summary },
    { title: richCopy('ما الذي يقلل التردد؟', 'What reduces hesitation?'), body: page.promise },
    { title: richCopy('لماذا هذه الصفحة مختلفة؟', 'Why this page is different'), body: richCopy('لأنها تجمع بين الشرح، الإثبات، والمقارنة بدل الاكتفاء بوصف قصير.', 'It combines explanation, proof, and comparison instead of relying on a short description.') },
    { title: richCopy('كيف تخدم الموبايل؟', 'How it serves mobile'), body: richCopy('كل كتلة قصيرة بما يكفي للقراءة على شاشة صغيرة، لكن مرتبطة بسياق الصفحة الكامل.', 'Each block is short enough for small screens while remaining connected to the full page context.') },
  ],
  comparison: [
    { before: richCopy('صفحة قصيرة تترك الأسئلة مفتوحة وتطلب التواصل بسرعة.', 'A short page leaves questions open and asks for contact too early.'), after: richCopy('صفحة طويلة منظمة تجيب وتثبت ثم تقترح الخطوة المناسبة.', 'A structured long page answers, proves, then suggests the right next step.') },
    { before: richCopy('نفس شكل الكروت يتكرر في كل صفحة داخلية.', 'The same card pattern repeats across internal pages.'), after: richCopy('كل عائلة صفحات لها إيقاع مختلف يناسب هدفها ومحتواها.', 'Each page family has a different rhythm that fits its goal and content.') },
    { before: richCopy('تفاصيل كثيرة بلا ترتيب تجعل الزائر يمر بسرعة.', 'Many unordered details make visitors skim away.'), after: richCopy('تفاصيل كثيرة مقسمة إلى مراحل تجعل القراءة أسهل وأعمق.', 'Many staged details make reading easier and deeper.') },
  ],
  roadmap: [
    { phase: '01', title: richCopy('تحديد السؤال', 'Define the question'), body: richCopy('نحدد السؤال التجاري أو النفسي الذي يجب أن تجيب عنه الصفحة.', 'We define the business or emotional question the page must answer.') },
    { phase: '02', title: richCopy('بناء السرد', 'Build the narrative'), body: richCopy('نرتب الوعد، الدليل، الاعتراضات، والمخرجات في تسلسل واضح.', 'We order the promise, proof, objections, and outputs in a clear sequence.') },
    { phase: '03', title: richCopy('تنويع العرض', 'Vary the presentation'), body: richCopy('نستخدم جداول، timelines، قوائم، وكتل glass حتى لا تبدو الصفحة كتلة نص واحدة.', 'We use tables, timelines, lists, and glass blocks so the page never feels like one wall of text.') },
    { phase: '04', title: richCopy('تحسين القراءة', 'Improve readability'), body: richCopy('نراجع الديسكتوب والموبايل للتأكد من أن كل قسم له مساحة ووظيفة.', 'We review desktop and mobile so every section has space and purpose.') },
  ],
  decisionMatrix: [
    { label: richCopy('القارئ السريع', 'Fast scanner'), value: richCopy('يحتاج عناوين ومؤشرات', 'Needs headings and signals'), note: richCopy('نضع خلاصة ومقاييس مبكرة تساعده على الفهم السريع.', 'We place summaries and metrics early to help quick understanding.') },
    { label: richCopy('القارئ المتردد', 'Hesitant reader'), value: richCopy('يحتاج مقارنة وضمانات', 'Needs comparison and reassurance'), note: richCopy('نضيف قبل/بعد وFAQ وأدلة ثقة في مواضع القرار.', 'We add before/after, FAQ, and trust proof at decision points.') },
    { label: richCopy('القارئ الجاد', 'Serious reader'), value: richCopy('يحتاج مراحل ومخرجات', 'Needs stages and deliverables'), note: richCopy('نوضح ماذا يحدث، ماذا يستلم، وكيف تقاس الجودة.', 'We explain what happens, what is delivered, and how quality is measured.') },
  ],
  scenarios: [
    { title: richCopy('زائر يريد فهم سريع', 'Visitor wants fast clarity'), body: richCopy('يرى العنوان، الوعد، والمقاييس ثم يقرر هل يكمل القراءة.', 'They see the title, promise, and metrics, then decide whether to keep reading.') },
    { title: richCopy('عميل يقارن بدائل', 'Client comparing options'), body: richCopy('يستخدم المقارنات والـ FAQ لمعرفة الفرق بين صفحة منظمة وصفحة شكلية.', 'They use comparisons and FAQs to see the difference between a structured page and a decorative one.') },
    { title: richCopy('فريق يريد تفاصيل تنفيذ', 'Team needs execution details'), body: richCopy('يراجع المراحل والمخرجات وقائمة الفحص قبل إرسال brief.', 'They review stages, deliverables, and checklist items before sending a brief.') },
  ],
  proofPoints: [
    { title: richCopy('عمق قابل للتصفح', 'Browsable depth'), body: richCopy('الصفحة طويلة لكنها مقسمة إلى وحدات يسهل مسحها وقراءتها.', 'The page is long but divided into units that are easy to scan and read.') },
    { title: richCopy('اختلاف بصري حقيقي', 'Real visual variety'), body: richCopy('كل عائلة تستخدم تركيبة مختلفة من الأقسام بدل تكرار نفس الكروت.', 'Each family uses a different section mix instead of repeating the same cards.') },
    { title: richCopy('محتوى يخدم القرار', 'Decision-focused content'), body: richCopy('كل فقرة مرتبطة بسؤال أو اعتراض أو خطوة تالية.', 'Every paragraph connects to a question, objection, or next step.') },
  ],
  timeline: [
    { phase: '01', title: richCopy('قراءة أولى', 'First read'), body: richCopy('التقاط المعنى من الهيرو والمقاييس.', 'Capture the meaning from hero and metrics.'), icon: 'Eye', color: 'cyan' },
    { phase: '02', title: richCopy('تفاصيل منظمة', 'Organized detail'), body: richCopy('الانتقال بين طبقات المحتوى بدون فراغات كبيرة.', 'Move between content layers without large empty gaps.'), icon: 'Layers', color: 'emerald' },
    { phase: '03', title: richCopy('قرار واضح', 'Clear decision'), body: richCopy('الوصول إلى CTA بعد إجابات كافية.', 'Reach the CTA after enough answers.'), icon: 'CheckCircle', color: 'amber' },
  ],
  toolsDeliverables: [
    { name: richCopy('Content Map', 'Content Map'), description: richCopy('خريطة تربط كل قسم بسؤال أو اعتراض.', 'A map connecting every section to a question or objection.'), icon: 'FileText', impact: richCopy('تمنع الحشو وتحافظ على التركيز.', 'Prevents filler and keeps focus.') },
    { name: richCopy('Decision Matrix', 'Decision Matrix'), description: richCopy('مصفوفة توضح احتياجات أنواع مختلفة من الزوار.', 'A matrix showing needs of different visitor types.'), icon: 'Grid', impact: richCopy('تجعل الصفحة مفيدة لأكثر من نوع قارئ.', 'Makes the page useful for more than one reader type.') },
    { name: richCopy('Launch Checklist', 'Launch Checklist'), description: richCopy('قائمة مراجعة قبل نشر أو توسيع الصفحة.', 'A checklist before publishing or expanding the page.'), icon: 'ListChecks', impact: richCopy('تقلل الأخطاء وتثبت الجودة.', 'Reduces mistakes and stabilizes quality.') },
  ],
  checklist: [
    { item: richCopy('الهيرو يحتوي صورة/فيديو ونص واضح', 'Hero has media and clear copy'), details: richCopy('لا يوجد كارت ضخم يحجب الخلفية أو يترك فراغاً بلا معنى.', 'No oversized card blocks the backdrop or leaves meaningless space.') },
    { item: richCopy('كل قسم يجيب سؤالاً مختلفاً', 'Each section answers a different question'), details: richCopy('العناوين ليست متكررة، وكل كتلة لها وظيفة قرار واضحة.', 'Headings are not repetitive, and every block has a clear decision role.') },
    { item: richCopy('الديسكتوب والموبايل لهما إيقاع مناسب', 'Desktop and mobile have proper rhythm'), details: richCopy('التفاصيل لا تتكدس على الموبايل ولا تترك فجوات كبيرة على الديسكتوب.', 'Details do not crowd mobile or leave large desktop gaps.') },
    { item: richCopy('لا توجد صور أشخاص كأفاتار للفيدباك', 'No person avatar photos for feedback'), details: richCopy('الثقة تظهر عبر اقتباس، رقم، أو رمز بصري لا عبر صور أشخاص.', 'Trust is shown through quote marks, metrics, or visual symbols rather than person photos.') },
  ],
});

const addedHomePages = [
  makeInternalDetailPage('homepage-blueprint', '/home', richCopy('الرئيسية', 'Home'), 'editorial', richCopy('خريطة بناء الصفحة الرئيسية', 'Homepage blueprint'), richCopy('كيف تتحول الصفحة الرئيسية إلى خريطة قرار واضحة لا مجرد مقدمة جميلة', 'How the homepage becomes a clear decision map, not only a polished introduction'), richCopy('نرتب أول شاشة، أقسام الثقة، الخدمات، الأعمال، والأسئلة بحيث يفهم الزائر قيمة الشركة ويتحرك للخطوة التالية بثقة.', 'We order the first screen, trust sections, services, work, and questions so visitors understand value and move confidently to the next step.'), 'from-cyan-400/18 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('trust-layers', '/home', richCopy('الرئيسية', 'Home'), 'proof', richCopy('طبقات الثقة', 'Trust layers'), richCopy('أين تظهر الأدلة والضمانات داخل أول زيارة حتى لا يظل الزائر متردداً؟', 'Where proof and reassurance appear during the first visit so visitors do not stay hesitant'), richCopy('نوزع الشهادات، الأرقام، المنهجية، ونقاط الضمان في لحظات القراءة التي يظهر فيها التردد بدلاً من تركها في نهاية الصفحة.', 'We distribute testimonials, numbers, method, and reassurance at hesitation moments instead of leaving them at the bottom.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('conversion-path', '/home', richCopy('الرئيسية', 'Home'), 'method', richCopy('مسار التحويل', 'Conversion path'), richCopy('المسار العملي من قراءة أول عنوان إلى إرسال طلب تواصل جاد', 'The practical path from reading the first headline to sending a serious enquiry'), richCopy('نصمم الانتقالات والـ CTA والرسائل الصغيرة بحيث يشعر الزائر أن التواصل نتيجة طبيعية للفهم وليس ضغطاً مفاجئاً.', 'We design transitions, CTAs, and microcopy so contact feels like a natural result of understanding, not a sudden push.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('mobile-first-journey', '/home', richCopy('الرئيسية', 'Home'), 'method', richCopy('رحلة الموبايل أولاً', 'Mobile-first journey'), richCopy('كيف نحافظ على عمق الصفحة الرئيسية وهي تقرأ بسهولة على شاشة صغيرة؟', 'How we keep homepage depth easy to read on a small screen'), richCopy('نقسم المحتوى إلى وحدات قصيرة، أزرار واضحة، ومسافات مريحة حتى لا تتحول الصفحة الطويلة إلى تجربة مرهقة على الموبايل.', 'We divide content into short units, clear buttons, and comfortable spacing so a long page does not become tiring on mobile.'), 'from-sky-400/18 via-white/[0.03] to-violet-500/10'),
];

const addedAboutPages = [
  makeInternalDetailPage('quality-system', '/about', richCopy('من نحن', 'About'), 'method', richCopy('نظام الجودة والمراجعة', 'Quality and review system'), richCopy('كيف نراجع الصفحة قبل أن تصبح تجربة يراها العميل والزائر؟', 'How we review a page before it becomes an experience clients and visitors see'), richCopy('نحول الجودة إلى مراحل فحص واضحة: محتوى، تصميم، سرعة، تجاوب، روابط، وحالات تفاعل قبل التسليم.', 'We turn quality into clear review stages: content, design, speed, responsiveness, links, and interaction states before handoff.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('collaboration-style', '/about', richCopy('من نحن', 'About'), 'method', richCopy('طريقة التعاون مع العميل', 'Client collaboration style'), richCopy('تعاون واضح يقلل الاجتماعات الطويلة ويحافظ على قرار المشروع', 'Clear collaboration that reduces long meetings and protects project decisions'), richCopy('نرتب التواصل في ملاحظات مركزة، مراجعات مرحلية، وقرارات موثقة حتى يعرف العميل دائماً ما الذي تم وما القادم.', 'We organize communication through focused notes, staged reviews, and documented decisions so clients always know what is done and what comes next.'), 'from-cyan-400/18 via-white/[0.03] to-blue-500/10'),
  makeInternalDetailPage('tools-and-standards', '/about', richCopy('من نحن', 'About'), 'method', richCopy('الأدوات والمعايير', 'Tools and standards'), richCopy('المعايير التي تجعل الصفحة جميلة، سريعة، ومهيأة للنمو', 'The standards that make a page beautiful, fast, and ready to grow'), richCopy('نستخدم أدوات وممارسات تضمن اتساق المكونات، وضوح المحتوى، أداء جيد، وتجربة مستقرة على الديسكتوب والموبايل.', 'We use tools and practices that ensure component consistency, clear content, good performance, and stable desktop and mobile experiences.'), 'from-blue-400/16 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('why-notaq', '/about', richCopy('من نحن', 'About'), 'proof', richCopy('لماذا نُطق', 'Why Notaq'), richCopy('الفرق بين تنفيذ صفحة وبين بناء حضور رقمي يساعد على القرار', 'The difference between building a page and building a digital presence that supports decisions'), richCopy('نُطق تركز على المعنى، رحلة الزائر، الثقة، وقابلية التوسع؛ لذلك لا يبدو الموقع كقالب جميل بل كنظام بيع وفهم متكامل.', 'Notaq focuses on meaning, visitor journey, trust, and scalability, so the site feels like a complete understanding and sales system, not a nice template.'), 'from-violet-400/16 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('brand-clarity', '/about', richCopy('من نحن', 'About'), 'method', richCopy('وضوح البراند', 'Brand clarity'), richCopy('صفحة تشرح كيف يتحول البراند من اسم وشعار إلى رسالة مفهومة', 'A page about turning a brand from name and logo into a clear message'), richCopy('نربط الهوية بالرسائل، الجمهور، الاعتراضات، ونبرة الكتابة حتى يشعر الزائر أن البراند مفهوم وقابل للثقة.', 'We connect identity with messaging, audience, objections, and tone so the brand feels understandable and trustworthy.'), 'from-cyan-400/18 via-white/[0.03] to-blue-500/10'),
  makeInternalDetailPage('execution-quality', '/about', richCopy('من نحن', 'About'), 'method', richCopy('جودة التنفيذ', 'Execution quality'), richCopy('كيف نراجع التفاصيل الصغيرة قبل أن تتحول إلى تجربة منشورة', 'How small details are reviewed before becoming a live experience'), richCopy('الجودة تظهر في السرعة، الاتساق، وضوح التفاعل، واختبار كل حالة قبل أن يراها العميل أو الزائر.', 'Quality appears in speed, consistency, interaction clarity, and testing every state before clients or visitors see it.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('client-journey', '/about', richCopy('من نحن', 'About'), 'method', richCopy('رحلة العميل', 'Client journey'), richCopy('من أول رسالة إلى التسليم: كيف تبقى الرحلة واضحة وهادئة', 'From first message to handoff: how the journey stays clear and calm'), richCopy('نقسم التواصل إلى مراحل مفهومة حتى يعرف العميل ما الذي يحدث الآن، وما المطلوب منه، وما الذي سيحدث بعد ذلك.', 'We divide communication into clear stages so clients know what is happening now, what is needed from them, and what comes next.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('content-thinking', '/about', richCopy('من نحن', 'About'), 'editorial', richCopy('تفكير المحتوى', 'Content thinking'), richCopy('كيف نكتب الصفحة كمسار قرار وليس كفقرات جميلة فقط', 'How we write a page as a decision path, not just polished paragraphs'), richCopy('كل عنوان وفقرة وسؤال يتم وضعه لخدمة لحظة محددة في ذهن الزائر: فهم، ثقة، مقارنة، أو بدء تواصل.', 'Every heading, paragraph, and question serves a specific visitor moment: understanding, trust, comparison, or contact.'), 'from-violet-400/16 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('technical-standards', '/about', richCopy('من نحن', 'About'), 'method', richCopy('المعايير التقنية', 'Technical standards'), richCopy('تفاصيل الأداء والبنية التي تجعل الصفحة القوية قابلة للنمو', 'Performance and structure details that make a strong page scalable'), richCopy('لا نعامل الأداء والـ SEO والـ responsive كإضافات أخيرة، بل كجزء من التصميم والتنفيذ منذ البداية.', 'We do not treat performance, SEO, and responsiveness as afterthoughts; they are part of design and build from the start.'), 'from-sky-400/18 via-white/[0.03] to-emerald-500/10'),
];

const addedServicePages = [
  makeInternalDetailPage('service-audit', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('تشخيص الخدمة', 'Service audit'), richCopy('فحص سريع يكشف ماذا تحتاج الصفحة أو الخدمة قبل التنفيذ', 'A focused audit that reveals what a service page or offer needs before implementation'), richCopy('نراجع الرسالة، الجمهور، الاعتراضات، المنافسين، والنتيجة المطلوبة حتى يبدأ التنفيذ من قرار واضح لا تخمين.', 'We review message, audience, objections, competitors, and desired outcome so execution starts from clarity, not guessing.'), 'from-cyan-400/18 via-white/[0.03] to-blue-500/10'),
  makeInternalDetailPage('service-bundles', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('باقات حسب الهدف', 'Goal-based bundles'), richCopy('اختيار خدمات مترابطة حسب الهدف بدلاً من شراء عناصر متفرقة', 'Choosing connected services by goal instead of buying scattered items'), richCopy('نرتب الباقات حول أهداف واضحة: ثقة، مبيعات، إطلاق، تحسين، أو توسع، مع مخرجات مفهومة لكل مسار.', 'We arrange bundles around clear goals: trust, sales, launch, improvement, or growth, with understandable outputs for each path.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('launch-readiness', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('جاهزية الإطلاق', 'Launch readiness'), richCopy('قائمة فحص احترافية قبل نشر الموقع أو الصفحة للزوار', 'A professional checklist before publishing the site or page to visitors'), richCopy('نفحص المحتوى، الروابط، الأداء، الموبايل، SEO، رسائل التواصل، وحالات الخطأ حتى لا يظهر الإطلاق ناقصاً.', 'We check content, links, performance, mobile, SEO, contact messages, and error states so launch does not feel unfinished.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('support-maintenance', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('الدعم والتحسين', 'Support and maintenance'), richCopy('ما بعد التسليم: تحسين مستمر، متابعة، وتطوير للصفحات مع الوقت', 'After handoff: continuous improvement, monitoring, and page growth over time'), richCopy('نحافظ على استقرار الموقع ونقترح تحسينات للمحتوى والأداء والروابط حتى يظل الموقع مفيداً بعد الإطلاق.', 'We keep the site stable and suggest content, performance, and link improvements so it stays useful after launch.'), 'from-teal-400/16 via-white/[0.03] to-amber-500/10'),
  makeInternalDetailPage('integration-map', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('خريطة التكاملات', 'Integration map'), richCopy('ربط الموقع بالنماذج، التحليلات، الدفع، CRM، وأدوات التشغيل', 'Connecting the site with forms, analytics, payments, CRM, and operations tools'), richCopy('نحدد ما يجب ربطه، أين تظهر البيانات، وكيف لا يتحول التكامل إلى تعقيد يربك الفريق أو الزائر.', 'We define what should connect, where data appears, and how integrations avoid confusing teams or visitors.'), 'from-blue-400/16 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('growth-roadmap', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('خارطة النمو', 'Growth roadmap'), richCopy('كيف يتوسع الموقع بعد الإطلاق بصفحات وخدمات ومحتوى جديد', 'How the site expands after launch with new pages, services, and content'), richCopy('نرسم مسار نمو يضيف صفحات فرعية، مقالات، دراسات حالة، وتحسينات SEO بدون فقدان النظام البصري أو تجربة الزائر.', 'We map growth through subpages, articles, case studies, and SEO improvements without losing visual order or visitor experience.'), 'from-violet-400/16 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('seo', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('SEO عملي', 'Practical SEO'), richCopy('صفحات مفهومة للناس ومحركات البحث في نفس الوقت', 'Pages that make sense to people and search engines at once'), richCopy('نربط نية البحث بالبنية، المحتوى، السرعة، والروابط الداخلية حتى لا يكون SEO مجرد كلمات مفتاحية.', 'We connect search intent with structure, content, speed, and internal links so SEO is not just keywords.'), 'from-cyan-400/18 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('ui-ux', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('UI/UX', 'UI/UX'), richCopy('واجهات تجعل القرار والاستخدام أسهل على كل شاشة', 'Interfaces that make decisions and usage easier on every screen'), richCopy('نصمم التدفق، الحالات، الحركة، والنسخ الصغيرة بحيث يشعر المستخدم أن الواجهة تفهمه.', 'We design flow, states, motion, and microcopy so the interface feels like it understands the user.'), 'from-violet-400/16 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('landing-pages', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('Landing Pages', 'Landing Pages'), richCopy('صفحات هبوط طويلة تقنع بسرعة بدون ضغط أو زحام', 'Long landing pages that convince quickly without pressure or clutter'), richCopy('نرتب العرض من الوعد إلى الإثبات ثم الاعتراضات والـ CTA حتى لا تضيع الحملة بعد أول نقرة.', 'We order the offer from promise to proof, objections, and CTA so campaigns do not waste the first click.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('brand-content', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('الهوية والمحتوى', 'Brand and content'), richCopy('رسائل وهوية لفظية تجعل الموقع يبدو ناضجاً من أول شاشة', 'Messaging and verbal identity that make the site feel mature from the first screen'), richCopy('نحدد النبرة، الكلمات الأساسية، ترتيب الرسائل، وطريقة الحديث مع الجمهور في كل صفحة.', 'We define tone, key messages, message order, and how the brand speaks to the audience on every page.'), 'from-rose-400/16 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('web-apps', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('Web Apps', 'Web Apps'), richCopy('تطبيقات ويب واضحة قابلة للاستخدام والتوسع', 'Clear web apps that are usable and scalable'), richCopy('نحول العمليات المعقدة إلى شاشات وحالات وتدفقات عمل يمكن للمستخدم فهمها بسرعة.', 'We turn complex operations into screens, states, and workflows users can understand quickly.'), 'from-emerald-400/16 via-white/[0.03] to-sky-500/10'),
  makeInternalDetailPage('dashboards', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('Dashboards', 'Dashboards'), richCopy('لوحات تحكم تعرض القرار لا الأرقام فقط', 'Dashboards that show decisions, not just numbers'), richCopy('نصمم قراءة البيانات، الفلاتر، الحالات، والإشعارات حتى يعرف المستخدم ماذا يفعل بعد رؤية الرقم.', 'We design data reading, filters, states, and notifications so users know what to do after seeing a number.'), 'from-blue-400/16 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('maintenance', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('الصيانة والتحسين', 'Maintenance and optimization'), richCopy('تحسينات مستمرة تمنع الموقع من أن يشيخ بعد الإطلاق', 'Continuous improvements that keep the site from aging after launch'), richCopy('نراجع الأداء، المحتوى، الروابط، الحالات، والأقسام الجديدة حتى يبقى الموقع حي ومتطور.', 'We review performance, content, links, states, and new sections so the site stays alive and improving.'), 'from-teal-400/16 via-white/[0.03] to-amber-500/10'),
  makeInternalDetailPage('consultation', '/services', richCopy('الخدمات', 'Services'), 'service', richCopy('استشارة رقمية', 'Digital consultation'), richCopy('جلسة قرار تنظّم الفكرة قبل التصميم أو التنفيذ', 'A decision session that organizes the idea before design or build'), richCopy('نساعدك تحدد نوع الصفحة أو النظام، الأولويات، المخاطر، وما الذي يجب تنفيذه أولاً.', 'We help define the page or system type, priorities, risks, and what should be built first.'), 'from-cyan-400/16 via-white/[0.03] to-violet-500/10'),
];

const existingServicePageSlugs = new Set([
  ...serviceDetailPages.map((page) => page.slug),
  ...addedServicePages.map((page) => page.slug),
]);

const libraryServicePages = serviceLibrary
  .filter((service) => !existingServicePageSlugs.has(service.slug))
  .map((service) => ({
    ...makeInternalDetailPage(
      service.slug,
      '/services',
      richCopy('الخدمات', 'Services'),
      'service',
      service.eyebrow,
      service.title,
      service.summary,
      service.accent,
    ),
    audience: service.bestFor,
    promise: service.promise,
    deliverables: service.deliverables,
    useCases: service.useCases,
    metrics: [
      { value: '3+', label: richCopy('مخرجات عملية', 'practical deliverables') },
      { value: '4', label: richCopy('مراحل تنفيذ', 'delivery stages') },
      { value: '1', label: richCopy('مسار قرار واضح', 'clear decision path') },
    ],
  }));

const addedContactPages = [
  makeInternalDetailPage('project-readiness', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('جاهزية المشروع', 'Project readiness'), richCopy('هل الفكرة جاهزة للبداية أم تحتاج ترتيباً قبل أول رسالة؟', 'Is the idea ready to start, or does it need structure before the first message?'), richCopy('نوضح أقل معلومات تحتاجها للبداية: الهدف، الجمهور، نوع الصفحة، الأمثلة، والموعد المتوقع حتى يكون الرد الأول عملياً.', 'We clarify the minimum information needed to start: goal, audience, page type, examples, and expected timing so the first reply is practical.'), 'from-cyan-400/18 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('meeting-prep', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('التحضير لأول مكالمة', 'First call preparation'), richCopy('كيف تدخل أول مكالمة بأفكار مرتبة وأسئلة واضحة؟', 'How to enter the first call with organized ideas and clear questions'), richCopy('نجهز محاور النقاش حول الهدف، النطاق، المحتوى، الأولويات، والمخاطر حتى تصبح المكالمة قصيرة ومفيدة.', 'We prepare discussion points around goal, scope, content, priorities, and risks so the call stays short and useful.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('response-process', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('بعد رسالتك', 'After your message'), richCopy('ماذا يحدث داخل نُطق بعد أن ترسل تفاصيل مشروعك؟', 'What happens inside Notaq after you send your project details'), richCopy('نفرز الطلب، نحدد نوع الحل، نرسل أسئلة مركزة أو نطاقاً مبدئياً، ثم نرتب خطوة النقاش المناسبة.', 'We sort the request, define the solution type, send focused questions or initial scope, then arrange the right discussion step.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('scope-request', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('طلب نطاق مبدئي', 'Initial scope request'), richCopy('طريقة منظمة لطلب تقدير أولي بدون تفاصيل تقنية مرهقة', 'A structured way to request an initial estimate without exhausting technical details'), richCopy('نقسم طلب النطاق إلى صفحات، محتوى، تكاملات، مستوى تصميم، وجدول زمني حتى يظهر الحجم الحقيقي للمشروع مبكراً.', 'We divide scope request into pages, content, integrations, design level, and timeline so project size appears early.'), 'from-blue-400/16 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('pricing', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('توضيح النطاق', 'Scope clarity'), richCopy('ما الذي يحدد حجم الموقع أو النظام قبل بدء النقاش؟', 'What shapes the scope of a website or system before the discussion starts?'), richCopy('نشرح أثر عدد الصفحات، المحتوى، التكاملات، الحركة، والاختبارات حتى يصبح نطاق العمل واضحاً بدون مفاجآت.', 'We explain the effect of page count, content, integrations, motion, and testing so scope feels clear, not surprising.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('timeline', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('الجدول الزمني', 'Timeline'), richCopy('كيف يتحول المشروع إلى مراحل تسليم واضحة؟', 'How does a project become clear delivery stages?'), richCopy('نوضح ما الذي يحدث في أول أسبوع، متى تظهر النسخة الأولى، وكيف يتم التعامل مع المراجعات قبل الإطلاق.', 'We explain what happens in week one, when the first version appears, and how reviews are handled before launch.'), 'from-cyan-400/18 via-white/[0.03] to-blue-500/10'),
  makeInternalDetailPage('before-contact', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('قبل التواصل', 'Before contact'), richCopy('ماذا تجهز قبل أول رسالة حتى تبدأ من نقطة قوية؟', 'What should be prepared before the first message?'), richCopy('لا تحتاج ملف كامل، لكن معرفة الهدف، الجمهور، أمثلة قريبة، والموعد المتوقع تجعل أول رد أدق وأسرع.', 'You do not need a complete file, but knowing the goal, audience, references, and expected timing makes the first reply sharper and faster.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('decision-questions', '/contact', richCopy('تواصل معنا', 'Contact'), 'contact', richCopy('أسئلة القرار', 'Decision questions'), richCopy('أسئلة تساعدك تعرف هل تحتاج صفحة، موقع، متجر، أو نظام مخصص', 'Questions that help you know whether you need a page, site, store, or custom system'), richCopy('نحول الحيرة إلى اختيارات عملية بناء على الجمهور، الهدف، نوع المحتوى، وطريقة القياس بعد الإطلاق.', 'We turn uncertainty into practical choices based on audience, goal, content type, and post-launch measurement.'), 'from-violet-400/16 via-white/[0.03] to-cyan-500/10'),
];

const addedTestimonialPages = [
  makeInternalDetailPage('result-types', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('أنواع النتائج', 'Result types'), richCopy('ما الذي نقيسه بعد الإطلاق: ثقة، وضوح، سرعة، وتواصل؟', 'What we measure after launch: trust, clarity, speed, and contact quality'), richCopy('نقسم النتائج إلى إشارات عملية تساعد العميل الجديد على فهم نوع الأثر المتوقع من الموقع أو الصفحة.', 'We divide outcomes into practical signals that help new clients understand the expected impact of a site or page.'), 'from-cyan-400/18 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('client-before-after', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('قبل وبعد العميل', 'Client before and after'), richCopy('كيف تغيرت تجربة العميل من موقع مشتت إلى حضور واضح؟', 'How the client experience changed from a scattered site to a clear presence'), richCopy('نعرض التحول في الرسالة، الثقة، سهولة التصفح، وجودة الطلبات حتى تكون الشهادة قصة قرار لا مدحاً عاماً.', 'We show the shift in message, trust, browsing ease, and inquiry quality so the testimonial becomes a decision story, not general praise.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('review-audit', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('فحص رأي العميل', 'Review audit'), richCopy('كيف تقرأ شهادة العميل بعين عملية قبل اتخاذ قرار التعاون؟', 'How to read a client review practically before deciding to collaborate'), richCopy('نوضح الأسئلة التي تكشف نضج الشهادة: المشكلة، طريقة التعاون، الالتزام، الدعم، والنتيجة القابلة للملاحظة.', 'We clarify questions that reveal testimonial maturity: problem, collaboration, commitment, support, and observable result.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('proof-library', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('مكتبة أدلة الثقة', 'Proof library'), richCopy('تجميع الأدلة التي تطمئن الزائر بدون الاعتماد على رأي واحد فقط', 'Collecting proof that reassures visitors without relying on one opinion only'), richCopy('نمزج الاقتباسات، الأرقام، روابط الأعمال، حالات قبل/بعد، وطريقة العمل حتى تتكون صورة ثقة متكاملة.', 'We combine quotes, numbers, work links, before/after states, and workflow so a complete trust picture forms.'), 'from-blue-400/16 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('outcomes-proof', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('إثبات النتائج', 'Outcome proof'), richCopy('كيف تتحول الشهادة من رأي عام إلى دليل نتيجة؟', 'How does a testimonial become outcome proof?'), richCopy('نربط كل شهادة بسياق المشكلة، شكل التحسن، وما يمكن لعميل جديد أن يتعلمه من التجربة.', 'We connect each testimonial to the problem context, improvement shape, and what a new client can learn from the experience.'), 'from-cyan-400/18 via-white/[0.03] to-emerald-500/10'),
  makeInternalDetailPage('objections-handled', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('اعتراضات تم حلها', 'Handled objections'), richCopy('أسئلة الخوف التي يجب أن تجيب عنها شهادات العملاء', 'Fear questions that testimonials should answer'), richCopy('الزائر لا يبحث عن مدح فقط؛ يبحث عن إجابات حول الالتزام، الجودة، التواصل، وما يحدث عند ظهور تعديل.', 'Visitors are not looking for praise only; they need answers about commitment, quality, communication, and changes.'), 'from-amber-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('process-feedback', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('تجربة العمل', 'Process feedback'), richCopy('ما الذي شعر به العميل أثناء التنفيذ وليس بعده فقط؟', 'What did the client feel during the work, not only after it?'), richCopy('نبرز وضوح المراحل، سرعة الرد، طريقة المراجعة، وكيف تحول الغموض إلى خطوات مطمئنة.', 'We highlight clear stages, response speed, review style, and how ambiguity became reassuring steps.'), 'from-emerald-400/18 via-white/[0.03] to-cyan-500/10'),
  makeInternalDetailPage('trust-library', '/testimonials', richCopy('آراء العملاء', 'Testimonials'), 'proof', richCopy('مكتبة الثقة', 'Trust library'), richCopy('صفحة تجمع دلائل الثقة بدون الاعتماد على صور أشخاص', 'A page collecting trust proof without relying on person photos'), richCopy('الثقة تظهر عبر اقتباسات، أرقام، حالات قبل/بعد، وتفاصيل تنفيذ لا تحتاج أفاتار شخصي.', 'Trust appears through quotes, metrics, before/after states, and delivery details without personal avatars.'), 'from-blue-400/16 via-white/[0.03] to-cyan-500/10'),
];

homeDetailPages.push(...addedHomePages);
aboutDetailPages.push(...addedAboutPages);
serviceDetailPages.push(...addedServicePages, ...libraryServicePages);
contactDetailPages.push(...addedContactPages);
testimonialStoryPages.push(...addedTestimonialPages);

const addedDeepPages = [
  ...addedHomePages,
  ...addedAboutPages,
  ...addedServicePages,
  ...libraryServicePages,
  ...addedContactPages,
  ...addedTestimonialPages,
];

const makeBlogCategoryExpansion = (
  slug: string,
  label: LocalizedText,
  description: LocalizedText,
  categoryMatchers: string[],
  heroTitle: LocalizedText,
  heroLead: LocalizedText,
  servicePath: string,
  serviceLabel: LocalizedText,
): BlogCategoryPageContent => ({
  slug,
  label,
  description,
  categoryMatchers,
  heroTitle,
  heroLead,
  metrics: [
    { value: '6+', label: richCopy('محاور تفصيلية', 'deep themes') },
    { value: '4', label: richCopy('مراحل قرار', 'decision stages') },
    { value: '1', label: richCopy('مسار قراءة واضح', 'clear reading path') },
  ],
  pillars: [
    { stage: richCopy('السياق', 'Context'), title: richCopy('المقال الجيد يبدأ بسؤال تجاري واضح', 'A useful article starts with a clear business question'), body: richCopy('نربط كل موضوع بسؤال يواجه صاحب الشركة أو الزائر، حتى يصبح المحتوى جزءاً من القرار لا نصاً منفصلاً عن الموقع.', 'We connect every topic to a question facing the business owner or visitor, so content becomes part of the decision rather than detached text.') },
    { stage: richCopy('المنهج', 'Method'), title: richCopy('نرتب الأفكار كرحلة فهم', 'We order ideas as an understanding journey'), body: richCopy('نبدأ بالمشكلة، ثم نوضح الخيارات، ثم نعرض أمثلة ونتائج وخطوات عملية يمكن تطبيقها.', 'We begin with the problem, clarify options, then show examples, outcomes, and practical steps.') },
    { stage: richCopy('التنفيذ', 'Execution'), title: richCopy('الروابط الداخلية تربط المقال بالخدمة', 'Internal links connect the article to the service'), body: richCopy('كل صفحة تصنيف تساعد القارئ على الانتقال من الفكرة إلى خدمة أو مثال عمل أو brief مناسب.', 'Every category page helps readers move from an idea to a service, work example, or suitable brief.') },
    { stage: richCopy('النتيجة', 'Outcome'), title: richCopy('محتوى يرفع جودة السؤال القادم', 'Content improves the next enquiry'), body: richCopy('القارئ الذي يفهم الموضوع جيداً يرسل طلباً أوضح وأسئلة أنضج، وهذا يختصر وقت البداية.', 'A reader who understands the topic sends a clearer request and more mature questions, shortening the start.') },
  ],
  process: [
    { step: '01', title: richCopy('تحديد نية القارئ', 'Define reader intent'), body: richCopy('نحدد هل القارئ يبحث عن فهم، مقارنة، قرار شراء، أو خطة تنفيذ.', 'We define whether the reader wants understanding, comparison, purchase decision, or an execution plan.') },
    { step: '02', title: richCopy('بناء محاور المقالات', 'Build article themes'), body: richCopy('نقسم الموضوع إلى زوايا عملية يمكن ربطها بخدمات ومشاريع حقيقية.', 'We divide the topic into practical angles that can connect to real services and projects.') },
    { step: '03', title: richCopy('ربط المحتوى بالموقع', 'Connect content to the site'), body: richCopy('نضيف روابط داخلية ومسارات قراءة تساعد على اكتشاف الخدمات المناسبة.', 'We add internal links and reading paths that help discover suitable services.') },
    { step: '04', title: richCopy('قياس الأثر', 'Measure impact'), body: richCopy('نراجع القراءة، الضغط على الروابط، وجودة طلبات التواصل القادمة من المحتوى.', 'We review reading, link clicks, and the quality of contact requests coming from content.') },
  ],
  deepDives: [
    { title: richCopy('النية قبل العنوان', 'Intent before headline'), body: richCopy('العنوان لا يكتب ليبدو جذاباً فقط، بل ليطابق سؤال القارئ ونقطة القرار التي يعيشها.', 'The headline is not only attractive; it matches the reader question and current decision point.') },
    { title: richCopy('أمثلة لا تنظير', 'Examples over theory'), body: richCopy('الأمثلة الواقعية تجعل المقال أقرب لقرار العميل من الشرح العام.', 'Real examples bring the article closer to client decisions than generic explanation.') },
    { title: richCopy('تصنيف يخدم التصفح', 'Category supports browsing'), body: richCopy('صفحة التصنيف ليست أرشيفاً؛ هي مدخل منظم لفهم الموضوع من عدة زوايا.', 'A category page is not an archive; it is an organized entry point for understanding the topic from several angles.') },
    { title: richCopy('CTA مناسب للمرحلة', 'Stage-aware CTA'), body: richCopy('القارئ المبكر يحتاج مقالة أخرى، والقارئ الجاد يحتاج خدمة أو brief أو تواصل مباشر.', 'An early reader needs another article, while a serious reader needs a service, brief, or direct contact.') },
  ],
  faq: [
    { question: richCopy('هل صفحات التصنيف مفيدة للزائر أم فقط للـ SEO؟', 'Are category pages useful for visitors or only SEO?'), answer: richCopy('هي مفيدة للطرفين عندما تعرض الموضوع كمسار قراءة واضح وتربطه بخدمات ومقالات قريبة.', 'They help both when they present the topic as a clear reading path and connect it to nearby services and articles.') },
    { question: richCopy('هل نحتاج محتوى كثيراً لكل تصنيف؟', 'Do we need a lot of content for every category?'), answer: richCopy('الأهم هو جودة المحاور والربط الداخلي. يمكن البدء بعدد محدود من المقالات ثم التوسع تدريجياً.', 'Theme quality and internal linking matter most. You can start with a limited set of articles and expand gradually.') },
  ],
  servicePath,
  serviceLabel,
});

blogCategoryPages.push(
  makeBlogCategoryExpansion(
    'websites',
    richCopy('مواقع الشركات', 'Company websites'),
    richCopy('مقالات عن بناء مواقع شركات واضحة، مقنعة، وقابلة للتوسع.', 'Articles about building clear, persuasive, and scalable company websites.'),
    ['Company Website', 'مواقع الشركات', 'Website'],
    richCopy('موقع الشركة ليس تعريفاً مختصراً، بل نظام ثقة يقود الزائر خطوة بخطوة', 'A company website is not a short profile, but a trust system that guides visitors step by step'),
    richCopy('هذا التصنيف يجمع أفكار نُطق حول الصفحة الرئيسية، صفحات الخدمات، الأدلة، الأسئلة، والتواصل كمنظومة واحدة.', 'This category gathers Notaq thinking around homepages, service pages, proof, questions, and contact as one system.'),
    '/services/company-websites',
    richCopy('استكشف بناء مواقع الشركات', 'Explore company website builds'),
  ),
  makeBlogCategoryExpansion(
    'ai',
    richCopy('الذكاء الاصطناعي', 'AI'),
    richCopy('مقالات عن منتجات AI، المساعدات الذكية، والثقة في واجهات الذكاء الاصطناعي.', 'Articles about AI products, smart assistants, and trust in AI interfaces.'),
    ['AI', 'Artificial Intelligence', 'الذكاء الاصطناعي'],
    richCopy('منتجات AI الناجحة تشرح قدراتها وحدودها قبل أن تطلب ثقة المستخدم', 'Successful AI products explain capabilities and limits before asking for user trust'),
    richCopy('نكتب عن واجهات AI، صياغة الأوامر، حالات عدم اليقين، والتجارب التي تجعل الذكاء الاصطناعي مفهوماً وقابلاً للاستخدام.', 'We write about AI interfaces, prompt guidance, uncertainty states, and experiences that make AI understandable and usable.'),
    '/services/ai-products',
    richCopy('استكشف منتجات AI', 'Explore AI products'),
  ),
  makeBlogCategoryExpansion(
    'content-strategy',
    richCopy('استراتيجية المحتوى', 'Content strategy'),
    richCopy('مقالات عن ترتيب الرسائل، كتابة الصفحات، وتحويل المحتوى إلى مسار قرار.', 'Articles about message order, page writing, and turning content into a decision path.'),
    ['Content Strategy', 'Copywriting', 'استراتيجية المحتوى'],
    richCopy('المحتوى الاحترافي لا يملأ الصفحة، بل يقلل تردد الزائر ويشرح القرار', 'Professional content does not fill the page; it reduces hesitation and explains the decision'),
    richCopy('هذا التصنيف يركز على هندسة الرسائل، العناوين، الأسئلة، المقارنات، وطريقة ظهور الأدلة داخل الصفحة.', 'This category focuses on message architecture, headings, questions, comparisons, and how proof appears on the page.'),
    '/about/content-thinking',
    richCopy('استكشف تفكير المحتوى', 'Explore content thinking'),
  ),
  makeBlogCategoryExpansion(
    'launch-guides',
    richCopy('أدلة الإطلاق', 'Launch guides'),
    richCopy('مقالات وقوائم فحص قبل إطلاق الموقع أو الصفحة أو النظام.', 'Articles and checklists before launching a site, page, or system.'),
    ['Launch', 'Checklist', 'إطلاق'],
    richCopy('الإطلاق الناجح يبدأ قبل النشر بفحص المحتوى، الأداء، الروابط، والرحلة', 'A successful launch starts before publishing by checking content, performance, links, and journey'),
    richCopy('نجمع هنا ما يحتاجه الفريق قبل الإطلاق: جاهزية الصفحة، الموبايل، SEO، النماذج، التحليلات، ورسائل ما بعد التواصل.', 'This gathers what teams need before launch: page readiness, mobile, SEO, forms, analytics, and post-contact messages.'),
    '/services/launch-readiness',
    richCopy('استكشف جاهزية الإطلاق', 'Explore launch readiness'),
  ),
);

export const navGroups: NavGroup[] = [
  {
    id: 'home',
    labelKey: 'nav.home',
    fallbackLabel: { ar: 'الرئيسية', en: 'Home' },
    description: { ar: 'ابدأ من الصورة العامة ثم انتقل للتفاصيل المهمة.', en: 'Start with the big picture, then move into the key details.' },
    mainTo: '/',
    cta: { ar: 'اذهب للرئيسية', en: 'Go home' },
    items: [
      { label: { ar: 'نظرة عامة', en: 'Overview' }, description: { ar: 'واجهة الموقع الرئيسية.', en: 'Main website entry.' }, to: '/' },
      ...homeDetailPages.map((page) => ({
        label: page.eyebrow,
        description: page.summary,
        to: `/home/${page.slug}`,
      })),
    ],
  },
  {
    id: 'about',
    labelKey: 'nav.about',
    fallbackLabel: { ar: 'من نحن', en: 'About' },
    description: { ar: 'تعرف على القصة والمنهجية والقيم وراء نُطق.', en: 'Explore the story, method, and values behind Notaq.' },
    mainTo: '/about',
    cta: { ar: 'صفحة من نحن', en: 'About page' },
    items: aboutDetailPages.map((page) => ({
      label: page.eyebrow,
      description: page.summary,
      to: `/about/${page.slug}`,
    })),
  },
  {
    id: 'services',
    labelKey: 'nav.services',
    fallbackLabel: { ar: 'خدماتنا', en: 'Services' },
    description: { ar: 'اختيارات واضحة حسب نوع المشروع الذي تحتاجه.', en: 'Clear choices based on the project you need.' },
    mainTo: '/services',
    cta: { ar: 'كل الخدمات', en: 'All services' },
    items: serviceDetailPages.map((page) => ({
      label: page.eyebrow,
      description: page.summary,
      to: `/services/${page.slug}`,
    })),
  },
  {
    id: 'projects',
    labelKey: 'nav.projects',
    fallbackLabel: { ar: 'أعمالنا', en: 'Projects' },
    description: { ar: 'شاهد الأعمال من أكثر من زاوية: مشاريع، قصص، معرض، وأرقام.', en: 'Explore work through projects, stories, gallery, and numbers.' },
    mainTo: '/projects',
    cta: { ar: 'كل الأعمال', en: 'All work' },
    items: [
      { label: { ar: 'كل الأعمال المنشورة', en: 'All published work' }, description: { ar: 'مشاريع حية تعرض شكل النتيجة وتجربة الصفحات.', en: 'Live projects showing the outcome and page experience.' }, to: '/projects' },
      { label: { ar: 'دراسات حالة تفصيلية', en: 'Detailed case studies' }, description: { ar: 'التحدي، التفكير، الحل، والنتائج بعد التنفيذ.', en: 'Challenge, thinking, solution, and post-build results.' }, to: '/case-studies' },
      { label: { ar: 'معرض بصري للأعمال', en: 'Visual portfolio gallery' }, description: { ar: 'لقطات وصور تساعدك ترى مستوى التنفيذ والتفاصيل.', en: 'Visual snapshots that reveal execution quality and detail.' }, to: '/gallery' },
      { label: { ar: 'لوحة نتائج وإحصائيات', en: 'Results and stats dashboard' }, description: { ar: 'أرقام عن العرض، التنظيم، والأثر القابل للملاحظة.', en: 'Numbers about presentation, structure, and observable impact.' }, to: '/stats' },
      { label: { ar: 'التحديات والحلول', en: 'Challenges and solutions' }, description: { ar: 'اقرأ كيف نحل مشاكل الوضوح والثقة داخل المشاريع.', en: 'See how clarity and trust problems are solved inside projects.' }, to: '/case-studies' },
    ],
  },
  {
    id: 'blog',
    labelKey: 'nav.blog',
    fallbackLabel: { ar: 'المدونة', en: 'Blog' },
    description: { ar: 'مقالات عملية تساعدك على فهم قيمة الموقع.', en: 'Practical articles that help you understand website value.' },
    mainTo: '/blog',
    cta: { ar: 'المقالات', en: 'Articles' },
    items: [
      { label: { ar: 'المقالات', en: 'Articles' }, description: { ar: 'أحدث محتوى نُطق.', en: 'Latest Notaq content.' }, to: '/blog' },
      ...blogCategoryPages.map((category) => ({
        label: category.label,
        description: category.description,
        to: `/blog/category/${category.slug}`,
      })),
    ],
  },
  {
    id: 'testimonials',
    labelKey: 'nav.testimonials',
    fallbackLabel: { ar: 'آراء العملاء', en: 'Testimonials' },
    description: { ar: 'دلائل ثقة وقصص عن أثر الوضوح بعد الإطلاق.', en: 'Trust proof and stories about clarity after launch.' },
    mainTo: '/testimonials',
    cta: { ar: 'كل الآراء', en: 'All testimonials' },
    items: [
      { label: { ar: 'كل الآراء', en: 'All testimonials' }, description: { ar: 'تعليقات العملاء.', en: 'Client feedback.' }, to: '/testimonials' },
      ...testimonialStoryPages.map((page) => ({
        label: page.eyebrow,
        description: page.summary,
        to: `/testimonials/${page.slug}`,
      })),
    ],
  },
  {
    id: 'contact',
    labelKey: 'nav.contact',
    fallbackLabel: { ar: 'تواصل معنا', en: 'Contact' },
    description: { ar: 'اختر طريقة البداية الأنسب: رسالة مباشرة أو brief سريع.', en: 'Choose the best starting point: direct message or quick brief.' },
    mainTo: '/contact',
    cta: { ar: 'تواصل الآن', en: 'Contact now' },
    items: [
      { label: { ar: 'نموذج التواصل', en: 'Contact form' }, description: { ar: 'أرسل تفاصيل الاحتياج.', en: 'Send the project need.' }, to: '/contact' },
      { label: { ar: 'Brief سريع', en: 'Quick brief' }, description: { ar: 'رتب متطلبات شركتك قبل التواصل.', en: 'Organize your company requirements before contact.' }, to: '/contact/brief' },
      ...contactDetailPages.map((page) => ({
        label: page.eyebrow,
        description: page.summary,
        to: `/contact/${page.slug}`,
      })),
    ],
  },
];

export const allDetailRoutes = [
  ...homeDetailPages.map((page) => `/home/${page.slug}`),
  ...aboutDetailPages.map((page) => `/about/${page.slug}`),
  ...serviceDetailPages.map((page) => `/services/${page.slug}`),
  '/contact/brief',
  ...contactDetailPages.map((page) => `/contact/${page.slug}`),
  ...testimonialStoryPages.map((page) => `/testimonials/${page.slug}`),
  ...blogCategoryPages.map((page) => `/blog/category/${page.slug}`),
];

export const detailWorldEnhancements: Record<string, DetailWorldEnhancement> = {
  '/home/visitor-journey': {
    metrics: [
      { value: '6+', label: { ar: 'نقاط انتقال رئيسية في الرحلة', en: 'key journey transition points' } },
      { value: '4', label: { ar: 'لحظات ثقة حرجة قبل التواصل', en: 'critical trust moments before contact' } },
      { value: '1', label: { ar: 'مسار قرار متكامل ومترابط', en: 'complete and integrated decision path' } },
      { value: '75%', label: { ar: 'زيادة في الاحتفاظ بالانتباه', en: 'increase in attention retention' } }
    ],
    insights: [
      { title: { ar: 'الانطباع الأول ونافذة الثواني الثلاث', en: 'First Impression and the Three-Second Window' }, body: { ar: 'أول شاشة يجب أن تجيب عن ثلاثة أسئلة مصيرية للزائر: من أنتم؟ ماذا تقدمون؟ ولماذا أنتم الخيار الأنسب لي؟ إذا لم تصله الإجابة في 3 ثوانٍ فسيغادر فوراً.', en: 'The first screen must answer three critical questions: who you are, what you offer, and why you are the right choice. If not answered in 3 seconds, they will leave.' } },
      { title: { ar: 'الانتقال السلس وهندسة الأقسام', en: 'Seamless Transitions and Section Architecture' }, body: { ar: 'كل قسم يمهد ذهنياً وفكرياً للقسم الذي يليه. ننتقل بالزائر من الوعد المثير للاهتمام، إلى الدليل الداعم، ثم الخدمة المفصلة، فالأعمال السابقة، وانتهاءً بالتواصل.', en: 'Each section prepares the mind for the next. We guide visitors from an exciting promise to supporting proof, detailed services, past work, and finally contact.' } },
      { title: { ar: 'نقاط طمأنة وتوزيع أدلة الثقة', en: 'Reassurance Points and Trust Distribution' }, body: { ar: 'لا نكدس شهادات العملاء أو إثباتات القوة في نهاية الصفحة فقط. نقوم بتوزيعها بذكاء عند نقاط التردد المتوقعة لتبديد مخاوف الزائر وتثبيت قراره.', en: 'We do not pile testimonials or proofs only at the bottom. We distribute them smartly at expected hesitation points to dispel fears and reinforce decisions.' } },
      { title: { ar: 'تبسيط الخيارات وتقليل الحمل المعرفي', en: 'Simplifying Options and Cognitive Load Reduction' }, body: { ar: 'كثرة الخيارات المتشابهة تشل حركة الزائر. نقوم بهيكلة وتصنيف الخدمات بطريقة تجعل المقارنة والاختيار بديهياً وتلقائياً دون أي جهد فكري.', en: 'Too many similar options paralyze visitors. We structure and categorize services to make comparison and choice intuitive without mental strain.' } },
      { title: { ar: 'نداء الفعل البصري والسياقي', en: 'Visual and Contextual Calls to Action' }, body: { ar: 'زر تواصل معنا ليس مجرد عنصر ملون. إنه دعوة لتتويج الفهم الذي تشكل لدى الزائر، ويجب أن يوضح بدقة ماذا سيحدث بعد الضغط عليه لزرع الاطمئنان.', en: 'The call to action is not just a colored button. It is the culmination of the understanding formed by visitors, clearly showing what happens after clicking.' } },
      { title: { ar: 'تحليل سلوك التصفح على الهواتف', en: 'Analyzing Mobile Browsing Behavior' }, body: { ar: 'أكثر من 80% من الزوار يتصفحون عبر هواتفهم. نصمم الرحلة بحيث تكون القراءة مريحة، والتفاعلات مناسبة للإبهام، دون أي قفزات بصرية مزعجة.', en: 'Over 80% of visitors browse on mobile. We design the journey so reading is comfortable, interactions are thumb-friendly, and there are no layout jumps.' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'جذب الانتباه الأولي', en: 'Initial Attention Capture' }, body: { ar: 'صياغة رسالة هوية واضحة ومباشرة تخاطب احتياج العميل مباشرة.', en: 'Drafting a clear, direct identity message that speaks to client needs.' } },
      { phase: '02', title: { ar: 'فتح مسارات الاستكشاف', en: 'Opening Exploration Paths' }, body: { ar: 'عرض أقسام الخدمات بطريقة تسمح لكل زائر باختيار ما يناسب حالته.', en: 'Presenting service sections so every visitor can select what fits their case.' } },
      { phase: '03', title: { ar: 'تقديم الأدلة الداعمة', en: 'Providing Supporting Proof' }, body: { ar: 'إبراز المشاريع السابقة والأرقام الحقيقية التي تثبت جودة التنفيذ.', en: 'Highlighting past projects and real numbers that prove delivery quality.' } },
      { phase: '04', title: { ar: 'تبديد الاعتراضات والشكوك', en: 'Dispelling Objections and Doubts' }, body: { ar: 'عرض إجابات واضحة وحاسمة للأسئلة الشائعة التي تعطل البداية.', en: 'Displaying clear, decisive answers to common questions that stall progress.' } },
      { phase: '05', title: { ar: 'تسهيل قنوات الاتصال', en: 'Facilitating Contact Channels' }, body: { ar: 'توفير خيارات تواصل متعددة ومريحة تبدأ من النموذج وتصل للواتساب.', en: 'Providing multiple convenient contact options ranging from forms to WhatsApp.' } }
    ],
    decisionMatrix: [
      { label: { ar: 'زيارات من إعلانات سريعة', en: 'Ad Traffic Visits' }, value: { ar: 'موجز مركز ودليل قريب', en: 'Focused brief and nearby proof' }, note: { ar: 'نقدم رسالة مباشرة مع دليل ثقة بارز فوراً.', en: 'We show a direct message with prominent trust proof immediately.' } },
      { label: { ar: 'زيارات من محركات البحث SEO', en: 'SEO Search Traffic' }, value: { ar: 'إجابة النية ومقالات مرجعية', en: 'Intent answers and reference articles' }, note: { ar: 'نربط العنوان بنية البحث ونسهل تصفح التفاصيل العميقة.', en: 'We tie headings to search intent and make deep details easy to browse.' } },
      { label: { ar: 'زيارات عبر توصيات وإحالات', en: 'Referral and Recommendation' }, value: { ar: 'تفصيل المنهجية وقيم التشغيل', en: 'Detailed method and operational values' }, note: { ar: 'نركز على إظهار النضج والخبرة العملية لبناء الثقة الكاملة.', en: 'We focus on showing maturity and practical expertise to build full trust.' } }
    ],
    scenarios: [
      { title: { ar: 'الزائر السريع والمشغول', en: 'The Busy and Hurried Visitor' }, body: { ar: 'يبحث عن الكلمات المفتاحية وأزرار الحركة المباشرة. نقدم له تلخيصاً ممتازاً وهيكلاً بصرياً سريعاً يقرأ في أقل من دقيقة.', en: 'Looks for key phrases and direct action buttons. We offer an excellent summary and a fast visual layout readable in under a minute.' } },
      { title: { ar: 'المحلل المتردد والباحث', en: 'The Analytical and Hesitant Researcher' }, body: { ar: 'يقرأ التفاصيل بعناية، ويقارن المخرجات، ويبحث عن الضمانات والأسئلة الشائعة. نوفر له مصفوفات مقارنة وكتلاً بصرية غنية.', en: 'Reads details carefully, compares deliverables, and seeks guarantees and FAQs. We provide comparison matrices and rich visual blocks.' } },
      { title: { ar: 'العميل الذي مر بتجربة سيئة سابقاً', en: 'The Previously Burned Client' }, body: { ar: 'يشكك في كل الوعود. نركز في رحلته على كشف منهجية العمل الواقعية وخطوات التسليم والتراجع عن الأخطاء والضمانات الواضحة.', en: 'Skeptical of all promises. We focus on showing our realistic working method, delivery stages, error handling, and clear guarantees.' } }
    ],
    faq: [
      { question: { ar: 'هل هناك طول مثالي للصفحة الرئيسية للموقع؟', en: 'Is there an ideal length for the homepage?' }, answer: { ar: 'لا يوجد طول محدد بالبكسل، لكن الطول المثالي يتحدد بعدد الإجابات اللازمة لتبديد تردد الزائر المستهدف وتمهيد قراره.', en: 'There is no fixed pixel length. The ideal length is defined by the number of answers needed to resolve visitor hesitation.' } },
      { question: { ar: 'كيف نمنع ازدحام الصفحة الرئيسية رغم كثرة التفاصيل؟', en: 'How do we prevent clutter on a homepage despite rich details?' }, answer: { ar: 'من خلال تقسيم المحتوى إلى طبقات بصرية مختلفة، واستخدام كتل تفاعلية قابلة للطي أو التمرير لحفظ مساحة التنفس البصري.', en: 'By dividing content into visual layers and using interactive collapsible/scrollable blocks to preserve breathing room.' } },
      { question: { ar: 'ما أهمية الترتيب السياقي للأقسام؟', en: 'What is the importance of contextual section ordering?' }, answer: { ar: 'الترتيب السياقي يحاكي الحوار الطبيعي؛ لا تسأل العميل عن التواصل قبل أن تقنعه بالقيمة وتثبت له قدرتك.', en: 'Contextual ordering mimics natural dialogue; you do not ask a client to contact you before convincing them of value and proving capability.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'لحظة الدخول والانطباع الأول', en: 'Entry and First Impression' }, body: { ar: 'عرض الهوية الواضحة وتقليل معدل الارتداد المباشر للزوار.', en: 'Showing clear identity and reducing immediate visitor bounce rates.' }, icon: 'Eye', color: 'cyan' },
      { phase: '02', title: { ar: 'الفهم المبدئي للخدمات', en: 'Basic Service Understanding' }, body: { ar: 'تصفح أقسام الخدمات وتحديد المسار المناسب لاحتياج العميل.', en: 'Browsing service sections and identifying the right path for client needs.' }, icon: 'Compass', color: 'emerald' },
      { phase: '03', title: { ar: 'مراجعة أدلة الثقة والتأكيد', en: 'Reviewing Trust Proof and Confirmation' }, body: { ar: 'الاطلاع على الأعمال السابقة وأرقام الأداء وشهادات العملاء.', en: 'Viewing past work, performance metrics, and client reviews.' }, icon: 'CheckCircle', color: 'amber' },
      { phase: '04', title: { ar: 'إزالة المخاوف والتردد', en: 'Addressing Fears and Hesitation' }, body: { ar: 'المرور بالأسئلة الشائعة ومصفوفات المقارنة لفهم الفروق بشكل دقيق.', en: 'Going through FAQs and comparison matrices to understand precise differences.' }, icon: 'HelpCircle', color: 'purple' },
      { phase: '05', title: { ar: 'اتخاذ خطوة التواصل الفعلي', en: 'Taking Actual Contact Action' }, body: { ar: 'الضغط على نداء الفعل المناسب والانتقال إلى صفحة التواصل أو الـ brief.', en: 'Clicking the right call to action and moving to the contact page or brief.' }, icon: 'ArrowUpLeft', color: 'cyan' }
    ],
    statsCounter: [
      { number: '3s', label: { ar: 'زمن تحديد القيمة الأساسية', en: 'Core value perception time' }, description: { ar: 'الوقت اللازم ليفهم العميل هوية الخدمة بدقة.', en: 'Time needed for clients to understand the service identity.' } },
      { number: '45%', label: { ar: 'زيادة في معدل القراءة العميقة', en: 'Increase in deep reading rate' }, description: { ar: 'بسبب هيكلة النصوص وتنويع كتل العرض البصرية.', en: 'Thanks to text structuring and varied visual display blocks.' } },
      { number: '2.5x', label: { ar: 'تحسن في نسب التحويل للتواصل', en: 'Improvement in contact conversions' }, description: { ar: 'عندما تسير الرحلة وفق تسلسل منطقي يقنع العقل ويطمئن القلب.', en: 'When the journey follows a logical sequence that convinces and reassures.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'مخطط تدفق رحلة المستخدم', en: 'User Journey Flowchart' }, description: { ar: 'رسم بياني كامل لمسارات الزوار داخل الصفحة وتوقعات حركتهم.', en: 'A complete diagram of visitor paths and their expected movement.' }, icon: 'Layers', impact: { ar: 'يمنع التضارب ويضمن توجيه الزوار بكفاءة نحو CTA.', en: 'Prevents conflict and ensures efficient user guidance toward CTA.' } },
      { name: { ar: 'وثيقة توزيع أدلة الثقة', en: 'Trust Asset Map' }, description: { ar: 'تحديد نقاط التردد وربطها بالشهادة أو الرقم المناسب لتبديدها.', en: 'Identifying hesitation points and mapping them to reviews or metrics.' }, icon: 'Shield', impact: { ar: 'يرفع معدل الاطمئنان في اللحظات الحرجة من القراءة.', en: 'Raises comfort levels during critical moments of reading.' } },
      { name: { ar: 'هندسة نداءات الفعل المتنوعة', en: 'Contextual CTA Framework' }, description: { ar: 'تصميم دعوات حركة تتناسب مع حالة القارئ في كل قسم.', en: 'Designing action prompts tailored to reader states in each section.' }, icon: 'Zap', impact: { ar: 'يضمن ألا يفوت العميل فرصة البداية بمجرد نضج قراره.', en: 'Ensures clients do not miss starting once their decision matures.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'بفضل إعادة تنظيم رحلة الزائر في صفحتنا الرئيسية، تضاعفت طلبات الخدمات الجادة وانخفضت الرسائل العشوائية بنسبة 60% لأن العميل أصبح يأتي وهو يعلم تماماً ما الذي يستلمه.', en: 'Thanks to reorganization of the visitor journey on our homepage, serious service inquiries doubled and random messages dropped by 60%.' },
      author: { ar: 'المهندس رامي خلف', en: 'Eng. Ramy Khalaf' },
      role: { ar: 'المدير التنفيذي لشركة التقنية الأولى', en: 'CEO of First Tech Co.' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      impact: { ar: 'تحول كامل من عشوائية الرسائل إلى جودة الطلبات ونضج العملاء.', en: 'Complete transition from random inquiries to high-quality, mature clients.' }
    },
    checklist: [
      { item: { ar: 'الرسالة الأساسية فوق الطية مباشرة ومفهومة', en: 'Hero message above the fold is clear' }, details: { ar: 'تأكد من عدم حاجة الزائر للتمرير ليفهم الخدمة الأساسية التي تقدمها.', en: 'Ensure visitors do not need to scroll to grasp the core service you offer.' } },
      { item: { ar: 'تدرج منطقي للأقسام (وعد -> دليل -> تفصيل)', en: 'Logical section flow (promise -> proof -> detail)' }, details: { ar: 'لا تطلب من العميل شيئاً قبل أن تقدم له مبرراً عملياً للاقتناع.', en: 'Do not ask the client for anything before giving them a practical reason to believe.' } },
      { item: { ar: 'وجود أدلة اجتماعية قريبة من أزرار التحويل الرئيسية', en: 'Social proof near main conversion buttons' }, details: { ar: 'وضع شهادة صغيرة أو رقم أداء يقلل التردد في آخر ثانية قبل الضغط.', en: 'Placing a small review or metric reduces last-second hesitation before clicking.' } },
      { item: { ar: 'توفير خيارات تواصل هادئة وأخرى سريعة', en: 'Providing both calm and fast contact options' }, details: { ar: 'النموذج للطلبات المنظمة والواتساب للمستعجلين لضمان كسب الجميع.', en: 'Form for organized requests and WhatsApp for urgent ones to capture all leads.' } }
    ]
  },
  '/home/pre-project-questions': {
    metrics: [
      { value: '12+', label: { ar: 'اعتراضاً شائعاً تم تفكيكه وإجابته', en: 'common objections analyzed & answered' } },
      { value: '3', label: { ar: 'مستويات إجابة متكاملة بصرية وسياقية', en: 'complete response levels (visual & context)' } },
      { value: '0', label: { ar: 'مساحات غموض أو قلق قبل البداية', en: 'uncertainty or anxiety before starting' } },
      { value: '92%', label: { ar: 'نسبة رضا العملاء عن وضوح العملية', en: 'client satisfaction rate on process clarity' } }
    ],
    comparison: [
      { before: { ar: 'يسأل العميل عن التفاصيل مباشرة كأول سؤال لعدم معرفته بالنطاق ومخرجات الجودة.', en: 'Clients ask about details first because scope and quality deliverables are vague.' }, after: { ar: 'يرى العميل بوضوح العوامل المؤثرة على نطاق التنفيذ ومخرجات الجودة وقيمة كل مخرج بالتفصيل.', en: 'Clients clearly see factors shaping execution scope, quality outputs, and the value of each.' } },
      { before: { ar: 'الخوف والقلق من بطء الرد، الاختفاء، أو عدم جودة الدعم الفني يمنعان العميل من المبادرة.', en: 'Fear of slow replies, disappearance, or poor support blocks client initiative.' }, after: { ar: 'تظهر بوضوح خريطة الدعم، الاستجابة للرسائل، مراحل المراجعة والمتابعة، مما يزرع الأمان.', en: 'A clear map of support response, review stages, and follow-up builds immediate safety.' } },
      { before: { ar: 'العميل يقلق من فقدان ملكية الكود أو التصاميم أو الارتهان الدائم لفريق المطورين.', en: 'Clients fear losing code/design ownership or being locked in with developers.' }, after: { ar: 'نصوص واضحة تثبت تسليم كافة الأصول والملفات المفتوحة والملكية القانونية والتدريب الشامل.', en: 'Clear statements prove delivery of all open-source assets, legal ownership, and training.' } }
    ],
    decisionMatrix: [
      { label: { ar: 'نطاق التنفيذ والقرار', en: 'Execution Scope and Decision' }, value: { ar: 'نطاق مرن ومتناسب', en: 'Flexible and proportional scope' }, note: { ar: 'توضيح عناصر النطاق وتأثير كل ميزة على قيمة الموقع ومخرجاته.', en: 'Clarifying scope elements and how each feature shapes the site value and outputs.' } },
      { label: { ar: 'الجدول الزمني والوقت', en: 'Timeline and Project Timing' }, value: { ar: 'تسليم مرحلي واضح وبالمواعيد', en: 'Phased delivery with clear deadlines' }, note: { ar: 'تحديد جدول زمني دقيق لكل مرحلة مع حوافز للالتزام وتوضيح شروط التسليم.', en: 'Setting a precise timeline for each stage with commitment incentives and handoff rules.' } },
      { label: { ar: 'ملكية الموقع والملفات المفتوحة', en: 'Site Ownership and Open Files' }, value: { ar: 'ملكية قانونية كاملة للعميل', en: 'Complete legal ownership for client' }, note: { ar: 'كافة التصاميم البرمجية والأصول الرقمية تسلم للعميل دون قيود أو احتكار.', en: 'All design files, code, and digital assets are handed over without lock-ins.' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'فرز الاحتياج الأولي وتحديد الهدف', en: 'Need Sorting and Goal Definition' }, body: { ar: 'مناقشة حجم المشروع، الجمهور المستهدف، ونوع الموقع أو النظام المطلوب.', en: 'Discussing project size, target audience, and the type of site or system.' } },
      { phase: '02', title: { ar: 'تحديد النطاق التفصيلي والمخرجات', en: 'Detailed Scope and Deliverables' }, body: { ar: 'الاتفاق على عدد الصفحات، نوع المحتوى، والتفاعلات المطلوبة لمنع الهدر.', en: 'Agreeing on page count, content type, and interactions to prevent waste.' } },
      { phase: '03', title: { ar: 'كتابة العرض والاتفاق القانوني', en: 'Proposal Writing and Legal Agreement' }, body: { ar: 'صياغة عقد يوضح الحقوق والواجبات والمواعيد والملكية بشكل قانوني سليم.', en: 'Drafting an agreement outlining rights, duties, dates, and legal ownership.' } },
      { phase: '04', title: { ar: 'بدء التنفيذ والتقارير الأسبوعية', en: 'Execution Start and Weekly Reports' }, body: { ar: 'متابعة حية للمراحل مع مراجعات دورية تمنع انحراف المشروع عن مساره.', en: 'Live stage monitoring with periodic reviews preventing project drift.' } }
    ],
    proofPoints: [
      { title: { ar: 'عقد يضمن كامل الحقوق والالتزامات', en: 'Contracts Guaranteeing All Rights' }, body: { ar: 'نحن لا نعمل بكلمات شفهية؛ كل التفاصيل والمواعيد والمخرجات والملكية موثقة في عقد ملزم قانوناً.', en: 'We do not work on verbal promises; all details, dates, outputs, and ownership are legally binding.' } },
      { title: { ar: 'تسليم الملفات المفتوحة والأصول الرقمية', en: 'Handoff of Open Source Files & Assets' }, body: { ar: 'تصاميم Figma، كود GitHub، حسابات الاستضافة كلها ملكك، ولا نربطك باشتراكات احتكارية.', en: 'Figma designs, GitHub code, hosting credentials are all yours. No lock-in subscriptions.' } },
      { title: { ar: 'إجابة الاعتراضات قبل حدوثها للثقة', en: 'Answering Objections Early for Trust' }, body: { ar: 'الوضوح التام في الإجابة عن الدعم والضمان وطرق التعديل يمنحك راحة البال قبل البداية.', en: 'Complete transparency about support, guarantees, and edits gives you peace of mind from day one.' } }
    ],
    faq: [
      { question: { ar: 'كيف أضمن عدم تأخر تسليم مشروعي؟', en: 'How do I ensure my project delivery is not delayed?' }, answer: { ar: 'نعتمد على جدول زمني مقسم لمهام أسبوعية، مع شروط جزئية واضحة في العقد تضمن حقوقك ومسؤوليتنا الكاملة.', en: 'We rely on a schedule split into weekly tasks, with clear contractual penalties ensuring your rights.' } },
      { question: { ar: 'ماذا لو أردت تعديل شيء بعد التسليم النهائي؟', en: 'What if I want to edit something after final delivery?' }, answer: { ar: 'نوفر فترة دعم مجانية كافية للتأكد من استقرار التشغيل، مع باقات صيانة مرنة للمستقبل إذا رغبت.', en: 'We provide a generous free support period to verify stability, with flexible maintenance plans for the future.' } },
      { question: { ar: 'هل تساعدون في كتابة محتوى الموقع؟', en: 'Do you help write website content?' }, answer: { ar: 'نعم، هندسة وكتابة المحتوى التسويقي والتشغيلي باللغتين جزء أصيل من خدماتنا لضمان جودة الإقناع.', en: 'Yes, copywriting and content architecture in both languages is a core part of our delivery.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'إرسال طلب الاستفسار المبدئي', en: 'Sending Initial Inquiry Request' }, body: { ar: 'تقديم فكرة عامة عن المشروع عبر موقعنا أو قنوات الاتصال.', en: 'Submitting a general project idea via our site or communication channels.' }, icon: 'MessageSquare', color: 'cyan' },
      { phase: '02', title: { ar: 'جلسة النقاش والتشخيص وحجم العمل', en: 'Discussion, Diagnosis & Scope Session' }, body: { ar: 'مكالمة أو مراسلة لتوضيح التفاصيل وفهم طبيعة الجمهور المستهدف.', en: 'A call or messages to clarify details and understand target audience needs.' }, icon: 'Phone', color: 'emerald' },
      { phase: '03', title: { ar: 'استلام مقترح النطاق والوقت', en: 'Receiving Scope and Timeline Proposal' }, body: { ar: 'تصور متكامل يوضح مسار التنفيذ والمخرجات وجدول التسليم.', en: 'A complete outline detailing execution paths, deliverables, and delivery schedule.' }, icon: 'FileText', color: 'amber' },
      { phase: '04', title: { ar: 'توقيع العقد الرسمي والملكية القانونية', en: 'Signing Formal Contract & Ownership' }, body: { ar: 'توثيق الاتفاق وبدء العمل رسمياً وفق المواعيد المقررة.', en: 'Signing the contract and starting work officially under agreed dates.' }, icon: 'Shield', color: 'purple' }
    ],
    statsCounter: [
      { number: '100%', label: { ar: 'ملكية قانونية مضمونة للعميل', en: 'Guaranteed legal client ownership' }, description: { ar: 'تسليم كامل الملفات والتصاميم المفتوحة دون أي تعقيد.', en: 'Handoff of all open source files and designs with no hassle.' } },
      { number: '24h', label: { ar: 'أقصى وقت للاستجابة للدعم', en: 'Maximum support response time' }, description: { ar: 'نحن ملتزمون بالرد والتعامل السريع مع أي استفسار فني.', en: 'We are committed to fast replies and action for any technical query.' } },
      { number: '0%', label: { ar: 'مفاجآت غير واضحة في النطاق', en: 'Unclear scope surprises' }, description: { ar: 'النطاق واضح ومقسم بالتفصيل حسب مراحل التسليم في العقد.', en: 'Scope is clear and detailed based on delivery stages in the contract.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'مسودة العقد والاتفاق القانوني الموحد', en: 'Unified Legal Agreement Template' }, description: { ar: 'عقد يوضح النطاق والمخرجات والملكية والجدول الزمني لحمايتك.', en: 'A contract defining scope, deliverables, ownership, and timeline to protect you.' }, icon: 'FileCheck', impact: { ar: 'يحول التفاهم الشفهي إلى التزام حقيقي وموثق.', en: 'Turns verbal agreements into documented, real commitment.' } },
      { name: { ar: 'خريطة توزيع مراحل التسليم الأسبوعي', en: 'Weekly Delivery Milestone Map' }, description: { ar: 'مخطط زمني تفصيلي يوضح متى تستلم وتراجع كل شاشة وقسم.', en: 'A detailed timeline showing when you receive and review each screen and section.' }, icon: 'Calendar', impact: { ar: 'يمنع التوتر ويجعلك على دراية تامة بسير العمل باستمرار.', en: 'Prevents anxiety, keeping you fully aware of work progress.' } },
      { name: { ar: 'دليل مخرجات Handoff الكاملة للعميل', en: 'Complete Handoff Deliverables Guide' }, description: { ar: 'قائمة بكافة الأصول والملفات والحسابات التي سيتم تسليمها لك.', en: 'A list of all assets, files, and accounts that will be handed over to you.' }, icon: 'BookOpen', impact: { ar: 'يضمن ألا تنسى أو تفقد أي جزء من استثمارك الرقمي.', en: 'Ensures you do not forget or lose any part of your digital investment.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'قبل التعاقد مع نُطق، كان أكبر خوفي هو التأخير والاختفاء بعد الدفع كما حدث معنا سابقاً. لكن الوضوح والجدول الزمني والعقد الرسمي جعلونا نشعر بالأمان والاحترافية منذ أول لحظة.', en: 'Before hiring Notaq, my biggest fear was delay and disappearance after payment. But the clarity, timeline, and formal contract made us feel safe and professional.' },
      author: { ar: 'المهندس طارق منصور', en: 'Eng. Tarek Mansour' },
      role: { ar: 'المدير الفني لشركة روافد للاستثمار', en: 'Technical Director at Rawafed Investment' },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      impact: { ar: 'تحول كامل نحو الثقة والأمان النفسي أثناء البناء والتشغيل.', en: 'Complete shift toward confidence and peace of mind during build and operation.' }
    },
    checklist: [
      { item: { ar: 'العقد يضم شروطاً واضحة للملكية القانونية والأصول', en: 'Contract has clear clauses for legal ownership and assets' }, details: { ar: 'تأكد أن كافة تصاميم Figma وأكواد GitHub ستكون ملكيتك المطلقة.', en: 'Verify that all Figma designs and GitHub code will be your absolute property.' } },
      { item: { ar: 'تحديد جدول زمني مقسم بوضوح وله أوقات مراجعة', en: 'Setting a clearly divided schedule with review slots' }, details: { ar: 'منعاً للتأخير الفوضوي، يجب مراجعة العمل أسبوعاً بأسبوع.', en: 'To prevent messy delays, review the work week by week.' } },
      { item: { ar: 'توضيح آلية ونوع الدعم الفني بعد الإطلاق وخلاله', en: 'Clarifying the support mechanism during and after launch' }, details: { ar: 'تأكد من وجود فترة ضمان كافية للتعامل مع أي مشاكل برمجية طارئة.', en: 'Ensure there is a sufficient warranty period to handle any emergency code issues.' } }
    ]
  },
  '/about/story': {
    metrics: [
      { value: '5', label: { ar: 'محطات تطور وصياغة لطريقة العمل', en: 'milestones shaping the work method' } },
      { value: '3', label: { ar: 'تحولات هيكلية من مجرد تنفيذ إلى شراكة', en: 'structural shifts from execution to partnership' } },
      { value: '1', label: { ar: 'صوت وهوية واحدة قوية ومفهومة للعلامة', en: 'one strong and understandable brand voice' } },
      { value: '8+', label: { ar: 'سنوات خبرة متراكمة في هندسة الحضور الرقمي', en: 'years of combined digital presence expertise' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'البداية من مشكلة وضوح الحضور العربي', en: 'Starting with Arabic Clarity Issues' }, body: { ar: 'اكتشفنا أن المشكلة في أغلب المواقع ليست ضعف التصميم الجمالي، بل أن الزوار يخرجون دون فهم العرض لغموض اللغة والمحتوى.', en: 'We realized that the issue with most sites is not visuals, but that visitors leave without understanding the offer due to vague copy.' } },
      { phase: '02', title: { ar: 'التركيز على هندسة تجربة اتخاذ القرار', en: 'Focusing on Decision UX Architecture' }, body: { ar: 'انتقلنا من بناء صفحات تقليدية إلى تصميم رحلة متكاملة للقرار: وعود واضحة، أدلة عملية، ومسارات تواصل هادئة.', en: 'We moved from building standard pages to designing integrated decision journeys: clear promises, practical proof, and calm contact paths.' } },
      { phase: '03', title: { ar: 'إطلاق وتأسيس منهجية نُطق الخاصة', en: 'Launching Notaq Method' }, body: { ar: 'قمنا بصياغة منهجية عمل صارمة تضمن جودة النصوص، وسلاسة الواجهات، وقابلية التوسع التقني دون تشتت.', en: 'We defined a strict working method ensuring copy quality, smooth interfaces, and technical scalability without drift.' } },
      { phase: '04', title: { ar: 'الشراكة الرقمية والنمو المستمر للعملاء', en: 'Digital Partnership and Client Growth' }, body: { ar: 'نحن لا نسلم شاشات ونمضي؛ نحن نبني أصلاً تجارياً حقيقياً يخدم المبيعات ويعزز مكانة العلامة لسنوات.', en: 'We do not just hand over screens and walk away; we build a real business asset that supports sales and brand value for years.' } }
    ],
    comparison: [
      { before: { ar: 'قصة تعريفية قصيرة ومملة تظهر كفقرة تسويقية عامة ومكررة مثل باقي الشركات.', en: 'A short, boring bio paragraph that feels generic and repeated.' }, after: { ar: 'قصة تشغيلية واقعية تكشف طريقة تفكيرنا، خبراتنا، ولماذا نهتم بأدق التفاصيل التشغيلية.', en: 'An operational, realistic story revealing how we think, our experience, and our focus on operational details.' } },
      { before: { ar: 'الزائر يرى مجرد خدمات مبعثرة دون معرفة الفلسفة والخبرة التي تقف خلف صياغتها وتطويرها.', en: 'Visitors see scattered services without knowing the philosophy and expertise behind them.' }, after: { ar: 'الزائر يربط كل خدمة بمبدأ تشغيلي ناضج، وخبرة عملية حقيقية، وطريقة تسليم منظمة.', en: 'Visitors connect each service to a mature principle, real-world experience, and structured delivery.' } }
    ],
    scenarios: [
      { title: { ar: 'الشركات التي تريد إظهار نضجها المؤسسي', en: 'Companies Needing to Show Corporate Maturity' }, body: { ar: 'تساعدهم قصة نُطق على صياغة تاريخهم وقيمهم كسلسلة قرارات عملية تثبت للعميل جدارتهم وثباتهم.', en: 'Notaq story helps them frame their history and values as practical choices proving capability and reliability.' } },
      { title: { ar: 'العلامات الخدمية التي تعتمد على الثقة العالية', en: 'Service Brands Depending on High Trust' }, body: { ar: 'ترتب القصة طريقة التفكير لجعل العميل يشعر أنه يتعاون مع خبراء يفهمون مشكلته وليس مجرد منفذين.', en: 'The story structures the mindset to make clients feel they are partnering with experts who understand their issues, not just builders.' } }
    ],
    proofPoints: [
      { title: { ar: 'القصة أداة إقناع وبناء ثقة أساسية', en: 'Story as a Core Trust and Persuasion Tool' }, body: { ar: 'كل سطر في قصتنا يبرهن على مبدأ تشغيلي مثل الالتزام بالجودة، حماية وضوح المحتوى، أو تسهيل حياة العميل.', en: 'Every line in our story demonstrates an operational principle like quality, content clarity, or client convenience.' } },
      { title: { ar: 'طريقة عمل حية وموثقة بالتجارب', en: 'A Living Working Method Documented by Experience' }, body: { ar: 'تطور قصتنا يعكس نضج قراراتنا البرمجية والتصميمية وابتكارنا الدائم لحلول وضوح الحضور الرقمي.', en: 'Our story evolution reflects the maturity of our code and design choices, innovating clarity for digital presence.' } }
    ],
    faq: [
      { question: { ar: 'لماذا تركز قصة نُطق على الوضوح قبل الجمال البصري؟', en: 'Why does Notaq Story focus on clarity before visual beauty?' }, answer: { ar: 'لأن أجمل واجهة في العالم لن تجلب لك عملاء إذا كان زائرك لا يفهم ما تقدمه وكيف يساعده.', en: 'Because the most beautiful interface will not bring clients if visitors do not grasp what you offer and how it helps them.' } },
      { question: { ar: 'كيف تفيد قصة العلامة التجارية في قرار العميل؟', en: 'How does a brand story aid client decisions?' }, answer: { ar: 'توضح للعميل النضج التشغيلي وخبرة الفريق، وتثبت له أن هناك منهجية وفلسفة حقيقية تقود العمل.', en: 'It shows operational maturity and team expertise, proving that a real methodology and philosophy guide the work.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'مرحلة التأسيس وتحديد الفجوة الرقمية', en: 'Founding Phase & Digital Gap Identification' }, body: { ar: 'ملاحظة ضعف وضوح المواقع العربية وتشتت محتواها الخدمي.', en: 'Noticing poor clarity and cluttered service content in Arabic websites.' }, icon: 'Sparkles', color: 'cyan' },
      { phase: '02', title: { ar: 'تطوير منهجية هندسة ووضوح المحتوى', en: 'Developing Content Architecture Method' }, body: { ar: 'ابتكار قواعد الترتيب السياقي وهيكلة كتل العرض الفاخرة.', en: 'Creating rules for contextual ordering and structuring luxury display blocks.' }, icon: 'GitMerge', color: 'emerald' },
      { phase: '03', title: { ar: 'تكامل الخدمات البرمجية والتصميمية المتطورة', en: 'Integrating Advanced Dev & Design Services' }, body: { ar: 'بناء الصفحات كنظام حضور متكامل سريع وبسيط وقابل للتمدد.', en: 'Building pages as an integrated presence system that is fast, simple, and scalable.' }, icon: 'Cpu', color: 'amber' },
      { phase: '04', title: { ar: 'الوصول إلى النموذج الحالي لـ نُطق كشريك ثقة', en: 'Reaching the Current Notaq Trust Partner Model' }, body: { ar: 'تقديم حضور ناضج وخدمات مخصصة تحقق للشركات الريادة الرقمية.', en: 'Delivering mature presence and tailored services that give companies digital leadership.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '8+', label: { ar: 'سنوات من هندسة الحضور الرقمي', en: 'Years of digital presence engineering' }, description: { ar: 'من البحث المستمر والتطوير في واجهات ووضوح المحتوى العربي.', en: 'Continuous research and development in Arabic interfaces and content clarity.' } },
      { number: '50+', label: { ar: 'مشروعاً ناجحاً تم بناؤه وتطويره', en: 'Successful projects built and launched' }, description: { ar: 'لشركات ومؤسسات ومتاجر حققت التميز بفضل الوضوح الرقمي.', en: 'For companies, institutions, and stores that achieved excellence through digital clarity.' } },
      { number: '15+', label: { ar: 'أداة ومكوناً برمجياً تم ابتكارها وتطويرها', en: 'Custom tools & components developed' }, description: { ar: 'لتحسين تجارب القراءة والتصفح والتفاعل للزوار العربي.', en: 'To optimize reading, browsing, and interaction for Arabic visitors.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'مستند فلسفة وهوية نُطق للوضوح', en: 'Notaq Clarity Philosophy Document' }, description: { ar: 'وثيقة مبادئ كتابة وهندسة المحتوى وتوجيه قرارات التصميم.', en: 'Principles of writing, content engineering, and guiding design choices.' }, icon: 'BookOpen', impact: { ar: 'يضمن الاتساق الكامل لكل صفحة وجزء نبنيه لك.', en: 'Ensures full consistency of every page and block we build for you.' } },
      { name: { ar: 'دليل جودة اللغة والنبرة التحريرية', en: 'Language Quality & Tone Guide' }, description: { ar: 'مجموعة القواعد التي تمنع النصوص الحشوية وتضمن التركيز المطلق.', en: 'Rules preventing word filler and ensuring absolute textual focus.' }, icon: 'PenTool', impact: { ar: 'يرفع نضج ومصداقية العلامة التجارية في عيون زوارها.', en: 'Elevates brand maturity and credibility in the eyes of visitors.' } },
      { name: { ar: 'مكتبة الواجهات والأنماط البصرية الفريدة', en: 'Unique Visual Interface Library' }, description: { ar: 'عناصر تصميم مخصصة تم صقلها وتطويرها لتسهيل القراءة وتوجيه القرار.', en: 'Custom design elements refined to support reading and guide decisions.' }, icon: 'Component', impact: { ar: 'يوفر تجربة بصرية فاخرة ومتناسقة تمنح إحساس الفخامة.', en: 'Provides a luxury, consistent visual experience conveying premium quality.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'قصة نُطق لم تكن مجرد كلام تسويقي. لقد رأينا هذه المبادئ والفلسفة تترجم واقعاً في طريقة بنائهم لموقعنا، حيث كان تركيزهم على فهم احتياج العميل وإيضاح قيمتنا هو المحرك لكل قرار.', en: 'Notaq story was not just marketing talk. We saw these principles translate into reality in how they built our site.' },
      author: { ar: 'الأستاذ عبد الرحمن السديري', en: 'Mr. Abdulrahman Al-Sudairy' },
      role: { ar: 'مؤسس منصة مدارك للاستشارات', en: 'Founder of Madarek Consulting' },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      impact: { ar: 'موقع يمثل ثقافة وهوية الجهة بدقة واحترافية متناهية.', en: 'A website representing the entity culture and identity with precision.' }
    },
    checklist: [
      { item: { ar: 'القصة ترتبط بمشكلة واقعية يعاني منها العميل', en: 'Story connects to a real problem clients suffer from' }, details: { ar: 'تأكد أن القصة تجيب عن: لماذا تأسس هذا الكيان؟ وكيف يحل مشكلتي بشكل أفضل؟', en: 'Verify the story answers: why was this entity founded and how does it solve my problem better?' } },
      { item: { ar: 'عرض محطات التطور كقرارات نضج لا كفخر فارغ', en: 'Present milestones as growth steps, not empty boasting' }, details: { ar: 'كل مرحلة يجب أن تشرح كيف انعكست على جودة وسرعة تسليم خدمات الشركة للعميل اليوم.', en: 'Each stage should explain how it reflects on quality and speed of delivering company services today.' } },
      { item: { ar: 'تأكيد المبادئ من خلال أدلة ومخرجات واضحة وملموسة', en: 'Confirming principles through clear, tangible deliverables' }, details: { ar: 'المبادئ تثبت نفسها بالتنفيذ؛ وضح كيف يرى العميل قيمك في واجهته وفي طريقة تعاملكم.', en: 'Principles prove themselves in execution; show how clients see your values in their interface and collaboration.' } }
    ]
  },
  '/about/method': {
    metrics: [
      { value: '4', label: { ar: 'مراحل تسليم رئيسية واضحة ومحددة', en: 'clear main delivery stages' } },
      { value: '6', label: { ar: 'نقاط مراجعة دقيقة قبل إطلاق الموقع', en: 'precise pre-launch review gates' } },
      { value: '1', label: { ar: 'نظام قرار تشاركي يمنع أي سوء فهم', en: 'shared decision system preventing mistakes' } },
      { value: '98%', label: { ar: 'نسبة الالتزام بالجداول والمواعيد المقررة', en: 'sprint schedule commitment rate' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'التشخيص وتحديد أهداف المحتوى والصفحات', en: 'Diagnosis & Page Goal Definition' }, body: { ar: 'نجلس معاً لفهم طبيعة نشاطك، وتحديد هوية زائرك المستهدف، وصياغة الرسائل الأساسية.', en: 'We meet to understand your business, target visitor identity, and shape core messages.' } },
      { phase: '02', title: { ar: 'هندسة وترتيب المحتوى وبناء الهيكل البصري', en: 'Content Architecture & Visual Layout' }, body: { ar: 'نرسم خريطة توزيع الأقسام والمعلومات والروابط، وتحديد نداءات الفعل المناسبة.', en: 'We map sections, information, links, and design suitable calls to action.' } },
      { phase: '03', title: { ar: 'التصميم البصري التفاعلي وصقل الواجهات', en: 'Interactive Design & Interface Polish' }, body: { ar: 'نحول الهيكل الصامت إلى واجهة تفاعلية فاخرة تخدم القراءة وتنبض بالحياة بفضل الأنيميشن.', en: 'We turn the static layout into a luxury interactive interface supporting reading with animation.' } },
      { phase: '04', title: { ar: 'البناء البرمجي عالي الأداء والتطوير النظيف', en: 'Clean High-Performance Web Development' }, body: { ar: 'نكتب كوداً نظيفاً وسريعاً ومتجاوباً بالكامل مع الجوال، متوافقاً مع قواعد الـ SEO.', en: 'We write clean, fast, mobile-responsive code fully optimized for SEO.' } },
      { phase: '05', title: { ar: 'فحص الجودة والإطلاق الموجه والتحسين', en: 'Quality Check, Guided Launch & Tuning' }, body: { ar: 'نختبر الموقع على مختلف الشاشات والمتصفحات، ونهيئ الاستضافة، ونطلق الموقع رسمياً.', en: 'We test on all screens and browsers, set up hosting, and launch the site.' } }
    ],
    decisionMatrix: [
      { label: { ar: 'اتخاذ قرار المحتوى والنصوص', en: 'Content & Copywriting Decision' }, value: { ar: 'التركيز على نية الزائر وإقناعه', en: 'Focus on visitor intent and persuasion' }, note: { ar: 'نستبعد أي نصوص حشوية أو عامة لا تجيب عن أسئلة العميل الحقيقية.', en: 'We exclude any filler copy that does not address real client questions.' } },
      { label: { ar: 'اتخاذ قرار التصميم والأنيميشن', en: 'Design & Animation Decision' }, value: { ar: 'تسهيل القراءة وتوجيه الانتباه', en: 'Ease of reading and guiding attention' }, note: { ar: 'الحركة والجماليات موجودة لخدمة المحتوى، لا لتشتيت القارئ أو إبطاء التحميل.', en: 'Motion and visuals exist to serve content, not to distract or slow loading.' } },
      { label: { ar: 'اتخاذ قرار الهيكل البرمجي والسرعة', en: 'Code Architecture & Performance' }, value: { ar: 'بساطة الكود وقابلية التوسع القصوى', en: 'Code simplicity and maximum scalability' }, note: { ar: 'نبني الموقع كـ Components يعاد استخدامها لتسهيل التعديل المستقبلي.', en: 'We build the site as reusable components to facilitate future edits.' } }
    ],
    insights: [
      { title: { ar: 'التشخيص يمنع التخبط في التصميم والتنفيذ', en: 'Diagnosis Prevents Heavy Redesign' }, body: { ar: 'فهم نشاط الشركة والزائر المستهدف والاعتراضات المتوقعة قبل اختيار الألوان أو شكل الأقسام يحمي من التعديلات الكبيرة لاحقاً.', en: 'Understanding the company, target visitors, and objections before picking colors prevents heavy revisions later.' } },
      { title: { ar: 'المحتوى هو قائد قطار التصميم البصري', en: 'Content Leads the Design Train' }, body: { ar: 'لا نستخدم قوالب جاهزة ونحشر المحتوى فيها؛ نحن نهيكل الرسالة أولاً، ثم نصمم الواجهة التي تبرزها وتدعم قراءتها.', en: 'We do not squeeze copy into premade templates. We architecture the message first, then design the interface around it.' } },
      { title: { ar: 'التسليم الممنهج يحمي وقت وجداول العمل', en: 'Structured Delivery Protects Project Timelines' }, body: { ar: 'تقسيم العمل إلى مهام أسبوعية محددة يجعل صاحب القرار على دراية كاملة بمستجدات التنفيذ دون مفاجآت في النهاية.', en: 'Dividing work into weekly tasks keeps decision-makers fully updated on progress, eliminating last-minute surprises.' } },
      { title: { ar: 'فحص الجودة الصارم قبل بدء الإطلاق الفعلي', en: 'Strict Quality Checks Before Launch' }, body: { ar: 'نمرر الموقع عبر 24 نقطة فحص تشمل السرعة، التجاوب، التوافق، الروابط، صحة الأكواد، ووسوم الـ SEO.', en: 'We run the site through a 24-point checklist covering speed, responsiveness, links, clean code, and SEO tags.' } }
    ],
    proofPoints: [
      { title: { ar: 'التزام صارم بالمواعيد والتسليم الأسبوعي', en: 'Strict Deadlines & Weekly Handoffs' }, body: { ar: 'نلتزم التزاماً مطلقاً بجدول المهام المتفق عليه، ونوفر للعميل رابط متابعة حي لمشاهدة التطور.', en: 'We commit absolutely to the agreed schedule and provide a live link for progress tracking.' } },
      { title: { ar: 'اجتماعات مراجعة سريعة ومركزة وبلا هدر', en: 'Focused, Short Review Meetings' }, body: { ar: 'مراجعاتنا عملية ومبنية على أهداف واضحة؛ نناقش التصميم من منظور الإقناع والجمال وليس الأذواق الفردية فقط.', en: 'Our reviews are objective and goals-based; we discuss design from the lens of persuasion, not subjective taste.' } },
      { title: { ar: 'ملفات تدريبية وفيديو لشرح طريقة الإدارة للعميل', en: 'Training Videos for Content Management' }, body: { ar: 'عند التسليم، نرسل لك فيديو مسجلاً يشرح كيف تعدل النصوص والصور والروابط بنفسك دون الحاجة للمطور.', en: 'At handoff, we send a recorded video showing how to edit copy, images, and links yourself without a developer.' } }
    ],
    faq: [
      { question: { ar: 'كيف يمكنني متابعة سير العمل في مشروعي؟', en: 'How do I monitor work progress on my project?' }, answer: { ar: 'نوفر لك رابط استضافة تجريبي حي يتحدث تلقائياً بمجرد إنجاز أي ميزة أو شاشة لتراها مباشرة.', en: 'We provide a live staging link that updates automatically as we build each screen and feature.' } },
      { question: { ar: 'ما هو دوري كعميل خلال مراحل تنفيذ المشروع؟', en: 'What is my role as a client during implementation?' }, answer: { ar: 'دورك هو مراجعة الأقسام والمخرجات أسبوعياً وتقديم الملاحظات بوضوح لنضمن توافق النتيجة مع توقعاتك.', en: 'Your role is to review deliverables weekly and share clear feedback to ensure alignment with expectations.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'جلسة التخطيط والتوجيه وبداية الانطلاق', en: 'Planning, Orientation & Kickoff' }, body: { ar: 'تحديد قنوات التواصل وتأكيد الأهداف والجدول الزمني.', en: 'Setting contact channels, confirming goals, and aligning the schedule.' }, icon: 'Play', color: 'cyan' },
      { phase: '02', title: { ar: 'تسليم خريطة المحتوى وهندسة الأقسام', en: 'Delivering Content Map & Section Architecture' }, body: { ar: 'مراجعة وتأكيد توزيع النصوص ومسار قرار الزائر.', en: 'Reviewing and confirming text layout and visitor decision paths.' }, icon: 'Map', color: 'emerald' },
      { phase: '03', title: { ar: 'مراجعة واجهات التصميم وتأكيد اللمسات الفنية', en: 'Reviewing Design Interfaces & Styling' }, body: { ar: 'فحص الأشكال والألوان والحركات المعتمدة لكل صفحة.', en: 'Checking approved layouts, colors, and motion for each page.' }, icon: 'Layers', color: 'amber' },
      { phase: '04', title: { ar: 'البناء وتثبيت الأكواد وإطلاق النسخة التجريبية', en: 'Building, Coding & Deploying Beta' }, body: { ar: 'فحص الكود والتجاوب وحالة الموقع قبل النشر النهائي.', en: 'Checking code stability, responsiveness, and site state before final launch.' }, icon: 'Code', color: 'purple' },
      { phase: '05', title: { ar: 'الإطلاق الرسمي والتسليم والبدء بالتدريب', en: 'Formal Launch, Handoff & Training Start' }, body: { ar: 'تهيئة النطاق، فحص SEO، وتسليم الملفات والتدريب.', en: 'Configuring domain, running SEO checks, handing over files, and training.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '98%', label: { ar: 'نسبة تسليم المشاريع في موعدها', en: 'On-time project delivery rate' }, description: { ar: 'بسبب نظام المهام الأسبوعية الصارم وتنسيق الموارد.', en: 'Driven by our strict weekly task system and resource coordination.' } },
      { number: '24pt', label: { ar: 'نقطة فحص في قائمة مراجعة الجودة', en: 'Quality control checklist points' }, description: { ar: 'نمرر كل صفحة عليها لضمان الأداء وخلوها من الأخطاء.', en: 'Every page passes through this to ensure performance and zero errors.' } },
      { number: '0h', label: { ar: 'وقت ضائع في اجتماعات غير ضرورية', en: 'Zero hours wasted in unnecessary meetings' }, description: { ar: 'نعتمد على التقارير المسجلة واللوحات التفاعلية للمتابعة.', en: 'We rely on recorded video updates and interactive boards.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'لوحة متابعة المشروع التفاعلية على Notion', en: 'Interactive Notion Project Board' }, description: { ar: 'لوحة لمتابعة المهام والمستندات والتعديلات والجدول الزمني لحظة بلحظة.', en: 'A board to track tasks, documents, edits, and schedule live.' }, icon: 'Calendar', impact: { ar: 'تمنح شفافية كاملة وتمنع تشتت الملفات في البريد.', en: 'Gives full transparency and stops file loss in emails.' } },
      { name: { ar: 'رابط استضافة تجريبي مخصص ومباشر للعميل', en: 'Dedicated Staging Environment Link' }, description: { ar: 'خادم آمن لمشاهدة واختبار الموقع حياً أثناء كتابة الأكواد.', en: 'A secure server to view and test the live site during coding.' }, icon: 'Globe', impact: { ar: 'يتيح لك اختبار التفاعلات والتجاوب بنفسك قبل الإطلاق.', en: 'Lets you test interactions and responsiveness yourself before launch.' } },
      { name: { ar: 'دليل مراجعة التصاميم وتقديم الملاحظات', en: 'Design Review & Feedback Template' }, description: { ar: 'نموذج يساعدك على تنظيم ملاحظاتك وتوجيهها بدقة للفريق.', en: 'A template helping you structure notes and guide the team accurately.' }, icon: 'FileEdit', impact: { ar: 'يسرع وتيرة التعديلات ويمنع سوء الفهم أو الخطأ.', en: 'Speeds up iterations and prevents misunderstandings or errors.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'أكثر ما أعجبنا في التعامل مع نُطق هو منهجيتهم؛ كل أسبوع نعرف تماماً ما الذي سيتم تسليمه، وهناك رابط مباشر نرى فيه التطور يوماً بعد يوم، مما وفر علينا الكثير من الجهد والتوتر.', en: 'What we loved most about Notaq was their methodology. Every week we knew exactly what would be delivered, and a live link let us see progress day by day.' },
      author: { ar: 'الدكتورة مها العتيبي', en: 'Dr. Maha Al-Otaibi' },
      role: { ar: 'المشرفة العامة على مركز مدارات للتعلم', en: 'General Supervisor at Madarat Learning Center' },
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      impact: { ar: 'تجربة تنفيذ منظمة ومريحة ومخرجات تفوق التوقعات.', en: 'An organized, comfortable delivery experience with outputs exceeding expectations.' }
    },
    checklist: [
      { item: { ar: 'المشروع مقسم إلى مراحل تسليم أسبوعية واضحة', en: 'Project is divided into clear weekly milestones' }, details: { ar: 'تأكد من معرفتك بما ستستلمه بنهاية كل أسبوع لتقييمه.', en: 'Ensure you know what you will receive at the end of each week to review.' } },
      { item: { ar: 'وجود رابط استضافة تجريبي حي لمتابعة كتابة الكود', en: 'Live staging link available to monitor coding' }, details: { ar: 'يجب أن تملك وصولاً لمشاهدة التحديثات البرمجية مباشرة.', en: 'You must have access to watch code updates live.' } },
      { item: { ar: 'توفير مواد وتدريب على إدارة المحتوى بعد التسليم', en: 'Providing training resources for content management' }, details: { ar: 'يتم توضيح طريقة إدارة المحتوى وتوفير شرح يساعد الفريق على استخدام لوحة التحكم بثقة.', en: 'Content management is explained clearly so the team can use the dashboard with confidence.' } }
    ]
  },
  '/about/culture': {
    metrics: [
      { value: '5', label: { ar: 'مبادئ تشغيل يومية نلتزم بها', en: 'daily operating principles we follow' } },
      { value: '2', label: { ar: 'محاور متوازنة: وضوح المعنى وتأثير الفن', en: 'balanced axes: clear meaning & art craft' } },
      { value: '0', label: { ar: 'مساومة على جودة الكود أو دقة التصميم', en: 'compromise on code quality or design precision' } },
      { value: '100%', label: { ar: 'احترام تام لأوقات وهدوء العملاء', en: 'absolute respect for client time and peace' } }
    ],
    decisionMatrix: [
      { label: { ar: 'عند حدوث تعارض في واجهة الموقع', en: 'When Interface Choices Conflict' }, value: { ar: 'تفضيل وضوح القراءة على الاستعراض البصري', en: 'Prefer readability over showy visuals' }, note: { ar: 'إذا كان المؤثر البصري يعطل سرعة القراءة أو فهم الخدمة فنقوم باستبعاده فوراً.', en: 'If a visual effect delays reading speed or service grasp, we exclude it.' } },
      { label: { ar: 'عند هندسة وكتابة النصوص', en: 'When Architecting Copy' }, value: { ar: 'التفصيل المفيد بدلاً من الحشو العام', en: 'Useful depth instead of generic filler' }, note: { ar: 'نفضل كتابة تفاصيل تشغيلية عميقة تفيد القارئ بدلاً من الشعارات والعبارات الإنشائية.', en: 'We write deep operational details helping the reader instead of poetic corporate slogans.' } },
      { label: { ar: 'عند تسليم الكود للعميل', en: 'When Handing Over Code' }, value: { ar: 'بناء نظام يسهل البناء عليه مستقبلاً', en: 'Building a system that is easy to expand' }, note: { ar: 'نسلم كوداً نظيفاً وموثقاً يمكن لأي مطور آخر فهمه وتطويره بسلاسة.', en: 'We deliver clean, documented code that any developer can easily understand and build upon.' } }
    ],
    scenarios: [
      { title: { ar: 'التعامل مع ملاحظات وتعديلات العميل', en: 'Handling Client Edits and Feedback' }, body: { ar: 'نتعامل معها كنقاش فني حول الهدف: هل هذا التعديل يخدم وضوح الفكرة؟ هل يقلل تردد الزائر؟ هل يرفع نسب التواصل؟', en: 'We treat feedback as a technical alignment: does this edit clarify the message, reduce hesitation, or raise conversion?' } },
      { title: { ar: 'صياغة المحتوى الفني والتقني المعقد', en: 'Framing Complex Technical Content' }, body: { ar: 'نقوم بتبسيطه وتقسيمه إلى جداول ومصفوفات مقارنة ورسوم بيانية حتى يستوعبها الزائر العادي دون إحباط.', en: 'We simplify and divide it into tables, comparison matrices, and diagrams so average visitors grasp it easily.' } }
    ],
    comparison: [
      { before: { ar: 'ثقافة عمل تظهر كشعارات تقليدية مكررة مثل: الجودة، السرعة، الالتزام، والابتكار بلا أي تطبيق ملموس.', en: 'Culture shown as generic slogans like quality, speed, commitment, and innovation without application.' }, after: { ar: 'ثقافة تظهر في التفاصيل: كيف نصمم خطوط القراءة، كيف نرفض الأكواد البطيئة، وكيف نسهل تجربة التعديل للعميل.', en: 'Culture showing in details: how we design readable fonts, reject slow code, and simplify client edits.' } }
    ],
    proofPoints: [
      { title: { ar: 'تأثير القيم يظهر في التفاصيل الصغيرة', en: 'Values Show in Small Details' }, body: { ar: 'اختيار أحجام النصوص، سرعة الحركة، بساطة النماذج، ورسائل الخطأ كلها تبرهن على احترامنا للقارئ والعميل.', en: 'Choosing font sizes, motion speed, form simplicity, and error states all prove our respect for the user.' } },
      { title: { ar: 'الهدوء والتركيز كطريقة عمل رسمية', en: 'Calm and Focus as an Operating Standard' }, body: { ar: 'نحن لا نصرخ أو نبالغ في وعودنا؛ نترك جودة الأكواد وتناسق الأقسام ووضوح النتائج تتحدث عن خبرتنا.', en: 'We do not shout or exaggerate. We let code quality, section harmony, and clear outcomes speak for us.' } }
    ],
    faq: [
      { question: { ar: 'كيف تؤثر قيم نُطق على جودة موقع الشركة؟', en: 'How do Notaq values shape company website quality?' }, answer: { ar: 'تنعكس قيمنا في قابلية الاستخدام وسرعة الأداء ودقة التفاصيل، مما يمنح الموقع حضوراً أكثر نضجاً واحتراماً.', en: 'Our values appear in usability, speed, and detail precision, giving the website a more mature and respected presence.' } },
      { question: { ar: 'ماذا تعني ثقافة "الوضوح أولاً"؟', en: 'What does "Clarity First" culture mean?' }, answer: { ar: 'تعني أننا نضع فهم زائرك المستهدف للمحتوى وقدرته على اتخاذ القرار كأولوية مطلقة تفوق أي تفضيل جمالي مجرد.', en: 'It means we place visitor understanding and decision ability as an absolute priority over mere aesthetic preference.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'احترام خصوصية وبداية نقاش العميل', en: 'Respecting Privacy & Discovery Start' }, body: { ar: 'الاستماع للعميل بفهم وتشخيص هادئ دون محاولة بيع مستعجلة.', en: 'Listening to the client with quiet diagnosis, avoiding rushed sales pitches.' }, icon: 'Users', color: 'cyan' },
      { phase: '02', title: { ar: 'صقل المحتوى والتصميم بكل أمانة فنية', en: 'Refining Content & Design Honestly' }, body: { ar: 'مراجعة النصوص والتصاميم لاستبعاد أي حشو أو تعقيد بصري.', en: 'Reviewing copy and layouts to exclude any filler or visual clutter.' }, icon: 'Compass', color: 'emerald' },
      { phase: '03', title: { ar: 'كتابة الكود بمعايير جودة صارمة', en: 'Writing Code with Strict Quality Standards' }, body: { ar: 'تطوير صفحات سريعة وخفيفة وتراعي ذوي الاحتياجات الخاصة وسرعة الموبايل.', en: 'Developing pages that are fast, light, and accessible on mobile devices.' }, icon: 'Settings', color: 'amber' },
      { phase: '04', title: { ar: 'التسليم الممنهج والصدق في التوجيه', en: 'Structured Handoff & Honest Guidance' }, body: { ar: 'تزويد العميل بكل المهارات والملفات التي تضمن استقلاليته التامة عن المطورين.', en: 'Equipping the client with all skills and files ensuring total developer independence.' }, icon: 'Heart', color: 'cyan' }
    ],
    statsCounter: [
      { number: '100%', label: { ar: 'احترام لمعايير إمكانية الوصول', en: 'Accessibility standard compliance' }, description: { ar: 'المواقع مصممة لتكون سهلة القراءة لجميع فئات المستخدمين.', en: 'Sites are designed to be easily readable for all categories of users.' } },
      { number: '90+', label: { ar: 'درجة أداء وسرعة الموقع على Lighthouse', en: 'Performance & speed score on Lighthouse' }, description: { ar: 'نحن لا نقبل بأكواد ثقيلة تبطئ التصفح أو تعطل تجربة الزائر.', en: 'We do not accept heavy code that slows browsing or breaks experience.' } },
      { number: '0', label: { ar: 'تنازل عن التفاصيل الصغيرة', en: 'Compromises on minor details' }, description: { ar: 'نهتم بالمسافات والألوان وحالات الأخطاء كاهتمامنا بالصفحة بأكملها.', en: 'We care about spacing, colors, and error states as much as the whole page.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'دليل مبادئ وقيم التصميم التفاعلي للعلامة', en: 'Interactive Brand UX & Values Guideline' }, description: { ar: 'مستند يحدد القواعد البصرية والتفاعلية التي تحمي هدوء ووضوح الموقع.', en: 'A guide defining visual and interactive rules protecting site clarity.' }, icon: 'Bookmark', impact: { ar: 'يحافظ على توازن وجمال الموقع مهما أضفت له من صفحات مستقبلاً.', en: 'Keeps site balance and beauty no matter how many pages you add later.' } },
      { name: { ar: 'تقرير فحص التجاوب وسهولة القراءة الرقمية', en: 'Readability & Responsiveness Audit Report' }, description: { ar: 'تقرير مفصل يوضح نتائج اختبار القراءة على مختلف أحجام الشاشات.', en: 'A report showing reading test outcomes across various screen sizes.' }, icon: 'Clipboard', impact: { ar: 'يضمن راحة تامة لعيون الزوار ويقلل إجهاد القراءة الطويلة.', en: 'Ensures absolute comfort for visitor eyes, reducing strain during long reading.' } },
      { name: { ar: 'دليل تنظيم وتوثيق الأكواد البرمجية', en: 'Clean Code Documentation Guide' }, description: { ar: 'شرح منظم لكيفية كتابة وتنسيق الأكواد ومواقع المكونات بالمشروع.', en: 'Organized guide on how code is written, structured, and components placed.' }, icon: 'Code', impact: { ar: 'يسهل عمل أي فريق تقني آخر يريد البناء أو الإضافة لاحقاً.', en: 'Eases the work of any other technical team building or adding later.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'ثقافة نُطق تظهر في كل خطوة؛ كانوا يرفضون أي فكرة استعراضية قد تبطئ تصفح الموقع أو تشتت القارئ عن المحتوى الأساسي، وكانوا دائماً ينحازون لسهولة الاستخدام، وهو ما جعل موقعنا مريحاً وناجحاً جداً.', en: 'Notaq culture shows in every step. They rejected flashy ideas that would slow browsing or distract readers from core content.' },
      author: { ar: 'الأستاذ يوسف الهاشمي', en: 'Mr. Youssef Al-Hashemi' },
      role: { ar: 'مدير العمليات في مؤسسة آفاق التنمية', en: 'Operations Director at Afaq Development Foundation' },
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
      impact: { ar: 'تطبيق عملي حقيقي لمبدأ الوضوح أولاً في كل زاوية من زوايا موقعنا.', en: 'Real-world application of the clarity-first principle in every corner of our site.' }
    },
    checklist: [
      { item: { ar: 'الواجهة تراعي راحة القراءة وتقليل التشتت البصري', en: 'Interface respects reading comfort and reduces distraction' }, details: { ar: 'تأكد من التوازن بين كتل النصوص ومساحات التنفس الفراغية بالموقع.', en: 'Ensure balance between copy blocks and empty breathing spaces on the site.' } },
      { item: { ar: 'الأكواد مكتوبة وفق معايير نظيفة وموثقة بالكامل للعميل', en: 'Code is written to clean standards and fully documented' }, details: { ar: 'افحص سهولة قراءة وهيكلة الأكواد وتوفر وثائق الشرح الفنية.', en: 'Review code readability, structure, and availability of technical docs.' } },
      { item: { ar: 'احترام كامل لتوقعات وقنوات تواصل العميل بهدوء واحتراف', en: 'Complete respect for client channels calmly and professionally' }, details: { ar: 'تأكد من أن وتيرة العمل تتم بجدول منظم وبلا رسائل عشوائية متفرقة.', en: 'Ensure the work pace is driven by a scheduled roadmap without scattered messages.' } }
    ]
  },
  '/services/company-websites': {
    metrics: [
      { value: '7+', label: { ar: 'صفحات مصممة كنظام متكامل للثقة', en: 'pages designed as a trust system' } },
      { value: '4', label: { ar: 'طبقات ثقة مدروسة لتبديد التردد', en: 'trust layers designed to resolve hesitation' } },
      { value: '100%', label: { ar: 'تركيز على قرار العميل ونضج التجربة', en: 'focus on client decision & experience maturity' } },
      { value: '3.2x', label: { ar: 'ارتفاع في متوسط جودة طلبات التعاون', en: 'increase in average collaboration inquiry quality' } }
    ],
    comparison: [
      { before: { ar: 'موقع شركة تعريفي تقليدي يعرض نبذة مكررة، خدمات بأسماء متشابهة، وصوراً بلا دلالة عملية.', en: 'A generic company site showing brief bios, similar services, and stock images.' }, after: { ar: 'نظام حضور متكامل: خدمات مصنفة بوضوح، منهجية عمل مقنعة، شهادات عملاء، وتواصل سهل.', en: 'An integrated system: clearly categorized services, convincing method, reviews, and easy contact.' } },
      { before: { ar: 'تكرار نفس العبارات الإنشائية والكلمات التسويقية الفضفاضة في كل الصفحات الفرعية دون فائدة.', en: 'Repeating the same marketing buzzwords across all sub-pages without value.' }, after: { ar: 'كل صفحة فرعية لها دور تشغيلي محدد: جذب القارئ، شرح القيمة، المقارنة، الإثبات، ثم التحويل.', en: 'Each sub-page has a specific role: attract, explain value, compare, prove, then convert.' } }
    ],
    decisionMatrix: [
      { label: { ar: 'الصفحة الرئيسية للموقع', en: 'Homepage' }, value: { ar: 'التوجيه والفرز السريع', en: 'Orientation & Fast Sorting' }, note: { ar: 'تعرف بالهوية وتفتح مسارات الاستكشاف للأقسام والخدمات والأعمال والتواصل.', en: 'Introduces the identity and opens exploration paths to services, work, and contact.' } },
      { label: { ar: 'صفحات الخدمات الفرعية', en: 'Service Pages' }, value: { ar: 'الإقناع العميق والتفكيك والتفصيل', en: 'Deep Persuasion & Detailed Analysis' }, note: { ar: 'تشرح طبيعة المشكلة، منهجيتنا في الحل، المخرجات الدقيقة، والأسئلة الشائعة للخدمة.', en: 'Explains the problem, our solution method, precise deliverables, and service FAQs.' } },
      { label: { ar: 'صفحات الأعمال ودراسات الحالة', en: 'Portfolio & Case Studies' }, value: { ar: 'الإثبات العملي الملموس للأثر', en: 'Tangible Practical Proof of Impact' }, note: { ar: 'تعرض المشاكل الواقعية وكيف قمنا بحلها بالأرقام والصور والشهادات لإثبات القدرة.', en: 'Shows real problems and how we solved them with metrics, images, and reviews.' } }
    ],
    insights: [
      { title: { ar: 'الهيكل القابل للتوسع يحمي استثمارك مستقبلاً', en: 'Scalable Structure Protects Future Investment' }, body: { ar: 'نبني الموقع كقطع برمجية مرنة (Components)، بحيث يمكنك إضافة صفحات، خدمات، مقالات، أو دراسات حالة جديدة لاحقاً دون الحاجة لإعادة تصميم الموقع أو كسر النظام البصري.', en: 'We build sites as flexible components, allowing you to add pages, services, articles, or cases later without redesigning.' } },
      { title: { ar: 'المحتوى يقود قرارات التصميم والتفاعل', en: 'Content Guides Design & Interaction' }, body: { ar: 'التصميم الجميل ليس كافياً؛ نحن نصمم ونهيكل الواجهات لتخدم تسلسل القراءة وسرعة الوصول للمعلومات ودعم اتخاذ القرار بوعي.', en: 'Beautiful design is not enough; we structure interfaces to support reading flow, fast information access, and conscious decisions.' } },
      { title: { ar: 'نداء الفعل البصري وسهولة التحويل للتواصل', en: 'Visual CTAs & Easy Contact Conversion' }, body: { ar: 'نوزع دعوات الحركة (CTA) بذكاء بعد تقديم ما يكفي من السياق والإقناع، ونوضح للزائر ماذا سيحدث بعد الضغط لبناء الاطمئنان.', en: 'We place CTAs smartly after sufficient context and persuasion, clarifying what happens next to build confidence.' } }
    ],
    proofPoints: [
      { title: { ar: 'بناء الهيبة والموثوقية المؤسسية الفاخرة', en: 'Building Luxury Corporate Authority' }, body: { ar: 'الموقع يعكس حجم الشركة ونضجها المؤسسي بفضل التنسيق البصري المتقن وترتيب المحتوى المقنع والحركة الهادئة.', en: 'The website reflects company scale and organizational maturity through refined layouts, persuasive content order, and calm motion.' } },
      { title: { ar: 'سرعة التحميل وتجاوب خارق مع الموبايل', en: 'Ultra-Fast Loading & Mobile Responsiveness' }, body: { ar: 'نهتم بخفة الأكواد وسرعة ظهور الشاشات على الجوال لضمان ألا تفقد أي عميل محتمل بسبب البطء أو التعليق.', en: 'We focus on light code and fast mobile loading to ensure you never lose a lead due to slowness.' } }
    ],
    faq: [
      { question: { ar: 'كم يستغرق بناء موقع شركة متكامل؟', en: 'How long does a full company site take?' }, answer: { ar: 'يستغرق عادة من 4 إلى 6 أسابيع حسب عدد الخدمات والصفحات وحجم هندسة وكتابة المحتوى المطلوبة.', en: 'It usually takes 4 to 6 weeks depending on services, page count, and copywriting needs.' } },
      { question: { ar: 'هل يمكنني تعديل محتوى صفحات موقع شركتي لاحقاً؟', en: 'Can I edit my company site content later?' }, answer: { ar: 'نعم، نوفر لوحة تحكم بسيطة جداً مع تدريب بالفيديو يمكنك من تعديل وتحديث كافة النصوص والصور بنفسك.', en: 'Yes, we provide a simple dashboard along with video training allowing you to edit all copy and images yourself.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'فرز أهداف الشركة والجمهور المستهدف', en: 'Sorting Corporate Goals & Target Audience' }, body: { ar: 'تحديد الرسالة الأساسية والخدمات ونقاط القوة التنافسية للشركة.', en: 'Defining the core message, services, and competitive advantages.' }, icon: 'Target', color: 'cyan' },
      { phase: '02', title: { ar: 'هندسة محتوى وكتابة نصوص الصفحات', en: 'Content Engineering & Page Copywriting' }, body: { ar: 'صياغة نصوص الخدمات والصفحة الرئيسية وقصص النجاح.', en: 'Drafting copy for services, the homepage, and success stories.' }, icon: 'FileText', color: 'emerald' },
      { phase: '03', title: { ar: 'تصميم الواجهات والهوية البصرية والموشن', en: 'Interface Design, Visual Identity & Motion' }, body: { ar: 'رسم الصفحات وتهيئة الحركة لتعكس الاحترافية والنضج.', en: 'Creating page layouts and motions reflecting professionalism and maturity.' }, icon: 'PenTool', color: 'amber' },
      { phase: '04', title: { ar: 'البناء البرمجي عالي الأداء والسرعة', en: 'High-Performance Clean Development' }, body: { ar: 'تحويل التصاميم إلى أكواد نظيفة وسريعة ومتوافقة مع الـ SEO.', en: 'Converting designs into clean, fast, SEO-compliant code.' }, icon: 'Cpu', color: 'purple' },
      { phase: '05', title: { ar: 'فحص الجودة والإطلاق الموجه والتدريب', en: 'Quality Check, Guided Launch & Training' }, body: { ar: 'مراجعة كافة الروابط، تهيئة الاستضافة، وتسليم لوحة التحكم بالفيديو.', en: 'Checking links, setting up hosting, and handing over the dashboard with video.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '90+', label: { ar: 'أداء الموقع على الموبايل وسرعة الاستجابة', en: 'Mobile performance and speed score' }, description: { ar: 'نحن ملتزمون بمعايير أداء فائقة تضمن الظهور الفوري للشاشات.', en: 'We commit to elite performance standards ensuring instant loading.' } },
      { number: '100%', label: { ar: 'توافق كامل مع قواعد الـ SEO التقنية', en: 'Technical SEO compliance' }, description: { ar: 'تهيئة الأكواد والوسوم والروابط لتسهيل أرشفة موقع الشركة بمحركات البحث.', en: 'Structuring code, tags, and links to support company website indexing.' } },
      { number: '3x', label: { ar: 'ارتفاع في ثقة زائري الموقع للوهلة الأولى', en: 'Increase in visitor trust at first sight' }, description: { ar: 'بفضل التصميم البصري الفاخر والترتيب السياقي المقنع للمعلومات.', en: 'Driven by premium visual layouts and persuasive content hierarchy.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'مستند هيكل وهندسة صفحات الموقع الكامل', en: 'Full Site Sitemap & Information Architecture' }, description: { ar: 'خريطة توزيع الأقسام والمعلومات والخدمات على كافة شاشات الموقع.', en: 'A map of sections, information, and services across all site screens.' }, icon: 'Map', impact: { ar: 'يضمن عدم تكرار المعلومات ويسهل تصفح الزائر.', en: 'Prevents information duplication and eases visitor navigation.' } },
      { name: { ar: 'تصميم واجهات الموقع الكاملة على Figma بدقة بكسل', en: 'Pixel-Perfect Figma UI/UX Project' }, description: { ar: 'الملف التصميمي المفتوح لكافة الصفحات والشاشات والتفاعلات.', en: 'The open design file for all pages, screens, and interactions.' }, icon: 'Figma', impact: { ar: 'يمنح صاحب القرار رؤية تفصيلية ومسبقة لشكل الموقع قبل بدء كتابة الأكواد.', en: 'Gives decision-makers a detailed preview of the website before coding starts.' } },
      { name: { ar: 'أكواد الموقع البرمجية النظيفة على مستودع GitHub', en: 'Clean Code Repository on GitHub' }, description: { ar: 'مستودع الكود المصدري للموقع بالكامل مع توثيق تقني مفصل للمكونات.', en: 'The source code repository for the entire site with technical documentation.' }, icon: 'Github', impact: { ar: 'يضمن أمان كود الموقع واستقلالية ملكيته للشركة.', en: 'Ensures website code safety and company ownership independence.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'موقع شركتنا الجديد الذي بنته لنا نُطق غير نظرة شركائنا وعملائنا لنا بالكامل. أصبحنا نظهر ككيان ضخم ومنظم، وتضاعفت طلبات الاجتماعات والتعاقدات لأن العميل يرى وضوحاً تاماً في خدماتنا ومنهجية عملنا بمجرد تصفحه.', en: 'Our new corporate website built by Notaq completely changed how partners view us. We look like a substantial, organized entity.' },
      author: { ar: 'الأستاذ خالد العمري', en: 'Mr. Khaled Al-Omari' },
      role: { ar: 'رئيس مجلس إدارة شركة العمري القابضة', en: 'Chairman of Al-Omari Holding Co.' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      impact: { ar: 'صناعة هيبة رقمية وموثوقية مؤسسية كاملة أمام كبار المستثمرين والشركاء.', en: 'Creating digital authority and full institutional trust for investors.' }
    },
    checklist: [
      { item: { ar: 'الصفحة الرئيسية تعرض رسالة هوية واضحة ومباشرة', en: 'Homepage displays a clear and direct identity message' }, details: { ar: 'يجب أن يفهم الزائر نشاطك وقيمتك التنافسية في أول شاشة.', en: 'The visitor must grasp your activity and value proposition in the first screen.' } },
      { item: { ar: 'الخدمات مقسمة في صفحات فرعية مستقلة ومفصلة', en: 'Services are split into independent, detailed sub-pages' }, details: { ar: 'تجنب وضع كل الخدمات في صفحة واحدة مكدسة؛ امنح كل خدمة مساحتها الكاملة للإقناع.', en: 'Avoid piling all services on one page; give each service its space to persuade.' } },
      { item: { ar: 'سهولة الوصول لصفحة التواصل ونماذج طلب الخدمة', en: 'Easy access to contact page and service request forms' }, details: { ar: 'وفر أزرار CTA واضحة وموزعة بسياق مناسب في نهاية كل قسم وصفحة.', en: 'Provide clear, contextually distributed CTAs at the end of each section.' } }
    ]
  },
  '/services/ecommerce': {
    metrics: [
      { value: '5', label: { ar: 'مراحل شراء نراجعها ونبسطها', en: 'buying funnel stages reviewed' } },
      { value: '8+', label: { ar: 'نقاط احتكاك محتملة نكشفها ونلغيها', en: 'friction points detected & eliminated' } },
      { value: '1', label: { ar: 'رحلة متكاملة وممتعة لما بعد الطلب', en: 'complete post-order journey built' } },
      { value: '38%', label: { ar: 'ارتفاع في معدل إتمام عمليات الشراء', en: 'increase in checkout completion rate' } }
    ],
    comparison: [
      { before: { ar: 'المتجر يعرض المنتجات بطريقة مكدسة، ويفترض أن العميل سيشتري دون إقناع أو إجابة مخاوف.', en: 'Store lists products in a cluttered layout, assuming checkout without persuasion.' }, after: { ar: 'المتجر يزيل التردد خطوة بخطوة: يوضح الجودة، يجيب عن الشحن، ويبسط الدفع بالكامل.', en: 'Store removes hesitation step by step: clarifies quality, details shipping, and simplifies checkout.' } },
      { before: { ar: 'خطوات دفع طويلة، حقول كثيرة معقدة، ومفاجآت في تفاصيل الشحن بآخر لحظة.', en: 'Long checkout, complex fields, and shipping detail surprises in the last step.' }, after: { ar: 'رحلة دفع سريعة من صفحة واحدة، وضوح تام في تفاصيل الطلب منذ البداية، وحقول معبأة تلقائياً.', en: 'Fast single-page checkout, absolute order clarity from the start, and auto-filled fields.' } }
    ],
    decisionMatrix: [
      { label: { ar: 'عرض صور وزوايا المنتجات', en: 'Product Imagery and Angles' }, value: { ar: 'محاكاة المعاينة الواقعية للمنتج', en: 'Simulating physical product inspection' }, note: { ar: 'نصمم صوراً عالية الدقة، مع تفاصيل الخامات والأبعاد لتجعل العميل يشعر بالمنتج.', en: 'We design high-res imagery, material details, and dimensions so clients feel the product.' } },
      { label: { ar: 'عملية الدفع والـ Checkout', en: 'Payment and Checkout Funnel' }, value: { ar: 'تقليل الحقول ومنع القفزات البصرية', en: 'Reducing fields and preventing layout jumps' }, note: { ar: 'تبسيط مسار الدفع على الموبايل لتكتمل العملية في أقل من 30 ثانية بأمان.', en: 'Simplifying mobile payment so the checkout completes securely in under 30 seconds.' } },
      { label: { ar: 'صفحة تأكيد ومتابعة الطلب', en: 'Order Confirmation & Tracking' }, value: { ar: 'طمأنة العميل فوراً بعد الدفع', en: 'Reassuring the customer post-payment' }, note: { ar: 'عرض تفاصيل الطلب، التوقيت المتوقع للشحن، ورابط تتبع حي لمنع القلق.', en: 'Showing order details, expected delivery times, and live tracking to eliminate anxiety.' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'تصفح واكتشاف سهل للمنتجات', en: 'Easy Product Browsing & Search' }, body: { ar: 'تصنيفات واضحة، فلاتر ذكية لا تعطل العقل، وبحث سريع يتوقع نية المشتري.', en: 'Clear categories, smart filters that do not clutter, and search anticipating intent.' } },
      { phase: '02', title: { ar: 'صفحة منتج مقنعة ومفصلة الخصائص', en: 'Persuasive Detailed Product Page' }, body: { ar: 'عرض الصور، المزايا، تفاصيل المقاسات، معلومات الضمان والشحن في مكان واحد.', en: 'Displaying images, benefits, size guides, warranty, and shipping details in one place.' } },
      { phase: '03', title: { ar: 'سلة مشتريات خفيفة ودفع ذكي', en: 'Light Shopping Cart & Smart Checkout' }, body: { ar: 'تفاصيل طلب واضحة، حقول إدخال قليلة، وخطوات دفع سلسة.', en: 'Clear order details, minimal inputs, and smooth checkout steps.' } },
      { phase: '04', title: { ar: 'رحلة ما بعد الشراء والمتابعة الدورية', en: 'Post-purchase Experience & Tracking' }, body: { ar: 'تأكيد فوري، إرشادات الاستخدام، سياسة إرجاع سهلة، وفرص تسويقية لاحقة.', en: 'Instant confirmation, usage guides, simple return policy, and post-purchase rewards.' } }
    ],
    scenarios: [
      { title: { ar: 'المشتري الذي يقلق من دقة المقاسات', en: 'The Buyer Anxious About Sizing' }, body: { ar: 'نوفر له جداول تفاعلية للمقاسات، مقارنات مع أحجام مألوفة، وسياسة استبدال مرنة لتبديد خوفه.', en: 'We provide interactive size charts, comparisons to common items, and flexible exchange rules.' } },
      { title: { ar: 'المشتري الذي يطلب عبر الموبايل بقلق', en: 'The Anxious Mobile Shopper' }, body: { ar: 'نقوم بتقصير النماذج، تفعيل الملء التلقائي للبيانات، وتسهيل خيارات الدفع بنقرة واحدة (Apple Pay).', en: 'We shorten forms, enable autofill, and support convenient one-click payments like Apple Pay.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'اكتشاف وتحديد فئات المنتجات', en: 'Discovering & Categorizing Products' }, body: { ar: 'تنسيق هيكل المتجر وتوزيع المنتجات حسب رغبة العملاء.', en: 'Designing store structure and listing products based on user desires.' }, icon: 'Grid', color: 'cyan' },
      { phase: '02', title: { ar: 'بناء وهندسة صفحة المنتج للإقناع', en: 'Building & Engineering Product Pages' }, body: { ar: 'تنظيم الصور، الأوصاف، المزايا، والمراجعات لتبديد الشكوك.', en: 'Organizing images, descriptions, benefits, and reviews to dispel doubts.' }, icon: 'Layers', color: 'emerald' },
      { phase: '03', title: { ar: 'تبسيط مسار السلة والدفع الآمن', en: 'Simplifying Cart & Secure Checkout' }, body: { ar: 'تصميم صفحة الدفع بنقاط إدخال بالغة البساطة.', en: 'Designing checkout pages with extremely simple input points.' }, icon: 'ShoppingCart', color: 'amber' },
      { phase: '04', title: { ar: 'دمج قنوات الدفع والشحن والربط', en: 'Integrating Payments, Shipping & APIs' }, body: { ar: 'ربط بوابات الدفع وشركات الشحن ونظام إدارة المخازن.', en: 'Connecting payment gateways, shipping APIs, and inventory systems.' }, icon: 'GitBranch', color: 'purple' },
      { phase: '05', title: { ar: 'الإطلاق الرسمي واختبار الطلبات الحية', en: 'Official Launch & Live Order Testing' }, body: { ar: 'تجربة دورة الشراء بالكامل لضمان استقرار العمليات والأداء.', en: 'Testing the entire purchasing cycle to guarantee operations and performance stability.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '35%', label: { ar: 'تقليل في نسبة سلات المشتريات المتروكة', en: 'Drop in abandoned shopping carts' }, description: { ar: 'بسبب تبسيط حقول الدفع ووضوح تفاصيل الشحن مبكراً.', en: 'Thanks to simplified inputs and early shipping detail clarity.' } },
      { number: '1.8s', label: { ar: 'سرعة الانتقال لصفحة الدفع النهائي', en: 'Checkout page transition speed' }, description: { ar: 'تصفح خارق السرعة يمنع ملل المشترين ويحافظ على حماس الشراء.', en: 'Fast navigation preventing buyer boredom and keeping purchase excitement.' } },
      { number: '40%', label: { ar: 'ارتفاع في الطلبات المتكررة من نفس العميل', en: 'Increase in repeat customer orders' }, description: { ar: 'بسبب تجربة ما بعد البيع الممتازة وتتبع الطلبات المريح.', en: 'Driven by an excellent post-purchase flow and convenient tracking.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'هندسة وتصميم هيكل سلة الشراء والدفع', en: 'Cart & Checkout Experience Wireframes' }, description: { ar: 'مخطط تفصيلي لتبسيط حقول الإدخال وتوزيع نقاط الأمان.', en: 'A layout to simplify input fields and distribute security badges.' }, icon: 'CreditCard', impact: { ar: 'يلغي تشتت المشتري ويرفع معدل إتمام الدفع فوراً.', en: 'Eliminates buyer distraction and boosts checkout completion rates.' } },
      { name: { ar: 'دليل ربط وتكامل أنظمة الدفع والشحن المتقدمة', en: 'Payment & Shipping Integration Blueprints' }, description: { ar: 'مستند تكامل بوابات الدفع (Stripe, Apple Pay) وشركات الشحن.', en: 'Integration map for payment gateways and delivery carriers.' }, icon: 'Link', impact: { ar: 'يضمن معالجة مدفوعات آمنة وحساباً تلقائياً للشحن.', en: 'Ensures secure payment handling and automated shipping calculations.' } },
      { name: { ar: 'دليل مراجعة وتحسين صور وبطاقات المنتجات', en: 'Product Card & Image Optimization Guide' }, description: { ar: 'إرشادات لتنسيق صور وعناوين وتفاصيل المنتجات بطريقة بصرية مريحة.', en: 'Guidelines to lay out images, titles, and product details comfortably.' }, icon: 'Image', impact: { ar: 'يسهل مقارنة المنتجات ويزيد جاذبيتها للمشترين.', en: 'Simplifies product comparison and increases buyer appeal.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'بعد أن أعادت نُطق تصميم متجرنا الإلكتروني وتبسيط مسار الدفع ليصبح من صفحة واحدة، ارتفعت مبيعاتنا بنسبة 45% في أول شهر فقط. العملاء أصبحوا يشيدون بسهولة الشراء وسرعة المتجر على الموبايل.', en: 'After Notaq redesigned our store and simplified checkout to a single page, sales rose by 45% in the first month.' },
      author: { ar: 'الأستاذ فيصل المطيري', en: 'Mr. Faisal Al-Mutairi' },
      role: { ar: 'مؤسس براند أوركيد للمنتجات الرقمية', en: 'Founder of Orchid Brand for Digital Products' },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      impact: { ar: 'زيادة مباشرة في الأرباح وإزالة كاملة لعقبات الدفع والشحن.', en: 'Direct profit increase and complete removal of checkout/shipping blocks.' }
    },
    checklist: [
      { item: { ar: 'صفحة المنتج تعرض تفاصيل الشحن والضمان بوضوح', en: 'Product page shows shipping and warranty details clearly' }, details: { ar: 'تجنب المفاجآت في نهاية الدفع؛ اعرض التفاصيل مبكراً لثقة المشتري.', en: 'Avoid surprises at the end; show details early to gain buyer trust.' } },
      { item: { ar: 'تفعيل الدفع بنقرة واحدة وتسهيل Apple Pay', en: 'Enabling one-click checkout and Apple Pay support' }, details: { ar: 'أكثر من 70% من مشتري الموبايل يفضلون الدفع الفوري دون تعبئة حقول.', en: 'Over 70% of mobile buyers prefer instant payment without typing fields.' } },
      { item: { ar: 'عرض مراجعات وتقييمات حقيقية للمنتج بصرياً', en: 'Displaying genuine product reviews and ratings visually' }, details: { ar: 'العملاء يثقون في تجارب المشترين السابقين؛ ضع التقييمات في مكان بارز.', en: 'Customers trust previous buyers; place ratings in a prominent spot.' } }
    ]
  },
  '/services/custom-systems': {
    metrics: [
      { value: '4+', label: { ar: 'أدوار وصلاحيات مستخدمين مستقلة', en: 'distinct user roles & permissions' } },
      { value: '6+', label: { ar: 'حالات بيانات متوقعة ومصممة بدقة', en: 'expected data states designed' } },
      { value: '1', label: { ar: 'تدفق عمل (Workflow) محكم وقابل للقياس', en: 'tight and measurable workflow built' } },
      { value: '55%', label: { ar: 'تقليل في زمن إنجاز المهام الداخلية للفرق', en: 'reduction in team task completion time' } }
    ],
    decisionMatrix: [
      { label: { ar: 'واجهة الإدارة والمديرين', en: 'Admin & Management Dashboard' }, value: { ar: 'لوحات تلخيص ورقابة شاملة', en: 'Summarization & Control Boards' }, note: { ar: 'إبراز أرقام الأداء العام، المهام المتأخرة، والقرارات العاجلة المطلوبة.', en: 'Highlighting overall performance, delayed tasks, and urgent decisions.' } },
      { label: { ar: 'واجهة الموظفين وفريق العمل', en: 'Staff & Team Interfaces' }, value: { ar: 'تنفيذ سريع وتقليل التكرار ورسوم ذكية', en: 'Fast execution, minimal repetition & smart logs' }, note: { ar: 'تصميم جداول وفلاتر سريعة ترتب المهام حسب الأولوية وتمنع التشتت.', en: 'Designing tables and fast filters sorting tasks by priority to prevent drift.' } },
      { label: { ar: 'واجهة العملاء أو الشركاء', en: 'Client or Partner Portals' }, value: { ar: 'شفافية كاملة ومتابعة دورية مطمئنة', en: 'Complete transparency & reassuring updates' }, note: { ar: 'يسمح للعميل بمشاهدة حالة طلبه، المراسلات، وتنزيل الملفات ذاتياً.', en: 'Allows clients to track order state, chat, and download files independently.' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'تحليل وتخطيط مسارات العمل (Workflow)', en: 'Analyzing & Planning Workflows' }, body: { ar: 'تحديد من يبدأ الإجراء، من يراجعه، من يوافق عليه، وكيف تنتقل البيانات.', en: 'Defining who starts a task, who reviews it, who approves, and data flows.' } },
      { phase: '02', title: { ar: 'تحديد حالات البيانات (Data States)', en: 'Defining Data States & Validations' }, body: { ar: 'تخطيط الحالات: قيد المعالجة، يحتاج مراجعة، مرفوض، مؤرشف، وفارغ.', en: 'Planning states: pending, needs review, rejected, archived, and empty.' } },
      { phase: '03', title: { ar: 'تصميم الواجهات ولوحات التحكم التفاعلية', en: 'Designing UI & Interactive Dashboards' }, body: { ar: 'بناء جداول فلاتر متطورة، نماذج إدخال ذكية، ورسائل خطأ مفهومة.', en: 'Building advanced tables, smart input forms, and clear error states.' } },
      { phase: '04', title: { ar: 'البناء البرمجي المتكامل والربط الآمن', en: 'Full-Stack Development & Secure APIs' }, body: { ar: 'كتابة منطق العمل الخلفي، ربط قواعد البيانات، وحماية الصلاحيات.', en: 'Coding backend logic, connecting databases, and securing permissions.' } }
    ],
    scenarios: [
      { title: { ar: 'بدء طلب أو إجراء جديد داخل النظام', en: 'Starting a New Request Inside the System' }, body: { ar: 'يوجه النظام المستخدم للبيانات المطلوبة بدقة، ويمنع إرسال نماذج ناقصة لحفظ الوقت.', en: 'The system guides users to required inputs, preventing incomplete form submissions to save time.' } },
      { title: { ar: 'المراجعة الداخلية واتخاذ القرارات والتعليق', en: 'Internal Review, Decisions & Comments' }, body: { ar: 'يرتبط كل قرار وسطر تعليق بسياق المعاملة لتوثيق الإجراءات ومنع ضياع القرارات.', en: 'Every decision and comment is tied to the request context to prevent info loss.' } }
    ],
    proofPoints: [
      { title: { ar: 'التصميم يبدأ من فهم دورتكم التشغيلية', en: 'Design Starts with Your Operations' }, body: { ar: 'نحن لا نصمم واجهة نظام قبل أن نجلس مع موظفيكم ونفهم تفاصيل عملهم اليومي المنهك لتسهيله.', en: 'We do not design a system interface before understanding your team daily routines to ease it.' } },
      { title: { ar: 'التخطيط لكافة حالات الأداء والأخطاء بدقة', en: 'Planning for All States & Error Handling' }, body: { ar: 'نهتم بتصميم حالات التحميل، الصفحات الفارغة، انقطاع الاتصال، وصلاحيات الوصول لحماية أمان النظام.', en: 'We care about loading states, empty views, disconnected screens, and permissions to protect security.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'جلسة فرز العمليات والأنشطة اليومية', en: 'Sorting Daily Operations & Workflows' }, body: { ar: 'تحديد المشاكل التشغيلية والأدوار والمهام داخل فريقك.', en: 'Defining operational hurdles, roles, and tasks inside your team.' }, icon: 'Search', color: 'cyan' },
      { phase: '02', title: { ar: 'تصميم تدفقات وهندسة شاشات النظام', en: 'Designing System Flows & Screens IA' }, body: { ar: 'رسم رحلة البيانات والتحولات بين شاشات الإدخال والعرض.', en: 'Mapping data journeys and transitions between input and display screens.' }, icon: 'GitCommit', color: 'emerald' },
      { phase: '03', title: { ar: 'تصميم واجهات الموظفين واللوحات البصرية', en: 'Designing Staff UI & Dashboards' }, body: { ar: 'بناء الجداول، الرسوم البيانية، ونماذج إدارة البيانات.', en: 'Building tables, charts, and data management forms.' }, icon: 'Monitor', color: 'amber' },
      { phase: '04', title: { ar: 'تطوير الكود البرمجي وربط القواعد والمنطق', en: 'Backend Coding, Database & Logic Setup' }, body: { ar: 'برمجة المنطق الحسابي والصلاحيات وتأمين الاتصال بقواعد البيانات.', en: 'Coding calculation logic, permissions, and securing database connections.' }, icon: 'Sliders', color: 'purple' },
      { phase: '05', title: { ar: 'فحص التشغيل الواقعي وسيناريوهات الضغط', en: 'Operational & Load Scenario Testing' }, body: { ar: 'اختبار النظام بسيناريوهات عمل حقيقية وتدريب الفريق بالفيديو.', en: 'Testing the system with real-world work scenarios and training the team.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '50%', label: { ar: 'تقليل في الخطأ البشري وإدخال البيانات', en: 'Reduction in human error & data input' }, description: { ar: 'بسبب التحقق الذكي التلقائي وتوجيه النماذج المنظم.', en: 'Thanks to smart auto-validation and structured form layouts.' } },
      { number: '15h', label: { ar: 'وقت موفر أسبوعياً لكل موظف إدارة', en: 'Hours saved weekly per admin staff' }, description: { ar: 'بسبب أتمتة التقارير وتسهيل البحث والفلترة السريعة للبيانات.', en: 'By automating reporting and easing search and fast filtering.' } },
      { number: '99.9%', label: { ar: 'نسبة استقرار عمل وتوفر خوادم النظام', en: 'System stability & uptime rate' }, description: { ar: 'نصمم بنية برمجية صلبة وقابلة للتعامل مع أحجام البيانات الضخمة.', en: 'We design a robust code architecture ready for massive data volumes.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'وثيقة تدفقات وسيناريوهات الاستخدام الكاملة', en: 'Use Case & User Flow Documentation' }, description: { ar: 'شرح مفصل لكافة مسارات النظام والأدوار وصلاحيات الوصول.', en: 'Detailed guide of all system paths, roles, and access rights.' }, icon: 'FileText', impact: { ar: 'يضمن تطابق النظام مع دورتك التشغيلية دون أي نقص.', en: 'Guarantees the system matches your operations with zero gaps.' } },
      { name: { ar: 'ملفات تصاميم شاشات ولوحات التحكم Figma', en: 'Figma System Screens & Dashboards Design' }, description: { ar: 'التصميم المرئي المتكامل لكافة لوحات التحكم والجداول والبطاقات.', en: 'The integrated visual design of all dashboards, tables, and cards.' }, icon: 'Layers', impact: { ar: 'يتيح لفريقك مراجعة الواجهات وتحسينها قبل بدء البرمجة.', en: 'Allows your team to review and optimize layouts before coding starts.' } },
      { name: { ar: 'أكواد النظام الكاملة مع وثائق التهيئة ونشرها', en: 'Full-Stack Code Repository & Deploy Docs' }, description: { ar: 'الكود المصدري الكامل للنظام مع مستندات تثبيته وتشغيله على الخادم.', en: 'Complete system source code with setup and deployment documents.' }, icon: 'Database', impact: { ar: 'يؤمن ملكية شركتك الكاملة لأهم أصولها التشغيلية والرقمية.', en: 'Secures your company complete ownership of its core operational assets.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'النظام الخاص الذي صممته وبرمجته لنا نُطق وفر على فريقنا أكثر من 15 ساعة عمل أسبوعية لكل موظف إدارة. تخلصنا بالكامل من جداول Excel المتفرقة، وأصبحت لدينا لوحة تحكم واحدة تجمع المهام وحالات المشاريع وفواتير العملاء بوضوح مذهل.', en: 'The custom system built by Notaq saved our team over 15 hours of work per week per admin staff.' },
      author: { ar: 'الأستاذ منصور الحارثي', en: 'Mr. Mansour Al-Harthy' },
      role: { ar: 'مدير التشغيل في شركة نماء العقارية', en: 'Operations Director at Namaa Real Estate' },
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
      impact: { ar: 'تحول كامل من عشوائية الملفات إلى نظام مركزي متكامل ودقيق.', en: 'Complete shift from scattered sheets to a centralized, accurate system.' }
    },
    checklist: [
      { item: { ar: 'تحديد صلاحيات وأدوار الموظفين والعملاء بدقة', en: 'Defining staff and client permissions and roles' }, details: { ar: 'تأكد من عزل البيانات وحماية الخصوصية لكل نوع مستخدم داخل النظام.', en: 'Ensure data isolation and privacy protection for each user role.' } },
      { item: { ar: 'تخطيط وتصميم حالات البيانات الفارغة وحالات الخطأ', en: 'Planning and designing empty states and error views' }, details: { ar: 'يجب أن يعرف المستخدم ماذا يفعل عندما لا تتوفر بيانات أو يحدث عطل.', en: 'Users must know what to do when no data is available or errors occur.' } },
      { item: { ar: 'سهولة تصدير واستيراد البيانات والتقارير الدورية', en: 'Easy data export, import, and periodic reporting' }, details: { ar: 'تأكد من قدرتك على تنزيل التقارير بصيغة PDF أو Excel لسهولة المتابعة.', en: 'Verify you can download reports in PDF or Excel formats for tracking.' } }
    ]
  },
  '/services/ai-products': {
    metrics: [
      { value: '4', label: { ar: 'حواجز ثقة للذكاء الاصطناعي نثبتها', en: 'AI trust guardrails installed' } },
      { value: '5+', label: { ar: 'سيناريوهات استخدام قابلة للتجربة السريعة', en: 'testable use scenarios built' } },
      { value: '0', label: { ar: 'وعود أو مطالبات AI غامضة أو غير قابلة للفهم', en: 'vague or incomprehensible AI promises' } },
      { value: '88%', label: { ar: 'نسبة نجاح تصفح وإكمال مهام واجهات AI', en: 'AI interface task completion rate' } }
    ],
    scenarios: [
      { title: { ar: 'مساعد محتوى ذكي ومقيد بالتعليمات والبيانات', en: 'Context-Constrained Smart Content Assistant' }, body: { ar: 'نحدد حدود المدخلات، النبرة، والمراجعة البشرية اللازمة قبل ظهور النتيجة النهائية لمنع الهلوسة.', en: 'We define input boundaries, tone, and human review needed before results show to prevent hallucinations.' } },
      { title: { ar: 'اقتراحات وتوصيات ذكية داخل لوحة العمليات', en: 'Smart Suggestions & Recommendations in App' }, body: { ar: 'الذكاء الاصطناعي يقدم اقتراحاً قابلاً للتعديل والمراجعة، وليس قراراً نهائياً غامضاً يفرضه النظام.', en: 'AI offers suggestions that can be edited and reviewed, not opaque forced final actions.' } },
      { title: { ar: 'تلخيص وتصنيف البيانات المعقدة وعرض المصادر', en: 'Data Summarization & Source Listing' }, body: { ar: 'نصمم ناتج التلخيص بحيث يوضح للعميل مصادر المعلومات ومستوى دقة وثقة النموذج لتأكيد المصداقية.', en: 'We design summaries to show source information and model confidence levels to build credibility.' } }
    ],
    decisionMatrix: [
      { label: { ar: 'طبيعة مدخلات نموذج AI', en: 'AI Model Input Nature' }, value: { ar: 'مدخل مقيد وموجه وواضح', en: 'Constrained, guided & clear input' }, note: { ar: 'كلما وجهنا المستخدم وعلمناه طريقة كتابة الأوامر، حصل على نتائج دقيقة وخالية من العشوائية.', en: 'The more we guide users on prompts, the more accurate and reliable the results.' } },
      { label: { ar: 'شكل ناتج الذكاء الاصطناعي', en: 'AI Model Output Layout' }, value: { ar: 'قابل للتعديل والنسخ والتصدير', en: 'Editable, copyable & exportable' }, note: { ar: 'الناتج يجب أن يشرح نفسه بوضوح ويسهل على المستخدم استخدامه وتعديله يدوياً.', en: 'Outputs should explain themselves clearly, letting users edit and apply them.' } },
      { label: { ar: 'مستوى الثقة والـ Fallback', en: 'Confidence Levels & Fallback' }, value: { ar: 'إظهار عدم اليقين بوضوح وأمان', en: 'Showing uncertainty clearly and safely' }, note: { ar: 'تنبيه المستخدم عند وجود شك في النتيجة، وتوفير طريقة سهلة لإعادة المحاولة بأمر جديد.', en: 'Alerting users when output confidence is low, giving them easy retry options.' } }
    ],
    comparison: [
      { before: { ar: 'منتج AI يقدم مربع نص فارغاً (Chat) وينتظر من العميل كتابة أوامر معقدة دون أي توجيه أو مساعدة.', en: 'AI product offers a blank chat box, expecting complex prompts without guidance.' }, after: { ar: 'واجهة AI توجه المستخدم باقتراحات أوامر جاهزة، وتوضح ما يمكن للنموذج فعله بدقة.', en: 'AI UI guides users with premade prompts, clearly showing what the model can do.' } },
      { before: { ar: 'ثقة العميل تعتمد فقط على كلمة "ذكي"، دون إبراز مصادر المعلومات أو طريقة التحقق من دقة الناتج.', en: 'Client trust relies only on the word "smart," with no sources or validation shown.' }, after: { ar: 'الثقة تعتمد على ربط النتائج ببيانات واقعية، ذكر المصادر، وتوفير خيارات تعديل بشري واضحة.', en: 'Trust is built by tying results to real data, showing sources, and human editing.' } }
    ],
    proofPoints: [
      { title: { ar: 'واجهة مسؤولة وسهلة لتقنيات AI المعقدة', en: 'Responsible UI for Complex AI Tech' }, body: { ar: 'قيمة منتج AI الحقيقية تكمن في قدرة المستخدم العادي على فهمه واستخدامه بأمان دون رهبة تقنية.', en: 'The true value of AI lies in letting average users access it safely without tech fear.' } },
      { title: { ar: 'الناتج ليس نهاية الرحلة بل بداية العمل الفعلي', en: 'Output is the Beginning of Action' }, body: { ar: 'نصمم خيارات القبول، التعديل، الرفض، ومقارنة النتائج المتعددة كجزء أساسي من تجربة الاستخدام.', en: 'We design accept, edit, reject, and comparison features as core parts of the UX.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'تحديد حالة الاستخدام ونموذج الـ AI المناسب', en: 'Defining Use Case & Right AI Model' }, body: { ar: 'دراسة جدوى الذكاء الاصطناعي وتحديد حدود المسؤولية والمخرجات.', en: 'Studying AI feasibility, setting responsibility limits, and expectations.' }, icon: 'Target', color: 'cyan' },
      { phase: '02', title: { ar: 'تصميم تدفقات التوجيه وهندسة الأوامر (Prompt)', en: 'Designing Prompt Flows & Input UX' }, body: { ar: 'بناء واجهات تساعد المستخدم على كتابة أفضل مدخلات للنموذج.', en: 'Building interfaces helping users write the best inputs for the model.' }, icon: 'Cpu', color: 'emerald' },
      { phase: '03', title: { ar: 'تصميم شاشات عرض وفلترة النتائج الذكية', en: 'Designing Smart Output & Filter Screens' }, body: { ar: 'هيكلة النتائج لتسهيل مراجعتها وحفظها وتصديرها وتعديلها.', en: 'Structuring outputs to simplify review, saving, export, and editing.' }, icon: 'Layers', color: 'amber' },
      { phase: '04', title: { ar: 'البرمجة وربط واجهات API وتأمين الاستجابة', en: 'Coding API Integrations & Uptime Setup' }, body: { ar: 'ربط النماذج ومعالجة استجابة الخوادم وإدارة فترات الانتظار الطويلة.', en: 'Connecting models, handling server responses, and managing long wait states.' }, icon: 'Sliders', color: 'purple' },
      { phase: '05', title: { ar: 'فحص الهلوسة وجودة المخارج والتحسين', en: 'Hallucination & Output Quality Checks' }, body: { ar: 'اختبار دقة النتائج بمختلف الأوامر وتدريب الفريق فنياً.', en: 'Testing output accuracy across prompts and technical team training.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '85%', label: { ar: 'زيادة في سرعة تفاعل المستخدم مع AI', en: 'Increase in user interaction speed' }, description: { ar: 'بفضل النماذج المقترحة والمساعدة الذكية في صياغة الأوامر.', en: 'Thanks to prompt templates and smart assistance.' } },
      { number: '1.2s', label: { ar: 'متوسط زمن استجابة وتحديث النتائج', en: 'Average API latency & response time' }, description: { ar: 'مع تصميم واجهات انتظار انسيابية تمنع ملل المستخدم.', en: 'With smooth loading interfaces preventing user boredom.' } },
      { number: '0%', label: { ar: 'مساومة في حماية أمن وخصوصية البيانات', en: 'Compromise on data privacy & security' }, description: { ar: 'تأمين كامل للمدخلات لمنع تسرب البيانات أو مشاركتها خارج النطاق.', en: 'Full input securing to prevent leaks or sharing outside scope.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'دليل تصميم وهندسة واجهات تجربة محادثات AI', en: 'AI Conversational UX Design Guideline' }, description: { ar: 'مستند يحدد قواعد كتابة الأوامر وتنسيق الحوار وحالات الانتظار.', en: 'A guide defining prompt rules, chat formats, and loading states.' }, icon: 'MessageSquare', impact: { ar: 'يمنع التشتت ويجعل التفاعل مع الذكاء الاصطناعي بديهياً وسهلاً.', en: 'Prevents distraction and makes AI interaction intuitive.' } },
      { name: { ar: 'مخطط معالجة حالات الأخطاء وبطء استجابة API', en: 'API Latency & Error Handling Flows' }, description: { ar: 'رسومات بيانية لكيفية تصرف النظام عند انقطاع الاتصال بنماذج AI.', en: 'Diagrams of system behavior during AI model connection failures.' }, icon: 'GitFork', impact: { ar: 'يضمن استقرار التجربة وعدم تجمد الشاشات أمام العميل.', en: 'Guarantees experience stability and prevents layout freezes.' } },
      { name: { ar: 'مستودع الأكواد الكامل مع ملفات هندسة الأوامر', en: 'AI Full Code Repository & Prompts IA' }, description: { ar: 'كود المنتج مع قوالب الأوامر والتعليمات (System Prompts) المعتمدة.', en: 'Product code with approved system prompt templates.' }, icon: 'Terminal', impact: { ar: 'يسهل تعديل تعليمات ومحددات النموذج مستقبلاً بشكل مستقل.', en: 'Eases model instruction edits in the future independently.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'الواجهة التي صممتها نُطق لمنتج الـ AI الخاص بنا جعلت الملايين من مستخدمينا غير التقنيين قادرين على استخدامه وسياقته بسهولة دون أي تعقيد. لم نعد بحاجة لكتابة كتيبات شرح طويلة؛ واجهة الاستخدام أصبحت تشرح نفسها وتوجه المستخدم بسلاسة.', en: 'The interface designed by Notaq for our AI product enabled our non-technical users to access it easily.' },
      author: { ar: 'الأستاذ سامر الجار الله', en: 'Mr. Samer Al-Jarallah' },
      role: { ar: 'الشريك المؤسس لشركة ذكاء سحابي لبرمجيات SaaS', en: 'Co-founder at Intelligent Cloud SaaS' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      impact: { ar: 'تبسيط مذهل لتقنيات معقدة وتحويلها لمنتج سهل وممتع.', en: 'Simplifying complex technology into a fun and easy SaaS product.' }
    },
    checklist: [
      { item: { ar: 'توفير توجيه واقتراحات أوامر واضحة ومسبقة الصنع', en: 'Providing clear prompt guidance and templates' }, details: { ar: 'ساعد المستخدم على البدء فوراً بتقديم أمثلة أو كتل أوامر جاهزة للتخصيص.', en: 'Help users start immediately by offering ready-to-customize prompts.' } },
      { item: { ar: 'تصميم واجهات انتظار وحالات تحميل انسيابية وشفافة', en: 'Designing smooth and transparent waiting/loading states' }, details: { ar: 'حتى لا يمل المستخدم أثناء تفكير ومعالجة الـ AI للطلب؛ وضح له ما يحدث.', en: 'To keep users engaged while AI processes, show progress animations.' } },
      { item: { ar: 'ربط النتائج الذكية بمصادر حقيقية قابلة للتحقق الفوري', en: 'Tying smart results to real verifiable sources' }, details: { ar: 'تأكد من إمكانية فحص دقة وجودة مخرجات الـ AI للتأكد من موثوقيتها.', en: 'Ensure the output shows sources so the user can verify credibility.' } }
    ]
  },
  '/testimonials/trust-stories': {
    metrics: [
      { value: '3', label: { ar: 'مراحل واضحة في صياغة قصة الثقة', en: 'stages in shaping a trust story' } },
      { value: '4+', label: { ar: 'أنواع أثر وضوح يمكن قياسها ومقارنتها', en: 'measurable clarity impact types' } },
      { value: '1', label: { ar: 'دليل اجتماعي مبني على تجربة عميل كاملة', en: 'social proof built on full customer journeys' } },
      { value: '94%', label: { ar: 'نسبة إقناع شهادات العملاء للزوار الجدد', en: 'persuasive success rate of client reviews' } }
    ],
    comparison: [
      { before: { ar: 'شهادة عميل قصيرة ومبهمة تقتصر على كلمات مدح تقليدية مثل: "فريق ممتاز، تعامل رائع، أنصح بالتعاون معهم" دون تفاصيل.', en: 'A brief, vague testimonial saying "excellent team, great communication" without detail.' }, after: { ar: 'قصة كاملة توضح التحديات التي واجهها العميل، منهج الحل، والنتائج والأثر بعد إطلاق موقعه.', en: 'A complete story showing client challenges, solution method, results, and post-launch impact.' } },
      { before: { ar: 'عرض آراء العملاء كديكور أو حشو بصري في آخر شاشات الصفحة الرئيسية فقط دون سياق.', en: 'Testimonials displayed as bottom decorations on the homepage with no context.' }, after: { ar: 'دمج قصص الثقة وآراء العملاء عند مواضع التردد الحرجة لدعم اتخاذ القرار بوعي.', en: 'Integrating trust stories at critical hesitation points to support conscious decisions.' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'دراسة حالة العميل قبل التعاون والتطوير', en: 'Analyzing Client State Before' }, body: { ar: 'توثيق المشاكل التشغيلية وغياب الوضوح الذي كان يعاني منه موقع العميل السابق.', en: 'Documenting operational and clarity gaps the previous client website faced.' } },
      { phase: '02', title: { ar: 'منهج تنفيذ وتنسيق التعاون المشترك', en: 'Collaboration & Implementation Method' }, body: { ar: 'كشف تفاصيل التواصل والمراجعات وكيف تعاملنا مع الملاحظات بمرونة كاملة.', en: 'Sharing details of communication, reviews, and how we handled edits flexibly.' } },
      { phase: '03', title: { ar: 'رصد النتائج والأثر الإيجابي بعد الإطلاق', en: 'Post-Launch Results & Positive Impact' }, body: { ar: 'ربط القصة بأرقام ووضوح ملموس في جودة الطلبات وسهولة شرح الخدمات.', en: 'Tying the story to metrics and tangible improvements in lead quality.' } }
    ],
    proofPoints: [
      { title: { ar: 'شهادات العملاء مبنية على سياق حقيقي وموثق', en: 'Reviews Built on Genuine Context' }, body: { ar: 'نحن لا ننشر اقتباسات معلقة في الفراغ؛ نربط كل شهادة باسم صاحبها، شركته، ورابط موقعه للتأكد.', en: 'We do not publish quotes in a vacuum. We map each review to the owner, company, and site link.' } },
      { title: { ar: 'رصد أبعاد الأثر المتعددة للوضوح الرقمي', en: 'Measuring Multi-dimensional Impact of Clarity' }, body: { ar: 'نبرهن بالقصص كيف يرفع الوضوح ثقة فريق مبيعاتك، يسهل شرح خدماتك، ويجلب لك عملاء أنضج.', en: 'We show how clarity boosts sales team confidence, simplifies service explanation, and brings mature clients.' } }
    ],
    faq: [
      { question: { ar: 'ما الذي يجعل قصة الثقة مقنعة ومفيدة للزائر؟', en: 'What makes a trust story persuasive for visitors?' }, answer: { ar: 'أن تتضمن تفاصيل المشكلة التي تشبه مشكلة الزائر الحالي، وتشرح طريقة الحل الواقعية والنتائج الملموسة.', en: 'Including details of a problem that matches the current visitor�s issue, explaining the solution, and showing outcomes.' } },
      { question: { ar: 'كيف تختلف قصة الثقة عن التقييمات التقليدية؟', en: 'How do trust stories differ from standard ratings?' }, answer: { ar: 'التقييم التقليدي يثبت جودة المعاملة، بينما قصة الثقة تثبت حل المشكلة وتحقيق الأثر العملي والتجاري.', en: 'Standard ratings prove transaction quality, while trust stories prove problem solving and business impact.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'جمع بيانات وتجربة العميل بعد إطلاق موقعه', en: 'Gathering Client Experience Data Post-Launch' }, body: { ar: 'إجراء مقابلة قصيرة لرصد الأثر ونوع التغيير الفعلي.', en: 'Conducting a short interview to track impact and actual change.' }, icon: 'Users', color: 'cyan' },
      { phase: '02', title: { ar: 'صياغة وهندسة قصة الثقة والنجاح المشترك', en: 'Drafting & Architecting the Trust Story' }, body: { ar: 'تنظيم قصة النجاح في ثلاثة محاور: تحد، منهج، وأثر.', en: 'Structuring the success story into three themes: challenge, method, and impact.' }, icon: 'BookOpen', color: 'emerald' },
      { phase: '03', title: { ar: 'تصميم كتل العرض البصرية لشهادات العملاء', en: 'Designing Testimonial Visual Blocks' }, body: { ar: 'إدراج الصور والروابط ونداءات الفعل الداعمة.', en: 'Inserting images, links, and supporting calls to action.' }, icon: 'Layers', color: 'amber' },
      { phase: '04', title: { ar: 'نشر الشهادة وربطها بصفحات الخدمات المعنية', en: 'Publishing & Mapping Review to Services' }, body: { ar: 'وضع قصة النجاح بجوار الخدمة التي تسببت في هذا الأثر.', en: 'Placing the success story next to the service that created the impact.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '3-Step', label: { ar: 'منهجية صياغة قصة النجاح لدينا', en: 'Our case study drafting methodology' }, description: { ar: 'نلتزم بالترتيب الطبيعي: التحدي، المنهجية، والأثر الواقعي.', en: 'We adhere to natural flow: challenge, methodology, and actual impact.' } },
      { number: '2.8x', label: { ar: 'ارتفاع في نسب تصفح صفحات الأعمال', en: 'Increase in portfolio page views' }, description: { ar: 'عندما تدعم الشهادات بقصص وصور تكشف تفاصيل العمل.', en: 'When reviews are supported by stories and images showing execution details.' } },
      { number: '100%', label: { ar: 'مصداقية وشهادات حقيقية وقابلة للتتبع', en: 'Credible, authentic and traceable reviews' }, description: { ar: 'كل شهادة ترتبط برابط موقع العميل الفعلي لتصفحه بنفسك.', en: 'Each review links to the actual client website for you to browse.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'مستند صياغة وهيكلة دراسات الحالة والشهادات', en: 'Case Study & Testimonial Structuring Blueprint' }, description: { ar: 'نموذج صياغة يقسم قصة العميل إلى نقاط إقناع وتسلسل منطقي.', en: 'A copywriting model dividing the client story into persuasive points.' }, icon: 'FileText', impact: { ar: 'يحول المراجعات البسيطة إلى أدلة إقناع بالغة القوة.', en: 'Turns simple feedback into highly persuasive proof.' } },
      { name: { ar: 'دليل ربط وتوزيع الأدلة الاجتماعية بالموقع', en: 'Social Proof Distribution Framework' }, description: { ar: 'خريطة تحدد أين وكيف تظهر شهادات العملاء لدعم القرارات.', en: 'A map defining where and how testimonials show to support decisions.' }, icon: 'Map', impact: { ar: 'يقلل تردد الزائر في اللحظات الحرجة من اتخاذ القرار.', en: 'Reduces visitor hesitation at critical decision moments.' } },
      { name: { ar: 'كتلة العرض البصري التفاعلي لقصص النجاح', en: 'Interactive Success Story Component Library' }, description: { ar: 'مكونات واجهة مستخدم مخصصة لعرض التحديات والنتائج بصرياً.', en: 'Custom UI components displaying challenges and results visually.' }, icon: 'Component', impact: { ar: 'يجعل قراءة قصص النجاح ممتعة وسهلة التصفح على الهواتف.', en: 'Makes reading success stories fun and easy to browse on mobile.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'طريقتهم في صياغة دراسة حالتنا وعرض شهادتنا كانت مذهلة وعلمية. لم يعرضوا مجرد كلمات مدح، بل شرحوا المشكلة التي كنا نعاني منها وكيف تم حلها، وهو ما جعل موقعنا الجديد يكتسب مصداقية فورية لدى عملائنا الجدد الذين قرأوا قصتنا.', en: 'Their way of drafting our case study and displaying our testimonial was scientific.' },
      author: { ar: 'الأستاذ فيصل الصانع', en: 'Mr. Faisal Al-Sane' },
      role: { ar: 'المدير التنفيذي لشركة الصانع للخدمات اللوجستية', en: 'CEO of Al-Sane Logistics' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      impact: { ar: 'تحويل قصة نجاحنا مع نُطق إلى أداة تسويقية تجلب لنا عملاء باستمرار.', en: 'Turning our success story with Notaq into a marketing tool bringing leads.' }
    },
    checklist: [
      { item: { ar: 'الشهادة ترتبط برابط فعلي وموثق لمشروع العميل', en: 'Testimonial links to a real and verified client project' }, details: { ar: 'تأكد من إمكانية وصول الزائر لموقع العميل السابق لمصداقية تامة.', en: 'Verify visitors can reach the previous client site to ensure authenticity.' } },
      { item: { ar: 'تقسيم قصة النجاح إلى تحديات ومنهجية حل ونتائج', en: 'Dividing the success story into challenge, method, and results' }, details: { ar: 'تجنب عرض نصوص طويلة متصلة؛ اجعل القراءة مجزأة وسهلة الهضم.', en: 'Avoid displaying long, unbroken blocks of text; make reading segmented.' } },
      { item: { ar: 'وضع الأدلة الاجتماعية بالقرب من دعوات التواصل والطلب', en: 'Placing social proof near contact and request CTAs' }, details: { ar: 'الشهادة القريبة من CTA ترفع نسبة الضغط والتحويل بنسب ملحوظة.', en: 'Testimonials near CTAs noticeably boost click and conversion rates.' } }
    ]
  },
  '/testimonials/questions-before-deciding': {
    metrics: [
      { value: '9+', label: { ar: 'أسئلة ثقة نطرحها ونجيب عنها بجرأة', en: 'trust questions asked & answered boldly' } },
      { value: '3', label: { ar: 'طرق عملية وذكية لقراءة وفحص الشهادات', en: 'practical ways to read & audit reviews' } },
      { value: '1', label: { ar: 'قائمة اطمئنان نهائية ومجربة للقرارات', en: 'final proven confidence checklist' } },
      { value: '95%', label: { ar: 'نسبة رضا العملاء عن شفافية الإجابات', en: 'client satisfaction rate on answer transparency' } }
    ],
    decisionMatrix: [
      { label: { ar: 'هل مشكلة العميل السابق تشبه مشكلتي؟', en: 'Does the past client issue match mine?' }, value: { ar: 'ابحث عن تفاصيل السياق والنشاط', en: 'Look for context and industry details' }, note: { ar: 'الشهادة القوية والناضجة توضح تفاصيل التحديات قبل الحديث عن روعة الحل.', en: 'A strong review details challenges before discussing the solution.' } },
      { label: { ar: 'هل النتيجة المحققة تخدم أهدافي الحالية؟', en: 'Does the achieved outcome serve my goals?' }, value: { ar: 'اربط النتيجة بالمبيعات أو الوضوح', en: 'Tie output to sales or brand clarity' }, note: { ar: 'افحص هل النتيجة ترتبط بالسرعة، المظهر، وضوح النصوص، أم زيادة نسب التواصل.', en: 'Check if the outcome relates to speed, layout, copywriting, or conversions.' } },
      { label: { ar: 'كيف تعامل الفريق مع التعديلات والملاحظات؟', en: 'How did the team handle edits & reviews?' }, value: { ar: 'اقرأ إشارات سلاسة العملية والتعاون', en: 'Read collaboration and flow signals' }, note: { ar: 'الكلام عن الالتزام بالمواعيد والردود الفورية يثبت نضج منهجية العمل.', en: 'Mentions of meeting deadlines and prompt replies prove method maturity.' } }
    ],
    comparison: [
      { before: { ar: 'تصفح وقراءة آراء العملاء كعبارات مدح وتزكية جميلة دون تدقيق في تفاصيل الإنجاز الفعلي.', en: 'Browsing testimonials as general praise without checking execution details.' }, after: { ar: 'قراءتها كأدلة قرار تكشف المشكلة، طريقة التعاون، وجودة التسليم النهائي لمشاريعكم.', en: 'Reading them as decision proofs showing problem, collaboration, and delivery quality.' } },
      { before: { ar: 'اتخاذ قرار التوظيف بناءً على لقطة شاشة مصقولة قد لا تعكس تجربة الاستخدام الحقيقية أو سرعة التشغيل.', en: 'Deciding based on a polished screenshot that may not reflect actual UX or speed.' }, after: { ar: 'اتخاذ قرار مبني على تجربة عميل متكاملة، ونضج تشغيلي، وأثر ملموس ومستمر بعد النشر.', en: 'Deciding based on complete client experience, operational maturity, and lasting impact.' } }
    ],
    insights: [
      { title: { ar: 'الشهادة المعزولة عن سياقها لا تضمن شيئاً', en: 'Testimonials Isolated from Context Guarantee Nothing' }, body: { ar: 'لكنها تصبح دليلاً قاطعاً عندما تشرح تحديات مشابهة لتحدياتك، وتذكر بالأرقام كيف تغيرت التجربة والأداء الفعلي بعد الإطلاق.', en: 'But they become definitive proof when detailing challenges like yours, explaining how performance changed post-launch.' } },
      { title: { ar: 'اسأل دائماً عن تجربة الصيانة بعد إطلاق الموقع', en: 'Always Ask About the Post-Launch Support' }, body: { ar: 'أفضل الآراء لا تقف عند جمال شاشة التسليم؛ بل تشرح كيف يستقر أداء الموقع، وكيف يتعامل الفريق مع المشاكل الطارئة.', en: 'The best feedback does not stop at delivery; it explains how site performance stays stable and how issues are handled.' } },
      { title: { ar: 'انتبه لإشارات وضوح المحتوى وسهولة التعديل', en: 'Watch Clarity & Ease of Editing Signals' }, body: { ar: 'إذا ركز العميل السابق في شهادته على سهولة إدارته للموقع بمفرده، فهذا دليل على نضج تصميم لوحة التحكم.', en: 'If the client focuses on managing the site alone, it proves dashboard usability maturity.' } }
    ],
    proofPoints: [
      { title: { ar: 'الأسئلة والشفافية تحمي ميزانيتك وقرارك', en: 'Questions & Transparency Protect Your Decision' }, body: { ar: 'عندما تفحص آراء العملاء بأسئلة عملية ومحددة، تكتشف الفروق الجوهرية بين فرق التنفيذ دون خداع.', en: 'When you audit reviews with specific questions, you spot key differences between teams.' } },
      { title: { ar: 'دليل اجتماعي يربط المبادئ بالنتائج الواقعية', en: 'Social Proof Tying Principles to Outcomes' }, body: { ar: 'نحن لا نطلب منك تصديق وعودنا مجرداً؛ شهادات عملائنا تثبت بالدليل القاطع التزامنا ونضج مخرجاتنا.', en: 'We do not ask for blind belief; client reviews prove our commitment and delivery quality.' } }
    ],
    faq: [
      { question: { ar: 'كيف يمكنني التأكد من مصداقية شهادات العملاء المعروضة؟', en: 'How can I verify the authenticity of displayed reviews?' }, answer: { ar: 'نربط كل شهادة بموقع العميل النشط، ويمكنك التواصل معهم مباشرة لسؤالهم عن جودة تعاوننا.', en: 'We link each review to the active client site, and you can contact them to ask about collaboration.' } },
      { question: { ar: 'ما هي أهم إشارة ثقة يجب أن أبحث عنها في آراء العملاء؟', en: 'What is the most important trust signal to look for?' }, answer: { ar: 'ابحث عن حديث العميل عن التزام الفريق بالمواعيد، والوضوح التام أثناء التنفيذ، وجودة الدعم بعد الإطلاق.', en: 'Look for comments on meeting deadlines, clarity during implementation, and support quality.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'قراءة آراء العملاء وتحديد أوجه الشبه مع حالتك', en: 'Reading Testimonials & Spotting Similarities' }, body: { ar: 'البحث عن مشاريع وشركات واجهت نفس مشاكلك الرقمية.', en: 'Searching for projects and companies that faced your digital issues.' }, icon: 'Users', color: 'cyan' },
      { phase: '02', title: { ar: 'فحص مخرجات المشاريع المنشورة حية وتصفحها', en: 'Auditing Live Published Projects' }, body: { ar: 'زيارة روابط مواقع العملاء واختبار السرعة وسلاسة القراءة بنفسك.', en: 'Visiting client website links, testing speed and reading flow yourself.' }, icon: 'Globe', color: 'emerald' },
      { phase: '03', title: { ar: 'مقارنة عروض وأساليب تواصل فرق العمل المختلفة', en: 'Comparing Vendor Offerings & Communication' }, body: { ar: 'تقييم مدى وضوح ونضج وشفافية الردود والجدول الزمني المقترح.', en: 'Evaluating clarity, maturity, and transparency of replies and schedules.' }, icon: 'Sliders', color: 'amber' },
      { phase: '04', title: { ar: 'اتخاذ قرار التعاون مطمئناً وبمنهجية واضحة', en: 'Making Confident Collaboration Choices' }, body: { ar: 'بدء المشروع بثقة كاملة بناءً على أدلة وشهادات وحقائق ملموسة.', en: 'Starting the project with confidence based on reviews, proof, and facts.' }, icon: 'Award', color: 'cyan' }
    ],
    statsCounter: [
      { number: '9/10', label: { ar: 'من عملائنا الجدد يراجعون الشهادات والروابط', en: 'New clients auditing reviews & links' }, description: { ar: 'أكدوا أن تصفح مواقع عملائنا السابقين كان حاسماً في اختيار نُطق.', en: 'Confirmed that browsing past client sites was key in choosing Notaq.' } },
      { number: '100%', label: { ar: 'نسبة الشفافية والالتزام بالردود والضمانات', en: 'Transparency in replies & guarantees' }, description: { ar: 'لا نتهرب من الأسئلة الصعبة؛ نجيب بوضوح عن النطاق والوقت والتعديلات.', en: 'We do not dodge hard questions; we answer clearly on scope, time, and edits.' } },
      { number: '3-Way', label: { ar: 'طرق نقترحها لمقارنة واختيار شركاء التنفيذ', en: 'Ways we suggest to compare execution partners' }, description: { ar: 'افحص المنهجية، جرب المواقع المنشورة، واسأل عن الدعم بعد التسليم.', en: 'Check methodology, try live sites, and ask about post-delivery support.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'مصفوفة مقارنة وتقييم شركاء التنفيذ الرقمي للعميل', en: 'Web Development Agency Scorecard' }, description: { ar: 'جدول يساعدك على مقارنة وضوح، منهجية، ونضج الشركات المختلفة.', en: 'A sheet helping you compare vendor clarity, method, and maturity.' }, icon: 'FileSpreadsheet', impact: { ar: 'يمنع القرارات العاطفية ويضمن اختيار الشريك الأنضج تشغيلياً.', en: 'Prevents emotional decisions, ensuring you choose the mature partner.' } },
      { name: { ar: 'قائمة مراجعة وتقييم المشاريع المنشورة والمواقع', en: 'Live Site Auditing Checklist' }, description: { ar: 'نقاط فحص لتقييم سرعة، تجاوب، ووضوح المواقع السابقة للشركة.', en: 'Checklist to test speed, responsiveness, and copy clarity of past sites.' }, icon: 'ListTodo', impact: { ar: 'يكشف جودة التنفيذ الحقيقية وراء التصاميم والشاشات الجميلة.', en: 'Reveals actual build quality behind pretty layouts.' } },
      { name: { ar: 'دليل صياغة وتوجيه الأسئلة الفنية لفرق التطوير', en: 'Technical Vendor Interview Guide' }, description: { ar: 'مجموعة أسئلة تكشف مدى نضج المطورين والتزامهم بالمعايير.', en: 'A set of questions revealing developer maturity and standards.' }, icon: 'HelpCircle', impact: { ar: 'يحميك من التعاقد مع الهواة أو المطورين غير الملتزمين.', en: 'Protects you from hiring amateurs or uncommitted developers.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'الأسئلة الشفافة التي تطرحها نُطق ساعدتنا على ترتيب أفكارنا ومقارنة الخيارات المتاحة بوعي. لم يحاولوا إخفاء المشاكل أو المبالغة في الوعود؛ كانوا واضحين وصادقين بشأن ما يمكن إنجازه وتكلفته وجدوله الزمني.', en: 'The transparent questions asked by Notaq helped us organize thoughts and compare options.' },
      author: { ar: 'الأستاذ فيصل الياسين', en: 'Mr. Faisal Al-Yassin' },
      role: { ar: 'مؤسس مبادرة شباب التغيير للتعليم الرقمي', en: 'Founder of Youth for Change Digital Learning' },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      impact: { ar: 'تسهيل قرار الاختيار بناءً على وضوح تشغيلي وأدلة حقيقية.', en: 'Simplifying selection based on operational clarity and real proof.' }
    },
    checklist: [
      { item: { ar: 'فحص المواقع المنشورة للشركة على الهواتف والأداء', en: 'Testing published client websites on mobile performance' }, details: { ar: 'تأكد من سلاسة التصفح وسرعة ظهور المحتوى وخلوه من التعليق.', en: 'Verify browsing smoothness, content loading speed, and absence of freezes.' } },
      { item: { ar: 'سؤال العميل السابق عن التزام الفريق بالمواعيد والعهود', en: 'Asking a past client about vendor commitment to deadlines' }, details: { ar: 'أقوى دليل هو تجربة عميل حقيقي مر بنفس تفاصيل رحلتك الحالية.', en: 'The strongest proof is a real client experience that matches your current path.' } },
      { item: { ar: 'التأكد من توفير عقد رسمي يضمن كافة الحقوق والملكيات', en: 'Ensuring a formal contract guarantees all rights & ownership' }, details: { ar: 'العقد هو الضمان القانوني لحماية أصول الشركة الرقمية وحقوقها.', en: 'The contract is the legal guarantee protecting the company rights and digital assets.' } }
    ]
  },
  '/contact/direct': {
    metrics: [
      { value: '3', label: { ar: 'قنوات تواصل مباشرة منظمة وهادفة', en: 'structured direct contact channels' } },
      { value: '5+', label: { ar: 'تفاصيل نطلبها لتوفير رد جاد ودقيق', en: 'details requested to provide a serious reply' } },
      { value: '24h', label: { ar: 'إطار زمني متوقع للحصول على رد متكامل', en: 'expected reply window for a complete answer' } },
      { value: '100%', label: { ar: 'حفظ وسرية مطلقة لكافة البيانات المتبادلة', en: 'complete privacy of all shared information' } }
    ],
    decisionMatrix: [
      { label: { ar: 'مراسلة عبر واتساب', en: 'Messaging via WhatsApp' }, value: { ar: 'سؤال سريع أو فكرة مختصرة وجيزة', en: 'Quick question or brief initial idea' }, note: { ar: 'مناسب للاستفسارات السريعة حول إمكانية البدء أو حجز موعد مكالمة.', en: 'Best for quick availability questions or booking a call slot.' } },
      { label: { ar: 'تعبئة النموذج التفصيلي بالموقع', en: 'Filling the Detailed Website Form' }, value: { ar: 'تقديم متطلبات مشروع متكامل ومنظم', en: 'Submitting organized, complete project specs' }, note: { ar: 'أفضل عندما تملك أهدافاً واضحة، صفحات مقررة، وأمثلة عملية تود مشاركتها.', en: 'Best when you have clear goals, page counts, and examples to share.' } },
      { label: { ar: 'إرسال الـ Brief السريع المرتب', en: 'Sending the Organized Quick Brief' }, value: { ar: 'ترتيب وتشكيل الاحتياج الرقمي الأولي', en: 'Structuring the initial digital need' }, note: { ar: 'يساعد على صياغة أهداف الشركة والزائر المستهدف والأولويات بوضوح.', en: 'Helps outline company goals, target visitors, and priorities clearly.' } }
    ],
    roadmap: [
      { phase: '01', title: { ar: 'إرسال الفكرة والمعلومات الأساسية', en: 'Sending the Idea & Basic Info' }, body: { ar: 'توضيح نوع النشاط، الهدف من الموقع، وأي روابط أو أمثلة تعجبك.', en: 'Detailing business type, website goal, and any links/examples you like.' } },
      { phase: '02', title: { ar: 'فرز وتحديد نطاق العمل الأولي', en: 'Sorting & Defining Initial Scope' }, body: { ar: 'نقترح حجم الموقع المناسب لاحتياج شركتك ونحدد الأولويات والجدول الزمني التقريبي.', en: 'We suggest the right site size for your company need and outline priorities and an approximate timeline.' } },
      { phase: '03', title: { ar: 'ترتيب جلسة نقاش قصيرة وتأكيد الخطوات', en: 'Scheduling a Short Alignment Call' }, body: { ar: 'مكالمة لتوضيح الفكرة وتأكيد متطلبات التشغيل وصياغة العرض القانوني.', en: 'A call to clarify ideas, confirm operational requirements, and draft proposal.' } }
    ],
    comparison: [
      { before: { ar: 'رسالة مبهمة وسريعة مثل: "أريد موقعاً إلكترونياً" دون تقديم أي تفاصيل أو سياق عمل.', en: 'Vague message like "I need a website" without details or context.' }, after: { ar: 'رسالة منظمة توضح نوع النشاط، الهدف، الصفحات المتوقعة، وأمثلة قريبة تود محاكاتها.', en: 'Structured message showing activity, goal, expected pages, and nearby examples.' } },
      { before: { ar: 'الحوار يبدأ بتخمينات كثيرة واجتماعات طويلة بلا جدوى لتحديد المتطلبات.', en: 'Conversation starts with guesses and long useless meetings to define specs.' }, after: { ar: 'الحوار يبدأ بنطاق أولي محدد، أسئلة أقل، وتركيز مباشر على الحلول والاستثمار.', en: 'Conversation starts with defined initial scope, fewer questions, and focus on value.' } }
    ],
    proofPoints: [
      { title: { ar: 'التواصل المباشر لدينا منظم وله أهداف واضحة', en: 'Structured and Goal-Driven Direct Contact' }, body: { ar: 'نحن لا نترك المحادثات عشوائية؛ نحول رسالتك السريعة لجدول مهام ومقترح نطاق عمل واضح.', en: 'We do not leave chats random; we turn your quick message into tasks and a clear scope.' } },
      { title: { ar: 'الردود الفنية تبدأ من جودة سياق المشروع المعطى', en: 'Technical Replies Driven by Project Context' }, body: { ar: 'كلما أرسلت لنا تفاصيل سياق عملك بدقة، كان ردنا أسرع، أدق، وأكثر فائدة لقرارك.', en: 'The more project context details you share, the faster and more useful our reply.' } }
    ],
    faq: [
      { question: { ar: 'متى يجب أن أتوقع الرد بعد إرسال رسالتي؟', en: 'When should I expect a reply after messaging?' }, answer: { ar: 'نرد عادة في أقل من 24 ساعة عمل بمقترح أولي منظم أو أسئلة توضيحية مركزة.', en: 'We usually reply in under 24 business hours with an initial proposal or focused questions.' } },
      { question: { ar: 'هل هناك رسوم على جلسة الاستشارة والنقاش الأولى؟', en: 'Is there a fee for the initial consultation call?' }, answer: { ar: 'لا، المكالمة الأولى والتشخيص الأولي لنطاق العمل وتقديم المقترحات مجانية بالكامل.', en: 'No, the first call and initial scope diagnosis and proposals are completely free.' } }
    ],
    timeline: [
      { phase: '01', title: { ar: 'اختيار قناة التواصل وإرسال بياناتك', en: 'Choosing Contact Channel & Sending Data' }, body: { ar: 'اختيار واتساب للأسئلة السريعة أو النموذج للتفاصيل المنظمة.', en: 'Selecting WhatsApp for fast queries or the form for structured details.' }, icon: 'Send', color: 'cyan' },
      { phase: '02', title: { ar: 'استلام وفحص تفاصيل المشروع من فريق نُطق', en: 'Review & Audit of Project Details by Notaq' }, body: { ar: 'نقوم بتحليل متطلباتك وتحديد حجم ونوع الموقع المقترح.', en: 'We analyze your requirements and define the suggested site type and size.' }, icon: 'Search', color: 'emerald' },
      { phase: '03', title: { ar: 'تلقي مقترح نطاق العمل الأولي', en: 'Receiving Initial Scope Proposal' }, body: { ar: 'نرسل لك تفصيلاً للخطوات والمخرجات المقترحة لاتخاذ قرار أوضح.', en: 'We send a detailed outline of steps and suggested deliverables for a clearer decision.' }, icon: 'FileText', color: 'amber' },
      { phase: '04', title: { ar: 'حجز وتنسيق مكالمة المحاذاة القصيرة', en: 'Booking & Coordinating Alignment Call' }, body: { ar: 'جلسة سريعة لتأكيد التفاصيل والبدء الرسمي بالعقد.', en: 'A fast session to confirm details and start formally with the contract.' }, icon: 'PhoneCall', color: 'purple' }
    ],
    statsCounter: [
      { number: '24h', label: { ar: 'أقصى وقت متوقع للحصول على رد فني متكامل', en: 'Max expected technical response time' }, description: { ar: 'نحن نلتزم بالرد السريع والمنظم على كافة الطلبات الجادة.', en: 'We commit to fast, structured replies for all serious requests.' } },
      { number: '3-Ways', label: { ar: 'خيارات تواصل مرنة تناسب ظروفك', en: 'Flexible contact options for your convenience' }, description: { ar: 'اختر واتساب، النموذج التفصيلي، أو الـ Brief السريع للبداية.', en: 'Choose WhatsApp, the detailed form, or the quick brief to start.' } },
      { number: '0', label: { ar: 'رسائل أو ردود عشوائية أو تسويق مزعج', en: 'Zero spam or aggressive sales messaging' }, description: { ar: 'تواصلنا مهني ومركز حول حل مشاكل الحضور الرقمي لعلامتك.', en: 'Our contact is professional and focused on solving your digital presence issues.' } }
    ],
    toolsDeliverables: [
      { name: { ar: 'دليل اختيار قناة التواصل الأنسب للمشروع', en: 'Contact Channel Selection Helper' }, description: { ar: 'دليل يوضح متى تستخدم كل قناة لسرعة ونضج الردود.', en: 'A guide showing when to use each channel for fast and mature replies.' }, icon: 'Compass', impact: { ar: 'يوفر وقتك ويضمن وصول رسالتك للشخص الفني المناسب.', en: 'Saves your time, ensuring your message reaches the right builder.' } },
      { name: { ar: 'نموذج إعداد وجمع متطلبات المشروع الأولي', en: 'Initial Project Requirements Template' }, description: { ar: 'مستند يساعد على كتابة تفاصيل الاحتياج وتوزيع الصفحات.', en: 'A document helping draft the need details and page structure.' }, icon: 'ListTodo', impact: { ar: 'يجعل التواصل الأول ناضجاً ومقنعاً ويسرع تحديد النطاق والمخرجات.', en: 'Makes the first message mature and speeds up scope and deliverable definition.' } },
      { name: { ar: 'لوحة حجز المواعيد الفورية والمكالمات تلقائياً', en: 'Automated Calendar Scheduling Portal' }, description: { ar: 'أداة لحجز مكالمتك مباشرة بالوقت المناسب لجدولك دون تكرار البريد.', en: 'A tool to book your call directly at your convenient time.' }, icon: 'Calendar', impact: { ar: 'يسهل ترتيب مكالمات المحاذاة ويوفر عناء البحث عن موعد.', en: 'Eases alignment call booking, saving scheduling efforts.' } }
    ],
    testimonialSpotlight: {
      quote: { ar: 'تواصلنا مع نُطق عبر واتساب لسؤال سريع، وفي أقل من ساعة وصلنا رد فني متكامل ومفصل فاجأنا باحترافيته. لم يرسلوا مجرد أسعار معلبة؛ بل سألونا أسئلة حكيمة كشفت لنا جوانب لم نكن ندركها في مشروعنا، وهو ما دفعنا للتعاقد معهم فوراً.', en: 'We contacted Notaq via WhatsApp for a quick question, and in under an hour we received a detailed reply.' },
      author: { ar: 'الأستاذ عبد الله الثنيان', en: 'Mr. Abdullah Al-Thunayan' },
      role: { ar: 'مؤسس منصة ثروة للتعليم والتمكين المالي', en: 'Founder of Tharwah for Financial Education' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      impact: { ar: 'ردود فنية سريعة واحترافية تفوق التوقعات وتبني الثقة فوراً.', en: 'Fast, professional technical replies building trust immediately.' }
    },
    checklist: [
      { item: { ar: 'تجهيز اسم النشاط والهدف الأساسي من الموقع الجديد', en: 'Preparing business name and primary goal of the new site' }, details: { ar: 'يساعدنا هذا على فهم قطاع عملك وتوجيه الفكرة التشغيلية بشكل صحيح.', en: 'This helps us understand the industry and guide the operational idea correctly.' } },
      { item: { ar: 'تحديد عدد وصفحات وأقسام الموقع المتوقعة مبدئياً', en: 'Estimating page count and sections expected initially' }, details: { ar: 'هل تحتاج شاشة واحدة سريعة، موقع شركة متكامل، متجر، أم نظام مخصص؟', en: 'Do you need a single landing page, full company site, store, or custom system?' } },
      { item: { ar: 'مشاركة أي روابط لمواقع أو تصاميم تعجبك وتقترب مما تريد', en: 'Sharing any website links or designs resembling what you like' }, details: { ar: 'توفير أمثلة يسرع فهمنا لذوقك وتوقعاتك البصرية والتفاعلية للمشروع.', en: 'Providing examples speeds up our grasp of your taste and visual expectations.' } }
    ]
  }
};

const makeExperienceSpecificEnhancement = (page: DetailPageContent): DetailWorldEnhancement => {
  const isService = page.parentPath === '/services';
  const isContact = page.parentPath === '/contact';
  const isProof = page.parentPath === '/testimonials' || page.layoutVariant === 'proof';
  const isAbout = page.parentPath === '/about';
  const routeLabel = `${page.parentPath}/${page.slug}`;
  const slugWords = page.slug.split('-').length;
  const contentDepth = page.sections.length + page.deliverables.length + page.useCases.length;

  const focusLabel = isService
    ? richCopy('تفاصيل تنفيذ مرتبطة بالخدمة', 'service-linked delivery details')
    : isContact
      ? richCopy('محاور تجهيز قبل التواصل', 'pre-contact preparation points')
      : isProof
        ? richCopy('دلائل ثقة قابلة للفحص', 'auditable trust proof')
        : isAbout
          ? richCopy('معايير تشغيل داخل نُطق', 'Notaq operating standards')
          : richCopy('طبقات قرار داخل الصفحة', 'decision layers inside the page');

  return {
    metrics: [
      { value: `${contentDepth}+`, label: focusLabel },
      { value: `${Math.max(3, slugWords + 2)}`, label: richCopy('زوايا عرض مختلفة داخل التجربة', 'different presentation angles') },
      { value: isService ? 'B2B' : isContact ? '24h' : isProof ? 'Proof' : 'UX', label: richCopy('إشارة تركيز خاصة بهذه الصفحة', 'page-specific focus signal') },
    ],
    faq: [
      {
        question: richCopy(`ما الذي يجعل صفحة ${page.title.ar} مختلفة بصرياً؟`, `What makes ${page.title.en} visually different?`),
        answer: richCopy(
          `هذه الصفحة لا تعتمد على نفس ترتيب الكروت؛ يتم عرض ${page.eyebrow.ar} بإيقاع مختلف وصورة/فيديو مرتبط بالهدف ثم أقسام قرار مخصصة.`,
          `This page does not rely on the same card order; ${page.eyebrow.en} is presented through a distinct rhythm, goal-related media, and custom decision sections.`,
        ),
      },
      {
        question: richCopy('هل التفاصيل هنا مجرد شرح طويل؟', 'Are these details just long explanation?'),
        answer: richCopy(
          'لا. كل كتلة مرتبطة بسؤال عملي: ماذا أفهم؟ ماذا أستلم؟ ماذا أخاف؟ وما الخطوة التالية المناسبة؟',
          'No. Every block connects to a practical question: what do I understand, what do I receive, what might worry me, and what next step fits?',
        ),
      },
      {
        question: richCopy('هل الصفحة مناسبة للموبايل رغم كثرة التفاصيل؟', 'Is the page suitable for mobile despite the extra detail?'),
        answer: richCopy(
          'نعم، لأن التفاصيل تقسم إلى وحدات قصيرة ومسارات قراءة واضحة بدلاً من كتلة نصية طويلة أو كروت متشابهة.',
          'Yes. Details are divided into short units and clear reading paths instead of a long text wall or repeated cards.',
        ),
      },
    ],
    proofPoints: [
      {
        title: richCopy('هوية عرض مختلفة', 'Distinct presentation identity'),
        body: richCopy(
          `تم ربط ${routeLabel} بتجربة عرض خاصة حتى لا تبدو الصفحة نسخة من صفحة أخرى داخل نفس القائمة.`,
          `${routeLabel} is tied to a specific presentation experience so it does not feel copied from another dropdown page.`,
        ),
      },
      {
        title: richCopy('ميديا تخدم القرار', 'Decision-serving media'),
        body: richCopy(
          'الصورة أو الفيديو لا يستخدم كخلفية فقط؛ يظهر كدليل بصري أو لوحة قصة أو مساحة تلخيص حسب هدف الصفحة.',
          'The image or video is not used as decoration only; it appears as visual proof, story panel, or summary space depending on page intent.',
        ),
      },
      {
        title: richCopy('تفاصيل قابلة للتصفح', 'Browsable detail'),
        body: richCopy(
          'تم توزيع العمق بين مقاييس، مصفوفات، سيناريوهات، وأسئلة حتى لا يشعر الزائر بتكرار نفس القالب.',
          'Depth is distributed across metrics, matrices, scenarios, and questions so visitors do not feel the same template repeating.',
        ),
      },
    ],
    decisionMatrix: [
      {
        label: richCopy('القارئ السريع', 'Fast scanner'),
        value: page.metrics?.[0]?.label ?? page.eyebrow,
        note: richCopy('يحتاج عنواناً واضحاً ومؤشراً سريعاً يثبت لماذا هذه الصفحة مهمة له.', 'Needs a clear heading and fast signal proving why this page matters.'),
      },
      {
        label: richCopy('صاحب القرار', 'Decision maker'),
        value: page.promise,
        note: richCopy('يريد معرفة النتيجة التي سيحصل عليها قبل الدخول في التفاصيل الطويلة.', 'Wants to know the outcome before entering deeper detail.'),
      },
      {
        label: richCopy('فريق التنفيذ', 'Execution team'),
        value: page.deliverables[0] ?? page.title,
        note: richCopy('يبحث عن مخرجات يمكن تحويلها إلى عمل واضح أو مراجعة داخلية.', 'Looks for outputs that can become clear work or internal review.'),
      },
    ],
  };
};

const getRouteTone = (page: DetailPageContent, index: number) => {
  if (page.parentPath === '/home') {
    const tones = [
      richCopy('قراءة أولى منظمة', 'organized first read'),
      richCopy('ثقة مبكرة قبل التمرير', 'early trust before scrolling'),
      richCopy('تحويل هادئ للتواصل', 'calm conversion to contact'),
      richCopy('موبايل سريع وواضح', 'fast clear mobile journey'),
    ];
    return tones[index % tones.length];
  }

  if (page.parentPath === '/about') {
    const tones = [
      richCopy('منهجية تشغيل واضحة', 'clear operating method'),
      richCopy('تعاون بلا ضبابية', 'collaboration without ambiguity'),
      richCopy('معايير تسليم قابلة للفحص', 'auditable delivery standards'),
      richCopy('سبب اختيار نُطق', 'why choose Notaq'),
    ];
    return tones[index % tones.length];
  }

  if (page.parentPath === '/services') {
    const tones = [
      richCopy('قرار خدمة قابل للمقارنة', 'comparable service decision'),
      richCopy('مخرجات تنفيذ محددة', 'defined delivery outputs'),
      richCopy('تشخيص قبل البناء', 'diagnosis before build'),
      richCopy('تشغيل بعد الإطلاق', 'post-launch operation'),
      richCopy('ربط وتكاملات', 'connections and integrations'),
      richCopy('نمو متدرج', 'staged growth'),
    ];
    return tones[index % tones.length];
  }

  if (page.parentPath === '/testimonials') {
    const tones = [
      richCopy('دليل نتيجة لا رأي عام', 'outcome proof, not generic praise'),
      richCopy('قبل وبعد قابل للفحص', 'auditable before and after'),
      richCopy('اعتراضات تم الرد عليها', 'answered objections'),
      richCopy('مكتبة ثقة متعددة الأدلة', 'multi-proof trust library'),
    ];
    return tones[index % tones.length];
  }

  const tones = [
    richCopy('بداية تواصل مرتبة', 'organized contact start'),
    richCopy('مكالمة أولى مختصرة', 'short useful first call'),
    richCopy('رد واضح بعد الرسالة', 'clear reply after the message'),
    richCopy('نطاق مبدئي مفهوم', 'understandable initial scope'),
  ];
  return tones[index % tones.length];
};

const makeRouteFocusedEnhancement = (page: DetailPageContent, index: number): DetailWorldEnhancement => {
  const route = `${page.parentPath}/${page.slug}`;
  const routeTone = getRouteTone(page, index);
  const primarySection = page.sections[index % page.sections.length] ?? page.sections[0];
  const secondarySection = page.sections[(index + 1) % page.sections.length] ?? page.sections[1] ?? primarySection;
  const firstDeliverable = page.deliverables[index % page.deliverables.length] ?? page.title;
  const secondDeliverable = page.deliverables[(index + 1) % page.deliverables.length] ?? page.promise;
  const firstUseCase = page.useCases[index % page.useCases.length] ?? page.audience;
  const secondUseCase = page.useCases[(index + 1) % page.useCases.length] ?? page.promise;

  return {
    metrics: [
      { value: `${index + 3}`, label: richCopy(`زوايا عرض خاصة بمسار ${page.eyebrow.ar}`, `${index + 3} angles for ${page.eyebrow.en}`) },
      { value: `${Math.max(4, page.deliverables.length + 2)}`, label: richCopy(`مخرجات مرتبطة بـ ${firstDeliverable.ar}`, `outputs connected to ${firstDeliverable.en}`) },
      { value: route.includes('/services/') ? 'Scope' : route.includes('/contact/') ? 'Reply' : route.includes('/testimonials/') ? 'Proof' : 'Flow', label: routeTone },
    ],
    insights: [
      {
        title: richCopy(`زاوية ${page.eyebrow.ar} الأساسية`, `Core angle for ${page.eyebrow.en}`),
        body: richCopy(
          `هذه الصفحة تبدأ من ${primarySection.title.ar} ثم تربطها مباشرة بسؤال العميل حول ${routeTone.ar}، لذلك لا تظهر كنص عام متكرر.`,
          `This page starts from ${primarySection.title.en} and connects it to the client's question around ${routeTone.en}, so it does not feel generic.`,
        ),
      },
      {
        title: richCopy(`تفصيل يخص ${firstDeliverable.ar}`, `Detail specific to ${firstDeliverable.en}`),
        body: richCopy(
          `بدل تكرار وصف المخرجات، يتم شرح ${firstDeliverable.ar} كجزء من قرار عملي داخل ${page.title.ar}.`,
          `Instead of repeating deliverable copy, ${firstDeliverable.en} is explained as a practical decision inside ${page.title.en}.`,
        ),
      },
      {
        title: richCopy(`حالة استخدام مختلفة`, `Different use case`),
        body: richCopy(
          `نستخدم حالة ${firstUseCase.ar} لتغيير زاوية القراءة والسيناريوهات، لا مجرد تغيير عنوان الصفحة.`,
          `We use the ${firstUseCase.en} case to change the reading angle and scenarios, not only the page title.`,
        ),
      },
      {
        title: richCopy(`دور الصورة والفيديو`, `Role of image and video`),
        body: richCopy(
          `الميديا هنا تخدم ${routeTone.ar}: لقطة العمل تشرح السياق، والفيديو يكسر الرتابة في منتصف القراءة.`,
          `Media supports ${routeTone.en}: the work shot explains context and the video breaks monotony mid-read.`,
        ),
      },
    ],
    comparison: [
      {
        before: richCopy(
          `صفحة ${page.eyebrow.ar} بنمط كروت مكرر تجعل الزائر يشعر أنه يقرأ نفس الصفحة باسم مختلف.`,
          `A repeated-card ${page.eyebrow.en} page makes visitors feel they are reading the same page under another name.`,
        ),
        after: richCopy(
          `صفحة ${page.title.ar} تعرض ${routeTone.ar} من خلال ترتيب وميديا وأسئلة مختلفة داخل نفس هوية الموقع.`,
          `${page.title.en} presents ${routeTone.en} through different order, media, and questions within the same brand identity.`,
        ),
      },
      {
        before: richCopy(
          `الاعتماد على FAQ ومراحل عامة لا يوضح لماذا ${firstUseCase.ar} يحتاج هذا المسار تحديدًا.`,
          `Generic FAQ and stages do not explain why ${firstUseCase.en} needs this exact path.`,
        ),
        after: richCopy(
          `الأسئلة والسيناريوهات مرتبطة بـ ${firstUseCase.ar} و${secondUseCase.ar} حتى يصبح المحتوى خاصًا بالقرار.`,
          `Questions and scenarios connect to ${firstUseCase.en} and ${secondUseCase.en}, making the content decision-specific.`,
        ),
      },
    ],
    roadmap: [
      {
        phase: '01',
        title: richCopy(`تشخيص زاوية ${page.eyebrow.ar}`, `Diagnose the ${page.eyebrow.en} angle`),
        body: richCopy(
          `نحدد ما الذي يجب أن يفهمه الزائر أولًا قبل الدخول في تفاصيل ${primarySection.title.ar}.`,
          `We define what the visitor must understand first before entering ${primarySection.title.en} details.`,
        ),
      },
      {
        phase: '02',
        title: richCopy(`بناء إيقاع ${routeTone.ar}`, `Build the ${routeTone.en} rhythm`),
        body: richCopy(
          `نوزع النص والميديا والمقاييس بحيث لا تتكرر تجربة القراءة داخل نفس القائمة.`,
          `We distribute copy, media, and metrics so the reading experience is not repeated inside the same dropdown.`,
        ),
      },
      {
        phase: '03',
        title: richCopy(`تثبيت مخرجات ${firstDeliverable.ar}`, `Anchor ${firstDeliverable.en} outputs`),
        body: richCopy(
          `نربط المخرجات بما سيراه العميل فعليًا، ثم نوضح أين تظهر القيمة في الصفحة.`,
          `We connect outputs to what the client will actually see, then clarify where the value appears on the page.`,
        ),
      },
      {
        phase: '04',
        title: richCopy(`اختبار عدم التشابه`, `Check non-repetition`),
        body: richCopy(
          `نراجع الصفحة بجانب صفحات القسم للتأكد أن البطل، الترتيب، والسيناريوهات لا تتطابق.`,
          `We review the page next to its section siblings to ensure hero, order, and scenarios do not match.`,
        ),
      },
    ],
    decisionMatrix: [
      {
        label: richCopy('القارئ السريع', 'Fast scanner'),
        value: routeTone,
        note: richCopy(
          `يرى قيمة ${page.eyebrow.ar} من العنوان والمقاييس بدون أن ينتظر فتح أقسام متشابهة.`,
          `Sees ${page.eyebrow.en} value from title and metrics without waiting for similar sections.`,
        ),
      },
      {
        label: richCopy('صاحب القرار', 'Decision maker'),
        value: page.promise,
        note: richCopy(
          `يربط الوعد بـ ${firstDeliverable.ar} و${secondDeliverable.ar} بدل قراءة وعد عام.`,
          `Connects the promise to ${firstDeliverable.en} and ${secondDeliverable.en} instead of a generic promise.`,
        ),
      },
      {
        label: richCopy('فريق التنفيذ', 'Execution team'),
        value: primarySection.title,
        note: richCopy(
          `يحصل على خطوات قابلة للمراجعة داخل ${secondarySection.title.ar} حتى تتحول الصفحة إلى brief واضح.`,
          `Gets reviewable steps inside ${secondarySection.title.en}, turning the page into a clear brief.`,
        ),
      },
    ],
    scenarios: [
      {
        title: richCopy(`سيناريو ${firstUseCase.ar}`, `${firstUseCase.en} scenario`),
        body: richCopy(
          `هذا القارئ يحتاج رؤية ${routeTone.ar} قبل التفاصيل؛ لذلك تظهر المقارنة والمخرجات في ترتيب مختلف عن باقي صفحات القسم.`,
          `This reader needs to see ${routeTone.en} before details, so comparison and outputs appear in a different order than sibling pages.`,
        ),
      },
      {
        title: richCopy(`سيناريو ${secondUseCase.ar}`, `${secondUseCase.en} scenario`),
        body: richCopy(
          `نستخدم أسئلة خاصة بهذه الحالة حتى لا تبدو صفحة ${page.title.ar} نسخة من صفحة فرعية أخرى.`,
          `We use questions specific to this case so ${page.title.en} does not feel copied from another subpage.`,
        ),
      },
      {
        title: richCopy('سيناريو مراجعة داخلية', 'Internal review scenario'),
        body: richCopy(
          `يمكن للفريق مقارنة ${firstDeliverable.ar} بالميديا والـ roadmap للتأكد أن كل جزء له وظيفة.`,
          `The team can compare ${firstDeliverable.en} with media and roadmap to confirm every block has a role.`,
        ),
      },
    ],
    proofPoints: [
      {
        title: richCopy(`إثبات خاص بـ ${routeTone.ar}`, `Proof specific to ${routeTone.en}`),
        body: richCopy(
          `الصفحة تعرض دليلًا مختلفًا حسب هدفها: مرة كخريطة قرار، مرة كاختبار جودة، ومرة كمكتبة ثقة.`,
          `The page shows proof based on its goal: sometimes a decision map, sometimes a quality check, sometimes a trust library.`,
        ),
      },
      {
        title: richCopy('ميديا غير مكررة داخل القسم', 'Non-repeated media inside the section'),
        body: richCopy(
          `تم ربط route ${route} بأصول ميديا مختلفة عن الصفحات المجاورة داخل نفس dropdown.`,
          `Route ${route} is assigned media assets different from neighboring pages in the same dropdown.`,
        ),
      },
      {
        title: richCopy('أسئلة مرتبطة بالقرار', 'Decision-linked questions'),
        body: richCopy(
          `كل سؤال يشرح نقطة تردد تخص ${page.eyebrow.ar} بدل سؤال عام يمكن نسخه لأي صفحة.`,
          `Every question explains hesitation specific to ${page.eyebrow.en}, not a generic question that can be copied anywhere.`,
        ),
      },
    ],
    faq: [
      {
        question: richCopy(`لماذا لا تشبه صفحة ${page.title.ar} باقي الصفحات؟`, `Why does ${page.title.en} not look like the other pages?`),
        answer: richCopy(
          `لأنها مبنية حول ${routeTone.ar} مع ميديا وترتيب أقسام ومصفوفة قرار خاصة بها، وليس حول قالب واحد يتكرر.`,
          `Because it is built around ${routeTone.en} with its own media, section order, and decision matrix, not one repeated template.`,
        ),
      },
      {
        question: richCopy(`ما أهم تفصيلة في ${page.eyebrow.ar}؟`, `What is the key detail in ${page.eyebrow.en}?`),
        answer: richCopy(
          `أهم تفصيلة هي ربط ${firstDeliverable.ar} بسيناريو ${firstUseCase.ar} حتى يفهم العميل القيمة العملية لا الاسم فقط.`,
          `The key detail is connecting ${firstDeliverable.en} to the ${firstUseCase.en} scenario so the client understands practical value, not just the name.`,
        ),
      },
      {
        question: richCopy('كيف تم منع التكرار في المحتوى؟', 'How is content repetition prevented?'),
        answer: richCopy(
          `تم تغيير المقاييس، السيناريوهات، الأسئلة، وخريطة الطريق حسب route ${route} وحسب موضع الصفحة داخل القسم.`,
          `Metrics, scenarios, questions, and roadmap are changed according to route ${route} and the page position inside the section.`,
        ),
      },
    ],
    checklist: [
      {
        item: richCopy('مراجعة اختلاف hero والميديا', 'Review hero and media difference'),
        details: richCopy(
          `لا تعتمد هذه الصفحة على نفس صورة أو فيديو الصفحات المجاورة في ${page.parentPath}.`,
          `This page does not rely on the same image or video as neighboring pages in ${page.parentPath}.`,
        ),
      },
      {
        item: richCopy('مراجعة اختلاف ترتيب الأقسام', 'Review section order difference'),
        details: richCopy(
          `يجب أن يظهر ترتيب ${page.title.ar} مختلفًا عند فتح صفحتين متتاليتين من نفس القائمة.`,
          `${page.title.en} should show a different section order when opened next to a sibling page.`,
        ),
      },
      {
        item: richCopy('مراجعة خصوصية الأسئلة', 'Review question specificity'),
        details: richCopy(
          `كل سؤال يجب أن يرتبط بـ ${page.eyebrow.ar} أو ${firstUseCase.ar} حتى لا يكون قابلًا للنسخ لأي صفحة.`,
          `Every question should connect to ${page.eyebrow.en} or ${firstUseCase.en}, so it cannot be copied to any page.`,
        ),
      },
    ],
  };
};

const allExpandedDetailPages = [
  ...homeDetailPages,
  ...aboutDetailPages,
  ...serviceDetailPages,
  ...contactDetailPages,
  ...testimonialStoryPages,
];

allExpandedDetailPages.forEach((page, index) => {
  const route = `${page.parentPath}/${page.slug}`;
  detailWorldEnhancements[route] = {
    ...detailWorldEnhancements[route],
    ...makeExperienceSpecificEnhancement(page),
    ...makeRouteFocusedEnhancement(page, index),
  };
});
