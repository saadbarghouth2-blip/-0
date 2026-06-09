import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowUpLeft,
  Calendar,
  CheckCircle,
  Code2,
  Flame,
  Gem,
  Globe,
  MessageSquare,
  Monitor,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageImageShowcaseSection from '../components/PageImageShowcase';
import PageHero from '../components/PageHero';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { corporatePrinciples, trustSignals } from '../data/company';
import { editorialImages } from '../data/editorialImages';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { illustrationAssets } from '../lib/illustrationAssets';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

const motivations = [
  { icon: Flame, ar: 'الشغف بالصنعة', en: 'Craft passion', arDesc: 'حب حقيقي لما نبنيه.', enDesc: 'A real love for the work we build.' },
  { icon: Code2, ar: 'الدقة التقنية', en: 'Technical precision', arDesc: 'تنفيذ نظيف ومدروس.', enDesc: 'Clean, well-structured execution.' },
  { icon: MessageSquare, ar: 'صوتك أولًا', en: 'Your voice first', arDesc: 'نستمع قبل أن نقترح.', enDesc: 'We listen before we prescribe.' },
  { icon: TrendingUp, ar: 'النمو المستمر', en: 'Continuous growth', arDesc: 'نتعلم ونحسن باستمرار.', enDesc: 'We keep learning and improving.' },
];

const traits = [
  {
    tag: 'Design × Engineering',
    ar: 'نفكر كمصممين ونبني كمهندسين',
    en: 'We think like designers and build like engineers',
    arDesc: 'التصميم والتنفيذ عندنا مسار واحد، لذلك تخرج المنتجات أكثر تماسكًا.',
    enDesc: 'Design and implementation are one stream for us, which keeps products more coherent.',
  },
  {
    tag: 'Strategy First',
    ar: 'نسأل لماذا قبل كيف',
    en: 'We ask why before how',
    arDesc: 'كل صفحة يجب أن تخدم هدفًا واضحًا، لا مجرد شكل جيد.',
    enDesc: 'Every page needs a real purpose, not just a polished surface.',
  },
  {
    tag: 'Data-Driven',
    ar: 'نقيس ولا نخمن',
    en: 'We measure instead of guessing',
    arDesc: 'نقرأ السلوك الحقيقي بعد الإطلاق ونبني عليه التحسينات.',
    enDesc: 'We study real behavior after launch and improve from that.',
  },
  {
    tag: 'Continuous Growth',
    ar: 'نتعلم من كل مشروع',
    en: 'We learn from every project',
    arDesc: 'كل تسليم يضيف درسًا يدخل مباشرة في العمل التالي.',
    enDesc: 'Each delivery becomes a lesson for the next one.',
  },
];

interface TimelineStep {
  ar: string;
  en: string;
  arDesc: string;
  enDesc: string;
  img: string;
  imgAlt?: string;
  imgPoster?: string;
  mediaMode?: 'cover' | 'contain';
}

const timelineSteps: TimelineStep[] = [
  {
    ar: 'الاكتشاف والتشريح',
    en: 'Discovery and diagnosis',
    arDesc: 'نحلل النشاط والهدف ودور الواجهة قبل أي تصميم.',
    enDesc: 'We analyze the business, the goal, and the role of the interface before any design begins.',
    img: '/images/WhatsApp%20Image%202026-02-01%20at%208.47.19%20PM.jpeg',
  },
  {
    ar: 'هندسة المحتوى',
    en: 'Content architecture',
    arDesc: 'نعيد ترتيب المعلومات بحيث تقود الزائر للفهم والقرار.',
    enDesc: 'We restructure information so it guides visitors toward understanding and action.',
    img: '/images/Gemini_Generated_Image_8b3hvo8b3hvo8b3h.png',
  },
  {
    ar: 'تأثير الواجهة',
    en: 'Interface impact',
    arDesc: 'نضيف الحركة والطبقات البصرية لصناعة انطباع قوي وواضح.',
    enDesc: 'We introduce motion and visual layers to create impact without losing clarity.',
    img: illustrationAssets.designer.src,
    imgAlt: illustrationAssets.designer.alt,
    imgPoster: illustrationAssets.designerPoster.src,
    mediaMode: 'contain',
  },
  {
    ar: 'البناء الحديث',
    en: 'Modern build',
    arDesc: 'ننفذ بأدوات قوية تضمن السرعة والثبات على كل شاشة.',
    enDesc: 'We build with modern tools that keep the product fast and stable across screens.',
    img: '/images/notaq_web_identity_01.png',
  },
];

const values = [
  { icon: Target, ar: 'الدقة', en: 'Precision', arDesc: 'لا ننهي المشروع قبل أن يصبح سلسًا حقًا.', enDesc: 'We do not finish until the experience feels genuinely smooth.' },
  { icon: Zap, ar: 'السرعة', en: 'Speed', arDesc: 'وقتك مهم ونحترمه.', enDesc: 'We respect your time.' },
  { icon: Rocket, ar: 'الجرأة', en: 'Boldness', arDesc: 'نبحث عن زاوية مختلفة وهوية أوضح.', enDesc: 'We look for the sharper angle and the stronger identity.' },
  { icon: Users, ar: 'الشراكة', en: 'Partnership', arDesc: 'نشتغل كجزء من هدفك لا كمورد فقط.', enDesc: 'We work like part of your mission, not just a vendor.' },
  { icon: Gem, ar: 'التميز', en: 'Excellence', arDesc: 'المتوسط ليس معيارنا.', enDesc: 'Average is never our bar.' },
  { icon: CheckCircle, ar: 'الصدق', en: 'Authenticity', arDesc: 'الشفافية أساس العلاقة الطويلة.', enDesc: 'Transparency is what makes the relationship durable.' },
];

