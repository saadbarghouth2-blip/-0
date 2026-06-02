import { stripLanguagePrefix } from '../lib/localizedPath';
import { enrichmentMediaById } from './enrichmentMedia';
import {
  getPageVariation,
  type HeroComposition,
  type PageExperienceConfig,
  type VariationLayout,
  type VariationSection,
} from './pageVariations';

export interface LocalizedCopy {
  ar: string;
  en: string;
}

export interface EnrichmentPoint {
  title: LocalizedCopy;
  text: LocalizedCopy;
}

export interface EnrichmentMetric {
  value: string;
  label: LocalizedCopy;
}

export interface EnrichmentFaq {
  question: LocalizedCopy;
  answer: LocalizedCopy;
}

export interface PageEnrichmentContent {
  id: string;
  heroMediaId: keyof typeof enrichmentMediaById;
  storyMediaId: keyof typeof enrichmentMediaById;
  videoMediaId: keyof typeof enrichmentMediaById;
  layoutVariant?: VariationLayout;
  heroComposition?: HeroComposition;
  sectionOrder?: VariationSection[];
  pageExperience?: PageExperienceConfig;
  tone?: string;
  accent?: string;
  eyebrow: LocalizedCopy;
  title: LocalizedCopy;
  lead: LocalizedCopy;
  storyTitle: LocalizedCopy;
  storyText: LocalizedCopy;
  problems: EnrichmentPoint[];
  solutions: EnrichmentPoint[];
  process: EnrichmentPoint[];
  metrics: EnrichmentMetric[];
  videoTitle: LocalizedCopy;
  videoText: LocalizedCopy;
  videoPoints: EnrichmentPoint[];
  faq: EnrichmentFaq[];
  ctaTitle: LocalizedCopy;
  ctaText: LocalizedCopy;
}

const copy = (ar: string, en: string): LocalizedCopy => ({ ar, en });

const sharedProcess: EnrichmentPoint[] = [
  {
    title: copy('تشخيص واضح', 'Clear diagnosis'),
    text: copy('يبدأ احتياج الشركة بفهم الهدف التجاري والزائر المستهدف والاعتراضات التي قد تؤخر قرار التواصل.', 'The company need starts by clarifying the business goal, target visitors, and objections that can delay reaching out.'),
  },
  {
    title: copy('هيكلة الرحلة', 'Journey structure'),
    text: copy('يتحول المحتوى إلى مسار قراءة منطقي: ثقة، فهم، إثبات، ثم دعوة واضحة للتواصل.', 'The content becomes a clear reading path: trust, understanding, proof, then a direct call to action.'),
  },
  {
    title: copy('تنفيذ قابل للقياس', 'Measurable delivery'),
    text: copy('كل جزء في الصفحة يخدم نتيجة محددة: تقليل التردد، توضيح العرض، أو زيادة طلبات التواصل.', 'Every page block serves a measurable result: reducing hesitation, clarifying the offer, or increasing inquiries.'),
  },
];

const sharedVideoPoints: EnrichmentPoint[] = [
  {
    title: copy('إيقاع بصري', 'Visual rhythm'),
    text: copy('الفيديو القصير يكسر كثافة القراءة بدون تشتيت أو تحميل مبكر.', 'The short video breaks reading density without distraction or eager loading.'),
  },
  {
    title: copy('إحساس بالعمل الحقيقي', 'Real work feel'),
    text: copy('الحركة تضيف إحساساً بأن وراء الصفحة عملية تنفيذ حية وليست قوالب ثابتة.', 'Motion suggests an active delivery process behind the page, not a static template.'),
  },
];

