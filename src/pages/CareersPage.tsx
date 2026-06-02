import { motion } from 'framer-motion';
import { Sparkles, Check, Send, CheckCircle2, Award, Users, Heart } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

const openRoles = [
  {
    id: 'frontend',
    titleAr: 'مطور واجهات أمامية أول (React)',
    titleEn: 'Senior Frontend Developer (React)',
    typeAr: 'دوام كامل (عن بعد)',
    typeEn: 'Full-time (Remote)',
    experienceAr: 'خبرة +٤ سنوات',
    experienceEn: '+4 Years Experience',
    descriptionAr: 'نبحث عن مهندس واجهات مبدع يتقن كتابة مكونات ريأكت نظيفة وسريعة، ويهتم بدقة واجهات Figma والتفاعلات الدقيقة.',
    descriptionEn: 'Seeking a senior frontend developer who writes clean reusable React, cares about UX fidelity and web performance.',
    requirementsAr: [
      'خبرة ممتازة بـ React, Next.js, and TypeScript',
      'إتقان أدوات الأداء (Vite, Bundle optimization, Lighthouse)',
      'شغف بكتابة واجهات متجاوبة بالكامل وتفاعلات Framer Motion'
    ],
    requirementsEn: [
      'Expertise in React, Next.js, and TypeScript architectures',
      'Proficiency in build tools (Vite, bundle audits, performance tuning)',
      'Passion for responsive layouts and Framer Motion or Canvas physics'
    ]
  },
  {
    id: 'uxui',
    titleAr: 'مصمم واجهات وتجربة مستخدم (UX/UI Designer)',
    titleEn: 'Product UX/UI Designer',
    typeAr: 'دوام كامل (عن بعد أو من المكتب)',
    typeEn: 'Full-time (Remote or Hybrid)',
    experienceAr: 'خبرة +٣ سنوات',
    experienceEn: '+3 Years Experience',
    descriptionAr: 'نبحث عن مصمم واجهات شغوف بالبساطة والهدوء، يركز على تصميم رحلات مستخدم واضحة وتقديم لوحات ألوان وهوية رقمية ممتازة.',
    descriptionEn: 'Looking for a product designer who designs clean, calm interfaces and creates professional brand assets.',
    requirementsAr: [
      'معرفة عميقة بأبحاث المستخدم وسيناريوهات التصفح',
      'إتقان كامل لبرنامج Figma وصناعة مكونات الـ Auto Layout',
      'القدرة على صياغة هوية بصرية كاملة وعرضها بثقة'
    ],
    requirementsEn: [
      'Deep understanding of user research, flowcharts and wireframes',
      'Expertise in Figma design components, variables and Auto Layout',
      'Ability to build visual brand guidelines and present them'
    ]
  }
];

const perksList = [
  { icon: Heart, titleAr: 'بيئة عمل هادئة وداعمة', titleEn: 'Calm Supportive Environment', descAr: 'ندعم التركيز والعمل المرن ونبتعد عن الاجتماعات الزائدة.', descEn: 'We value deep work, flexible hours, and reject excess meetings.' },
  { icon: Award, titleAr: 'مسار للتعلم والنمو', titleEn: 'Learning & growth path', descAr: 'نوفر فرصًا للتعلم وشراء الكتب وحضور الفعاليات المناسبة لنمو الفريق.', descEn: 'We support learning opportunities, professional books, and relevant events for team growth.' },
  { icon: Users, titleAr: 'تأمين طبي متكامل ومميز', titleEn: 'Premium Medical Insurance', descAr: 'تغطية طبية شاملة وممتازة لك ولكافة أفراد عائلتك المقربين.', descEn: 'Complete medical and health coverage for you and your family.' }
];

