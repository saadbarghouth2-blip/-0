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
        className={`group overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm ${wrapperClassName}`}
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
    <div className="grid gap-3 sm:grid-cols-2">
        {renderImage(
          primaryImage,
          'h-[220px] w-full rounded-md object-cover sm:h-[300px]',
        )}
        {renderImage(
          secondaryImage,
          'h-[220px] w-full rounded-md object-cover sm:h-[300px]',
        )}
        {renderImage(
          tertiaryImage,
          'h-[220px] w-full rounded-md object-cover sm:col-span-2 sm:h-[280px]',
        )}
    </div>
  );

  const compactImages = (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {renderImage(
          primaryImage,
          'h-[220px] w-full rounded-md object-cover sm:h-[300px] lg:h-[320px]',
        )}
        {renderImage(
          secondaryImage,
          'h-[220px] w-full rounded-md object-cover sm:h-[300px] lg:h-[260px]',
        )}
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
