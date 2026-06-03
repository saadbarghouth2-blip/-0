import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { localizedText } from '../lib/repairText';

interface FAQItem {
  id: string;
  category?: string;
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
  relatedTopics?: { ar: string; en: string }[];
  icon?: typeof HelpCircle;
  helpful?: { yes: number; no: number };
}

interface EnhancedFAQProps {
  items: FAQItem[];
  title?: { ar: string; en: string };
  subtitle?: { ar: string; en: string };
  accent?: string;
}

export const EnhancedFAQ: React.FC<EnhancedFAQProps> = ({
  items,
  title,
  subtitle,
  accent = 'from-cyan-500 to-blue-500',
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, 'yes' | 'no' | null>>({});

  const text = (value: { ar: string; en: string }) => localizedText(value, lang);

  const categories = Array.from(new Set(items.map((item) => item.category).filter(Boolean))) as string[];
  const filteredItems = selectedCategory ? items.filter((item) => item.category === selectedCategory) : items;

  const handleHelpful = (id: string, vote: 'yes' | 'no') => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: prev[id] === vote ? null : vote,
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-20 md:py-28 relative"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <div className={`absolute right-[-15%] top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br ${accent} opacity-5 blur-[150px]`} />
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            {title && <h2 className="text-4xl md:text-5xl font-bold mb-4">{text(title)}</h2>}
            {subtitle && <p className="text-lg text-slate-400">{text(subtitle)}</p>}
          </motion.div>
        )}

        {/* Categories Filter */}
        {categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
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
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
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

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item, i) => {
            const IconComponent = item.icon || HelpCircle;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-slate-800 overflow-hidden"
              >
                {/* Question */}
                <motion.div
                  className="w-full p-6 text-left bg-slate-900/30 hover:bg-slate-900/50 transition-colors flex items-start justify-between gap-4 group"
                  whileHover={{ backgroundColor: 'rgb(15, 23, 42)' }}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <IconComponent className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <h3 className="font-bold text-lg group-hover:text-cyan-400 transition-colors">
                      {text(item.question)}
                    </h3>
                  </div>
                </motion.div>

                {/* Answer */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-900/20"
                >
                  <div className="p-6 pt-0 border-t border-slate-800">
                        <p className="text-slate-300 leading-relaxed mb-6">{text(item.answer)}</p>

                        {/* Related Topics */}
                        {item.relatedTopics && item.relatedTopics.length > 0 && (
                          <div className="mb-6 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                            <p className="text-xs font-semibold text-slate-400 mb-3">
                              {isArabic ? 'مواضيع ذات صلة' : 'Related Topics'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.relatedTopics.map((topic, j) => (
                                <span
                                  key={j}
                                  className="px-3 py-1 rounded-full bg-slate-800/50 text-xs text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all cursor-pointer"
                                >
                                  {text(topic)}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Helpful */}
                        <div className="flex items-center gap-4 border-t border-slate-800 pt-4">
                          <span className="text-xs text-slate-500">{isArabic ? 'هل ساعدك هذا؟' : 'Was this helpful?'}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => handleHelpful(item.id, 'yes')}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              helpfulVotes[item.id] === 'yes'
                                ? 'bg-green-500/30 text-green-400'
                                : 'bg-slate-900/50 text-slate-400 hover:bg-green-500/10'
                            }`}
                          >
                            {isArabic ? '👍 نعم' : '👍 Yes'}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => handleHelpful(item.id, 'no')}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              helpfulVotes[item.id] === 'no'
                                ? 'bg-red-500/30 text-red-400'
                                : 'bg-slate-900/50 text-slate-400 hover:bg-red-500/10'
                            }`}
                          >
                            {isArabic ? '👎 لا' : '👎 No'}
                          </motion.button>
                        </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <AlertCircle className="mx-auto mb-4 text-slate-500" size={32} />
            <p className="text-slate-400">{isArabic ? 'لا توجد أسئلة في هذه الفئة' : 'No questions in this category'}</p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 rounded-lg bg-gradient-to-r from-slate-900/50 to-slate-900/30 border border-slate-800 text-center"
        >
          <MessageSquare className="mx-auto mb-4 text-cyan-400" size={28} />
          <h3 className="text-xl font-bold mb-2">{isArabic ? 'لم تجد إجابتك؟' : "Didn't find your answer?"}</h3>
          <p className="text-slate-400 mb-4">
            {isArabic ? 'تواصل معنا مباشرة للحصول على دعم فوري' : 'Contact us directly for immediate support'}
          </p>
          <button className={`px-6 py-2 rounded-lg bg-gradient-to-r ${accent} text-white font-medium hover:shadow-lg transition-shadow`}>
            {isArabic ? 'تواصل الآن' : 'Contact Us'}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