const stats = [
  { num: '8+', ar: 'سنوات خبرة', en: 'Years of experience', icon: Calendar },
  { num: '180+', ar: 'مشروع نُفذ', en: 'Projects delivered', icon: Rocket },
  { num: '40+', ar: 'قطاع مختلف', en: 'Industries served', icon: Globe },
  { num: '12', ar: 'تقنيات رئيسية', en: 'Core technologies', icon: Monitor },
  { num: '24/7', ar: 'دعم بعد الإطلاق', en: 'Post-launch support', icon: ShieldCheck },
];

const AboutPage = () => {
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const isArabic = lang === 'ar';
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroAccentClass = isArabic
    ? 'border-r-2 border-cyan-400/30 pr-4 text-right text-sm font-medium leading-7 text-slate-300 md:pr-6 md:text-2xl md:leading-10'
    : 'border-l-2 border-cyan-400/30 pl-4 text-left text-sm font-medium leading-7 text-slate-300 md:pl-6 md:text-2xl md:leading-10';
  const railClass = isArabic
    ? 'absolute right-8 top-0 bottom-0 hidden w-1 overflow-hidden rounded-full bg-white/5 md:left-1/2 md:block'
    : 'absolute left-8 top-0 bottom-0 hidden w-1 overflow-hidden rounded-full bg-white/5 md:left-1/2 md:block';
  const nodeClass = isArabic
    ? 'absolute right-[22px] hidden h-6 w-6 rounded-full border-4 border-cyan-400 bg-[#06090f] shadow-[0_0_20px_rgba(45,212,191,0.8)] md:left-1/2 md:block md:-translate-x-1/2'
    : 'absolute left-[22px] hidden h-6 w-6 rounded-full border-4 border-cyan-400 bg-[#06090f] shadow-[0_0_20px_rgba(45,212,191,0.8)] md:left-1/2 md:block md:-translate-x-1/2';
  const textBlockClass = isArabic
    ? 'w-full rounded-[1.8rem] border border-white/8 bg-white/[0.02] p-5 text-right md:w-1/2 md:border-0 md:bg-transparent md:p-0 md:pr-12 md:px-16'
    : 'w-full rounded-[1.8rem] border border-white/8 bg-white/[0.02] p-5 text-left md:w-1/2 md:border-0 md:bg-transparent md:p-0 md:pl-12 md:px-16';
  const mediaBlockClass = isArabic
    ? 'mt-4 w-full md:mt-0 md:w-1/2 md:px-0 md:pr-12 md:pl-4'
    : 'mt-4 w-full md:mt-0 md:w-1/2 md:px-0 md:pl-12 md:pr-4';
  const mobileMotivationsGridStyle = {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  } as const;
  const mobileValuesGridStyle = {
    gridTemplateColumns: 'repeat(auto-fit, minmax(11.5rem, 1fr))',
  } as const;
  const rawContent = {
    title: isArabic ? 'من نحن' : 'About us',
    description: isArabic ? 'تعرف على فريق نُطق ورؤيتنا' : 'Meet the Notaq team and our vision.',
    heroKicker: isArabic ? 'رحلة نُطق الرقمية' : 'The Notaq Journey',
    heroTitle1: isArabic ? 'تشكيل ملامح' : 'Shaping the outline of',
    heroTitle2: isArabic ? 'المستقبل' : 'what comes next',
    heroBody: isArabic
      ? 'احصل على تجربة لا تكتفي بواجهة جذابة، بل تجعل علامتك تتحول من حضور رقمي عادي إلى منصة أقوى في سوقها.'
      : 'Get an experience that goes beyond an attractive interface and moves your brand from an ordinary digital presence into a stronger market position.',
    heroCta: isArabic ? 'ناقش احتياج شركتك' : 'Discuss your company need',
    precisionTitle: isArabic ? 'الشغف بالدقة' : 'Precision-minded craft',
    precisionBody: isArabic ? 'سترى الابتكار في إطار عمل منهجي وواضح، لا في وعود عامة.' : 'You see innovation through a methodical and intentional approach, not generic promises.',
    mission: isArabic ? 'مهمتنا' : 'Our mission',
    missionBody: isArabic
      ? 'تحويل كل موقع من صفحة تعريفية إلى أداة نمو حقيقية تبني الثقة وتسرّع القرار.'
      : 'To turn every website from a presentation page into a real growth tool that builds trust and supports decisions.',
    missionNote: isArabic ? 'كل قرار تصميمي مرتبط بهدف تجاري واضح' : 'Every design decision is tied to a business goal',
    vision: isArabic ? 'رؤيتنا' : 'Our vision',
    visionBody: isArabic
      ? 'أن تكون نُطق مرجعًا إقليميًا لمن يريد حضورًا رقميًا ينافس أفضل التجارب العالمية.'
      : 'To make Notaq a regional reference for teams that want digital experiences capable of competing globally.',
    visionNote: isArabic ? 'رؤية تمتد لما هو أبعد من السوق المحلي' : 'A vision that goes beyond the local market',
    motivationsTitle: isArabic ? 'ما الذي يحرّكنا؟' : 'What drives us?',
    traitsTitle: isArabic ? 'كيف نفكر كفريق؟' : 'How do we think as a team?',
    quote: isArabic
      ? 'مهمتنا ليست أن تجعلك تبدو الأفضل لفترة قصيرة، بل أن نساعدك على بناء قاعدة جديدة يصعب على المنافسين اللحاق بها.'
      : 'Our role is not to make you look best for a short moment. It is to help you build a stronger foundation that competitors struggle to match.',
    workflowKicker: isArabic ? 'منهجية العمل' : 'Working Method',
    workflowTitle: isArabic ? 'كيف نبني هذه التجارب؟' : 'How do we build experiences like this?',
    cultureKicker: isArabic ? 'حضور وثقافة نُطق' : 'Global Presence & Culture',
    cultureTitle: isArabic ? 'شاهد حضور شركتك بصورة أوضح' : 'See your company presence more clearly',
    cultureBody: isArabic
      ? 'ستظهر الصور داخل القصة كدليل بصري يساعد زائر شركتك على الإحساس بالتجربة، تفاصيل الهوية، والمستوى المهني قبل أن يقرأ كل كلمة.'
      : 'Visuals appear inside the story as proof that helps your visitors feel the experience, identity, and professional level before reading every word.',
    cultureHover: isArabic ? 'من كواليس الإبداع' : 'Behind the scenes',
    valuesKicker: isArabic ? 'مبادئنا الجوهرية' : 'Core Principles',
    valuesTitle: isArabic ? 'القيم التي تبني كل قرار نتخذه' : 'The values behind every decision',
    numbersTitle: isArabic ? 'نُطق بالأرقام' : 'Notaq by the numbers',
    numbersSupport: isArabic
      ? 'نظل قريبين من المشروع بعد الإطلاق للمتابعة والتحسين.'
      : 'We stay close after launch for support, follow-up, and refinement.',
  };
  const content = Object.fromEntries(
    Object.entries(rawContent).map(([key, value]) => [key, clientFacingText(value, lang)]),
  ) as typeof rawContent;
  const copy = (value: string) => clientFacingText(value, lang);
  const copyLegacyPair = (ar: string, en: string) => copy(isArabic ? ar : en);

  const renderMotivationCard = (item: (typeof motivations)[number], index: number) => (
    <motion.div
      key={item.en}
      initial={isMobile ? false : { opacity: 0, y: 20 }}
      {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
      transition={{ delay: index * 0.08 }}
      className="glass-card group flex h-full flex-col items-center rounded-[1.2rem] border border-white/8 p-3.5 text-center transition-all hover:border-cyan-400/30 md:rounded-3xl md:p-6"
    >
      <div className="mb-2 rounded-[1rem] bg-white/5 p-2 transition-colors group-hover:bg-cyan-400/10 group-hover:text-cyan-400 md:mb-4 md:rounded-2xl md:p-3">
        <item.icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400 md:h-6 md:w-6" />
      </div>
      <p className="mb-1.5 text-[0.88rem] font-bold leading-5 text-white transition-colors group-hover:text-cyan-300 md:mb-2 md:text-sm">
        {copyLegacyPair(item.ar, item.en)}
      </p>
      <p className="text-[11px] leading-5 text-slate-500 md:text-xs md:leading-5">
        {copyLegacyPair(item.arDesc, item.enDesc)}
      </p>
    </motion.div>
  );

  const renderTraitCard = (item: (typeof traits)[number], index: number) => (
    <motion.div
      key={item.tag}
      initial={isMobile ? false : { opacity: 0, y: 20 }}
      {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
      transition={{ delay: index * 0.1 }}
      className="glass-card group flex flex-col gap-3 rounded-[1.2rem] border border-white/8 p-4 transition-all hover:border-violet-400/30 md:flex-row md:gap-6 md:rounded-[2rem] md:p-8"
    >
      <div className="h-0.5 w-full shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 md:h-auto md:w-1 md:self-stretch md:bg-gradient-to-b" />
      <div>
        <span className="mb-2 block text-[9px] font-mono uppercase tracking-[0.18em] text-violet-400 md:mb-3 md:text-[10px] md:tracking-widest">
          {item.tag}
        </span>
        <h4 className="mb-2 font-display text-[1rem] font-bold leading-6 text-white transition-colors group-hover:text-cyan-300 md:mb-3 md:text-xl">
          {copyLegacyPair(item.ar, item.en)}
        </h4>
        <p className="text-[12px] leading-5 text-slate-400 md:text-sm md:leading-7">
          {copyLegacyPair(item.arDesc, item.enDesc)}
        </p>
      </div>
    </motion.div>
  );

  const renderTimelineMobileCard = (step: TimelineStep, index: number) => (
    <motion.div
      key={step.en}
      initial={false}
      className={`glass-card flex items-start gap-3 rounded-[1.25rem] border border-white/10 p-3 ${isArabic ? 'text-right' : 'text-left'}`}
    >
      <div className={`min-w-0 flex-1 ${isArabic ? 'order-1' : 'order-2'}`}>
        <span className="mb-1.5 block text-[10px] font-bold tracking-[0.2em] text-cyan-400">
          PHASE 0{index + 1}
        </span>
        <h3 className="font-display text-[1rem] font-bold leading-6 text-white">
          {copyLegacyPair(step.ar, step.en)}
        </h3>
        <p className="mt-1.5 text-[12px] leading-5 text-slate-400">
          {copyLegacyPair(step.arDesc, step.enDesc)}
        </p>
      </div>
      <div
        className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-[1rem] border border-white/10 bg-[#07111d] ${isArabic ? 'order-2' : 'order-1'}`}
      >
        {step.mediaMode === 'contain' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#07111d] via-[#05070d] to-[#0b1220]" />
            <img
              src={step.img}
              alt={step.imgAlt ?? step.en}
              className="relative z-10 h-full w-full object-contain p-2.5"
            />
          </>
        ) : (
          <img
            src={step.imgPoster ?? step.img}
            alt={step.imgAlt ?? step.en}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );

  const renderMobileStatCard = (item: (typeof stats)[number], index: number) => {
    const isSupportCard = index === stats.length - 1;

    return (
      <motion.div
        key={`${item.en}-mobile`}
        initial={false}
        className={`glass-card relative overflow-hidden rounded-[1.25rem] border border-white/8 p-4 ${
          isSupportCard ? 'col-span-2' : ''
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
        <div className={`relative flex h-full items-start justify-between gap-3 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className="min-w-0">
            <p className="font-display text-[1.75rem] font-black leading-none text-white drop-shadow-lg">
              {item.num}
            </p>
            <p className="mt-2 text-[11px] font-medium leading-5 text-slate-400">
              {copyLegacyPair(item.ar, item.en)}
            </p>
            {isSupportCard ? (
              <p className="mt-2 max-w-[18rem] text-[11px] leading-5 text-slate-500">
                {content.numbersSupport}
              </p>
            ) : null}
          </div>
          <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-400 shadow-[0_12px_30px_rgba(45,212,191,0.16)]">
            <item.icon className="h-5 w-5" />
          </div>
        </div>
      </motion.div>
    );
  };

  usePageMetadata(getPageSeoByPath('/about', lang));

  return (
    <section ref={containerRef} className="relative pb-16 pt-10 md:min-h-screen md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="mobile-ornament absolute top-[10%] left-[-20%] h-[80vw] w-[80vw] rounded-full bg-cyan-600/10 opacity-70 blur-[180px] animate-pulse" />
        <div className="mobile-ornament absolute bottom-[20%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-violet-600/10 opacity-60 blur-[150px]" />
      </div>

      <PageHero
        description={content.heroBody}
        kicker={content.heroKicker}
        metrics={[
          { value: `${corporatePrinciples.length}`, label: isArabic ? 'مبادئ عمل' : 'work principles' },
          { value: `${trustSignals.length}+`, label: isArabic ? 'إشارات ثقة' : 'trust signals' },
          { value: '1', label: isArabic ? 'منهجية واضحة' : 'clear method' },
        ]}
        primaryAction={{ label: content.heroCta, to: localizePath('/contact') }}
        profileId="about"
        secondaryAction={{ label: isArabic ? 'استكشف الخدمات' : 'Explore services', to: localizePath('/services') }}
        title={`${content.heroTitle1} ${content.heroTitle2}`}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] md:block">
            <img
              src={illustrationAssets.cloudSync.src}
              alt={illustrationAssets.cloudSync.alt}
              className="h-full w-full object-cover object-center opacity-[0.14] saturate-[0.9]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 md:hidden">
            <img
              src={illustrationAssets.cloudSync.src}
              alt={illustrationAssets.cloudSync.alt}
              className="h-full w-full object-cover object-center opacity-[0.06]"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-gradient-to-b from-slate-950/14 via-slate-950/6 to-slate-950/34 md:w-[56%] md:bg-gradient-to-r md:from-slate-950/80 md:via-slate-950/18 md:to-transparent" />

          <div className="relative z-10 grid items-center gap-6 pt-3 pb-5 md:gap-16 md:pt-10 md:pb-24 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative z-10 max-w-[34rem] space-y-4 md:max-w-none md:space-y-8">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium tracking-wide text-cyan-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] md:px-6 md:py-3 md:text-sm">
                <Sparkles className="h-5 w-5" />
                {content.heroKicker}
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mb-2 max-w-[12ch] font-display text-[2.15rem] font-bold leading-[1.02] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-4 md:max-w-none md:text-[5.5rem] md:leading-[1.2]">
                {content.heroTitle1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-violet-300 mix-blend-screen">
                  {content.heroTitle2}
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className={heroAccentClass}>
                {content.heroBody}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link to={localizePath('/contact')} className="btn-primary group w-full justify-center rounded-[1.2rem] px-5 py-4 text-[0.98rem] shadow-[0_20px_50px_rgba(45,212,191,0.3)] hover:shadow-[0_20px_60px_rgba(45,212,191,0.5)] sm:w-auto md:px-8 md:py-4 md:text-lg">
                  {content.heroCta}
                  <ArrowUpLeft className="h-5 w-5 group-hover:scale-125 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div className="group relative mx-auto mt-1 w-full max-w-[560px] perspective-none md:mt-0 md:max-w-none md:perspective-[2000px]">
              <motion.div
                animate={{ rotateY: [-2, 2, -2], rotateX: [1, -1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[360px] w-full transform-style-3d shadow-2xl sm:h-[420px] md:h-[650px]"
              >
                <div className="mobile-ornament absolute inset-0 rounded-[4rem] bg-gradient-to-tr from-cyan-500 to-violet-500 opacity-20 blur-3xl transition-opacity duration-1000 group-hover:opacity-40" />
                <div className="absolute inset-0 overflow-hidden rounded-[2.1rem] border-[2px] border-white/20 glass-card md:rounded-[4rem]">
                  <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_36%),linear-gradient(135deg,rgba(6,9,15,0.18),rgba(15,23,42,0.72))]" />
                  <img
                    src="/images/Gemini_Generated_Image_96cd0396cd0396cd.png"
                    className="absolute inset-x-3 top-5 z-10 h-[60%] w-[calc(100%-1.5rem)] rounded-[1.6rem] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.46)] transition-transform duration-1000 group-hover:scale-[1.025] sm:inset-x-5 sm:top-6 sm:h-[61%] sm:w-[calc(100%-2.5rem)] md:inset-x-8 md:top-9 md:h-[56%] md:w-[calc(100%-4rem)] md:rounded-[2.4rem]"
                    alt=""
                  />
                  <img
                    src={enrichmentMediaById['about-story-notes'].src}
                    className="absolute bottom-7 right-5 z-20 h-[34%] w-[58%] rounded-[1.35rem] border border-white/20 object-cover shadow-[0_28px_70px_rgba(0,0,0,0.55)] transition-transform duration-1000 group-hover:-translate-y-1 group-hover:scale-[1.025] sm:bottom-8 sm:right-7 sm:h-[34%] sm:w-[54%] md:bottom-12 md:right-10 md:h-[33%] md:w-[52%] md:rounded-[2rem]"
                    alt=""
                  />
                  <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-[#06090f]/42 via-transparent to-transparent" />
                </div>
                <div className="absolute inset-x-3 top-3 z-10 flex md:hidden">
                  <span className="pill border-cyan-400/20 bg-[#07111d]/75 px-3 py-1.5 text-[10px] font-semibold text-cyan-200 shadow-[0_14px_30px_rgba(0,0,0,0.28)]">
                    {content.precisionTitle}
                  </span>
                </div>
              </motion.div>

              <div className="glass-card absolute inset-x-3 bottom-3 z-20 rounded-[1.35rem] border border-white/15 bg-[#06090f]/72 p-3.5 shadow-[0_30px_60px_rgba(0,0,0,0.65)] backdrop-blur-3xl sm:p-5 md:inset-x-auto md:-bottom-10 md:-left-10 md:mt-0 md:w-80 md:translate-z-[100px] md:rounded-[2.5rem] md:border-white/20 md:bg-[rgba(10,18,32,0.8)] md:p-8">
                <div className="mb-2 flex items-center gap-2.5 md:mb-4 md:gap-4">
                  <div className="rounded-xl bg-cyan-400/20 p-2 md:p-3">
                    <Flame className="w-5 h-5 text-cyan-400 md:h-6 md:w-6" />
                  </div>
                  <p className="text-[0.92rem] font-bold text-white sm:text-base md:text-lg">{content.precisionTitle}</p>
                </div>
                <p className="max-w-[20rem] text-[11px] leading-5 text-slate-300 md:text-sm md:leading-relaxed">{content.precisionBody}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative py-10 md:py-24">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 md:max-w-6xl md:grid-cols-2 md:gap-6">
            <motion.div
              initial={isMobile ? false : { opacity: 0, x: -40 }}
              {...(!isMobile ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : {})}
              className="relative overflow-hidden rounded-[1.3rem] bg-white p-4 text-[#06090f] group md:rounded-[3rem] md:p-14"
            >
              <div className="absolute inset-0 opacity-[0.1] mix-blend-multiply pointer-events-none">
                <img src="/images/notaq_hero_branding.png" className="w-full h-full object-cover grayscale" alt="Mission Context" />
              </div>
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl md:h-48 md:w-48" />
              <p className="relative z-10 mb-2 text-[9px] font-mono uppercase tracking-[0.18em] text-slate-500 md:mb-6 md:text-xs md:tracking-widest">Our Mission</p>
              <h3 className="relative z-10 mb-2 font-display text-[1.15rem] font-black leading-tight text-[#06090f] md:mb-6 md:text-4xl">{content.mission}</h3>
              <p className="relative z-10 text-sm leading-6 text-slate-700 md:text-lg md:leading-9">{content.missionBody}</p>
              <div className="relative z-10 mt-4 flex items-start gap-2 border-t border-slate-200 pt-3 md:mt-10 md:gap-4 md:pt-8">
                <div className="rounded-xl bg-cyan-400 p-2.5 text-white shadow-lg shadow-cyan-400/30 md:rounded-2xl md:p-3">
                  <Target className="h-4 w-4 md:h-7 md:w-7" />
                </div>
                <p className="text-[11px] font-medium leading-5 text-slate-600 md:text-sm md:leading-6">{content.missionNote}</p>
              </div>
            </motion.div>

            <motion.div
              initial={isMobile ? false : { opacity: 0, x: 40 }}
              {...(!isMobile ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : {})}
              transition={{ delay: 0.1 }}
              className="glass-card relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-gradient-to-br from-cyan-950/80 to-violet-950/80 p-4 group md:rounded-[3rem] md:p-14"
            >
              <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
                <img src="/images/notaq-logo-lockup.webp" className="w-full h-full object-contain p-6 mix-blend-soft-light" alt="Vision Back" />
              </div>
              <div className="absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-violet-400/20 blur-3xl md:h-48 md:w-48" />
              <p className="relative z-10 mb-2 text-[9px] font-mono uppercase tracking-[0.18em] text-violet-400 md:mb-6 md:text-xs md:tracking-widest">Our Vision</p>
              <h3 className="relative z-10 mb-2 font-display text-[1.15rem] font-black leading-tight text-white md:mb-6 md:text-4xl">{content.vision}</h3>
              <p className="relative z-10 text-sm leading-6 text-slate-200 md:text-lg md:leading-9">{content.visionBody}</p>
              <div className="relative z-10 mt-4 flex items-start gap-2 border-t border-white/10 pt-3 md:mt-10 md:gap-4 md:pt-8">
                <div className="rounded-xl bg-violet-600 p-2.5 text-white shadow-lg shadow-violet-600/30 md:rounded-2xl md:p-3">
                  <Globe className="h-4 w-4 md:h-7 md:w-7" />
                </div>
                <p className="text-[11px] font-medium leading-5 text-slate-400 md:text-sm md:leading-6">{content.visionNote}</p>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl md:mt-20">
            <h3 className="mb-5 text-center font-display text-xl font-bold text-white md:mb-10 md:text-3xl">{content.motivationsTitle}</h3>
            <div className="grid gap-3 md:hidden" style={mobileMotivationsGridStyle}>
              {motivations.map((item, index) => renderMotivationCard(item, index))}
            </div>
            <div className="hidden gap-4 md:grid md:grid-cols-4">
              {motivations.map((item, index) => renderMotivationCard(item, index))}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl md:mt-20">
            <h3 className="mb-5 text-center font-display text-xl font-bold text-white md:mb-10 md:text-3xl">{content.traitsTitle}</h3>
            <div className="grid gap-3 md:hidden">
              {traits.map((item, index) => renderTraitCard(item, index))}
            </div>
            <div className="hidden gap-4 md:grid md:grid-cols-2 md:gap-5">
              {traits.map((item, index) => renderTraitCard(item, index))}
            </div>
          </div>
        </div>

        <div className="relative py-10 md:py-20">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-cyan-400/8 via-white/[0.03] to-amber-400/8 p-5 md:rounded-[2.4rem] md:p-8">
              <p className="section-kicker mb-5">{isArabic ? 'نضج مؤسسي' : 'Operational Maturity'}</p>
              <h2 className="font-display text-2xl font-bold text-white md:text-4xl">
                {isArabic ? 'كيف نحافظ على الإحساس الكبير بدون ادعاء؟' : 'How do we feel bigger without making empty claims?'}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-400 md:text-base">
                {isArabic
                  ? 'نعرض طريقة التفكير، منهجية التسليم، ودلائل الثقة بشكل واضح. هذا يجعل الشركة تبدو منظمة لأن التجربة نفسها منظمة.'
                  : 'You see the thinking, delivery method, and trust proof clearly. The company feels organized because the experience itself is organized.'}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {trustSignals.map((signal) => (
                  <div key={signal.label.en} className="rounded-[1.15rem] border border-white/8 bg-[#06090f]/45 p-4">
                    <p className="font-display text-lg font-bold text-cyan-200">{signal.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{isArabic ? signal.label.ar : signal.label.en}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {corporatePrinciples.map((principle, index) => (
                <motion.article
                  key={principle.title.en}
                  initial={isMobile ? false : { opacity: 0, y: 18 }}
                  {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-5 md:rounded-[2rem] md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl font-black text-white/10">0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                        {isArabic ? principle.title.ar : principle.title.en}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {isArabic ? principle.description.ar : principle.description.en}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center px-2 py-8 text-center md:px-4 md:py-32">
          <Quote className="absolute top-4 -z-10 -ml-16 h-24 w-24 rotate-12 text-white/5 md:top-10 md:-ml-32 md:h-64 md:w-64" />
          <motion.h2
            initial={isMobile ? false : { opacity: 0, y: 50 }}
            {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
            className="max-w-4xl font-display text-base font-medium leading-8 text-white mix-blend-screen drop-shadow-xl sm:text-2xl md:text-[3.5rem] md:leading-[1.4]"
          >
            {content.quote}
          </motion.h2>
        </div>

        <div className="relative py-10 md:py-24">
          <div className="mb-7 space-y-2 text-center md:mb-24 md:space-y-4">
            <p className="section-kicker mx-auto">{content.workflowKicker}</p>
            <h2 className="font-display text-2xl font-bold text-white md:text-5xl">{content.workflowTitle}</h2>
          </div>

          <div className="mx-auto space-y-3 md:hidden">
            {timelineSteps.map((step, index) => renderTimelineMobileCard(step, index))}
          </div>
          <div className="relative mx-auto hidden max-w-4xl md:block">
                <div className={railClass}>
                  <motion.div style={{ scaleY, originY: 0 }} className="w-full h-full bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400 shadow-[0_0_20px_rgba(45,212,191,0.5)]" />
                </div>

                <div className="space-y-8 md:space-y-32">
                  {timelineSteps.map((step, idx) => (
                    <div key={step.en} className={`relative flex flex-col gap-4 md:flex-row md:items-center md:gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={nodeClass} />
                      <motion.div initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} className={textBlockClass}>
                        <span className="mb-2 block text-sm font-bold tracking-widest text-cyan-400 md:text-lg">PHASE 0{idx + 1}</span>
                        <h3 className="mb-3 font-display text-xl font-bold text-white md:mb-4 md:text-4xl">{copyLegacyPair(step.ar, step.en)}</h3>
                        <p className="text-sm leading-7 text-slate-400 md:text-xl md:leading-9">{copyLegacyPair(step.arDesc, step.enDesc)}</p>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-100px' }} className={mediaBlockClass}>
                        <div className="relative h-[240px] overflow-hidden rounded-[1.8rem] border-[2px] border-white/10 glass-card shadow-2xl group md:h-[300px] md:rounded-[2.5rem]">
                          {step.mediaMode === 'contain' ? (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-br from-[#07111d] via-[#05070d] to-[#0b1220]" />
                              <motion.div
                                animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.96, 1.02, 0.96] }}
                                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/12 via-violet-500/12 to-transparent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                              />
                              <motion.div
                                animate={{ opacity: [0.18, 0.35, 0.18], scale: [0.92, 1.08, 0.92] }}
                                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl"
                              />
                            </>
                          ) : null}
                          {step.mediaMode === 'contain' ? (
                            <div className="absolute inset-0 z-10 p-5 sm:p-6">
                              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]/92 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(45,212,191,0.12),transparent_38%),radial-gradient(circle_at_82%_78%,rgba(139,92,246,0.08),transparent_30%)]" />
                                <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-[1.1rem] border border-white/8 bg-black/20 px-4 py-3 sm:inset-x-5 sm:top-5">
                                  <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-violet-300/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                  </div>
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
                                    UI Motion
                                  </span>
                                </div>
                                <div className="absolute inset-x-4 bottom-4 top-[4.75rem] overflow-hidden rounded-[1.6rem] border border-white/8 bg-[#07111d]/72 sm:inset-x-5 sm:bottom-5 sm:top-[5.25rem]">
                                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:auto,34px_34px,34px_34px] opacity-60" />
                                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.12),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(139,92,246,0.1),transparent_28%)]" />
                                  <div className="relative flex h-full flex-col p-4 sm:p-5">
                                    <div className="mb-4 flex items-center justify-between rounded-[1.15rem] border border-white/8 bg-black/20 px-4 py-3">
                                      <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cyan-200/85 sm:text-[10px]">
                                        Designer Flow
                                      </span>
                                      <span className="rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3 py-1 text-[7px] font-semibold uppercase tracking-[0.22em] text-cyan-200/85 sm:text-[8px]">
                                        Live
                                      </span>
                                    </div>
                                    <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.45rem] border border-white/8 bg-black/18">
                                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(45,212,191,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_36%)]" />
                                      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                                        {step.imgPoster ? (
                                          <img
                                            src={step.imgPoster}
                                            alt=""
                                            aria-hidden="true"
                                            className="absolute inset-0 h-full w-full object-contain p-6 opacity-30 sm:p-8"
                                          />
                                        ) : null}
                                        <motion.img
                                          src={step.img}
                                          alt={step.imgAlt ?? step.en}
                                          animate={{ y: [0, -4, 0], scale: [1, 1.015, 1] }}
                                          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                                          className="relative z-10 h-full w-full object-contain p-2 drop-shadow-[0_22px_40px_rgba(45,212,191,0.24)] sm:p-4"
                                        />
                                      </div>
                                      <div className="absolute inset-x-8 bottom-4 h-10 rounded-full bg-cyan-400/15 blur-2xl" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <motion.img
                              src={step.img}
                              alt={step.imgAlt ?? step.en}
                                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                          )}
                          <div
                            className={`absolute inset-0 z-10 transition-colors duration-500 ${
                              step.mediaMode === 'contain'
                                ? 'bg-gradient-to-t from-[#06090f]/55 via-transparent to-transparent group-hover:from-[#06090f]/40'
                                : 'bg-transparent mix-blend-overlay group-hover:bg-cyan-900/40'
                            }`}
                          />
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-10 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="section-shell relative z-10 mx-auto">
            <div className="mx-auto mb-5 max-w-3xl space-y-2 text-center md:mb-8 md:space-y-4">
              <p className="section-kicker mx-auto">{content.cultureKicker}</p>
              <h2 className="font-display text-2xl font-bold text-white md:text-6xl">{content.cultureTitle}</h2>
              <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-400 md:text-lg md:leading-8">{content.cultureBody}</p>
            </div>
          </div>
          <div className="section-shell relative z-10 mx-auto pb-8 md:pb-16">
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[1.08fr_0.92fr] md:items-stretch md:gap-5">
              <motion.figure
                initial={{ opacity: 0, y: 22 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-2 shadow-[0_28px_90px_-55px_rgba(45,212,191,0.9)] md:rounded-[2rem] md:p-3"
              >
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_25%_20%,rgba(45,212,191,0.16),transparent_42%),radial-gradient(circle_at_80%_75%,rgba(96,165,250,0.12),transparent_36%)] opacity-80" />
                <img
                  alt={editorialImages['studio-structure'].alt[lang]}
                  className="relative h-[15rem] w-full rounded-[1.1rem] object-cover object-center transition-transform duration-700 group-hover:scale-[1.025] sm:h-[20rem] md:h-[29rem] md:rounded-[1.5rem]"
                  loading="lazy"
                  src={editorialImages['studio-structure'].src}
                />
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, y: 22 }}
                transition={{ delay: 0.08, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-cyan-200/15 bg-[#07141b] p-2 shadow-[0_28px_90px_-58px_rgba(0,0,0,0.95)] md:mt-12 md:rounded-[2rem] md:p-3"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,184,166,0.16),transparent_42%,rgba(59,130,246,0.1))]" />
                <img
                  alt={editorialImages['office-reception'].alt[lang]}
                  className="relative h-[14rem] w-full rounded-[1.1rem] object-cover object-center transition-transform duration-700 group-hover:scale-[1.025] sm:h-[19rem] md:h-[24rem] md:rounded-[1.5rem]"
                  loading="lazy"
                  src={editorialImages['office-reception'].src}
                />
              </motion.figure>
            </div>
          </div>
          <PageImageShowcaseSection showcase={pageImageShowcases.about} />
        </div>

        <div className="relative py-10 md:py-32">
          <div className="mb-7 text-center md:mb-20">
            <p className="section-kicker mx-auto mb-4">{content.valuesKicker}</p>
            <h2 className="font-display text-2xl font-bold text-white md:text-5xl">{content.valuesTitle}</h2>
          </div>
          <div className="mx-auto grid max-w-6xl gap-3 md:hidden" style={mobileValuesGridStyle}>
            {values.map((item, index) => (
              <motion.div
                key={`${item.en}-mobile`}
                initial={false}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card relative overflow-hidden rounded-[1.2rem] border border-white/8 p-4 group transition-all duration-500 hover:border-cyan-400/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[1rem] bg-white/5 transition-all group-hover:bg-gradient-to-br group-hover:from-cyan-400/20 group-hover:to-violet-400/20">
                  <item.icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-300" />
                </div>
                <div className="mb-2 flex items-baseline gap-2">
                  <h3 className="font-display text-[1rem] font-bold text-white transition-colors group-hover:text-cyan-300">{copyLegacyPair(item.ar, item.en)}</h3>
                </div>
                <p className="text-[12px] leading-6 text-slate-400">{copyLegacyPair(item.arDesc, item.enDesc)}</p>
              </motion.div>
            ))}
          </div>
          <div className="hidden mx-auto max-w-6xl gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
                <motion.div
                  key={item.en}
                  initial={isMobile ? false : { opacity: 0, y: 30 }}
                  {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {})}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-card relative overflow-hidden rounded-[2.5rem] border border-white/8 p-8 group transition-all duration-500 hover:border-cyan-400/30"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:bg-gradient-to-br group-hover:from-cyan-400/20 group-hover:to-violet-400/20">
                    <item.icon className="h-7 w-7 text-slate-400 transition-colors group-hover:text-cyan-300" />
                  </div>
                  <div className="mb-4 flex items-baseline gap-3">
                    <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">{copyLegacyPair(item.ar, item.en)}</h3>
                    <span className="text-sm font-mono text-slate-600">{item.en}</span>
                  </div>
                <p className="text-sm leading-8 text-slate-400">{copyLegacyPair(item.arDesc, item.enDesc)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-y border-white/5 py-8 md:py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-violet-900/10 pointer-events-none" />
          <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 md:mb-12 md:text-sm md:tracking-widest">{content.numbersTitle}</h3>
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {stats.map((item, index) => renderMobileStatCard(item, index))}
          </div>
          <div className="hidden grid-cols-2 divide-x-0 divide-white/5 md:grid md:grid-cols-5 md:divide-x">
            {stats.map((item, index) => (
              <motion.div
                key={item.en}
                initial={isMobile ? false : { opacity: 0 }}
                {...(!isMobile ? { whileInView: { opacity: 1 }, viewport: { once: true } } : {})}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center gap-3 py-4 md:gap-5 md:py-8"
              >
                <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-black md:p-3">
                  <item.icon className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <p className="font-display text-2xl font-black text-white drop-shadow-lg transition-colors group-hover:text-cyan-300 md:text-6xl">{item.num}</p>
                <p className="text-center text-[11px] font-medium leading-5 text-slate-500 md:text-sm">{copyLegacyPair(item.ar, item.en)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
