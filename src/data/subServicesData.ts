import {
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  Wrench,
  Database,
  Zap,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  BarChart3,
  Target,
} from 'lucide-react';

export interface SubServiceCase {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  results: Array<{ metric: string; value: string; icon: any }>;
  client: { name: string; industry: string; logo?: string };
  duration: string;
  technologies: string[];
}

export interface SubServiceTeamMember {
  id: string;
  name: string;
  role: { ar: string; en: string };
  expertise: string[];
  yearsOfExperience: number;
  avatar?: string;
  certifications: string[];
}

export interface SubServiceComparison {
  id: string;
  name: string;
  features: Array<{ name: string; included: boolean }>;
  price: string;
  isPopular?: boolean;
  description: string;
}

export interface SubServiceDetail {
  id: string;
  slug: string;
  icon: any;
  title: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  longDescription: { ar: string; en: string };
  benefits: Array<{ icon: any; title: { ar: string; en: string }; description: { ar: string; en: string } }>;
  features: Array<{ icon: any; title: { ar: string; en: string }; description: { ar: string; en: string } }>;
  caseStudies: SubServiceCase[];
  team: SubServiceTeamMember[];
  pricingTiers: SubServiceComparison[];
  technologies: string[];
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: { ar: string; en: string };
    rating: number;
  }>;
  faqItems: Array<{ question: { ar: string; en: string }; answer: { ar: string; en: string } }>;
  relatedServices: string[];
  startingPrice: string;
}

