import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { useRef } from 'react';
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
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { processSteps, services } from '../data/portfolio';
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
      'نعم، نوفر باقات دعم فني وصيانة دورية لضمان بقاء موقعك محدثاً وآمناً وبأعلى أداء تقني ممكن.',
    answerEn:
      'Yes. We offer post-launch support and maintenance options to keep your site current, secure, and technically strong.',
  },
  {
    questionAr: 'هل يمتلك العميل الكود المصدري بالكامل؟',
    questionEn: 'Does the client receive full ownership of the source code?',
    answerAr:
      'بالتأكيد، بمجرد الانتهاء من المشروع وتسليمه، تنتقل ملكية كافة الأصول الرقمية والكود المصدري للعميل بالكامل ولا نلزمك بأي قيود.',
    answerEn:
      'Yes. Once the project is completed and delivered, the full digital assets and source code are handed over without restrictive lock-in.',
  },
  {
    questionAr: 'كيف يتم ضمان سرعة الموقع وأدائه؟',
    questionEn: 'How do you ensure performance and speed?',
    answerAr:
      'نستخدم أحدث التقنيات مثل React وVite مع تقنيات ضغط الصور المتطورة، ونحرص على تحقيق أعلى التقييمات في Google PageSpeed لضمان تجربة مستخدم صاروخية.',
    answerEn:
      'We use modern tools like React and Vite, optimize assets carefully, and aim for strong PageSpeed scores so the experience stays fast.',
  },
  {
    questionAr: 'هل تدعم المواقع التي تبنونها لغات متعددة؟',
    questionEn: 'Can the sites you build support multiple languages?',
    answerAr:
      'نعم، نصمم ونبرمج المواقع لتكون قابلة لدعم لغات متعددة بكل سلاسة، مع مراعاة كاملة لاتجاهات النصوص والتنسيق اللغوي.',
    answerEn:
      'Yes. We design multilingual-ready websites with full attention to language structure, formatting, and RTL/LTR layout needs.',
  },
];

const serviceDepth: ServiceDepthItem[] = [
  {
    icon: LayoutTemplate,
    titleAr: 'هيكل الصفحة والرسالة',
    titleEn: 'Structure and messaging',
    descriptionAr: 'نبني هيكل الصفحة ونرتب الرسالة بحيث تكون واضحة ومقنعة من أول نظرة.',
    descriptionEn: 'We shape the page structure and the message so the offer feels clear and convincing from the first glance.',
    image: '/images/Gemini_Generated_Image_96cd0396cd0396cd.png',
  },
  {
    icon: Cog,
    titleAr: 'التنفيذ والصقل',
    titleEn: 'Execution and polish',
    descriptionAr: 'نهتم بالتفاصيل الدقيقة، الحركة، التباعد، والأداء السريع جدًا للواجهة.',
    descriptionEn: 'We care about motion, spacing, micro-details, and a very fast interface that feels polished throughout.',
    image: '/images/WhatsApp%20Image%202026-02-15%20at%202.31.19%20AM%20(1).jpeg',
  },
  {
    icon: ShieldCheck,
    titleAr: 'الثقة وطريقة العرض',
    titleEn: 'Trust and presentation',
    descriptionAr: 'نضيف عناصر الثقة والمحتوى المنظم والشهادات وطرق العرض الأكثر احترافية.',
    descriptionEn: 'We layer in trust signals, structured content, testimonials, and a more professional presentation system.',
    image: '/images/Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png',
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
    titleAr: 'ضمان رضا العميل',
    titleEn: 'Client satisfaction',
    descAr: 'دورات مراجعة غير محدودة حتى تكون راضيًا تمامًا عن التصميم والتجربة قبل أي تسليم نهائي.',
    descEn: 'We keep refining through review rounds until you are fully confident in the design and overall experience.',
  },
  {
    icon: ShieldCheck,
    titleAr: 'ضمان ما بعد الإطلاق',
    titleEn: 'Post-launch coverage',
    descAr: 'أي خلل تقني يظهر بعد الإطلاق مباشرة يتم إصلاحه سريعًا بدون تكلفة إضافية.',
    descEn: 'Any technical issue that appears right after launch is resolved quickly without extra cost.',
  },
];

