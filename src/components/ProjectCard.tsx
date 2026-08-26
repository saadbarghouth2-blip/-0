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
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  project: PortfolioProject;
  compact?: boolean;
  linkMode?: 'detail' | 'live';
  emphasis?: 'default' | 'latest';
}

const ProjectCard = ({ project, compact = false, linkMode = 'detail', emphasis = 'default' }: ProjectCardProps) => {
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const isArabic = lang === 'ar';
  const projectTitle = isArabic ? project.title : project.englishTitle ?? project.title;
  const projectExcerpt = isArabic ? project.excerpt : project.englishExcerpt ?? project.excerpt;
  const projectCategory = isArabic ? project.category : project.englishCategory ?? project.category;
  const projectPath = localizePath(`/projects/${project.slug}`);
  const opensLive = linkMode === 'live' || project.showcaseGroup === 'latest';
  const isLatest = emphasis === 'latest' || project.showcaseGroup === 'latest';
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
      initial={isMobile ? false : { opacity: 0, y: 24 }}
      {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 } } : {})}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={isMobile ? undefined : { y: -5 }}
      onClick={openPrimaryAction}
      onFocusCapture={prefetchProjectPage}
      onKeyDown={handleKeyDown}
      onMouseEnter={prefetchProjectPage}
      onPointerDown={prefetchProjectPage}
      className={`project-card group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border bg-white transition-all duration-300 md:h-full ${
        isLatest
          ? 'border-teal-300 shadow-[0_20px_55px_-42px_rgba(13,148,136,0.55)] hover:border-teal-500'
          : 'border-slate-300 shadow-[0_18px_48px_-38px_rgba(30,41,59,0.45)] hover:border-slate-400'
      }`}
      role="link"
      tabIndex={0}
    >
      <div className="theme-on-media relative overflow-hidden border-b border-slate-300 bg-[#07111c]">
        <div className={`project-card-media relative overflow-hidden ${compact ? 'aspect-[16/11]' : 'aspect-[16/10]'}`}>
          {hasLocalCover ? (
            <ProjectImage
              alt={projectTitle}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              fallbackSrc={project.thumbnailImage}
              fallbacks={project.screenshots}
              loading="lazy"
              src={project.coverImage}
            />
          ) : (
            <>
              <ProjectImage
                alt=""
                className="absolute inset-0 h-full w-full scale-105 object-cover object-top opacity-60 saturate-125 transition-transform duration-500 group-hover:scale-[1.08]"
                fallbackSrc={project.thumbnailImage}
                fallbacks={project.screenshots}
                loading="lazy"
                src={project.coverImage}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <div className="absolute inset-0 bg-slate-950/35" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg border border-white/15 bg-[#07111c]/65 text-cyan-100 shadow-xl backdrop-blur-sm md:h-16 md:w-16">
                  <CoverIcon className="h-7 w-7 md:h-8 md:w-8" />
                </span>
                <strong className="mt-3 line-clamp-2 max-w-[90%] font-display text-lg font-black leading-snug text-white drop-shadow-lg md:text-2xl">
                  {projectTitle}
                </strong>
              </div>
            </>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#07111c]/55 to-transparent" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <span className="text-[11px] font-bold text-teal-700 md:text-xs">
          {projectCategory}
        </span>
        <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-black leading-snug text-slate-950 transition-colors duration-300 group-hover:text-teal-800 md:text-xl">
          {projectTitle}
        </h3>

        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700 md:text-sm">
          {projectExcerpt}
        </p>

        <div className="mt-auto pt-4">
          <a
            className="group/btn inline-flex min-h-10 items-center gap-2 rounded-md border border-teal-200 bg-teal-50 px-3 text-xs font-bold text-teal-800 transition-colors hover:border-teal-300 hover:bg-teal-100 md:text-sm"
            href={primaryHref}
            onClick={(event) => {
              event.stopPropagation();
              trackPortfolioOpen('cta', opensLive ? 'live' : 'detail');
            }}
            rel={opensLive ? 'noreferrer' : undefined}
            target={opensLive ? '_blank' : undefined}
          >
            {opensLive ? (isArabic ? 'فتح المشروع' : 'Open project') : isArabic ? 'عرض المشروع' : 'View project'}
            <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
