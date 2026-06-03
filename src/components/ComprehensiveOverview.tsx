import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { localizedText } from '../lib/repairText';

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

  const text = (value: { ar: string; en: string }) => localizedText(value, lang);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {isArabic ? 'نظرة عامة شاملة' : 'Comprehensive Overview'}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 mb-16 max-w-2xl"
        >
          {isArabic
            ? 'فهم عميق لكل جوانب الخدمة وما تقدمه'
            : 'Deep understanding of all aspects and what we offer'}
        </motion.p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, i) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="surface-card rounded-2xl p-8 group hover:shadow-2xl transition-all"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                  {text(section.title)}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">{text(section.description)}</p>

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
                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
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
