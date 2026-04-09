import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from './brandAssets';

const FALLBACK_SITE_URL = 'https://saad-elsayed-barghouth-d7kv.vercel.app';

const trimTrailingSlash = (url: string) => url.replace(/\/+$/, '');

export const SITE_URL = trimTrailingSlash(
  import.meta.env.VITE_SITE_URL?.trim() || FALLBACK_SITE_URL,
);

export const SITE_NAME_AR = 'نُطق';
export const SITE_NAME_EN = 'Notaq';
export const SITE_NAME = `${SITE_NAME_AR} | ${SITE_NAME_EN}`;
export const SITE_TITLE_SUFFIX = SITE_NAME;

export const SITE_DESCRIPTION_AR =
  'نُطق وكالة رقمية في القاهرة تبني مواقع شركات ومتاجر إلكترونية وصفحات خدمات واضحة وسريعة ومهيأة لمحركات البحث لزيادة الثقة والعملاء.';
export const SITE_DESCRIPTION_EN =
  'Notaq is a Cairo-based digital agency building clear, fast, SEO-ready company websites, e-commerce experiences, and service pages that win trust and customers.';

export const DEFAULT_SEO_IMAGE = BRAND_LOGO_SRC;
export const DEFAULT_SEO_IMAGE_ALT = BRAND_LOGO_ALT;

export const ORGANIZATION_INFO = {
  founder: 'Saad Elsayed Barghouth',
  email: 'saadbarghouth11@gmail.com',
  phone: '+20 106 743 1264',
  telephoneHref: '+201067431264',
  city: 'Cairo',
  country: 'EG',
  sameAs: [
    'https://www.linkedin.com/in/saadbarghouth/',
    'https://github.com/saadbarghouth2-blip',
    'https://www.facebook.com/people/Saad-Elsayed-Barghouth/',
    'https://www.youtube.com/@Saad_Barghouth',
  ],
} as const;

export const DEFAULT_ROBOTS_POLICY =
  'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
