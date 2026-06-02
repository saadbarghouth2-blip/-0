import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import { useLanguage } from './hooks/useLanguage';
import { usePageMetadata } from './hooks/usePageMetadata';
import { getPageSeoByPath } from './lib/pageSeo';
import SubServicesPage from './pages/SubServicesPage';
import SubPagesPortalPage from './pages/SubPagesPortalPage';
import {
  AboutPage,
  EnhancedAboutPageComponent,
  BlogPage,
  BlogDetailPage,
  EnhancedBlogDetailPage,
  ContactPage,
  ContactBriefPage,
  DetailPage,
  HomePage,
  ProjectDetailPage,
  EnhancedProjectDetailPage,
  ProjectsPage,
  ServicesPage,
  ServiceDetailEnhancedPage,
  TestimonialsPage,
  CaseStudiesPage,
  StatsDashboardPage,
  GalleryPage,
  BlogCategoryPage,
  PricingPage,
  FAQPage,
  TeamPage,
  ProcessPage,
  CareersPage,
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
  const { lang, localizePath } = useLanguage();

  usePageMetadata(getPageSeoByPath('/404', lang));

  return (
    <section className="section-shell py-28">
      <div className="surface-card mx-auto max-w-3xl rounded-[1.6rem] p-6 text-center md:rounded-[2rem] md:p-10">
        <p className="section-kicker mx-auto">404</p>
        <h1 className="mt-5 font-display text-[2rem] font-semibold text-foreground md:text-4xl">
          {lang === 'ar' ? 'الصفحة غير موجودة' : 'Page not found'}
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-400">
          {lang === 'ar'
            ? 'الرابط الذي فتحته لا يحتوي على مشروع متاح حاليًا. يمكنك العودة إلى الرئيسية أو استعراض كل المشاريع من صفحة الأعمال.'
            : 'The link you opened does not contain an available project. You can return to the homepage or explore all projects from the work page.'}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link className="btn-primary" to={localizePath('/')}>
            {lang === 'ar' ? 'العودة للرئيسية' : 'Back to home'}
          </Link>
          <Link className="btn-secondary" to={localizePath('/projects')}>
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
          <Route path="home/:slug" element={<DetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/company" element={<EnhancedAboutPageComponent />} />
          <Route path="about/:slug" element={<DetailPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailEnhancedPage />} />
          <Route path="sub-services" element={<SubServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="projects/enhanced/:slug" element={<EnhancedProjectDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/category/:slug" element={<BlogCategoryPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="blog/enhanced/:slug" element={<EnhancedBlogDetailPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="testimonials/:slug" element={<DetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact/brief" element={<ContactBriefPage />} />
          <Route path="contact/:slug" element={<DetailPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="stats" element={<StatsDashboardPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="sub-pages-portal" element={<SubPagesPortalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="en" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home/:slug" element={<DetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/company" element={<EnhancedAboutPageComponent />} />
          <Route path="about/:slug" element={<DetailPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailEnhancedPage />} />
          <Route path="sub-services" element={<SubServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="projects/enhanced/:slug" element={<EnhancedProjectDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/category/:slug" element={<BlogCategoryPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="blog/enhanced/:slug" element={<EnhancedBlogDetailPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="testimonials/:slug" element={<DetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact/brief" element={<ContactBriefPage />} />
          <Route path="contact/:slug" element={<DetailPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="stats" element={<StatsDashboardPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="sub-pages-portal" element={<SubPagesPortalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
