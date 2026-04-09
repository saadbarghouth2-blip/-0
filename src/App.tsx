import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import { useLanguage } from './hooks/useLanguage';
import { usePageMetadata } from './hooks/usePageMetadata';
import { getPageSeoByPath } from './lib/pageSeo';
import {
  AboutPage,
  BlogPage,
  BlogDetailPage,
  ContactPage,
  HomePage,
  ProjectDetailPage,
  ProjectsPage,
  ServicesPage,
  TestimonialsPage,
} from './lib/pageLoaders';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

const NotFoundPage = () => {
  const { lang } = useLanguage();

  usePageMetadata(getPageSeoByPath('/404', lang));

  return (
    <section className="section-shell py-28">
      <div className="surface-card mx-auto max-w-3xl rounded-[2rem] p-10 text-center">
        <p className="section-kicker mx-auto">404</p>
        <h1 className="mt-5 font-display text-4xl font-semibold text-foreground">
          {lang === 'ar' ? 'الصفحة غير موجودة' : 'Page not found'}
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-400">
          {lang === 'ar'
            ? 'الرابط الذي فتحته لا يحتوي على مشروع متاح حاليًا. يمكنك العودة إلى الرئيسية أو استعراض كل المشاريع من صفحة الأعمال.'
            : 'The link you opened does not contain an available project. You can return to the homepage or explore all projects from the work page.'}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link className="btn-primary" to="/">
            {lang === 'ar' ? 'العودة للرئيسية' : 'Back to home'}
          </Link>
          <Link className="btn-secondary" to="/projects">
            {lang === 'ar' ? 'صفحة المشاريع' : 'Projects page'}
          </Link>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
