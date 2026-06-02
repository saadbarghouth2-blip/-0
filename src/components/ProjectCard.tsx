import { motion } from 'framer-motion';
import { ArrowUpLeft, ExternalLink } from 'lucide-react';
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
}

const ProjectCard = ({ project, compact = false, linkMode = 'detail' }: ProjectCardProps) => {
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const isArabic = lang === 'ar';
  const projectTitle = isArabic ? project.title : project.englishTitle ?? project.title;
  const projectExcerpt = isArabic ? project.excerpt : project.englishExcerpt ?? project.excerpt;
  const projectCategory = isArabic ? project.category : project.englishCategory ?? project.category;
  const projectVariantLabel = isArabic
    ? project.variantLabel
    : project.englishVariantLabel ?? project.variantLabel;
  const visitLabel = isArabic ? `زيارة ${project.title}` : `Visit ${project.englishTitle ?? project.title}`;
  const projectPath = localizePath(`/projects/${project.slug}`);
  const primaryHref = linkMode === 'live' ? project.liveUrl : projectPath;
  const previewShots = (project.screenshots ?? [])
    .filter((shot) => shot !== project.coverImage)
    .slice(0, compact ? 2 : isMobile ? 2 : 3);

  const prefetchProjectPage = () => {
    if (linkMode === 'live') {
      return;
    }

    void preloadPath(projectPath);
  };

  const trackPortfolioOpen = (
    action: 'card' | 'live_icon' | 'cta',
    destination: 'detail' | 'live',
  ) => {
    trackEvent('portfolio_open', {
      action,
      destination,
      project_slug: project.slug,
      project_title: projectTitle,
      language: lang,
    });
  };

  const openPrimaryAction = () => {
    if (linkMode === 'live') {
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
      initial={isMobile ? false : { opacity: 0, y: 40 }}
      {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } } : {})}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={isMobile ? undefined : { y: -10, scale: 1.02 }}
      onClick={openPrimaryAction}
      onFocusCapture={prefetchProjectPage}
      onKeyDown={handleKeyDown}
      onMouseEnter={prefetchProjectPage}
      onPointerDown={prefetchProjectPage}
      className="surface-card group relative flex cursor-pointer flex-col overflow-hidden rounded-lg md:rounded-[2rem] glass-card transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_40px_100px_-30px_rgba(45,212,191,0.3)] md:h-full"
      role="link"
      tabIndex={0}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 transition-colors duration-700 group-hover:from-cyan-500/10 group-hover:to-violet-500/10" />

      <div className="relative z-0 overflow-hidden">
        <div className={`absolute inset-0 z-10 bg-gradient-to-br ${project.accent} opacity-50 mix-blend-overlay`} />

        <motion.div className="h-full w-full" transition={{ duration: 0.8, ease: 'easeOut' }}>
          <ProjectImage
            alt={projectTitle}
            className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 ${
              compact ? 'h-36 sm:h-48 md:h-56' : 'h-40 sm:h-52 md:h-64'
            }`}
            fallbackSrc={project.thumbnailImage}
            fallbacks={project.screenshots}
            loading="lazy"
            src={project.coverImage}
          />
        </motion.div>

        {!isMobile && previewShots.length > 0 ? (
          <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-4 gap-2 overflow-hidden border-t border-white/5 bg-gradient-to-t from-[#06090f]/90 via-[#06090f]/50 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
            {previewShots.map((shot, index) => (
              <motion.div
                key={`${project.slug}-preview-${index}`}
                whileHover={{ scale: 1.1 }}
                className="image-ring h-14 flex-1 overflow-hidden rounded-xl border border-white/10 shadow-lg"
              >
                <ProjectImage
                  alt={`${projectTitle} preview ${index + 1}`}
                  className="h-full w-full object-cover"
                  fallbackSrc={project.coverImage}
                  fallbacks={project.screenshots}
                  loading="lazy"
                  src={shot}
                />
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="relative z-20 flex flex-1 flex-col p-2.5 md:p-7">
        <div className="flex items-start justify-between gap-2 md:gap-4">
          <div className="min-w-0">
            <span className="pill border-cyan-400/20 bg-cyan-400/5 text-cyan-200 transition-colors duration-300 group-hover:bg-cyan-400/10 text-[10px] md:text-sm">
              {projectCategory}
            </span>
            <h3 className="mt-2 md:mt-3 font-display text-xs md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 md:mt-5 line-clamp-2 md:line-clamp-none">
              {projectTitle}
            </h3>
            {projectVariantLabel ? (
              <p className="mt-1 md:mt-2 text-[9px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500">
                {projectVariantLabel}
              </p>
            ) : null}
            <p className="mt-0.5 md:mt-1 hidden text-[9px] md:text-xs uppercase tracking-widest text-slate-500 md:block">
              {isArabic ? project.englishTitle : project.title}
            </p>
          </div>

          <motion.a
            aria-label={visitLabel}
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-7 w-7 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-lg transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            href={project.liveUrl}
            onClick={(event) => {
              event.stopPropagation();
              trackPortfolioOpen('live_icon', 'live');
            }}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink className="h-3.5 w-3.5 md:h-5 md:w-5" />
          </motion.a>
        </div>

        <p className="mt-1.5 md:mt-3 text-[11px] md:text-sm leading-4 md:leading-6 text-slate-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:mt-5 md:leading-8 line-clamp-2 md:line-clamp-none">
          {projectExcerpt}
        </p>

        <div className="mt-2 md:mt-4 flex flex-wrap gap-1 md:gap-2">
          {project.techStack.slice(0, 2).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/5 bg-white/5 px-1.5 md:px-2.5 py-0.5 md:py-1 text-[9px] md:text-xs text-slate-300 transition-colors duration-300 group-hover:border-white/10"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-3 md:mt-5 flex flex-col gap-2 md:gap-3 border-t border-white/10 pt-2 md:pt-3.5 sm:flex-row sm:items-center sm:justify-between md:mt-8 md:gap-4 md:pt-5">
          <div className="hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Focus</p>
            <p className="mt-1.5 text-xs font-medium leading-5 text-slate-300 md:mt-2 md:text-sm md:leading-6">
              {project.focus.join(' / ')}
            </p>
          </div>

          <a
            className="group/btn inline-flex items-center gap-1 md:gap-2 self-start text-xs md:text-sm font-medium text-white transition-colors hover:text-cyan-400"
            href={primaryHref}
            onClick={(event) => {
              event.stopPropagation();
              trackPortfolioOpen('cta', linkMode === 'live' ? 'live' : 'detail');
            }}
            rel={linkMode === 'live' ? 'noreferrer' : undefined}
            target={linkMode === 'live' ? '_blank' : undefined}
          >
            {linkMode === 'live'
              ? isArabic
                ? 'افتح'
                : 'Open'
              : isArabic
                ? 'صفحة'
                : 'Page'}
            <ArrowUpLeft className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
