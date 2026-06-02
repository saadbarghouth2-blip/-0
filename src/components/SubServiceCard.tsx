import type { FC } from 'react';
import { subServicesData } from '../data/subServicesData';
import type { SubServiceDetail } from '../data/subServicesData';
import { CheckCircle, X, Check } from 'lucide-react';

interface SubServiceCardProps {
  service: SubServiceDetail;
  onViewDetails: (slug: string) => void;
}

export const SubServiceCard: FC<SubServiceCardProps> = ({ service, onViewDetails }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-cyan-500">
      {/* Header */}
      <div className="p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-750">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
            <service.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
            متاح الآن
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title.ar}</h3>
        <p className="text-slate-300 text-sm">{service.shortDescription.ar}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-6 py-4 bg-slate-800/50 border-b border-slate-700">
        <div className="text-center">
          <div className="text-lg font-bold text-cyan-400">{service.caseStudies.length}</div>
          <div className="text-xs text-slate-400">دراسات حالة</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-cyan-400">{service.team.length}</div>
          <div className="text-xs text-slate-400">متخصصين</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-cyan-400">{service.pricingTiers.length}</div>
          <div className="text-xs text-slate-400">خطط</div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="p-6 space-y-2">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{feature.title.ar}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="text-xs text-slate-400 pt-2">+ {service.features.length - 3} ميزات إضافية</div>
        )}
      </div>

      {/* CTA */}
      <div className="p-6 border-t border-slate-700 flex gap-3">
        <button
          onClick={() => onViewDetails(service.slug)}
          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          تفاصيل كاملة
        </button>
        <button className="px-4 py-2 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors">
          استشارة
        </button>
      </div>
    </div>
  );
};

export const SubServicesGrid: FC<{ onViewDetails: (slug: string) => void }> = ({ onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.values(subServicesData).map((service) => (
        <SubServiceCard key={service.id} service={service} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};
