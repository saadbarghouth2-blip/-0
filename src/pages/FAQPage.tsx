import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Search, ChevronDown, ThumbsUp, ThumbsDown, MessageSquare, ArrowUpLeft } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { cn } from '../lib/utils';

const faqList = [
  {
    category: 'general',
    categoryAr: 'أسئلة عامة',
    categoryEn: 'General',
    qAr: 'ما هي وكالة نُطق للحلول الرقمية؟',
    qEn: 'What is Notaq Digital Agency?',
    aAr: 'نُطق هي وكالة تصميم وتطوير ويب متخصصة في بناء وتطوير الهويات البصرية والمنصات التفاعلية للشركات والمؤسسات بلمسات فنية ومعايير كود ممتازة.',
    aEn: 'Notaq is a boutique web design and development studio focusing on visual brand identities and interactive platforms with high architectural standards.'
  },
  {
    category: 'technical',
    categoryAr: 'أسئلة تقنية وتطوير',
    categoryEn: 'Technical & Stack',
    qAr: 'ما هي اللغات والبيئات التقنية التي تعتمدون عليها؟',
    qEn: 'What programming stack do you utilize?',
    aAr: 'نعتمد بالكامل على مكتبة React وبيئات عمل Next.js وتخطيط TailwindCSS لسرعة التحميل، مع دمج لوحات تحكم متقدمة ونظام Node.js وسحابة AWS للبيانات.',
    aEn: 'We mainly build on React, Next.js, and TailwindCSS for high loading speeds. Databases and servers run on Node.js, MongoDB, and AWS cloud hosting.'
  },
  {
    category: 'scope',
    categoryAr: 'أسئلة النطاق والتعاقد',
    categoryEn: 'Scope & engagement',
    qAr: 'هل تقدمون ضمانات تشغيل وصيانة بعد التسليم؟',
    qEn: 'Do you offer operational support after delivery?',
    aAr: 'نعم، نوفر ٣٠ يوماً من الصيانة والتشغيل ومتابعة السيرفرات مجاناً بعد إطلاق المشروع للتأكد من عدم وجود أي ثغرات أو أعطال.',
    aEn: 'Yes, we provide 30 days of free operational maintenance and server monitoring post-launch to ensure complete platform stability.'
  },
  {
    category: 'services',
    categoryAr: 'الخدمات والتسليم',
    categoryEn: 'Services & Scope',
    qAr: 'كم من الوقت يستغرق تسليم موقع إلكتروني تعريفي متكامل؟',
    qEn: 'How long does a corporate website implementation take?',
    aAr: 'يستغرق تسليم الموقع التعريفي المتكامل من ٣ إلى ٦ أسابيع شاملة كتابة البريف، التصميم البصري الأولي، والتطوير البرمجي والاختبار.',
    aEn: 'A complete corporate website typically takes 3 to 6 weeks, covering the brief phase, visual designs, and front-end development cycles.'
  }
];

const FAQPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // Keep track of rated FAQs to prevent double rating
  const [helpfulRatings, setHelpfulRatings] = useState<Record<number, 'yes' | 'no'>>({});

  usePageMetadata(getPageSeoByPath('/faq', lang));

  const categories = useMemo(() => {
    return ['all', 'general', 'technical', 'scope', 'services'];
  }, []);

  const categoriesAr: Record<string, string> = {
    'all': 'الكل',
    'general': 'أسئلة عامة',
    'technical': 'الجانب التقني',
    'scope': 'النطاق والتعاقد',
    'services': 'الخدمات والتسليم'
  };

  // Filter FAQ items
  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const q = isArabic ? item.qAr : item.qEn;
      const a = isArabic ? item.aAr : item.aEn;
      
      const matchesSearch = 
        q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        a.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || 
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, isArabic]);

  const handleHelpfulClick = (idx: number, type: 'yes' | 'no') => {
    setHelpfulRatings(prev => ({ ...prev, [idx]: type }));
  };

  return (
    <div className="relative pt-10 pb-16 md:pt-24 md:pb-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-cyan-600/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-violet-600/10 blur-[200px] rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-6">
            <HelpCircle className="h-5 w-5 text-cyan-400" />
            {text('مركز المساعدة والأسئلة الشائعة', 'Help Center & FAQs')}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {text('لديك تساؤلات؟', 'Have questions?')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {text('نحن هنا لتبسيط التفاصيل', 'We are here to clear details')}
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            {text(
              'كل ما تريد معرفته عن طريقة عملنا، أسعارنا، ومعايير الكود والأمان التي نطبقها في كل مشروع.',
              'Everything you need to know about our workflow, billing structure, stack, and standards.'
            )}
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mt-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setExpandedIndex(null); }}
              placeholder={text('ابحث في مركز المساعدة...', 'Search help center...')}
              className="w-full bg-[#06090f]/60 border border-white/10 rounded-full pl-11 pr-5 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setExpandedIndex(null); }}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all border",
                selectedCategory === cat 
                  ? "bg-cyan-500/10 border-cyan-400 text-cyan-300 font-bold" 
                  : "bg-white/5 border-white/5 text-slate-400 hover:border-cyan-400/50 hover:text-white"
              )}
            >
              {text(categoriesAr[cat] || cat, cat)}
            </button>
          ))}
        </div>

        {/* FAQ list Accordion */}
        <div className="space-y-4 mb-20">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedIndex === idx;
              const hasRated = helpfulRatings[idx] !== undefined;

              return (
                <motion.div
                  key={idx}
                  layout
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="w-full p-5 text-right flex justify-between items-center text-xs font-bold text-white hover:bg-white/5 transition-colors gap-4"
                  >
                    <span className="font-display text-sm md:text-base leading-snug">{text(faq.qAr, faq.qEn)}</span>
                    <ChevronDown className={cn("h-4 w-4 text-slate-400 shrink-0 transition-transform", isExpanded && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 border-t border-white/5 bg-black/20 space-y-4">
                          <p className="text-xs md:text-sm leading-relaxed text-slate-400 font-body">
                            {text(faq.aAr, faq.aEn)}
                          </p>

                          {/* Helpfulness Rating card */}
                          <div className="flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-slate-500 font-semibold">
                            <span>{text('هل كانت هذه الإجابة مفيدة؟', 'Was this answer helpful?')}</span>
                            
                            {!hasRated ? (
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => handleHelpfulClick(idx, 'yes')}
                                  className="flex items-center gap-1 bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 border border-white/10 px-2.5 py-1 rounded transition-colors"
                                >
                                  <ThumbsUp className="h-3 w-3" />
                                  {text('نعم', 'Yes')}
                                </button>
                                <button 
                                  onClick={() => handleHelpfulClick(idx, 'no')}
                                  className="flex items-center gap-1 bg-white/5 hover:bg-red-500/10 hover:text-red-400 border border-white/10 px-2.5 py-1 rounded transition-colors"
                                >
                                  <ThumbsDown className="h-3 w-3" />
                                  {text('لا', 'No')}
                                </button>
                              </div>
                            ) : (
                              <span className="text-emerald-400 font-bold">
                                {text('شكرًا لك على ملاحظاتك!', 'Thank you for your feedback!')}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white/[0.01] border border-white/5 rounded-3xl">
              <HelpCircle className="h-10 w-10 text-slate-600 mx-auto mb-4" />
              <h4 className="font-display text-base font-bold text-white mb-1">{text('لا توجد نتائج مطابقة لبحثك', 'No matching questions found')}</h4>
              <p className="text-xs text-slate-500">{text('جرب كتابة كلمات أبسط مثل (تصميم، صيانة، مدة التنفيذ).', 'Try terms like design, support, stack, or timeline.')}</p>
            </div>
          )}
        </div>

        {/* Bottom CTA Panel */}
        <div className="rounded-[2.2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/5 via-white/[0.01] to-violet-500/5 p-6 md:p-8 text-center backdrop-blur-md">
          <MessageSquare className="h-8 w-8 text-cyan-400 mx-auto mb-4 animate-bounce-subtle" />
          <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
            {text('لم تجد ما تبحث عنه بالصفحة؟', 'Still need answers?')}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-6">
            {text('تواصل مباشرة مع فريق الدعم الفني والاستشارات بنطق لنوضح لك كافة تفاصيل عقود العمل والبرمجة والتطوير.', 'Contact Notaq consultants to explore operational models, deliverables, and service scopes.')}
          </p>

          <Link 
            to={localizePath('/contact')}
            className="btn-primary inline-flex items-center gap-1.5 text-xs text-black font-bold"
          >
            {text('اطرح سؤالك على فريقنا', 'Send us your questions')}
            <ArrowUpLeft className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;
