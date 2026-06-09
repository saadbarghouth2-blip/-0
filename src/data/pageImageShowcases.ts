import { localImages, type LocalImageAsset } from './localImageInventory';

export type PageImageShowcaseVariant =
  | 'mosaic'
  | 'portrait'
  | 'split'
  | 'band'
  | 'spotlight';

export interface ShowcaseImageItem {
  src: string;
  altAr: string;
  altEn: string;
  captionAr: string;
  captionEn: string;
}

export interface PageImageShowcase {
  variant: PageImageShowcaseVariant;
  kickerAr: string;
  kickerEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  images: ShowcaseImageItem[];
}

const showcaseImage = (asset: LocalImageAsset): ShowcaseImageItem => ({
  src: asset.src,
  altAr: asset.altAr,
  altEn: asset.altEn,
  captionAr: '',
  captionEn: '',
});

export const pageImageShowcases = {
  home: {
    variant: 'mosaic',
    kickerAr: 'مشهد يقرّب الفكرة',
    kickerEn: 'A clearer visual feel',
    titleAr: 'شاهد حضور شركتك وهو يبدو حقيقياً قبل التنفيذ',
    titleEn: 'See your company presence feel real before execution.',
    descriptionAr:
      'الصورة هنا ليست معرضاً زائداً؛ هي وقفة بصرية تساعد صاحب القرار على تخيل حضور الموقع أمام الزائر. بدل أن يقرأ الزائر وعوداً طويلة فقط، يرى واجهة واضحة، هوية متماسكة، وإحساساً بأن الشركة منظمة من أول لحظة.',
    descriptionEn:
      'This is not an extra gallery; it is a visual pause that helps decision-makers imagine how the website can feel to visitors. Instead of long promises only, visitors see a clearer interface, a consistent identity, and a more organized first impression.',
    images: [
      showcaseImage(localImages.studioScene),
      showcaseImage(localImages.interfaceScene),
    ],
  },
  about: {
    variant: 'portrait',
    kickerAr: 'طريقة العمل بوضوح',
    kickerEn: 'A clearer workflow',
    titleAr: 'افهم كيف يتحول احتياج الشركة إلى تجربة قابلة للثقة',
    titleEn: 'Understand how a company need becomes a trustworthy experience.',
    descriptionAr:
      'صاحب القرار لا يحتاج كلاماً عاماً عن الخبرة فقط؛ بل يحتاج أن يرى طريقة تفكير واضحة: كيف يُقرأ الاحتياج، كيف تُرتب الرسالة، وكيف تتحول التفاصيل الصغيرة إلى واجهة تساعد الزائر على الفهم واتخاذ قرار بثقة.',
    descriptionEn:
      'Decision-makers do not need generic claims about experience only; they need to see a clear way of thinking: how the need is read, how the message is shaped, and how small details become an interface visitors can understand and trust.',
    images: [
      showcaseImage(localImages.realPresentation),
      showcaseImage(localImages.reviewMeeting),
    ],
  },
  services: {
    variant: 'split',
    kickerAr: 'الخدمة قبل القرار',
    kickerEn: 'Service before decision',
    titleAr: 'اختر الخدمة وأنت ترى كيف تخدم موقع الشركة وزائرها',
    titleEn: 'Choose the service while seeing how it serves the company website and visitors.',
    descriptionAr:
      'بدل قائمة خدمات جامدة، ستفهم ما الذي تضيفه كل خدمة للشركة: تنظيم أفضل للمحتوى، واجهة أهدأ، مسار أوضح للزائر، وتجربة تجعل التواصل أو الشراء أو طلب الخدمة أسهل.',
    descriptionEn:
      'Instead of a static services list, you understand what each service adds to the company: clearer content, calmer screens, a better visitor path, and an experience that makes contacting, buying, or requesting easier.',
    images: [
      showcaseImage(localImages.abstractTech),
      showcaseImage(localImages.brandWall),
    ],
  },
  projects: {
    variant: 'band',
    kickerAr: 'من الصورة إلى النتيجة',
    kickerEn: 'From image to outcome',
    titleAr: 'راجع الأعمال وأنت تبحث عن شكل يناسب شركتك لا عن صور كثيرة فقط',
    titleEn: 'Review the work while looking for what fits your company, not just more images.',
    descriptionAr:
      'صفحة الأعمال يجب أن تساعد صاحب القرار على المقارنة بهدوء: هل الأسلوب مناسب؟ هل الواجهة واضحة؟ هل النتيجة قريبة من طموح الشركة؟ لذلك نعرض صورتين قويتين داخل النص بدل تكديس طويل يسرق الانتباه من القرار الأساسي.',
    descriptionEn:
      'The work page should help you compare calmly: does the style fit, is the interface clear, and is the outcome close to your ambition? Two strong visuals support the copy without stealing attention from the decision you need to make.',
    images: [
      showcaseImage(localImages.brandMockup),
      showcaseImage(localImages.premiumDashboard),
    ],
  },
  projectDetail: {
    variant: 'spotlight',
    kickerAr: 'تفاصيل أسهل في القراءة',
    kickerEn: 'Details made easier',
    titleAr: 'اقرأ تفاصيل المشروع بإيقاع بصري يساعدك على فهم القرار',
    titleEn: 'Read case details with a visual rhythm that supports the decision.',
    descriptionAr:
      'عند دخول صفحة مشروع، المهم أن يظهر السياق لا أن يغرق الزائر في صور متكررة. الصورتان هنا تعملان كفاصل واضح بين المقدمة والتفاصيل، وتساعدان صاحب القرار على قراءة ما تم تنفيذه ولماذا تم اختياره.',
    descriptionEn:
      'When you open a project page, the goal is to understand the context, not scroll through repeated visuals. These two images create a clean pause between the intro and the details so the decisions behind the work are easier to follow.',
    images: [
      showcaseImage(localImages.briefRoom),
      showcaseImage(localImages.projectVisual),
    ],
  },
  blog: {
    variant: 'mosaic',
    kickerAr: 'قراءة أخف',
    kickerEn: 'Lighter reading',
    titleAr: 'اقرأ الأفكار بدون تكدس نصي طويل يقطع تركيزك',
    titleEn: 'Read ideas without dense blocks of text breaking your focus.',
    descriptionAr:
      'المحتوى التعليمي يكون أقوى عندما يمنح القارئ فرصة للتوقف والفهم. لذلك تظهر الصور هنا كاستراحة منظمة داخل الصفحة، لا كمعرض جانبي، مع الحفاظ على ارتباط الكلام باحتياج الشركة وموقعها.',
    descriptionEn:
      'Educational content works better when it gives readers room to pause and understand. The visuals act as structured breaks while keeping the idea connected to the company need and website.',
    images: [
      showcaseImage(localImages.articleVisual),
      showcaseImage(localImages.blogResearchLocal),
    ],
  },
  testimonials: {
    variant: 'portrait',
    kickerAr: 'ثقة أوضح',
    kickerEn: 'Clearer trust',
    titleAr: 'اقرأ الآراء ضمن سياق بصري يجعل الثقة أسهل',
    titleEn: 'Read testimonials in a visual context that makes trust easier.',
    descriptionAr:
      'آراء العملاء تظل شهادات مكتوبة، لكن وجود صور قليلة ومنظمة يجعل الصفحة أهدأ وأقرب للتصديق. يظهر الانطباع البصري الداعم بدون مبالغة، وتصبح قراءة التجارب أسهل قبل تقييم ملاءمة الأسلوب للشركة.',
    descriptionEn:
      'Testimonials remain written proof, but a small and organized visual context makes the page calmer and easier to trust, helping decision-makers assess whether this approach fits the company.',
    images: [
      showcaseImage(localImages.officeWide),
      showcaseImage(localImages.testimonialsTrustLocal),
    ],
  },
  contact: {
    variant: 'band',
    kickerAr: 'قبل أن تبدأ التواصل',
    kickerEn: 'Before you contact',
    titleAr: 'اعرف كيف تتحول رسالة شركتك إلى خطوة تنفيذ واضحة',
    titleEn: 'See how your company message becomes a clear execution step.',
    descriptionAr:
      'صفحة التواصل ليست فورم فقط. صاحب القرار يحتاج أن يعرف كيف تبدأ الخطوة التالية، وما المعلومات التي تساعد على فهم احتياج الشركة بسرعة. الصورتان هنا تهدئان الصفحة وتدعمان الكلام بدل الزحمة.',
    descriptionEn:
      'A contact page is not just a form. Decision-makers need to know what happens next and what information will make the company need clear faster.',
    images: [
      showcaseImage(localImages.presentationHall),
      showcaseImage(localImages.strategyRoom),
      showcaseImage(localImages.teamSession),
    ],
  },
  gallery: {
    variant: 'spotlight',
    kickerAr: 'معرض بدون زحمة',
    kickerEn: 'Gallery without clutter',
    titleAr: 'استكشف الصور كمشاهد مختارة لا كصف طويل يشتت عينك',
    titleEn: 'Explore visuals as selected moments, not a long distracting row.',
    descriptionAr:
      'المعرض يصبح أقوى عندما يختار لك لقطات محددة بدل أن يرمي كل شيء دفعة واحدة. هنا ترى صورتين تحملان الإحساس العام للهوية والعمل، وبعدها تستطيع متابعة الصفحة بدون فقدان الإيقاع أو الشعور بأن الصور تزاحم الكلام.',
    descriptionEn:
      'A gallery is stronger when it selects meaningful moments instead of throwing everything at once. These two visuals carry the overall feel while keeping the page focused and easy to continue.',
    images: [
      showcaseImage(localImages.galleryHero),
      showcaseImage(localImages.cloudSync),
    ],
  },
  caseStudies: {
    variant: 'band',
    kickerAr: 'قرار أوضح',
    kickerEn: 'Clearer decision',
    titleAr: 'افهم دراسة الحالة من خلال صورة تساعدك على قراءة النتيجة',
    titleEn: 'Understand the case study through visuals that support the outcome.',
    descriptionAr:
      'دراسة الحالة لا تحتاج صورًا كثيرة بقدر ما تحتاج ربطًا واضحًا بين المشكلة والقرار والنتيجة. لذلك نكتفي بصورتين مرتبطتين بالسياق، ونترك المساحة للكلام الذي يوضح ماذا تغيّر، ولماذا كان الاختيار مناسبًا، وكيف تستفيد الشركة من نفس المنطق.',
    descriptionEn:
      'A case study does not need many images as much as it needs a clear link between the problem, decision, and outcome. Two contextual visuals leave enough space for the explanation that helps companies apply the same thinking.',
    images: [
      showcaseImage(localImages.reeqStore),
      showcaseImage(localImages.kidsLearningByMap),
    ],
  },
} satisfies Record<string, PageImageShowcase>;
