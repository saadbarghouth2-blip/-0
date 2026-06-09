import { motion } from 'framer-motion';
import {
  ArrowUpLeft,
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  Layers3,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import MobileSectionPager from '../components/MobileSectionPager';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import ProjectCard from '../components/ProjectCard';
import ProjectImage from '../components/ProjectImage';
import HeroMediaBackdrop from '../components/HeroMediaBackdrop';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { getPageEnrichment } from '../data/pageEnrichment';
import { findProjectBySlug, getProjectAlternates, visibleProjects } from '../data/portfolio';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { trackEvent } from '../lib/analytics';
import { getPageSeoByPath, getProjectPageSeo } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const project = slug ? findProjectBySlug(slug) : undefined;

  const text = (arabic: string, english?: string) => {
    if (isArabic) {
      return clientFacingText(arabic, lang);
    }

    return clientFacingText(english ?? arabic, lang);
  };

  usePageMetadata(project ? getProjectPageSeo(project, lang) : getPageSeoByPath('/404', lang));

  if (!project) {
    return (
        <section className="section-shell py-20 md:py-28">
          <div className="surface-card mx-auto max-w-3xl rounded-[1.8rem] p-6 text-center md:rounded-[2.2rem] md:p-10">
          <p className="section-kicker mx-auto">404</p>
            <h1 className="mt-5 font-display text-3xl font-semibold text-white md:text-4xl">
            {isArabic ? 'المشروع غير موجود' : 'Project not found'}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            {isArabic
              ? 'الرابط الذي فتحته لا يحتوي على مشروع متاح حالياً. يمكنك العودة إلى صفحة الأعمال أو متابعة التواصل معنا مباشرة.'
              : 'The link you opened does not contain an available project right now. You can return to the projects page or contact us directly.'}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link className="btn-primary" to={localizePath('/projects')}>
              {isArabic ? 'العودة إلى الأعمال' : 'Back to projects'}
            </Link>
          <Link className="btn-secondary" to={localizePath('/contact')}>
              {isArabic ? 'تواصل معنا' : 'Contact us'}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const title = text(project.title, project.englishTitle);
  const category = text(project.category, project.englishCategory);
  const excerpt = text(project.excerpt, project.englishExcerpt);
  const summary = text(project.summary, project.englishSummary);
  const challenge = text(project.challenge, project.englishChallenge);
  const approach = text(project.approach, project.englishApproach);
  const outcome = text(project.outcome, project.englishOutcome);
  const audience = text(project.audience, project.englishAudience);
  const projectType = text(project.projectType, project.englishProjectType);
  const role = text(project.role, project.englishRole);
  const deliverables = project.deliverables;
  const focus = project.focus;
  const techStack = project.techStack;
  const experience = project.experience;
  const gallery = [...new Set([project.coverImage, ...(project.screenshots ?? [])])];
  const alternateProjects = getProjectAlternates(project);
  const projectEnrichment = getPageEnrichment(`/projects/${project.slug}`);
  const heroFallbackMedia = projectEnrichment
    ? enrichmentMediaById[projectEnrichment.heroMediaId]
    : enrichmentMediaById['projects-hero-review'];
  const heroMedia = projectEnrichment
    ? enrichmentMediaById[projectEnrichment.videoMediaId] ?? heroFallbackMedia
    : enrichmentMediaById['projects-interface-scroll'];
  const relatedProjects = visibleProjects
    .filter((item) => item.slug !== project.slug && item.familyKey !== project.familyKey)
    .slice(0, 3);

  const handleLiveProjectClick = () => {
    trackEvent('portfolio_open', {
      action: 'detail_page_live_cta',
      destination: 'live',
      project_slug: project.slug,
      project_title: title,
      language: lang,
    });
  };

  const detailCards = [
    {
      icon: BriefcaseBusiness,
      label: isArabic ? 'نوع المشروع' : 'Project type',
      value: projectType,
    },
    {
      icon: Target,
      label: isArabic ? 'الجمهور المستهدف' : 'Audience',
      value: audience,
    },
    {
      icon: Wrench,
      label: isArabic ? 'الدور' : 'Role',
      value: role,
    },
  ];

  return (
    <section className="relative overflow-hidden pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] flex min-h-[calc(100svh-3.75rem)] w-screen items-end overflow-hidden px-4 pb-7 pt-20 sm:px-6 md:min-h-[calc(100svh-4.35rem)] md:px-10 md:pb-10 md:pt-[7.5rem] lg:px-14">
          <HeroMediaBackdrop fallbackMedia={heroFallbackMedia} isArabic={isArabic} media={heroMedia} />
          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-5 md:space-y-6">
            <p className="section-kicker border-cyan-300/35 bg-[#06151c]/62 text-cyan-50 shadow-[0_18px_55px_-36px_rgba(45,212,191,0.8)] backdrop-blur-2xl">
              <Sparkles className={`${isArabic ? 'ml-2' : 'mr-2'} inline h-3.5 w-3.5`} />
              {isArabic ? 'دراسة حالة مشروع' : 'Project case study'}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="pill bg-cyan-400/10 border-cyan-400/20 text-cyan-200">
                {category}
              </span>
              {project.variantLabel && (
                <span className="pill border-white/10 bg-white/[0.03] text-slate-300">
                  {text(project.variantLabel, project.englishVariantLabel)}
                </span>
              )}
            </div>
            <h1 className="max-w-[12ch] font-display text-[2.45rem] font-black leading-[1.04] text-white drop-shadow-[0_18px_36px_rgba(0,0,0,0.62)] sm:text-[3.35rem] md:text-7xl lg:text-[5.25rem]">
              {title}
            </h1>
            <p className="max-w-3xl text-base font-semibold leading-8 text-slate-100 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)] md:text-xl md:leading-9">{summary}</p>
            <p className="max-w-3xl text-base leading-8 text-slate-200 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)]">{excerpt}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="btn-primary inline-flex items-center gap-2"
                href={project.liveUrl}
                onClick={handleLiveProjectClick}
                rel="noreferrer"
                target="_blank"
              >
                {isArabic ? 'فتح المشروع الحي' : 'Open live project'}
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link className="btn-secondary inline-flex items-center gap-2" to={localizePath('/contact')}>
                {isArabic ? 'ناقش مشروعاً مشابهاً' : 'Discuss a similar project'}
                <ArrowUpLeft className={`h-4 w-4 ${isArabic ? '' : '-scale-x-100'}`} />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#061016]/58 shadow-[0_20px_60px_-38px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:rounded-[1.8rem] aspect-video">
            <ProjectImage
              alt={title}
              className="h-full w-full object-cover"
              fallbackSrc={project.thumbnailImage}
              fallbacks={project.screenshots}
              loading="eager"
              src={project.coverImage}
            />
          </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {detailCards.map((item) => (
            <div key={item.label} className="surface-card rounded-[1.6rem] p-5 md:rounded-[1.8rem] md:p-6">
              <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-sm leading-7 text-white md:text-base">{item.value}</p>
            </div>
          ))}
        </div>

        <PageImageShowcaseSection showcase={pageImageShowcases.projectDetail} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="space-y-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
               className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-8"
            >
              <p className="section-kicker">{isArabic ? 'التحدي' : 'Challenge'}</p>
              <h2 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                {isArabic ? 'ما الذي كان يحتاجه المشروع فعلاً؟' : 'What did the project really need?'}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{challenge}</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 }}
               className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-8"
            >
              <p className="section-kicker">{isArabic ? 'المنهج' : 'Approach'}</p>
              <h2 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                {isArabic ? 'كيف صممنا الحل؟' : 'How was the solution shaped?'}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{approach}</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
               className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-8"
            >
              <p className="section-kicker">{isArabic ? 'النتيجة' : 'Outcome'}</p>
              <h2 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                {isArabic ? 'ما الذي خرج به المشروع؟' : 'What did the project deliver?'}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{outcome}</p>
            </motion.article>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-6">
              <p className="section-kicker">{isArabic ? 'التركيز' : 'Focus'}</p>
              <div className="mt-5 grid gap-3">
                {focus.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4"
                  >
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-6">
              <p className="section-kicker">{isArabic ? 'التقنيات' : 'Tech stack'}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-6">
              <p className="section-kicker">{isArabic ? 'مخرجات التنفيذ' : 'Deliverables'}</p>
              <div className="mt-5 grid gap-3">
                {deliverables.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-6">
              <p className="section-kicker">{isArabic ? 'تجربة المستخدم' : 'Experience highlights'}</p>
              <div className="mt-5 grid gap-3">
                {experience.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4"
                  >
                    <Layers3 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {gallery.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <p className="section-kicker">{isArabic ? 'لقطات من المشروع' : 'Project snapshots'}</p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white">
                {isArabic ? 'نظرة أقرب على الواجهة' : 'A closer look at the interface'}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {gallery.map((image, index) => (
                <motion.div
                  key={`${project.slug}-gallery-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                   className="surface-card overflow-hidden rounded-[1.6rem] border border-white/10 md:rounded-[2rem]"
                >
                  <ProjectImage
                    alt={`${title} ${index + 1}`}
                     className="h-56 w-full object-cover md:h-72"
                    fallbackSrc={project.coverImage}
                    fallbacks={project.screenshots}
                    src={image}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {alternateProjects.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <p className="section-kicker">{isArabic ? 'إصدارات نفس الفكرة' : 'Same idea editions'}</p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white">
                {isArabic ? 'نسخ أخرى محفوظة داخل نفس المشروع' : 'Other versions kept inside this project family'}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {alternateProjects.map((alternateProject) => (
                <ProjectCard key={alternateProject.slug} compact project={alternateProject} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">{isArabic ? 'مشاريع مرتبطة' : 'Related work'}</p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white">
                {isArabic ? 'اكتشف مشاريع أخرى' : 'Explore more projects'}
              </h2>
            </div>
          <Link className="btn-secondary hidden md:inline-flex" to={localizePath('/projects')}>
              {isArabic ? 'كل الأعمال' : 'All projects'}
            </Link>
          </div>

          <MobileSectionPager
            desktop={(
              <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <ProjectCard key={relatedProject.slug} compact project={relatedProject} />
                ))}
              </div>
            )}
            items={relatedProjects}
            label="related-projects"
            renderPage={(pageItems) => (
              <div className="grid gap-4">
                {pageItems.map((relatedProject) => (
                  <ProjectCard key={relatedProject.slug} compact project={relatedProject} />
                ))}
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
