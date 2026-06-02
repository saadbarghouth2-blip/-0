import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpLeft,
  BadgeCheck,
  CheckCircle,
  HelpCircle,
  Sparkles,
  GitFork,
  Briefcase,
  FileCode,
  Quote,
  ChevronDown,
  Check,
  ListChecks,
  Eye,
  Compass,
  MessageSquare,
  Phone,
  FileText,
  Shield,
  Award,
  Cpu,
  Grid,
  ShoppingCart,
  GitBranch,
  CreditCard,
  Link as LucideLink,
  Sliders,
  Search,
  Monitor,
  Play,
  Users,
  Target,
  Calendar,
  FileCheck,
  BookOpen,
  PenTool,
  Component,
  FileSpreadsheet,
  ListTodo,
  PhoneCall,
  Send
} from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';

import {
  aboutDetailPages,
  contactDetailPages,
  detailWorldEnhancements,
  homeDetailPages,
  serviceDetailPages,
  testimonialStoryPages,
  type DetailPageContent,
} from '../data/company';
import { enrichmentMediaById } from '../data/enrichmentMedia';
import { getPageEnrichment } from '../data/pageEnrichment';
import HeroMediaBackdrop from '../components/HeroMediaBackdrop';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

const detailPagesByPrefix: Array<{ prefix: string; pages: DetailPageContent[] }> = [
  { prefix: '/home/', pages: homeDetailPages },
  { prefix: '/about/', pages: aboutDetailPages },
  { prefix: '/services/', pages: serviceDetailPages },
  { prefix: '/contact/', pages: contactDetailPages },
  { prefix: '/testimonials/', pages: testimonialStoryPages },
];

const getDefaultMetrics = (page: DetailPageContent) => [
  { value: `${page.sections.length}+`, label: { ar: 'محاور تفصيل داخل الصفحة', en: 'detail themes on the page' } },
  { value: `${page.deliverables.length}`, label: { ar: 'مخرجات واضحة', en: 'clear deliverables' } },
  { value: `${page.useCases.length}`, label: { ar: 'استخدامات مناسبة', en: 'useful cases' } },
];

const getDefaultFaq = (page: DetailPageContent) => [
  {
    question: { ar: `هل ${page.eyebrow.ar} مناسب لمشروعي؟`, en: `Is ${page.eyebrow.en} right for my project?` },
    answer: { ar: page.audience.ar, en: page.audience.en },
  },
  {
    question: { ar: 'ما النتيجة المتوقعة من هذه الصفحة؟', en: 'What outcome should this page create?' },
    answer: { ar: page.promise.ar, en: page.promise.en },
  },
];

const getPageKey = (page: DetailPageContent) => `${page.parentPath}/${page.slug}`;

type WorldBlock = 'insights' | 'comparison' | 'roadmap' | 'matrix' | 'scenarios' | 'proof';

const worldBlockMixes: Record<string, WorldBlock[]> = {
  '/home/visitor-journey': ['roadmap', 'insights', 'matrix', 'scenarios'],
  '/home/pre-project-questions': ['comparison', 'matrix', 'roadmap', 'proof'],
  '/about/story': ['roadmap', 'comparison', 'scenarios', 'proof'],
  '/about/method': ['roadmap', 'matrix', 'insights', 'proof'],
  '/about/culture': ['matrix', 'scenarios', 'comparison', 'proof'],
  '/services/company-websites': ['comparison', 'matrix', 'insights', 'proof'],
  '/services/ecommerce': ['roadmap', 'comparison', 'matrix', 'scenarios'],
  '/services/custom-systems': ['matrix', 'roadmap', 'scenarios', 'proof'],
  '/services/ai-products': ['scenarios', 'matrix', 'comparison', 'proof'],
  '/testimonials/trust-stories': ['comparison', 'roadmap', 'proof', 'scenarios'],
  '/testimonials/questions-before-deciding': ['matrix', 'comparison', 'insights', 'proof'],
  '/contact/direct': ['matrix', 'roadmap', 'comparison', 'proof'],
};

const getBlockMix = (page: DetailPageContent): WorldBlock[] =>
  worldBlockMixes[getPageKey(page)] ??
  (page.layoutVariant === 'service'
    ? ['comparison', 'roadmap', 'matrix', 'scenarios', 'proof']
    : page.layoutVariant === 'proof'
      ? ['proof', 'comparison', 'scenarios', 'matrix', 'roadmap']
      : page.layoutVariant === 'contact'
        ? ['matrix', 'roadmap', 'comparison', 'scenarios', 'proof']
        : page.layoutVariant === 'editorial'
          ? ['insights', 'scenarios', 'comparison', 'proof', 'roadmap']
          : ['roadmap', 'matrix', 'insights', 'proof', 'scenarios']);

