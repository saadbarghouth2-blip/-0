import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Quote,
  Star,
  Play,
  X,
  ShieldCheck,
} from 'lucide-react';

import EditorialImageBreak from '../components/EditorialImageBreak';
import PageHero from '../components/PageHero';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { testimonialEntries } from '../data/testimonials';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

const testimonials = testimonialEntries;

const stats = [
  { value: '100%', labelAr: 'رضا العملاء الكامل', labelEn: 'Client satisfaction' },
  { value: '+180', labelAr: 'مشروع رقمي منجز', labelEn: 'Completed projects' },
  { value: '+160', labelAr: 'علامة تجارية سعيدة', labelEn: 'Happy brands' },
  { value: '24/7', labelAr: 'متابعة ودعم مستمر', labelEn: 'Ongoing support' },
];

const ratingBreakdown = [
  { stars: 5, percentage: 94, count: 152 },
  { stars: 4, percentage: 5, count: 8 },
  { stars: 3, percentage: 1, count: 2 },
  { stars: 2, percentage: 0, count: 0 },
  { stars: 1, percentage: 0, count: 0 },
];

const partnerLogos = [
  { name: 'Fashion Boutique', logoText: 'Fashion' },
  { name: 'Ahmed Academy', logoText: 'Academy' },
  { name: 'Strategy Inc', logoText: 'Strategy' },
  { name: 'Elite Catering', logoText: 'Elite' },
  { name: 'Smart Quran', logoText: 'Quran' },
  { name: 'Kunuz Misr', logoText: 'Kunuz' }
];

const industries = ['All', 'E-commerce', 'SaaS', 'Education', 'Other'];
const industriesAr: Record<string, string> = {
  'All': 'الكل',
  'E-commerce': 'تجارة إلكترونية',
  'SaaS': 'أنظمة سحابية',
  'Education': 'تعليم وتدريب',
  'Other': 'مجالات أخرى'
};

const proofLayers = [
  {
    titleAr: 'رسالة واضحة تماماً',
    titleEn: 'Clear messaging',
    descriptionAr: 'الزائر يفهم النشاط والخدمة بسرعة خلال أول ٣ ثوان من فتح الصفحة.',
    descriptionEn: 'Visitors understand the business and service within the first 3 seconds.',
  },
  {
    titleAr: 'مصداقية ناضجة للشركة',
    titleEn: 'Mature Credibility',
    descriptionAr: 'الموقع يعكس صورة مؤسسية متكاملة تليق بعلامة تجارية مستقرة.',
    descriptionEn: 'The website displays a mature corporate image fitting a stable brand.',
  },
  {
    titleAr: 'سهولة مشاركة الروابط',
    titleEn: 'Easy link sharing',
    descriptionAr: 'إمكانية مشاركة الصفحات الفرعية مع الشركاء والممولين بثقة واعتزاز.',
    descriptionEn: 'Share subpages directly with partners or stakeholders with absolute pride.',
  },
  {
    titleAr: 'سلاسة فائقة وسرعة',
    titleEn: 'High Performance & Speed',
    descriptionAr: 'التصفح السلس والتحميل الفوري يصنعان تجربة مستخدم لا تُنسى.',
    descriptionEn: 'Seamless browsing and instant loading create an unforgettable UX.',
  },
];

const videoTestimonials = [
  {
    id: 1,
    titleAr: 'رأي المهندس أحمد السيد عن منصة الأكاديمية',
    titleEn: 'Eng. Ahmed El-Sayed on Academy Platform',
    thumbnail: '/images/projects/smart-educational-maps.webp',
    videoUrl: enrichmentMediaById['testimonials-client-call'].src,
    duration: '2:15'
  },
  {
    id: 2,
    titleAr: 'مراجعة متجر ملابس فاشن بوتيك',
    titleEn: 'Fashion Boutique Store Redesign Feedback',
    thumbnail: '/images/projects/tech-startup-landing.webp',
    videoUrl: enrichmentMediaById['about-team-review'].src,
    duration: '1:45'
  }
];

const TestimonialsPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => clientFacingText(isArabic ? arabic : english, lang);

  // States
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  usePageMetadata(getPageSeoByPath('/testimonials', lang));

  // Filtered testimonials based on selected industry mapping
  const filteredTestimonials = testimonials.filter(item => {
    if (selectedIndustry === 'All') return true;
    if (selectedIndustry === 'E-commerce') return item.companyEn.toLowerCase().includes('boutique') || item.companyEn.toLowerCase().includes('store') || item.companyEn.toLowerCase().includes('shop');
    if (selectedIndustry === 'SaaS') return item.companyEn.toLowerCase().includes('consulting') || item.companyEn.toLowerCase().includes('inc') || item.companyEn.toLowerCase().includes('saas');
    if (selectedIndustry === 'Education') return item.companyEn.toLowerCase().includes('academy') || item.companyEn.toLowerCase().includes('learning');
    return true; // default/other
  });

  const activeTestimonial = filteredTestimonials[activeFeedbackIndex] ?? filteredTestimonials[0] ?? testimonials[0];

  const handleNext = () => {
    setActiveFeedbackIndex(prev => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActiveFeedbackIndex(prev => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="section-shell pb-12 md:pb-20 pt-10 md:pt-14 lg:pt-20">
      <PageHero
        description={text(
          'قصص نجاح حقيقية يرويها شركاؤنا حول كيف ساعدتهم حلول نُطق وتصميماتها في تحسين التواجد الرقمي ومضاعفة ثقة عملائهم.',
          'Real success stories told by our partners about how Notaq designs and structures improved their public presence and client trust.'
        )}
        kicker={text('شركاء النجاح والثقة', 'Success Partners & Testimonials')}
        metrics={stats.slice(0, 3).map((item) => ({
          value: item.value,
          label: isArabic ? item.labelAr : item.labelEn,
        }))}
        primaryAction={{ label: isArabic ? 'ناقش فكرة مشروعك' : 'Discuss your project idea', to: localizePath('/contact/brief') }}
        profileId="testimonials"
        secondaryAction={{ label: isArabic ? 'استعرض المعرض' : 'Browse Gallery', to: localizePath('/gallery') }}
        title={text('شهادات وتقييمات عملاء نطق تعكس جودة التنفيذ والسرعة', 'Client stories that show how clean execution builds trust & conversion')}
      />

      <div className="mx-auto max-w-7xl">
        
        {/* Rating Breakdown & Partner Logo Marquee Row */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-4 md:gap-8 mb-12 md:mb-20 items-stretch">
          
          {/* Rating Summary & Breakdown Bars */}
          <div className="rounded-lg md:rounded-[2.2rem] border border-white/10 bg-white/[0.02] p-4 md:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">{text('تفاصيل تقييمات العملاء', 'Client Rating Audit')}</h3>
              </div>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">4.95</span>
                <span className="text-sm text-slate-500 font-bold">/ 5.0</span>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 ml-2">
                  100% {text('موثق', 'Verified')}
                </span>
              </div>

              {/* Progress bars per star */}
              <div className="space-y-2.5 w-full">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-10 text-slate-400 font-semibold">{row.stars} {text('نجوم', 'stars')}</span>
                    <div className="h-2 flex-grow bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-amber-400 rounded-full"
                      />
                    </div>
                    <span className="w-8 text-right text-slate-500 font-bold">{row.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-[10px] text-slate-500 leading-relaxed mt-6">
              {text('* تم تجميع التقييمات بناءً على مراجعات العملاء بعد التسليم الفعلي للمشروعات لعام ٢٠٢٥/٢٠٢٦.', '* Audited client reviews collected post-launch for the 2025/2026 fiscal cycle.')}
            </p>
          </div>

          {/* Endless Partner Logos Marquee */}
          <div className="rounded-lg md:rounded-[2.2rem] border border-white/10 bg-white/[0.01] p-4 md:p-8 backdrop-blur-md flex flex-col justify-between overflow-hidden">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">{text('العلامات التجارية التي تثق بنا', 'Brands that Trust Us')}</span>
              <h3 className="font-display text-lg md:text-xl font-bold text-white mb-6">
                {text('ساعدنا كبرى الشركات والناشئين في تحقيق أهدافهم', 'We helped major enterprises and startups achieve scale')}
              </h3>
            </div>

            {/* Marquee Row */}
            <div className="relative w-full flex overflow-x-hidden border-y border-white/5 py-6 bg-black/20 rounded-xl">
              <div className="animate-marquee flex gap-12 whitespace-nowrap text-lg font-bold text-slate-500 font-display">
                {partnerLogos.map((p, i) => (
                  <span key={i} className="hover:text-cyan-400 transition-colors uppercase tracking-widest">{p.logoText}</span>
                ))}
              </div>
              <div className="absolute top-0 animate-marquee2 flex gap-12 whitespace-nowrap text-lg font-bold text-slate-500 font-display" style={{ animationDelay: '15s' }}>
                {partnerLogos.map((p, i) => (
                  <span key={i} className="hover:text-cyan-400 transition-colors uppercase tracking-widest">{p.logoText}</span>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed mt-6 flex items-center gap-1.5 justify-center">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              {text('جميع شهادات ومراجعات العملاء مسجلة وموثقة بعقود رسمية.', 'All client statements are legally archived and authenticated.')}
            </p>
          </div>
        </div>

        <EditorialImageBreak imageId="strategy-room" variant="floating" reverse className="mt-10" />
        <PageImageShowcaseSection showcase={pageImageShowcases.testimonials} />

        {/* Dynamic Interactive Testimonial Slider / Carousel Section */}
        <div className="my-16 border-t border-white/10 pt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">{text('آراء مكتوبة وقابلة للفحص', 'Written Feedback')}</span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white">{text('تجارب حية من واقع تسليم المشاريع', 'Direct Feedback Post Delivery')}</h2>
          </div>

          {/* Industry Filter tags */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => { setSelectedIndustry(ind); setActiveFeedbackIndex(0); }}
                className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedIndustry === ind
                    ? 'bg-cyan-400 text-[#06090f] shadow-[0_0_15px_rgba(45,212,191,0.4)]'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:border-cyan-400/50 hover:text-white'
                }`}
              >
                {text(industriesAr[ind] || ind, ind)}
              </button>
            ))}
          </div>

          {/* Slider Container */}
          {filteredTestimonials.length > 0 ? (
            <div className="max-w-4xl mx-auto relative px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.nameEn}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="surface-card rounded-xl md:rounded-[2.5rem] border border-cyan-400/25 p-5 md:p-12 bg-[#080d15] relative"
                >
                  {/* Decorative big quote icon */}
                  <div className="absolute right-6 top-6 text-cyan-500/10 pointer-events-none">
                    <Quote className="w-24 h-24 stroke-current" />
                  </div>

                  <div className="relative z-10 space-y-3 md:space-y-6">
                    <p className="text-base md:text-2xl font-body leading-relaxed md:leading-relaxed text-white">
                      "{text(activeTestimonial.quoteAr, activeTestimonial.quoteEn)}"
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                      <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[9px] md:text-[10px] font-bold px-2.5 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-wider">
                        {text(activeTestimonial.highlightAr, activeTestimonial.highlightEn)}
                      </span>
                      <span className="bg-white/5 border border-white/10 text-slate-400 text-[9px] md:text-[10px] font-bold px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                        {text(activeTestimonial.companyAr, activeTestimonial.companyEn)}
                      </span>
                    </div>

                    {/* Author block */}
                    <div className="flex items-center gap-3 md:gap-4 border-t border-white/5 pt-3 md:pt-6">
                      <div className="h-10 md:h-12 w-10 md:w-12 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center font-black text-white text-sm md:text-base">
                        {text(activeTestimonial.avatarAr, activeTestimonial.avatarEn)}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm md:text-base">{text(activeTestimonial.nameAr, activeTestimonial.nameEn)}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{text(activeTestimonial.roleAr, activeTestimonial.roleEn)}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Prev / Next Controls */}
              {filteredTestimonials.length > 1 && (
                <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
                  <button 
                    onClick={handlePrev}
                    className="p-2 md:p-3 rounded-full border border-white/10 bg-[#06090f] text-white hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all shadow-lg"
                  >
                    <ArrowLeft className="h-3.5 md:h-4 w-3.5 md:w-4" />
                  </button>
                  <span className="text-xs md:text-sm font-semibold text-slate-500 flex items-center">
                    {activeFeedbackIndex + 1} / {filteredTestimonials.length}
                  </span>
                  <button 
                    onClick={handleNext}
                    className="p-2 md:p-3 rounded-full border border-white/10 bg-[#06090f] text-white hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all shadow-lg"
                  >
                    <ArrowRight className="h-3.5 md:h-4 w-3.5 md:w-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-10 bg-white/[0.01] border border-white/5 rounded-2xl max-w-4xl mx-auto">
              <p className="text-xs text-slate-400">{text('لا توجد مراجعات حالية في هذا القطاع.', 'No audited reviews found in this industry filter.')}</p>
            </div>
          )}
        </div>

        {/* Video Testimonials Section */}
        <div className="my-20 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">{text('مراجعات مرئية ومسموعة', 'Video Reviews')}</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{text('شهادات مسجلة بالفيديو من شركاء العمل', 'Recorded Video Stories from Clients')}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id} 
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#06090f] aspect-video cursor-pointer shadow-2xl"
                onClick={() => setActiveVideoUrl(video.videoUrl)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors flex flex-col justify-between p-5" />
                
                {/* Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-cyan-400 text-black p-4 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end text-xs">
                  <p className="font-bold text-white pr-4 leading-normal">{text(video.titleAr, video.titleEn)}</p>
                  <span className="bg-black/60 px-2.5 py-1 rounded text-slate-300 font-semibold">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideoUrl && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoUrl(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black"
              >
                <button 
                  onClick={() => setActiveVideoUrl(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full border border-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
                <video 
                  src={activeVideoUrl} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corporate Trust Cards */}
        <div className="my-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {proofLayers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="surface-card rounded-[1.6rem] p-5 border border-white/10 flex flex-col justify-between bg-white/[0.01]"
            >
              <div>
                <div className="inline-flex rounded-xl bg-cyan-400/10 p-2 text-cyan-300 mb-4">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-2">{text(layer.titleAr, layer.titleEn)}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{text(layer.descriptionAr, layer.descriptionEn)}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsPage;
