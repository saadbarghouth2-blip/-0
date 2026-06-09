import { motion } from 'framer-motion';
import { editorialImages, type EditorialImageId } from '../data/editorialImages';
import { useLanguage } from '../hooks/useLanguage';
import ProjectImage from './ProjectImage';

type EditorialVariant = 'split' | 'wide' | 'proof' | 'offset' | 'floating';

interface EditorialImageBreakProps {
  imageId: EditorialImageId;
  variant?: EditorialVariant;
  reverse?: boolean;
  className?: string;
}

const joinClasses = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

const EditorialImageBreak = ({
  imageId,
  variant = 'split',
  reverse = false,
  className,
}: EditorialImageBreakProps) => {
  const { lang } = useLanguage();
  const image = editorialImages[imageId];

  if (!image) {
    return null;
  }

  const copy = {
    alt: image.alt[lang],
  };

  const imageCard = (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={joinClasses(
        'group relative min-w-0 overflow-hidden border border-white/10 bg-white/[0.035] shadow-[0_32px_90px_-58px_rgba(0,0,0,0.95)]',
        variant === 'wide' ? 'aspect-[1.55/1] rounded-[1.5rem] md:aspect-[2.65/1] md:rounded-[2.5rem]' : 'aspect-[1.18/1] rounded-[1.45rem] md:rounded-[2.25rem]',
        variant === 'floating' && 'md:rotate-[-1.5deg]',
        variant === 'offset' && 'md:translate-y-8',
      )}
    >
      <ProjectImage
        alt={copy.alt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        src={image.src}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06090f]/88 via-[#06090f]/14 to-transparent" />
    </motion.figure>
  );

  if (variant === 'wide') {
    return (
      <section className={joinClasses('section-shell py-8 md:py-14', className)}>
        <div className="mx-auto max-w-7xl">
          {imageCard}
        </div>
      </section>
    );
  }

  if (variant === 'proof' || variant === 'floating') {
    return (
      <section className={joinClasses('section-shell py-8 md:py-14', className)}>
        <div className={joinClasses('mx-auto max-w-5xl', reverse && 'md:ms-auto md:me-0')}>
          {imageCard}
        </div>
      </section>
    );
  }

  return (
    <section className={joinClasses('section-shell py-8 md:py-14', className)}>
      <div
        className={joinClasses(
          'mx-auto max-w-6xl',
          reverse && 'md:ms-auto md:me-0',
        )}
      >
        {imageCard}
      </div>
    </section>
  );
};

export default EditorialImageBreak;
