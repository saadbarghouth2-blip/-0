import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { clientFacingText, localizedText } from '../lib/repairText';

interface OverviewSection {
  icon: typeof Target;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  points: { ar: string; en: string }[];
}

interface ComprehensiveOverviewProps {
  sections: OverviewSection[];
  accent?: string;
}

export const ComprehensiveOverview: React.FC<ComprehensiveOverviewProps> = ({
  sections,
  accent = 'from-cyan-500 to-blue-500',
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const text = (value: { ar: string; en: string }) => clientFacingText(localizedText(value, lang), lang);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-heading-rail mb-4 text-4xl font-bold md:text-5xl"
        >
          {isArabic ? 'نظرة عامة شاملة' : 'Comprehensive Overview'}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 max-w-2xl text-base text-slate-400 md:mb-12 md:text-lg"
        >
          {isArabic
            ? 'فهم عميق لكل جوانب الخدمة وما تقدمه'
            : 'Deep understanding of all aspects and what we offer'}
        </motion.p>

        {/* Main Grid */}
        <div className="mobile-2-cols grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {sections.map((section, i) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -4 }}
                className="surface-card group rounded-2xl p-4 transition-all hover:shadow-2xl sm:p-5"
              >
                {/* Icon */}
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} transition-transform group-hover:scale-105 sm:h-12 sm:w-12`}>
                  <IconComponent className="text-white" size={24} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold transition-all group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent sm:text-xl">
                  {text(section.title)}
                </h3>

                {/* Description */}
                <p className="mb-3 text-sm leading-6 text-slate-400 sm:mb-4">{text(section.description)}</p>

                {/* Points */}
                <div className="space-y-3">
                  {section.points.map((point, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (i * section.points.length + j) * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2 className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-slate-300">{text(point)}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-xs text-slate-500 font-semibold">{i + 1} / {sections.length}</span>
                  <ArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
