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

import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { illustrationAssets } from '../lib/illustrationAssets';
import { getPageSeoByPath } from '../lib/pageSeo';

const motivations = [
  { icon: Flame, ar: 'الشغف بالصنعة', en: 'Craft passion', arDesc: 'حب حقيقي لما نبنيه.', enDesc: 'A real love for the work we build.' },
  { icon: Code2, ar: 'الدقة التقنية', en: 'Technical precision', arDesc: 'تنفيذ نظيف ومدروس.', enDesc: 'Clean, well-structured execution.' },
  { icon: MessageSquare, ar: 'صوت العميل', en: 'Client voice', arDesc: 'نستمع قبل أن نقترح.', enDesc: 'We listen before we prescribe.' },
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
    img: '/images/WhatsApp%20Image%202026-02-15%20at%202.31.19%20AM%20(1).jpeg',
  },
  {
    ar: 'هندسة المحتوى',
    en: 'Content architecture',
    arDesc: 'نعيد ترتيب المعلومات بحيث تقود الزائر للفهم والقرار.',
    enDesc: 'We restructure information so it guides visitors toward understanding and action.',
    img: '/images/Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png',
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
  { icon: Zap, ar: 'السرعة', en: 'Speed', arDesc: 'وقت العميل مهم ونحترمه.', enDesc: 'We respect the client’s time.' },
  { icon: Rocket, ar: 'الجرأة', en: 'Boldness', arDesc: 'نبحث عن زاوية مختلفة وهوية أوضح.', enDesc: 'We look for the sharper angle and the stronger identity.' },
  { icon: Users, ar: 'الشراكة', en: 'Partnership', arDesc: 'نشتغل كجزء من هدف العميل لا كمورد فقط.', enDesc: 'We work like part of the client’s mission, not just a vendor.' },
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

const cultureImages = [
  'Gemini_Generated_Image_96cd0396cd0396cd.png',
  'WhatsApp Image 2026-02-15 at 2.31.19 AM (1).jpeg',
  'Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png',
  'Gemini_Generated_Image_nfqqnnfqqnnfqqnn.png',
  'WhatsApp Image 2026-02-15 at 05.05.18 (2).jpeg',
  'WhatsApp Image 2026-02-15 at 05.05.18 (3).jpeg',
  'WhatsApp Image 2026-02-15 at 05.05.18 (4).jpeg',
  'IMG-20251112-WA0012.jpg',
];

const AboutPage = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroAccentClass = isArabic
    ? 'text-base md:text-2xl leading-8 md:leading-10 text-slate-300 font-medium pr-6 border-r-2 border-cyan-400/30 text-right'
    : 'text-base md:text-2xl leading-8 md:leading-10 text-slate-300 font-medium pl-6 border-l-2 border-cyan-400/30 text-left';
  const railClass = isArabic
    ? 'absolute right-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden'
    : 'absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden';
  const nodeClass = isArabic
    ? 'absolute right-[22px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#06090f] border-4 border-cyan-400 z-10 shadow-[0_0_20px_rgba(45,212,191,0.8)]'
    : 'absolute left-[22px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#06090f] border-4 border-cyan-400 z-10 shadow-[0_0_20px_rgba(45,212,191,0.8)]';
  const textBlockClass = isArabic
    ? 'w-full md:w-1/2 pr-12 md:px-16 text-right'
    : 'w-full md:w-1/2 pl-12 md:px-16 text-left';
  const mediaBlockClass = isArabic
    ? 'w-full md:w-1/2 pr-12 pl-4 md:px-0 mt-6 md:mt-0'
    : 'w-full md:w-1/2 pl-12 pr-4 md:px-0 mt-6 md:mt-0';
  const content = {
    title: isArabic ? 'من نحن' : 'About us',
    description: isArabic ? 'تعرف على فريق نُطق ورؤيتنا' : 'Meet the Notaq team and our vision.',
    heroKicker: isArabic ? 'رحلة نُطق الرقمية' : 'The Notaq Journey',
    heroTitle1: isArabic ? 'تشكيل ملامح' : 'Shaping the outline of',
    heroTitle2: isArabic ? 'المستقبل' : 'what comes next',
    heroBody: isArabic
      ? 'نحن لا نطوّر مجرد واجهات جذابة، بل نبني تجارب تجعل العلامة التجارية تتحول من حضور رقمي عادي إلى منصة قيادة في سوقها.'
      : 'We do not build attractive interfaces only. We create experiences that move a brand from an ordinary digital presence into a stronger market position.',
    heroCta: isArabic ? 'ابدأ رحلتك معنا الآن' : 'Start your journey with us',
    precisionTitle: isArabic ? 'الشغف بالدقة' : 'Precision-minded craft',
    precisionBody: isArabic ? 'نجسد الابتكار من خلال إطار عمل منهجي وواضح.' : 'We turn innovation into execution through a methodical and intentional approach.',
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
    cultureTitle: isArabic ? 'بيئة عمل ملهمة ونتائج عالمية' : 'An inspiring culture with global-level results',
    cultureBody: isArabic
      ? 'نؤمن أن الإبداع يبدأ من بيئة تقدّر التفاصيل وتبحث دائمًا عن مستوى أعلى.'
      : 'We believe creative excellence starts in a culture that respects details and keeps aiming higher.',
    cultureHover: isArabic ? 'من كواليس الإبداع' : 'Behind the scenes',
    valuesKicker: isArabic ? 'مبادئنا الجوهرية' : 'Core Principles',
    valuesTitle: isArabic ? 'القيم التي تبني كل قرار نتخذه' : 'The values behind every decision',
    numbersTitle: isArabic ? 'نُطق بالأرقام' : 'Notaq by the numbers',
  };

  usePageMetadata(getPageSeoByPath('/about', lang));

  return (
    <section ref={containerRef} className="relative pb-24 pt-14 md:pt-24 min-h-screen">
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[-20%] w-[80vw] h-[80vw] bg-cyan-600/10 rounded-full blur-[180px] opacity-70 animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[150px] opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-[1fr_1.2fr] items-center pt-6 pb-14 md:pt-10 md:pb-24">
          <div className="space-y-8 relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 font-medium tracking-wide shadow-[0_0_20px_rgba(45,212,191,0.2)]">
              <Sparkles className="h-5 w-5" />
              {content.heroKicker}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="font-display text-4xl sm:text-5xl md:text-[5.5rem] font-bold leading-[1.3] md:leading-[1.2] text-white tracking-tight drop-shadow-2xl mb-4">
              {content.heroTitle1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-violet-300 mix-blend-screen">
                {content.heroTitle2}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className={heroAccentClass}>
              {content.heroBody}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link to="/contact" className="btn-primary group text-lg px-8 py-4 shadow-[0_20px_50px_rgba(45,212,191,0.3)] hover:shadow-[0_20px_60px_rgba(45,212,191,0.5)]">
                {content.heroCta}
                <ArrowUpLeft className="h-5 w-5 group-hover:scale-125 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div className="relative h-[260px] sm:h-[350px] md:h-[650px] w-full group perspective-none md:perspective-[2000px]">
            <motion.div animate={{ rotateY: [-2, 2, -2], rotateX: [1, -1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full relative transform-style-3d shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
              <div className="absolute inset-0 rounded-[4rem] overflow-hidden border-[2px] border-white/20 glass-card">
                <img src="/images/notaq_hero_branding.png" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" alt="Notaq Branding" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-transparent to-black/30 mix-blend-multiply" />
              </div>

              <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 p-6 md:p-8 glass-card rounded-3xl md:rounded-[2.5rem] border border-white/20 backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-20 w-[85%] md:w-80 md:translate-z-[100px]">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-cyan-400/20 rounded-xl">
                    <Flame className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                  </div>
                  <p className="text-white font-bold text-base md:text-lg">{content.precisionTitle}</p>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{content.precisionBody}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="py-24 relative">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white text-[#06090f] rounded-[3rem] p-10 md:p-14 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.1] mix-blend-multiply pointer-events-none">
                <img src="/images/Gemini_Generated_Image_nfqqnnfqqnnfqqnn.png" className="w-full h-full object-cover grayscale" alt="Mission Context" />
              </div>
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 relative z-10">Our Mission</p>
              <h3 className="font-display text-4xl font-black text-[#06090f] mb-6 leading-tight relative z-10">{content.mission}</h3>
              <p className="text-slate-700 text-lg leading-9 relative z-10">{content.missionBody}</p>
              <div className="mt-10 pt-8 border-t border-slate-200 flex items-center gap-4 relative z-10">
                <div className="p-3 bg-cyan-400 rounded-2xl text-white shadow-lg shadow-cyan-400/30">
                  <Target className="w-7 h-7" />
                </div>
                <p className="text-slate-600 text-sm font-medium">{content.missionNote}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-cyan-950/80 to-violet-950/80 rounded-[3rem] p-10 md:p-14 border border-white/10 relative overflow-hidden group glass-card">
              <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
                <img src="/images/Gemini_Generated_Image_rzfhaqrzfhaqrzfh.png" className="w-full h-full object-cover mix-blend-soft-light" alt="Vision Back" />
              </div>
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-violet-400/20 rounded-full blur-3xl" />
              <p className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-6 relative z-10">Our Vision</p>
              <h3 className="font-display text-4xl font-black text-white mb-6 leading-tight relative z-10">{content.vision}</h3>
              <p className="text-slate-200 text-lg leading-9 relative z-10">{content.visionBody}</p>
              <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4 relative z-10">
                <div className="p-3 bg-violet-600 rounded-2xl text-white shadow-lg shadow-violet-600/30">
                  <Globe className="w-7 h-7" />
                </div>
                <p className="text-slate-400 text-sm font-medium">{content.visionNote}</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 max-w-6xl mx-auto">
            <h3 className="font-display text-3xl font-bold text-white mb-10 text-center">{content.motivationsTitle}</h3>
            <div className="grid gap-4 md:grid-cols-4">
              {motivations.map((item, index) => (
                <motion.div key={item.en} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass-card rounded-3xl p-6 border border-white/8 text-center group hover:border-cyan-400/30 transition-all flex flex-col items-center">
                  <div className="p-3 bg-white/5 rounded-2xl mb-4 group-hover:bg-cyan-400/10 group-hover:text-cyan-400 transition-colors">
                    <item.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="font-bold text-white text-sm mb-2 group-hover:text-cyan-300 transition-colors">{isArabic ? item.ar : item.en}</p>
                  <p className="text-slate-500 text-xs leading-5">{isArabic ? item.arDesc : item.enDesc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 max-w-6xl mx-auto">
            <h3 className="font-display text-3xl font-bold text-white mb-10 text-center">{content.traitsTitle}</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {traits.map((item, index) => (
                <motion.div key={item.tag} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card rounded-3xl md:rounded-[2rem] p-6 md:p-8 border border-white/8 group hover:border-violet-400/30 transition-all flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="h-1 w-full md:w-1 md:h-auto shrink-0 rounded-full bg-gradient-to-r md:bg-gradient-to-b from-cyan-400 to-violet-500 md:self-stretch" />
                  <div>
                    <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest block mb-3">{item.tag}</span>
                    <h4 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{isArabic ? item.ar : item.en}</h4>
                    <p className="text-slate-400 text-sm leading-7">{isArabic ? item.arDesc : item.enDesc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 md:py-32 px-4 relative flex justify-center text-center">
          <Quote className="absolute top-10 text-white/5 w-40 h-40 md:w-64 md:h-64 -z-10 rotate-12 -ml-20 md:-ml-32" />
          <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-[3.5rem] leading-snug md:leading-[1.4] font-display font-medium text-white max-w-5xl mix-blend-screen drop-shadow-xl">
            {content.quote}
          </motion.h2>
        </div>

        <div className="py-24 relative">
          <div className="text-center mb-24 space-y-4">
            <p className="section-kicker mx-auto">{content.workflowKicker}</p>
            <h2 className="text-5xl font-bold font-display text-white">{content.workflowTitle}</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className={railClass}>
              <motion.div style={{ scaleY, originY: 0 }} className="w-full h-full bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400 shadow-[0_0_20px_rgba(45,212,191,0.5)]" />
            </div>

            <div className="space-y-32">
              {timelineSteps.map((step, idx) => (
                <div key={step.en} className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={nodeClass} />
                  <motion.div initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} className={textBlockClass}>
                    <span className="text-cyan-400 font-bold tracking-widest text-base md:text-lg mb-2 block">PHASE 0{idx + 1}</span>
                    <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">{isArabic ? step.ar : step.en}</h3>
                    <p className="text-lg md:text-xl text-slate-400 md:leading-9">{isArabic ? step.arDesc : step.enDesc}</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-100px' }} className={mediaBlockClass}>
                    <div className="rounded-[2.5rem] overflow-hidden border-[2px] border-white/10 glass-card shadow-2xl relative h-[300px] group">
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
                          className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        />
                      )}
                      <div
                        className={`absolute inset-0 transition-colors duration-500 z-10 ${
                          step.mediaMode === 'contain'
                            ? 'bg-gradient-to-t from-[#06090f]/55 via-transparent to-transparent group-hover:from-[#06090f]/40'
                            : 'bg-transparent group-hover:bg-cyan-900/40 mix-blend-overlay'
                        }`}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-32 relative overflow-hidden border-t border-white/5 bg-[#050505]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="section-shell mx-auto px-6 relative z-10">
            <div className="text-center mb-20 space-y-4">
              <p className="section-kicker mx-auto">{content.cultureKicker}</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white font-display">{content.cultureTitle}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">{content.cultureBody}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {cultureImages.map((fileName, index) => (
                <motion.div key={fileName} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 glass-card">
                  <img src={`/images/${encodeURIComponent(fileName)}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Notaq Culture" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <p className="text-cyan-400 font-bold tracking-widest text-sm mb-2">NOTAQ VIBES</p>
                    <h4 className="text-white font-bold text-xl">{content.cultureHover}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-32 relative">
          <div className="text-center mb-20">
            <p className="section-kicker mx-auto mb-4">{content.valuesKicker}</p>
            <h2 className="font-display text-5xl font-bold text-white">{content.valuesTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {values.map((item, index) => (
              <motion.div key={item.en} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }} className="glass-card rounded-[2.5rem] p-8 border border-white/8 group hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-cyan-400/20 group-hover:to-violet-400/20 transition-all">
                  <item.icon className="w-7 h-7 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{isArabic ? item.ar : item.en}</h3>
                  <span className="text-slate-600 text-sm font-mono">{item.en}</span>
                </div>
                <p className="text-slate-400 leading-8 text-sm">{isArabic ? item.arDesc : item.enDesc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-violet-900/10 pointer-events-none" />
          <h3 className="text-center text-slate-500 uppercase tracking-widest font-semibold text-sm mb-12">{content.numbersTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x-0 md:divide-x divide-white/5">
            {stats.map((item, index) => (
              <motion.div key={item.en} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex flex-col items-center py-8 gap-5 group">
                <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <p className="font-display text-4xl md:text-6xl font-black text-white group-hover:text-cyan-300 transition-colors drop-shadow-lg">{item.num}</p>
                <p className="text-slate-500 text-sm text-center font-medium">{isArabic ? item.ar : item.en}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
