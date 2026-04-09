import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import {
  ArrowUpLeft,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Rocket,
  Sparkles,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Home,
  Bot,
  TrendingUp,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import {
  featuredProjects,
  portfolioProfile,
  services,
} from '../data/portfolio';
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
    notaqEn: '100% custom',
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
    notaqAr: '< 1.5s',
    notaqEn: '< 1.5s',
    tradAr: 'أبطأ من 4 ثوان',
    tradEn: 'Slower than 4s',
  },
  {
    criteriaAr: 'الدعم بعد الإطلاق',
    criteriaEn: 'Post-launch support',
    notaqAr: '90 يوم مجاناً',
    notaqEn: '90 days free',
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
    num: '100%',
    labelAr: 'رضا العملاء',
    labelEn: 'Client satisfaction',
    subAr: 'وفق التقييمات الفعلية',
    subEn: 'Based on real feedback',
    icon: Sparkles,
  },
  {
    num: '5x',
    labelAr: 'زيادة في التحويل',
    labelEn: 'Conversion growth',
    subAr: 'متوسط ما تحقق لعملائنا',
    subEn: 'Average lift across clients',
    icon: TrendingUp,
  },
  {
    num: '< 1.2s',
    labelAr: 'سرعة التحميل',
    labelEn: 'Load speed',
    subAr: 'ضمانة Core Web Vitals',
    subEn: 'Core Web Vitals focused',
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
      'جلسة تشخيص ١٥-٣٠ دقيقة لفهم جوهر المشروع: من هو جمهورك؟ ما هدفك؟ من منافسيك؟ وما الذي يريد عميلك رؤيته.',
    descEn:
      'A focused 15-30 minute session to understand the core of your project, audience, goals, competitors, and what your customer expects to see.',
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
      'We launch on fast hosting prepared for SEO and include three months of technical support for fixes and focused refinements.',
    deliverableAr: '→ موقع حي + ٩٠ يوم دعم',
    deliverableEn: '→ Live site and 90 days of support',
  },
];

const contactReasons = [
  { ar: 'تصاميم حديثة ومميزة لا تعتمد على قوالب جاهزة', en: 'Modern custom design without recycled templates' },
  { ar: 'تجربة مستخدم دقيقة تركز على زيادة أرقام المبيعات', en: 'User experience built to improve conversion and sales' },
  { ar: 'كود نظيف وأداء صاروخي يدعم معايير الـ SEO', en: 'Clean code and fast performance built for SEO standards' },
  { ar: 'شراكة ودعم فني متواصل ولا ينتهي مع الإطلاق', en: 'A reliable partnership that continues after launch' },
];