const blockHeadingOverrides: Record<string, Partial<Record<WorldBlock, { ar: string; en: string }>>> = {
  '/home/visitor-journey': {
    roadmap: { ar: 'رحلة الزائر خطوة بخطوة', en: 'Visitor journey step by step' },
    matrix: { ar: 'مسارات قرار الزائر', en: 'Visitor decision paths' },
    scenarios: { ar: 'أنواع الزوار داخل الصفحة', en: 'Visitor types inside the page' },
  },
  '/home/pre-project-questions': {
    comparison: { ar: 'من تردد إلى وضوح', en: 'From hesitation to clarity' },
    matrix: { ar: 'أسئلة تحدد نطاق البداية', en: 'Questions that shape starting scope' },
    proof: { ar: 'ما يجعل أول رسالة جدية', en: 'What makes the first message serious' },
  },
  '/about/story': {
    roadmap: { ar: 'محطات تطور نطق', en: 'Notaq growth milestones' },
    comparison: { ar: 'من نبذة إلى قصة تشغيل', en: 'From bio to operating story' },
    proof: { ar: 'ما تثبته القصة', en: 'What the story proves' },
  },
  '/about/method': {
    roadmap: { ar: 'خريطة التسليم', en: 'Delivery map' },
    matrix: { ar: 'مصفوفة قرارات التنفيذ', en: 'Execution decision matrix' },
    insights: { ar: 'تفاصيل تجعل المنهج عمليًا', en: 'Details that make the method practical' },
  },
  '/about/culture': {
    matrix: { ar: 'مبادئ تتحول إلى قرارات', en: 'Principles turned into decisions' },
    scenarios: { ar: 'الثقافة أثناء العمل', en: 'Culture during the work' },
    proof: { ar: 'سلوكيات تثبت القيم', en: 'Behaviors that prove values' },
  },
  '/services/company-websites': {
    comparison: { ar: 'من موقع تعريفي إلى نظام ثقة', en: 'From brochure site to trust system' },
    matrix: { ar: 'دور كل صفحة في موقع الشركة', en: 'Role of each company-site page' },
    insights: { ar: 'تفاصيل تسليم مواقع الشركات', en: 'Company website delivery details' },
  },
  '/services/ecommerce': {
    roadmap: { ar: 'رحلة الشراء الكاملة', en: 'Full buying journey' },
    comparison: { ar: 'من كتالوج إلى تجربة شراء', en: 'From catalog to buying experience' },
    matrix: { ar: 'خريطة احتكاك المتجر', en: 'Store friction map' },
  },
  '/services/custom-systems': {
    matrix: { ar: 'الأدوار والحالات داخل النظام', en: 'Roles and states inside the system' },
    roadmap: { ar: 'Workflow من الفكرة للتشغيل', en: 'Workflow from idea to operation' },
    scenarios: { ar: 'سيناريوهات تشغيل يومية', en: 'Daily operation scenarios' },
  },
  '/services/ai-products': {
    scenarios: { ar: 'سيناريوهات AI قابلة للاستخدام', en: 'Usable AI scenarios' },
    matrix: { ar: 'حواجز الثقة في منتجات AI', en: 'AI product trust guardrails' },
    comparison: { ar: 'من زر سحري إلى منتج مفهوم', en: 'From magic button to understandable product' },
  },
  '/testimonials/trust-stories': {
    comparison: { ar: 'من رأي قصير إلى قصة ثقة', en: 'From short praise to trust story' },
    roadmap: { ar: 'قبل وأثناء وبعد التعاون', en: 'Before, during, and after collaboration' },
    proof: { ar: 'أنواع الأثر التي تكشفها الشهادات', en: 'Impact types revealed by testimonials' },
  },
  '/testimonials/questions-before-deciding': {
    matrix: { ar: 'كيف تقرأ الشهادة قبل القرار', en: 'How to read testimonials before deciding' },
    comparison: { ar: 'من مدح عام إلى دليل قرار', en: 'From generic praise to decision proof' },
    insights: { ar: 'إشارات ثقة لا تفوتها', en: 'Trust signals to notice' },
  },
  '/contact/direct': {
    matrix: { ar: 'اختيار قناة التواصل المناسبة', en: 'Choose the right contact channel' },
    roadmap: { ar: 'ماذا يحدث بعد أول رسالة', en: 'What happens after the first message' },
    comparison: { ar: 'من رسالة غامضة إلى بداية واضحة', en: 'From vague message to clear start' },
  },
};