const makeFaq = (topicAr: string, topicEn: string): EnrichmentFaq[] => [
  {
    question: copy(`هل هذه التفاصيل مهمة في ${topicAr}؟`, `Are these details important for ${topicEn}?`),
    answer: copy('نعم، لأن موقع الشركة لا يكفي أن يبدو جميلًا فقط؛ يجب أن يوضح القيمة، يشرح للزائر طريقة العمل، ويجعل الخطوة التالية بعد التواصل واضحة من البداية.', 'Yes. The company page should not only look good; it should make the value clear, explain the workflow to visitors, and make the next step after contact obvious from the start.'),
  },
  {
    question: copy('هل كثرة المحتوى ستبطئ القرار؟', 'Will richer content slow the decision?'),
    answer: copy('لا، عندما يكون المحتوى مرتبًا بصريًا. الأقسام القصيرة، المقارنات، والأسئلة تساعد زائرك على الفهم أسرع لأنها تجيب اعتراضاته قبل أن تتحول إلى تردد.', 'Not when the content is visually structured. Short sections, comparisons, and FAQs help your visitor understand faster because they answer objections before they turn into hesitation.'),
  },
  {
    question: copy('هل الصور والفيديوهات مجرد ديكور؟', 'Are images and videos just decoration?'),
    answer: copy('لا. كل صورة أو فيديو يجب أن يخدم قرار الزائر: يوضح ما سيحصل عليه، يبني الثقة في الشركة، أو يمنحه وقفة بصرية تجعله يكمل القراءة بدون ملل.', 'No. Every image or video should support the visitor’s decision: clarify what they will get, build trust in the company, or give them a visual pause that keeps reading easy.'),
  },
];

