import { ArrowUp, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

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
  const [showScrollTop, setShowScrollTop] = useState(false);

  usePageMetadata(getPageSeoByPath('/projects', lang));

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sort best featured projects first (flagship projects with custom assets & case studies)
  const orderedProjects = useMemo(() => {
    return [...visibleProjects].sort((left, right) => {
      const leftScore = (left.featured ? 10 : 0) + (left.coverImage.startsWith('/images/') ? 5 : 0);
      const rightScore = (right.featured ? 10 : 0) + (right.coverImage.startsWith('/images/') ? 5 : 0);
      return rightScore - leftScore;
    });
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase(isArabic ? 'ar' : 'en');

    return orderedProjects.filter((project) => {
      const title = isArabic ? project.title : project.englishTitle ?? project.title;
      const excerpt = isArabic ? project.excerpt : project.englishExcerpt ?? project.excerpt;
      const searchableText = `${title} ${excerpt} ${project.category} ${project.englishCategory ?? ''} ${project.techStack.join(' ')}`.toLocaleLowerCase(isArabic ? 'ar' : 'en');

      return !normalizedQuery || searchableText.includes(normalizedQuery);
    });
  }, [isArabic, orderedProjects, searchQuery]);

  return (
    <section className="projects-page relative min-h-screen overflow-x-hidden bg-slate-50/70 pb-16 pt-16 md:pb-24 md:pt-24">
      {/* Soft Cyan Ambient Glow Header Backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_70%)]" />

      <div className="projects-page-inner mx-auto max-w-[84rem] px-3 sm:px-6 lg:px-8">
        {/* Centered Page Header */}
        <header className="mx-auto flex max-w-3xl flex-col items-center justify-center border-b border-teal-200/60 pb-8 text-center md:pb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-4 py-1.5 text-xs font-black text-white shadow-md shadow-teal-600/20 md:text-sm">
            {text('معرض الأعمال الحية', 'Live Portfolio Showcase')}
          </span>

          <h1 className="mt-4 font-display text-2xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            {text('مشاريع حية يمكنك استكشافها مباشرة', 'Live projects ready to explore')}
          </h1>

          <p className="mt-3 max-w-xl text-center text-xs font-semibold leading-relaxed text-slate-700 sm:text-sm md:text-base md:leading-7">
            {text(
              'مجموعة مختارة من المواقع والمنصات والتجارب الرقمية التي نفذناها بعناية.',
              'A selected collection of websites, platforms, and digital experiences crafted with care.',
            )}
          </p>

          {/* Centered Search Bar with High Contrast */}
          <div className="relative mt-7 w-full max-w-md">
            <Search className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-teal-600" />
            <input
              aria-label={text('البحث في المشاريع', 'Search projects')}
              className="min-h-12 w-full rounded-2xl border-2 border-teal-500/30 bg-white pe-11 ps-12 text-xs font-medium text-slate-900 placeholder-slate-400 shadow-md outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-500/15 sm:text-sm"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={text('ابحث باسم المشروع أو المجال...', 'Search projects by name or domain...')}
              type="search"
              value={searchQuery}
            />
            {searchQuery ? (
              <button
                aria-label={text('مسح البحث', 'Clear search')}
                className="absolute end-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-slate-400 transition hover:text-slate-900"
                onClick={() => setSearchQuery('')}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </header>

        <div className="pt-6 md:pt-10">
          {filteredProjects.length ? (
            <div className="projects-grid mobile-2-cols grid gap-2.5 sm:gap-5 lg:grid-cols-3 xl:gap-7">
              {filteredProjects.map((project) => (
                <div className="min-w-0" key={project.slug}>
                  <ProjectCard
                    emphasis={project.featured ? 'latest' : 'default'}
                    linkMode="live"
                    project={project}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 mb-4">
                <Search className="h-7 w-7 text-teal-600" />
              </div>
              <h2 className="font-display text-lg font-bold text-slate-900">
                {text('لا توجد نتائج مطابقة', 'No matching projects')}
              </h2>
              <p className="mt-2 text-slate-600 max-w-sm mx-auto text-xs sm:text-sm leading-5">
                {text('لم نتمكن من العثور على أي مشاريع تطابق بحثك.', 'We couldn\'t find any projects matching your search.')}
              </p>
              <button
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-teal-700"
                onClick={() => setSearchQuery('')}
                type="button"
              >
                {text('عرض كل المشاريع', 'Show all projects')}
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-5 end-5 z-50 p-2.5 sm:p-3 rounded-full bg-teal-600 text-white shadow-xl transition-all duration-300 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        aria-label={text('العودة للأعلى', 'Scroll to top')}
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </section>
  );
};

export default ProjectsPage;
