import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  buildLocalizedUrlPath,
  getLocalizedPath,
  getPathLanguage,
} from '../lib/localizedPath';

export type Language = 'ar' | 'en';

interface TranslationEntry {
  ar: string;
  en: string;
}

interface TranslationDictionary {
  [key: string]: TranslationEntry | TranslationDictionary;
}

const translations: TranslationDictionary = {
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About' },
    services: { ar: 'خدماتنا', en: 'Services' },
    projects: { ar: 'أعمالنا', en: 'Projects' },
    blog: { ar: 'المدونة', en: 'Blog' },
    testimonials: { ar: 'آراء العملاء', en: 'Testimonials' },
    contact: { ar: 'تواصل معنا', en: 'Contact' },
  },
  buttons: {
    contact: { ar: 'تواصل معنا', en: 'Contact' },
    startProject: { ar: 'ناقش احتياج شركتك', en: 'Discuss your company need' },
    viewProjects: { ar: 'مشاريعنا', en: 'Our projects' },
    viewAllProjects: { ar: 'كل المشاريع', en: 'All projects' },
    sendMessage: { ar: 'إرسال الرسالة', en: 'Send message' },
    sending: { ar: 'جاري الإرسال...', en: 'Sending...' },
    sent: { ar: 'تم الإرسال بنجاح!', en: 'Sent successfully!' },
  },
  header: {
    skipToContent: { ar: 'تخطى إلى المحتوى الرئيسي', en: 'Skip to main content' },
    openMenu: { ar: 'فتح القائمة', en: 'Open menu' },
    closeMenu: { ar: 'إغلاق القائمة', en: 'Close menu' },
    navLabel: { ar: 'التنقل الرئيسي', en: 'Main navigation' },
    languageSwitch: { ar: 'التبديل إلى الإنجليزية', en: 'Switch to Arabic' },
  },
  footer: {
    title: { ar: 'كل صفحة الآن جزء مستقل من هوية الشركة، وليس مجرد قسم داخل الرئيسية.', en: 'Every page is now an independent brand experience, not just a section on the homepage.' },
    description: { ar: 'نُطق تعرض نبذة الشركة، الخدمات، الأعمال، آراء العملاء، والتواصل في صفحات منفصلة وواضحة حتى تكون التجربة أكثر تنظيمًا واحترافية.', en: 'Notaq presents company overview, services, work, testimonials, and contact in separate clear pages for a more organized and professional experience.' },
    archive: { ar: 'أرشيف المشاريع', en: 'Project archive' },
    talk: { ar: 'تحدث معنا', en: 'Talk to us' },
    contact: { ar: 'معلومات التواصل', en: 'Contact information' },
    follow: { ar: 'تابعنا على', en: 'Follow us on' },
    workingHours: { ar: 'ساعات العمل', en: 'Working hours' },
    saturdayThursday: { ar: 'السبت - الخميس', en: 'Sat - Thu' },
    friday: { ar: 'الجمعة', en: 'Friday' },
  },
  pages: {
    notFound: {
      title: { ar: 'الصفحة غير موجودة', en: 'Page not found' },
      description: { ar: 'الرابط الذي وصلت إليه غير متاح. يمكنك العودة إلى الصفحة الرئيسية أو استعراض كل المشاريع من صفحة الأعمال.', en: 'The link you followed is unavailable. You can return to the homepage or explore all projects in the work page.' },
      goHome: { ar: 'العودة للرئيسية', en: 'Back to home' },
      projects: { ar: 'صفحة المشاريع', en: 'Projects page' },
    },
    contact: {
      title: { ar: 'تواصل معنا', en: 'Contact us' },
      subtitle: { ar: 'لنرتب احتياج شركتك', en: "Let's organize your company need" },
      description: { ar: 'نساعدك على تحويل الاحتياج الرقمي إلى مسار واضح قابل للتنفيذ. تواصل معنا اليوم', en: 'We help turn the digital need into a clear, executable path. Contact us today.' },
      detailsTitle: { ar: 'معلومات التواصل', en: 'Contact details' },
      detailsDescription: { ar: 'تواصل معنا لأي استفسار أو لمناقشة احتياج شركتك القادم', en: 'Reach out for any inquiry or to discuss your company’s next need.' },
      formTitle: { ar: 'أرسل لنا رسالة', en: 'Send us a message' },
      formName: { ar: 'الاسم', en: 'Name' },
      formEmail: { ar: 'البريد الإلكتروني', en: 'Email' },
      formSubject: { ar: 'الموضوع', en: 'Subject' },
      formMessage: { ar: 'الرسالة', en: 'Message' },
      placeholderName: { ar: 'اسمك الكريم', en: 'Your name' },
      placeholderEmail: { ar: 'your@email.com', en: 'your@email.com' },
      placeholderSubject: { ar: 'موضوع الرسالة', en: 'Message subject' },
      placeholderMessage: { ar: 'اكتب رسالتك هنا...', en: 'Write your message here...' },
      follow: { ar: 'تابعنا على', en: 'Follow us on' },
    },
  },
};

interface LanguageContextValue {
  lang: Language;
  toggleLanguage: () => void;
  localizePath: (path: string, targetLang?: Language) => string;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const resolveTranslation = (key: string): TranslationEntry | undefined => {
  let current: TranslationEntry | TranslationDictionary | undefined = translations;

  for (const part of key.split('.')) {
    if (!current || !Object.prototype.hasOwnProperty.call(current, part)) {
      return undefined;
    }

    current = (current as TranslationDictionary)[part] as
      | TranslationEntry
      | TranslationDictionary
      | undefined;
  }

  if (!current || typeof current !== 'object' || !('ar' in current) || !('en' in current)) {
    return undefined;
  }

  return current as TranslationEntry;
};

export const LanguageProvider = ({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Language;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const routeSnapshot = `${location.pathname}${location.search}${location.hash}`;
  const lang = useMemo<Language>(() => {
    if (typeof window === 'undefined') {
      return initialLang ?? getPathLanguage(routeSnapshot);
    }

    return getPathLanguage(routeSnapshot);
  }, [initialLang, routeSnapshot]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('app-language', lang);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const searchParams = new URLSearchParams(location.search);
    const legacyLang = searchParams.get('lang');

    if (legacyLang !== 'ar' && legacyLang !== 'en') {
      return;
    }

    const nextPath = buildLocalizedUrlPath(routeSnapshot, legacyLang);

    if (nextPath !== routeSnapshot) {
      navigate(nextPath, { replace: true });
    }
  }, [location.search, navigate, routeSnapshot]);

  const toggleLanguage = useCallback(() => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    navigate(buildLocalizedUrlPath(routeSnapshot, nextLang));
  }, [lang, navigate, routeSnapshot]);

  const localizePath = useCallback(
    (path: string, targetLang = lang) => {
      if (!path.startsWith('/') && !path.startsWith('?') && !path.startsWith('#')) {
        return path;
      }

      if (path.startsWith('?') || path.startsWith('#')) {
        return buildLocalizedUrlPath(`${location.pathname}${path}`, targetLang);
      }

      return getLocalizedPath(path, targetLang);
    },
    [lang, location.pathname],
  );

  const t = useCallback(
    (key: string, fallback = '') => {
      const entry = resolveTranslation(key);
      if (!entry) return fallback;
      return entry[lang] ?? fallback;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, toggleLanguage, localizePath, t }),
    [lang, localizePath, toggleLanguage, t],
  );

  return createElement(LanguageContext.Provider, { value }, children);
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
