import {
  BRAND_LOGO_ALT,
  BRAND_LOGO_SRC,
  BRAND_OG_IMAGE_ALT,
  BRAND_OG_IMAGE_SRC,
} from './brandAssets';

const FALLBACK_TECHNICAL_SITE_URL = 'https://xn--2gbwk.site';
const FALLBACK_SITE_URL = FALLBACK_TECHNICAL_SITE_URL;
const DEFAULT_TELEPHONE_HREF = '+201507631264';

const trimTrailingSlash = (url: string) => url.replace(/\/+$/, '');
const sanitizeAbsoluteUrl = (url: string) => {
  const trimmed = trimTrailingSlash(url.trim());

  if (!/^https?:\/\//i.test(trimmed)) {
    throw new Error(`Expected an absolute URL but received "${url}".`);
  }

  return trimmed;
};

const sanitizePhoneNumber = (value: string) => value.replace(/[^\d]/g, '');

export const SITE_URL = sanitizeAbsoluteUrl(
  import.meta.env.VITE_SITE_URL?.trim() || FALLBACK_SITE_URL,
);
export const SITE_TECHNICAL_URL = sanitizeAbsoluteUrl(
  import.meta.env.VITE_SITE_TECHNICAL_URL?.trim() || FALLBACK_TECHNICAL_SITE_URL,
);

export const SITE_NAME_AR = 'نُطق';
export const SITE_NAME_EN = 'Notaq';
export const SITE_NAME = SITE_NAME_AR;
export const SITE_ALTERNATE_NAME = SITE_NAME_EN;
export const SITE_NAME_COMBINED = `${SITE_NAME_AR} | ${SITE_NAME_EN}`;
export const SITE_TITLE_SUFFIX = SITE_NAME_COMBINED;

export const SITE_DESCRIPTION_AR =
  'نُطق وكالة رقمية في القاهرة تخدم شركات في مصر والخليج عبر مواقع شركات، صفحات خدمات، ومتاجر إلكترونية سريعة وواضحة ومهيأة للظهور وبناء الثقة.';
export const SITE_DESCRIPTION_EN =
  'Notaq is a Cairo-based digital agency serving businesses across Egypt and the Gulf with fast, clear, SEO-ready company websites, service pages, and e-commerce experiences.';

export const DEFAULT_SEO_IMAGE = BRAND_OG_IMAGE_SRC;
export const DEFAULT_SEO_IMAGE_ALT = BRAND_OG_IMAGE_ALT;
export const DEFAULT_BRAND_IMAGE = BRAND_LOGO_SRC;
export const DEFAULT_BRAND_IMAGE_ALT = BRAND_LOGO_ALT;

export const ORGANIZATION_INFO = {
  founder: 'Saad Elsayed Barghouth',
  email: 'info@xn--2gbwk.site',
  phone: '+20 106 743 1264',
  telephoneHref: DEFAULT_TELEPHONE_HREF,
  city: 'Cairo',
  country: 'EG',
  sameAs: [
    'https://www.linkedin.com/in/saadbarghouth/',
    'https://github.com/saadbarghouth2-blip',
    'https://www.facebook.com/people/Saad-Elsayed-Barghouth/',
    'https://www.youtube.com/@Saad_Barghouth',
  ],
} as const;

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || '';
export const WHATSAPP_NUMBER = sanitizePhoneNumber(
  import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || ORGANIZATION_INFO.telephoneHref,
);

export const DEFAULT_ROBOTS_POLICY =
  'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
