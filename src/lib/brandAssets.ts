export const BRAND_LOGO_SRC = '/images/notaq-logo-lockup.webp';
export const BRAND_LOGO_ALT = 'Notaq logo | شعار نُطق';
export const BRAND_OG_IMAGE_SRC = '/images/notaq-og-cover.jpg';
export const BRAND_OG_IMAGE_ALT = 'Notaq brand identity | الهوية البصرية لنُطق';

export const toAbsoluteBrandAssetUrl = (origin: string, assetPath = BRAND_LOGO_SRC) =>
  new URL(assetPath, origin).toString();
