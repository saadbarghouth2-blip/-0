import { motion, useReducedMotion } from 'framer-motion';

import type { EnrichmentMediaAsset } from '../data/enrichmentMedia';

interface HeroMediaBackdropProps {
  media: EnrichmentMediaAsset;
  fallbackMedia: EnrichmentMediaAsset;
  isArabic: boolean;
}

const HeroMediaBackdrop = ({ media, fallbackMedia, isArabic }: HeroMediaBackdropProps) => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const shouldUseVideo = media.type === 'video' && !shouldReduceMotion;
  const fallbackAlt = isArabic ? fallbackMedia.alt.ar : fallbackMedia.alt.en;
  const mediaAlt = isArabic ? media.alt.ar : media.alt.en;

  return (
    <div className="hero-media-backdrop absolute inset-0 z-0 overflow-hidden">
      <motion.img
        alt={fallbackAlt}
        animate={{ scale: 1.04 }}
        className="h-full w-full scale-[1.04] object-cover opacity-100 saturate-[1.08] contrast-[1.04]"
        fetchPriority="high"
        initial={{ scale: 1.12 }}
        loading="eager"
        src={fallbackMedia.src}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {shouldUseVideo ? (
        <motion.video
          aria-label={mediaAlt}
          autoPlay
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-100 saturate-[1.08] contrast-[1.04]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.04 }}
          loop
          muted
          playsInline
          src={media.src}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#03060b]/55 via-[#06090f]/28 to-[#06090f]/92" />
      <div
        className={`pointer-events-none absolute inset-0 ${
          isArabic
            ? 'bg-gradient-to-l from-[#03191c]/90 via-[#06090f]/58 to-[#06090f]/34'
            : 'bg-gradient-to-r from-[#03191c]/90 via-[#06090f]/58 to-[#06090f]/34'
        }`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06090f] to-transparent md:h-56" />
    </div>
  );
};

export default HeroMediaBackdrop;
