import { motion } from 'framer-motion';
import { ArrowUpLeft, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { BlogPost } from '../data/blog';
import { useLanguage } from '../hooks/useLanguage';

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
}

const BlogPostCard = ({ post, variant = 'default' }: BlogPostCardProps) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const title = isArabic ? post.titleAr : post.titleEn;
  const excerpt = isArabic ? post.excerptAr : post.excerptEn;
  const author = isArabic ? post.authorAr : post.authorEn;
  const readTime = isArabic ? post.readTimeAr : post.readTimeEn;
  const category = isArabic ? post.categoryAr : post.categoryEn;
  const tags = isArabic ? post.tagsAr : post.tagsEn;
  const dateLabel = new Date(post.publishedAt).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US');

  const isCompact = variant === 'compact';

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={`group overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-colors hover:bg-white/[0.05] ${
        isCompact ? 'h-full' : ''
      }`}
    >
      <div className={`overflow-hidden ${isCompact ? 'aspect-[1.45/1]' : 'aspect-video'}`}>
        <img
          src={post.coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className={isCompact ? 'p-5' : 'p-6'}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {category}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
            {dateLabel}
          </span>
        </div>

        <h3 className={`font-display font-semibold text-white transition-colors group-hover:text-primary ${isCompact ? 'text-xl' : 'text-2xl'}`}>
          <Link to={`/blog/${post.slug}`}>{title}</Link>
        </h3>

        <p className={`mt-3 text-slate-300 ${isCompact ? 'line-clamp-2 text-sm leading-7' : 'line-clamp-3 text-base leading-8'}`}>
          {excerpt}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {author}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {readTime}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, isCompact ? 2 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
          >
            {isArabic ? 'اقرأ المقال' : 'Read article'}
            <ArrowUpLeft className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 ${isArabic ? '' : '-scale-x-100'}`} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;
