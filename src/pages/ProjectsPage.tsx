import { Search, X } from 'lucide-react';
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

  usePageMetadata(getPageSeoByPath('/projects', lang));

  const orderedProjects = useMemo(
    () => [...visibleProjects].sort((left, right) => Number(right.showcaseGroup === 'latest') - Number(left.showcaseGroup === 'latest')),
    [],
  );

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
    <section className="projects-page relative min-h-screen overflow-x-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_40%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_36%)]" />

      <div className="projects-page-inner mx-auto max-w-[84rem] px-3 sm:px-5 lg:px-8">
        <header className="grid gap-5 border-b border-white/10 pb-6 md:grid-cols-[1fr_auto] md:items-end md:gap-8 md:pb-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-2xl font-black leading-tight text-white sm:text-3xl md:text-5xl">
              {text('مشاريع حية يمكنك استكشافها مباشرة', 'Live projects ready to explore')}
            </h1>
            <p className="mt-2 max-w-3xl text-xs leading-6 text-slate-400 sm:text-sm md:mt-3 md:text-base md:leading-8">
              {text(
                'مجموعة مختارة من المواقع والمنصات والتجارب الرقمية التي نفذناها بعناية.',
                'A selected collection of websites, platforms, and digital experiences crafted with care.',
              )}
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              aria-label={text('البحث في المشاريع', 'Search projects')}
              className="min-h-11 w-full rounded-lg border border-white/10 bg-[#07111c]/88 pe-10 ps-10 text-sm text-white outline-none transition focus:border-cyan-300/45 focus:ring-2 focus:ring-cyan-300/10"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={text('ابحث باسم المشروع', 'Search projects')}
              type="search"
              value={searchQuery}
            />
            {searchQuery ? (
              <button
                aria-label={text('مسح البحث', 'Clear search')}
                className="absolute end-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-slate-500 transition hover:text-white"
                onClick={() => setSearchQuery('')}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </header>

        <div className="pt-5 md:pt-8">
          {filteredProjects.length ? (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 2xl:gap-6">
              {filteredProjects.map((project) => (
                <div className="min-w-0" key={project.slug}>
                  <ProjectCard
                    emphasis={project.showcaseGroup === 'latest' ? 'latest' : 'default'}
                    linkMode="live"
                    project={project}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-white/[0.025] px-5 py-16 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-600" />
              <h2 className="mt-4 font-display text-xl font-bold text-white">
                {text('لا توجد نتائج مطابقة', 'No matching projects')}
              </h2>
              <button
                className="mt-4 bg-cyan-300 px-5 py-2 text-sm font-black text-[#031014]"
                onClick={() => setSearchQuery('')}
                type="button"
              >
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