export const subServicesData: Record<string, SubServiceDetail> = {
  'ux-ui-design': {
    id: 'ux-ui-design',
    slug: 'ux-ui-design',
    icon: Palette,
    title: { ar: 'تصميم UX/UI', en: 'UX/UI Design' },
    shortDescription: {
      ar: 'تصميم واجهات مستخدم جميلة وسهلة الاستخدام تزيد من التحويلات',
      en: 'Beautiful and user-friendly interface design that increases conversions',
    },
    longDescription: {
      ar: 'نحن نخصص التصاميم لاحتياجاتك الفريدة مع اتباع أفضل ممارسات UX/UI العالمية. كل بكسل مصمم بعناية لتحسين تجربة المستخدم وزيادة الرضا والولاء.',
      en: 'We customize designs for your unique needs following global UX/UI best practices. Every pixel is carefully designed to improve user experience and increase satisfaction and loyalty.',
    },
    benefits: [
      {
        icon: TrendingUp,
        title: { ar: 'زيادة التحويلات', en: 'Increased Conversions' },
        description: {
          ar: 'تصاميم محسّنة تزيد معدل التحويل بمتوسط 150%',
          en: 'Optimized designs increase conversion rates by average 150%',
        },
      },
      {
        icon: Users,
        title: { ar: 'رضا المستخدمين', en: 'User Satisfaction' },
        description: {
          ar: 'واجهات سهلة وبديهية تقلل الأخطاء وتحسن الرضا',
          en: 'Simple and intuitive interfaces reduce errors and improve satisfaction',
        },
      },
      {
        icon: Award,
        title: { ar: 'جوائز تصميم', en: 'Design Awards' },
        description: {
          ar: 'تصاميمنا فازت بجوائز دولية في UX/UI',
          en: 'Our designs won international awards in UX/UI',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'متوافق مع الأجهزة', en: 'Responsive Design' },
        description: {
          ar: 'تصاميم تعمل بكمال على جميع الأجهزة والشاشات',
          en: 'Designs work perfectly on all devices and screens',
        },
      },
    ],
    features: [
      {
        icon: Palette,
        title: { ar: 'نظام ألوان احترافي', en: 'Professional Color System' },
        description: {
          ar: 'نظام ألوان مخصص يعكس هويتك البصرية',
          en: 'Custom color system reflecting your visual identity',
        },
      },
      {
        icon: Smartphone,
        title: { ar: 'تصميم متجاوب', en: 'Responsive Design' },
        description: {
          ar: 'يعمل بكمال على الهاتف والجهاز اللوحي والويب',
          en: 'Works perfectly on phone, tablet and web',
        },
      },
      {
        icon: Search,
        title: { ar: 'تحسين الوصولية', en: 'Accessibility Focus' },
        description: {
          ar: 'متوافق مع معايير WCAG لضمان الوصول للجميع',
          en: 'WCAG compliant to ensure access for everyone',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'تحليل السلوك', en: 'Behavior Analytics' },
        description: {
          ar: 'نتحلل سلوك المستخدمين لتحسين التصميم باستمرار',
          en: 'We analyze user behavior to continuously improve design',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'تطبيق Nemora التعليمي', en: 'Nemora Education App' },
        description: {
          ar: 'إعادة تصميم واجهة تطبيق تعليمي لـ 50K+ طالب',
          en: 'Redesigned interface for education app with 50K+ students',
        },
        results: [
          { metric: 'نمو الانخراط', value: '+320%', icon: TrendingUp },
          { metric: 'تحسن الرضا', value: '+95%', icon: Award },
          { metric: 'انخفاض الأخطاء', value: '-75%', icon: CheckCircle },
        ],
        client: { name: 'Nemora Inc.', industry: 'تعليم' },
        duration: '4 months',
        technologies: ['Figma', 'React', 'TypeScript', 'Tailwind'],
      },
      {
        id: 'case-2',
        title: { ar: 'منصة التجارة الإلكترونية', en: 'E-Commerce Platform' },
        description: {
          ar: 'تصميم تجربة تسوق محسّنة لزيادة المبيعات',
          en: 'Optimized shopping experience design to increase sales',
        },
        results: [
          { metric: 'زيادة التحويل', value: '+180%', icon: ShoppingCart },
          { metric: 'انخفاض التخلي', value: '-62%', icon: TrendingUp },
          { metric: 'نمو المتوسط', value: '+145%', icon: BarChart3 },
        ],
        client: { name: 'Commerce Hub', industry: 'التجارة' },
        duration: '3 months',
        technologies: ['Figma', 'Vue.js', 'SCSS', 'Adobe XD'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'منة الله محمود',
        role: { ar: 'مديرة تصميم UX', en: 'Lead UX Designer' },
        expertise: ['UX Research', 'Information Architecture', 'Wireframing', 'User Testing'],
        yearsOfExperience: 7,
        certifications: ['Nielsen Norman UX Certification', 'Google UX Design'],
      },
      {
        id: 'team-2',
        name: 'أحمد الشرقاوي',
        role: { ar: 'مصمم UI متقدم', en: 'Senior UI Designer' },
        expertise: ['Visual Design', 'Design Systems', 'Prototyping', 'Animation'],
        yearsOfExperience: 6,
        certifications: ['Adobe Certified Associate', 'Interaction Design'],
      },
      {
        id: 'team-3',
        name: 'ليلى الحسين',
        role: { ar: 'باحثة تجربة المستخدم', en: 'UX Researcher' },
        expertise: ['User Research', 'Usability Testing', 'Analytics', 'Behavior Analysis'],
        yearsOfExperience: 5,
        certifications: ['Certified UX Researcher', 'Advanced Analytics'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'لتطبيقات صغيرة ومحدودة الميزات',
        price: '$5,000 - $10,000',
        features: [
          { name: 'تصميم 5-10 شاشات', included: true },
          { name: 'نسخة واحدة من الخطوط والألوان', included: true },
          { name: 'نموذج واحد للمراجعة', included: false },
          { name: 'دعم تحريرات لا محدود', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'للتطبيقات المتوسطة والمعقدة',
        price: '$15,000 - $30,000',
        isPopular: true,
        features: [
          { name: 'تصميم 20-50 شاشة', included: true },
          { name: 'نظام تصميم متكامل', included: true },
          { name: '3 جولات مراجعة وتعديل', included: true },
          { name: 'اختبار المستخدمين والتحليل', included: true },
        ],
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'للمتطلبات الضخمة والمعقدة جداً',
        price: '$40,000+',
        features: [
          { name: 'تصميم 50+ شاشة', included: true },
          { name: 'نظام تصميم شامل ومتطور', included: true },
          { name: 'جولات مراجعة غير محدودة', included: true },
          { name: 'بحث مستخدمين وتحليل متقدم', included: true },
        ],
      },
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'UserTesting', 'Hotjar'],
    testimonials: [
      {
        name: 'محمد علي',
        role: 'CEO',
        company: 'Nemora',
        content: {
          ar: 'التصاميم تغيرت اللعبة تماماً. انخراط الطلاب ارتفع بشكل لا يصدق.',
          en: 'The designs changed the game completely. Student engagement skyrocketed.',
        },
        rating: 5,
      },
      {
        name: 'سارة احمد',
        role: 'Product Manager',
        company: 'Commerce Hub',
        content: {
          ar: 'أفضل فريق تصميم تعاملنا معهم. احترافية عالية جداً.',
          en: 'Best design team we worked with. Extremely professional.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'كم من الوقت يستغرق التصميم؟', en: 'How long does design take?' },
        answer: {
          ar: 'يعتمد على الحجم، لكن عادة 4-12 أسبوع من البداية للتسليم',
          en: 'Depends on scope, but usually 4-12 weeks from start to delivery',
        },
      },
      {
        question: { ar: 'هل تقدمون اختبار المستخدمين؟', en: 'Do you provide user testing?' },
        answer: {
          ar: 'نعم، في الحزم المتقدمة والعملاقة. اختبار تصاميم مع مستخدمين حقيقيين.',
          en: 'Yes, in Professional and Enterprise tiers. Testing with real users.',
        },
      },
    ],
    relatedServices: ['mobile-development', 'frontend-development', 'web-development'],
    startingPrice: '$5,000',
  },

  'seo-optimization': {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    icon: Search,
    title: { ar: 'تحسين محركات البحث', en: 'SEO Optimization' },
    shortDescription: {
      ar: 'ترتيب أعلى في جوجل وزيادة الزيارات العضوية بـ 300%+',
      en: 'Higher Google rankings and 300%+ increase in organic traffic',
    },
    longDescription: {
      ar: 'نحن متخصصون في استراتيجيات SEO المتقدمة. نحسّن موقعك ليكون الخيار الأول في محركات البحث. تصنيفات أعلى = زيارات أكثر = عملاء أكثر = إيرادات أكثر.',
      en: 'We specialize in advanced SEO strategies. We optimize your site to be top choice in search engines. Higher rankings = more traffic = more customers = more revenue.',
    },
    benefits: [
      {
        icon: TrendingUp,
        title: { ar: 'زيادة الزيارات', en: 'More Traffic' },
        description: {
          ar: 'زيادة 300%+ في الزيارات العضوية خلال 6 أشهر',
          en: '300%+ increase in organic traffic within 6 months',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'تكلفة منخفضة', en: 'Low Cost' },
        description: {
          ar: 'أرخص من الإعلانات المدفوعة على المدى الطويل',
          en: 'Cheaper than paid ads in the long run',
        },
      },
      {
        icon: Award,
        title: { ar: 'ثقة أكثر', en: 'More Trust' },
        description: {
          ar: 'الترتيب الأول = ثقة أكثر من المستخدمين',
          en: 'First ranking = more user trust',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'نتائج دائمة', en: 'Lasting Results' },
        description: {
          ar: 'النتائج تستمر حتى بعد الانتهاء من الخدمة',
          en: 'Results last even after service completion',
        },
      },
    ],
    features: [
      {
        icon: Search,
        title: { ar: 'بحث الكلمات المفتاحية', en: 'Keyword Research' },
        description: {
          ar: 'نجد أفضل الكلمات التي يبحث عنها عملاؤك',
          en: 'We find the best keywords your customers search for',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'تحليل المنافسين', en: 'Competitor Analysis' },
        description: {
          ar: 'ندرس منافسيك ونتفوق عليهم في SEO',
          en: 'We study your competitors and outrank them in SEO',
        },
      },
      {
        icon: Zap,
        title: { ar: 'تحسين الأداء', en: 'Performance Boost' },
        description: {
          ar: 'نسرّع الموقع لأن السرعة = ترتيب أفضل',
          en: 'We speed up your site as speed = better ranking',
        },
      },
      {
        icon: Database,
        title: { ar: 'روابط عالية الجودة', en: 'High Quality Links' },
        description: {
          ar: 'نبني روابط من مواقع موثوقة وعالية الجودة',
          en: 'We build links from trusted high-quality sites',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'موقع تجاري محلي', en: 'Local E-Commerce Site' },
        description: {
          ar: 'تحسين ترتيب موقع من الصفحة 5 إلى الصفحة 1',
          en: 'Improved site ranking from page 5 to page 1',
        },
        results: [
          { metric: 'الترتيب', value: 'Page 1', icon: Search },
          { metric: 'الزيارات', value: '+450%', icon: TrendingUp },
          { metric: 'المبيعات', value: '+280%', icon: BarChart3 },
        ],
        client: { name: 'E-Commerce Store', industry: 'تجارة إلكترونية' },
        duration: '6 months',
        technologies: ['Ahrefs', 'SEMrush', 'Google Analytics', 'Google Search Console'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'محمود محمد',
        role: { ar: 'متخصص SEO رئيسي', en: 'Lead SEO Specialist' },
        expertise: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
        yearsOfExperience: 8,
        certifications: ['Google Analytics Certified', 'Google Ads Certified'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'للمتاجر الصغيرة',
        price: '$1,000/month',
        features: [
          { name: 'تحليل وتقرير شهري', included: true },
          { name: 'تحسين 10 صفحات', included: true },
          { name: 'بناء 5 روابط خارجية', included: false },
          { name: 'دعم يومي', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'للشركات المتوسطة',
        price: '$3,000/month',
        isPopular: true,
        features: [
          { name: 'تحليل وتقرير شهري مفصل', included: true },
          { name: 'تحسين 50+ صفحة', included: true },
          { name: 'بناء 20 رابط خارجي', included: true },
          { name: 'استشارة أسبوعية', included: true },
        ],
      },
    ],
    technologies: ['Ahrefs', 'SEMrush', 'Moz', 'Google Analytics', 'Google Search Console'],
    testimonials: [
      {
        name: 'علي محمد',
        role: 'مالك المتجر',
        company: 'E-Commerce Store',
        content: {
          ar: 'نتائج مذهلة. الزيارات ارتفعت بشكل لا يصدق.',
          en: 'Amazing results. Traffic increased incredibly.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'متى سأرى النتائج؟', en: 'When will I see results?' },
        answer: {
          ar: 'عادة 2-3 أشهر لترى تحسنات واضحة، و6 أشهر لنتائج ضخمة',
          en: 'Usually 2-3 months for visible improvements, 6 months for massive results',
        },
      },
    ],
    relatedServices: ['content-marketing', 'social-media', 'web-development'],
    startingPrice: '$1,000/month',
  },

  'ecommerce-development': {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    icon: ShoppingCart,
    title: { ar: 'تطوير التجارة الإلكترونية', en: 'E-Commerce Development' },
    shortDescription: {
      ar: 'متاجر إلكترونية عملاقة تبيع الملايين شهرياً',
      en: 'Giant e-commerce stores selling millions monthly',
    },
    longDescription: {
      ar: 'نحن بناء متاجر إلكترونية يكسبون الملايين. من المتجر الصغير إلى الشركات الضخمة. نعرف كل شيء عن بيع الأشياء أونلاين.',
      en: 'We build e-commerce stores that make millions. From small stores to huge companies. We know everything about selling online.',
    },
    benefits: [
      {
        icon: ShoppingCart,
        title: { ar: 'مبيعات أكثر', en: 'More Sales' },
        description: {
          ar: 'متاجر مصممة لتزيد المبيعات والأرباح',
          en: 'Stores designed to increase sales and profits',
        },
      },
      {
        icon: TrendingUp,
        title: { ar: 'توسيع سريع', en: 'Fast Scaling' },
        description: {
          ar: 'معمارية تدعم النمو من 1000 إلى 1 مليون طلبية',
          en: 'Architecture supports growth from 1000 to 1 million orders',
        },
      },
      {
        icon: Award,
        title: { ar: 'نموذج متطور', en: 'Advanced Model' },
        description: {
          ar: 'نموذج دفع آمن، لوجيستيات متكاملة، تقارير تفصيلية',
          en: 'Secure payment model, integrated logistics, detailed reports',
        },
      },
    ],
    features: [
      {
        icon: ShoppingCart,
        title: { ar: 'عربة تسوق محسّنة', en: 'Optimized Cart' },
        description: {
          ar: 'عربة تسوق تقلل معدل التخلي بـ 60%+',
          en: 'Shopping cart reduces abandonment by 60%+',
        },
      },
      {
        icon: Zap,
        title: { ar: 'نظام دفع آمن', en: 'Secure Payment' },
        description: {
          ar: 'دعم 50+ طريقة دفع عالمية وآمنة',
          en: 'Support for 50+ global secure payment methods',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'تقارير متقدمة', en: 'Advanced Reports' },
        description: {
          ar: 'تحليلات شاملة لكل جانب من البيع',
          en: 'Comprehensive analytics for every sales aspect',
        },
      },
      {
        icon: Database,
        title: { ar: 'إدارة مخزون', en: 'Inventory Management' },
        description: {
          ar: 'نظام متقدم لإدارة الآلاف من المنتجات',
          en: 'Advanced system for managing thousands of products',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'منصة Commerce Hub', en: 'Commerce Hub Platform' },
        description: {
          ar: 'دمج 8 متاجر منفصلة في منصة واحدة مركزية',
          en: 'Integrated 8 separate stores into one central platform',
        },
        results: [
          { metric: 'النمو', value: '$2M → $8.5M', icon: TrendingUp },
          { metric: 'المعاملات', value: '15K+/day', icon: ShoppingCart },
          { metric: 'الأرباح', value: '+325%', icon: BarChart3 },
        ],
        client: { name: 'Commerce Hub', industry: 'تجارة إلكترونية' },
        duration: '5 months',
        technologies: ['Node.js', 'React', 'PostgreSQL', 'Stripe', 'Shopify API'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'أحمد عبدالعزيز',
        role: { ar: 'مهندس التجارة الإلكترونية', en: 'E-Commerce Engineer' },
        expertise: ['Payment Systems', 'Inventory Management', 'Logistics Integration', 'Scaling'],
        yearsOfExperience: 9,
        certifications: ['Stripe Certified', 'AWS Solutions Architect'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'متجر صغير',
        price: '$8,000 - $15,000',
        features: [
          { name: 'تطوير متجر كامل', included: true },
          { name: 'دعم 5 طرق دفع', included: true },
          { name: 'إدارة 100 منتج', included: true },
          { name: 'دعم لا محدود بعد الإطلاق', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'متجر متوسط',
        price: '$20,000 - $40,000',
        isPopular: true,
        features: [
          { name: 'تطوير متجر متقدم', included: true },
          { name: 'دعم 20+ طريقة دفع', included: true },
          { name: 'إدارة 10K+ منتج', included: true },
          { name: 'تكامل لوجستي كامل', included: true },
        ],
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'متجر ضخم',
        price: '$60,000+',
        features: [
          { name: 'منصة e-commerce مخصصة', included: true },
          { name: 'دعم جميع طرق الدفع', included: true },
          { name: 'إدارة لا محدودة للمنتجات', included: true },
          { name: 'تكاملات متقدمة متعددة', included: true },
        ],
      },
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Stripe', 'Shopify', 'WooCommerce'],
    testimonials: [
      {
        name: 'رائد النعيمي',
        role: 'CEO',
        company: 'Commerce Hub',
        content: {
          ar: 'زيادة المبيعات كانت أضعاف المتوقع. فريق احترافي جداً.',
          en: 'Sales increase exceeded expectations. Very professional team.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'هل تدعمون التوسع المستقبلي؟', en: 'Do you support future scaling?' },
        answer: {
          ar: 'نعم، المعمارية تدعم نمو من الآلاف للملايين من الطلبيات',
          en: 'Yes, architecture supports growth from thousands to millions of orders',
        },
      },
    ],
    relatedServices: ['mobile-development', 'payment-integration', 'analytics'],
    startingPrice: '$8,000',
  },

  'mobile-development': {
    id: 'mobile-development',
    slug: 'mobile-development',
    icon: Smartphone,
    title: { ar: 'تطوير تطبيقات الهاتف', en: 'Mobile App Development' },
    shortDescription: {
      ar: 'تطبيقات iOS و Android احترافية تجذب ملايين المستخدمين',
      en: 'Professional iOS and Android apps attracting millions of users',
    },
    longDescription: {
      ar: 'نحن نطور تطبيقات الهاتف التي يحبها الملايين. تطبيقات سريعة وآمنة وسهلة الاستخدام. من تطبيق بسيط إلى تطبيق معقد جداً.',
      en: 'We develop mobile apps loved by millions. Fast, secure and easy to use apps. From simple to highly complex apps.',
    },
    benefits: [
      {
        icon: Smartphone,
        title: { ar: 'ملايين المستخدمين', en: 'Millions of Users' },
        description: {
          ar: 'تطبيقاتنا تصل لملايين المستخدمين عالمياً',
          en: 'Our apps reach millions of users worldwide',
        },
      },
      {
        icon: TrendingUp,
        title: { ar: 'أداء عالي جداً', en: 'High Performance' },
        description: {
          ar: 'تطبيقات سريعة جداً تعمل بدون تأخير',
          en: 'Very fast apps that work without delay',
        },
      },
      {
        icon: Shield,
        title: { ar: 'أمان بنكي', en: 'Bank-Level Security' },
        description: {
          ar: 'تشفير عالي الجودة وحماية البيانات الشاملة',
          en: 'High-quality encryption and comprehensive data protection',
        },
      },
    ],
    features: [
      {
        icon: Smartphone,
        title: { ar: 'iOS و Android معاً', en: 'iOS & Android' },
        description: {
          ar: 'تطبيق واحد يعمل على كل من iOS و Android',
          en: 'One app that works on both iOS and Android',
        },
      },
      {
        icon: Zap,
        title: { ar: 'أداء فوري', en: 'Instant Performance' },
        description: {
          ar: 'تطبيق يفتح في أقل من ثانية',
          en: 'App opens in less than a second',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'تحليلات شاملة', en: 'Full Analytics' },
        description: {
          ar: 'تتبع تفصيلي لكل تفاعل المستخدم',
          en: 'Detailed tracking of every user interaction',
        },
      },
      {
        icon: Shield,
        title: { ar: 'أمان متقدم', en: 'Advanced Security' },
        description: {
          ar: 'حماية شاملة ضد الثغرات والهجمات',
          en: 'Comprehensive protection against vulnerabilities and attacks',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'تطبيق Nemora التعليمي', en: 'Nemora Education App' },
        description: {
          ar: 'تطبيق تعليمي وصل إلى 50K+ طالب',
          en: 'Education app reached 50K+ students',
        },
        results: [
          { metric: 'المستخدمون', value: '50K+', icon: Users },
          { metric: 'التقييم', value: '4.8/5', icon: Award },
          { metric: 'الاستخدام', value: '45 min/day', icon: TrendingUp },
        ],
        client: { name: 'Nemora', industry: 'تعليم' },
        duration: '6 months',
        technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      },
      {
        id: 'case-2',
        title: { ar: 'تطبيق FinTech', en: 'FinTech Mobile App' },
        description: {
          ar: 'تطبيق محافظ رقمية وصل لـ 200K+ مستخدم',
          en: 'Digital wallet app reached 200K+ users',
        },
        results: [
          { metric: 'المستخدمون', value: '200K+', icon: Users },
          { metric: 'المعاملات/اليوم', value: '50K+', icon: ShoppingCart },
          { metric: 'الثقة', value: '98%', icon: Award },
        ],
        client: { name: 'FinTech Pro', industry: 'مالي' },
        duration: '8 months',
        technologies: ['Flutter', 'Stripe', 'Firebase', 'Kotlin', 'Swift'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'محمد الخليل',
        role: { ar: 'مهندس تطبيقات هاتفية', en: 'Mobile App Engineer' },
        expertise: ['iOS Development', 'Android Development', 'Cross-Platform', 'Performance'],
        yearsOfExperience: 10,
        certifications: ['Google Developer', 'Apple Developer'],
      },
      {
        id: 'team-2',
        name: 'لمى محمود',
        role: { ar: 'مهندسة FinTech', en: 'FinTech Engineer' },
        expertise: ['Payment Systems', 'Security', 'Blockchain', 'API Integration'],
        yearsOfExperience: 7,
        certifications: ['Stripe Certified', 'Security Specialist'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'تطبيق بسيط',
        price: '$12,000 - $25,000',
        features: [
          { name: 'تطبيق iOS و Android', included: true },
          { name: 'تصميم احترافي', included: true },
          { name: 'ميزات أساسية', included: true },
          { name: 'دعم بعد الإطلاق', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'تطبيق متوسط',
        price: '$35,000 - $60,000',
        isPopular: true,
        features: [
          { name: 'تطبيق متقدم iOS و Android', included: true },
          { name: 'نظام دفع متقدم', included: true },
          { name: 'تحليلات شاملة', included: true },
          { name: 'دعم لا محدود', included: true },
        ],
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'تطبيق ضخم',
        price: '$80,000+',
        features: [
          { name: 'تطبيق معقد جداً', included: true },
          { name: 'نظام دفع وأمان بنكي', included: true },
          { name: 'تكاملات متعددة', included: true },
          { name: 'دعم وتطوير مستمر', included: true },
        ],
      },
    ],
    technologies: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Firebase', 'Node.js'],
    testimonials: [
      {
        name: 'أحمد الدعجاني',
        role: 'مؤسس',
        company: 'Nemora',
        content: {
          ar: 'أفضل فريق تطوير تطبيقات عملنا معهم. الجودة ممتازة.',
          en: 'Best app development team we worked with. Excellent quality.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'هل التطبيق يعمل بدون إنترنت؟', en: 'Does the app work offline?' },
        answer: {
          ar: 'نعم، يمكن تطويره بميزات offline حسب الاحتياج',
          en: 'Yes, can be developed with offline features as needed',
        },
      },
    ],
    relatedServices: ['ux-ui-design', 'backend-development', 'cloud-infrastructure'],
    startingPrice: '$12,000',
  },

  'cloud-infrastructure': {
    id: 'cloud-infrastructure',
    slug: 'cloud-infrastructure',
    icon: Cloud,
    title: { ar: 'البنية التحتية السحابية', en: 'Cloud Infrastructure' },
    shortDescription: {
      ar: 'بنية سحابية عملاقة تدعم ملايين المستخدمين',
      en: 'Giant cloud infrastructure supporting millions of users',
    },
    longDescription: {
      ar: 'نحن نبني بنية تحتية سحابية قوية وآمنة وقابلة للتوسع. تطبيقك يعمل بسرعة وأمان في السحابة.',
      en: 'We build powerful, secure and scalable cloud infrastructure. Your app runs fast and safe in the cloud.',
    },
    benefits: [
      {
        icon: Cloud,
        title: { ar: 'توسع غير محدود', en: 'Unlimited Scaling' },
        description: {
          ar: 'من 1 مستخدم إلى 100 مليون مستخدم بسهولة',
          en: 'From 1 user to 100 million users easily',
        },
      },
      {
        icon: TrendingUp,
        title: { ar: 'أداء فائق', en: 'Supreme Performance' },
        description: {
          ar: 'سرعة فائقة من أي مكان في العالم',
          en: 'Supreme speed from anywhere in the world',
        },
      },
      {
        icon: Shield,
        title: { ar: 'أمان 99.99%', en: '99.99% Uptime' },
        description: {
          ar: 'ضمان التوفر 99.99% و أمان بنكي شامل',
          en: 'Guaranteed 99.99% availability and comprehensive bank-level security',
        },
      },
    ],
    features: [
      {
        icon: Cloud,
        title: { ar: 'AWS, Google Cloud, Azure', en: 'AWS, Google Cloud, Azure' },
        description: {
          ar: 'خبرة مع أكبر مزودي الخدمات السحابية',
          en: 'Expertise with largest cloud service providers',
        },
      },
      {
        icon: Database,
        title: { ar: 'قواعد بيانات متقدمة', en: 'Advanced Databases' },
        description: {
          ar: 'PostgreSQL, MongoDB, Redis، والمزيد',
          en: 'PostgreSQL, MongoDB, Redis, and more',
        },
      },
      {
        icon: Zap,
        title: { ar: 'أتمتة كاملة', en: 'Full Automation' },
        description: {
          ar: 'نشر تلقائي وحجم تلقائي وتحديثات آلية',
          en: 'Automatic deployment, auto-scaling, automatic updates',
        },
      },
      {
        icon: Shield,
        title: { ar: 'مراقبة 24/7', en: '24/7 Monitoring' },
        description: {
          ar: 'مراقبة مستمرة وتنبيهات فورية عند أي مشكلة',
          en: 'Continuous monitoring and instant alerts for any issue',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'منصة SaaS CRM', en: 'SaaS CRM Platform' },
        description: {
          ar: 'بنية سحابية لـ 500+ شركة و 50K+ مستخدم',
          en: 'Cloud infrastructure for 500+ companies and 50K+ users',
        },
        results: [
          { metric: 'التوفر', value: '99.95%', icon: CheckCircle },
          { metric: 'التأخير', value: '<100ms', icon: Zap },
          { metric: 'النمو', value: '500+ شركة', icon: TrendingUp },
        ],
        client: { name: 'SaaS CRM Pro', industry: 'SaaS' },
        duration: '4 months',
        technologies: ['AWS', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'علي الخليلي',
        role: { ar: 'مهندس البنية السحابية', en: 'Cloud Infrastructure Engineer' },
        expertise: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'DevOps'],
        yearsOfExperience: 9,
        certifications: ['AWS Solutions Architect', 'Kubernetes CKA'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'لتطبيق صغير',
        price: '$2,000 - $5,000',
        features: [
          { name: 'إعداد بنية سحابية أساسية', included: true },
          { name: 'دعم 10K مستخدم', included: true },
          { name: 'مراقبة أساسية', included: true },
          { name: 'دعم مستمر', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'لتطبيق متوسط',
        price: '$8,000 - $15,000',
        isPopular: true,
        features: [
          { name: 'بنية سحابية متقدمة', included: true },
          { name: 'دعم 1M+ مستخدم', include: true },
          { name: 'مراقبة شاملة وتنبيهات', included: true },
          { name: 'دعم 24/7', included: true },
        ],
      },
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform'],
    testimonials: [
      {
        name: 'محمود الشمري',
        role: 'CTO',
        company: 'SaaS CRM',
        content: {
          ar: 'بنية سحابية رائعة. توفر عالي جداً وأمان ممتاز.',
          en: 'Excellent cloud infrastructure. Very high availability and excellent security.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'كم التكلفة الشهرية للخادم؟', en: 'What is the monthly server cost?' },
        answer: {
          ar: 'يعتمد على الاستخدام، عادة $500-$5000 شهرياً',
          en: 'Depends on usage, usually $500-$5000 monthly',
        },
      },
    ],
    relatedServices: ['backend-development', 'database-design', 'devops'],
    startingPrice: '$2,000',
  },

  'ai-ml-integration': {
    id: 'ai-ml-integration',
    slug: 'ai-ml-integration',
    icon: Brain,
    title: { ar: 'دمج الذكاء الاصطناعي والتعلم الآلي', en: 'AI & Machine Learning Integration' },
    shortDescription: {
      ar: 'ذكاء اصطناعي متقدم يحسّن أداء تطبيقك بـ 300%+',
      en: 'Advanced AI improving app performance by 300%+',
    },
    longDescription: {
      ar: 'نحن ندمج الذكاء الاصطناعي والتعلم الآلي في تطبيقات. من توصيات ذكية إلى توقعات دقيقة.',
      en: 'We integrate AI and machine learning in applications. From smart recommendations to accurate predictions.',
    },
    benefits: [
      {
        icon: Brain,
        title: { ar: 'ذكاء فوري', en: 'Instant Intelligence' },
        description: {
          ar: 'توصيات ذكية تزيد المبيعات والرضا',
          en: 'Smart recommendations increasing sales and satisfaction',
        },
      },
      {
        icon: TrendingUp,
        title: { ar: 'توقعات دقيقة', en: 'Accurate Predictions' },
        description: {
          ar: 'توقعات تصل دقتها إلى 96%+ لسلوك المستخدم',
          en: 'Predictions with 96%+ accuracy for user behavior',
        },
      },
      {
        icon: Zap,
        title: { ar: 'أتمتة ذكية', en: 'Smart Automation' },
        description: {
          ar: 'أتمتة ذكية توفر الوقت والتكاليف',
          en: 'Smart automation saving time and costs',
        },
      },
    ],
    features: [
      {
        icon: Brain,
        title: { ar: 'نماذج تنبؤية', en: 'Predictive Models' },
        description: {
          ar: 'نماذج مدربة لتوقع السلوك والاتجاهات',
          en: 'Trained models for predicting behavior and trends',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'توصيات ذكية', en: 'Smart Recommendations' },
        description: {
          ar: 'توصي بالمنتجات والخدمات الأنسب لكل مستخدم',
          en: 'Recommend best products and services for each user',
        },
      },
      {
        icon: Zap,
        title: { ar: 'معالجة اللغات الطبيعية', en: 'NLP' },
        description: {
          ar: 'فهم وتحليل النصوص والكلام تلقائياً',
          en: 'Understand and analyze texts and speech automatically',
        },
      },
      {
        icon: Target,
        title: { ar: 'رؤية الحاسوب', en: 'Computer Vision' },
        description: {
          ar: 'تحليل الصور والفيديو بذكاء عالية',
          en: 'Analyze images and videos with high intelligence',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'منصة توصيات ذكية', en: 'Smart Recommendations Platform' },
        description: {
          ar: 'نظام توصيات ذكي زاد المبيعات بـ 280%',
          en: 'Smart recommendation system increased sales by 280%',
        },
        results: [
          { metric: 'الدقة', value: '94%', icon: Target },
          { metric: 'المبيعات', value: '+280%', icon: BarChart3 },
          { metric: 'الرضا', value: '+95%', icon: Award },
        ],
        client: { name: 'E-Commerce Giant', industry: 'تجارة' },
        duration: '3 months',
        technologies: ['TensorFlow', 'Python', 'PyTorch', 'Scikit-learn'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'د. محمد الخليج',
        role: { ar: 'متخصص التعلم الآلي', en: 'Machine Learning Specialist' },
        expertise: ['TensorFlow', 'PyTorch', 'Neural Networks', 'NLP', 'Computer Vision'],
        yearsOfExperience: 8,
        certifications: ['Google ML Professional', 'Deep Learning Specialization'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'نموذج بسيط',
        price: '$5,000 - $10,000',
        features: [
          { name: 'نموذج توصيات أساسي', included: true },
          { name: 'دقة 85%+', included: true },
          { name: 'تدريب شهري', included: false },
          { name: 'دعم مستمر', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'نماذج متقدمة',
        price: '$20,000 - $40,000',
        isPopular: true,
        features: [
          { name: 'نماذج توصيات وتنبؤية متقدمة', included: true },
          { name: 'دقة 94%+', included: true },
          { name: 'تدريب مستمر وتحسين', included: true },
          { name: 'دعم 24/7', included: true },
        ],
      },
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'OpenAI', 'Google AI'],
    testimonials: [
      {
        name: 'سارة محمد',
        role: 'VP Product',
        company: 'E-Commerce Giant',
        content: {
          ar: 'الذكاء الاصطناعي غيّر كل شيء. المبيعات ارتفعت بشكل لا يصدق.',
          en: 'AI changed everything. Sales increased incredibly.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'كم يستغرق تدريب النموذج؟', en: 'How long does model training take?' },
        answer: {
          ar: 'عادة 4-8 أسابيع حسب حجم البيانات',
          en: 'Usually 4-8 weeks depending on data size',
        },
      },
    ],
    relatedServices: ['analytics', 'backend-development', 'database-design'],
    startingPrice: '$5,000',
  },

  'security-compliance': {
    id: 'security-compliance',
    slug: 'security-compliance',
    icon: Shield,
    title: { ar: 'الأمان والامتثال', en: 'Security & Compliance' },
    shortDescription: {
      ar: 'أمان بنكي شامل و امتثال لكل المعايير العالمية',
      en: 'Comprehensive bank-level security and compliance with all global standards',
    },
    longDescription: {
      ar: 'نحن نحمي تطبيقك وبيانات عملائك من جميع الهجمات والتهديدات. امتثال كامل لـ HIPAA, GDPR, PCI-DSS، والمزيد.',
      en: 'We protect your app and customer data from all attacks and threats. Full compliance with HIPAA, GDPR, PCI-DSS, and more.',
    },
    benefits: [
      {
        icon: Shield,
        title: { ar: 'حماية شاملة', en: 'Complete Protection' },
        description: {
          ar: 'حماية من 100+ نوع من الهجمات السيبرية',
          en: 'Protection from 100+ types of cyber attacks',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'امتثال قانوني', en: 'Legal Compliance' },
        description: {
          ar: 'امتثال لـ HIPAA, GDPR, PCI-DSS, SOC 2 وغيرها',
          en: 'Compliance with HIPAA, GDPR, PCI-DSS, SOC 2 and more',
        },
      },
      {
        icon: Award,
        title: { ar: 'ثقة العملاء', en: 'Customer Trust' },
        description: {
          ar: 'عملاء واثقين بأمان بياناتهم معك',
          en: 'Customers confident in their data security with you',
        },
      },
    ],
    features: [
      {
        icon: Shield,
        title: { ar: 'تشفير نهاية لنهاية', en: 'End-to-End Encryption' },
        description: {
          ar: 'تشفير عالي الجودة لكل البيانات',
          en: 'High-quality encryption for all data',
        },
      },
      {
        icon: Database,
        title: { ar: 'نسخ احتياطية آمنة', en: 'Secure Backups' },
        description: {
          ar: 'نسخ احتياطية يومية وآمنة جداً',
          en: 'Daily and very secure backups',
        },
      },
      {
        icon: Zap,
        title: { ar: 'كشف التهديدات', en: 'Threat Detection' },
        description: {
          ar: 'كشف فوري لأي هجوم أو تهديد',
          en: 'Instant detection of any attack or threat',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'اختبارات أمان منتظمة', en: 'Regular Security Tests' },
        description: {
          ar: 'اختبار أمان منتظمة وأخلاقية',
          en: 'Regular and ethical security testing',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'نظام FinTech آمن', en: 'Secure FinTech System' },
        description: {
          ar: 'تطبيق مالي آمن ومتوافق مع معايير البنك',
          en: 'Secure financial app compliant with banking standards',
        },
        results: [
          { metric: 'الأمان', value: 'A+', icon: Shield },
          { metric: 'الامتثال', value: '100%', icon: CheckCircle },
          { metric: 'الهجمات المتوقفة', value: '10K+/month', icon: Zap },
        ],
        client: { name: 'FinTech Pro', industry: 'مالي' },
        duration: '2 months',
        technologies: ['OpenSSL', 'AWS KMS', 'Vault', 'Snyk', 'SonarQube'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'أحمد العنزي',
        role: { ar: 'متخصص الأمان السيبراني', en: 'Cybersecurity Specialist' },
        expertise: ['Penetration Testing', 'Encryption', 'Compliance', 'Threat Detection'],
        yearsOfExperience: 9,
        certifications: ['CISSP', 'CEH', 'OSCP', 'GDPR Specialist'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'أمان أساسي',
        price: '$3,000 - $7,000',
        features: [
          { name: 'تقييم أمان شامل', included: true },
          { name: 'تشفير أساسي', included: true },
          { name: 'نسخ احتياطية يومية', included: true },
          { name: 'مراقبة مستمرة', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'أمان متقدم',
        price: '$10,000 - $25,000',
        isPopular: true,
        features: [
          { name: 'اختبار أمان متقدم وشامل', included: true },
          { name: 'تشفير عسكري الجودة', included: true },
          { name: 'نسخ احتياطية فورية', included: true },
          { name: 'مراقبة وتنبيهات 24/7', included: true },
        ],
      },
    ],
    technologies: ['OpenSSL', 'AWS KMS', 'Vault', 'Snyk', 'SonarQube', 'Fortify'],
    testimonials: [
      {
        name: 'محمود الشمري',
        role: 'مدير الأمن',
        company: 'FinTech Pro',
        content: {
          ar: 'أمان ممتاز وامتثال كامل. نثق بهم تماماً.',
          en: 'Excellent security and full compliance. We trust them completely.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'هل أنتم معتمدون ISO 27001؟', en: 'Are you ISO 27001 certified?' },
        answer: {
          ar: 'نعم، نحن معتمدون ISO 27001 و HIPAA و PCI-DSS',
          en: 'Yes, we are ISO 27001, HIPAA and PCI-DSS certified',
        },
      },
    ],
    relatedServices: ['cloud-infrastructure', 'backend-development', 'database-design'],
    startingPrice: '$3,000',
  },

  'devops-infrastructure': {
    id: 'devops-infrastructure',
    slug: 'devops-infrastructure',
    icon: Wrench,
    title: { ar: 'DevOps والبنية التحتية', en: 'DevOps & Infrastructure' },
    shortDescription: {
      ar: 'بناء أنظمة DevOps متقدمة تسرع الإنتاجية بـ 400%',
      en: 'Building advanced DevOps systems accelerating productivity by 400%',
    },
    longDescription: {
      ar: 'نحن نبني أنظمة DevOps متطورة تجعل فريقك أسرع وأكثر كفاءة. نشر تلقائي، اختبار آلي، مراقبة مستمرة.',
      en: 'We build sophisticated DevOps systems making your team faster and more efficient. Automatic deployment, automated testing, continuous monitoring.',
    },
    benefits: [
      {
        icon: Zap,
        title: { ar: 'سرعة نشر فائقة', en: 'Super Fast Deployment' },
        description: {
          ar: 'نشر جديد كل ساعة بدلاً من أسابيع',
          en: 'New deployment every hour instead of weeks',
        },
      },
      {
        icon: TrendingUp,
        title: { ar: 'إنتاجية أعلى', en: 'Higher Productivity' },
        description: {
          ar: 'فريقك ينتج أكثر بـ 4x بفضل الأتمتة',
          en: 'Your team produces 4x more thanks to automation',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'جودة أفضل', en: 'Better Quality' },
        description: {
          ar: 'اختبارات تلقائية تقلل الأخطاء بـ 90%',
          en: 'Automated tests reduce errors by 90%',
        },
      },
    ],
    features: [
      {
        icon: Wrench,
        title: { ar: 'نشر مستمر', en: 'Continuous Deployment' },
        description: {
          ar: 'نشر تلقائي لكل كود جديد',
          en: 'Automatic deployment for every new code',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'اختبار آلي', en: 'Automated Testing' },
        description: {
          ar: 'اختبارات آلية لكل تغيير',
          en: 'Automated tests for every change',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'مراقبة مستمرة', en: 'Continuous Monitoring' },
        description: {
          ar: 'مراقبة كاملة لـ performance والأخطاء',
          en: 'Complete monitoring for performance and errors',
        },
      },
      {
        icon: Zap,
        title: { ar: 'بنية Infrastructure as Code', en: 'Infrastructure as Code' },
        description: {
          ar: 'إدارة البنية التحتية من خلال أكواد',
          en: 'Manage infrastructure through code',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'منصة SaaS CRM', en: 'SaaS CRM Platform' },
        description: {
          ar: 'بناء نظام DevOps لـ 500+ شركة',
          en: 'Building DevOps system for 500+ companies',
        },
        results: [
          { metric: 'سرعة النشر', value: '10/day', icon: Zap },
          { metric: 'الإنتاجية', value: '+350%', icon: TrendingUp },
          { metric: 'الأخطاء', value: '-85%', icon: CheckCircle },
        ],
        client: { name: 'SaaS CRM Pro', industry: 'SaaS' },
        duration: '3 months',
        technologies: ['Jenkins', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Terraform'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'محمود الشريف',
        role: { ar: 'مهندس DevOps', en: 'DevOps Engineer' },
        expertise: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
        yearsOfExperience: 8,
        certifications: ['Kubernetes CKA', 'AWS DevOps Pro', 'Docker Certified Associate'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'نظام DevOps أساسي',
        price: '$4,000 - $8,000',
        features: [
          { name: 'إعداد CI/CD أساسي', included: true },
          { name: 'نشر تلقائي', included: true },
          { name: 'مراقبة أساسية', included: true },
          { name: 'تدريب الفريق', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'نظام DevOps متقدم',
        price: '$12,000 - $25,000',
        isPopular: true,
        features: [
          { name: 'نظام CI/CD متقدم شامل', included: true },
          { name: 'نشر تلقائي متطور', included: true },
          { name: 'مراقبة وتنبيهات شاملة', included: true },
          { name: 'تدريب فريق كامل', included: true },
        ],
      },
    ],
    technologies: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    testimonials: [
      {
        name: 'علي محمود',
        role: 'Tech Lead',
        company: 'SaaS CRM',
        content: {
          ar: 'نظام DevOps غيّر طريقة عملنا تماماً. الإنتاجية ارتفعت بشكل ضخم.',
          en: 'DevOps system changed our workflow completely. Productivity increased massively.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'هل يمكن استخدام GitHub Actions بدل Jenkins؟', en: 'Can we use GitHub Actions instead of Jenkins?' },
        answer: {
          ar: 'نعم، نحن ندعم أدوات CI/CD متعددة حسب احتياجاتك',
          en: 'Yes, we support multiple CI/CD tools based on your needs',
        },
      },
    ],
    relatedServices: ['cloud-infrastructure', 'backend-development', 'security-compliance'],
    startingPrice: '$4,000',
  },

  'database-design': {
    id: 'database-design',
    slug: 'database-design',
    icon: Database,
    title: { ar: 'تصميم قواعد البيانات', en: 'Database Design' },
    shortDescription: {
      ar: 'قواعد بيانات محسّنة تعالج مليارات البيانات يومياً',
      en: 'Optimized databases handling billions of data points daily',
    },
    longDescription: {
      ar: 'نحن نصمم قواعد بيانات قوية وآمنة وسريعة. قواعس بيانات تعالج الملايين من الاستفسارات يومياً.',
      en: 'We design powerful, secure and fast databases. Databases handling millions of queries daily.',
    },
    benefits: [
      {
        icon: Database,
        title: { ar: 'سرعة فائقة', en: 'Super Fast' },
        description: {
          ar: 'استفسارات تستغرق ميلي ثانية بدلاً من ثوان',
          en: 'Queries taking milliseconds instead of seconds',
        },
      },
      {
        icon: TrendingUp,
        title: { ar: 'توسع غير محدود', en: 'Unlimited Scaling' },
        description: {
          ar: 'من 1000 إلى 1 مليار سجل بسهولة',
          en: 'From 1000 to 1 billion records easily',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'موثوقية عالية', en: 'High Reliability' },
        description: {
          ar: 'ضمان عدم فقدان البيانات أبداً',
          en: 'Guarantee never losing data',
        },
      },
    ],
    features: [
      {
        icon: Database,
        title: { ar: 'قواعد بيانات متعددة', en: 'Multiple Databases' },
        description: {
          ar: 'PostgreSQL, MongoDB, Redis, Elasticsearch وغيرها',
          en: 'PostgreSQL, MongoDB, Redis, Elasticsearch and more',
        },
      },
      {
        icon: Zap,
        title: { ar: 'تخزين مؤقت ذكي', en: 'Smart Caching' },
        description: {
          ar: 'تخزين مؤقت متقدم يسرع الاستفسارات بـ 100x',
          en: 'Advanced caching speeding up queries by 100x',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'فهرسة محسّنة', en: 'Optimized Indexing' },
        description: {
          ar: 'فهرسة ذكية تجعل البحث فوري',
          en: 'Smart indexing making searches instant',
        },
      },
      {
        icon: Shield,
        title: { ar: 'نسخ احتياطية آمنة', en: 'Secure Backups' },
        description: {
          ar: 'نسخ احتياطية آلية وموثوقة جداً',
          en: 'Automatic and very reliable backups',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'منصة Analytics', en: 'Analytics Platform' },
        description: {
          ar: 'قاعدة بيانات تعالج 10 مليار نقطة بيانات يومياً',
          en: 'Database handling 10 billion data points daily',
        },
        results: [
          { metric: 'البيانات/اليوم', value: '10B+', icon: Database },
          { metric: 'سرعة الاستفسار', value: '<100ms', icon: Zap },
          { metric: 'الدقة', value: '99.99%', icon: CheckCircle },
        ],
        client: { name: 'Analytics Giant', industry: 'تحليل البيانات' },
        duration: '4 months',
        technologies: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis', 'Cassandra'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'د. علي الهاجري',
        role: { ar: 'متخصص قواعس البيانات', en: 'Database Architect' },
        expertise: ['Database Design', 'Query Optimization', 'Scaling', 'Performance Tuning'],
        yearsOfExperience: 10,
        certifications: ['PostgreSQL Advanced', 'MongoDB Expert', 'Elasticsearch Certified'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'قاعدة بيانات صغيرة',
        price: '$3,000 - $7,000',
        features: [
          { name: 'تصميم قاعدة بيانات أساسية', included: true },
          { name: 'معالجة 1M سجل', included: true },
          { name: 'نسخ احتياطية يومية', included: true },
          { name: 'تحسين مستمر', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'قاعدة بيانات ضخمة',
        price: '$12,000 - $25,000',
        isPopular: true,
        features: [
          { name: 'تصميم قاعدة بيانات متقدمة', included: true },
          { name: 'معالجة 1B+ سجل', included: true },
          { name: 'نسخ احتياطية فورية', included: true },
          { name: 'تحسين وتطوير مستمر', included: true },
        ],
      },
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra', 'ClickHouse'],
    testimonials: [
      {
        name: 'محمد الكعبي',
        role: 'CTO',
        company: 'Analytics Giant',
        content: {
          ar: 'قاعدة بيانات رائعة. السرعة والموثوقية ممتازة.',
          en: 'Excellent database. Speed and reliability are excellent.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'أي قاعدة بيانات أختار؟', en: 'Which database should I choose?' },
        answer: {
          ar: 'يعتمد على حالتك الاستخدام. PostgreSQL للبيانات الضخمة، MongoDB للمرونة، Redis للسرعة.',
          en: 'Depends on your use case. PostgreSQL for big data, MongoDB for flexibility, Redis for speed.',
        },
      },
    ],
    relatedServices: ['backend-development', 'cloud-infrastructure', 'analytics'],
    startingPrice: '$3,000',
  },

  'api-development': {
    id: 'api-development',
    slug: 'api-development',
    icon: Zap,
    title: { ar: 'تطوير واجهات برمجية', en: 'API Development' },
    shortDescription: {
      ar: 'واجهات برمجية متقدمة تدعم ملايين الطلبات يومياً',
      en: 'Advanced APIs supporting millions of requests daily',
    },
    longDescription: {
      ar: 'نحن نطور واجهات برمجية قوية وآمنة وسريعة. APIs تتعامل مع الملايين من الطلبات بدون مشاكل.',
      en: 'We develop powerful, secure and fast APIs. APIs handling millions of requests without problems.',
    },
    benefits: [
      {
        icon: Zap,
        title: { ar: 'سرعة فائقة', en: 'Super Fast' },
        description: {
          ar: 'استجابة سريعة أقل من 100ms',
          en: 'Quick response less than 100ms',
        },
      },
      {
        icon: TrendingUp,
        title: { ar: 'توسع ضخم', en: 'Massive Scaling' },
        description: {
          ar: 'من 100 إلى 100 مليون طلب يومي',
          en: 'From 100 to 100 million requests daily',
        },
      },
      {
        icon: Award,
        title: { ar: 'أمان بنكي', en: 'Bank-Level Security' },
        description: {
          ar: 'حماية كاملة للبيانات والوصول',
          en: 'Complete data and access protection',
        },
      },
    ],
    features: [
      {
        icon: Zap,
        title: { ar: 'REST و GraphQL', en: 'REST & GraphQL' },
        description: {
          ar: 'دعم REST APIs القياسية و GraphQL المتقدمة',
          en: 'Support for standard REST APIs and advanced GraphQL',
        },
      },
      {
        icon: CheckCircle,
        title: { ar: 'توثيق شامل', en: 'Complete Documentation' },
        description: {
          ar: 'توثيق تفصيلي لكل endpoint',
          en: 'Detailed documentation for each endpoint',
        },
      },
      {
        icon: Shield,
        title: { ar: 'المصادقة الآمنة', en: 'Secure Authentication' },
        description: {
          ar: 'OAuth2, JWT وغيرها من أنماط المصادقة',
          en: 'OAuth2, JWT and other authentication patterns',
        },
      },
      {
        icon: BarChart3,
        title: { ar: 'مراقبة وتنبيهات', en: 'Monitoring & Alerts' },
        description: {
          ar: 'مراقبة شاملة لكل API عند حدوث مشاكل',
          en: 'Comprehensive monitoring and alerts when issues occur',
        },
      },
    ],
    caseStudies: [
      {
        id: 'case-1',
        title: { ar: 'منصة FinTech API', en: 'FinTech API Platform' },
        description: {
          ar: 'API مالي يدعم ملايين المعاملات يومياً',
          en: 'Financial API supporting millions of transactions daily',
        },
        results: [
          { metric: 'الطلبات/الثانية', value: '50K+', icon: Zap },
          { metric: 'الحلاقة', value: '99.99%', icon: CheckCircle },
          { metric: 'سرعة الاستجابة', value: '<50ms', icon: TrendingUp },
        ],
        client: { name: 'FinTech Giant', industry: 'مالي' },
        duration: '3 months',
        technologies: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'Redis'],
      },
    ],
    team: [
      {
        id: 'team-1',
        name: 'محمود الكندي',
        role: { ar: 'مهندس API متقدم', en: 'Senior API Engineer' },
        expertise: ['REST APIs', 'GraphQL', 'API Security', 'Performance', 'Scalability'],
        yearsOfExperience: 9,
        certifications: ['API Design Certified', 'GraphQL Advanced'],
      },
    ],
    pricingTiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'API بسيط',
        price: '$5,000 - $10,000',
        features: [
          { name: 'تطوير API بسيط', included: true },
          { name: 'دعم 1000 طلب/ثانية', included: true },
          { name: 'توثيق أساسية', included: true },
          { name: 'مراقبة 24/7', included: false },
        ],
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'API متقدم',
        price: '$15,000 - $30,000',
        isPopular: true,
        features: [
          { name: 'تطوير API متقدم (REST/GraphQL)', included: true },
          { name: 'دعم 100K+ طلب/ثانية', included: true },
          { name: 'توثيق شاملة وأمثلة', included: true },
          { name: 'مراقبة وتنبيهات 24/7', included: true },
        ],
      },
    ],
    technologies: ['Node.js', 'Express', 'GraphQL', 'FastAPI', 'PostgreSQL', 'Redis'],
    testimonials: [
      {
        name: 'أحمد الشمري',
        role: 'CTO',
        company: 'FinTech Giant',
        content: {
          ar: 'API رائع جداً. موثوق وسريع وآمن تماماً.',
          en: 'Excellent API. Reliable, fast and completely secure.',
        },
        rating: 5,
      },
    ],
    faqItems: [
      {
        question: { ar: 'هل تدعمون GraphQL؟', en: 'Do you support GraphQL?' },
        answer: {
          ar: 'نعم، نحن متخصصون في GraphQL و REST APIs معاً',
          en: 'Yes, we specialize in both GraphQL and REST APIs',
        },
      },
    ],
    relatedServices: ['backend-development', 'database-design', 'security-compliance'],
    startingPrice: '$5,000',
  },
};
