import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Award,
  Zap,
  Target,
  CheckCircle,
  BarChart3,
  Clock,
  Lightbulb,
  Globe,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface Statistic {
  icon: typeof TrendingUp;
  label: { ar: string; en: string };
  value: string;
  suffix?: string;
  prefix?: string;
  description?: { ar: string; en: string };
  trend?: { direction: 'up' | 'down'; value: number };
}

interface Category {
  name: { ar: string; en: string };
  stats: StatisticWithCategory[];
}

interface StatisticWithCategory extends Statistic {
  category?: string;
}

export interface EnhancedStatsDashboardProps {
  title?: { ar: string; en: string };
  subtitle?: { ar: string; en: string };
  statistics: Statistic[];
  categories?: Category[];
  displayMode?: 'grid' | 'comparison' | 'growth' | 'detailed';
  accent?: string;
  animated?: boolean;
}

export const EnhancedStatsDashboard: React.FC<EnhancedStatsDashboardProps> = ({
  title,
  subtitle,
  statistics,
  categories,
  displayMode = 'grid',
  accent = 'from-cyan-500 to-blue-500',
  animated = true,
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [counts, setCounts] = useState<Record<number, number>>({});

  const text = (value: { ar: string; en: string }) => (isArabic ? value.ar : value.en);

  // Animated counter for numbers
  useEffect(() => {
    if (!animated) return;

    statistics.forEach((stat, index) => {
      const numValue = parseInt(stat.value);
      if (isNaN(numValue)) return;

      let current = 0;
      const increment = Math.ceil(numValue / 50);
      const timer = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          current = numValue;
          clearInterval(timer);
        }
        setCounts((prev) => ({ ...prev, [index]: current }));
      }, 30);

      return () => clearInterval(timer);
    });
  }, [animated, statistics]);

  const displayValue = (index: number, stat: Statistic) => {
    if (!animated) return stat.value;
    const counted = counts[index];
    return counted !== undefined ? counted.toString() : stat.value;
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

        {/* Grid Mode */}
        {displayMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, translateY: -10 }}
                  className="surface-card rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <IconComponent className="text-cyan-400" size={24} />
                    {stat.trend && (
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          stat.trend.direction === 'up'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}
                      >
                        {stat.trend.direction === 'up' ? '↑' : '↓'} {stat.trend.value}%
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <p className="text-slate-400 text-sm mb-1">{text(stat.label)}</p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      {displayValue(i, stat)}
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </p>
                  </div>
                  {stat.description && (
                    <p className="text-xs text-slate-500 mt-3">{text(stat.description)}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Detailed Mode */}
        {displayMode === 'detailed' && (
          <div className="space-y-8">
            {statistics.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`surface-card rounded-xl p-8 flex items-center gap-8 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="text-white" size={48} />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 text-sm mb-2">{text(stat.label)}</p>
                    <p className="text-4xl font-bold text-foreground mb-3">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      {displayValue(i, stat)}
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </p>
                    {stat.description && (
                      <p className="text-slate-400 leading-relaxed">{text(stat.description)}</p>
                    )}
                    {stat.trend && (
                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                            stat.trend.direction === 'up'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {stat.trend.direction === 'up' ? <TrendingUp size={14} /> : '↓'} {stat.trend.value}% {isArabic ? 'هذا الشهر' : 'this month'}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Comparison Mode */}
        {displayMode === 'comparison' && (
          <div className="grid md:grid-cols-2 gap-8">
            {statistics.map((stat, i) => {
              const IconComponent = stat.icon;
              const maxValue = Math.max(...statistics.map((s) => parseInt(s.value) || 0));
              const percentage = (parseInt(displayValue(i, stat)) / maxValue) * 100;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="surface-card rounded-xl p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <IconComponent className="text-cyan-400" size={24} />
                      <span className="font-semibold">{text(stat.label)}</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {displayValue(i, stat)}
                      {stat.suffix}
                    </p>
                  </div>
                  <div className="w-full bg-slate-900/50 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full bg-gradient-to-r ${accent} rounded-full`}
                    />
                  </div>
                  {stat.description && (
                    <p className="text-xs text-slate-500 mt-4">{text(stat.description)}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Growth Mode */}
        {displayMode === 'growth' && (
          <div className="space-y-6">
            {statistics.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="surface-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">{text(stat.label)}</p>
                    <p className="text-3xl font-bold text-foreground">
                      {displayValue(i, stat)}
                      {stat.suffix}
                    </p>
                  </div>
                  {stat.trend && (
                    <div
                      className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 ${
                        stat.trend.direction === 'up'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {stat.trend.direction === 'up' ? <TrendingUp size={18} /> : '↓'}
                      {stat.trend.value}%
                    </div>
                  )}
                </div>
                {stat.description && (
                  <p className="text-slate-400 text-sm">{text(stat.description)}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Categories Section */}
        {categories && categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-20 border-t border-slate-800"
          >
            <h3 className="text-2xl font-bold mb-12 text-center">{isArabic ? 'التفاصيل حسب القسم' : 'By Category'}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="surface-card rounded-xl p-8"
                >
                  <h4 className="text-lg font-bold mb-6">{text(category.name)}</h4>
                  <div className="space-y-4">
                    {category.stats.map((stat, j) => (
                      <div key={j} className="flex justify-between items-end">
                        <span className="text-sm text-slate-400">{text(stat.label)}</span>
                        <span className="font-bold text-cyan-400">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