const defaultBlockHeadings: Record<WorldBlock, { ar: string; en: string }> = {
  insights: { ar: 'تفاصيل مركزة', en: 'Focused insights' },
  comparison: { ar: 'قبل وبعد التنظيم', en: 'Before and after structure' },
  roadmap: { ar: 'خريطة الطريق', en: 'Roadmap' },
  matrix: { ar: 'مصفوفة القرار', en: 'Decision matrix' },
  scenarios: { ar: 'سيناريوهات واقعية', en: 'Real scenarios' },
  proof: { ar: 'دلائل القوة', en: 'Proof points' },
};

const getBlockHeading = (page: DetailPageContent, block: WorldBlock, isArabic: boolean) => {
  const heading = blockHeadingOverrides[getPageKey(page)]?.[block] ?? defaultBlockHeadings[block];
  return isArabic ? heading.ar : heading.en;
};

const getInsights = (page: DetailPageContent): DetailPageContent['insights'] =>
  page.insights ?? [
    ...page.sections.map((section) => ({
      title: section.title,
      body: section.body,
    })),
    ...page.deliverables.slice(0, 2).map((item) => ({
      title: item,
      body: {
        ar: 'تفصيل عملي يوضح ما سيتم تسليمه وكيف يخدم قرار الزائر داخل الصفحة.',
        en: 'A practical detail that clarifies what will be delivered and how it supports the visitor decision.',
      },
    })),
  ];

const getComparison = (page: DetailPageContent): NonNullable<DetailPageContent['comparison']> =>
  page.comparison ?? [
    {
      before: page.sections[0]?.body ?? page.summary,
      after: page.sections[1]?.body ?? page.promise,
    },
    {
      before: {
        ar: 'تفاصيل كثيرة تظهر كقائمة طويلة بدون ترتيب واضح أو أولوية للقرار.',
        en: 'Rich details appear as a long list without clear order or decision priority.',
      },
      after: {
        ar: 'التفاصيل تتحول إلى طبقات: فهم، ثقة، دليل، ثم خطوة تالية واضحة.',
        en: 'Details become layers: understanding, trust, proof, then a clear next step.',
      },
    },
  ];

const getRoadmap = (page: DetailPageContent): NonNullable<DetailPageContent['roadmap']> =>
  page.roadmap ?? [
    ...page.sections.map((section, index) => ({
      phase: `0${index + 1}`,
      title: section.title,
      body: section.body,
    })),
    {
      phase: `0${page.sections.length + 1}`,
      title: { ar: 'التسليم والقياس', en: 'Handoff and measure' },
      body: page.promise,
    },
  ];

const getDecisionMatrix = (page: DetailPageContent): NonNullable<DetailPageContent['decisionMatrix']> =>
  page.decisionMatrix ?? page.deliverables.map((item, index) => ({
    label: item,
    value: page.useCases[index % page.useCases.length] ?? page.eyebrow,
    note: {
      ar: 'يربط هذا الجزء بين ما تستلمه وبين الحالة التي يخدمها داخل شركتك.',
      en: 'This connects what you receive with the use case it supports inside your company.',
    },
  }));

const getScenarios = (page: DetailPageContent): NonNullable<DetailPageContent['scenarios']> =>
  page.scenarios ?? page.useCases.map((item) => ({
    title: item,
    body: {
      ar: `عندما يكون الهدف هو ${item.ar}، نرتب الرسائل والأدلة بحيث يشعر الزائر أن التجربة مصممة لحالته.`,
      en: `When the goal is ${item.en}, we arrange messages and proof so visitors feel the experience is shaped around their case.`,
    },
  }));

