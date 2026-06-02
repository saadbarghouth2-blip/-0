import { GA_MEASUREMENT_ID } from './siteConfig';

type AnalyticsValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsValue | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_SCRIPT_ID = 'ga4-loader';

const getDefinedParams = (params: AnalyticsParams) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  ) as Record<string, AnalyticsValue>;

export const initializeAnalytics = () => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  if ((window as Window & { __gaInitialized?: boolean }).__gaInitialized) {
    return;
  }

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_location: window.location.href,
    page_title: document.title,
  });
  (window as Window & { __gaInitialized?: boolean }).__gaInitialized = true;
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  initializeAnalytics();
  window.gtag?.('event', eventName, getDefinedParams(params));
};

export const trackPageView = (params: {
  page_title: string;
  page_location: string;
  page_path: string;
}) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  initializeAnalytics();
  window.gtag?.('event', 'page_view', params);
};
