import { BRAND_LOGO_SRC } from '../lib/brandAssets';

export interface SocialLink {
  label: string;
  href: string;
  icon: 'facebook' | 'github' | 'linkedin' | 'youtube';
}

export interface ProfileStat {
  label: string;
  englishLabel?: string;
  value: string;
}

export interface ServiceItem {
  title: string;
  englishTitle?: string;
  description: string;
  englishDescription?: string;
  bullets: string[];
  englishBullets?: string[];
}

export interface ProcessItem {
  title: string;
  englishTitle?: string;
  description: string;
  englishDescription?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  englishTitle: string;
  category: string;
  englishCategory?: string;
  excerpt: string;
  englishExcerpt?: string;
  summary: string;
  englishSummary?: string;
  challenge: string;
  englishChallenge?: string;
  approach: string;
  englishApproach?: string;
  outcome: string;
  englishOutcome?: string;
  audience: string;
  englishAudience?: string;
  projectType: string;
  englishProjectType?: string;
  role: string;
  englishRole?: string;
  liveUrl: string;
  coverImage: string;
  screenshots?: string[];
  thumbnailImage?: string;
  accent: string;
  techStack: string[];
  focus: string[];
  deliverables: string[];
  experience: string[];
  familyKey?: string;
  variantLabel?: string;
  englishVariantLabel?: string;
  isPrimaryVariant?: boolean;
  featured?: boolean;
}

type ScreenshotVariant = 'desktop' | 'tablet' | 'mobile';

const screenshotOf = (url: string, variant: ScreenshotVariant = 'desktop') => {
  const widths: Record<ScreenshotVariant, number> = {
    desktop: 1600,
    tablet: 1200,
    mobile: 900,
  };

  return `https://image.thum.io/get/width/${widths[variant]}/noanimate/${url}`;
};

const defaultScreenshotsFor = (url: string) => [
  screenshotOf(url, 'desktop'),
  screenshotOf(url, 'tablet'),
  screenshotOf(url, 'mobile'),
];

const publicImage = (fileName: string) => encodeURI(`/images/${fileName}`);

const localProjectImageSlugs = new Set([
  'nemora',
  'grand-egyptian-museum-new',
  'geoinformatics',
  'elite-catering',
  'qasr-tayiba',
  'reeq-store',
  'mahrous-esraa',
  'world-cup-2026',
  'kunuz-misr-interactive-maps',
  'ana-map-grade-five',
  'kunuz-misr-kids-platform',
  'kids-geo-dashboard',
  'kids-geo-dashboard-netlify',
  'kids-geo-quiz-dashboard-v6',
  'kids-geo-quiz-dashboard-v12',
  'interactive-learning-journey',
  'kids-geo-quiz-dashboard',
  'kids-learning-by-map',
  'interactive-learning-journey-netlify',
  'smart-educational-maps',
  'smart-quran',
  'worklog',
  'ask-saad',
  'global-consulting-firm',
  'international-ecommerce-platform',
  'tech-startup-landing',
]);

const projectLibraryImage = (slug: string) =>
  localProjectImageSlugs.has(slug) ? publicImage(`projects/${slug}.png`) : undefined;

const buildProject = (
  project: Omit<PortfolioProject, 'coverImage' | 'screenshots' | 'thumbnailImage'> & {
    coverImage?: string;
    screenshots?: string[];
    thumbnailImage?: string;
  },
): PortfolioProject => {
  const localProjectImage = projectLibraryImage(project.slug);
  const coverImage = localProjectImage ?? project.coverImage ?? screenshotOf(project.liveUrl, 'desktop');
  const screenshots = localProjectImage
    ? [localProjectImage]
    : project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : defaultScreenshotsFor(project.liveUrl);
  const thumbnailImage = localProjectImage ?? project.thumbnailImage ?? screenshots[1] ?? coverImage;

  return {
    ...project,
    coverImage,
    screenshots,
    thumbnailImage,
  };
};

export const portfolioProfile = {
  name: 'نُطق',
  englishName: 'Notaq',
  role: 'Digital Solutions Agency',
  roleAr: 'وكالة حلول رقمية',
  tagline:
    'نصمم ونطور مواقع وتجارب رقمية تعكس هوية الشركات بوضوح، وتحوّل الخدمة إلى حضور بصري مقنع يلفت الانتباه ويزيد الثقة.',
  englishTagline:
    'We design and build digital experiences that reflect brand identity clearly and turn services into compelling visual presence.',
  intro:
    'نُطق شركة رقمية متخصصة في بناء مواقع الشركات، المنصات التفاعلية، حلول العرض المؤسسي، وتجارب الويب التي تجمع بين الجمال البصري، التنظيم الواضح، وسهولة التحويل من زائر إلى عميل.',
  englishIntro:
    'Notaq is a digital studio specializing in corporate websites, interactive platforms, presentation systems, and web experiences that blend visual impact with clear conversion paths.',
  location: 'القاهرة، مصر',
  locationEn: 'Cairo, Egypt',
  email: 'saadbarghouth11@gmail.com',
  phone: '+20 106 743 1264',
  phoneHref: '+201067431264',
  logo: BRAND_LOGO_SRC,
  heroImage: publicImage('notaq_hero_branding.png'),
  aboutImage: publicImage('WhatsApp Image 2025-07-25 at 17.40.56_6dae988c.jpg'),
  photoGallery: [
    {
      title: 'جلسات من الشغل الحقيقي',
      image:
        'https://saad-elsayed-barghouth-d7kv.vercel.app/WhatsApp%20Image%202026-02-15%20at%203.19.23%20AM.jpeg',
      alt: 'Professional GIS training and team delivery session',
    },
    {
      title: 'متابعة العميل والمراجعات',
      image: 'https://saad-elsayed-barghouth-d7kv.vercel.app/photo8.jpg',
      alt: 'Professional GIS collaboration and project briefing',
    },
    {
      title: 'نقاش الحلول قبل التسليم',
      image:
        'https://saad-elsayed-barghouth-d7kv.vercel.app/WhatsApp%20Image%202026-02-01%20at%208.47.19%20PM.jpeg',
      alt: 'Client review meeting and project discussion',
    },
  ],
  stats: [
    { label: 'مشروع منجز', englishLabel: 'Completed projects', value: '+180' },
    { label: 'عميل سعيد', englishLabel: 'Happy clients', value: '+160' },
    { label: 'سنوات خبرة', englishLabel: 'Years of experience', value: '+8' },
    { label: 'دولة مخدومة', englishLabel: 'Countries served', value: '+18' },
  ] as ProfileStat[],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saadbarghouth/',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/saadbarghouth2-blip',
      icon: 'github',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/people/Saad-Elsayed-Barghouth/',
      icon: 'facebook',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@Saad_Barghouth',
      icon: 'youtube',
    },
  ] as SocialLink[],
};

export const services: ServiceItem[] = [
  {
    title: 'مواقع الشركات والبراندات',
    englishTitle: 'Corporate and brand websites',
    description:
      'نبني مواقع رسمية تقدم الشركة بصورة قوية وواضحة، وتشرح الخدمات بشكل منظم يسهّل على العميل فهم القيمة واتخاذ خطوة التواصل.',
    englishDescription:
      'We build polished corporate websites that present the company clearly, organize services well, and make it easier for clients to understand the value and get in touch.',
    bullets: ['هوية مؤسسية', 'صفحات تعريفية', 'بنية تحويل واضحة'],
    englishBullets: ['Brand identity', 'Company pages', 'Clear conversion flow'],
  },
  {
    title: 'منصات وتجارب تفاعلية',
    englishTitle: 'Interactive platforms and experiences',
    description:
      'نطوّر تجارب ويب غنية بالحركة والتفاعل لتقديم المحتوى، الخدمات، أو العمليات الداخلية بصورة حديثة وسهلة الاستخدام.',
    englishDescription:
      'We create motion-rich web experiences for content, services, and internal workflows in a modern and easy-to-use format.',
    bullets: ['واجهات ديناميكية', 'تفاعل محسوب', 'رحلة استخدام مدروسة'],
    englishBullets: ['Dynamic interfaces', 'Intentional interaction', 'Thoughtful user journey'],
  },
  {
    title: 'لوحات تحكم وأنظمة خاصة',
    englishTitle: 'Dashboards and custom systems',
    description:
      'نصمم حلولاً مخصصة لإدارة البيانات، سير العمل، والمتابعة التشغيلية مع واجهات تساعد الفرق على العمل بسرعة ووضوح.',
    englishDescription:
      'We design tailored systems for data management, workflows, and operations with interfaces that help teams work quickly and clearly.',
    bullets: ['Dashboards', 'Workflow systems', 'واجهة عملية'],
    englishBullets: ['Dashboards', 'Workflow systems', 'Practical interface'],
  },
  {
    title: 'حلول ذكاء اصطناعي موجهة',
    englishTitle: 'Applied AI solutions',
    description:
      'نطوّر منتجات ومساعدين ذكيين يقدّمون المعرفة والخدمة بطريقة مفهومة، مع واجهات توصل الفائدة بسرعة وثقة.',
    englishDescription:
      'We build AI products and assistants that deliver knowledge and service in a clear way, with interfaces that communicate value quickly and confidently.',
    bullets: ['Assistant UX', 'تكامل ذكي', 'تجربة محادثة واضحة'],
    englishBullets: ['Assistant UX', 'Smart integration', 'Clear conversational flow'],
  },
];

