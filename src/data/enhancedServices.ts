import type { EnhancedDetailPageContent } from '../components/DetailPageEnhanced';
import { serviceLibrary } from './serviceLibrary';
import {
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Shield,
  Users,
  Layers3,
  CheckCircle,
  TrendingUp,
  Gauge,
} from 'lucide-react';

const enhancedServicePages: Record<string, EnhancedDetailPageContent> = {
  seo: {
    slug: 'seo',
    parentPath: '/services',
    parentLabel: { ar: 'الخدمات', en: 'Services' },
    eyebrow: { ar: 'تحسين محرك البحث', en: 'Search Engine Optimization' },
    title: {
      ar: 'ظهر أولاً عندما يبحث عملاؤك عن الحل الذي تقدمه',
      en: 'Appear first when your customers search for solutions like yours',
    },
    summary: {
      ar: 'خدمة SEO شاملة تجمع بين تحليل عميق للكلمات المفتاحية، تحسين الموقع الفني، وإنشاء محتوى مُحسّن لمحركات البحث. نركز على النتائج المقاسة: ترتيب أفضل، زيارات أكثر، وعملاء حقيقيين.',
      en: 'Comprehensive SEO service combining deep keyword research, technical optimization, and search-optimized content creation. We focus on measurable results: better rankings, more traffic, real customers.',
    },
    audience: {
      ar: 'شركات تريد نمو عضوي مستدام وتصريف ثابت من البحث، وليس إعلانات مدفوعة مؤقتة.',
      en: 'Companies seeking sustainable organic growth and steady traffic flow from search, not temporary paid ads.',
    },
    promise: {
      ar: 'ظهور ملموس في نتائج البحث خلال 3-6 أشهر، مع زيادة في الزوار المستهدفين والتحويلات.',
      en: 'Tangible search visibility within 3-6 months, with measurable increases in targeted visitors and conversions.',
    },
    sections: [
      {
        title: { ar: 'تحليل وتشخيص', en: 'Analysis & Diagnosis' },
        body: {
          ar: 'نبدأ بفهم موقع الشركة الحالي: ترتيبه، المشاكل الفنية، والكلمات المفتاحية التي يبحث عنها الزائر المستهدف. نحلل المنافسين ونحدد الفرص الضائعة.',
          en: 'We start by understanding the company website’s current position: rankings, technical issues, and keywords target visitors search for. We analyze competitors and identify missed opportunities.',
        },
        icon: Target,
        image: '/images/seo-analysis.jpg',
      },
      {
        title: { ar: 'التحسينات الفنية', en: 'Technical Optimization' },
        body: {
          ar: 'تسريع الموقع، تحسين البنية الداخلية، ملفات sitemap، وضمان أن محركات البحث تفهم محتواك بسهولة.',
          en: 'Site speed optimization, internal structure improvement, sitemaps, and ensuring search engines understand your content clearly.',
        },
        icon: Zap,
        image: '/images/seo-technical.jpg',
      },
      {
        title: { ar: 'محتوى وكلمات مفتاحية', en: 'Content & Keywords' },
        body: {
          ar: 'إنشاء محتوى متقن يجمع بين ما يبحث عنه الناس وما يهمك أن تقول. نركز على النية: هل يبحث العميل المحتمل عن معلومة أم عن حل؟',
          en: 'Creating expert content that combines what people search for with what you need to communicate. We focus on intent: is the prospect seeking information or a solution?',
        },
        icon: Layers3,
        image: '/images/seo-content.jpg',
      },
      {
        title: { ar: 'بناء السلطة', en: 'Authority Building' },
        body: {
          ar: 'روابط ذات جودة من مواقع موثوقة، ذكر الموقع في وسائط مرموقة، وشهادات تجعل حضور الشركة أكثر موثوقية في مجالها.',
          en: 'Quality links from reputable sites, media mentions, and citations that establish your site as an authority in your field.',
        },
        icon: Shield,
      },
    ],
    deliverables: [
      { ar: 'تقرير تحليل شامل مع فرص النمو', en: 'Comprehensive analysis report with growth opportunities' },
      { ar: 'خطة SEO مخصصة لمدة 6-12 شهر', en: 'Customized 6-12 month SEO roadmap' },
      { ar: 'تحسينات فنية وتحديثات بنيوية', en: 'Technical improvements and structural updates' },
      { ar: 'مقالات ومحتوى محسّن للكلمات المفتاحية', en: 'Keyword-optimized articles and content' },
      { ar: 'تقارير شهرية وتقدم قابل للقياس', en: 'Monthly reports and measurable progress' },
    ],
    useCases: [
      { ar: 'شركات خدمات تريد عملاء محليين', en: 'Service companies seeking local customers' },
      { ar: 'متاجر إلكترونية تريد نمو المبيعات', en: 'E-commerce stores wanting sales growth' },
      { ar: 'مواقع محتوى تريد زوار وإعلانات', en: 'Content sites seeking traffic and ad revenue' },
      { ar: 'براند جديد يريد بناء حضور عضوي', en: 'New brands building organic presence' },
    ],
    metrics: [
      {
        value: '250%',
        label: { ar: 'متوسط نمو الزيارات', en: 'Average traffic growth' },
        icon: TrendingUp,
        trend: 'up',
      },
      {
        value: '3-6 شهور',
        label: { ar: 'وقت ظهور النتائج', en: 'Time to first results' },
        icon: Gauge,
      },
      {
        value: '45+',
        label: { ar: 'كلمات مفتاحية مترتبة', en: 'Keywords ranking' },
        icon: Target,
      },
      {
        value: 'ROI+',
        label: { ar: 'عائد استثمار إيجابي', en: 'Positive ROI' },
        icon: BarChart3,
      },
    ],
    features: [
      {
        title: { ar: 'تحليل منافسين عميق', en: 'Deep competitor analysis' },
        description: { ar: 'نفهم استراتيجيات منافسيك ونحدد الثغرات التي يتركونها', en: 'We understand competitor strategies and identify gaps they leave open' },
        icon: Target,
      },
      {
        title: { ar: 'محتوى متخصص عالي الجودة', en: 'High-quality specialized content' },
        description: { ar: 'مقالات متعمقة تجيب أسئلة الزائر المستهدف وتبني الثقة', en: 'In-depth articles answering target visitor questions and building trust' },
        icon: Sparkles,
      },
      {
        title: { ar: 'تحسين تقني مستمر', en: 'Continuous technical optimization' },
        description: { ar: 'تحديثات دورية لضمان أن الموقع يعمل بأفضل حالاته', en: 'Regular updates ensuring your site performs at its best' },
        icon: Zap,
      },
      {
        title: { ar: 'تقارير شفافة وواضحة', en: 'Transparent clear reporting' },
        description: { ar: 'تعرف بالضبط ما يحدث وكيف يتحسن ترتيبك', en: 'Know exactly what\'s happening and how your rankings improve' },
        icon: BarChart3,
      },
    ],
    comparison: [
      {
        aspect: { ar: 'الوقت', en: 'Timeline' },
        before: { ar: 'شهور عديمة الجدوى', en: 'Months without direction' },
        after: { ar: 'نتائج ملموسة بعد 3 أشهر', en: 'Tangible results after 3 months' },
      },
      {
        aspect: { ar: 'النطاق', en: 'Scope' },
        before: { ar: 'إعلانات مدفوعة مستمرة', en: 'Ongoing paid ads' },
        after: { ar: 'زوار مجانيين طويل الأمد', en: 'Long-term free visitors' },
      },
      {
        aspect: { ar: 'الثقة', en: 'Trust' },
        before: { ar: 'ظهور في الإعلانات', en: 'Ad visibility' },
        after: { ar: 'سلطة وثقة في النتائج الطبيعية', en: 'Authority in organic results' },
      },
    ],
    faq: [
      {
        question: { ar: 'متى سأرى النتائج؟', en: 'When will I see results?' },
        answer: {
          ar: 'عادة ترى تحسن في 3 أشهر، لكن النتائج كاملة تأخذ 6-12 شهراً. كل الأشياء الجيدة تأخذ وقتاً!',
          en: 'Usually you see improvement in 3 months, but full results take 6-12 months. Good things take time!',
        },
      },
      {
        question: { ar: 'هل هذا يختلف عن الإعلانات المدفوعة؟', en: 'How is this different from paid ads?' },
        answer: {
          ar: 'الإعلانات تتوقف عندما توقف الدفع. SEO يبني حضور طويل الأمد حتى بعد انتهاء الخدمة.',
          en: 'Ads stop when you stop paying. SEO builds long-term presence even after service ends.',
        },
      },
      {
        question: { ar: 'هل هناك ضمان؟', en: 'Is there a guarantee?' },
        answer: {
          ar: 'لا أحد يستطيع ضمان ترتيب #1 (حتى جوجل لا تضمنه)، لكننا نضمن جهد احترافي وشفافية كاملة في التقارير.',
          en: 'No one can guarantee #1 ranking (even Google doesn\'t), but we guarantee professional effort and full reporting transparency.',
        },
      },
    ],
    cta: {
      ar: 'تحدث مع خبيرنا عن استراتيجية SEO التي تناسب موقع شركتك وأهدافها.',
      en: 'Talk to our expert about an SEO strategy that fits your site and goals.',
    },
    accent: 'from-cyan-400/16 via-sky-500/8 to-transparent',
  },

  uiux: {
    slug: 'ui-ux',
    parentPath: '/services',
    parentLabel: { ar: 'الخدمات', en: 'Services' },
    eyebrow: { ar: 'تصميم التجربة', en: 'User Experience Design' },
    title: {
      ar: 'اجعل موقع الشركة أو تطبيقها يشعر بالاحترافية والسهولة في كل نقرة',
      en: 'Make your site or app feel professional and easy with every click',
    },
    summary: {
      ar: 'خدمة UI/UX شاملة تبدأ من فهم المستخدم، تمر بالتصميم والاختبار، وتنتهي بتجربة تشعر بأنها طبيعية وممتعة.',
      en: 'Complete UI/UX service starting from user research, through design and testing, ending with an experience that feels natural and delightful.',
    },
    audience: {
      ar: 'شركات ناشئة وراسخة تريد تطبيق أو موقع يفهم احتياجات مستخدميه.',
      en: 'Startups and established companies wanting an app or site that understands its users.',
    },
    promise: {
      ar: 'تصميم يجمع بين الجمال والوظيفة: يبدو احترافياً ويعمل بسلاسة.',
      en: 'Design combining beauty and function: looks professional and works seamlessly.',
    },
    sections: [
      {
        title: { ar: 'بحث المستخدم', en: 'User Research' },
        body: {
          ar: 'نقضي وقتاً في فهم من يستخدم موقع الشركة، ماذا يريد، وأين يتردد. نقوم بمقابلات وملاحظات واختبارات لفهم الصورة الكاملة.',
          en: 'We spend time understanding who uses your site, what they want, and where they hesitate. We conduct interviews, observations, and tests to see the full picture.',
        },
        icon: Users,
        image: '/images/research.jpg',
      },
      {
        title: { ar: 'ترجمة لتصميم', en: 'Design Translation' },
        body: {
          ar: 'نأخذ ما تعلمناه ونحوله إلى تصميمات واجهة واضحة: تخطيطات، ألوان، وتفاعلات.',
          en: 'We take what we learned and translate it into clear interface designs: layouts, colors, and interactions.',
        },
        icon: Sparkles,
        image: '/images/design.jpg',
      },
      {
        title: { ar: 'الاختبار والتحسين', en: 'Testing & Iteration' },
        body: {
          ar: 'نختبر مع مستخدمين حقيقيين، نحصل على ملاحظاتهم، ونحسن بناءً على ما نتعلمه.',
          en: 'We test with real users, gather feedback, and improve based on what we learn.',
        },
        icon: CheckCircle,
        image: '/images/testing.jpg',
      },
      {
        title: { ar: 'البناء والإطلاق', en: 'Build & Launch' },
        body: {
          ar: 'ننتقل من التصميم إلى الكود الفعلي مع ضمان أن كل تفصيلة تبدو ممتازة.',
          en: 'We move from design to actual code, ensuring every detail looks and works perfectly.',
        },
        icon: Zap,
      },
    ],
    deliverables: [
      { ar: 'تقرير بحث مستخدمين شامل', en: 'Comprehensive user research report' },
      { ar: 'نموذج أولي تفاعلي (Prototype)', en: 'Interactive prototype' },
      { ar: 'نظام تصميم (Design System)', en: 'Design system for consistency' },
      { ar: 'دليل الاستخدام للمطورين', en: 'Developer guidelines' },
      { ar: 'اختبار المستخدمين والملاحظات', en: 'User testing and feedback' },
    ],
    useCases: [
      { ar: 'تطبيقات ويب وموبايل جديدة', en: 'New web and mobile apps' },
      { ar: 'إعادة تصميم موقع قديم', en: 'Legacy site redesigns' },
      { ar: 'منصات أو لوحات تحكم معقدة', en: 'Complex platforms and dashboards' },
      { ar: 'موقع مبيعات عالي الأداء', en: 'High-performing sales sites' },
    ],
    metrics: [
      {
        value: '40%',
        label: { ar: 'تحسن في رضا المستخدم', en: 'User satisfaction improvement' },
        icon: TrendingUp,
        trend: 'up',
      },
      {
        value: '60%',
        label: { ar: 'تقليل الأخطاء والالتباس', en: 'Reduction in user errors' },
        icon: CheckCircle,
      },
      {
        value: '3.5x',
        label: { ar: 'تحسن في سرعة الإنجاز', en: 'Faster task completion' },
        icon: Zap,
      },
      {
        value: '85%+',
        label: { ar: 'معدل النقر للعمل المطلوب', en: 'CTA click-through rate' },
        icon: BarChart3,
      },
    ],
    features: [
      {
        title: { ar: 'تصميم يركز على المستخدم', en: 'User-centered design' },
        description: { ar: 'كل قرار تصميم يبني على فهم حقيقي لاحتياجات المستخدم', en: 'Every design decision is based on real user needs' },
        icon: Users,
      },
      {
        title: { ar: 'اختبار مستمر', en: 'Continuous testing' },
        description: { ar: 'نختبر قبل، أثناء، وبعد التطوير', en: 'We test before, during, and after development' },
        icon: CheckCircle,
      },
      {
        title: { ar: 'نظام تصميم محكم', en: 'Solid design system' },
        description: { ar: 'ثبات وقابلية توسع في التصميم الكامل', en: 'Consistency and scalability across the entire design' },
        icon: Layers3,
      },
      {
        title: { ar: 'حساس للجوال بالكامل', en: 'Fully responsive' },
        description: { ar: 'تجربة ممتازة على جميع الأجهزة والأحجام', en: 'Great experience on all devices and sizes' },
        icon: Sparkles,
      },
    ],
    comparison: [
      {
        aspect: { ar: 'عملية التطوير', en: 'Development process' },
        before: { ar: 'تصميم ثم بناء', en: 'Design then build' },
        after: { ar: 'بحث، ثم تصميم، ثم اختبار، ثم بناء', en: 'Research, design, test, then build' },
      },
      {
        aspect: { ar: 'جودة النتيجة', en: 'Quality' },
        before: { ar: 'جميل لكن قد لا يعمل جيداً', en: 'Looks nice but might not work well' },
        after: { ar: 'جميل وسهل الاستخدام', en: 'Beautiful and easy to use' },
      },
      {
        aspect: { ar: 'التعديلات لاحقاً', en: 'Later changes' },
        before: { ar: 'إعادة كتابة كاملة', en: 'Complete rewrites' },
        after: { ar: 'تحديثات صغيرة بناءً على أساس متين', en: 'Small updates from a solid foundation' },
      },
    ],
    faq: [
      {
        question: { ar: 'هل أحتاج مستخدمين للاختبار؟', en: 'Do I need users for testing?' },
        answer: {
          ar: 'نعم، لكننا نساعدك نجدهم. اختبار مع 5-10 مستخدمين حقيقيين يكشف 85% من المشاكل.',
          en: 'Yes, but we help you find them. Testing with 5-10 real users uncovers 85% of issues.',
        },
      },
      {
        question: { ar: 'كم الوقت يأخذ؟', en: 'How long does this take?' },
        answer: {
          ar: 'من 4 إلى 12 أسبوع حسب حجم المشروع والتعقيد. أفضل أن نأخذ وقتاً من أن نتسرع.',
          en: '4 to 12 weeks depending on project size and complexity. Better to take time than rush.',
        },
      },
      {
        question: { ar: 'هل يمكن تغييرها لاحقاً؟', en: 'Can we change it later?' },
        answer: {
          ar: 'بالتأكيد! بنينا نظام تصميم يسهل التحديث والتطوير بدون خسارة الثبات.',
          en: 'Absolutely! We build a design system that makes updates easy without losing consistency.',
        },
      },
    ],
    cta: {
      ar: 'لنبدأ برحلة فهم مستخدميك وبناء تجربة تستحقها.',
      en: 'Let\'s start a journey understanding your users and building the experience they deserve.',
    },
    accent: 'from-emerald-400/16 via-teal-500/8 to-transparent',
  },
};

