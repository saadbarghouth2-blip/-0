import { motion } from 'framer-motion';
import { ArrowUpLeft, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { BlogPost } from '../data/blog';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
}

const BlogPostCard = ({ post, variant = 'default' }: BlogPostCardProps) => {
  const { lang, localizePath } = useLanguage();
  const isMobile = useIsMobile();
  const isArabic = lang === 'ar';

  const title = isArabic ? post.titleAr : post.titleEn;
  const excerpt = isArabic ? post.excerptAr : post.excerptEn;
  const author = isArabic ? post.authorAr : post.authorEn;
  const readTime = isArabic ? post.readTimeAr : post.readTimeEn;
  const category = isArabic ? post.categoryAr : post.categoryEn;
  const tags = isArabic ? post.tagsAr : post.tagsEn;
  const dateLabel = new Date(post.publishedAt).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US');
  const postPath = localizePath(`/blog/${post.slug}`);

  const isCompact = variant === 'compact';
  const isCompactMobile = isCompact && isMobile;

  return (
    <motion.article
      whileHover={isMobile ? undefined : { y: -8 }}
      className={`group overflow-hidden rounded-lg md:rounded-[2rem] border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-colors hover:bg-white/[0.05] ${
        isCompact ? 'h-full' : ''
      }`}
    >
      <div
        className={`overflow-hidden ${
          isCompact
            ? isCompactMobile
              ? 'aspect-[1.2/1]'
              : 'aspect-[1.3/1] sm:aspect-[1.45/1]'
            : 'aspect-[4/3] sm:aspect-video'
        }`}
      >
        <img
          src={post.coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className={isCompact ? (isCompactMobile ? 'p-2.5 md:p-3' : 'p-3 md:p-5') : 'p-3 md:p-6'}>
        <div className="mb-2 flex flex-wrap items-center gap-1.5 md:mb-3">
          <span
            className={`rounded-full bg-primary/10 font-medium text-primary ${
              isCompactMobile ? 'px-1.5 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px] md:px-3 md:text-xs'
            }`}
          >
            {category}
          </span>
          <span
            className={`rounded-full border border-white/10 text-slate-400 ${
              isCompactMobile ? 'px-1.5 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px] md:px-3 md:text-xs'
            }`}
          >
            {dateLabel}
          </span>
        </div>

        <h3
          className={`line-clamp-2 font-display font-semibold text-white transition-colors group-hover:text-primary ${
            isCompact ? (isCompactMobile ? 'text-[0.85rem] leading-5' : 'text-[1.02rem] sm:text-xl') : 'text-[1rem] sm:text-2xl'
          }`}
        >
          <Link to={postPath}>{title}</Link>
        </h3>

        <p
          className={`mt-1.5 text-slate-300 ${
            isCompact
              ? isCompactMobile
                ? 'line-clamp-1 text-[11px] leading-4'
                : 'line-clamp-2 text-sm leading-6 sm:leading-7'
              : 'line-clamp-3 text-xs md:text-sm md:leading-6 sm:text-base sm:leading-8'
          }`}
        >
          {excerpt}
        </p>

        {!isCompactMobile ? (
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400 md:mt-3 md:gap-4 md:text-sm">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3 md:h-4 md:w-4" />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 md:h-4 md:w-4" />
              {readTime}
            </span>
          </div>
        ) : null}

        {!isCompactMobile ? (
          <div className="mt-2 flex flex-wrap gap-1 md:mt-3 md:gap-2">
            {tags.slice(0, isCompact ? 2 : isMobile ? 1 : 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/10 px-2 py-0.5 text-[10px] text-slate-300 md:px-3 md:py-1 md:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className={isCompactMobile ? 'mt-2' : 'mt-3 md:mt-4'}>
          <Link
            to={postPath}
            className={`inline-flex items-center gap-1.5 font-medium text-cyan-300 transition-colors hover:text-cyan-200 ${
              isCompactMobile ? 'text-[11px]' : 'text-sm'
            }`}
          >
            {isArabic ? 'اقرأ' : 'Read'}
            <ArrowUpLeft className={`h-3 w-3 transition-transform md:h-4 md:w-4 group-hover:-translate-y-0.5 ${isArabic ? '' : '-scale-x-100'}`} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;