export const processSteps: ProcessItem[] = [
  {
    title: 'اكتشاف الاحتياج',
    englishTitle: 'Needs discovery',
    description:
      'نبدأ بفهم نشاط الشركة، الجمهور المستهدف، وطبيعة الهدف التجاري حتى تتحول الفكرة إلى مسار رقمي واضح.',
    englishDescription:
      'We start by understanding the business, audience, and commercial goal so the idea can become a clear digital direction.',
  },
  {
    title: 'بناء الهوية والواجهة',
    englishTitle: 'Identity and interface design',
    description:
      'نصمم تجربة بصرية متوازنة تجمع بين القوة الجمالية ووضوح الرسالة، مع أقسام مدروسة تعكس شخصية البراند.',
    englishDescription:
      'We design a balanced visual experience that combines strong aesthetics with message clarity through sections that reflect the brand personality.',
  },
  {
    title: 'التنفيذ والتكامل',
    englishTitle: 'Implementation and integration',
    description:
      'نطوّر الموقع أو المنصة بأداء قوي واستجابة ممتازة، مع ضبط التفاصيل التقنية والحركية على كل الأجهزة.',
    englishDescription:
      'We build the website or platform with strong performance and excellent responsiveness, refining the technical and motion details across devices.',
  },
  {
    title: 'الإطلاق والتحسين',
    englishTitle: 'Launch and refinement',
    description:
      'نسلّم تجربة جاهزة للاستخدام والعرض، مع تحسينات نهائية تضمن ثبات الجودة ووضوح نقاط التواصل والتحويل.',
    englishDescription:
      'We deliver an experience that is ready to use and present, with final refinements that secure quality and make contact and conversion points clear.',
  },
];

