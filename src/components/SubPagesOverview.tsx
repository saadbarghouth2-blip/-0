import { FC, useState } from 'react';
import { servicesSubPages, projectsSubPages, blogSubPages, teamSubPages, pricingSubPages } from '../data/subPagesData';
import { ArrowRight, Clock, Eye, MessageSquare, Download } from 'lucide-react';

// Generic Sub-Section Card Component
export interface SubSectionCardProps {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: any;
  type: string;
  stats?: Array<{ label: string; value: string | number }>;
  onClick?: () => void;
}

export const SubSectionCard: FC<SubSectionCardProps> = ({ id, title, description, icon: Icon, type, stats, onClick }) => {
  const typeColors: Record<string, { bg: string; text: string }> = {
    journey: { bg: 'from-blue-500 to-cyan-500', text: 'bg-blue-500/10 text-blue-400' },
    faq: { bg: 'from-purple-500 to-indigo-500', text: 'bg-purple-500/10 text-purple-400' },
    guide: { bg: 'from-pink-500 to-rose-500', text: 'bg-pink-500/10 text-pink-400' },
    comparison: { bg: 'from-green-500 to-emerald-500', text: 'bg-green-500/10 text-green-400' },
    cases: { bg: 'from-orange-500 to-amber-500', text: 'bg-orange-500/10 text-orange-400' },
    specs: { bg: 'from-red-500 to-pink-500', text: 'bg-red-500/10 text-red-400' },
    tips: { bg: 'from-yellow-500 to-orange-500', text: 'bg-yellow-500/10 text-yellow-400' },
    survey: { bg: 'from-teal-500 to-cyan-500', text: 'bg-teal-500/10 text-teal-400' },
    tool: { bg: 'from-indigo-500 to-blue-500', text: 'bg-indigo-500/10 text-indigo-400' },
    webinar: { bg: 'from-violet-500 to-purple-500', text: 'bg-violet-500/10 text-violet-400' },
    gallery: { bg: 'from-cyan-500 to-blue-500', text: 'bg-cyan-500/10 text-cyan-400' },
    showcase: { bg: 'from-fuchsia-500 to-pink-500', text: 'bg-fuchsia-500/10 text-fuchsia-400' },
    categories: { bg: 'from-lime-500 to-green-500', text: 'bg-lime-500/10 text-lime-400' },
    challenges: { bg: 'from-red-500 to-orange-500', text: 'bg-red-500/10 text-red-400' },
    results: { bg: 'from-green-500 to-teal-500', text: 'bg-green-500/10 text-green-400' },
    reviews: { bg: 'from-yellow-500 to-amber-500', text: 'bg-yellow-500/10 text-yellow-400' },
    trends: { bg: 'from-pink-500 to-rose-500', text: 'bg-pink-500/10 text-pink-400' },
    resources: { bg: 'from-purple-500 to-violet-500', text: 'bg-purple-500/10 text-purple-400' },
    culture: { bg: 'from-red-500 to-pink-500', text: 'bg-red-500/10 text-red-400' },
    skills: { bg: 'from-yellow-500 to-orange-500', text: 'bg-yellow-500/10 text-yellow-400' },
    achievements: { bg: 'from-amber-500 to-orange-500', text: 'bg-amber-500/10 text-amber-400' },
    careers: { bg: 'from-green-500 to-emerald-500', text: 'bg-green-500/10 text-green-400' },
    calculator: { bg: 'from-blue-500 to-cyan-500', text: 'bg-blue-500/10 text-blue-400' },
    custom: { bg: 'from-purple-500 to-indigo-500', text: 'bg-purple-500/10 text-purple-400' },
    upgrades: { bg: 'from-pink-500 to-rose-500', text: 'bg-pink-500/10 text-pink-400' },
    offers: { bg: 'from-yellow-500 to-orange-500', text: 'bg-yellow-500/10 text-yellow-400' },
    experts: { bg: 'from-amber-500 to-orange-500', text: 'bg-amber-500/10 text-amber-400' },
  };

  const colors = typeColors[type] || typeColors.guide;

  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${colors.bg} p-6`}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${colors.text}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{title.ar}</h3>
            <p className="text-slate-200 text-sm">{type}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-300 mb-6 line-clamp-2">{description.ar}</p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-cyan-400">{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between text-cyan-400 hover:text-cyan-300">
          <span className="text-sm font-semibold">اكتشف المزيد</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

// ==================== SERVICES SUB-PAGES ====================
export const ServicesSubPagesComponent: FC = () => {
  const [activeType, setActiveType] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">صفحات الخدمات الفرعية</h2>
        <p className="text-xl text-slate-300">7 صفحات فرعية احترافية لكل خدمة</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(servicesSubPages).map((page) => (
          <SubSectionCard
            key={page.id}
            id={page.id}
            title={page.title}
            description={page.description}
            icon={page.icon}
            type={page.type}
            stats={
              page.content?.statistics
                ? page.content.statistics.map((stat: any) => ({
                    label: stat.label,
                    value: stat.value,
                  }))
                : undefined
            }
          />
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-blue-500/10 border border-blue-500 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">ماذا تتضمن صفحات الخدمات الفرعية؟</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-2">📍 رحلة الاختيار</h4>
            <p className="text-slate-300">رحلة تفاعلية خطوة بخطوة</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">❓ أسئلة شائعة</h4>
            <p className="text-slate-300">87+ سؤال شائع</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">📚 دليل شامل</h4>
            <p className="text-slate-300">دليل 45+ دقيقة قراءة</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">📊 مقارنات</h4>
            <p className="text-slate-300">جدول مقارنة شامل</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">🎯 حالات دراسية</h4>
            <p className="text-slate-300">280+ حالة ناجحة</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">⚙️ معايير فنية</h4>
            <p className="text-slate-300">مواصفات دقيقة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== PROJECTS SUB-PAGES ====================
export const ProjectsSubPagesComponent: FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">صفحات المشاريع الفرعية</h2>
        <p className="text-xl text-slate-300">7 طرق مختلفة لاستعراض المشاريع</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(projectsSubPages).map((page) => (
          <SubSectionCard
            key={page.id}
            id={page.id}
            title={page.title}
            description={page.description}
            icon={page.icon}
            type={page.type}
            stats={
              page.content?.totalItems
                ? [{ label: 'إجمالي', value: page.content.totalItems }]
                : page.content?.totalCases
                  ? [{ label: 'إجمالي', value: page.content.totalCases }]
                  : undefined
            }
          />
        ))}
      </div>

      {/* Features */}
      <div className="bg-green-500/10 border border-green-500 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">مميزات صفحات المشاريع</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">🖼️</div>
            <div>
              <h4 className="font-semibold text-white">معرض مرئي</h4>
              <p className="text-slate-300">500+ صورة وفيديو</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🏆</div>
            <div>
              <h4 className="font-semibold text-white">أفضل المشاريع</h4>
              <p className="text-slate-300">ترتيب حسب الأداء</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📈</div>
            <div>
              <h4 className="font-semibold text-white">النتائج والإحصائيات</h4>
              <p className="text-slate-300">بيانات شاملة وأرقام</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">⭐</div>
            <div>
              <h4 className="font-semibold text-white">التقييمات</h4>
              <p className="text-slate-300">2840+ تقييم عملاء</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== BLOG SUB-PAGES ====================
export const BlogSubPagesComponent: FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">صفحات المدونة الفرعية</h2>
        <p className="text-xl text-slate-300">7 طرق لاستعراض وتصفح المقالات</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(blogSubPages).map((page) => (
          <SubSectionCard
            key={page.id}
            id={page.id}
            title={page.title}
            description={page.description}
            icon={page.icon}
            type={page.type}
            stats={
              page.content?.totalArticles
                ? [{ label: 'مقالات', value: page.content.totalArticles }]
                : page.content?.totalWebinars
                  ? [{ label: 'ويبينارات', value: page.content.totalWebinars }]
                  : undefined
            }
          />
        ))}
      </div>

      {/* Highlight */}
      <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500 rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">أنواع المحتوى</h3>
            <ul className="space-y-2 text-slate-300">
              <li>✅ 1240+ مقالة متخصصة</li>
              <li>✅ 12 فئة رئيسية</li>
              <li>✅ اتجاهات يومية</li>
              <li>✅ 25+ دليل شامل</li>
              <li>✅ 145 ويبينار مسجل</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">الإحصائيات</h3>
            <ul className="space-y-2 text-slate-300">
              <li>📊 500K+ مشاهدة شهرياً</li>
              <li>⏱️ متوسط القراءة: 12 دقيقة</li>
              <li>👥 معدل الانخراط: 84%</li>
              <li>💬 2.5K+ تعليق</li>
              <li>🔖 12K+ حفظ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== TEAM SUB-PAGES ====================
export const TeamSubPagesComponent: FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">صفحات الفريق الفرعية</h2>
        <p className="text-xl text-slate-300">5 أقسام لاستكشاف الفريق</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(teamSubPages).map((page) => (
          <SubSectionCard
            key={page.id}
            id={page.id}
            title={page.title}
            description={page.description}
            icon={page.icon}
            type={page.type}
            stats={
              page.content?.totalExperts
                ? [{ label: 'خبراء', value: page.content.totalExperts }]
                : page.content?.totalOpenPositions
                  ? [{ label: 'وظائف', value: page.content.totalOpenPositions }]
                  : undefined
            }
          />
        ))}
      </div>

      {/* Team Stats */}
      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-8">الفريق بالأرقام</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-4xl font-bold text-red-400 mb-2">120+</p>
            <p className="text-slate-300">متخصص</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-400 mb-2">450+</p>
            <p className="text-slate-300">سنة خبرة</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-400 mb-2">200+</p>
            <p className="text-slate-300">شهادة</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-400 mb-2">96%</p>
            <p className="text-slate-300">رضا عملاء</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== PRICING SUB-PAGES ====================
export const PricingSubPagesComponent: FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">صفحات التسعير الفرعية</h2>
        <p className="text-xl text-slate-300">5 أدوات للعثور على الخطة المناسبة</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(pricingSubPages).map((page) => (
          <SubSectionCard
            key={page.id}
            id={page.id}
            title={page.title}
            description={page.description}
            icon={page.icon}
            type={page.type}
            stats={
              page.content?.calculationsPeek
                ? [{ label: 'حسابات', value: page.content.calculationsPeek }]
                : page.content?.totalPlans
                  ? [{ label: 'خطط', value: page.content.totalPlans }]
                  : undefined
            }
          />
        ))}
      </div>

      {/* Pricing Info */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">أدوات وخيارات التسعير</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🧮</div>
            <div>
              <h4 className="font-semibold text-white">حاسبة السعر الذكية</h4>
              <p className="text-slate-300">احسب السعر بدقة حسب احتياجاتك</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl">📊</div>
            <div>
              <h4 className="font-semibold text-white">مقارنة الخطط</h4>
              <p className="text-slate-300">قارن 15 خطة تسعير مختلفة</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl">✨</div>
            <div>
              <h4 className="font-semibold text-white">خطط مخصصة</h4>
              <p className="text-slate-300">احصل على خطة حسب احتياجاتك الفريدة</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl">⬆️</div>
            <div>
              <h4 className="font-semibold text-white">الترقيات والإضافات</h4>
              <p className="text-slate-300">24 خيار ترقية و إضافة</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎁</div>
            <div>
              <h4 className="font-semibold text-white">عروض خاصة</h4>
              <p className="text-slate-300">خصومات وعروض محدودة الوقت</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export all components
export const AllSubPagesOverview: FC = () => {
  const [activeSection, setActiveSection] = useState<'services' | 'projects' | 'blog' | 'team' | 'pricing'>('services');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8 sticky top-0 z-40 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="flex gap-2 overflow-x-auto pb-4">
          {['services', 'projects', 'blog', 'team', 'pricing'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section as any)}
              className={`px-6 py-2 font-semibold whitespace-nowrap rounded-lg transition-all ${
                activeSection === section
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {section === 'services' && 'الخدمات'}
              {section === 'projects' && 'المشاريع'}
              {section === 'blog' && 'المدونة'}
              {section === 'team' && 'الفريق'}
              {section === 'pricing' && 'التسعير'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeSection === 'services' && <ServicesSubPagesComponent />}
        {activeSection === 'projects' && <ProjectsSubPagesComponent />}
        {activeSection === 'blog' && <BlogSubPagesComponent />}
        {activeSection === 'team' && <TeamSubPagesComponent />}
        {activeSection === 'pricing' && <PricingSubPagesComponent />}
      </div>
    </div>
  );
};
