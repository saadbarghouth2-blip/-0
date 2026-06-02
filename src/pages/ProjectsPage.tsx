import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpLeft, BarChart3, Building2, LayoutGrid, List, Search, SlidersHorizontal, Sparkles, Star, Tag, X } from 'lucide-react';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import EditorialImageBreak from '../components/EditorialImageBreak';
import PageHero from '../components/PageHero';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import { projects } from '../data/portfolio';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { servicePackages, trustSignals } from '../data/company';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { cn } from '../lib/utils';

// Helper to paginate items
const paginateItems = <T,>(items: T[], pageSize: number) => {
  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += pageSize) {
    pages.push(items.slice(index, index + pageSize));
  }
  return pages;
};

const ProjectsPage = () => {
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(0);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const gridRef = useRef<HTMLDivElement | null>(null);

  const copy = {
    kicker: lang === 'ar' ? 'نماذج تنفيذ حقيقية ومشاريع حية' : 'Real project examples & live sites',
    title: lang === 'ar'
      ? 'مشاريع حية توضّح مستوى الأداء والسرعة والجودة التي تحصل عليها'
      : 'Live work that shows the level of speed, performance, and details you expect',
    description: lang === 'ar'
      ? 'أعمالنا تجيب عن تساؤلات أصحاب القرار: هل الواجهة سريعة؟ هل التصميم يعكس هوية العميل؟ استكشف مشاريعنا المفتوحة التي تخدم آلاف المستخدمين يومياً.'
      : 'Our portfolio answers the hard questions: Is the interface fast? Does the design fit the identity? Explore our live applications that serve thousands of users daily.',
    previous: lang === 'ar' ? 'السابق' : 'Previous',
    next: lang === 'ar' ? 'التالي' : 'Next',
    goToPage: lang === 'ar' ? 'اذهب إلى الصفحة' : 'Go to page',
  };

  usePageMetadata(getPageSeoByPath('/projects', lang));

  // Extract all categories and tech stacks from project list for filters
  const categories = useMemo(() => {
    const list = new Set<string>();
    projects.forEach(p => {
      if (p.category) list.add(p.category);
    });
    return ['All', ...Array.from(list)];
  }, []);

  const technologies = useMemo(() => {
    const list = new Set<string>();
    projects.forEach(p => {
      if (p.techStack) p.techStack.forEach(t => list.add(t));
    });
    return ['All', ...Array.from(list).slice(0, 8)]; // top 8 tech tags
  }, []);

  // Filter project logic
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const title = isArabic ? project.title : project.englishTitle ?? project.title;
      const excerpt = isArabic ? project.excerpt : project.englishExcerpt ?? project.excerpt;
      const category = isArabic ? project.category : project.englishCategory ?? project.category;
      
      const matchesSearch = 
        title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All' || 
        project.category === selectedCategory || 
        project.englishCategory === selectedCategory;

      const matchesTech = 
        selectedTech === 'All' || 
        (project.techStack && project.techStack.includes(selectedTech));

      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchQuery, selectedCategory, selectedTech, isArabic]);

  // Featured Spotlight Project (Take the first project or one with high rating/complexity)
  const spotlightProject = useMemo(() => {
    return projects[0]; // main highlighted project
  }, []);

  // Paginated filtered projects
  const PAGE_SIZE = 6;
  const paginatedPages = useMemo(() => {
    return paginateItems(filteredProjects, PAGE_SIZE);
  }, [filteredProjects]);

  const totalPages = paginatedPages.length;
  const visibleProjects = paginatedPages[currentPage] ?? paginatedPages[0] ?? [];
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const goToPage = (pageIndex: number) => {
    setCurrentPage(Math.max(0, Math.min(pageIndex, totalPages - 1)));
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const PrevIcon = isArabic ? ArrowRight : ArrowLeft;
  const NextIcon = isArabic ? ArrowLeft : ArrowRight;
  const pageNumberFormatter = new Intl.NumberFormat(isArabic ? 'ar-EG' : 'en-US');

  return (
    <section className="relative overflow-x-hidden pb-24 pt-10 md:min-h-screen md:pt-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="mobile-ornament absolute left-[-8%] top-12 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="mobile-ornament absolute bottom-[-8%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <PageHero
        description={copy.description}
        kicker={copy.kicker}
        metrics={[
          { value: `${projects.length}+`, label: isArabic ? 'مشاريع حقيقية منفذة' : 'live projects built' },
          { value: `${servicePackages.length}`, label: isArabic ? 'تخصصات الخدمة' : 'service packages' },
          { value: `${trustSignals.length}+`, label: isArabic ? 'دلائل كفاءة وثقة' : 'trust indicators' },
        ]}
        primaryAction={{ label: isArabic ? 'ابدأ تصميم مشروعك' : 'Start your project brief', to: localizePath('/contact/brief') }}
        profileId="projects"
        secondaryAction={{ label: isArabic ? 'عرض دراسات الحالة' : 'Explore case studies', to: localizePath('/case-studies') }}
        title={copy.title}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Spotlight Featured Banner */}
        {spotlightProject && searchQuery === '' && selectedCategory === 'All' && selectedTech === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-16 mt-6 md:mt-8 rounded-xl md:rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-950/20 to-violet-950/20 p-4 md:p-10 relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-8 items-center">
              <div className="space-y-2 md:space-y-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-[11px] md:text-xs font-bold">
                  <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  {text('مشروع متميز مُميّز', 'Featured Spotlight Project')}
                </span>
                <h2 className="font-display text-lg md:text-4xl font-bold text-white">
                  {text(spotlightProject.title, spotlightProject.englishTitle ?? spotlightProject.title)}
                </h2>
                <p className="text-slate-300 text-xs md:text-base leading-relaxed">
                  {text(spotlightProject.excerpt, spotlightProject.englishExcerpt ?? spotlightProject.excerpt)}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                  {spotlightProject.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="bg-white/5 border border-white/10 text-slate-300 px-2.5 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2 md:pt-4">
                  <Link 
                    to={localizePath(`/projects/${spotlightProject.slug}`)} 
                    className="btn-primary inline-flex items-center gap-2 text-xs md:text-sm shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                  >
                    {text('استكشف التفاصيل', 'Explore details')}
                    <ArrowUpLeft className="h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[16/10] md:aspect-[16/10] rounded-lg md:rounded-2xl overflow-hidden border border-white/10 group shadow-2xl hidden md:block">
                <img 
                  src={spotlightProject.coverImage} 
                  alt={spotlightProject.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Corporate Trust Info */}
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-cyan-400/8 via-white/[0.03] to-emerald-400/8 p-5 md:rounded-[2.2rem] md:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/80">
                  {isArabic ? 'كيف نهندس أعمالنا البرمجية؟' : 'How we engineer code'}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-white md:text-2xl">
                  {isArabic ? 'بناء نظام مكونات مرن ونظيف قابل لإعادة الاستخدام' : 'Clean reusable component architectures'}
                </h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              {servicePackages.map((pack) => (
                <div key={pack.name.en} className="rounded-[1.15rem] border border-white/8 bg-[#06090f]/45 p-4 flex flex-col justify-between">
                  <p className="font-display text-sm font-bold text-white mb-2">{isArabic ? pack.name.ar : pack.name.en}</p>
                  <p className="text-slate-500 leading-normal">{isArabic ? pack.bestFor.ar : pack.bestFor.en}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5 md:rounded-[2.2rem] md:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-2xl bg-amber-300/10 p-3 text-amber-200">
                  <Building2 className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-white md:text-2xl">
                  {isArabic ? 'مؤشرات الكفاءة البرمجية' : 'Engineering Trust Signals'}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {trustSignals.slice(0, 4).map((signal) => (
                  <div key={signal.label.en} className="rounded-[1rem] border border-white/8 bg-[#06090f]/45 p-3">
                    <p className="text-xs font-bold text-cyan-200">{signal.value}</p>
                    <p className="mt-1 text-[10px] leading-relaxed text-slate-500">{isArabic ? signal.label.ar : signal.label.en}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link className="btn-secondary mt-5 w-full text-xs font-bold text-center" to={localizePath('/case-studies')}>
              {isArabic ? 'قراءة دراسات الحالة المتعمقة' : 'Read case studies'}
            </Link>
          </motion.div>
        </div>

        <EditorialImageBreak imageId="brand-hero" variant="proof" className="mt-8" />
        <PageImageShowcaseSection showcase={pageImageShowcases.projects} />

        {/* Dynamic Search & Search Bar Panel */}
        <div ref={gridRef} className="mt-12 md:mt-16 border-t border-white/10 pt-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            
            {/* Left: View Mode Toggle & Counter */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400 font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                {text(`${filteredProjects.length} مشروع مطابق`, `${filteredProjects.length} matching projects`)}
              </span>

              {/* Grid / List Mode */}
              <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 text-slate-400">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn("p-1.5 rounded-lg transition-colors", viewMode === 'grid' && "bg-cyan-400 text-black shadow")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={cn("p-1.5 rounded-lg transition-colors", viewMode === 'list' && "bg-cyan-400 text-black shadow")}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right: Search Input & Toggle Filters button */}
            <div className="flex items-center gap-3">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(0); }}
                  placeholder={text('ابحث باسم المشروع...', 'Search by project...')}
                  className="w-full bg-[#06090f]/50 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>

              <button 
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={cn(
                  "p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors",
                  showAdvancedFilters ? "bg-cyan-500/10 border-cyan-400 text-cyan-300" : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                )}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">{text('فلاتر متقدمة', 'Filters')}</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters Drawer/Box */}
          <AnimatePresence>
            {showAdvancedFilters && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border border-white/10 bg-white/[0.01] rounded-2xl p-5 mb-8 text-xs space-y-5"
              >
                {/* Category Tags */}
                <div>
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mb-2.5">{text('تصفية بالقسم', 'Filter by category')}</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setCurrentPage(0); }}
                        className={cn(
                          "px-3 py-1.5 rounded-full border transition-all font-semibold",
                          selectedCategory === cat 
                            ? "bg-cyan-400 text-black border-cyan-400" 
                            : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div>
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mb-2.5">{text('تصفية بلغة البرمجة / البيئة', 'Filter by technology stack')}</span>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                      <button
                        key={tech}
                        onClick={() => { setSelectedTech(tech); setCurrentPage(0); }}
                        className={cn(
                          "px-3 py-1.5 rounded-full border transition-all font-semibold",
                          selectedTech === tech 
                            ? "bg-cyan-400 text-black border-cyan-400" 
                            : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                        )}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Project List / Grid Rendering */}
          <div className="min-h-[400px]">
            {visibleProjects.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentPage}-${viewMode}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    viewMode === 'grid' 
                      ? "grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3" 
                      : "space-y-4 md:space-y-6 max-w-4xl mx-auto"
                  )}
                >
                  {visibleProjects.map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ProjectCard linkMode="live" project={project} compact={viewMode === 'list'} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center py-20 bg-white/[0.01] border border-white/5 rounded-3xl">
                <SlidersHorizontal className="h-10 w-10 text-slate-600 mx-auto mb-4" />
                <h4 className="font-display text-base font-bold text-white mb-1">{text('لا توجد نتائج مطابقة', 'No matching results')}</h4>
                <p className="text-xs text-slate-500">{text('يرجى تعديل الفلاتر أو إدخال مصطلح بحث آخر.', 'Try adjusting filters or changing search query.')}</p>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 ? (
            <div className="mt-12 flex items-center justify-between gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-3 py-3 md:px-4">
              <button
                aria-label={copy.previous}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-35"
                disabled={!canGoPrev}
                onClick={() => goToPage(currentPage - 1)}
                type="button"
              >
                <PrevIcon className="h-4 w-4" />
                <span className="hidden sm:inline">{copy.previous}</span>
              </button>

              <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
                {paginatedPages.map((_, pageIndex) => (
                  <button
                    aria-current={currentPage === pageIndex ? 'page' : undefined}
                    aria-label={`${copy.goToPage} ${pageIndex + 1}`}
                    className={cn(
                      'inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-all',
                      currentPage === pageIndex
                        ? 'border-cyan-300 bg-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(103,232,249,0.2)]'
                        : 'border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06]',
                    )}
                    key={`project-page-${pageIndex}`}
                    onClick={() => goToPage(pageIndex)}
                    type="button"
                  >
                    {pageNumberFormatter.format(pageIndex + 1)}
                  </button>
                ))}
              </div>

              <button
                aria-label={copy.next}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-35"
                disabled={!canGoNext}
                onClick={() => goToPage(currentPage + 1)}
                type="button"
              >
                <span className="hidden sm:inline">{copy.next}</span>
                <NextIcon className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
