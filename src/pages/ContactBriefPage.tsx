import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ClipboardList, Send,
  ShoppingBag, Monitor, ShieldCheck, Laptop, Clock, ListChecks 
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { clientFacingText } from '../lib/repairText';

const PROJECT_TYPES = [
  { id: 'ecommerce', labelAr: 'متجر إلكتروني متكامل', labelEn: 'E-commerce Platform', icon: ShoppingBag, descAr: 'بيع وتوصيل مع بوابات دفع آمنة.', descEn: 'Fully integrated store with payment gateways.' },
  { id: 'saas', labelAr: 'نظام سحابي / SaaS', labelEn: 'SaaS / Enterprise System', icon: Monitor, descAr: 'لوحات تحكم متقدمة وإدارة بيانات.', descEn: 'Advanced dashboards & data management.' },
  { id: 'website', labelAr: 'موقع تعريفي للشركة', labelEn: 'Corporate Website', icon: Laptop, descAr: 'عرض هوية الشركة وخدماتها للجمهور.', descEn: 'Present company identity and services.' },
  { id: 'brand', labelAr: 'هوية بصرية كاملة', labelEn: 'Visual Brand Identity', icon: ShieldCheck, descAr: 'تصميم شعارات وأدلة الهوية والشكل.', descEn: 'Logo design, brand guidelines and style.' }
];

const TIMELINES = [
  { id: 'urgent', labelAr: 'عاجل جداً (أقل من شهر)', labelEn: 'Urgent (under 1 month)' },
  { id: 'standard', labelAr: 'مناسب (1 - 3 أشهر)', labelEn: 'Standard (1-3 months)' },
  { id: 'flexible', labelAr: 'مرن (أكثر من 3 أشهر)', labelEn: 'Flexible (3+ months)' }
];

const CHECKLIST_OPTIONS = [
  { id: 'multilingual', labelAr: 'دعم لغات متعددة (عربي/إنجليزي)', labelEn: 'Multilingual support' },
  { id: 'cms', labelAr: 'نظام إدارة محتوى سهل التعديل', labelEn: 'Easy CMS / Content Control' },
  { id: 'analytics', labelAr: 'ربط إحصائيات وتقارير متقدمة', labelEn: 'Advanced Analytics integration' },
  { id: 'animations', labelAr: 'تأثيرات وأنيميشن تفاعلية فاخرة', labelEn: 'Premium micro-interactions' },
  { id: 'seo', labelAr: 'تهيئة كاملة لمحركات البحث (SEO)', labelEn: 'Full SEO Optimization' },
  { id: 'security', labelAr: 'معايير أمان وحماية عالية وتشفير', labelEn: 'Enterprise Security & SSL' }
];

const ContactBriefPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => clientFacingText(isArabic ? arabic : english, lang);
  const navigate = useNavigate();

  // Wizard state
  const [currentStep, setCurrentStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', note: '' });

  usePageMetadata(getPageSeoByPath('/contact/brief', lang));

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  // Convert brief configuration to query parameters and navigate to the main contact form
  const handleFinalSubmit = () => {
    const params = new URLSearchParams({
      brief_type: projectType,
      brief_timeline: timeline,
      brief_features: selectedFeatures.join(','),
      client_name: clientInfo.name,
      client_email: clientInfo.email,
      client_note: clientInfo.note
    });

    // Navigate to Contact page with preset values
    navigate(`${localizePath('/contact')}?${params.toString()}`);
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <section className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-20">
      {/* Background Ornaments */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="mobile-ornament absolute right-[-8%] top-16 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="mobile-ornament absolute left-[-10%] bottom-10 h-[25rem] w-[25rem] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
          
          {/* Left Column: Live Summary & Overview */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div>
              <span className="section-kicker mb-3">{text('إعداد فكرة المشروع', 'Before contacting')}</span>
              <h1 className="font-display text-2xl md:text-4xl font-black leading-tight text-white mb-4">
                {text('مُعِدّ ملف متطلبات مشروعك تفاعلياً', 'Interactive Project Brief Builder')}
              </h1>
              <p className="text-sm leading-relaxed text-slate-400">
                {text(
                  'أجب عن بضعة أسئلة بسيطة لبناء ملف بريف متكامل لمشروعك، وسنقوم بتوجيهك فوراً لبدء مناقشته معنا.',
                  'Answer a few simple questions to generate a structured brief for your project, then proceed to submit it to our team.'
                )}
              </p>
            </div>

            {/* Real-time Summary Card */}
            <div className="rounded-[1.8rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-5 backdrop-blur-md">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-cyan-300 mb-4 flex items-center gap-1.5">
                <ClipboardList className="h-4 w-4" />
                {text('ملخص البريف الحالي', 'Live Brief Summary')}
              </h3>

              <div className="space-y-4 text-xs">
                {/* Selected Type */}
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">{text('نوع المشروع:', 'Project Type:')}</span>
                  <span className="text-white font-bold">
                    {projectType 
                      ? (isArabic ? PROJECT_TYPES.find(p => p.id === projectType)?.labelAr : PROJECT_TYPES.find(p => p.id === projectType)?.labelEn)
                      : text('لم يُحدد بعد', 'Not selected yet')}
                  </span>
                </div>

                {/* Selected Timeline */}
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">{text('الجدول الزمني:', 'Timeline:')}</span>
                  <span className="text-white font-bold">
                    {timeline 
                      ? (isArabic ? TIMELINES.find(t => t.id === timeline)?.labelAr : TIMELINES.find(t => t.id === timeline)?.labelEn)
                      : text('لم يُحدد بعد', 'Not selected yet')}
                  </span>
                </div>

                {/* Selected Features */}
                <div>
                  <span className="text-slate-500 block mb-2">{text('الميزات المطلوبة:', 'Requested Features:')}</span>
                  {selectedFeatures.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {selectedFeatures.map(feat => {
                        const found = CHECKLIST_OPTIONS.find(c => c.id === feat);
                        return (
                          <span key={feat} className="bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded text-[10px] text-slate-300">
                            {found ? (isArabic ? found.labelAr : found.labelEn) : feat}
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="text-slate-600 block">{text('لم تُحدد ميزات', 'None selected')}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Step Wizard */}
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-md">
            
            {/* Step Progress Tracker */}
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
                <span>{text(`الخطوة ${currentStep} من 4`, `Step ${currentStep} of 4`)}</span>
                <span className="text-cyan-400 font-bold">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Active Wizard Step Panel */}
            <div className="min-h-[280px] mb-8">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Project Type Selection */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isArabic ? 20 : -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                      {text('ما هو نوع المشروع الأساسي الذي ترغب في بنائه؟', 'What is the main type of project you want to build?')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {PROJECT_TYPES.map(proj => {
                        const Icon = proj.icon;
                        const isSelected = projectType === proj.id;
                        return (
                          <button
                            key={proj.id}
                            onClick={() => setProjectType(proj.id)}
                            className={`p-4 text-right rounded-2xl border transition-all flex flex-col justify-between items-start gap-4 ${
                              isSelected 
                                ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]'
                                : 'bg-[#06090f]/40 border-white/10 hover:border-cyan-400/40'
                            }`}
                          >
                            <div className={`p-2.5 rounded-xl border ${isSelected ? 'bg-cyan-400 text-black border-cyan-400' : 'bg-white/5 border-white/10 text-cyan-300'}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-display text-sm font-bold text-white mb-1.5">{isArabic ? proj.labelAr : proj.labelEn}</h4>
                              <p className="text-xs text-slate-400 leading-relaxed">{isArabic ? proj.descAr : proj.descEn}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Timeline Selector */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isArabic ? 20 : -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                      {text('ما هو تاريخ الإطلاق المتوقع للمشروع؟', 'What is your expected project launch timeline?')}
                    </h3>

                    <div className="space-y-3">
                      {TIMELINES.map(t => {
                        const isSelected = timeline === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setTimeline(t.id)}
                            className={`w-full p-4 rounded-xl border text-right transition-all flex items-center justify-between ${
                              isSelected 
                                ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300' 
                                : 'bg-[#06090f]/40 border-white/10 hover:border-cyan-400/40 text-slate-300'
                            }`}
                          >
                            <span className="font-display text-sm font-bold">{isArabic ? t.labelAr : t.labelEn}</span>
                            <Clock className={`h-5 w-5 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Checklist of Requirements */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isArabic ? 20 : -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                      {text('هل يحتاج المشروع أي من الميزات التالية؟', 'Does your project require any of these features?')}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {CHECKLIST_OPTIONS.map(c => {
                        const isSelected = selectedFeatures.includes(c.id);
                        return (
                          <button
                            key={c.id}
                            onClick={() => toggleFeature(c.id)}
                            className={`p-3.5 rounded-xl border text-right transition-all flex items-center gap-3 ${
                              isSelected 
                                ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300' 
                                : 'bg-[#06090f]/40 border-white/10 hover:border-cyan-400/40 text-slate-300'
                            }`}
                          >
                            <ListChecks className={`h-5 w-5 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                            <span className="text-xs font-semibold leading-relaxed">{isArabic ? c.labelAr : c.labelEn}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Details */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isArabic ? 20 : -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                      {text('أخيراً، كيف يمكننا التواصل معك؟', 'Finally, how can we reach you?')}
                    </h3>

                    <div className="space-y-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 mb-1.5">{text('الاسم الكريم', 'Your Name')}</label>
                        <input 
                          type="text" 
                          value={clientInfo.name}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                          placeholder={text('أحمد السيد', 'e.g. John Doe')}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 mb-1.5">{text('البريد الإلكتروني', 'Email Address')}</label>
                        <input 
                          type="email" 
                          value={clientInfo.email}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="client@company.com"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>

                      {/* Notes textarea */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 mb-1.5">{text('تفاصيل أو ملاحظات أخرى', 'Any additional notes')}</label>
                        <textarea 
                          value={clientInfo.note}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, note: e.target.value }))}
                          placeholder={text('تحدث معنا عن أهداف شركتك...', 'Briefly explain your primary goals...')}
                          rows={3}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Form Action Controls */}
            <div className="flex justify-between items-center border-t border-white/5 pt-6">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                  currentStep === 1 
                    ? 'border-transparent text-slate-600 cursor-not-allowed' 
                    : 'border-white/10 text-white hover:bg-white/5'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                {text('السابق', 'Previous')}
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={currentStep === 1 && !projectType}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    currentStep === 1 && !projectType 
                      ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                      : 'bg-white text-black hover:bg-cyan-400 hover:scale-[1.02] shadow-lg'
                  }`}
                >
                  {text('التالي', 'Next')}
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinalSubmit}
                  disabled={!clientInfo.name || !clientInfo.email}
                  className={`px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    !clientInfo.name || !clientInfo.email 
                      ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:scale-[1.03] shadow-[0_0_20px_rgba(45,212,191,0.3)]'
                  }`}
                >
                  <Send className="h-4 w-4" />
                  {text('أرسل البريف وابدأ التواصل', 'Submit & Start Discussion')}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBriefPage;
