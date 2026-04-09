interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  fallbacks?: string[];
  loading?: 'eager' | 'lazy';
}

const ProjectImage = ({
  src,
  alt,
  className,
  fallbackSrc,
  fallbacks = [],
  loading = 'lazy',
}: ProjectImageProps) => {
  const sources = [src, fallbackSrc, ...fallbacks].filter(
    (value): value is string => Boolean(value && value.trim()),
  );

  return (
    <img
      alt={alt}
      className={className}
      data-fallback-index="0"
      decoding="async"
      loading={loading}
      onError={(event) => {
        const image = event.currentTarget;
        const nextIndex = Number(image.dataset.fallbackIndex ?? '0') + 1;

        if (nextIndex >= sources.length) {
          return;
        }

        image.dataset.fallbackIndex = String(nextIndex);
        image.src = sources[nextIndex];
      }}
      src={sources[0]}
    />
  );
};

export default ProjectImage;