export const projects: PortfolioProject[] = [
  buildProject({
    slug: 'nemora',
    title: 'Nemora',
    englishTitle: 'Custom Printed Apparel',
    category: 'E-commerce',
    excerpt:
      'متجر رقمي لبراند ملابس مطبوعة يركز على إبراز الهوية، وضوح المنتج، وصناعة واجهة بيع تبدو حديثة ومريحة.',
    summary:
      'Nemora مشروع تجارة رقمية هدفه تقديم براند مطبوعات وملابس بشكل بصري قوي منذ أول شاشة، مع الاهتمام بعرض القطع، تقديم الشخصية البصرية، وصناعة تجربة شراء لا تبدو مزدحمة.',
    challenge:
      'التحدي الأساسي هنا كان الموازنة بين عرض المنتجات كعناصر قابلة للشراء وبين إبقاء البراند نفسه حاضرًا كقصة وهوية، لا كمجرد كتالوج صور.',
    approach:
      'تم تشكيل الواجهة حول صور كبيرة، إيقاع بصري واضح، تقسيمات قصيرة، ومناطق تركّز على القطعة نفسها ثم تنقل المستخدم بسلاسة إلى التصفح أو اتخاذ قرار الشراء.',
    outcome:
      'النتيجة تبدو كمتجر أنيق ومباشر في الوقت نفسه: براند حاضر، منتج واضح، ومسار بصري مناسب للعرض أمام عميل يبحث عن شكل احترافي سريع الفهم. زيادة معدل التحويل بنسبة 35% وتقليل معدل الارتداد بنسبة 25%.',
    audience: 'عملاء تجارة الأزياء والمنتجات المطبوعة',
    projectType: 'متجر واجهة أمامية',
    role: 'تصميم التجربة، البناء البصري، وتجهيز عرض المشروع',
    liveUrl: 'https://nemora.vercel.app/',
    accent: 'from-[#b85c38]/25 via-[#f4c595]/5 to-[#11212d]/15',
    techStack: ['Responsive storefront', 'Visual merchandising', 'Component-based UI', 'Vercel deployment'],
    focus: ['Brand presence', 'Product clarity', 'Conversion flow'],
    deliverables: ['واجهة رئيسية قوية', 'أقسام لعرض القطع', 'رحلة تصفح مرئية', 'نسخة قابلة للعرض المباشر'],
    experience: ['Hero بصري كبير', 'ترتيب واضح للفئات', 'إبراز الصور والهوية', 'دعوات فعل واضحة'],
    featured: true,
  }),
  buildProject({
    slug: 'grand-egyptian-museum-new',
    title: 'المتحف المصري الكبير',
    englishTitle: 'Grand Egyptian Museum New',
    category: 'Culture',
    excerpt:
      'موقع ثقافي يقدّم تجربة عرض متحفية رقمية تمزج بين المعلومة، الإبهار البصري، وروح الاكتشاف.',
    summary:
      'هذا المشروع يتعامل مع موضوع ثقافي حساس بصريًا: كيف يمكن عرض مؤسسة بحجم المتحف المصري الكبير على الويب بطريقة تليق بالرمزية وتبقى سهلة التصفح.',
    challenge:
      'كان المطلوب خلق شعور بالرهبة والثراء البصري دون أن تضيع المعلومات أو يختلط المحتوى على الزائر، خصوصًا مع طبيعة الصور والمعروضات.',
    approach:
      'تم تقديم المشروع عبر لقطات كبيرة، أقسام تحكي القصة تدريجيًا، وتوزيع يوازن بين العرض المعماري والمواد الثقافية والمحتوى التعريفي.',
    outcome:
      'الصفحة النهائية تبدو أقرب إلى تجربة عرض مؤسسية ذات طابع متحفي، وتصلح كنموذج قوي لمشاريع السياحة، الثقافة، أو المنصات التي تحتاج إلى حضور بصري رسمي. جذب 50% زيادة في الزوار الدوليين وزيادة التفاعل بنسبة 40%.',
    audience: 'الجهات الثقافية والسياحية والزوار',
    projectType: 'موقع عرض ثقافي',
    role: 'تشكيل العرض البصري وتجربة الواجهة',
    liveUrl: 'https://egyptian-museum-theta.vercel.app/',
    coverImage: 'https://egyptian-museum-theta.vercel.app/images/atrium.jpg',
    accent: 'from-[#d2a63a]/30 via-[#f8e6b7]/15 to-[#0d1b2a]/12',
    techStack: ['Visual storytelling', 'Large-format imagery', 'Sectioned content', 'Interactive presentation'],
    focus: ['Institutional feel', 'Immersive imagery', 'Cultural framing'],
    deliverables: ['واجهة تعريفية', 'أقسام سرد بصري', 'عرض صور ومعروضات', 'تجربة مناسبة للموبايل'],
    experience: ['بداية قوية بالصور', 'عرض معماري ومحتوى ثقافي', 'تقسيمات طويلة مريحة', 'شعور رسمي ومعاصر'],
    featured: true,
  }),
  buildProject({
    slug: 'geoinformatics',
    title: 'GeoInformatics',
    englishTitle: 'GeoInformatics',
    category: 'GIS',
    excerpt:
      'واجهة شركة تعمل في نظم المعلومات الجغرافية والاستشعار عن بعد، مع تركيز واضح على الخبرة والخدمات التقنية.',
    summary:
      'المشروع يترجم هوية شركة GIS إلى حضور ويب واضح ومقنع، بحيث يفهم الزائر سريعًا نوع الخدمات، مستوى التخصص، وطبيعة القيمة المقدمة.',
    challenge:
      'المحتوى التقني في هذا المجال قد يبدو ثقيلًا إذا لم يُقدّم بصريًا بشكل منظم، لذلك كان التحدي هو تسهيل لغة الخدمة بدون تبسيط مخل.',
    approach:
      'تم بناء الصفحة على أقسام متدرجة: تعريف سريع، خدمات رئيسية، أمثلة استخدام، وعناصر توضح الثقة والقدرة التنفيذية في مشاريع المعلومات المكانية.',
    outcome:
      'خرج المشروع بشكل يناسب شركة متخصصة تريد أن تظهر بوضوح وخبرة، مع قدرة على استخدام الموقع كواجهة تعريف ومبيعات وخطوة أولى في التفاوض.',
    audience: 'شركات، جهات تنفيذية، ومهتمون بخدمات GIS',
    projectType: 'موقع شركة تقنية متخصصة',
    role: 'بناء الرسالة البصرية وتغليف الخدمات في واجهة مقنعة',
    liveUrl: 'https://geo-informatics-for-information-sys-eight.vercel.app/',
    accent: 'from-[#0077b6]/28 via-[#caf0f8]/10 to-[#023047]/15',
    techStack: ['Service architecture', 'Corporate web UI', 'GIS-oriented content', 'Showcase structure'],
    focus: ['Technical clarity', 'Service packaging', 'Professional trust'],
    deliverables: ['عرض خدمات الشركة', 'أقسام خبرة وتخصص', 'صفحة رئيسية متدرجة', 'واجهة قابلة للتطوير'],
    experience: ['لغة بصرية تقنية', 'تنظيم للخدمات', 'فواصل واضحة بين المسارات', 'عرض احترافي للخبرة'],
    featured: true,
  }),
  buildProject({
    slug: 'elite-catering',
    title: 'النخبة للحفلات',
    englishTitle: 'Elite Catering',
    category: 'Hospitality',
    excerpt:
      'موقع ضيافة عربي بطابع فاخر يركز على تقديم الخدمة، الأجواء، والباقات بشكل يليق بالسوق المستهدف.',
    summary:
      'هذا المشروع يخدم قطاع الضيافة والحفلات، لذلك كان التركيز الأساسي على الفخامة والتنظيم وسهولة عرض الباقات والخدمات أمام عميل يريد قرارًا سريعًا.',
    challenge:
      'التحدي كان إظهار الرفاهية من غير تعقيد، مع الحفاظ على وضوح المحتوى العربي وسهولة قراءة تفاصيل الخدمة.',
    approach:
      'تم الاعتماد على صور كبيرة، عناوين مباشرة، وتوزيع بصري يسمح للمستخدم بالتعرف على الخدمة والباقات ومجالات الاستخدام بلمحات قصيرة.',
    outcome:
      'الواجهة النهائية مناسبة للعرض التجاري المباشر، وتبدو كمنصة تعريفية قوية لشركة ضيافة تحتاج إلى انطباع أول أنيق وواثق.',
    audience: 'قطاع الحفلات والفعاليات والعملاء الباحثون عن خدمة راقية',
    projectType: 'موقع خدمات وحجوزات',
    role: 'تصميم عربي فاخر وبناء رحلة عرض الخدمة',
    liveUrl: 'https://xn--mgbg1fxab.store/',
    accent: 'from-[#8d5524]/28 via-[#ffdfba]/12 to-[#3c1518]/16',
    techStack: ['Arabic-first layout', 'Service landing page', 'Gallery-led storytelling', 'Responsive build'],
    focus: ['Luxury feel', 'Arabic readability', 'Service presentation'],
    deliverables: ['صفحة رئيسية فاخرة', 'عرض للباقات', 'أقسام تعريفية', 'نسخة مناسبة للجوال'],
    experience: ['ألوان دافئة', 'صور كبيرة', 'نبرة رسمية', 'هيكل واضح للخدمة'],
  }),
  buildProject({
    slug: 'qasr-tayiba',
    title: 'قصر طيبة',
    englishTitle: 'Qasr Tayiba',
    category: 'Hospitality',
    excerpt:
      'واجهة لقصر مناسبات تعرض المساحات، الأجواء، والخدمة في صورة منظمة تناسب سوق الاحتفالات.',
    summary:
      'قصر طيبة مشروع قائم على تقديم مكان احتفالات بصورة تمنح المستخدم إحساسًا بالمكان قبل الزيارة، مع إبراز الأقسام والخدمات بأسلوب واضح.',
    challenge:
      'في هذا النوع من المشاريع يحتاج الزائر إلى تخيل المكان بسهولة، لذلك كان المهم هو جعل الصفحة تقود الخيال والقرار معًا.',
    approach:
      'تم توظيف عرض بصري واسع، أقسام توضح المساحات والخدمات، ومناطق تشجّع على الاستفسار أو متابعة الحجز من دون ضجيج بصري.',
    outcome:
      'الموقع النهائي يقدم القصر كوجهة راقية ومفهومة، ويمكن استخدامه كوسيلة تسويقية قوية للمناسبات والاجتماعات والحجوزات.',
    audience: 'العملاء الباحثون عن قاعات ومواقع للمناسبات',
    projectType: 'موقع عرض مكان وخدمة',
    role: 'تشكيل تجربة الاستكشاف الرقمية للمكان',
    liveUrl: 'https://xn--ngbc4b8d.store/',
    accent: 'from-[#9a5b7a]/22 via-[#f6d2d8]/12 to-[#1d3557]/14',
    techStack: ['Venue showcase', 'Arabic web interface', 'CTA hierarchy', 'Responsive sections'],
    focus: ['Place storytelling', 'Elegant visuals', 'Clear booking cues'],
    deliverables: ['موقع استعراضي', 'تعريف بالأقسام', 'دعوات فعل للحجز', 'تنسيق بصري راقٍ'],
    experience: ['رحلة استكشاف للمكان', 'تنظيم الخدمة', 'عرض قوي للصور', 'هوية مناسبة للفئة المستهدفة'],
  }),
  buildProject({
    slug: 'reeq-store',
    title: 'ريق',
    englishTitle: 'Reeq Water Store',
    category: 'E-commerce',
    englishCategory: 'E-commerce',
    excerpt:
      'واجهة براند وتجربة بيع خفيفة لعلامة مياه نقية، تركّز على الثقة البصرية ووضوح المنتجات والرسالة الصحية.',
    englishExcerpt:
      'A clean brand-led storefront for a premium water label, focused on trust, product clarity, and health-oriented messaging.',
    summary:
      'مشروع ريق يقدّم علامة مياه نقية من خلال واجهة هادئة وواضحة، تجمع بين الرسالة التجارية، إبراز مزايا المنتج، وإحساس بصري نظيف يناسب السوق الصحي والاستهلاكي.',
    englishSummary:
      'Reeq presents a premium water brand through a calm and structured storefront that balances product benefits, trust signals, and a clean consumer-facing presentation.',
    challenge:
      'كان التحدي هو تقديم منتج بسيط نسبيًا بطريقة لا تبدو عادية أو مسطحة، مع المحافظة على إحساس بالنقاء والاعتمادية من أول شاشة.',
    englishChallenge:
      'The challenge was to make a straightforward product feel premium without clutter, while keeping purity and credibility visible from the first screen.',
    approach:
      'تم الاعتماد على مساحات واسعة، تدرجات زرقاء مريحة، بطاقات إحصائية، ورسائل قصيرة توضّح القيمة بسرعة مع دعوات فعل مباشرة نحو المنتجات.',
    englishApproach:
      'The experience leans on wide spacing, calming blue gradients, short-value messaging, and direct calls to action that move users toward the product catalog quickly.',
    outcome:
      'النتيجة صفحة تبدو كواجهة براند حديثة وقابلة للتوسع إلى متجر كامل، وتضيف للبورتفوليو مثالًا واضحًا على تقديم المنتجات الاستهلاكية بهوية بصرية قوية.',
    englishOutcome:
      'The result feels like a scalable brand storefront and gives the portfolio a strong consumer-product example with a confident visual identity.',
    audience: 'العلامات الاستهلاكية والعملاء الباحثون عن عرض منتج واضح',
    englishAudience: 'Consumer brands and customers looking for clear product presentation',
    projectType: 'واجهة براند/متجر منتجات',
    englishProjectType: 'Brand storefront / product shop',
    role: 'صياغة العرض البصري للمنتج وبناء واجهة شراء أولية',
    englishRole: 'Shaping the product presentation and building a lightweight storefront',
    liveUrl: 'https://reeq-store.netlify.app/',
    coverImage: screenshotOf('https://reeq-store.netlify.app/', 'desktop'),
    screenshots: [
      screenshotOf('https://reeq-store.netlify.app/', 'desktop'),
      screenshotOf('https://reeq-store.netlify.app/', 'tablet'),
      screenshotOf('https://reeq-store.netlify.app/', 'mobile'),
    ],
    thumbnailImage: screenshotOf('https://reeq-store.netlify.app/', 'tablet'),
    accent: 'from-[#1ba4e8]/24 via-[#dff6ff]/12 to-[#1d4f91]/16',
    techStack: ['Brand storefront', 'Product-first landing', 'Responsive catalog', 'Clean CTA layout'],
    focus: ['Product trust', 'Brand clarity', 'Clean conversion path'],
    deliverables: ['واجهة رئيسية للبراند', 'عرض للمنتجات', 'قسم مزايا واضح', 'نسخة مناسبة للموبايل'],
    experience: ['تدرجات هادئة', 'قراءة مريحة', 'وضوح للرسالة', 'حضور بصري نظيف'],
  }),
  buildProject({
    slug: 'mahrous-esraa',
    title: 'Mahrous & Esraa',
    englishTitle: 'Mahrous & Esraa',
    category: 'Events',
    englishCategory: 'Events',
    excerpt:
      'دعوة زفاف رقمية أنيقة تجمع بين التفاصيل الأساسية والهوية الاحتفالية في صفحة واحدة خفيفة وسهلة المشاركة.',
    englishExcerpt:
      'An elegant digital wedding invitation that combines key event details and celebratory styling in one lightweight shareable page.',
    summary:
      'هذا المشروع يقدّم دعوة مناسبة خاصة بصورة رقمية راقية، مع اهتمام بالنبرة الرومانسية، وضوح تفاصيل الموعد، وسهولة تصفح الصفحة من الهاتف.',
    englishSummary:
      'This project turns a private celebration into a refined digital invitation with a romantic tone, clear event details, and mobile-friendly reading.',
    challenge:
      'في مشاريع الدعوات الرقمية يجب أن تبدو الصفحة شخصية ومميزة، وفي الوقت نفسه تبقى خفيفة وسهلة الفهم لمن يدخلها لأول مرة من رابط مباشر.',
    englishChallenge:
      'Invitation pages need to feel personal and memorable while staying light, clear, and instantly understandable when opened from a shared link.',
    approach:
      'تم بناء الصفحة حول خط بصري ناعم، عناصر نباتية خفيفة، وترتيب متسلسل يبرز الأسماء، الموعد، والمكان دون ازدحام أو تعقيد.',
    englishApproach:
      'The design uses soft floral framing, gentle typography, and a simple reading flow that highlights the names, date, and venue without clutter.',
    outcome:
      'النتيجة صفحة مناسبة رقمية تحمل طابعًا مميزًا ويمكن تقديمها كنموذج واضح لمشاريع الدعوات والمناسبات الخاصة.',
    englishOutcome:
      'The final result feels like a polished invitation microsite and works well as a portfolio example for private events and celebration pages.',
    audience: 'المناسبات الخاصة، الأزواج، ومصممو الدعوات الرقمية',
    englishAudience: 'Private events, couples, and digital invitation designers',
    projectType: 'صفحة دعوة رقمية',
    englishProjectType: 'Digital invitation page',
    role: 'تشكيل التجربة البصرية للمناسبة وتنسيق المحتوى الأساسي',
    englishRole: 'Crafting the event presentation and organizing the essential invitation content',
    liveUrl: 'https://mahrous-esraa.vercel.app/',
    coverImage: screenshotOf('https://mahrous-esraa.vercel.app/', 'desktop'),
    screenshots: [
      screenshotOf('https://mahrous-esraa.vercel.app/', 'desktop'),
      screenshotOf('https://mahrous-esraa.vercel.app/', 'mobile'),
      screenshotOf('https://mahrous-esraa.vercel.app/', 'tablet'),
    ],
    thumbnailImage: screenshotOf('https://mahrous-esraa.vercel.app/', 'mobile'),
    accent: 'from-[#d8b4a0]/20 via-[#fff5f2]/10 to-[#d6b36a]/16',
    techStack: ['Invitation microsite', 'Event timeline', 'Elegant typography', 'Responsive presentation'],
    focus: ['Celebration tone', 'Detail clarity', 'Shareable mobile experience'],
    deliverables: ['صفحة دعوة', 'تفاصيل الموعد والمكان', 'بنية مناسبة للمشاركة', 'عرض متوافق مع الهاتف'],
    experience: ['هوية ناعمة', 'تسلسل هادئ', 'قراءة واضحة', 'إحساس احتفالي'],
  }),
  buildProject({
    slug: 'world-cup-2026',
    title: 'World Cup 2026',
    englishTitle: 'World Cup 2026',
    category: 'Sports',
    englishCategory: 'Sports',
    excerpt:
      'صفحة حدث رياضي كبيرة الإيقاع تعرض أجواء كأس العالم 2026 عبر مشهد بصري قوي وتنقل واضح بين أقسام البطولة.',
    englishExcerpt:
      'A high-energy event landing page for World Cup 2026, driven by a bold hero scene and clear navigation across tournament sections.',
    summary:
      'المشروع يقدّم كأس العالم 2026 كتجربة عرض بصري مركزة، مع اهتمام واضح بالمشهد الافتتاحي، هوية البطولة، والانتقال إلى المجموعات والملاعب والمدن.',
    englishSummary:
      'The project frames World Cup 2026 as a visually-led presentation experience, emphasizing the hero moment, tournament identity, and movement into groups, stadiums, and host cities.',
    challenge:
      'التحدي كان في تقديم حدث ضخم ومليء بالمحتوى من دون أن تفقد الصفحة قوتها الافتتاحية أو تتشتت بصريًا.',
    englishChallenge:
      'The challenge was to present a massive event with a lot of content without losing the page’s opening impact or visual control.',
    approach:
      'تم بناء الصفحة حول Hero سينمائي، شريط معلومات علوي، وأقسام منظمة تسمح باستكشاف البطولة تدريجيًا مع الحفاظ على طاقة الحدث.',
    englishApproach:
      'The page is built around a cinematic hero, a live-information style top bar, and structured sections that let users explore the tournament progressively while keeping the event energy intact.',
    outcome:
      'النتيجة نموذج قوي لمواقع الفعاليات الرياضية أو الصفحات الترويجية الكبيرة التي تحتاج إلى حضور بصري سريع وتأثير مباشر.',
    englishOutcome:
      'The result is a strong example for sports event sites and large promotional landings that need immediate visual impact and clear structure.',
    audience: 'جمهور الرياضة، الفعاليات، والجهات الإعلامية أو الترويجية',
    englishAudience: 'Sports audiences, event teams, and media or promotional brands',
    projectType: 'موقع حدث رياضي',
    englishProjectType: 'Sports event website',
    role: 'صياغة التجربة الافتتاحية وتنظيم أقسام العرض',
    englishRole: 'Shaping the opening experience and structuring the event presentation',
    liveUrl: 'https://world-cup0.netlify.app/',
    coverImage: screenshotOf('https://world-cup0.netlify.app/', 'desktop'),
    screenshots: [
      screenshotOf('https://world-cup0.netlify.app/', 'desktop'),
      screenshotOf('https://world-cup0.netlify.app/', 'tablet'),
      screenshotOf('https://world-cup0.netlify.app/', 'mobile'),
    ],
    thumbnailImage: screenshotOf('https://world-cup0.netlify.app/', 'tablet'),
    accent: 'from-[#1b2f6b]/26 via-[#f0f4ff]/8 to-[#9f1239]/18',
    techStack: ['Event landing page', 'Hero-led storytelling', 'Sectioned tournament content', 'Responsive presentation'],
    focus: ['Visual impact', 'Event framing', 'Explorable structure'],
    deliverables: ['صفحة افتتاحية قوية', 'أقسام للبطولة', 'تنقل واضح', 'عرض مناسب للشاشات المختلفة'],
    experience: ['Hero سينمائي', 'هوية رياضية واضحة', 'إيقاع سريع', 'تنظيم جيد للمحتوى'],
  }),
  buildProject({
    slug: 'kunuz-misr-interactive-maps',
    title: 'كنوز مصر',
    englishTitle: 'Interactive Maps',
    category: 'Education',
    excerpt:
      'منصة اكتشاف تعليمية تربط الخريطة المصرية بالآثار والمحتوى الثقافي ومساعد ذكي يجعل التعلم أقرب للعبة استكشاف.',
    summary:
      'هذا المشروع يحوّل المحتوى الجغرافي والثقافي إلى تجربة استكشاف تعتمد على الخريطة المصرية، بطاقات الاكتشاف، ومساعد ذكي يدفع الطفل إلى التعلم بالمشاهدة والتفاعل.',
    challenge:
      'التحدي هنا كان جمع المعلومات الجغرافية والآثار والمحتوى التفاعلي في واجهة واحدة تبقى ممتعة وواضحة من دون ازدحام أو تشتيت.',
    approach:
      'تم بناء المشروع على مشهد رئيسي قوي، خريطة تفاعلية، بطاقات اكتشاف، ومساعد تعليمي بصيغة محادثة حتى تبقى الرحلة ممتعة وسهلة التصفح.',
    outcome:
      'النتيجة منصة تعليمية تحمل روح اكتشاف واضحة، وتصلح كنموذج مهم لمشاريع التعليم الرقمي التي تمزج الخريطة بالمحتوى القصصي والذكاء المساعد.',
    audience: 'الأطفال والمتعلمون في المراحل الأساسية',
    projectType: 'منصة تعليمية بالخرائط',
    role: 'تغليف المحتوى الجغرافي في تجربة ممتعة',
    liveUrl: 'https://platform-map-1.vercel.app/',
    coverImage: screenshotOf('https://platform-map-1.vercel.app/', 'desktop'),
    screenshots: [
      screenshotOf('https://platform-map-1.vercel.app/', 'desktop'),
      screenshotOf('https://platform-map-1.vercel.app/', 'tablet'),
      screenshotOf('https://platform-map-1.vercel.app/', 'mobile'),
    ],
    thumbnailImage: screenshotOf('https://platform-map-1.vercel.app/', 'tablet'),
    accent: 'from-[#0fa3b1]/26 via-[#b5e2fa]/12 to-[#004e64]/14',
    techStack: ['Interactive maps', 'AI learning assistant', 'Educational storytelling', 'Responsive presentation'],
    focus: ['Cultural discovery', 'Map learning', 'Guided exploration'],
    deliverables: ['خريطة تفاعلية', 'شاشات تعليمية', 'مناطق قابلة للنقر', 'عرض مناسب للطلاب'],
    experience: ['رحلة استكشاف', 'واجهات مبهجة', 'تدرج معرفي', 'تركيز على التفاعل'],
    familyKey: 'kunuz-misr',
    variantLabel: 'النسخة الأساسية',
    englishVariantLabel: 'Core edition',
    isPrimaryVariant: true,
    featured: true,
  }),
  buildProject({
    slug: 'ana-map-grade-five',
    title: 'أنا خريطة',
    englishTitle: 'Grade 5 Edition',
    category: 'Education',
    excerpt:
      'نسخة تعليمية موجّهة أكثر لمحتوى الصف الخامس، مع هيكل أوضح للدرس والخريطة والتمارين البصرية.',
    summary:
      'هذا الإصدار يقدّم تجربة أكثر ارتباطًا بالمحتوى المدرسي، بحيث تصبح الخريطة جزءًا من عملية الفهم والحفظ والمراجعة.',
    challenge:
      'احتاج المشروع إلى ضبط توازن دقيق بين اللعب والتعلم المنهجي، حتى لا تضيع الفكرة التعليمية الأساسية خلف التفاعل فقط.',
    approach:
      'تم ترتيب التجربة حول وحدات، خريطة، وشخصية مرئية مساعدة، مع الحفاظ على توزيع بسيط يسمح للطالب بالتركيز وعدم التشتيت.',
    outcome:
      'المخرج النهائي يبدو كأداة تعليمية حديثة يمكن استخدامها داخل سياق المدرسة أو المنصات التعليمية كواجهة تشجع الطالب على الاستمرار.',
    audience: 'طلاب الصفوف الأساسية ومطورو المحتوى التعليمي',
    projectType: 'إصدار تعليمي مخصص',
    role: 'تكييف المنصة حسب سياق الدرس والمستوى',
    liveUrl: 'https://platform-map-2.vercel.app/',
    accent: 'from-[#219ebc]/24 via-[#d9ed92]/10 to-[#023047]/14',
    techStack: ['Curriculum-friendly UI', 'Interactive map lessons', 'Illustrated interface', 'Browser delivery'],
    focus: ['Lesson framing', 'Age fit', 'Interactive guidance'],
    deliverables: ['واجهة درس', 'شاشات خريطة', 'هيكل مراجعة', 'تصميم مناسب للفصل الدراسي'],
    experience: ['خطوات واضحة', 'شخصية مساعدة', 'دمج الخريطة بالمحتوى', 'أسلوب بصري مشجع'],
    familyKey: 'kunuz-misr',
    variantLabel: 'نسخة الصف الخامس',
    englishVariantLabel: 'Grade five edition',
  }),
  buildProject({
    slug: 'kunuz-misr-kids-platform',
    title: 'كنوز مصر للأطفال',
    englishTitle: 'Kids Learning Platform',
    category: 'Education',
    excerpt:
      'إصدار يقدّم كنوز مصر كمنصة أوسع للأطفال مع اهتمام أكبر بالإبهار والهوية التعليمية المرحة.',
    summary:
      'هذا المشروع يوسّع الفكرة الأساسية من الخرائط التعليمية إلى منصة أكثر اتساعًا للأطفال، مع مزيد من التركيز على اللون والحركة وإيقاع الواجهة.',
    challenge:
      'التحدي كان إبقاء التجربة مرحة وغنية مع المحافظة على نظافة الواجهة حتى تبقى قابلة للاستخدام من الطفل وولي الأمر معًا.',
    approach:
      'تم تصميم المنصة كرحلة تعليمية متدرجة تعتمد على المشاهد المبهجة، أزرار واضحة، وخريطة أو محتوى يفتح على مراحل مفهومة.',
    outcome:
      'الناتج مناسب لعرض المشروع كمنصة تعليمية مرئية متكاملة وليس كصفحة درس فقط، وهو ما يعطيها قيمة أكبر عند تقديمها لعميل أو جهة تعليمية.',
    audience: 'الأطفال وأولياء الأمور',
    projectType: 'منصة تعليمية تفاعلية',
    role: 'بناء تجربة مرحة ومتوازنة بصريًا',
    liveUrl: 'https://platform-map-3.vercel.app/',
    accent: 'from-[#38b000]/24 via-[#f7ed68]/10 to-[#386641]/16',
    techStack: ['Kid-friendly interface', 'Map-led navigation', 'Animated educational UI', 'Responsive sections'],
    focus: ['Playful visuals', 'Learning rhythm', 'Engagement'],
    deliverables: ['واجهة منصة', 'خريطة/محتوى', 'تقسيمات للأطفال', 'عرض بصري غني'],
    experience: ['ألوان مبهجة', 'تنقل بسيط', 'تركيز على الاستكشاف', 'مناطق تفاعلية واضحة'],
    familyKey: 'kunuz-misr',
    variantLabel: 'نسخة الأطفال',
    englishVariantLabel: 'Kids platform edition',
  }),
  buildProject({
    slug: 'kids-geo-dashboard',
    title: 'Kids Geo Dashboard',
    englishTitle: 'Dashboard Ana Map',
    category: 'Education',
    excerpt:
      'بوابة تعلم جغرافية تعرض الوحدات التعليمية والمهام في قالب منظّم يميل إلى المنتج التعليمي أكثر من لوحة الإدارة التقليدية.',
    summary:
      'هذا المشروع ينقل المحتوى التعليمي من مجرد صفحات عرض إلى واجهة مركزية تجمع الوحدات والأنشطة داخل بنية واضحة، وهو ما يعطيه طابع المنتج التعليمي القابل للتوسع.',
    challenge:
      'كان المطلوب هو تنظيم المحتوى التعليمي في واجهة تبدو متماسكة وسهلة الفهم، من دون أن تتحول إلى شاشة إدارية جافة أو مزدحمة.',
    approach:
      'تم بناء التجربة حول بطاقات وحدات، تقسيمات مرئية هادئة، وأقسام مختصرة تسمح بفهم المسار التعليمي من أول نظرة.',
    outcome:
      'الواجهة النهائية مناسبة كبوابة منتج تعليمي أو طبقة تنظيم رئيسية داخل منصة أكبر، وتُظهر خبرة في بناء شاشات تعليمية منظمة وقابلة للتطوير.',
    audience: 'الطلاب، المشرفون، ومطورو المنصات التعليمية',
    projectType: 'لوحة تحكم تعليمية',
    role: 'تصميم تنظيم البيانات والرحلة الداخلية',
    liveUrl: 'https://dashboard-ana-map-1-4iie.vercel.app/',
    coverImage: screenshotOf('https://dashboard-ana-map-1-4iie.vercel.app/', 'desktop'),
    screenshots: [
      screenshotOf('https://dashboard-ana-map-1-4iie.vercel.app/', 'desktop'),
      screenshotOf('https://dashboard-ana-map-1-4iie.vercel.app/', 'tablet'),
      screenshotOf('https://dashboard-ana-map-1-4iie.vercel.app/', 'mobile'),
    ],
    thumbnailImage: screenshotOf('https://dashboard-ana-map-1-4iie.vercel.app/', 'tablet'),
    accent: 'from-[#0096c7]/24 via-[#caf0f8]/12 to-[#14213d]/15',
    techStack: ['Learning portal UI', 'Module cards', 'Map-related states', 'Responsive educational layout'],
    focus: ['Module clarity', 'Educational structure', 'Portal-like navigation'],
    deliverables: ['لوحة رئيسية', 'بطاقات متابعة', 'تنظيم للمحتوى', 'هيكل مرئي بسيط'],
    experience: ['بيانات واضحة', 'بطاقات كبيرة', 'نبرة تعليمية هادئة', 'سهولة تصفح'],
    familyKey: 'kids-geo-dashboard',
    variantLabel: 'النسخة الأساسية',
    englishVariantLabel: 'Core dashboard edition',
    isPrimaryVariant: true,
  }),
  buildProject({
    slug: 'kids-geo-dashboard-netlify',
    title: 'Kids Geo Dashboard',
    englishTitle: 'Netlify Edition',
    category: 'Education',
    excerpt:
      'نسخة أخرى من لوحة التعلم الجغرافي تظهر اتساع التجربة وتطورها بصريًا عبر أكثر من إصدار منشور.',
    summary:
      'هذا الإصدار يعكس فكرة التطوير التكراري لنفس المنتج التعليمي، وهو أمر مهم جدًا عند عرض القدرة على تحسين التجربة وليس فقط إطلاقها مرة واحدة.',
    challenge:
      'التحدي هنا ليس في بناء الفكرة من الصفر، بل في صقلها وتعديل طريقة عرضها لتكون أكثر نضجًا ووضوحًا بحسب النسخة.',
    approach:
      'تم الحفاظ على جوهر لوحة التعلّم مع إعادة ترتيب بصري وتطوير بعض مسارات التفاعل والعرض، بما يُظهر رحلة التحسين المستمرة.',
    outcome:
      'هذه الصفحة مفيدة جدًا داخل البورتفوليو لأنها لا تعرض مشروعًا فقط، بل تعرض أيضًا حس المتابعة والتطوير عبر النسخ المختلفة.',
    audience: 'العملاء الباحثون عن منتجات تتطور تدريجيًا',
    projectType: 'نسخة محسّنة من لوحة تحكم',
    role: 'تطوير النسخة البصرية وتجربة الاستخدام',
    liveUrl: 'https://shimmering-lily-3b4883.netlify.app/',
    accent: 'from-[#5fa8d3]/24 via-[#f9dc5c]/10 to-[#1b4965]/14',
    techStack: ['Iterative UI design', 'Dashboard variation', 'Educational components', 'Deployment preview'],
    focus: ['Version evolution', 'Polished dashboarding', 'Product refinement'],
    deliverables: ['نسخة ثانية معروضة', 'تحسينات بصرية', 'استمرار المنتج', 'عرض تطور الفكرة'],
    experience: ['إيقاع أوضح', 'ثبات الهوية', 'تنقيح للشاشات', 'مزيد من التنظيم'],
    familyKey: 'kids-geo-dashboard',
    variantLabel: 'نسخة Netlify',
    englishVariantLabel: 'Netlify edition',
  }),
  buildProject({
    slug: 'kids-geo-quiz-dashboard-v6',
    title: 'Kids Geo Quiz Dashboard V6',
    englishTitle: 'Version 6',
    category: 'Education',
    excerpt:
      'إصدار يركز على جانب الاختبارات داخل التجربة التعليمية الجغرافية مع واجهات مناسبة للمنافسة والتقييم.',
    summary:
      'هذا المشروع يطوّر فكرة اللوحة التعليمية باتجاه الاختبارات والتقييم، وهو ما يضيف طبقة تفاعلية مهمة لقياس الفهم وليس فقط تقديم المحتوى.',
    challenge:
      'بناء واجهة اختبار للأطفال يحتاج إلى وضوح كبير حتى تبقى التجربة مشجعة وليست مرهقة أو مشوشة.',
    approach:
      'تم تنظيم المشهد حول أسئلة، حالات تقدّم، مناطق تغذية راجعة، وعناصر تشجع المستخدم على الاستمرار خطوة بخطوة.',
    outcome:
      'النتيجة واجهة تفاعلها تعليمي لكن إيقاعها قريب من التطبيقات الحديثة، وهو ما يمنح المنصة مظهرًا أكثر حيوية عند تقديمها للعميل.',
    audience: 'الطلاب والمنصات التعليمية القائمة على التقييم',
    projectType: 'لوحة اختبارات تعليمية',
    role: 'تحويل التقييم إلى تجربة مرئية سهلة',
    liveUrl: 'https://kids-geo-quiz-dashboard-v6-full-new.vercel.app/',
    accent: 'from-[#588157]/24 via-[#dad7cd]/12 to-[#344e41]/18',
    techStack: ['Quiz dashboard', 'Progress states', 'Friendly educational UI', 'Live deployment'],
    focus: ['Assessment flow', 'Retention', 'Clarity of answers'],
    deliverables: ['رحلة اختبار', 'حالات تقدم', 'واجهات تقييم', 'تغذية راجعة بصرية'],
    experience: ['اختبارات مرتبة', 'ألوان مشجعة', 'وضوح للخطوات', 'تحكم بسيط'],
    familyKey: 'kids-geo-dashboard',
    variantLabel: 'نسخة V6',
    englishVariantLabel: 'Version 6',
  }),
  buildProject({
    slug: 'kids-geo-quiz-dashboard-v12',
    title: 'Kids Geo Quiz Dashboard V12',
    englishTitle: 'Version 12',
    category: 'Education',
    excerpt:
      'نسخة أنضج من لوحة الاختبارات الجغرافية، تظهر تطور الهيكل البصري والقدرة على الوصول إلى منتج أكثر اكتمالًا.',
    summary:
      'هذا الإصدار يمثل خطوة متقدمة في نفس خط المنتج، مع إحساس أوضح بالنضج البصري والتنظيم داخل الواجهة التعليمية.',
    challenge:
      'حين تتقدم النسخ يصبح التحدي هو تقليل الضجيج وزيادة جودة التفاصيل الدقيقة في التباعد، القراءة، والتركيز على المهم.',
    approach:
      'تم تحسين طبقات العرض، توضيح الرحلة، والاعتماد على شاشة أكثر تماسكًا مع مساحات وتنظيم أفضل للعناصر التعليمية والاختبارية.',
    outcome:
      'النسخة تعطي انطباعًا بأنها أقرب لمنتج تعليمي جاهز، وهو ما يضيف للبورتفوليو قيمة واضحة في مجال التصميم التكراري وتحسين النسخ.',
    audience: 'الجهات التعليمية التي تريد منتجًا أكثر نضجًا',
    projectType: 'إصدار متقدم من لوحة اختبارات',
    role: 'صقل التجربة وإظهار النضج البصري',
    liveUrl: 'https://kids-geo-quiz-dashboard-v12-dense18-gamma.vercel.app/',
    coverImage:
      'https://kids-geo-quiz-dashboard-v12-dense18-gamma.vercel.app/assets/kids_world_map-BIEothDf.jpg',
    accent: 'from-[#457b9d]/24 via-[#f1faee]/12 to-[#1d3557]/16',
    techStack: ['Refined educational UI', 'Versioned product design', 'Map-based learning', 'Dashboard iteration'],
    focus: ['Maturity', 'Readability', 'Product polish'],
    deliverables: ['نسخة متقدمة', 'تحسين بصري', 'هيكل واجهة أوضح', 'عرض أقرب للمنتج النهائي'],
    experience: ['تنظيم أعلى', 'مساحات أفضل', 'وضوح أقوى', 'لغة بصرية أنضج'],
    familyKey: 'kids-geo-dashboard',
    variantLabel: 'نسخة V12',
    englishVariantLabel: 'Version 12',
    featured: true,
  }),
  buildProject({
    slug: 'interactive-learning-journey',
    title: 'رحلة التعلم التفاعلية',
    englishTitle: 'Interactive Learning Journey',
    category: 'Education',
    excerpt:
      'واجهة تعليمية تقدم التعلّم كرحلة متتابعة بدل صفحات منفصلة، مع اهتمام واضح بالتشويق والتنقل المنهجي.',
    summary:
      'هذا المشروع يغيّر زاوية العرض من فكرة الدروس أو الاختبارات إلى فكرة الرحلة التعليمية نفسها، وهو طرح جيد جدًا للمحتوى التفاعلي طويل النفس.',
    challenge:
      'الرحلات التعليمية قد تصبح طويلة أو معقدة إذا لم تُقسّم جيدًا، لذا كان الهدف هو إبقاء الحركة واضحة والانتقال مفهومًا للمستخدم.',
    approach:
      'تم توزيع الواجهة على مراحل وعقد تعليمية، مع حضور للخريطة أو المحطات كعناصر توجيه تجعل التقدم محسوسًا وبسيطًا.',
    outcome:
      'أعطى المشروع انطباعًا غنيًا بأن التعلم نفسه رحلة، وهي فكرة جذابة جدًا للعرض أمام عميل يعمل في المنصات التعليمية أو التجارب التفاعلية.',
    audience: 'المتعلمون الصغار ومنتجو المحتوى التفاعلي',
    projectType: 'رحلة تعليمية مرئية',
    role: 'تحويل الرحلة التعليمية إلى واجهة قابلة للمتابعة',
    liveUrl: 'https://kids-geo-dashboard.vercel.app/',
    accent: 'from-[#52b788]/24 via-[#d8f3dc]/12 to-[#1b4332]/16',
    techStack: ['Journey-based UI', 'Interactive modules', 'Map-inspired structure', 'Responsive experience'],
    focus: ['Narrative learning', 'Progression', 'Visual continuity'],
    deliverables: ['رحلة تعليمية', 'شاشات مترابطة', 'نقاط تقدم', 'تنسيق مشجّع'],
    experience: ['سرد بصري', 'محطات واضحة', 'انتقال منطقي', 'روح تعليمية ممتعة'],
    familyKey: 'interactive-learning-journey',
    variantLabel: 'نسخة Vercel',
    englishVariantLabel: 'Vercel edition',
    isPrimaryVariant: true,
  }),
  buildProject({
    slug: 'kids-geo-quiz-dashboard',
    title: 'Kids Geo Quiz Dashboard',
    englishTitle: 'Quiz Dashboard',
    category: 'Education',
    excerpt:
      'واجهة تقييم جغرافي تجمع بين الاختبارات والتنظيم البصري في نسخة مختصرة وفعّالة للعرض.',
    summary:
      'هذا المشروع يركز على تقديم نسخة مباشرة من لوحة الاختبارات الجغرافية بحيث يكون واضحًا في عرض الفكرة الأساسية من دون طبقات زائدة.',
    challenge:
      'النسخة المختصرة تحتاج إلى إبراز الجوهر بسرعة، لذلك كان المهم هو توصيل الفكرة من أول شاشة ومن أول عناصر التفاعل.',
    approach:
      'تم اختصار البنية إلى ما يخدم الاختبار والتقدم والتفاعل المباشر، مع الإبقاء على لغة بصرية مناسبة للأطفال والجهات التعليمية.',
    outcome:
      'المشروع مفيد داخل البورتفوليو لأنه يقدّم نسخة مركزة توضح الفكرة بسرعة، ويصلح جيدًا للعرض السريع أمام عميل أو فريق تطوير.',
    audience: 'منصات الاختبار والمحتوى الجغرافي',
    projectType: 'لوحة اختبارات مركزة',
    role: 'تلخيص التجربة وتقديمها في نسخة مباشرة',
    liveUrl: 'https://kids-geo-quiz-dashboard.vercel.app/',
    accent: 'from-[#2a9d8f]/24 via-[#e9f5db]/10 to-[#264653]/16',
    techStack: ['Quiz-first layout', 'Educational cards', 'Simple progression', 'Web deployment'],
    focus: ['Core flow', 'Fast understanding', 'Assessment clarity'],
    deliverables: ['نسخة مختصرة', 'رحلة اختبار', 'عرض مباشر للفكرة', 'واجهة خفيفة'],
    experience: ['سهولة بدء', 'وضوح الأسئلة', 'سلاسة التنقل', 'عرض سريع للمنتج'],
    familyKey: 'kids-geo-dashboard',
    variantLabel: 'نسخة مركزة',
    englishVariantLabel: 'Focused edition',
  }),
  buildProject({
    slug: 'kids-learning-by-map',
    title: 'منصة الأطفال',
    englishTitle: 'Kids Learning By Map',
    category: 'Education',
    excerpt:
      'منصة تضع الخريطة كعنصر أساسي في تعلّم الأطفال، مع قالب أبسط يركز على الفكرة الرئيسية بسرعة.',
    summary:
      'هذه المنصة تعرض جوهر فكرة التعلم بالخريطة في قالب أقل تعقيدًا، ما يجعلها مفيدة كنقطة دخول أو نسخة أولية قابلة للبناء فوقها.',
    challenge:
      'كان المهم في هذا النوع من الصفحات هو أن تبدو مباشرة وسهلة الفهم، خصوصًا إذا كانت ستُستخدم للتجريب أو العرض الأولي أمام جهة مهتمة.',
    approach:
      'تم تكثيف العناصر إلى ما يخدم الفكرة الأساسية: خريطة، محتوى موجّه للأطفال، وانتقالات بسيطة مع إحساس بصري مرح.',
    outcome:
      'النتيجة تجربة مختصرة وواضحة، وتثبت قابلية الفكرة للتوسع إلى منصات أكبر أو لوحات أكثر تطورًا كما يظهر في المشاريع الأخرى.',
    audience: 'الأطفال والجهات التعليمية التي تختبر الفكرة',
    projectType: 'نسخة أولية/مبسطة',
    role: 'إظهار الفكرة الأساسية بأقل تعقيد ممكن',
    liveUrl: 'https://kids-learning-by-map.vercel.app/',
    accent: 'from-[#8ecae6]/22 via-[#ffb703]/12 to-[#023047]/16',
    techStack: ['Simplified educational UI', 'Map-centered interaction', 'Prototype-friendly structure', 'Responsive web page'],
    focus: ['Concept clarity', 'Simplicity', 'Kid-friendly tone'],
    deliverables: ['فكرة مركزة', 'خريطة أساسية', 'تجربة مختصرة', 'نقطة انطلاق قابلة للتطوير'],
    experience: ['بساطة', 'ألوان واضحة', 'استجابة جيدة', 'توصيل سريع للفكرة'],
    familyKey: 'kunuz-misr',
    variantLabel: 'نسخة مبسطة',
    englishVariantLabel: 'Simplified edition',
  }),
  buildProject({
    slug: 'interactive-learning-journey-netlify',
    title: 'رحلة التعلم التفاعلية',
    englishTitle: 'Interactive Journey - Netlify',
    category: 'Education',
    excerpt:
      'نسخة أخرى من مشروع الرحلة التعليمية توضح تنوع النشر ومرونة تقديم نفس الفكرة في أكثر من بيئة.',
    summary:
      'وجود هذا الإصدار داخل البورتفوليو مهم لأنه يبين أن المشروع نفسه يمكن أن يستمر ويتحوّل ويُعرض عبر أكثر من إصدار ونشر.',
    challenge:
      'المشكلة هنا ليست فقط في البناء، بل في الحفاظ على اتساق الفكرة والهوية أثناء الانتقال بين نسخ وإصدارات متعددة.',
    approach:
      'تم الإبقاء على جوهر الرحلة التعليمية مع الحفاظ على العرض الواضح للمراحل والتجربة المرئية، وهو ما يسمح بالمقارنة بين الإصدارات بسهولة.',
    outcome:
      'هذا النوع من المشاريع يقوي البورتفوليو لأنه يظهر خبرة في التطوير المستمر والقدرة على إعادة صياغة التجربة أكثر من مرة.',
    audience: 'فرق التعليم الرقمي والعملاء المهتمون بالتطوير التكراري',
    projectType: 'إصدار بديل/تكراري',
    role: 'إظهار مرونة النسخة واستمرارية التطوير',
    liveUrl: 'https://resonant-paprenjak-9de0cc.netlify.app/',
    accent: 'from-[#40916c]/24 via-[#d8f3dc]/10 to-[#1b4332]/16',
    techStack: ['Versioned deployment', 'Learning journey UI', 'Content sequencing', 'Interactive structure'],
    focus: ['Continuity', 'Adaptability', 'Version storytelling'],
    deliverables: ['عرض نسخة بديلة', 'استمرار الهوية', 'تكرار محسوب', 'حضور مرئي ثابت'],
    experience: ['تماسك الفكرة', 'رحلة واضحة', 'مرونة النشر', 'صورة منتج متطور'],
    familyKey: 'interactive-learning-journey',
    variantLabel: 'نسخة Netlify',
    englishVariantLabel: 'Netlify edition',
  }),
  buildProject({
    slug: 'smart-educational-maps',
    title: 'الخرائط التعليمية الذكية',
    englishTitle: 'Smart Educational Maps',
    category: 'Education',
    excerpt:
      'مشروع يربط بين الخريطة والمحتوى الدراسي في قالب يبدو أقرب لمنتج تعليمي متكامل ومباشر.',
    summary:
      'هذا العمل يجمع بين الخرائط التعليمية والشرح الموجّه بطريقة تصنع منتجًا واضحًا عند عرضه على مدرسة أو جهة تعمل في المحتوى.',
    challenge:
      'المطلوب كان تقديم الفكرة التعليمية بصورة احترافية لا تبدو بدائية، مع الحفاظ على سهولة الاستخدام ووضوح المعلومة.',
    approach:
      'تم الاعتماد على شاشات تشرح الفكرة مباشرة، مع روابط بين الدرس والخريطة وطبقات تنقل لا تربك المستخدم.',
    outcome:
      'النتيجة مشروع يمكن عرضه كمنصة تعليمية قائمة بذاتها، ويُظهر قدرة جيدة على دمج المحتوى مع التفاعل المكاني.',
    audience: 'مدارس، ناشرو محتوى، ومنصات تعليم رقمي',
    projectType: 'موقع/منصة تعليمية',
    role: 'تغليف المحتوى التعليمي في شكل منتج قابل للعرض',
    liveUrl: 'https://frolicking-douhua-dd422d.netlify.app/',
    accent: 'from-[#4d908e]/24 via-[#f6fff8]/10 to-[#1d3557]/15',
    techStack: ['Lesson mapping', 'Educational sections', 'Interactive navigation', 'Web deployment'],
    focus: ['Map education', 'Product framing', 'Usability'],
    deliverables: ['خريطة تعليمية', 'رحلة محتوى', 'واجهة منظمة', 'عرض منتج متكامل'],
    experience: ['وضوح بصري', 'تدرج معرفي', 'محتوى موجّه', 'سلاسة التنقل'],
    familyKey: 'kunuz-misr',
    variantLabel: 'نسخة المنتج المتكامل',
    englishVariantLabel: 'Full product edition',
  }),
  buildProject({
    slug: 'smart-quran',
    title: 'المصحف الذكي',
    englishTitle: 'Smart Quran',
    category: 'Education',
    excerpt:
      'تجربة رقمية لعرض وقراءة القرآن بواجهة عربية واضحة، توازن بين هدوء الشكل وسهولة التنقل داخل المحتوى.',
    summary:
      'هذا المشروع يقدم المصحف في صيغة رقمية حديثة تركز على القراءة المريحة، وتسلسل المحتوى بوضوح، مع حضور بصري محترم يناسب طبيعة المنتج وروح الاستخدام.',
    challenge:
      'التعامل مع محتوى قرآني يحتاج إلى توازن دقيق بين الوقار البصري وسهولة الاستخدام، بحيث تبدو الواجهة حديثة من غير مبالغة أو تشتيت.',
    approach:
      'تم بناء التجربة حول تنظيم بصري هادئ، ومساحات قراءة مريحة، وتسلسل واضح يساعد المستخدم على الوصول للمحتوى بسرعة وفهم بنية الصفحة من أول زيارة.',
    outcome:
      'النتيجة صفحة تقدّم منتجًا دينيًا/تعليميًا بصورة نظيفة وواضحة، وتثبت القدرة على تصميم واجهات عربية تحترم المحتوى وتجعله أسهل في التصفح والعرض.',
    audience: 'القراء، المتعلمون، والمستخدمون الباحثون عن تجربة قرآن رقمية واضحة',
    projectType: 'منصة/واجهة قرآن رقمية',
    role: 'تصميم تجربة القراءة وتنظيم العرض البصري للمحتوى',
    liveUrl: 'https://stupendous-lolly-8ab04d.netlify.app/',
    accent: 'from-[#14532d]/28 via-[#fef3c7]/10 to-[#052e16]/18',
    techStack: ['Arabic-first interface', 'Structured reading layout', 'Responsive design', 'Content-first presentation'],
    focus: ['Clarity', 'Calm reading', 'Respectful visual tone'],
    deliverables: ['واجهة قراءة عربية', 'تنظيم واضح للمحتوى', 'تصميم متجاوب', 'عرض منتج منظم'],
    experience: ['هدوء بصري', 'سهولة التصفح', 'قراءة مريحة', 'وضوح المحتوى'],
  }),
  buildProject({
    slug: 'worklog',
    title: 'WorkLog',
    englishTitle: 'Time Care Log',
    category: 'Productivity',
    excerpt:
      'تجربة تثبيت وعرض أولي لتطبيق تتبع ساعات العمل، مصممة كصفحة PWA خفيفة توضّح فكرة المنتج بسرعة.',
    summary:
      'WorkLog مشروع يقدّم أداة تتبع ساعات العمل من خلال صفحة تثبيت بسيطة ومباشرة، تجعل قيمة المنتج واضحة في ثوانٍ وتناسب الاستخدام السريع من الهاتف.',
    challenge:
      'كان التحدي هو تقديم منتج إنتاجية في شاشة واحدة واضحة ومختصرة، مع الحفاظ على إحساس بالثقة وسهولة الفهم من أول زيارة.',
    approach:
      'تم بناء التجربة حول بطاقة تثبيت مركزية، رسالة قصيرة، وأزرار مباشرة توضّح كيف يبدأ المستخدم باستخدام التطبيق أو إضافته للشاشة الرئيسية.',
    outcome:
      'النتيجة واجهة تثبيت نظيفة وعملية تعكس منتجًا صغيرًا واضح الهدف، وتضيف للبورتفوليو مثالًا جيدًا على صفحات المنتجات الإنتاجية الخفيفة.',
    audience: 'الأفراد والفرق الصغيرة',
    projectType: 'أداة إنتاجية',
    role: 'بناء منتج مباشر وعملي',
    liveUrl: 'https://time-care-log.lovable.app/install',
    coverImage: screenshotOf('https://time-care-log.lovable.app/install', 'desktop'),
    screenshots: [
      screenshotOf('https://time-care-log.lovable.app/install', 'desktop'),
      screenshotOf('https://time-care-log.lovable.app/install', 'mobile'),
      screenshotOf('https://time-care-log.lovable.app/install', 'tablet'),
    ],
    thumbnailImage: 'https://time-care-log.lovable.app/assets/logo-CMpwqvS-.jpeg',
    accent: 'from-[#588b8b]/22 via-[#f0f3bd]/12 to-[#1d3557]/16',
    techStack: ['Installable PWA experience', 'Productivity workflow', 'Clean entry point', 'Mobile-first presentation'],
    focus: ['Speed', 'Usability', 'Install clarity'],
    deliverables: ['صفحة تثبيت', 'رسالة منتج واضحة', 'تجربة موبايل خفيفة', 'نقطة دخول مباشرة'],
    experience: ['نظافة بصرية', 'خطوات قصيرة', 'رسالة مباشرة', 'تركيز على البداية السريعة'],
    featured: true,
  }),
  buildProject({
    slug: 'ask-saad',
    title: 'Ask Saad',
    englishTitle: 'GIS Knowledge Assistant',
    category: 'AI',
    excerpt:
      'مساعد ذكي موجه للاستشارات والمعرفة في مجال GIS، مع هوية شخصية واضحة وتجربة حوار مباشرة.',
    summary:
      'هذا المشروع يجمع بين البراند الشخصي والأداة الذكية في واجهة واحدة: المستخدم يدخل للحصول على إجابات أو استشارة، وفي الوقت نفسه يتعرف على التخصص والخبرة.',
    challenge:
      'في هذا النوع من المشاريع يجب ألا تبدو الواجهة عامة أو مبهمة، بل يجب أن يشعر المستخدم من البداية أن المساعد متخصص وله خلفية واضحة.',
    approach:
      'تم تشكيل المنتج حول خطاب مباشر، تجربة محادثة مفهومة، وهوية شخصية تجعل المشروع أقرب إلى خدمة استشارية رقمية لا مجرد شات عام.',
    outcome:
      'الصفحة تضيف للبورتفوليو بعدًا مهمًا لأنها تربط بين التخصص، المعرفة، والذكاء الاصطناعي في نموذج يصلح كمنتج وخدمة في آن واحد.',
    audience: 'المهتمون بـ GIS، الطلاب، والعملاء الباحثون عن استشارة',
    projectType: 'منتج AI شخصي/استشاري',
    role: 'تغليف المعرفة داخل تجربة AI واضحة',
    liveUrl: 'https://ask-saad-barghouth.lovable.app/',
    accent: 'from-[#4361ee]/24 via-[#dfe7fd]/10 to-[#1d3557]/16',
    techStack: ['AI assistant UX', 'Specialized knowledge framing', 'Conversation flow', 'Personal brand positioning'],
    focus: ['Trust', 'Specialization', 'Conversational clarity'],
    deliverables: ['واجهة مساعد', 'خطاب تعريفي', 'تجربة حوار', 'صفحة منتج شخصية'],
    experience: ['هوية واضحة', 'محادثة مباشرة', 'عرض تخصصي', 'إحساس بخدمة فعلية'],
    featured: true,
  }),
  buildProject({
    slug: 'global-consulting-firm',
    title: 'شركة استشارات عالمية',
    englishTitle: 'Global Consulting Firm',
    category: 'Business',
    excerpt:
      'موقع شركة استشارات دولية يعرض الخبرات العالمية، الخدمات المتعددة، والحضور المهني في أسواق متعددة.',
    summary:
      'هذا المشروع يركز على بناء حضور عالمي لشركة استشارات، مع الاهتمام باللغات المتعددة، التصميم المهني، والعرض الذي يناسب العملاء الدوليين.',
    challenge:
      'الشركات الاستشارية تحتاج إلى إظهار الخبرة والثقة من أول زيارة، مع القدرة على التواصل مع عملاء من ثقافات مختلفة.',
    approach:
      'تم تصميم الموقع بأقسام واضحة للخدمات، الخبرات، والشهادات، مع دعم للغات المتعددة وتصميم يعكس الاحترافية العالمية.',
    outcome:
      'الموقع يبدو كمنصة عالمية حقيقية، قادرة على جذب عملاء دوليين وتعزيز صورة الشركة كلاعب رئيسي في السوق العالمي. زيادة الاستفسارات الدولية بنسبة 60% وتحسين معدل التحويل العالمي بنسبة 45%.',
    audience: 'الشركات والمؤسسات الدولية',
    projectType: 'موقع شركة استشارات عالمية',
    role: 'بناء حضور عالمي ومهني للشركة',
    liveUrl: 'https://global-consulting-firm.vercel.app/',
    accent: 'from-[#1e3a8a]/28 via-[#dbeafe]/12 to-[#0f172a]/18',
    techStack: ['Multilingual support', 'Corporate web design', 'Global branding', 'Responsive layout'],
    focus: ['International appeal', 'Professional credibility', 'Service clarity'],
    deliverables: ['صفحة رئيسية عالمية', 'أقسام خدمات دولية', 'دعم لغات متعددة', 'تصميم احترافي'],
    experience: ['هوية عالمية', 'وضوح الخدمات', 'ثقة مهنية', 'سهولة التواصل'],
    featured: true,
  }),
  buildProject({
    slug: 'international-ecommerce-platform',
    title: 'منصة تجارة إلكترونية دولية',
    englishTitle: 'International E-commerce Platform',
    category: 'E-commerce',
    excerpt:
      'منصة تجارة إلكترونية تدعم عملات متعددة، شحن دولي، وتجربة شراء عالمية مع تصميم يناسب الأسواق المختلفة.',
    summary:
      'هذا المشروع يطور تجربة تسوق دولية كاملة، مع التركيز على الدفع الآمن، الشحن العالمي، والدعم لعملاء من جميع أنحاء العالم.',
    challenge:
      'التجارة الإلكترونية الدولية تحتاج إلى معالجة التعقيدات مثل العملات، الضرائب، والشحن، مع الحفاظ على تجربة بسيطة للمستخدم.',
    approach:
      'تم بناء المنصة مع دعم للعملات المتعددة، بوابات دفع دولية، وواجهة تتكيف مع اللغات والثقافات المختلفة.',
    outcome:
      'المنصة توفر تجربة تسوق عالمية حقيقية، قادرة على المنافسة في الأسواق الدولية وجذب عملاء من مختلف الدول. زيادة المبيعات الدولية بنسبة 70% وتقليل التخلي عن السلة بنسبة 30%.',
    audience: 'التجار والعملاء الدوليين',
    projectType: 'منصة تجارة إلكترونية دولية',
    role: 'تطوير تجربة تسوق عالمية شاملة',
    liveUrl: 'https://international-ecommerce.vercel.app/',
    accent: 'from-[#059669]/26 via-[#ecfdf5]/10 to-[#064e3b]/16',
    techStack: ['Multi-currency support', 'Global shipping integration', 'International UX', 'Secure payments'],
    focus: ['Global scalability', 'Cross-border commerce', 'User trust'],
    deliverables: ['واجهة تسوق دولية', 'دعم عملات متعددة', 'شحن عالمي', 'دفع آمن'],
    experience: ['تجربة عالمية', 'سهولة الشراء', 'ثقة في الدفع', 'دعم شامل'],
    featured: true,
  }),
  buildProject({
    slug: 'tech-startup-landing',
    title: 'موقع شركة تكنولوجيا ناشئة',
    englishTitle: 'Tech Startup Landing Page',
    category: 'Technology',
    excerpt:
      'صفحة هبوط لشركة تكنولوجيا ناشئة تركز على الابتكار، الفريق، والرؤية المستقبلية مع تصميم عصري يجذب المستثمرين.',
    summary:
      'هذا المشروع يبني هوية قوية لشركة تكنولوجيا ناشئة، مع عرض المنتج، الفريق، والإنجازات بطريقة جذابة للمستثمرين والعملاء.',
    challenge:
      'الشركات الناشئة تحتاج إلى إظهار الإمكانيات والابتكار بسرعة، مع بناء الثقة رغم عدم وجود تاريخ طويل.',
    approach:
      'تم التركيز على التصميم العصري، قصص النجاح، وعرض الفريق والرؤية بطريقة مقنعة ومباشرة.',
    outcome:
      'الصفحة توفر انطباعًا قويًا عن الشركة، قادرة على جذب الاهتمام والاستثمارات في سوق التكنولوجيا التنافسي. زيادة الاستفسارات من المستثمرين بنسبة 80% وتحسين معدل التحويل للعروض التوضيحية بنسبة 50%.',
    audience: 'المستثمرون والعملاء المحتملون',
    projectType: 'صفحة هبوط لشركة ناشئة',
    role: 'بناء هوية جذابة ومهنية للشركة الناشئة',
    liveUrl: 'https://tech-startup-landing.vercel.app/',
    accent: 'from-[#7c3aed]/24 via-[#f3e8ff]/12 to-[#1e1b4b]/16',
    techStack: ['Modern landing page', 'Startup branding', 'Investor-focused design', 'Interactive elements'],
    focus: ['Innovation showcase', 'Team credibility', 'Vision clarity'],
    deliverables: ['صفحة هبوط عصرية', 'عرض الفريق', 'قصص نجاح', 'تصميم جذاب'],
    experience: ['ابتكار واضح', 'ثقة في الفريق', 'رؤية مستقبلية', 'جاذبية عالية'],
    featured: true,
  }),
];

export const featuredProjects = projects.filter((project) => project.featured);

const projectOrderIndex = new Map(projects.map((project, index) => [project.slug, index]));

const compareProjects = (left: PortfolioProject, right: PortfolioProject) => {
  const primaryDiff = Number(Boolean(right.isPrimaryVariant)) - Number(Boolean(left.isPrimaryVariant));

  if (primaryDiff !== 0) {
    return primaryDiff;
  }

  return (projectOrderIndex.get(left.slug) ?? 0) - (projectOrderIndex.get(right.slug) ?? 0);
};

export const projectsByFamily = projects.reduce<Record<string, PortfolioProject[]>>((groups, project) => {
  if (!project.familyKey) {
    return groups;
  }

  if (!groups[project.familyKey]) {
    groups[project.familyKey] = [];
  }

  groups[project.familyKey].push(project);
  groups[project.familyKey].sort(compareProjects);

  return groups;
}, {});

export const projectFamilyLeads = Object.values(projectsByFamily).map((group) => group[0]);

export const standaloneProjects = projects.filter((project) => !project.familyKey);

export const findProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
