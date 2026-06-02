import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpLeft, Calendar, MapPin, FileText, CheckCircle2, RefreshCw, BarChart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientJourney, deliveryArtifacts } from '../data/company';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import { pageImageShowcases } from '../data/pageImageShowcases';

const caseStudies = [
  {
    id: 'ecommerce-transformation',
    titleAr: 'تحويل متجر ملابس تقليدي إلى منصة تجارة إلكترونية عملاقة',
    titleEn: 'From Traditional Boutique to E-commerce Giant',
    categoryAr: 'تجارة إلكترونية',
    categoryEn: 'E-commerce',
    clientAr: 'فاشن بوتيك مصر',
    clientEn: 'Fashion Boutique Egypt',
    location: 'Cairo, Egypt',
    duration: '6 weeks',
    imageUrl: '/images/Gemini_Generated_Image_rzfhaqrzfhaqrzfh.png',
    challenge: {
      ar: 'كانت الشركة تعتمد بالكامل على المبيعات الفيزيائية وتفتقر إلى أي وجود رقمي قوي، مما أدى إلى انخفاض المبيعات وضياع الفرص السوقية الرقمية الكبرى.',
      en: 'The company relied solely on physical sales with minimal digital presence. They were losing market opportunities and facing declining revenue.'
    },
    solution: {
      ar: 'بنينا منصة تجارة إلكترونية متكاملة مع نظام دفع آمن، إدارة مخزون ذكية، وتجربة تسوق مميزة ومخصصة لعملاء الهواتف المحمولة.',
      en: 'We built a comprehensive e-commerce platform with secure payment integration, inventory management, and exceptional user experience optimized for mobile.'
    },
    results: {
      metrics: [
        { percentage: 85, value: '+85%', label: { ar: 'زيادة المبيعات عبر الإنترنت', en: 'Online sales growth' } },
        { percentage: 40, value: '-40%', label: { ar: 'وقت إنهاء الطلب', en: 'Checkout time reduction' } },
        { percentage: 95, value: '95%', label: { ar: 'معدل رضا المشترين', en: 'Customer satisfaction rate' } },
        { percentage: 60, value: '+60%', label: { ar: 'معدل عودة العميل', en: 'Customer retention improvement' } }
      ],
      description: {
        ar: 'ركزت النتيجة على تسهيل مسار الشراء، وتقليل التردد قبل الدفع، وتجهيز المتجر للتوسع المستقبلي في المحتوى والحملات.',
        en: 'The outcome focused on clearer products, less hesitation at checkout, and a store foundation ready for future content and campaigns.'
      }
    },
    technicalStack: ['React', 'Next.js', 'Payment Gateway Integration', 'Inventory System', 'TailwindCSS'],
    timeline: [
      { phase: 'Discovery & Strategy', weeks: '1-2', ar: 'اكتشاف واستراتيجية', arWeeks: '1-2' },
      { phase: 'Design & Wireframes', weeks: '2-3', ar: 'تصميم وهياكل', arWeeks: '2-3' },
      { phase: 'Development', weeks: '3-5', ar: 'التطوير الفعلي', arWeeks: '3-5' },
      { phase: 'Testing & Launch', weeks: '5-6', ar: 'الاختبار والإطلاق', arWeeks: '5-6' }
    ]
  },
  {
    id: 'educational-platform',
    titleAr: 'بناء منصة تعليمية تخدم 50000+ طالب',
    titleEn: 'Educational Platform for 50K+ Students',
    categoryAr: 'التعليم والتدريب',
    categoryEn: 'Education',
    clientAr: 'أكاديمية أحمد السيد التعليمية',
    clientEn: 'Ahmed El-Sayed Academy',
    location: 'Cairo, Egypt',
    duration: '10 weeks',
    imageUrl: '/images/WhatsApp%20Image%202025-07-25%20at%2017.40.56_6dae988c.jpg',
    challenge: {
      ar: 'أكاديمية تعليمية كبيرة كانت تواجه صعوبات بالغة في إدارة فصول الطلاب والمحتوى والاختبارات بشكل مركزي وسريع.',
      en: 'A large educational academy needed to manage students, courses, and assessments efficiently. They required a modern platform supporting hybrid learning.'
    },
    solution: {
      ar: 'طورنا منصة تعليمية شاملة مع نظام متقدم لإدارة المحتوى، بث فيديو مباشر، نظام تقييم ذكي، ولوحة تحكم منفصلة للمعلمين والطلاب.',
      en: 'We developed a comprehensive learning platform with course management, live video streaming, intelligent grading system, and dashboards for both teachers and students.'
    },
    results: {
      metrics: [
        { percentage: 92, value: '92%', label: { ar: 'معدل نشاط الطلاب اليومي', en: 'Daily student engagement' } },
        { percentage: 50, value: '-50%', label: { ar: 'تقليل الجهد الإداري', en: 'Admin workload reduction' } },
        { percentage: 99, value: '99.9%', label: { ar: 'نسبة استقرار البث الفيدوي', en: 'Video streaming stability' } },
        { percentage: 80, value: '+80%', label: { ar: 'معدل نجاح الاختبارات', en: 'Quiz pass rate improvement' } }
      ],
      description: {
        ar: 'أصبح المحتوى التعليمي أكثر تنظيمًا، مع تجربة مناسبة وسلسة للطلاب والمعلمين وقابلة للتطوير للمراحل القادمة.',
        en: 'The learning content became more organized, with an experience suited for students and teachers and ready to expand by levels and curricula.'
      }
    },
    technicalStack: ['React', 'Node.js', 'Video Streaming API', 'MongoDB', 'Redis'],
    timeline: [
      { phase: 'Requirements Analysis', weeks: '1-2', ar: 'تحليل المتطلبات', arWeeks: '1-2' },
      { phase: 'Architecture Design', weeks: '2-3', ar: 'تصميم البنية', arWeeks: '2-3' },
      { phase: 'Core Development', weeks: '3-8', ar: 'التطوير الأساسي', arWeeks: '3-8' },
      { phase: 'Testing & Deployment', weeks: '8-10', ar: 'الاختبار والنشر', arWeeks: '8-10' }
    ]
  },
  {
    id: 'saas-dashboard',
    titleAr: 'إعادة تصميم لوحة تحكم SaaS لشركة استشارات عملاقة',
    titleEn: 'Enterprise SaaS Dashboard Redesign',
    categoryAr: 'حلول مؤسسية',
    categoryEn: 'Enterprise SaaS',
    clientAr: 'الاستشارات الاستراتيجية العالمية',
    clientEn: 'Strategy & Consulting Inc',
    location: 'Dubai, UAE',
    duration: '8 weeks',
    imageUrl: '/images/Gemini_Generated_Image_9ooasm9ooasm9ooa%20(1).png',
    challenge: {
      ar: 'واجهة نظام سحابي قديمة ذات لوحات تحكم معقدة وبطيئة، سببت إحباط المستخدمين من صعوبة التنقل وبطء الاستجابة ومعدل رضا منخفض.',
      en: 'Legacy SaaS platform with complex, slow interface. Users were frustrated with difficult navigation and poor performance. Satisfaction score was below 2.5/5.'
    },
    solution: {
      ar: 'أعدنا تصميم لوحة التحكم بالكامل، وحسّنا الأداء بنسبة 300%، وبنينا واجهة مرنة ذات تسلسل هرمي واضح لتصفح البيانات.',
      en: 'Complete dashboard redesign with 300% performance improvement, modern UX, and advanced reporting system. We leveraged cutting-edge performance optimization techniques.'
    },
    results: {
      metrics: [
        { percentage: 75, value: '+300%', label: { ar: 'تحسين سرعة الاستجابة', en: 'Response speed increase' } },
        { percentage: 90, value: '90%', label: { ar: 'معدل رضا المستخدمين الجدد', en: 'User satisfaction score' } },
        { percentage: 65, value: '-65%', label: { ar: 'وقت الوصول للمعلومة', en: 'Time-to-information reduction' } },
        { percentage: 88, value: '88%', label: { ar: 'تقليل التذاكر والدعم', en: 'Support ticket reduction' } }
      ],
      description: {
        ar: 'ركزت إعادة التصميم على تقليل التعقيد البصري وتوحيد نظام المكونات البرمجية لجعل البيانات التنفيذية أسهل للمتابعة.',
        en: 'The redesign focused on reducing visual complexity, unifying components, and making operational data easier to read and follow.'
      }
    },
    technicalStack: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Chart.js'],
    timeline: [
      { phase: 'UX Audit & Research', weeks: '1-2', ar: 'تدقيق واجهات وبحث', arWeeks: '1-2' },
      { phase: 'Design System Design', weeks: '2-3', ar: 'بناء نظام التصميم', arWeeks: '2-3' },
      { phase: 'System Implementation', weeks: '3-7', ar: 'برمجة وتطبيق النظام', arWeeks: '3-7' },
      { phase: 'Launch & Feedbacks', weeks: '7-8', ar: 'الإطلاق واستقبال الملاحظات', arWeeks: '7-8' }
    ]
  }
];

