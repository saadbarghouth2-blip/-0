import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import type {
  PageImageShowcase as PageImageShowcaseData,
  ShowcaseImageItem,
} from '../data/pageImageShowcases';
import ProjectImage from './ProjectImage';

interface PageImageShowcaseProps {
  showcase: PageImageShowcaseData;
}

const PageImageShowcaseSection = ({ showcase }: PageImageShowcaseProps) => {
  const { lang } = useLanguage();
  const [primaryImage, secondaryImage, tertiaryImage] = showcase.images;

  const copy = {
    kicker: lang === 'ar' ? showcase.kickerAr : showcase.kickerEn,
    title: lang === 'ar' ? showcase.titleAr : showcase.titleEn,
    description: lang === 'ar' ? showcase.descriptionAr : showcase.descriptionEn,
  };

  const imageAlt = (image?: ShowcaseImageItem) => {
    if (!image) {
      return '';
    }

    return lang === 'ar' ? image.altAr : image.altEn;
  };

  const renderImage = (
    image: ShowcaseImageItem | undefined,
    className: string,
    wrapperClassName = '',
  ) => {
    if (!image) {
      return null;
    }

    return (
      <motion.figure
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        className={`group overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.12),rgba(255,255,255,0.045)_44%,rgba(2,6,23,0.52))] p-2 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.95)] backdrop-blur md:rounded-[2rem] ${wrapperClassName}`}
      >
        <ProjectImage
          alt={imageAlt(image)}
          className={`${className} transition-transform duration-700 group-hover:scale-[1.015]`}
          loading="lazy"
          src={image.src}
        />
      </motion.figure>
    );
  };

  const textBlock = (
    <div className="space-y-4 md:space-y-5">
      <p className="section-kicker">{copy.kicker}</p>
      <h2 className="font-display text-[1.65rem] font-semibold leading-[1.16] text-white sm:text-[1.85rem] md:text-4xl md:leading-tight">
        {copy.title}
      </h2>
      <p className="max-w-2xl text-[0.92rem] leading-7 text-slate-400 md:text-base md:leading-8">
        {copy.description}
      </p>
    </div>
  );

  const featureImages = (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-300/5 blur-2xl" aria-hidden="true" />
      <div className="relative grid gap-3 md:grid-cols-[1.15fr_0.85fr] md:items-end lg:block lg:min-h-[500px]">
        {renderImage(
          primaryImage,
          'h-[220px] w-full rounded-[1rem] object-contain p-2.5 md:h-[340px] md:rounded-[1.45rem] lg:h-[430px]',
          'lg:w-[78%]',
        )}
        {renderImage(
          secondaryImage,
          'h-[200px] w-full rounded-[1rem] object-contain p-2.5 md:h-[270px] md:rounded-[1.45rem] lg:h-[280px]',
          'lg:absolute lg:bottom-0 lg:end-0 lg:w-[48%]',
        )}
        {renderImage(
          tertiaryImage,
          'h-[180px] w-full rounded-[1rem] object-contain p-2.5 md:h-[230px] md:rounded-[1.45rem] lg:h-[220px]',
          'lg:absolute lg:bottom-8 lg:start-6 lg:w-[38%]',
        )}
      </div>
    </div>
  );

  const compactImages = (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-teal-300/5 blur-2xl" aria-hidden="true" />
      <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-1">
        {renderImage(
          primaryImage,
          'h-[220px] w-full rounded-[1rem] object-contain p-2.5 md:h-[350px] md:rounded-[1.45rem]',
        )}
        {renderImage(
          secondaryImage,
          'h-[200px] w-full rounded-[1rem] object-contain p-2.5 md:h-[285px] md:rounded-[1.45rem]',
          'lg:ms-10 lg:-mt-10',
        )}
      </div>
    </div>
  );

  return (
    <section className="section-shell py-10 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-7xl"
      >
        {showcase.variant === 'mosaic' && (
          <div className="surface-card rounded-[1.45rem] p-4 md:rounded-[2.6rem] md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="order-2 lg:order-1">{featureImages}</div>
              <div className="order-1 lg:order-2">{textBlock}</div>
            </div>
          </div>
        )}

        {showcase.variant === 'portrait' && (
          <div className="grid gap-4 md:gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>{compactImages}</div>
            <div className="surface-card rounded-[1.45rem] p-4 md:rounded-[2.5rem] md:p-8">
              {textBlock}
            </div>
          </div>
        )}

        {showcase.variant === 'split' && (
          <div className="grid gap-4 md:gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="surface-card-strong rounded-[1.45rem] p-4 md:rounded-[2.5rem] md:p-8">
              {textBlock}
            </div>
            <div>{compactImages}</div>
          </div>
        )}

        {showcase.variant === 'band' && (
          <div className="surface-card rounded-[1.45rem] p-4 md:rounded-[2.8rem] md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>{textBlock}</div>
              <div>{featureImages}</div>
            </div>
          </div>
        )}

        {showcase.variant === 'spotlight' && (
          <div className="surface-card rounded-[1.45rem] p-4 md:rounded-[2.8rem] md:p-8">
            <div className="mx-auto max-w-3xl text-center">{textBlock}</div>
            <div className="mt-6 md:mt-8">{featureImages}</div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PageImageShowcaseSection;
