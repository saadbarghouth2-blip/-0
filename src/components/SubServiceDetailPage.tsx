import { useState } from 'react';
import type { FC } from 'react';
import { Check, X } from 'lucide-react';

import type { SubServiceCase, SubServiceDetail } from '../data/subServicesData';
import { useLanguage } from '../hooks/useLanguage';
import { repairMojibake } from '../lib/repairText';

interface SubServiceDetailPageProps {
  service: SubServiceDetail;
}

type DetailTab = 'overview' | 'cases' | 'team' | 'pricing' | 'faq';

const tabs: Array<{ id: DetailTab; ar: string; en: string }> = [
  { id: 'overview', ar: 'نظرة عامة', en: 'Overview' },
  { id: 'cases', ar: 'دراسات الحالة', en: 'Case studies' },
  { id: 'team', ar: 'الفريق', en: 'Team' },
  { id: 'pricing', ar: 'الأسعار', en: 'Pricing' },
  { id: 'faq', ar: 'أسئلة شائعة', en: 'FAQ' },
];

const useLocalizedCopy = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const pick = (value: { ar: string; en: string }) => repairMojibake(isArabic ? value.ar : value.en);
  const text = (arabic: string, english: string) => repairMojibake(isArabic ? arabic : english);

  return { isArabic, pick, text };
};

