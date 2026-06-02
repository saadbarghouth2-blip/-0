import { localImages } from './localImageInventory';

export type EditorialImageId =
  | 'studio-structure'
  | 'office-reception'
  | 'trust-workshop'
  | 'brand-hero'
  | 'presentation-hall'
  | 'strategy-room'
  | 'team-session'
  | 'brief-room';

export interface EditorialImageContent {
  id: EditorialImageId;
  src: string;
  eyebrow: { ar: string; en: string };
  title: { ar: string; en: string };
  body: { ar: string; en: string };
  caption: { ar: string; en: string };
  alt: { ar: string; en: string };
}

export const editorialImages: Record<EditorialImageId, EditorialImageContent> = {
  'studio-structure': {
    id: 'studio-structure',
    src: localImages.studioScene.src,
    eyebrow: { ar: 'منهجية واضحة', en: 'Clear method' },
    title: { ar: 'الفكرة لا تظهر قوية إلا عندما تُرتّب بصريًا', en: 'Ideas feel stronger when they are visually structured' },
    body: {
      ar: 'ستتحول التفاصيل الكثيرة إلى مسار واضح يشرح القيمة خطوة بخطوة، فيرى الزائر الصورة قبل أن يطلبها.',
      en: 'Many details become a clear path that explains value step by step, so visitors can see the picture before asking for it.',
    },
    caption: { ar: 'ترتيب بصري يخدم الفهم والقرار.', en: 'Visual structure that serves understanding and action.' },
    alt: { ar: 'مشهد بصري يعبر عن ترتيب وتنظيم المتطلبات الرقمية', en: 'Visual scene representing structured digital requirements' },
  },
  'office-reception': {
    id: 'office-reception',
    src: localImages.officeReception.src,
    eyebrow: { ar: 'حضور حقيقي', en: 'Real presence' },
    title: { ar: 'الهوية لا تُحكى فقط، بل تُرى في كل نقطة تواصل', en: 'Identity is not only told; it is seen at every touchpoint' },
    body: {
      ar: 'وجود بصري واضح يجعل الزائر يشعر أن خلف الموقع فريقًا ونظامًا وتجربة تستحق الثقة.',
      en: 'A clear visual presence helps visitors feel there is a team, a system, and a trustworthy experience behind the website.',
    },
    caption: { ar: 'الانطباع يبدأ من أول لقطة.', en: 'The impression starts from the first frame.' },
    alt: { ar: 'استقبال يحمل هوية نُطق داخل مساحة عمل', en: 'Reception area carrying Notaq identity inside a workspace' },
  },
  'trust-workshop': {
    id: 'trust-workshop',
    src: localImages.abstractTech.src,
    eyebrow: { ar: 'ثقة التنفيذ', en: 'Execution trust' },
    title: { ar: 'النتيجة الأقوى تأتي من تفاصيل صغيرة يتم ضبطها مبكرًا', en: 'Stronger outcomes come from small details handled early' },
    body: {
      ar: 'نربط الرسالة، التصميم، وسرعة الاستخدام حتى لا يبدو الموقع جميلًا فقط، بل مقنعًا وقابلًا للتوسع.',
      en: 'We connect message, design, and speed so the site is not only beautiful, but persuasive and scalable.',
    },
    caption: { ar: 'كل تفصيلة لها وظيفة في القرار.', en: 'Every detail has a role in the decision.' },
    alt: { ar: 'واجهة رقمية تظهر الثقة وطريقة تنفيذ المشروع', en: 'Digital interface showing trust and execution method' },
  },
  'brand-hero': {
    id: 'brand-hero',
    src: localImages.brandWall.src,
    eyebrow: { ar: 'حضور يسبق المقارنة', en: 'Presence before comparison' },
    title: { ar: 'اجعل الزائر يرى قيمة الشركة من أول نظرة', en: 'Let visitors see the company value from the first glance' },
    body: {
      ar: 'عندما يدخل الزائر إلى موقع الشركة، يحتاج أن يفهم بسرعة ما الذي تقدمه، لماذا يثق بها، وما الخطوة التالية المناسبة له.',
      en: 'When visitors enter the company website, they need to quickly understand what it offers, why they should trust it, and what to do next.',
    },
    caption: { ar: 'حضور بصري يجعل قرار التواصل أسهل.', en: 'A visual presence that makes the decision easier.' },
    alt: { ar: 'واجهة مشروع رقمية مع هوية نُطق', en: 'Digital project interface with Notaq identity' },
  },
  'presentation-hall': {
    id: 'presentation-hall',
    src: localImages.presentationHall.src,
    eyebrow: { ar: 'شرح وتثقيف', en: 'Explain and educate' },
    title: { ar: 'المحتوى الجيد يساعد الزائر على اختيار القرار الصحيح', en: 'Good content helps visitors choose well' },
    body: {
      ar: 'اجعل المقالات والشرح جزءًا من رحلة الثقة، لا حشوًا نصيًا منفصلًا عن التجربة.',
      en: 'Make articles and explanations part of the trust journey, not text filler disconnected from the experience.',
    },
    caption: { ar: 'الصورة تكسر النص وتضيف معنى.', en: 'The image breaks the text and adds meaning.' },
    alt: { ar: 'عرض تقديمي أمام جمهور داخل قاعة', en: 'Presentation in front of an audience inside a hall' },
  },
  'strategy-room': {
    id: 'strategy-room',
    src: localImages.strategyRoom.src,
    eyebrow: { ar: 'دليل اجتماعي', en: 'Social proof' },
    title: { ar: 'الثقة تزيد عندما يرى الزائر طريقة العمل لا النتيجة فقط', en: 'Trust grows when visitors see the way of work, not only the result' },
    body: {
      ar: 'ضع الدليل البصري بجانب الكلام حتى يشعر الزائر أن التجربة مبنية على حوار وفهم وتنفيذ فعلي.',
      en: 'Place visual proof beside the message so visitors feel the experience is built on dialogue, understanding, and real execution.',
    },
    caption: { ar: 'مشهد عمل يدعم المصداقية بدون مبالغة.', en: 'A work scene that supports credibility without exaggeration.' },
    alt: { ar: 'جلسة شرح واستراتيجية داخل غرفة اجتماعات', en: 'Strategy and explanation session inside a meeting room' },
  },
  'team-session': {
    id: 'team-session',
    src: localImages.teamSession.src,
    eyebrow: { ar: 'جلسة تنفيذ', en: 'Execution session' },
    title: { ar: 'كل طلب يبدأ بفهم السياق قبل كتابة السطر الأول', en: 'Every request starts with context before the first line is written' },
    body: {
      ar: 'التواصل المنظم يختصر الوقت ويجعل الرد الأول عمليًا بدل أن يكون مجرد رسالة ترحيب.',
      en: 'Structured communication saves time and makes the first response practical instead of just introductory.',
    },
    caption: { ar: 'تخطيط واضح قبل بدء التنفيذ.', en: 'Clear planning before execution starts.' },
    alt: { ar: 'فريق يناقش مشروعًا داخل غرفة عمل', en: 'Team discussing a project inside a work room' },
  },
  'brief-room': {
    id: 'brief-room',
    src: localImages.briefRoom.src,
    eyebrow: { ar: 'من الكواليس', en: 'Behind the scenes' },
    title: { ar: 'المعرض يصبح أقوى عندما يحكي ما وراء الصورة', en: 'A gallery is stronger when it tells what sits behind the image' },
    body: {
      ar: 'بدل تكديس اللقطات، نختار صورة تقود الزائر لفهم طريقة التفكير والتحضير والتنفيذ.',
      en: 'Instead of stacking visuals, we use an image that helps visitors understand thinking, preparation, and execution.',
    },
    caption: { ar: 'لقطة ختامية تربط الصورة بالقصة.', en: 'A closing visual that connects image to story.' },
    alt: { ar: 'غرفة عرض وتحضير لمشروع رقمي', en: 'Presentation room prepared for a digital project' },
  },
};