const CareersPage = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);
  const pickList = (arabic: string[], english: string[]) => (isArabic ? arabic : english);

  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  usePageMetadata(getPageSeoByPath('/careers', lang));

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail) {
      setFormSubmitted(true);
      setApplicantName('');
      setApplicantEmail('');
      setPortfolioLink('');
    }
  };

  return (
    <div className="relative pt-10 pb-16 md:pt-24 md:pb-32">
      {/* Mesh Gradient Background for Careers page */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-tr from-cyan-950/20 via-violet-950/20 to-black opacity-90" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-6">
            <Heart className="h-5 w-5 text-cyan-400" />
            {text('انضم لعائلة نطق التفاعلية', 'Join Notaq Tech Team')}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {text('اصنع أثراً برمجياً،', 'Make an engineering impact,')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {text('وابنِ واجهات هادئة للمستقبل', 'build calm web experiences')}
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {text(
              'نحن نؤمن بأن كفاءة البرمجيات تبدأ من بيئة عمل تقدر التركيز والهدوء والتعلم المستمر لتوليد حلول برمجية استثنائية.',
              'We believe quality software starts with a calm workflow prioritizing deep focus and continuous learning.'
            )}
          </p>
        </motion.div>

        {/* Benefits & Perks Grid */}
        <div className="mb-24">
          <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-8 text-center">
            {text('مميزات ومنافع العمل بنطق', 'Work Culture & Perks')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {perksList.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="surface-card rounded-2xl p-6 border border-white/5 bg-white/[0.01] flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white mb-1.5">{text(perk.titleAr, perk.titleEn)}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-body">{text(perk.descAr, perk.descEn)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Open Positions Accordion */}
        <div className="mb-24">
          <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-8 text-center">
            {text('الفرص الوظيفية المتاحة حالياً', 'Open Job Vacancies')}
          </h2>

          <div className="space-y-4">
            {openRoles.map((role) => {
              return (
                <div key={role.id} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                  
                  {/* Job Accordion Header */}
                  <div className="w-full p-5 text-right flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-bold text-white gap-4">
                    <div>
                      <h3 className="font-display text-sm md:text-base text-white">{text(role.titleAr, role.titleEn)}</h3>
                      <div className="flex flex-wrap gap-3 mt-1.5 text-[10px] text-slate-500 font-semibold">
                        <span>{text(role.typeAr, role.typeEn)}</span>
                        <span>•</span>
                        <span className="text-cyan-400">{text(role.experienceAr, role.experienceEn)}</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-white/5 bg-black/20 space-y-6 text-xs">
                          
                          {/* Role Description */}
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mb-2">{text('حول الدور والمسؤوليات', 'Role Description')}</span>
                            <p className="text-slate-400 leading-relaxed font-body text-xs md:text-sm">{text(role.descriptionAr, role.descriptionEn)}</p>
                          </div>

                          {/* Role Requirements Checklist */}
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mb-3">{text('المتطلبات التقنية اللازمة', 'Requirements & Criteria')}</span>
                            <div className="space-y-2">
                              {pickList(role.requirementsAr, role.requirementsEn).map((req, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-slate-300 text-xs font-body">
                                  <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                                  <span>{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Built-in job application form */}
                          <div className="border-t border-white/5 pt-6">
                            <h4 className="font-display text-sm font-bold text-white mb-4 flex items-center gap-1.5">
                              <Sparkles className="h-4 w-4 text-cyan-400" />
                              {text('قدّم طلبك الآن مباشرة', 'Apply For This Position')}
                            </h4>

                            {!formSubmitted ? (
                              <form onSubmit={handleApplySubmit} className="space-y-4 max-w-xl">
                                <div className="grid sm:grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-[10px] text-slate-500 font-bold mb-1">{text('الاسم بالكامل', 'Full Name')}</label>
                                    <input 
                                      type="text" 
                                      required
                                      value={applicantName}
                                      onChange={(e) => setApplicantName(e.target.value)}
                                      placeholder="أحمد السيد"
                                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[10px] text-slate-500 font-bold mb-1">{text('البريد الإلكتروني', 'Email Address')}</label>
                                    <input 
                                      type="email" 
                                      required
                                      value={applicantEmail}
                                      onChange={(e) => setApplicantEmail(e.target.value)}
                                      placeholder="name@email.com"
                                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-[10px] text-slate-500 font-bold mb-1">{text('رابط معرض الأعمال أو GitHub', 'Portfolio/GitHub Link')}</label>
                                  <input 
                                    type="url" 
                                    required
                                    value={portfolioLink}
                                    onChange={(e) => setPortfolioLink(e.target.value)}
                                    placeholder="https://github.com/username"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                  />
                                </div>

                                <button 
                                  type="submit"
                                  className="btn-primary py-2.5 px-5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 text-black hover:scale-[1.02] shadow-lg"
                                >
                                  <Send className="h-3.5 w-3.5" />
                                  {text('أرسل ملف التقديم', 'Submit Application')}
                                </button>
                              </form>
                            ) : (
                              <motion.div 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-2xl flex items-center gap-3 text-cyan-300 max-w-xl"
                              >
                                <CheckCircle2 className="h-5 w-5 shrink-0" />
                                <div>
                                  <p className="font-bold text-white">{text('تم استلام طلبك بنجاح!', 'Application Received!')}</p>
                                  <p className="text-[10px] text-slate-400 mt-0.5">{text('سنقوم بمراجعة معرض أعمالك والرد عليك خلال ٣ أيام عمل.', 'Our team will review your portfolio and reply within 3 business days.')}</p>
                                </div>
                              </motion.div>
                            )}
                          </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareersPage;
