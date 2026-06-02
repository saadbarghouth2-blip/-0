import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpLeft,
  ChevronDown,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
  Youtube,
} from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { navGroups } from '../data/company';
import { portfolioProfile } from '../data/portfolio';
import { serviceFamilies, serviceLibrary } from '../data/serviceLibrary';
import { preloadPath } from '../lib/pageLoaders';
import { trackEvent } from '../lib/analytics';
import BrandLogo from './BrandLogo';
import PageEnrichment from './PageEnrichment';

const socialIcons = {
  facebook: Facebook,
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
};

const joinClasses = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

const serviceLibrarySlugs = new Set(serviceLibrary.map((service) => service.slug));

interface LoadingBrandBadgeProps {
  hint: string;
  isArabic: boolean;
  label: string;
  shouldReduceMotion: boolean;
  className?: string;
  logoClassName?: string;
}

const LoadingBrandBadge = ({
  hint,
  isArabic,
  label,
  shouldReduceMotion,
  className,
  logoClassName,
}: LoadingBrandBadgeProps) => {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : {
              opacity: 1,
              y: [0, -2, 0],
              scale: 1,
              boxShadow: [
                '0 22px 60px rgba(0,0,0,0.35)',
                '0 28px 75px rgba(14,165,233,0.16)',
                '0 22px 60px rgba(0,0,0,0.35)',
              ],
            }
      }
      transition={{
        opacity: { duration: 0.35, ease: 'easeOut' },
        y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
        boxShadow: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
      }}
      dir={isArabic ? 'rtl' : 'ltr'}
      className={joinClasses(
        'surface-card relative inline-flex max-w-full overflow-hidden rounded-[1.55rem] border border-white/10 px-5 py-4',
        className,
      )}
    >
      {!shouldReduceMotion && (
        <>
          <motion.span
            aria-hidden="true"
            animate={{ x: [-24, 24, -24], y: [-10, 10, -10], opacity: [0.18, 0.38, 0.18] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[-10%] top-[-35%] h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl"
          />
          <motion.span
            aria-hidden="true"
            animate={{ x: [18, -18, 18], y: [10, -12, 10], opacity: [0.14, 0.3, 0.14] }}
            transition={{ duration: 6.3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[-45%] right-[-6%] h-24 w-24 rounded-full bg-violet-500/18 blur-3xl"
          />
        </>
      )}

      <div className="sr-only">
        {label}. {hint}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative shrink-0">
          {!shouldReduceMotion && (
            <>
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [0.24, 0.55, 0.24], scale: [0.92, 1.06, 0.92] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-0.45rem] rounded-[1.2rem] bg-cyan-400/18 blur-xl"
              />
              <motion.span
                aria-hidden="true"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-0.6rem] rounded-[1.35rem] bg-[conic-gradient(from_0deg,rgba(45,212,191,0),rgba(45,212,191,0.28),rgba(168,85,247,0.22),rgba(45,212,191,0))] opacity-50 blur-md"
              />
            </>
          )}

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -2.5, 0], scale: [1, 1.02, 1], rotate: [0, -1, 0] }
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[1rem]">
              <BrandLogo
                className={joinClasses(
                  'h-12 w-[84px] rounded-[1rem] border-white/60 bg-white/95 px-2.5 py-1.5 shadow-[0_20px_35px_-22px_rgba(45,212,191,0.55)]',
                  logoClassName,
                )}
                imageClassName="h-full w-full"
              />
              {!shouldReduceMotion && (
                <motion.span
                  aria-hidden="true"
                  animate={{ x: ['-130%', '260%'] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.15 }}
                  className="pointer-events-none absolute inset-y-1 left-0 w-[34%] -skew-x-12 rounded-full bg-gradient-to-r from-transparent via-white/75 to-transparent blur-[2px]"
                />
              )}
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: [0.28, 1, 0.28], scale: [0.88, 1.15, 0.88] }
              }
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: dot * 0.16,
              }}
              className={joinClasses(
                'h-1.5 w-1.5 rounded-full',
                dot === 1 ? 'bg-white/80' : 'bg-cyan-300/75',
              )}
            />
          ))}
        </div>

        <div className="h-[4px] w-20 overflow-hidden rounded-full bg-white/8">
          {!shouldReduceMotion && (
            <motion.span
              aria-hidden="true"
              animate={{ x: ['-120%', '190%'] }}
              transition={{ duration: 1.45, repeat: Infinity, ease: 'easeInOut' }}
              className="block h-full w-10 rounded-full bg-gradient-to-r from-cyan-300 via-white to-teal-300 shadow-[0_0_14px_rgba(103,232,249,0.4)]"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const SiteLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavGroupId, setActiveNavGroupId] = useState<string | null>(null);
  const [desktopDropdownLeft, setDesktopDropdownLeft] = useState<number | null>(null);
  const [mobileOpenGroupId, setMobileOpenGroupId] = useState<string | null>('home');
  const [mobileOpenServiceFamilyId, setMobileOpenServiceFamilyId] = useState<string | null>(
    serviceFamilies[0]?.id ?? null,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const { lang, t, toggleLanguage, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });
  const currentPath = location.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const localizedNavGroups = useMemo(
    () =>
      navGroups.map((group) => ({
        ...group,
        localizedMainTo: localizePath(group.mainTo),
        localizedItems: group.items.map((item) => ({
          ...item,
          localizedTo: localizePath(item.to),
        })),
      })),
    [localizePath],
  );
  const navPrefetchPaths = useMemo(
    () =>
      localizedNavGroups.flatMap((group) => [
        group.localizedMainTo,
        ...group.localizedItems.map((item) => item.localizedTo),
      ]),
    [localizedNavGroups],
  );
  const localizedHomePath = localizePath('/');
  const localizedContactPath = localizePath('/contact');
  const isContactRoute = /(^|\/)contact\/?$/.test(location.pathname);
  const brandLabel = lang === 'ar' ? 'نُطق' : 'Notaq';
  const footerLinks =
    lang === 'ar'
      ? [
          { to: '/', label: 'الرئيسية', description: 'ابدأ من الصورة الكاملة.' },
          { to: '/about', label: 'من نحن', description: 'اعرف طريقة التفكير والتنفيذ.' },
          { to: '/services', label: 'الخدمات', description: 'اختر ما يناسب احتياج شركتك.' },
          { to: '/projects', label: 'الأعمال', description: 'شاهد شكل النتائج الممكنة.' },
          { to: '/blog', label: 'المدونة', description: 'اقرأ أفكارًا تساعد قرارك.' },
          { to: '/testimonials', label: 'آراء العملاء', description: 'اطمئن من تجارب حقيقية.' },
          { to: '/contact', label: 'تواصل معنا', description: 'حوّل الاحتياج إلى خطوة واضحة.' },
          { to: '/contact/brief', label: 'Brief سريع', description: 'رتّب متطلبات شركتك الآن.' },
        ]
      : [
          { to: '/', label: 'Home', description: 'Start with the full picture.' },
          { to: '/about', label: 'About', description: 'See how we think and build.' },
          { to: '/services', label: 'Services', description: 'Choose what fits your company need.' },
          { to: '/projects', label: 'Projects', description: 'Preview possible outcomes.' },
          { to: '/blog', label: 'Blog', description: 'Read ideas that guide your decision.' },
          { to: '/testimonials', label: 'Testimonials', description: 'Trust the experience of others.' },
          { to: '/contact', label: 'Contact', description: 'Turn the need into a clear next step.' },
          { to: '/contact/brief', label: 'Quick brief', description: 'Organize your company requirements now.' },
        ];
  const footerTagline = lang === 'ar' ? 'حرفية رقمية' : 'Digital Craftsmanship';
  const footerDescription =
    lang === 'ar'
      ? 'احصل على موقع أو صفحة خدمة أو تجربة رقمية تساعد شركتك على الظهور بوضوح وبناء ثقة أسرع مع الزائر المناسب.'
      : 'Get a website, service page, or digital experience that helps your company show up clearly and build trust faster with the right visitors.';
  const footerQuickLinksLabel = lang === 'ar' ? 'روابط سريعة' : 'Quick links';
  const footerContactLabel = lang === 'ar' ? 'تواصل مباشر' : 'Direct contact';
  const footerSocialLabel = lang === 'ar' ? 'تابع نُطق' : 'Follow Notaq';
  const footerCopyright =
    lang === 'ar'
      ? `© ${new Date().getFullYear()} نُطق | Notaq. جميع الحقوق محفوظة.`
      : `© ${new Date().getFullYear()} Notaq. All rights reserved.`;
  const footerBuiltWith = lang === 'ar' ? 'صُنع بدقة' : 'Built with';
  const footerPrecision = lang === 'ar' ? 'متقنة' : 'Precision';
  const navLinkClass = (isActive = false) =>
    `site-mobile-nav-link ${isActive ? 'site-mobile-nav-link-active' : ''} rounded-full px-4 py-2 text-sm transition ${
      isActive
        ? 'bg-white/10 text-white'
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`;

  const prefetchRoute = (path: string) => {
    void preloadPath(path);
  };

  const getLocalizedText = (value: { ar: string; en: string }) =>
    isArabic ? value.ar : value.en;

  const isGroupActive = (group: (typeof localizedNavGroups)[number]) => {
    if (currentPath === group.mainTo) {
      return true;
    }

    return group.items.some((item) => {
      if (item.to.includes('#')) {
        return false;
      }

      return currentPath === item.to || currentPath.startsWith(`${item.to}/`);
    });
  };

  const activeNavGroup = localizedNavGroups.find((group) => group.id === activeNavGroupId) ?? null;
  const activeDropdownItems = activeNavGroup
    ? activeNavGroup.localizedItems.filter((item) => item.to !== activeNavGroup.mainTo)
    : [];
  const localizedServiceFamilies = useMemo(
    () =>
      serviceFamilies.map((family) => ({
        ...family,
        services: serviceLibrary
          .filter((service) => service.familyId === family.id)
          .map((service) => ({
            ...service,
            localizedTo: localizePath(`/services/${service.slug}`),
          })),
      })),
    [localizePath],
  );
  const additionalServiceItems = useMemo(() => {
    const serviceGroup = localizedNavGroups.find((group) => group.id === 'services');

    if (!serviceGroup) {
      return [];
    }

    return serviceGroup.localizedItems.filter((item) => {
      const slug = item.to.replace(/^\/services\//, '');
      return item.to !== '/services' && !serviceLibrarySlugs.has(slug);
    });
  }, [localizedNavGroups]);

  const trackPhoneClick = (placement: 'header' | 'mobile_menu' | 'footer') => {
    trackEvent('phone_click', {
      placement,
      phone_number: portfolioProfile.phoneHref,
      language: lang,
    });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const hashId = decodeURIComponent(location.hash.slice(1));
    const scrollToHash = () => {
      const target = document.getElementById(hashId);

      if (!target) {
        return;
      }

      const headerOffset = (headerRef.current?.offsetHeight ?? 0) + 18;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    };

    window.setTimeout(scrollToHash, 80);
  }, [location.hash, location.pathname, shouldReduceMotion]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = 'dark';
    root.classList.add('dark');
    window.localStorage.removeItem('notaq-theme');
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveNavGroupId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveNavGroupId(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    queueMicrotask(() => {
      setIsMenuOpen(false);
      setActiveNavGroupId(null);
    });
  }, [lang, location.pathname]);

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: { effectiveType?: string; saveData?: boolean };
      }
    ).connection;

    if (connection?.saveData || connection?.effectiveType?.includes('2g')) {
      return;
    }

    const routesToPrefetch = navPrefetchPaths.filter((path) => path !== location.pathname);

    if (routesToPrefetch.length === 0) {
      return;
    }

    const idleWindow = window as Window & {
      cancelIdleCallback?: (handle: number) => void;
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
    };

    const runPrefetch = () => {
      routesToPrefetch.forEach((path) => {
        void preloadPath(path);
      });
    };

    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;

    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(runPrefetch, { timeout: 1500 });
    } else {
      timeoutHandle = window.setTimeout(runPrefetch, 350);
    }

    return () => {
      if (idleHandle !== undefined && idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(idleHandle);
      }

      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, [navPrefetchPaths, location.pathname]);

  const isProjectDetailRoute = /^\/projects\/[^/]+$/.test(currentPath);
  const activeRouteLoadingLabel = isProjectDetailRoute
    ? (isArabic ? 'نُحضّر عرض المشروع بأفضل صورة' : 'Preparing the project showcase')
    : (isArabic ? 'نُهيّئ التجربة للظهور' : 'Preparing the experience to appear');
  const activeRouteLoadingHint = isProjectDetailRoute
    ? (
        isArabic
          ? 'نرتّب التفاصيل البصرية ونصقل الحركة لتظهر التجربة بمستوى يليق بعلامتك.'
          : 'Refining the visuals and motion so the project appears at its strongest.'
      )
    : (
        isArabic
          ? 'لمسات أخيرة على المحتوى والحركة قبل أن تظهر الصفحة بشكلها الكامل.'
          : 'Adding the final content and motion touches before the page appears in full.'
      );
  const routeTransition = shouldReduceMotion
    ? { duration: 0 }
    : ({ duration: 0.15, ease: 'easeOut' } as const);

  const routeLoader = isProjectDetailRoute ? (
    <section className="section-shell relative overflow-hidden pb-20 pt-14 md:pt-20">
      <div className="mobile-ornament pointer-events-none absolute left-[-8%] top-8 h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="mobile-ornament pointer-events-none absolute bottom-[-10%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5 md:space-y-6">
            <LoadingBrandBadge
              hint={activeRouteLoadingHint}
              isArabic={isArabic}
              label={activeRouteLoadingLabel}
              shouldReduceMotion={shouldReduceMotion}
              className="inline-flex shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
              logoClassName="h-10 w-[72px] md:h-11 md:w-[76px]"
            />

            <div className="flex flex-wrap gap-3">
              <div className="h-8 w-28 animate-pulse rounded-full border border-cyan-400/20 bg-cyan-400/10" />
              <div className="h-8 w-24 animate-pulse rounded-full border border-white/10 bg-white/[0.04]" />
            </div>

            <div className="space-y-3">
              <div className="h-4 w-28 animate-pulse rounded-full bg-cyan-300/12" />
              <div className="h-10 w-full max-w-[30rem] animate-pulse rounded-[1.05rem] bg-white/[0.06] md:h-14" />
              <div className="h-10 w-4/5 max-w-[24rem] animate-pulse rounded-[1.05rem] bg-white/[0.05] md:h-14" />
            </div>

            <div className="space-y-2.5">
              <div className="h-4 w-full max-w-[38rem] animate-pulse rounded-full bg-white/[0.05]" />
              <div className="h-4 w-11/12 max-w-[34rem] animate-pulse rounded-full bg-white/[0.05]" />
              <div className="h-4 w-8/12 max-w-[22rem] animate-pulse rounded-full bg-white/[0.04]" />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="h-12 w-full animate-pulse rounded-[1.1rem] bg-gradient-to-r from-cyan-400/25 to-teal-500/20 sm:w-44" />
              <div className="h-12 w-full animate-pulse rounded-[1.1rem] border border-white/10 bg-white/[0.04] sm:w-40" />
            </div>
          </div>

          <div className="surface-card-strong relative overflow-hidden rounded-[1.8rem] border border-white/10 md:rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_42%)]" />
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:30px_30px]" />
            <div className="relative flex min-h-[240px] items-end p-5 md:min-h-[320px] md:p-8">
              <div className="w-full rounded-[1.5rem] border border-white/10 bg-[#0b1320]/72 p-4 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:rounded-[1.8rem] md:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-24 animate-pulse rounded-full bg-cyan-300/14" />
                    <div className="h-5 w-3/4 animate-pulse rounded-full bg-white/[0.08]" />
                    <div className="h-4 w-1/2 animate-pulse rounded-full bg-white/[0.05]" />
                  </div>
                  <div className="h-14 w-14 animate-pulse rounded-[1.2rem] border border-white/10 bg-white/[0.05]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="surface-card rounded-[1.6rem] p-5 md:rounded-[1.8rem] md:p-6">
              <div className="h-11 w-11 animate-pulse rounded-2xl bg-cyan-400/12" />
              <div className="mt-4 h-3 w-24 animate-pulse rounded-full bg-white/[0.05]" />
              <div className="mt-3 h-5 w-4/5 animate-pulse rounded-full bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <div className="section-shell py-16">
      <div className="mx-auto flex min-h-[38vh] max-w-7xl items-center justify-center">
        <LoadingBrandBadge
          hint={activeRouteLoadingHint}
          isArabic={isArabic}
          label={activeRouteLoadingLabel}
          shouldReduceMotion={shouldReduceMotion}
        />
      </div>
    </div>
  );
  void routeLoader;

  const routeContent = (
    <motion.div
      key={location.pathname}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={routeTransition}
    >
      <Outlet />
    </motion.div>
  );

  return (
    <div className="min-h-screen text-foreground relative">
      <motion.div
        aria-hidden="true"
        className="site-scroll-progress"
        style={{ scaleX: shouldReduceMotion ? 1 : scrollProgress }}
      />
      <a
        href="#main-content"
        className="sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:w-auto focus:h-auto focus:px-3 focus:py-2 focus:bg-slate-950 focus:text-white focus:overflow-visible focus:whitespace-normal focus:clip-auto"
      >
        {t('header.skipToContent')}
      </a>
      <motion.header
        ref={headerRef}
        className={joinClasses(
          'site-header fixed top-0 inset-x-0 z-[90] transition-[background-color,box-shadow] duration-300',
          isScrolled && 'site-header-scrolled',
        )}
      >
        <div className="section-shell">
          <div className="site-nav-shell relative mx-auto flex max-w-7xl items-center justify-between gap-2 md:justify-between">
            <Link
              to={localizedHomePath}
              className="site-brand flex min-w-0 max-w-[calc(100%-3.25rem)] items-center justify-start gap-2 overflow-hidden text-right sm:gap-2.5 md:static md:my-0 md:max-w-none md:flex-none"
              onClick={() => setIsMenuOpen(false)}
              onFocus={() => prefetchRoute(localizedHomePath)}
              onMouseEnter={() => prefetchRoute(localizedHomePath)}
            >
              <BrandLogo
                className="w-[68px] shrink-0 min-[390px]:w-[76px] sm:w-[88px] lg:w-[96px]"
                imageClassName="w-full"
              />
              <div className="hidden min-w-0 min-[390px]:block">
                <p className="truncate font-display text-[0.95rem] font-semibold leading-tight text-white sm:text-base">
                  {lang === 'ar' ? (
                    <>
                      <span className="text-gradient">{brandLabel}</span>{' '}
                      <span className="text-white/30">|</span> Notaq
                    </>
                  ) : (
                    <>
                      {brandLabel} <span className="text-white/30">|</span>{' '}
                      <span className="text-gradient">Notaq</span>
                    </>
                  )}
                </p>
                <p className="hidden max-w-[180px] truncate text-[9px] leading-tight text-slate-500 min-[390px]:block sm:max-w-none sm:text-[10px]">
                  {lang === 'ar' ? portfolioProfile.roleAr : portfolioProfile.role}
                </p>
              </div>
            </Link>

            <nav aria-label={t('header.navLabel')} className="site-nav-menu">
              {localizedNavGroups.map((group) => {
                const isActive = isGroupActive(group);
                const isOpen = activeNavGroupId === group.id;

                return (
                  <button
                    key={group.id}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={(event) => {
                      const shell = event.currentTarget.closest('.site-nav-shell');
                      const shellRect = shell?.getBoundingClientRect();
                      const triggerRect = event.currentTarget.getBoundingClientRect();
                      setDesktopDropdownLeft(
                        shellRect ? triggerRect.left + triggerRect.width / 2 - shellRect.left : null,
                      );
                      setActiveNavGroupId(isOpen ? null : group.id);
                    }}
                    onFocus={() => prefetchRoute(group.localizedMainTo)}
                    onMouseEnter={() => prefetchRoute(group.localizedMainTo)}
                    className={joinClasses(
                      'site-nav-trigger',
                      (isActive || isOpen) && 'site-nav-trigger-active',
                    )}
                  >
                    {t(group.labelKey, getLocalizedText(group.fallbackLabel))}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                );
              })}
            </nav>

            <AnimatePresence>
              {activeNavGroup ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.14, ease: 'easeOut' }}
                  className={joinClasses(
                    'site-dropdown absolute left-0 top-[calc(100%+0.55rem)] z-50 hidden -translate-x-1/2 overflow-hidden md:block',
                    activeNavGroup.id === 'services'
                      ? 'site-services-mega w-[min(82vw,42rem)] p-1.5'
                      : 'w-[min(14.5rem,calc(100vw-2rem))] p-1',
                  )}
                  style={{ left: desktopDropdownLeft ?? undefined }}
                >
                  {activeNavGroup.id === 'services' ? (
                    <div className="site-services-mega-scroll max-h-[min(58vh,27rem)] min-h-0 overflow-y-auto p-1.5">
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 rounded-[0.85rem] border border-cyan-300/12 bg-cyan-300/[0.045] px-2.5 py-2">
                        <div className="hidden">
                          <p className="text-sm font-bold text-white">
                            {isArabic ? 'الخدمات مقسمة حسب احتياج شركتك' : 'Services grouped by your company need'}
                          </p>
                          <p className="hidden">
                            {isArabic
                              ? 'افتح الخدمة المطلوبة لقراءة التفاصيل والمخرجات والأسئلة.'
                              : 'Open a service to read details, outputs, and questions.'}
                          </p>
                        </div>
                        <p className="min-w-0 truncate text-sm font-bold text-white">
                          {isArabic ? 'الخدمات حسب الاحتياج' : 'Services by need'}
                        </p>
                        <Link
                          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-cyan-300 px-3 py-1.5 text-[11px] font-bold text-slate-950 transition hover:bg-cyan-200"
                          to={activeNavGroup.localizedMainTo}
                          onClick={() => setActiveNavGroupId(null)}
                          onFocus={() => prefetchRoute(activeNavGroup.localizedMainTo)}
                          onMouseEnter={() => prefetchRoute(activeNavGroup.localizedMainTo)}
                        >
                          {getLocalizedText(activeNavGroup.cta)}
                          <ArrowUpLeft className="h-3 w-3" />
                        </Link>
                      </div>

                      <div className="grid min-w-0 gap-2 sm:grid-cols-2">
                        {localizedServiceFamilies.map((family) => (
                          <section
                            key={family.id}
                            className="relative overflow-hidden rounded-[0.95rem] border border-white/9 bg-[#07111c]/72 p-2.5"
                          >
                            <div className={`absolute inset-x-0 top-0 h-14 bg-gradient-to-br ${family.accent}`} />
                            <div className="relative">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <h3 className="truncate text-sm font-bold text-white">{getLocalizedText(family.label)}</h3>
                                  <p className="mt-0.5 line-clamp-1 text-[11px] leading-5 text-slate-400">
                                    {getLocalizedText(family.description)}
                                  </p>
                                </div>
                                <span className="rounded-full border border-white/10 bg-white/[0.055] px-2 py-0.5 text-[11px] font-bold text-cyan-100">
                                  {family.services.length}
                                </span>
                              </div>

                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {family.services.map((service) => (
                                  <Link
                                    key={service.slug}
                                    to={service.localizedTo}
                                    title={getLocalizedText(service.bestFor)}
                                    className="group inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/8 bg-[#030914]/55 px-2.5 py-1.5 text-start transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.07]"
                                    onClick={() => setActiveNavGroupId(null)}
                                    onFocus={() => prefetchRoute(service.localizedTo)}
                                    onMouseEnter={() => prefetchRoute(service.localizedTo)}
                                  >
                                    <span className="max-w-[11rem] truncate text-xs font-bold text-slate-200 group-hover:text-cyan-100">
                                      {getLocalizedText(service.eyebrow)}
                                    </span>
                                    <ArrowUpLeft className="h-3 w-3 shrink-0 text-slate-500 transition group-hover:text-cyan-200" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </section>
                        ))}

                        {additionalServiceItems.length > 0 && (
                          <section className="rounded-[0.95rem] border border-white/9 bg-[#07111c]/72 p-2.5 sm:col-span-2">
                            <h3 className="text-sm font-bold text-white">
                              {isArabic ? 'خدمات إضافية' : 'Additional services'}
                            </h3>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {additionalServiceItems.map((item, itemIndex) => (
                                <Link
                                  key={`additional-service-${item.to}-${itemIndex}`}
                                  to={item.localizedTo}
                                  title={getLocalizedText(item.description)}
                                  className="inline-flex max-w-full rounded-full border border-white/8 bg-[#030914]/55 px-2.5 py-1.5 text-start text-xs font-bold text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.07] hover:text-cyan-100"
                                  onClick={() => setActiveNavGroupId(null)}
                                  onFocus={() => prefetchRoute(item.localizedTo)}
                                  onMouseEnter={() => prefetchRoute(item.localizedTo)}
                                >
                                  <span className="max-w-[11rem] truncate">{getLocalizedText(item.label)}</span>
                                </Link>
                              ))}
                            </div>
                          </section>
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link
                        className="site-dropdown-link site-dropdown-link-main"
                        to={activeNavGroup.localizedMainTo}
                        onClick={() => setActiveNavGroupId(null)}
                        onFocus={() => prefetchRoute(activeNavGroup.localizedMainTo)}
                        onMouseEnter={() => prefetchRoute(activeNavGroup.localizedMainTo)}
                      >
                        {getLocalizedText(activeNavGroup.cta)}
                      </Link>
                      {activeDropdownItems.length > 0 && <div className="site-dropdown-divider" />}
                      {activeDropdownItems.map((item, itemIndex) => (
                        <Link
                          key={`${activeNavGroup.id}-${item.to}-${itemIndex}`}
                          className="site-dropdown-link"
                          to={item.localizedTo}
                          onClick={() => setActiveNavGroupId(null)}
                          onFocus={() => prefetchRoute(item.localizedTo)}
                          onMouseEnter={() => prefetchRoute(item.localizedTo)}
                        >
                          {getLocalizedText(item.label)}
                        </Link>
                      ))}
                    </>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="site-nav-actions">
              <button
                type="button"
                onClick={toggleLanguage}
                className="site-icon-button text-[0.72rem] font-bold"
                aria-label={t('header.languageSwitch')}
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>
              <a
                className="site-phone-button"
                href={`tel:${portfolioProfile.phoneHref}`}
                onClick={() => trackPhoneClick('header')}
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">{portfolioProfile.phone}</span>
              </a>
              <Link
                className="site-cta-button"
                to={localizedContactPath}
                onFocus={() => prefetchRoute(localizedContactPath)}
                onMouseEnter={() => prefetchRoute(localizedContactPath)}
              >
                <Mail className="h-4 w-4" />
                {t('buttons.startProject')}
              </Link>
            </div>

            <button
              aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              className="site-mobile-menu-button md:mr-0"
              onClick={() => {
                setIsMenuOpen((open) => {
                  const nextOpen = !open;
                  if (nextOpen) {
                    const activeGroup = localizedNavGroups.find((group) => isGroupActive(group));
                    setMobileOpenGroupId(activeGroup?.id ?? 'home');
                    setMobileOpenServiceFamilyId(localizedServiceFamilies[0]?.id ?? null);
                  }
                  return nextOpen;
                });
              }}
              type="button"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="site-mobile-menu-backdrop border-t border-white/8 bg-[#06090ff2] shadow-[0_30px_90px_-45px_rgba(0,0,0,0.95)] lg:hidden"
            >
              <div className="section-shell py-2">
                <div id="mobile-menu" className="site-mobile-menu-panel mx-auto flex max-w-7xl flex-col gap-1.5 overflow-y-auto rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
                  <div className="site-mobile-menu-head flex items-center justify-between gap-2 rounded-[0.9rem] border border-white/10 bg-white/[0.04] p-2">
                    <div className="min-w-0">
                      <p className="text-[0.82rem] font-black leading-tight text-white">{t('header.navLabel')}</p>
                      <p className="mt-0.5 line-clamp-1 text-[0.7rem] leading-tight text-slate-400">{lang === 'ar' ? 'اختار الصفحة أو افتح القسم المناسب' : 'Pick a page or open a section'}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={t('header.closeMenu')}
                      className="site-mobile-menu-close inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="site-mobile-quick-links grid grid-cols-3 gap-1.5">
                    {localizedNavGroups.map((group) => (
                      <NavLink
                        key={`mobile-quick-${group.id}`}
                        to={group.localizedMainTo}
                        className={({ isActive }) =>
                          joinClasses(
                            'site-mobile-quick-link rounded-[0.75rem] border border-white/8 bg-[#06090f]/55 px-2 py-1.5 text-center text-[0.76rem] font-bold text-slate-200 transition hover:border-cyan-400/30 hover:text-white',
                            isActive && 'site-mobile-nav-link-active',
                          )
                        }
                        onFocus={() => prefetchRoute(group.localizedMainTo)}
                        onMouseEnter={() => prefetchRoute(group.localizedMainTo)}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveNavGroupId(null);
                        }}
                      >
                        {t(group.labelKey, getLocalizedText(group.fallbackLabel))}
                      </NavLink>
                    ))}
                  </div>

                  {localizedNavGroups.map((group) => {
                    const isOpen = mobileOpenGroupId === group.id;

                    return (
                      <div key={group.id} className="site-mobile-nav-group overflow-hidden rounded-[0.9rem] border border-white/8 bg-white/[0.025]">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`mobile-nav-group-${group.id}`}
                          onClick={() => setMobileOpenGroupId(isOpen ? null : group.id)}
                          className="site-mobile-nav-trigger flex w-full items-center justify-between gap-2.5 px-3 py-2 text-start text-[0.84rem] font-bold text-white"
                        >
                          <span>{t(group.labelKey, getLocalizedText(group.fallbackLabel))}</span>
                          <ChevronDown className={`h-3.5 w-3.5 text-cyan-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              id={`mobile-nav-group-${group.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="site-mobile-nav-children space-y-1 border-t border-white/8 p-1.5">
                                <NavLink
                                  to={group.localizedMainTo}
                                  className={({ isActive }) => navLinkClass(isActive)}
                                  onFocus={() => prefetchRoute(group.localizedMainTo)}
                                  onMouseEnter={() => prefetchRoute(group.localizedMainTo)}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveNavGroupId(null);
                                  }}
                                >
                                  {getLocalizedText(group.cta)}
                                </NavLink>
                                {group.id === 'services' ? (
                                  <div className="grid gap-1.5">
                                    <NavLink
                                      to={group.localizedMainTo}
                                      className={({ isActive }) => navLinkClass(isActive)}
                                      onFocus={() => prefetchRoute(group.localizedMainTo)}
                                      onMouseEnter={() => prefetchRoute(group.localizedMainTo)}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveNavGroupId(null);
                                      }}
                                    >
                                      {lang === 'ar' ? 'كل الخدمات' : 'All services'}
                                    </NavLink>
                                    {localizedServiceFamilies.map((family) => (
                                      <section
                                        key={`mobile-${family.id}`}
                                        className="site-mobile-service-family rounded-[0.8rem] border border-white/8 bg-[#06090f]/45 p-2"
                                      >
                                        <button
                                          type="button"
                                          className="flex w-full items-start justify-between gap-2 text-start"
                                          aria-expanded={mobileOpenServiceFamilyId === family.id}
                                          onClick={() => setMobileOpenServiceFamilyId((openId) => (openId === family.id ? null : family.id))}
                                        >
                                          <div className="min-w-0">
                                            <p className="line-clamp-1 text-[0.82rem] font-bold leading-tight text-white">{getLocalizedText(family.label)}</p>
                                            <p className="mt-0.5 line-clamp-1 text-[0.7rem] leading-4 text-slate-400">
                                              {getLocalizedText(family.description)}
                                            </p>
                                          </div>
                                          <span className="inline-flex items-center gap-1 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-1.5 py-0.5 text-[10px] font-bold text-cyan-100">
                                            {family.services.length}
                                            <ChevronDown className={`h-3 w-3 transition-transform ${mobileOpenServiceFamilyId === family.id ? 'rotate-180' : ''}`} />
                                          </span>
                                        </button>
                                        <AnimatePresence initial={false}>
                                          {mobileOpenServiceFamilyId === family.id ? (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: 'auto', opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              transition={{ duration: 0.18 }}
                                              className="overflow-hidden"
                                            >
                                              <div className="mt-1.5 grid gap-1">
                                                {family.services.map((service) => (
                                                  <Link
                                                    key={`mobile-service-${service.slug}`}
                                                    to={service.localizedTo}
                                                    className="site-mobile-nav-link block rounded-[0.68rem] border border-white/8 bg-[#020713]/55 px-2.5 py-1.5 text-[0.78rem] text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                                                    onFocus={() => prefetchRoute(service.localizedTo)}
                                                    onMouseEnter={() => prefetchRoute(service.localizedTo)}
                                                    onClick={() => {
                                                      setIsMenuOpen(false);
                                                      setActiveNavGroupId(null);
                                                    }}
                                                  >
                                                    <span className="line-clamp-1 block font-semibold leading-tight text-white">{getLocalizedText(service.eyebrow)}</span>
                                                    <span className="mt-0.5 line-clamp-1 block text-[0.68rem] leading-4 text-slate-400">
                                                      {getLocalizedText(service.bestFor)}
                                                    </span>
                                                  </Link>
                                                ))}
                                              </div>
                                            </motion.div>
                                          ) : null}
                                        </AnimatePresence>
                                      </section>
                                    ))}
                                    {additionalServiceItems.map((item, itemIndex) => (
                                      <Link
                                        key={`services-mobile-additional-${item.to}-${itemIndex}`}
                                        to={item.localizedTo}
                                        className="site-mobile-nav-link block rounded-[0.75rem] border border-white/8 bg-[#06090f]/45 px-2.5 py-1.5 text-[0.78rem] text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                                        onFocus={() => prefetchRoute(item.localizedTo)}
                                        onMouseEnter={() => prefetchRoute(item.localizedTo)}
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setActiveNavGroupId(null);
                                        }}
                                      >
                                        <span className="line-clamp-1 block font-semibold leading-tight text-white">{getLocalizedText(item.label)}</span>
                                        <span className="mt-0.5 line-clamp-1 block text-[0.68rem] leading-4 text-slate-400">
                                          {getLocalizedText(item.description)}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  group.localizedItems.map((item, itemIndex) => (
                                    <Link
                                      key={`${group.id}-mobile-${item.to}-${itemIndex}`}
                                      to={item.localizedTo}
                                      className="site-mobile-nav-link block rounded-[0.75rem] border border-white/8 bg-[#06090f]/45 px-2.5 py-1.5 text-[0.78rem] text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                                      onFocus={() => prefetchRoute(item.localizedTo)}
                                      onMouseEnter={() => prefetchRoute(item.localizedTo)}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveNavGroupId(null);
                                      }}
                                    >
                                      <span className="block font-semibold text-white">{getLocalizedText(item.label)}</span>
                                    </Link>
                                  ))
                                )}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                  <div className="site-mobile-menu-actions grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        toggleLanguage();
                        setIsMenuOpen(false);
                      }}
                      className="btn-secondary justify-center"
                      aria-label={t('header.languageSwitch')}
                    >
                      {lang === 'ar' ? 'EN' : 'عربي'}
                    </button>
                    <a
                      className="btn-secondary justify-center"
                      href={`tel:${portfolioProfile.phoneHref}`}
                      onClick={() => trackPhoneClick('mobile_menu')}
                    >
                      <Phone className="h-4 w-4" />
                      <span dir="ltr">{portfolioProfile.phone}</span>
                    </a>
                    <Link
                      className="btn-primary col-span-2 justify-center break-all text-sm"
                      to={localizedContactPath}
                      onFocus={() => prefetchRoute(localizedContactPath)}
                      onMouseEnter={() => prefetchRoute(localizedContactPath)}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Mail className="h-4 w-4" />
                      {t('buttons.startProject')}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer to push content below fixed navbar */}
      <div className="h-[60px] lg:h-[88px]" aria-hidden="true" />

      <main id="main-content" aria-label={t('header.skipToContent')} className="relative overflow-x-hidden">
        {import.meta.env.SSR ? (
          routeContent
        ) : (
          <Suspense fallback={routeLoader}>{routeContent}</Suspense>
        )}
        <PageEnrichment />
      </main>

      <footer
        className={joinClasses(
          'relative overflow-hidden border-t border-white/5 bg-[#030508]',
          isContactRoute ? 'mt-3 pt-3 md:mt-8 md:pt-8' : 'mt-16 pt-12 md:mt-24 md:pt-16',
        )}
      >
        <div className="mobile-ornament pointer-events-none absolute top-[-12%] right-[18%] h-[26rem] w-[26rem] rounded-full bg-cyan-700/10 blur-[140px]" />
        <div className="mobile-ornament pointer-events-none absolute bottom-[-18%] left-[12%] h-[30rem] w-[30rem] rounded-full bg-violet-900/10 blur-[160px]" />

        <div className="section-shell relative z-10">
          <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.02] p-5 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.95)] md:rounded-[2.4rem] md:p-8 lg:p-10">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.05fr_1.1fr_0.95fr]">
              <div className="text-center lg:text-start">
                <Link to={localizedHomePath} className="inline-flex max-w-full items-center gap-3 sm:gap-4">
                  <BrandLogo
                    className="w-[118px] shrink-0 sm:w-[138px]"
                    imageClassName="w-full"
                    loading="lazy"
                  />
                  <div className="min-w-0 space-y-1">
                    <p className="font-display text-lg font-semibold text-white sm:text-xl">
                      {lang === 'ar' ? 'نُطق | Notaq' : 'Notaq'}
                    </p>
                    <p className="text-[11px] font-medium tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.22em]">
                      {footerTagline}
                    </p>
                  </div>
                </Link>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 lg:mt-5 lg:max-w-lg">
                  {footerDescription}
                </p>

                <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                  <a
                    className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white sm:w-auto"
                    href={`mailto:${portfolioProfile.email}`}
                  >
                    <Mail className="h-4 w-4 text-cyan-300" />
                    <span className="break-all">{portfolioProfile.email}</span>
                  </a>
                  <a
                    className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white sm:w-auto"
                    href={`tel:${portfolioProfile.phoneHref}`}
                    onClick={() => trackPhoneClick('footer')}
                  >
                    <Phone className="h-4 w-4 text-cyan-300" />
                    <span dir="ltr">{portfolioProfile.phone}</span>
                  </a>
                </div>
              </div>

              <div className="text-center lg:text-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-sm font-semibold text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.7)]" />
                  {footerQuickLinksLabel}
                </div>
                <div className="mt-5 grid grid-cols-1 gap-2.5 text-sm text-slate-300 sm:grid-cols-2">
                  {footerLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={localizePath(item.to)}
                      className="group flex min-h-[4.25rem] items-center justify-between gap-3 rounded-[1.15rem] border border-white/8 bg-white/[0.025] px-3.5 py-3 text-start transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.055] hover:text-white"
                    >
                      <span className="min-w-0">
                        <span className="block font-bold text-white transition-colors group-hover:text-cyan-100">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500 transition-colors group-hover:text-slate-300">
                          {item.description}
                        </span>
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#07141b] text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/45 group-hover:bg-cyan-400/12 group-hover:text-white">
                        <ArrowUpLeft className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="text-center lg:text-start">
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                  {footerSocialLabel}
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {portfolioProfile.socials.map((social) => {
                    const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                    return (
                      <a
                        key={social.label}
                        className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white"
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400 md:rounded-[1.5rem]">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                    {footerContactLabel}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                    {lang === 'ar' ? portfolioProfile.location : portfolioProfile.locationEn}
                  </p>
                  <p className="mt-2 text-sm leading-7 md:text-base">
                    {lang === 'ar'
                      ? 'جاهزون لمناقشة موقع شركة، صفحة خدمة، أو تجربة رقمية أوضح.'
                      : 'Ready to discuss a company website, service page, or a clearer digital experience.'}
                  </p>
                </div>

                <div className="mt-4 rounded-[1.3rem] border border-amber-300/14 bg-amber-300/[0.045] p-4 text-sm text-slate-400 md:rounded-[1.5rem]">
                  <p className="text-xs font-semibold tracking-[0.18em] text-amber-200/80">
                    {lang === 'ar' ? 'بيانات التوثيق' : 'Verification details'}
                  </p>
                  <div className="mt-3 grid gap-2">
                    {portfolioProfile.legalDocumentation.map((item) => (
                      <div
                        key={item.value}
                        className="rounded-[0.9rem] border border-white/7 bg-black/15 px-3 py-2"
                      >
                        <p className="text-[11px] font-semibold text-slate-500">
                          {lang === 'ar' ? item.label : item.englishLabel}
                        </p>
                        <p className="mt-1 break-all text-sm font-bold text-slate-100" dir="ltr">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-6 text-amber-100/70">
                    {lang === 'ar'
                      ? portfolioProfile.legalDocumentationNotice
                      : portfolioProfile.englishLegalDocumentationNotice}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-center sm:text-start">{footerCopyright}</p>
              <p className="flex items-center justify-center gap-2 sm:justify-end">
                {footerBuiltWith}
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                {footerPrecision}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
