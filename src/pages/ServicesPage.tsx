import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CheckCircle,
  Cog,
  Cpu,
  Layers3,
  LayoutTemplate,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import SectionTitle from '../components/SectionTitle';
import EditorialImageBreak from '../components/EditorialImageBreak';
import PageHero from '../components/PageHero';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { processSteps, services } from '../data/portfolio';
import {
  deliveryArtifacts,
  industryUseCases,
  servicePackages,
} from '../data/company';
import { serviceFamilies, serviceLibrary } from '../data/serviceLibrary';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { illustrationAssets } from '../lib/illustrationAssets';
import { getPageSeoByPath } from '../lib/pageSeo';

const serviceIcons = [Building2, Layers3, BriefcaseBusiness, BrainCircuit];

interface ServiceDepthItem {
  icon: typeof LayoutTemplate;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  imageAlt?: string;
  imageMode?: 'cover' | 'contain';
}

const faqItems = [
  {
    questionAr: 'هل الخدمات مناسبة فقط للشركات الكبيرة؟',
    questionEn: 'Are these services only for large companies?',
    answerAr:
      'لا، نطوّر تجارب رقمية تناسب الشركات الناشئة والمتوسطة والجهات الأكبر، مع ضبط حجم الصفحة وهيكلها حسب طبيعة الاحتياج.',
    answerEn:
      'No. We build digital experiences for startups, growing companies, and larger organizations, with the scope shaped around the real need.',
  },
  {
    questionAr: 'هل يمكن تنفيذ موقع شركة وصفحات خدمات مستقلة معًا؟',
    questionEn: 'Can you build a company website and standalone service pages together?',
    answerAr:
      'نعم، وهذا من أفضل السيناريوهات، لأن الموقع الرئيسي يعرّف بالشركة، بينما الصفحات المستقلة تعطي مساحة أوسع لكل خدمة أو مشروع.',
    answerEn:
      'Yes, and it is often one of the strongest setups. The main website presents the company while standalone pages give each service or offer more room to convert.',
  },
  {
    questionAr: 'هل يتم التركيز على الموبايل مثل الديسكتوب؟',
    questionEn: 'Do you give mobile the same attention as desktop?',
    answerAr:
      'بالتأكيد، نهتم بالاستجابة الكاملة وتوزيع العناصر بحيث تبقى التجربة قوية بصريًا ومريحة على مختلف الشاشات.',
    answerEn:
      'Absolutely. We pay close attention to responsive behavior so the experience stays strong and comfortable on every screen size.',
  },
  {
    questionAr: 'هل يمكن تطوير نفس الموقع لاحقًا؟',
    questionEn: 'Can the same site be expanded later?',
    answerAr:
      'نعم، نبني هيكلًا قابلًا للتوسع بحيث يمكن إضافة صفحات أو أقسام أو أنظمة جديدة لاحقًا بسهولة.',
    answerEn:
      'Yes. We build scalable foundations so adding more pages, sections, or systems later stays straightforward.',
  },
  {
    questionAr: 'كم تستغرق عملية التنفيذ عادةً؟',
    questionEn: 'How long does delivery usually take?',
    answerAr:
      'تعتمد المدة على حجم المشروع، ولكن متوسط التنفيذ يتراوح بين 2 إلى 6 أسابيع للمشاريع المتوسطة، مع جدول زمني واضح لكل مرحلة.',
    answerEn:
      'It depends on scope, but medium-sized projects usually land between 2 and 6 weeks with a clear timeline for each phase.',
  },
  {
    questionAr: 'هل تقدمون خدمات الصيانة والدعم بعد الإطلاق؟',
    questionEn: 'Do you provide maintenance and support after launch?',
    answerAr:
      'نعم، نوفر باقات دعم فني وصيانة دورية لضمان بقاء موقع شركتك محدثاً وآمناً وبأعلى أداء تقني ممكن.',
    answerEn:
      'Yes. We offer post-launch support and maintenance options to keep your site current, secure, and technically strong.',
  },
  {
    questionAr: 'هل أستلم الكود المصدري بالكامل؟',
    questionEn: 'Do I receive full ownership of the source code?',
    answerAr:
      'بالتأكيد، بمجرد الانتهاء من المشروع وتسليمه، تنتقل ملكية كافة الأصول الرقمية والكود المصدري للعميل بالكامل ولا نلزمك بأي قيود.',
    answerEn:
      'Yes. Once the project is completed and delivered, the full digital assets and source code are handed over without restrictive lock-in.',
  },
  {
    questionAr: 'كيف يتم ضمان سرعة الموقع وأدائه؟',
    questionEn: 'How do you ensure performance and speed?',
    answerAr:
      'يعتمد موقع شركتك على تقنيات حديثة مثل React وVite مع ضغط صور متطور، حتى يحصل الزائر على تجربة سريعة وتقييمات قوية في Google PageSpeed.',
    answerEn:
      'Your site uses modern tools like React and Vite, with careful asset optimization and strong PageSpeed targets so the experience stays fast.',
  },
  {
    questionAr: 'هل تدعم المواقع التي تبنونها لغات متعددة؟',
    questionEn: 'Can the sites you build support multiple languages?',
    answerAr:
      'نعم، يمكن تجهيز موقع شركتك لدعم لغات متعددة بسلاسة، مع مراعاة اتجاهات النصوص والتنسيق اللغوي من البداية.',
    answerEn:
      'Yes. Your website can be prepared for multiple languages with full attention to language structure, formatting, and RTL/LTR layout needs.',
  },
];

