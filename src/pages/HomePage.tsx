import { AnimatePresence, motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Quote,
  Rocket,
  Sparkles,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Home,
  Bot,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  FileText,
  BookOpenCheck,
  ChevronDown,
  Clock3,
  CreditCard,
  HelpCircle,
  SearchCheck,
  ShieldCheck,
  Store,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import SectionTitle from '../components/SectionTitle';
import {
  featuredProjects,
  portfolioProfile,
  services,
} from '../data/portfolio';
import {
  companyCapabilities,
  clientJourney,
  servicePackages,
  trustSignals,
} from '../data/company';
import { featuredHomeTestimonials } from '../data/testimonials';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { illustrationAssets } from '../lib/illustrationAssets';
import { getPageSeoByPath } from '../lib/pageSeo';

const AnimatedCounter = ({ value, duration = 2500 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isVisible) return;
    const startTime = Date.now();
    const endTime = startTime + duration;
    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * numericValue);
      setCount(currentCount);
      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(numericValue);
      }
    };
    updateCounter();
  }, [isVisible, numericValue, duration]);

  return (
    <motion.span
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      {count}{suffix}
    </motion.span>
  );
};

const serviceIcons = [Building2, Layers3, Rocket, BrainCircuit];

const sectors = [
  { ar: 'مواقع الشركات والخدمات', en: 'Corporate and service websites' },
  { ar: 'التجارة الإلكترونية', en: 'E-commerce experiences' },
  { ar: 'المنصات التعليمية', en: 'Educational platforms' },
  { ar: 'حلول GIS والخرائط', en: 'GIS and mapping solutions' },
  { ar: 'لوحات التحكم والأنظمة الخاصة', en: 'Dashboards and custom systems' },
  { ar: 'منتجات الذكاء الاصطناعي', en: 'AI-driven products' },
];

const technicalHighlights = [
  { icon: Globe2, titleAr: 'تجارب مستخدم لا تُنسى', titleEn: 'Memorable user experiences', delay: 0.2 },
  { icon: Layers3, titleAr: 'بنية تحتية مرنة وقابلة للتوسع', titleEn: 'Scalable technical foundations', delay: 0.4 },
  { icon: BrainCircuit, titleAr: 'أداء فائق ونتائج مباشرة', titleEn: 'Fast performance with measurable results', delay: 0.6 },
];

const comparisonRows = [
  {
    criteriaAr: 'وقت التسليم',
    criteriaEn: 'Delivery time',
    notaqAr: '5–21 يوم',
    notaqEn: '5–21 days',
    tradAr: '2–6 أشهر',
    tradEn: '2–6 months',
  },
  {
    criteriaAr: 'التصميم المخصص',
    criteriaEn: 'Custom design',
    notaqAr: '100% مخصص',
    notaqEn: 'Tailored to the brand',
    tradAr: 'قوالب جاهزة',
    tradEn: 'Template-based',
  },
  {
    criteriaAr: 'التواصل',
    criteriaEn: 'Communication',
    notaqAr: 'واتساب + أسبوعي',
    notaqEn: 'WhatsApp + weekly check-ins',
    tradAr: 'بريد رسمي بطيء',
    tradEn: 'Slow formal email',
  },
  {
    criteriaAr: 'جودة الكود',
    criteriaEn: 'Code quality',
    notaqAr: 'نظيف + SEO-ready',
    notaqEn: 'Clean + SEO-ready',
    tradAr: 'كود غير منظم',
    tradEn: 'Unstructured code',
  },
  {
    criteriaAr: 'سرعة الموقع',
    criteriaEn: 'Site speed',
    notaqAr: 'سريع ومحسّن',
    notaqEn: 'Fast and optimized',
    tradAr: 'أبطأ من 4 ثوان',
    tradEn: 'Slower than 4s',
  },
  {
    criteriaAr: 'الدعم بعد الإطلاق',
    criteriaEn: 'Post-launch support',
    notaqAr: '90 يوم مجاناً',
    notaqEn: 'Structured launch support',
    tradAr: 'مدفوع أو معدوم',
    tradEn: 'Paid or unavailable',
  },
  {
    criteriaAr: 'التحديثات',
    criteriaEn: 'Updates',
    notaqAr: 'غير محدودة',
    notaqEn: 'Unlimited',
    tradAr: 'محدودة بالعقد',
    tradEn: 'Contract-limited',
  },
  {
    criteriaAr: 'المرونة',
    criteriaEn: 'Flexibility',
    notaqAr: 'Agile sprints',
    notaqEn: 'Agile sprints',
    tradAr: 'Waterfall صارم',
    tradEn: 'Rigid waterfall',
  },
];

const impactStats = [
  {
    num: '180+',
    labelAr: 'مشروع مكتمل',
    labelEn: 'Completed projects',
    subAr: 'عبر عدة قطاعات',
    subEn: 'Across multiple industries',
    icon: Rocket,
  },
  {
    num: 'Clarity',
    labelAr: 'رضا العملاء',
    labelEn: 'Professional trust',
    subAr: 'وفق التقييمات الفعلية',
    subEn: 'Clearer positioning and stronger first impression',
    icon: Sparkles,
  },
  {
    num: 'Flow',
    labelAr: 'زيادة في التحويل',
    labelEn: 'Conversion paths',
    subAr: 'متوسط ما تحقق لعملائنا',
    subEn: 'Stronger calls to action and clearer service flow',
    icon: TrendingUp,
  },
  {
    num: 'Speed',
    labelAr: 'سرعة التحميل',
    labelEn: 'Experience speed',
    subAr: 'ضمانة Core Web Vitals',
    subEn: 'Built around Core Web Vitals',
    icon: Zap,
  },
];

const processCards = [
  {
    phase: '01',
    titleAr: 'مكالمة اكتشاف',
    titleEn: 'Discovery call',
    durationAr: 'يوم ١-٢',
    durationEn: 'Day 1-2',
    color: 'border-cyan-400/30 from-cyan-900/20',
    descAr:
      'جلسة تشخيص ١٥-٣٠ دقيقة لفهم جوهر الاحتياج: من هو الزائر المستهدف؟ ما الهدف التجاري؟ من المنافسون؟ وما الذي يحتاجه الزائر قبل أن يثق؟',
    descEn:
      'A focused 15-30 minute session to understand the need: target visitors, business goal, competitors, and what visitors need before they trust.',
    deliverableAr: '→ وثيقة الهدف والجمهور',
    deliverableEn: '→ Project goals and audience brief',
  },
  {
    phase: '02',
    titleAr: 'سبرنت الوايرفريم',
    titleEn: 'Wireframe sprint',
    durationAr: 'يوم ٣-٦',
    durationEn: 'Day 3-6',
    color: 'border-violet-400/30 from-violet-900/20',
    descAr:
      'نبني الهيكل الكامل للصفحات قبل البدء بالتصميم. ننظم تدفق المستخدم وترتيب المحتوى للحصول على فهم واضح ومشترك.',
    descEn:
      'We shape the full page structure before visual design starts, organizing user flow and content order so the direction is clear and aligned.',
    deliverableAr: '→ Wireframes قابلة للتعديل',
    deliverableEn: '→ Editable wireframes',
  },
  {
    phase: '03',
    titleAr: 'التصميم والبناء',
    titleEn: 'Design and build',
    durationAr: 'يوم ٧-٢٠',
    durationEn: 'Day 7-20',
    color: 'border-teal-400/30 from-teal-900/20',
    descAr:
      'المرحلة المكثفة التي نجمع فيها الرؤية البصرية مع الكود. نسلمك مراحل بطريقة Agile يمكنك مراجعتها والتعليق عليها.',
    descEn:
      'This is the intensive phase where the visual direction and code come together. We ship progress in agile steps so you can review and respond early.',
    deliverableAr: '→ صفحات مكتملة + كود نظيف',
    deliverableEn: '→ Finished pages and clean code',
  },
  {
    phase: '04',
    titleAr: 'الإطلاق والتوسع',
    titleEn: 'Launch and scale',
    durationAr: 'يوم ٢١+',
    durationEn: 'Day 21+',
    color: 'border-amber-400/30 from-amber-900/20',
    descAr:
      'نطلق المنصة على استضافة سريعة مُهيأة للـ SEO، ونضمن ثلاثة أشهر دعم فني يغطي الأخطاء والتحسينات الصغيرة.',
    descEn:
      'We launch on fast hosting prepared for SEO with an initial support window for fixes and focused refinements.',
    deliverableAr: '→ موقع حي + ٩٠ يوم دعم',
    deliverableEn: '→ Live site and initial support',
  },
];

const contactReasons = [
  { ar: 'تصاميم حديثة ومميزة لا تعتمد على قوالب جاهزة', en: 'Modern custom design without recycled templates' },
  { ar: 'تجربة مستخدم دقيقة تركز على زيادة أرقام المبيعات', en: 'User experience built to improve conversion and sales' },
  { ar: 'كود نظيف وأداء صاروخي يدعم معايير الـ SEO', en: 'Clean code and fast performance built for SEO standards' },
  { ar: 'شراكة ودعم فني متواصل ولا ينتهي مع الإطلاق', en: 'A reliable partnership that continues after launch' },
];

const homeTestimonials = featuredHomeTestimonials;

