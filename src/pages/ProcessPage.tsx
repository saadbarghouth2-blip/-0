import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ArrowUpLeft, ClipboardCheck, ChevronRight, Code } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { cn } from '../lib/utils';

const processSteps = [
  {
    step: 1,
    titleAr: 'الاكتشاف والبريف واستراتيجية الفكرة',
    titleEn: 'Discovery & Product Strategy',
    durationAr: 'أسبوع واحد',
    durationEn: '1 Week',
    clientInvolvement: 90, // % client time
    descriptionAr: 'نجلس مع صاحب القرار لفهم أهداف الشركة، الزائر المستهدف، ومؤشرات النجاح وتحديد النطاق التقني للعمل.',
    descriptionEn: 'Collaborating directly with stakeholders to outline business goals, audiences, and core technical scopes.',
    deliverablesAr: ['ملف البريف المعتمد', 'خريطة الصفحات (Sitemap)', 'اتفاقية نطاق العمل التقني'],
    deliverablesEn: ['Signed Brief Document', 'Information Architecture', 'Technical Scope Document'],
    tools: ['Figma Jam', 'Notion', 'Google Meet'],
    color: 'border-cyan-400'
  },
  {
    step: 2,
    titleAr: 'تصميم وهندسة واجهات المستخدم (UX/UI)',
    titleEn: 'UX Design & Wireframing',
    durationAr: 'من أسبوعين إلى ٣ أسابيع',
    durationEn: '2-3 Weeks',
    clientInvolvement: 50,
    descriptionAr: 'نقوم بتخطيط الشاشات وبنائها لتبدو حقيقية وهادئة، ونركز على سرعة القراءة والتحويل والجماليات البصرية المعاصرة.',
    descriptionEn: 'Wireframing clean screens to present content clearly. Iterating on design systems and micro-interactions.',
    deliverablesAr: ['لوحة الأنماط والألوان الفاخرة', 'تصاميم Figma تفاعلية بالكامل', 'نموذج أولي قابل للتمرير'],
    deliverablesEn: ['Design System System', 'Interactive Figma Prototype', 'Responsive Wireframes'],
    tools: ['Figma', 'Illustrator', 'Spline 3D'],
    color: 'border-violet-400'
  },
  {
    step: 3,
    titleAr: 'التطوير البرمجي وهندسة الكود المطور',
    titleEn: 'Engineering & Frontend Coding',
    durationAr: 'من ٣ إلى ٥ أسابيع',
    durationEn: '3-5 Weeks',
    clientInvolvement: 20,
    descriptionAr: 'نحول التصاميم المعتمدة إلى كود برمجي نظيف وسريع جداً متجاوب بالكامل مع كافة الأجهزة ومحسن لمحركات البحث.',
    descriptionEn: 'Transforming designs into production-ready responsive code with deep performance optimization.',
    deliverablesAr: ['أكواد ريأكت نظيفة (React/Vite)', 'تجاوب فائق وسلس للموبايل', 'لوحات تحكم متصلة (CMS)'],
    deliverablesEn: ['React/Next.js Code repository', 'Bilingual localized pathways', 'Custom CMS panel access'],
    tools: ['VS Code', 'Git/GitHub', 'TailwindCSS'],
    color: 'border-rose-400'
  },
  {
    step: 4,
    titleAr: 'الفحص الدقيق والاختبار والتشغيل الفعلي',
    titleEn: 'QA Testing & Server Launch',
    durationAr: 'أسبوع واحد',
    durationEn: '1 Week',
    clientInvolvement: 40,
    descriptionAr: 'نقوم بفحص كفاءة الكود وسرعته عبر الأجهزة المختلفة، وربط السيرفرات وإطلاق الموقع تحت نطاق الشركة بثقة.',
    descriptionEn: 'Running end-to-end user path tests. Deploying applications to cloud environments.',
    deliverablesAr: ['إطلاق الموقع تحت الدومين', 'تقارير أداء Lighthouse 100/100', 'دليل تعديل المحتوى الذاتي'],
    deliverablesEn: ['Server deployment configuration', 'Lighthouse audit reports', 'CMS User manual documentation'],
    tools: ['Vercel', 'Netlify', 'Playwright'],
    color: 'border-amber-400'
  }
];

const ProcessPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);
  const pickList = (arabic: string[], english: string[]) => (isArabic ? arabic : english);

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  usePageMetadata(getPageSeoByPath('/process', lang));

  return (
    <div className="relative pt-10 pb-16 md:pt-24 md:pb-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-cyan-600/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-violet-600/10 blur-[200px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-6">
            <ClipboardCheck className="h-5 w-5 text-cyan-400" />
            {text('خطوات العمل وسير التسليم بنطق', 'Our Process & Execution Roadmap')}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {text('سير عمل برمجي', 'Clean programming cycle')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {text('من الفكرة البريف وحتى التشغيل', 'from brief preparation to server launch')}
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto">
            {text(
              'عملية واضحة ومكشوفة تمنحك الأمان في التوقيت والتحقق من جودة الكود والتصاميم في كل خطوة.',
              'A transparent, milestone-driven workflow ensuring timely deliveries, validated design mockups, and clean software.'
            )}
          </p>
        </motion.div>

        {/* Step-by-Step Interactive Timeline Flowchart */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start mb-24">
          
          {/* Left: Interactive Vertical Steps Selector */}
          <div className="space-y-4">
            {processSteps.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    "w-full p-5 rounded-2xl border text-right transition-all flex items-center gap-4 relative overflow-hidden bg-white/[0.01]",
                    isActive 
                      ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(45,212,191,0.15)]" 
                      : "border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                  )}
                >
                  {/* Step Number Circle */}
                  <span className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border",
                    isActive ? "bg-cyan-400 text-black border-cyan-400" : "bg-white/5 border-white/10 text-slate-300"
                  )}>
                    0{item.step}
                  </span>

                  <div className="flex-grow">
                    <h3 className={cn("font-display text-sm font-bold", isActive ? "text-white" : "text-slate-300")}>
                      {text(item.titleAr, item.titleEn)}
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-1 font-semibold flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {text(item.durationAr, item.durationEn)}
                    </p>
                  </div>

                  <ChevronRight className={cn("h-4 w-4 shrink-0 transition-transform hidden lg:block", isActive && "translate-x-1")} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Content Showcase for Active Step */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isArabic ? 20 : -20 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-md space-y-6"
            >
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  {text(`المرحلة 0${processSteps[activeStepIndex].step}`, `Phase 0${processSteps[activeStepIndex].step}`)}
                </span>
                <h2 className="font-display text-2xl font-bold text-white mb-4">
                  {text(processSteps[activeStepIndex].titleAr, processSteps[activeStepIndex].titleEn)}
                </h2>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400 font-body">
                  {text(processSteps[activeStepIndex].descriptionAr, processSteps[activeStepIndex].descriptionEn)}
                </p>
              </div>

              {/* Progress and Timeline metrics */}
              <div className="grid sm:grid-cols-2 gap-4 border-y border-white/5 py-5 text-xs">
                <div>
                  <span className="text-slate-500 block mb-1">{text('الجدول الزمني للمرحلة:', 'Estimated Duration:')}</span>
                  <span className="text-white font-bold flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    {text(processSteps[activeStepIndex].durationAr, processSteps[activeStepIndex].durationEn)}
                  </span>
                </div>
                
                {/* Client Involvement Ring (Simulated) */}
                <div>
                  <span className="text-slate-500 block mb-1">{text('مشاركة وتواجد العميل:', 'Client Involvement:')}</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-grow max-w-[120px] bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${processSteps[activeStepIndex].clientInvolvement}%` }} />
                    </div>
                    <span className="text-white font-bold">{processSteps[activeStepIndex].clientInvolvement}%</span>
                  </div>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-3">
                  {text('المخرجات المتوقع استلامها:', 'Expected Deliverables:')}
                </span>
                <div className="space-y-2">
                  {pickList(processSteps[activeStepIndex].deliverablesAr, processSteps[activeStepIndex].deliverablesEn).map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools We Use */}
              <div className="border-t border-white/5 pt-5">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2">{text('الأدوات ومحيط العمل المستخدم:', 'Software & Tools Used:')}</span>
                <div className="flex flex-wrap gap-1.5">
                  {processSteps[activeStepIndex].tools.map((tool) => (
                    <span key={tool} className="bg-white/5 border border-white/15 px-2.5 py-1 rounded text-slate-300 font-semibold text-[10px]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Action Call Section */}
        <div className="rounded-[2.2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/5 via-white/[0.02] to-violet-500/5 p-6 md:p-8 text-center backdrop-blur-md">
          <Code className="h-8 w-8 text-cyan-400 mx-auto mb-4 animate-pulse-glow" />
          <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
            {text('جاهز للبدء وصياغة ملف متطلبات مشروعك؟', 'Ready to plan your custom brief?')}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-6">
            {text('استخدم معالج البريف التفاعلي لدينا لترتيب متطلباتك، لنقوم بمناقشتها فور إرسالها معنا.', 'Leverage our interactive brief builder tool to structure and clarify your platform needs.')}
          </p>

          <Link 
            to={localizePath('/contact/brief')}
            className="btn-primary inline-flex items-center gap-1.5 text-xs text-black font-bold animate-bounce-subtle"
          >
            {text('افتح معالج البريف التفاعلي', 'Open Brief Builder Wizard')}
            <ArrowUpLeft className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProcessPage;
