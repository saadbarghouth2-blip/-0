import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Twitter,
  CheckCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'hello@notaq.dev',
      href: 'mailto:hello@notaq.dev',
    },
    {
      icon: Phone,
      label: 'الهاتف',
      value: '+20 123 456 789',
      href: 'tel:+20123456789',
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'الجيزة، مصر',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm mb-4">
            تواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            لنبدأ <span className="gradient-text">مشروعك</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي. تواصل معنا اليوم
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">معلومات التواصل</h3>
              <p className="text-muted-foreground mb-8">
                لا تتردد في التواصل معنا لأي استفسار أو لمناقشة مشروعك القادم
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">تابعنا على</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="p-3 rounded-xl bg-secondary/30 hover:bg-teal-500/20 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-teal-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-teal-500/20">
              <h4 className="font-semibold mb-3">ساعات العمل</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">السبت - الخميس</span>
                  <span>9:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الجمعة</span>
                  <span>مغلق</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors outline-none"
                      placeholder="اسمك الكريم"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">الموضوع</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors outline-none"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">الرسالة</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors outline-none resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitted ? 'bg-green-500' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      تم الإرسال بنجاح!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