const industries = [
  {
    icon: Building2,
    nameAr: 'شركات وخدمات',
    nameEn: 'Companies and services',
    descAr: 'مواقع مؤسسية ذات حضور مهني قوي تعكس هوية الشركة',
    descEn: 'Corporate websites with a strong professional presence that reflect the brand clearly.',
  },
  {
    icon: ShoppingCart,
    nameAr: 'تجارة إلكترونية',
    nameEn: 'E-commerce',
    descAr: 'متاجر وواجهات بيع عالية التحويل محسّنة للشراء',
    descEn: 'Storefronts and sales journeys optimized for faster purchase decisions.',
  },
  {
    icon: GraduationCap,
    nameAr: 'منصات تعليمية',
    nameEn: 'Educational platforms',
    descAr: 'تجارب تعليمية تفاعلية ولوحات تحكم سهلة الاستخدام',
    descEn: 'Interactive learning experiences with accessible dashboards and clear structure.',
  },
  {
    icon: Stethoscope,
    nameAr: 'صحة وطب',
    nameEn: 'Healthcare',
    descAr: 'مواقع رعاية صحية تبني الثقة وتسهّل الوصول للمريض',
    descEn: 'Healthcare experiences that build trust and make access easier for patients.',
  },
  {
    icon: Home,
    nameAr: 'عقارات',
    nameEn: 'Real estate',
    descAr: 'منصات عرض عقاري رائعة تساعد على اتخاذ القرار',
    descEn: 'Property platforms that present listings clearly and support faster decisions.',
  },
  {
    icon: Bot,
    nameAr: 'منتجات AI/SaaS',
    nameEn: 'AI and SaaS',
    descAr: 'واجهات لمنتجات تقنية ذكية تعرض المزايا بوضوح',
    descEn: 'Interfaces for smart products that explain value and product logic with clarity.',
  },
];

// New section: Real Client Results with detailed metrics
const clientResults = [
  {
    metricAr: 'متوسط زيادة التحويلات',
    metricEn: 'Average conversion increase',
    resultAr: 'أوضح',
    resultEn: 'Clearer',
    clientAr: 'شركات التجارة الإلكترونية',
    clientEn: 'E-commerce Companies',
    descAr: 'تحسن واضح في معدل الزوار الذين يتحولون إلى عملاء فعليين',
    descEn: 'Clear improvement in visitor-to-customer conversion rate',
    iconBg: 'from-cyan-500 to-teal-500',
  },
  {
    metricAr: 'تحسن سرعة التحميل',
    metricEn: 'Loading speed improvement',
    resultAr: 'أسرع',
    resultEn: 'Faster',
    clientAr: 'المنصات الكبيرة',
    clientEn: 'Large Platforms',
    descAr: 'معدل تحميل محسّن يعني تجربة مستخدم أفضل والترتيب الأعلى في نتائج البحث',
    descEn: 'Optimized loading speeds mean better UX and higher search rankings',
    iconBg: 'from-violet-500 to-purple-500',
  },
  {
    metricAr: 'زيادة التفاعل',
    metricEn: 'Engagement boost',
    resultAr: 'أعمق',
    resultEn: 'Deeper',
    clientAr: 'الشركات الخدمية',
    clientEn: 'Service Companies',
    descAr: 'ارتفاع ملحوظ في وقت قضاء الزائر على الموقع والتفاعل مع المحتوى',
    descEn: 'Significant rise in time on site and content interaction',
    iconBg: 'from-amber-500 to-orange-500',
  },
  {
    metricAr: 'نسبة الارتداد',
    metricEn: 'Bounce rate reduction',
    resultAr: 'أقل',
    resultEn: 'Lower',
    clientAr: 'جميع القطاعات',
    clientEn: 'All sectors',
    descAr: 'انخفاض معدل الزوار الذين يغادرون دون تفاعل',
    descEn: 'Lower bounce rates mean visitors stay longer and explore more',
    iconBg: 'from-rose-500 to-pink-500',
  },
];

// New section: Team expertise and skills
const teamHighlights = [
  {
    roleAr: 'مصممون UX/UI متخصصون',
    roleEn: 'Specialized UX/UI Designers',
    countAr: '12+',
    countEn: '12+',
    expertiseAr: 'تصميم تجارب مستخدم استثنائية ومنصات حدسية',
    expertiseEn: 'Crafting exceptional user experiences and intuitive interfaces',
    colorEn: 'from-cyan-400 to-blue-500',
  },
  {
    roleAr: 'مطورون أمامي متقدمون',
    roleEn: 'Advanced Frontend Engineers',
    countAr: '15+',
    countEn: '15+',
    expertiseAr: 'بناء واجهات عالية الأداء مع أحدث التقنيات',
    expertiseEn: 'Building high-performance interfaces with cutting-edge tech',
    colorEn: 'from-violet-400 to-purple-500',
  },
  {
    roleAr: 'مهندسو Backend وقواعد البيانات',
    roleEn: 'Backend & Database Engineers',
    countAr: '10+',
    countEn: '10+',
    expertiseAr: 'أنظمة سلسة وآمنة تدعم النمو المستقبلي',
    expertiseEn: 'Seamless, secure systems that support future growth',
    colorEn: 'from-emerald-400 to-teal-500',
  },
];

// New section: Key Features with interactive showcase
const keyFeatures = [
  {
    featureAr: 'تصميم مستجيب بنسبة 100%',
    featureEn: 'Fully Responsive Design',
    descAr: 'تجربة مثالية على جميع الأجهزة من الهواتف الذكية إلى الشاشات الفائقة',
    descEn: 'Perfect experience across all devices from mobile to ultra-wide screens',
    icon: Globe2,
    benefits: ['Mobile-first approach', 'Touch-optimized', 'Adaptive layouts'],
  },
  {
    featureAr: 'أداء بصاروخي (Core Web Vitals)',
    featureEn: 'Lightning-fast Performance',
    descAr: 'تحسين شامل للسرعة مع ضمان أفضل تصنيف في محركات البحث',
    descEn: 'Comprehensive speed optimization ensuring top search rankings',
    icon: Zap,
    benefits: ['<3s load time', 'LCP optimized', 'CLS perfect score'],
  },
  {
    featureAr: 'أمان وقابلية التوسع',
    featureEn: 'Security & Scalability',
    descAr: 'بنية آمنة تتطور مع نمو عملك بدون الحاجة إلى إعادة بناء',
    descEn: 'Secure architecture that grows with your business seamlessly',
    icon: Layers3,
    benefits: ['SSL encryption', 'Cloud-ready', 'Auto-scaling'],
  },
  {
    featureAr: 'SEO محسّن من البداية',
    featureEn: 'Built-in SEO Optimization',
    descAr: 'هيكل سيمانتي نظيف يساعدك للظهور في النتائج الأولى',
    descEn: 'Clean semantic structure for first-page search visibility',
    icon: Rocket,
    benefits: ['Meta optimization', 'Structured data', 'Sitemap ready'],
  },
  {
    featureAr: 'تحليلات وتقارير مفصلة',
    featureEn: 'Detailed Analytics',
    descAr: 'تتبع شامل لسلوك المستخدمين والتحويلات والمقاييس المهمة',
    descEn: 'Comprehensive tracking of user behavior and key metrics',
    icon: TrendingUp,
    benefits: ['Real-time tracking', 'Heatmaps', 'Conversion funnels'],
  },
  {
    featureAr: 'صيانة وتحديثات مستمرة',
    featureEn: 'Ongoing Support',
    descAr: 'دعم متواصل وتحديثات آمنة لضمان أداء موثوق دائماً',
    descEn: 'Continuous support and safe updates for reliability',
    icon: Sparkles,
    benefits: ['24/7 monitoring', 'Security updates', 'Performance tuning'],
  },
];
const successStories = [
  {
    titleAr: 'تحويل متجر تقليدي إلى منصة رقمية قوية',
    titleEn: 'From traditional store to powerful digital platform',
    categoryAr: 'تجارة إلكترونية',
    categoryEn: 'E-commerce',
    resultAr: 'مسار شراء أوضح',
    resultEn: 'Clearer buying path',
    timelineAr: '5 أسابيع',
    timelineEn: '5 weeks',
    descAr: 'عملنا مع متجر ملابس تقليدي على بناء منصة تجارة إلكترونية متكاملة مع نظام الدفع والشحن المجاني.',
    descEn: 'We transformed a traditional clothing store into a fully integrated e-commerce platform with payment and logistics.',
    colorEn: 'from-cyan-500 to-blue-500',
    icon: ShoppingCart,
  },
  {
    titleAr: 'بناء منصة تعليمية تخدم 15000+ طالب',
    titleEn: 'Educational platform serving 15K+ students',
    categoryAr: 'التعليم',
    categoryEn: 'Education',
    resultAr: 'رحلة تعلم أكثر تنظيمًا',
    resultEn: 'More organized learning journey',
    timelineAr: '8 أسابيع',
    timelineEn: '8 weeks',
    descAr: 'منصة تعليمية تفاعلية مع نظام إدارة محتوى شامل ودوارات فيديو وأنظمة تتبع التقدم.',
    descEn: 'Interactive learning platform with complete CMS, video streaming, and progress tracking systems.',
    colorEn: 'from-violet-500 to-purple-500',
    icon: GraduationCap,
  },
  {
    titleAr: 'إعادة تصميم موقع شركة خدمات عملاقة',
    titleEn: 'Major service company redesign',
    categoryAr: 'الخدمات المؤسسية',
    categoryEn: 'Enterprise Services',
    resultAr: 'طلبات تواصل أكثر وضوحًا',
    resultEn: 'Clearer inquiry flow',
    timelineAr: '6 أسابيع',
    timelineEn: '6 weeks',
    descAr: 'إعادة تصميم شاملة لموقع شركة استشارات برؤية بصرية حديثة وتجربة مستخدم محسّنة.',
    descEn: 'Complete redesign of a consulting firm website with modern visuals and enhanced user experience.',
    colorEn: 'from-amber-500 to-orange-500',
    icon: Building2,
  },
];

