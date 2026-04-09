import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import { useLanguage } from './hooks/useLanguage';
import { usePageMetadata } from './hooks/usePageMetadata';
import { getPageSeoByPath } from './lib/pageSeo';
import AboutPage from './pages/AboutPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';

const ScrollToTop = () => {
  useLocation();
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

function AppServer() {
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

export default AppServer;
