import type { EnhancedProjectDetailProps } from '../components/EnhancedProjectDetail';
import type { EnhancedBlogDetailProps } from '../components/EnhancedBlogDetail';
import type { EnhancedAboutPageProps } from '../components/EnhancedAboutPage';
import type { EnhancedTestimonialsProps } from '../components/EnhancedTestimonials';
import type { EnhancedStatsDashboardProps } from '../components/EnhancedStatsDashboard';
import {
  TrendingUp,
  Users,
  Award,
  Zap,
  Target,
  CheckCircle,
  BarChart3,
  Clock,
  Lightbulb,
  Globe,
  Sparkles,
  Heart,
  Briefcase,
  Shield,
  AlertCircle,
  Database,
} from 'lucide-react';

// ============================================
// PROJECT DATA - مستندات المشاريع المحسّنة
// ============================================

export const enhancedProjectsData: Record<string, EnhancedProjectDetailProps> = {
  'nemora': {
    projectName: { ar: 'منصة نمورة', en: 'Nemora Platform' },
    category: { ar: 'منصة تعليمية', en: 'Educational Platform' },
    challenge: {
      ar: 'بناء منصة تعليمية تدعم الآلاف من الطلاب بنفس الجودة والسرعة، مع تقديم تجربة تعليمية فردية وقابلة للتوسع بلا حدود',
      en: 'Building an educational platform that supports thousands of students with consistent quality and speed, offering personalized learning experiences that scale infinitely',
    },
    solution: {
      ar: 'تطوير بنية معمارية متقدمة قابلة للتوسع باستخدام أحدث التقنيات، مع تجربة تفاعلية وأدوات تعلم ذكية، نظام تحليل متقدم، وتكامل مع منصات الدفع',
      en: 'Developed advanced scalable architecture using cutting-edge technologies, interactive experiences, intelligent learning tools, sophisticated analytics, and payment integration',
    },
    results: [
      {
        metric: { ar: 'الطلاب النشطين', en: 'Active Students' },
        before: '100',
        after: '50,000+',
        impact: 'نمو 500x في 18 شهر مع أداء سلس تماماً وعدم توقف واحد',
      },
      {
        metric: { ar: 'سرعة التحميل', en: 'Load Time' },
        before: '3.5s',
        after: '0.35s',
        impact: 'تحسّن 90% - أسرع من الصناعة، خاصة تحت الضغط الشديد',
      },
      {
        metric: { ar: 'معدل الإكمال', en: 'Completion Rate' },
        before: '32%',
        after: '78%',
        impact: 'زيادة 143% في إكمال الدروس والخطط التعليمية',
      },
      {
        metric: { ar: 'الرضا والحفاظ', en: 'Retention & Satisfaction' },
        before: '3.2/5 - 42%',
        after: '4.8/5 - 92%',
        impact: 'تحسّن هائل في التجربة وإعادة الالتحاق',
      },
    ],
    phases: [
      {
        title: { ar: 'البحث والاستشارات العميقة', en: 'Research & Strategic Consulting' },
        description: {
          ar: 'اجتماعات مكثفة مع 50+ معلم وأكاديمي لفهم احتياجات الطلاب والمعلمين، تحليل المنصات المنافسة العالمية، رسم معمارية قابلة للنمو',
          en: 'Intensive sessions with 50+ educators, student behavioral analysis, competitive benchmarking against global platforms, future-proof architecture design',
        },
        duration: '4 weeks',
        deliverables: [
          { ar: 'دراسة احتياجات شاملة (40 صفحة)', en: 'Comprehensive Needs Analysis (40 pages)' },
          { ar: 'معمارية تقنية مفصلة', en: 'Detailed Technical Architecture' },
          { ar: 'نماذج أولية عالية الدقة', en: 'High-Fidelity Prototypes' },
          { ar: 'خطة الأداء والأمان', en: 'Performance & Security Blueprint' },
        ],
      },
      {
        title: { ar: 'التطوير المتقدم والتكامل', en: 'Advanced Development & Integration' },
        description: {
          ar: 'بناء بنية ميكروسرفيسز، تطوير لوحة تحكم ذكية، نظام توصيات بالذكاء الاصطناعي، تكامل مع Stripe و Google Classroom',
          en: 'Microservices architecture, intelligent dashboard, AI-powered recommendations, integration with Stripe, Google Classroom, and Zoom',
        },
        duration: '14 weeks',
        deliverables: [
          { ar: 'نظام مصادقة متقدم (OAuth2, SAML)', en: 'Advanced Authentication System' },
          { ar: 'لوحة تحكم تفاعلية مع Analytics', en: 'Interactive Dashboard with Real-time Analytics' },
          { ar: 'نظام دروس ذكي مع توصيات', en: 'Smart Lesson System with AI Recommendations' },
          { ar: 'نظام الدفع وإدارة الاشتراكات', en: 'Payment & Subscription Management' },
          { ar: 'منصة الاتصال المباشر (Live Classes)', en: 'Live Communication Platform' },
        ],
      },
      {
        title: { ar: 'الاختبار الشامل والأمان', en: 'Comprehensive Testing & Security' },
        description: {
          ar: 'اختبار آلي 95%+ تغطية، اختبار الحمل حتى 100,000 مستخدم متزامن، اختبار الأمان بمتخصصي cybersecurity',
          en: '95%+ automated test coverage, load testing up to 100K concurrent users, security audits by cybersecurity specialists',
        },
        duration: '6 weeks',
        deliverables: [
          { ar: 'تقارير الاختبار الشاملة', en: 'Comprehensive Test Reports' },
          { ar: 'تحسينات الأداء المعتمدة', en: 'Approved Performance Optimizations' },
          { ar: 'شهادة أمان ISO 27001', en: 'ISO 27001 Security Certification' },
          { ar: 'خطة استرجاع الكوارث', en: 'Disaster Recovery Plan' },
        ],
      },
      {
        title: { ar: 'الإطلاق والدعم المستمر', en: 'Launch & Ongoing Excellence' },
        description: {
          ar: 'إطلاق مرحلي لـ 1000 مستخدم، ثم توسع تدريجي، دعم 24/7، تحديثات أسبوعية بناءً على الملاحظات',
          en: 'Phased rollout starting with 1,000 users, gradual expansion, 24/7 support, weekly updates based on feedback',
        },
        duration: 'Ongoing',
        deliverables: [
          { ar: 'ورش تدريب شاملة للمعلمين', en: 'Comprehensive Teacher Training Workshops' },
          { ar: 'دعم فني 24/7 متعدد اللغات', en: 'Multilingual 24/7 Technical Support' },
          { ar: 'تحديثات ميزات شهرية', en: 'Monthly Feature Updates' },
          { ar: 'تقارير نمو وتحليل فصلية', en: 'Quarterly Growth & Analytics Reports' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'الطلاب المسجلين', en: 'Registered Students' },
        value: '50,000+',
        icon: Users,
        highlight: 'نمو مستمر 15% شهرياً',
      },
      {
        label: { ar: 'معدل الاحتفاظ الشهري', en: 'Monthly Retention' },
        value: '92%',
        icon: TrendingUp,
      },
      {
        label: { ar: 'الدروس المكتملة', en: 'Lessons Completed' },
        value: '500,000+',
        icon: CheckCircle,
      },
      {
        label: { ar: 'وقت الاستجابة', en: 'Response Time' },
        value: '0.35s',
        icon: Zap,
      },
    ],
    images: [
      '/images/projects/nemora-dashboard.jpg',
      '/images/projects/nemora-lessons.jpg',
      '/images/projects/nemora-student.jpg',
      '/images/projects/nemora-analytics.jpg',
    ],
    videos: [
      {
        thumbnail: '/images/projects/nemora-demo.jpg',
        url: 'https://www.youtube.com/embed/example',
        title: { ar: 'شرح المنصة والميزات', en: 'Platform Overview & Features' },
      },
    ],
    testimonial: {
      quote: {
        ar: 'هذه أول منصة تعليمية تفهم حقاً احتياجات المعلم والطالب معاً. الأداء ممتاز، والدعم سريع جداً.',
        en: 'This is the first educational platform that truly understands both teachers and students. Performance is exceptional and support is remarkably responsive.',
      },
      author: { ar: 'أ.د / محمود العطار', en: 'Prof. Mahmoud El-Attar' },
      role: { ar: 'مدير التعليم والابتكار', en: 'Director of Education & Innovation' },
    },
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Socket.io', 'TensorFlow', 'Docker', 'Kubernetes'],
    liveUrl: 'https://nemora.example.com',
    accent: 'from-cyan-500 to-blue-500',
  },

  'commerce-hub': {
    projectName: { ar: 'منصة Commerce Hub', en: 'Commerce Hub Platform' },
    category: { ar: 'متجر إلكتروني متقدم', en: 'Advanced E-Commerce Platform' },
    challenge: {
      ar: 'دمج 8 متاجر إلكترونية منفصلة في منصة واحدة موحدة مع إدارة مخزون مركزية وتقارير متقدمة بدون توقف الخدمة',
      en: 'Consolidate 8 separate e-commerce stores into one unified platform with centralized inventory and advanced reporting without service interruption',
    },
    solution: {
      ar: 'بناء منصة e-commerce حديثة بـ GraphQL، نظام مخزون ذكي مع التنبيهات، تكامل مع 15+ خدمة دفع وشحن عالمية، لوحة تحكم تحليلية متقدمة',
      en: 'Built modern GraphQL-based platform, intelligent inventory system with alerts, integration with 15+ global payment and shipping services, advanced analytics dashboard',
    },
    results: [
      {
        metric: { ar: 'المبيعات الإجمالية', en: 'Total Sales Growth' },
        before: '$2M',
        after: '$8.5M',
        impact: 'نمو 325% في السنة الأولى بفضل الدمج والتحسينات',
      },
      {
        metric: { ar: 'معدل التحويل', en: 'Conversion Rate' },
        before: '1.8%',
        after: '4.2%',
        impact: 'تحسّن 133% بفضل تحسينات UX والتوصيات الذكية',
      },
      {
        metric: { ar: 'وقت معالجة الطلب', en: 'Order Processing Time' },
        before: '4 hours',
        after: '8 minutes',
        impact: 'تحسّن من الآلي الموازي إلى الذكي بالكامل',
      },
      {
        metric: { ar: 'تكاليف العمليات', en: 'Operational Costs' },
        before: '$150K/month',
        after: '$45K/month',
        impact: 'توفير 70% بفضل الأتمتة والتكامل',
      },
    ],
    phases: [
      {
        title: { ar: 'دراسة وتخطيط الدمج', en: 'Consolidation Strategy & Planning' },
        description: {
          ar: 'تحليل 8 أنظمة مختلفة، تصميم معمارية موحدة، خطة هجرة البيانات بدون توقف',
          en: 'Analysis of 8 different systems, unified architecture design, zero-downtime data migration plan',
        },
        duration: '3 weeks',
        deliverables: [
          { ar: 'مقارنة تقنية شاملة للأنظمة الـ 8', en: '8-System Technical Comparison' },
          { ar: 'خريطة طريق الهجرة الآمنة', en: 'Safe Migration Roadmap' },
          { ar: 'نماذج إدارة المخزون', en: 'Inventory Management Models' },
        ],
      },
      {
        title: { ar: 'بناء المنصة الموحدة', en: 'Unified Platform Development' },
        description: {
          ar: 'تطوير API موحدة، واجهة إدارية متقدمة، نظام مخزون ذكي مع التنبؤ بالطلب',
          en: 'Unified API development, advanced admin interface, smart inventory with demand forecasting',
        },
        duration: '16 weeks',
        deliverables: [
          { ar: 'API GraphQL موحدة لـ 8 متاجر', en: 'Unified GraphQL API' },
          { ar: 'لوحة تحكم إدارية شاملة', en: 'Comprehensive Admin Dashboard' },
          { ar: 'نظام المخزون والتنبيهات', en: 'Inventory & Alert System' },
          { ar: 'تكامل الدفع والشحن', en: 'Payment & Shipping Integration' },
        ],
      },
      {
        title: { ar: 'الهجرة والاختبار', en: 'Migration & Testing' },
        description: {
          ar: 'نقل 500K+ عملية بدون خسارة بيانات واحدة، اختبار التوافق الكامل',
          en: 'Migrate 500K+ transactions without data loss, comprehensive compatibility testing',
        },
        duration: '8 weeks',
        deliverables: [
          { ar: 'نقل كامل البيانات التاريخية', en: 'Complete Historical Data Migration' },
          { ar: 'اختبارات المطابقة والتوافق', en: 'Reconciliation & Compatibility Tests' },
          { ar: 'خطة التحويل المرحلي', en: 'Phased Switchover Plan' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'المتاجر المدارة', en: 'Stores Managed' },
        value: '8',
        icon: Globe,
      },
      {
        label: { ar: 'المتاجر النشطة', en: 'Active Transactions/Day' },
        value: '15,000+',
        icon: TrendingUp,
      },
      {
        label: { ar: 'وقت التشغيل', en: 'Uptime' },
        value: '99.99%',
        icon: CheckCircle,
      },
      {
        label: { ar: 'سرعة الاستعلام', en: 'Query Speed' },
        value: '< 50ms',
        icon: Zap,
      },
    ],
    images: [
      '/images/projects/commerce-dashboard.jpg',
      '/images/projects/commerce-inventory.jpg',
      '/images/projects/commerce-reports.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'لم أتخيل أن دمج 8 متاجر يمكن أن يكون هذا سهل وسلس. النتائج تجاوزت كل توقعاتنا.',
        en: 'I never imagined consolidating 8 stores could be this smooth. The results exceeded all our expectations.',
      },
      author: { ar: 'ياسمين خليل', en: 'Yasmine Khalil' },
      role: { ar: 'المدير التنفيذي للعمليات', en: 'VP of Operations' },
    },
    techStack: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Stripe', 'ShipStation'],
    liveUrl: 'https://commerce-hub.example.com',
    accent: 'from-emerald-500 to-teal-500',
  },

  'saas-crm': {
    projectName: { ar: 'نظام CRM سحابي', en: 'Cloud-Based CRM System' },
    category: { ar: 'تطبيق إدارة العملاء', en: 'Customer Relationship Management' },
    challenge: {
      ar: 'بناء CRM متعدد الكيانات يدعم 500+ شركة بـ 50,000+ مستخدم نشط مع معايير أمان عالية جداً',
      en: 'Build multi-tenant CRM supporting 500+ companies with 50,000+ active users and highest security standards',
    },
    solution: {
      ar: 'معمارية SaaS متقدمة، عزل البيانات الكامل لكل كيان، نظام الأذونات الديناميكي، تقارير ذكية بـ BI',
      en: 'Advanced SaaS architecture, complete data isolation per tenant, dynamic permission system, intelligent BI reporting',
    },
    results: [
      {
        metric: { ar: 'الشركات المتصلة', en: 'Connected Companies' },
        before: '50',
        after: '500+',
        impact: 'نمو 10x مع الحفاظ على أداء مثالي',
      },
      {
        metric: { ar: 'نسبة التبني', en: 'Adoption Rate' },
        before: '45%',
        after: '89%',
        impact: 'موظفو العملاء يستخدمون النظام يومياً',
      },
      {
        metric: { ar: 'القيمة المستردة', en: 'ROI per Customer' },
        before: '2.5x',
        after: '7.8x',
        impact: 'العملاء يرون قيمة حقيقية وملموسة',
      },
    ],
    phases: [
      {
        title: { ar: 'التخطيط المعماري المتقدم', en: 'Advanced Architecture Planning' },
        description: {
          ar: 'تصميم معمارية SaaS آمنة، استراتيجية عزل البيانات، خطة التوسع إلى 10,000 شركة',
          en: 'Design secure SaaS architecture, data isolation strategy, scaling plan to 10,000 companies',
        },
        duration: '5 weeks',
        deliverables: [
          { ar: 'وثائق معمارية شاملة (100+ صفحة)', en: 'Comprehensive Architecture Docs' },
          { ar: 'نموذج أمان البيانات', en: 'Data Security Model' },
          { ar: 'خطة التوسع والأداء', en: 'Scalability Roadmap' },
        ],
      },
      {
        title: { ar: 'التطوير والميزات الأساسية', en: 'Development & Core Features' },
        description: {
          ar: 'بناء إدارة الملفات الشخصية، نظام الأذونات، إدارة العلاقات، تتبع المبيعات المتقدم',
          en: 'Build profile management, permission system, relationship tracking, advanced sales pipeline',
        },
        duration: '20 weeks',
        deliverables: [
          { ar: 'لوحة تحكم موحدة للعملاء', en: 'Unified Customer Dashboard' },
          { ar: 'نظام الأذونات متعدد المستويات', en: 'Multi-level Permission System' },
          { ar: 'أتمتة سير العمل', en: 'Workflow Automation' },
          { ar: 'نظام التقارير والـ BI', en: 'Reporting & BI System' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'الشركات النشطة', en: 'Active Companies' },
        value: '500+',
        icon: Briefcase,
      },
      {
        label: { ar: 'المستخدمين النشطين', en: 'Active Users' },
        value: '50,000+',
        icon: Users,
      },
      {
        label: { ar: 'الراضين عن الخدمة', en: 'Satisfaction' },
        value: '94%',
        icon: Heart,
      },
      {
        label: { ar: 'وقت التشغيل', en: 'Uptime' },
        value: '99.95%',
        icon: Award,
      },
    ],
    images: [
      '/images/projects/crm-dashboard.jpg',
      '/images/projects/crm-pipeline.jpg',
      '/images/projects/crm-reports.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'من أفضل الاستثمارات التي قمنا بها. النظام سهل وقوي جداً، والفريق خلفه محترف جداً.',
        en: 'One of the best investments we have made. The system is powerful and intuitive, and the team behind it is highly professional.',
      },
      author: { ar: 'خالد السالم', en: 'Khaled Alsalem' },
      role: { ar: 'الرئيس التنفيذي', en: 'CEO' },
    },
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS', 'Stripe', 'Twilio'],
    liveUrl: 'https://crm.example.com',
    accent: 'from-violet-500 to-purple-500',
  },

  'mobile-fintech': {
    projectName: { ar: 'تطبيق الدفع المحمول', en: 'Mobile Payment App' },
    category: { ar: 'تطبيق مالي', en: 'FinTech Application' },
    challenge: {
      ar: 'بناء تطبيق دفع محمول آمن يدعم عملات متعددة، محافظ رقمية، وتحويلات دولية فورية',
      en: 'Build secure mobile payment app supporting multiple currencies, digital wallets, and instant international transfers',
    },
    solution: {
      ar: 'تطبيق iOS و Android أصلي، تشفير عالي المستوى، تكامل مع البنوك العالمية، نظام احتيال ذكي',
      en: 'Native iOS & Android app, military-grade encryption, integration with global banks, smart fraud detection',
    },
    results: [
      {
        metric: { ar: 'المحافظ الفعالة', en: 'Active Wallets' },
        before: '0',
        after: '200,000+',
        impact: 'نمو قوي في الأشهر الأولى',
      },
      {
        metric: { ar: 'قيمة التحويلات', en: 'Transfer Volume' },
        before: '$0',
        after: '$45M+/year',
        impact: 'منصة معالجة حقيقية وآمنة تماماً',
      },
      {
        metric: { ar: 'معدل رضا المستخدمين', en: 'User Satisfaction' },
        before: '-',
        after: '4.8/5 - App Store',
        impact: 'أكثر من 1000 مراجعة خمسة نجوم',
      },
    ],
    phases: [
      {
        title: { ar: 'التصميم والأمان', en: 'Design & Security Spec' },
        description: {
          ar: 'مراجعة أمان شاملة من خبراء cybersecurity، تصميم تجربة آمنة وسهلة',
          en: 'Comprehensive security audit by cybersecurity experts, design secure yet intuitive experience',
        },
        duration: '4 weeks',
        deliverables: [
          { ar: 'خطة الأمان والامتثال', en: 'Security & Compliance Plan' },
          { ar: 'نماذج UI/UX تفاعلية', en: 'Interactive UI/UX Prototypes' },
          { ar: 'اختبارات الاختراق الأولية', en: 'Penetration Testing' },
        ],
      },
      {
        title: { ar: 'التطوير الأصلي', en: 'Native Development' },
        description: {
          ar: 'تطوير iOS و Android أصليين مع أداء قمة، محافظ الهاتف، التحقق البيومتري',
          en: 'Native iOS & Android development with peak performance, mobile wallets, biometric verification',
        },
        duration: '18 weeks',
        deliverables: [
          { ar: 'تطبيق iOS كامل (App Store)', en: 'Complete iOS App' },
          { ar: 'تطبيق Android كامل (Play Store)', en: 'Complete Android App' },
          { ar: 'نظام المحافظ الرقمية', en: 'Digital Wallet System' },
          { ar: 'نظام التحويل الفوري', en: 'Instant Transfer System' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'التحميلات', en: 'Downloads' },
        value: '200,000+',
        icon: TrendingUp,
      },
      {
        label: { ar: 'التقييم', en: 'App Store Rating' },
        value: '4.8/5',
        icon: Award,
      },
      {
        label: { ar: 'سرعة المعاملات', en: 'Transaction Speed' },
        value: '< 2s',
        icon: Zap,
      },
      {
        label: { ar: 'الأمان', en: 'Security Level' },
        value: 'Bank-Grade',
        icon: Shield,
      },
    ],
    images: [
      '/images/projects/fintech-wallet.jpg',
      '/images/projects/fintech-transfer.jpg',
      '/images/projects/fintech-security.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'أشعر براحة بالة تماماً عند إرسال أموال عبر التطبيق. الأمان والسرعة مثالية.',
        en: 'I feel completely secure sending money through this app. The security and speed are perfect.',
      },
      author: { ar: 'أسيل العوازي', en: 'Aseel Al-Awazi' },
      role: { ar: 'مستخدم منتظم', en: 'Regular User' },
    },
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Wise', 'Firebase', 'Twilio'],
    liveUrl: 'https://fintech-app.example.com',
    accent: 'from-green-500 to-emerald-500',
  },

  'healthcare-platform': {
    projectName: { ar: 'منصة الرعاية الصحية المتكاملة', en: 'Integrated Healthcare Platform' },
    category: { ar: 'تطبيق صحي', en: 'Healthcare Application' },
    challenge: {
      ar: 'بناء منصة صحية شاملة تربط المرضى والأطباء والمستشفيات مع التوافق مع جميع القوانين الصحية العالمية وحماية البيانات الصارمة',
      en: 'Build comprehensive healthcare platform connecting patients, doctors, and hospitals with compliance to all global healthcare laws and strict data protection',
    },
    solution: {
      ar: 'تطبيق ويب وموبايل متطور مع تشفير HIPAA، تكامل مع أجهزة medical IoT، نظام تشخيص بـ ML، وجدولة ذكية',
      en: 'Advanced web and mobile app with HIPAA encryption, medical IoT integration, ML-powered diagnostics, and smart scheduling',
    },
    results: [
      {
        metric: { ar: 'المستشفيات المتصلة', en: 'Connected Hospitals' },
        before: '0',
        after: '120+',
        impact: 'شبكة طبية عملاقة',
      },
      {
        metric: { ar: 'الاستشارات الطبية', en: 'Medical Consultations' },
        before: '0',
        after: '500,000+/year',
        impact: 'خدمة طبية متاحة للملايين',
      },
      {
        metric: { ar: 'الالتزام بالخصوصية', en: 'HIPAA Compliance' },
        before: '-',
        after: '100% Certified',
        impact: 'أعلى معايير حماية البيانات الطبية',
      },
    ],
    phases: [
      {
        title: { ar: 'تحليل المتطلبات الطبية', en: 'Medical Requirements Analysis' },
        description: {
          ar: 'تعاون مع 80+ متخصص طبي لفهم سير العمل الطبي، المعايير HIPAA، وأفضل الممارسات',
          en: 'Collaboration with 80+ medical professionals to understand clinical workflows, HIPAA standards, and best practices',
        },
        duration: '6 weeks',
        deliverables: [
          { ar: 'وثائق المتطلبات الطبية', en: 'Medical Requirements Document' },
          { ar: 'معمارية آمنة معتمدة', en: 'Certified Secure Architecture' },
          { ar: 'نموذج سير العمل', en: 'Workflow Prototypes' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'المرضى المنتظمين', en: 'Active Patients' },
        value: '2M+',
        icon: Users,
      },
      {
        label: { ar: 'الأطباء', en: 'Medical Professionals' },
        value: '15,000+',
        icon: Award,
      },
      {
        label: { ar: 'توقت الاستجابة', en: 'Response Time' },
        value: '< 100ms',
        icon: Zap,
      },
      {
        label: { ar: 'التوفر', en: 'Availability' },
        value: '99.99%',
        icon: CheckCircle,
      },
    ],
    images: [
      '/images/projects/healthcare-dashboard.jpg',
      '/images/projects/healthcare-consultation.jpg',
      '/images/projects/healthcare-records.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'منصة احترافية جداً. الأطباء يتمكنون من متابعة المرضى بكفاءة عالية والمرضى يشعرون برعاية حقيقية.',
        en: 'Highly professional platform. Doctors can efficiently follow up with patients and patients feel genuine care.',
      },
      author: { ar: 'د. سارة الشامي', en: 'Dr. Sarah Al-Shami' },
      role: { ar: 'مديرة مستشفى', en: 'Hospital Director' },
    },
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'MongoDB', 'Video.js', 'TensorFlow'],
    liveUrl: 'https://healthcare.example.com',
    accent: 'from-red-500 to-pink-500',
  },

  'realtor-platform': {
    projectName: { ar: 'منصة العقارات الذكية', en: 'Smart Real Estate Platform' },
    category: { ar: 'منصة عقارية', en: 'Real Estate Platform' },
    challenge: {
      ar: 'بناء منصة عقارية كاملة مع خرائط تفاعلية، جولات 3D افتراضية، نظام عروض ذكي، وإدارة عقد العقارات',
      en: 'Build complete real estate platform with interactive maps, virtual 3D tours, smart offering system, and property contract management',
    },
    solution: {
      ar: 'منصة متقدمة بـ Three.js للجولات 3D، MapBox للخرائط الحية، Stripe للدفع، و AI للتنبؤ بأسعار العقارات',
      en: 'Advanced platform with Three.js for 3D tours, MapBox for live maps, Stripe for payments, and AI for property price prediction',
    },
    results: [
      {
        metric: { ar: 'العقارات المدرجة', en: 'Listed Properties' },
        before: '0',
        after: '50,000+',
        impact: 'سوق عقاري ضخمة وحية',
      },
      {
        metric: { ar: 'المعاملات الشهرية', en: 'Monthly Transactions' },
        before: '0',
        after: '$200M+',
        impact: 'سوق عقارية ثقة عالية جداً',
      },
      {
        metric: { ar: 'الجولات الافتراضية', en: 'Virtual Tours' },
        before: '0',
        after: '45,000+',
        impact: 'تجربة شراء عقار حديثة',
      },
    ],
    phases: [
      {
        title: { ar: 'تطوير تقنيات الجولات', en: 'Virtual Tour Tech Development' },
        description: {
          ar: 'استخدام Three.js و WebGL لإنشاء جولات 3D حقيقية من صور واقعية',
          en: 'Using Three.js and WebGL to create realistic 3D tours from real property photos',
        },
        duration: '8 weeks',
        deliverables: [
          { ar: 'محرك الجولات 3D', en: '3D Tour Engine' },
          { ar: 'نظام البث المباشر', en: 'Live Streaming System' },
          { ar: 'خرائط تفاعلية', en: 'Interactive Maps' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'الوكلاء', en: 'Real Estate Agents' },
        value: '3,000+',
        icon: Briefcase,
      },
      {
        label: { ar: 'المشترين النشطين', en: 'Active Buyers' },
        value: '500,000+',
        icon: Users,
      },
      {
        label: { ar: 'الرضا', en: 'Satisfaction' },
        value: '4.7/5',
        icon: Heart,
      },
      {
        label: { ar: 'سرعة البحث', en: 'Search Speed' },
        value: '< 500ms',
        icon: Zap,
      },
    ],
    images: [
      '/images/projects/realtor-3d-tour.jpg',
      '/images/projects/realtor-map.jpg',
      '/images/projects/realtor-listing.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'منصة تغيير كل شيء في سوق العقارات. العملاء يستطيعون رؤية العقار بالكامل قبل الذهاب إليه.',
        en: 'Platform changed everything in real estate. Clients can see the entire property before visiting.',
      },
      author: { ar: 'محمد الحمادي', en: 'Mohammad Alhammadi' },
      role: { ar: 'رئيس شركة عقارية', en: 'Real Estate CEO' },
    },
    techStack: ['React', 'Three.js', 'MapBox', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS S3'],
    liveUrl: 'https://realtor.example.com',
    accent: 'from-amber-500 to-orange-500',
  },

  'logistics-network': {
    projectName: { ar: 'شبكة اللوجستيات الذكية', en: 'Intelligent Logistics Network' },
    category: { ar: 'تطبيق لوجستي', en: 'Logistics Application' },
    challenge: {
      ar: 'بناء شبكة لوجستية ضخمة تدير آلاف الشحنات يومياً، مع تتبع حي، تحسين المسارات بـ AI، وتكامل مع شركات الشحن العالمية',
      en: 'Build massive logistics network managing thousands of shipments daily with real-time tracking, AI route optimization, and global shipping integration',
    },
    solution: {
      ar: 'نظام عملاق قائم على الموقع الجغرافي، خوارزميات تحسين مسارات متقدمة، تتبع GPS حي، وتنبؤات بأوقات الوصول',
      en: 'Geo-location based system, advanced route optimization algorithms, real-time GPS tracking, and ETA predictions',
    },
    results: [
      {
        metric: { ar: 'الشحنات اليومية', en: 'Daily Shipments' },
        before: '100',
        after: '100,000+',
        impact: 'شبكة لوجستية عملاقة',
      },
      {
        metric: { ar: 'كفاءة المسار', en: 'Route Efficiency' },
        before: '60%',
        after: '94%',
        impact: 'توفير الوقود والتكاليف بنسبة 40%',
      },
      {
        metric: { ar: 'معدل التسليم الموثوق', en: 'On-Time Delivery' },
        before: '75%',
        after: '98.5%',
        impact: 'شبكة موثوقة جداً',
      },
    ],
    phases: [
      {
        title: { ar: 'تطوير محرك التتبع والخرائط', en: 'Tracking & Maps Engine' },
        description: {
          ar: 'بناء نظام تتبع حي يدعم مئات الآلاف من الشحنات بتزامن كامل',
          en: 'Build real-time tracking system supporting hundreds of thousands of shipments with full synchronization',
        },
        duration: '10 weeks',
        deliverables: [
          { ar: 'محرك تتبع GPS', en: 'GPS Tracking Engine' },
          { ar: 'نظام تحسين المسارات', en: 'Route Optimization System' },
          { ar: 'لوحة تحكم الشحنات', en: 'Shipment Dashboard' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'محطات التوزيع', en: 'Distribution Centers' },
        value: '200+',
        icon: Globe,
      },
      {
        label: { ar: 'المركبات', en: 'Vehicles' },
        value: '5,000+',
        icon: TrendingUp,
      },
      {
        label: { ar: 'المتعاقدين', en: 'Partners' },
        value: '500+',
        icon: Briefcase,
      },
      {
        label: { ar: 'أوقات الوصول الدقيقة', en: 'Accuracy' },
        value: '99.2%',
        icon: CheckCircle,
      },
    ],
    images: [
      '/images/projects/logistics-map.jpg',
      '/images/projects/logistics-dashboard.jpg',
      '/images/projects/logistics-tracking.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'النظام ساعدنا في توفير ملايين الدولارات عن طريق تحسين المسارات والعمليات. موثوقية عالية جداً.',
        en: 'System helped us save millions through route optimization and operations. Extremely reliable.',
      },
      author: { ar: 'أحمد العمري', en: 'Ahmed Alomri' },
      role: { ar: 'مدير اللوجستيات', en: 'Logistics Director' },
    },
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Mapbox', 'AWS', 'Google OR-Tools', 'Socket.io'],
    liveUrl: 'https://logistics.example.com',
    accent: 'from-blue-500 to-indigo-500',
  },

  'social-network': {
    projectName: { ar: 'شبكة اجتماعية متخصصة', en: 'Specialized Social Network' },
    category: { ar: 'منصة اجتماعية', en: 'Social Network' },
    challenge: {
      ar: 'بناء شبكة اجتماعية متخصصة تربط المحترفين في مجال واحد، مع قدرات تعاون متقدمة، نظام تصفية محتوى ذكي، وآليات مكافآت مدمجة',
      en: 'Build specialized social network connecting professionals in one field, with advanced collaboration capabilities, intelligent content filtering, and built-in reward mechanisms',
    },
    solution: {
      ar: 'شبكة اجتماعية قائمة على المجتمعات، نظام التعليقات المتسلسلة، خيوط المناقشات الذكية، وتكامل مع NFTs والعملات الرقمية',
      en: 'Community-based social network, threaded comment system, intelligent discussion threads, and NFT and cryptocurrency integration',
    },
    results: [
      {
        metric: { ar: 'المستخدمين النشطين', en: 'Active Users' },
        before: '0',
        after: '1.5M+',
        impact: 'مجتمع ضخم وحي',
      },
      {
        metric: { ar: 'المشاركات اليومية', en: 'Daily Posts' },
        before: '0',
        after: '250,000+',
        impact: 'محتوى وفير وحي',
      },
      {
        metric: { ar: 'وقت الجلسة الوسيط', en: 'Median Session Time' },
        before: '-',
        after: '45 minutes',
        impact: 'مشاركة عميقة جداً',
      },
    ],
    phases: [
      {
        title: { ar: 'بناء أساس الشبكة الاجتماعية', en: 'Social Network Foundation' },
        description: {
          ar: 'تطوير نظام مركزي لإدارة المستخدمين والمحتوى والتفاعلات مع قدرات حي كاملة',
          en: 'Develop central system for user, content, and interaction management with full real-time capabilities',
        },
        duration: '12 weeks',
        deliverables: [
          { ar: 'نظام الملفات الشخصية', en: 'Profile System' },
          { ar: 'نظام المشاركات والتفاعلات', en: 'Post & Interaction System' },
          { ar: 'نظام الإشعارات الحي', en: 'Real-time Notifications' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'المجتمعات النشطة', en: 'Active Communities' },
        value: '5,000+',
        icon: Users,
      },
      {
        label: { ar: 'الأحداث الشهرية', en: 'Monthly Events' },
        value: '1,000+',
        icon: Award,
      },
      {
        label: { ar: 'الرضا', en: 'Satisfaction' },
        value: '4.9/5',
        icon: Heart,
      },
      {
        label: { ar: 'الاحتفاظ الشهري', en: 'Monthly Retention' },
        value: '89%',
        icon: TrendingUp,
      },
    ],
    images: [
      '/images/projects/social-feed.jpg',
      '/images/projects/social-community.jpg',
      '/images/projects/social-events.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'أفضل منصة اجتماعية متخصصة. الحوارات هادفة والمجتمع محترف جداً.',
        en: 'Best specialized social platform. Conversations are meaningful and the community is highly professional.',
      },
      author: { ar: 'ليلى الزعابي', en: 'Layla Alzaabi' },
      role: { ar: 'عضو نشطة', en: 'Active Member' },
    },
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'AWS', 'Stripe', 'Web3.js'],
    liveUrl: 'https://socialnet.example.com',
    accent: 'from-purple-500 to-pink-500',
  },

  'ai-analytics': {
    projectName: { ar: 'منصة التحليل الذكية', en: 'Intelligent Analytics Platform' },
    category: { ar: 'منصة تحليل', en: 'Analytics Platform' },
    challenge: {
      ar: 'بناء منصة تحليل متقدمة تتعامل مع مليارات نقاط البيانات يومياً، مع predictions ذكية وتنبيهات حقيقية بالوقت الفعلي',
      en: 'Build advanced analytics platform handling billions of data points daily with intelligent predictions and real-time alerts',
    },
    solution: {
      ar: 'منصة قائمة على الـ Data Warehouse، استخدام BigQuery و Snowflake، نماذج ML متقدمة، وتصور بيانات حديث',
      en: 'Data Warehouse-based platform using BigQuery and Snowflake, advanced ML models, and modern data visualization',
    },
    results: [
      {
        metric: { ar: 'نقاط البيانات المعالجة', en: 'Data Points Processed' },
        before: '0',
        after: '10B+/day',
        impact: 'معالجة ضخمة جداً',
      },
      {
        metric: { ar: 'دقة التنبؤات', en: 'Prediction Accuracy' },
        before: '-',
        after: '96.5%',
        impact: 'predictions موثوقة جداً',
      },
      {
        metric: { ar: 'التأخير في المعالجة', en: 'Processing Latency' },
        before: 'hours',
        after: '< 100ms',
        impact: 'تحليل فوري تقريباً',
      },
    ],
    phases: [
      {
        title: { ar: 'بناء البنية التحتية للبيانات', en: 'Data Infrastructure Build' },
        description: {
          ar: 'تصميم وبناء data warehouse قادرة على معالجة مليارات الأحداث',
          en: 'Design and build data warehouse capable of processing billions of events',
        },
        duration: '8 weeks',
        deliverables: [
          { ar: 'Data Pipeline', en: 'Data Pipeline' },
          { ar: 'نماذج ML', en: 'ML Models' },
          { ar: 'لوحات التحليل', en: 'Analytics Dashboards' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'العملاء المؤسسيين', en: 'Enterprise Clients' },
        value: '200+',
        icon: Briefcase,
      },
      {
        label: { ar: 'التقارير الشهرية', en: 'Monthly Reports' },
        value: '1M+',
        icon: BarChart3,
      },
      {
        label: { ar: 'الدقة', en: 'Accuracy' },
        value: '96.5%',
        icon: CheckCircle,
      },
      {
        label: { ar: 'التوفر', en: 'Availability' },
        value: '99.95%',
        icon: Zap,
      },
    ],
    images: [
      '/images/projects/analytics-dashboard.jpg',
      '/images/projects/analytics-predictions.jpg',
      '/images/projects/analytics-reports.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'منصة التحليل غيرت طريقة اتخاذنا للقرارات. البيانات الآن واضحة وقابلة للعمل.',
        en: 'Analytics platform changed how we make decisions. Data is now clear and actionable.',
      },
      author: { ar: 'د. خالد المطيري', en: 'Dr. Khaled Almotairi' },
      role: { ar: 'مدير البيانات', en: 'Data Director' },
    },
    techStack: ['React', 'Python', 'BigQuery', 'Snowflake', 'TensorFlow', 'Apache Spark', 'Tableau'],
    liveUrl: 'https://analytics.example.com',
    accent: 'from-cyan-500 to-blue-500',
  },

  'iot-smart-city': {
    projectName: { ar: 'منصة مدينة ذكية', en: 'Smart City Platform' },
    category: { ar: 'نظام IoT', en: 'IoT Platform' },
    challenge: {
      ar: 'بناء منصة تربط ملايين أجهزة IoT عبر المدينة، مع إدارة الطاقة، التحكم بحركة المرور، والاستجابة للطوارئ',
      en: 'Build platform connecting millions of IoT devices across city with energy management, traffic control, and emergency response',
    },
    solution: {
      ar: 'منصة IoT قائمة على MQTT و Kubernetes، معالجة البيانات الحية من الحساسات، AI للتنبؤ، وتكامل مع أنظمة البدلية',
      en: 'IoT platform based on MQTT and Kubernetes, live sensor data processing, AI predictions, and municipal system integration',
    },
    results: [
      {
        metric: { ar: 'الأجهزة المتصلة', en: 'Connected Devices' },
        before: '0',
        after: '500,000+',
        impact: 'شبكة ضخمة من الحساسات',
      },
      {
        metric: { ar: 'توفير الطاقة', en: 'Energy Savings' },
        before: '-',
        after: '35%',
        impact: 'توفير ملايين دولار سنوياً',
      },
      {
        metric: { ar: 'تحسن حركة المرور', en: 'Traffic Improvement' },
        before: '-',
        after: '28%',
        impact: 'مدينة أكثر سلاسة',
      },
    ],
    phases: [
      {
        title: { ar: 'نشر شبكة الحساسات', en: 'Sensor Network Deployment' },
        description: {
          ar: 'تركيب وتشغيل 500,000+ حساس عبر المدينة',
          en: 'Install and operate 500,000+ sensors across the city',
        },
        duration: '16 weeks',
        deliverables: [
          { ar: 'نظام الاتصالات', en: 'Communication System' },
          { ar: 'منصة المعالجة', en: 'Processing Platform' },
          { ar: 'لوحات المراقبة', en: 'Monitoring Dashboards' },
        ],
      },
    ],
    metrics: [
      {
        label: { ar: 'الحساسات النشطة', en: 'Active Sensors' },
        value: '500K+',
        icon: Zap,
      },
      {
        label: { ar: 'البيانات المعالجة يومياً', en: 'Daily Data Points' },
        value: '500B+',
        icon: BarChart3,
      },
      {
        label: { ar: 'الاستجابة', en: 'Response Time' },
        value: '< 1s',
        icon: Clock,
      },
      {
        label: { ar: 'التوفر', en: 'Availability' },
        value: '99.99%',
        icon: CheckCircle,
      },
    ],
    images: [
      '/images/projects/smartcity-map.jpg',
      '/images/projects/smartcity-traffic.jpg',
      '/images/projects/smartcity-energy.jpg',
    ],
    testimonial: {
      quote: {
        ar: 'مدينتنا اصبحت ذكية حقاً. الأداء تحسن والخدمات أفضل بكثير.',
        en: 'Our city is now truly smart. Performance improved and services are much better.',
      },
      author: { ar: 'الدكتور علي الشامسي', en: 'Dr. Ali Alshamsi' },
      role: { ar: 'مدير البلدية', en: 'Municipality Director' },
    },
    techStack: ['Node.js', 'MQTT', 'Kubernetes', 'PostgreSQL', 'Grafana', 'TensorFlow', 'AWS IoT Core'],
    liveUrl: 'https://smartcity.example.com',
    accent: 'from-green-500 to-cyan-500',
  },
};

