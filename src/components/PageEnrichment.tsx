import { motion } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';
import { ArrowUpLeft, CheckCircle2, HelpCircle, Play, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getPageEnrichment, type EnrichmentPoint, type PageEnrichmentContent } from '../data/pageEnrichment';
import { enrichmentMediaById, type EnrichmentMediaAsset } from '../data/enrichmentMedia';
import { useLanguage, type Language } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';
import { clientFacingText, localizedText, repairMojibake } from '../lib/repairText';
import DeferredVideo from './DeferredVideo';
import ProjectImage from './ProjectImage';

const getCopy = (value: { ar: string; en: string }, lang: Language) =>
  clientFacingText(localizedText(value, lang), lang);

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const interactiveHover = {
  y: -8,
  scale: 1.015,
  transition: { duration: 0.28, ease: 'easeOut' },
} satisfies TargetAndTransition;

const RichPageSection = ({
  content,
  media,
  lang,
}: {
  content: PageEnrichmentContent;
  media: EnrichmentMediaAsset;
  lang: Language;
}) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    className="section-shell kinetic-section py-7 md:py-12"
  >
    <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
        <p className="section-kicker">{getCopy(content.eyebrow, lang)}</p>
        <h2 className="font-display text-[1.7rem] font-semibold leading-tight text-white sm:text-[2rem] md:text-5xl">
          {getCopy(content.title, lang)}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8">
          {getCopy(content.lead, lang)}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.metrics.map((metric, index) => (
            <motion.div
              key={metric.value}
              variants={itemVariants}
              whileHover={interactiveHover}
              className="surface-card interactive-card motion-sheen rounded-[1.1rem] p-3.5 md:rounded-[1.25rem] md:p-4"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="font-display text-xl font-bold text-cyan-300 md:text-2xl">{metric.value}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{getCopy(metric.label, lang)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ y: -10, rotate: lang === 'ar' ? -0.7 : 0.7, scale: 1.01 }}
        className="surface-card-strong media-lift motion-sheen overflow-hidden rounded-[1.8rem] p-2 md:rounded-[2.4rem]"
      >
        <ProjectImage
          alt={getCopy(media.alt, lang)}
          className="h-[220px] w-full rounded-[1.25rem] object-cover sm:h-[260px] md:h-[340px] md:rounded-[2rem]"
          src={media.src}
        />
      </motion.div>
    </div>
  </motion.section>
);

const MediaStoryBlock = ({
  content,
  media,
  lang,
}: {
  content: PageEnrichmentContent;
  media: EnrichmentMediaAsset;
  lang: Language;
}) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    className="section-shell kinetic-section py-7 md:py-12"
  >
    <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
      <motion.div variants={itemVariants} whileHover={interactiveHover} className="surface-card interactive-card media-lift overflow-hidden rounded-[1.6rem] p-2 md:rounded-[2rem]">
        <ProjectImage
          alt={getCopy(media.alt, lang)}
          className="h-[220px] min-h-0 w-full rounded-[1.25rem] object-cover sm:h-[260px] md:h-full md:min-h-[260px] md:rounded-[1.6rem]"
          src={media.src}
        />
      </motion.div>
      <motion.div variants={itemVariants} whileHover={interactiveHover} className="surface-card-strong interactive-card motion-sheen flex flex-col justify-center rounded-[1.35rem] p-4 md:rounded-[2.2rem] md:p-8">
        <p className="flex items-center gap-2 text-sm font-bold text-cyan-300">
          <Sparkles className="h-4 w-4" />
          {lang === 'ar' ? 'قصة الصفحة' : 'Page story'}
        </p>
        <h3 className="mt-4 font-display text-[1.55rem] font-semibold leading-tight text-white md:text-4xl">
          {getCopy(content.storyTitle, lang)}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400 md:mt-4 md:text-base md:leading-8">
          {getCopy(content.storyText, lang)}
        </p>
      </motion.div>
    </div>
  </motion.section>
);

