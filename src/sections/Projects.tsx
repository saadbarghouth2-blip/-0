import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link: string;
  features: string[];
  color: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'نمورا',
      titleEn: 'Nemora',
      category: 'ecommerce',
      description: 'متجر ملابس مطبوعة احترافي مع مساعد ذكي',
      fullDescription: 'منصة تجارة إلكترونية متكاملة للملابس المطبوعة، تتميز بتصميم عصري وأنيق ومساعد ذكي للإجابة على استفسارات العملاء. تتضمن المنصة نظام إدارة منتجات متكامل، سلة تسوق ذكية، ونظام دفع آمن.',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      link: 'https://nemora.vercel.app/',
      features: [
        'تصميم متجاوب مع جميع الأجهزة',
        'مساعد ذكي للأسئلة الشائعة',
        'نظام سلة تسوق متكامل',
        'واجهة مستخدم عصرية',
        'سرعة تحميل عالية',
      ],
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: '2',
      title: 'المتحف المصري الكبير',
      titleEn: 'Grand Egyptian Museum',
      category: 'museum',
      description: 'موقع المتحف المصري الكبير بتجربة تفاعلية فريدة',
      fullDescription: 'موقع رسمي للمتحف المصري الكبير يقدم تجربة افتراضية فريدة لاستكشاف الكنوز الأثرية. يتضمن جولات افتراضية، معلومات تفصيلية عن القطع الأثرية، ونظام حجز تذاكر متكامل.',
      image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80',
      technologies: ['React', 'Three.js', 'GSAP', 'Firebase'],
      link: 'https://egyptian-museum-theta.vercel.app/',
      features: [
        'جولات افتراضية ثلاثية الأبعاد',
        'معلومات تفصيلية عن 5398 قطعة أثرية',
        'نظام حجز تذاكر متكامل',
        'دعم الواقع المعزز AR',
        'تجربة مستخدم immersive',
      ],
      color: 'from-yellow-500 to-amber-600',
    },
    {
      id: '3',
      title: 'كنوز مصر',
      titleEn: 'Egypt Treasures',
      category: 'education',
      description: 'منصة تعليمية تفاعلية للأطفال مع خرائط ذكية',
      fullDescription: 'منصة تعليمية مبتكرة للأطفال تجمع بين الخرائط التفاعلية والذكاء الاصطناعي. تقدم تجربة تعلم شيقة من خلال الألعاب التفاعلية، الدروس الممتعة، وشخصية زيزو الذكية التي تساعد الأطفال على الاستكشاف.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      technologies: ['React', 'Leaflet Maps', 'AI Integration', 'Firebase'],
      link: 'https://platform-map-1.vercel.app/',
      features: [
        'خرائط تفاعلية مع Leaflet',
        'مساعد ذكي (زيزو) للأطفال',
        'نظام نقاط وشارات إنجاز',
        'ألعاب تعليمية متنوعة',
        'لوحة متابعة لأولياء الأمور',
      ],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: '4',
      title: 'GeoInformatics',
      titleEn: 'GeoInformatics',
      category: 'gis',
      description: 'موقع شركة نظم المعلومات الجغرافية الاحترافية',
      fullDescription: 'موقع شركة متخصصة في نظم المعلومات الجغرافية والاستشعار عن بعد. يعرض الخدمات المتنوعة مثل Enterprise GIS، Remote Sensing، Drone Mapping، و3D Digital Twins مع واجهة احترافية وتفاعلية.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      technologies: ['React', 'Three.js', 'ArcGIS', 'Tailwind CSS'],
      link: 'https://geo-informatics-for-information-sys-eight.vercel.app/',
      features: [
        'تصميم احترافي متعدد الأقسام',
        'عرض خدمات GIS متنوعة',
        'نماذج ثلاثية الأبعاد',
        'شهادات عملاء',
        'نظام FAQ متكامل',
      ],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: '5',
      title: 'النخبة للحفلات',
      titleEn: 'Elite Catering',
      category: 'service',
      description: 'موقع خدمات الضيافة الفاخرة في السعودية',
      fullDescription: 'موقع احترافي لشركة ضيافة فاخرة في المملكة العربية السعودية. يعرض قائمة الطعام، الباقات المتنوعة، ونظام حجز سهل مع تصميم فاخر يعكس جودة الخدمات المقدمة.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
      link: 'https://xn--mgbg1fxab.store/',
      features: [
        'تصميم فاخر يعكس الهوية',
        'عرض قائمة الطعام التفاعلي',
        'نظام حجز متكامل',
        'دعم اللغتين العربية والإنجليزية',
        'معرض صور احترافي',
      ],
      color: 'from-rose-500 to-pink-600',
    },
    {
      id: '6',
      title: 'قصر طيبة',
      titleEn: 'Qasr Tayiba',
      category: 'service',
      description: 'موقع قصر للاحتفالات والمناسبات في جدة',
      fullDescription: 'موقع قصر طيبة للاحتفالات والمناسبات في جدة. يقدم تجربة استكشاف افتراضية للقسمين (رجال ونساء)، مع عرض الباقات، المعرض، ونظام حجز سهل ومباشر.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: 'https://xn--ngbc4b8d.store/',
      features: [
        'تصميم أنيق وفاخر',
        'عرض أقسام القصر',
        'معرض صور تفاعلي',
        'نظام حجز مباشر',
        'باقات متنوعة',
      ],
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: '7',
      title: 'Kids Geo Dashboard',
      titleEn: 'Kids Geo Dashboard',
      category: 'education',
      description: 'لوحة تحكم تفاعلية للتعلم الجغرافي',
      fullDescription: 'لوحة تحكم تفاعلية للأطفال لتعلم الجغرافيا بطريقة ممتعة. تتضمن وحدات تعليمية متنوعة، اختبارات تفاعلية، ونظام تتبع التقدم لتحفيز الأطفال على الاستمرار في التعلم.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      technologies: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
      link: 'https://dashboard-ana-map-1-4iie.vercel.app/',
      features: [
        'وحدات تعليمية متنوعة',
        'اختبارات تفاعلية',
        'نظام تتبع التقدم',
        'تصميم جذاب للأطفال',
        'واجهة سهلة الاستخدام',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: '8',
      title: 'Ask Saad',
      titleEn: 'Ask Saad',
      category: 'ai',
      description: 'مساعد ذكي متخصص في نظم المعلومات الجغرافية',
      fullDescription: 'تطبيق ويب ذكي يعمل كمساعد متخصص في الإجابة على الأسئلة المتعلقة بنظم المعلومات الجغرافية (GIS). يستخدم تقنيات الذكاء الاصطناعي لتقديم إجابات دقيقة ومفيدة.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      technologies: ['React', 'OpenAI API', 'Firebase Auth', 'Tailwind CSS'],
      link: 'https://ask-saad-barghouth.lovable.app/',
      features: [
        'مساعد ذكي متخصص',
        'تكامل مع OpenAI',
        'نظام مصادقة آمن',
        'واجهة دردشة سلسة',
        'تاريخ المحادثات',
      ],
      color: 'from-indigo-500 to-blue-600',
    },
    {
      id: '9',
      title: 'WorkLog',
      titleEn: 'WorkLog',
      category: 'productivity',
      description: 'تطبيق تتبع ساعات العمل والحضور',
      fullDescription: 'تطبيق ويب لتتبع ساعات العمل والحضور والانصراف. يساعد الموظفين والفرق على إدارة وقتهم بكفاءة مع تقارير تفصيلية وإشعارات ذكية.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      technologies: ['React', 'PWA', 'LocalStorage', 'Tailwind CSS'],
      link: 'https://time-care-log.lovable.app/',
      features: [
        'تتبع ساعات العمل',
        'تقارير يومية وأسبوعية',
        'تنبيهات وإشعارات',
        'وضع PWA للاستخدام offline',
        'تصميم بسيط وسهل',
      ],
      color: 'from-green-500 to-emerald-600',
    },
  ];

  const categories = [
    { id: 'all', label: 'الكل', labelEn: 'All' },
    { id: 'ecommerce', label: 'تجارة', labelEn: 'E-commerce' },
    { id: 'education', label: 'تعليم', labelEn: 'Education' },
    { id: 'gis', label: 'GIS', labelEn: 'GIS' },
    { id: 'service', label: 'خدمات', labelEn: 'Services' },
    { id: 'ai', label: 'ذكاء اصطناعي', labelEn: 'AI' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm mb-4">
            أعمالنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            مشاريعنا <span className="gradient-text">المميزة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفخر بأعمالنا التي تعكس جودتنا وإبداعنا في تقديم حلول رقمية متميزة
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-secondary/30 border border-border hover:border-teal-500/30 transition-all duration-500 card-hover">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button className="p-3 rounded-full bg-teal-500 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-white/10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-xs text-muted-foreground">{project.titleEn}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-3xl bg-card border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Image */}
                <div className="relative h-64 md:h-80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-30`} />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-muted-foreground">{selectedProject.titleEn}</p>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">المميزات الرئيسية</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-teal-400" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">التقنيات المستخدمة</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm rounded-full bg-teal-500/10 text-teal-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      زيارة الموقع
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
