import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpLeft,
  HelpCircle,
  Layers3,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import HeroMediaBackdrop from './HeroMediaBackdrop';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { getPageEnrichment } from '../data/pageEnrichment';
import { useLanguage } from '../hooks/useLanguage';

interface DetailSection {
  title: { ar: string; en: string };
  body: { ar: string; en: string };
  icon?: typeof Layers3;
  image?: string;
}

interface DetailMetric {
  value: string;
  label: { ar: string; en: string };
  icon?: typeof TrendingUp;
  trend?: string;
}

interface EnhancedDetailPageContent {
  slug: string;
  parentPath: string;
  parentLabel: { ar: string; en: string };
  eyebrow: { ar: string; en: string };
  title: { ar: string; en: string };
  summary: { ar: string; en: string };
  audience: { ar: string; en: string };
  promise: { ar: string; en: string };
  sections: DetailSection[];
  deliverables: { ar: string; en: string }[];
  useCases: { ar: string; en: string }[];
  metrics: DetailMetric[];
  faq: Array<{
    question: { ar: string; en: string };
    answer: { ar: string; en: string };
  }>;
  features?: Array<{
    title: { ar: string; en: string };
    description: { ar: string; en: string };
    icon: typeof Layers3;
  }>;
  comparison?: Array<{
    aspect: { ar: string; en: string };
    before: { ar: string; en: string };
    after: { ar: string; en: string };
  }>;
  timeline?: Array<{
    phase: string;
    title: { ar: string; en: string };
    body: { ar: string; en: string };
  }>;
  toolsDeliverables?: Array<{
    name: { ar: string; en: string };
    description: { ar: string; en: string };
    impact: { ar: string; en: string };
  }>;
  checklist?: Array<{
    item: { ar: string; en: string };
    details: { ar: string; en: string };
  }>;
  scenarios?: Array<{
    title: { ar: string; en: string };
    body: { ar: string; en: string };
  }>;
  decisionMatrix?: Array<{
    label: { ar: string; en: string };
    value: { ar: string; en: string };
    note: { ar: string; en: string };
  }>;
  cta: { ar: string; en: string };
  accent: string;
}

interface DetailPageEnhancedProps {
  page?: EnhancedDetailPageContent;
  isLoading?: boolean;
}