const ComparisonGrid = ({
  problems,
  solutions,
  lang,
}: {
  problems: EnrichmentPoint[];
  solutions: EnrichmentPoint[];
  lang: Language;
}) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
    variants={sectionVariants}
    className="section-shell kinetic-section py-7 md:py-12"
  >
    <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
      <motion.div variants={itemVariants} whileHover={interactiveHover} className="surface-card interactive-card rounded-[1.35rem] p-4 md:rounded-[2rem] md:p-7">
        <p className="text-sm font-bold text-slate-400">{lang === 'ar' ? 'قبل الإثراء' : 'Before enrichment'}</p>
        <div className="mt-5 grid gap-3">
          {problems.map((item, index) => (
            <motion.div
              key={getCopy(item.title, lang)}
              variants={itemVariants}
              whileHover={{ x: lang === 'ar' ? -5 : 5 }}
              className="interactive-card rounded-[1rem] border border-white/8 bg-white/[0.025] p-3.5 md:p-4"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h4 className="font-display text-lg font-semibold text-white">{getCopy(item.title, lang)}</h4>
              <p className="mt-2 text-sm leading-7 text-slate-400">{getCopy(item.text, lang)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={itemVariants} whileHover={interactiveHover} className="surface-card-strong interactive-card motion-sheen rounded-[1.35rem] p-4 md:rounded-[2rem] md:p-7">
        <p className="text-sm font-bold text-cyan-300">{lang === 'ar' ? 'بعد الإثراء' : 'After enrichment'}</p>
        <div className="mt-5 grid gap-3">
          {solutions.map((item, index) => (
            <motion.div
              key={getCopy(item.title, lang)}
              variants={itemVariants}
              whileHover={{ x: lang === 'ar' ? -5 : 5 }}
              className="interactive-card rounded-[1rem] border border-cyan-300/15 bg-cyan-300/8 p-3.5 md:p-4"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                {getCopy(item.title, lang)}
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-400">{getCopy(item.text, lang)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const VideoFeatureBlock = ({
  content,
  video,
  lang,
}: {
  content: PageEnrichmentContent;
  video: EnrichmentMediaAsset;
  lang: Language;
}) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    className="section-shell kinetic-section py-7 md:py-12"
  >
    <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} className="surface-card-strong media-lift motion-sheen overflow-hidden rounded-[1.35rem] p-2 md:rounded-[2.4rem]">
        <div className="relative overflow-hidden rounded-[1.45rem] bg-slate-950 md:rounded-[2rem]">
          {video.type === 'video' ? (
            <DeferredVideo
              aria-label={getCopy(video.alt, lang)}
              autoPlay
              className="aspect-video w-full object-cover opacity-90"
              loop
              muted
              playsInline
              src={video.src}
            />
          ) : (
            <ProjectImage
              alt={getCopy(video.alt, lang)}
              className="aspect-video w-full object-cover opacity-90"
              src={video.src}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <div className="video-caption-badge absolute bottom-4 start-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-xs font-bold backdrop-blur" aria-hidden="true">
            <Play className="h-3.5 w-3.5 fill-current" />
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-4">
        <p className="section-kicker">{lang === 'ar' ? 'حركة هادفة' : 'Purposeful motion'}</p>
        <h3 className="font-display text-[1.55rem] font-semibold leading-tight text-white md:text-4xl">
          {getCopy(content.videoTitle, lang)}
        </h3>
        <p className="text-sm leading-8 text-slate-400 md:text-base">{getCopy(content.videoText, lang)}</p>
        <div className="grid gap-3">
          {content.videoPoints.map((item) => (
            <motion.div key={getCopy(item.title, lang)} whileHover={{ x: lang === 'ar' ? -5 : 5 }} className="interactive-card rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-4">
              <h4 className="font-display text-base font-semibold text-white">{getCopy(item.title, lang)}</h4>
              <p className="mt-1 text-sm leading-7 text-slate-400">{getCopy(item.text, lang)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const DeepFAQ = ({ content, lang }: { content: PageEnrichmentContent; lang: Language }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
    variants={sectionVariants}
    className="section-shell kinetic-section py-7 md:py-12"
  >
    <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.7fr_1.3fr]">
      <motion.div variants={itemVariants}>
        <p className="section-kicker">{lang === 'ar' ? 'أسئلتك قبل القرار' : 'Your questions before deciding'}</p>
        <h3 className="mt-4 font-display text-[1.55rem] font-semibold leading-tight text-white md:text-4xl">
          {lang === 'ar' ? 'إجابات تقلل التردد قبل التواصل' : 'Answers that reduce hesitation before contact'}
        </h3>
      </motion.div>
      <div className="grid gap-3">
        {content.faq.map((item) => (
          <motion.div key={getCopy(item.question, lang)} variants={itemVariants} whileHover={interactiveHover} className="surface-card interactive-card rounded-[1.15rem] p-4 md:rounded-[1.25rem] md:p-5">
            <h4 className="flex items-start gap-3 font-display text-lg font-semibold text-white">
              <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
              {getCopy(item.question, lang)}
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-400">{getCopy(item.answer, lang)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const FinalCta = ({ content, lang, to }: { content: PageEnrichmentContent; lang: Language; to: string }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.24 }}
    variants={sectionVariants}
    className="section-shell kinetic-section pb-10 pt-7 md:pb-16 md:pt-10"
  >
    <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} className="surface-card-strong interactive-card motion-sheen mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-[1.35rem] p-5 md:rounded-[2.4rem] md:p-8 lg:flex-row lg:items-center">
      <div>
        <h3 className="font-display text-[1.55rem] font-semibold leading-tight text-white md:text-4xl">{getCopy(content.ctaTitle, lang)}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">{getCopy(content.ctaText, lang)}</p>
      </div>
      <Link className="btn-primary shrink-0" to={to}>
        {lang === 'ar' ? 'ابدأ النقاش الآن' : 'Start the conversation'}
        <ArrowUpLeft className="h-4 w-4" />
      </Link>
    </motion.div>
  </motion.section>
);

const MobilePageEnrichment = ({
  content,
  heroMedia,
  storyMedia,
  lang,
  to,
}: {
  content: PageEnrichmentContent;
  heroMedia: EnrichmentMediaAsset;
  storyMedia: EnrichmentMediaAsset;
  lang: Language;
  to: string;
}) => {
  const problems = content.problems.slice(0, 2);
  const solutions = content.solutions.slice(0, 2);
  const process = content.process.slice(0, 3);
  const faq = content.faq.slice(0, 3);

  return (
    <div className="page-enrichment page-enrichment-mobile md:hidden" aria-label={repairMojibake(lang === 'ar' ? 'تفاصيل إضافية مقنعة' : 'Additional persuasive details')}>
      <section className="section-shell kinetic-section pb-4 pt-5">
        <div className="surface-card-strong overflow-hidden rounded-[1.15rem] p-3">
          <ProjectImage
            alt={getCopy(heroMedia.alt, lang)}
            className="h-[9.5rem] w-full rounded-[0.9rem] object-cover"
            src={heroMedia.src}
          />
          <p className="section-kicker mt-3 w-fit">{getCopy(content.eyebrow, lang)}</p>
          <h2 className="mt-3 font-display text-[1.35rem] font-semibold leading-tight text-white">
            {getCopy(content.title, lang)}
          </h2>
          <p className="mt-2 text-[0.82rem] leading-6 text-slate-400">{getCopy(content.lead, lang)}</p>
          <div className="mt-3 flex snap-x gap-2 overflow-x-auto pb-1">
            {content.metrics.map((metric) => (
              <div key={metric.value} className="min-w-[8.5rem] snap-start rounded-[0.9rem] border border-white/8 bg-white/[0.035] p-2.5">
                <p className="font-display text-lg font-bold text-cyan-300">{metric.value}</p>
                <p className="mt-0.5 text-[0.7rem] leading-4 text-slate-400">{getCopy(metric.label, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell kinetic-section py-4">
        <div className="grid gap-3">
          <div className="surface-card grid grid-cols-[5.7rem_1fr] gap-3 rounded-[1rem] p-3">
            <ProjectImage
              alt={getCopy(storyMedia.alt, lang)}
              className="h-full min-h-[7.2rem] rounded-[0.8rem] object-cover"
              src={storyMedia.src}
            />
            <div>
              <p className="text-[0.72rem] font-bold text-cyan-300">{lang === 'ar' ? 'قصة الصفحة' : 'Page story'}</p>
              <h3 className="mt-1 font-display text-[1.05rem] font-semibold leading-6 text-white">{getCopy(content.storyTitle, lang)}</h3>
              <p className="mt-1 text-[0.78rem] leading-5 text-slate-400">{getCopy(content.storyText, lang)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="surface-card rounded-[1rem] p-3">
              <p className="text-[0.72rem] font-bold text-slate-400">{lang === 'ar' ? 'قبل' : 'Before'}</p>
              <div className="mt-2 grid gap-2">
                {problems.map((item) => (
                  <div key={getCopy(item.title, lang)} className="rounded-[0.8rem] border border-white/8 bg-white/[0.025] p-2">
                    <h4 className="text-[0.82rem] font-bold leading-5 text-white">{getCopy(item.title, lang)}</h4>
                    <p className="mt-1 text-[0.7rem] leading-4 text-slate-400">{getCopy(item.text, lang)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-card-strong rounded-[1rem] p-3">
              <p className="text-[0.72rem] font-bold text-cyan-300">{lang === 'ar' ? 'بعد' : 'After'}</p>
              <div className="mt-2 grid gap-2">
                {solutions.map((item) => (
                  <div key={getCopy(item.title, lang)} className="rounded-[0.8rem] border border-cyan-300/15 bg-cyan-300/8 p-2">
                    <h4 className="text-[0.82rem] font-bold leading-5 text-white">{getCopy(item.title, lang)}</h4>
                    <p className="mt-1 text-[0.7rem] leading-4 text-slate-400">{getCopy(item.text, lang)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex snap-x gap-2 overflow-x-auto pb-1">
            {process.map((item, index) => (
              <div key={getCopy(item.title, lang)} className="surface-card min-w-[15rem] snap-start rounded-[1rem] p-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">{index + 1}</span>
                <h4 className="mt-2 font-display text-[1rem] font-semibold leading-6 text-white">{getCopy(item.title, lang)}</h4>
                <p className="mt-1 text-[0.78rem] leading-5 text-slate-400">{getCopy(item.text, lang)}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-2">
            {faq.map((item) => (
              <div key={getCopy(item.question, lang)} className="surface-card rounded-[1rem] p-3">
                <h4 className="font-display text-[0.95rem] font-semibold leading-6 text-white">{getCopy(item.question, lang)}</h4>
                <p className="mt-1.5 text-[0.78rem] leading-5 text-slate-400">{getCopy(item.answer, lang)}</p>
              </div>
            ))}
          </div>

          <Link className="btn-primary justify-center" to={to}>
            {repairMojibake(lang === 'ar' ? 'ابدأ النقاش الآن' : 'Start the conversation')}
            <ArrowUpLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const PageEnrichment = () => {
  const location = useLocation();
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const normalizedPath = location.pathname.replace(/^\/en(?=\/|$)/, '') || '/';

  if (/^\/services\/[^/]+\/?$/.test(normalizedPath)) {
    return null;
  }

  const content = getPageEnrichment(location.pathname);

  if (!content) {
    return null;
  }

  const heroMedia = enrichmentMediaById[content.heroMediaId];
  const storyMedia = enrichmentMediaById[content.storyMediaId];
  const video = enrichmentMediaById[content.videoMediaId];

  if (!heroMedia || !storyMedia || !video) {
    return null;
  }

  if (isMobile) {
    return (
      <MobilePageEnrichment
        content={content}
        heroMedia={heroMedia}
        lang={lang}
        storyMedia={storyMedia}
        to={localizePath('/contact')}
      />
    );
  }

  return (
    <div className="page-enrichment" aria-label={lang === 'ar' ? 'تفاصيل إضافية مقنعة' : 'Additional persuasive details'}>
      <RichPageSection content={content} lang={lang} media={heroMedia} />
      <MediaStoryBlock content={content} lang={lang} media={storyMedia} />
      <ComparisonGrid lang={lang} problems={content.problems} solutions={content.solutions} />
      <VideoFeatureBlock content={content} lang={lang} video={video} />
      <DeepFAQ content={content} lang={lang} />
      <FinalCta content={content} lang={lang} to={localizePath('/contact')} />
    </div>
  );
};

export default PageEnrichment;