// ============================================
// BLOG DATA - مستندات المدونة المحسّنة
// ============================================

export const enhancedBlogPostsData: Record<string, EnhancedBlogDetailProps> = {
  'building-scalable-platforms': {
    title: { ar: 'بناء منصات قابلة للتوسع: من 100 إلى 10 مليون مستخدم', en: 'Building Scalable Platforms: From 100 to 10M Users' },
    excerpt: {
      ar: 'دليل عملي شامل يغطي كل ما تحتاج معرفته لبناء تطبيقات تنمو من مئات إلى ملايين المستخدمين دون توقف الخدمة',
      en: 'Practical comprehensive guide covering everything needed to build applications that scale seamlessly from hundreds to millions of users',
    },
    author: { ar: 'علي محمود - VP of Engineering', en: 'Ali Mahmoud - VP of Engineering' },
    publishDate: '2024-12-20',
    readTime: '25 دقائق',
    category: { ar: 'التطوير', en: 'Development' },
    coverImage: '/images/blog/scalable-platforms.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'بناء منصة قابلة للتوسع ليس مجرد عن الأداء والسرعة، بل عن الهندسة المعمارية الصحيحة التي تسمح بالنمو دون إعادة كتابة الكود. في هذا المقال سأشارك الدروس من تطوير منصات استقبلت 10 مليون مستخدم.',
          en: 'Building a scalable platform is not just about performance, but about the right architecture that allows growth without rewriting code. I will share lessons from developing platforms that received 10 million users.',
        },
      },
      {
        type: 'heading',
        title: { ar: 'المبادئ الأساسية للتوسع', en: 'Core Scaling Principles' },
      },
      {
        type: 'list',
        items: [
          {
            ar: 'التقسيم والفصل (Separation of Concerns): فصل القلق عن الشؤون',
            en: 'Separation of Concerns - keeping different parts independent',
          },
          {
            ar: 'المرونة في المعمارية (Flexibility): القدرة على التغيير بدون كسر كل شيء',
            en: 'Flexibility - ability to change without breaking everything',
          },
          {
            ar: 'المراقبة والقياس (Observability): معرفة ما يحدث في النظام',
            en: 'Observability - knowing what is happening in your system',
          },
          {
            ar: 'التكرار والتحسين (Iteration): التطوير المستمر بناءً على البيانات',
            en: 'Iteration - continuous improvement based on data',
          },
        ],
      },
      {
        type: 'heading',
        title: { ar: 'المرحلة 1: من 100 إلى 10,000 مستخدم', en: 'Stage 1: From 100 to 10,000 Users' },
      },
      {
        type: 'paragraph',
        content: {
          ar: 'في هذه المرحلة، تركيزك يجب أن يكون على بناء المنتج الصحيح بسرعة. الأداء أقل أهمية من الميزات. استخدم تقنيات بسيطة وواضحة.',
          en: 'At this stage, your focus should be on building the right product quickly. Performance is less important than features. Use simple and clear technologies.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'استخدم قواعد البيانات المناسبة', en: 'Use the Right Databases' },
        icon: Lightbulb,
        content: {
          ar: 'لا توجد قاعدة بيانات واحدة تناسب الجميع. استخدم PostgreSQL للبيانات العلائقية، Redis للكيش، Elasticsearch للبحث.',
          en: 'No single database fits all. Use PostgreSQL for relational data, Redis for caching, Elasticsearch for search.',
        },
      },
      {
        label: { ar: 'الكيش هو صديقك', en: 'Caching is Your Friend' },
        icon: Zap,
        content: {
          ar: 'الكيش الذكي يمكن أن يقلل من ضغط قاعدة البيانات بنسبة 90%. استخدم Redis في الواجهة الخلفية و HTTP caching في الواجهة الأمامية.',
          en: 'Smart caching can reduce database pressure by 90%. Use Redis in backend and HTTP caching in frontend.',
        },
      },
      {
        label: { ar: 'المراقبة من البداية', en: 'Monitor from Day One' },
        icon: BarChart3,
        content: {
          ar: 'استخدم أدوات مثل DataDog أو New Relic من البداية. المشاكل التي تكتشفها مبكراً أرخص بكثير من اكتشافها لاحقاً.',
          en: 'Use tools like DataDog or New Relic from day one. Problems discovered early are much cheaper than discovering them later.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'microservices-guide',
        title: { ar: 'دليل الخدمات الدقيقة: متى وكيف', en: 'Microservices Guide: When and How' },
        excerpt: { ar: 'فهم البنية والفوائد والتحديات والمتطلبات الحقيقية', en: 'Understanding architecture, benefits, challenges and real requirements' },
        image: '/images/blog/microservices.jpg',
      },
      {
        slug: 'database-optimization',
        title: { ar: 'تحسين قاعدة البيانات: من النظرية إلى الممارسة', en: 'Database Optimization: Theory to Practice' },
        excerpt: { ar: 'كيفية جعل قاعدة البيانات 100x أسرع', en: 'How to make your database 100x faster' },
        image: '/images/blog/database.jpg',
      },
    ],
    tags: ['architecture', 'performance', 'database', 'backend', 'scaling'],
    accent: 'from-cyan-500 to-blue-500',
  },

  'security-first-development': {
    title: { ar: 'التطوير مع الأمان كأولوية أولى', en: 'Security-First Development Practices' },
    excerpt: {
      ar: 'كيفية بناء تطبيقات آمنة من البداية بدلاً من إضافة الأمان لاحقاً كنقطة إضافية',
      en: 'How to build secure applications from day one instead of adding security later as an afterthought',
    },
    author: { ar: 'فاطمة علي - Security Lead', en: 'Fatima Ali - Security Lead' },
    publishDate: '2024-12-15',
    readTime: '18 دقائق',
    category: { ar: 'الأمان', en: 'Security' },
    coverImage: '/images/blog/security-first.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'الأمان لا يجب أن يكون بعد فكرة. يجب أن يكون في قلب كل قرار تطويري. في عملنا مع 500+ شركة، رأينا أن التطبيقات المأمونة ليست فقط أكثر أماناً، بل أيضاً أسرع في الإطلاق.',
          en: 'Security should not be an afterthought. It should be at the heart of every development decision. In our work with 500+ companies, we found that secure applications are not just safer, but also faster to deploy.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'التشفير في الحركة والسكون', en: 'Encryption in Transit & at Rest' },
        icon: Shield,
        content: {
          ar: 'استخدم TLS/SSL لجميع الاتصالات، وشفّر البيانات الحساسة في الخادم باستخدام AES-256.',
          en: 'Use TLS/SSL for all connections, encrypt sensitive data on server using AES-256.',
        },
      },
      {
        label: { ar: 'إدارة الأسرار', en: 'Secret Management' },
        icon: Award,
        content: {
          ar: 'لا تخزن المفاتيح والكلمات المرور في الكود. استخدم AWS Secrets Manager أو HashiCorp Vault.',
          en: 'Never store keys and passwords in code. Use AWS Secrets Manager or HashiCorp Vault.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'oauth2-guide',
        title: { ar: 'دليل OAuth2: التحقق الآمن', en: 'OAuth2 Guide: Secure Authentication' },
        excerpt: { ar: 'كيفية تطبيق OAuth2 بشكل صحيح', en: 'How to implement OAuth2 correctly' },
        image: '/images/blog/oauth.jpg',
      },
    ],
    tags: ['security', 'encryption', 'authentication', 'compliance'],
    accent: 'from-red-500 to-pink-500',
  },

  'user-experience-design': {
    title: { ar: 'التصميم الذي يبدل السلوك: من الفكرة إلى النتيجة', en: 'Design That Changes Behavior: From Idea to Results' },
    excerpt: {
      ar: 'كيفية استخدام أبحاث المستخدمين والتصميم التجريبي لإنشاء تجارب تحقق نتائج حقيقية',
      en: 'How to use user research and experimental design to create experiences that deliver real results',
    },
    author: { ar: 'سارة محمد - UX Research Lead', en: 'Sarah Mohamed - UX Research Lead' },
    publishDate: '2024-12-10',
    readTime: '20 دقائق',
    category: { ar: 'التصميم', en: 'Design' },
    coverImage: '/images/blog/ux-design.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'التصميم ليس فقط عن الجمال. إنه عن فهم المستخدم وتسهيل حياته. عندما تصمم بناءً على البيانات والمشاهدات، ترى تحسنات حقيقية في معدلات التحويل والرضا.',
          en: 'Design is not just about beauty. It is about understanding the user and making their life easier. When you design based on data and insights, you see real improvements in conversion rates and satisfaction.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'اختبار A/B المستمر', en: 'Continuous A/B Testing' },
        icon: Target,
        content: {
          ar: 'لا تفترض ما يفضله المستخدم. اختبر. في منصة واحدة، تحسين زر واحد زاد التحويلات بنسبة 23%.',
          en: 'Do not assume what users prefer. Test. On one platform, improving a single button increased conversions by 23%.',
        },
      },
      {
        label: { ar: 'خرائط الحرارة والتسجيلات', en: 'Heatmaps & Session Recordings' },
        icon: Sparkles,
        content: {
          ar: 'شاهد بالفعل كيف يتفاعل المستخدمون مع تصميمك. الأدوات مثل Hotjar تحكي قصة حقيقية.',
          en: 'See how users actually interact with your design. Tools like Hotjar tell the real story.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'design-systems',
        title: { ar: 'أنظمة التصميم: العمود الفقري للتطبيقات الكبيرة', en: 'Design Systems: The Backbone of Large Apps' },
        excerpt: { ar: 'كيفية بناء نظام تصميم يتسع', en: 'How to build a design system that scales' },
        image: '/images/blog/design-systems.jpg',
      },
    ],
    tags: ['design', 'ux', 'research', 'testing', 'conversion'],
    accent: 'from-purple-500 to-pink-500',
  },

  'ai-integration-guide': {
    title: { ar: 'دمج الذكاء الاصطناعي في تطبيقاتك: من OpenAI إلى التطبيق الخاص بك', en: 'Integrating AI Into Your Apps: From OpenAI to Deployment' },
    excerpt: {
      ar: 'دليل عملي لكيفية استخدام نماذج AI الحديثة في تطبيقاتك دون الحاجة لدرجة博士 في machine learning',
      en: 'Practical guide on how to use modern AI models in your applications without needing a PhD in machine learning',
    },
    author: { ar: 'خالد سالم - AI Engineer', en: 'Khaled Salem - AI Engineer' },
    publishDate: '2024-12-05',
    readTime: '22 دقائق',
    category: { ar: 'AI والتطوير', en: 'AI & Development' },
    coverImage: '/images/blog/ai-integration.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'الذكاء الاصطناعي لم يعد حلماً مستقبلياً. إنه هنا الآن وسهل التكامل. في هذا المقال سأشرح كيفية إضافة ميزات AI إلى تطبيقك في أقل من ساعة.',
          en: 'Artificial Intelligence is no longer a future dream. It is here now and easy to integrate. In this article I will explain how to add AI features to your app in under an hour.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'استخدام OpenAI API بأمان', en: 'Using OpenAI API Safely' },
        icon: Lightbulb,
        content: {
          ar: 'لا تمرر البيانات الحساسة مباشرة إلى OpenAI. استخدم وسيط وقم بتصفية البيانات.',
          en: 'Never pass sensitive data directly to OpenAI. Use middleware and filter data.',
        },
      },
      {
        label: { ar: 'التكاليف والأداء', en: 'Costs & Performance' },
        icon: Zap,
        content: {
          ar: 'استخدم نماذج أصغر (GPT-3.5) للمهام البسيطة و GPT-4 فقط عند الحاجة. يمكنك توفير 80% من التكاليف.',
          en: 'Use smaller models (GPT-3.5) for simple tasks and GPT-4 only when needed. You can save 80% of costs.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'vector-databases',
        title: { ar: 'قواعد البيانات الموجهة (Vector Databases): المستقبل', en: 'Vector Databases: The Future of Search' },
        excerpt: { ar: 'كيفية استخدام Pinecone و Weaviate', en: 'How to use Pinecone and Weaviate' },
        image: '/images/blog/vector-db.jpg',
      },
    ],
    tags: ['ai', 'machine-learning', 'integration', 'openai', 'automation'],
    accent: 'from-blue-500 to-cyan-500',
  },

  'remote-team-culture': {
    title: { ar: 'بناء ثقافة فريق موزع عالمي بنجاح', en: 'Building Strong Distributed Team Culture' },
    excerpt: {
      ar: 'دروس من إدارة فريق 50+ شخص موزع على 12 دولة مع الحفاظ على الإنتاجية والرضا',
      en: 'Lessons from managing a team of 50+ people distributed across 12 countries while maintaining productivity and satisfaction',
    },
    author: { ar: 'علي محمود - CEO', en: 'Ali Mahmoud - CEO' },
    publishDate: '2024-11-28',
    readTime: '16 دقائق',
    category: { ar: 'القيادة', en: 'Leadership' },
    coverImage: '/images/blog/remote-culture.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'الفرق الموزعة ليست مستقبل العمل فحسب، إنها الآن الواقع. لكن بناء ثقافة قوية عن بعد أصعب من المكتب. في هذا المقال سأشارك ما تعلمناه من إدارة فريق عالمي.',
          en: 'Distributed teams are not just the future of work, they are now the reality. But building a strong culture remotely is harder than in an office. In this article I will share what we learned from managing a global team.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'التواصل المتزامن والغير متزامن', en: 'Synchronous & Asynchronous Communication' },
        icon: Globe,
        content: {
          ar: 'ليس كل شيء يحتاج اجتماع. استخدم Slack و Discord للتواصل الغير متزامن وحفظ الاجتماعات للقرارات.',
          en: 'Not everything needs a meeting. Use Slack and Discord for async communication and reserve meetings for decisions.',
        },
      },
      {
        label: { ar: 'تقييم الأداء الموضوعي', en: 'Objective Performance Metrics' },
        icon: Target,
        content: {
          ar: 'في الفريق الموزع، تقيّم على النتائج وليس على "من يبدو أنه يعمل أكثر". هذا أكثر عدلاً وأفضل للإنتاجية.',
          en: 'In distributed teams, evaluate on results, not who looks like they work more. This is fairer and better for productivity.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'hiring-remote',
        title: { ar: 'التوظيف للفريق الموزع: المزالق الشائعة', en: 'Hiring for Remote Teams: Common Pitfalls' },
        excerpt: { ar: 'كيفية توظيف الأشخاص المناسبين للعمل البعيد', en: 'How to hire the right people for remote work' },
        image: '/images/blog/hiring.jpg',
      },
    ],
    tags: ['culture', 'remote', 'leadership', 'team', 'productivity'],
    accent: 'from-green-500 to-emerald-500',
  },

  'cost-optimization': {
    title: { ar: 'تحسين التكاليف السحابية: توفير 70% من فاتورة AWS', en: 'Cloud Cost Optimization: Save 70% on Your AWS Bill' },
    excerpt: {
      ar: 'كيفية تقليل تكاليف AWS و Azure و GCP بدون التضحية بالأداء أو الأمان',
      en: 'How to reduce AWS, Azure, and GCP costs without sacrificing performance or security',
    },
    author: { ar: 'محمد علي - Infrastructure Lead', en: 'Mohammad Ali - Infrastructure Lead' },
    publishDate: '2024-11-20',
    readTime: '19 دقائق',
    category: { ar: 'الهندسة', en: 'Engineering' },
    coverImage: '/images/blog/cost-optimization.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'معظم الشركات تدفع أكثر من اللازم للخدمات السحابية. نحن ساعدنا عملاء توفير ملايين الدولارات بدون تغيير واحد في الكود. إليك كيف.',
          en: 'Most companies overpay for cloud services. We helped clients save millions without a single code change. Here is how.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'Reserved Instances والتوفير', en: 'Reserved Instances & Savings Plans' },
        icon: BarChart3,
        content: {
          ar: 'استخدم reserved instances للموارد المستقرة. توفر 40-60% من تكاليف on-demand.',
          en: 'Use reserved instances for stable resources. Save 40-60% of on-demand costs.',
        },
      },
      {
        label: { ar: 'Spot Instances للأعمال الموازية', en: 'Spot Instances for Batch Jobs' },
        icon: Zap,
        content: {
          ar: 'استخدم spot instances للمهام غير الحساسة. توفر 70-90% من التكاليف.',
          en: 'Use spot instances for non-critical tasks. Save 70-90% of costs.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'infrastructure-as-code',
        title: { ar: 'Infrastructure as Code: Terraform من الصفر', en: 'Infrastructure as Code: Terraform from Scratch' },
        excerpt: { ar: 'إدارة البنية التحتية مثل الكود', en: 'Manage infrastructure like code' },
        image: '/images/blog/terraform.jpg',
      },
    ],
    tags: ['devops', 'cost', 'aws', 'cloud', 'optimization'],
    accent: 'from-yellow-500 to-orange-500',
  },

  'kubernetes-production': {
    title: { ar: 'Kubernetes في الإنتاج: من الصفر إلى الملايين', en: 'Kubernetes in Production: From Zero to Millions' },
    excerpt: {
      ar: 'دليل شامل لتشغيل Kubernetes بأمان في بيئة الإنتاج مع monitoring وscaling واستقرار عالي',
      en: 'Comprehensive guide to running Kubernetes safely in production with monitoring, scaling, and high stability',
    },
    author: { ar: 'محمد سالم - DevOps Lead', en: 'Mohammad Salem - DevOps Lead' },
    publishDate: '2024-11-12',
    readTime: '28 دقائق',
    category: { ar: 'DevOps', en: 'DevOps' },
    coverImage: '/images/blog/kubernetes.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'Kubernetes ليست سهلة، لكنها قوية جداً. في هذا المقال سأشارك 5 سنوات من التعلم والأخطاء التي أخذت مليارات الدولارات لتعلمها.',
          en: 'Kubernetes is not easy, but it is incredibly powerful. In this article I will share 5 years of learning and mistakes that cost billions to learn.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'Resource Limits والـ Requests', en: 'Resource Limits & Requests' },
        icon: Zap,
        content: {
          ar: 'عيّن limits و requests بشكل صحيح. هذا يمنع الـ cluster من الانهيار.',
          en: 'Set limits and requests correctly. This prevents cluster collapse.',
        },
      },
      {
        label: { ar: 'Health Checks والـ Probes', en: 'Health Checks & Probes' },
        icon: CheckCircle,
        content: {
          ar: 'استخدم liveness و readiness probes. هذا يسمح لـ k8s بإعادة تشغيل pods تلقائياً.',
          en: 'Use liveness and readiness probes. This allows k8s to restart pods automatically.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'helm-charts-guide',
        title: { ar: 'Helm Charts: إدارة التطبيقات على Kubernetes', en: 'Helm Charts: Managing Apps on Kubernetes' },
        excerpt: { ar: 'كيفية استخدام Helm للتوزيع والإدارة', en: 'How to use Helm for deployment and management' },
        image: '/images/blog/helm.jpg',
      },
    ],
    tags: ['kubernetes', 'devops', 'containers', 'production', 'scaling'],
    accent: 'from-blue-500 to-cyan-500',
  },

  'blockchain-web3': {
    title: { ar: 'البلوكتشين وWeb3: البناء على العملات الرقمية', en: 'Blockchain & Web3: Building on Cryptocurrencies' },
    excerpt: {
      ar: 'دليل عملي لبناء تطبيقات Web3 وذكية العقود والتطبيقات المركزية',
      en: 'Practical guide to building Web3 applications, smart contracts, and decentralized apps',
    },
    author: { ar: 'أحمد كريم - Blockchain Engineer', en: 'Ahmed Karim - Blockchain Engineer' },
    publishDate: '2024-11-05',
    readTime: '24 دقائق',
    category: { ar: 'Web3', en: 'Web3' },
    coverImage: '/images/blog/blockchain.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'Web3 لم تعد مستقبلاً. إنها الآن. لكن بناء عليها يتطلب فهم عميق للتكنولوجيا والاقتصاديات.',
          en: 'Web3 is no longer future. It is now. But building on it requires deep understanding of technology and economics.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'الـ Gas Optimization', en: 'Gas Optimization' },
        icon: Zap,
        content: {
          ar: 'كل عملية على البلوكتشين تكلف "gas". أقلل استهلاك الـ gas وسترى توفيرات ضخمة.',
          en: 'Every blockchain operation costs "gas". Reduce gas consumption and you will see huge savings.',
        },
      },
      {
        label: { ar: 'الأمان والتدقيق', en: 'Security & Auditing' },
        icon: Shield,
        content: {
          ar: 'العقود الذكية تحتاج audits مهنية. الأخطاء تكلف ملايين الدولارات.',
          en: 'Smart contracts need professional audits. Mistakes cost millions of dollars.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'defi-protocol-design',
        title: { ar: 'تصميم بروتوكولات DeFi الآمنة', en: 'Designing Safe DeFi Protocols' },
        excerpt: { ar: 'كيفية بناء protocols مالية آمنة', en: 'How to build safe financial protocols' },
        image: '/images/blog/defi.jpg',
      },
    ],
    tags: ['blockchain', 'web3', 'cryptocurrency', 'smart-contracts', 'solidity'],
    accent: 'from-orange-500 to-yellow-500',
  },

  'ar-vr-applications': {
    title: { ar: 'تطبيقات الواقع المعزز والافتراضي: الحاضر والمستقبل', en: 'AR/VR Applications: Present & Future' },
    excerpt: {
      ar: 'كيفية بناء تطبيقات واقع معزز وافتراضي باستخدام Unity و Unreal و WebXR',
      en: 'How to build AR/VR applications using Unity, Unreal, and WebXR',
    },
    author: { ar: 'سارة علي - XR Developer', en: 'Sarah Ali - XR Developer' },
    publishDate: '2024-10-28',
    readTime: '21 دقائق',
    category: { ar: 'AR/VR', en: 'AR/VR' },
    coverImage: '/images/blog/ar-vr.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'الواقع المعزز والافتراضي ليست مجرد تسلية. هي تطبيقات عملية في الطب والتعليم والتجارة.',
          en: 'AR and VR are not just entertainment. They are practical applications in medicine, education, and commerce.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'الأداء والتحسين', en: 'Performance Optimization' },
        icon: Zap,
        content: {
          ar: 'تطبيقات AR/VR تحتاج أداء عالية جداً. تحسينات صغيرة تصنع الفارق.',
          en: 'AR/VR applications need extremely high performance. Small optimizations make a big difference.',
        },
      },
      {
        label: { ar: 'تجربة المستخدم الغامرة', en: 'Immersive UX' },
        icon: Sparkles,
        content: {
          ar: 'الهدف هو غمر المستخدم. كل تفصيل يجب أن يخدم هذا الهدف.',
          en: 'The goal is to immerse the user. Every detail should serve this goal.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'metaverse-development',
        title: { ar: 'تطوير تطبيقات الميتافيرس', en: 'Metaverse Application Development' },
        excerpt: { ar: 'بناء عوالم افتراضية متعددة اللاعبين', en: 'Building multiplayer virtual worlds' },
        image: '/images/blog/metaverse.jpg',
      },
    ],
    tags: ['ar', 'vr', 'xr', 'unity', 'unreal', 'webxr'],
    accent: 'from-purple-500 to-blue-500',
  },

  'graphql-best-practices': {
    title: { ar: 'GraphQL: الطريقة الحديثة للـ APIs', en: 'GraphQL: The Modern Way to APIs' },
    excerpt: {
      ar: 'دليل متقدم لـ GraphQL مع best practices وأنماط تصميم متقدمة',
      en: 'Advanced GraphQL guide with best practices and advanced design patterns',
    },
    author: { ar: 'علي محمد - Backend Architect', en: 'Ali Mohammad - Backend Architect' },
    publishDate: '2024-10-20',
    readTime: '20 دقائق',
    category: { ar: 'Backend', en: 'Backend' },
    coverImage: '/images/blog/graphql.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'GraphQL ليست مجرد بديل لـ REST. إنها طريقة مختلفة تماماً للتفكير عن الـ APIs.',
          en: 'GraphQL is not just an alternative to REST. It is a completely different way of thinking about APIs.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'الـ Query Optimization', en: 'Query Optimization' },
        icon: Zap,
        content: {
          ar: 'مشكلة GraphQL الشائعة: N+1 queries. حلها بـ DataLoader.',
          en: 'Common GraphQL problem: N+1 queries. Solve it with DataLoader.',
        },
      },
      {
        label: { ar: 'Subscriptions والبث المباشر', en: 'Subscriptions & Real-time' },
        icon: Clock,
        content: {
          ar: 'استخدم GraphQL subscriptions للتحديثات الحية بدلاً من polling.',
          en: 'Use GraphQL subscriptions for live updates instead of polling.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'federated-graphql',
        title: { ar: 'Federated GraphQL: دمج عدة APIs', en: 'Federated GraphQL: Composing Multiple APIs' },
        excerpt: { ar: 'كيفية دمج عدة GraphQL endpoints', en: 'How to compose multiple GraphQL endpoints' },
        image: '/images/blog/federated.jpg',
      },
    ],
    tags: ['graphql', 'api', 'backend', 'optimization', 'apollo'],
    accent: 'from-pink-500 to-purple-500',
  },

  'testing-strategies': {
    title: { ar: 'استراتيجيات الاختبار المتقدمة: Unit إلى E2E', en: 'Advanced Testing: Unit to E2E' },
    excerpt: {
      ar: 'شرح شامل لكل أنواع الاختبارات والأدوات والاستراتيجيات والممارسات الأفضلة',
      en: 'Comprehensive overview of testing types, tools, strategies, and best practices',
    },
    author: { ar: 'يوسف عمرو - QA Lead', en: 'Youssef Amr - QA Lead' },
    publishDate: '2024-10-12',
    readTime: '25 دقائق',
    category: { ar: 'Quality Assurance', en: 'QA' },
    coverImage: '/images/blog/testing.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'الكود الذي لا يختبر سيفشل في الإنتاج. النقطة. دعني أشرح كيفية اختبار بشكل صحيح.',
          en: 'Untested code will fail in production. Period. Let me explain how to test correctly.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'اختبار الأهرام', en: 'Test Pyramid' },
        icon: Target,
        content: {
          ar: 'الكثير من اختبارات الوحدات، عدد معتدل من اختبارات التكامل، عدد قليل من اختبارات E2E.',
          en: 'Many unit tests, moderate integration tests, few E2E tests.',
        },
      },
      {
        label: { ar: 'اختبار الأداء والحمل', en: 'Performance & Load Testing' },
        icon: Zap,
        content: {
          ar: 'اختبر الكود تحت ضغط حقيقي. استخدم k6 أو JMeter.',
          en: 'Test code under real load. Use k6 or JMeter.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'automated-testing-ci-cd',
        title: { ar: 'الاختبار الآلي في CI/CD', en: 'Automated Testing in CI/CD' },
        excerpt: { ar: 'إعداد خطوط أنابيب اختبار آلية', en: 'Setup automated testing pipelines' },
        image: '/images/blog/ci-cd.jpg',
      },
    ],
    tags: ['testing', 'qa', 'automation', 'jest', 'cypress', 'performance'],
    accent: 'from-green-500 to-teal-500',
  },

  'database-design': {
    title: { ar: 'تصميم قواعد البيانات: من الرسوم البيانية إلى الإنتاج', en: 'Database Design: From Diagrams to Production' },
    excerpt: {
      ar: 'دليل شامل لتصميم قواعد بيانات موثوقة وقابلة للتوسع مع أمثلة عملية',
      en: 'Comprehensive guide to designing reliable and scalable databases with practical examples',
    },
    author: { ar: 'فاطمة عمارة - Database Architect', en: 'Fatima Omara - Database Architect' },
    publishDate: '2024-10-04',
    readTime: '23 دقائق',
    category: { ar: 'Database', en: 'Database' },
    coverImage: '/images/blog/database-design.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'تصميم قاعدة بيانات سيء يقتل أداء التطبيق. لا توجد مراجعات الكود أو تحسينات يمكن أن تصلحها.',
          en: 'Bad database design kills application performance. No code reviews or optimizations can fix it.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'التطبيع والنماذج', en: 'Normalization & Models' },
        icon: BarChart3,
        content: {
          ar: 'فهم ACID وأشكال التطبيع. ثم اعرف متى تكسر القواعد.',
          en: 'Understand ACID and normalization forms. Then know when to break the rules.',
        },
      },
      {
        label: { ar: 'الفهرسة والأداء', en: 'Indexing & Performance' },
        icon: Zap,
        content: {
          ar: 'الفهرسة الذكية تحسن الأداء بنسبة 1000%. الفهرسة السيئة تبطئ كل شيء.',
          en: 'Smart indexing improves performance by 1000%. Bad indexing slows everything down.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'polyglot-persistence',
        title: { ar: 'تعدد قواعد البيانات: استخدام الأداة الصحيحة', en: 'Polyglot Persistence: Right Tool' },
        excerpt: { ar: 'متى تستخدم SQL و NoSQL و Graph وغيرها', en: 'When to use SQL, NoSQL, Graph and others' },
        image: '/images/blog/polyglot.jpg',
      },
    ],
    tags: ['database', 'sql', 'postgresql', 'design', 'optimization', 'performance'],
    accent: 'from-indigo-500 to-blue-500',
  },

  'frontend-performance': {
    title: { ar: 'أداء الواجهة الأمامية: كل مليثانية تهم', en: 'Frontend Performance: Every Millisecond Counts' },
    excerpt: {
      ar: 'تقنيات متقدمة لتحسين أداء الواجهة الأمامية من 5 ثواني إلى 0.8 ثانية',
      en: 'Advanced techniques to improve frontend performance from 5 seconds to 0.8 seconds',
    },
    author: { ar: 'حسن الدعيع - Frontend Lead', en: 'Hassan Aldueaij - Frontend Lead' },
    publishDate: '2024-09-26',
    readTime: '19 دقائق',
    category: { ar: 'Frontend', en: 'Frontend' },
    coverImage: '/images/blog/frontend-perf.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'كل 100 مليثانية تأخير تخسر الشركة ملايين الدولارات. الأداء ليست ترفاً.',
          en: 'Every 100ms delay costs companies millions. Performance is not a luxury.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'Code Splitting والتحميل الكسول', en: 'Code Splitting & Lazy Loading' },
        icon: Zap,
        content: {
          ar: 'لا تحمل كل الكود مرة واحدة. حمل ما تحتاجه فقط الآن.',
          en: 'Do not load all code at once. Load only what you need now.',
        },
      },
      {
        label: { ar: 'الكيش والـ CDN', en: 'Caching & CDN' },
        icon: Clock,
        content: {
          ar: 'استخدم HTTP caching و CDN عالمية لتقليل الكمون.',
          en: 'Use HTTP caching and global CDN to reduce latency.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'react-performance',
        title: { ar: 'أداء React: Profiling والتحسين', en: 'React Performance: Profiling & Optimization' },
        excerpt: { ar: 'تحسين تطبيقات React باستخدام أدوات البرفايلنج', en: 'Optimize React apps using profiling tools' },
        image: '/images/blog/react-perf.jpg',
      },
    ],
    tags: ['frontend', 'performance', 'optimization', 'react', 'webpack', 'cdn'],
    accent: 'from-yellow-500 to-orange-500',
  },

  'microservices-migration': {
    title: { ar: 'الهجرة من Monolith إلى Microservices', en: 'Migration from Monolith to Microservices' },
    excerpt: {
      ar: 'دليل خطوة بخطوة لتحويل تطبيق أحادي ضخم إلى معمارية ميكروسرفيسز بدون توقف الخدمة',
      en: 'Step-by-step guide to transforming a massive monolithic app to microservices without downtime',
    },
    author: { ar: 'أحمد السويلم - Architect', en: 'Ahmed Alsulaym - Architect' },
    publishDate: '2024-09-18',
    readTime: '26 دقائق',
    category: { ar: 'Architecture', en: 'Architecture' },
    coverImage: '/images/blog/microservices-migration.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'الهجرة من monolith إلى microservices ليست سهلة. لكن إذا تم بشكل صحيح، النتائج تستحق الجهد.',
          en: 'Migration from monolith to microservices is not easy. But if done correctly, the results are worth the effort.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'الهجرة التدريجية', en: 'Gradual Migration' },
        icon: TrendingUp,
        content: {
          ar: 'لا تحاول القيام بكل شيء في وقت واحد. استخرج خدمة واحدة في المرة.',
          en: 'Do not try to do everything at once. Extract one service at a time.',
        },
      },
      {
        label: { ar: 'حدود الخدمات الواضحة', en: 'Clear Service Boundaries' },
        icon: CheckCircle,
        content: {
          ar: 'حدد حدود الخدمات بشكل صحيح. هذا هو الجزء الأصعب والأهم.',
          en: 'Define service boundaries correctly. This is the hardest and most important part.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'domain-driven-design',
        title: { ar: 'Domain-Driven Design: تصميم حول النطاق', en: 'Domain-Driven Design: Design Around Domain' },
        excerpt: { ar: 'استخدام DDD لتصميم حدود الخدمات', en: 'Using DDD to design service boundaries' },
        image: '/images/blog/ddd.jpg',
      },
    ],
    tags: ['microservices', 'architecture', 'migration', 'distributed-systems'],
    accent: 'from-cyan-500 to-teal-500',
  },

  'machine-learning-production': {
    title: { ar: 'نماذج Machine Learning في الإنتاج: التحديات الحقيقية', en: 'ML Models in Production: Real Challenges' },
    excerpt: {
      ar: 'كيفية نشر وإدارة نماذج ML في الإنتاج مع MLOps والمراقبة والتحديثات',
      en: 'How to deploy and manage ML models in production with MLOps, monitoring, and updates',
    },
    author: { ar: 'د. محمد ياسين - ML Engineer', en: 'Dr. Mohammad Yaseen - ML Engineer' },
    publishDate: '2024-09-10',
    readTime: '27 دقائق',
    category: { ar: 'Machine Learning', en: 'Machine Learning' },
    coverImage: '/images/blog/ml-production.jpg',
    content: [
      {
        type: 'paragraph',
        content: {
          ar: 'نموذج ML يعمل على المختبر لا يعني أنه سيعمل في الإنتاج. هنا يبدأ العمل الحقيقي.',
          en: 'An ML model working in the lab does not mean it will work in production. That is where real work begins.',
        },
      },
    ],
    keyInsights: [
      {
        label: { ar: 'Model Drift والمراقبة', en: 'Model Drift & Monitoring' },
        icon: AlertCircle,
        content: {
          ar: 'نماذجك ستتدهور بمرور الوقت. راقب الأداء باستمرار وأعد تدريب عند الحاجة.',
          en: 'Your models will degrade over time. Monitor performance continuously and retrain as needed.',
        },
      },
      {
        label: { ar: 'Feature Stores والبيانات', en: 'Feature Stores & Data' },
        icon: Database,
        content: {
          ar: 'إدارة features بشكل صحيح. استخدم feature stores لضمان التسيق بين التدريب والإنتاج.',
          en: 'Manage features correctly. Use feature stores to ensure consistency between training and production.',
        },
      },
    ],
    relatedArticles: [
      {
        slug: 'llm-fine-tuning',
        title: { ar: 'Fine-tuning نماذج LLM: ChatGPT و Claude', en: 'Fine-tuning LLMs: ChatGPT & Claude' },
        excerpt: { ar: 'كيفية تخصيص نماذج اللغة الكبيرة', en: 'How to customize large language models' },
        image: '/images/blog/llm.jpg',
      },
    ],
    tags: ['machine-learning', 'mlops', 'production', 'monitoring', 'ai'],
    accent: 'from-emerald-500 to-green-500',
  },
};

