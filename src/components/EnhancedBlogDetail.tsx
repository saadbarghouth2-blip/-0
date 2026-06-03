import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  MessageSquare,
  Lightbulb,
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { localizedText } from '../lib/repairText';

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'highlight' | 'image';
  title?: { ar: string; en: string };
  content?: { ar: string; en: string };
  items?: { ar: string; en: string }[];
  image?: string;
  caption?: { ar: string; en: string };
}

interface Insight {
  label: { ar: string; en: string };
  icon: typeof Lightbulb;
  content: { ar: string; en: string };
}

export interface EnhancedBlogDetailProps {
  title: { ar: string; en: string };
  excerpt: { ar: string; en: string };
  author: { ar: string; en: string };
  publishDate: string;
  readTime: string;
  category: { ar: string; en: string };
  coverImage: string;
  content: ContentBlock[];
  keyInsights: Insight[];
  relatedArticles?: Array<{
    slug: string;
    title: { ar: string; en: string };
    excerpt: { ar: string; en: string };
    image: string;
  }>;
  tags: string[];
  accent: string;
}

export const EnhancedBlogDetail: React.FC<EnhancedBlogDetailProps> = ({
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  category,
  coverImage,
  content,
  keyInsights,
  relatedArticles,
  tags,
  accent,
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const text = (value: { ar: string; en: string }) => localizedText(value, lang);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <div className={`absolute right-[-15%] top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br ${accent} opacity-10 blur-[150px] animate-pulse`} />
        <div className={`absolute bottom-[20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr ${accent} opacity-5 blur-[140px] animate-pulse`} />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="section-kicker mb-4 inline-block">{text(category)}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {text(title)}
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">{text(excerpt)}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-400 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{text(author)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <img
            src={coverImage}
            alt={text(title)}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none mb-16"
        >
          {content.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="mb-8"
            >
              {block.type === 'paragraph' && (
                <p className="text-slate-400 leading-relaxed text-lg">{text(block.content!)}</p>
              )}

              {block.type === 'heading' && (
                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{text(block.title!)}</h2>
              )}

              {block.type === 'list' && (
                <ul className="space-y-4">
                  {block.items?.map((item, j) => (
                    <li key={j} className="flex gap-4 text-slate-400">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accent} mt-2 flex-shrink-0`} />
                      <span>{text(item)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {block.type === 'quote' && (
                <blockquote className={`border-l-4 border-gradient-to-b ${accent} pl-6 py-4 my-8`}>
                  <p className="text-xl italic text-slate-300">{text(block.content!)}</p>
                </blockquote>
              )}

              {block.type === 'highlight' && (
                <div className={`surface-card rounded-lg p-6 border-l-4 border-gradient-to-b ${accent} bg-gradient-to-r from-slate-900/50 to-transparent`}>
                  <p className="text-slate-300">{text(block.content!)}</p>
                </div>
              )}

              {block.type === 'image' && (
                <div className="my-12">
                  <img
                    src={block.image}
                    alt={block.caption ? text(block.caption) : 'Content image'}
                    className="w-full rounded-lg shadow-lg mb-3"
                  />
                  {block.caption && (
                    <p className="text-sm text-slate-500 text-center">{text(block.caption)}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Key Insights */}
        {keyInsights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8">{isArabic ? 'الأفكار الرئيسية' : 'Key Insights'}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyInsights.map((insight, i) => {
                const IconComponent = insight.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="surface-card rounded-lg p-6 border border-slate-800"
                  >
                    <div className="flex items-start gap-4">
                      <IconComponent className={`text-cyan-400 flex-shrink-0 mt-1`} size={20} />
                      <div>
                        <h3 className="font-semibold mb-2">{text(insight.label)}</h3>
                        <p className="text-slate-400 text-sm">{text(insight.content)}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-slate-900/50 text-slate-400 text-sm border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Share & Save */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-t border-b border-slate-800 py-6 flex justify-between items-center mb-16"
        >
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setShared(!shared)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-900/50 transition-colors"
            >
              <Share2 size={18} />
              <span>{isArabic ? 'شارك' : 'Share'}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setSaved(!saved)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-900/50 transition-colors"
            >
              <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} />
              <span>{isArabic ? 'حفظ' : 'Save'}</span>
            </motion.button>
          </div>
          <span className="flex items-center gap-2 text-slate-500 text-sm">
            <MessageSquare size={16} />
            <span>{isArabic ? 'المناقشات' : 'Discuss'}</span>
          </span>
        </motion.div>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8">{isArabic ? 'مقالات ذات صلة' : 'Related Articles'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  href={`/blog/${article.slug}`}
                  className="group surface-card rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={article.image}
                      alt={text(article.title)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {text(article.title)}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{text(article.excerpt)}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};
