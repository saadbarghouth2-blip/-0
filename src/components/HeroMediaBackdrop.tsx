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
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.img
        alt={fallbackAlt}
        animate={{ scale: 1.04 }}
        className="h-full w-full scale-[1.04] object-cover opacity-82 saturate-[1.02]"
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
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-80 saturate-[1.02]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.04 }}
          loop
          muted
          playsInline
          src={media.src}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#03060b]/72 via-[#06090f]/34 to-[#06090f]/96" />
      <div
        className={`pointer-events-none absolute inset-0 ${
          isArabic
            ? 'bg-gradient-to-l from-[#031f22]/76 via-[#06090f]/42 to-[#06090f]/82'
            : 'bg-gradient-to-r from-[#031f22]/76 via-[#06090f]/42 to-[#06090f]/82'
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(45,212,191,0.24),transparent_36%),radial-gradient(circle_at_16%_72%,rgba(124,58,237,0.18),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06090f] to-transparent md:h-56" />
    </div>
  );
};

export default HeroMediaBackdrop;