// New section: FAQ with detailed answers
const frequentlyAskedQuestions = [
  {
    questionAr: 'كم الوقت الذي يستغرقه تطوير موقع؟',
    questionEn: 'How long does a website project take?',
    answerAr: 'معظم المشاريع تُنجز بين 5-21 يوم بناءً على الحجم والمتطلبات، مع منهجية تنفيذ مرنة توازن بين السرعة والجودة.',
    answerEn: 'Most projects complete in 5-21 days depending on scope and requirements, with a flexible delivery method that balances speed and quality.',
    category: 'Timeline',
  },
  {
    questionAr: 'هل الموقع سيكون محسّن للـ SEO؟',
    questionEn: 'Will the website be SEO-optimized?',
    answerAr: 'نعم، نبني الصفحات ببنية SEO سليمة من البداية، مع بيانات وصفية ومسارات واضحة تساعد الموقع على الظهور بشكل أفضل.',
    answerEn: 'Yes, we build pages with sound SEO foundations from day one, including metadata and clear paths that support better visibility.',
    category: 'SEO',
  },
  {
    questionAr: 'هل تقدمون دعم بعد الإطلاق؟',
    questionEn: 'Do you provide post-launch support?',
    answerAr: 'بالتأكيد، نقدم 90 يوم دعم مجاني متضمناً الصيانة والتحديثات والإصلاحات.',
    answerEn: 'Absolutely, we provide 90 days of free support including maintenance, updates, and fixes.',
    category: 'Support',
  },
  {
    questionAr: 'كيف يتم تحديد نطاق المشروع؟',
    questionEn: 'How is project scope defined?',
    answerAr: 'نحدد النطاق حسب حجم الصفحات، مستوى التفاعل، وحجم المحتوى أو الأنظمة المطلوبة. بعد فهم الاحتياج نرسل تصورًا واضحًا للمخرجات والخطوات.',
    answerEn: 'Scope depends on page depth, interaction level, and the amount of content or systems required. After understanding the need, we send a clear outline of deliverables and steps.',
    category: 'Scope',
  },
  {
    questionAr: 'هل يمكنكم التعامل مع المتاجر الإلكترونية؟',
    questionEn: 'Can you handle e-commerce projects?',
    answerAr: 'نعم، لدينا خبرة واسعة في بناء متاجر إلكترونية مع نظام الدفع والشحن والمخزون.',
    answerEn: 'Yes, we have extensive experience building e-commerce platforms with payment, shipping, and inventory systems.',
    category: 'E-commerce',
  },
  {
    questionAr: 'ماذا عن التدريب والتوثيق؟',
    questionEn: 'Will you provide training and documentation?',
    answerAr: 'نعم، نقدم توثيق شاملة وجلسات تدريب لفريقك على إدارة المحتوى والتحديثات.',
    answerEn: 'Yes, we provide comprehensive documentation and training sessions for your team on content management.',
    category: 'Training',
  },
];

const faqVisuals = [
  {
    icon: Clock3,
    accent: 'from-cyan-400 to-sky-500',
    glow: 'shadow-cyan-500/25',
  },
  {
    icon: SearchCheck,
    accent: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/25',
  },
  {
    icon: ShieldCheck,
    accent: 'from-violet-400 to-fuchsia-500',
    glow: 'shadow-violet-500/25',
  },
  {
    icon: CreditCard,
    accent: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-500/25',
  },
  {
    icon: Store,
    accent: 'from-rose-400 to-pink-500',
    glow: 'shadow-rose-500/25',
  },
  {
    icon: BookOpenCheck,
    accent: 'from-blue-400 to-indigo-500',
    glow: 'shadow-blue-500/25',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const, bounce: 0.4 } }
};

