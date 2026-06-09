import type { FC } from 'react';

import { AllSubPagesOverview } from '../components/SubPagesOverview';
import { useLanguage } from '../hooks/useLanguage';

const SubPagesPortalPage: FC = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              {isArabic ? 'بوابة الصفحات الفرعية' : 'Sub pages portal'}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              {isArabic
                ? 'استعرض الأقسام الفرعية المهمة من مكان واحد واختر المسار الأقرب لقرار شركتك.'
                : 'Review the important sub sections in one place and choose the path closest to your company decision.'}
            </p>
          </div>
        </div>
      </div>

      <AllSubPagesOverview />
    </div>
  );
};

export default SubPagesPortalPage;
