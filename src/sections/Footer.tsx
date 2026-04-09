import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Twitter } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { label: 'تطوير المواقع', href: '#services' },
      { label: 'تطبيقات الموبايل', href: '#services' },
      { label: 'تصميم UI/UX', href: '#services' },
      { label: 'أنظمة خاصة', href: '#services' },
    ],
    company: [
      { label: 'من نحن', href: '#about' },
      { label: 'أعمالنا', href: '#projects' },
      { label: 'آراء العملاء', href: '#testimonials' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
    resources: [
      { label: 'المدونة', href: '/blog' },
      { label: 'الأسئلة الشائعة', href: '#' },
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'شروط الاستخدام', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-6">
              <BrandLogo
                className="w-[138px] rounded-[1.1rem] border-white/10 bg-white px-3 py-2"
                imageClassName="w-full"
                loading="lazy"
              />
              <span className="text-xl font-bold">
                <span className="gradient-text">نُطق</span>
                <span className="text-muted-foreground mx-1">|</span>
                <span className="text-white">Notaq</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              نحول أفكارك إلى واقع رقمي. نصمم ونطور مواقع وتطبيقات احترافية 
              تجذب العملاء وتُبرز علامتك التجارية.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-secondary/30 hover:bg-teal-500/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-teal-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">الشركة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">الموارد</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © 2026 نُطق | Notaq. صنع بـ
n              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              في مصر
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-teal-400 transition-colors group"
            >
              العودة للأعلى
              <div className="p-2 rounded-lg bg-secondary/30 group-hover:bg-teal-500/20 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