// ============================================
// ABOUT PAGE DATA - بيانات صفحة الشركة
// ============================================

export const enhancedAboutPageData: EnhancedAboutPageProps = {
  companyName: { ar: 'نُطق', en: 'Notaq' },
  tagline: {
    ar: 'شركة متخصصة في بناء حلول رقمية احترافية تجعل الشركات تنمو بسرعة وثقة',
    en: 'Specialized company building professional digital solutions that make companies grow with speed and confidence',
  },
  story: [
    {
      title: { ar: 'البدايات: من حلم إلى واقع', en: 'The Beginning: From Dream to Reality' },
      content: {
        ar: 'بدأنا مع فكرة بسيطة في 2019: أن الشركات التي تحتاج تطوير ويب لا تستحق مجرد موقع عام. تستحق شريكاً يفهم عملهم بعمق، يستمع لاحتياجاتهم، ويساعدهم في النمو الحقيقي. بفريق صغير من 3 مطورين، بدأنا من مكتب صغير في دبي.',
        en: 'Started in 2019 with a simple idea: companies needing web development deserve more than a generic website. They deserve a partner who deeply understands their business, listens to their needs, and helps them achieve real growth. With a small team of 3 developers, we started from a small office in Dubai.',
      },
    },
    {
      title: { ar: 'التطور: من وكالة إلى شركة متخصصة', en: 'Evolution: From Agency to Specialist Company' },
      content: {
        ar: 'مع مرور السنوات، تطورنا بسرعة. من مجرد وكالة ويب إلى شركة متخصصة في بناء منصات قابلة للتوسع، تطبيقات مالية آمنة، وحلول للتسويق الرقمي المتقدم. اليوم لدينا فريق من 75 متخصص يعمل على مشاريع معقدة لشركات كبرى.',
        en: 'Over the years, we evolved rapidly. From a simple web agency to a specialist company building scalable platforms, secure fintech applications, and advanced digital marketing solutions. Today we have a team of 75 specialists working on complex projects for major companies.',
      },
    },
    {
      title: { ar: 'القيادة والابتكار المستمر', en: 'Leadership & Continuous Innovation' },
      content: {
        ar: 'بقيادة علي محمود (مهندس برمجيات بخبرة 15 سنة) وفاطمة علي (مصممة UX حائزة على جوائز)، نركز على الابتكار المستمر. نحن لا نتابع الاتجاهات، نحن نصنعها. في 2024 وحده طورنا 60+ مشروع جديد.',
        en: 'Under the leadership of Ali Mahmoud (software engineer with 15 years experience) and Fatima Ali (award-winning UX designer), we focus on continuous innovation. We do not follow trends, we create them. In 2024 alone we developed 60+ new projects.',
      },
    },
  ],
  mission: {
    ar: 'مساعدة الشركات على تحقيق أهدافها الرقمية من خلال حلول مبتكرة وموثوقة وقابلة للتوسع، مع فريق متفاني وشفاف في كل خطوة.',
    en: 'Help companies achieve their digital goals through innovative, reliable, and scalable solutions, with a dedicated and transparent team at every step.',
  },
  vision: {
    ar: 'أن نصبح الشركة الأولى التي تخطر ببال الشركات الطموحة عندما تفكر في تحويل أعمالها بشكل رقمي بنجاح وبثقة تامة.',
    en: 'To become the first company that comes to mind for ambitious companies when they think about successfully and confidently transforming their business digitally.',
  },
  coreValues: [
    {
      title: { ar: 'الابتكار المستمر', en: 'Continuous Innovation' },
      description: {
        ar: 'نحن لا نتوقف عن البحث عن الطرق الأفضل والأحدث. كل أسبوع نتعلم تقنيات جديدة ونطبقها لتحسين عملنا.',
        en: 'We never stop seeking better and newer ways. Every week we learn new technologies and apply them to improve our work.',
      },
      icon: Lightbulb,
    },
    {
      title: { ar: 'الموثوقية والأمان', en: 'Reliability & Security' },
      description: {
        ar: 'تطبيقاتنا آمنة وموثوقة وعالية الأداء. نستخدم أحدث معايير الأمان ونختبر بدقة قبل الإطلاق.',
        en: 'Our applications are secure, reliable, and high-performing. We use the latest security standards and test thoroughly before launch.',
      },
      icon: CheckCircle,
    },
    {
      title: { ar: 'الشفافية الكاملة', en: 'Complete Transparency' },
      description: {
        ar: 'تواصل واضح وشفاف مع عملائنا في كل خطوة. ليس لدينا مفاجآت أو تكاليف مخفية.',
        en: 'Clear and transparent communication with our clients at every step. We have no surprises or hidden costs.',
      },
      icon: Sparkles,
    },
    {
      title: { ar: 'التركيز على النتائج', en: 'Results-Focused' },
      description: {
        ar: 'لا نقيس النجاح بالساعات أو بعدد الميزات. نقيسه بالنتائج الحقيقية: نمو المبيعات، رضا المستخدمين، الأداء.',
        en: 'We do not measure success by hours or features. We measure it by real results: sales growth, user satisfaction, performance.',
      },
      icon: Award,
    },
  ],
  team: [
    {
      name: { ar: 'علي محمود', en: 'Ali Mahmoud' },
      role: { ar: 'المؤسس والرئيس التنفيذي', en: 'Founder & CEO' },
      bio: {
        ar: 'مهندس برمجيات بخبرة 15 سنة في بناء تطبيقات حجمية. عمل مع Google و Facebook على مشاريع بتريليونات من المعاملات.',
        en: 'Software engineer with 15 years building large-scale applications. Worked with Google and Facebook on trillion-transaction projects.',
      },
      image: '/images/team/ali.jpg',
      expertise: ['Full Stack', 'Architecture', 'Leadership', 'Scaling'],
    },
    {
      name: { ar: 'فاطمة علي', en: 'Fatima Ali' },
      role: { ar: 'مدير الإبداع والتصميم', en: 'Creative & Design Lead' },
      bio: {
        ar: 'مصممة تجربة مستخدم حائزة على جوائز دولية. بخبرة 12 سنة وشغف تجاه تحسين تجارب المستخدم.',
        en: 'Award-winning UX designer with 12 years experience and passion for improving user experiences.',
      },
      image: '/images/team/fatima.jpg',
      expertise: ['UX/UI', 'Brand Design', 'Research', 'User Testing'],
    },
    {
      name: { ar: 'محمد علي', en: 'Mohammad Ali' },
      role: { ar: 'مدير البنية التحتية والأمان', en: 'Infrastructure & Security Director' },
      bio: {
        ar: 'مهندس DevOps بخبرة 10 سنوات. متخصص في بناء أنظمة آمنة وقابلة للتوسع على AWS و Azure.',
        en: '10-year DevOps engineer specialist in building secure, scalable systems on AWS and Azure.',
      },
      image: '/images/team/mohammad.jpg',
      expertise: ['DevOps', 'Security', 'AWS', 'Kubernetes'],
    },
    {
      name: { ar: 'سارة محمد', en: 'Sarah Mohamed' },
      role: { ar: 'مدير البحث والابتكار', en: 'Research & Innovation Lead' },
      bio: {
        ar: 'متخصصة في أبحاث المستخدمين وتحليل البيانات. تقود فريق من 12 باحث وتحليل.',
        en: 'User research and data analytics specialist. Leads a team of 12 researchers and analysts.',
      },
      image: '/images/team/sarah.jpg',
      expertise: ['Research', 'Analytics', 'Data Science', 'User Behavior'],
    },
  ],
  timeline: [
    {
      year: '2019',
      title: { ar: 'البدايات', en: 'Founded' },
      description: { ar: 'بدأنا مع فريق صغير بـ 3 مطورين وموارد محدودة لكن بطموح كبير', en: 'Started with 3 developers, limited resources but big ambitions' },
    },
    {
      year: '2020',
      title: { ar: 'النمو الأول', en: 'First Growth' },
      description: { ar: 'وصلنا إلى 10+ مشاريع ناجحة، جندنا 8 أشخاص آخرين', en: 'Reached 10+ successful projects, hired 8 more people' },
    },
    {
      year: '2021',
      title: { ar: 'الانطلاقة', en: 'Launch' },
      description: { ar: 'بدأنا التوسع الدولي، فريق بـ 20 شخص، عملاء في 5 دول', en: 'Started international expansion, 20-person team, clients in 5 countries' },
    },
    {
      year: '2022',
      title: { ar: 'التخصص', en: 'Specialization' },
      description: { ar: 'تركيز على حلول متخصصة: SaaS، Fintech، المنصات التعليمية', en: 'Focused on specialized solutions: SaaS, Fintech, Educational Platforms' },
    },
    {
      year: '2023',
      title: { ar: 'التوسع الكبير', en: 'Major Expansion' },
      description: { ar: 'فريق يبلغ 50 عضو، 60+ مشروع مكتمل، عملاء في 15 دولة', en: '50-person team, 60+ completed projects, clients in 15 countries' },
    },
    {
      year: '2024',
      title: { ar: 'النضج والقيادة', en: 'Maturity & Leadership' },
      description: { ar: 'فريق 75 شخص، 240+ مشروع مكتمل، 5.8+ مليون مستخدم نشط', en: '75-person team, 240+ completed projects, 5.8M+ active users' },
    },
  ],
  stats: [
    {
      number: '240+',
      label: { ar: 'مشروع مكتمل', en: 'Completed Projects' },
      icon: Award,
    },
    {
      number: '5.8M+',
      label: { ar: 'مستخدم نشط', en: 'Active Users' },
      icon: Users,
    },
    {
      number: '75',
      label: { ar: 'فريق متخصص', en: 'Team Members' },
      icon: Briefcase,
    },
    {
      number: '18',
      label: { ar: 'دول ودول', en: 'Countries' },
      icon: Globe,
    },
    {
      number: '96%',
      label: { ar: 'رضا العملاء', en: 'Client Satisfaction' },
      icon: Heart,
    },
    {
      number: '15+',
      label: { ar: 'سنوات خبرة', en: 'Years Experience' },
      icon: TrendingUp,
    },
  ],
  accent: 'from-cyan-500 to-blue-500',
};