const serviceDepth: ServiceDepthItem[] = [
  {
    icon: LayoutTemplate,
    titleAr: 'هيكل الصفحة والرسالة',
    titleEn: 'Structure and messaging',
    descriptionAr: 'نبني هيكل الصفحة ونرتب الرسالة بحيث تكون واضحة ومقنعة من أول نظرة.',
    descriptionEn: 'We shape the page structure and the message so the offer feels clear and convincing from the first glance.',
    image: '/images/kk.gif',
  },
  {
    icon: Cog,
    titleAr: 'التنفيذ والصقل',
    titleEn: 'Execution and polish',
    descriptionAr: 'نهتم بالتفاصيل الدقيقة، الحركة، التباعد، والأداء السريع جدًا للواجهة.',
    descriptionEn: 'We care about motion, spacing, micro-details, and a very fast interface that feels polished throughout.',
    image: '/images/Cloud%20sync-bro.png',
  },
  {
    icon: ShieldCheck,
    titleAr: 'الثقة وطريقة العرض',
    titleEn: 'Trust and presentation',
    descriptionAr: 'نضيف عناصر الثقة والمحتوى المنظم والشهادات وطرق العرض الأكثر احترافية.',
    descriptionEn: 'We layer in trust signals, structured content, testimonials, and a more professional presentation system.',
    image: '/images/IMG-20251112-WA0012.jpg',
  },
  {
    icon: Cpu,
    titleAr: 'القابلية للتوسع',
    titleEn: 'Scalability',
    descriptionAr: 'نجهز البنية لتستوعب صفحات وخدمات وأنظمة إضافية مستقبلًا بدون تعقيد.',
    descriptionEn: 'We prepare the foundation to absorb more pages, services, and systems later without unnecessary complexity.',
    image: illustrationAssets.cloudSync.src,
    imageAlt: illustrationAssets.cloudSync.alt,
    imageMode: 'contain',
  },
];

const timelineStats = [
  {
    value: '2-4',
    labelAr: 'أسابيع',
    labelEn: 'Weeks',
    sub: 'Corporate Site',
  },
  {
    value: '4-8',
    labelAr: 'أسابيع',
    labelEn: 'Weeks',
    sub: 'Platform UI/UX',
  },
  {
    value: '6+',
    labelAr: 'أشهر',
    labelEn: 'Months',
    sub: 'Ongoing Tech Partner',
  },
];

const guaranteeCards = [
  {
    icon: Calendar,
    titleAr: 'ضمان الالتزام بالمواعيد',
    titleEn: 'Delivery commitment',
    descAr: 'نسلّم في الوقت المتفق عليه. وإذا تأخرنا لأسباب تخصنا نقدم تعديلات إضافية واضحة كتعويض.',
    descEn: 'We deliver on the agreed timeline, and if delays come from our side we offset that with meaningful additional work.',
  },
  {
    icon: CheckCircle,
    titleAr: 'ضمان رضاك',
    titleEn: 'Your satisfaction',
    descAr: 'دورات مراجعة غير محدودة حتى تكون راضيًا تمامًا عن التصميم والتجربة قبل أي تسليم نهائي.',
    descEn: 'We keep refining through review rounds until you are fully confident in the design and overall experience.',
  },
  {
    icon: ShieldCheck,
    titleAr: 'ضمان ما بعد الإطلاق',
    titleEn: 'Post-launch coverage',
    descAr: 'أي خلل تقني يظهر بعد الإطلاق مباشرة يتم إصلاحه سريعًا ضمن نطاق الدعم المتفق عليه.',
    descEn: 'Any technical issue that appears right after launch is resolved quickly within the agreed support scope.',
  },
];

