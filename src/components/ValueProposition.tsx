import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Zap, Shield, Lightbulb, ArrowUpRight, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { localizedText } from '../lib/repairText';

interface ValuePoint {
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: typeof TrendingUp;
  metrics?: {
    label: { ar: string; en: string };
    value: string;
    icon: typeof TrendingUp;
  }[];
  benefits?: { ar: string; en: string }[];
}

interface ValuePropositionProps {
  headline: { ar: string; en: string };
  subheadline: { ar: string; en: string };
  points: ValuePoint[];
  accent?: string;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
  headline,
  subheadline,
  points,
  accent = 'from-cyan-500 to-blue-500',
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const text = (value: { ar: string; en: string }) => localizedText(value, lang);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`absolute right-[-10%] top-[-10%] w-96 h-96 rounded-full bg-gradient-to-br ${accent} opacity-5 blur-3xl`}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className={`absolute left-[-10%] bottom-[-10%] w-96 h-96 rounded-full bg-gradient-to-tr ${accent} opacity-5 blur-3xl`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div className="inline-block mb-6">
            <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${accent} bg-opacity-10 text-cyan-400 text-sm font-bold border border-cyan-500/20`}>
              {isArabic ? '✨ عرض القيمة الفريد' : '✨ Unique Value Proposition'}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              {text(headline)}
            </motion.span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">{text(subheadline)}</p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { label: '99.9%', value: isArabic ? 'وقت التشغيل' : 'Uptime' },
              { label: '24/7', value: isArabic ? 'الدعم' : 'Support' },
              { label: '100%', value: isArabic ? 'الرضا' : 'Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-cyan-400">{stat.label}</p>
                <p className="text-sm text-slate-400">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Value Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {points.map((point, i) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ translateY: -10 }}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/20 border border-slate-800 group-hover:border-cyan-500/50 transition-all`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white" size={28} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {text(point.title)}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{text(point.description)}</p>

                  {/* Metrics */}
                  {point.metrics && (
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      {point.metrics.map((metric, j) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div key={j} className="p-3 rounded-lg bg-slate-900/50">
                            <div className="flex items-center gap-2 mb-1">
                              <MetricIcon className="text-cyan-400" size={16} />
                              <p className="text-xs text-slate-400">{text(metric.label)}</p>
                            </div>
                            <p className="text-lg font-bold text-cyan-400">{metric.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Benefits */}
                  {point.benefits && (
                    <div className="space-y-2 p-4 rounded-lg bg-slate-900/30 border border-slate-800">
                      {point.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-start gap-3 text-sm">
                          <ArrowUpRight className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-slate-300">{text(benefit)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="overflow-x-auto"
        >
          <h3 className="text-2xl font-bold mb-8">
            {isArabic ? 'لماذا نحن الخيار الأفضل؟' : 'Why Choose Us?'}
          </h3>

          <div className="inline-block w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="p-4 text-left font-bold text-slate-300">
                    {isArabic ? 'الميزة' : 'Feature'}
                  </th>
                  <th className="p-4 text-center font-bold">
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white text-sm`}>
                      {isArabic ? 'نحن' : 'Us'}
                    </span>
                  </th>
                  <th className="p-4 text-center font-bold text-slate-500">
                    {isArabic ? 'الآخرون' : 'Others'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: { ar: 'الدعم 24/7', en: '24/7 Support' } },
                  { feature: { ar: 'سرعة عالية', en: 'High Speed' } },
                  { feature: { ar: 'تحديثات مستمرة', en: 'Regular Updates' } },
                  { feature: { ar: 'أمان عالي', en: 'High Security' } },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">{text(row.feature)}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400">
                        ✓
                      </span>
                    </td>
                    <td className="p-4 text-center text-slate-500">−</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