const serviceCopy = (ar: string, en: string) => ({ ar, en });
type ServiceCopy = ReturnType<typeof serviceCopy>;

const makeServicePage = (
  slug: string,
  eyebrow: ReturnType<typeof serviceCopy>,
  title: ReturnType<typeof serviceCopy>,
  summary: ReturnType<typeof serviceCopy>,
  accent: string,
): EnhancedDetailPageContent => ({
  slug,
  parentPath: '/services',
  parentLabel: serviceCopy('الخدمات', 'Services'),
  eyebrow,
  title,
  summary,
  audience: serviceCopy(
    'مناسبة للمشاريع التي تحتاج صفحة أو نظام يشرح القيمة بوضوح، ويعرض التفاصيل بعمق، ويجعل قرار التواصل أسهل.',
    'Best for projects that need a page or system that explains value clearly, shows depth, and makes contact easier.',
  ),
  promise: serviceCopy(
    'نحوّل الخدمة إلى تجربة قرار كاملة: وعد واضح، مراحل تنفيذ، مخرجات، أمثلة، أسئلة، وقائمة فحص قبل الإطلاق.',
    'We turn the service into a complete decision experience: promise, stages, deliverables, examples, questions, and launch checklist.',
  ),
  sections: [
    {
      title: serviceCopy('تشخيص الاحتياج', 'Need diagnosis'),
      body: serviceCopy(
        'نبدأ بفهم الجمهور والهدف التجاري والاعتراضات التي تمنع الزائر من التواصل أو الشراء أو طلب عرض.',
        'We start by understanding the audience, business goal, and objections that stop visitors from contacting, buying, or requesting a quote.',
      ),
      icon: Target,
    },
    {
      title: serviceCopy('تصميم المسار', 'Journey design'),
      body: serviceCopy(
        'نرتب الصفحة أو النظام كمسار قراءة واستخدام، بحيث ينتقل الزائر من الفهم إلى الثقة ثم الإجراء.',
        'We structure the page or system as a reading and usage path, moving visitors from understanding to trust to action.',
      ),
      icon: Layers3,
    },
    {
      title: serviceCopy('تنفيذ قابل للقياس', 'Measurable build'),
      body: serviceCopy(
        'ننفذ الواجهة والمحتوى والحالات التفاعلية بطريقة قابلة للمراجعة والقياس والتحسين بعد الإطلاق.',
        'We build interface, content, and interaction states in a way that can be reviewed, measured, and improved after launch.',
      ),
      icon: Zap,
    },
    {
      title: serviceCopy('تسليم وتطوير', 'Handoff and growth'),
      body: serviceCopy(
        'نجهز الملفات والروابط والملاحظات الفنية حتى لا يتوقف المشروع عند النشر، بل يصبح قابلاً للتوسع.',
        'We prepare files, links, and technical notes so the project does not stop at launch and remains scalable.',
      ),
      icon: CheckCircle,
    },
  ],
  deliverables: [
    serviceCopy('خريطة صفحات ومحتوى مفصلة', 'Detailed page and content map'),
    serviceCopy('Hero احترافي بخلفية صورة أو فيديو', 'Professional media-backed hero'),
    serviceCopy('أقسام مقارنة ومراحل وأسئلة', 'Comparison, stages, and FAQ sections'),
    serviceCopy('مكونات responsive للديسكتوب والموبايل', 'Responsive desktop and mobile components'),
    serviceCopy('قائمة فحص قبل الإطلاق والتحسين', 'Pre-launch and optimization checklist'),
  ],
  useCases: [
    serviceCopy('شركة تريد حضوراً أكبر وأكثر ثقة', 'A company that needs a larger, more trusted presence'),
    serviceCopy('خدمة تحتاج شرحاً عميقاً قبل البيع', 'A service that needs deeper explanation before selling'),
    serviceCopy('منتج أو نظام يحتاج تجربة استخدام واضحة', 'A product or system that needs a clear usage experience'),
    serviceCopy('حملة تحتاج صفحة تقنع بسرعة', 'A campaign that needs a page that convinces quickly'),
  ],
  metrics: [
    { value: '8+', label: serviceCopy('أقسام تفصيلية متوقعة', 'expected detailed sections'), icon: Layers3 },
    { value: '5', label: serviceCopy('مخرجات قابلة للتسليم', 'deliverable outputs'), icon: CheckCircle },
    { value: '3', label: serviceCopy('طبقات ثقة قبل التواصل', 'trust layers before contact'), icon: Shield },
    { value: '0', label: serviceCopy('فراغات بلا وظيفة', 'empty gaps without purpose'), icon: Gauge },
  ],
  features: [
    { title: serviceCopy('محتوى عميق بلا حشو', 'Deep content without filler'), description: serviceCopy('كل كتلة تشرح قراراً أو اعتراضاً أو نتيجة.', 'Every block explains a decision, objection, or outcome.'), icon: Sparkles },
    { title: serviceCopy('تجربة موبايل مريحة', 'Comfortable mobile experience'), description: serviceCopy('الأقسام تعاد قراءتها كرحلة قصيرة لا كصفحة مضغوطة.', 'Sections read like a short journey, not a squeezed desktop page.'), icon: Gauge },
    { title: serviceCopy('إثبات قبل CTA', 'Proof before CTA'), description: serviceCopy('الأرقام والمقارنات تظهر قبل طلب التواصل.', 'Metrics and comparisons appear before asking for contact.'), icon: Shield },
  ],
  comparison: [
    { aspect: serviceCopy('الشكل', 'Visual structure'), before: serviceCopy('كارت كبير ونص قصير', 'Large card and short copy'), after: serviceCopy('خلفية كبيرة ونص واضح فوقها', 'Large backdrop with clear copy over it') },
    { aspect: serviceCopy('المحتوى', 'Content'), before: serviceCopy('وصف عام للخدمة', 'Generic service description'), after: serviceCopy('مراحل ومخرجات وأسئلة وسيناريوهات', 'Stages, outputs, questions, and scenarios') },
    { aspect: serviceCopy('القرار', 'Decision'), before: serviceCopy('الزائر لا يعرف الخطوة التالية', 'Visitor does not know the next step'), after: serviceCopy('كل قسم يقربه من إجراء واضح', 'Every section moves them toward a clear action') },
  ],
  timeline: [
    { phase: '01', title: serviceCopy('تحديد النطاق', 'Scope definition'), body: serviceCopy('نحدد نوع الصفحة أو النظام وحجم التفاصيل المطلوبة.', 'We define the page or system type and required depth.') },
    { phase: '02', title: serviceCopy('هندسة المحتوى', 'Content architecture'), body: serviceCopy('نرتب الرسائل والمخرجات حسب رحلة الزائر.', 'We order messages and outputs around the visitor journey.') },
    { phase: '03', title: serviceCopy('تصميم وتنفيذ', 'Design and build'), body: serviceCopy('ننفذ الهيرو والأقسام والتفاعل والاستجابة للموبايل.', 'We build hero, sections, interaction, and mobile responsiveness.') },
    { phase: '04', title: serviceCopy('اختبار وتسليم', 'Test and handoff'), body: serviceCopy('نراجع القراءة والروابط والأداء قبل التسليم.', 'We review readability, links, and performance before handoff.') },
  ],
  decisionMatrix: [
    { label: serviceCopy('لو الهدف ثقة', 'If the goal is trust'), value: serviceCopy('نزيد أدلة ومقارنات', 'Add proof and comparisons'), note: serviceCopy('الشهادة، الرقم، قبل/بعد، والأسئلة تكون قريبة من CTA.', 'Testimonials, numbers, before/after, and questions stay near CTA.') },
    { label: serviceCopy('لو الهدف بيع', 'If the goal is sales'), value: serviceCopy('نوضح العرض والاعتراضات', 'Clarify offer and objections'), note: serviceCopy('نرتب القيمة والضمانات ومراحل الشراء بوضوح.', 'We order value, guarantees, and buying stages clearly.') },
    { label: serviceCopy('لو الهدف تشغيل', 'If the goal is operation'), value: serviceCopy('نركز على الحالات والتدفقات', 'Focus on states and flows'), note: serviceCopy('نصمم الأدوار والفلاتر والحالات الفارغة والأخطاء.', 'We design roles, filters, empty states, and errors.') },
  ],
  scenarios: [
    { title: serviceCopy('زائر سريع', 'Fast visitor'), body: serviceCopy('يحتاج فهم الوعد والمخرجات خلال ثواني.', 'Needs to understand promise and outputs within seconds.') },
    { title: serviceCopy('عميل متردد', 'Hesitant client'), body: serviceCopy('يحتاج إجابات ومقارنات قبل أن يرسل رسالة.', 'Needs answers and comparisons before sending a message.') },
    { title: serviceCopy('فريق تنفيذي', 'Execution team'), body: serviceCopy('يحتاج مراحل ومواصفات واضحة قبل البدء.', 'Needs clear stages and specs before starting.') },
  ],
  toolsDeliverables: [
    { name: serviceCopy('Service blueprint', 'Service blueprint'), description: serviceCopy('خريطة لكل شاشة أو قسم ودوره في القرار.', 'A map for every screen or section and its decision role.'), impact: serviceCopy('تقلل التكرار وتوضح الأولويات.', 'Reduces repetition and clarifies priorities.') },
    { name: serviceCopy('Responsive audit', 'Responsive audit'), description: serviceCopy('مراجعة القراءة والتفاعل على الديسكتوب والموبايل.', 'Review of reading and interaction on desktop and mobile.'), impact: serviceCopy('تمنع التداخل والفراغات الكبيرة.', 'Prevents overlap and large gaps.') },
    { name: serviceCopy('Launch checklist', 'Launch checklist'), description: serviceCopy('قائمة قبل النشر تشمل الأداء والروابط والمحتوى.', 'A pre-publish list covering performance, links, and content.'), impact: serviceCopy('تجعل التسليم أكثر ثقة.', 'Makes handoff more trustworthy.') },
  ],
  checklist: [
    { item: serviceCopy('الهيرو واضح فوق خلفية مناسبة', 'Hero is clear over suitable media'), details: serviceCopy('الصورة أو الفيديو يخدم الخدمة ولا يزاحم النص.', 'The image or video supports the service without fighting the copy.') },
    { item: serviceCopy('كل قسم له وظيفة قرار', 'Every section has a decision job'), details: serviceCopy('لا نضيف تفاصيل لأنها جميلة فقط، بل لأنها تجيب سؤالاً.', 'We do not add details because they look nice, but because they answer a question.') },
    { item: serviceCopy('الموبايل لا يكرر زحمة الديسكتوب', 'Mobile does not copy desktop clutter'), details: serviceCopy('الأولوية يعاد ترتيبها للشاشة الصغيرة.', 'Priority is reordered for the small screen.') },
  ],
  faq: [
    { question: serviceCopy('هل الخدمة تحتاج كل هذا العمق؟', 'Does the service need this much depth?'), answer: serviceCopy('نعم عندما يكون القرار مكلفاً أو يحتاج ثقة. العمق المنظم يقلل الأسئلة المتكررة ويجعل التواصل أنضج.', 'Yes when the decision is valuable or trust-heavy. Structured depth reduces repeated questions and makes contact more mature.') },
    { question: serviceCopy('هل يمكن البدء بنسخة أصغر؟', 'Can we start smaller?'), answer: serviceCopy('نعم، لكن البنية تظل قابلة للتوسع حتى نضيف صفحات أو أقسام لاحقاً بدون إعادة بناء كاملة.', 'Yes, but the structure remains expandable so pages or sections can be added later without a full rebuild.') },
    { question: serviceCopy('ما الفرق عن قالب جاهز؟', 'How is this different from a template?'), answer: serviceCopy('القالب يبدأ بالشكل. هنا نبدأ بالقرار، ثم نبني الشكل حول الرسائل والمخرجات المطلوبة.', 'A template starts with appearance. Here we start with the decision, then build the appearance around messages and outputs.') },
  ],
  cta: serviceCopy('رتّب brief هذه الخدمة', 'Organize a brief for this service'),
  accent,
});

