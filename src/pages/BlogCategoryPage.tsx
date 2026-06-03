import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Layers3,
  LineChart,
  MousePointer2,
  Sparkles,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import BlogPostCard from '../components/BlogPostCard';
import HeroMediaBackdrop from '../components/HeroMediaBackdrop';
import { blogPosts } from '../data/blog';
import { blogCategoryPages } from '../data/company';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { getPageEnrichment } from '../data/pageEnrichment';
import { useLanguage, type Language } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { localizedText } from '../lib/repairText';

const normalize = (value: string) => value.toLowerCase().trim();

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(7px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const getCopy = (value: { ar: string; en: string }, lang: Language) => localizedText(value, lang);

const getCategoryTone = (slug: string) => {
  if (slug === 'seo') {
    return {
      icon: LineChart,
      gradient: 'from-cyan-400/22 via-blue-500/8 to-emerald-400/10',
      glow: 'bg-cyan-400/16',
    };
  }

  if (slug === 'ecommerce') {
    return {
      icon: MousePointer2,
      gradient: 'from-amber-300/20 via-orange-500/8 to-cyan-400/10',
      glow: 'bg-amber-300/14',
    };
  }

  return {
    icon: Layers3,
    gradient: 'from-violet-400/18 via-cyan-400/10 to-emerald-400/10',
    glow: 'bg-violet-400/14',
  };
};

const BlogCategoryPage = () => {
  const { slug } = useParams();
  const { lang, localizePath } = useLanguage();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const isArabic = lang === 'ar';
  const category = blogCategoryPages.find((item) => item.slug === slug) ?? blogCategoryPages[0];
  const tone = getCategoryTone(category.slug);
  const enrichment = getPageEnrichment(`/blog/category/${category.slug}`);
  const heroFallbackMedia = enrichment
    ? enrichmentMediaById[enrichment.heroMediaId]
    : enrichmentMediaById['blog-hero-writing'];
  const heroMedia = enrichment
    ? enrichmentMediaById[enrichment.videoMediaId] ?? heroFallbackMedia
    : enrichmentMediaById['blog-writing'];
  const ToneIcon = tone.icon;
  const matchers = category.categoryMatchers.map(normalize);
  const posts = blogPosts.filter((post) => {
    const haystack = [
      post.categoryAr,
      post.categoryEn,
      ...post.tagsAr,
      ...post.tagsEn,
      post.titleAr,
      post.titleEn,
    ].map(normalize);

    return haystack.some((value) => matchers.some((matcher) => value.includes(matcher)));
  });
  const categoryPosts = posts.length > 0 ? posts : blogPosts.slice(0, 3);
  const text = (value: { ar: string; en: string }) => getCopy(value, lang);

  usePageMetadata(getPageSeoByPath(`/blog/category/${category.slug}`, lang));

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.18 },
        variants: sectionVariants,
      };

  return (
    <section className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className={`absolute right-[-12%] top-20 h-[32rem] w-[32rem] rounded-full ${tone.glow} blur-[150px]`} />
        <div className="absolute bottom-[18%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative left-1/2 right-1/2 -mx-[50vw] flex min-h-[calc(100svh-3.75rem)] w-screen items-end overflow-hidden px-4 pb-7 pt-20 sm:px-6 md:min-h-[calc(100svh-4.35rem)] md:px-10 md:pb-10 md:pt-[7.5rem] lg:px-14"
        >
          <HeroMediaBackdrop fallbackMedia={heroFallbackMedia} isArabic={isArabic} media={heroMedia} />
          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="section-kicker inline-flex border-cyan-300/35 bg-[#06151c]/62 text-cyan-50 shadow-[0_18px_55px_-36px_rgba(45,212,191,0.8)] backdrop-blur-2xl">
                <BookOpen className="h-4 w-4" /> {isArabic ? 'تصنيف المدونة' : 'Blog category'}
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.26em] text-cyan-200/90 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)]">
                {text(category.label)}
              </p>
              <h1 className="mt-4 max-w-[13ch] font-display text-[2.45rem] font-black leading-[1.04] text-white drop-shadow-[0_18px_36px_rgba(0,0,0,0.62)] sm:text-[3.35rem] md:text-7xl lg:text-[5.25rem]">
                {text(category.heroTitle)}
              </h1>
              <p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-slate-100 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)] md:text-xl md:leading-9">
                {text(category.heroLead)}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn-primary" to={localizePath(category.servicePath)}>
                  {text(category.serviceLabel)}
                  <ArrowUpLeft className="h-5 w-5" />
                </Link>
                <Link className="btn-secondary" to={localizePath('/blog')}>
                  {isArabic ? 'المقالات' : 'Articles'}
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/12 bg-[#061016]/58 p-4 shadow-[0_20px_60px_-38px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:rounded-[1.6rem] md:p-5">
              <div className="mb-6 inline-flex rounded-[1.2rem] bg-cyan-300/12 p-3 text-cyan-200">
                <ToneIcon className="h-7 w-7" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                {isArabic ? 'مؤشرات العمق' : 'Depth signals'}
              </p>
              <div className="mt-5 grid gap-3">
                {category.metrics.map((metric) => (
                  <div key={metric.value} className="rounded-[1.1rem] border border-white/8 bg-white/[0.035] p-4">
                    <p className="font-display text-3xl font-black text-cyan-300">{metric.value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text(metric.label)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...motionProps} className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {category.pillars.map((pillar) => (
            <motion.article
              key={pillar.title.en}
              variants={shouldReduceMotion ? undefined : itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.01 }}
              className="surface-card interactive-card rounded-[1.45rem] p-5 md:rounded-[1.8rem] md:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{text(pillar.stage)}</p>
              <h2 className="mt-4 font-display text-xl font-bold leading-tight text-white">{text(pillar.title)}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text(pillar.body)}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div {...motionProps} className="mt-16 grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="lg:sticky lg:top-24">
            <p className="section-kicker">
              <Sparkles className="h-4 w-4" /> {isArabic ? 'نظام عمل واضح' : 'Clear working system'}
            </p>
            <h2 className="mt-5 font-display text-2xl font-black leading-tight text-white md:text-5xl">
              {isArabic ? 'كيف يتحول الموضوع من فكرة عامة إلى صفحة كبيرة مقنعة؟' : 'How does the topic become a large convincing page?'}
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-400 md:text-base">
              {isArabic
                ? 'كل تصنيف هنا ليس مجرد مجموعة مقالات. هو زاوية تفكير كاملة تساعد العميل على رؤية حجم المنهجية والتفاصيل قبل أن يبدأ المشروع.'
                : 'Each category here is not just a list of posts. It is a complete thinking angle that helps clients see the method and depth before starting a project.'}
            </p>
          </motion.div>

          <div className="grid gap-4">
            {category.process.map((step, index) => (
              <motion.article
                key={step.step}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { x: isArabic ? -6 : 6 }}
                className="surface-card-strong interactive-card motion-sheen rounded-[1.35rem] p-5 md:rounded-[1.8rem] md:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-display text-sm font-black text-slate-950">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white md:text-2xl">{text(step.title)}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400 md:text-base md:leading-8">{text(step.body)}</p>
                  </div>
                </div>
                {index < category.process.length - 1 && (
                  <div className="ms-5 mt-4 h-8 w-px bg-gradient-to-b from-cyan-300/50 to-transparent" aria-hidden="true" />
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div {...motionProps} className="mt-16">
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">{isArabic ? 'تفاصيل تنفيذية' : 'Execution details'}</p>
              <h2 className="mt-4 font-display text-2xl font-black text-white md:text-5xl">
                {isArabic ? 'تفاصيل تجعل الصفحة تبدو كنظام شركة كبير' : 'Details that make the page feel like an enterprise system'}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              {isArabic
                ? 'التفاصيل هنا مقصودة: كل بطاقة تشرح طبقة من القرار أو الثقة أو الاستخدام.'
                : 'The details here are intentional: every card explains a layer of decision, trust, or usage.'}
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {category.deepDives.map((item) => (
              <motion.article
                key={item.title.en}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-cyan-300/25 md:rounded-[1.8rem] md:p-6"
              >
                <h3 className="flex items-start gap-3 font-display text-xl font-bold text-white">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  {text(item.title)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base md:leading-8">{text(item.body)}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div {...motionProps} className="mt-16 grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
            <p className="section-kicker">
              <HelpCircle className="h-4 w-4" /> {isArabic ? 'أسئلة مهمة' : 'Important questions'}
            </p>
            <h2 className="mt-4 font-display text-2xl font-black leading-tight text-white md:text-5xl">
              {isArabic ? 'إجابات تقلل التردد قبل قراءة المقالات' : 'Answers that reduce hesitation before reading'}
            </h2>
          </motion.div>

          <div className="grid gap-3">
            {category.faq.map((item) => (
              <motion.article
                key={item.question.en}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="surface-card interactive-card rounded-[1.25rem] p-5 md:rounded-[1.6rem]"
              >
                <h3 className="font-display text-lg font-bold text-white">{text(item.question)}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{text(item.answer)}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div {...motionProps} className="mt-16">
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">{isArabic ? 'المقالات' : 'Articles'}</p>
              <h2 className="mt-4 font-display text-2xl font-black text-white md:text-5xl">
                {isArabic ? 'اقرأ محتوى مرتبط بنفس المسار' : 'Read content connected to the same track'}
              </h2>
            </div>
            <Link className="btn-secondary" to={localizePath('/blog')}>
              {isArabic ? 'المقالات' : 'Articles'}
              <ArrowUpLeft className="h-5 w-5" />
            </Link>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          className="surface-card-strong motion-sheen mt-16 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] p-5 md:rounded-[2.4rem] md:p-8 lg:flex-row lg:items-center"
        >
          <div>
            <p className="section-kicker">{isArabic ? 'الخطوة التالية' : 'Next step'}</p>
            <h2 className="mt-4 font-display text-2xl font-black text-white md:text-4xl">
              {isArabic ? 'حوّل هذا العمق إلى صفحة أو نظام يخدم شركتك' : 'Turn this depth into a page or system for your company'}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
              {isArabic
                ? 'لو تحتاج شركتك صفحة خدمة، متجر، أو واجهة تبدو منظمة من أول زيارة، رتّب المتطلبات في brief سريع أو استكشف الخدمة الأقرب لهذا المسار.'
                : 'If your company needs a service page, store, or interface that feels organized from the first visit, organize the requirements in a quick brief or explore the closest service path.'}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link className="btn-primary justify-center" to={localizePath('/contact/brief')}>
              {isArabic ? 'رتّب Brief سريع' : 'Organize a quick brief'}
              <ArrowUpLeft className="h-5 w-5" />
            </Link>
            <Link className="btn-secondary justify-center" to={localizePath(category.servicePath)}>
              {text(category.serviceLabel)}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCategoryPage;