const getProofPoints = (page: DetailPageContent): NonNullable<DetailPageContent['proofPoints']> =>
  page.proofPoints ?? [
    {
      title: { ar: 'وضوح قابل للقياس', en: 'Measurable clarity' },
      body: { ar: 'كل قسم يجيب سؤالًا أو يقلل ترددًا أو يقرب الزائر من الخطوة التالية.', en: 'Every section answers a question, reduces hesitation, or moves visitors toward the next step.' },
    },
    {
      title: { ar: 'تفاصيل لا تبدو حشوًا', en: 'Details without filler' },
      body: { ar: 'المحتوى الكثير يظهر في وحدات مختلفة حتى يظل سهل القراءة والتصفح.', en: 'Rich content appears in varied modules so it stays easy to read and browse.' },
    },
    {
      title: { ar: 'قابلية توسع', en: 'Scalable structure' },
      body: { ar: 'يمكن إضافة صفحات وخدمات وأسئلة لاحقًا بدون فقدان النظام البصري.', en: 'More pages, services, and questions can be added later without losing visual order.' },
    },
  ];

const findDetailPage = (pathname: string, slug?: string) => {
  const normalizedPath = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const group = detailPagesByPrefix.find((item) => normalizedPath.startsWith(item.prefix));

  if (!group) {
    return undefined;
  }

  return group.pages.find((page) => page.slug === slug);
};

interface WorldBlockProps {
  isArabic: boolean;
  page: DetailPageContent;
  shouldReduceMotion: boolean;
  text: (value: { ar: string; en: string }) => string;
}

const InsightsBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => (
  <motion.div
    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="surface-card-strong motion-sheen rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7"
  >
    <p className="section-kicker mb-5">
      <Sparkles className="h-4 w-4" />
      {getBlockHeading(page, 'insights', isArabic)}
    </p>
    <div className="grid gap-3 md:grid-cols-2">
      {getInsights(page)?.slice(0, 6).map((item) => (
        <div key={item.title.en} className="rounded-[1.1rem] border border-white/8 bg-white/[0.035] p-4">
          <h3 className="font-display text-base font-bold text-white">{text(item.title)}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{text(item.body)}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const ComparisonBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => (
  <motion.div
    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid gap-4 md:grid-cols-2"
  >
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:rounded-[2rem] md:p-7">
      <p className="section-kicker mb-5">{isArabic ? 'قبل' : 'Before'}</p>
      <div className="space-y-3">
        {getComparison(page).map((item) => (
          <div key={item.before.en} className="rounded-[1.1rem] border border-white/8 bg-[#06090f]/45 p-4">
            <p className="text-sm leading-7 text-slate-400">{text(item.before)}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="surface-card-strong motion-sheen rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7">
      <p className="section-kicker mb-5">{getBlockHeading(page, 'comparison', isArabic)}</p>
      <div className="space-y-3">
        {getComparison(page).map((item) => (
          <div key={item.after.en} className="rounded-[1.1rem] border border-cyan-300/15 bg-cyan-300/8 p-4">
            <p className="text-sm leading-7 text-slate-300">{text(item.after)}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const RoadmapBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => (
  <motion.div
    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:rounded-[2rem] md:p-7"
  >
    <p className="section-kicker mb-5">{getBlockHeading(page, 'roadmap', isArabic)}</p>
    <div className="grid gap-3">
      {getRoadmap(page).slice(0, 5).map((item) => (
        <motion.div
          key={item.phase}
          whileHover={shouldReduceMotion ? undefined : { x: isArabic ? -5 : 5 }}
          className="grid gap-3 rounded-[1.1rem] border border-white/8 bg-[#06090f]/45 p-4 md:grid-cols-[4.5rem_1fr]"
        >
          <span className="font-display text-3xl font-black text-cyan-300/80">{item.phase}</span>
          <div>
            <h3 className="font-display text-lg font-bold text-white">{text(item.title)}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">{text(item.body)}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const MatrixBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => (
  <motion.div
    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="surface-card-strong rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7"
  >
    <p className="section-kicker mb-5">{getBlockHeading(page, 'matrix', isArabic)}</p>
    <div className="grid gap-3 md:grid-cols-3">
      {getDecisionMatrix(page).slice(0, 6).map((item) => (
        <motion.div
          key={item.label.en}
          whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          className="rounded-[1.1rem] border border-white/8 bg-white/[0.035] p-4"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{text(item.label)}</p>
          <h3 className="mt-3 font-display text-lg font-bold text-white">{text(item.value)}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{text(item.note)}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ScenariosBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => (
  <motion.div
    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:rounded-[2rem] md:p-7"
  >
    <p className="section-kicker mb-5">{getBlockHeading(page, 'scenarios', isArabic)}</p>
    <div className="grid gap-3 md:grid-cols-3">
      {getScenarios(page).slice(0, 3).map((item) => (
        <div key={item.title.en} className="rounded-[1.1rem] border border-white/8 bg-[#06090f]/45 p-4">
          <h3 className="font-display text-lg font-bold text-white">{text(item.title)}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-400">{text(item.body)}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const ProofBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => (
  <motion.div
    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="surface-card-strong motion-sheen rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7"
  >
    <p className="section-kicker mb-5">{getBlockHeading(page, 'proof', isArabic)}</p>
    <div className="grid gap-3 md:grid-cols-3">
      {getProofPoints(page).map((item) => (
        <div key={item.title.en} className="rounded-[1.1rem] border border-cyan-300/15 bg-cyan-300/8 p-4">
          <h3 className="font-display text-lg font-bold text-white">{text(item.title)}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{text(item.body)}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const renderIcon = (iconName?: string) => {
  if (!iconName) return null;
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    GitFork, Briefcase, FileCode, Quote, ChevronDown, Check, ListChecks,
    Eye, Compass, CheckCircle, HelpCircle, ArrowUpLeft,
    MessageSquare, Phone, FileText, Shield, Sparkles, Award, Cpu,
    Grid, ShoppingCart, GitBranch, CreditCard, Link: LucideLink,
    Sliders, Search, Monitor, Play, Users, Target, Calendar,
    FileCheck, BookOpen, PenTool, Component, FileSpreadsheet, ListTodo,
    PhoneCall, Send
  };
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  return <IconComponent className="h-5 w-5" />;
};

const TimelineBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => {
  if (!page.timeline) return null;
  return (
    <motion.div
      id="timeline"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="surface-card-strong rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7 space-y-6"
    >
      <p className="section-kicker mb-2">
        <GitFork className="h-4 w-4" />
        {isArabic ? 'خطوات التنفيذ التفصيلية' : 'Detailed Execution Timeline'}
      </p>
      <div className={`relative ${isArabic ? 'border-r pr-6' : 'border-l pl-6'} border-white/10 space-y-8`}>
        {/* Vertical timeline line */}
        <div className={`absolute top-2 bottom-2 ${isArabic ? 'right-[-1px]' : 'left-[-1px]'} w-[2px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-transparent`} />
        {page.timeline.map((item, index) => {
          const colorClass = item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                             item.color === 'amber' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                             item.color === 'purple' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                             'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
          return (
            <div key={index} className="relative flex flex-col md:flex-row md:items-start gap-4">
              {/* Circle marker */}
              <span className={`absolute ${isArabic ? '-right-[32px]' : '-left-[32px]'} top-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border-2 border-cyan-400 z-10`}>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <div className="flex-1 rounded-[1.1rem] border border-white/8 bg-[#06090f]/45 p-4 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg border ${colorClass}`}>
                    {renderIcon(item.icon) ?? <span className="font-bold text-xs">{item.phase}</span>}
                  </span>
                  <h3 className="font-display text-base font-bold text-white">{text(item.title)}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text(item.body)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const StatsCounterBlock = ({ page, shouldReduceMotion, text }: WorldBlockProps) => {
  if (!page.statsCounter) return null;
  return (
    <motion.div
      id="stats"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid gap-3 md:grid-cols-3"
    >
      {page.statsCounter.map((item, index) => (
        <div
          key={index}
          className="surface-card-strong rounded-[1.5rem] p-5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
        >
          <h4 className="font-display text-4xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            {item.number}
          </h4>
          <p className="mt-2 text-sm font-bold text-white">{text(item.label)}</p>
          <p className="mt-1 text-xs text-slate-400 leading-5">{text(item.description)}</p>
        </div>
      ))}
    </motion.div>
  );
};

const ToolsDeliverablesBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => {
  if (!page.toolsDeliverables) return null;
  return (
    <motion.div
      id="tools"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="surface-card-strong rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7 space-y-6"
    >
      <p className="section-kicker mb-2">
        <Briefcase className="h-4 w-4" />
        {isArabic ? 'أدوات ومخرجات متقدمة' : 'Advanced Tools & Deliverables'}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {page.toolsDeliverables.map((item, index) => (
          <div
            key={index}
            className="rounded-[1.1rem] border border-white/8 bg-[#06090f]/45 p-4 hover:border-cyan-400/30 transition-all duration-300 flex gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {renderIcon(item.icon) ?? <FileCode className="h-5 w-5" />}
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-base font-bold text-white">{text(item.name)}</h3>
              <p className="text-xs text-slate-400 leading-5">{text(item.description)}</p>
              <div className="mt-2 pt-2 border-t border-white/5">
                <p className="text-xs font-semibold text-emerald-300">
                  <span className="text-slate-500 font-normal">{isArabic ? 'الأثر: ' : 'Impact: '}</span>
                  {text(item.impact)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const TestimonialSpotlightBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => {
  const item = page.testimonialSpotlight;
  if (!item) return null;
  return (
    <motion.div
      id="spotlight"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[1.5rem] border border-cyan-500/20 bg-gradient-to-br from-[#0c1a2d] to-[#060a12] p-6 md:rounded-[2rem] md:p-8"
    >
      <span className="absolute -left-4 -top-8 font-serif text-[12rem] text-cyan-500/5 select-none leading-none">“</span>
      
      <div className="relative z-10 space-y-4">
        <p className="section-kicker">
          <Quote className="h-4 w-4" />
          {isArabic ? 'قصة نجاح متميزة' : 'Featured Success Story'}
        </p>
        
        <blockquote className="text-base md:text-lg leading-8 md:leading-9 text-slate-200 font-medium">
          "{text(item.quote)}"
        </blockquote>
        
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
              <Quote className="h-4 w-4" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-white">{text(item.author)}</h4>
              <p className="text-xs text-slate-400">{text(item.role)}</p>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs font-semibold text-emerald-300">
            <span className="text-slate-500 font-normal">{isArabic ? 'الأثر المحقق: ' : 'Achieved Impact: '}</span>
            {text(item.impact)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ChecklistBlock = ({ isArabic, page, shouldReduceMotion, text }: WorldBlockProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!page.checklist) return null;
  
  return (
    <motion.div
      id="checklist"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="surface-card-strong rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7 space-y-6"
    >
      <p className="section-kicker mb-2">
        <ListChecks className="h-4 w-4" />
        {isArabic ? 'قائمة الفحص والمطابقة' : 'Audit & Alignment Checklist'}
      </p>
      <div className="divide-y divide-white/5">
        {page.checklist.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className="py-3 first:pt-0 last:pb-0">
              <button
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-3 text-right text-white hover:text-cyan-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${isOpen ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'border-white/20 text-slate-500'}`}>
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm md:text-base font-bold">{text(item.item)}</span>
                </div>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-300' : 'text-slate-500'}`} />
              </button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 pr-8 pl-2 text-xs md:text-sm text-slate-400 leading-6"
                >
                  {text(item.details)}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const DetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { lang, localizePath } = useLanguage();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const isArabic = lang === 'ar';
  const text = (value: { ar: string; en: string }) => (isArabic ? value.ar : value.en);
  const page = findDetailPage(location.pathname, slug);

  usePageMetadata(getPageSeoByPath(location.pathname, lang));

  if (!page) {
    return (
      <section className="section-shell py-24">
        <div className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 text-center">
          <p className="section-kicker mx-auto">404</p>
          <h1 className="mt-5 font-display text-3xl font-bold text-white">
            {isArabic ? 'التفاصيل غير متاحة' : 'Details unavailable'}
          </h1>
          <Link className="btn-primary mt-7" to={localizePath('/')}>
            {isArabic ? 'العودة للرئيسية' : 'Back home'}
          </Link>
        </div>
      </section>
    );
  }

  const displayPage: DetailPageContent = {
    ...page,
    ...(detailWorldEnhancements[getPageKey(page)] ?? {}),
  };
  const metrics = displayPage.metrics ?? getDefaultMetrics(displayPage);
  const faq = displayPage.faq ?? getDefaultFaq(displayPage);
  const detailHeroContent = getPageEnrichment(location.pathname);
  const detailHeroFallbackMedia = detailHeroContent
    ? enrichmentMediaById[detailHeroContent.heroMediaId]
    : enrichmentMediaById['team-planning'];
  const detailHeroMedia = detailHeroContent
    ? enrichmentMediaById[detailHeroContent.videoMediaId] ?? detailHeroFallbackMedia
    : enrichmentMediaById['digital-workflow'];
  const heroComposition = detailHeroContent?.heroComposition ?? 'text-right';
  const heroGridClass =
    heroComposition === 'centered'
      ? 'relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center'
      : heroComposition === 'metrics-bottom'
        ? 'relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-7'
        : heroComposition === 'split-media'
          ? 'relative z-10 mx-auto grid w-full max-w-7xl gap-7 lg:grid-cols-[minmax(20rem,0.55fr)_minmax(0,1fr)] lg:items-end'
          : 'relative z-10 mx-auto grid w-full max-w-7xl gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.48fr)] lg:items-end';
  const heroTextClass =
    heroComposition === 'centered'
      ? 'text-center'
      : heroComposition === 'text-left'
        ? 'text-left'
        : isArabic
          ? 'text-right'
          : 'text-left';
  const heroTitleClass =
    heroComposition === 'centered'
      ? 'mx-auto max-w-[14ch]'
      : heroComposition === 'split-media'
        ? 'max-w-[13ch]'
        : 'max-w-[12ch]';
  const variationWorldBlocks = (detailHeroContent?.sectionOrder ?? [])
    .map((block) => {
      if (block === 'timeline') return 'roadmap';
      if (block === 'deliverables') return 'insights';
      if (block === 'checklist') return 'matrix';
      if (block === 'gallery') return 'proof';
      if (block === 'faq') return null;
      return block;
    })
    .filter((block): block is WorldBlock => Boolean(block))
    .filter((block, index, blocks) => blocks.indexOf(block) === index);
  const worldBlocks = variationWorldBlocks.length > 0 ? variationWorldBlocks : getBlockMix(displayPage);
  const worldBlockProps = { isArabic, page: displayPage, shouldReduceMotion, text };
  const renderWorldBlock = (block: WorldBlock) => {
    if (block === 'insights') return <InsightsBlock key={block} {...worldBlockProps} />;
    if (block === 'comparison') return <ComparisonBlock key={block} {...worldBlockProps} />;
    if (block === 'roadmap') return <RoadmapBlock key={block} {...worldBlockProps} />;
    if (block === 'matrix') return <MatrixBlock key={block} {...worldBlockProps} />;
    if (block === 'scenarios') return <ScenariosBlock key={block} {...worldBlockProps} />;
    return <ProofBlock key={block} {...worldBlockProps} />;
  };
  const phases = [
    {
      label: isArabic ? 'المشكلة' : 'Problem',
      title: displayPage.sections[0]?.title ?? displayPage.eyebrow,
      body: displayPage.sections[0]?.body ?? displayPage.summary,
    },
    {
      label: isArabic ? 'المنهج' : 'Method',
      title: displayPage.sections[1]?.title ?? { ar: 'طريقة التفكير', en: 'Thinking method' },
      body: displayPage.sections[1]?.body ?? displayPage.promise,
    },
    {
      label: isArabic ? 'التنفيذ' : 'Execution',
      title: { ar: 'مخرجات قابلة للتنفيذ', en: 'Actionable deliverables' },
      body: {
        ar: displayPage.deliverables.map((item) => item.ar).join('، '),
        en: displayPage.deliverables.map((item) => item.en).join(', '),
      },
    },
    {
      label: isArabic ? 'النتيجة' : 'Outcome',
      title: { ar: 'قرار أسهل وثقة أعلى', en: 'Easier decisions and stronger trust' },
      body: displayPage.promise,
    },
  ];

  return (
    <section className="relative overflow-hidden pb-20 md:pb-28">
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="mobile-ornament absolute right-[-10%] top-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="mobile-ornament absolute bottom-[18%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-amber-400/8 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] flex min-h-[calc(100svh-3.75rem)] w-screen items-end overflow-hidden px-4 pb-7 pt-20 sm:px-6 md:min-h-[calc(100svh-4.35rem)] md:px-10 md:pb-10 md:pt-[7.5rem] lg:px-14">
          <HeroMediaBackdrop fallbackMedia={detailHeroFallbackMedia} isArabic={isArabic} media={detailHeroMedia} />

          <div className={heroGridClass}>
            <div className={heroTextClass}>
              <Link className="section-kicker inline-flex border-cyan-300/35 bg-[#06151c]/62 text-cyan-50 shadow-[0_18px_55px_-36px_rgba(45,212,191,0.8)] backdrop-blur-2xl" to={localizePath(displayPage.parentPath)}>
                {text(displayPage.parentLabel)}
              </Link>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200/90 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)]">
                {text(displayPage.eyebrow)}
              </p>
              <h1 className={`${heroTitleClass} mt-4 font-display text-[2.45rem] font-black leading-[1.04] text-white drop-shadow-[0_18px_36px_rgba(0,0,0,0.62)] sm:text-[3.35rem] md:text-7xl lg:text-[5.25rem]`}>
                {text(displayPage.title)}
              </h1>
              <p className={`${heroComposition === 'centered' ? 'mx-auto' : ''} mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-100 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)] md:text-xl md:leading-9`}>
                {text(displayPage.summary)}
              </p>
            </div>

            <div className={`${heroComposition === 'centered' || heroComposition === 'metrics-bottom' ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1.1fr]' : 'grid gap-3'}`}>
              <div className="rounded-[1.35rem] border border-white/12 bg-[#061016]/58 p-4 shadow-[0_20px_60px_-38px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:rounded-[1.6rem] md:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/85">
                  {isArabic ? 'لمن هذا؟' : 'Best for'}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{text(displayPage.audience)}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/85">
                  {isArabic ? 'الوعد' : 'Promise'}
                </p>
                <p className="mt-2 text-sm leading-7 text-white">{text(displayPage.promise)}</p>
              </div>

              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label.en}`} className="rounded-[1rem] border border-white/12 bg-[#061016]/58 p-3 shadow-[0_20px_60px_-42px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
                    <p className="font-display text-2xl font-black text-cyan-300">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{text(metric.label)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {phases.map((phase, index) => (
            <motion.article
              key={phase.label}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
              className="surface-card interactive-card rounded-[1.35rem] p-5 md:rounded-[1.7rem]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 font-display text-sm font-black text-slate-950">
                {index + 1}
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{phase.label}</p>
              <h2 className="mt-3 font-display text-xl font-bold leading-tight text-white">{text(phase.title)}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text(phase.body)}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 grid gap-5">
          <div className="grid gap-6">
            <div id="overview" className="grid gap-4">
              {displayPage.sections.map((section, index) => (
                <motion.article
                  key={section.title.en}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 md:rounded-[2rem] md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl font-black text-white/10">0{index + 1}</span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-white md:text-2xl">{text(section.title)}</h2>
                      <p className="mt-3 text-sm leading-8 text-slate-400 md:text-base">{text(section.body)}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {displayPage.statsCounter && (
              <StatsCounterBlock {...worldBlockProps} />
            )}

            {displayPage.timeline && (
              <TimelineBlock {...worldBlockProps} />
            )}

            {displayPage.toolsDeliverables && (
              <ToolsDeliverablesBlock {...worldBlockProps} />
            )}

            {worldBlocks.map(renderWorldBlock)}

            {displayPage.testimonialSpotlight && (
              <TestimonialSpotlightBlock {...worldBlockProps} />
            )}

            {displayPage.checklist && (
              <ChecklistBlock {...worldBlockProps} />
            )}

            <motion.div
              id="faq"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:rounded-[2rem] md:p-7"
            >
              <p className="section-kicker mb-5">
                <HelpCircle className="h-4 w-4" />
                {isArabic ? 'أسئلة قبل القرار' : 'Questions before deciding'}
              </p>
              <div className="grid gap-3">
                {faq.map((item) => (
                  <div key={item.question.en} className="rounded-[1.1rem] border border-white/8 bg-[#06090f]/45 p-4">
                    <h3 className="font-display text-lg font-bold text-white">{text(item.question)}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{text(item.answer)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <aside className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(16rem,0.7fr)] lg:items-stretch">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#08111c]/80 p-5 md:rounded-[2rem] md:p-7">
              <p className="section-kicker mb-5">{isArabic ? 'المخرجات' : 'Deliverables'}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {displayPage.deliverables.map((item) => (
                  <div key={item.en} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{text(item)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:rounded-[2rem] md:p-7">
              <p className="section-kicker mb-5">{isArabic ? 'استخدامات مناسبة' : 'Useful for'}</p>
              <div className="flex flex-wrap gap-2">
                {displayPage.useCases.map((item) => (
                  <span key={item.en} className="pill border-white/10 bg-white/[0.04]">
                    {text(item)}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card-strong motion-sheen flex flex-col justify-between rounded-[1.5rem] p-5 md:rounded-[2rem] md:p-7">
              <div>
                <p className="section-kicker mb-5">{isArabic ? 'الخطوة التالية' : 'Next step'}</p>
                <p className="text-sm leading-7 text-slate-400">
                  {isArabic
                    ? 'حوّل التفاصيل إلى brief واضح يساعدنا نبدأ من نقطة مرتبة.'
                    : 'Turn the details into a clear brief so the next step starts organized.'}
                </p>
              </div>
              <Link className="btn-primary mt-5 w-full justify-center" to={localizePath('/contact/brief')}>
                <BadgeCheck className="h-5 w-5" />
                {text(displayPage.cta)}
                <ArrowUpLeft className="h-5 w-5" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
