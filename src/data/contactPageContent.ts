export interface InquiryTypeOption {
  key: string;
  ar: string;
  en: string;
}

export interface ContactChoiceOption {
  key: string;
  ar: string;
  en: string;
}

export interface ContactFaqItem {
  qAr: string;
  qEn: string;
  aAr: string;
  aEn: string;
}

export const inquiryTypes: InquiryTypeOption[] = [
  { key: 'corporate-website', ar: 'موقع شركة كامل', en: 'Full corporate website' },
  { key: 'service-pages', ar: 'صفحات خدمات وتحويل', en: 'Service and conversion pages' },
  { key: 'ecommerce', ar: 'متجر إلكتروني', en: 'E-commerce experience' },
  { key: 'saas-platform', ar: 'منصة تفاعلية أو SaaS', en: 'Interactive platform or SaaS' },
  { key: 'ux-redesign', ar: 'إعادة تصميم التجربة', en: 'UX and interface redesign' },
  { key: 'technical-consulting', ar: 'استشارة تقنية', en: 'Technical consultation' },
];

export const websiteTypeOptions: ContactChoiceOption[] = [
  { key: 'corporate', ar: 'موقع شركة تعريفي', en: 'Corporate website' },
  { key: 'service-landing', ar: 'صفحة خدمة أو حملة', en: 'Service or campaign landing page' },
  { key: 'ecommerce', ar: 'متجر إلكتروني', en: 'E-commerce store' },
  { key: 'portfolio', ar: 'معرض أعمال أو بروفايل', en: 'Portfolio or profile site' },
  { key: 'platform', ar: 'منصة أو نظام تفاعلي', en: 'Interactive platform or system' },
  { key: 'not-sure', ar: 'لسه محتاج ترشيح', en: 'Need a recommendation' },
];

export const timelineOptions: ContactChoiceOption[] = [
  { key: 'urgent', ar: 'في أسرع وقت', en: 'As soon as possible' },
  { key: '2-4-weeks', ar: 'خلال 2 إلى 4 أسابيع', en: 'Within 2 to 4 weeks' },
  { key: '1-2-months', ar: 'خلال شهر إلى شهرين', en: 'Within 1 to 2 months' },
  { key: 'flexible', ar: 'الوقت مرن', en: 'Flexible timing' },
];

export const languageOptions: ContactChoiceOption[] = [
  { key: 'arabic', ar: 'عربي فقط', en: 'Arabic only' },
  { key: 'english', ar: 'إنجليزي فقط', en: 'English only' },
  { key: 'arabic-english', ar: 'عربي وإنجليزي', en: 'Arabic and English' },
  { key: 'not-sure', ar: 'لسه محتاج ترشيح', en: 'Need a recommendation' },
];

export const pageNeedOptions: ContactChoiceOption[] = [
  { key: 'home', ar: 'الرئيسية', en: 'Home' },
  { key: 'about', ar: 'من نحن', en: 'About' },
  { key: 'services', ar: 'الخدمات', en: 'Services' },
  { key: 'projects', ar: 'الأعمال', en: 'Projects' },
  { key: 'blog', ar: 'مدونة أو مقالات', en: 'Blog or articles' },
  { key: 'contact', ar: 'تواصل ونماذج', en: 'Contact and forms' },
  { key: 'dashboard', ar: 'لوحة تحكم أو نظام خاص', en: 'Dashboard or custom system' },
];

