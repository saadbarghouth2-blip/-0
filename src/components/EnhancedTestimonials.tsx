import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface TestimonialCard {
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  company: { ar: string; en: string };
  testimonial: { ar: string; en: string };
  highlight: { ar: string; en: string };
  image: string;
  rating: number;
  accent: string;
  category?: string;
}

export interface EnhancedTestimonialsProps {
  testimonials: TestimonialCard[];
  title?: { ar: string; en: string };
  subtitle?: { ar: string; en: string };
  displayMode?: 'carousel' | 'grid' | 'featured';
  accent?: string;
}

export const EnhancedTestimonials: React.FC<EnhancedTestimonialsProps> = ({
  testimonials,
  title,
  subtitle,
  displayMode = 'carousel',
  accent = 'from-cyan-500 to-blue-500',
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const text = (value: { ar: string; en: string }) => (isArabic ? value.ar : value.en);

  const filteredTestimonials = selectedCategory
    ? testimonials.filter((t) => t.category === selectedCategory)
    : testimonials;

  const categories = Array.from(new Set(testimonials.map((t) => t.category).filter(Boolean)));

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <div className={`absolute right-[-15%] top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br ${accent} opacity-10 blur-[150px] animate-pulse`} />
        <div className={`absolute bottom-[20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr ${accent} opacity-5 blur-[140px] animate-pulse`} />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {title && <h2 className="text-4xl md:text-5xl font-bold mb-4">{text(title)}</h2>}
            {subtitle && <p className="text-lg text-slate-400 max-w-2xl mx-auto">{text(subtitle)}</p>}
          </motion.div>
        )}

        {/* Category Filter */}
        {categories.length > 0 && displayMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? `bg-gradient-to-r ${accent} text-white`
                  : 'bg-slate-900/50 text-slate-400 hover:text-foreground'
              }`}
            >
              {isArabic ? 'الجميع' : 'All'}
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(cat as string)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? `bg-gradient-to-r ${accent} text-white`
                    : 'bg-slate-900/50 text-slate-400 hover:text-foreground'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Carousel Mode */}
        {displayMode === 'carousel' && filteredTestimonials.length > 0 && (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: isArabic ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isArabic ? 100 : -100 }}
                transition={{ duration: 0.3 }}
                className="surface-card rounded-2xl p-12 md:p-16"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Testimonial Content */}
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="text-cyan-400 mb-4" size={32} />
                    <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                      "{text(filteredTestimonials[currentIndex].testimonial)}"
                    </p>
                    <div className="mb-6 p-4 rounded-lg bg-slate-900/50 border-l-4 border-gradient-to-b from-cyan-500">
                      <p className="text-sm text-slate-300 font-semibold">
                        {text(filteredTestimonials[currentIndex].highlight)}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-lg">{text(filteredTestimonials[currentIndex].name)}</p>
                      <p className="text-slate-400">{text(filteredTestimonials[currentIndex].role)}</p>
                      <p className="text-sm text-cyan-400">{text(filteredTestimonials[currentIndex].company)}</p>
                    </div>
                  </div>

                  {/* Feedback mark */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`hidden min-h-[22rem] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-10 shadow-2xl md:flex`}
                  >
                    <Quote className="h-24 w-24 text-white/85" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={goToPrevious}
                className={`p-3 rounded-full bg-gradient-to-r ${accent} hover:shadow-lg transition-shadow`}
              >
                <ChevronLeft size={24} className="text-white" />
              </motion.button>
              <div className="flex gap-2 items-center">
                {filteredTestimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex ? `bg-gradient-to-r ${accent} w-8` : 'bg-slate-700 w-2'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={goToNext}
                className={`p-3 rounded-full bg-gradient-to-r ${accent} hover:shadow-lg transition-shadow`}
              >
                <ChevronRight size={24} className="text-white" />
              </motion.button>
            </div>
          </div>
        )}

        {/* Grid Mode */}
        {displayMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="surface-card rounded-xl p-8 h-full flex flex-col"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-slate-300 mb-6 flex-grow italic">"{text(testimonial.testimonial)}"</p>

                {/* Highlight */}
                <div className="mb-6 p-3 rounded-lg bg-slate-900/50 border-l-4 border-gradient-to-b from-cyan-500">
                  <p className="text-xs text-slate-400 font-semibold">{text(testimonial.highlight)}</p>
                </div>

                {/* Author */}
                <div className="border-t border-slate-800 pt-4 flex items-start gap-3">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.accent} text-sm font-bold text-white`}>
                    {text(testimonial.name)[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{text(testimonial.name)}</p>
                    <p className="text-xs text-slate-400">{text(testimonial.role)}</p>
                    <p className="text-xs text-cyan-400">{text(testimonial.company)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Featured Mode */}
        {displayMode === 'featured' && (
          <div className="space-y-8">
            {filteredTestimonials.slice(0, 3).map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`surface-card rounded-xl p-8 md:p-12 flex items-start gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    "{text(testimonial.testimonial)}"
                  </p>
                  <div className="mb-6 p-4 rounded-lg bg-slate-900/50 border-l-4 border-gradient-to-b from-cyan-500">
                    <p className="text-sm text-slate-300 font-semibold">{text(testimonial.highlight)}</p>
                  </div>
                  <div>
                    <p className="font-bold">{text(testimonial.name)}</p>
                    <p className="text-slate-400 text-sm">{text(testimonial.role)}</p>
                    <p className="text-cyan-400 text-sm">{text(testimonial.company)}</p>
                  </div>
                </div>
                <div className={`hidden h-48 w-48 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${testimonial.accent} shadow-lg md:flex`}>
                  <Quote className="h-16 w-16 text-white/85" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};