export const pageEnrichmentProfiles: Record<string, PageEnrichmentContent> = {
  home: {
    id: 'home',
    heroMediaId: 'home-hero-workshop',
    storyMediaId: 'home-story-strategy',
    videoMediaId: 'home-interface',
    eyebrow: copy('تجربة أعمق من مجرد صفحة رئيسية', 'More than a homepage'),
    title: copy('حوّل أول زيارة إلى رحلة تقنع الزائر خطوة بخطوة', 'Turn the first visit into a journey that convinces visitors step by step'),
    lead: copy('الصفحة الرئيسية يجب أن تلخص القيمة بسرعة، ثم تفتح أبواباً واضحة لفهم الخدمات، رؤية الأعمال، وبدء التواصل بثقة.', 'The homepage should summarize value quickly, then open clear paths to understand services, inspect work, and start a confident conversation.'),
    storyTitle: copy('ما الذي سيراه الزائر أولاً؟', 'What will visitors see first?'),
    storyText: copy('الزائر يدخل وهو يقارن بين بدائل كثيرة. لذلك تحتاج الصفحة إلى إثبات واضح، ترتيب مريح، وصور تجعل حضور الشركة منظماً لا مجرد واجهة جميلة.', 'Visitors arrive while comparing many alternatives. The page needs clear proof, comfortable structure, and visuals that make the company presence feel organized, not just beautiful.'),
    problems: [
      { title: copy('الرسالة العامة غير كافية', 'Generic messaging is not enough'), text: copy('الزائر يحتاج أمثلة، خطوات، وأدلة قبل أن يثق.', 'Visitors need examples, steps, and evidence before they trust.') },
      { title: copy('الانتقال بين الأقسام قد يكون سريعاً', 'Sections can feel too abrupt'), text: copy('نضيف فواصل بصرية ومحتوى يربط كل جزء بالذي يليه.', 'We add visual breaks and copy that connects every section to the next.') },
    ],
    solutions: [
      { title: copy('مسار قرار واضح', 'Clear decision path'), text: copy('كل قسم يجيب سؤالًا محددًا عند الزائر.', 'Each section answers a specific visitor question.') },
      { title: copy('إثبات قبل الدعوة', 'Proof before the CTA'), text: copy('الأرقام، الصور، وقصص العمل تسبق طلب التواصل.', 'Metrics, visuals, and work stories appear before asking for contact.') },
    ],
    process: sharedProcess,
    metrics: [
      { value: '7+', label: copy('مسارات تنقل واضحة', 'clear navigation paths') },
      { value: '3', label: copy('طبقات إقناع قبل التواصل', 'persuasion layers before contact') },
      { value: '24/7', label: copy('انطباع احترافي مستمر', 'always-on professional impression') },
    ],
    videoTitle: copy('لمسة حركة تربط الفكرة بالتنفيذ', 'Motion that connects idea to execution'),
    videoText: copy('الفيديو لا يظهر كزينة منفصلة، بل كوقفة قصيرة تعطيك إحساسًا بأن التجربة مبنية على عمل حقيقي ومنظم.', 'The video is not decoration; it is a short pause that makes the experience feel built on real, organized work.'),
    videoPoints: sharedVideoPoints,
    faq: makeFaq('الصفحة الرئيسية', 'the homepage'),
    ctaTitle: copy('اجعل صفحتك الأولى تقنع زائرك قبل أن يضغط تواصل', 'Make your first page convince visitors before they press contact'),
    ctaText: copy('زائرك يجب أن يخرج من الصفحة وهو فاهم ما تقدمه، مطمئن لجودة التنفيذ، وعارف الخطوة التالية بدون تردد.', 'Your visitor should leave the page understanding your offer, trusting the quality of execution, and knowing the next step without hesitation.'),
  },
  about: {
    id: 'about',
    heroMediaId: 'about-hero-team',
    storyMediaId: 'about-story-notes',
    videoMediaId: 'about-team-review',
    eyebrow: copy('قصة ومنهجية وليست نبذة قصيرة', 'Story and method, not a short bio'),
    title: copy('اجعل صفحة التعريف تبني ثقة أسرع مع الزائر', 'Make the About page build trust faster with visitors'),
    lead: copy('صفحة التعريف الأقوى تشرح للزائر طريقة التفكير، مسار القرار، وما الذي يجعل بداية التعاون مطمئنة وواضحة.', 'A stronger About page explains the thinking, decision path, and what makes starting collaboration feel clear and reassuring.'),
    storyTitle: copy('اجعل الكواليس دليل ثقة', 'Turn the behind-the-scenes into proof of trust'),
    storyText: copy('بدلاً من كلمات عامة عن الخبرة، اجعل صفحتك تعرض مبادئ العمل، أسلوب التواصل، وطريقة تحويل الأفكار غير المرتبة إلى خطة قابلة للتنفيذ.', 'Instead of generic experience claims, let your page show work principles, communication style, and how raw ideas become executable plans.'),
    problems: [
        { title: copy('النبذة التقليدية لا تكفي', 'Traditional bios fall short'), text: copy('تحتاج أن ترى طريقة التفكير قبل أن تطمئن لقرار التنفيذ.', 'You need to see the thinking before trusting the execution decision.') },
        { title: copy('القيم بدون أمثلة تبدو عامة', 'Values need examples'), text: copy('اربط كل قيمة بسلوك عملي يطمئن الزائر داخل التجربة.', 'Connect each value to a practical behavior that reassures visitors inside the experience.') },
    ],
    solutions: [
        { title: copy('قصة قابلة للتصديق', 'A believable story'), text: copy('اعرض القصة كمسار قرارات واضح لا كمدح ذاتي طويل.', 'Show the story as a clear path of decisions, not long self-praise.') },
        { title: copy('منهجية مرئية', 'Visible method'), text: copy('حوّل طريقة العمل إلى خطوات وبراهين سهلة القراءة.', 'Turn the method into readable steps and proof points.') },
    ],
    process: sharedProcess,
    metrics: [
      { value: '4', label: copy('مبادئ عمل واضحة', 'clear work principles') },
      { value: '3', label: copy('مراحل قرار قبل التنفيذ', 'decision stages before build') },
      { value: '1', label: copy('نقطة تواصل مسؤولة', 'responsible contact point') },
    ],
    videoTitle: copy('اجعل طريقة عملك واضحة في التفاصيل الصغيرة', 'Make your workflow clear in the small details'),
    videoText: copy('الفيديو القصير يكسر كثافة القراءة ويمنح الزائر إحساسًا بأن التجربة مبنية على منهجية هادئة من التشخيص إلى التسليم.', 'Short video breaks dense reading and gives visitors the feeling that the experience is built on a calm method from diagnosis to handoff.'),
    videoPoints: sharedVideoPoints,
    faq: makeFaq('صفحات من نحن', 'About pages'),
    ctaTitle: copy('افهم المنهج قبل اختيار تفاصيل الخدمة', 'Understand the method before choosing service details'),
    ctaText: copy('كلما رأيت طريقة العمل بوضوح، أصبح قرار التواصل أسهل وأكثر جدية.', 'When the working method is clear, reaching out becomes easier and more serious.'),
  },
  services: {
    id: 'services',
    heroMediaId: 'services-hero-product',
    storyMediaId: 'services-story-code',
    videoMediaId: 'services-code-build',
    eyebrow: copy('الخدمات كقرارات واضحة', 'Services as clear decisions'),
    title: copy('كل خدمة تحتاج شرحًا يزيل الحيرة ويساعدك تختار المسار الصحيح', 'Every service needs enough clarity to remove hesitation and guide your choice'),
    lead: copy('نضيف تفاصيل عن المشكلة، النتيجة، خطوات التنفيذ، وما تحصل عليه فعليًا حتى لا تبدو الخدمة كبطاقة مختصرة فقط.', 'We add the problem, outcome, delivery steps, and what you actually receive so services do not feel like short cards.'),
    storyTitle: copy('من عرض الخدمة إلى فهم القيمة', 'From service listing to value clarity'),
    storyText: copy('الخدمة القوية تشرح متى تحتاجها الشركة، ماذا تغيّر في حضورها الرقمي، وكيف نقيس نجاحها بعد الإطلاق.', 'A strong service explains when the company needs it, what it changes in the digital presence, and how success is measured after launch.'),
    problems: [
      { title: copy('أسماء الخدمات متشابهة', 'Service names feel similar'), text: copy('قد لا يكون الفرق واضحًا بين موقع شركة، متجر، أو نظام مخصص.', 'The difference between a company site, a store, or a custom system may not be obvious.') },
      { title: copy('الخوف من نطاق غير واضح', 'Fear of unclear scope'), text: copy('التفاصيل توضح المخرجات والحدود والخطوات.', 'Details clarify deliverables, boundaries, and steps.') },
    ],
    solutions: [
        { title: copy('مقارنة عملية', 'Practical comparison'), text: copy('ستعرف متى تختار كل خدمة وماذا تتوقع منها.', 'You know when to choose each service and what to expect.') },
      { title: copy('أسئلة قبل التعاقد', 'Pre-contract answers'), text: copy('نجيب الأسئلة التي تظهر عادة قبل بدء النقاش الجاد.', 'We answer the questions that usually appear before a serious project discussion.') },
    ],
    process: sharedProcess,
    metrics: [
      { value: '3', label: copy('مسارات خدمة رئيسية', 'main service tracks') },
      { value: '5+', label: copy('مخرجات قابلة للتسليم', 'deliverables per engagement') },
      { value: '0', label: copy('غموض في الخطوة التالية', 'ambiguity in the next step') },
    ],
    videoTitle: copy('التنفيذ التقني يحتاج إيقاعاً واضحاً', 'Technical delivery needs a clear rhythm'),
    videoText: copy('الفيديو القصير يوضح أن الخدمة ليست وعداً عاماً، بل عملية بناء واختبار وتحسين.', 'The short video shows that the service is not a generic promise; it is a process of building, testing, and improving.'),
    videoPoints: sharedVideoPoints,
    faq: makeFaq('صفحات الخدمات', 'service pages'),
    ctaTitle: copy('حوّل الخدمة من عنوان إلى قرار', 'Turn each service from a title into a decision'),
    ctaText: copy('كل تفصيلة يجب أن تقرّبك من الاختيار المناسب وبداية واضحة.', 'Every detail should move you closer to the right choice and a clear start.'),
  },
  projects: {
    id: 'projects',
    heroMediaId: 'projects-hero-review',
    storyMediaId: 'projects-story-mockup',
    videoMediaId: 'projects-interface-scroll',
    eyebrow: copy('الأعمال كدليل قرار', 'Work as decision proof'),
    title: copy('صفحات الأعمال تقنع عندما تربط الشكل بالنتيجة وطريقة التنفيذ', 'Work pages convince when they connect visuals to outcomes and execution'),
    lead: copy('نضيف سياقًا حول سبب كل مشروع، التحدي، الحل، وما الذي يمكنك فهمه من استعراض الأعمال.', 'We add context around each project: why it existed, the challenge, the solution, and what you can understand from browsing the work.'),
    storyTitle: copy('المعرض وحده لا يحكي القصة', 'A gallery alone does not tell the story'),
    storyText: copy('أنت لا تحتاج صورًا فقط؛ تحتاج أن ترى كيف نفكر، كيف نعالج التعقيد، وكيف يظهر المشروع بعد الإطلاق.', 'You do not need visuals alone; you need to see how we think, solve complexity, and shape the launched project.'),
    problems: [
      { title: copy('لقطات بدون سياق', 'Screens without context'), text: copy('الصورة الجميلة لا تكفي إن لم تعرف التحدي والنتيجة.', 'A beautiful screenshot is not enough without the challenge and result.') },
      { title: copy('صعوبة المقارنة', 'Hard to compare'), text: copy('نرتب المشاريع حسب النوع والقيمة حتى تجد ما يشبه حالتك.', 'We organize work by type and value so you find what resembles your case.') },
    ],
    solutions: [
      { title: copy('دراسات حالة مصغرة', 'Mini case studies'), text: copy('نضيف سبب المشروع، القرار، والأثر المتوقع.', 'We add the project reason, decision, and expected impact.') },
      { title: copy('إثبات بصري متنوع', 'Varied visual proof'), text: copy('صور، فيديو، أرقام، وروابط تقود لفهم أعمق.', 'Images, video, metrics, and links guide deeper understanding.') },
    ],
    process: sharedProcess,
    metrics: [
      { value: '12+', label: copy('مشروع قابل للاستعراض', 'projects to inspect') },
      { value: '4', label: copy('طرق عرض للأعمال', 'ways to browse work') },
      { value: '1', label: copy('قرار أوضح بعد التصفح', 'clearer decision after browsing') },
    ],
    videoTitle: copy('من لقطة ثابتة إلى إحساس بالتجربة', 'From static screenshot to experience feel'),
    videoText: copy('الحركة تساعدك أن تتخيل الاستخدام الفعلي، لا شكل الواجهة فقط.', 'Motion helps you imagine actual use, not just interface appearance.'),
    videoPoints: sharedVideoPoints,
    faq: makeFaq('صفحات الأعمال', 'work pages'),
    ctaTitle: copy('اجعل كل مشروع سبباً للتواصل', 'Make every project a reason to reach out'),
    ctaText: copy('العمل الجيد لا يُعرض فقط؛ يشرح لك لماذا يمكنك الوثوق بطريقة التنفيذ.', 'Good work is not only displayed; it explains why you can trust the execution.'),
  },
  blog: {
    id: 'blog',
    heroMediaId: 'blog-hero-writing',
    storyMediaId: 'blog-story-research',
    videoMediaId: 'blog-writing',
    eyebrow: copy('محتوى يعلم ويبيع بهدوء', 'Content that teaches and sells quietly'),
    title: copy('المدونة تصبح أقوى عندما تساعدك على فهم قراراتك الرقمية', 'The blog becomes stronger when it helps you understand digital decisions'),
    lead: copy('نثري صفحات المقالات والتصنيفات بسياق، روابط داخلية، وملخصات عملية تجعل القراءة تقود للتواصل لا للخروج.', 'We enrich posts and categories with context, internal links, and practical summaries so reading leads to contact instead of exit.'),
    storyTitle: copy('المقال يجب أن يكون خطوة في رحلتك', 'A post should be a step in your journey'),
    storyText: copy('كل مقال يجيب سؤالاً، ثم يربطه بخدمة أو مثال أو خطوة تالية واضحة.', 'Each article answers a question, then connects it to a service, example, or clear next step.'),
    problems: [
      { title: copy('قراءة بلا اتجاه', 'Reading without direction'), text: copy('القارئ قد يستفيد ثم يغادر إذا لم يجد خطوة تالية.', 'Readers may benefit and leave if there is no next step.') },
      { title: copy('تصنيفات جافة', 'Dry categories'), text: copy('التصنيف يحتاج مقدمة وفواصل بصرية لا قائمة مقالات فقط.', 'A category needs framing and visual breaks, not just a post list.') },
    ],
    solutions: [
      { title: copy('روابط ذات صلة', 'Related paths'), text: copy('كل موضوع يرتبط بخدمة أو مشروع أو سؤال متكرر.', 'Every topic connects to a service, project, or FAQ.') },
      { title: copy('خلاصة عملية', 'Actionable summary'), text: copy('نختم بأفكار قابلة للتطبيق لا معلومات معلقة.', 'We end with usable ideas, not floating information.') },
    ],
    process: sharedProcess,
    metrics: [
      { value: '3', label: copy('تصنيفات معرفية', 'knowledge categories') },
      { value: '6+', label: copy('أسئلة تتحول لمقالات', 'questions turned into posts') },
      { value: '2', label: copy('مسارات متابعة بعد القراءة', 'follow-up paths after reading') },
    ],
    videoTitle: copy('المحتوى جزء من عملية بناء الثقة', 'Content is part of trust building'),
    videoText: copy('الوسائط داخل المدونة تكسر الجفاف وتحافظ على الإحساس المهني للموقع.', 'Media inside the blog breaks dryness and keeps the site feeling professional.'),
    videoPoints: sharedVideoPoints,
    faq: makeFaq('المدونة', 'the blog'),
    ctaTitle: copy('حوّل المعرفة إلى طلب مشروع', 'Turn knowledge into a project inquiry'),
    ctaText: copy('عندما تفهم المشكلة جيدًا، يصبح طلب الحل أسهل وأكثر وضوحًا.', 'When you understand the problem well, asking for the solution becomes easier and clearer.'),
  },
  testimonials: {
    id: 'testimonials',
    heroMediaId: 'testimonials-hero-client',
    storyMediaId: 'testimonials-story-handshake',
    videoMediaId: 'testimonials-client-call',
    eyebrow: copy('الثقة تحتاج سياقاً', 'Trust needs context'),
    title: copy('آراء العملاء تصبح أكثر إقناعاً عندما تظهر كدليل منظم لا اقتباسات متفرقة', 'Testimonials convince more when they feel like structured proof, not scattered quotes'),
    lead: copy('نضيف طبقات تشرح ماذا تغيّر، لماذا ظهر الفرق، وكيف يمكن لزائر جديد أن يربط ذلك بحالته.', 'We add layers explaining what changed, why the difference appeared, and how new visitors can relate it to their own case.'),
    storyTitle: copy('ما وراء الجملة الجميلة', 'Beyond the nice quote'),
    storyText: copy('كل شهادة تحتاج سياقاً: قبل المشروع، أثناء العمل، وبعد الإطلاق. هذا يجعلها أقرب لقصة ثقة حقيقية.', 'Every testimonial needs context: before the project, during the work, and after launch. That makes it feel like a real trust story.'),
    problems: [
      { title: copy('اقتباس قصير لا يكفي', 'A short quote is not enough'), text: copy('زائرك الجديد يريد معرفة سبب الرضا لا النتيجة فقط.', 'New visitors want to know the reason behind satisfaction, not only the outcome.') },
      { title: copy('التكرار يضعف الثقة', 'Repetition weakens trust'), text: copy('تنويع العرض بين قصص، أرقام، وأسئلة يجعل الصفحة أصدق.', 'Varying stories, metrics, and questions makes the page feel more credible.') },
    ],
    solutions: [
        { title: copy('قصص ثقة', 'Trust stories'), text: copy('يتحول الرأي إلى موقف واضح له بداية ونهاية.', 'Feedback becomes a clear moment with a beginning and end.') },
      { title: copy('إثبات قابل للمقارنة', 'Comparable proof'), text: copy('نرتب الشهادات حسب نوع القيمة: وضوح، سرعة، ثقة، أو تحويل.', 'We organize proof by value type: clarity, speed, trust, or conversion.') },
    ],
    process: sharedProcess,
    metrics: [
      { value: '4', label: copy('أنواع ثقة ظاهرة', 'visible trust types') },
      { value: '2', label: copy('قصص متابعة بعد الإطلاق', 'post-launch story paths') },
      { value: '1', label: copy('انطباع موحد عن الجودة', 'consistent quality impression') },
    ],
    videoTitle: copy('الثقة تظهر في الإيقاع الهادئ', 'Trust appears in a calm rhythm'),
    videoText: copy('الفيديو يدعم إحساس العمل المنظم، ويمنع الصفحة من أن تبدو كقائمة اقتباسات جامدة.', 'Video supports an organized work feeling and keeps the page from becoming a static quote list.'),
    videoPoints: sharedVideoPoints,
    faq: makeFaq('آراء العملاء', 'testimonials'),
    ctaTitle: copy('اجعل تجربة سابقة تقود زائرًا جديدًا', 'Let one success story guide the next visitor'),
    ctaText: copy('الشهادة القوية لا تمدح فقط؛ تشرح لماذا التجربة تستحق التكرار.', 'A strong testimonial does not only praise; it explains why the experience is worth repeating.'),
  },
  contact: {
    id: 'contact',
    heroMediaId: 'contact-hero-message',
    storyMediaId: 'contact-story-brief',
    videoMediaId: 'contact-organizing-tasks',
    eyebrow: copy('صفحة التواصل جزء من البيع', 'Contact is part of the sale'),
    title: copy('قبل أن ترسل رسالتك، تعرف بوضوح ماذا سيحدث بعدها', 'Before you send your message, you know exactly what happens next'),
    lead: copy('ستجد خطوات ما بعد الإرسال، نوع المعلومات المطلوبة، وكيف يتحول التواصل الأول إلى خطة واضحة لاحتياج شركتك.', 'You see the post-submit steps, the information needed, and how the first message becomes a clear plan for your company need.'),
    storyTitle: copy('تواصل بثقة قبل الضغط على إرسال', 'Contact with confidence before you submit'),
    storyText: copy('صفحة التواصل هنا لا تعرض فورماً فقط؛ تطمئنك، توضح الزمن المتوقع، وتجعلك تبدأ بدون ارتباك.', 'This contact page does not only show a form; it reassures you, explains timing, and helps you start without confusion.'),
    problems: [
      { title: copy('الفورم وحده لا يكفي', 'Forms alone are not enough'), text: copy('تحتاج رسالة طمأنة وخطوات واضحة قبل أن تبدأ.', 'You need reassurance and clear next steps before you start.') },
      { title: copy('الخوف من عدم الرد', 'Fear of no response'), text: copy('توضيح طريقة المتابعة يقلل التردد.', 'Explaining follow-up reduces hesitation.') },
    ],
    solutions: [
      { title: copy('مسار بعد الإرسال', 'Post-submit path'), text: copy('تظهر لك الخطوة التالية بوضوح: ماذا يحدث في أول رد، وما المعلومات التي تساعد على فهم احتياج الشركة بسرعة.', 'You see the next step clearly: what happens in the first reply and what information helps the company need become clear faster.') },
      { title: copy('Brief ذكي', 'Smart brief'), text: copy('ترتب المتطلبات بسرعة قبل بدء الحديث، حتى تكون الخطوة الأولى أوضح.', 'You can organize requirements quickly before the conversation, so the first step feels clearer.') },
    ],
    process: [
      { title: copy('استلام وفهم', 'Receive and understand'), text: copy('مراجعة الرسالة وتحديد نوع المشروع والهدف الأساسي.', 'Review the message and identify project type and main goal.') },
      { title: copy('أسئلة مركزة', 'Focused questions'), text: copy('طلب تفاصيل قليلة لكنها حاسمة لتقليل التخمين.', 'Ask a few decisive questions to reduce guesswork.') },
      { title: copy('اقتراح بداية', 'Starting proposal'), text: copy('تحديد الخطوة التالية: مكالمة، brief، أو نطاق أولي.', 'Define the next step: call, brief, or initial scope.') },
    ],
    metrics: [
      { value: '3', label: copy('خطوات بعد الرسالة', 'steps after the message') },
      { value: '1', label: copy('Brief يوضح الفكرة', 'brief that clarifies the idea') },
      { value: '0', label: copy('غموض في البداية', 'confusion at the start') },
    ],
    videoTitle: copy('بداية منظمة أفضل من رسالة عشوائية', 'An organized start beats a random message'),
    videoText: copy('الفيديو يعطي الصفحة لمسة عمل هادئة قبل أن تنتقل إلى التواصل الفعلي.', 'Video gives the page a calm work tone before you move into actual contact.'),
    videoPoints: sharedVideoPoints,
    faq: makeFaq('صفحة التواصل', 'the contact page'),
    ctaTitle: copy('اجعل التواصل خطوة سهلة لا قراراً ثقيلاً', 'Make contact easy, not heavy'),
    ctaText: copy('كلما عرفت ماذا سيحدث بعد الإرسال، أصبح قرار البداية أسهل وأوضح.', 'The more you know what happens after submitting, the easier and clearer it is to start.'),
  },
};

