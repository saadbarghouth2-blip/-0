import type { FC } from 'react';

import { subServicesData, type SubServiceDetail } from '../data/subServicesData';
import { useLanguage } from '../hooks/useLanguage';
import { repairMojibake } from '../lib/repairText';

interface SubServiceCardProps {
  service: SubServiceDetail;
  onViewDetails: (slug: string) => void;
}

export const SubServiceCard: FC<SubServiceCardProps> = ({ service, onViewDetails }) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const title = repairMojibake(isArabic ? service.title.ar : service.title.en);
  const description = repairMojibake(
    isArabic ? service.shortDescription.ar : service.shortDescription.en,
  );

  return (
    <div className="interactive-card overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl">
      <div className="border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 p-6">
        <div className="mb-4 w-fit rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-3">
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>

      <div className="p-6">
        <button
          onClick={() => onViewDetails(service.slug)}
          className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-semibold text-white transition-all duration-200 hover:from-cyan-600 hover:to-blue-600"
        >
          {isArabic ? 'تفاصيل الخدمة' : 'Service details'}
        </button>
      </div>
    </div>
  );
};

export const SubServicesGrid: FC<{ onViewDetails: (slug: string) => void }> = ({ onViewDetails }) => {
  const services = Object.values(subServicesData);

  return <SubServicesList services={services} onViewDetails={onViewDetails} />;
};

export const SubServicesList: FC<{
  services: SubServiceDetail[];
  onViewDetails: (slug: string) => void;
}> = ({ services, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <SubServiceCard key={service.id} service={service} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};
