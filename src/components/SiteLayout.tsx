import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
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
import { portfolioProfile } from '../data/portfolio';
import { preloadPath } from '../lib/pageLoaders';
import BrandLogo from './BrandLogo';
import CustomCursor from './CustomCursor';

const navItems = [
  { to: '/', labelKey: 'nav.home', end: true },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/services', labelKey: 'nav.services' },
  { to: '/projects', labelKey: 'nav.projects' },
  { to: '/blog', labelKey: 'nav.blog' },
  { to: '/testimonials', labelKey: 'nav.testimonials' },
  { to: '/contact', labelKey: 'nav.contact' },
];

const socialIcons = {
  facebook: Facebook,
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
};

const SiteLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const brandLabel = lang === 'ar' ? 'نُطق' : 'Notaq';
  const footerLinks =
    lang === 'ar'
      ? [
          { to: '/about', label: 'الرؤية' },
          { to: '/services', label: 'الخدمات' },
          { to: '/projects', label: 'الأعمال' },
          { to: '/contact', label: 'التواصل' },
        ]
      : [
          { to: '/about', label: 'Vision' },
          { to: '/services', label: 'Services' },
          { to: '/projects', label: 'Pinnacles' },
          { to: '/contact', label: 'Signal' },
        ];
  const footerTagline = lang === 'ar' ? 'حرفية رقمية' : 'Digital Craftsmanship';
  const footerDescription =
    lang === 'ar'
      ? 'نصمم مواقع وصفحات خدمة وتجارب رقمية تساعد العلامات التجارية على الظهور بوضوح وبناء ثقة أسرع مع العميل.'
      : 'We design websites, service pages, and digital experiences that help brands show up clearly and build customer trust faster.';
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
    `rounded-full px-4 py-2 text-sm transition ${
      isActive
        ? 'bg-white/10 text-white'
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`;

  const prefetchRoute = (path: string) => {
    void preloadPath(path);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: { effectiveType?: string; saveData?: boolean };
      }
    ).connection;

    if (connection?.saveData || connection?.effectiveType?.includes('2g')) {
      return;
    }

    const routesToPrefetch = navItems
      .map((item) => item.to)
      .filter((path) => path !== location.pathname);

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
  }, [location.pathname]);

  const routeLoadingLabel = lang === 'ar' ? 'جارٍ فتح الصفحة...' : 'Opening page...';
  const routeLoadingHint = lang === 'ar' ? 'نرتب التجربة قبل الظهور' : 'Preparing the experience';
  const routeTransition = shouldReduceMotion
    ? { duration: 0 }
    : ({ duration: 0.15, ease: 'easeOut' } as const);

  const routeLoader = (
    <div className="section-shell py-16">
      <div className="mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="surface-card flex items-center gap-4 rounded-full border border-white/10 px-5 py-3 shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
        >
          <motion.span
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -3, 0], scale: [1, 1.06, 1], rotate: [0, 8, 0] }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-lg shadow-[0_0_30px_rgba(45,212,191,0.2)]"
          >
            🧭
          </motion.span>
          <div className="space-y-1 text-right">
            <p className="text-sm font-medium text-slate-100">{routeLoadingLabel}</p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70">{routeLoadingHint}</p>
          </div>
        </motion.div>
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
      <CustomCursor />
      <a
        href="#main-content"
        className="sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:w-auto focus:h-auto focus:px-3 focus:py-2 focus:bg-slate-950 focus:text-white focus:overflow-visible focus:whitespace-normal focus:clip-auto"
      >
        {t('header.skipToContent')}
      </a>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 border-b border-white/8 backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
          isScrolled
            ? 'bg-[rgba(6,9,15,0.97)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[rgba(6,9,15,0.85)]'
        }`}
      >
        <div className="section-shell">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 py-3">
            <Link
              to="/"
              className="flex items-center gap-2.5"
              onClick={() => setIsMenuOpen(false)}
              onFocus={() => prefetchRoute('/')}
              onMouseEnter={() => prefetchRoute('/')}
            >
              <BrandLogo
                className="w-[60px] shrink-0"
                imageClassName="w-full"
              />
              <div>
                <p className="font-display text-base font-semibold text-white leading-tight">
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
                <p className="text-[10px] text-slate-500 leading-tight">
                  {lang === 'ar' ? portfolioProfile.roleAr : portfolioProfile.role}
                </p>
              </div>
            </Link>

            <nav aria-label={t('header.navLabel')} className="hidden items-center gap-1 rounded-[1.4rem] border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md md:flex shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onFocus={() => prefetchRoute(item.to)}
                  onMouseEnter={() => prefetchRoute(item.to)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm transition-all duration-300 font-medium ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                        : 'text-slate-400 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 h-10 w-10 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition shadow-sm"
                aria-label={t('header.languageSwitch')}
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>
              <a className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 h-10 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition shadow-sm" href={`tel:${portfolioProfile.phoneHref}`}>
                <Phone className="h-4 w-4" />
                <span dir="ltr">{portfolioProfile.phone}</span>
              </a>
              <Link
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 px-6 h-10 text-sm font-bold text-slate-950 hover:brightness-110 transition shadow-[0_5px_15px_-5px_rgba(45,212,191,0.6)]"
                to="/contact"
                onFocus={() => prefetchRoute('/contact')}
                onMouseEnter={() => prefetchRoute('/contact')}
              >
                <Mail className="h-4 w-4" />
                {t('buttons.startProject')}
              </Link>
            </div>

            <button
              aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
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
              className="border-t border-white/8 bg-[#06090ff2] md:hidden"
            >
              <div className="section-shell py-4">
                <div id="mobile-menu" className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) => navLinkClass(isActive)}
                      onFocus={() => prefetchRoute(item.to)}
                      onMouseEnter={() => prefetchRoute(item.to)}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(item.labelKey)}
                    </NavLink>
                  ))}
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
                  <a className="btn-secondary justify-center" href={`tel:${portfolioProfile.phoneHref}`}>
                    <Phone className="h-4 w-4" />
                    {portfolioProfile.phone}
                  </a>
                  <Link
                    className="btn-primary justify-center"
                    to="/contact"
                    onFocus={() => prefetchRoute('/contact')}
                    onMouseEnter={() => prefetchRoute('/contact')}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail className="h-4 w-4" />
                    {portfolioProfile.email}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer to push content below fixed navbar */}
      <div className="h-[57px]" aria-hidden="true" />

      <main id="main-content" aria-label={t('header.skipToContent')} className="relative overflow-hidden">
        {import.meta.env.SSR ? (
          routeContent
        ) : (
          <Suspense fallback={null}>{routeContent}</Suspense>
        )}
      </main>

      <footer className="relative mt-24 overflow-hidden border-t border-white/5 bg-[#030508] pt-16">
        <div className="pointer-events-none absolute top-[-12%] right-[18%] h-[26rem] w-[26rem] rounded-full bg-cyan-700/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-18%] left-[12%] h-[30rem] w-[30rem] rounded-full bg-violet-900/10 blur-[160px]" />

        <div className="section-shell relative z-10">
          <div className="rounded-[2.4rem] border border-white/8 bg-white/[0.02] p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.95)] md:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.95fr]">
              <div className="text-center lg:text-start">
                <Link to="/" className="inline-flex items-center gap-4">
                  <BrandLogo
                    className="w-[88px] shrink-0 ring-1 ring-white/10"
                    imageClassName="w-full"
                    loading="lazy"
                  />
                  <div className="space-y-1">
                    <p className="font-display text-xl font-semibold text-white">
                      {lang === 'ar' ? 'نُطق | Notaq' : 'Notaq'}
                    </p>
                    <p className="text-xs font-medium tracking-[0.22em] text-slate-500">
                      {footerTagline}
                    </p>
                  </div>
                </Link>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 lg:max-w-lg">
                  {footerDescription}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                    href={`mailto:${portfolioProfile.email}`}
                  >
                    <Mail className="h-4 w-4 text-cyan-300" />
                    {portfolioProfile.email}
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                    href={`tel:${portfolioProfile.phoneHref}`}
                  >
                    <Phone className="h-4 w-4 text-cyan-300" />
                    {portfolioProfile.phone}
                  </a>
                </div>
              </div>

              <div className="text-center lg:text-start">
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                  {footerQuickLinksLabel}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
                  {footerLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="rounded-full border border-transparent px-3 py-2 transition-colors hover:border-white/10 hover:bg-white/[0.03] hover:text-cyan-300"
                    >
                      {item.label}
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

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                    {footerContactLabel}
                  </p>
                  <p className="mt-3 text-base text-slate-200">
                    {lang === 'ar' ? portfolioProfile.location : portfolioProfile.locationEn}
                  </p>
                  <p className="mt-2 leading-7">
                    {lang === 'ar'
                      ? 'جاهزون لمناقشة موقع شركة، صفحة خدمة، أو تجربة رقمية أوضح.'
                      : 'Ready to discuss a company website, service page, or a clearer digital experience.'}
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
