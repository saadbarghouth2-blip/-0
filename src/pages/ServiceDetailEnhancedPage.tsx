import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowUpLeft, ArrowLeft } from 'lucide-react';

import DetailPageEnhanced from '../components/DetailPageEnhanced';
import { enhancedServicePages } from '../data/enhancedServices';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

const ServiceDetailEnhancedPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, localizePath } = useLanguage();
  const navigate = useNavigate();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => clientFacingText(isArabic ? arabic : english, lang);

  const service = slug && enhancedServicePages[slug];

  usePageMetadata(getPageSeoByPath(`/services/${slug}`, lang));

  if (!service) {
    return (
      <section className="section-shell py-24">
        <div className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 text-center">
          <p className="section-kicker">404</p>
          <h1 className="mt-5 font-display text-3xl font-bold text-white">
            {text('الخدمة غير موجودة', 'Service not found')}
          </h1>
          <p className="mt-4 text-slate-300">
            {text('الخدمة التي تبحث عنها لا توجد. عد إلى الخدمات.', 'The service you\'re looking for doesn\'t exist. Go back to services.')}
          </p>
          <Link className="btn-primary mt-7 inline-flex items-center gap-2" to={localizePath('/services')}>
            <ArrowLeft className="w-4 h-4" />
            {text('الخدمات', 'Services')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Breadcrumb */}
      <div className="border-b border-white/10 sticky top-[60px] md:top-[88px] z-40 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <Link
            to={localizePath('/services')}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            {text('الخدمات', 'Services')}
          </Link>
          <span className="text-slate-500">/</span>
          <span className="text-cyan-300 font-medium">{service.eyebrow.ar.split(' ')[0]}</span>
        </div>
      </div>

      {/* Main Detail Page */}
      <DetailPageEnhanced page={service} />

      {/* Gallery - if we add images later */}
      {/* <section className="relative overflow-hidden py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DetailedGallery
              title={isArabic ? 'أعمالنا' : 'Our Work'}
              items={galleryItems}
              isArabic={isArabic}
            />
          </motion.div>
        </div>
      </section> */}

      {/* Related Services or CTA */}
      <section className="relative overflow-hidden py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                {text('هل تحتاج مساراً واضحاً لهذه الخدمة؟', 'Need a clear path for this service?')}
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                {text(
                  'تحدث مع نُطق عن احتياج الشركة، وستقترح نُطق نطاقاً عملياً يساعد على اتخاذ قرار أوضح.',
                  'Talk to Notaq about the company need, and Notaq will suggest a practical scope that supports a clearer decision.',
                )}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(localizePath('/contact'))}
                className="btn-primary inline-flex items-center gap-2"
              >
                {text('تواصل مع نُطق', 'Contact Notaq')}
                <ArrowUpLeft className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services Preview */}
      <section className="relative overflow-hidden py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-10">
              {text('الخدمات الأخرى', 'Other Services')}
            </h2>

            <div className="grid gap-6">
              {Object.entries(enhancedServicePages)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, otherService], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 hover:border-cyan-500/30 transition-colors cursor-pointer"
                    onClick={() => navigate(localizePath(`/services/${key}`))}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-transparent" />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-cyan-300 text-sm font-bold uppercase tracking-[0.15em]">
                          {otherService.eyebrow.ar}
                        </p>
                        <h3 className="font-display text-2xl font-bold text-white mt-3 mb-2">
                          {otherService.title.ar}
                        </h3>
                        <p className="text-slate-300">{otherService.summary.ar}</p>
                      </div>
                      <ArrowUpLeft className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </motion.div>
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 text-center"
            >
              <Link
                to={localizePath('/services')}
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
              >
                {isArabic ? 'جميع الخدمات' : 'View all services'}
                <ArrowUpLeft className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default ServiceDetailEnhancedPage;
