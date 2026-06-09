import { useState } from 'react';
import type { FC } from 'react';
import { ArrowRight, Search } from 'lucide-react';

import { SubServicesList } from '../components/SubServiceCard';
import { SubServiceDetailPage } from '../components/SubServiceDetailPage';
import { subServicesData } from '../data/subServicesData';
import { useLanguage } from '../hooks/useLanguage';
import { repairMojibake } from '../lib/repairText';

const SubServicesPage: FC = () => {
  const { lang } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const isArabic = lang === 'ar';
  const text = (arabic: string, english: string) => repairMojibake(isArabic ? arabic : english);

  if (selectedService) {
    const service = subServicesData[selectedService];

    if (service) {
      return (
        <div>
          <button
            onClick={() => setSelectedService(null)}
            className="fixed top-24 right-6 z-50 flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-300 transition-colors hover:border-cyan-500 hover:text-cyan-400"
          >
            <ArrowRight className="h-4 w-4" />
            {text('العودة للخدمات', 'Back to services')}
          </button>
          <SubServiceDetailPage service={service} />
        </div>
      );
    }
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredServices = Object.values(subServicesData).filter((service) => {
    if (!normalizedQuery) return true;

    return (
      repairMojibake(service.title.ar).toLowerCase().includes(normalizedQuery) ||
      service.title.en.toLowerCase().includes(normalizedQuery) ||
      repairMojibake(service.shortDescription.ar).toLowerCase().includes(normalizedQuery) ||
      service.shortDescription.en.toLowerCase().includes(normalizedQuery) ||
      service.technologies.some((tech) => tech.toLowerCase().includes(normalizedQuery))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              {text('خدمات نُطق المتخصصة', 'Notaq specialized services')}
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-300">
              {text(
                'اختر المسار الأقرب لاحتياج شركتك واستعرض تفاصيله من مكان واحد.',
                'Choose the track closest to your company need and review its details in one place.',
              )}
            </p>

            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={text('ابحث عن خدمة...', 'Search for a service...')}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-4 pr-12 text-white transition-colors placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {filteredServices.length > 0 ? (
          <SubServicesList services={filteredServices} onViewDetails={setSelectedService} />
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-slate-400">{text('لم نجد خدمات تطابق بحثك', 'No services match your search')}</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-2 text-cyan-400 transition-colors hover:bg-cyan-500/20"
            >
              {text('إعادة تعيين البحث', 'Reset search')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubServicesPage;
