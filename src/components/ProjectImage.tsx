import { useState } from 'react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  fallbacks?: string[];
  loading?: 'eager' | 'lazy';
  sizes?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const ProjectImage = ({
  src,
  alt,
  className,
  fallbackSrc,
  fallbacks = [],
  loading = 'lazy',
  sizes,
  fetchPriority,
}: ProjectImageProps) => {
  const [hasFailed, setHasFailed] = useState(false);

  const sources = [src, fallbackSrc, ...fallbacks].filter(
    (value): value is string => Boolean(value && value.trim()),
  );

  if (hasFailed || sources.length === 0) {
    return (
      <div
        aria-label={alt}
        className={`flex min-h-32 items-center justify-center rounded-[inherit] border border-white/10 bg-slate-900/80 px-4 text-center text-xs font-semibold text-slate-300 ${className ?? ''}`}
        role="img"
      >
        <span>{alt}</span>
      </div>
    );
  }

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    const nextIndex = Number(image.dataset.fallbackIndex ?? '0') + 1;

    if (nextIndex >= sources.length) {
      setHasFailed(true);
      return;
    }

    image.dataset.fallbackIndex = String(nextIndex);
    image.src = sources[nextIndex];
  };

  return (
    <img
      alt={alt}
      className={className}
      data-fallback-index="0"
      decoding="async"
      loading={loading}
      onError={handleError}
      src={sources[0]}
      {...(sizes ? { sizes } : {})}
      {...(fetchPriority ? { fetchPriority } : {})}
    />
  );
};

export default ProjectImage;
