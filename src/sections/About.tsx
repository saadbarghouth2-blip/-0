import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Rocket, Users, Award, Code } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Lightbulb,
      title: 'إبداع',
      titleEn: 'Creativity',
      description: 'نبتكر حلولاً فريدة لكل مشروع',
    },
    {
      icon: Target,
      title: 'دقة',
      titleEn: 'Precision',
      description: 'نركز على أدق التفاصيل',
    },
    {
      icon: Rocket,
      title: 'سرعة',
      titleEn: 'Speed',
      description: 'نلتزم بالمواعيد دائماً',
    },
    {
      icon: Users,
      title: 'شراكة',
      titleEn: 'Partnership',
      description: 'نعمل معك كشريك وليس كمورد',
    },
  ];

  const features = [
    {
      icon: Code,
      title: 'تقنيات حديثة',
      description: 'نستخدم أحدث التقنيات والأدوات',
    },
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'نضمن أعلى معايير الجودة',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm mb-4">
            من نحن
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            شريكك الموثوق في <span className="gradient-text">التحول الرقمي</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            نُطق هي شركة متخصصة في تطوير المواقع والتطبيقات الإلكترونية، 
            نساعد الشركات والأفراد على بناء حضور رقمي قوي ومؤثر
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">قصتنا</h3>
            <p className="text-muted-foreground leading-relaxed">
              بدأت رحلتنا مع شغف بتحويل الأفكار إلى واقع رقمي. نؤمن بأن كل مشروع هو فرصة 
              لإبداع something extraordinary - موقع أو تطبيق لا يخدم فقط الغرض المطلوب، 
              بل يتجاوز التوقعات ويترك انطباعاً دائماً.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نجمع بين الخبرة التقنية العميقة والفهم الدقيق لاحتياجات العملاء، 
              مما يمكننا من تقديم حلول مخصصة تتناسب مع أهداف كل عميل.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                >
                  <div className="p-2 rounded-lg bg-teal-500/10">
                    <feature.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl transform -rotate-3" />
              
              {/* Main Content */}
              <div className="relative inset-0 glass rounded-3xl p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <BrandLogo
                      className="w-[220px] max-w-full rounded-[1.5rem] border-white/10 bg-white px-4 py-3"
                      imageClassName="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-6xl font-bold gradient-text mb-4">نُطق</div>
                  <div className="text-2xl text-muted-foreground mb-6">Notaq</div>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">180+</div>
                      <div className="text-sm text-muted-foreground">مشروع</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">160+</div>
                      <div className="text-sm text-muted-foreground">عميل</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">8+</div>
                      <div className="text-sm text-muted-foreground">سنوات</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 card-hover"
            >
              <div className="p-3 rounded-xl bg-teal-500/10 w-fit mb-4 group-hover:bg-teal-500/20 transition-colors">
                <value.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">{value.titleEn}</p>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
