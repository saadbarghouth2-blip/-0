import { useState } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubServicesGrid } from '../components/SubServiceCard';
import { SubServiceDetailPage } from '../components/SubServiceDetailPage';
import { subServicesData } from '../data/subServicesData';
import { ArrowRight, Search } from 'lucide-react';

const SubServicesPage: FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  if (selectedService) {
    const service = subServicesData[selectedService];
    if (service) {
      return (
        <div>
          <button
            onClick={() => setSelectedService(null)}
            className="fixed top-24 right-6 z-50 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 rounded-lg flex items-center gap-2 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للخدمات
          </button>
          <SubServiceDetailPage service={service} />
        </div>
      );
    }
  }

  const filteredServices = Object.values(subServicesData).filter((service) => {
    const matchesSearch =
      service.title.ar.includes(searchQuery) ||
      service.shortDescription.ar.includes(searchQuery) ||
      service.technologies.some((tech) => tech.includes(searchQuery));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              خدماتنا المتخصصة والعملاقة
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              10 خدمات فرعية متخصصة جداً مع دراسات حالة ناجحة وفريق متخصص وأسعار مرنة
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="ابحث عن خدمة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-1">10</div>
                <div className="text-slate-400">خدمات متخصصة</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
                <div className="text-slate-400">دراسات حالة</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-1">25+</div>
                <div className="text-slate-400">متخصصين</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
                <div className="text-slate-400">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredServices.length > 0 ? (
          <SubServicesGrid onViewDetails={setSelectedService} />
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-slate-400">لم نجد خدمات تطابق بحثك</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-2 bg-cyan-500/10 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
            >
              إعادة تعيين البحث
            </button>
          </div>
        )}
      </div>

      {/* Why Choose Section */}
      <div className="bg-slate-800/50 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">لماذا تختار خدماتنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">متخصصون جداً</h3>
              <p className="text-slate-400">
                كل خدمة يدير فريق متخصص يملك سنوات من الخبرة في المجال
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">نتائج مثبتة</h3>
              <p className="text-slate-400">
                دراسات حالة حقيقية تظهر النتائج التي وصلنا إليها مع عملاء سابقين
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">أسعار مرنة</h3>
              <p className="text-slate-400">
                خطط تسعير متعددة تناسب جميع الميزانيات والاحتياجات
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">الخدمات حسب النوع</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'design', name: 'التصميم', color: 'from-pink-500 to-rose-500' },
            { id: 'development', name: 'التطوير', color: 'from-cyan-500 to-blue-500' },
            { id: 'infrastructure', name: 'البنية التحتية', color: 'from-purple-500 to-indigo-500' },
            { id: 'security', name: 'الأمان', color: 'from-red-500 to-orange-500' },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setFilterCategory(category.id)}
              className={`p-6 rounded-xl font-semibold transition-all ${
                filterCategory === category.id
                  ? `bg-gradient-to-br ${category.color} text-white`
                  : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-slate-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {[
            {
              q: 'كم يستغرق تطوير الخدمة؟',
              a: 'يختلف حسب نوع الخدمة والتعقيد، لكن عادة من 2-6 أشهر',
            },
            {
              q: 'هل تقدمون دعم بعد الإطلاق؟',
              a: 'نعم، نقدم دعم شامل مستمر وتطوير مستمر لكل خدمة',
            },
            {
              q: 'ما هو السعر الأقل لخدمة؟',
              a: 'السعر يبدأ من $5,000 ويعتمد على نوع الخدمة والمتطلبات',
            },
          ].map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            هل تريد اختيار خدمة الآن؟
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            تواصل معنا للحصول على استشارة مجانية وعرض سعري مخصص
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all">
              احصل على استشارة مجانية
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all">
              شاهد الأسعار
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default SubServicesPage;
