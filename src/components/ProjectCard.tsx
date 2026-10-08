import { motion } from 'framer-motion';
import {
  ArrowUpLeft,
  BrainCircuit,
  Cloud,
  GraduationCap,
  LayoutDashboard,
  Map,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import type { KeyboardEventHandler } from 'react';

import type { PortfolioProject } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';
import { trackEvent } from '../lib/analytics';
import { preloadPath } from '../lib/pageLoaders';
import { cardLift, revealItem, revealTransition } from '../lib/motion';
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  project: PortfolioProject;
  compact?: boolean;
  linkMode?: 'detail' | 'live';
  emphasis?: 'default' | 'latest';
}

const ProjectCard = ({ project, linkMode = 'detail' }: ProjectCardProps) => {
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const isArabic = lang === 'ar';
  const projectTitle = isArabic ? project.title : project.englishTitle ?? project.title;
  const projectExcerpt = isArabic ? project.excerpt : project.englishExcerpt ?? project.excerpt;
  const projectCategory = isArabic ? project.category : project.englishCategory ?? project.category;
  const projectPath = localizePath(`/projects/${project.slug}`);
  const opensLive = linkMode === 'live' || project.showcaseGroup === 'latest';
  const primaryHref = opensLive ? project.liveUrl : projectPath;
  const hasLocalCover = project.coverImage.startsWith('/images/');
  const categoryKey = (project.englishCategory ?? '').toLowerCase();

  const CoverIcon = categoryKey.includes('gis') || categoryKey.includes('map')
    ? Map
    : categoryKey.includes('learn') || categoryKey.includes('assessment') || categoryKey.includes('education')
      ? GraduationCap
      : categoryKey.includes('commerce') || categoryKey.includes('store')
        ? ShoppingBag
        : categoryKey.includes('ai')
          ? BrainCircuit
          : categoryKey.includes('cloud')
            ? Cloud
            : categoryKey.includes('management') || categoryKey.includes('dashboard')
              ? LayoutDashboard
              : Sparkles;

  const prefetchProjectPage = () => {
    if (!opensLive) {
      void preloadPath(projectPath);
    }
  };

  const trackPortfolioOpen = (action: 'card' | 'cta', destination: 'detail' | 'live') => {
    trackEvent('portfolio_open', {
      action,
      destination,
      project_slug: project.slug,
      project_title: projectTitle,
      language: lang,
    });
  };

  const openPrimaryAction = () => {
    if (opensLive) {
      trackPortfolioOpen('card', 'live');
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    trackPortfolioOpen('card', 'detail');
    window.location.assign(projectPath);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPrimaryAction();
    }
  };

  return (
    <motion.article
      initial={isMobile ? false : 'hidden'}
      {...(!isMobile ? { whileInView: 'visible', viewport: { once: true, amount: 0.15 } } : {})}
      variants={revealItem}
      transition={revealTransition}
      whileHover={isMobile ? undefined : cardLift}
      onClick={openPrimaryAction}
      onFocusCapture={prefetchProjectPage}
      onKeyDown={handleKeyDown}
      onMouseEnter={prefetchProjectPage}
      onPointerDown={prefetchProjectPage}
      className="project-card group relative flex w-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-teal-500 hover:shadow-lg h-full"
      role="link"
      tabIndex={0}
    >
      {/* Card Image Header */}
      <div className="relative aspect-[16/9] shrink-0 overflow-hidden border-b border-slate-100 bg-slate-900 sm:aspect-[16/10]">
        {hasLocalCover ? (
          <ProjectImage
            alt={projectTitle}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            fallbackSrc={project.thumbnailImage}
            fallbacks={project.screenshots}
            loading="lazy"
            src={project.coverImage}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <>
            <ProjectImage
              alt=""
              className="absolute inset-0 h-full w-full scale-105 object-cover object-top opacity-60 saturate-125 transition-transform duration-500 group-hover:scale-110"
              fallbackSrc={project.thumbnailImage}
              fallbacks={project.screenshots}
              loading="lazy"
              src={project.coverImage}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            <div className="absolute inset-0 bg-slate-950/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
              <span className="inline-flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/20 bg-slate-900/60 text-cyan-200 shadow-md backdrop-blur-md">
                <CoverIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              </span>
              <strong className="mt-1 max-w-[95%] font-display text-[10px] font-bold leading-4 text-white drop-shadow-md sm:mt-2 sm:text-base sm:leading-snug">
                {projectTitle}
              </strong>
            </div>
          </>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 sm:h-10 bg-gradient-to-t from-slate-950/40 to-transparent" />

        {/* High Contrast Category Pill Tag */}
        <div className="absolute top-2 start-2 sm:top-3 sm:start-3 z-10 max-w-[85%]">
          <span className="inline-block truncate rounded-full bg-teal-800 px-2.5 py-0.5 text-[9px] sm:text-xs font-black text-white shadow-md">
            {projectCategory}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4 md:p-5">
        <h3 className="min-h-7 break-words font-display text-xs sm:text-base md:text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-teal-700 sm:min-h-0 sm:leading-snug">
          {projectTitle}
        </h3>

        <p className="mt-1 line-clamp-2 text-[10px] sm:text-xs md:text-sm leading-normal sm:leading-relaxed text-slate-600">
          {projectExcerpt}
        </p>

        {/* Tech stack tags */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-2.5 hidden sm:flex flex-wrap gap-1">
            {project.techStack.slice(0, 2).map((tech, idx) => (
              <span key={idx} className="inline-block truncate max-w-[120px] rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA Link */}
        <div className="mt-auto pt-3 sm:pt-4">
          <a
            className="group/btn inline-flex min-h-8 sm:min-h-10 w-full items-center justify-between rounded-xl border border-teal-200 bg-teal-50 px-2.5 sm:px-4 text-[10px] sm:text-xs md:text-sm font-bold text-teal-800 transition-all duration-300 hover:border-teal-600 hover:bg-teal-600 hover:text-white shadow-sm"
            href={primaryHref}
            onClick={(event) => {
              event.stopPropagation();
              trackPortfolioOpen('cta', opensLive ? 'live' : 'detail');
            }}
            rel={opensLive ? 'noreferrer' : undefined}
            target={opensLive ? '_blank' : undefined}
          >
            <span className="truncate">{opensLive ? (isArabic ? 'فتح المشروع' : 'Open project') : (isArabic ? 'عرض التفاصيل' : 'View details')}</span>
            <ArrowUpLeft className="h-3.5 w-3.5 shrink-0 ms-1 transition-transform duration-300 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
