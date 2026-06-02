import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string;
  icon?: React.ReactNode;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  title?: string;
  isArabic?: boolean;
  variant?: 'vertical' | 'horizontal' | 'interactive';
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({
  steps,
  title,
  isArabic = true,
  variant = 'interactive',
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="w-full">
      {title && <h3 className="font-display text-2xl font-bold text-white mb-10">{title}</h3>}

      {variant === 'vertical' && (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-12 flex gap-4"
            >
              {/* Line connector */}
              {idx < steps.length - 1 && (
                <div className="absolute left-5 top-12 w-0.5 h-16 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}

              {/* Step number circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
              >
                {step.number}
              </motion.div>

              {/* Content */}
              <div className="pt-1">
                <h4 className="font-bold text-white text-lg">{step.title}</h4>
                <p className="text-slate-400 mt-1">{step.description}</p>
                {step.details && (
                  <p className="text-sm text-slate-500 mt-2 italic">{step.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {variant === 'horizontal' && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex overflow-x-auto gap-4 pb-4"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex-shrink-0 w-80 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <h4 className="font-bold text-white text-lg mb-2">{step.title}</h4>
              <p className="text-slate-400 text-sm">{step.description}</p>
              {step.details && (
                <p className="text-xs text-slate-500 mt-3 italic border-l-2 border-cyan-500/30 pl-2">
                  {step.details}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {variant === 'interactive' && (
        <div className="space-y-8">
          {/* Step indicators */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-2 justify-between"
          >
            {steps.map((_, idx) => (
              <motion.button
                key={idx}
                variants={itemVariants}
                onClick={() => setActiveStep(idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 h-2 rounded-full transition-all ${
                  idx <= activeStep
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    : 'bg-white/10'
                }`}
              />
            ))}
          </motion.div>

          {/* Active step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 md:p-12"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
              <div className="relative z-10">
                {/* Step number and title */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-display text-2xl font-bold shadow-lg shadow-cyan-500/30"
                  >
                    {steps[activeStep].number}
                  </motion.div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-3xl font-bold text-white">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-slate-300 leading-relaxed mb-6"
                >
                  {steps[activeStep].description}
                </motion.p>

                {/* Details */}
                {steps[activeStep].details && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-slate-300"
                  >
                    <p className="text-sm">{steps[activeStep].details}</p>
                  </motion.div>
                )}

                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex gap-4 flex-wrap"
                >
                  {activeStep > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-6 py-2 rounded-lg border border-white/20 text-white hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                    >
                      {isArabic ? 'السابق' : 'Previous'}
                    </motion.button>
                  )}
                  {activeStep < steps.length - 1 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20"
                    >
                      {isArabic ? 'التالي' : 'Next'}
                    </motion.button>
                  )}
                  {activeStep === steps.length - 1 && (
                    <div className="flex items-center gap-2 text-green-400 font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      {isArabic ? 'تم!' : 'Done!'}
                    </div>
                  )}
                </motion.div>

                {/* Progress indicator */}
                <p className="text-xs text-slate-500 mt-6 text-center">
                  {activeStep + 1} / {steps.length}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ProcessFlow;
export type { ProcessStep, ProcessFlowProps };
