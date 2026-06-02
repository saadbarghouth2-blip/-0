import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';

interface MobileSectionPagerProps<T> {
  items: T[];
  desktop: ReactNode;
  renderPage: (pageItems: T[], pageIndex: number) => ReactNode;
  pageSize?: number;
  className?: string;
  label?: string;
  autoPlayIntervalMs?: number;
}

const chunkItems = <T,>(items: T[], pageSize: number) => {
  const size = Math.max(1, pageSize);
  const pages: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }

  return pages;
};

const MobileSectionPager = <T,>({
  items,
  desktop,
  renderPage,
  pageSize = 1,
  className,
  label,
  autoPlayIntervalMs,
}: MobileSectionPagerProps<T>) => {
  const isMobile = useIsMobile();
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [api, setApi] = useState<CarouselApi>();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => chunkItems(items, pageSize), [items, pageSize]);
  const hasMultiplePages = pages.length > 1;
  const showDots = pages.length > 1 && pages.length <= 6;
  const PrevIcon = isArabic ? ArrowRight : ArrowLeft;
  const NextIcon = isArabic ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (!api) {
      return;
    }

    const syncPage = () => {
      setCurrentPage(api.selectedScrollSnap());
    };

    syncPage();
    api.on('select', syncPage);
    api.on('reInit', syncPage);

    return () => {
      api.off('select', syncPage);
      api.off('reInit', syncPage);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !autoPlayIntervalMs || !hasMultiplePages || !isMobile) {
      return;
    }

    const autoplay = window.setInterval(() => {
      api.scrollNext();
    }, autoPlayIntervalMs);

    return () => {
      window.clearInterval(autoplay);
    };
  }, [api, autoPlayIntervalMs, hasMultiplePages, isMobile]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(0, true);
  }, [api, lang, pages.length]);

  if (!isMobile) {
    return <>{desktop}</>;
  }

  if (pages.length === 0) {
    return null;
  }

  return (
    <div className={cn('min-w-0 md:hidden', className)}>
      <Carousel
        key={`${label ?? 'mobile-section'}-${lang}`}
        className="overflow-visible"
        dir={isArabic ? 'rtl' : 'ltr'}
        opts={{
          align: 'start',
          loop: hasMultiplePages,
          direction: isArabic ? 'rtl' : 'ltr',
          startIndex: 0,
        }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-0">
          {pages.map((pageItems, pageIndex) => (
            <CarouselItem key={`${label ?? 'mobile-section'}-${pageIndex}`} className="pl-0">
              {renderPage(pageItems, pageIndex)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {hasMultiplePages ? (
        <div className="mt-3 flex items-center justify-between gap-2.5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-2.5 py-2">
          <button
            aria-label={isArabic ? 'الصفحة السابقة' : 'Previous page'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors disabled:cursor-not-allowed disabled:opacity-35"
            disabled={!api}
            onClick={() => api?.scrollPrev()}
            type="button"
          >
            <PrevIcon className="h-4 w-4" />
          </button>

          <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
            {showDots ? (
              <div className="flex items-center justify-center gap-1.5">
                {pages.map((_, pageIndex) => (
                  <button
                    aria-label={`${isArabic ? 'انتقل إلى الصفحة' : 'Go to page'} ${pageIndex + 1}`}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      currentPage === pageIndex ? 'w-5 bg-cyan-300' : 'w-2 bg-white/20',
                    )}
                    key={`dot-${pageIndex}`}
                    onClick={() => api?.scrollTo(pageIndex)}
                    type="button"
                  />
                ))}
              </div>
            ) : null}
          </div>

          <button
            aria-label={isArabic ? 'الصفحة التالية' : 'Next page'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors disabled:cursor-not-allowed disabled:opacity-35"
            disabled={!api}
            onClick={() => api?.scrollNext()}
            type="button"
          >
            <NextIcon className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MobileSectionPager;