// ============================================
// TESTIMONIALS DATA - البيانات المحسّنة
// ============================================

export const enhancedTestimonialsData: EnhancedTestimonialsProps = {
  testimonials: [
    {
      name: { ar: 'أحمد الشمري', en: 'Ahmed Alshammari' },
      role: { ar: 'مدير تطوير الأعمال', en: 'Business Development Director' },
      company: { ar: 'مجموعة الفنار', en: 'Alfanar Group' },
      testimonial: {
        ar: 'قبل تحديث الموقع كنا نكرر نفس الشرح في أغلب الاجتماعات. بعد الإطلاق صار كثير من العملاء يدخلون المكالمة وهم فاهمين الخدمة أصلًا. النتائج تكلم عن نفسها: +250% في التحويلات.',
        en: 'Before the relaunch, we repeated the same explanation in most meetings. After launch, many prospects joined calls already understanding the service. The results speak for themselves: +250% in conversions.',
      },
      highlight: { ar: 'نمو 250% في التحويلات والمبيعات', en: '+250% conversions and sales growth' },
      image: '/images/testimonials/ahmed.jpg',
      rating: 5,
      category: 'Business',
      accent: 'from-cyan-500 to-teal-500',
    },
    {
      name: { ar: 'سارة المنصور', en: 'Sarah Almansour' },
      role: { ar: 'مؤسِّسة وCEO', en: 'Founder & CEO' },
      company: { ar: 'Eleva Brand', en: 'Eleva Brand' },
      testimonial: {
        ar: 'الموقع لم يبدُ جميلًا فقط، بل بدا وكأنه يتكلم بنفس نبرة البراند. هذه أول مرة أشعر أن الواجهة تعكسنا فعلًا. أصبح موقعنا أداة بيع حقيقية وليس مجرد متجر.',
        en: 'The site did not just look polished. It sounded like our brand. For the first time, the interface felt like a real extension of our identity. Our site became a real sales tool, not just a store.',
      },
      highlight: { ar: 'هوية براند متكاملة وموقع يبيع', en: 'Complete brand identity and sales tool' },
      image: '/images/testimonials/sarah.jpg',
      rating: 5,
      category: 'Design',
      accent: 'from-violet-500 to-fuchsia-500',
    },
    {
      name: { ar: 'محمود السيد', en: 'Mahmoud Elsayed' },
      role: { ar: 'مدير التكنولوجيا', en: 'CTO' },
      company: { ar: 'منصة تعليمية كبرى', en: 'Leading EdTech Platform' },
      testimonial: {
        ar: 'قدراتهم التقنية فوق المتوسط. تطبيقنا يدعم 50,000+ مستخدم متزامن بدون مشاكل أداء. الدعم الفني سريع وأنهم فهموا احتياجاتنا من أول اجتماع.',
        en: 'Their technical capabilities are outstanding. Our app supports 50,000+ concurrent users without performance issues. Their technical support is fast and they understood our needs from the first meeting.',
      },
      highlight: { ar: 'تطبيق يدعم 50K+ مستخدم بكفاءة عالية', en: 'App supporting 50K+ concurrent users smoothly' },
      image: '/images/testimonials/mahmoud.jpg',
      rating: 5,
      category: 'Technical',
      accent: 'from-blue-500 to-cyan-500',
    },
    {
      name: { ar: 'ليلى الحمادي', en: 'Layla Alhammadi' },
      role: { ar: 'المدير التنفيذي للتسويق', en: 'VP Marketing' },
      company: { ar: 'شركة تجارة إلكترونية', en: 'E-Commerce Retailer' },
      testimonial: {
        ar: 'تحسين الموقع الذي قاموا به جعل موقعنا ينافس المتاجر الكبرى. سرعة التحميل وتجربة المستخدم غيرت كل شيء. مبيعاتنا ارتفعت 180% في ستة أشهر.',
        en: 'The improvements they made to our site let us compete with major retailers. Loading speed and user experience changed everything. Our sales increased 180% in six months.',
      },
      highlight: { ar: 'زيادة 180% في المبيعات خلال 6 أشهر', en: '+180% sales increase in 6 months' },
      image: '/images/testimonials/layla.jpg',
      rating: 5,
      category: 'E-Commerce',
      accent: 'from-green-500 to-emerald-500',
    },
    {
      name: { ar: 'علي النعيمي', en: 'Ali Alnueimi' },
      role: { ar: 'رئيس قسم البرمجيات', en: 'Software Director' },
      company: { ar: 'شركة تقنية إماراتية', en: 'UAE Tech Company' },
      testimonial: {
        ar: 'تعاملنا معهم لبناء منصة SaaS متعددة الكيانات. الجودة احترافية والمعايير عالية جداً. النظام الآن يدير أكثر من 500 شركة بدون مشاكل أمان واحدة.',
        en: 'We worked with them to build a multi-tenant SaaS platform. The quality is professional and standards are extremely high. The system now manages 500+ companies without a single security issue.',
      },
      highlight: { ar: 'منصة SaaS آمنة تدير 500+ شركة', en: 'Secure SaaS managing 500+ companies' },
      image: '/images/testimonials/ali.jpg',
      rating: 5,
      category: 'SaaS',
      accent: 'from-indigo-500 to-purple-500',
    },
    {
      name: { ar: 'جنة أحمد', en: 'Janna Ahmed' },
      role: { ar: 'المؤسسة الشارية', en: 'Co-Founder' },
      company: { ar: 'Fintech Startup', en: 'Fintech Startup' },
      testimonial: {
        ar: 'كانت لدينا نسخة أولية من تطبيقنا المالي لكنها لم تكن آمنة أو قابلة للتوسع. أعادوا بنائها من الصفر واليوم نخدم 200K+ محفظة رقمية بأمان بنكي كامل.',
        en: 'We had an early version of our fintech app but it was not secure or scalable. They rebuilt it from scratch and today we serve 200K+ digital wallets with full banking security.',
      },
      highlight: { ar: '200K+ محافظ رقمية بأمان بنكي', en: '200K+ secure digital wallets' },
      image: '/images/testimonials/janna.jpg',
      rating: 5,
      category: 'FinTech',
      accent: 'from-green-500 to-teal-500',
    },
    {
      name: { ar: 'د. نور الدين', en: 'Dr. Noor Aldeen' },
      role: { ar: 'مدير مستشفى', en: 'Hospital Manager' },
      company: { ar: 'مستشفى متخصصة', en: 'Specialized Hospital' },
      testimonial: {
        ar: 'منصة الرعاية الصحية التي بنوها لنا حسّنت من تواصلنا مع المرضى بشكل كبير. الآن المرضى يستطيعون حجز المواعيد وعرض سجلاتهم الطبية من بيتهم. كفاءة المستشفى زادت 45%.',
        en: 'The healthcare platform they built for us greatly improved our patient communication. Now patients can book appointments and view their medical records from home. Hospital efficiency increased 45%.',
      },
      highlight: { ar: 'كفاءة المستشفى زادت 45%', en: 'Hospital efficiency +45%' },
      image: '/images/testimonials/noor.jpg',
      rating: 5,
      category: 'Healthcare',
      accent: 'from-red-500 to-pink-500',
    },
    {
      name: { ar: 'محمد الهاجري', en: 'Mohammad Alhajri' },
      role: { ar: 'رئيس شركة عقارية', en: 'Real Estate CEO' },
      company: { ar: 'شركة عقارات رائدة', en: 'Leading Real Estate Co' },
      testimonial: {
        ar: 'جولات 3D الافتراضية غيرت كل شيء. العملاء الآن يستطيعون رؤية العقارات بالكامل قبل الذهاب إليها. عدد الزيارات الفعلية انخفض 60% والتحويلات ارتفعت 90%.',
        en: 'Virtual 3D tours changed everything. Customers can now see full properties before visiting. Actual visits decreased 60% and conversions increased 90%.',
      },
      highlight: { ar: 'تحويلات +90% وزيارات -60%', en: '+90% conversions, -60% visits' },
      image: '/images/testimonials/mohammad.jpg',
      rating: 5,
      category: 'Real Estate',
      accent: 'from-amber-500 to-orange-500',
    },
    {
      name: { ar: 'فاطمة الرميحي', en: 'Fatima Alremaihi' },
      role: { ar: 'مدير اللوجستيات', en: 'Logistics Director' },
      company: { ar: 'شركة توزيع وطنية', en: 'National Logistics Co' },
      testimonial: {
        ar: 'نظام التتبع والتحسين الذي طوروه وفّر لنا ملايين الدولارات. كفاءة الشحنات ارتفعت من 60% إلى 94% والعملاء الآن راضين جداً عن دقة الأوقات.',
        en: 'The tracking and optimization system they developed saved us millions. Shipment efficiency increased from 60% to 94% and customers are very satisfied with timing accuracy.',
      },
      highlight: { ar: 'كفاءة الشحن: 60% إلى 94%', en: 'Efficiency: 60% to 94%' },
      image: '/images/testimonials/fatima.jpg',
      rating: 5,
      category: 'Logistics',
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      name: { ar: 'خالد الزعابي', en: 'Khaled Alzaabi' },
      role: { ar: 'رئيس مجلس الإدارة', en: 'Board Chairman' },
      company: { ar: 'منصة اجتماعية متخصصة', en: 'Specialized Social Network' },
      testimonial: {
        ar: 'الشبكة الاجتماعية التي بنوها لنا أصبحت مجتمع ضخم ومحترف. 1.5 مليون مستخدم نشط والمحتوى ذو جودة عالية جداً. هذا ما كنا نحلم به.',
        en: 'The social network they built for us became a huge professional community. 1.5 million active users with extremely high-quality content. This is what we dreamed of.',
      },
      highlight: { ar: '1.5M مستخدم نشط ومحتوى عالي الجودة', en: '1.5M active users, high-quality content' },
      image: '/images/testimonials/khaled.jpg',
      rating: 5,
      category: 'Social',
      accent: 'from-purple-500 to-pink-500',
    },
  ],
  title: { ar: 'آراء عملائنا الموثوقة', en: 'What Our Clients Say' },
  subtitle: {
    ar: 'نحن فخورون بمساعدة الشركات من جميع الأحجام على تحقيق أهدافهم الرقمية. إليك ما يقولون عنا.',
    en: 'We are proud to help companies of all sizes achieve their digital goals. Here is what they say about us.',
  },
  displayMode: 'carousel',
  accent: 'from-cyan-500 to-blue-500',
};

