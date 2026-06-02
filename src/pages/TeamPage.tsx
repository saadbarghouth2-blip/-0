import { motion, AnimatePresence } from 'framer-motion';
import { Users2, Award, Calendar, RefreshCw, Linkedin, Globe, Cpu, Trophy, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';
import { cn } from '../lib/utils';

const teamMembers = [
  {
    id: 1,
    nameAr: 'م. سعد السيد',
    nameEn: 'Saad Elsayed',
    roleAr: 'المؤسس ورئيس قسم التكنولوجيا CTO',
    roleEn: 'Founder & Chief Technology Officer',
    department: 'engineering',
    avatar: 'S', // initials fallback
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { nameAr: 'هندسة بنية البرمجيات', nameEn: 'Software Architecture', val: 98 },
      { nameAr: 'ريأكت والويب التفاعلي', nameEn: 'React & Next.js Ecosystem', val: 96 },
      { nameAr: 'سيرفرات وقواعد بيانات', nameEn: 'Node.js & MongoDB Systems', val: 94 }
    ],
    bioAr: 'خبير تطوير برمجيات وهندسة الويب بخبرة تفوق الـ ٨ سنوات في تخطيط وبناء المنظمات السحابية.',
    bioEn: 'Senior Software Engineer with 8+ years experience planning and building cloud architectures.'
  },
  {
    id: 2,
    nameAr: 'إسراء محروس',
    nameEn: 'Esraa Mahrous',
    roleAr: 'شريك مؤسس ومديرة التصميم UX Lead',
    roleEn: 'Co-Founder & Lead Product Designer',
    department: 'design',
    avatar: 'E',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { nameAr: 'هندسة واجهات المستخدم', nameEn: 'UI & Interaction Design', val: 96 },
      { nameAr: 'استراتيجيات الهويات الرقمية', nameEn: 'Visual Identity & Branding', val: 94 },
      { nameAr: 'أبحاث ودراسات المستخدم', nameEn: 'User Research & Wireframing', val: 92 }
    ],
    bioAr: 'شغوفة بتصميم واجهات هادئة تعزز التفاعل وتجعل تجربة تصفح المنتجات الرقمية سهلة وبسيطة.',
    bioEn: 'Passionate UX designer focused on creating calm, high-converting digital interfaces.'
  },
  {
    id: 3,
    nameAr: 'م. أحمد السيد',
    nameEn: 'Ahmed Elsayed',
    roleAr: 'مهندس أول واجهات أمامية Senior Frontend',
    roleEn: 'Senior Frontend Developer',
    department: 'engineering',
    avatar: 'A',
    color: 'from-rose-500 to-pink-500',
    skills: [
      { nameAr: 'تهيئة الأداء البرمجي للويب', nameEn: 'Vite & Web Performance', val: 95 },
      { nameAr: 'مكتبات الأنيميشن التفاعلي', nameEn: 'Framer Motion & Canvas', val: 94 },
      { nameAr: 'فحوصات التشغيل التلقائي QA', nameEn: 'TypeScript & End-to-End Tests', val: 90 }
    ],
    bioAr: 'متخصص في تحويل التصاميم الصعبة إلى شاشات تفاعلية فورية التحميل ومثالية على الموبايل.',
    bioEn: 'Specialist in transforming Figma artboards into high-performance responsive web pages.'
  }
];

const departments = ['all', 'design', 'engineering'];
const departmentsAr: Record<string, string> = {
  'all': 'كل التخصصات',
  'design': 'التصميم البصري UX/UI',
  'engineering': 'التطوير وهندسة الكود'
};

