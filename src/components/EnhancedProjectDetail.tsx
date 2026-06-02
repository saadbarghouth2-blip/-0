import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpLeft,
  Play,
  ImageIcon,
  BarChart3,
  CheckCircle,
  Lightbulb,
  Target,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface ProjectMetric {
  label: { ar: string; en: string };
  value: string;
  icon: typeof BarChart3;
  highlight?: string;
}

interface ProjectPhase {
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  duration?: string;
  deliverables: { ar: string; en: string }[];
}

interface ProjectResult {
  metric: { ar: string; en: string };
  before: string;
  after: string;
  impact: string;
}

export interface EnhancedProjectDetailProps {
  projectName: { ar: string; en: string };
  category: { ar: string; en: string };
  challenge: { ar: string; en: string };
  solution: { ar: string; en: string };
  results: ProjectResult[];
  phases: ProjectPhase[];
  metrics: ProjectMetric[];
  images?: string[];
  videos?: Array<{ thumbnail: string; url: string; title: { ar: string; en: string } }>;
  testimonial?: {
    quote: { ar: string; en: string };
    author: { ar: string; en: string };
    role: { ar: string; en: string };
  };
  liveUrl?: string;
  techStack: string[];
  accent: string;
}

export const EnhancedProjectDetail: React.FC<EnhancedProjectDetailProps> = ({
  projectName,
  category,
  challenge,
  solution,
  results,
  phases,
  metrics,
  images = [],
  videos = [],
  testimonial,
  liveUrl,
  techStack,
  accent,
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const text = (value: { ar: string; en: string }) => (isArabic ? value.ar : value.en);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <div className={`absolute right-[-15%] top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br ${accent} opacity-10 blur-[150px] animate-pulse`} />
        <div className={`absolute bottom-[10%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr ${accent} opacity-5 blur-[140px] animate-pulse`} />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p className="section-kicker mb-4">{text(category)}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-foreground mb-6">
            {text(projectName)}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">{text(challenge)}</p>
          
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${accent} text-white font-medium hover:shadow-lg transition-shadow`}
            >
              {isArabic ? 'زيارة المشروع' : 'View Project'} <ExternalLink size={18} />
            </motion.a>
          )}
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {metrics.map((metric, i) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="surface-card rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="text-cyan-400" size={24} />
                  {metric.highlight && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white`}>
                      {metric.highlight}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-2">{text(metric.label)}</p>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Challenge & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div className="surface-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-amber-400" size={24} />
              <h3 className="text-xl font-semibold">{isArabic ? 'التحديات' : 'The Challenge'}</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">{text(challenge)}</p>
          </div>
          <div className="surface-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-green-400" size={24} />
              <h3 className="text-xl font-semibold">{isArabic ? 'الحل' : 'Our Solution'}</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">{text(solution)}</p>
          </div>
        </motion.div>

        {/* Project Results */}
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12">{isArabic ? 'النتائج المحققة' : 'Delivered Results'}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {results.map((result, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="surface-card rounded-xl p-8"
                >
                  <p className="text-slate-400 text-sm mb-4">{text(result.metric)}</p>
                  <div className="flex items-end gap-4 mb-6">
                    <div>
                      <p className="text-xs text-slate-500">{isArabic ? 'قبل' : 'Before'}</p>
                      <p className="text-lg text-slate-400 line-through">{result.before}</p>
                    </div>
                    <ArrowUpLeft className="text-green-400" size={20} />
                    <div>
                      <p className="text-xs text-slate-500">{isArabic ? 'بعد' : 'After'}</p>
                      <p className="text-2xl font-bold text-green-400">{result.after}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">{result.impact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Project Phases */}
        {phases.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12">{isArabic ? 'مراحل المشروع' : 'Project Phases'}</h2>
            <div className="space-y-6">
              {phases.map((phase, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="surface-card rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center flex-shrink-0`}>
                      <span className="font-bold text-white">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{text(phase.title)}</h3>
                      {phase.duration && <p className="text-sm text-slate-400 mb-2">{phase.duration}</p>}
                      <p className="text-slate-400 mb-4">{text(phase.description)}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((item, j) => (
                          <span key={j} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 text-sm text-slate-300">
                            <CheckCircle size={14} /> {text(item)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Images Gallery */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">{isArabic ? 'الصور والتصاميم' : 'Gallery & Designs'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(img)}
                  className="relative cursor-pointer rounded-lg overflow-hidden group"
                >
                  <img src={img} alt="Project" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <ImageIcon className="text-white" size={32} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Videos */}
        {videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">{isArabic ? 'الفيديوهات' : 'Videos'}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative cursor-pointer rounded-lg overflow-hidden group"
                  onClick={() => setPlayingVideo(video.url)}
                >
                  <img src={video.thumbnail} alt="Video" className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Play className="text-white ml-1" size={28} fill="white" />
                    </div>
                  </div>
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-white font-medium bg-gradient-to-t from-black/80">{text(video.title)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Testimonial */}
        {testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <div className={`surface-card rounded-2xl p-12 border-l-4 border-gradient-to-b ${accent}`}>
              <blockquote className="text-xl md:text-2xl font-medium mb-8 text-foreground leading-relaxed">
                "{text(testimonial.quote)}"
              </blockquote>
              <div>
                <p className="font-semibold text-lg">{text(testimonial.author)}</p>
                <p className="text-slate-400">{text(testimonial.role)}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tech Stack & Lightbox */}
        {techStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">{isArabic ? 'التقنيات المستخدمة' : 'Tech Stack'}</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-slate-900/60 text-slate-300 text-sm border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Full size"
                className="max-w-4xl max-h-[90vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
          {playingVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setPlayingVideo(null)}
            >
              <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black" onClick={(e) => e.stopPropagation()}>
                <iframe
                  src={playingVideo}
                  title="Video Player"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  className="absolute top-4 right-4 text-white hover:text-cyan-400 font-bold bg-black/50 hover:bg-black/80 px-3 py-1.5 rounded-full text-sm transition-colors"
                  onClick={() => setPlayingVideo(null)}
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
