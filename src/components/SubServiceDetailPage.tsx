import { useState } from 'react';
import type { FC } from 'react';
import type { SubServiceDetail, SubServiceCase } from '../data/subServicesData';
import { Check, Users, Award, TrendingUp, BarChart3, MessageCircle, DollarSign } from 'lucide-react';

interface SubServiceDetailPageProps {
  service: SubServiceDetail;
}

export const SubServiceDetailPage: FC<SubServiceDetailPageProps> = ({ service }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'cases' | 'team' | 'pricing' | 'faq'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
              <service.icon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title.ar}</h1>
              <p className="text-xl text-slate-300 mb-4">{service.shortDescription.ar}</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all">
                  احصل على عرض سعر
                </button>
                <button className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all">
                  استشارة مجانية
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{service.benefits.length}</div>
              <div className="text-slate-400">فوائد رئيسية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{service.features.length}</div>
              <div className="text-slate-400">ميزات متقدمة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{service.caseStudies.length}</div>
              <div className="text-slate-400">دراسات حالة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{service.team.length}</div>
              <div className="text-slate-400">متخصصين</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-2 border-b border-slate-700 mb-12 overflow-x-auto">
          {(['overview', 'cases', 'team', 'pricing', 'faq'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab === 'overview' && 'نظرة عامة'}
              {tab === 'cases' && 'دراسات الحالة'}
              {tab === 'team' && 'الفريق'}
              {tab === 'pricing' && 'الأسعار'}
              {tab === 'faq' && 'أسئلة شائعة'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">لماذا هذه الخدمة؟</h2>
              <p className="text-lg text-slate-300 leading-relaxed">{service.longDescription.ar}</p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">الفوائس الرئيسية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{benefit.title.ar}</h3>
                        <p className="text-slate-400">{benefit.description.ar}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">الميزات المتقدمة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0 h-fit">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title.ar}</h3>
                      <p className="text-slate-400">{feature.description.ar}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">التقنيات المستخدمة</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 text-cyan-400 rounded-lg hover:border-cyan-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Case Studies Tab */}
        {activeTab === 'cases' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">دراسات الحالة الناجحة</h2>
            {service.caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">فريقنا المتخصص</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.team.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">خطط التسعير المرنة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.pricingTiers.map((tier) => (
                <PricingTierCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white mb-8">أسئلة شائعة</h2>
            {service.faqItems.map((item, idx) => (
              <FAQItem key={idx} question={item.question.ar} answer={item.answer.ar} />
            ))}
          </div>
        )}
      </div>

      {/* Testimonials */}
      {service.testimonials.length > 0 && (
        <div className="bg-slate-800/50 border-t border-slate-700 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-white mb-8">ماذا يقول عملاؤنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.content.ar}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role} عند {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-white mb-8">خدمات ذات صلة</h2>
          <div className="flex flex-wrap gap-3">
            {service.relatedServices.map((serviceId, idx) => (
              <button
                key={idx}
                className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-colors"
              >
                {serviceId.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">هل أنت مهتم بهذه الخدمة؟</h2>
          <p className="text-lg text-slate-300 mb-8">تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعري مخصص</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all">
              احصل على عرض سعر
            </button>
            <button className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all">
              اتصل بنا الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudyCard: FC<{ caseStudy: SubServiceCase }> = ({ caseStudy }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors">
    <div className="p-8">
      <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title.ar}</h3>
      <p className="text-slate-400 mb-6">{caseStudy.description.ar}</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {caseStudy.results.map((result, idx) => (
          <div key={idx} className="text-center">
            <div className="inline-block p-2 bg-cyan-500/10 rounded-lg mb-2">
              <result.icon className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-lg font-bold text-cyan-400">{result.value}</div>
            <div className="text-xs text-slate-400">{result.metric}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-700 pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">العميل</p>
            <p className="font-semibold text-white">{caseStudy.client.name}</p>
            <p className="text-sm text-slate-400">{caseStudy.client.industry}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">المدة</p>
            <p className="font-semibold text-white">{caseStudy.duration}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeamMemberCard: FC<{ member: any }> = ({ member }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
    <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
    <p className="text-cyan-400 font-semibold mb-4">{member.role.ar}</p>
    <div className="mb-4">
      <p className="text-xs text-slate-400 mb-2">التخصصات:</p>
      <div className="flex flex-wrap gap-2">
        {member.expertise.map((skill: string, idx: number) => (
          <span key={idx} className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
    <div className="pt-4 border-t border-slate-700">
      <p className="text-sm text-slate-300">
        {member.yearsOfExperience} سنوات خبرة � {member.certifications.length} شهادات
      </p>
    </div>
  </div>
);

const PricingTierCard: FC<{ tier: any }> = ({ tier }) => (
  <div
    className={`rounded-xl overflow-hidden transition-all ${
      tier.isPopular
        ? 'bg-gradient-to-b from-cyan-500/20 to-blue-500/20 border border-cyan-500 ring-2 ring-cyan-500 scale-105'
        : 'bg-slate-800 border border-slate-700'
    }`}
  >
    <div className="p-8">
      {tier.isPopular && (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
          الخطة الموصى بها
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
      <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
      <div className="mb-8">
        <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature: any, idx: number) => (
          <li key={idx} className="flex items-center gap-2 text-slate-300">
            {feature.included ? (
              <Check className="w-5 h-5 text-cyan-400" />
            ) : (
              <span className="w-5 h-5 text-slate-600">✗</span>
            )}
            <span className={feature.included ? '' : 'line-through text-slate-600'}>{feature.name}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 font-semibold rounded-lg transition-all ${
          tier.isPopular
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
            : 'border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400'
        }`}
      >
        ابدأ الآن
      </button>
    </div>
  </div>
);

const FAQItem: FC<{ question: string; answer: string }> = ({ question, answer }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors">
      <div className="w-full p-6 flex items-center justify-between">
        <span className="text-lg font-semibold text-white text-right">{question}</span>
      </div>
      <div className="px-6 pb-6 border-t border-slate-700 text-slate-300">
        {answer}
      </div>
    </div>
  );
};
