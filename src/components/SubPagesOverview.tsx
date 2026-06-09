import { useState } from 'react';
import type { ComponentType, FC } from 'react';
import { ArrowRight } from 'lucide-react';

import {
  blogSubPages,
  pricingSubPages,
  projectsSubPages,
  servicesSubPages,
  teamSubPages,
} from '../data/subPagesData';
import { useLanguage } from '../hooks/useLanguage';
import { repairMojibake } from '../lib/repairText';

export interface SubSectionCardProps {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: ComponentType<{ className?: string }>;
  type: string;
  onClick?: () => void;
}

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

const typeLabels: Record<string, { ar: string; en: string }> = {
  journey: { ar: 'مسار', en: 'Journey' },
  faq: { ar: 'أسئلة', en: 'FAQ' },
  guide: { ar: 'دليل', en: 'Guide' },
  comparison: { ar: 'مقارنة', en: 'Comparison' },
  cases: { ar: 'حالات', en: 'Cases' },
  specs: { ar: 'مواصفات', en: 'Specs' },
  tips: { ar: 'نصائح', en: 'Tips' },
  survey: { ar: 'استبيان', en: 'Survey' },
  tool: { ar: 'أداة', en: 'Tool' },
  webinar: { ar: 'ندوة', en: 'Webinar' },
  gallery: { ar: 'معرض', en: 'Gallery' },
  categories: { ar: 'تصنيفات', en: 'Categories' },
  culture: { ar: 'ثقافة', en: 'Culture' },
  skills: { ar: 'مهارات', en: 'Skills' },
  careers: { ar: 'فرص', en: 'Careers' },
  calculator: { ar: 'حاسبة', en: 'Calculator' },
  custom: { ar: 'مخصص', en: 'Custom' },
};

export const SubSectionCard: FC<SubSectionCardProps> = ({
  title,
  description,
  icon: Icon,
  type,
  onClick,
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const colors = typeColors[type] || typeColors.guide;
  const label = typeLabels[type] ?? { ar: type, en: type };

  return (
    <div
      onClick={onClick}
      className="interactive-card cursor-pointer overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className={`bg-gradient-to-r ${colors.bg} p-6`}>
        <div className="flex items-center gap-4">
          <div className={`rounded-lg p-3 ${colors.text}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-xl font-bold text-white">
              {repairMojibake(isArabic ? title.ar : title.en)}
            </h3>
            <p className="text-sm text-slate-200">{isArabic ? label.ar : label.en}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="mb-6 line-clamp-2 text-slate-300">
          {repairMojibake(isArabic ? description.ar : description.en)}
        </p>
        <div className="flex justify-end text-cyan-400 hover:text-cyan-300" aria-hidden="true">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

const SectionCards: FC<{
  title: { ar: string; en: string };
  pages: Array<SubSectionCardProps>;
}> = ({ title, pages }) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <div className="space-y-12">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">{isArabic ? title.ar : title.en}</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <SubSectionCard
            key={page.id}
            id={page.id}
            title={page.title}
            description={page.description}
            icon={page.icon}
            type={page.type}
          />
        ))}
      </div>
    </div>
  );
};

export const ServicesSubPagesComponent: FC = () => (
  <SectionCards
    title={{ ar: 'صفحات الخدمات الفرعية', en: 'Service sub pages' }}
    pages={Object.values(servicesSubPages)}
  />
);

export const ProjectsSubPagesComponent: FC = () => (
  <SectionCards
    title={{ ar: 'صفحات المشاريع الفرعية', en: 'Project sub pages' }}
    pages={Object.values(projectsSubPages)}
  />
);

export const BlogSubPagesComponent: FC = () => (
  <SectionCards
    title={{ ar: 'صفحات المدونة الفرعية', en: 'Blog sub pages' }}
    pages={Object.values(blogSubPages)}
  />
);

export const TeamSubPagesComponent: FC = () => (
  <SectionCards
    title={{ ar: 'صفحات الفريق الفرعية', en: 'Team sub pages' }}
    pages={Object.values(teamSubPages)}
  />
);

export const PricingSubPagesComponent: FC = () => (
  <SectionCards
    title={{ ar: 'صفحات التسعير الفرعية', en: 'Pricing sub pages' }}
    pages={Object.values(pricingSubPages)}
  />
);

const sections = [
  { id: 'services', labelAr: 'الخدمات', labelEn: 'Services' },
  { id: 'projects', labelAr: 'المشاريع', labelEn: 'Projects' },
  { id: 'blog', labelAr: 'المدونة', labelEn: 'Blog' },
  { id: 'team', labelAr: 'الفريق', labelEn: 'Team' },
  { id: 'pricing', labelAr: 'التسعير', labelEn: 'Pricing' },
] as const;

export const AllSubPagesOverview: FC = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]['id']>('services');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="sticky top-0 z-40 mx-auto max-w-7xl border-b border-slate-700 bg-slate-900/80 px-6 py-8 backdrop-blur-sm">
        <div className="flex gap-2 overflow-x-auto pb-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`whitespace-nowrap rounded-lg px-6 py-2 font-semibold transition-all ${
                activeSection === section.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {isArabic ? section.labelAr : section.labelEn}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {activeSection === 'services' && <ServicesSubPagesComponent />}
        {activeSection === 'projects' && <ProjectsSubPagesComponent />}
        {activeSection === 'blog' && <BlogSubPagesComponent />}
        {activeSection === 'team' && <TeamSubPagesComponent />}
        {activeSection === 'pricing' && <PricingSubPagesComponent />}
      </div>
    </div>
  );
};