const TeamMemberCard = ({ member, isArabic }: { member: typeof teamMembers[0]; isArabic: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  return (
    <div className="perspective-1000 h-[360px] w-full relative">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="w-full h-full transform-style-3d relative"
      >
        {/* Front Side: General profile info */}
        <div className="absolute inset-0 backface-hidden w-full h-full rounded-3xl border border-white/10 bg-[#06090f]/75 p-6 flex flex-col justify-between shadow-xl">
          <div className="flex justify-between items-start">
            {/* Avatar Circle with initials */}
            <div className={cn(
              "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center font-black text-xl text-white shadow-lg",
              member.color
            )}>
              {member.avatar}
            </div>

            <button 
              onClick={() => setIsFlipped(true)}
              className="text-[10px] text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-cyan-500/20"
            >
              <RefreshCw className="h-3 w-3" />
              {text('استعراض المهارات', 'Show Skills')}
            </button>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="font-display text-lg font-bold text-white">
              {text(member.nameAr, member.nameEn)}
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              {text(member.roleAr, member.roleEn)}
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed font-body">
              {text(member.bioAr, member.bioEn)}
            </p>
          </div>

          {/* Social connections */}
          <div className="border-t border-white/5 pt-4 flex gap-3 text-slate-500 text-xs">
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Globe className="h-3.5 w-3.5" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>

        {/* Back Side: Skills Details */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden w-full h-full rounded-3xl border border-cyan-400/20 bg-[#080d15] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex justify-between items-center mb-5">
              <h4 className="font-display text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Cpu className="h-4 w-4" />
                {text('الخبرات والمهارات الحية', 'Expertise Metrics')}
              </h4>
              <button 
                onClick={() => setIsFlipped(false)}
                className="text-[10px] text-slate-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" />
                {text('العودة للبروفايل', 'Show Profile')}
              </button>
            </div>

            {/* Custom SVG Skills Bars */}
            <div className="space-y-4">
              {member.skills.map((skill, i) => (
                <div key={i} className="text-xs space-y-1.5">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-300">
                    <span className="font-body">{text(skill.nameAr, skill.nameEn)}</span>
                    <span className="text-cyan-400 font-bold">{skill.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: isFlipped ? `${skill.val}%` : 0 }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full bg-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">Scope</p>
            <p className="text-xs font-semibold text-white">{text(departmentsAr[member.department], member.department)}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TeamPage = () => {
  const { lang, localizePath } = useLanguage();
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => (isArabic ? arabic : english);

  const [selectedDept, setSelectedDept] = useState('all');

  const filteredMembers = teamMembers.filter((item) => {
    return selectedDept === 'all' || item.department === selectedDept;
  });

  usePageMetadata(getPageSeoByPath('/team', lang));

  return (
    <div className="relative pt-10 pb-16 md:pt-24 md:pb-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-cyan-600/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-violet-600/10 blur-[200px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-6">
            <Users2 className="h-5 w-5 text-cyan-400" />
            {text('الفريق المتخصص والمطور بنطق', 'Boutique Specialist Team')}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {text('عقول مبدعة تصمم،', 'Creative minds designing,')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {text('وتطور حلول المستقبل الرقمي', 'coding & building your future')}
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto">
            {text(
              'فريق من المصممين والمهندسين الذين يعشقون التفاصيل والسرعة وتجاوب الأكواد البرمجية.',
              'Boutique design and development team passionate about interface metrics, load speed, and clean code.'
            )}
          </p>
        </motion.div>

        {/* Team Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="surface-card rounded-2xl p-5 border border-white/10 text-center">
            <Award className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
            <h4 className="text-2xl font-black text-white">+١٥</h4>
            <p className="text-xs text-slate-500 mt-1 font-semibold">{text('شراكة استراتيجية كبرى', 'Enterprise Partnerships')}</p>
          </div>

          <div className="surface-card rounded-2xl p-5 border border-white/10 text-center">
            <Calendar className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
            <h4 className="text-2xl font-black text-white">+٨ سنوات</h4>
            <p className="text-xs text-slate-500 mt-1 font-semibold">{text('متوسط خبرة الأعضاء', 'Avg Years of Experience')}</p>
          </div>

          <div className="surface-card rounded-2xl p-5 border border-white/10 text-center">
            <Trophy className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
            <h4 className="text-2xl font-black text-white">١٨٠+ مخرجات</h4>
            <p className="text-xs text-slate-500 mt-1 font-semibold">{text('تم تسليمها للشركات', 'Delivered digital assets')}</p>
          </div>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={cn(
                "px-4.5 py-2 rounded-full text-xs font-bold transition-all border",
                selectedDept === dept 
                  ? "bg-cyan-500/10 border-cyan-400 text-cyan-300 font-bold" 
                  : "bg-white/5 border-white/5 text-slate-400 hover:border-cyan-400/50 hover:text-white"
              )}
            >
              {text(departmentsAr[dept] || dept, dept)}
            </button>
          ))}
        </div>

        {/* Members Grid layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full"
              >
                <TeamMemberCard member={member} isArabic={isArabic} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Join our team CTA */}
        <div className="rounded-[2.2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/5 via-white/[0.02] to-violet-500/5 p-6 md:p-10 text-center backdrop-blur-md">
          <Star className="h-8 w-8 text-cyan-400 mx-auto mb-4 animate-pulse-glow" />
          <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
            {text('تريد الانضمام لفريق نطق؟', 'Want to build with Notaq?')}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-6">
            {text('نبحث دائماً عن مصممين برمجيات ومطوري فرونت إند من الشغوفين بكتابة كود نظيف وتجارب ويب هادئة وبسيطة.', 'We are always looking for passionate engineers and UX designers who care about software metrics and clean layouts.')}
          </p>

          <Link 
            to={localizePath('/careers')}
            className="btn-primary inline-flex items-center gap-1.5 text-xs text-black font-bold"
          >
            {text('استكشف الفرص الوظيفية المتاحة', 'Browse Careers & Open Positions')}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TeamPage;