export const contactFaqs: ContactFaqItem[] = [
  {
    qAr: 'هل الاستشارة الأولى مجانية؟',
    qEn: 'Is the first consultation free?',
    aAr: 'نعم. أول جلسة سريعة للتعارف على المشروع وتحديد الاتجاه الأنسب تكون بدون التزام أو رسوم.',
    aEn: 'Yes. The first discovery call is free and focused on understanding the project and the most suitable direction.',
  },
  {
    qAr: 'كم يستغرق تنفيذ الموقع عادة؟',
    qEn: 'How long does delivery usually take?',
    aAr: 'يعتمد ذلك على الحجم، لكن صفحات الخدمات والمواقع المتوسطة غالبًا تتحرك خلال أسابيع قليلة مع جدول واضح من البداية.',
    aEn: 'It depends on scope, but service pages and mid-sized sites usually move within a few weeks with a clear timeline upfront.',
  },
  {
    qAr: 'هل يمكن تنفيذ احتياج شركتك من خارج مصر؟',
    qEn: 'Can your company need be delivered outside Egypt?',
    aAr: 'نعم. نعمل مع شركات في مصر والخليج، ونرتب الرسائل والواجهات بما يناسب طبيعة كل سوق.',
    aEn: 'Yes. We work with businesses across Egypt and the Gulf and shape the messaging and interface around each market.',
  },
  {
    qAr: 'ماذا يحدث بعد إطلاق المشروع؟',
    qEn: 'What happens after launch?',
    aAr: 'يبقى هناك دعم أولي بعد الإطلاق لمتابعة الثبات، إصلاح الأخطاء، وضبط التحسينات الصغيرة حسب نطاق المشروع.',
    aEn: 'We stay available for an initial post-launch support window to stabilize the release, fix issues, and refine small details.',
  },
  {
    qAr: 'هل يمكن تحديث الموقع بسهولة لاحقًا؟',
    qEn: 'Can the site be updated easily later?',
    aAr: 'نعم. نرتب الهيكل بطريقة تسمح بإضافة صفحات أو خدمات أو محتوى جديد بدون تعقيد غير ضروري.',
    aEn: 'Yes. We structure the build so new pages, services, and content can be added later without unnecessary friction.',
  },
  {
    qAr: 'هل أستطيع التواصل مباشرة عبر واتساب؟',
    qEn: 'Can I reach out directly on WhatsApp?',
    aAr: 'بالتأكيد. إذا كنت تفضل النقاش السريع بدل الفورم فمسار واتساب متاح كقناة مباشرة لبدء الحديث.',
    aEn: 'Absolutely. If you prefer a faster conversation than the form, WhatsApp is available as a direct channel.',
  },
  {
    qAr: 'كيف يعمل الموقع مع الأجهزة المختلفة؟',
    qEn: 'How does the site work on different devices?',
    aAr: 'جميع المواقع التي ننشئها تعمل بشكل مثالي على الهواتف والأجهزة اللوحية والحواسيب. التجربة تكون متسقة وسريعة على كل جهاز.',
    aEn: 'All sites we build are optimized for phones, tablets, and desktops. The experience is consistent and fast across every device.',
  },
  {
    qAr: 'هل تشمل الخدمة اسم نطاق والاستضافة؟',
    qEn: 'Does the service include domain and hosting?',
    aAr: 'لا، لكننا نساعدك في اختيار واستئجار النطاق والاستضافة الصحيحة حسب احتياج الشركة. ويمكن نقل الموقع إلى خدمات قائمة عند الحاجة.',
    aEn: 'Not included, but we guide you through selecting the right domain registrar and hosting. If you already have existing services, we can migrate your site there.',
  },
  {
    qAr: 'هل الموقع آمن ومحمي؟',
    qEn: 'Is the site secure and protected?',
    aAr: 'نعم. جميع المواقع تأتي مع شهادة SSL (HTTPS)، وتُتبع أفضل الممارسات الأمنية لحماية البيانات والعملاء.',
    aEn: 'Yes. Every site comes with SSL encryption (HTTPS) and follows security best practices to protect your data and customers.',
  },
  {
    qAr: 'هل يمكنك مساعدتي في تحسين تصنيفي في محركات البحث؟',
    qEn: 'Can you help improve my search engine ranking?',
    aAr: 'نعم. نبني المواقع مع مراعاة معايير SEO من البداية، وننصحك بأفضل الممارسات لكل صفحة والمحتوى والكلمات المفتاحية.',
    aEn: 'Yes. We build sites with SEO best practices from day one and advise on optimizing content, keywords, and page structure.',
  },
  {
    qAr: 'هل يوجد دعم بعد إطلاق الموقع؟',
    qEn: 'Is there support after launch?',
    aAr: 'نعم. نحدد شكل المتابعة حسب نطاق العمل واحتياج الشركة، مع توضيح ما سيتم دعمه بعد التسليم.',
    aEn: 'Yes. We define follow-up based on the scope and company need, with a clear post-handoff support path.',
  },
  {
    qAr: 'هل أحتاج إلى معرفة تقنية للعمل مع فريقك؟',
    qEn: 'Do I need technical knowledge to work with you?',
    aAr: 'لا. نتولى جميع الجوانب التقنية. كل ما نحتاجه منك هو توضيح احتياجاتك والمحتوى والأفكار. نشرح كل خطوة بطريقة واضحة.',
    aEn: 'No. We handle all the technical details. We just need your content, ideas, and feedback at key checkpoints. We explain everything clearly.',
  },
  {
    qAr: 'هل تقدمون خدمات التسويق الرقمي أيضًا؟',
    qEn: 'Do you offer digital marketing services?',
    aAr: 'موقعنا الأساسي هو الويب والتصميم. لكن نساعد على دمج أدوات التحليل والتتبع (Google Analytics، Facebook Pixel) لفهم الأداء.',
    aEn: 'Our core focus is web design and development. However, we can integrate analytics and tracking tools to measure performance and guide your strategy.',
  },
  {
    qAr: 'هل يمكنكم تطوير موقع قائم بدل بناء موقع جديد؟',
    qEn: 'Can you improve an existing site instead of building a new one?',
    aAr: 'نعم. تبدأ الخطوة بمراجعة سريعة للموقع الحالي لتحديد ما إذا كان الأنسب هو تحسين التجربة والسرعة والواجهة، أو إعادة البناء بشكل أنظف إذا كانت البنية الحالية تحدّ من التطوير.',
    aEn: 'Yes. The first step is a quick review of the current site to decide whether improving the UX, speed, and interface is enough, or whether a cleaner rebuild is the better path.',
  },
  {
    qAr: 'هل تحتاج إلى تجهيز كل المحتوى قبل البداية؟',
    qEn: 'Do I need to prepare all the content before we start?',
    aAr: 'ليس بالضرورة. يمكننا البدء بمحتوى مبدئي أو نقاط أساسية، ثم ننظم الصفحات والرسائل الرئيسية معك قبل الصياغة النهائية.',
    aEn: 'Not necessarily. We can start with rough content or key talking points, then shape the page structure and messaging with you before finalizing everything.',
  },
  {
    qAr: 'هل يمكن تنفيذ الموقع بالعربية والإنجليزية؟',
    qEn: 'Can the site be built in both Arabic and English?',
    aAr: 'نعم. إذا كان الزائر المستهدف يحتاج أكثر من لغة، ننظم التجربة والمحتوى من البداية بحيث تكون النسختان واضحتين وسهلتي الاستخدام.',
    aEn: 'Yes. If target visitors need more than one language, we structure the experience and content from the start so both versions stay clear and easy to use.',
  },
  {
    qAr: 'كيف يتم تنظيم الدفعات عادة؟',
    qEn: 'How are payments usually structured?',
    aAr: 'غالبًا نقسم الدفعات على مراحل واضحة مرتبطة بسير العمل، حتى يكون كل شيء منظمًا ومفهومًا من البداية وحتى التسليم.',
    aEn: 'Payments are usually split into clear milestones tied to the project flow, so everything stays organized and easy to follow from kickoff to delivery.',
  },
  {
    qAr: 'هل أستلم صلاحيات الموقع والملفات بعد التسليم؟',
    qEn: 'Do I receive site access and assets after handoff?',
    aAr: 'نعم. عند التسليم تحصل على الوصولات والملفات والمعلومات الأساسية المتعلقة بالموقع، بحيث تبقى الصورة واضحة لديك بعد الإطلاق.',
    aEn: 'Yes. At handoff, you receive the key access details, files, and core site information so you stay fully informed after launch.',
  },
  {
    qAr: 'هل يمكن ربط الموقع بالنماذج والبريد أو أدوات إدارة العملاء؟',
    qEn: 'Can the site connect to forms, email, or CRM tools?',
    aAr: 'نعم، حسب الأدوات التي تستخدمها. يمكن ربط النماذج بالبريد أو أنظمة إدارة العملاء أو أدوات المتابعة المناسبة لطريقة عملك.',
    aEn: 'Yes, depending on the tools you use. Forms can be connected to email, CRM systems, or follow-up workflows that fit your process.',
  },
];
