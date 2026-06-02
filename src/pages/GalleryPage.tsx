import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Play, X, Image as ImageIcon, Sparkles, ChevronLeft, ChevronRight, Eye, Calendar, Tag, ShieldCheck, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import EditorialImageBreak from '../components/EditorialImageBreak';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

// Extended portfolio items with rich metadata (tools, ratings, dates, sizes for masonry)
const portfolioItems = [
  {
    id: 1,
    type: 'image',
    title: 'E-commerce Platform Design',
    titleAr: 'تصميم منصة تجارة إلكترونية',
    category: 'E-commerce',
    categoryAr: 'تجارة إلكترونية',
    image: '/images/Gemini_Generated_Image_9ooasm9ooasm9ooa%20(1).png',
    description: 'Modern e-commerce interface with seamless checkout experience and HSL system.',
    descriptionAr: 'واجهة تجارة إلكترونية حديثة مع تجربة دفع سلسة ونظام ألوان متناسق.',
    tools: ['Figma', 'React', 'Tailwind'],
    date: '2026-03',
    rating: 4.9,
    size: 'large', // large/medium/small for masonry
  },
  {
    id: 2,
    type: 'image',
    title: 'Dashboard UI System',
    titleAr: 'نظام واجهة لوحة التحكم',
    category: 'SaaS',
    categoryAr: 'أنظمة سحابية',
    image: '/images/projects/tech-startup-landing.webp',
    description: 'Enterprise dashboard with advanced charts and analytics widget system.',
    descriptionAr: 'لوحة تحكم للمؤسسات مع رسومات بيانية متقدمة ونظام مربعات ذكي.',
    tools: ['Next.js', 'Framer Motion', 'd3.js'],
    date: '2026-04',
    rating: 4.8,
    size: 'medium',
  },
  {
    id: 3,
    type: 'image',
    title: 'Educational Platform',
    titleAr: 'منصة تعليمية متقدمة',
    category: 'Education',
    categoryAr: 'تعليم وتدريب',
    image: '/images/projects/smart-educational-maps.webp',
    description: 'Interactive learning maps platform supporting 50K+ secondary students.',
    descriptionAr: 'خرائط تعليمية تفاعلية تخدم أكثر من 50 ألف طالب في المرحلة الثانوية.',
    tools: ['TypeScript', 'WebGL', 'Node.js'],
    date: '2026-02',
    rating: 5.0,
    size: 'medium',
  },
  {
    id: 4,
    type: 'video',
    title: 'Design Process Video',
    titleAr: 'فيديو عملية التصميم',
    category: 'Behind-the-scenes',
    categoryAr: 'كواليس العمل',
    thumbnail: '/images/projects/worklog.webp',
    videoUrl: enrichmentMediaById['digital-workflow'].src,
    description: 'Behind the scenes walkthrough of our daily UX design sprint and wireframes.',
    descriptionAr: 'نظرة سريعة وراء الكواليس لعملية هندسة واجهات المستخدم والتخطيط اليومي.',
    tools: ['Premiere Pro', 'After Effects'],
    date: '2026-05',
    rating: 4.7,
    size: 'large',
  },
  {
    id: 5,
    type: 'image',
    title: 'Mobile App Interface',
    titleAr: 'واجهة تطبيق الجوال',
    category: 'Mobile',
    categoryAr: 'تطبيقات جوال',
    image: '/images/projects/international-ecommerce-platform.webp',
    description: 'Global iOS and Android app optimized for loading speed and micro-interactions.',
    descriptionAr: 'تطبيق هاتف ذكي عالمي محسن لسرعة التحميل والتفاعلات الدقيقة.',
    tools: ['Flutter', 'Figma', 'Dart'],
    date: '2026-01',
    rating: 4.9,
    size: 'small',
  },
  {
    id: 6,
    type: 'video',
    title: 'Development Workflow',
    titleAr: 'سير عمل التطوير',
    category: 'Process',
    categoryAr: 'سير العمل',
    thumbnail: '/images/projects/kids-geo-dashboard.webp',
    videoUrl: enrichmentMediaById['projects-interface-scroll'].src,
    description: 'Automated CI/CD testing and React components optimization pipeline.',
    descriptionAr: 'اختبارات التشغيل التلقائي وتحسين كفاءة أكواد ريأكت في بيئة الإنتاج.',
    tools: ['Docker', 'Vite', 'Playwright'],
    date: '2026-04',
    rating: 4.9,
    size: 'medium',
  }
];

const categories = ['All', 'E-commerce', 'SaaS', 'Education', 'Mobile', 'Behind-the-scenes', 'Process'];
const categoriesAr: Record<string, string> = {
  'All': 'الكل',
  'E-commerce': 'تجارة إلكترونية',
  'SaaS': 'أنظمة سحابية',
  'Education': 'تعليم وتدريب',
  'Mobile': 'تطبيقات جوال',
  'Behind-the-scenes': 'كواليس العمل',
  'Process': 'سير العمل'
};

