export const BRAND_LOGO_SRC = '/images/Gemini_Generated_Image_rzfhaqrzfhaqrzfh.png';
export const BRAND_LOGO_ALT = 'Notaq logo | شعار نطق';

export const toAbsoluteBrandAssetUrl = (origin: string) =>
  new URL(BRAND_LOGO_SRC, origin).toString();