const ServicesPage = () => {
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const isArabic = lang === 'ar';
  const [activeFamily, setActiveFamily] = useState('all');
  const visibleLibraryServices = useMemo(
    () =>
      activeFamily === 'all'
        ? serviceLibrary
        : serviceLibrary.filter((service) => service.familyId === activeFamily),
    [activeFamily],
  );
  const activeFamilyDetails = serviceFamilies.find((family) => family.id === activeFamily);
  const processCardClass = isArabic
    ? 'glass-card rounded-[1.6rem] p-5 border-r-4 border-r-cyan-400/50 transition-colors group text-right md:rounded-[2rem] md:p-6 hover:bg-white/5'
    : 'glass-card rounded-[1.6rem] p-5 border-l-4 border-l-cyan-400/50 transition-colors group text-left md:rounded-[2rem] md:p-6 hover:bg-white/5';
  const processDescriptionClass = isArabic
    ? 'text-sm leading-7 text-slate-400 md:text-base md:leading-8 md:pr-10'
    : 'text-sm leading-7 text-slate-400 md:text-base md:leading-8 md:pl-10';
  const scopeSplitClass = isArabic
    ? 'max-w-xl text-right md:border-l border-white/10 md:pl-10'
    : 'max-w-xl text-left md:border-r border-white/10 md:pr-10';
  const scopeStatsClass = isArabic
    ? 'grid w-full grid-cols-2 gap-5 text-center md:w-auto md:gap-12 md:pr-10 lg:grid-cols-3'
    : 'grid w-full grid-cols-2 gap-5 text-center md:w-auto md:gap-12 md:pl-10 lg:grid-cols-3';
  const faqCardClass = isArabic
    ? 'group relative min-w-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,11,20,0.9))] p-4 text-right shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-cyan-400/30 hover:bg-[linear-gradient(180deg,rgba(13,23,40,0.96),rgba(8,13,24,0.92))] md:rounded-[1.7rem] md:p-5'
    : 'group relative min-w-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,11,20,0.9))] p-4 text-left shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-cyan-400/30 hover:bg-[linear-gradient(180deg,rgba(13,23,40,0.96),rgba(8,13,24,0.92))] md:rounded-[1.7rem] md:p-5';
  const faqCardRowClass = isArabic
    ? 'flex flex-row-reverse items-start gap-3'
    : 'flex items-start gap-3';
  const faqAnswerClass = 'mt-2.5 text-[0.88rem] leading-6 text-slate-400 md:text-[0.95rem] md:leading-7';
  const content = {
    title: isArabic ? 'خدمات نُطق' : 'Notaq Services',
    description: isArabic
      ? 'اختر خدمة رقمية تساعد شركتك على عرض قيمتها بوضوح، وبناء ثقة أسرع مع الزائر، وتحويل الاهتمام إلى طلب تواصل أو شراء.'
      : 'Choose a digital service that helps your company present its value clearly, build visitor trust faster, and turn interest into contact or purchase.',
    heroWord: isArabic ? 'الخدمات' : 'SERVICES',
    heroSubtitle: isArabic ? 'تصميم واضح، تنفيذ متين، وقرارات رقمية قابلة للقياس.' : 'Clear design, solid execution, and measurable digital decisions.',
    coreDescription: isArabic
      ? 'كل مسار مصمم ليجعل عرض شركتك أوضح، وانطباعها أقوى، وتجربة زائرها أسهل في الفهم واتخاذ القرار.'
      : 'Each service path is shaped to make your company clearer to present, stronger in first impression, and easier for visitors to understand and act on.',
    coreKicker: isArabic ? 'مسارات الخدمة' : 'Service Lines',
    coreTitle: isArabic ? 'مسارات أساسية تخدم حضور شركتك الرقمي' : 'Core service paths for your digital presence',
    depthDescription: isArabic
      ? 'القيمة ليست في الشكل وحده؛ بل في طريقة تحويل الرسالة والاحتياج إلى تجربة دقيقة ومقنعة لزائر شركتك.'
      : 'Value does not come from visuals alone; it comes from translating message and need into a precise, persuasive visitor experience.',
    depthKicker: isArabic ? 'العمق المهني' : 'Professional Depth',
    depthTitle: isArabic ? 'تفاصيل كثيرة تظهر للزائر كتجربة بسيطة وواضحة' : 'Many details presented to visitors as a simple, clear experience',
    processDescription: isArabic
      ? 'جودة النتيجة تبدأ من فهم الهدف والجمهور والاعتراضات، ثم تحويلها إلى صفحة أو نظام له وظيفة تجارية واضحة.'
      : 'Great output starts with understanding the goal, audience, and objections, then turning them into a page or system with a clear business role.',
    processKicker: isArabic ? 'العملية' : 'Process',
    processTitle: isArabic ? 'كيف تتحول الحاجة الرقمية إلى تجربة جاهزة للعرض؟' : 'How does a digital need become a presentation-ready experience?',
    processBadge: isArabic ? 'تنفيذ مبني على فهم وقياس' : 'Delivery shaped by context and measurement',
    scopeTitle: isArabic ? 'نطاق واضح وثقة تدوم' : 'Clear scope and lasting trust',
    scopeBody: isArabic
      ? 'تحديد نطاق العمل لا يعتمد على عدد الصفحات فقط؛ بل على حجم الرسالة، التعقيد، التكاملات، ومستوى التفاصيل الذي تحتاجه شركتك للوصول لنتيجة موثوقة.'
      : 'Defining scope is not based on page count alone. It reflects message depth, complexity, integrations, and the level of detail your company needs for a trustworthy outcome.',
    faqDescription: isArabic
      ? 'إجابات مختصرة تساعدك على فهم طريقة التخطيط والتنفيذ قبل طلب عرض أو مناقشة المشروع.'
      : 'Concise answers that help you understand planning and delivery before requesting a proposal or project discussion.',
    faqKicker: 'FAQ',
    faqTitle: isArabic ? 'أسئلة شائعة حول التنفيذ والحلول المتاحة' : 'Common questions about delivery and available solutions',
    faqCta: isArabic ? 'هل تحتاج إجابة أدق؟ تواصل معنا' : 'Need a more specific answer? Contact us',
  };

  const renderServiceDepthCard = (item: ServiceDepthItem, index: number) => (
    <motion.div
      className="relative pt-0 md:sticky md:top-24 md:pt-8"
      initial={isMobile ? false : { opacity: 0, y: 50 }}
      key={item.titleEn}
      style={{ zIndex: index, marginTop: index === 0 ? '0' : undefined }}
      transition={{ duration: 0.6 }}
      {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-10%' } } : {})}
    >
      <div className={`surface-card-strong relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-[1.8rem] border border-white/20 p-5 glass-card shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:min-h-[400px] md:rounded-[3rem] md:p-12 ${index === 0 ? '' : 'md:-mt-5'}`}>
        <div className="absolute right-0 top-0 z-0 hidden h-full w-1/2 overflow-hidden lg:block">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/80 to-transparent" />
          {item.imageMode === 'contain' ? (
            <div className="absolute inset-6 rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/12 via-[#07111d] to-transparent shadow-[0_25px_60px_rgba(8,145,178,0.18)]" />
          ) : null}
          <motion.img
            alt={item.imageAlt ?? item.titleEn}
            animate={item.imageMode === 'contain' ? { y: [0, -8, 0], scale: [1, 1.03, 1] } : undefined}
            className={`h-full w-full ${item.imageMode === 'contain' ? 'object-contain p-10 opacity-95 drop-shadow-[0_25px_45px_rgba(45,212,191,0.18)]' : 'object-cover opacity-40 mix-blend-screen scale-110'}`}
            src={item.image}
            transition={item.imageMode === 'contain' ? { duration: 6.8, repeat: Infinity, ease: 'easeInOut' } : undefined}
          />
        </div>

        <div className="relative z-10 max-w-2xl">
          <p className="pointer-events-none absolute -left-2 -top-4 select-none font-display text-4xl font-bold text-white/5 md:-left-4 md:-top-8 md:text-8xl">
            0{index + 1}
          </p>
          <div className="mb-5 inline-flex rounded-[1.4rem] bg-cyan-400/20 p-3 text-cyan-300 shadow-[0_0_30px_rgba(45,212,191,0.2)] md:mb-8 md:rounded-3xl md:p-5">
            <item.icon className="h-7 w-7 md:h-10 md:w-10" />
          </div>
          <h3 className="mb-4 font-display text-[1.9rem] font-bold tracking-wide text-white drop-shadow-lg md:mb-6 md:text-5xl">
            {isArabic ? item.titleAr : item.titleEn}
          </h3>
          <p className="text-base font-medium leading-8 text-slate-300 md:text-2xl md:leading-10">
            {isArabic ? item.descriptionAr : item.descriptionEn}
          </p>
          <motion.div
            animate={item.imageMode === 'contain' ? { y: [0, -6, 0] } : undefined}
            className={`relative mt-6 overflow-hidden rounded-[1.6rem] border p-3 shadow-[0_20px_60px_rgba(8,145,178,0.14)] lg:hidden md:mt-10 md:rounded-[2rem] md:p-4 ${
              item.imageMode === 'contain'
                ? 'border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#07111d] to-transparent'
                : 'border-white/10 bg-[#09111c]/80'
            }`}
            transition={item.imageMode === 'contain' ? { duration: 6.2, repeat: Infinity, ease: 'easeInOut' } : undefined}
          >
            <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-br from-white/5 to-transparent" />
            <img
              alt={item.imageAlt ?? item.titleEn}
              className={`relative z-10 w-full ${
                item.imageMode === 'contain'
                  ? 'h-[180px] object-contain drop-shadow-[0_20px_40px_rgba(45,212,191,0.18)] md:h-[220px]'
                  : 'h-[150px] rounded-[1.2rem] object-cover md:h-[190px]'
              }`}
              src={item.image}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  const renderCoreServiceCard = (service: (typeof services)[number], index: number) => {
    const Icon = serviceIcons[index];
    const gridClass =
      index === 0
        ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#0b1220]/80 to-[#101b2f]/80'
        : index === 1
          ? 'md:col-span-1 md:row-span-1 bg-[#06090f]/60'
          : index === 2
            ? 'md:col-span-1 md:row-span-1 bg-[#06090f]/60'
            : 'md:col-span-3 md:row-span-1 bg-gradient-to-r from-violet-900/10 to-cyan-900/10';
    const title = isArabic ? service.title : service.englishTitle ?? service.title;
    const description = isArabic
      ? service.description
      : service.englishDescription ?? service.description;
    const bullets = isArabic ? service.bullets : service.englishBullets ?? service.bullets;

    return (
      <motion.div
        key={service.title}
        initial={isMobile ? false : { opacity: 0, y: 30 }}
        {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' } } : {})}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[1.55rem] border border-white/10 p-4 glass-card transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 md:rounded-[2.5rem] md:p-8 ${gridClass}`}
      >
        <div className="pointer-events-none absolute -inset-10 z-0 rounded-full bg-cyan-400/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

        {index === 0 ? (
          <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-2/3 w-2/3 overflow-hidden rounded-tl-[100%] border-l-2 border-t-2 border-white/10 opacity-20 mix-blend-screen transition-opacity duration-700 group-hover:opacity-40">
            <img src="/images/Coding.gif" className="h-full w-full object-cover" alt="Coding" />
          </div>
        ) : null}

        <div className="relative z-10">
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2.5 text-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)] md:p-4">
            <Icon className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <h3 className={`mt-4 font-display font-semibold text-white ${index === 0 ? 'text-[1.5rem] md:text-5xl' : 'text-[1.1rem] md:text-2xl'}`}>
            {title}
          </h3>
          <p className={`mt-2.5 leading-6 text-slate-400 md:mt-4 ${index === 0 ? 'max-w-lg text-sm md:text-lg md:leading-relaxed' : 'text-sm'}`}>
            {description}
          </p>
        </div>

        <div className="relative z-10 mt-4 flex w-full flex-wrap gap-1.5 md:mt-8 md:gap-2">
          {bullets.slice(0, index === 0 ? 3 : 2).map((bullet) => (
            <span key={bullet} className="pill border-white/10 bg-white/5 text-slate-300 backdrop-blur-md">
              {bullet}
            </span>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderServiceLibraryCard = (service: (typeof serviceLibrary)[number], index: number) => {
    const family = serviceFamilies.find((item) => item.id === service.familyId);

    return (
      <motion.article
        key={service.slug}
        initial={isMobile ? false : { opacity: 0, y: 18 }}
        {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 } } : {})}
        transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.25) }}
        className={`group relative flex min-h-[280px] md:min-h-[320px] min-w-0 flex-col overflow-hidden rounded-xl md:rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${service.accent} p-2.5 md:p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 text-xs md:text-sm`}
      >
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex max-w-full rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.72rem] font-semibold text-cyan-100 backdrop-blur-md">
            {family ? (isArabic ? family.label.ar : family.label.en) : service.familyId}
          </span>
          <span className="shrink-0 font-display text-sm font-bold text-white/35">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="mt-4 min-w-0">
          <p className="text-[10px] font-semibold text-cyan-200">
            {isArabic ? service.eyebrow.ar : service.eyebrow.en}
          </p>
          <h3 className="mt-2 break-words font-display text-[1.08rem] font-bold leading-7 text-white md:text-[1.25rem] md:leading-8">
            {isArabic ? service.title.ar : service.title.en}
          </h3>
          <p className="mt-2 text-[11px] leading-6 text-slate-300 md:mt-3 md:text-sm">
            {isArabic ? service.summary.ar : service.summary.en}
          </p>
        </div>

        <div className="mt-2 md:mt-4 rounded-lg md:rounded-[1rem] border border-white/10 bg-black/18 p-2.5 md:p-3">
          <p className="text-[10px] md:text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {isArabic ? 'أفضل استخدام' : 'Best fit'}
          </p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs leading-5 md:leading-6 text-slate-300">
            {isArabic ? service.bestFor.ar : service.bestFor.en}
          </p>
        </div>

        <ul className="mt-2 md:mt-4 grid gap-1 md:gap-1.5">
          {service.deliverables.slice(0, 2).map((item) => (
            <li key={item.en} className="flex items-start gap-1.5 text-[10px] md:text-xs leading-5 md:leading-6 text-slate-300">
              <CheckCircle className="mt-0.5 md:mt-1 h-3.5 md:h-4 w-3.5 md:w-4 shrink-0 text-cyan-300" />
              <span className="min-w-0 break-words">{isArabic ? item.ar : item.en}</span>
            </li>
          ))}
        </ul>

        <Link
          className="mt-auto inline-flex items-center gap-1.5 md:gap-2 pt-3 md:pt-4 text-[10px] md:text-xs font-semibold text-cyan-100 transition-colors hover:text-white"
          to={localizePath(`/services/${service.slug}`)}
        >
          {isArabic ? 'مزيد' : 'More'}
          <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
        </Link>
      </motion.article>
    );
  };

  const renderServiceProcessCard = (step: (typeof processSteps)[number], index: number) => (
    <div key={step.title} className={processCardClass}>
      <div className="mb-2 flex items-center gap-3">
        <span className="font-display text-xl font-bold text-cyan-400/50 transition-colors group-hover:text-cyan-400 md:text-2xl">
          0{index + 1}
        </span>
        <h3 className="font-display text-[1.05rem] font-bold text-white transition-colors group-hover:text-cyan-300 md:text-2xl">
          {isArabic ? step.title : step.englishTitle ?? step.title}
        </h3>
      </div>
      <p className={processDescriptionClass}>
        {isArabic ? step.description : step.englishDescription ?? step.description}
      </p>
    </div>
  );

  const renderFaqCard = (item: (typeof faqItems)[number], index: number) => (
    <motion.article
      key={item.questionEn}
      initial={isMobile ? false : { opacity: 0, y: 18 }}
      {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } } : {})}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={faqCardClass}
    >
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className={faqCardRowClass}>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 font-display text-[0.76rem] font-bold tracking-[0.18em] text-cyan-100">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="break-words text-[0.98rem] font-semibold leading-6 text-white md:text-[1.02rem] md:leading-7">
            {isArabic ? item.questionAr : item.questionEn}
          </h3>
          <p className={faqAnswerClass}>
            {isArabic ? item.answerAr : item.answerEn}
          </p>
        </div>
      </div>
    </motion.article>
  );

  usePageMetadata(getPageSeoByPath('/services', lang));

  return (
    <section className="relative overflow-x-hidden pb-12 md:pb-20 pt-8 md:pt-10 lg:min-h-screen">
      <div className="mobile-ornament absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-700/20 blur-[150px] pointer-events-none -z-10 animate-pulse" />
      <div className="mobile-ornament absolute top-[60%] left-[-10%] h-[600px] w-[600px] rounded-full bg-violet-700/20 blur-[150px] pointer-events-none -z-10" />

      <PageHero
        description={content.description}
        kicker={content.coreKicker}
        metrics={[
          { value: `${serviceLibrary.length}`, label: isArabic ? 'خدمة تفصيلية' : 'detailed services' },
          { value: `${serviceFamilies.length}`, label: isArabic ? 'عائلات خدمات' : 'service families' },
          { value: `${processSteps.length}`, label: isArabic ? 'خطوات عمل' : 'process steps' },
        ]}
        primaryAction={{ label: isArabic ? 'اطلب مناقشة الخدمة' : 'Request a service discussion', to: localizePath('/contact') }}
        profileId="services"
        secondaryAction={{ label: isArabic ? 'شاهد الأعمال' : 'View projects', to: localizePath('/projects') }}
        title={content.heroWord}
      />

        <div className="hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20 mix-blend-screen mix-blend-overlay">
          <img
            src="/images/WhatsApp%20Image%202026-02-15%20at%2005.05.18%20(3).jpeg"
            className="w-full h-full object-cover"
            alt="Office Background"
          />
        </div>

        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative z-10 text-center w-full select-none"
        >
          <h1
            className="w-full px-4 font-display text-[1.95rem] font-bold uppercase leading-none tracking-[-0.05em] sm:text-[4rem] md:text-[10rem] md:leading-[0.8] lg:text-[14rem]"
            style={{
              backgroundImage: `url('/images/ChatGPT%20Image%20Apr%208%2C%202026%2C%2011_26_40%20AM.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.5))',
            }}
          >
            {content.heroWord}
          </h1>
          <p className="mt-2.5 px-4 text-[13px] font-medium tracking-wide text-cyan-200 sm:text-base md:mt-6 md:px-0 md:text-3xl">
            {content.heroSubtitle}
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="mb-16 md:mb-32">
          <SectionTitle
            description={content.coreDescription}
            kicker={content.coreKicker}
            title={content.coreTitle}
          />
          <div className="mt-6 md:mt-8 grid gap-3 md:gap-4 md:hidden">
            {services.map((service, index) => renderCoreServiceCard(service, index))}
          </div>
          <div className="mt-8 hidden auto-rows-auto grid-cols-1 gap-4 md:mt-10 md:grid md:grid-cols-3 md:gap-5">
            {services.map((service, index) => renderCoreServiceCard(service, index))}
          </div>
        </div>

        <div className="mb-12 md:mb-20 lg:mb-32">
          <div className="grid gap-4 md:gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionTitle
              description={
                isArabic
                  ? 'اختر العائلة المناسبة ثم افتح صفحة كل خدمة لتجد وعداً واضحاً، مخرجات، سيناريوهات، مراحل، وأسئلة قرار.'
                  : 'Choose the right family, then open each service page for promise, outputs, scenarios, stages, and decision questions.'
              }
              kicker={isArabic ? 'مكتبة الخدمات' : 'Service Library'}
              title={isArabic ? '30 خدمة فعلية منظمة في عائلات واضحة' : '30 practical services organized into clear families'}
            />

            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 md:rounded-[1.7rem] md:p-5">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveFamily('all')}
                  className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                    activeFamily === 'all'
                      ? 'border-cyan-300/50 bg-cyan-300/18 text-cyan-50'
                      : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {isArabic ? 'الكل' : 'All'}
                </button>
                {serviceFamilies.map((family) => (
                  <button
                    key={family.id}
                    type="button"
                    onClick={() => setActiveFamily(family.id)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                      activeFamily === family.id
                        ? 'border-cyan-300/50 bg-cyan-300/18 text-cyan-50'
                        : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {isArabic ? family.label.ar : family.label.en}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-3">
                <div>
                  <p className="font-display text-2xl font-bold text-white">{visibleLibraryServices.length}</p>
                  <p className="text-xs text-slate-400">{isArabic ? 'خدمة ظاهرة' : 'visible services'}</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white">{serviceFamilies.length}</p>
                  <p className="text-xs text-slate-400">{isArabic ? 'عائلات' : 'families'}</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    {activeFamily === 'all'
                      ? isArabic
                        ? 'كل الخدمات'
                        : 'All services'
                      : activeFamilyDetails
                        ? isArabic
                          ? activeFamilyDetails.label.ar
                          : activeFamilyDetails.label.en
                        : ''}
                  </p>
                  <p className="text-xs text-slate-400">
                    {activeFamily === 'all'
                      ? isArabic
                        ? 'اختيار شامل'
                        : 'complete view'
                      : activeFamilyDetails
                        ? isArabic
                          ? activeFamilyDetails.description.ar
                          : activeFamilyDetails.description.en
                        : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-2 sm:gap-3 grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
            {visibleLibraryServices.map((service, index) => renderServiceLibraryCard(service, index))}
          </div>
        </div>

        <div className="relative mb-12 md:mb-20 lg:mb-32">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionTitle
                description={
                  isArabic
                    ? 'كل خدمة تتحول إلى مسار واضح فيه مخرجات، جمهور مناسب، ووعد تنفيذي محدد حتى تعرف ماذا ستحصل عليه.'
                    : 'Every service becomes a clear track with deliverables, best-fit audience, and a precise execution promise so you know what you receive.'
                }
                kicker={isArabic ? 'باقات التنفيذ' : 'Delivery Packages'}
                title={isArabic ? 'ماذا نبيع فعلاً؟ ليس صفحات، بل نظام حضور' : 'What do we really sell? Not pages, but a presence system'}
              />
              <div className="mt-6 rounded-[1.6rem] border border-amber-300/15 bg-amber-300/[0.04] p-5 md:rounded-[2rem] md:p-6">
                <p className="text-sm leading-7 text-amber-100/80">
                  {isArabic
                    ? 'التفاصيل هنا تساعدك على تخيل النتيجة قبل التواصل، وتقلل الأسئلة المتكررة أثناء القرار.'
                    : 'These details help you imagine the outcome before contacting us and reduce repeated decision questions.'}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {servicePackages.map((pack, index) => (
                <motion.article
                  key={pack.name.en}
                  initial={isMobile ? false : { opacity: 0, y: 20 }}
                  {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
                  transition={{ delay: index * 0.08 }}
                  className={`relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-gradient-to-br ${pack.accent} p-5 md:rounded-[2rem] md:p-7`}
                >
                  <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200/70">
                        {isArabic ? 'مسار خدمة' : 'Service Track'} 0{index + 1}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                        {isArabic ? pack.name.ar : pack.name.en}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {isArabic ? pack.promise.ar : pack.promise.en}
                      </p>
                    </div>
                    <div className="rounded-[1.25rem] border border-white/8 bg-[#06090f]/45 p-4">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {isArabic ? 'المخرجات' : 'Deliverables'}
                      </p>
                      <div className="space-y-2">
                        {pack.deliverables.map((deliverable) => (
                          <div key={deliverable.en} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                            <span>{isArabic ? deliverable.ar : deliverable.en}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mb-20 md:mb-32">
          <SectionTitle
            description={content.depthDescription}
            kicker={content.depthKicker}
            title={content.depthTitle}
          />
          <div className="mt-8 grid gap-4 md:hidden">
            {serviceDepth.map((item, index) => renderServiceDepthCard(item, index))}
          </div>
          <div className="mt-16 hidden h-auto space-y-0 md:block">
            {serviceDepth.map((item, index) => renderServiceDepthCard(item, index))}
          </div>
        </div>

        <div className="relative mb-20 grid items-center gap-10 md:gap-12 lg:mb-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative z-10 space-y-8">
            <SectionTitle
              description={content.processDescription}
              kicker={content.processKicker}
              title={content.processTitle}
            />
            <div className="mt-8 grid gap-4 md:hidden">
              {processSteps.map((step, index) => renderServiceProcessCard(step, index))}
            </div>
            <div className="mt-8 hidden gap-4 md:grid">
              {processSteps.map((step, index) => renderServiceProcessCard(step, index))}
            </div>
          </div>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 28, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0, scale: 1 }}
            className="relative hidden h-[800px] overflow-hidden rounded-[3rem] border border-white/20 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.16),transparent_42%),linear-gradient(145deg,rgba(8,17,30,0.96),rgba(6,9,15,0.98))] p-8 shadow-2xl lg:block"
          >
            <img
              src="/images/UI%20UX%20Design%20Website%20Development%20Pop%20up-loop.gif"
              className="relative z-10 h-full w-full rounded-[2.2rem] object-contain p-5 drop-shadow-[0_30px_70px_rgba(45,212,191,0.22)]"
              alt="Service structure illustration"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06090f]/86 via-transparent to-[#06090f]/24" />
            <div className="pointer-events-none absolute inset-6 rounded-[2.4rem] border border-cyan-300/12 bg-white/[0.025]" />

            <div className="absolute bottom-10 left-10 z-20 p-6 glass-card rounded-3xl border-white/30 backdrop-blur-2xl">
              <div className="flex items-center gap-3 text-xl font-bold text-white">
                <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-cyan-400" />
                  <span className="relative z-10 inline-flex h-4 w-4 rounded-full bg-cyan-400" />
                </span>
                <span>{content.processBadge}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <EditorialImageBreak imageId="trust-workshop" variant="offset" reverse className="mb-12 md:mb-20" />
        <PageImageShowcaseSection showcase={pageImageShowcases.services} />

        <div className="relative mb-20 md:mb-32">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-[#08111c]/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.24)] md:rounded-[2.6rem] md:p-8">
              <p className="section-kicker mb-5">{isArabic ? 'ملفات التسليم' : 'Handoff Assets'}</p>
              <h2 className="font-display text-2xl font-bold text-white md:text-4xl">
                {isArabic ? 'لا نستلم التصميم فقط، بل نظامًا يمكن البناء عليه' : 'You do not receive a design only, but a system to build on'}
              </h2>
              <div className="mt-7 grid gap-3">
                {deliveryArtifacts.map((artifact, index) => (
                  <motion.div
                    key={artifact.title.en}
                    initial={isMobile ? false : { opacity: 0, x: isArabic ? 24 : -24 }}
                    {...(!isMobile ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : {})}
                    transition={{ delay: index * 0.07 }}
                    className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4"
                  >
                    <h3 className="font-display text-lg font-bold text-white">{isArabic ? artifact.title.ar : artifact.title.en}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{isArabic ? artifact.description.ar : artifact.description.en}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-emerald-400/8 via-white/[0.03] to-amber-400/8 p-5 md:rounded-[2.6rem] md:p-8">
              <p className="section-kicker mb-5">{isArabic ? 'حسب القطاع' : 'By Industry'}</p>
              <h2 className="font-display text-2xl font-bold text-white md:text-4xl">
                {isArabic ? 'نختار التفاصيل حسب احتياج شركتك' : 'We tune details to your company need'}
              </h2>
              <div className="mt-7 grid gap-3">
                {industryUseCases.map((item) => (
                  <div key={item.sector.en} className="rounded-[1.25rem] border border-white/8 bg-[#06090f]/45 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-base font-bold text-cyan-100">{isArabic ? item.sector.ar : item.sector.en}</h3>
                      <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200">Fit</span>
                    </div>
                    <p className="mt-2 text-xs leading-6 text-slate-500">{isArabic ? item.need.ar : item.need.en}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{isArabic ? item.solution.ar : item.solution.en}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-20 md:mb-32">
          <div className="absolute inset-x-0 h-full bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent blur-3xl pointer-events-none -z-10" />
          <div className="glass-card flex flex-col items-start justify-between gap-8 rounded-[2rem] border-y border-white/10 bg-[#0b1220]/80 p-5 shadow-[0_0_80px_rgba(45,212,191,0.1)] md:flex-row md:items-center md:gap-10 md:rounded-[4rem] md:p-16 lg:gap-0">
            <div className={scopeSplitClass}>
              <h2 className="mb-3 font-display text-3xl font-bold leading-tight text-white md:mb-4 md:text-4xl">{content.scopeTitle}</h2>
              <p className="text-base leading-7 text-slate-400 md:text-lg md:leading-8">{content.scopeBody}</p>
            </div>
            <div className={scopeStatsClass}>
              {timelineStats.map((item, index) => (
                <div
                  key={item.sub}
                  className={index === 2 ? 'col-span-2 border-t border-white/10 pt-5 md:border-none md:pt-0 lg:col-span-1' : ''}
                >
                  <p className={`mb-2 font-display text-4xl font-bold md:text-5xl ${index === 0 ? 'text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-500' : index === 1 ? 'text-transparent bg-clip-text bg-gradient-to-b from-violet-200 to-violet-500' : 'text-white'}`}>
                    {item.value}
                  </p>
                  <p className="text-slate-300 font-medium">{isArabic ? item.labelAr : item.labelEn}</p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20 grid gap-6 md:gap-12 lg:mb-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="min-w-0 space-y-5 md:space-y-6">
            <SectionTitle
              description={content.faqDescription}
              kicker={content.faqKicker}
              title={content.faqTitle}
            />
              <Link to={localizePath('/contact')} className="btn-primary group mt-4 inline-flex w-full justify-center text-base shadow-[0_10px_30px_rgba(45,212,191,0.3)] hover:shadow-[0_15px_40px_rgba(45,212,191,0.5)] sm:w-auto md:mt-8 md:px-8 md:py-4 md:text-lg">
              {content.faqCta}
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 24 }}
              {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
              transition={{ delay: 0.2 }}
              className="hidden justify-center lg:mt-10 lg:flex lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-[280px] overflow-hidden rounded-[1.8rem] border border-cyan-400/20 bg-[#09111c]/90 p-3 shadow-[0_30px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:max-w-[300px] md:rounded-[2.4rem] md:p-4"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.12),transparent_55%)]" />
                  <div className="relative rounded-[1.5rem] border border-white/8 bg-gradient-to-br from-cyan-400/8 via-transparent to-violet-400/10 p-3 md:rounded-[2rem] md:p-4">
                  <img
                    src={illustrationAssets.coding.src}
                    alt={illustrationAssets.coding.alt}
                      className="h-[150px] w-full object-contain [filter:saturate(0.88)_brightness(0.93)_contrast(1.05)] md:h-[180px]"
                  />
                </div>
                <div className={`relative mt-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
                    {isArabic ? 'مشهد تنفيذي' : 'Execution View'}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {isArabic
                      ? 'لقطة سريعة من بيئة التنفيذ داخل فريق التطوير.'
                      : 'A quick glimpse into the execution layer inside our build workflow.'}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="min-w-0 grid gap-3 md:grid-cols-2 md:gap-4">
            {faqItems.map((item, index) => renderFaqCard(item, index))}
          </div>
        </div>

        <div className="mx-auto mt-16 mb-16 max-w-7xl px-4 md:mt-24">
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {guaranteeCards.map((item, index) => (
              <motion.div
                key={item.titleEn}
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
                transition={{ delay: index * 0.1 }}
                className="surface-card flex items-center gap-4 rounded-[1.8rem] border border-white/8 p-5 group transition-all hover:border-cyan-400/30 md:gap-6 md:rounded-[2.5rem] md:p-8"
              >
                  <div className="rounded-2xl bg-cyan-400/20 p-3 text-cyan-400 transition-all group-hover:bg-cyan-400 group-hover:text-white md:p-4">
                    <item.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-slate-400 text-sm leading-7">{isArabic ? item.descAr : item.descEn}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
