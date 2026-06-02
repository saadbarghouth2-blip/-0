import { motion, type Variants } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface ChartDataPoint {
  label: string;
  value: number;
  change?: number;
  icon?: React.ReactNode;
}

interface MetricsChartProps {
  title?: string;
  subtitle?: string;
  data: ChartDataPoint[];
  isArabic?: boolean;
  variant?: 'bars' | 'circles' | 'cards';
}

const MetricsChart: React.FC<MetricsChartProps> = ({
  title,
  subtitle,
  data,
  isArabic = true,
  variant = 'bars',
}) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-10">
          {title && <h3 className="font-display text-2xl font-bold text-white">{title}</h3>}
          {subtitle && <p className="text-slate-400 mt-2">{subtitle}</p>}
        </div>
      )}

      {variant === 'bars' && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {data.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group">
              <div className="flex items-end justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">{item.label}</span>
                  {item.change !== undefined && (
                    <span
                      className={`text-xs font-bold ${
                        item.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {item.change >= 0 ? '+' : ''}{item.change}%
                    </span>
                  )}
                </div>
                <span className="text-sm font-bold text-cyan-300">{item.value}</span>
              </div>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value / maxValue) * 100}%` }}
                  transition={{ duration: 1, delay: idx * 0.1, type: 'spring' }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {variant === 'circles' && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.map((item, idx) => {
            const percentage = (item.value / maxValue) * 100;
            const circumference = 2 * Math.PI * 45;
            const strokeDashoffset = circumference - (percentage / 100) * circumference;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative flex flex-col items-center"
              >
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset }}
                      transition={{ duration: 1.5, delay: idx * 0.1 }}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-300">
                      {Math.round(percentage)}%
                    </span>
                    {item.change !== undefined && (
                      <span
                        className={`text-xs font-bold mt-1 ${
                          item.change >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {item.change >= 0 ? '+' : ''}{item.change}%
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-white mt-4">{item.label}</p>
                <p className="text-center text-xs text-slate-400 mt-1">{item.value}</p>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {variant === 'cards' && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/5 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-black text-cyan-300">{item.value}</div>
                  {item.icon && (
                    <div className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                      {item.icon}
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-white mb-2">{item.label}</p>
                {item.change !== undefined && (
                  <div
                    className={`flex items-center gap-1 text-xs font-bold ${
                      item.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {item.change >= 0 ? '+' : ''}{item.change}% {isArabic ? 'مقارنة بالفترة السابقة' : 'vs last month'}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MetricsChart;
export type { ChartDataPoint, MetricsChartProps };
