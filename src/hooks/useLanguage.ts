import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

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
    startProject: { ar: 'ابدأ مشروعك', en: 'Start your project' },
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
      subtitle: { ar: 'لنبدأ مشروعك', en: "Let's start your project" },
      description: { ar: 'نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي. تواصل معنا اليوم', en: 'We are here to help turn your ideas into a digital reality. Contact us today.' },
      detailsTitle: { ar: 'معلومات التواصل', en: 'Contact details' },
      detailsDescription: { ar: 'لا تتردد في التواصل معنا لأي استفسار أو لمناقشة مشروعك القادم', en: 'Feel free to reach out for any inquiry or to discuss your next project.' },
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
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const resolveTranslation = (key: string): TranslationEntry | undefined => {
  return key.split('.').reduce((current: any, part) => {
    if (!current) return undefined;
    return current[part];
  }, translations) as TranslationEntry | undefined;
};

const getLanguageFromSearchParams = (): Language | null => {
  if (typeof window === 'undefined') return null;

  const searchParams = new URLSearchParams(window.location.search);
  const langParam = searchParams.get('lang');

  if (langParam === 'en') {
    return 'en';
  }

  if (langParam === 'ar') {
    return 'ar';
  }

  return null;
};

const getLanguageFromStorage = (): Language => {
  if (typeof window === 'undefined') return 'ar';
  const fromSearchParams = getLanguageFromSearchParams();

  if (fromSearchParams) {
    return fromSearchParams;
  }

  const stored = window.localStorage.getItem('app-language');
  return stored === 'en' ? 'en' : 'ar';
};

export const LanguageProvider = ({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Language;
}) => {
  const [lang, setLang] = useState<Language>(initialLang ?? getLanguageFromStorage);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('app-language', lang);

      const url = new URL(window.location.href);

      if (lang === 'en') {
        url.searchParams.set('lang', 'en');
      } else {
        url.searchParams.delete('lang');
      }

      window.history.replaceState(window.history.state, '', url);
    }
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'ar' ? 'en' : 'ar'));
  }, []);

  const t = useCallback(
    (key: string, fallback = '') => {
      const entry = resolveTranslation(key);
      if (!entry) return fallback;
      return entry[lang] ?? fallback;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, toggleLanguage, t }),
    [lang, toggleLanguage, t],
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