enhancedServicePages['ui-ux'] = enhancedServicePages.uiux;

Object.assign(enhancedServicePages, {
  'company-websites': makeServicePage(
    'company-websites',
    serviceCopy('مواقع الشركات', 'Company websites'),
    serviceCopy('موقع شركة كبير يشرح الخدمات ويبني الثقة من أول شاشة', 'A substantial company website that explains services and builds trust from the first screen'),
    serviceCopy('نحوّل موقع الشركة من تعريف مختصر إلى نظام صفحات يشرح الرسالة والخدمات والأدلة والأسئلة وخطوة التواصل.', 'We turn a company site from a short profile into a page system covering message, services, proof, questions, and contact.'),
    'from-cyan-400/16 via-sky-500/8 to-transparent',
  ),
  ecommerce: makeServicePage(
    'ecommerce',
    serviceCopy('المتاجر الإلكترونية', 'E-commerce'),
    serviceCopy('متجر يقود العميل من الاكتشاف إلى الشراء بثقة', 'A store that guides customers from discovery to purchase with trust'),
    serviceCopy('نرتب التصنيفات والمنتجات والسلة والدفع ورسائل ما بعد الشراء كرحلة واحدة واضحة.', 'We arrange categories, products, cart, checkout, and post-purchase messaging as one clear journey.'),
    'from-amber-400/16 via-orange-500/8 to-transparent',
  ),
  'custom-systems': makeServicePage(
    'custom-systems',
    serviceCopy('الأنظمة المخصصة', 'Custom systems'),
    serviceCopy('نظام مخصص يحول التعقيد الداخلي إلى واجهة مفهومة', 'A custom system that turns internal complexity into a readable interface'),
    serviceCopy('نصمم الأدوار والحالات والتدفقات والداشبوردات حتى يعرف كل مستخدم ما يجب فعله.', 'We design roles, states, flows, and dashboards so every user knows what to do.'),
    'from-emerald-400/16 via-teal-500/8 to-transparent',
  ),
  'ai-products': makeServicePage(
    'ai-products',
    serviceCopy('منتجات AI', 'AI products'),
    serviceCopy('تجارب AI مفهومة وآمنة بدل أزرار غامضة', 'Understandable and safe AI experiences instead of mysterious buttons'),
    serviceCopy('نضع حدود الثقة، حالات الخطأ، شرح النتائج، ومراحل الاستخدام حتى لا يبدو AI كخدعة مبهمة.', 'We add trust boundaries, error states, result explanation, and usage stages so AI does not feel like a vague trick.'),
    'from-violet-400/16 via-cyan-500/8 to-transparent',
  ),
  'landing-pages': makeServicePage(
    'landing-pages',
    serviceCopy('صفحات الهبوط', 'Landing pages'),
    serviceCopy('صفحة هبوط طويلة تقنع بدون ضغط', 'A long landing page that persuades without pressure'),
    serviceCopy('نصمم صفحة الحملة كرحلة من الوعد إلى الدليل ثم الاعتراضات والـ CTA.', 'We design the campaign page as a journey from promise to proof, objections, and CTA.'),
    'from-rose-400/16 via-amber-500/8 to-transparent',
  ),
  'brand-content': makeServicePage(
    'brand-content',
    serviceCopy('الهوية والمحتوى', 'Brand and content'),
    serviceCopy('رسائل وهوية لفظية تجعل كل صفحة تقول شيئاً واضحاً', 'Messaging and verbal identity that make every page say something clear'),
    serviceCopy('نحدد النبرة والرسائل والترتيب حتى لا يبدو الموقع ككلمات جميلة متفرقة.', 'We define tone, messages, and order so the site does not feel like scattered polished words.'),
    'from-fuchsia-400/14 via-cyan-500/8 to-transparent',
  ),
  'web-apps': makeServicePage(
    'web-apps',
    serviceCopy('تطبيقات الويب', 'Web apps'),
    serviceCopy('تطبيق ويب واضح للحالات والتدفقات اليومية', 'A clear web app for daily states and flows'),
    serviceCopy('نحوّل الوظائف إلى شاشات وحالات ورسائل استخدام تجعل التجربة مفهومة وقابلة للتوسع.', 'We turn features into screens, states, and usage messages that make the experience clear and scalable.'),
    'from-emerald-400/14 via-sky-500/8 to-transparent',
  ),
  dashboards: makeServicePage(
    'dashboards',
    serviceCopy('لوحات التحكم', 'Dashboards'),
    serviceCopy('داشبورد يساعد المستخدم يفهم الرقم ويتصرف بعده', 'A dashboard that helps users understand the number and act on it'),
    serviceCopy('نصمم الفلاتر، الكروت، الحالات، والتنبيهات كأدوات قرار لا كزحمة بيانات.', 'We design filters, cards, states, and alerts as decision tools, not data clutter.'),
    'from-blue-400/14 via-emerald-500/8 to-transparent',
  ),
  maintenance: makeServicePage(
    'maintenance',
    serviceCopy('الصيانة والتحسين', 'Maintenance and optimization'),
    serviceCopy('تحسين مستمر يحافظ على الموقع بعد الإطلاق', 'Continuous improvement that keeps the site healthy after launch'),
    serviceCopy('نراجع الأداء والروابط والمحتوى والأقسام الجديدة حتى لا يتحول الموقع إلى نسخة قديمة.', 'We review performance, links, content, and new sections so the site does not become outdated.'),
    'from-teal-400/14 via-amber-500/8 to-transparent',
  ),
  consultation: makeServicePage(
    'consultation',
    serviceCopy('استشارة رقمية', 'Digital consultation'),
    serviceCopy('جلسة قرار ترتب الفكرة قبل التنفيذ', 'A decision session that organizes the idea before execution'),
    serviceCopy('نحدد المسار الأنسب، الأولويات، المخاطر، والتفاصيل التي تستحق التنفيذ أولاً.', 'We define the best path, priorities, risks, and the details worth building first.'),
    'from-cyan-400/14 via-violet-500/8 to-transparent',
  ),
});

