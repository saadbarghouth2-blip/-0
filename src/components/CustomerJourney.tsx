import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { localizedText } from '../lib/repairText';

interface JourneyStep {
  stage: string;
  title: { ar: string; en: string };
  duration?: string;
  description: { ar: string; en: string };
  activities: { ar: string; en: string }[];
  icon: typeof CheckCircle;
  benefits: { ar: string; en: string }[];
  milestone: { ar: string; en: string };
}

interface CustomerJourneyProps {
  steps: JourneyStep[];
  accent?: string;
}

export const CustomerJourney: React.FC<CustomerJourneyProps> = ({
  steps,
  accent = 'from-cyan-500 to-blue-500',
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [activeStep, setActiveStep] = useState(0);

  const text = (value: { ar: string; en: string }) => localizedText(value, lang);

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

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? 'رحلة العميل المتكاملة' : 'Complete Customer Journey'}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {isArabic
              ? 'تتبع رحلتك من البداية حتى تحقيق الأهداف'
              : 'Follow your journey from start to achieving your goals'}
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b ${accent} opacity-30`} />

            <div className="space-y-12">
              {steps.map((step, i) => {
                const IconComponent = step.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center"
                  >
                    {/* Content - Left or Right */}
                    <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="surface-card rounded-xl p-8"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className={`text-sm font-bold text-cyan-400 mb-1`}>{step.stage}</p>
                            <h3 className="text-xl font-bold">{text(step.title)}</h3>
                          </div>
                          {step.duration && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 text-xs text-slate-400">
                              <Clock size={14} /> {step.duration}
                            </div>
                          )}
                        </div>

                        <p className="text-slate-400 mb-4">{text(step.description)}</p>

                        {/* Activities */}
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-slate-500 mb-2">
                            {isArabic ? 'الأنشطة' : 'Activities'}
                          </p>
                          <div className="space-y-2">
                            {step.activities.map((activity, j) => (
                              <div key={j} className="flex items-start gap-2 text-sm text-slate-300">
                                <span className="text-cyan-400 flex-shrink-0">•</span>
                                <span>{text(activity)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Milestone */}
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${accent} bg-opacity-10 border border-gradient-to-r from-cyan-500/30 to-blue-500/30`}>
                          <p className="text-xs font-semibold text-cyan-400 mb-1">
                            {isArabic ? 'الإنجاز' : 'Milestone'}
                          </p>
                          <p className="text-sm text-slate-300">{text(step.milestone)}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Circle */}
                    <div className="w-12 h-12 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center`}
                      >
                        <IconComponent className="text-white" size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    activeStep === i
                      ? `bg-gradient-to-r ${accent} text-white`
                      : 'surface-card text-slate-300 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent size={20} />
                    <div>
                      <p className="text-sm font-semibold opacity-75">{step.stage}</p>
                      <p className="font-bold">{text(step.title)}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Detail View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeStep}
            className="mt-8 surface-card rounded-xl p-6"
          >
            {(() => {
              const step = steps[activeStep];
              const IconComponent = step.icon;
              return (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="text-cyan-400" size={24} />
                    <h3 className="text-xl font-bold">{text(step.title)}</h3>
                  </div>
                  <p className="text-slate-400 mb-4">{text(step.description)}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {isArabic ? 'الأنشطة والفوائد' : 'Activities & Benefits'}
                    </p>
                    {step.activities.map((activity, j) => (
                      <div key={j} className="flex gap-2 mb-2 text-sm">
                        <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                        <span>{text(activity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`p-3 rounded-lg bg-gradient-to-r ${accent} bg-opacity-10`}>
                    <p className="text-xs font-bold text-cyan-400">{text(step.milestone)}</p>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
