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

import ProjectCard from '../components/ProjectCard';
import ProjectImage from '../components/ProjectImage';
import { findProjectBySlug, projects } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath, getProjectPageSeo } from '../lib/pageSeo';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const project = slug ? findProjectBySlug(slug) : undefined;

  const text = (arabic: string, english?: string) => {
    if (isArabic) {
      return arabic;
    }

    return english ?? arabic;
  };

  usePageMetadata(project ? getProjectPageSeo(project, lang) : getPageSeoByPath('/404', lang));

  if (!project) {
    return (
      <section className="section-shell py-28">
        <div className="surface-card mx-auto max-w-3xl rounded-[2.2rem] p-10 text-center">
          <p className="section-kicker mx-auto">404</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white">
            {isArabic ? 'المشروع غير موجود' : 'Project not found'}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            {isArabic
              ? 'الرابط الذي فتحته لا يحتوي على مشروع متاح حالياً. يمكنك العودة إلى صفحة الأعمال أو متابعة التواصل معنا مباشرة.'
              : 'The link you opened does not contain an available project right now. You can return to the projects page or contact us directly.'}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" to="/projects">
              {isArabic ? 'العودة إلى الأعمال' : 'Back to projects'}
            </Link>
            <Link className="btn-secondary" to="/contact">
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
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

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
    <section className="section-shell pb-20 pt-14 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <p className="section-kicker">
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
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">{summary}</p>
            <p className="max-w-3xl text-base leading-8 text-slate-400">{excerpt}</p>
            <div className="flex flex-wrap gap-3">
              <a
                className="btn-primary inline-flex items-center gap-2"
                href={project.liveUrl}
                rel="noreferrer"
                target="_blank"
              >
                {isArabic ? 'فتح المشروع الحي' : 'Open live project'}
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link className="btn-secondary inline-flex items-center gap-2" to="/contact">
                {isArabic ? 'ابدأ مشروعك معنا' : 'Start your project'}
                <ArrowUpLeft className={`h-4 w-4 ${isArabic ? '' : '-scale-x-100'}`} />
              </Link>
            </div>
          </div>

          <div className="surface-card-strong overflow-hidden rounded-[2.5rem] border border-white/10">
            <ProjectImage
              alt={title}
              className="h-full min-h-[320px] w-full object-cover"
              fallbackSrc={project.thumbnailImage}
              fallbacks={project.screenshots}
              src={project.coverImage}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {detailCards.map((item) => (
            <div key={item.label} className="surface-card rounded-[1.8rem] p-6">
              <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-base leading-7 text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="space-y-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="surface-card rounded-[2.2rem] p-6 md:p-8"
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
              className="surface-card rounded-[2.2rem] p-6 md:p-8"
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
              className="surface-card rounded-[2.2rem] p-6 md:p-8"
            >
              <p className="section-kicker">{isArabic ? 'النتيجة' : 'Outcome'}</p>
              <h2 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                {isArabic ? 'ما الذي خرج به المشروع؟' : 'What did the project deliver?'}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{outcome}</p>
            </motion.article>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="surface-card rounded-[2.2rem] p-6">
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

            <div className="surface-card rounded-[2.2rem] p-6">
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

            <div className="surface-card rounded-[2.2rem] p-6">
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

            <div className="surface-card rounded-[2.2rem] p-6">
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
                  className="surface-card overflow-hidden rounded-[2rem] border border-white/10"
                >
                  <ProjectImage
                    alt={`${title} ${index + 1}`}
                    className="h-72 w-full object-cover"
                    fallbackSrc={project.coverImage}
                    fallbacks={project.screenshots}
                    src={image}
                  />
                </motion.div>
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
            <Link className="btn-secondary hidden md:inline-flex" to="/projects">
              {isArabic ? 'كل الأعمال' : 'All projects'}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} compact project={relatedProject} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