Object.assign(
  enhancedServicePages,
  Object.fromEntries(
    serviceLibrary.map((service) => [
      service.slug,
      {
        ...makeServicePage(
          service.slug,
          service.eyebrow,
          service.title,
          service.summary,
          service.accent,
        ),
        audience: service.bestFor,
        promise: service.promise,
        deliverables: [
          ...service.deliverables,
          serviceCopy('خريطة قرار ومراحل تنفيذ مخصصة لهذه الخدمة', 'A decision map and delivery stages tailored to this service'),
          serviceCopy('مراجعة responsive وأداء قبل التسليم', 'Responsive and performance review before handoff'),
        ],
        useCases: service.useCases,
        metrics: [
          { value: '3+', label: serviceCopy('مخرجات أساسية', 'core deliverables'), icon: CheckCircle },
          { value: '4', label: serviceCopy('مراحل تنفيذ واضحة', 'clear delivery stages'), icon: Layers3 },
          { value: '7', label: serviceCopy('عائلات خدمات مترابطة', 'connected service families'), icon: BarChart3 },
          { value: '30', label: serviceCopy('خدمة قابلة للتفصيل', 'detailed service tracks'), icon: Target },
        ],
        features: [
          {
            title: serviceCopy('محتوى خاص بالخدمة', 'Service-specific content'),
            description: service.summary,
            icon: Sparkles,
          },
          {
            title: serviceCopy('مخرجات قابلة للتسليم', 'Deliverable outputs'),
            description: serviceCopy(
              service.deliverables.map((item) => item.ar).join('، '),
              service.deliverables.map((item) => item.en).join(', '),
            ),
            icon: CheckCircle,
          },
          {
            title: serviceCopy('سيناريوهات استخدام واضحة', 'Clear use scenarios'),
            description: serviceCopy(
              service.useCases.map((item) => item.ar).join('، '),
              service.useCases.map((item) => item.en).join(', '),
            ),
            icon: Target,
          },
        ],
        toolsDeliverables: service.deliverables.map((deliverable) => ({
          name: deliverable,
          description: serviceCopy(
            `يتم تسليم ${deliverable.ar} كجزء واضح من نطاق ${service.eyebrow.ar}.`,
            `${deliverable.en} is delivered as a clear part of the ${service.eyebrow.en} scope.`,
          ),
          impact: serviceCopy(
            'يجعل التوقعات أوضح ويقلل التعديلات العشوائية.',
            'Makes expectations clearer and reduces random changes.',
          ),
        })),
        checklist: [
          {
            item: serviceCopy('الهدف والجمهور محددان قبل التصميم', 'Goal and audience are defined before design'),
            details: service.bestFor,
          },
          {
            item: serviceCopy('المخرجات مكتوبة قبل التنفيذ', 'Deliverables are written before execution'),
            details: service.promise,
          },
          {
            item: serviceCopy('الصفحة أو النظام قابل للقياس بعد الإطلاق', 'The page or system is measurable after launch'),
            details: serviceCopy(
              'نراجع الروابط، الأحداث، الأداء، والنسخة النهائية قبل التسليم.',
              'We review links, events, performance, and final copy before handoff.',
            ),
          },
        ],
        cta: serviceCopy(`رتّب brief خدمة ${service.eyebrow.ar}`, `Organize a ${service.eyebrow.en} brief`),
      },
    ]),
  ),
);

type DeepServiceSpec = {
  operatingModel: ServiceCopy;
  systemModules: ServiceCopy;
  clientInputs: ServiceCopy;
  deliveryFlow: ServiceCopy;
  qualityChecks: ServiceCopy;
  objections: ServiceCopy;
  successSignals: ServiceCopy;
  scenarioOne: ServiceCopy;
  scenarioTwo: ServiceCopy;
  scenarioThree: ServiceCopy;
  decisionOne: ServiceCopy;
  decisionTwo: ServiceCopy;
  decisionThree: ServiceCopy;
};

