import { motion } from 'framer-motion';
import { ArrowUpLeft, Sparkles } from 'lucide-react';
import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { enrichmentMediaById } from '../data/enrichmentMedia';
import { pageEnrichmentProfiles } from '../data/pageEnrichment';
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '../lib/utils';
import HeroMediaBackdrop from './HeroMediaBackdrop';

type PageHeroProfileId = keyof typeof pageEnrichmentProfiles;

export interface PageHeroAction {
  label: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface PageHeroMetric {
  value: string;
  label: string;
}

interface PageHeroProps {
  profileId: PageHeroProfileId;
  kicker: string;
  title: string;
  description: string;
  primaryAction?: PageHeroAction;
  secondaryAction?: PageHeroAction;
  metrics?: PageHeroMetric[];
  className?: string;
}

const arabicHeroCopy: Record<PageHeroProfileId, {
  kicker: string;
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  metricLabels?: string[];
}> = {
  home: {
    kicker: 'حلول رقمية للشركات الجادة',
    title: 'نُطق | Notaq',
    description: 'احصل على موقع أو صفحة خدمة أو تجربة رقمية تساعد شركتك على شرح القيمة بوضوح، وبناء ثقة أسرع مع الزائر المناسب.',
  },
  about: {
    kicker: 'منهجية نُطق',
    title: 'فريق يبني حضوراً رقمياً واضحاً وقابلاً للثقة',
    description: 'تعرّف على طريقة تفكير نُطق في تحويل الرسالة والخدمة إلى تجربة منظمة تساعد زائر شركتك على الفهم واتخاذ قرار أوضح.',
    primaryLabel: 'ناقش احتياج شركتك',
    secondaryLabel: 'استكشف الخدمات',
    metricLabels: ['مبادئ عمل', 'إشارات ثقة', 'منهجية واضحة'],
  },
  services: {
    kicker: 'مسارات خدمة واضحة',
    title: 'خدمات رقمية تساعد شركتك على الظهور بثقة',
    description: 'اختر المسار الأنسب لعرض نشاطك وخدماتك بطريقة مهنية، مفهومة، ومبنية حول ما يحتاجه زائرك قبل التواصل أو الشراء.',
    primaryLabel: 'اطلب مناقشة الخدمة',
    secondaryLabel: 'شاهد الأعمال',
    metricLabels: ['خدمات تفصيلية', 'عائلات خدمات', 'خطوات عمل'],
  },
  projects: {
    kicker: 'أعمال قابلة للفحص',
    title: 'مشاريع توضّح كيف تتحول الرسالة إلى تجربة موثوقة',
    description: 'اطّلع على نماذج تنفيذ تساعدك على رؤية مستوى التنظيم، وضوح المحتوى، وجودة التجربة التي يمكن أن يحصل عليها زائر شركتك.',
    primaryLabel: 'ناقش مشروعاً مشابهاً',
    secondaryLabel: 'دراسات الحالة',
    metricLabels: ['مشاريع قابلة للفحص', 'مسارات خدمة', 'دلائل ثقة'],
  },
  blog: {
    kicker: 'محتوى يساعد القرار',
    title: 'مقالات تساعدك على تقييم حضور شركتك قبل التنفيذ',
    description: 'اقرأ أفكاراً عملية توضّح ما يحتاجه زائرك، أين تُبنى الثقة، وكيف يتحول التصميم من شكل جيد إلى نتيجة تجارية قابلة للقياس.',
    primaryLabel: 'اقرأ المقال المميز',
    secondaryLabel: 'اطلب استشارة',
    metricLabels: ['مقالات أساسية', 'مسارات معرفة', 'لغات مدعومة'],
  },
  testimonials: {
    kicker: 'آراء العملاء',
    title: 'تجارب عملاء توضّح أثر الوضوح بعد الإطلاق',
    description: 'راجع شهادات تركّز على ما يهم صاحب القرار: وضوح الرسالة، سهولة عرض الخدمة، قوة الانطباع، وثقة الزائر بعد تطوير التجربة.',
    primaryLabel: 'ناقش تجربة مشابهة',
    secondaryLabel: 'شاهد الأعمال',
    metricLabels: ['رضا العملاء', 'مشروع منجز', 'عميل سعيد'],
  },
  contact: {
    kicker: 'تواصل مهني مباشر',
    title: 'رتّب احتياج شركتك في خطوة واضحة',
    description: 'أرسل تفاصيل الموقع أو الصفحة أو التجربة الرقمية المطلوبة، وسيعود فريق نُطق بخطوة عملية تساعدك على تحديد النطاق والمسار الأنسب.',
    primaryLabel: 'راسلنا على واتساب',
    metricLabels: ['نماذج ومشاريع منفذة', 'متوسط وقت الرد الأول', 'متابعة بعد الإطلاق'],
  },
};

const renderAction = (action: PageHeroAction, variant: 'primary' | 'secondary') => {
  const className = cn(
    variant === 'primary'
      ? 'btn-primary shadow-[0_0_30px_rgba(45,212,191,0.26)] hover:shadow-[0_0_42px_rgba(45,212,191,0.42)]'
      : 'btn-secondary',
    'group w-full justify-center sm:w-auto',
  );
  const content = (
    <>
      <span className="relative z-10">{action.label}</span>
      {action.icon ?? (
        <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
      )}
    </>
  );

  if (action.to) {
    return (
      <Link className={className} to={action.to}>
        {content}
      </Link>
    );
  }

  if (action.href) {
    return (
      <a
        className={className}
        href={action.href}
        onClick={action.onClick}
        rel={action.external ? 'noreferrer' : undefined}
        target={action.external ? '_blank' : undefined}
      >
        {content}
      </a>
    );
  }

  return null;
};

const PageHero = ({
  profileId,
  kicker,
  title,
  description,
  primaryAction,
  secondaryAction,
  metrics,
  className,
}: PageHeroProps) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const profile = pageEnrichmentProfiles[profileId];
  const media = enrichmentMediaById[profile.heroMediaId];
  const backgroundMedia = enrichmentMediaById[profile.videoMediaId] ?? media;
  const cleanArabicCopy = isArabic ? arabicHeroCopy[profileId] : undefined;
  const displayKicker = cleanArabicCopy?.kicker ?? kicker;
  const displayTitle = cleanArabicCopy?.title ?? title;
  const displayDescription = cleanArabicCopy?.description ?? description;
  const displayPrimaryAction =
    cleanArabicCopy?.primaryLabel && primaryAction
      ? { ...primaryAction, label: cleanArabicCopy.primaryLabel }
      : primaryAction;
  const displaySecondaryAction =
    cleanArabicCopy?.secondaryLabel && secondaryAction
      ? { ...secondaryAction, label: cleanArabicCopy.secondaryLabel }
      : secondaryAction;
  const displayMetrics =
    cleanArabicCopy?.metricLabels && metrics
      ? metrics.map((metric, index) => ({
          ...metric,
          label: cleanArabicCopy.metricLabels?.[index] ?? metric.label,
        }))
      : metrics;

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'relative left-1/2 right-1/2 -mx-[50vw] flex min-h-[auto] sm:min-h-[85vh] lg:min-h-[calc(100svh-4.35rem)] w-screen items-end overflow-hidden px-4 pb-5 sm:pb-7 pt-10 sm:pt-20 md:px-10 md:pb-10 md:pt-[7.5rem] lg:px-14',
        className,
      )}
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <HeroMediaBackdrop fallbackMedia={media} isArabic={isArabic} media={backgroundMedia} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 md:gap-7">
        <div className={cn('max-w-4xl space-y-3 md:space-y-5', isArabic ? 'text-right' : 'text-left')}>
          <p className="section-kicker inline-flex max-w-max items-center border-cyan-300/35 bg-[#06151c]/62 px-2.5 md:px-3 py-1.5 md:py-2 text-[0.55rem] md:text-[0.62rem] lg:text-[0.72rem] tracking-[0.14em] text-cyan-50 shadow-[0_18px_55px_-36px_rgba(45,212,191,0.8)] backdrop-blur-2xl">
            <Sparkles className={`${isArabic ? 'ml-1.5 md:ml-2' : 'mr-1.5 md:mr-2'} inline h-3 md:h-3.5 w-3 md:w-3.5 text-cyan-300`} />
            {displayKicker}
          </p>

          <div className="space-y-2 md:space-y-4">
            <h1 className="max-w-[12ch] font-display text-lg sm:text-[2rem] md:text-4xl lg:text-[5.35rem] font-semibold leading-[1.08] md:leading-[1.04] text-white drop-shadow-[0_18px_36px_rgba(0,0,0,0.62)]">
              {displayTitle}
            </h1>
            <p className="max-w-3xl text-xs sm:text-[0.95rem] md:text-lg lg:text-xl font-semibold leading-5 sm:leading-7 md:leading-8 lg:leading-9 text-slate-100 drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)]">
              {displayDescription}
            </p>
          </div>

          {(displayPrimaryAction || displaySecondaryAction) ? (
            <div className="flex flex-col gap-2 md:gap-2.5 pt-1.5 md:pt-2 sm:flex-row sm:flex-wrap lg:gap-4 lg:pt-3">
              {displayPrimaryAction ? renderAction(displayPrimaryAction, 'primary') : null}
              {displaySecondaryAction ? renderAction(displaySecondaryAction, 'secondary') : null}
            </div>
          ) : null}
        </div>

        {displayMetrics?.length ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-3"
            initial={{ opacity: 0, scale: 0.96 }}
            transition={{ delay: 0.12, duration: 0.45, ease: 'easeOut' }}
          >
            {displayMetrics.map((metric) => (
              <div
                className="rounded-lg md:rounded-[1.15rem] border border-white/12 bg-[#061016]/58 p-2.5 md:p-4 lg:p-5 shadow-[0_20px_60px_-38px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:rounded-[1.35rem]"
                key={`${metric.value}-${metric.label}`}
              >
                <p className="font-display text-base md:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-violet-300">
                  {metric.value}
                </p>
                <p className="mt-0.5 md:mt-1 text-[10px] md:text-xs lg:text-sm leading-4 md:leading-5 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="hidden lg:block" />
        )}
      </div>
    </motion.section>
  );
};

export default PageHero;
