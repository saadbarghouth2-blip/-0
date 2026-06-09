import { motion } from 'framer-motion';
import { ArrowUpLeft, CheckCircle2, ClipboardList, MessageSquareText, Route } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

const scopeCards = [
  {
    icon: ClipboardList,
    titleAr: 'نطاق واضح قبل البداية',
    titleEn: 'Clear scope before kickoff',
    bodyAr: 'نرتب نوع الموقع، الصفحات، المحتوى، التكاملات، ومستوى الحركة حتى يعرف العميل ما الذي سيتم تنفيذه بالضبط.',
    bodyEn: 'We define the site type, pages, content, integrations, and interaction level so the client knows exactly what will be delivered.',
  },
  {
    icon: Route,
    titleAr: 'مسار تنفيذ مفهوم',
    titleEn: 'A delivery path you can follow',
    bodyAr: 'نوضح مراحل العمل، نقاط المراجعة، وطريقة التسليم حتى تكون الرحلة منظمة من أول محادثة حتى الإطلاق.',
    bodyEn: 'We clarify the work stages, review points, and handoff flow so the project feels organized from first conversation to launch.',
  },
  {
    icon: MessageSquareText,
    titleAr: 'قرار أسهل للشركة',
    titleEn: 'A clearer decision for your company',
    bodyAr: 'بدل المقارنة على أرقام عامة، يحصل العميل على تصور عملي لما يناسب نشاطه وزواره وأهدافه.',
    bodyEn: 'Instead of comparing generic numbers, the client receives a practical view of what fits the business, visitors, and goals.',
  },
];

const included = [
  { ar: 'مراجعة احتياج الشركة ونوع التجربة المطلوبة', en: 'Reviewing the company need and required experience type' },
  { ar: 'تحديد الصفحات والمحتوى والمخرجات الرئيسية', en: 'Defining key pages, content, and deliverables' },
  { ar: 'اقتراح مسار تنفيذ مناسب حسب الأولويات', en: 'Suggesting a delivery path based on priorities' },
  { ar: 'توضيح المتطلبات التي يجب تجهيزها قبل الانطلاق', en: 'Clarifying the inputs needed before kickoff' },
];

const PricingPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => clientFacingText(isArabic ? arabic : english, lang);

  usePageMetadata(getPageSeoByPath('/pricing', lang));

  return (
    <main className="relative overflow-hidden pt-10 pb-16 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_34%),linear-gradient(180deg,rgba(5,10,18,0),rgba(5,10,18,0.82))]" />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200">
            {text('توضيح النطاق', 'Scope clarity')}
          </span>
          <h1 className="font-display text-4xl font-black leading-tight text-white md:text-6xl">
            {text('ابدأ النقاش بصورة واضحة قبل تنفيذ موقعك', 'Start the project discussion with a clear scope')}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {text(
              'كل مشروع رقمي يختلف حسب الهدف، حجم المحتوى، مستوى التفاعل، وطريقة تشغيله بعد الإطلاق. لذلك نبدأ بتحديد المتطلبات بوضوح ثم نقترح المسار الأنسب لشركتك.',
              'Every digital project differs by goal, content depth, interaction level, and how it will operate after launch. We begin by defining the requirements clearly, then suggest the right path for your company.'
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to={localizePath('/contact/brief')} className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black">
              {text('رتب متطلبات مشروعك', 'Organize your project requirements')}
              <ArrowUpLeft className="h-4 w-4" />
            </Link>
            <Link to={localizePath('/services')} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              {text('استكشف الخدمات', 'Explore services')}
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="rounded-[2rem] border border-white/10 bg-[#07111d]/70 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl md:p-6">
          <div className="grid gap-4">
            {scopeCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.titleEn} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <Icon className="mb-5 h-7 w-7 text-cyan-300" />
                  <h2 className="mb-2 font-display text-lg font-bold text-white">{text(card.titleAr, card.titleEn)}</h2>
                  <p className="text-sm leading-7 text-slate-400">{text(card.bodyAr, card.bodyEn)}</p>
                </article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 md:mt-20 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h2 className="mb-6 font-display text-2xl font-bold text-white md:text-3xl">
            {text('ما الذي نوضحه قبل بدء العمل؟', 'What do we clarify before work starts?')}
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {included.map((item) => (
              <div key={item.en} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                <span>{text(item.ar, item.en)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