const deepServiceSpecs: Record<string, DeepServiceSpec> = {
  'company-websites': {
    operatingModel: serviceCopy('نظام حضور رسمي يربط التعريف بالشركة بالخدمات والدليل وطريقة التواصل.', 'An official presence system connecting company positioning, services, proof, and contact paths.'),
    systemModules: serviceCopy('هيكل صفحات، رسائل ثقة، أقسام خدمات، أسئلة قرار، ونقاط تواصل واضحة.', 'Page structure, trust messages, service sections, decision questions, and clear contact points.'),
    clientInputs: serviceCopy('نبذة الشركة، الخدمات الأساسية، أمثلة أعمال، أسئلة العملاء المتكررة، ونبرة البراند.', 'Company profile, core services, work examples, recurring client questions, and brand tone.'),
    deliveryFlow: serviceCopy('نبدأ بالخريطة، ثم نصمم الهيرو والخدمات والأدلة، وبعدها نراجع الموبايل والروابط.', 'We start with the map, then design hero, services, proof, and review mobile and links.'),
    qualityChecks: serviceCopy('وضوح أول شاشة، سهولة الوصول للخدمات، اتساق الرسائل، وسرعة تحميل الصفحات.', 'First-screen clarity, service discoverability, message consistency, and page speed.'),
    objections: serviceCopy('الشركة تبدو عامة، الخدمات غير مفهومة، أو الزائر لا يعرف لماذا يتواصل الآن.', 'The company feels generic, services are unclear, or visitors do not know why to contact now.'),
    successSignals: serviceCopy('زيادة الرسائل المؤهلة، استخدام الموقع كمرجع مبيعات، وانخفاض الأسئلة التمهيدية المتكررة.', 'More qualified enquiries, sales team using the site as a reference, and fewer repeated starter questions.'),
    scenarioOne: serviceCopy('عميل B2B يقارن بين أكثر من شركة ويحتاج دليل ثقة قبل التواصل.', 'A B2B client compares vendors and needs trust proof before reaching out.'),
    scenarioTwo: serviceCopy('فريق مبيعات يحتاج رابطًا رسميًا يشرح الخدمات بدل إرسال ملفات متفرقة.', 'A sales team needs one official link instead of scattered files.'),
    scenarioThree: serviceCopy('شركة توسع نشاطها وتحتاج إعادة ترتيب رسالتها وخدماتها في موقع واحد.', 'A company expanding its offering needs one organized message and service hub.'),
    decisionOne: serviceCopy('لو الخدمات كثيرة', 'If services are many'),
    decisionTwo: serviceCopy('لو الثقة ضعيفة', 'If trust is weak'),
    decisionThree: serviceCopy('لو التواصل قليل', 'If enquiries are low'),
  },
  'landing-pages': {
    operatingModel: serviceCopy('نظام حملة يبدأ بوعد واضح ثم يمر على الإثبات والاعتراضات قبل CTA.', 'A campaign system that starts with a clear promise, then proof, objections, and CTA.'),
    systemModules: serviceCopy('Hero للحملة، عرض الفائدة، إثبات سريع، اعتراضات، CTA متكرر، ونموذج مختصر.', 'Campaign hero, value offer, quick proof, objections, repeated CTA, and a short form.'),
    clientInputs: serviceCopy('هدف الحملة، مصدر الزيارات، العرض الأساسي، اعتراضات الجمهور، ورسالة CTA.', 'Campaign goal, traffic source, core offer, audience objections, and CTA message.'),
    deliveryFlow: serviceCopy('نرتب رحلة القراءة حسب حرارة الزائر ثم نختبر وضوح القرار على الموبايل.', 'We order the reading journey by visitor intent and test decision clarity on mobile.'),
    qualityChecks: serviceCopy('تطابق الإعلان مع الهيرو، سرعة الفهم، وضوح النموذج، وعدم وجود مشتتات.', 'Ad-to-hero match, fast comprehension, clear form, and no distractions.'),
    objections: serviceCopy('الزائر ينقر ثم يخرج لأن الصفحة لا تشرح العرض بسرعة أو لا تجيب خوفه.', 'Visitors click then leave because the page does not explain the offer or reduce fear quickly.'),
    successSignals: serviceCopy('ارتفاع إكمال النماذج، وقت قراءة أفضل، ونقرات CTA أكثر من أول زيارة.', 'Higher form completion, better read depth, and more CTA clicks from the first visit.'),
    scenarioOne: serviceCopy('حملة إعلانية تحتاج صفحة تقفل الاعتراضات قبل النموذج.', 'An ad campaign needs a page that handles objections before the form.'),
    scenarioTwo: serviceCopy('إطلاق خدمة جديدة يحتاج شرحًا سريعًا بدل صفحة خدمات عامة.', 'A new service launch needs focused explanation instead of a generic service page.'),
    scenarioThree: serviceCopy('عرض موسمي يحتاج مسارًا قصيرًا وواضحًا للقرار.', 'A seasonal offer needs a short and clear decision path.'),
    decisionOne: serviceCopy('لو الزيارات لا تتحول', 'If traffic does not convert'),
    decisionTwo: serviceCopy('لو العرض يحتاج شرح', 'If the offer needs explanation'),
    decisionThree: serviceCopy('لو النموذج طويل', 'If the form feels heavy'),
  },
  'service-pages': {
    operatingModel: serviceCopy('نظام صفحات يشرح كل خدمة كقرار مستقل وليس كاسم داخل قائمة.', 'A page system that explains each service as a decision, not just a name in a list.'),
    systemModules: serviceCopy('وعد الخدمة، لمن تناسب، المخرجات، الحالات، المقارنة، الأسئلة، وروابط خدمات قريبة.', 'Service promise, best-fit audience, outputs, use cases, comparison, FAQ, and related links.'),
    clientInputs: serviceCopy('قائمة الخدمات، أسئلة العملاء، نقاط الفرق، أمثلة النتائج، وأولوية كل خدمة.', 'Service list, customer questions, differentiators, result examples, and priority per service.'),
    deliveryFlow: serviceCopy('نصنف الخدمات ثم نبني قالب قرار متغير لكل صفحة حسب نية الزائر.', 'We classify services, then build a decision layout that changes by visitor intent.'),
    qualityChecks: serviceCopy('عدم تكرار الوصف، وضوح الفرق بين الخدمات، وربط كل صفحة بخطوة تواصل مناسبة.', 'No repeated descriptions, clear differences between services, and a suitable contact path per page.'),
    objections: serviceCopy('الزائر يرى خدمات كثيرة لكنه لا يفهم أي خدمة تناسب احتياجه.', 'Visitors see many services but do not know which one fits their need.'),
    successSignals: serviceCopy('دخول مباشر لصفحات خدمات محددة، رسائل أكثر نضجًا، وتحسن فهم نطاق العمل.', 'More visits to specific service pages, more mature enquiries, and clearer scope discussions.'),
    scenarioOne: serviceCopy('شركة عندها خدمات متعددة وتحتاج شرح كل مسار بعمق.', 'A company with many services needs each track explained deeply.'),
    scenarioTwo: serviceCopy('زائر قادم من البحث يريد خدمة محددة لا صفحة خدمات عامة.', 'A search visitor wants a specific service, not a generic services page.'),
    scenarioThree: serviceCopy('فريق مبيعات يحتاج روابط منفصلة لكل خدمة أثناء التفاوض.', 'A sales team needs separate service links during discussions.'),
    decisionOne: serviceCopy('لو الخدمات متشابهة', 'If services feel similar'),
    decisionTwo: serviceCopy('لو SEO مهم', 'If SEO matters'),
    decisionThree: serviceCopy('لو العميل محتار', 'If clients are unsure'),
  },
  ecommerce: {
    operatingModel: serviceCopy('نظام متجر يربط التصنيفات بالمنتجات والسلة والدفع ورسائل ما بعد الشراء.', 'A store system connecting categories, products, cart, checkout, and post-purchase messages.'),
    systemModules: serviceCopy('تصنيفات، فلاتر، صفحات منتج، سلة، دفع، حساب عميل، ورسائل ثقة.', 'Categories, filters, product pages, cart, checkout, customer account, and trust messages.'),
    clientInputs: serviceCopy('أنواع المنتجات، صورها، طريقة الشحن، الضمانات، سياسات الاسترجاع، وأدوات التشغيل.', 'Product types, imagery, shipping method, guarantees, return policies, and operating tools.'),
    deliveryFlow: serviceCopy('نبني رحلة شراء من الاكتشاف إلى الدفع ثم نراجع نقاط الهروب في كل خطوة.', 'We build the buying journey from discovery to checkout and review drop-off points at every step.'),
    qualityChecks: serviceCopy('وضوح المنتج، سرعة الفلاتر، سهولة السلة، طمأنة الدفع، وعمل الموبايل.', 'Product clarity, filter speed, cart ease, checkout reassurance, and mobile usability.'),
    objections: serviceCopy('العميل يتردد بسبب صور غير كافية أو شحن غامض أو خطوات دفع طويلة.', 'Customers hesitate because images are weak, shipping is unclear, or checkout is too long.'),
    successSignals: serviceCopy('زيادة إضافة المنتجات للسلة، إكمال الطلبات، وانخفاض الأسئلة قبل الشراء.', 'More add-to-cart actions, completed orders, and fewer pre-purchase questions.'),
    scenarioOne: serviceCopy('براند منتجات يحتاج متجر قابل للنمو وليس واجهة عرض فقط.', 'A product brand needs a scalable store, not just a display.'),
    scenarioTwo: serviceCopy('متجر لديه تصنيفات كثيرة ويحتاج بحثًا وفلاتر واضحة.', 'A store has many categories and needs clear search and filters.'),
    scenarioThree: serviceCopy('منتجات تحتاج ضمانات وتفاصيل قبل قرار الشراء.', 'Products need guarantees and details before purchase.'),
    decisionOne: serviceCopy('لو المنتجات كثيرة', 'If products are many'),
    decisionTwo: serviceCopy('لو الدفع يتعطل', 'If checkout struggles'),
    decisionThree: serviceCopy('لو الثقة ناقصة', 'If trust is missing'),
  },
  'product-pages': {
    operatingModel: serviceCopy('نظام صفحة منتج يشرح الفائدة والمواصفات والاختيارات والضمانات بترتيب قرار الشراء.', 'A product page system explaining benefit, specs, variants, and guarantees around the buying decision.'),
    systemModules: serviceCopy('معرض صور، فوائد، مواصفات، مقارنات، أسئلة، ضمانات، وخيارات شراء.', 'Image gallery, benefits, specs, comparisons, questions, guarantees, and buying options.'),
    clientInputs: serviceCopy('مزايا المنتج، الصور، المواصفات، الاعتراضات، سياسة الضمان، والأسئلة المتكررة.', 'Product benefits, imagery, specifications, objections, guarantee policy, and FAQs.'),
    deliveryFlow: serviceCopy('نرتب الصفحة من الفائدة العامة إلى التفاصيل الدقيقة ثم الطمأنة قبل الإجراء.', 'We order the page from broad benefit to precise detail, then reassurance before action.'),
    qualityChecks: serviceCopy('الصورة لا تسبق الفهم، المواصفات قابلة للمقارنة، والضمان قريب من القرار.', 'Images do not replace understanding, specs are comparable, and guarantee is near the decision.'),
    objections: serviceCopy('المشتري لا يعرف الفرق بين الاختيارات أو لا يرى ما يكفي لاتخاذ قرار.', 'Buyers do not understand variants or lack enough detail to decide.'),
    successSignals: serviceCopy('نقرات شراء أعلى، أسئلة أقل عن المواصفات، ومقارنة أسهل بين المنتجات.', 'More buy clicks, fewer spec questions, and easier product comparison.'),
    scenarioOne: serviceCopy('منتج تقني يحتاج شرح استخدام ومواصفات.', 'A technical product needs usage and specification explanation.'),
    scenarioTwo: serviceCopy('منتج له مقاسات أو اختيارات كثيرة.', 'A product has many sizes or variants.'),
    scenarioThree: serviceCopy('منتج يحتاج إثبات جودة قبل الشراء.', 'A product needs quality proof before purchase.'),
    decisionOne: serviceCopy('لو المواصفات مهمة', 'If specs matter'),
    decisionTwo: serviceCopy('لو الصور لا تكفي', 'If images are not enough'),
    decisionThree: serviceCopy('لو المقارنة صعبة', 'If comparison is hard'),
  },
  'checkout-optimization': {
    operatingModel: serviceCopy('نظام تحسين دفع يزيل الاحتكاك من السلة حتى تأكيد الطلب.', 'A checkout improvement system that removes friction from cart to order confirmation.'),
    systemModules: serviceCopy('سلة، بيانات عميل، شحن، دفع، أخطاء، رسائل طمأنة، وتأكيد نهائي.', 'Cart, customer data, shipping, payment, errors, reassurance messages, and confirmation.'),
    clientInputs: serviceCopy('بيانات السلات المتروكة، طرق الدفع، سياسة الشحن، خطوات الطلب، ورسائل الخطأ.', 'Abandoned cart data, payment methods, shipping policy, order steps, and error messages.'),
    deliveryFlow: serviceCopy('نراجع كل خطوة ونحذف الاحتكاك ثم نوضح الرسائل التي تمنع التردد.', 'We review every step, remove friction, and clarify messages that reduce hesitation.'),
    qualityChecks: serviceCopy('عدد الحقول، وضوح الشحن، ظهور الأخطاء، سهولة الرجوع، وأمان الدفع.', 'Field count, shipping clarity, error display, backtracking ease, and payment reassurance.'),
    objections: serviceCopy('المشتري وصل للنهاية لكنه توقف بسبب خطوة مربكة أو مفاجأة غير واضحة.', 'The buyer reaches the end but stops because a step is confusing or surprising.'),
    successSignals: serviceCopy('انخفاض السلات المتروكة، زيادة إتمام الطلب، وتقليل رسائل الدعم أثناء الدفع.', 'Lower cart abandonment, more completed orders, and fewer support messages during checkout.'),
    scenarioOne: serviceCopy('مستخدم موبايل يريد إنهاء الطلب بسرعة.', 'A mobile user wants to finish the order quickly.'),
    scenarioTwo: serviceCopy('عميل يتوقف عند الشحن أو الدفع.', 'A customer stops at shipping or payment.'),
    scenarioThree: serviceCopy('متجر لديه أخطاء دفع متكررة أو رسائل غير واضحة.', 'A store has recurring payment errors or unclear messages.'),
    decisionOne: serviceCopy('لو السلة تترك كثيرًا', 'If carts are abandoned'),
    decisionTwo: serviceCopy('لو الخطوات طويلة', 'If steps are long'),
    decisionThree: serviceCopy('لو الأخطاء غامضة', 'If errors are vague'),
  },
  'web-apps': {
    operatingModel: serviceCopy('نظام تطبيق ويب يحول الوظائف إلى شاشات وحالات وتدفقات يومية مفهومة.', 'A web app system turning features into understandable screens, states, and daily flows.'),
    systemModules: serviceCopy('تسجيل دخول، أدوار، لوحة مستخدم، إجراءات، حالات فارغة، أخطاء، وتقارير.', 'Authentication, roles, user dashboard, actions, empty states, errors, and reports.'),
    clientInputs: serviceCopy('أدوار المستخدمين، العمليات اليومية، البيانات المطلوبة، الصلاحيات، وحالات الخطأ.', 'User roles, daily operations, required data, permissions, and error states.'),
    deliveryFlow: serviceCopy('نبدأ بتدفق الاستخدام ثم نحول كل وظيفة لشاشة لها حالة وقرار واضح.', 'We start with user flow, then turn each feature into a screen with a clear state and decision.'),
    qualityChecks: serviceCopy('وضوح الحالات، سرعة الإجراء، حماية الأخطاء، ومناسبة الواجهة للاستخدام اليومي.', 'State clarity, action speed, error handling, and daily usability.'),
    objections: serviceCopy('الفكرة موجودة لكن المستخدم لا يعرف ماذا يفعل بعد الدخول.', 'The idea exists, but users do not know what to do after logging in.'),
    successSignals: serviceCopy('استخدام يومي مستقر، طلبات دعم أقل، وإكمال أفضل للمهام الأساسية.', 'Stable daily usage, fewer support requests, and better task completion.'),
    scenarioOne: serviceCopy('منصة SaaS تحتاج تجربة مستخدم أولى واضحة.', 'A SaaS platform needs a clear first user experience.'),
    scenarioTwo: serviceCopy('بوابة عملاء تحتاج أدوار وصلاحيات.', 'A client portal needs roles and permissions.'),
    scenarioThree: serviceCopy('أداة تشغيل تحتاج حالات فارغة وأخطاء مفهومة.', 'An operations tool needs clear empty and error states.'),
    decisionOne: serviceCopy('لو عندك أدوار متعددة', 'If roles are multiple'),
    decisionTwo: serviceCopy('لو الاستخدام يومي', 'If usage is daily'),
    decisionThree: serviceCopy('لو الأخطاء حساسة', 'If errors are sensitive'),
  },
  dashboards: {
    operatingModel: serviceCopy('نظام داشبورد يحول البيانات إلى أولويات وقرارات وليس كروت أرقام فقط.', 'A dashboard system turning data into priorities and decisions, not just number cards.'),
    systemModules: serviceCopy('مؤشرات، فلاتر، تنبيهات، مقارنات، تفاصيل، تصدير، وحالات فارغة.', 'KPIs, filters, alerts, comparisons, details, export, and empty states.'),
    clientInputs: serviceCopy('المؤشرات المهمة، مصادر البيانات، أسئلة الإدارة، وتكرار المتابعة.', 'Important indicators, data sources, management questions, and review cadence.'),
    deliveryFlow: serviceCopy('نحدد القرار المطلوب من كل رقم ثم نصمم طريقة قراءته والتصرف بعده.', 'We define the decision behind each number, then design how to read and act on it.'),
    qualityChecks: serviceCopy('كل رقم له معنى، الفلاتر لا تربك، والتنبيهات تقود لإجراء واضح.', 'Every number has meaning, filters do not confuse, and alerts lead to clear action.'),
    objections: serviceCopy('الفريق يرى بيانات كثيرة لكنه لا يعرف ما الأهم اليوم.', 'The team sees many data points but does not know what matters today.'),
    successSignals: serviceCopy('قرارات أسرع، اجتماعات أقصر، واستخدام الداشبورد كمرجع يومي.', 'Faster decisions, shorter meetings, and daily dashboard use.'),
    scenarioOne: serviceCopy('مدير يريد ملخصًا يوميًا بدون فتح تقارير كثيرة.', 'A manager needs a daily summary without opening many reports.'),
    scenarioTwo: serviceCopy('فريق مبيعات يحتاج معرفة الفرص المتأخرة.', 'A sales team needs to spot delayed opportunities.'),
    scenarioThree: serviceCopy('تشغيل يحتاج تنبيه عند تغير مؤشر مهم.', 'Operations need alerts when a key signal changes.'),
    decisionOne: serviceCopy('لو البيانات كثيرة', 'If data is heavy'),
    decisionTwo: serviceCopy('لو القرار غير واضح', 'If the decision is unclear'),
    decisionThree: serviceCopy('لو المتابعة متكررة', 'If review is recurring'),
  },
  'crm-systems': {
    operatingModel: serviceCopy('نظام CRM ينظم مراحل العميل والمسؤوليات والمتابعة من أول تواصل حتى الإغلاق.', 'A CRM system organizing client stages, ownership, and follow-up from first contact to close.'),
    systemModules: serviceCopy('Pipeline، جهات اتصال، مهام، ملاحظات، تنبيهات، ملفات، وتقارير متابعة.', 'Pipeline, contacts, tasks, notes, reminders, files, and follow-up reports.'),
    clientInputs: serviceCopy('مراحل البيع، الفريق، نوع العملاء، نماذج التواصل، ونقاط التسليم.', 'Sales stages, team roles, client types, communication templates, and handoff points.'),
    deliveryFlow: serviceCopy('نرسم رحلة العميل ونحولها إلى مهام وأدوار وتنبيهات لا تضيع.', 'We map the client journey and turn it into tasks, roles, and reminders that do not get lost.'),
    qualityChecks: serviceCopy('كل فرصة لها مالك، كل مرحلة لها شرط خروج، وكل تأخير يظهر بوضوح.', 'Every opportunity has an owner, every stage has an exit rule, and every delay is visible.'),
    objections: serviceCopy('الفرص تضيع لأن المتابعة في رسائل متفرقة أو ملفات غير محدثة.', 'Opportunities are lost because follow-up lives in scattered messages or outdated sheets.'),
    successSignals: serviceCopy('متابعة أسرع، فرص أقل ضياعًا، وتوقع أوضح لحالة العملاء.', 'Faster follow-up, fewer lost opportunities, and clearer client status.'),
    scenarioOne: serviceCopy('فريق مبيعات يحتاج رؤية كل الفرص في مكان واحد.', 'A sales team needs all opportunities in one place.'),
    scenarioTwo: serviceCopy('شركة خدمات تحتاج متابعة ما بعد الاجتماع.', 'A service company needs follow-up after meetings.'),
    scenarioThree: serviceCopy('إدارة تريد معرفة أين تتوقف الصفقات.', 'Management wants to know where deals stall.'),
    decisionOne: serviceCopy('لو المتابعة تضيع', 'If follow-up is lost'),
    decisionTwo: serviceCopy('لو الفريق يكبر', 'If the team is growing'),
    decisionThree: serviceCopy('لو التقارير ضعيفة', 'If reporting is weak'),
  },
  'booking-systems': {
    operatingModel: serviceCopy('نظام حجز يربط المواعيد بالتوافر والتأكيد والتذكير وتجربة العميل.', 'A booking system connecting appointments, availability, confirmation, reminders, and client experience.'),
    systemModules: serviceCopy('تقويم، مواعيد، نماذج بيانات، تأكيد، تذكير، إلغاء، ولوحة إدارة.', 'Calendar, slots, intake forms, confirmation, reminders, cancellation, and admin panel.'),
    clientInputs: serviceCopy('أنواع المواعيد، مدة كل خدمة، الفريق، قواعد الإلغاء، ورسائل التأكيد.', 'Appointment types, service duration, team members, cancellation rules, and confirmation messages.'),
    deliveryFlow: serviceCopy('نصمم الحجز كرحلة قصيرة تقلل الأخطاء وتوضح الخطوة التالية بعد الحجز.', 'We design booking as a short journey that reduces mistakes and clarifies the next step.'),
    qualityChecks: serviceCopy('عدم تضارب المواعيد، وضوح التأكيد، سهولة التعديل، وعمل التذكيرات.', 'No schedule conflicts, clear confirmation, easy changes, and working reminders.'),
    objections: serviceCopy('العميل يريد الحجز لكنه لا يعرف المتاح أو يخاف من عدم تأكيد الموعد.', 'Clients want to book but do not know availability or fear the appointment is not confirmed.'),
    successSignals: serviceCopy('حجوزات أكثر اكتمالًا، غياب أقل، ورسائل استفسار أقل عن المواعيد.', 'More completed bookings, fewer no-shows, and fewer appointment questions.'),
    scenarioOne: serviceCopy('عيادة أو مركز يريد تقليل الاتصالات اليدوية.', 'A clinic or center wants fewer manual calls.'),
    scenarioTwo: serviceCopy('استشارة تحتاج بيانات قبل الموعد.', 'A consultation needs intake data before the meeting.'),
    scenarioThree: serviceCopy('فريق متعدد يحتاج توزيع مواعيد عادل.', 'A multi-person team needs fair slot distribution.'),
    decisionOne: serviceCopy('لو المواعيد تتضارب', 'If slots conflict'),
    decisionTwo: serviceCopy('لو الحضور ضعيف', 'If attendance is low'),
    decisionThree: serviceCopy('لو البيانات ناقصة', 'If intake data is missing'),
  },
  seo: {
    operatingModel: serviceCopy('نظام SEO يربط نية البحث بالبنية والمحتوى والأداء وروابط الصفحات.', 'An SEO system connecting search intent with structure, content, performance, and internal links.'),
    systemModules: serviceCopy('بحث نوايا، بنية صفحات، محتوى، technical SEO، روابط داخلية، وقياس.', 'Intent research, page structure, content, technical SEO, internal links, and measurement.'),
    clientInputs: serviceCopy('الخدمات ذات الأولوية، كلمات العملاء، المنافسين، المناطق المستهدفة، ومحتوى الشركة.', 'Priority services, customer language, competitors, target regions, and company content.'),
    deliveryFlow: serviceCopy('نبدأ بالنية ثم نبني صفحات تجيب البحث وتحوّل الزائر إلى خطوة واضحة.', 'We start with intent, then build pages that answer search and move visitors to a clear step.'),
    qualityChecks: serviceCopy('العنوان يطابق النية، الصفحة سريعة، الروابط منطقية، والمحتوى يجيب سؤالًا حقيقيًا.', 'Title matches intent, page is fast, links are logical, and content answers a real question.'),
    objections: serviceCopy('الموقع لديه محتوى لكنه لا يظهر لأنه غير منظم حول نية البحث.', 'The site has content but does not appear because it is not organized around search intent.'),
    successSignals: serviceCopy('تحسن ظهور الصفحات المهمة، زيارات عضوية أفضل، ورسائل أكثر ارتباطًا بالخدمة.', 'Better visibility for key pages, stronger organic visits, and more service-relevant enquiries.'),
    scenarioOne: serviceCopy('شركة خدمات تريد ظهورًا لصفحات محددة لا الصفحة الرئيسية فقط.', 'A service company wants specific pages to rank, not only the homepage.'),
    scenarioTwo: serviceCopy('مدونة موجودة لكن لا تقود إلى خدمات.', 'A blog exists but does not lead to services.'),
    scenarioThree: serviceCopy('موقع سريع ظاهريًا لكنه ضعيف في البنية والفهرسة.', 'A site looks fast but has weak structure and indexing.'),
    decisionOne: serviceCopy('لو البحث مهم', 'If search matters'),
    decisionTwo: serviceCopy('لو المحتوى كثير', 'If content is large'),
    decisionThree: serviceCopy('لو الصفحات لا تظهر', 'If pages do not rank'),
  },
  'content-strategy': {
    operatingModel: serviceCopy('نظام محتوى يحول خبرة الشركة إلى موضوعات ومسارات قراءة تقود للثقة.', 'A content system turning company expertise into topics and reading paths that build trust.'),
    systemModules: serviceCopy('محاور محتوى، خريطة مقالات، صفحات مرجعية، CTA داخلي، ومراجعة نبرة.', 'Content pillars, article map, reference pages, internal CTA, and tone review.'),
    clientInputs: serviceCopy('خبرات الفريق، أسئلة العملاء، مراحل القرار، الخدمات ذات الأولوية، والأمثلة الواقعية.', 'Team expertise, client questions, decision stages, priority services, and real examples.'),
    deliveryFlow: serviceCopy('نرتب المحتوى من أسئلة الوعي إلى المقارنة ثم قرار التواصل.', 'We order content from awareness questions to comparison and contact decision.'),
    qualityChecks: serviceCopy('كل قطعة محتوى لها هدف، رابط داخلي، وسؤال محدد تجيب عنه.', 'Every content piece has a goal, internal link, and specific question it answers.'),
    objections: serviceCopy('المحتوى كثير لكنه متفرق ولا يساعد الزائر على اتخاذ قرار.', 'Content is abundant but scattered and does not help visitors decide.'),
    successSignals: serviceCopy('قراءة أعمق، روابط داخلية أكثر استخدامًا، وتحسن جودة أسئلة العملاء.', 'Deeper reading, more internal link usage, and better client questions.'),
    scenarioOne: serviceCopy('شركة لديها خبرة كبيرة لكنها غير مرتبة في محتوى قابل للقراءة.', 'A company has expertise but no readable content structure.'),
    scenarioTwo: serviceCopy('فريق تسويق يحتاج خطة موضوعات مرتبطة بالخدمات.', 'A marketing team needs topics tied to services.'),
    scenarioThree: serviceCopy('موقع يريد مدونة تساعد المبيعات وليس مجرد نشر.', 'A site wants a blog that supports sales, not just publishing.'),
    decisionOne: serviceCopy('لو الخبرة غير ظاهرة', 'If expertise is hidden'),
    decisionTwo: serviceCopy('لو المقالات لا تحول', 'If articles do not convert'),
    decisionThree: serviceCopy('لو الرسائل مشتتة', 'If messaging is scattered'),
  },
  'ui-ux': {
    operatingModel: serviceCopy('نظام تجربة يربط احتياج المستخدم بالواجهة والحالات والرسائل الصغيرة.', 'An experience system connecting user need with interface, states, and microcopy.'),
    systemModules: serviceCopy('رحلات مستخدم، wireframes، حالات شاشة، مكتبة مكونات، واختبار قابلية استخدام.', 'User journeys, wireframes, screen states, component library, and usability review.'),
    clientInputs: serviceCopy('أنواع المستخدمين، المهام الأساسية، نقاط الألم، أمثلة واجهات، وأهداف المنتج.', 'User types, core tasks, pain points, interface references, and product goals.'),
    deliveryFlow: serviceCopy('نبدأ بالتدفق ثم نبني واجهات تساعد المستخدم يفهم ويتصرف بدون شرح زائد.', 'We start with flow, then build interfaces that help users understand and act without extra explanation.'),
    qualityChecks: serviceCopy('وضوح الخطوة التالية، سهولة القراءة، حالات الخطأ، وعمل التصميم على الموبايل.', 'Clear next step, readable layout, error states, and mobile usability.'),
    objections: serviceCopy('الواجهة تبدو جميلة لكنها لا تقود المستخدم أو لا تشرح الحالات الصعبة.', 'The interface looks good but does not guide users or explain difficult states.'),
    successSignals: serviceCopy('مهام أسرع، أخطاء أقل، وفهم أفضل للمنتج من أول استخدام.', 'Faster tasks, fewer errors, and better product understanding from first use.'),
    scenarioOne: serviceCopy('تطبيق لديه وظائف كثيرة لكنها غير مرتبة.', 'An app has many features but weak organization.'),
    scenarioTwo: serviceCopy('موقع يحتاج تقليل ارتباك المستخدم قبل التواصل.', 'A site needs to reduce user confusion before contact.'),
    scenarioThree: serviceCopy('منتج جديد يحتاج تجربة أولى مقنعة.', 'A new product needs a convincing first experience.'),
    decisionOne: serviceCopy('لو الاستخدام مربك', 'If usage is confusing'),
    decisionTwo: serviceCopy('لو الحالات ناقصة', 'If states are missing'),
    decisionThree: serviceCopy('لو المنتج يكبر', 'If product is scaling'),
  },
  'design-systems': {
    operatingModel: serviceCopy('نظام تصميم يحول الواجهات إلى مكونات وقواعد قابلة للتوسع.', 'A design system turning interfaces into scalable components and rules.'),
    systemModules: serviceCopy('ألوان، خطوط، مكونات، حالات، قواعد استخدام، وتوثيق للمطورين.', 'Colors, typography, components, states, usage rules, and developer documentation.'),
    clientInputs: serviceCopy('الشاشات الحالية، مشاكل الاتساق، احتياجات الفريق، وأولوية المكونات.', 'Current screens, consistency issues, team needs, and component priorities.'),
    deliveryFlow: serviceCopy('نستخرج الأنماط المتكررة ثم نحولها إلى مكتبة منظمة تقلل الارتجال.', 'We extract repeated patterns and turn them into an organized library that reduces improvisation.'),
    qualityChecks: serviceCopy('كل مكون له حالات، قواعد، وقيود تمنع سوء الاستخدام.', 'Every component has states, rules, and constraints that prevent misuse.'),
    objections: serviceCopy('كل صفحة تبدو مختلفة لأن الفريق يعيد التصميم من الصفر كل مرة.', 'Every page looks different because the team redesigns from scratch each time.'),
    successSignals: serviceCopy('تنفيذ أسرع، تناسق أعلى، ومراجعات تصميم أقل في كل تحديث.', 'Faster delivery, stronger consistency, and fewer design reviews per update.'),
    scenarioOne: serviceCopy('منتج يكبر ويحتاج مكونات ثابتة.', 'A growing product needs stable components.'),
    scenarioTwo: serviceCopy('فريق تصميم وتطوير يحتاج لغة مشتركة.', 'Design and development teams need a shared language.'),
    scenarioThree: serviceCopy('موقع متعدد الصفحات يعاني من عدم اتساق.', 'A multi-page site struggles with consistency.'),
    decisionOne: serviceCopy('لو التحديثات كثيرة', 'If updates are frequent'),
    decisionTwo: serviceCopy('لو الفريق متعدد', 'If team is mixed'),
    decisionThree: serviceCopy('لو الشكل يتشابه خطأ', 'If visuals drift'),
  },
  'ai-products': {
    operatingModel: serviceCopy('نظام منتج AI يشرح ما يفعله الذكاء الاصطناعي وحدوده ونتائجه بوضوح.', 'An AI product system explaining what AI does, its limits, and outcomes clearly.'),
    systemModules: serviceCopy('مدخلات، معالجة، نتائج، تفسير، حالات خطأ، مراجعة بشرية، وسجل استخدام.', 'Inputs, processing, outputs, explanation, error states, human review, and usage log.'),
    clientInputs: serviceCopy('حالات الاستخدام، نوع البيانات، حدود المخاطر، النتائج المطلوبة، ومعايير القبول.', 'Use cases, data type, risk boundaries, desired outputs, and acceptance criteria.'),
    deliveryFlow: serviceCopy('نصمم التجربة حول الثقة: ماذا يدخل المستخدم، ماذا يحدث، وماذا يفعل بالنتيجة.', 'We design around trust: what users enter, what happens, and what they do with the output.'),
    qualityChecks: serviceCopy('تفسير النتائج، منع الوعود الزائدة، وضوح حالات الفشل، وحماية البيانات.', 'Output explanation, no overpromising, clear failure states, and data protection.'),
    objections: serviceCopy('المستخدم يخاف من نتيجة غامضة أو لا يعرف متى يثق في AI.', 'Users fear vague output or do not know when to trust AI.'),
    successSignals: serviceCopy('استخدام متكرر، فهم أفضل للنتائج، وانخفاض الاعتماد على شرح خارجي.', 'Repeated use, better output understanding, and less need for external explanation.'),
    scenarioOne: serviceCopy('أداة تقترح محتوى أو قرارات وتحتاج تفسيرًا.', 'A tool suggests content or decisions and needs explanation.'),
    scenarioTwo: serviceCopy('منتج يعالج بيانات حساسة ويحتاج حدودًا واضحة.', 'A product handles sensitive data and needs clear boundaries.'),
    scenarioThree: serviceCopy('فريق يريد AI داخل workflow يومي وليس تجربة منفصلة.', 'A team wants AI inside a daily workflow, not a separate experiment.'),
    decisionOne: serviceCopy('لو الثقة مهمة', 'If trust matters'),
    decisionTwo: serviceCopy('لو النتيجة حساسة', 'If output is sensitive'),
    decisionThree: serviceCopy('لو AI داخل عملية', 'If AI sits inside a process'),
  },
  'chatbot-interfaces': {
    operatingModel: serviceCopy('نظام محادثة يوجه المستخدم للإجابة أو الطلب بدل ردود عامة متشابهة.', 'A chatbot interface system guiding users to answers or requests instead of generic replies.'),
    systemModules: serviceCopy('نوايا، أسئلة متابعة، ردود، تحويل لموظف، سجل محادثة، وحدود معرفة.', 'Intents, follow-up questions, replies, human handoff, conversation log, and knowledge limits.'),
    clientInputs: serviceCopy('أسئلة العملاء، مصادر المعرفة، نبرة الرد، حالات التحويل، وحدود المسموح.', 'Customer questions, knowledge sources, reply tone, handoff cases, and allowed boundaries.'),
    deliveryFlow: serviceCopy('نبني شجرة نوايا ثم نصمم ردودًا تطلب المعلومة الناقصة وتوضح الخطوة التالية.', 'We build an intent tree, then design replies that request missing info and clarify next steps.'),
    qualityChecks: serviceCopy('لا يختلق، لا يطيل بلا داعي، يعرف متى يحول، ويترك أثرًا قابلًا للمراجعة.', 'It does not invent, does not ramble, knows when to hand off, and leaves a reviewable trail.'),
    objections: serviceCopy('الشات يرد لكنه لا يحل المشكلة أو يضيع العميل في أسئلة كثيرة.', 'The chat replies but does not solve the problem or buries clients in questions.'),
    successSignals: serviceCopy('حل أسئلة متكررة، تحويلات أوضح، وزمن رد أقل بدون فقدان الثقة.', 'Resolved repeated questions, clearer handoffs, and faster response without losing trust.'),
    scenarioOne: serviceCopy('موقع خدمات يحتاج فرز العملاء قبل التواصل.', 'A service site needs to qualify clients before contact.'),
    scenarioTwo: serviceCopy('متجر يحتاج إجابات سريعة عن المنتج والشحن.', 'A store needs fast answers about products and shipping.'),
    scenarioThree: serviceCopy('دعم داخلي يريد تقليل الأسئلة المتكررة.', 'Internal support wants fewer repeated questions.'),
    decisionOne: serviceCopy('لو الأسئلة متكررة', 'If questions repeat'),
    decisionTwo: serviceCopy('لو التحويل مهم', 'If handoff matters'),
    decisionThree: serviceCopy('لو المعرفة محدودة', 'If knowledge has limits'),
  },
  'automation-flows': {
    operatingModel: serviceCopy('نظام أتمتة يربط الأحداث بالمهام والتنبيهات دون فقدان السيطرة البشرية.', 'An automation system connecting events with tasks and alerts without losing human control.'),
    systemModules: serviceCopy('Triggers، شروط، إجراءات، تنبيهات، مراجعة، وسجل تنفيذ.', 'Triggers, conditions, actions, alerts, review, and execution log.'),
    clientInputs: serviceCopy('العمليات المتكررة، الأدوات المستخدمة، قواعد القرار، وحالات الاستثناء.', 'Repeated processes, current tools, decision rules, and exception cases.'),
    deliveryFlow: serviceCopy('نختار التدفقات ذات الأثر الأعلى ثم نبني أتمتة قابلة للمراجعة والتعديل.', 'We choose the highest-impact flows, then build automation that can be reviewed and adjusted.'),
    qualityChecks: serviceCopy('كل أتمتة لها شرط تشغيل، شرط إيقاف، ومكان واضح للمراجعة.', 'Every automation has a start rule, stop rule, and clear review point.'),
    objections: serviceCopy('الأتمتة قد تنفذ خطأ أو ترسل رسالة في وقت غير مناسب.', 'Automation may act incorrectly or send messages at the wrong time.'),
    successSignals: serviceCopy('مهام يدوية أقل، تأخير أقل، وأخطاء تشغيلية أكثر وضوحًا.', 'Fewer manual tasks, less delay, and clearer operational errors.'),
    scenarioOne: serviceCopy('Lead جديد يحتاج توزيعًا ورسالة متابعة.', 'A new lead needs assignment and follow-up.'),
    scenarioTwo: serviceCopy('طلب داخلي يحتاج موافقة ثم تنفيذ.', 'An internal request needs approval then execution.'),
    scenarioThree: serviceCopy('فريق يريد تنبيهات عند تغير حالة مهمة.', 'A team needs alerts when an important status changes.'),
    decisionOne: serviceCopy('لو العمل يتكرر', 'If work repeats'),
    decisionTwo: serviceCopy('لو الأخطاء مكلفة', 'If mistakes are costly'),
    decisionThree: serviceCopy('لو الفريق يتأخر', 'If team delays'),
  },
  maintenance: {
    operatingModel: serviceCopy('نظام تشغيل بعد الإطلاق يحافظ على الأداء والمحتوى والروابط والتجربة.', 'A post-launch operation system that protects performance, content, links, and experience.'),
    systemModules: serviceCopy('مراجعة أداء، روابط، تحديثات محتوى، نسخ احتياطي، مراقبة، وتقرير متابعة.', 'Performance review, links, content updates, backup, monitoring, and follow-up report.'),
    clientInputs: serviceCopy('أولويات التحديث، صلاحيات الوصول، الصفحات الحساسة، وملاحظات الفريق.', 'Update priorities, access permissions, sensitive pages, and team notes.'),
    deliveryFlow: serviceCopy('نراجع الموقع دوريًا ونحول المشاكل الصغيرة إلى مهام واضحة قبل أن تكبر.', 'We review the site periodically and turn small issues into clear tasks before they grow.'),
    qualityChecks: serviceCopy('لا روابط مكسورة، لا صفحات بطيئة، لا محتوى قديم في مناطق القرار.', 'No broken links, no slow pages, and no outdated content in decision areas.'),
    objections: serviceCopy('الموقع يعمل اليوم لكنه يتدهور مع التحديثات والإضافات غير المنظمة.', 'The site works today but degrades with unorganized updates and additions.'),
    successSignals: serviceCopy('ثبات الأداء، تحديثات أسرع، ومشاكل أقل بعد كل تعديل.', 'Stable performance, faster updates, and fewer issues after changes.'),
    scenarioOne: serviceCopy('موقع نشط يحتاج تحديثات مستمرة.', 'An active site needs ongoing updates.'),
    scenarioTwo: serviceCopy('شركة تضيف صفحات وخدمات بشكل متكرر.', 'A company frequently adds pages and services.'),
    scenarioThree: serviceCopy('فريق يريد مراقبة جودة بعد الإطلاق.', 'A team wants quality monitoring after launch.'),
    decisionOne: serviceCopy('لو الموقع يتغير', 'If the site changes often'),
    decisionTwo: serviceCopy('لو الأداء مهم', 'If performance matters'),
    decisionThree: serviceCopy('لو المحتوى يتجدد', 'If content evolves'),
  },
  'speed-optimization': {
    operatingModel: serviceCopy('نظام تحسين سرعة يراجع الصور والكود والتحميل وتجربة أول شاشة.', 'A speed optimization system reviewing images, code, loading, and first-screen experience.'),
    systemModules: serviceCopy('صور، JavaScript، CSS، lazy loading، caching، قياس Core Web Vitals.', 'Images, JavaScript, CSS, lazy loading, caching, and Core Web Vitals measurement.'),
    clientInputs: serviceCopy('الصفحات الأهم، مصادر الصور، السكربتات الخارجية، ومناطق التحويل.', 'Key pages, image sources, third-party scripts, and conversion areas.'),
    deliveryFlow: serviceCopy('نقيس أولًا ثم نصلح الأثر الأكبر بدون كسر التصميم أو التجربة.', 'We measure first, then fix the highest-impact issues without breaking design or experience.'),
    qualityChecks: serviceCopy('أول شاشة تظهر بسرعة، الصور لا تثقل، والسكريبتات لا تعطل التفاعل.', 'First screen appears quickly, images stay light, and scripts do not block interaction.'),
    objections: serviceCopy('الموقع جميل لكنه ثقيل، والزائر يشعر بالبطء قبل فهم الرسالة.', 'The site looks good but feels heavy before visitors understand the message.'),
    successSignals: serviceCopy('تحميل أسرع، تفاعل أبكر، وتجربة موبايل أخف.', 'Faster loading, earlier interaction, and lighter mobile experience.'),
    scenarioOne: serviceCopy('صفحة هيرو غنية بالصور أو الفيديو.', 'A hero page is rich with images or video.'),
    scenarioTwo: serviceCopy('موقع خدمات طويل فيه أقسام كثيرة.', 'A long service site has many sections.'),
    scenarioThree: serviceCopy('متجر يحتاج صفحات منتج أسرع.', 'A store needs faster product pages.'),
    decisionOne: serviceCopy('لو الموبايل بطيء', 'If mobile is slow'),
    decisionTwo: serviceCopy('لو الصور ثقيلة', 'If media is heavy'),
    decisionThree: serviceCopy('لو السكربتات كثيرة', 'If scripts are many'),
  },
  'launch-audit': {
    operatingModel: serviceCopy('نظام فحص إطلاق يتأكد أن الصفحة أو النظام جاهز قبل أن يراه العملاء.', 'A launch audit system ensuring the page or system is ready before clients see it.'),
    systemModules: serviceCopy('محتوى، روابط، نماذج، responsive، أداء، SEO، analytics، وحالات خطأ.', 'Content, links, forms, responsive, performance, SEO, analytics, and error states.'),
    clientInputs: serviceCopy('الرابط التجريبي، أهداف الصفحة، النماذج، أدوات القياس، وقائمة الصفحات.', 'Staging link, page goals, forms, measurement tools, and page list.'),
    deliveryFlow: serviceCopy('نمر على الفحص كبنود قرار: هل يفهم الزائر؟ هل يعمل الرابط؟ هل تقاس النتيجة؟', 'We audit through decision questions: does the visitor understand, does the link work, is the result measurable?'),
    qualityChecks: serviceCopy('لا أخطاء واضحة، لا نصوص ناقصة، لا CTA مكسور، ولا موبايل مهمل.', 'No obvious errors, missing copy, broken CTA, or neglected mobile.'),
    objections: serviceCopy('الصفحة تبدو جاهزة بصريًا لكنها تفشل في نموذج أو رابط أو قياس مهم.', 'The page looks visually ready but fails in a form, link, or key measurement.'),
    successSignals: serviceCopy('إطلاق أهدأ، ثقة أعلى، وقائمة ملاحظات واضحة قبل النشر.', 'Calmer launch, stronger confidence, and a clear issue list before publishing.'),
    scenarioOne: serviceCopy('موقع جديد قبل النشر الرسمي.', 'A new site before official launch.'),
    scenarioTwo: serviceCopy('صفحة حملة قبل تشغيل الزيارات.', 'A campaign page before traffic starts.'),
    scenarioThree: serviceCopy('نظام داخلي قبل تدريب الفريق.', 'An internal system before team training.'),
    decisionOne: serviceCopy('لو الإطلاق قريب', 'If launch is close'),
    decisionTwo: serviceCopy('لو الأخطاء محرجة', 'If mistakes are visible'),
    decisionThree: serviceCopy('لو القياس مهم', 'If measurement matters'),
  },
};

