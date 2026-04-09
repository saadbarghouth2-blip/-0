import { motion } from 'framer-motion';
import { ArrowUpLeft, ExternalLink } from 'lucide-react';
import type { KeyboardEventHandler } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { PortfolioProject } from '../data/portfolio';
import { preloadPath } from '../lib/pageLoaders';
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  project: PortfolioProject;
  compact?: boolean;
  linkMode?: 'detail' | 'live';
}

const ProjectCard = ({ project, compact = false, linkMode = 'detail' }: ProjectCardProps) => {
  const { lang } = useLanguage();
  const projectTitle = lang === 'ar' ? project.title : project.englishTitle ?? project.title;
  const projectExcerpt = lang === 'ar' ? project.excerpt : project.englishExcerpt ?? project.excerpt;
  const projectCategory = lang === 'ar' ? project.category : project.englishCategory ?? project.category;
  const projectVariantLabel =
    lang === 'ar'
      ? project.variantLabel
      : project.englishVariantLabel ?? project.variantLabel;
  const visitLabel =
    lang === 'ar' ? `زيارة ${project.title}` : `Visit ${project.englishTitle ?? project.title}`;
  const projectPath = `/projects/${project.slug}`;
  const primaryHref = linkMode === 'live' ? project.liveUrl : projectPath;
  const previewShots = (project.screenshots ?? [])
    .filter((shot) => shot !== project.coverImage)
    .slice(0, compact ? 2 : 3);
  const prefetchProjectPage = () => {
    if (linkMode === 'live') {
      return;
    }

    void preloadPath(projectPath);
  };

  const openPrimaryAction = () => {
    if (linkMode === 'live') {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      return;
    }

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={openPrimaryAction}
      onFocusCapture={prefetchProjectPage}
      onKeyDown={handleKeyDown}
      onMouseEnter={prefetchProjectPage}
      onPointerDown={prefetchProjectPage}
      className="surface-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[2rem] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_40px_100px_-30px_rgba(45,212,191,0.3)] glass-card"
      role="link"
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 transition-colors duration-700 pointer-events-none z-10" />

      <div className="relative overflow-hidden z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50 mix-blend-overlay z-10`} />

        <motion.div
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ProjectImage
            alt={projectTitle}
            className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 ${compact ? 'h-56' : 'h-64'
              }`}
            fallbackSrc={project.thumbnailImage}
            fallbacks={project.screenshots}
            loading="lazy"
            src={project.coverImage}
          />
        </motion.div>

        {previewShots.length > 0 && (
          <div className="absolute inset-x-0 bottom-0 z-20 flex gap-2 overflow-hidden bg-gradient-to-t from-[#06090f]/90 via-[#06090f]/50 to-transparent p-4 translation-y-4 group-hover:translate-y-0 transition-transform duration-500 border-t border-white/5">
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
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 relative z-20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="pill bg-cyan-400/5 border-cyan-400/20 text-cyan-200 group-hover:bg-cyan-400/10 transition-colors duration-300">
              {projectCategory}
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {projectTitle}
            </h3>
            {projectVariantLabel && (
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                {projectVariantLabel}
              </p>
            )}
            <p className="mt-1 text-xs text-slate-500 uppercase tracking-widest hidden md:block">
              {lang === 'ar' ? project.englishTitle : project.title}
            </p>
          </div>

          <motion.a
            aria-label={visitLabel}
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-lg transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            href={project.liveUrl}
            onClick={(event) => event.stopPropagation()}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink className="h-5 w-5" />
          </motion.a>
        </div>

        <p className="mt-5 text-sm leading-8 text-slate-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {projectExcerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors duration-300 group-hover:border-white/10"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Focus</p>
            <p className="mt-2 text-sm font-medium text-slate-300">{project.focus.join(' • ')}</p>
          </div>

          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors group/btn"
            href={primaryHref}
            onClick={(event) => event.stopPropagation()}
            rel={linkMode === 'live' ? 'noreferrer' : undefined}
            target={linkMode === 'live' ? '_blank' : undefined}
          >
            {linkMode === 'live'
              ? lang === 'ar'
                ? 'افتح المشروع'
                : 'Open project'
              : lang === 'ar'
                ? 'صفحة المشروع'
                : 'Project page'}
            <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:-translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