// ============================================
// STATS DATA - بيانات الإحصائيات
// ============================================

export const enhancedStatsDashboardData: EnhancedStatsDashboardProps = {
  title: { ar: 'الأرقام التي تحكي قصة شركة عملاقة', en: 'Numbers Telling the Story of Growth' },
  subtitle: {
    ar: 'هذه هي النتائج الحقيقية التي حققناها مع عملائنا وتفاني فريقنا المتخصص. أرقام تعكس أثرنا على السوق والعالم.',
    en: 'These are the real results we delivered with our clients and dedicated team. Numbers reflecting our impact on the market and world.',
  },
  statistics: [
    {
      icon: Award,
      label: { ar: 'مشروع مكتمل بنجاح', en: 'Completed Projects' },
      value: '280',
      description: {
        ar: 'مشاريع متنوعة: منصات تعليمية، تطبيقات مالية، متاجر إلكترونية، أنظمة CRM، تطبيقات محمولة، أنظمة IoT',
        en: 'Diverse projects: educational platforms, fintech apps, e-commerce stores, CRM systems, mobile applications, IoT systems',
      },
      trend: { direction: 'up', value: 45 },
    },
    {
      icon: Users,
      label: { ar: 'مليون+ مستخدم', en: 'Million+ Active Users' },
      value: '12.5',
      prefix: '',
      suffix: 'M',
      description: {
        ar: 'مستخدمين نشطين يومياً عبر جميع التطبيقات والمنصات الموزعة عالمياً',
        en: 'Daily active users across all applications and platforms distributed globally',
      },
      trend: { direction: 'up', value: 78 },
    },
    {
      icon: TrendingUp,
      label: { ar: 'معدل النمو السنوي', en: 'Annual Growth Rate' },
      value: '312',
      suffix: '%',
      description: {
        ar: 'نمو سنوي مستمر في الإيرادات والعملاء والفريق. شركة تنمو بسرعة مسؤولة ومستدامة.',
        en: 'Continuous annual growth in revenue, clients, and team. Responsible and sustainable rapid growth.',
      },
      trend: { direction: 'up', value: 92 },
    },
    {
      icon: Zap,
      label: { ar: 'سرعة التطوير', en: 'Development Speed' },
      value: '55',
      suffix: '%',
      description: {
        ar: 'أسرع من المتوسط الصناعي بفضل عملياتنا المحسّنة والفريق المتخصص والأتمتة',
        en: 'Faster than industry average thanks to optimized processes, specialized team, and automation',
      },
      trend: { direction: 'up', value: 35 },
    },
    {
      icon: CheckCircle,
      label: { ar: 'رضا العملاء', en: 'Customer Satisfaction' },
      value: '97',
      suffix: '%',
      description: {
        ar: 'نسبة رضا عملائنا في الاستبيانات المستقلة. معيار عالي جداً ونادر في الصناعة.',
        en: 'Customer satisfaction rate in independent surveys. Extremely high and rare in the industry.',
      },
      trend: { direction: 'up', value: 12 },
    },
    {
      icon: Globe,
      label: { ar: 'دول وأسواق عالمية', en: 'Global Countries & Markets' },
      value: '24',
      description: {
        ar: 'دول موزعة على 6 قارات. نحن حقاً فريق عالمي بكل معنى الكلمة.',
        en: 'Countries across 6 continents. We are truly global in every sense.',
      },
      trend: { direction: 'up', value: 28 },
    },
    {
      icon: Briefcase,
      label: { ar: 'فريق متخصص عالمي', en: 'Specialist Team' },
      value: '120',
      description: {
        ar: '120+ موظف متخصص: مطورين، مصممين، مهندسي DevOps، خبراء أمان، خبراء UX، مدراء المشاريع.',
        en: '120+ specialists: developers, designers, DevOps engineers, security experts, UX experts, and project managers.',
      },
      trend: { direction: 'up', value: 38 },
    },
    {
      icon: Heart,
      label: { ar: 'عملاء متكررون', en: 'Repeat Clients' },
      value: '82',
      suffix: '%',
      description: {
        ar: 'معظم عملائنا يعودون لنا لمشاريع إضافية وتوسعات. مؤشر قوي جداً على الثقة والجودة.',
        en: 'Most clients return for additional projects and expansions. Very strong indicator of trust and quality.',
      },
      trend: { direction: 'up', value: 15 },
    },
    {
      icon: BarChart3,
      label: { ar: 'قيمة المشاريع', en: 'Projects Value' },
      value: '$850',
      suffix: 'M+',
      description: {
        ar: 'القيمة الإجمالية لجميع المشاريع المكتملة والمدارة. أثر اقتصادي ضخم.',
        en: 'Total value of all completed and managed projects. Huge economic impact.',
      },
      trend: { direction: 'up', value: 65 },
    },
    {
      icon: Clock,
      label: { ar: 'سنوات الخبرة الجماعية', en: 'Collective Experience' },
      value: '450',
      suffix: '+',
      description: {
        ar: 'سنوات من الخبرة المجمعة بين أعضاء الفريق. خبرة عميقة وشاملة جداً.',
        en: 'Years of combined experience among team members. Deep and comprehensive expertise.',
      },
      trend: { direction: 'up', value: 22 },
    },
    {
      icon: Target,
      label: { ar: 'معدل نجاح المشاريع', en: 'Project Success Rate' },
      value: '99.2',
      suffix: '%',
      description: {
        ar: 'معدل نجاح المشاريع يزيد عن 99%. فقط مشاريع ناجحة وراضٍ عنها العملاء.',
        en: 'Project success rate exceeds 99%. Only successful projects that clients are happy with.',
      },
      trend: { direction: 'up', value: 8 },
    },
    {
      icon: Sparkles,
      label: { ar: 'تقنيات حديثة مستخدمة', en: 'Modern Technologies' },
      value: '50+',
      description: {
        ar: 'أكثر من 50 تقنية حديثة: React, Vue, Angular, Node.js, Python, Go, Kubernetes, Cloud, AI/ML.',
        en: '50+ modern technologies: React, Vue, Angular, Node.js, Python, Go, Kubernetes, Cloud, AI/ML.',
      },
      trend: { direction: 'up', value: 18 },
    },
    {
      icon: Shield,
      label: { ar: 'التوافق والشهادات', en: 'Compliance & Certifications' },
      value: '15+',
      description: {
        ar: 'شهادات: ISO 27001, HIPAA, GDPR, SOC 2, PCI-DSS، وغيرها. أمان وامتثال شامل.',
        en: 'Certifications: ISO 27001, HIPAA, GDPR, SOC 2, PCI-DSS, and more. Comprehensive security and compliance.',
      },
      trend: { direction: 'up', value: 5 },
    },
  ],
  displayMode: 'grid',
  accent: 'from-cyan-500 to-blue-500',
  animated: true,
};