export const SubServiceDetailPage: FC<SubServiceDetailPageProps> = ({ service }) => {
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const { pick, text } = useLocalizedCopy();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
          <div className="mb-6 flex items-start gap-6">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4">
              <service.icon className="h-10 w-10 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{pick(service.title)}</h1>
              <p className="mb-4 text-xl text-slate-300">{pick(service.shortDescription)}</p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all hover:from-cyan-600 hover:to-blue-600">
                  {text('اطلب عرض سعر', 'Request a quote')}
                </button>
                <button className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition-all hover:bg-cyan-500/10">
                  {text('ناقش احتياج شركتك', 'Discuss your company need')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-12 flex gap-2 overflow-x-auto border-b border-slate-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 px-6 py-3 font-semibold transition-all ${
                activeTab === tab.id
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              {text(tab.ar, tab.en)}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                {text('لماذا هذه الخدمة؟', 'Why this service?')}
              </h2>
              <p className="text-lg leading-relaxed text-slate-300">{pick(service.longDescription)}</p>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold text-white">
                {text('الفوائد الرئيسية', 'Main benefits')}
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div
                    key={pick(benefit.title)}
                    className="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-colors hover:border-cyan-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-lg bg-cyan-500/10 p-3">
                        <benefit.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-white">{pick(benefit.title)}</h3>
                        <p className="text-slate-400">{pick(benefit.description)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold text-white">
                {text('المميزات المتقدمة', 'Advanced features')}
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {service.features.map((feature) => (
                  <div key={pick(feature.title)} className="flex gap-4">
                    <div className="h-fit flex-shrink-0 rounded-lg bg-cyan-500/10 p-3">
                      <feature.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-white">{pick(feature.title)}</h3>
                      <p className="text-slate-400">{pick(feature.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold text-white">
                {text('التقنيات المستخدمة', 'Technologies used')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-cyan-400 transition-colors hover:border-cyan-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cases' && (
          <div className="space-y-8">
            <h2 className="mb-8 text-3xl font-bold text-white">
              {text('دراسات حالة ناجحة', 'Successful case studies')}
            </h2>
            {service.caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        )}

        {activeTab === 'team' && (
          <div className="space-y-8">
            <h2 className="mb-8 text-3xl font-bold text-white">
              {text('فريق نُطق المتخصص', 'Notaq specialized team')}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.team.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <h2 className="mb-8 text-3xl font-bold text-white">
              {text('خطط تسعير مرنة', 'Flexible pricing plans')}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.pricingTiers.map((tier) => (
                <PricingTierCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="space-y-4">
            <h2 className="mb-8 text-3xl font-bold text-white">{text('أسئلة شائعة', 'FAQ')}</h2>
            {service.faqItems.map((item) => (
              <FAQItem key={pick(item.question)} question={pick(item.question)} answer={pick(item.answer)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudyCard: FC<{ caseStudy: SubServiceCase }> = ({ caseStudy }) => {
  const { pick, text } = useLocalizedCopy();

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 transition-colors hover:border-cyan-500">
      <div className="p-8">
        <h3 className="mb-2 text-2xl font-bold text-white">{pick(caseStudy.title)}</h3>
        <p className="mb-6 text-slate-400">{pick(caseStudy.description)}</p>

        <div className="mb-8 grid grid-cols-3 gap-4">
          {caseStudy.results.map((result) => (
            <div key={`${result.metric}-${result.value}`} className="text-center">
              <div className="mb-2 inline-block rounded-lg bg-cyan-500/10 p-2">
                <result.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="text-lg font-bold text-cyan-400">{result.value}</div>
              <div className="text-xs text-slate-400">{repairMojibake(result.metric)}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1 text-xs text-slate-400">{text('العميل', 'Client')}</p>
              <p className="font-semibold text-white">{caseStudy.client.name}</p>
              <p className="text-sm text-slate-400">{caseStudy.client.industry}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-400">{text('المدة', 'Duration')}</p>
              <p className="font-semibold text-white">{caseStudy.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard: FC<{ member: SubServiceDetail['team'][number] }> = ({ member }) => {
  const { pick, text } = useLocalizedCopy();

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <h3 className="mb-2 text-lg font-bold text-white">{member.name}</h3>
      <p className="mb-4 font-semibold text-cyan-400">{pick(member.role)}</p>
      <div className="mb-4">
        <p className="mb-2 text-xs text-slate-400">{text('التخصصات:', 'Expertise:')}</p>
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill) => (
            <span key={skill} className="rounded bg-cyan-500/10 px-2 py-1 text-xs text-cyan-400">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-700 pt-4">
        <p className="text-sm text-slate-300">
          {text(
            `${member.yearsOfExperience} سنوات خبرة - ${member.certifications.length} شهادات`,
            `${member.yearsOfExperience} years of experience - ${member.certifications.length} certifications`,
          )}
        </p>
      </div>
    </div>
  );
};

const PricingTierCard: FC<{ tier: SubServiceDetail['pricingTiers'][number] }> = ({ tier }) => {
  const { text } = useLocalizedCopy();

  return (
    <div
      className={`overflow-hidden rounded-xl transition-all ${
        tier.isPopular
          ? 'scale-105 border border-cyan-500 bg-gradient-to-b from-cyan-500/20 to-blue-500/20 ring-2 ring-cyan-500'
          : 'border border-slate-700 bg-slate-800'
      }`}
    >
      <div className="p-8">
        {tier.isPopular && (
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white">
            {text('الخطة الموصى بها', 'Recommended plan')}
          </div>
        )}
        <h3 className="mb-2 text-2xl font-bold text-white">{tier.name}</h3>
        <p className="mb-6 text-sm text-slate-400">{tier.description}</p>
        <div className="mb-8">
          <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
        </div>
        <ul className="mb-8 space-y-3">
          {tier.features.map((feature) => (
            <li key={feature.name} className="flex items-center gap-2 text-slate-300">
              {feature.included ? (
                <Check className="h-5 w-5 text-cyan-400" />
              ) : (
                <X className="h-5 w-5 text-slate-600" />
              )}
              <span className={feature.included ? '' : 'text-slate-600 line-through'}>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FAQItem: FC<{ question: string; answer: string }> = ({ question, answer }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 transition-colors hover:border-cyan-500">
      <div className="flex w-full items-center justify-between p-6">
        <span className="text-right text-lg font-semibold text-white">{question}</span>
      </div>
      <div className="border-t border-slate-700 px-6 pb-6 text-slate-300">{answer}</div>
    </div>
  );
};
