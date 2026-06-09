import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';
import { EnhancedProjectDetail } from '../components/EnhancedProjectDetail';
import { EnhancedTestimonials } from '../components/EnhancedTestimonials';
import { EnhancedStatsDashboard } from '../components/EnhancedStatsDashboard';
import { enhancedProjectsData, enhancedTestimonialsData, enhancedStatsDashboardData } from '../data/enhancedPagesSections';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

const EnhancedProjectDetailPage = () => {
  const { slug } = useParams();
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';

  const project = slug ? enhancedProjectsData[slug] : undefined;

  usePageMetadata(project ? {
    title: `${project.projectName[lang as keyof typeof project.projectName]} - ${lang === 'ar' ? 'نُطق' : 'Notaq'}`,
    description: project.challenge[lang as keyof typeof project.challenge],
    lang,
    path: `/projects/${slug}`,
  } : getPageSeoByPath('/404', lang));

  if (!project) {
    return (
      <section className="section-shell py-28">
        <div className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 md:p-10 text-center">
          <p className="section-kicker mx-auto mb-4">404</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {isArabic ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <p className="text-slate-400 mb-8">
            {isArabic 
              ? 'المشروع الذي تبحث عنه غير موجود. قد تكون الرابطة قديمة أو غير صحيحة.'
              : 'The project you are looking for does not exist. The link may be outdated or incorrect.'}
          </p>
          <Link className="btn-primary" to={localizePath('/projects')}>
            {isArabic ? 'العودة إلى المشاريع' : 'Back to Projects'}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Breadcrumb */}
      <div className="section-shell py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to={localizePath('/projects')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground transition-colors text-sm"
          >
            <ArrowUpLeft size={16} />
            {isArabic ? 'العودة إلى المشاريع' : 'Back to Projects'}
          </Link>
        </div>
      </div>

      {/* Main Project Detail */}
      <EnhancedProjectDetail {...project} />

      {/* Testimonials Section */}
      <section className="section-shell py-20 md:py-28">
        <EnhancedTestimonials {...enhancedTestimonialsData} />
      </section>

      {/* Stats Section */}
      <section className="section-shell py-20 md:py-28">
        <EnhancedStatsDashboard {...enhancedStatsDashboardData} />
      </section>

      {/* CTA Section */}
      <section className="section-shell py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="surface-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isArabic ? 'هل تحتاج مشروعاً مماثلاً؟' : 'Need a Similar Project?'}
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'تجربة مشابهة يمكن أن توضح عرض شركتك وتجعل قرار التواصل أسهل لزوارها.'
              : 'A similar experience can clarify your company offer and make the decision to contact easier for visitors.'}
          </p>
          <Link className="btn-primary" to={localizePath('/contact')}>
            {isArabic ? 'ناقش احتياج شركتك' : 'Discuss your company need'}
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default EnhancedProjectDetailPage;
