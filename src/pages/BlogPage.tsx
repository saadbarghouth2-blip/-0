import { motion } from 'framer-motion';
import { ArrowUpLeft, Calendar, Clock, Mail, Sparkles, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BlogPostCard from '../components/BlogPostCard';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import {
  blogCategories,
  blogPosts,
  featuredBlogPost,
} from '../data/blog';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { portfolioProfile } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

const blogBenefits = [
  {
    titleAr: 'خطوات عملية',
    titleEn: 'Practical next steps',
    descriptionAr: 'مقالات تساعدك تفهم ما الذي يحتاجه موقعك أو متجرك قبل أن تبدأ التنفيذ.',
    descriptionEn: 'Articles that help you understand what your website or store needs before execution starts.',
  },
  {
    titleAr: 'فهم أوضح لعميلك',
    titleEn: 'Clearer customer view',
    descriptionAr: 'نربط القرار التصميمي بما يتوقعه العميل فعلًا داخل السوق الذي تستهدفه.',
    descriptionEn: 'We connect design decisions to what your customer actually expects in the market you serve.',
  },
  {
    titleAr: 'رسائل تبيع بوضوح',
    titleEn: 'Sharper messaging',
    descriptionAr: 'المحتوى هنا مكتوب ليخدم الثقة والتحويل، لا ليبدو تقنيًا فقط.',
    descriptionEn: 'The content here is written to support trust and conversion, not just sound technical.',
  },
  {
    titleAr: 'تنفيذ مبني على فهم',
    titleEn: 'Execution with context',
    descriptionAr: 'كل مقال يقربك من قرار أوضح يمكن تحويله إلى صفحة أو موقع أو منصة فعلية.',
    descriptionEn: 'Each article moves you toward a clearer decision that can become a real page, website, or platform.',
  },
];

const blogStats = [
  { value: '6', labelAr: 'مقالات أساسية', labelEn: 'Core articles' },
  { value: '4', labelAr: 'مسارات معرفة', labelEn: 'Knowledge tracks' },
  { value: '2', labelAr: 'لغات مدعومة', labelEn: 'Supported languages' },
  { value: '100%', labelAr: 'هوية متسقة', labelEn: 'Consistent identity' },
];

const blogHighlights = [
  {
    ar: 'مقالات تساعدك تكتشف أين تحتاج الصفحة إلى وضوح أكثر قبل أن تصرف على التنفيذ.',
    en: 'Articles that help you spot where a page needs more clarity before you spend on execution.',
  },
  {
    ar: 'ربط مباشر بين شكل الصفحة وبين الثقة والتحويل والنتيجة التجارية.',
    en: 'A direct link between page design, trust, conversion, and business results.',
  },
  {
    ar: 'قراءة بالعربية والإنجليزية بنفس الجودة إذا كان القرار يُراجع بين أكثر من طرف.',
    en: 'A balanced Arabic and English reading experience when more than one stakeholder is reviewing the project.',
  },
  {
    ar: 'صفحات مقالات حقيقية وروابط تعمل حتى تكون التجربة كاملة وليست مجرد معاينة.',
    en: 'Real article pages and working links so the experience feels complete, not like a preview.',
  },
];

const BlogPage = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  const featuredPost = featuredBlogPost;
  const featuredTags = isArabic ? featuredPost.tagsAr : featuredPost.tagsEn;
  const featuredDateLabel = new Date(featuredPost.publishedAt).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US');
  const activeCategory = blogCategories.find((category) => category.key === selectedCategory);
  const activeCategoryLabel = text(activeCategory?.labelAr ?? 'الكل', activeCategory?.labelEn ?? 'All');
  const gridPosts = blogPosts.filter(
    (post) =>
      post.slug !== featuredPost.slug &&
      (selectedCategory === 'all' || post.categoryEn === selectedCategory),
  );

  usePageMetadata(getPageSeoByPath('/blog', lang));

  return (
    <section className="section-shell pb-20 pt-14 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="section-kicker">
            <span className={`${isArabic ? 'ml-2' : 'mr-2'} inline-block h-3.5 w-3.5 rounded-full bg-primary`}></span>
            {text('محتوى يساعدك تقرر', 'Content that helps you decide')}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
            {text('مقالات تساعدك تفهم مشروعك قبل ما تبدأ التنفيذ', 'Articles that help you understand your project before execution begins')}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            {text(
              'إذا كنت تجهز موقعًا أو متجرًا أو صفحة خدمة، فهذه المقالات تساعدك ترى الصورة بوضوح: ماذا يحتاج العميل، أين تتكون الثقة، وكيف يتحول التصميم من شكل جميل إلى نتيجة فعلية.',
              'If you are preparing a website, store, or service page, these articles help you see the full picture: what customers need, where trust is built, and how design turns from something attractive into something effective.',
            )}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blogBenefits.map((item) => (
              <div key={item.titleEn} className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="font-medium text-white">{text(item.titleAr, item.titleEn)}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{text(item.descriptionAr, item.descriptionEn)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card rounded-[2.6rem] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {text('اختيار التحرير', "Editor's pick")}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  {text(featuredPost.categoryAr, featuredPost.categoryEn)}
                </span>
              </div>

              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
                {text(featuredPost.titleAr, featuredPost.titleEn)}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {text(featuredPost.excerptAr, featuredPost.excerptEn)}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {text(featuredPost.authorAr, featuredPost.authorEn)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {featuredDateLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {text(featuredPost.readTimeAr, featuredPost.readTimeEn)}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link className="btn-primary inline-flex items-center gap-2" to={`/blog/${featuredPost.slug}`}>
                  {text('اقرأ المقال كاملًا', 'Read the full article')}
                  <ArrowUpLeft className={`h-4 w-4 ${isArabic ? '' : '-scale-x-100'}`} />
                </Link>
                <Link className="btn-secondary" to="/contact">
                  {text('خلّينا نطبّقها على مشروعك', 'Bring this clarity to your project')}
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={featuredPost.coverImage}
                alt={text(featuredPost.titleAr, featuredPost.titleEn)}
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-[#06090f]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="section-kicker inline-flex border-cyan-400/30 bg-cyan-400/10 text-cyan-100">
                  <Sparkles className={`${isArabic ? 'ml-2' : 'mr-2'} h-3.5 w-3.5`} />
                  {text('مقال محوري في هذا المسار', 'A defining read in this track')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-4">
          {blogStats.map((item) => (
            <div key={item.labelEn} className="surface-card rounded-[1.8rem] p-6 text-center">
              <p className="font-display text-3xl font-semibold text-cyan-300">{item.value}</p>
              <p className="mt-2 text-sm text-slate-400">{text(item.labelAr, item.labelEn)}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 surface-card rounded-[2rem] bg-slate-950/90 p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-kicker">{text('لماذا قد يهمك هذا القسم؟', 'Why this matters for your project')}</p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white">
                {text(
                  'محتوى يساعدك تقيّم الفكرة قبل أن تستثمر في التنفيذ',
                  'Content that helps you evaluate the idea before you invest in execution',
                )}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">
                {text(
                  'بدل الكلام النظري، ستجد هنا طريقة تفكير تساعدك تقرأ الصفحة بعين العميل: ما الذي يفهمه بسرعة، ما الذي يطمئنه، وما الذي يدفعه لاتخاذ خطوة.',
                  'Instead of abstract advice, this section gives you a way to read pages through the customer\'s eyes: what they understand quickly, what builds reassurance, and what moves them to act.',
                )}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {blogHighlights.map((item) => (
                <div key={item.en} className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-sm leading-7 text-slate-300">{text(item.ar, item.en)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageImageShowcaseSection showcase={pageImageShowcases.blog} />

      <div className="mx-auto mt-4 max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {blogCategories.map((category) => {
            const isActive = selectedCategory === category.key;

            return (
              <button
                key={category.key}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200'
                    : 'border-slate-600 text-slate-300 hover:border-primary hover:text-primary'
                }`}
                onClick={() => setSelectedCategory(category.key)}
                type="button"
              >
                {text(category.labelAr, category.labelEn)}
              </button>
            );
          })}
        </div>

        {gridPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="surface-card rounded-[2.2rem] p-8 text-center">
            <p className="section-kicker mx-auto">{text('لا توجد نتائج في الشبكة', 'No grid results')}</p>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">
              {text(
                `المقال الموجود في هذا التصنيف هو المقال المميز بالأعلى: ${activeCategoryLabel}`,
                `The featured article above is currently the main item in ${activeCategoryLabel}.`,
              )}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              {text(
                'يمكنك فتح المقال المميز مباشرة أو العودة لكل التصنيفات لعرض بقية المقالات.',
                'You can open the featured article directly, or switch back to all categories to browse the rest of the journal.',
              )}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link className="btn-primary" to={`/blog/${featuredPost.slug}`}>
                {text('فتح المقال المميز', 'Open featured article')}
              </Link>
              <button className="btn-secondary" onClick={() => setSelectedCategory('all')} type="button">
                {text('عرض كل المقالات', 'Show all articles')}
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 rounded-[2.4rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/[0.03] to-violet-500/10 p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="section-kicker">{text('إذا كان هذا قريبًا من مشروعك', 'If this sounds like your project')}</p>
              <h3 className="mt-5 font-display text-3xl font-semibold text-white">
                {text(
                  'نقدر نحوّل ما قرأته هنا إلى صفحة أو موقع يخاطب عميلك بوضوح',
                  'We can turn what you read here into a page or website that speaks clearly to your customer',
                )}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {text(
                  'سواء كنت تبدأ من الصفر أو تعيد صياغة موقع موجود، نساعدك في بناء تجربة أوضح في الرسالة، أقوى في الثقة، وأفضل في التحويل.',
                  'Whether you are starting from zero or improving an existing site, we can help you build a clearer message, stronger trust, and better conversion.',
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link className="btn-primary justify-center" to="/contact">
                {text('ابدأ النقاش', 'Start the conversation')}
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
    </section>
  );
};

export default BlogPage;
