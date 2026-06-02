import type { FC } from 'react';
import { AllSubPagesOverview } from '../components/SubPagesOverview';

const SubPagesPortalPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              بوابة الصفحات الفرعية الشاملة
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              نظام متقدم يتضمن <span className="text-cyan-400 font-semibold">35+ صفحة فرعية احترافية</span> موزعة على 5 أقسام رئيسية
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">7</div>
                <div className="text-xs text-slate-400">صفحات الخدمات</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">7</div>
                <div className="text-xs text-slate-400">صفحات المشاريع</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">7</div>
                <div className="text-xs text-slate-400">صفحات المدونة</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">5</div>
                <div className="text-xs text-slate-400">صفحات الفريق</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">5</div>
                <div className="text-xs text-slate-400">صفحات التسعير</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Overview Component */}
      <AllSubPagesOverview />

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            نظام صفحات فرعية متطور وشامل
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            كل صفحة فرعية مصممة بعناية شديدة مع محتوى احترافي وواجهة مستخدم متقدمة
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all">
              ابدأ الاستكشاف
            </button>
            <button className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all">
              اتصل بنا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPagesPortalPage;
