import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      id: '1',
      name: 'أحمد محمد',
      role: 'مدير شركة النخبة',
      content: 'تعاملت مع فريق نُطق لتطوير موقع شركتنا، وكانت التجربة ممتازة من جميع النواحي. الفريق محترف، يلتزم بالمواعيد، ويقدم جودة عالية جداً. أنصح بالتعامل معهم بشدة.',
      rating: 5,
    },
    {
      id: '2',
      name: 'سارة العلي',
      role: 'صاحبة متجر نمورا',
      content: 'موقع نمورا كان تحولاً كبيراً لعملي. التصميم عصري والأداء سريع، والمساعد الذكي ساعد كثيراً في خدمة العملاء. شكراً لفريق نُطق على الإبداع.',
      rating: 5,
    },
    {
      id: '3',
      name: 'د. خالد الرشيد',
      role: 'مدير متحف طيبة',
      content: 'الموقع الذي صممه فريق نُطق للمتحف يعكس احترافية عالية. التصميم فاخر وسهل الاستخدام، ونظام الحجز يعمل بكفاءة. تجربة رائعة بالتأكيد.',
      rating: 5,
    },
    {
      id: '4',
      name: 'نورة الفيصل',
      role: 'مديرة مدرسة الأمل',
      content: 'منصة كنوز مصر غيرت طريقة تعليم الجغرافيا لطلابنا. الأطفال يحبونها ويتفاعلون معها بشكل كبير. شكراً على هذا الإبداع.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm mb-4">
            آراء العملاء
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ما يقوله <span className="gradient-text">عملاؤنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعى دائماً لتقديم الأفضل
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-secondary/30 border border-border hover:border-teal-500/30 transition-all duration-500 card-hover">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 p-3 rounded-xl bg-teal-500/10">
                  <Quote className="w-6 h-6 text-teal-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '100%', label: 'رضا العملاء' },
            { value: '180+', label: 'مشروع منجز' },
            { value: '160+', label: 'عميل نشط' },
            { value: '24/7', label: 'دعم فني' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-secondary/20"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