const deepServiceSlugs = [
  'company-websites',
  'landing-pages',
  'service-pages',
  'ecommerce',
  'product-pages',
  'checkout-optimization',
  'web-apps',
  'dashboards',
  'crm-systems',
  'booking-systems',
  'seo',
  'content-strategy',
  'ui-ux',
  'design-systems',
  'ai-products',
  'chatbot-interfaces',
  'automation-flows',
  'maintenance',
  'speed-optimization',
  'launch-audit',
] as const;

const buildDeepServicePage = (slug: string, index: number): EnhancedDetailPageContent | null => {
  const service = serviceLibrary.find((item) => item.slug === slug);
  const spec = deepServiceSpecs[slug];
  if (!service || !spec) return null;

  const phaseLabels = [
    serviceCopy('تشخيص القرار', 'Decision diagnosis'),
    serviceCopy('هندسة النظام', 'System architecture'),
    serviceCopy('تنفيذ التجربة', 'Experience build'),
    serviceCopy('فحص وتسليم', 'Audit and handoff'),
  ];
  const phaseBodies = [
    spec.clientInputs,
    spec.systemModules,
    spec.deliveryFlow,
    spec.qualityChecks,
  ];
  const sectionCycle = [
    [spec.operatingModel, spec.systemModules, spec.clientInputs, spec.qualityChecks],
    [spec.clientInputs, spec.operatingModel, spec.deliveryFlow, spec.successSignals],
    [spec.systemModules, spec.qualityChecks, spec.objections, spec.deliveryFlow],
    [spec.deliveryFlow, spec.clientInputs, spec.successSignals, spec.systemModules],
  ][index % 4];

  return {
    ...enhancedServicePages[slug],
    audience: service.bestFor,
    promise: service.promise,
    sections: [
      { title: serviceCopy('كيف يعمل النظام؟', 'How the system works'), body: sectionCycle[0], icon: Layers3 },
      { title: serviceCopy('ما الذي تستلمه؟', 'What you receive'), body: sectionCycle[1], icon: CheckCircle },
      { title: serviceCopy('متى تكون الخدمة مناسبة؟', 'When this service fits'), body: sectionCycle[2], icon: Target },
      { title: serviceCopy('ما الذي يمنع الفشل؟', 'What prevents failure'), body: sectionCycle[3], icon: Shield },
    ],
    deliverables: [
      ...service.deliverables,
      spec.systemModules,
      spec.qualityChecks,
    ].slice(0, 5),
    useCases: [spec.scenarioOne, spec.scenarioTwo, spec.scenarioThree],
    metrics: [
      { value: '4', label: serviceCopy('مراحل تشغيل واضحة', 'clear operating stages'), icon: Layers3 },
      { value: '5', label: serviceCopy('مخرجات قابلة للتسليم', 'handoff-ready deliverables'), icon: CheckCircle },
      { value: '3', label: serviceCopy('سيناريوهات قرار مخصصة', 'custom decision scenarios'), icon: Target },
      { value: '0', label: serviceCopy('نسخ عامة مكررة', 'generic repeated blocks'), icon: Shield },
    ],
    features: [
      { title: serviceCopy('نظام تشغيل الخدمة', 'Service operating model'), description: spec.operatingModel, icon: Layers3 },
      { title: serviceCopy('مدخلات العميل المطلوبة', 'Required client inputs'), description: spec.clientInputs, icon: Users },
      { title: serviceCopy('إشارات نجاح واضحة', 'Clear success signals'), description: spec.successSignals, icon: TrendingUp },
    ],
    comparison: [
      { aspect: serviceCopy('قبل التنظيم', 'Before structure'), before: spec.objections, after: spec.operatingModel },
      { aspect: serviceCopy('طريقة التنفيذ', 'Delivery method'), before: serviceCopy('خطوات عامة غير مرتبطة بقرار العميل', 'Generic steps not tied to the client decision'), after: spec.deliveryFlow },
      { aspect: serviceCopy('نتيجة الصفحة', 'Page outcome'), before: serviceCopy('زائر يقرأ ولا يعرف الخطوة التالية', 'A visitor reads but does not know the next step'), after: spec.successSignals },
    ],
    timeline: phaseLabels.map((phase, phaseIndex) => ({
      phase: `0${phaseIndex + 1}`,
      title: phase,
      body: phaseBodies[phaseIndex],
    })),
    decisionMatrix: [
      { label: spec.decisionOne, value: spec.systemModules, note: spec.qualityChecks },
      { label: spec.decisionTwo, value: spec.deliveryFlow, note: spec.successSignals },
      { label: spec.decisionThree, value: spec.operatingModel, note: spec.objections },
    ],
    scenarios: [
      { title: spec.scenarioOne, body: spec.operatingModel },
      { title: spec.scenarioTwo, body: spec.deliveryFlow },
      { title: spec.scenarioThree, body: spec.successSignals },
    ],
    toolsDeliverables: [
      { name: serviceCopy('Service blueprint', 'Service blueprint'), description: spec.operatingModel, impact: spec.systemModules },
      { name: serviceCopy('Delivery checklist', 'Delivery checklist'), description: spec.qualityChecks, impact: spec.successSignals },
      { name: serviceCopy('Decision notes', 'Decision notes'), description: spec.objections, impact: spec.deliveryFlow },
    ],
    checklist: [
      { item: serviceCopy('المدخلات واضحة قبل التصميم', 'Inputs are clear before design'), details: spec.clientInputs },
      { item: serviceCopy('كل موديول له وظيفة قرار', 'Every module has a decision role'), details: spec.systemModules },
      { item: serviceCopy('الفشل المتوقع تمت الإجابة عنه', 'Expected failure is addressed'), details: spec.objections },
      { item: serviceCopy('النجاح قابل للملاحظة بعد الإطلاق', 'Success is observable after launch'), details: spec.successSignals },
    ],
    faq: [
      { question: serviceCopy(`هل ${service.eyebrow.ar} مناسبة لشركتك؟`, `Is ${service.eyebrow.en} right for your company?`), answer: service.bestFor },
      { question: serviceCopy('ما الذي نحتاجه قبل البداية؟', 'What do we need before starting?'), answer: spec.clientInputs },
      { question: serviceCopy('كيف نعرف أن التنفيذ نجح؟', 'How do we know the work succeeded?'), answer: spec.successSignals },
      { question: serviceCopy('ما أكثر شيء قد يعطل النتيجة؟', 'What can block the result most?'), answer: spec.objections },
    ],
    cta: serviceCopy(`رتّب متطلبات ${service.eyebrow.ar}`, `Organize ${service.eyebrow.en} requirements`),
  };
};

Object.assign(
  enhancedServicePages,
  Object.fromEntries(
    deepServiceSlugs.flatMap((slug, index) => {
      const page = buildDeepServicePage(slug, index);
      return page ? [[slug, page] as const] : [];
    }),
  ),
);

enhancedServicePages.uiux = enhancedServicePages['ui-ux'];

export { enhancedServicePages };
export type { EnhancedDetailPageContent };
