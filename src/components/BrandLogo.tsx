import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../lib/brandAssets';

interface BrandLogoProps {
  alt?: string;
  className?: string;
  imageClassName?: string;
  loading?: 'eager' | 'lazy';
}

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(' ');

const BrandLogo = ({
  alt = BRAND_LOGO_ALT,
  className,
  imageClassName,
  loading = 'eager',
}: BrandLogoProps) => (
  <div
    className={joinClasses(
      'flex items-center justify-center overflow-hidden rounded-[1rem] border border-white/10 bg-white/95 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.7)]',
      className,
    )}
  >
    <img
      alt={alt}
      className={joinClasses('block h-auto w-full object-contain', imageClassName)}
      decoding="async"
      loading={loading}
      src={BRAND_LOGO_SRC}
    />
  </div>
);

export default BrandLogo;