type EnrichmentVideoId = keyof typeof enrichmentMediaById;

const detailVideoIds: EnrichmentVideoId[] = [
  'home-interface',
  'about-team-review',
  'services-code-build',
  'projects-interface-scroll',
  'blog-writing',
  'testimonials-client-call',
  'contact-organizing-tasks',
  'digital-workflow',
];

const routeIndex = (value: string, total: number) => {
  const seed = [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return total === 0 ? 0 : seed % total;
};

const withVideo = (
  profile: PageEnrichmentContent,
  path: string,
  videos = detailVideoIds,
): PageEnrichmentContent => ({
  ...profile,
  videoMediaId: videos[routeIndex(path, videos.length)],
});

const withVariation = (profile: PageEnrichmentContent, path: string): PageEnrichmentContent => {
  const variation = getPageVariation(path);

  if (!variation) {
    return profile;
  }

  return {
    ...profile,
    id: `${profile.id}-${path.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}`,
    heroMediaId: variation.heroMediaId,
    storyMediaId: variation.storyMediaId,
    videoMediaId: variation.videoMediaId,
    layoutVariant: variation.layoutVariant,
    heroComposition: variation.heroComposition,
    sectionOrder: variation.sectionOrder,
    pageExperience: variation.pageExperience,
    tone: variation.tone,
    accent: variation.accent,
    eyebrow: variation.eyebrow ?? profile.eyebrow,
    title: variation.title ?? profile.title,
    lead: variation.lead ?? profile.lead,
    metrics: variation.metrics ?? profile.metrics,
    ctaTitle: variation.ctaTitle ?? profile.ctaTitle,
    ctaText: variation.ctaText ?? profile.ctaText,
  };
};

const profileByRoute = (path: string) => {
  const normalized = stripLanguagePrefix(path);

  if (normalized === '/') return pageEnrichmentProfiles.home;
  if (normalized.startsWith('/home/')) {
    return withVariation(withVideo(pageEnrichmentProfiles.home, normalized, [
      'home-interface',
      'projects-interface-scroll',
      'digital-workflow',
    ]), normalized);
  }
  if (normalized === '/about') return pageEnrichmentProfiles.about;
  if (normalized.startsWith('/about/')) {
    return withVariation(withVideo(pageEnrichmentProfiles.about, normalized, [
      'about-team-review',
      'testimonials-client-call',
      'contact-organizing-tasks',
    ]), normalized);
  }
  if (normalized === '/services') return pageEnrichmentProfiles.services;
  if (normalized.startsWith('/services/')) {
    return withVariation(withVideo(pageEnrichmentProfiles.services, normalized, [
      'services-code-build',
      'digital-workflow',
      'home-interface',
      'projects-interface-scroll',
    ]), normalized);
  }
  if (normalized === '/projects') return pageEnrichmentProfiles.projects;
  if (normalized.startsWith('/projects/')) {
    return withVariation(withVideo(pageEnrichmentProfiles.projects, normalized, [
      'projects-interface-scroll',
      'home-interface',
      'services-code-build',
      'blog-writing',
      'contact-organizing-tasks',
    ]), normalized);
  }
  if (normalized === '/case-studies') {
    return { ...pageEnrichmentProfiles.projects, videoMediaId: 'services-code-build' };
  }
  if (normalized === '/gallery') {
    return { ...pageEnrichmentProfiles.projects, videoMediaId: 'home-interface' };
  }
  if (normalized === '/stats') {
    return { ...pageEnrichmentProfiles.projects, videoMediaId: 'digital-workflow' };
  }
  if (normalized === '/blog') return pageEnrichmentProfiles.blog;
  if (normalized.startsWith('/blog/')) {
    return withVariation(withVideo(pageEnrichmentProfiles.blog, normalized, [
      'blog-writing',
      'home-interface',
      'services-code-build',
    ]), normalized);
  }
  if (normalized === '/testimonials') return pageEnrichmentProfiles.testimonials;
  if (normalized.startsWith('/testimonials/')) {
    return withVariation(withVideo(pageEnrichmentProfiles.testimonials, normalized, [
      'testimonials-client-call',
      'about-team-review',
      'contact-organizing-tasks',
    ]), normalized);
  }
  if (normalized === '/contact') return pageEnrichmentProfiles.contact;
  if (normalized.startsWith('/contact/')) {
    return withVariation({ ...pageEnrichmentProfiles.contact, videoMediaId: 'blog-writing' }, normalized);
  }

  return null;
};

export const getPageEnrichment = (path: string) => profileByRoute(path);
