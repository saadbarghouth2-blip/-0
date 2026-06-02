import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpLeft, Calendar, Clock, Mail, Sparkles, User, Flame, BookOpen, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BlogPostCard from '../components/BlogPostCard';
import EditorialImageBreak from '../components/EditorialImageBreak';
import PageHero from '../components/PageHero';
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

const blogStats = [
  { value: '6', labelAr: 'مقالات مرجعية', labelEn: 'Reference articles' },
  { value: '4', labelAr: 'مسارات معرفة', labelEn: 'Knowledge tracks' },
  { value: '2', labelAr: 'لغات مدعومة', labelEn: 'Supported languages' },
];

const trendingTopics = [
  { tagAr: 'تجربة المستخدم UX', tagEn: 'UX Design', readsAr: '٢.٥ ألف قراءة', readsEn: '2.5K reads', trend: 95 },
  { tagAr: 'زيادة التحويلات CRO', tagEn: 'Conversion Rates', readsAr: '١.٩ ألف قراءة', readsEn: '1.9K reads', trend: 88 },
  { tagAr: 'هندسة فرونت إند', tagEn: 'React Performance', readsAr: '١.٢ ألف قراءة', readsEn: '1.2K reads', trend: 74 },
];

const BlogPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  const featuredPost = featuredBlogPost;
  const featuredTags = isArabic ? featuredPost.tagsAr : featuredPost.tagsEn;
  const featuredDateLabel = new Date(featuredPost.publishedAt).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US');
  
  const gridPosts = blogPosts.filter(
    (post) =>
      post.slug !== featuredPost.slug &&
      (selectedCategory === 'all' || post.categoryEn === selectedCategory),
  );

  usePageMetadata(getPageSeoByPath('/blog', lang));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const activeCategory = blogCategories.find(c => c.key === selectedCategory);
  const activeCategoryLabel = activeCategory ? text(activeCategory.labelAr, activeCategory.labelEn) : selectedCategory;

  return (
    <section className="section-shell pb-12 md:pb-20 pt-10 md:pt-14 lg:pt-20">
      <PageHero
        description={text(
          'أفكار وحقائق تقنية تساعد شركتك على اتخاذ قرارات واثقة في التصميم، تنظيم المحتوى، وسرعة الأداء البرمجي قبل الاستثمار في خطط التنفيذ الكبرى.',
          'Technical insights helping your company make confident design, performance, and structure decisions before investing heavily in software plans.'
        )}
        kicker={text('مجلة نطق المعرفية', 'Notaq Knowledge Base')}
        metrics={blogStats.map((item) => ({
          value: item.value,
          label: text(item.labelAr, item.labelEn),
        }))}
        primaryAction={{ label: text('اقرأ المقال الأحدث', 'Read latest article'), to: localizePath(`/blog/${featuredPost.slug}`) }}
        profileId="blog"
        secondaryAction={{ label: text('استشارة سريعة', 'Quick consultation'), to: localizePath('/contact') }}
        title={text('مقالات ورؤى هندسية لبناء حضور رقمي فعال لمشروعك', 'Engineering insights to build a highly effective digital product')}
      />

<div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Magazine Feature Section: Split Layout (Featured Post Left, Trending Topics Right) */}
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-16 items-start">
          
          {/* Main Featured Editorial Card */}
          <div className="surface-card rounded-xl md:rounded-[2.2rem] p-4 md:p-8 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-4 md:gap-8 items-center">
              
              {/* Featured Cover Image */}
              <div className="relative rounded-lg md:rounded-2xl overflow-hidden aspect-[5/4] md:aspect-[4/3] border border-white/10 shadow-xl group">
                <img
                  src={featuredPost.coverImage}
                  alt={text(featuredPost.titleAr, featuredPost.titleEn)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4 bg-cyan-400 text-black text-[10px] font-bold uppercase px-3 py-1.5 rounded-full">
                  {text("مقال مميز", "Featured")}
                </div>
              </div>

              {/* Featured Meta & Copy */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2.5 items-center text-xs text-slate-400">
                  <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {text(featuredPost.categoryAr, featuredPost.categoryEn)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    {text(featuredPost.readTimeAr, featuredPost.readTimeEn)}
                  </span>
                </div>

                <h2 className="font-display text-xl md:text-2xl font-bold text-white hover:text-cyan-300 transition-colors">
                  <Link to={localizePath(`/blog/${featuredPost.slug}`)}>
                    {text(featuredPost.titleAr, featuredPost.titleEn)}
                  </Link>
                </h2>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {text(featuredPost.excerptAr, featuredPost.excerptEn)}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 text-xs text-slate-400 border-t border-white/5 pt-4">
                  <div className="h-8 w-8 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-bold">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{text(featuredPost.authorAr, featuredPost.authorEn)}</p>
                    <p className="text-[10px] text-slate-500">{featuredDateLabel}</p>
                  </div>
                </div>

                <div className="pt-3">
                  <Link className="btn-primary inline-flex items-center gap-2 text-xs" to={localizePath(`/blog/${featuredPost.slug}`)}>
                    {text('قراءة المقال كاملاً', 'Read full article')}
                    <ArrowUpLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Trending Topics Sidebar Widget */}
          <div className="rounded-xl md:rounded-[2.2rem] border border-white/10 bg-white/[0.02] p-4 md:p-6 backdrop-blur-md space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 border-b border-white/5 pb-4">
              <Flame className="h-5 w-5 text-amber-400" />
              <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                {text('الأكثر قراءة وتداولاً', 'Trending Discussions')}
              </h3>
            </div>

            <div className="space-y-4">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="group flex items-center justify-between p-3 rounded-xl border border-white/5 bg-[#06090f]/30 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-base font-black text-slate-600 group-hover:text-cyan-400 transition-colors">0{index + 1}</span>
                    <div>
                      <p className="text-xs font-bold text-white">{text(topic.tagAr, topic.tagEn)}</p>
                      <p className="text-[10px] text-slate-500 mt-1">{text(topic.readsAr, topic.readsEn)}</p>
                    </div>
                  </div>
                  {/* Miniature Trend Line SVG */}
                  <svg className="w-10 h-6 shrink-0 stroke-cyan-400 fill-none stroke-2">
                    <path d={`M 0 ${20 - (topic.trend / 10)} Q 20 ${10 - (topic.trend / 10)} 40 ${30 - (topic.trend / 5)}`} />
                  </svg>
                </div>
              ))}
            </div>

            {/* Quick knowledge guide card */}
            <div className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-cyan-400/20 p-4 rounded-2xl text-center">
              <BookOpen className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
              <h4 className="text-xs font-bold text-white mb-1">{text('دليل التحول الرقمي الموثق', 'Bilingual Tech Guides')}</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed mb-3">
                {text('كل مقال مصاغ لمساعدة أصحاب القرار في قياس الجدوى قبل الأكواد.', 'Every guide helps stakeholders assess feasibility before writing code.')}
              </p>
            </div>
          </div>
        </div>

        <EditorialImageBreak imageId="presentation-hall" variant="wide" />
        <PageImageShowcaseSection showcase={pageImageShowcases.blog} />

        {/* Categories Tabs Selector */}
        <div className="my-6 md:my-10 flex flex-wrap gap-2 md:gap-2.5 justify-center md:justify-start">
          {blogCategories.map((category) => {
            const isActive = selectedCategory === category.key;
            return (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`rounded-full border px-4 py-2 text-xs md:text-sm font-semibold transition-all ${
                  isActive
                    ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300 font-bold'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/50 hover:text-white'
                }`}
                type="button"
              >
                {text(category.labelAr, category.labelEn)}
              </button>
            );
          })}
        </div>

        {/* Blog Post List (Magazine Grid Card Layout) */}
        {gridPosts.length > 0 ? (
          <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-16 md:mb-20">
            {gridPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="surface-card rounded-[1.8rem] p-8 text-center mb-20">
            <h3 className="font-display text-lg font-bold text-white mb-2">
              {text(`لا توجد مقالات فرعية في تصنيف ${activeCategoryLabel}`, `No articles found in ${activeCategoryLabel}`)}
            </h3>
            <p className="text-slate-400 text-xs max-w-lg mx-auto">
              {text('يمكنك فتح المقال المرجعي المتميز في الأعلى أو تصفح كل المقالات.', 'Please switch back to the "All" category to review other reference guides.')}
            </p>
          </div>
        )}

        {/* Newsletter Subscription Box (Interactive Form with Glass Design) */}
        <div className="my-10 md:my-16 rounded-xl md:rounded-[2.2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-950/15 via-white/[0.02] to-violet-950/15 p-5 md:p-10 relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">{text('نشرة نطق الأسبوعية', 'Weekly Notaq Newsletter')}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
                {text('اشترك لتصلك تحليلات الأداء ودراسات الحالة مباشرة', 'Subscribe to receive performance audits & cases')}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
                {text(
                  'انضم لأكثر من ١٠,٠٠٠ رائد أعمال وصاحب قرار يستقبلون مقالات وتوصيات تقنية أسبوعية خالية من الزحمة والحشو الإنشائي.',
                  'Join over 10K founders receiving weekly, verified tech audits and product recommendations with zero fluff.'
                )}
              </p>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {!newsletterSubscribed ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <input 
                      type="email" 
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder={text('بريدك الإلكتروني المهني...', 'Your professional email...')}
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 flex-grow"
                    />
                    <button 
                      type="submit"
                      className="btn-primary py-3 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 text-black hover:scale-[1.02]"
                    >
                      <Send className="h-4 w-4" />
                      {text('اشترك الآن', 'Subscribe')}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-xl flex items-center gap-3 text-cyan-300 text-xs"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{text('تم الاشتراك بنجاح! شكراً لثقتك بنا.', 'Subscribed successfully! Thank you for your trust.')}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogPage;
