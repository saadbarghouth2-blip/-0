import { motion, useInView } from 'framer-motion';
import { BarChart3, Users, Zap, Award, Calendar, Trophy, Globe2, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

// Scroll-triggered counter component
const CountUp = ({ target, value }: { target: number; value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 15));

    return () => clearInterval(timer);
  }, [isInView, target]);

  const displayVal = value.replace(String(target), String(count));
  return <span ref={ref}>{displayVal}</span>;
};

// Custom Tooltip component for SVG elements
const MapNode = ({ 
  cx, cy, labelAr, labelEn, count, isArabic 
}: { 
  cx: number; cy: number; labelAr: string; labelEn: string; count: number; isArabic: boolean 
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <g 
      className="cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ripple ring */}
      <circle cx={cx} cy={cy} r="12" className="fill-cyan-400/20 stroke-cyan-400/30 stroke-1 animate-ping" />
      {/* Node center */}
      <circle cx={cx} cy={cy} r="6" className="fill-cyan-400 stroke-white stroke-2 shadow-lg" />
      
      {/* Hover Card */}
      {hovered && (
        <foreignObject x={cx - 70} y={cy - 70} width="140" height="60" className="overflow-visible z-30">
          <div className="bg-[#080d15] border border-cyan-400/30 text-white p-2 rounded-xl text-center shadow-2xl backdrop-blur-md text-[10px] dir-rtl">
            <p className="font-bold">{isArabic ? labelAr : labelEn}</p>
            <p className="text-cyan-400 font-semibold mt-0.5">{count} {isArabic ? 'مشروع نشط' : 'Active projects'}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
};

const StatsDashboard = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => clientFacingText(isArabic ? arabic : english, lang);

  const [activeChartTab, setActiveChartTab] = useState<'industries' | 'growth'>('industries');

  const regionalNodes = [
    { cx: 106, cy: 138, labelAr: 'مصر', labelEn: 'Egypt', count: 94, tone: 'cyan' },
    { cx: 210, cy: 170, labelAr: 'السعودية', labelEn: 'Saudi Arabia', count: 52, tone: 'emerald' },
    { cx: 294, cy: 174, labelAr: 'الإمارات', labelEn: 'UAE', count: 28, tone: 'amber' },
    { cx: 252, cy: 145, labelAr: 'الكويت', labelEn: 'Kuwait', count: 14, tone: 'violet' },
    { cx: 320, cy: 198, labelAr: 'قطر', labelEn: 'Qatar', count: 9, tone: 'cyan' },
    { cx: 158, cy: 119, labelAr: 'الأردن', labelEn: 'Jordan', count: 12, tone: 'emerald' },
  ] as const;

  const industryMix = [
    { labelAr: 'متاجر ومبيعات', labelEn: 'Commerce', value: 40, color: 'bg-cyan-400' },
    { labelAr: 'أنظمة ومنصات', labelEn: 'Systems', value: 30, color: 'bg-violet-400' },
    { labelAr: 'تعليم وتدريب', labelEn: 'Education', value: 20, color: 'bg-rose-400' },
    { labelAr: 'هوية وخدمات', labelEn: 'Brand & services', value: 10, color: 'bg-amber-400' },
  ];

  const growthMix = [
    { year: '2023', value: 35 },
    { year: '2024', value: 65 },
    { year: '2025', value: 92 },
    { year: '2026', value: 140 },
  ];

  usePageMetadata(getPageSeoByPath('/stats', lang));

  const mainStats = [
    {
      target: 180,
      value: '180+',
      labelAr: 'مشروع مكتمل ناجح',
      labelEn: 'Successful projects completed',
      descAr: 'تم تسليمها وفق معايير الجودة العالمية',
      descEn: 'Delivered under high international standards',
      icon: Award,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      target: 8,
      value: '8+',
      labelAr: 'سنوات من الخبرة العملية',
      labelEn: 'Years of practical experience',
      descAr: 'في تخطيط، بناء وهندسة البرمجيات',
      descEn: 'In software planning, design & engineering',
      icon: Calendar,
      color: 'from-violet-500 to-purple-500'
    },
    {
      target: 50,
      value: '50K+',
      labelAr: 'مستخدم نشط يومياً',
      labelEn: 'Daily active users',
      descAr: 'يتفاعلون مع المنصات التي طورناها',
      descEn: 'Interacting with platforms we built',
      icon: Users,
      color: 'from-rose-500 to-pink-500'
    },
    {
      target: 99,
      value: '99.9%',
      labelAr: 'معدل استقرار وثبات السيرفرات',
      labelEn: 'Server uptime guarantee',
      descAr: 'نظام تشغيل مستقر ومقاوم للأعطال',
      descEn: 'Highly resilient and stable system operation',
      icon: Zap,
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const performanceMetrics = [
    {
      titleAr: 'مقاييس سرعة وتجاوب الواجهات',
      titleEn: 'Performance & Speed Metrics',
      items: [
        { metricAr: 'متوسط زمن استجابة الصفحة', metricEn: 'Avg Page Load Time', value: '< 1.8s', target: 'Target: < 2.5s' },
        { metricAr: 'مؤشرات تجربة الويب Core Web Vitals', metricEn: 'Core Web Vitals Score', value: 'A+', target: 'Excellent' },
        { metricAr: 'تقييم أداء Lighthouse المطور', metricEn: 'Lighthouse Performance Score', value: '98/100', target: 'Top Tier' },
        { metricAr: 'أدوات الاستجابة التفاعلية FID', metricEn: 'First Input Delay', value: '12ms', target: 'Super Fast' }
      ]
    },
    {
      titleAr: 'جودة وتجربة مستخدم المنصة',
      titleEn: 'User Experience & Retention',
      items: [
        { metricAr: 'معدل الاحتفاظ بالزوار وزيادة التفاعل', metricEn: 'User Retention Rate', value: '92%', target: 'Higher than avg' },
        { metricAr: 'نسبة رضا العملاء الشاملة', metricEn: 'Overall Client Satisfaction', value: '4.95 / 5', target: 'Audited reviews' },
        { metricAr: 'مضاعفة المبيعات والتحويلات للشركات', metricEn: 'Avg Conversion Multiplier', value: '3.4x', target: 'High impact' },
        { metricAr: 'سرعة حل تذاكر المساعدة والدعم', metricEn: 'Avg Response Support Time', value: '45ms', target: 'Instant' }
      ]
    },
    {
      titleAr: 'بنية الأمان ومقاومة الاختراق',
      titleEn: 'Security & Infrastructure Uptime',
      items: [
        { metricAr: 'تشفير الاتصال والبيانات الحساسة', metricEn: 'SSL/TLS Encryption Standard', value: '256-bit AES', target: 'Military grade' },
        { metricAr: 'النسخ الاحتياطي السحابي التلقائي', metricEn: 'Automated Database Backups', value: 'Hourly', target: 'Fully secured' },
        { metricAr: 'معدل صد الهجمات السيبرانية DDoS', metricEn: 'DDoS Mitigated Attacks', value: '100%', target: 'No downtime' },
        { metricAr: 'تقييم كفاءة بنية الكود وجودته', metricEn: 'Security & Quality Rating', value: 'A+ Grade', target: 'Sonarqube check' }
      ]
    }
  ];

  return (
    <div className="relative pt-6 pb-10 md:pt-24 md:pb-32">
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
          className="mb-8 text-center md:mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300 mb-4 md:mb-6 md:px-4 md:py-2 md:text-sm">
            <BarChart3 className="h-4 w-4 text-cyan-400 md:h-5 md:w-5" />
            {text('الأرقام الحية والبيانات التفاعلية', 'Interactive Performance Data')}
          </div>
          <h1 className="font-display text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            {text('مقاييس الكفاءة،', 'Efficiency indicators,')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {text('الموثوقية والنمو بالأرقام', 'reliability & growth in figures')}
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto">
            {text(
              'لا نعتمد على الكلمات الإنشائية؛ بل نترك البيانات والسرعة والأرقام الموثقة تثبت مدى كفاءة التطوير البرمجي والتصميم لدينا.',
              'We do not rely on words; we let performance data, load speeds, and verified numbers prove our programming and design capabilities.'
            )}
          </p>
        </motion.div>

        {/* Live Counters Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-32">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-4 backdrop-blur-md transition-all hover:border-cyan-400/50 md:rounded-3xl md:p-8"
              >
                <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-25 blur-3xl transition-opacity`} />
                <div className="relative z-10">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400 mb-3 group-hover:bg-cyan-400 group-hover:text-black transition-all md:mb-4 md:h-12 md:w-12`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <p className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 mb-1.5 md:mb-2">
                    <CountUp target={stat.target} value={stat.value} />
                  </p>
                  <p className="text-white font-bold mb-1.5 text-sm md:text-base">{text(stat.labelAr, stat.labelEn)}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{text(stat.descAr, stat.descEn)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Reach & Portfolio Mix */}
        <div className="mb-10 grid gap-4 lg:mb-24 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,18,30,0.92),rgba(6,9,15,0.72))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.35)] md:rounded-[2rem] md:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(45,212,191,0.16),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(139,92,246,0.12),transparent_30%)]" />
            <div className="relative z-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-300">
                  {text('انتشار إقليمي منظم', 'Organized regional reach')}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold leading-9 text-white md:text-4xl md:leading-[1.25]">
                  {text('مشاريع منشورة في مصر والخليج بواجهة واحدة واضحة', 'Published work across Egypt and the Gulf in one clear view')}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                  {text(
                    'الخريطة تعرض نطاق انتشار نُطق بشكل أبسط: دول رئيسية، نقاط واضحة، ومؤشرات تكفي لفهم حجم الحضور بدون ازدحام بصري.',
                    'The map keeps Notaq�s reach easy to read: key countries, clear nodes, and enough signal without visual clutter.',
                  )}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { value: '+180', labelAr: 'مشروع', labelEn: 'projects' },
                    { value: '6', labelAr: 'أسواق', labelEn: 'markets' },
                    { value: '4', labelAr: 'عائلات خدمات', labelEn: 'service tracks' },
                  ].map((item) => (
                    <div key={item.labelEn} className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                      <p className="text-lg font-black text-cyan-200">{item.value}</p>
                      <p className="mt-1 text-[11px] font-semibold text-slate-400">{text(item.labelAr, item.labelEn)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[210px] overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#06101a]/85 md:min-h-[360px] md:rounded-[1.35rem]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <svg viewBox="0 0 420 280" className="relative z-10 h-full min-h-[210px] w-full md:min-h-[360px]" aria-label={text('خريطة انتشار نطق', 'Notaq reach map')}>
                  <defs>
                    <linearGradient id="reachStroke" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.7" />
                      <stop offset="55%" stopColor="#a78bfa" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.55" />
                    </linearGradient>
                  </defs>
                  <path d="M 42 132 C 80 82 142 78 188 104 C 230 128 276 92 356 102 C 384 116 394 150 382 184 C 364 236 292 232 242 210 C 202 194 172 204 136 220 C 90 240 42 214 32 174 C 28 158 30 144 42 132 Z" className="fill-white/[0.035] stroke-white/10 stroke-1" />
                  <path d="M 94 126 C 142 86 198 118 240 146 C 278 172 320 158 352 184" fill="none" className="stroke-cyan-300/35 stroke-1.5" strokeDasharray="5 8" />
                  <path d="M 106 138 C 154 126 176 134 210 170 C 234 152 264 148 294 174 C 304 182 314 190 320 198" fill="none" stroke="url(#reachStroke)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 158 119 C 184 126 218 135 252 145" fill="none" className="stroke-white/20 stroke-1" />
                  {regionalNodes.map((node) => {
                    const colorClass =
                      node.tone === 'emerald'
                        ? 'fill-emerald-300 stroke-emerald-50'
                        : node.tone === 'amber'
                          ? 'fill-amber-300 stroke-amber-50'
                          : node.tone === 'violet'
                            ? 'fill-violet-300 stroke-violet-50'
                            : 'fill-cyan-300 stroke-cyan-50';
                    return (
                      <g key={node.labelEn} className="group cursor-pointer">
                        <circle cx={node.cx} cy={node.cy} r="18" className="fill-cyan-400/8 stroke-white/10 stroke-1 transition group-hover:fill-cyan-400/18" />
                        <circle cx={node.cx} cy={node.cy} r="8" className={`${colorClass} stroke-2`} />
                        <circle cx={node.cx} cy={node.cy} r="3" className="fill-slate-950/90" />
                        <text x={node.cx} y={node.cy + 25} className="fill-slate-200 text-[9px] font-bold" textAnchor="middle">
                          {text(node.labelAr, node.labelEn)}
                        </text>
                        <text x={node.cx} y={node.cy - 16} className="fill-cyan-100 text-[8px] font-black opacity-0 transition-opacity group-hover:opacity-100" textAnchor="middle">
                          {node.count}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md md:rounded-[2rem] md:p-6"
          >
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
              <button
                onClick={() => setActiveChartTab('industries')}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${activeChartTab === 'industries' ? 'bg-cyan-300 text-slate-950' : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.08]'}`}
              >
                {text('حسب القطاع', 'By sector')}
              </button>
              <button
                onClick={() => setActiveChartTab('growth')}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${activeChartTab === 'growth' ? 'bg-cyan-300 text-slate-950' : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.08]'}`}
              >
                {text('النمو السنوي', 'Annual growth')}
              </button>
            </div>

            {activeChartTab === 'industries' ? (
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-300">{text('مزيج الأعمال', 'Work mix')}</p>
                  <h4 className="mt-2 text-xl font-bold text-white">{text('توزيع بسيط يوضح أين يتركز العمل', 'A simpler view of where the work is focused')}</h4>
                </div>
                <div className="space-y-3">
                  {industryMix.map((item) => (
                    <div key={item.labelEn}>
                      <div className="mb-1.5 flex items-center justify-between gap-3 text-xs font-bold text-slate-300">
                        <span>{text(item.labelAr, item.labelEn)}</span>
                        <span className="text-cyan-200">{item.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7 }}
                          className={`h-full rounded-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-300">{text('إيقاع النمو', 'Growth pace')}</p>
                  <h4 className="mt-2 text-xl font-bold text-white">{text('تصاعد تدريجي بدون مبالغة في العرض', 'A steady rise without overcomplicating the view')}</h4>
                </div>
                <div className="flex h-52 items-end gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  {growthMix.map((item) => (
                    <div key={item.year} className="flex h-full flex-1 flex-col justify-end gap-2 text-center">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${Math.min(item.value, 140) / 1.4}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="min-h-8 rounded-t-xl bg-gradient-to-t from-cyan-500/45 to-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.18)]"
                      />
                      <span className="text-[11px] font-bold text-slate-400">{item.year}</span>
                      <span className="text-xs font-black text-cyan-200">+{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.aside>
        </div>

        {/* Middle Section: SVG MENA Client Map & Interactive Chart Tabs */}
        <div className="hidden grid lg:grid-cols-2 gap-8 mb-10 lg:mb-24 items-stretch">
          
          {/* Client Geographical Map */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                {text('التواجد الجغرافي والانتشار', 'Geographical Footprint')}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                {text('عملاؤنا حول العالم العربي والشرق الأوسط', 'Our clients around the Middle East')}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                {text('مرر مؤشر الماوس فوق النقاط المضيئة لمعرفة عدد المشاريع الحية التي تم إطلاقها بكل دولة.', 'Hover over the glowing nodes to see the number of active projects launched in each country.')}
              </p>
            </div>

            {/* Stylized MENA Map Canvas SVG */}
            <div className="relative w-full aspect-[4/3] bg-black/30 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center p-2">
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
                {/* Simulated stylized desert coastline shapes for MENA region */}
                <path d="M 50 120 Q 90 90 120 110 T 220 120 T 320 100 T 380 150 L 380 280 L 50 280 Z" className="fill-white/[0.02] stroke-white/5 stroke-1" />
                <path d="M 120 110 Q 150 140 180 180 T 260 220 T 310 180 L 330 140 Z" className="fill-white/[0.03] stroke-white/10 stroke-1" />

                {/* Grid Lines for tech aesthetic */}
                <line x1="0" y1="50" x2="400" y2="50" className="stroke-white/[0.02] stroke-1" />
                <line x1="0" y1="100" x2="400" y2="100" className="stroke-white/[0.02] stroke-1" />
                <line x1="0" y1="150" x2="400" y2="150" className="stroke-white/[0.02] stroke-1" />
                <line x1="0" y1="200" x2="400" y2="200" className="stroke-white/[0.02] stroke-1" />
                <line x1="0" y1="250" x2="400" y2="250" className="stroke-white/[0.02] stroke-1" />
                
                <line x1="100" y1="0" x2="100" y2="300" className="stroke-white/[0.02] stroke-1" />
                <line x1="200" y1="0" x2="200" y2="300" className="stroke-white/[0.02] stroke-1" />
                <line x1="300" y1="0" x2="300" y2="300" className="stroke-white/[0.02] stroke-1" />

                {/* Country Glowing Interactive Nodes */}
                {/* Egypt (Cairo) */}
                <MapNode cx={140} cy={130} labelAr="جمهورية مصر العربية" labelEn="Egypt" count={94} isArabic={isArabic} />
                {/* Saudi Arabia (Riyadh) */}
                <MapNode cx={230} cy={170} labelAr="المملكة العربية السعودية" labelEn="Saudi Arabia" count={52} isArabic={isArabic} />
                {/* UAE (Dubai) */}
                <MapNode cx={290} cy={180} labelAr="الإمارات العربية المتحدة" labelEn="United Arab Emirates" count={28} isArabic={isArabic} />
                {/* Jordan (Amman) */}
                <MapNode cx={180} cy={120} labelAr="المملكة الأردنية الهاشمية" labelEn="Jordan" count={12} isArabic={isArabic} />
              </svg>
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              {/* Tab Selector */}
              <div className="flex border-b border-white/10 pb-3 gap-6 text-xs font-bold mb-6">
                <button 
                  onClick={() => setActiveChartTab('industries')}
                  className={`pb-1.5 transition-colors ${activeChartTab === 'industries' ? 'text-cyan-400 border-b-2 border-cyan-400 font-black' : 'text-slate-400 hover:text-white'}`}
                >
                  {text('توزيع المشاريع حسب القطاع', 'Projects by Industry')}
                </button>
                <button 
                  onClick={() => setActiveChartTab('growth')}
                  className={`pb-1.5 transition-colors ${activeChartTab === 'growth' ? 'text-cyan-400 border-b-2 border-cyan-400 font-black' : 'text-slate-400 hover:text-white'}`}
                >
                  {text('معدل النمو السنوي', 'Annual Growth Rate')}
                </button>
              </div>
            </div>

            {/* Custom SVG Charts with SVG animations */}
            <div className="flex-grow flex items-center justify-center min-h-[220px]">
              {activeChartTab === 'industries' ? (
                // SVG Donut Chart for Industries
                <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-around">
                  <div className="relative w-36 h-36">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* E-commerce Segment (40%) */}
                      <circle cx="72" cy="72" r="50" className="stroke-cyan-500" strokeWidth="20" strokeDasharray="314.15" strokeDashoffset="0" fill="transparent" />
                      {/* SaaS Segment (30%) */}
                      <circle cx="72" cy="72" r="50" className="stroke-violet-500" strokeWidth="20" strokeDasharray="314.15" strokeDashoffset="125.66" fill="transparent" />
                      {/* Education Segment (20%) */}
                      <circle cx="72" cy="72" r="50" className="stroke-rose-500" strokeWidth="20" strokeDasharray="314.15" strokeDashoffset="220" fill="transparent" />
                      {/* Others (10%) */}
                      <circle cx="72" cy="72" r="50" className="stroke-amber-500" strokeWidth="20" strokeDasharray="314.15" strokeDashoffset="282.74" fill="transparent" />
                    </svg>
                    {/* Inner hole */}
                    <div className="absolute inset-0 m-6 rounded-full bg-[#080d15] flex flex-col items-center justify-center border border-white/5 shadow-inner">
                      <span className="text-lg font-bold text-white">180+</span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest">{text('مشروع', 'Projects')}</span>
                    </div>
                  </div>

                  {/* Donut Legend */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-cyan-500 block" />
                      <span className="text-slate-300 font-semibold">{text('التجارة الإلكترونية (40%)', 'E-commerce (40%)')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-violet-500 block" />
                      <span className="text-slate-300 font-semibold">{text('الأنظمة والمنصات (30%)', 'SaaS & Webapps (30%)')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-rose-500 block" />
                      <span className="text-slate-300 font-semibold">{text('التعليم والتدريب (20%)', 'Education (20%)')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-amber-500 block" />
                      <span className="text-slate-300 font-semibold">{text('هويات وخدمات أخرى (10%)', 'Others (10%)')}</span>
                    </div>
                  </div>
                </div>
              ) : (
                // SVG Bar Chart for Growth
                <div className="w-full h-full flex flex-col justify-end">
                  <svg viewBox="0 0 300 150" className="w-full h-full">
                    {/* Vertical axes */}
                    <line x1="30" y1="10" x2="30" y2="130" className="stroke-white/10 stroke-1" />
                    <line x1="30" y1="130" x2="280" y2="130" className="stroke-white/10 stroke-1" />

                    {/* Bar 2023 */}
                    <rect x="50" y="80" width="24" height="50" className="fill-cyan-500/20 stroke-cyan-500 stroke-1 rx-2" />
                    <text x="62" y="142" className="fill-slate-500 text-[8px] text-center" textAnchor="middle">2023</text>
                    <text x="62" y="72" className="fill-white text-[8px] font-bold" textAnchor="middle">+35%</text>

                    {/* Bar 2024 */}
                    <rect x="110" y="50" width="24" height="80" className="fill-cyan-500/40 stroke-cyan-500 stroke-1" />
                    <text x="122" y="142" className="fill-slate-500 text-[8px]" textAnchor="middle">2024</text>
                    <text x="122" y="42" className="fill-white text-[8px] font-bold" textAnchor="middle">+65%</text>

                    {/* Bar 2025 */}
                    <rect x="170" y="30" width="24" height="100" className="fill-cyan-500/60 stroke-cyan-500 stroke-1" />
                    <text x="182" y="142" className="fill-slate-500 text-[8px]" textAnchor="middle">2025</text>
                    <text x="182" y="22" className="fill-white text-[8px] font-bold" textAnchor="middle">+92%</text>

                    {/* Bar 2026 (Estimate/Current) */}
                    <rect x="230" y="15" width="24" height="115" className="fill-cyan-400 stroke-cyan-300 stroke-2" />
                    <text x="242" y="142" className="fill-cyan-400 text-[8px] font-bold" textAnchor="middle">2026</text>
                    <text x="242" y="8" className="fill-cyan-300 text-[8px] font-black" textAnchor="middle">+140%</text>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Satisfaction 半圆 Gauge & Quality Badges */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-6 mb-10 md:mb-24">
          
          {/* Customer Satisfaction Half-Circle Gauge */}
          <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-4 text-center flex flex-col justify-between items-center backdrop-blur-md md:rounded-[1.8rem] md:p-6">
            <div>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold block mb-2">{text('مؤشر تقييم الرضا', 'Satisfaction Index')}</span>
              <h4 className="text-white text-base font-bold mb-4">{text('تقييم رضا العملاء الموثق', 'Verified Client Satisfaction')}</h4>
            </div>

            <div className="relative w-36 h-20 overflow-hidden flex items-end justify-center">
              <svg className="w-full h-full transform -rotate-180" viewBox="0 0 100 50">
                {/* Back Track */}
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" className="stroke-white/10" strokeWidth="10" />
                {/* Fill path (4.9/5 is 98%) */}
                <motion.path 
                  d="M 10 50 A 40 40 0 0 1 90 50" 
                  fill="none" 
                  className="stroke-cyan-400" 
                  strokeWidth="10" 
                  strokeDasharray="125.6"
                  initial={{ strokeDashoffset: 125.6 }}
                  whileInView={{ strokeDashoffset: 2.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
              <div className="absolute bottom-0 text-center flex flex-col">
                <span className="text-2xl font-black text-white">4.95</span>
                <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">/ 5.0 Rating</span>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-400 mt-4 leading-relaxed max-w-[200px]">
              {text('بناءً على مراجعات واستطلاعات رأي شملت 120+ عميل بعد التسليم.', 'Based on feedback surveys from 120+ clients post delivery.')}
            </p>
          </div>

          {/* Achievement Trophy Badge */}
          <div className="rounded-[1.15rem] border border-white/10 bg-gradient-to-br from-violet-500/5 via-white/[0.02] to-cyan-500/5 p-4 text-center flex flex-col justify-between items-center backdrop-blur-md md:rounded-[1.8rem] md:p-6">
            <div>
              <span className="text-[10px] text-violet-400 uppercase tracking-widest font-bold block mb-2">{text('شارة التميز الرقمي', 'Honorary Badge')}</span>
              <h4 className="text-white text-base font-bold mb-4">{text('أفضل شريك تطوير برمجيات', 'Best Software Partner')}</h4>
            </div>

            <div className="w-20 h-20 rounded-full bg-violet-500/10 border border-violet-400/20 flex items-center justify-center shadow-lg text-violet-400">
              <Trophy className="h-10 w-10 animate-bounce-subtle" />
            </div>

            <p className="text-[10px] text-slate-400 mt-4 leading-relaxed max-w-[200px]">
              {text('مصنف كـأحد أفضل مقدمي الحلول الرقمية التفاعلية في مصر لعام 2025.', 'Rated among top interactive digital solution providers in Egypt, 2025.')}
            </p>
          </div>

          {/* Global Operations Badge */}
          <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-4 text-center flex flex-col justify-between items-center backdrop-blur-md md:rounded-[1.8rem] md:p-6">
            <div>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block mb-2">{text('سرعة العمليات وحجمها', 'Operational Volume')}</span>
              <h4 className="text-white text-base font-bold mb-4">{text('إجمالي العمليات المنجزة', 'Total Processed Operations')}</h4>
            </div>

            <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center shadow-lg text-amber-400">
              <Globe2 className="h-10 w-10 animate-spin-slow" />
            </div>

            <p className="text-[10px] text-slate-400 mt-4 leading-relaxed max-w-[200px]">
              {text('أنظمتنا تدعم وتخدم ملايين البيانات يومياً بمرونة وسرعة استجابة فائقة.', 'Our architectures process millions of operations daily with zero database lag.')}
            </p>
          </div>
        </div>

        {/* Detailed Performance Metrics Section */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            {text('المواصفات التقنية ومعايير كفاءة الكود', 'Technical Specifications & Quality Standards')}
          </h2>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            {performanceMetrics.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md"
              >
                <h3 className="font-display text-sm font-bold text-cyan-400 border-b border-white/5 pb-4 mb-5 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  {text(section.titleAr, section.titleEn)}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1 text-xs">
                        <p className="text-slate-400 font-body">{text(item.metricAr, item.metricEn)}</p>
                        <p className="font-bold text-white">{item.value}</p>
                      </div>
                      <p className="text-[9px] text-slate-500 font-semibold">{item.target}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
