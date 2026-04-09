import { motion } from 'framer-motion';
import {
  ArrowUpLeft,
  BadgeCheck,
  Calendar,
  Clock,
  Mail,
  Sparkles,
  User,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import BlogPostCard from '../components/BlogPostCard';
import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from '../data/blog';
import { portfolioProfile } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  const post = getBlogPostBySlug(slug);

  usePageMetadata({
    title: post ? text(post.titleAr, post.titleEn) : text('المقال غير موجود', 'Article not found'),
    description: post
      ? text(post.excerptAr, post.excerptEn)
      : text(
          'المقال الذي تحاول فتحه غير موجود حاليًا داخل المدونة.',
          'The article you are trying to open is not currently available in the journal.',
        ),
    lang,
    path: post ? `/blog/${post.slug}` : '/404',
  });

  if (!post) {
    return (
      <section className="section-shell py-28">
        <div className="surface-card mx-auto max-w-3xl rounded-[2.2rem] p-10 text-center">
          <p className="section-kicker mx-auto">404</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white">
            {text('المقال غير موجود', 'Article not found')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            {text(
              'هذا الرابط لا يشير إلى مقال متاح حاليًا. يمكنك الرجوع إلى صفحة المدونة لاختيار مقال آخر أو التواصل معنا مباشرة.',
              'This link does not point to an available article right now. You can return to the blog hub or contact us directly.',
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" to="/blog">
              {text('العودة للمدونة', 'Back to the blog')}
            </Link>
            <Link className="btn-secondary" to="/contact">
              {text('تواصل معنا', 'Contact us')}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const relatedPosts = getRelatedBlogPosts(post, 3);
  const tags = isArabic ? post.tagsAr : post.tagsEn;
  const sections = post.bodySections.map((section) => ({
    title: text(section.titleAr, section.titleEn),
    paragraphs: isArabic ? section.paragraphsAr : section.paragraphsEn,
  }));
  const takeaways = isArabic ? post.keyTakeawaysAr : post.keyTakeawaysEn;

  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pt-20">
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute left-[-6%] top-12 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-[-8%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="surface-card-strong overflow-hidden rounded-[2.8rem] border border-white/10">
            <div className="grid lg:grid-cols-[0.62fr_0.38fr] lg:items-stretch">
              <div className="p-8 md:p-10 lg:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {text(post.categoryAr, post.categoryEn)}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {text('مقال تفصيلي', 'Long-form article')}
                  </span>
                </div>

                <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                  {text(post.titleAr, post.titleEn)}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  {text(post.excerptAr, post.excerptEn)}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    {text(post.authorAr, post.authorEn)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US')}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {text(post.readTimeAr, post.readTimeEn)}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link className="btn-secondary" to="/blog">
                    {text('العودة للمدونة', 'Back to blog')}
                  </Link>
                  <Link className="btn-primary inline-flex items-center gap-2" to="/contact">
                    {text('ابدأ مشروعك', 'Start your project')}
                    <ArrowUpLeft className={`h-4 w-4 ${isArabic ? '' : '-scale-x-100'}`} />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] border-t border-white/10 lg:border-l lg:border-t-0">
                <img
                  src={post.coverImage}
                  alt={text(post.titleAr, post.titleEn)}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-[#06090f]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="section-kicker inline-flex border-cyan-400/30 bg-cyan-400/10 text-cyan-100">
                    <Sparkles className={`${isArabic ? 'ml-2' : 'mr-2'} h-3.5 w-3.5`} />
                    {text('قراءة تبني رؤية أوضح', 'A read that sharpens the next decision')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-start">
            <div className="space-y-6">
              <div className="surface-card rounded-[2.2rem] p-6 md:p-8">
                <p className="section-kicker">{text('أهم الخلاصات', 'Key takeaways')}</p>
                <div className="mt-6 grid gap-4">
                  {takeaways.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-4"
                    >
                      <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-7 text-slate-300 md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {sections.map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className="surface-card rounded-[2.2rem] p-6 md:p-8"
                >
                  <p className="section-kicker">{text(`القسم ${index + 1}`, `Section ${index + 1}`)}</p>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="surface-card rounded-[2.2rem] p-6">
                <p className="section-kicker">{text('ملخص سريع', 'Quick summary')}</p>
                <div className="mt-5 space-y-4 text-sm text-slate-300">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-slate-400">{text('التصنيف', 'Category')}</p>
                    <p className="mt-2 font-medium text-white">{text(post.categoryAr, post.categoryEn)}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-slate-400">{text('القراءة', 'Reading time')}</p>
                    <p className="mt-2 font-medium text-white">{text(post.readTimeAr, post.readTimeEn)}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-slate-400">{text('الكاتب', 'Author')}</p>
                    <p className="mt-2 font-medium text-white">{text(post.authorAr, post.authorEn)}</p>
                  </div>
                </div>
              </div>

              <div className="surface-card rounded-[2.2rem] p-6">
                <p className="section-kicker">{text('وسوم المقال', 'Article tags')}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-violet-500/10 p-6">
                <p className="section-kicker">{text('مناسبة لمشروعك؟', 'Relevant to your project?')}</p>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                  {text(
                    'إذا كان هذا هو النوع من التحديات الذي تعمل عليه، يمكننا تطبيقه على مشروعك',
                    'If this is the kind of challenge you are working through, we can apply it to your project',
                  )}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {text(
                    'نحوّل الفكرة هنا إلى صفحة خدمة أو موقع أو تجربة رقمية تخاطب عميلك بشكل أوضح وتدعم قرار الشراء.',
                    'We turn ideas like this into service pages, websites, and digital experiences that speak to your customer more clearly and support the buying decision.',
                  )}
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link className="btn-primary justify-center" to="/contact">
                    {text('ابدأ مناقشة المشروع', 'Start the project discussion')}
                  </Link>
                  <a
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                    href={`mailto:${portfolioProfile.email}`}
                  >
                    <Mail className="h-4 w-4" />
                    {text('راسلنا مباشرة', 'Email us directly')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker">{text('مقالات مرتبطة', 'Related reads')}</p>
                <h2 className="mt-5 font-display text-3xl font-semibold text-white">
                  {text('اقرأ أيضًا', 'Continue reading')}
                </h2>
              </div>
              <Link className="btn-secondary hidden md:inline-flex" to="/blog">
                {text('كل المقالات', 'All articles')}
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <BlogPostCard post={relatedPost} variant="compact" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
