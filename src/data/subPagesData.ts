import {
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  BarChart3,
  Clock,
  Lightbulb,
  Sparkles,
  Heart,
  Briefcase,
  Shield,
  AlertCircle,
  Database,
  Palette,
  Search,
  BookOpen,
  Code,
  PieChart,
  Layers,
  Filter,
  Map,
  FileText,
  MessageSquare,
  ThumbsUp,
  Play,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ==================== SERVICES SUBSECTIONS ====================
export interface ServiceSubPage {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: LucideIcon;
  type: 'journey' | 'faq' | 'guide' | 'comparison' | 'cases' | 'specs' | 'tips' | 'survey' | 'tool' | 'webinar';
  content: Record<string, unknown>;
  relatedServices?: string[];
}

export const servicesSubPages: Record<string, ServiceSubPage> = {
  'services-journey': {
    id: 'services-journey',
    slug: 'services-journey',
    title: { ar: 'رحلة اختيار الخدمة', en: 'Service Selection Journey' },
    description: {
      ar: 'رحلة تفاعلية لاختيار المسار الأنسب لشركتك',
      en: 'Interactive journey to select the right track for your company',
    },
    icon: Map,
    type: 'journey',
    content: {
      steps: [
        {
          step: 1,
          title: { ar: 'فهم احتياج الشركة', en: 'Understand the Company Need' },
          description: { ar: 'ما التحدي الذي تريد الشركة حله؟', en: 'What challenge should the company solve?' },
          options: [
            { label: { ar: 'تصميم، UX، واجهة مستخدم', en: 'Design, UX, User Interface' }, icon: Palette },
            { label: { ar: 'تطوير، كود، تطبيقات', en: 'Development, Code, Apps' }, icon: Code },
            { label: { ar: 'حجم كبير، ملايين المستخدمين', en: 'Scale, Millions of Users' }, icon: TrendingUp },
            { label: { ar: 'أمان، البيانات، الحماية', en: 'Security, Data, Protection' }, icon: Shield },
          ],
        },
        {
          step: 2,
          title: { ar: 'اختر الفئة', en: 'Choose Category' },
          description: { ar: 'أي فئة تناسب احتياج الشركة؟', en: 'Which category matches the company need?' },
        },
        {
          step: 3,
          title: { ar: 'اختر الخدمة', en: 'Select Service' },
          description: { ar: 'أي خدمة تخدم قرار الشركة الآن؟', en: 'Which specific service supports the company decision now?' },
        },
        {
          step: 4,
          title: { ar: 'اختر الخطة', en: 'Choose Plan' },
          description: { ar: 'أي خطة تسعير تفضل؟', en: 'Which pricing plan do you prefer?' },
        },
      ],
      statistics: [
        { label: 'متوسط الوقت', value: '5 دقائق', icon: Clock },
        { label: 'معدل الرضا', value: '98%', icon: Award },
        { label: 'الاستكمال', value: '95%', icon: CheckCircle },
      ],
    },
  },

  'services-faq': {
    id: 'services-faq',
    slug: 'services-faq',
    title: { ar: 'الأسئلة الشائعة قبل التعاقد', en: 'FAQ Before Contracting' },
    description: {
      ar: 'إجابات على أكثر الأسئلة الشائعة قبل التعاقد',
      en: 'Answers to most common questions before contracting',
    },
    icon: MessageSquare,
    type: 'faq',
    content: {
      categories: [
        {
          name: { ar: 'عام', en: 'General' },
          questions: [
            {
              q: { ar: 'كم يستغرق المشروع؟', en: 'How long does the project take?' },
              a: { ar: 'يعتمد على حجم المشروع، عادة 2-6 أشهر', en: 'Depends on project scope, usually 2-6 months' },
              views: 5240,
            },
            {
              q: { ar: 'هل هناك عقد طويل الأمد؟', en: 'Is there a long-term contract?' },
              a: { ar: 'لا، يمكن التعاقد شهري أو حسب المشروع', en: 'No, monthly or project-based contracts available' },
              views: 3120,
            },
          ],
        },
        {
          name: { ar: 'الأسعار', en: 'Pricing' },
          questions: [
            {
              q: { ar: 'هل هناك خصومات؟', en: 'Are there discounts?' },
              a: { ar: 'نعم، خصومات للعقود السنوية والشركات الكبيرة', en: 'Yes, discounts for annual contracts and large companies' },
              views: 4890,
            },
          ],
        },
      ],
      stats: { totalQuestions: 87, avgViewsPerQuestion: 4200, helpfulRate: '96%' },
    },
  },

  'services-guide': {
    id: 'services-guide',
    slug: 'services-guide',
    title: { ar: 'دليل اختيار الخدمة', en: 'Service Selection Guide' },
    description: {
      ar: 'دليل شامل لاختيار الخدمة المناسبة لمشروعك',
      en: 'Comprehensive guide to choosing the right service for your project',
    },
    icon: BookOpen,
    type: 'guide',
    content: {
      chapters: [
        {
          chapter: 1,
          title: { ar: 'الفصل الأول: تقييم احتياج الشركة', en: 'Chapter 1: Assessing the Company Need' },
          sections: [
            { title: 'ما هي مشكلتك؟', readTime: '5 دقائق' },
            { title: 'ما هو ميزانيتك؟', readTime: '3 دقائق' },
            { title: 'ما هو الجدول الزمني؟', readTime: '4 دقائق' },
          ],
        },
        {
          chapter: 2,
          title: { ar: 'الفصل الثاني: مقارنة الخدمات', en: 'Chapter 2: Comparing Services' },
          sections: [
            { title: 'جدول المقارنة الشامل', readTime: '8 دقائق' },
            { title: 'الفروقات الرئيسية', readTime: '6 دقائق' },
          ],
        },
      ],
      totalReadTime: '45 دقيقة',
      difficulty: 'سهل جداً',
    },
  },

  'services-comparison': {
    id: 'services-comparison',
    slug: 'services-comparison',
    title: { ar: 'مقارنة شاملة للخدمات', en: 'Complete Services Comparison' },
    description: {
      ar: 'مقارنة تفصيلية بين جميع الخدمات والخطط',
      en: 'Detailed comparison between all services and plans',
    },
    icon: BarChart3,
    type: 'comparison',
    content: {
      comparisonMatrix: {
        categories: [
          { name: 'التصميم', services: ['UX/UI Design', 'Frontend Development'] },
          { name: 'التطوير', services: ['Mobile Apps', 'Backend Development', 'Full Stack'] },
          { name: 'الأداء', services: ['Cloud Infrastructure', 'DevOps', 'Database Design'] },
        ],
        features: [
          { feature: 'السرعة', weights: { fast: 3, medium: 2, slow: 1 } },
          { feature: 'السهولة', weights: { easy: 3, medium: 2, complex: 1 } },
          { feature: 'الثمن', weights: { cheap: 3, medium: 2, expensive: 1 } },
          { feature: 'الدعم', weights: { 24_7: 3, business: 2, limited: 1 } },
        ],
      },
      savedComparisons: 234,
      averageViewTime: '12 دقيقة',
    },
  },

  'services-cases': {
    id: 'services-cases',
    slug: 'services-cases',
    title: { ar: 'حالات دراسية من الحياة الحقيقية', en: 'Real-World Case Studies' },
    description: {
      ar: 'دراسات حالة حقيقية وناجحة من عملائنا',
      en: 'Real and successful case studies from our clients',
    },
    icon: FileText,
    type: 'cases',
    content: {
      cases: [
        {
          id: 'case-1',
          title: { ar: 'Nemora: تحويل التعليم الرقمي', en: 'Nemora: Transforming Digital Education' },
          challenge: { ar: '50K+ طالب يحتاجون منصة عملاقة', en: '50K+ students needing giant platform' },
          solution: { ar: 'نظام متكامل مع UI/UX احترافي', en: 'Integrated system with professional UI/UX' },
          results: [
            { metric: 'المستخدمين', value: '50K+', improvement: '+320%' },
            { metric: 'الرضا', value: '4.8/5', improvement: '+95%' },
          ],
          industry: 'تعليم',
          difficulty: 'معقد جداً',
        },
      ],
      totalCases: 280,
      successRate: '99.2%',
    },
  },

  'services-specs': {
    id: 'services-specs',
    slug: 'services-specs',
    title: { ar: 'المعايير والمتطلبات الفنية', en: 'Technical Specifications & Requirements' },
    description: {
      ar: 'المتطلبات الفنية والمواصفات لكل خدمة',
      en: 'Technical requirements and specifications for each service',
    },
    icon: Database,
    type: 'specs',
    content: {
      specifications: [
        {
          service: 'UX/UI Design',
          specs: [
            { key: 'الدقة', value: '1920x1080+', icon: Search },
            { key: 'الألوان', value: 'RGB/CMYK', icon: Palette },
            { key: 'التوافق', value: 'WCAG 2.1 AA', icon: CheckCircle },
          ],
        },
      ],
      documentDownloads: 1240,
      lastUpdated: '2026-05-15',
    },
  },

  'services-tips': {
    id: 'services-tips',
    slug: 'services-tips',
    title: { ar: 'نصائح واستراتيجيات الاختيار', en: 'Tips & Selection Strategies' },
    description: {
      ar: 'نصائح احترافية لاختيار الخدمة المناسبة',
      en: 'Professional tips for choosing the right service',
    },
    icon: Lightbulb,
    type: 'tips',
    content: {
      tips: [
        {
          number: 1,
          title: { ar: 'ابدأ بتقييم احتياج الشركة', en: 'Start by assessing the company need' },
          description: { ar: 'لا تختار خدمة قبل فهم الهدف التجاري والقرار المطلوب بوضوح', en: 'Do not choose a service before the business goal and required decision are clear' },
          importance: 'حرج جداً',
          readTime: '3 دقائق',
        },
        {
          number: 2,
          title: { ar: 'قارن بعناية', en: 'Compare carefully' },
          description: { ar: 'استخدم جدول المقارنة الشامل', en: 'Use the comprehensive comparison table' },
          importance: 'حرج',
          readTime: '5 دقائق',
        },
      ],
      tipsCount: 15,
      avgReadTime: '4 دقائق',
    },
  },
};

// ==================== PROJECTS SUBSECTIONS ====================
export interface ProjectSubPage {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: LucideIcon;
  type: string;
  content: Record<string, unknown>;
}

export const projectsSubPages: Record<string, ProjectSubPage> = {
  'projects-gallery': {
    id: 'projects-gallery',
    slug: 'projects-gallery',
    title: { ar: 'معرض المشاريع المرئي', en: 'Visual Projects Gallery' },
    description: {
      ar: 'معرض صور وفيديوهات لجميع المشاريع',
      en: 'Photos and videos gallery of all projects',
    },
    icon: Layers,
    type: 'gallery',
    content: {
      categories: [
        { name: 'تعليم', count: 45, featured: true },
        { name: 'تجارة', count: 38, featured: true },
        { name: 'صحة', count: 32, featured: false },
      ],
      totalItems: 500,
      popularTags: ['UI/UX', 'Mobile', 'Enterprise', 'Startup'],
    },
  },

  'projects-best': {
    id: 'projects-best',
    slug: 'projects-best',
    title: { ar: 'أفضل المشاريع', en: 'Best Projects' },
    description: {
      ar: 'أفضل مشاريعنا حسب الأداء والنتائج',
      en: 'Our best projects by performance and results',
    },
    icon: Award,
    type: 'showcase',
    content: {
      rankings: [
        {
          rank: 1,
          project: 'Nemora',
          score: 98.5,
          metrics: [
            { label: 'الأداء', value: 99, icon: Zap },
            { label: 'الرضا', value: 98, icon: Heart },
            { label: 'الابتكار', value: 97, icon: Sparkles },
          ],
        },
      ],
      totalRankings: 280,
      averageScore: 92.3,
    },
  },

  'projects-by-category': {
    id: 'projects-by-category',
    slug: 'projects-by-category',
    title: { ar: 'المشاريع حسب التصنيف', en: 'Projects by Category' },
    description: {
      ar: 'تصفح المشاريع حسب الفئة والصناعة',
      en: 'Browse projects by category and industry',
    },
    icon: Filter,
    type: 'categories',
    content: {
      categories: [
        {
          name: { ar: 'التعليم', en: 'Education' },
          count: 45,
          topProject: 'Nemora',
          growth: '+320%',
        },
        {
          name: { ar: 'التجارة الإلكترونية', en: 'E-Commerce' },
          count: 38,
          topProject: 'Commerce Hub',
          growth: '+325%',
        },
      ],
      totalProjects: 280,
      mostPopularCategory: 'تعليم',
    },
  },

  'projects-challenges': {
    id: 'projects-challenges',
    slug: 'projects-challenges',
    title: { ar: 'التحديات والحلول', en: 'Challenges & Solutions' },
    description: {
      ar: 'التحديات التي واجهناها والحلول الإبداعية',
      en: 'Challenges we faced and creative solutions',
    },
    icon: AlertCircle,
    type: 'challenges',
    content: {
      challenges: [
        {
          challenge: { ar: 'توسيع من 1K إلى 50K مستخدم', en: 'Scaling from 1K to 50K users' },
          solution: { ar: 'بنية سحابية متطورة', en: 'Advanced cloud architecture' },
          project: 'Nemora',
          difficulty: 'عالي جداً',
          timeToSolve: '3 أشهر',
        },
      ],
      totalChallenges: 120,
      solvedRate: '99.2%',
    },
  },

  'projects-results': {
    id: 'projects-results',
    slug: 'projects-results',
    title: { ar: 'النتائج والإحصائيات', en: 'Results & Statistics' },
    description: {
      ar: 'إحصائيات وأرقام النتائج من جميع المشاريع',
      en: 'Statistics and results numbers from all projects',
    },
    icon: BarChart3,
    type: 'results',
    content: {
      globalStats: [
        { metric: 'المشاريع', value: 280, unit: 'مشروع', improvement: '+45%' },
        { metric: 'المستخدمين', value: '12.5M', unit: 'مليون مستخدم', improvement: '+78%' },
        { metric: 'النمو', value: '312%', unit: 'سنوي', improvement: '+92%' },
      ],
      projectMetrics: [
        { name: 'متوسط المدة', value: '4.2', unit: 'أشهر' },
        { name: 'متوسط الرضا', value: '97%', unit: 'رضا' },
        { name: 'معدل النجاح', value: '99.2%', unit: 'نسبة' },
      ],
      yearlyGrowth: [
        { year: 2024, projects: 120, users: 2.5 },
        { year: 2025, projects: 180, users: 7.0 },
        { year: 2026, projects: 280, users: 12.5 },
      ],
    },
  },

  'projects-ratings': {
    id: 'projects-ratings',
    slug: 'projects-ratings',
    title: { ar: 'التقييمات والمراجعات', en: 'Ratings & Reviews' },
    description: {
      ar: 'تقييمات والعملاء على المشاريع',
      en: 'Client ratings and reviews of projects',
    },
    icon: ThumbsUp,
    type: 'reviews',
    content: {
      overallRating: 4.9,
      totalReviews: 2840,
      ratingBreakdown: [
        { stars: 5, count: 2700, percentage: 95 },
        { stars: 4, count: 120, percentage: 4 },
        { stars: 3, count: 15, percentage: 1 },
      ],
      topReviews: [
        {
          reviewer: 'محمد علي',
          project: 'Nemora',
          rating: 5,
          text: { ar: 'أفضل فريق تطوير عملنا معهم', en: 'Best dev team we worked with' },
          helpful: 234,
        },
      ],
      helpfulPercent: '92%',
    },
  },
};

// ==================== BLOG SUBSECTIONS ====================
export interface BlogSubPage {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: LucideIcon;
  type: string;
  content: Record<string, unknown>;
}

export const blogSubPages: Record<string, BlogSubPage> = {
  'blog-best': {
    id: 'blog-best',
    slug: 'blog-best',
    title: { ar: 'أفضل المقالات', en: 'Best Articles' },
    description: {
      ar: 'أكثر المقالات قراءة وشهرة',
      en: 'Most read and popular articles',
    },
    icon: Award,
    type: 'showcase',
    content: {
      topArticles: [
        {
          rank: 1,
          title: 'Building Scalable Platforms',
          views: 125400,
          reads: 89200,
          avgReadTime: '25 دقيقة',
          engagement: '89%',
        },
      ],
      totalArticles: 1240,
      averageViews: 8900,
    },
  },

  'blog-categories': {
    id: 'blog-categories',
    slug: 'blog-categories',
    title: { ar: 'تصفح حسب الفئة', en: 'Browse by Category' },
    description: {
      ar: 'تصفح المقالات حسب الفئة والموضوع',
      en: 'Browse articles by category and topic',
    },
    icon: Layers,
    type: 'categories',
    content: {
      categories: [
        {
          name: { ar: 'التطوير', en: 'Development' },
          count: 320,
          trending: true,
          articles: ['Building Scalable', 'Kubernetes Production'],
        },
        {
          name: { ar: 'الأمان', en: 'Security' },
          count: 180,
          trending: false,
        },
      ],
      totalCategories: 12,
      articlesPerMonth: 15,
    },
  },

  'blog-trends': {
    id: 'blog-trends',
    slug: 'blog-trends',
    title: { ar: 'الاتجاهات والأخبار', en: 'Trends & News' },
    description: {
      ar: 'أحدث الاتجاهات والأخبار في التكنولوجيا',
      en: 'Latest trends and news in technology',
    },
    icon: TrendingUp,
    type: 'trends',
    content: {
      currentTrends: [
        {
          trend: { ar: 'الذكاء الاصطناعي', en: 'AI & Machine Learning' },
          mentions: 245,
          growth: '+120%',
          relatedArticles: 34,
        },
        {
          trend: { ar: 'DevOps', en: 'DevOps & Infrastructure' },
          mentions: 198,
          growth: '+85%',
          relatedArticles: 28,
        },
      ],
      newsTicker: [
        { title: 'نموذج GPT-5 يطلق اليوم', date: '2026-06-02' },
      ],
      trendingNow: 'AI Integration',
    },
  },

  'blog-resources': {
    id: 'blog-resources',
    slug: 'blog-resources',
    title: { ar: 'الموارد والأدوات', en: 'Resources & Tools' },
    description: {
      ar: 'موارد وأدوات مفيدة للمطورين',
      en: 'Useful resources and tools for developers',
    },
    icon: FileText,
    type: 'resources',
    content: {
      resourceCategories: [
        {
          name: 'أدوات مجانية',
          items: [
            { name: 'Design Tool 1', link: 'figma.com' },
            { name: 'Code Editor', link: 'vscode.com' },
          ],
          count: 45,
        },
      ],
      totalResources: 280,
      topResource: 'Figma (Design)',
    },
  },

  'blog-guide': {
    id: 'blog-guide',
    slug: 'blog-guide',
    title: { ar: 'الدليل الشامل', en: 'Comprehensive Guide' },
    description: {
      ar: 'دليل شامل لجميع المواضيع الرئيسية',
      en: 'Comprehensive guide to all main topics',
    },
    icon: BookOpen,
    type: 'guide',
    content: {
      guides: [
        {
          title: 'دليل التطوير من الصفر',
          chapters: 12,
          readTime: '240 دقيقة',
          level: 'مبتدئ',
        },
      ],
      totalGuides: 25,
      mostUsedGuide: 'Getting Started with React',
    },
  },

  'blog-webinars': {
    id: 'blog-webinars',
    slug: 'blog-webinars',
    title: { ar: 'الويبينارات المسجلة', en: 'Recorded Webinars' },
    description: {
      ar: 'ويبينارات مسجلة وقابلة للمشاهدة',
      en: 'Recorded and viewable webinars',
    },
    icon: Play,
    type: 'webinar',
    content: {
      webinars: [
        {
          title: { ar: 'بناء تطبيقات قابلة للتوسع', en: 'Building Scalable Apps' },
          date: '2026-05-15',
          duration: '60 دقيقة',
          views: 5400,
          speaker: 'د. محمد علي',
          level: 'متقدم',
        },
      ],
      totalWebinars: 145,
      totalViews: 450000,
      upcomingWebinars: 3,
    },
  },
};

// ==================== TEAM SUBSECTIONS ====================
export interface TeamSubPage {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: LucideIcon;
  type: string;
  content: Record<string, unknown>;
}

export const teamSubPages: Record<string, TeamSubPage> = {
  'team-experts': {
    id: 'team-experts',
    slug: 'team-experts',
    title: { ar: 'الخبراء والمتخصصون', en: 'Experts & Specialists' },
    description: {
      ar: 'أفضل الخبراء في كل مجال',
      en: 'Top experts in each field',
    },
    icon: Award,
    type: 'experts',
    content: {
      experts: [
        {
          rank: 1,
          name: 'د. محمد علي',
          title: { ar: 'مهندس CTO', en: 'CTO Engineer' },
          expertise: ['Architecture', 'Scaling', 'AI'],
          yearsExp: 15,
          certifications: 8,
          speaking: 24,
        },
      ],
      totalExperts: 120,
      topFields: ['Engineering', 'Design', 'DevOps'],
    },
  },

  'team-culture': {
    id: 'team-culture',
    slug: 'team-culture',
    title: { ar: 'ثقافة الفريق والقيم', en: 'Team Culture & Values' },
    description: {
      ar: 'ثقافة الفريق والقيم الأساسية',
      en: 'Team culture and core values',
    },
    icon: Heart,
    type: 'culture',
    content: {
      values: [
        {
          value: { ar: 'الابتكار', en: 'Innovation' },
          description: { ar: 'نحن نبتكر دائماً', en: 'We always innovate' },
          initiatives: 12,
        },
      ],
      cultureScore: 4.8,
      employeeRetention: '96%',
    },
  },

  'team-skills': {
    id: 'team-skills',
    slug: 'team-skills',
    title: { ar: 'المهارات والتخصصات', en: 'Skills & Specializations' },
    description: {
      ar: 'كل المهارات والتخصصات في الفريق',
      en: 'All skills and specializations in team',
    },
    icon: Zap,
    type: 'skills',
    content: {
      skillCategories: [
        {
          category: { ar: 'التطوير', en: 'Development' },
          skills: [
            { skill: 'React', experts: 34, certifications: 89 },
            { skill: 'Node.js', experts: 28, certifications: 72 },
          ],
          totalExperts: 120,
        },
      ],
      totalSkills: 245,
      mostSought: 'Full Stack Development',
    },
  },

  'team-achievements': {
    id: 'team-achievements',
    slug: 'team-achievements',
    title: { ar: 'الإنجازات والجوائز', en: 'Achievements & Awards' },
    description: {
      ar: 'إنجازات الفريق والجوائز',
      en: 'Team achievements and awards',
    },
    icon: Award,
    type: 'achievements',
    content: {
      awards: [
        {
          award: { ar: 'Best Tech Company', en: 'Best Tech Company' },
          year: 2026,
          category: 'Innovation',
          recognizer: 'Global Tech Awards',
        },
      ],
      totalAwards: 47,
      yearsAchieving: 8,
    },
  },

  'team-open-positions': {
    id: 'team-open-positions',
    slug: 'team-open-positions',
    title: { ar: 'الوظائف المتاحة', en: 'Open Positions' },
    description: {
      ar: 'الوظائف المتاحة والانضمام للفريق',
      en: 'Available positions and join the team',
    },
    icon: Briefcase,
    type: 'careers',
    content: {
      positions: [
        {
          title: { ar: 'مهندس React Senior', en: 'Senior React Engineer' },
          level: 'Senior',
          salary: '$80K - $120K',
          location: 'Remote',
          applications: 240,
        },
      ],
      totalOpenPositions: 18,
      avgApplications: 145,
    },
  },
};

// ==================== PRICING SUBSECTIONS ====================
export interface PricingSubPage {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: LucideIcon;
  type: string;
  content: Record<string, unknown>;
}

export const pricingSubPages: Record<string, PricingSubPage> = {
  'pricing-calculator': {
    id: 'pricing-calculator',
    slug: 'pricing-calculator',
    title: { ar: 'حاسبة السعر', en: 'Price Calculator' },
    description: {
      ar: 'احسب سعر مشروعك بدقة',
      en: 'Calculate your project price accurately',
    },
    icon: PieChart,
    type: 'calculator',
    content: {
      factors: [
        { factor: 'نوع المشروع', options: ['موقع', 'تطبيق', 'منصة', 'نظام'] },
        { factor: 'حجم الفريق', options: ['1 شخص', '2-5', '6-10', '10+'] },
        { factor: 'المدة', options: ['1-2 شهر', '3-4 أشهر', '5-6 أشهر', '6+ أشهر'] },
      ],
      calculationsPeek: 8940,
      averageCalculation: '$45,000',
    },
  },

  'pricing-comparison': {
    id: 'pricing-comparison',
    slug: 'pricing-comparison',
    title: { ar: 'مقارنة الخطط', en: 'Plans Comparison' },
    description: {
      ar: 'قارن بين جميع خطط التسعير',
      en: 'Compare all pricing plans',
    },
    icon: BarChart3,
    type: 'comparison',
    content: {
      plans: [
        {
          name: 'Starter',
          price: '$5K',
          features: 8,
          support: '24/7',
          popular: false,
        },
      ],
      totalPlans: 15,
      mostPopular: 'Professional',
    },
  },

  'pricing-custom': {
    id: 'pricing-custom',
    slug: 'pricing-custom',
    title: { ar: 'خطط مخصصة', en: 'Custom Plans' },
    description: {
      ar: 'احصل على خطة مخصصة حسب احتياج شركتك',
      en: 'Get a custom plan tailored to your company need',
    },
    icon: Sparkles,
    type: 'custom',
    content: {
      customizations: [
        { option: 'مدة محددة', available: true },
        { option: 'ميزات إضافية', available: true },
        { option: 'دعم مخصص', available: true },
      ],
      customPlansRequests: 145,
      customizationRate: '94%',
    },
  },

  'pricing-upgrades': {
    id: 'pricing-upgrades',
    slug: 'pricing-upgrades',
    title: { ar: 'الترقيات والإضافات', en: 'Upgrades & Add-ons' },
    description: {
      ar: 'خيارات الترقية والإضافات',
      en: 'Upgrade and add-on options',
    },
    icon: TrendingUp,
    type: 'upgrades',
    content: {
      upgrades: [
        {
          name: { ar: 'ترقية الدعم', en: 'Support Upgrade' },
          from: '$200/month',
          to: '$500/month',
          benefit: '+24/7 Priority Support',
        },
      ],
      totalUpgrades: 24,
      mostPopularUpgrade: 'Priority Support',
    },
  },

  'pricing-offers': {
    id: 'pricing-offers',
    slug: 'pricing-offers',
    title: { ar: 'العروض الخاصة', en: 'Special Offers' },
    description: {
      ar: 'عروض خاصة وخصومات',
      en: 'Special offers and discounts',
    },
    icon: Zap,
    type: 'offers',
    content: {
      currentOffers: [
        {
          offer: { ar: 'خصم 20% للعقود السنوية', en: '20% discount for annual contracts' },
          discount: '20%',
          validUntil: '2026-12-31',
          applicablePlans: 'All',
        },
      ],
      totalOffers: 8,
      mostUsedOffer: 'Annual Discount',
    },
  },
};

// Trophy Icon (added since it might not exist)
export const Trophy = Award; // Using Award as fallback
