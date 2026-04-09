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
      'flex items-center justify-center rounded-full overflow-hidden aspect-square bg-white shadow-sm',
      className,
    )}
  >
    <img
      alt={alt}
      className={joinClasses('block h-full w-full object-cover', imageClassName)}
      decoding="async"
      loading={loading}
      src={BRAND_LOGO_SRC}
    />
  </div>
);

export default BrandLogo;
