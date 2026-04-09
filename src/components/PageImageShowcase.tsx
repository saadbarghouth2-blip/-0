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

  const imageCopy = (image?: ShowcaseImageItem) => {
    if (!image) {
      return null;
    }

    return {
      alt: lang === 'ar' ? image.altAr : image.altEn,
      caption: lang === 'ar' ? image.captionAr : image.captionEn,
    };
  };

  const primary = imageCopy(primaryImage);
  const secondary = imageCopy(secondaryImage);

  const renderImage = (
    image: ShowcaseImageItem | undefined,
    className: string,
    captionClassName = 'mt-3 text-sm leading-7 text-slate-400',
  ) => {
    const localizedImage = imageCopy(image);

    if (!image || !localizedImage) {
      return null;
    }

    return (
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.9)]">
        <ProjectImage
          alt={localizedImage.alt}
          className={className}
          loading="lazy"
          src={image.src}
        />
        {!showcase.hideImageCaptions && localizedImage.caption && (
          <p className={captionClassName}>{localizedImage.caption}</p>
        )}
      </div>
    );
  };

  const textBlock = (
    <div className="space-y-5">
      <p className="section-kicker">{copy.kicker}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
        {copy.title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-slate-400">{copy.description}</p>
    </div>
  );

  return (
    <section className="section-shell py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-7xl"
      >
        {showcase.variant === 'mosaic' && (
          <div className="surface-card rounded-[2.6rem] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              {textBlock}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  {renderImage(primaryImage, 'h-[260px] w-full rounded-[1.4rem] object-cover md:h-[360px]')}
                </div>
                <div>
                  {renderImage(secondaryImage, 'h-[220px] w-full rounded-[1.4rem] object-cover')}
                </div>
                {tertiaryImage ? (
                  <div>
                    {renderImage(tertiaryImage, 'h-[220px] w-full rounded-[1.4rem] object-cover')}
                  </div>
                ) : (
                  <div className="flex items-end rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm leading-7 text-slate-300">
                      {secondary?.caption ?? primary?.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {showcase.variant === 'portrait' && (
          <div className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
            <div>
              {renderImage(
                primaryImage,
                'h-[380px] w-full rounded-[1.4rem] object-cover md:h-[560px]',
                'mt-3 text-sm leading-7 text-slate-400',
              )}
            </div>
            <div className="grid gap-6">
              <div className="surface-card rounded-[2.5rem] p-6 md:p-8">{textBlock}</div>
              {secondaryImage && (
                <div>
                  {renderImage(secondaryImage, 'h-[220px] w-full rounded-[1.4rem] object-cover md:h-[280px]')}
                </div>
              )}
            </div>
          </div>
        )}

        {showcase.variant === 'split' && (
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="grid gap-4">
              {renderImage(primaryImage, 'h-[280px] w-full rounded-[1.5rem] object-cover md:h-[360px]')}
              {secondaryImage && (
                <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                  {renderImage(secondaryImage, 'h-[180px] w-full rounded-[1.4rem] object-cover md:h-[220px]')}
                  <div className="surface-card flex items-center rounded-[2rem] p-6">
                    <p className="text-sm leading-7 text-slate-300">
                      {primary?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="surface-card-strong rounded-[2.5rem] p-6 md:p-8">{textBlock}</div>
          </div>
        )}

        {showcase.variant === 'band' && (
          <div className="surface-card rounded-[2.8rem] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>{textBlock}</div>
              <div className="space-y-4">
                {renderImage(primaryImage, 'h-[260px] w-full rounded-[1.5rem] object-cover md:h-[330px]')}
                <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                  {secondaryImage && (
                    <div>
                      {renderImage(
                        secondaryImage,
                        'h-[180px] w-full rounded-[1.25rem] object-cover',
                        'mt-2 text-xs leading-6 text-slate-400',
                      )}
                    </div>
                  )}
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm leading-7 text-slate-300">
                      {secondary?.caption ?? primary?.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showcase.variant === 'spotlight' && (
          <div className="surface-card rounded-[2.8rem] p-6 md:p-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker mx-auto">{copy.kicker}</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">{copy.description}</p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                {renderImage(primaryImage, 'h-[300px] w-full rounded-[1.5rem] object-cover md:h-[400px]')}
              </div>
              <div className="grid gap-4">
                {secondaryImage && (
                  <div>
                    {renderImage(secondaryImage, 'h-[180px] w-full rounded-[1.4rem] object-cover md:h-[220px]')}
                  </div>
                )}
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm leading-7 text-slate-300">
                    {primary?.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PageImageShowcaseSection;