// Interactive Card component with tab switching inside
const CaseStudyCard = ({ study, isArabic }: { study: typeof caseStudies[0]; isArabic: boolean }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution' | 'timeline'>('overview');
  const [isFlipped, setIsFlipped] = useState(false);
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  return (
    <div className="grid gap-8 lg:gap-12 xl:gap-16 items-center md:grid-cols-2">
      
      {/* 3D Flip Card Container */}
      <div className="perspective-1000 h-[420px] md:h-[500px] w-full relative">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="w-full h-full transform-style-3d relative"
        >
          {/* Front Side: Project Image Cover */}
          <div className="absolute inset-0 backface-hidden w-full h-full rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
            <img
              src={study.imageUrl}
              alt={study.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-[#06090f]/40 to-transparent" />
            
            {/* Quick Details Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <div className="glass-card rounded-2xl border-white/20 p-5 backdrop-blur-2xl">
                <div className="flex flex-wrap gap-4 mb-3 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    {study.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    {study.location}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-xs font-semibold text-cyan-300">
                    {text(study.categoryAr, study.categoryEn)}
                  </span>
                  <button 
                    onClick={() => setIsFlipped(true)}
                    className="text-xs text-white hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                  >
                    <RefreshCw className="h-3 w-3" />
                    {text('تفاصيل المخرجات', 'View Deliverables')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side: Deliverables & Tech Checklist */}
          <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden w-full h-full rounded-[2.5rem] border border-cyan-400/30 bg-[#080d15] p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  {text('المخرجات التقنية المنجزة', 'Delivered Artifacts')}
                </h4>
                <button 
                  onClick={() => setIsFlipped(false)}
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full"
                >
                  <RefreshCw className="h-3 w-3" />
                  {text('العودة للصورة', 'Show Cover')}
                </button>
              </div>

              <div className="space-y-3 mb-6" dir="ltr">
                {study.technicalStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span dir="ltr" className="text-left font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-500 mb-3">{text('العميل المستفيد', 'Beneficiary Client')}</p>
              <h5 className="font-display text-base font-bold text-white">{text(study.clientAr, study.clientEn)}</h5>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Section with Interactive Tabs */}
      <div className="space-y-6">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
            {text(study.titleAr, study.titleEn)}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            {text(`العميل: ${study.clientAr}`, `Client: ${study.clientEn}`)}
          </p>
        </div>

        {/* Custom Tabs Navigation */}
        <div className="flex border-b border-white/10 gap-4 text-xs font-semibold pb-1.5 overflow-x-auto">
          {[
            { id: 'overview', labelAr: 'النتائج والمؤشرات', labelEn: 'Metrics & Results' },
            { id: 'challenge', labelAr: 'التحدي الأصلي', labelEn: 'Challenge' },
            { id: 'solution', labelAr: 'طريقة الحل', labelEn: 'Solution' },
            { id: 'timeline', labelAr: 'خارطة الطريق', labelEn: 'Timeline' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 border-b-2 transition-all relative ${
                activeTab === tab.id 
                  ? 'border-cyan-400 text-cyan-300 font-bold' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              {text(tab.labelAr, tab.labelEn)}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {/* SVG Progress Rings */}
                <div className="grid grid-cols-2 gap-4">
                  {study.results.metrics.map((metric, i) => {
                    const radius = 24;
                    const strokeWidth = 4;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDashoffset = circumference - (metric.percentage / 100) * circumference;

                    return (
                      <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
                        <svg className="w-14 h-14 transform -rotate-90">
                          {/* Track */}
                          <circle
                            cx="28"
                            cy="28"
                            r={radius}
                            className="stroke-white/10"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                          />
                          {/* Value Fill */}
                          <motion.circle
                            cx="28"
                            cy="28"
                            r={radius}
                            className="stroke-cyan-400"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 1.2, delay: i * 0.1 }}
                          />
                        </svg>
                        <div>
                          <p className="text-base font-bold text-white">{metric.value}</p>
                          <p className="text-[10px] text-slate-400 leading-tight">{text(metric.label.ar, metric.label.en)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-slate-300 italic border-l-2 border-cyan-400 pl-3 leading-relaxed">
                  {text(study.results.description.ar, study.results.description.en)}
                </p>
              </motion.div>
            )}

            {activeTab === 'challenge' && (
              <motion.div
                key="challenge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex gap-3">
                  <BarChart className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-red-300 uppercase tracking-widest mb-1">
                      {text('المشكلة السابقة', 'Legacy Obstacles')}
                    </h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {text(study.challenge.ar, study.challenge.en)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'solution' && (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">
                      {text('الحل الهندسي والتصميمي', 'Design & Tech Solution')}
                    </h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {text(study.solution.ar, study.solution.en)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative border-l border-white/10 pl-5 space-y-4 py-2"
              >
                {study.timeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Node Dot */}
                    <div className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#06090f]" />
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">{text(step.ar, step.phase)}</span>
                      <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 flex items-center gap-1 font-semibold">
                        <Clock className="h-3 w-3" />
                        {text(step.arWeeks, step.weeks)}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  usePageMetadata(getPageSeoByPath('/case-studies', lang));

  return (
    <div className="relative pt-10 pb-16 md:pt-24 md:pb-32">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="mobile-ornament absolute top-[5%] left-[-15%] h-[70vw] w-[70vw] rounded-full bg-cyan-600/10 opacity-70 blur-[180px] animate-pulse" />
        <div className="mobile-ornament absolute bottom-[30%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-violet-600/10 opacity-60 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-6">
            <FileText className="h-5 w-5 text-cyan-400" />
            {text('قصص نجاح ودراسات حالة متعمقة', 'In-Depth Success Stories')}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {text('خطوات مدروسة،', 'Thoughtful steps,')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {text('ونتائج ملموسة للشركات', 'tangible results for companies')}
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto font-body">
            {text(
              'لا نكتفي بتسليم واجهات بصرية لامعة؛ بل نركز على هندسة وبناء حلول واضحة تحل مشاكل الأداء والمبيعات وإدارة البيانات للعملاء.',
              'We do not just deliver shiny interfaces; we focus on engineering clean solutions that solve performance, sales, and management issues.'
            )}
          </p>
        </motion.div>

        <PageImageShowcaseSection showcase={pageImageShowcases.caseStudies} />

        {/* Corporate principles / journey details */}
        <div className="mb-24 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 md:rounded-[2.4rem] md:p-8">
            <p className="section-kicker mb-4">{text('مسار رحلة العميل', 'Behind each case')}</p>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl leading-snug">
              {text('افهم منهجية التفكير، لا الشكل فقط', 'Understand the thinking, not only the final screen')}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {clientJourney.slice(0, 4).map((step) => (
                <div key={step.phase} className="rounded-[1.2rem] border border-white/5 bg-[#06090f]/75 p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block mb-2">Phase {step.phase}</span>
                    <h3 className="font-display text-sm font-bold text-white">{text(step.title.ar, step.title.en)}</h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">{text(step.description.ar, step.description.en)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-violet-500/5 via-white/[0.02] to-cyan-500/5 p-6 md:rounded-[2.4rem] md:p-8 flex flex-col justify-between">
            <div>
              <p className="section-kicker mb-4">{text('مخرجات التسليم الموثوقة', 'Clear artifacts')}</p>
              <div className="space-y-3">
                {deliveryArtifacts.slice(0, 3).map((artifact) => (
                  <div key={artifact.title.en} className="rounded-[1.2rem] border border-white/5 bg-[#06090f]/60 p-4">
                    <h3 className="font-display text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                      {text(artifact.title.ar, artifact.title.en)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{text(artifact.description.ar, artifact.description.en)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid Layout */}
        <div className="space-y-24 md:space-y-36">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} isArabic={isArabic} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 text-center p-8 md:p-16 rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-24 -bottom-24 w-60 h-60 rounded-full bg-cyan-500/10 blur-[120px]" />
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
            {text('هل تحتاج شركتك إلى تحول رقمي مماثل؟', 'Does your company need a similar outcome?')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            {text(
              'اطرح تحديات عملك على مهندسي ومصممي نُطق لنصنع معًا تجربة سهلة الاستخدام ترفع مبيعات شركتك ووضوحها الرقمي.',
              'Discuss your company challenges with Notaq so they can become a clear, measurable digital path.'
            )}
          </p>
          <Link
            to={localizePath('/contact')}
            className="btn-primary group inline-flex items-center gap-2 text-base shadow-[0_0_30px_rgba(45,212,191,0.2)]"
          >
            {text('ابدأ مناقشة فكرة مشروعك', 'Request a project discussion')}
            <ArrowUpLeft className="h-5 w-5 group-hover:scale-125 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
