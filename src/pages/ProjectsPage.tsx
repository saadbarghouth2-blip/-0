import { motion } from 'framer-motion';
import { Search, ShieldCheck, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import ProjectCard from '../components/ProjectCard';
import { visibleProjects } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => clientFacingText(isArabic ? arabic : english, lang);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  usePageMetadata(getPageSeoByPath('/projects', lang));

  const orderedProjects = useMemo(
    () => [...visibleProjects].sort((left, right) => Number(right.showcaseGroup === 'latest') - Number(left.showcaseGroup === 'latest')),
    [],
  );

  const categories = useMemo(() => {
    const values = new Map<string, string>();
    orderedProjects.forEach((project) => {
      values.set(project.category, isArabic ? project.category : project.englishCategory ?? project.category);
    });
    return [...values.entries()];
  }, [isArabic, orderedProjects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase(isArabic ? 'ar' : 'en');

    return orderedProjects.filter((project) => {
      const title = isArabic ? project.title : project.englishTitle ?? project.title;
      const excerpt = isArabic ? project.excerpt : project.englishExcerpt ?? project.excerpt;
      const searchableText = `${title} ${excerpt} ${project.category} ${project.englishCategory ?? ''} ${project.techStack.join(' ')}`.toLocaleLowerCase(isArabic ? 'ar' : 'en');
      const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [isArabic, orderedProjects, searchQuery, selectedCategory]);

  return (
    <section className="relative min-h-screen overflow-x-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.15),transparent_38%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_34%)]" />

      <div className="mx-auto max-w-[92rem] px-3 sm:px-5 lg:px-8">
        <header className="grid gap-4 border-b border-white/10 pb-5 md:grid-cols-[1fr_auto] md:items-end md:gap-8 md:pb-7">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-black text-cyan-100 md:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                {text('نماذج مختارة متاحة للنشر', 'Selected work available to share')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1.5 text-[10px] font-bold text-violet-100 md:text-xs">
                <ShieldCheck className="h-3.5 w-3.5" />
                {text('الخصوصية المهنية جزء من عملنا', 'Professional privacy is part of our work')}
              </span>
            </div>

            <h1 className="mt-3 font-display text-2xl font-black leading-tight text-white sm:text-3xl md:mt-4 md:text-5xl">
              {text('مشاريع حية يمكنك استكشافها مباشرةً', 'Live projects ready to explore')}
            </h1>
            <p className="mt-2 max-w-3xl text-xs leading-6 text-slate-400 sm:text-sm md:mt-3 md:text-base md:leading-8">
              {text(
                'هنا نعرض النماذج التي يمكن مشاركتها علنًا. بعض التجارب الأخرى تبقى ضمن نطاق الخصوصية المهنية، بينما تعكس هذه المجموعة تنوع التنفيذ وجودة التفاصيل.',
                'This gallery includes work cleared for public sharing. Other collaborations remain professionally private, while these examples reflect the range and quality of our delivery.',
              )}
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              aria-label={text('البحث في المشاريع', 'Search projects')}
              className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#07111c]/88 pe-10 ps-10 text-sm text-white outline-none transition focus:border-cyan-300/45 focus:ring-2 focus:ring-cyan-300/10"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={text('ابحث باسم المشروع أو المجال', 'Search by project or field')}
              type="search"
              value={searchQuery}
            />
            {searchQuery ? (
              <button
                aria-label={text('مسح البحث', 'Clear search')}
                className="absolute end-2.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/10 hover:text-white"
                onClick={() => setSearchQuery('')}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </header>

        <div className="sticky top-[3.55rem] z-30 -mx-3 border-b border-white/8 bg-[#06090f]/92 px-3 py-2.5 backdrop-blur-xl sm:-mx-5 sm:px-5 md:top-[4.4rem] lg:-mx-8 lg:px-8">
          <div aria-label={text('تصفية المشاريع حسب المجال', 'Filter projects by category')} className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              className={`min-h-9 shrink-0 rounded-full border px-3.5 text-[11px] font-black transition md:text-xs ${
                selectedCategory === 'all'
                  ? 'border-cyan-300 bg-cyan-300 text-[#031014]'
                  : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:text-white'
              }`}
              onClick={() => setSelectedCategory('all')}
              type="button"
            >
              {text('كل المشاريع', 'All projects')}
            </button>
            {categories.map(([category, label]) => (
              <button
                className={`min-h-9 shrink-0 rounded-full border px-3.5 text-[11px] font-bold transition md:text-xs ${
                  selectedCategory === category
                    ? 'border-cyan-300 bg-cyan-300 text-[#031014]'
                    : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:text-white'
                }`}
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-3 md:pt-5">
          {filteredProjects.length ? (
            <motion.div layout className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project) => (
                <motion.div key={project.slug} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <ProjectCard compact linkMode="live" project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-5 py-16 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-600" />
              <h2 className="mt-4 font-display text-xl font-bold text-white">{text('لا توجد نتائج مطابقة', 'No matching projects')}</h2>
              <button className="mt-4 rounded-full bg-cyan-300 px-5 py-2 text-sm font-black text-[#031014]" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} type="button">
                {text('عرض كل المشاريع', 'Show all projects')}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