const homeTestimonials = [
  {
    nameAr: 'أحمد الشمري',
    nameEn: 'Ahmed Alshammari',
    roleAr: 'مدير تطوير الأعمال',
    roleEn: 'Business development director',
    companyAr: 'مجموعة الفنار',
    companyEn: 'Alfanar Group',
    quoteAr:
      'تعاملت مع نُطق لبناء موقع شركتنا من الصفر. النتيجة كانت مذهلة — تصميم بصري فريد وأداء تقني لم نره في أي وكالة أخرى. المبيعات ارتفعت 40% في أول 3 أشهر.',
    quoteEn:
      'We worked with Notaq to build our company website from scratch. The result was outstanding: a distinctive visual identity and technical performance we had not seen from other agencies. Sales rose by 40% in the first three months.',
    rating: 5,
    avatarAr: 'أ',
    avatarEn: 'A',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    nameAr: 'سارة المنصور',
    nameEn: 'Sarah Almansour',
    roleAr: 'مؤسِّسة ومديرة تنفيذية',
    roleEn: 'Founder and CEO',
    companyAr: 'Eleva Brand',
    companyEn: 'Eleva Brand',
    quoteAr:
      'كنت أبحث عن فريق يفهم الرؤية قبل أن يبدأ التنفيذ. فريق نُطق قضى وقتاً كافياً في فهم هويتنا ثم ترجمها بشكل بصري جعل العميل يثق بنا من أول نظرة.',
    quoteEn:
      'I was looking for a team that understood the vision before execution. Notaq spent real time understanding our identity, then translated it into a visual language that built trust from the first glance.',
    rating: 5,
    avatarAr: 'س',
    avatarEn: 'S',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    nameAr: 'فيصل الدوسري',
    nameEn: 'Faisal Aldosari',
    roleAr: 'صاحب منصة SaaS',
    roleEn: 'SaaS founder',
    companyAr: 'RentFlow Platform',
    companyEn: 'RentFlow Platform',
    quoteAr:
      'الشيء الذي أعجبني أكثر هو أنهم لا يكتفون بالتسليم. يتابعون معك ويعدّلون ويقترحون. وكأنهم شريك في المشروع وليس مجرد منفذ.',
    quoteEn:
      'What impressed me most is that they do not stop at delivery. They keep following up, refining, and recommending improvements, which makes them feel like a true project partner rather than just an executor.',
    rating: 5,
    avatarAr: 'ف',
    avatarEn: 'F',
    color: 'from-amber-500 to-orange-500',
  },
  {
    nameAr: 'د. مي محمود',
    nameEn: 'Dr. Mai Mahmoud',
    roleAr: 'قائدة مشروع',
    roleEn: 'Project lead',
    companyAr: 'منصة تعليمي',
    companyEn: 'Taaleemy Platform',
    quoteAr:
      'أكثر شيء ميّز التجربة هو وضوح الفكرة داخل الواجهة. لم يكن مجرد تصميم جميل، بل منصة مفهومة ومقنعة ومريحة للاستخدام من الجميع.',
    quoteEn:
      'The clearest strength was how obvious the idea felt inside the interface. It was not just attractive design, but a platform that felt understandable, convincing, and comfortable to use.',
    rating: 5,
    avatarAr: 'م',
    avatarEn: 'M',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    nameAr: 'جون سميث',
    nameEn: 'John Smith',
    roleAr: 'المدير التقني',
    roleEn: 'Chief technology officer',
    companyAr: 'Tech Innovations',
    companyEn: 'Tech Innovations',
    quoteAr:
      'الموقع أحدث تحولاً كاملاً في تواجدنا الرقمي. التصميم الاحترافي والرسائل الواضحة ساعدتنا في جذب عملاء دوليين وزيادة معدلات التحويل.',
    quoteEn:
      'The website created a full shift in our digital presence. The professional design and clearer messaging helped us attract international clients and raise conversion performance.',
    rating: 5,
    avatarAr: 'ج',
    avatarEn: 'J',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    nameAr: 'ليلى الصالح',
    nameEn: 'Laila Alsaleh',
    roleAr: 'مؤسسة متجر',
    roleEn: 'Store founder',
    companyAr: 'إشراق الرقمي',
    companyEn: 'Ishraq Digital',
    quoteAr:
      'تجربة فريدة من نوعها، اهتمام بالتفاصيل ودقة في المواعيد، استطاعوا تحويل أفكاري المعقدة إلى واقع رقمي مبهر وسهل التصفح.',
    quoteEn:
      'A distinctive experience from start to finish. Their attention to detail and timing helped turn complex ideas into a polished digital experience that feels smooth to browse.',
    rating: 5,
    avatarAr: 'ل',
    avatarEn: 'L',
    color: 'from-rose-500 to-pink-600',
  },
];

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
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);
  const mouseX = useSpring(0, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 20 });
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

  const showcaseProjects = featuredProjects.slice(0, 6);

  const abstractTechImg = encodeURI('/images/Gemini_Generated_Image_96cd0396cd0396cd.png');
  const premiumDashboardImg = encodeURI('/images/Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png');

  const parallaxX = useTransform(mouseX, (x) => x * -1.5);
  const parallaxY = useTransform(mouseY, (y) => y * -1.5);
  const orb1X = useTransform(mouseX, (x) => x * 2);
  const orb1Y = useTransform(mouseY, (y) => y * 2);
  const orb2X = useTransform(mouseX, (x) => x * -2);
  const orb2Y = useTransform(mouseY, (y) => y * -1);

  return (
    <div ref={containerRef} className="relative">
      
      {/* FLOATING PARALLAX IMAGES (Global details) - Hidden on Mobile */}
      <motion.img 
         style={{ y: floatImageY1 }} 
         src="/images/Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png" 
         className="absolute right-[-10%] top-[25%] w-[350px] rounded-3xl opacity-[0.08] mix-blend-screen pointer-events-none z-[-1] blur-[2px] transform rotate-12 hidden lg:block"
      />
      <motion.img 
         style={{ y: floatImageY2 }} 
         src="/images/WhatsApp%20Image%202026-02-15%20at%202.31.19%20AM%20(1).jpeg" 
         className="absolute left-[-5%] top-[60%] w-[400px] rounded-[3rem] opacity-[0.06] mix-blend-screen pointer-events-none z-[-1] blur-md transform -rotate-12 hidden lg:block"
      />

      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        id="hero" 
        className="section-shell relative overflow-visible pb-12 pt-6 md:pb-24 md:pt-[120px] min-h-[80vh] md:min-h-[95vh] flex items-center"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[4rem]">
          <motion.div 
            style={{ x: parallaxX, y: parallaxY }}
            className="w-full h-full scale-[1.15]"
          >
            <img
              src="/images/Gemini_Generated_Image_nfqqnnfqqnnfqqnn.png"
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

        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] z-10 w-full relative">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-8 relative"
          >
            <motion.div variants={staggerItem} className="space-y-5">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="section-kicker inline-flex items-center shadow-[0_0_15px_rgba(45,212,191,0.2)] bg-cyan-900/40 border-cyan-400/30 text-cyan-50"
              >
                <Sparkles className={`${isArabic ? 'ml-2' : 'mr-2'} inline h-3.5 w-3.5 text-cyan-300`} />
                {text('تصميم تجارب رقمية مميزة', 'Crafting Premium Digital Experiences')}
              </motion.div>

              <div className="space-y-4">
                <h1 className="font-display text-[2rem] sm:text-[2.5rem] font-semibold leading-[1.1] text-white md:text-5xl lg:text-7xl xl:text-[5.5rem]">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">Notaq</span>
                  <span className="mx-2 md:mx-3 text-white/20">|</span>
                  <span className="text-gradient animate-float inline-block pb-2">{text('نُطق', 'Notaq')}</span>
                </h1>
                <p className="font-display text-lg sm:text-2xl text-cyan-100/90 md:text-5xl font-medium">
                  {text('وكالة تصميم وتطوير', 'Creative Development Agency')}
                </p>
              </div>

              {/* Meaning Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="inline-flex items-center gap-3"
              >
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md">
                  <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-teal-400 text-lg">
                    {text('نُطق', 'Notaq')}
                  </span>
                  <motion.span
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    className="text-cyan-400"
                  >
                    {text('←', '→')}
                  </motion.span>
                  <span className="text-slate-300 font-medium text-sm tracking-wide">
                    {text('نبني طريقاً قوياً', 'We build stronger digital paths')}
                  </span>
                </div>
              </motion.div>

              <p className="max-w-xl text-base leading-8 text-slate-300 md:text-xl md:leading-9 mt-4 md:mt-6 font-medium">
                {lang === 'ar' ? portfolioProfile.tagline : portfolioProfile.englishTagline}
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 pt-4">
              <Link className="btn-primary group shadow-[0_0_30px_rgba(45,212,191,0.3)] hover:shadow-[0_0_40px_rgba(45,212,191,0.5)]" to="/projects">
                <span className="relative z-10 flex items-center gap-2">
                  {text('استكشف مشاريعنا', 'Explore Projects')}
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ArrowUpLeft className="h-5 w-5 -rotate-90 group-hover:rotate-0 transition-transform duration-300" />
                  </motion.span>
                </span>
              </Link>
              <Link className="btn-secondary group" to="/contact">
                {text('ابدأ مشروعك', 'Start your project')}
                <Mail className="h-4 w-4 transition-transform group-hover:scale-125 group-hover:text-cyan-400" />
              </Link>
            </motion.div>

            <motion.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
              {portfolioProfile.stats.map((stat, index) => (
                <div
                  key={stat.englishLabel ?? stat.label}
                  className={`hover:-translate-y-1 transition-transform cursor-pointer ${
                    isArabic
                      ? 'border-l border-white/10 pl-4 pr-6 text-right'
                      : 'border-r border-white/10 pr-4 pl-6 text-left'
                  }`}
                >
                  <p className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-violet-400">
                    <AnimatedCounter value={stat.value} duration={2000 + (index * 500)} />
                  </p>
                  <p className="mt-1 text-sm text-slate-400 font-medium">{text(stat.label, stat.englishLabel ?? stat.label)}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            className="relative mx-auto mt-6 w-full max-w-[420px] md:max-w-[520px] lg:mt-0 perspective-none lg:perspective-[1000px]"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotateZ: [0, 1, 0, -1, 0] }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
              className="relative lg:transform-style-3d shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-x-4 top-8 h-[360px] md:h-[460px] rounded-[2.5rem] md:rounded-[3.5rem] bg-cyan-600/20 rotate-[4deg] blur-2xl flex items-center justify-center animate-pulse" />
              
              <div className="surface-card-strong relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 border-[1px] border-white/20 glass-card">
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

                <div className="relative z-10 space-y-10">
                  <div className="text-center space-y-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-cyan-400/90 to-violet-600/90 backdrop-blur-md shadow-[0_20px_50px_-10px_rgba(45,212,191,0.6)]"
                    >
                      <Code2 className="h-10 w-10 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="font-display text-4xl font-bold text-white mt-6 tracking-wide drop-shadow-md">
                        {text('التميز التقني', 'Technical excellence')}
                      </h2>
                      <p className="text-cyan-300 mt-2 text-lg font-medium drop-shadow-sm">
                        {text('تنفيذ بريميوم', 'Premium execution')}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {technicalHighlights.map((item) => (
                      <motion.div
                        key={item.titleEn}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        whileHover={{ scale: 1.03, x: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                        className="rounded-2xl border border-white/10 bg-[#06090f]/60 backdrop-blur-xl p-4 flex items-center gap-4 transition-colors cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      >
                        <div className="rounded-xl bg-cyan-400/20 p-3 text-cyan-300 shadow-[0_0_15px_rgba(45,212,191,0.4)]">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <p className="text-lg font-bold text-white">{text(item.titleAr, item.titleEn)}</p>
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
      <section className="py-10 border-y border-white/5 bg-[#06090f] overflow-hidden whitespace-nowrap flex relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06090f] via-transparent to-[#06090f] z-10 w-full pointer-events-none" />
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-16 md:gap-32 px-8 min-w-max items-center"
        >
          {Array.from({length: 4}).map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-32 items-center">
              <span className="text-xl md:text-5xl font-display font-bold text-white/5 uppercase tracking-widest break-words flex items-center gap-4 md:gap-8">
                PREMIUM DIGITAL EXPERIENCES <Sparkles className="text-cyan-400/20 w-6 h-6 md:w-10 md:h-10" />
              </span>
              <span className="text-xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/20 to-violet-500/20 uppercase tracking-widest flex items-center gap-4 md:gap-8">
                CREATIVE STUDIO <Rocket className="text-violet-400/20 w-6 h-6 md:w-10 md:h-10" />
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Agency Developers Break Section (Generated Image + Interactive Blob) */}
      <section className="relative overflow-hidden w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, y: -50 }}
            whileInView={{ scale: 1.05, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/images/Gemini_Generated_Image_9ooasm9ooasm9ooa%20(1).png" 
            alt="Agency Developers Working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 py-32 bg-gradient-to-t from-[#06090f] to-transparent" />
          <div className="absolute inset-x-0 top-0 py-32 bg-gradient-to-b from-[#06090f] to-transparent" />
          <div className="absolute inset-0 bg-cyan-950/40 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 md:p-16 rounded-[4rem] border-white/20 shadow-[0_0_150px_rgba(45,212,191,0.2)] inline-block backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="font-display text-3xl md:text-7xl font-bold text-white mb-6 relative z-10 drop-shadow-xl flex flex-col items-center gap-4">
              <span className="bg-cyan-400 text-slate-900 px-4 md:px-6 py-2 rounded-full text-base md:text-2xl font-bold inline-block w-fit tracking-wide">WE DELIVER</span>
              {text('فريق عمل متخصص بالكامل', 'A fully specialized team')}
            </h2>
            <p className="text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-50 font-medium relative z-10">
              {text('كل سطر برمجي، وكل حركة مدروسة لنجاحك', 'Every line of code and every motion is designed for your success')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-shell py-24 md:py-32 relative">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-10"
          >
            <SectionTitle
              description={text(
                'نبدأ بصناعة القصة الرقمية قبل كتابة الكود، حتى نضمن أن الواجهة لن تكتفي بالجمال، بل ستعمل كفريق مبيعات متكامل لصالحك طوال الـ 24 ساعة.',
                'We shape the digital story before writing code so the interface does more than look good. It works like a clear sales layer for your brand around the clock.',
              )}
              kicker={text('من نحن', 'About us')}
              title={text(
                'نصمم حلولاً تدمج بقوة بين الابتكار البصري الاستثنائي والوضوح التجاري',
                'We design solutions that merge standout visual innovation with commercial clarity',
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
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector, idx) => (
                <motion.span 
                  key={sector.en} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="pill hover:bg-cyan-400/30 hover:border-cyan-400/60 transition-colors cursor-pointer text-sm shadow-[0_5px_15px_-5px_rgba(45,212,191,0.2)] font-medium"
                >
                  {text(sector.ar, sector.en)}
                </motion.span>
              ))}
            </div>
            <Link className="btn-secondary group text-lg mt-4 shadow-[0_5px_20px_rgba(255,255,255,0.05)]" to="/about">
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
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 rounded-[3.5rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            
            {/* Split Media (Video + Image layers) */}
            <div className="relative rounded-[3.5rem] border-[1.5px] border-white/20 shadow-2xl aspect-[4/3] group-hover:border-cyan-400/40 transition-colors duration-500 overflow-hidden">
               {/* Main image */}
              <img 
                src={portfolioProfile.aboutImage} 
                alt="Creative Collaboration" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090f]/90 via-transparent to-transparent opacity-80" />
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="absolute bottom-8 left-8 right-8 glass-card p-6 md:p-8 rounded-3xl border-white/30 backdrop-blur-2xl z-20 shadow-2xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-cyan-400 to-teal-500 p-4 rounded-2xl text-[#06090f] shadow-[0_0_30px_rgba(45,212,191,0.6)]">
                      <BadgeCheck className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-white text-xl font-bold">{text('عزم لا يلين تجاه الجودة', 'Relentless commitment to quality')}</p>
                      <p className="text-cyan-300 text-sm font-medium tracking-widest font-display mt-1">WORLD-CLASS EXECUTION</p>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              {text('نُطق مقابل ', 'Notaq vs ')}
              <span className="text-slate-500">{text('وكالات التصميم التقليدية', 'traditional design agencies')}</span>
            </h2>
            <p className="text-slate-400 mt-5 text-lg max-w-2xl mx-auto leading-9">
              {text(
                'ليس مجرد كلام — إليك مقارنة مباشرة بالمعايير التي تهم عميلنا فعلاً.',
                'Not just words. Here is a direct comparison around the standards our clients actually care about.',
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
                <div className="md:hidden flex items-center justify-between gap-3 border-b border-white/5 p-4 hover:bg-white/[0.02] transition-colors">
                  <span className="text-slate-400 text-sm font-medium shrink-0">{text(row.criteriaAr, row.criteriaEn)}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold text-xs bg-cyan-400/10 px-2.5 py-1 rounded-full">
                      {text(row.notaqAr, row.notaqEn)}
                    </span>
                    <span className="text-slate-600 text-xs">vs</span>
                    <span className="text-slate-500 text-xs">{text(row.tradAr, row.tradEn)}</span>
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
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="lg:max-w-2xl bg-[#06090f]/50 p-6 md:p-8 rounded-[2.5rem] backdrop-blur-md border border-white/10 shadow-2xl">
              <SectionTitle
                description={text(
                  'نقدم باقة خدمات رقمية متكاملة مصممة خصيصاً للارتقاء بصورة علامتك التجارية، ونسخها بقوة في ذاكرة عملائك.',
                  'We offer a full digital service stack crafted to elevate your brand image and make it memorable for the right audience.',
                )}
                kicker={text('خدماتنا', 'Services')}
                title={text('حلول مبتكرة تبني الثقة وتقود للنجاح المؤكد', 'Innovative solutions that build trust and drive growth')}
              />
            </div>
            <Link className="btn-secondary whitespace-nowrap text-lg shadow-[0_0_20px_rgba(45,212,191,0.15)] group" to="/services">
              {text('تصفح كافة الخدمات', 'Browse all services')}
              <motion.span whileHover={{ scale: 1.2 }} className="bg-white/10 p-2 rounded-full border border-white/20">
                <ArrowUpLeft className="h-5 w-5" />
              </motion.span>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || Rocket;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12 }}
                  className="surface-card rounded-[2.5rem] p-8 cursor-pointer relative group overflow-hidden glass-card hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-violet-500/0 to-transparent group-hover:from-cyan-500/20 group-hover:via-violet-500/10 transition-colors duration-700 z-0" />
                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex rounded-2xl bg-white/5 border border-white/10 p-4 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                    <h3 className="mt-8 font-display text-3xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {text(service.title, service.englishTitle ?? service.title)}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-400 group-hover:text-slate-300 transition-colors">
                      {text(service.description, service.englishDescription ?? service.description)}
                    </p>
                    <div className="mt-6 w-12 h-1 bg-white/10 rounded-full group-hover:w-24 group-hover:bg-cyan-400 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 relative divide-y divide-white/5 md:divide-y-0">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none hidden md:block" />
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.labelEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-white/5 p-5 md:p-12 text-center group hover:bg-white/[0.03] transition-colors relative"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <p className="font-display text-3xl md:text-6xl font-bold text-white mb-2 md:mb-3 drop-shadow-[0_0_20px_rgba(45,212,191,0.3)] group-hover:text-cyan-300 transition-colors">
                  {stat.num}
                </p>
                <p className="text-white font-bold text-lg mb-1">{text(stat.labelAr, stat.labelEn)}</p>
                <p className="text-slate-500 text-sm">{text(stat.subAr, stat.subEn)}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-3/4 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
              </motion.div>
            ))}
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

          {/* Horizontal scrollable process cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processCards.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`rounded-[2.5rem] border bg-gradient-to-b ${step.color} to-transparent p-8 glass-card flex flex-col justify-between min-h-[350px] relative overflow-hidden group`}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div>
                  <p className="font-display text-7xl font-black text-white/5 mb-6">{step.phase}</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {text(step.titleAr, step.titleEn)}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-mono mb-6">
                    {text(step.durationAr, step.durationEn)}
                  </span>
                  <p className="text-slate-400 text-sm leading-7">{text(step.descAr, step.descEn)}</p>
                </div>
                <div className="mt-8 pt-5 border-t border-white/5">
                  <p className="text-cyan-400 font-bold text-sm tracking-wide">{text(step.deliverableAr, step.deliverableEn)}</p>
                </div>
              </motion.div>
            ))}
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
            <Link className="btn-secondary text-lg group" to="/projects">
              {text('استكشف المعرض بالكامل', 'Explore the full showcase')}
              <ArrowUpLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
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
          className="mx-auto max-w-7xl rounded-[2.5rem] md:rounded-[4rem] border border-white/20 bg-[#06090f] p-5 md:p-12 lg:p-20 shadow-[0_50px_150px_-50px_rgba(45,212,191,0.5)] relative overflow-hidden backdrop-blur-3xl"
        >
          {/* Detailed Image/Video Content for Contact Section */}
          <div className="absolute inset-0 z-0">
             <img src={premiumDashboardImg} alt="Premium dashboard" className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110" />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#06090f]/95 via-[#06090f]/80 to-cyan-900/40" />
          </div>

          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/30 blur-[150px] rounded-full -mr-[300px] -mt-[300px] mix-blend-screen pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/30 blur-[120px] rounded-full -ml-[250px] -mb-[250px] mix-blend-screen pointer-events-none" />
          
          <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="section-kicker border-cyan-400/50 bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(45,212,191,0.3)] font-bold px-6 py-3"
              >
                {text('تواصل معنا اليوم', 'Talk to us today')}
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white md:text-6xl text-reveal drop-shadow-2xl"
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
                className="text-xl text-slate-300 leading-9 max-w-2xl font-medium"
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
                className="flex flex-wrap gap-5 pt-4"
              >
                <Link className="btn-primary text-xl px-10 py-5 shadow-[0_15px_40px_rgba(45,212,191,0.5)] hover:shadow-[0_20px_60px_rgba(45,212,191,0.7)] group" to="/contact">
                  {text('احجز استشارتك المجانية', 'Book your free consultation')}
                  <ArrowUpLeft className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <a className="btn-secondary glass-card flex items-center gap-4 text-lg px-8 py-4 group hover:bg-white/10" href={`mailto:${portfolioProfile.email}`}>
                  <motion.span whileHover={{ rotate: 15 }} className="bg-cyan-400/20 p-3 rounded-full text-cyan-300 group-hover:bg-cyan-400 group-hover:text-black transition-colors shadow-inner border border-cyan-400/30">
                    <Mail className="h-6 w-6" />
                  </motion.span>
                  {text('راسلنا مباشرة', 'Email us directly')}
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              className="surface-card rounded-[3rem] p-10 space-y-8 border-cyan-400/40 glass-card shadow-[0_0_80px_rgba(139,92,246,0.2)] relative backdrop-blur-3xl bg-[#06090f]/60 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-[#06090f]/92 to-transparent z-0" />
              
              <div
                className={`absolute top-0 w-32 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 shadow-[0_0_20px_cyan] ${
                  isArabic ? 'right-10' : 'left-10'
                }`}
              />
              
              <div className="relative z-10">
                 <h3 className="text-white text-3xl font-semibold mb-8 flex items-center gap-4 drop-shadow-lg">
                   <div className="p-3 bg-violet-500/20 rounded-2xl border border-violet-500/30 backdrop-blur-md">
                     <BrainCircuit className="text-violet-300 h-8 w-8" />
                   </div>
                   {text('لماذا نُطق؟', 'Why Notaq?')}
                 </h3>
                 <p className="mb-7 text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                   {text(
                     'التنفيذ عندنا لا يتوقف عند الشكل فقط، بل يدخل مباشرة في مسار بناء واضح يُسرّع التسليم ويحافظ على نظافة الكود.',
                     'Our process does not stop at visuals. It moves directly into a clear build path that speeds delivery and keeps the codebase clean.',
                   )}
                 </p>
                 <ul className="space-y-6">
                   {contactReasons.map((item, idx) => (
                     <li key={idx} className="flex items-start gap-4 text-slate-100 text-lg md:text-xl leading-relaxed font-medium bg-black/20 p-4 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-cyan-400/30 transition-colors">
                       <BadgeCheck className="text-cyan-400 h-7 w-7 shrink-0 mt-1 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
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
      {/* CLIENT TESTIMONIALS — Rotating Quote Cards             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-shell py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <p className="section-kicker mx-auto mb-4">{text('ماذا يقولون عنّا', 'What clients say')}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              {text('شركاء نجاح، لا مجرد عملاء', 'Success partners, not just clients')}
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {homeTestimonials.map((t, i) => (
              <motion.div
                key={t.nameEn}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="surface-card-strong rounded-[2.5rem] p-8 border border-white/8 flex flex-col gap-6 relative overflow-hidden group glass-card"
              >
                {/* Quote mark */}
                <span className="absolute top-6 left-8 text-7xl font-serif text-white/5 select-none leading-none">"</span>
                <div className="flex gap-1 relative z-10">
                  {[...Array(t.rating)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-300 text-base leading-8 relative z-10 flex-1">"{text(t.quoteAr, t.quoteEn)}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xl shrink-0`}>
                    {text(t.avatarAr, t.avatarEn)}
                  </div>
                  <div>
                    <p className="text-white font-bold">{text(t.nameAr, t.nameEn)}</p>
                    <p className="text-slate-500 text-sm">{text(t.roleAr, t.roleEn)} · {text(t.companyAr, t.companyEn)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              {text('خبرة موزّعة عبر ', 'Experience across ')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">6 {text('قطاعات', 'sectors')}</span>
            </h2>
            <p className="text-slate-400 text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto leading-8 md:leading-9">
              {text(
                'لكل قطاع لغته البصرية وطريقته في التواصل مع العميل — ونحن ندرك هذا الفرق جيداً.',
                'Every industry has its own visual language and tone of communication, and we design with that difference in mind.',
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.nameEn}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', bounce: 0.3 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="glass-card rounded-[1.5rem] md:rounded-[2rem] border border-white/8 p-4 md:p-6 flex flex-col gap-3 md:gap-4 cursor-default group hover:border-cyan-400/30 hover:shadow-[0_20px_40px_rgba(45,212,191,0.1)] transition-all duration-500"
              >
                <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400 w-fit group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                  <ind.icon className="w-8 h-8" />
                </div>
                <p className="font-display font-bold text-white text-sm md:text-base group-hover:text-cyan-300 transition-colors">
                  {text(ind.nameAr, ind.nameEn)}
                </p>
                <p className="text-slate-500 text-xs leading-5 hidden md:block">{text(ind.descAr, ind.descEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
