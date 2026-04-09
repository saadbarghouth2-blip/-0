import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code2, 
  Database, 
  LineChart,
  ArrowLeft
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Globe,
      title: 'تطوير المواقع',
      titleEn: 'Web Development',
      description: 'مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة',
      features: ['React & Next.js', 'تصميم متجاوب', 'SEO متقدم', 'أداء عالي'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Smartphone,
      title: 'تطبيقات الموبايل',
      titleEn: 'Mobile Apps',
      description: 'تطبيقات native و cross-platform احترافية',
      features: ['React Native', 'iOS & Android', 'واجهة سلسة', 'أداء native'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Palette,
      title: 'تصميم UI/UX',
      titleEn: 'UI/UX Design',
      description: 'تصاميم عصرية تركز على تجربة المستخدم',
      features: ['Figma Design', 'Prototyping', 'User Research', 'Design System'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Code2,
      title: 'أنظمة خاصة',
      titleEn: 'Custom Systems',
      description: 'حلول برمجية مخصصة لاحتياجات عملك',
      features: ['ERP Systems', 'CRM', 'Dashboards', 'Automation'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Database,
      title: 'قواعد البيانات',
      titleEn: 'Database Solutions',
      description: 'تصميم وإدارة قواعد البيانات بكفاءة',
      features: ['PostgreSQL', 'MongoDB', 'Firebase', 'Cloud SQL'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: LineChart,
      title: 'تحليل البيانات',
      titleEn: 'Data Analytics',
      description: 'لوحات تحكم وتحليلات متقدمة',
      features: ['Power BI', 'Tableau', 'Custom Dashboards', 'Real-time Data'],
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm mb-4">
            خدماتنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            حلول <span className="gradient-text">شاملة</span> لكل احتياج
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدة عملك على النمو والتميز
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-secondary/30 border border-border hover:border-teal-500/30 transition-all duration-500 card-hover overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{service.titleEn}</p>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <button className="flex items-center gap-2 text-teal-400 text-sm font-medium group/btn">
                  اكتشف المزيد
                  <ArrowLeft className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            هل لديك مشروع معين في ذهنك؟
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            دعنا نناقش مشروعك
            <ArrowLeft className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
