import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

import {
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Phone,
  Send,
  TimerReset,
  Workflow,
  Orbit,
  Rocket,
  Clock,
  Star
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import { portfolioProfile } from '../data/portfolio';

const contactCards = [
  {
    icon: Mail,
    titleAr: 'البريد الإلكتروني',
    titleEn: 'Email',
    valueAr: portfolioProfile.email,
    valueEn: portfolioProfile.email,
    href: `mailto:${portfolioProfile.email}`,
    color: 'from-cyan-400 to-teal-400',
  },
  {
    icon: Phone,
    titleAr: 'الهاتف',
    titleEn: 'Phone',
    valueAr: portfolioProfile.phone,
    valueEn: portfolioProfile.phone,
    href: `tel:${portfolioProfile.phoneHref}`,
    color: 'from-violet-400 to-fuchsia-400',
  },
  {
    icon: MapPin,
    titleAr: 'الموقع',
    titleEn: 'Location',
    valueAr: portfolioProfile.location,
    valueEn: portfolioProfile.locationEn,
    href: '#',
    color: 'from-amber-400 to-orange-400',
  },
];

const inquiryTypes = [
  { ar: 'موقع شركة كامل', en: 'Full corporate website' },
  { ar: 'منصة تفاعلية (SaaS)', en: 'Interactive SaaS Platform' },
  { ar: 'إعادة تصميم للهوية الرقمية', en: 'Digital Identity Redesign' },
  { ar: 'تطوير مسارات (Funnels)', en: 'Funnel Development' },
  { ar: 'استشارة هندسية', en: 'Architecture Consultation' },
];

const workflowSteps = [
  {
    icon: TimerReset,
    titleAr: 'التحليل الاستراتيجي',
    titleEn: 'Strategic review',
    timeAr: 'يوم واحد',
    timeEn: 'One day',
    descAr: 'نراجع تفاصيل مشروعك ونقارنها بأفضل الأساليب المناسبة حتى نحدد مسار التنفيذ بثقة.',
    descEn: 'We review your project details against the right delivery approach so we can define the execution path with confidence.',
  },
  {
    icon: MessageSquareText,
    titleAr: 'الاجتماع المعماري',
    titleEn: 'Architecture session',
    timeAr: 'العمل المشترك',
    timeEn: 'Collaborative phase',
    descAr: 'نجلس معًا لوضع الخطوط العريضة للهيكلة البصرية والهندسية حتى تتوحد الرؤية من البداية.',
    descEn: 'We align on the visual and technical structure early so the vision stays consistent from day one.',
  },
  {
    icon: Workflow,
    titleAr: 'مرحلة التصنيع',
    titleEn: 'Build phase',
    timeAr: 'أيام/أسابيع',
    timeEn: 'Days / weeks',
    descAr: 'نطوّر الواجهات، نضيف الحركة المناسبة، ونبني الأنظمة الخلفية بأسلوب متقن وقابل للتوسع.',
    descEn: 'We build the interface, add the right motion, and ship the supporting systems in a polished scalable way.',
  },
  {
    icon: ShieldCheck,
    titleAr: 'الإطلاق والدعم',
    titleEn: 'Launch and support',
    timeAr: 'الإصدار النهائي',
    timeEn: 'Final release',
    descAr: 'نطلق المشروع بعد اختبارات السرعة والأمان ونبقى معك لضمان الاستقرار بعد النشر.',
    descEn: 'We launch after performance and security checks, then stay close to make sure the release remains stable.',
  },
];

const socialProofStats = [
  { icon: Rocket, valueAr: '180+', valueEn: '180+', labelAr: 'مشروع مكتمل', labelEn: 'Completed projects' },
  { icon: Clock, valueAr: '< 24h', valueEn: '< 24h', labelAr: 'متوسط وقت الرد', labelEn: 'Average response time' },
  { icon: ShieldCheck, valueAr: '3 أشهر', valueEn: '3 mo', labelAr: 'دعم مجاني بعد الإطلاق', labelEn: 'Free post-launch support' },
  { icon: Star, valueAr: '100%', valueEn: '100%', labelAr: 'تقييم عملاء ممتاز', labelEn: 'Excellent client rating' },
];

const contactFaqs = [
  {
    qAr: 'هل الاستشارة مجانية؟',
    qEn: 'Is the consultation free?',
    aAr: 'نعم تمامًا. أول جلسة استشارية لمدة 15 إلى 30 دقيقة مجانية بالكامل ولا تُلزمك بأي شيء.',
    aEn: 'Yes. The first 15 to 30 minute consultation is completely free and comes with no obligation.',
  },
  {
    qAr: 'كم يستغرق تنفيذ الموقع؟',
    qEn: 'How long does delivery usually take?',
    aAr: 'يعتمد ذلك على الحجم. صفحة مستقلة تستغرق عادة 5 إلى 7 أيام، والموقع الكامل 2 إلى 4 أسابيع، والمنصة المتكاملة قد تحتاج شهرًا أو أكثر.',
    aEn: 'It depends on scope. A standalone page usually takes 5 to 7 days, a full site 2 to 4 weeks, and a full platform may take a month or more.',
  },
  {
    qAr: 'هل تعملون مع عملاء خارج المنطقة؟',
    qEn: 'Do you work with clients outside the region?',
    aAr: 'نعم، نعمل مع عملاء في الشرق الأوسط وشمال أفريقيا إلى جانب بعض العملاء الدوليين.',
    aEn: 'Yes. We work across the Middle East and North Africa in addition to selected international clients.',
  },
  {
    qAr: 'ماذا يحدث بعد تسليم المشروع؟',
    qEn: 'What happens after launch?',
    aAr: 'تحصل على 90 يوم دعم فني لإصلاح الأخطاء أو تنفيذ التعديلات الصغيرة بدون تكلفة إضافية.',
    aEn: 'You get 90 days of technical support for bug fixes and small refinements at no extra cost.',
  },
  {
    qAr: 'هل يمكن تعديل الموقع بسهولة بعد الإطلاق؟',
    qEn: 'Can the site be updated easily after launch?',
    aAr: 'نعم، نبني مع CMS أو نسلّمك لوحة تحكم مناسبة حتى تتمكن من إدارة المحتوى بسهولة.',
    aEn: 'Yes. We can build with a CMS or provide the right dashboard so you can manage content easily.',
  },
  {
    qAr: 'ما طرق الدفع المتاحة؟',
    qEn: 'Which payment methods do you accept?',
    aAr: 'نقبل التحويل البنكي وPayPal وطرق الدفع الدولية المناسبة، وعادة يكون الدفع 50% عند البدء و50% عند التسليم.',
    aEn: 'We accept bank transfers, PayPal, and suitable international payment methods. Typical terms are 50% to start and 50% on delivery.',
  },
];

const ContactPage = () => {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isArabic = lang === 'ar';
  const content = {
    signal: isArabic ? 'تم استقبال الإشارة بوضوح' : 'Signal Received Loud & Clear',
    heroTitleLine1: isArabic ? 'هل أنت جاهز لصناعة' : 'Are you ready to build',
    heroTitleLine2: isArabic ? 'التغيير الجذري؟' : 'the real shift?',
    heroDescription: isArabic
      ? 'نحن لا نقبل المشاريع العادية. إذا كنت تبحث عن واجهة تلفت الانتباه وبنية قوية قابلة للنمو، فأنت في المكان الصحيح.'
      : 'We do not take on ordinary work. If you want a striking interface backed by strong scalable foundations, you are in the right place.',
    directChannels: isArabic ? 'قنوات الاتصال المباشرة' : 'Direct channels',
    whatAreYouLookingFor: isArabic ? 'ما الذي تبحث عنه؟' : 'What are you looking for?',
    formTitle: isArabic ? 'أرسل إشعار البدء' : 'Send the kickoff signal',
    formDescription: isArabic
      ? 'أخبرنا بما يدور في ذهنك وسنعود إليك بخطة عمل واضحة ومناسبة.'
      : 'Tell us what you are planning and we will reply with a clear practical next step.',
    nameLabel: isArabic ? 'الاسم والصفة' : 'Name and role',
    emailLabel: isArabic ? 'البريد الإلكتروني للعمل' : 'Work email',
    projectLabel: isArabic ? 'اسم المؤسسة أو المشروع' : 'Company or project name',
    detailsLabel: isArabic
      ? 'حدثنا عن الرؤية، الأهداف، وأي مواقع تعجبك بأسلوبها...'
      : 'Tell us about the vision, goals, and any sites whose style you like...',
    loadingLabel: isArabic ? 'جاري تحليل الإرسال...' : 'Analyzing your request...',
    successLabel: isArabic ? 'تم إطلاق الإشارة بنجاح' : 'Signal sent successfully',
    submitLabel: isArabic ? 'إطلاق المشروع' : 'Launch the project',
    workflowDescription: isArabic
      ? 'شفافية تامة حتى تعرف بالضبط متى وكيف سنحوّل الفكرة إلى منصة حقيقية.'
      : 'Full clarity so you know exactly when and how the idea moves into a real platform.',
    workflowKicker: isArabic ? 'الجدول التنفيذي' : 'Execution Timeline',
    workflowTitle: isArabic ? 'من الإرسال إلى الإطلاق' : 'From first message to launch',
    faqTitle: isArabic ? 'أسئلة شائعة قبل التواصل' : 'Common questions before we talk',
  };
  const labelAlignmentClass = isArabic ? 'right-0 text-right' : 'left-0 text-left';

  usePageMetadata(getPageSeoByPath('/contact', lang));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Fake complex payload process
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    window.setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative pb-24 pt-14 md:pt-20 min-h-screen overflow-hidden">
      
      {/* Background World Orb Effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] pointer-events-none z-[-1]">
         <motion.div 
           animate={{ rotate: 360 }} 
           transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
           className="w-full h-full rounded-full border-[100px] border-cyan-900/5 mix-blend-screen blur-3xl opacity-50"
         />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Massive Contact Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-500/20 rounded-full blur-[80px]"
          />
          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md mb-8"
          >
             <Orbit className="w-5 h-5 text-cyan-400 animate-spin-slow" />
             <span className="font-medium tracking-wide">{content.signal}</span>
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-3xl sm:text-5xl md:text-[6rem] font-display font-bold text-white leading-tight md:leading-[1.1] tracking-tighter"
          >
             {content.heroTitleLine1} <br className="hidden md:block"/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-400">{content.heroTitleLine2}</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl md:text-2xl mt-8 text-slate-400 leading-relaxed font-medium"
          >
            {content.heroDescription}
          </motion.p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_1.3fr] items-start mb-16 md:mb-32">
          
          {/* Methods & Info */}
          <div className="space-y-10">
            <div className="glass-card p-6 md:p-10 rounded-3xl md:rounded-[3rem] border-white/10 bg-[#06090f]/60 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-1000" />
               <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">{content.directChannels}</h3>
               
               <div className="space-y-6 relative z-10">
                 {contactCards.map((card, idx) => (
                   <motion.a 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     href={card.href} 
                     key={idx}
                     className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group/item"
                   >
                     <div className={`p-4 rounded-full bg-gradient-to-bl ${card.color} text-[#06090f] shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover/item:scale-110 transition-transform duration-300`}>
                       <card.icon className="w-6 h-6" />
                     </div>
                     <div>
                       <p className="text-slate-400 text-sm tracking-widest uppercase mb-1">{lang === 'ar' ? card.titleAr : card.titleEn}</p>
                       <p className="text-xl font-bold text-white">{isArabic ? card.valueAr : card.valueEn}</p>
                     </div>
                   </motion.a>
                 ))}
               </div>
            </div>

            {/* Interest Tags */}
            <div>
               <h3 className="text-slate-500 font-semibold uppercase tracking-widest mb-4">{content.whatAreYouLookingFor}</h3>
               <div className="flex flex-wrap gap-3">
                  {inquiryTypes.map(tag => (
                     <span key={tag.ar} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 cursor-default transition-all duration-300 backdrop-blur-sm">
                       {lang === 'ar' ? tag.ar : tag.en}
                     </span>
                  ))}
               </div>
            </div>
          </div>

          {/* HIGH-END INTERACTIVE FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="surface-card-strong rounded-3xl md:rounded-[3rem] p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative"
          >
             {/* Neon top border */}
             <div className="absolute top-0 inset-x-6 md:inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
             
             <div className="mb-10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{content.formTitle}</h2>
               <p className="text-slate-400 text-base md:text-lg">{content.formDescription}</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                   {/* Custom Input Structure */}
                   <div className="relative group">
                     <input type="text" required id="name" className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-xl text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent" placeholder="Name" />
                     <label htmlFor="name" className={`absolute top-4 text-slate-500 text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-slate-400 ${labelAlignmentClass}`}>{content.nameLabel}</label>
                   </div>
                   <div className="relative group">
                     <input type="email" required id="email" className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-xl text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent" placeholder="Email" />
                     <label htmlFor="email" className={`absolute top-4 text-slate-500 text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-slate-400 ${labelAlignmentClass}`}>{content.emailLabel}</label>
                   </div>
                </div>

                <div className="relative group pt-4">
                   <input type="text" required id="project" className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-xl text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent" placeholder="Project" />
                   <label htmlFor="project" className={`absolute top-8 text-slate-500 text-lg transition-all duration-300 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:top-0 peer-valid:text-sm peer-valid:text-slate-400 ${labelAlignmentClass}`}>{content.projectLabel}</label>
                </div>

                <div className="relative group pt-4">
                   <textarea required id="details" rows={4} className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-xl text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent resize-none leading-relaxed" placeholder="Details" />
                   <label htmlFor="details" className={`absolute top-8 text-slate-500 text-lg transition-all duration-300 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:top-0 peer-valid:text-sm peer-valid:text-slate-400 ${labelAlignmentClass}`}>{content.detailsLabel}</label>
                </div>

                <div className="pt-6">
                   <button 
                     type="submit" 
                     disabled={isSubmitting || isSubmitted}
                     className={`w-full py-6 rounded-2xl flex items-center justify-center gap-3 text-xl font-bold transition-all duration-500 shadow-[0_15px_30px_rgba(45,212,191,0.2)] hover:shadow-[0_20px_40px_rgba(45,212,191,0.4)] hover:-translate-y-1 ${isSubmitted ? 'bg-emerald-500 text-[#06090f]' : 'bg-gradient-to-r from-cyan-400 to-teal-400 text-[#06090f]'}`}
                   >
                     <AnimatePresence mode="wait">
                       {isSubmitting ? (
                         <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                           <Loader2 className="w-6 h-6 animate-spin" /> {content.loadingLabel}
                         </motion.div>
                       ) : isSubmitted ? (
                         <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-3">
                           <CheckCircle className="w-7 h-7" /> {content.successLabel}
                         </motion.div>
                       ) : (
                         <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                           <Send className="w-6 h-6" /> {content.submitLabel}
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </button>
                </div>
             </form>
          </motion.div>
        </div>



        {/* WORKFLOW ROADMAP */}
        <div className="mb-12 md:mb-20">
          <SectionTitle
            description={content.workflowDescription}
            kicker={content.workflowKicker}
            title={content.workflowTitle}
          />
          <div className="mt-10 md:mt-16 grid gap-4 md:gap-6 md:grid-cols-4">
             {workflowSteps.map((step, idx) => (
                <motion.div 
                  key={step.titleEn}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                   transition={{ delay: idx * 0.15 }}
                  className="surface-card rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-white/5 relative overflow-hidden group"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-2xl group-hover:bg-cyan-400/20 transition-colors duration-500" />
                   <div className="mb-6 p-4 rounded-2xl bg-[#06090f] border border-white/10 w-fit text-cyan-400 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                     <step.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">{isArabic ? step.titleAr : step.titleEn}</h3>
                   <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full text-slate-300 block w-fit mb-4">{isArabic ? step.timeAr : step.timeEn}</span>
                   <p className="text-slate-400 leading-relaxed">{isArabic ? step.descAr : step.descEn}</p>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Social Proof Strip */}
        <div className="mt-14 md:mt-20 border-y border-white/5 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {socialProofStats.map((item, i) => (
              <motion.div
                key={item.labelEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 py-6 border-l border-white/5 first:border-l-0 group"
              >
                <div className="p-3 rounded-full bg-cyan-400/10 text-cyan-400 mb-2 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="font-display text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">{isArabic ? item.valueAr : item.valueEn}</p>
                <p className="text-slate-500 text-xs text-center">{isArabic ? item.labelAr : item.labelEn}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Contact Specific */}
        <div className="mt-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10 text-center">{content.faqTitle}</h2>
          <div className="grid gap-5 md:grid-cols-2 max-w-5xl mx-auto">
            {contactFaqs.map((faq, i) => (
              <motion.div
                key={faq.qEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-3xl md:rounded-[2rem] p-6 md:p-7 border border-white/8 group hover:border-cyan-400/20 transition-all"
              >
                <p className="font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{isArabic ? faq.qAr : faq.qEn}</p>
                <p className="text-slate-400 text-sm leading-7">{isArabic ? faq.aAr : faq.aEn}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
