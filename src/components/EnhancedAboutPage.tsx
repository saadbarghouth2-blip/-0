import { motion } from 'framer-motion';
import {
  Lightbulb,
  Target,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { localizedText } from '../lib/repairText';

interface TeamMember {
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  bio: { ar: string; en: string };
  image: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
}

interface Timeline {
  year: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
}

interface CoreValue {
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: typeof Heart;
}

export interface EnhancedAboutPageProps {
  companyName: { ar: string; en: string };
  tagline: { ar: string; en: string };
  story: Array<{
    title: { ar: string; en: string };
    content: { ar: string; en: string };
  }>;
  mission: { ar: string; en: string };
  vision: { ar: string; en: string };
  coreValues: CoreValue[];
  team: TeamMember[];
  timeline: Timeline[];
  stats: Array<{
    number: string;
    label: { ar: string; en: string };
    icon: typeof TrendingUp;
  }>;
  accent: string;
}

export const EnhancedAboutPage: React.FC<EnhancedAboutPageProps> = ({
  companyName,
  tagline,
  story,
  mission,
  vision,
  coreValues,
  team,
  timeline,
  stats,
  accent,
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const text = (value: { ar: string; en: string }) => localizedText(value, lang);

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
        <div className={`absolute bottom-[20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr ${accent} opacity-5 blur-[140px] animate-pulse`} />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="section-kicker mb-4">{isArabic ? 'عن الشركة' : 'About Us'}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {text(companyName)}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
            {text(tagline)}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="surface-card rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="text-cyan-400" size={28} />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.number}</p>
                <p className="text-slate-400">{text(stat.label)}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Story Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          {story.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`mb-16 ${i % 2 === 0 ? '' : ''}`}
            >
              <h2 className="text-3xl font-bold mb-6">{text(section.title)}</h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                {text(section.content)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div className="surface-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-amber-400" size={28} />
              <h3 className="text-2xl font-bold">{isArabic ? 'مهمتنا' : 'Our Mission'}</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">{text(mission)}</p>
          </div>
          <div className="surface-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-green-400" size={28} />
              <h3 className="text-2xl font-bold">{isArabic ? 'رؤيتنا' : 'Our Vision'}</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">{text(vision)}</p>
          </div>
        </motion.div>

        {/* Core Values */}
        {coreValues.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">{isArabic ? 'قيمنا الأساسية' : 'Our Core Values'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, i) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, translateY: -10 }}
                    className="surface-card rounded-xl p-8 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <IconComponent className="text-pink-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{text(value.title)}</h3>
                    <p className="text-slate-400">{text(value.description)}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Timeline */}
        {timeline.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">{isArabic ? 'رحلتنا عبر الزمن' : 'Our Journey'}</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-violet-500 opacity-50" />
              
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2" />
                    <div className="w-1/2">
                      <div className={`surface-card rounded-lg p-6 ${i % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                        <p className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${accent} text-white`}>
                          {item.year}
                        </p>
                        <h3 className="text-xl font-bold mb-2">{text(item.title)}</h3>
                        <p className="text-slate-400">{text(item.description)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Team */}
        {team.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center">{isArabic ? 'فريقنا' : 'Our Team'}</h2>
            <p className="text-center text-slate-400 mb-12">{isArabic ? 'أشخاص موهوبون يعملون لتحقيق رؤيتنا' : 'Talented individuals working to bring our vision to life'}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, translateY: -10 }}
                  className="surface-card rounded-xl overflow-hidden group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={text(member.name)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                      <div className="w-full p-4 bg-gradient-to-t from-black/80">
                        <p className="text-white font-semibold">{text(member.name)}</p>
                        <p className="text-sm text-slate-300">{text(member.role)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{text(member.bio)}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, j) => (
                        <span key={j} className="px-2 py-1 rounded text-xs bg-slate-900/50 text-slate-400">
                          {skill}
                        </span>
                      ))}
                    </div>
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