const HomePage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);
  const mouseX = useSpring(0, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 20 });
  const [mobileTestimonialIndex, setMobileTestimonialIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const floatImageY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const floatImageY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  usePageMetadata(getPageSeoByPath('/', lang));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
       const x = (e.clientX / window.innerWidth - 0.5) * 60;
       const y = (e.clientY / window.innerHeight - 0.5) * 60;
       mouseX.set(x);
       mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      setMobileTestimonialIndex((current) => (current + 1) % homeTestimonials.length);
    }, 4500);

    return () => {
      window.clearInterval(autoplay);
    };
  }, []);

  const showcaseProjects = featuredProjects.slice(0, 6);
  const mobileTestimonial = homeTestimonials[mobileTestimonialIndex] ?? homeTestimonials[0];
  const TestimonialPrevIcon = isArabic ? ArrowRight : ArrowLeft;
  const TestimonialNextIcon = isArabic ? ArrowLeft : ArrowRight;

  const abstractTechImg = encodeURI('/images/Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png');
  const premiumDashboardImg = encodeURI('/images/Gemini_Generated_Image_uigh61uigh61uigh.png');

  const parallaxX = useTransform(mouseX, (x) => x * -1.5);
  const parallaxY = useTransform(mouseY, (y) => y * -1.5);
  const orb1X = useTransform(mouseX, (x) => x * 2);
  const orb1Y = useTransform(mouseY, (y) => y * 2);
  const orb2X = useTransform(mouseX, (x) => x * -2);
  const orb2Y = useTransform(mouseY, (y) => y * -1);

  const renderHomeServiceCard = (service: (typeof services)[number], index: number) => {
    const Icon = serviceIcons[index] || Rocket;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        key={service.title}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="surface-card group relative cursor-pointer overflow-hidden rounded-[1.6rem] p-4 glass-card hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] md:rounded-[2.5rem] md:p-8"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/0 via-violet-500/0 to-transparent transition-colors duration-700 group-hover:from-cyan-500/20 group-hover:via-violet-500/10" />
        <div className="relative z-10">
          <motion.div
            className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2.5 text-cyan-300 shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-slate-900 md:p-4"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <Icon className="h-6 w-6 md:h-8 md:w-8" />
          </motion.div>
          <h3 className="mt-5 font-display text-[1.35rem] font-semibold leading-tight text-white transition-colors group-hover:text-cyan-300 md:mt-8 md:text-3xl">
            {text(service.title, service.englishTitle ?? service.title)}
          </h3>
          <p className="mt-2.5 text-sm leading-6 text-slate-400 transition-colors group-hover:text-slate-300 md:mt-4 md:text-base md:leading-8">
            {text(service.description, service.englishDescription ?? service.description)}
          </p>
          <div className="mt-4 h-1 w-8 rounded-full bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-cyan-400 md:mt-6 md:w-12 md:group-hover:w-24" />
        </div>
      </motion.div>
    );
  };

  const renderHomeTestimonialCard = (
    item: (typeof homeTestimonials)[number],
    index: number,
    animateOnView = true,
  ) => (
    <motion.div
      className="surface-card-strong group relative flex flex-col gap-4 overflow-hidden rounded-[1.6rem] border border-white/8 p-4 glass-card md:rounded-[2.5rem] md:p-8 md:gap-6"
      animate={animateOnView ? undefined : { opacity: 1, y: 0 }}
      initial={animateOnView ? { opacity: 0, y: 40 } : false}
      key={`${item.nameEn}-${index}`}
      transition={{ delay: index * 0.15 }}
      viewport={animateOnView ? { once: true } : undefined}
      whileHover={{ y: -8 }}
      whileInView={animateOnView ? { opacity: 1, y: 0 } : undefined}
    >
      <div className={`absolute inset-x-4 top-0 h-px bg-gradient-to-r ${item.color} opacity-80 md:inset-x-8`} />
      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-cyan-200">
          {text(item.highlightAr, item.highlightEn)}
        </span>
        <div className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-[0_16px_30px_rgba(0,0,0,0.22)]`}>
          <Quote className="h-4 w-4" />
        </div>
      </div>
      <p className="relative z-10 flex-1 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
        {text(item.quoteAr, item.quoteEn)}
      </p>
      <div className="relative z-10 flex items-start gap-3 border-t border-white/5 pt-3.5 md:gap-4 md:pt-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-base font-bold text-white ${item.color} md:h-12 md:w-12 md:text-xl`}>
          {text(item.avatarAr, item.avatarEn)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-white md:text-base">{text(item.nameAr, item.nameEn)}</p>
          <p className="text-sm text-slate-400">{text(item.roleAr, item.roleEn)}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">
          {text(item.companyAr, item.companyEn)}
        </span>
      </div>
      <p className="relative z-10 text-[11px] leading-5 text-slate-500">
        {text('كل تعليق يركّز على نقطة مختلفة ظهرت بعد الإطلاق.', 'Each note highlights a different change noticed after launch.')}
      </p>
    </motion.div>
  );

  const renderIndustryCard = (industry: (typeof industries)[number], index: number) => (
    <motion.div
      className="glass-card group flex cursor-default flex-col gap-2.5 rounded-[1.25rem] border border-white/8 p-3.5 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_20px_40px_rgba(45,212,191,0.1)] md:rounded-[2rem] md:p-6 md:gap-4"
      initial={{ opacity: 0, scale: 0.9 }}
      key={industry.nameEn}
      transition={{ delay: index * 0.1, type: 'spring', bounce: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <div className="w-fit rounded-xl bg-cyan-400/10 p-2.5 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-black md:p-3">
        <industry.icon className="h-6 w-6 md:h-8 md:w-8" />
      </div>
      <p className="font-display text-[13px] font-bold leading-5 text-white transition-colors group-hover:text-cyan-300 md:text-base">
        {text(industry.nameAr, industry.nameEn)}
      </p>
      <p className="hidden text-xs leading-5 text-slate-500 md:block">{text(industry.descAr, industry.descEn)}</p>
    </motion.div>
  );

  const renderImpactStatCard = (stat: (typeof impactStats)[number], index: number) => (
    <motion.div
      key={stat.labelEn}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group relative border border-white/5 p-4 text-center transition-colors hover:bg-white/[0.03] md:p-12"
    >
      <div className="mb-4 flex justify-center md:mb-6">
        <div className="rounded-2xl bg-white/5 p-3 text-cyan-400 transition-transform duration-500 group-hover:scale-110 md:p-4">
          <stat.icon className="h-6 w-6 md:h-8 md:w-8" />
        </div>
      </div>
      <p className="mb-1.5 font-display text-2xl font-bold text-white drop-shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-colors group-hover:text-cyan-300 md:mb-3 md:text-6xl">
        {stat.num}
      </p>
      <p className="text-sm font-bold text-white md:text-lg">{text(stat.labelAr, stat.labelEn)}</p>
      <p className="mt-1 text-[11px] leading-5 text-slate-500 md:text-sm">{text(stat.subAr, stat.subEn)}</p>
      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_10px_rgba(45,212,191,0.8)] transition-all duration-500 group-hover:w-3/4" />
    </motion.div>
  );

  const renderProcessStepCard = (step: (typeof processCards)[number], index: number) => (
    <motion.div
      key={step.phase}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className={`relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[1.6rem] border bg-gradient-to-b p-4 glass-card group ${step.color} to-transparent md:min-h-[350px] md:rounded-[2.5rem] md:p-8`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div>
        <p className="mb-3 font-display text-4xl font-black text-white/5 md:mb-6 md:text-7xl">{step.phase}</p>
        <h3 className="mb-3 font-display text-[1.1rem] font-bold text-white transition-colors group-hover:text-cyan-300 md:mb-4 md:text-2xl">
          {text(step.titleAr, step.titleEn)}
        </h3>
        <span className="mb-4 inline-block rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-400 md:mb-6 md:px-3 md:text-xs">
          {text(step.durationAr, step.durationEn)}
        </span>
        <p className="text-sm leading-6 text-slate-400 md:leading-7">{text(step.descAr, step.descEn)}</p>
      </div>
      <div className="mt-5 border-t border-white/5 pt-3.5 md:mt-8 md:pt-5">
        <p className="text-sm font-bold tracking-wide text-cyan-400">{text(step.deliverableAr, step.deliverableEn)}</p>
      </div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="relative">
      
      {/* FLOATING PARALLAX IMAGES (Global details) - Hidden on Mobile */}
      <motion.img 
         style={{ y: floatImageY1 }} 
         src="/images/ChatGPT%20Image%20Apr%208%2C%202026%2C%2011_23_42%20AM.png" 
         className="absolute right-[-10%] top-[25%] w-[350px] rounded-3xl opacity-[0.08] mix-blend-screen pointer-events-none z-[-1] blur-[2px] transform rotate-12 hidden lg:block"
      />
      <motion.img 
         style={{ y: floatImageY2 }} 
         src="/images/workspace-team.webp" 
         className="absolute left-[-5%] top-[60%] w-[400px] rounded-[3rem] opacity-[0.06] mix-blend-screen pointer-events-none z-[-1] blur-md transform -rotate-12 hidden lg:block"
      />

      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        id="hero" 
        className="section-shell relative flex min-h-[auto] items-center overflow-x-hidden pb-8 pt-3 md:min-h-[95vh] md:overflow-visible md:pb-24 md:pt-[120px]"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[2.2rem] md:rounded-b-[4rem]">
          <motion.div 
            style={{ x: parallaxX, y: parallaxY }}
            className="w-full h-full scale-[1.15]"
          >
            <img
              src="/images/hero-background.webp"
              fetchPriority="high"
              loading="eager"
              className="w-full h-full object-cover opacity-30 blur-[2px]"
              alt="Background Office"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#06090f]/80 via-[#06090f]/60 to-[#06090f] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#06090f_100%)] opacity-70 pointer-events-none" />
        </div>

        {/* Dynamic Glowing Orbs */}
        <motion.div 
          style={{ x: orb1X, y: orb1Y }}
          className="hero-orb right-[5%] top-[10%] h-[400px] w-[400px] bg-cyan-400/15" />
        <motion.div 
          style={{ x: orb2X, y: orb2Y }}
          className="hero-orb left-[5%] top-[40%] h-[500px] w-[500px] bg-violet-600/15" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 md:gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative space-y-5 md:space-y-8"
          >
            <motion.div variants={staggerItem} className="relative space-y-4 overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#09111a]/72 p-4 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-5 md:space-y-5 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="absolute inset-0 lg:hidden">
                <img
                  src="/images/hero-mobile-overlay.webp"
                  loading="eager"
                  alt=""
                  className="h-full w-full scale-110 object-cover opacity-20 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#06090f]/25 via-[#06090f]/82 to-[#06090f]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.16),transparent_48%)]" />
              </div>
              <div className="relative z-10 space-y-4 md:space-y-5">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="section-kicker inline-flex max-w-max items-center border-cyan-400/30 bg-cyan-900/40 px-3 py-2 text-[0.62rem] tracking-[0.14em] text-cyan-50 shadow-[0_0_15px_rgba(45,212,191,0.2)] sm:px-4 sm:text-[0.72rem]"
              >
                <Sparkles className={`${isArabic ? 'ml-2' : 'mr-2'} inline h-3.5 w-3.5 text-cyan-300`} />
                {text('تصميم تجارب رقمية مميزة', 'Crafting Premium Digital Experiences')}
              </motion.div>

              <div className="space-y-3 md:space-y-4">
                <h1 className="font-display text-[1.55rem] font-semibold leading-[1.08] text-white sm:text-[2.3rem] md:text-5xl lg:text-7xl xl:text-[5.5rem]">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">Notaq</span>
                  <span className="mx-1.5 text-white/20 sm:mx-2 md:mx-3">|</span>
                  <span className="text-gradient animate-float inline-block pb-2">{text('نُطق', 'Notaq')}</span>
                </h1>
                <p className="font-display text-[0.95rem] font-medium text-cyan-100/90 sm:text-[1.45rem] md:text-5xl">
                  {text('وكالة تصميم وتطوير', 'Creative Development Agency')}
                </p>
              </div>

              {/* Meaning Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="inline-flex w-full items-center sm:w-auto"
              >
                <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 backdrop-blur-md sm:w-auto sm:justify-start sm:rounded-2xl sm:px-4">
                  <span className="font-display text-base font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-teal-400 sm:text-lg">
                    {text('نُطق', 'Notaq')}
                  </span>
                  <motion.span
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    className="text-sm text-cyan-400"
                  >
                    {text('←', '→')}
                  </motion.span>
                  <span className="text-[13px] font-medium leading-6 tracking-wide text-slate-300 sm:text-sm">
                    {text('ابدأ بطريق رقمي أقوى', 'Start with a stronger digital path')}
                  </span>
                </div>
              </motion.div>

              <p className="mt-3 max-w-xl text-[0.93rem] font-medium leading-7 text-slate-300 md:mt-6 md:text-xl md:leading-9">
                {text(
                  'احصل على موقع أو صفحة خدمة أو تجربة رقمية تخدم شركتك في مصر والخليج برسالة أوضح وثقة أعلى.',
                  'Get a website, service page, or digital experience for your business across Egypt and the Gulf with clearer positioning and stronger trust.',
                )}
              </p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:flex-wrap md:gap-4 md:pt-4">
              <Link className="btn-primary group w-full shadow-[0_0_30px_rgba(45,212,191,0.3)] hover:shadow-[0_0_40px_rgba(45,212,191,0.5)] sm:w-auto" to={localizePath('/projects')}>
                <span className="relative z-10 flex items-center gap-2">
                  {text('استكشف مشاريعنا', 'Explore Projects')}
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ArrowUpLeft className="h-5 w-5 -rotate-90 group-hover:rotate-0 transition-transform duration-300" />
                  </motion.span>
                </span>
              </Link>
              <Link className="btn-secondary group w-full sm:w-auto" to={localizePath('/contact')}>
                {text('ناقش احتياج شركتك', 'Discuss your company need')}
                <Mail className="h-4 w-4 transition-transform group-hover:scale-125 group-hover:text-cyan-400" />
              </Link>
            </motion.div>

            <motion.div variants={staggerItem} className="grid grid-cols-2 mobile-2-cols gap-3 pt-5 sm:grid-cols-2 sm:gap-4 md:pt-8 lg:grid-cols-4 lg:gap-6">
              {portfolioProfile.stats.map((stat, index) => (
                <div
                  key={stat.englishLabel ?? stat.label}
                  className={`cursor-pointer rounded-[1.15rem] border border-white/8 bg-white/[0.03] p-3.5 transition-transform hover:-translate-y-1 sm:rounded-[1.25rem] sm:p-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 ${
                    isArabic
                      ? 'text-right lg:border-l lg:border-white/10 lg:pl-4 lg:pr-6'
                      : 'text-left lg:border-r lg:border-white/10 lg:pr-4 lg:pl-6'
                  }`}
                >
                  <p className="font-display text-[1.9rem] font-bold text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-violet-400 sm:text-[2.2rem] md:text-4xl">
                    <AnimatedCounter value={stat.value} duration={2000 + (index * 500)} />
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-slate-400 sm:text-sm">{text(stat.label, stat.englishLabel ?? stat.label)}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            className="relative mx-auto mt-1 hidden w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:mt-0 lg:block perspective-none lg:perspective-[1000px]"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotateZ: [0, 1, 0, -1, 0] }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
              className="relative lg:transform-style-3d shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-x-6 top-6 hidden h-[260px] items-center justify-center rounded-[2rem] bg-cyan-600/20 blur-2xl animate-pulse sm:flex md:inset-x-4 md:top-8 md:h-[460px] md:rounded-[3.5rem] md:rotate-[4deg]" />
              
              <div className="surface-card-strong relative overflow-hidden rounded-[1.7rem] border-[1px] border-white/20 p-4 glass-card md:rounded-[3.5rem] md:p-10">
                {/* Embedded animated backdrop in 3D card */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={illustrationAssets.multiDeviceSync.src}
                    alt={illustrationAssets.multiDeviceSync.alt}
                    className="h-full w-full object-cover opacity-20 mix-blend-screen saturate-75"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_45%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-[#06090f]/45 to-transparent" />
                </div>

                <div className="relative z-10 space-y-5 md:space-y-10">
                  <div className="space-y-3 text-center md:space-y-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-gradient-to-br from-cyan-400/90 to-violet-600/90 backdrop-blur-md shadow-[0_20px_50px_-10px_rgba(45,212,191,0.6)] sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-[2rem]"
                    >
                      <Code2 className="h-6 w-6 text-white sm:h-8 sm:w-8 md:h-10 md:w-10" />
                    </motion.div>
                    <div>
                      <h2 className="mt-3 font-display text-[1.35rem] font-bold tracking-wide text-white drop-shadow-md md:mt-6 md:text-4xl">
                        {text('التميز التقني', 'Technical excellence')}
                      </h2>
                      <p className="mt-1.5 text-[13px] font-medium text-cyan-300 drop-shadow-sm sm:text-base md:text-lg">
                        {text('تنفيذ بريميوم', 'Premium execution')}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 md:gap-4">
                    {technicalHighlights.map((item) => (
                      <motion.div
                        key={item.titleEn}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        whileHover={{ scale: 1.03, x: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                        className="flex cursor-pointer items-center gap-2.5 rounded-[1.1rem] border border-white/10 bg-[#06090f]/60 p-3 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl md:gap-4 md:rounded-2xl md:p-4"
                      >
                        <div className="rounded-xl bg-cyan-400/20 p-2.5 text-cyan-300 shadow-[0_0_15px_rgba(45,212,191,0.4)] md:p-3">
                          <item.icon className="h-4.5 w-4.5 md:h-5 md:w-5" />
                        </div>
                        <p className="text-sm font-bold leading-6 text-white sm:text-base md:text-lg">{text(item.titleAr, item.titleEn)}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* NEW Infinite Marquee Visual Break */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#06090f] py-8 md:py-10">
        <div className="section-shell md:hidden">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-center">
            <span className="pill border-white/10 bg-white/[0.03] text-cyan-100">
              PREMIUM DIGITAL EXPERIENCES
            </span>
            <span className="pill border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
              CREATIVE STUDIO
            </span>
          </div>
        </div>
        <div className="relative hidden md:flex">
          <div className="absolute inset-0 z-10 w-full bg-gradient-to-r from-[#06090f] via-transparent to-[#06090f] pointer-events-none" />
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex min-w-max items-center gap-16 px-8 md:gap-32"
          >
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-32">
                <span className="flex items-center gap-4 break-words font-display text-xl font-bold uppercase tracking-widest text-white/5 md:gap-8 md:text-5xl">
                  PREMIUM DIGITAL EXPERIENCES <Sparkles className="h-6 w-6 text-cyan-400/20 md:h-10 md:w-10" />
                </span>
                <span className="flex items-center gap-4 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 bg-clip-text font-display text-xl font-bold uppercase tracking-widest text-transparent md:gap-8 md:text-5xl">
                  CREATIVE STUDIO <Rocket className="h-6 w-6 text-violet-400/20 md:h-10 md:w-10" />
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <PageImageShowcaseSection showcase={pageImageShowcases.home} />

      {/* CORPORATE TRUST SYSTEM */}
      <section className="section-shell relative overflow-hidden py-14 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionTitle
              description={text(
                'هنا تجد ما تحتاجه لاتخاذ قرارك بهدوء: قيمة واضحة، أدلة ثقة، وخطوة تالية مفهومة بدون ارتباك.',
                'Here you find what you need to decide with confidence: clear value, trust proof, and an obvious next step without confusion.',
              )}
              kicker={text('مسار واضح لاتخاذ القرار', 'Clear Decision Path')}
              title={text('افهم القيمة بسرعة، ثم اختر خطوتك التالية بثقة', 'Understand the value quickly, then choose your next step with confidence')}
            />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal.label.en}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] md:rounded-[1.7rem] md:p-5"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200/80 md:text-xs">{signal.value}</p>
                  <h3 className="mt-2 font-display text-[0.98rem] font-bold leading-6 text-white md:text-lg">
                    {text(signal.label.ar, signal.label.en)}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-5 text-slate-500 md:text-sm md:leading-6">
                    {text(signal.note.ar, signal.note.en)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-3">
            {companyCapabilities.map((capability, index) => (
              <motion.article
                key={capability.title.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${capability.tone} p-5 transition-colors hover:border-white/20 md:rounded-[2.2rem] md:p-7`}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-200">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold leading-8 text-white md:text-2xl">
                  {text(capability.title.ar, capability.title.en)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {text(capability.description.ar, capability.description.en)}
                </p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-slate-500 md:text-sm">
                  {text(capability.proof.ar, capability.proof.en)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Developers Break Section (Generated Image + Interactive Blob) */}
      <section className="relative flex min-h-[420px] h-[64vh] w-full items-center justify-center overflow-hidden sm:h-[62vh] md:h-[70vh]">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, y: -50 }}
            whileInView={{ scale: 1.05, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
              src={enrichmentMediaById['home-story-strategy'].src} 
            alt="Agency Developers Working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 py-32 bg-gradient-to-t from-[#06090f] to-transparent" />
          <div className="absolute inset-x-0 top-0 py-32 bg-gradient-to-b from-[#06090f] to-transparent" />
          <div className="absolute inset-0 bg-cyan-950/40 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card relative inline-block overflow-hidden rounded-[2.2rem] border-white/20 p-5 shadow-[0_0_150px_rgba(45,212,191,0.2)] backdrop-blur-xl group sm:p-7 md:rounded-[4rem] md:p-16"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="relative z-10 mb-4 flex flex-col items-center gap-3 font-display text-2xl font-bold text-white drop-shadow-xl sm:text-3xl md:mb-6 md:gap-4 md:text-7xl">
              <span className="inline-block w-fit rounded-full bg-cyan-400 px-3 py-1.5 text-sm font-bold tracking-wide text-slate-900 md:px-6 md:py-2 md:text-2xl">WE DELIVER</span>
              {text('فريق عمل متخصص بالكامل', 'A fully specialized team')}
            </h2>
            <p className="relative z-10 text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-50 sm:text-xl md:text-4xl">
              {text('كل سطر برمجي، وكل حركة مدروسة لنجاحك', 'Every line of code and every motion is designed for your success')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-shell relative py-16 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8 md:space-y-10"
          >
            <SectionTitle
              description={text(
                'ابدأ بصناعة القصة الرقمية قبل كتابة الكود، حتى لا تكتفي واجهتك بالجمال، بل تعمل كطبقة مبيعات واضحة لصالحك طوال الـ 24 ساعة.',
                'Start by shaping the digital story before code so your interface does more than look good. It works like a clear sales layer for your brand around the clock.',
              )}
              kicker={text('من نحن', 'About us')}
              title={text(
                'اجعل حضور شركتك يجمع بين التميز البصري والوضوح التجاري',
                'Let your company presence combine standout visual quality with commercial clarity',
              )}
            />
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg md:leading-9"
            >
              {text(
                'من أول سكتش بصري إلى آخر لمسة داخل الواجهة نحافظ على الإيقاع البصري واضحًا ومقصودًا.',
                'From the first visual sketch to the final interface detail, we keep the visual rhythm deliberate and easy to feel.',
              )}
            </motion.p>
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {sectors.map((sector, idx) => (
                <motion.span 
                  key={sector.en} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="pill cursor-pointer text-xs font-medium shadow-[0_5px_15px_-5px_rgba(45,212,191,0.2)] transition-colors hover:border-cyan-400/60 hover:bg-cyan-400/30 sm:text-sm"
                >
                  {text(sector.ar, sector.en)}
                </motion.span>
              ))}
            </div>
                <Link className="btn-secondary group mt-2 text-base shadow-[0_5px_20px_rgba(255,255,255,0.05)] md:mt-4 md:text-lg" to={localizePath('/about')}>
              {text('اكتشف قصتنا بالكامل', 'Discover our full story')}
              <motion.span animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <ArrowUpLeft className="h-5 w-5" />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="mobile-ornament absolute -inset-6 rounded-[3.5rem] bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-100 animate-pulse" />
            
            {/* Split Media (Video + Image layers) */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[1.5px] border-white/20 shadow-2xl transition-colors duration-500 group-hover:border-cyan-400/40 md:rounded-[3.5rem]">
               {/* Main image */}
              <img 
                src={portfolioProfile.aboutImage} 
                alt="Creative Collaboration" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090f]/90 via-transparent to-transparent opacity-80" />
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card absolute bottom-4 left-4 right-4 z-20 rounded-[1.6rem] border-white/30 p-4 shadow-2xl backdrop-blur-2xl md:bottom-8 md:left-8 md:right-8 md:rounded-3xl md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 p-3 text-[#06090f] shadow-[0_0_30px_rgba(45,212,191,0.6)] md:p-4">
                      <BadgeCheck className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-white md:text-xl">{text('عزم لا يلين تجاه الجودة', 'Relentless commitment to quality')}</p>
                      <p className="mt-1 font-display text-[10px] font-medium tracking-[0.22em] text-cyan-300 sm:text-xs">WORLD-CLASS EXECUTION</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* NOTAQ VS TRADITIONAL — Side-by-Side Comparison         */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('لماذا نُطق؟', 'Why Notaq?')}</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {text('نُطق مقابل ', 'Notaq vs ')}
              <span className="text-slate-500">{text('وكالات التصميم التقليدية', 'traditional design agencies')}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 md:mt-5 md:text-lg md:leading-9">
              {text(
                'ليس مجرد كلام؛ إليك مقارنة مباشرة بالمعايير التي تهم قرار شركتك فعلاً.',
                'Not just words. Here is a direct comparison around the standards your company decision actually needs.',
              )}
            </p>
          </div>
          <div className="glass-card rounded-3xl md:rounded-[3rem] border border-white/8 overflow-hidden">
            {/* Mobile: Stacked cards, Desktop: Table */}
            <div className="hidden md:grid grid-cols-3 bg-white/[0.03]">
              <div className="p-4 md:p-6 text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest border-b border-white/5">
                {text('المعيار', 'Criteria')}
              </div>
              <div className="p-6 text-center border-b border-white/5 border-x border-white/5">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 text-[#06090f] px-4 py-1.5 rounded-full text-sm font-black">
                  ⚡ {text('نُطق', 'Notaq')}
                </span>
              </div>
              <div className="p-6 text-center border-b border-white/5">
                <span className="text-slate-500 text-sm font-semibold">{text('وكالة تقليدية', 'Traditional agency')}</span>
              </div>
            </div>
            {/* Mobile: stacked rows */}
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.criteriaEn}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Mobile Layout */}
                <div className="flex flex-col gap-3 border-b border-white/5 p-4 transition-colors hover:bg-white/[0.02] md:hidden">
                  <span className="text-sm font-medium text-slate-300">{text(row.criteriaAr, row.criteriaEn)}</span>
                  <div className="grid gap-2">
                    <span className="inline-flex max-w-full items-center rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-300">
                      {text(row.notaqAr, row.notaqEn)}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">vs</span>
                    <span className="text-xs leading-6 text-slate-400">{text(row.tradAr, row.tradEn)}</span>
                  </div>
                </div>
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                  <div className="p-5 text-slate-300 text-sm font-medium flex items-center">{text(row.criteriaAr, row.criteriaEn)}</div>
                  <div className="p-5 text-center border-x border-white/5 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm bg-cyan-400/10 px-3 py-1 rounded-full">
                      {text(row.notaqAr, row.notaqEn)}
                    </span>
                  </div>
                  <div className="p-5 text-center flex items-center justify-center">
                    <span className="text-slate-500 text-sm">{text(row.tradAr, row.tradEn)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* SERVICES SECTION */}
      <section id="services" className="section-shell py-16 md:py-32 relative overflow-hidden">
        {/* Abstract Background for services */}
        <div className="absolute inset-0 z-0 opacity-15">
          <motion.img 
             initial={{ scale: 1.1 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 5 }}
             src={abstractTechImg} 
             alt="Abstract 3D Shapes" 
             className="w-full h-full object-cover mix-blend-screen scale-125"
          />
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="rounded-[2rem] border border-white/10 bg-[#06090f]/50 p-5 shadow-2xl backdrop-blur-md md:p-8 lg:max-w-2xl lg:rounded-[2.5rem]">
              <SectionTitle
                description={text(
                  'نقدم باقة خدمات رقمية متكاملة مصممة خصيصاً للارتقاء بصورة علامتك التجارية، ونسخها بقوة في ذاكرة عملائك.',
                  'We offer a full digital service stack crafted to elevate your brand image and make it memorable for the right audience.',
                )}
                kicker={text('خدماتنا', 'Services')}
                title={text('حلول مبتكرة تبني الثقة وتقود للنجاح المؤكد', 'Innovative solutions that build trust and drive growth')}
              />
            </div>
              <Link className="btn-secondary group text-base shadow-[0_0_20px_rgba(45,212,191,0.15)] md:text-lg" to={localizePath('/services')}>
              {text('تصفح كافة الخدمات', 'Browse all services')}
              <motion.span whileHover={{ scale: 1.2 }} className="bg-white/10 p-2 rounded-full border border-white/20">
                <ArrowUpLeft className="h-5 w-5" />
              </motion.span>
            </Link>
          </div>

          <div className="grid gap-4 md:hidden">
            {services.map((service, index) => renderHomeServiceCard(service, index))}
          </div>
          <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => renderHomeServiceCard(service, index))}
          </div>
        </div>
      </section>


      {/* SERVICE PACKAGES — Clear buying paths */}
      <section className="section-shell relative py-14 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionTitle
              description={text(
                'بدل قائمة خدمات عامة، ترى مسارات واضحة حسب نوع احتياج شركتك وحجم القرار المطلوب.',
                'Instead of a generic service list, you see clear paths based on your company need and decision depth.',
              )}
              kicker={text('مسارات تنفيذ واضحة', 'Clear Delivery Tracks')}
              title={text('اختر شكل الحضور الذي تحتاجه شركتك', 'Choose the presence your company needs')}
            />
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 md:rounded-[2.2rem] md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-200/80">Visitor Journey</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {clientJourney.map((step) => (
                  <div key={step.phase} className="rounded-[1.1rem] border border-white/8 bg-[#06090f]/55 p-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg font-black text-cyan-300">{step.phase}</span>
                      <h3 className="text-sm font-bold text-white">{text(step.title.ar, step.title.en)}</h3>
                    </div>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{text(step.handoff.ar, step.handoff.en)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {servicePackages.map((pack, index) => (
              <motion.article
                key={pack.name.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${pack.accent} p-5 md:rounded-[2.2rem] md:p-7`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  {text('مناسب لـ', 'Best for')}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{text(pack.bestFor.ar, pack.bestFor.en)}</p>
                <h3 className="mt-5 font-display text-2xl font-bold leading-9 text-white">
                  {text(pack.name.ar, pack.name.en)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text(pack.promise.ar, pack.promise.en)}</p>
                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {pack.deliverables.map((deliverable) => (
                    <div key={deliverable.en} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{text(deliverable.ar, deliverable.en)}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>




      {/* ═══════════════════════════════════════════════════════ */}
      {/* CLIENT WINS — Animated Numbers Bar                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative py-14 md:py-24 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-violet-900/10 pointer-events-none" />
        <div className="section-shell mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">Proven Impact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">{text('أرقام تتحدث بدلاً عنا', 'Numbers that speak for us')}</h2>
          </div>
          <div className="grid grid-cols-2 mobile-2-cols gap-0 overflow-hidden rounded-[1.5rem] border border-white/5 md:hidden">
            {impactStats.map((stat, index) => renderImpactStatCard(stat, index))}
          </div>
          <div className="relative hidden gap-0 divide-y divide-white/5 md:grid md:grid-cols-4 md:divide-y-0">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
            {impactStats.map((stat, index) => renderImpactStatCard(stat, index))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* HORIZONTAL PROCESS CARDS — Deep Dive Info               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-kicker mb-4">How We Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                {text('الطريق من فكرة إلى منصة حية', 'The path from an idea to a live platform')}
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-base leading-8">
              {text(
                'عملية مجربة ومدروسة تضمن تقليل الوقت الضائع وزيادة جودة المخرجات.',
                'A proven process designed to reduce wasted time and raise the quality of every delivery.',
              )}
            </p>
          </div>

          <div className="grid gap-4 md:hidden">
            {processCards.map((step, index) => renderProcessStepCard(step, index))}
          </div>
          <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
            {processCards.map((step, index) => renderProcessStepCard(step, index))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-shell py-14 md:py-32 relative">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-cyan-700/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between mb-16">
            <div className="md:max-w-xl">
              <SectionTitle
                description={text(
                  'نماذج مختارة تم تنفيذها بدقة لتجمع بين جمالية التصميم المترف وقوة الأداء التقني.',
                  'Selected work crafted to combine premium visual design with serious technical performance.',
                )}
                kicker={text('الأعمال السابقة', 'Selected work')}
                title={text('مشاريع ومواقع تجسد إمكانياتنا العالية وحلولنا الفنية', 'Projects that showcase our creative and technical range')}
              />
            </div>
                <Link className="btn-secondary text-lg group" to={localizePath('/projects')}>
              {text('استكشف المعرض بالكامل', 'Explore the full showcase')}
              <ArrowUpLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-4 md:hidden">
            {showcaseProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="hidden gap-12 md:grid md:grid-cols-2 xl:grid-cols-3">
            {showcaseProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH MEGA BACKGROUND */}
      <section id="contact" className="section-shell pb-14 pt-12 md:pb-24 md:pt-16 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#06090f] p-5 shadow-[0_50px_150px_-50px_rgba(45,212,191,0.5)] backdrop-blur-3xl md:rounded-[4rem] md:p-12 lg:p-20"
        >
          {/* Detailed Image/Video Content for Contact Section */}
          <div className="absolute inset-0 z-0">
             <img src={premiumDashboardImg} alt="Premium dashboard" className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110" />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#06090f]/95 via-[#06090f]/80 to-cyan-900/40" />
          </div>

          <div className="mobile-ornament absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/30 blur-[150px] -mr-[300px] -mt-[300px] mix-blend-screen pointer-events-none animate-pulse" />
          <div className="mobile-ornament absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[120px] -ml-[250px] -mb-[250px] mix-blend-screen pointer-events-none" />
          
          <div className="relative z-10 grid items-center gap-8 md:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="space-y-6 md:space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="section-kicker border-cyan-400/50 bg-cyan-400/10 px-4 py-2.5 font-bold text-cyan-200 shadow-[0_0_20px_rgba(45,212,191,0.3)] md:px-6 md:py-3"
              >
                {text('تواصل معنا اليوم', 'Talk to us today')}
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-[1.9rem] font-bold leading-tight text-white text-reveal drop-shadow-2xl sm:text-4xl md:text-6xl"
              >
                {text('الانطباعات العظيمة', 'Great first impressions')} <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">
                  {text('تُصنع، ولا تحدث صدفة.', 'are designed, never accidental.')}
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl text-base font-medium leading-8 text-slate-300 md:text-xl md:leading-9"
              >
                {text(
                  'جهزنا لك فريقاً متكاملاً من المصممين والمطورين جاهزين لمناقشة أهدافك. احجز مكالمة قصيرة لنتحدث عن الطريقة التي سنبني بها واجهتك القادمة.',
                  'Our team of designers and developers is ready to discuss your goals. Book a short call and let us map the right direction for your next digital interface.',
                )}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap md:gap-5 md:pt-4"
              >
              <Link className="btn-primary group text-base shadow-[0_15px_40px_rgba(45,212,191,0.5)] hover:shadow-[0_20px_60px_rgba(45,212,191,0.7)] md:px-10 md:py-5 md:text-xl" to={localizePath('/contact')}>
                  {text('احجز استشارتك المجانية', 'Book your free consultation')}
                  <ArrowUpLeft className="h-5 w-5 transition-transform group-hover:-translate-y-1 md:h-6 md:w-6" />
                </Link>
                <a className="btn-secondary glass-card group flex items-center gap-3 break-all text-sm hover:bg-white/10 md:px-8 md:py-4 md:text-lg" href={`mailto:${portfolioProfile.email}`}>
                  <motion.span whileHover={{ rotate: 15 }} className="rounded-full border border-cyan-400/30 bg-cyan-400/20 p-2.5 text-cyan-300 shadow-inner transition-colors group-hover:bg-cyan-400 group-hover:text-black md:p-3">
                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                  </motion.span>
                  {text('راسلنا مباشرة', 'Email us directly')}
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              className="surface-card relative space-y-6 overflow-hidden rounded-[2rem] border-cyan-400/40 bg-[#06090f]/60 p-5 glass-card group shadow-[0_0_80px_rgba(139,92,246,0.2)] backdrop-blur-3xl md:rounded-[3rem] md:p-10 md:space-y-8"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-[#06090f]/92 to-transparent z-0" />
              
              <div
                className={`absolute top-0 w-32 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 shadow-[0_0_20px_cyan] ${
                  isArabic ? 'right-10' : 'left-10'
                }`}
              />
              
              <div className="relative z-10">
                 <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white drop-shadow-lg md:mb-8 md:gap-4 md:text-3xl">
                   <div className="rounded-2xl border border-violet-500/30 bg-violet-500/20 p-2.5 backdrop-blur-md md:p-3">
                     <BrainCircuit className="h-6 w-6 text-violet-300 md:h-8 md:w-8" />
                   </div>
                   {text('لماذا نُطق؟', 'Why Notaq?')}
                 </h3>
                 <p className="mb-7 text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                   {text(
                     'التنفيذ عندنا لا يتوقف عند الشكل فقط، بل يدخل مباشرة في مسار بناء واضح يُسرّع التسليم ويحافظ على نظافة الكود.',
                     'Our process does not stop at visuals. It moves directly into a clear build path that speeds delivery and keeps the codebase clean.',
                   )}
                 </p>
                  <ul className="space-y-4 md:space-y-6">
                   {contactReasons.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/20 p-3.5 text-base font-medium leading-relaxed text-slate-100 backdrop-blur-sm transition-colors hover:border-cyan-400/30 md:gap-4 md:p-4 md:text-xl">
                        <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-cyan-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)] md:h-7 md:w-7" />
                        <span>{text(item.ar, item.en)}</span>
                      </li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SUCCESS STORIES — In-Depth Case Studies                */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-violet-900/5 pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('حالات النجاح', 'Success Stories')}</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {text('مشاريع حقيقية،', 'Real projects,')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                {text('نتائج حقيقية', 'real impact')}
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto leading-8">
              {text(
                'اطّلع على كيف ساعدنا شركات مختلفة في تحقيق أهدافها الرقمية والوصول إلى نتائج استثنائية.',
                'See how we helped diverse companies achieve their digital goals and exceptional results.',
              )}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {successStories.map((story, index) => {
              const StoryIcon = story.icon;
              return (
                <motion.div
                  key={story.titleEn}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-lg transition-all md:rounded-[2.5rem] md:p-8"
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${story.colorEn} opacity-5 group-hover:opacity-15 blur-3xl transition-opacity duration-500`} />

                  <div className="relative z-10 space-y-5">
                    <div className="flex items-start justify-between">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${story.colorEn} shadow-lg`}>
                        <StoryIcon className="h-7 w-7 text-white" />
                      </div>
                      <span className="inline-flex rounded-full bg-cyan-400/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-cyan-300 border border-cyan-400/20">
                        {text(story.categoryAr, story.categoryEn)}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{text(story.titleAr, story.titleEn)}</h3>
                      <p className="text-sm leading-6 text-slate-400">{text(story.descAr, story.descEn)}</p>
                    </div>

                    <div className="border-t border-white/10 pt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-cyan-400" />
                        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400">
                          {text(story.resultAr, story.resultEn)}
                        </p>
                      </div>
                      <p className="text-xs text-slate-500">{text('المدة:', 'Timeline:')} {text(story.timelineAr, story.timelineEn)}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CLIENT TESTIMONIALS — Rotating Quote Cards             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('ماذا يقولون عنّا', 'What clients say')}</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {text('شركاء نجاح، لا مجرد عملاء', 'Success partners, not just clients')}
            </h2>
          </div>
          <div className="md:hidden">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={mobileTestimonial.nameEn}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {renderHomeTestimonialCard(mobileTestimonial, mobileTestimonialIndex, false)}
            </motion.div>

            {homeTestimonials.length > 1 ? (
              <div className="mt-3 flex items-center justify-between gap-2.5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-2.5 py-2">
                <button
                  aria-label={isArabic ? 'الشهادة السابقة' : 'Previous testimonial'}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors"
                  onClick={() => setMobileTestimonialIndex((current) => (current - 1 + homeTestimonials.length) % homeTestimonials.length)}
                  type="button"
                >
                  <TestimonialPrevIcon className="h-4 w-4" />
                </button>

                <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
                  {homeTestimonials.map((item, index) => (
                    <button
                      aria-label={`${isArabic ? 'انتقل إلى الشهادة' : 'Go to testimonial'} ${index + 1}`}
                      className={index === mobileTestimonialIndex ? 'h-2 w-5 rounded-full bg-cyan-300 transition-all' : 'h-2 w-2 rounded-full bg-white/20 transition-all'}
                      key={item.nameEn}
                      onClick={() => setMobileTestimonialIndex(index)}
                      type="button"
                    />
                  ))}
                </div>

                <button
                  aria-label={isArabic ? 'الشهادة التالية' : 'Next testimonial'}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors"
                  onClick={() => setMobileTestimonialIndex((current) => (current + 1) % homeTestimonials.length)}
                  type="button"
                >
                  <TestimonialNextIcon className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </div>
          <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-3">
            {homeTestimonials.map((item, index) => renderHomeTestimonialCard(item, index))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* REAL CLIENT RESULTS — Proven Impact with Metrics       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-violet-900/5 pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('النتائج الحقيقية', 'Real Results')}</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {text('مقاييس قابلة للقياس', 'Measurable metrics')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                {text('على أرض الواقع', 'that matter')}
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto leading-8">
              {text(
                'النتائج التي حققناها لعملائنا عبر مختلف الصناعات والقطاعات — أرقام حقيقية من تقارير حقيقية.',
                'Results we have delivered across various industries and sectors — real numbers from real reports.',
              )}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {clientResults.map((result, index) => (
              <motion.div
                key={result.metricEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-gradient-to-br from-white/[0.03] to-transparent p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(45,212,191,0.15)] md:rounded-[2rem] md:p-6"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${result.iconBg} shadow-lg md:h-14 md:w-14`}>
                    <Zap className="h-6 w-6 text-white md:h-7 md:w-7" />
                  </div>

                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400 drop-shadow-sm mb-1">
                      {text(result.resultAr, result.resultEn)}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                      {text(result.metricAr, result.metricEn)}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm font-bold text-white mb-1">{text(result.clientAr, result.clientEn)}</p>
                    <p className="text-xs leading-5 text-slate-400">{text(result.descAr, result.descEn)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* TEAM EXPERTISE — Meet The Specialists                 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative">
        <div className="absolute left-0 top-1/3 w-1/2 h-1/2 bg-violet-700/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('الفريق', 'The Team')}</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {text('متخصصون في ', 'Specialists in')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                {text('صناعة الحلول الرقمية', 'digital solutions')}
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-4 md:mt-6 max-w-3xl mx-auto leading-8">
              {text(
                'فريق متعدد التخصصات يجمع بين الخبرة التقنية العميقة والفهم الدقيق لاحتياجات السوق والعملاء.',
                'A multidisciplinary team combining deep technical expertise with precise market understanding and audience needs.',
              )}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {teamHighlights.map((team, index) => (
              <motion.div
                key={team.roleEn}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, type: 'spring', bounce: 0.3 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-lg transition-all md:rounded-[2.5rem] md:p-8"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${team.colorEn} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10 space-y-5">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${team.colorEn} shadow-lg`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400 mb-2">
                      {text(team.countAr, team.countEn)}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{text(team.roleAr, team.roleEn)}</h3>
                    <p className="text-sm leading-6 text-slate-400">{text(team.expertiseAr, team.expertiseEn)}</p>
                  </div>

                  <div className="h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-12" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* KEY FEATURES — Interactive Feature Showcase            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-cyan-900/5 pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('المزايا الرئيسية', 'Key Features')}</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {text('أدوات قوية،', 'Powerful tools,')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                {text('نتائج مثبتة', 'proven results')}
              </span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.featureEn}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-md transition-all md:rounded-[2rem] md:p-6"
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-400 group-hover:from-cyan-400/40 group-hover:to-violet-500/40 transition-colors duration-300">
                      <FeatureIcon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-display text-base md:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {text(feature.featureAr, feature.featureEn)}
                      </h3>
                      <p className="text-sm text-slate-400 leading-6 group-hover:text-slate-300 transition-colors">
                        {text(feature.descAr, feature.descEn)}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-3">
                      <div className="flex flex-wrap gap-1.5">
                        {feature.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="inline-flex text-[11px] font-medium px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/40 transition-colors"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden py-14 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[8%] top-[14%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -24, 0], y: [0, 24, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[8%] right-[10%] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-kicker mb-4">{text('أسئلة قبل التعاقد', 'Pre-project questions')}</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              {text('إجابات تقلل ترددك قبل التواصل', 'Answers that reduce hesitation before contact')}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 md:text-lg md:leading-9">
              {text(
                'اضغط على أي سؤال لترى الإجابة بوضوح. كل إجابة هنا مصممة لتقربك خطوة من قرار التواصل.',
                'Tap any question to see the answer clearly. Each response is designed to move you one step closer to reaching out.',
              )}
            </p>

            <div className="mt-7 grid grid-cols-3 gap-2">
              {frequentlyAskedQuestions.slice(0, 3).map((item, index) => {
                const visual = faqVisuals[index];
                const Icon = visual.icon;

                return (
                  <motion.button
                    key={item.category}
                    type="button"
                    onClick={() => setActiveFaqIndex(index)}
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className={`group rounded-[1.25rem] border p-3 text-start transition-all ${
                      activeFaqIndex === index
                        ? 'border-cyan-300/45 bg-cyan-300/12'
                        : 'border-white/8 bg-white/[0.03] hover:border-cyan-300/30'
                    }`}
                    aria-label={text(item.questionAr, item.questionEn)}
                  >
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-[1rem] bg-gradient-to-br ${visual.accent} text-white shadow-lg ${visual.glow}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 group-hover:text-cyan-300">
                      {item.category}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <div className="grid gap-3">
            {frequentlyAskedQuestions.map((item, index) => {
              const visual = faqVisuals[index] ?? faqVisuals[0];
              const Icon = visual.icon;
              const isActive = activeFaqIndex === index;

              return (
                <motion.article
                  key={item.questionEn}
                  initial={{ opacity: 0, x: isArabic ? -24 : 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.055, duration: 0.45, ease: 'easeOut' }}
                  className={`group relative overflow-hidden rounded-[1.45rem] border transition-all duration-500 md:rounded-[2rem] ${
                    isActive
                      ? 'border-cyan-300/45 bg-white/[0.065] shadow-[0_28px_90px_-52px_rgba(45,212,191,0.65)]'
                      : 'border-white/8 bg-white/[0.025] hover:border-cyan-300/24 hover:bg-white/[0.04]'
                  }`}
                >
                  <motion.div
                    aria-hidden="true"
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.35, scale: 0.96 }}
                    className={`absolute inset-y-0 ${isArabic ? 'right-0' : 'left-0'} w-1 bg-gradient-to-b ${visual.accent}`}
                  />
                  <motion.div
                    aria-hidden="true"
                    animate={isActive ? { x: ['-40%', '120%'] } : { x: '-45%' }}
                    transition={isActive ? { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } : undefined}
                    className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />

                  <button
                    type="button"
                    onClick={() => setActiveFaqIndex(isActive ? -1 : index)}
                    className="relative z-10 flex w-full items-start gap-4 p-4 text-start md:p-6"
                    aria-expanded={isActive}
                  >
                    <span className={`mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.15rem] bg-gradient-to-br ${visual.accent} text-white shadow-xl ${visual.glow}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-200">
                          {item.category}
                        </span>
                        <span className="font-display text-xs font-black text-white/20 md:text-sm">
                          0{index + 1}
                        </span>
                      </span>
                      <span className="mt-3 block font-display text-lg font-bold leading-7 text-white md:text-2xl md:leading-9">
                        {text(item.questionAr, item.questionEn)}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      className="mt-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cyan-300"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="relative z-10 overflow-hidden"
                      >
                        <div className="mx-4 mb-4 rounded-[1.25rem] border border-white/8 bg-[#06090f]/35 p-4 md:mx-6 md:mb-6 md:p-5">
                          <div className="mb-3 flex items-center gap-2 text-xs font-bold text-cyan-300">
                            <HelpCircle className="h-4 w-4" />
                            {text('الإجابة المختصرة', 'Short answer')}
                          </div>
                          <p className="text-sm leading-8 text-slate-300 md:text-base md:leading-9">
                            {text(item.answerAr, item.answerEn)}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* INDUSTRIES BENTO — Sectors We Serve                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell pb-14 md:pb-24 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('قطاعات نخدمها', 'Industries we serve')}</p>
            <h2 className="font-display text-2xl font-bold text-white md:text-5xl">
              {text('خبرة موزّعة عبر ', 'Experience across ')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">6 {text('قطاعات', 'sectors')}</span>
            </h2>
            <p className="text-slate-400 text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto leading-8 md:leading-9">
              {text(
                'لكل قطاع لغته البصرية وطريقته في التواصل مع جمهوره، لذلك تحتاج تجربة تناسب طبيعة سوقك من أول نظرة.',
                'Every industry has its own visual language and communication tone, so your experience should fit your market from the first glance.',
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 mobile-2-cols gap-3 md:hidden">
            {industries.map((industry, index) => renderIndustryCard(industry, index))}
          </div>
          <div className="hidden grid-cols-2 gap-3 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {industries.map((industry, index) => renderIndustryCard(industry, index))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* EXPLORE MORE RESOURCES — Links to New Pages             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-violet-900/5 pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('محتوى إضافي', 'More Resources')}</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {text('اكتشف المزيد عن عملنا', 'Explore More')}
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto">
              {text(
                'قصص نجاح مفصلة، إحصائيات شاملة، ومعرض كامل لأعمالنا',
                'Detailed case studies, comprehensive statistics, and our complete portfolio gallery'
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Case Studies Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 hover:border-cyan-400/50 transition-all"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-colors" />
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{text('دراسات الحالة', 'Case Studies')}</h3>
                  <p className="text-slate-400 mb-4">
                    {text(
                      'قصص تفصيلية عن كيفية تحويلنا للتحديات إلى نجاحات',
                      'Detailed stories of how we transformed challenges into success'
                    )}
                  </p>
                  <Link
                    to={localizePath('/case-studies')}
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                  >
                    {text('اكتشف القصص', 'Explore stories')}
                    <ArrowUpLeft className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Statistics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 to-transparent p-8 hover:border-violet-400/50 transition-all"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-violet-400/10 rounded-full blur-3xl group-hover:bg-violet-400/20 transition-colors" />
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-violet-400/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-400 group-hover:text-black transition-all">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{text('لوحة الإحصائيات', 'Statistics Dashboard')}</h3>
                  <p className="text-slate-400 mb-4">
                    {text(
                      'أرقام وبيانات شاملة عن أدائنا ونتائجنا',
                      'Comprehensive metrics and performance data'
                    )}
                  </p>
                  <Link
                    to={localizePath('/stats')}
                    className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors"
                  >
                    {text('شاهد الأرقام', 'View statistics')}
                    <ArrowUpLeft className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Gallery Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-rose-500/10 to-transparent p-8 hover:border-rose-400/50 transition-all"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-rose-400/10 rounded-full blur-3xl group-hover:bg-rose-400/20 transition-colors" />
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-rose-400/20 flex items-center justify-center text-rose-400 group-hover:bg-rose-400 group-hover:text-black transition-all">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{text('معرض الأعمال', 'Portfolio Gallery')}</h3>
                  <p className="text-slate-400 mb-4">
                    {text(
                      'استكشف صورنا وفيديوهاتنا من المشاريع',
                      'Explore our projects through photos and videos'
                    )}
                  </p>
                  <Link
                    to={localizePath('/projects')}
                    className="inline-flex items-center gap-2 text-rose-400 font-semibold hover:text-rose-300 transition-colors"
                  >
                    {text('شاهد أعمالنا', 'View our work')}
                    <ArrowUpLeft className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