const ServicesPage = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const processCardClass = isArabic
    ? 'glass-card rounded-[2rem] p-6 border-r-4 border-r-cyan-400/50 hover:bg-white/5 transition-colors group text-right'
    : 'glass-card rounded-[2rem] p-6 border-l-4 border-l-cyan-400/50 hover:bg-white/5 transition-colors group text-left';
  const processDescriptionClass = isArabic
    ? 'text-base leading-8 text-slate-400 pr-10'
    : 'text-base leading-8 text-slate-400 pl-10';
  const pricingSplitClass = isArabic
    ? 'max-w-xl pl-0 md:pl-10 border-l-0 md:border-l border-white/10 text-right'
    : 'max-w-xl pr-0 md:pr-10 border-r-0 md:border-r border-white/10 text-left';
  const pricingStatsClass = isArabic
    ? 'grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 pr-0 md:pr-10 text-center w-full md:w-auto'
    : 'grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 pl-0 md:pl-10 text-center w-full md:w-auto';
  const faqTriggerClass = isArabic
    ? 'py-2 text-right text-lg font-bold text-white hover:no-underline group hover:text-cyan-300 transition-colors'
    : 'py-2 text-left text-lg font-bold text-white hover:no-underline group hover:text-cyan-300 transition-colors';
  const content = {
    title: isArabic ? 'خدماتنا' : 'Our Services',
    description: isArabic
      ? 'صفحة الخدمات تشرح حلول نُطق بشكل مستقل.'
      : 'The services page explains Notaq solutions clearly.',
    heroWord: isArabic ? 'الخدمات' : 'SERVICES',
    heroSubtitle: isArabic ? 'تصاميم استثنائية، كود متين، ونجاح حتمي.' : 'Exceptional design, strong code, and deliberate business outcomes.',
    coreDescription: isArabic
      ? 'كل خدمة هنا مصممة لتكون مفهومة، قابلة للعرض فورًا، وتدعم قوة علامتك التجارية.'
      : 'Every service here is designed to be clear, presentable, and strong enough to support your brand story.',
    coreKicker: isArabic ? 'مسارات الخدمة' : 'Service Lines',
    coreTitle: isArabic ? 'المسارات الأساسية التي نعمل عليها' : 'The core tracks we build around',
    depthDescription: isArabic
      ? 'لسنا نتحدث عن الكود فقط، بل عن مستوى التفكير الاستراتيجي الذي يجعل الواجهة دقيقة ومقنعة.'
      : 'This is not just about code. It is about the level of strategic thinking that makes the interface feel sharp and convincing.',
    depthKicker: isArabic ? 'العمق المهني' : 'Professional Depth',
    depthTitle: isArabic ? 'طبقات من التعقيد تُخرج بساطة مطلقة' : 'Layers of complexity that result in elegant simplicity',
    processDescription: isArabic
      ? 'جودة النتيجة لا تعتمد على التصميم فقط، بل على الطريقة الدقيقة لاكتشاف الاحتياج وبناء الحل.'
      : 'Great output does not come from design alone. It comes from how precisely the need is discovered and translated into a solution.',
    processKicker: isArabic ? 'العملية' : 'Process',
    processTitle: isArabic ? 'كيف تتحول الفكرة لحقيقة مرئية؟' : 'How does an idea become something visible?',
    processBadge: isArabic ? 'تصميم حي نابض بالتفاصيل' : 'Living design shaped by details',
    pricingTitle: isArabic ? 'الاستثمار في جودة لا تتقادم' : 'Investing in quality that lasts',
    pricingBody: isArabic
      ? 'التسعير لدينا لا يعتمد على عدد الصفحات فقط، بل على حجم التعقيد والأنظمة المطلوبة وسرعة الإنجاز. نحرص دائمًا أن تتجاوز النتيجة ما تم دفعه.'
      : 'Our pricing is not based on page count alone. It reflects complexity, systems involved, and pace of delivery, with an outcome that should clearly exceed the investment.',
    faqDescription: isArabic
      ? 'كل ما تحتاج معرفته حول طريقة التعاقد والتنفيذ حتى تكون الصورة واضحة منذ البداية.'
      : 'Everything you need to know about how we plan, contract, and execute so expectations stay clear from the start.',
    faqKicker: 'FAQ',
    faqTitle: isArabic ? 'أسئلة شائعة حول التنفيذ والحلول المتاحة' : 'Common questions about delivery and available solutions',
    faqCta: isArabic ? 'لديك سؤال آخر؟ تواصل معنا' : 'Have another question? Contact us',
  };

  usePageMetadata(getPageSeoByPath('/services', lang));

  return (
    <section ref={containerRef} className="relative pb-20 pt-10 overflow-hidden min-h-screen">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-700/20 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[60%] left-[-10%] w-[600px] h-[600px] bg-violet-700/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden mb-8 md:mb-12">
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20 mix-blend-screen mix-blend-overlay">
          <img
            src="/images/Gemini_Generated_Image_9ooasm9ooasm9ooa%20(1).png"
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
            className="text-[3rem] sm:text-[5rem] md:text-[10rem] lg:text-[14rem] leading-none md:leading-[0.8] font-bold font-display uppercase tracking-[-0.05em] w-full px-4"
            style={{
              backgroundImage: `url('/images/Gemini_Generated_Image_9ooasm9ooasm9ooa%20(1).png')`,
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
          <p className="text-base md:text-3xl text-cyan-200 mt-4 md:mt-6 font-medium tracking-wide px-4 md:px-0">
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
          <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-3 auto-rows-auto">
            {services.map((service, index) => {
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-white/10 glass-card relative overflow-hidden group cursor-pointer hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${gridClass}`}
                >
                  <div className="absolute -inset-10 bg-cyan-400/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                  {index === 0 && (
                    <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-0 mix-blend-screen rounded-tl-[100%] overflow-hidden border-t-2 border-l-2 border-white/10">
                      <img src="/images/Gemini_Generated_Image_96cd0396cd0396cd.png" className="w-full h-full object-cover" alt="Coding" />
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="inline-flex rounded-2xl bg-white/5 border border-white/10 p-4 text-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className={`mt-6 font-display font-semibold text-white ${index === 0 ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
                      {title}
                    </h3>
                    <p className={`mt-4 text-slate-400 leading-relaxed ${index === 0 ? 'text-lg max-w-lg' : 'text-sm'}`}>
                      {description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 relative z-10 w-full">
                    {bullets.map((bullet) => (
                      <span key={bullet} className="pill bg-white/5 border-white/10 text-slate-300 backdrop-blur-md">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mb-32 relative">
          <SectionTitle
            description={content.depthDescription}
            kicker={content.depthKicker}
            title={content.depthTitle}
          />
          <div className="mt-16 space-y-0 h-auto">
            {serviceDepth.map((item, index) => (
              <motion.div
                key={item.titleEn}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6 }}
                className="sticky top-24 pt-8"
                style={{ zIndex: index, marginTop: index === 0 ? '0' : '-20px' }}
              >
                <div className="surface-card-strong rounded-3xl md:rounded-[3rem] p-6 md:p-12 border border-white/20 glass-card shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden relative min-h-[400px] flex flex-col justify-center">
                  <div className="absolute right-0 top-0 w-1/2 h-full z-0 overflow-hidden hidden lg:block">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/80 to-transparent z-10" />
                    {item.imageMode === 'contain' ? (
                      <div className="absolute inset-6 rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/12 via-[#07111d] to-transparent shadow-[0_25px_60px_rgba(8,145,178,0.18)]" />
                    ) : null}
                    <motion.img
                      src={item.image}
                      alt={item.imageAlt ?? item.titleEn}
                      animate={
                        item.imageMode === 'contain'
                          ? { y: [0, -8, 0], scale: [1, 1.03, 1] }
                          : undefined
                      }
                      transition={
                        item.imageMode === 'contain'
                          ? { duration: 6.8, repeat: Infinity, ease: 'easeInOut' }
                          : undefined
                      }
                      className={`h-full w-full ${
                        item.imageMode === 'contain'
                          ? 'object-contain p-10 opacity-95 drop-shadow-[0_25px_45px_rgba(45,212,191,0.18)]'
                          : 'object-cover opacity-40 mix-blend-screen scale-110'
                      }`}
                    />
                  </div>

                  <div className="relative z-10 max-w-2xl">
                    <p className="font-display text-5xl md:text-8xl font-bold text-white/5 absolute -top-8 -left-4 select-none pointer-events-none">
                      0{index + 1}
                    </p>
                    <div className="inline-flex rounded-3xl bg-cyan-400/20 p-5 text-cyan-300 shadow-[0_0_30px_rgba(45,212,191,0.2)] mb-8">
                      <item.icon className="h-10 w-10" />
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                      {isArabic ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xl md:text-2xl leading-10 text-slate-300 font-medium">
                      {isArabic ? item.descriptionAr : item.descriptionEn}
                    </p>
                    {item.imageMode === 'contain' ? (
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative mt-10 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#07111d] to-transparent p-4 shadow-[0_20px_60px_rgba(8,145,178,0.14)] lg:hidden"
                      >
                        <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-br from-white/5 to-transparent" />
                        <img
                          src={item.image}
                          alt={item.imageAlt ?? item.titleEn}
                          className="relative z-10 h-[220px] w-full object-contain drop-shadow-[0_20px_40px_rgba(45,212,191,0.18)]"
                        />
                      </motion.div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center relative">
          <div className="space-y-8 relative z-10">
            <SectionTitle
              description={content.processDescription}
              kicker={content.processKicker}
              title={content.processTitle}
            />
            <div className="grid gap-4 mt-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className={processCardClass}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-display text-2xl font-bold text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {isArabic ? step.title : step.englishTitle ?? step.title}
                    </h3>
                  </div>
                  <p className={processDescriptionClass}>
                    {isArabic ? step.description : step.englishDescription ?? step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div style={{ y: yImage1 }} className="relative h-[800px] rounded-[3rem] overflow-hidden shadow-2xl border-[1px] border-white/20 hidden lg:block">
            <img
              src="/images/Gemini_Generated_Image_uigh61uigh61uigh.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Process Showcase"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-violet-900/40 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent mix-blend-screen opacity-50" />

            <div className="absolute bottom-10 left-10 p-6 glass-card rounded-3xl border-white/30 backdrop-blur-2xl">
              <div className="flex items-center gap-3 text-xl font-bold text-white">
                <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-cyan-400 animate-ping" />
                  <span className="relative z-10 inline-flex h-4 w-4 rounded-full bg-cyan-400" />
                </span>
                <span>{content.processBadge}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-32 relative">
          <div className="absolute inset-x-0 h-full bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent blur-3xl pointer-events-none -z-10" />
          <div className="flex flex-col md:flex-row justify-between items-center bg-[#0b1220]/80 glass-card p-10 md:p-16 rounded-[4rem] border-y border-white/10 shadow-[0_0_80px_rgba(45,212,191,0.1)] gap-10 lg:gap-0">
            <div className={pricingSplitClass}>
              <h2 className="font-display text-4xl leading-tight font-bold text-white mb-4">{content.pricingTitle}</h2>
              <p className="text-lg text-slate-400 leading-8">{content.pricingBody}</p>
            </div>
            <div className={pricingStatsClass}>
              {timelineStats.map((item, index) => (
                <div
                  key={item.sub}
                  className={index === 2 ? 'col-span-2 lg:col-span-1 pt-6 lg:pt-0 border-t md:border-none border-white/10' : ''}
                >
                  <p className={`text-5xl font-display font-bold mb-2 ${index === 0 ? 'text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-500' : index === 1 ? 'text-transparent bg-clip-text bg-gradient-to-b from-violet-200 to-violet-500' : 'text-white'}`}>
                    {item.value}
                  </p>
                  <p className="text-slate-300 font-medium">{isArabic ? item.labelAr : item.labelEn}</p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-32 grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-6">
            <SectionTitle
              description={content.faqDescription}
              kicker={content.faqKicker}
              title={content.faqTitle}
            />
            <Link to="/contact" className="btn-primary inline-flex mt-8 group text-lg px-8 py-4 shadow-[0_10px_30px_rgba(45,212,191,0.3)] hover:shadow-[0_15px_40px_rgba(45,212,191,0.5)]">
              {content.faqCta}
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-[300px] overflow-hidden rounded-[2.4rem] border border-cyan-400/20 bg-[#09111c]/90 p-4 shadow-[0_30px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.12),transparent_55%)]" />
                <div className="relative rounded-[2rem] border border-white/8 bg-gradient-to-br from-cyan-400/8 via-transparent to-violet-400/10 p-4">
                  <img
                    src={illustrationAssets.coding.src}
                    alt={illustrationAssets.coding.alt}
                    className="h-[180px] w-full object-contain [filter:saturate(0.88)_brightness(0.93)_contrast(1.05)]"
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

          <div className="glass-card rounded-3xl md:rounded-[3rem] p-6 md:p-10 border border-white/10 shadow-2xl backdrop-blur-2xl bg-[#06090f]/80">
            <Accordion collapsible type="single" defaultValue="faq-0">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.questionEn} value={`faq-${index}`} className="border-b border-white/10 last:border-0 mb-4 pb-4">
                  <AccordionTrigger className={faqTriggerClass}>
                    {isArabic ? item.questionAr : item.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 pt-2 text-base leading-8 text-slate-400 font-medium text-start">
                    {isArabic ? item.answerAr : item.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-24 px-4 mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {guaranteeCards.map((item, index) => (
              <motion.div
                key={item.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="surface-card rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-white/8 flex gap-4 md:gap-6 items-center group hover:border-cyan-400/30 transition-all"
              >
                <div className="p-4 bg-cyan-400/20 rounded-2xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all">
                  <item.icon className="w-8 h-8" />
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