const DetailPageEnhanced: React.FC<DetailPageEnhancedProps> = ({ page, isLoading }) => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const text = (value: { ar: string; en: string }) => (isArabic ? value.ar : value.en);
  const enrichment = page ? getPageEnrichment(`${page.parentPath}/${page.slug}`) : undefined;
  const heroFallbackMedia = enrichment
    ? enrichmentMediaById[enrichment.heroMediaId]
    : enrichmentMediaById['services-hero-product'];
  const heroMedia = enrichment
    ? enrichmentMediaById[enrichment.videoMediaId] ?? heroFallbackMedia
    : enrichmentMediaById['services-code-build'];
  const heroComposition = enrichment?.heroComposition ?? 'text-right';
  const heroGridClass =
    heroComposition === 'centered'
      ? 'relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center'
      : heroComposition === 'metrics-bottom'
        ? 'relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-7'
        : heroComposition === 'split-media'
          ? 'relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(20rem,0.55fr)_minmax(0,1fr)] lg:items-end'
          : 'relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end';
  const heroTitle = enrichment?.layoutVariant ? enrichment.title : page?.title;
  const heroLead = enrichment?.layoutVariant ? enrichment.lead : page?.summary;

  if (isLoading || !page) {
    return (
      <section className="section-shell py-24">
        <div className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 text-center animate-pulse">
          <div className="h-8 w-32 mx-auto bg-slate-700 rounded-lg mb-4" />
          <div className="h-12 w-full bg-slate-700 rounded-lg mb-6" />
          <div className="h-64 w-full bg-slate-700 rounded-lg" />
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-20"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="mobile-ornament absolute right-[-10%] top-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" />
        <div className="mobile-ornament absolute bottom-[18%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-amber-400/8 blur-[150px] animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative left-1/2 right-1/2 -mx-[50vw] flex min-h-[calc(100svh-7rem)] w-screen items-end overflow-hidden px-4 pb-7 pt-20 sm:px-6 md:min-h-[calc(100svh-7.8rem)] md:px-10 md:pb-10 md:pt-[7.5rem] lg:px-14"
        >
          <HeroMediaBackdrop fallbackMedia={heroFallbackMedia} isArabic={isArabic} media={heroMedia} />
          <div className={heroGridClass}>
            <div className={heroComposition === 'centered' ? 'text-center' : heroComposition === 'text-left' ? 'text-left' : isArabic ? 'text-right' : 'text-left'}>
              <Link className="section-kicker inline-flex border-cyan-300/35 bg-[#06151c]/62 text-cyan-50 shadow-[0_18px_55px_-36px_rgba(45,212,191,0.8)] backdrop-blur-2xl hover:text-cyan-300 transition-colors" to={localizePath(page.parentPath)}>
                {text(page.parentLabel)}
              </Link>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200/90 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)]">
                {text(page.eyebrow)}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${heroComposition === 'centered' ? 'mx-auto max-w-[14ch]' : heroComposition === 'split-media' ? 'max-w-[13ch]' : 'max-w-[12ch]'} mt-4 font-display text-[2.45rem] font-black leading-[1.04] text-white drop-shadow-[0_18px_36px_rgba(0,0,0,0.62)] sm:text-[3.35rem] md:text-7xl lg:text-[5.25rem]`}
              >
                {heroTitle ? text(heroTitle) : text(page.title)}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`${heroComposition === 'centered' ? 'mx-auto' : ''} mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-100 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)] md:text-xl md:leading-9`}
              >
                {heroLead ? text(heroLead) : text(page.summary)}
              </motion.p>
            </div>

            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[1.35rem] border border-white/12 bg-[#061016]/58 p-4 shadow-[0_20px_60px_-38px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:rounded-[1.6rem] md:p-5"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                <Layers3 className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {isArabic ? 'لمن هذا؟' : 'Best for'}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{text(page.audience)}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {isArabic ? 'الوعد' : 'Promise'}
              </p>
              <p className="mt-2 text-sm leading-7 text-white">{text(page.promise)}</p>

              {/* Metrics */}
              <div className="mt-5 grid gap-2">
                {page.metrics.slice(0, 2).map((metric, idx) => (
                  <motion.div
                    key={`${metric.value}-${metric.label.en}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="rounded-[1rem] border border-white/8 bg-white/[0.035] p-3 hover:bg-white/[0.055] transition-colors"
                  >
                    <p className="font-display text-2xl font-black text-cyan-300">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{text(metric.label)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Detailed Sections with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
              {page.sections.map((section, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === idx
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  {text(section.title)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {text(page.sections[activeTab].title)}
                </h3>
                <p className="text-slate-300 leading-7 mb-6">{text(page.sections[activeTab].body)}</p>

                {/* Feature Points */}
                {page.features && page.features.length > 0 && (
                  <div className="space-y-3">
                    {page.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-3 p-3 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors"
                      >
                        <feature.icon className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-white text-sm">{text(feature.title)}</p>
                          <p className="text-xs text-slate-400 mt-1">{text(feature.description)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right side visual */}
              {page.sections[activeTab].image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden border border-white/10 h-96 bg-gradient-to-br from-slate-800 to-slate-900"
                >
                  <img
                    src={page.sections[activeTab].image}
                    alt={text(page.sections[activeTab].title)}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Comparison Section */}
        {page.comparison && page.comparison.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 md:mt-24"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              {isArabic ? 'ما الفرق؟' : 'The Difference'}
            </h2>
            <div className="grid gap-4">
              {page.comparison.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid md:grid-cols-3 gap-4 p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">
                      {text(item.aspect)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                      {text(item.before)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-400" />
                    <div className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                      {text(item.after)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {page.timeline && page.timeline.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-16 md:mt-24"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              {isArabic ? 'مراحل التنفيذ التفصيلية' : 'Detailed execution stages'}
            </h2>
            <div className="grid gap-4">
              {page.timeline.map((item) => (
                <div key={item.phase} className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[5rem_1fr]">
                  <span className="font-display text-3xl font-black text-cyan-300">{item.phase}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{text(item.title)}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{text(item.body)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {page.decisionMatrix && page.decisionMatrix.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="mt-16 md:mt-24"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              {isArabic ? 'مصفوفة القرار' : 'Decision matrix'}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {page.decisionMatrix.map((item) => (
                <div key={item.label.en} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-300">{text(item.label)}</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">{text(item.value)}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text(item.note)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {page.scenarios && page.scenarios.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 md:mt-24"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              {isArabic ? 'سيناريوهات واقعية' : 'Real scenarios'}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {page.scenarios.map((item) => (
                <div key={item.title.en} className="rounded-xl border border-cyan-500/15 bg-cyan-500/5 p-5">
                  <h3 className="font-display text-xl font-bold text-white">{text(item.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text(item.body)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {page.toolsDeliverables && page.toolsDeliverables.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-16 md:mt-24"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              {isArabic ? 'مخرجات وأدوات العمل' : 'Tools and deliverables'}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {page.toolsDeliverables.map((item) => (
                <div key={item.name.en} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                  <h3 className="font-display text-xl font-bold text-white">{text(item.name)}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text(item.description)}</p>
                  <p className="mt-4 border-t border-white/10 pt-3 text-xs font-semibold text-emerald-300">{text(item.impact)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {page.checklist && page.checklist.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.64 }}
            className="mt-16 md:mt-24"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              {isArabic ? 'قائمة فحص قبل الإطلاق' : 'Pre-launch checklist'}
            </h2>
            <div className="grid gap-3">
              {page.checklist.map((item) => (
                <div key={item.item.en} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="font-display text-lg font-bold text-white">{text(item.item)}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{text(item.details)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQs */}
        {page.faq && page.faq.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 md:mt-24"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              {isArabic ? 'أسئلة متكررة' : 'Common Questions'}
            </h2>
            <div className="space-y-3">
              {page.faq.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border border-white/10 rounded-lg overflow-hidden hover:border-cyan-500/30 transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                  >
                    <p className="font-medium text-white flex-1 text-start">{text(item.question)}</p>
                    <motion.div
                      animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HelpCircle className="h-5 w-5 text-cyan-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10 bg-white/[0.02] p-4"
                      >
                        <p className="text-slate-300 leading-7">{text(item.answer)}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 md:mt-24"
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 md:p-12 text-center">
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                {isArabic ? 'جاهز للبداية؟' : 'Ready to start?'}
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{text(page.cta)}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(localizePath('/contact'))}
                className="btn-primary inline-flex items-center gap-2"
              >
                {isArabic ? 'تواصل معنا' : 'Contact us'}
                <ArrowUpLeft className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DetailPageEnhanced;
export type { EnhancedDetailPageContent };
