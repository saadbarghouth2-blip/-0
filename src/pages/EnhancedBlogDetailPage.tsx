import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';
import { EnhancedBlogDetail } from '../components/EnhancedBlogDetail';
import { EnhancedTestimonials } from '../components/EnhancedTestimonials';
import { enhancedBlogPostsData, enhancedTestimonialsData } from '../data/enhancedPagesSections';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

const EnhancedBlogDetailPage = () => {
  const { slug } = useParams();
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';

  const post = slug ? enhancedBlogPostsData[slug] : undefined;

  usePageMetadata(post ? {
    title: post.title[lang as keyof typeof post.title],
    description: post.excerpt[lang as keyof typeof post.excerpt],
    lang,
    path: `/blog/${slug}`,
  } : getPageSeoByPath('/404', lang));

  if (!post) {
    return (
      <section className="section-shell py-28">
        <div className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 md:p-10 text-center">
          <p className="section-kicker mx-auto mb-4">404</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {isArabic ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <p className="text-slate-400 mb-8">
            {isArabic
              ? 'المقال الذي تبحث عنه غير موجود. قد تكون الرابطة قديمة أو غير صحيحة.'
              : 'The article you are looking for does not exist. The link may be outdated or incorrect.'}
          </p>
          <Link className="btn-primary" to={localizePath('/blog')}>
            {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
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
            to={localizePath('/blog')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground transition-colors text-sm"
          >
            <ArrowUpLeft size={16} />
            {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>
        </div>
      </div>

      {/* Main Blog Detail */}
      <EnhancedBlogDetail {...post} />

      {/* Client Testimonials */}
      <section className="section-shell py-20 md:py-28">
        <EnhancedTestimonials 
          {...enhancedTestimonialsData}
          displayMode="grid"
        />
      </section>

      {/* CTA Section */}
      <section className="section-shell py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="surface-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isArabic ? 'هل استفدت من هذا المحتوى؟' : 'Found This Helpful?'}
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'تحدث معنا عن احتياجاتك وكيفية مساعدتك على تحقيق أهدافك.'
              : 'Talk to us about your needs and how we can help you achieve your goals.'}
          </p>
          <Link className="btn-primary" to={localizePath('/contact')}>
            {isArabic ? 'ابدأ محادثة' : 'Start Conversation'}
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default EnhancedBlogDetailPage;