// 3D Tilt Card component for interactive hover effects
const TiltCard = ({ children, className, onClick }: { children: React.ReactNode; className: string; onClick?: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};

// Interactive Before/After image slider component
const BeforeAfterSlider = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="my-16">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          {isArabic ? 'مقارنة حية للتصميم' : 'Live Design Comparison'}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-2">
          {isArabic ? 'منصة كنوز مصر التفاعلية: قبل وبعد التحديث' : 'Kunuz Misr Interactive Maps: Before & After Redesign'}
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
          {isArabic 
            ? 'اسحب المنزلق في المنتصف لمقارنة كيف قمنا بإعادة هيكلة واجهة منصة الخرائط لتبدو عصرية وأسهل للقراءة.' 
            : 'Drag the slider in the center to compare how we restructured the map platform interface to look modern and readable.'}
        </p>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative w-full h-[350px] md:h-[480px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-[0_20px_50px_rgba(6,9,15,0.8)]"
      >
        {/* Before State (Right side or full back) */}
        <div className="absolute inset-0">
          <img 
            src="/images/projects/kunuz-misr-interactive-maps.webp" 
            alt="Before Redesign" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-red-950/70 border border-red-500/30 text-red-300 text-xs px-3 py-1.5 rounded-full font-bold backdrop-blur-md">
            {isArabic ? 'قبل التطوير' : 'Before (Legacy)'}
          </div>
        </div>

        {/* After State (Left side with width clip) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src="/images/projects/kunuz-misr-kids-platform.webp" 
            alt="After Redesign" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs px-3 py-1.5 rounded-full font-bold backdrop-blur-md">
            {isArabic ? 'بعد التطوير (نطق)' : 'After Redesign (Nutq)'}
          </div>
        </div>

        {/* Slider Divider Bar */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-violet-400 to-cyan-400 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#06090f] border-2 border-cyan-400 flex items-center justify-center shadow-lg text-cyan-400">
            <Sparkles className="h-4 w-4 animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handlePrevItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNextItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  usePageMetadata(getPageSeoByPath('/gallery', lang));

  return (
    <div className="relative pt-10 pb-16 md:pt-24 md:pb-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyan-600/10 blur-[220px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-violet-600/10 blur-[220px] rounded-full animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-6">
            <ImageIcon className="h-5 w-5 text-cyan-400" />
            {text('معرض الإلهام والتفاصيل الرقمية', 'Visual Inspiration & Digital Details')}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {text('فن تصميم', 'Art of designing')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {text('التجارب والواجهات البصرية', 'experiences & interactive interfaces')}
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto">
            {text(
              'استكشف معرضنا التفاعلي الذي يعكس الدقة الجمالية، الهندسة الدقيقة للبرمجيات، ومخرجات وراء الكواليس لبناء هويات رقمية راسخة.',
              'Explore our interactive gallery showing aesthetic precision, clean software engineering, and behind-the-scenes assets.'
            )}
          </p>
        </motion.div>

        <EditorialImageBreak imageId="brief-room" variant="wide" />
        
        {/* Before / After Slider Section */}
        <BeforeAfterSlider />

        <PageImageShowcaseSection showcase={pageImageShowcases.gallery} />

        {/* Category Tag Cloud Filter */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4">
            {text('تصفية بالوسوم الذكية', 'Filter by smart tags')}
          </span>
          <div className="flex flex-wrap gap-2.5 justify-center max-w-3xl mx-auto">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-[#06090f] shadow-[0_0_20px_rgba(45,212,191,0.4)] font-bold'
                    : 'bg-white/[0.02] border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-white'
                }`}
              >
                <Tag className="h-3.5 w-3.5 opacity-60" />
                {text(categoriesAr[cat] || cat, cat)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Interactive Gallery Grid */}
        <div className="columns-2 md:columns-2 lg:columns-3 gap-2 md:gap-4 space-y-2.5 md:space-y-5 mb-16 md:mb-20">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ delay: idx * 0.05 }}
                className="break-inside-avoid"
              >
                <TiltCard
                  onClick={() => setSelectedItemIndex(idx)}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer border border-white/10 bg-[#06090f] shadow-lg flex flex-col"
                >
                  {/* Thumbnail Wrapper */}
                  <div className={`relative overflow-hidden w-full ${
                    item.size === 'large' ? 'h-[220px] md:h-[360px]' : item.size === 'medium' ? 'h-[160px] md:h-[260px]' : 'h-[130px] md:h-[200px]'
                  }`}>
                    <img
                      src={item.type === 'image' ? item.image : item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Overlay with Eye / Play Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-cyan-400 rounded-full p-4 shadow-[0_0_25px_rgba(45,212,191,0.5)] text-[#06090f]"
                      >
                        {item.type === 'video' ? (
                          <Play className="h-6 w-6 fill-current" />
                        ) : (
                          <Eye className="h-6 w-6" />
                        )}
                      </motion.div>
                    </div>

                    {/* Media Type Icon Badge (Top Left) */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-white text-xs flex items-center gap-1.5">
                      {item.type === 'video' ? <Play className="h-3.5 w-3.5 text-cyan-400" /> : <ImageIcon className="h-3.5 w-3.5 text-cyan-400" />}
                      <span className="font-semibold text-[10px] uppercase tracking-wider">{item.type}</span>
                    </div>

                    {/* Rating Badge (Top Right) */}
                    <div className="absolute top-4 right-4 bg-amber-500/90 text-black px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      {item.rating.toFixed(1)}
                    </div>
                  </div>

                  {/* Card Content & Stats Bar */}
                  <div className="p-2.5 md:p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-cyan-400 font-bold mb-1 md:mb-1.5 block">
                        {text(item.categoryAr, item.category)}
                      </span>
                      <h3 className="text-xs md:text-sm font-bold text-white mb-1.5 md:mb-2 leading-tight md:leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2 md:line-clamp-none">
                        {text(item.titleAr, item.title)}
                      </h3>
                      <p className="text-[10px] md:text-[11px] text-slate-400 leading-4 md:leading-relaxed mb-2 md:mb-3 line-clamp-2 md:line-clamp-none">
                        {text(item.descriptionAr, item.description)}
                      </p>
                    </div>

                    {/* Stats Footer inside Card */}
                    <div className="border-t border-white/5 pt-2.5 md:pt-4 flex flex-wrap items-center justify-between gap-1.5 md:gap-2 text-[9px] md:text-[10px] text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5 text-slate-600" />
                        <span className="hidden md:inline">{item.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-0.5 md:gap-1">
                        {item.tools.slice(0, 2).map((tool, i) => (
                          <span key={i} className="bg-white/[0.04] border border-white/10 px-1.5 md:px-2 py-0.25 md:py-0.5 rounded text-slate-300 font-medium text-[8px] md:text-xs hidden sm:inline-block">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Lightbox / Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItemIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            >
              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-[#080d15] shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]"
              >
                {/* Media Presentation Side */}
                <div className="relative flex-grow bg-black flex items-center justify-center min-h-[300px] md:min-h-[480px]">
                  {selectedItem.type === 'image' ? (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-contain"
                    />
                  ) : (
                    <video
                      src={selectedItem.videoUrl}
                      title={selectedItem.title}
                      controls
                      autoPlay
                      className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-contain"
                    />
                  )}

                  {/* Left / Right Nav Arrows inside Lightbox */}
                  <button
                    onClick={handlePrevItem}
                    className="absolute left-4 p-3 bg-black/50 hover:bg-cyan-500 hover:text-black rounded-full border border-white/10 text-white transition-all backdrop-blur-md shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={handleNextItem}
                    className="absolute right-4 p-3 bg-black/50 hover:bg-cyan-500 hover:text-black rounded-full border border-white/10 text-white transition-all backdrop-blur-md shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Sidebar Details Panel */}
                <div className="w-full md:w-[350px] p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between bg-[#080d15]">
                  <div>
                    {/* Header Info */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-bold text-cyan-300">
                        {text(selectedItem.categoryAr, selectedItem.category)}
                      </span>
                      <button
                        onClick={() => setSelectedItemIndex(null)}
                        className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
                      >
                        <X className="h-5 w-5 text-white" />
                      </button>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {text(selectedItem.titleAr, selectedItem.title)}
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {text(selectedItem.descriptionAr, selectedItem.description)}
                    </p>

                    {/* Metadata Checklist */}
                    <div className="space-y-3.5 border-t border-white/5 pt-6">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">{text('تاريخ الإنشاء', 'Date Published')}</span>
                        <span className="text-white font-medium">{selectedItem.date}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">{text('معدل تقييم العمل', 'Quality Rating')}</span>
                        <span className="text-amber-400 font-bold flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-amber-400" />
                          {selectedItem.rating.toFixed(1)} / 5.0
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">{text('نظام التراخيص', 'Usage License')}</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {text('مرخص ومحمي', 'Secured & Active')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tools Stack inside Modal Sidebar */}
                  <div className="mt-8 border-t border-white/5 pt-6">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-3">
                      {text('الأدوات والتقنيات المستخدمة', 'Tools & Technologies Used')}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.tools.map((tool, i) => (
                        <span key={i} className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded text-xs font-semibold">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
