import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnhancedAboutPage } from '../components/EnhancedAboutPage';
import { EnhancedTestimonials } from '../components/EnhancedTestimonials';
import { enhancedAboutPageData, enhancedTestimonialsData, enhancedStatsDashboardData } from '../data/enhancedPagesSections';
import { EnhancedStatsDashboard } from '../components/EnhancedStatsDashboard';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

const EnhancedAboutPageComponent = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';

  usePageMetadata(getPageSeoByPath('/about', lang));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Main About Section */}
      <EnhancedAboutPage {...enhancedAboutPageData} />

      {/* Stats Section */}
      <section className="section-shell py-20 md:py-28">
        <EnhancedStatsDashboard 
          {...enhancedStatsDashboardData}
          displayMode="detailed"
        />
      </section>

      {/* Client Testimonials */}
      <section className="section-shell py-20 md:py-28">
        <EnhancedTestimonials 
          {...enhancedTestimonialsData}
          displayMode="featured"
        />
      </section>

      {/* Services Highlight */}
      <section className="section-shell py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? 'خدماتنا' : 'Our Services'}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {isArabic
                ? 'حلول رقمية توضح شركتك وتسهّل قرار التواصل على زوارها'
                : 'Digital solutions that clarify your company and make contact easier for visitors'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: { ar: 'تطوير الويب', en: 'Web Development' },
                desc: { ar: 'مواقع وتطبيقات ويب حديثة وسريعة', en: 'Modern and fast websites and web applications' },
              },
              {
                title: { ar: 'التصميم', en: 'Design' },
                desc: { ar: 'تصميم واجهات مستخدم احترافية وجميلة', en: 'Professional and beautiful UI/UX design' },
              },
              {
                title: { ar: 'التسويق الرقمي', en: 'Digital Marketing' },
                desc: { ar: 'استراتيجيات تسويقية فعّالة ومقاسة', en: 'Effective and measurable marketing strategies' },
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="surface-card rounded-xl p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-4">{service.title[lang as keyof typeof service.title]}</h3>
                <p className="text-slate-400">{service.desc[lang as keyof typeof service.desc]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-shell py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="surface-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isArabic ? 'هل تحتاج شركتك إلى خطوة رقمية أوضح؟' : 'Does your company need a clearer digital step?'}
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'ناقش احتياج شركتك وحدد المسار المناسب قبل التصميم أو التنفيذ.'
              : 'Discuss your company need and define the right track before design or build.'}
          </p>
          <Link className="btn-primary" to={localizePath('/contact')}>
            {isArabic ? 'ناقش احتياج شركتك' : 'Discuss your company need'}
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default EnhancedAboutPageComponent;
