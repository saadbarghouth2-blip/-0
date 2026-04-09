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
  hideImageCaptions?: boolean;
}

const publicImage = (fileName: string) => encodeURI(`/images/${fileName}`);

export const pageImageShowcases = {
  home: {
    variant: 'mosaic',
    kickerAr: 'لقطات من المشهد',
    kickerEn: 'Visual moments',
    titleAr: 'صور تضيف طبقة ملموسة وسط السرد بدل أن تبقى الصفحة نصوصًا فقط',
    titleEn: 'Images that add a tangible layer inside the story instead of leaving the page text-only.',
    descriptionAr:
      'استخدمنا لقطات من مكتبة المشروع داخل مسار القراءة نفسه حتى يبقى الإيقاع البصري متجددًا ويشعر الزائر بأن وراء الهوية الرقمية فريقًا حقيقيًا ومشهدًا حيًا.',
    descriptionEn:
      'We placed images from the project library directly inside the reading flow to keep the visual rhythm alive and make the brand feel grounded in real studio energy.',
    images: [
      {
        src: publicImage('ChatGPT Image Apr 8, 2026, 11_23_42 AM.png'),
        altAr: 'مشهد بصري إبداعي من هوية نُطق',
        altEn: 'Creative visual scene from Notaq identity',
        captionAr: 'مشهد بصري يدعم الإحساس بالابتكار والاتساع.',
        captionEn: 'A visual scene that reinforces innovation and scale.',
      },
      {
        src: publicImage('Gemini_Generated_Image_uigh61uigh61uigh.png'),
        altAr: 'تكوين رقمي فني يعكس طابع الاستوديو',
        altEn: 'Digital artistic composition reflecting the studio tone',
        captionAr: 'إضافة خفيفة تربط النص بالمزاج العام للصفحة.',
        captionEn: 'A soft layer that connects the copy with the page mood.',
      },
    ],
  },
  about: {
    variant: 'portrait',
    kickerAr: 'من داخل الفريق',
    kickerEn: 'From the team',
    titleAr: 'الحديث عن الرؤية يصبح أقوى حين تقاطعه لحظة بشرية حقيقية',
    titleEn: 'Talking about vision becomes stronger when interrupted by a real human moment.',
    descriptionAr:
      'هنا وضعنا صورة أقرب للمشهد الإنساني ثم لقطة أوسع تكمل السياق، حتى تبقى صفحة من نحن غنية بالدفء لا بالمفاهيم المجردة فقط.',
    descriptionEn:
      'Here we pair a more human-facing moment with a wider supporting frame so the About page feels warm and lived-in rather than purely conceptual.',
    images: [
      {
        src: publicImage('WhatsApp Image 2025-07-25 at 17.40.56_6dae988c.jpg'),
        altAr: 'صورة عمودية من كواليس العمل',
        altEn: 'Vertical behind-the-scenes work photo',
        captionAr: 'حضور إنساني مباشر في قلب الصفحة.',
        captionEn: 'A direct human presence at the center of the page.',
      },
      {
        src: publicImage('WhatsApp Image 2026-02-15 at 2.31.19 AM (1).jpeg'),
        altAr: 'مشهد عمل يوضح بيئة التنفيذ',
        altEn: 'Work scene showing the execution environment',
        captionAr: 'الصورة الثانية تكمل الحكاية بدل تكرارها.',
        captionEn: 'The second frame extends the story instead of repeating it.',
      },
    ],
  },
  services: {
    variant: 'split',
    kickerAr: 'عرض الخدمات بصريًا',
    kickerEn: 'Visualizing services',
    titleAr: 'كل خدمة تستفيد من فاصل بصري مختلف يلتقط المعنى بسرعة',
    titleEn: 'Each service benefits from a visual break that captures meaning quickly.',
    descriptionAr:
      'بدل أن تبقى الخدمات في بطاقات فقط، أضفنا لقطة رئيسية وأخرى مساندة في منتصف الصفحة حتى يتحول الشرح إلى تجربة قراءة أخف وأكثر توازنًا.',
    descriptionEn:
      'Instead of leaving services as cards alone, we added a primary and secondary visual break in the middle of the page to make the explanation lighter and more balanced.',
    images: [
      {
        src: publicImage('Gemini_Generated_Image_8b3hvo8b3hvo8b3h.png'),
        altAr: 'مشهد رقمي يعبر عن الحلول التقنية',
        altEn: 'Digital scene expressing technical solutions',
        captionAr: 'لقطة رئيسية تمنح الصفحة وقفة بصرية واضحة.',
        captionEn: 'A hero frame that gives the page a clear visual pause.',
      },
      {
        src: publicImage('Gemini_Generated_Image_96cd0396cd0396cd.png'),
        altAr: 'صورة ثانوية تدعم الحديث عن بناء الخدمات',
        altEn: 'Secondary image supporting the service-building narrative',
        captionAr: 'الصورة الثانوية تضيف طبقة تفصيل بدون زحام.',
        captionEn: 'The secondary frame adds detail without clutter.',
      },
    ],
  },
  projects: {
    variant: 'band',
    kickerAr: 'بين المشاريع والنتائج',
    kickerEn: 'Between work and results',
    titleAr: 'فاصل بصري واسع يربط المعرض بنتائج التنفيذ بدل الانتقال المفاجئ',
    titleEn: 'A wide visual bridge that connects the gallery with outcomes instead of jumping abruptly.',
    descriptionAr:
      'هذا الجزء يتوسط الصفحة ليمنح العين مساحة راحة قبل الدخول إلى الأرقام والدراسات، مع صور مختلفة تمامًا عن معروض المشاريع نفسه.',
    descriptionEn:
      'This section sits in the middle of the page to give the eye a pause before entering metrics and case studies, using visuals that differ from the project cards themselves.',
    images: [
      {
        src: publicImage('ChatGPT Image Apr 8, 2026, 11_26_40 AM.png'),
        altAr: 'صورة عرض بصري لمشاريع إبداعية',
        altEn: 'Visual display image for creative projects',
        captionAr: 'توسيع الإيقاع البصري خارج بطاقات الأعمال التقليدية.',
        captionEn: 'Expanding the visual rhythm beyond regular project cards.',
      },
      {
        src: publicImage('Gemini_Generated_Image_qr1zi5qr1zi5qr1z.png'),
        altAr: 'تكوين مرئي يعكس تنوع المخرجات',
        altEn: 'A visual composition reflecting output variety',
        captionAr: 'تنويع في الأسلوب حتى لا تتكرر نفس لغة العرض.',
        captionEn: 'A change in style so the presentation language never feels repeated.',
      },
    ],
  },
  projectDetail: {
    variant: 'spotlight',
    kickerAr: 'تفصيلة بصرية',
    kickerEn: 'Visual detail',
    titleAr: 'داخل صفحة المشروع نفسها أضفنا فاصلًا بصريًا مستقلًا يدعم القراءة',
    titleEn: 'Inside the project page itself, we added an independent visual block that supports the reading flow.',
    descriptionAr:
      'بعد مقدمة المشروع والإحصاءات، تأتي هذه اللقطة كطبقة إضافية تعطي الصفحة إيقاعًا بصريًا قبل الدخول إلى المعرض والتفاصيل التفاعلية.',
    descriptionEn:
      'After the project intro and quick stats, this frame adds another visual layer before moving into the gallery and interactive details.',
    images: [
      {
        src: publicImage('IMG-20251112-WA0012.jpg'),
        altAr: 'صورة عملية من داخل مسار التنفيذ',
        altEn: 'Practical image from the execution process',
        captionAr: 'لقطة تساعد صفحة المشروع أن تبدو كقصة كاملة لا ككتلة محتوى واحدة.',
        captionEn: 'A frame that helps the project page feel like a full story instead of one long content block.',
      },
      {
        src: publicImage('Gemini_Generated_Image_rzfhaqrzfhaqrzfh.png'),
        altAr: 'مشهد بصري مكمل لعرض تفاصيل المشروع',
        altEn: 'Supporting visual scene for the project details',
        captionAr: 'الصورة الثانوية تضيف تنفسًا بصريًا قبل الغوص في الأقسام التالية.',
        captionEn: 'The secondary frame gives the eye a breather before the next sections.',
      },
    ],
  },
  blog: {
    variant: 'mosaic',
    kickerAr: 'قراءة مع إيقاع بصري',
    kickerEn: 'Reading with visual rhythm',
    titleAr: 'حتى المدونة تحتاج لحظة بصرية تكسر التكدس وتخدم الفكرة',
    titleEn: 'Even the blog needs a visual interlude that breaks density and serves the idea.',
    descriptionAr:
      'وضعنا هذا العرض بين الأجزاء النصية والمقالات حتى تبقى المدونة حيوية، مع هوية بصرية مختلفة عن صور المقالات نفسها.',
    descriptionEn:
      'We placed this showcase between the textual sections and the article grid so the blog stays lively, with a visual identity distinct from the post thumbnails.',
    hideImageCaptions: true,
    images: [
      {
        src: publicImage('ChatGPT Image Apr 8, 2026, 11_26_40 AM.png'),
        altAr: 'مشهد مكتب نُطق مع شاشات العمل والهوية البصرية',
        altEn: 'Notaq office scene with workstations and visual identity',
        captionAr: '',
        captionEn: '',
      },
      {
        src: publicImage('Gemini_Generated_Image_8b3hvo8b3hvo8b3h.png'),
        altAr: 'شعار نُطق على خلفية داكنة أنيقة',
        altEn: 'Notaq logo on a refined dark wall',
        captionAr: '',
        captionEn: '',
      },
      {
        src: publicImage('Gemini_Generated_Image_96cd0396cd0396cd.png'),
        altAr: 'عرض واجهة نُطق على التابلت والهاتف',
        altEn: 'Notaq interface shown on tablet and mobile',
        captionAr: '',
        captionEn: '',
      },
    ],
  },
  testimonials: {
    variant: 'portrait',
    kickerAr: 'شهادات مدعومة بالمشهد',
    kickerEn: 'Testimonials with context',
    titleAr: 'الآراء تبدو أكثر صدقًا حين يرافقها مشهد بصري غير مكرر',
    titleEn: 'Testimonials feel more credible when they are paired with a non-repetitive visual scene.',
    descriptionAr:
      'أضفنا هنا صورتين مختلفتين عن بطاقات الاقتباسات نفسها، حتى تبقى الصفحة متوازنة بين الشهادة النصية والانطباع البصري.',
    descriptionEn:
      'We added two visuals different from the quote cards themselves so the page stays balanced between written proof and visual impression.',
    images: [
      {
        src: publicImage('WhatsApp Image 2026-02-15 at 2.31.19 AM.jpeg'),
        altAr: 'لقطة أفقية داعمة لصفحة آراء العملاء',
        altEn: 'Wide supporting image for the testimonials page',
        captionAr: 'مساحة أهدأ بين الشهادات الطويلة.',
        captionEn: 'A calmer space between longer testimonials.',
      },
      {
        src: publicImage('WhatsApp Image 2026-02-01 at 8.47.19 PM.jpeg'),
        altAr: 'صورة مكملة لعرض الانطباعات والثقة',
        altEn: 'Supporting image for impressions and trust',
        captionAr: 'الصورة هنا تخدم الإحساس بالثقة لا التكرار.',
        captionEn: 'The image serves trust here, not repetition.',
      },
    ],
  },
  contact: {
    variant: 'band',
    kickerAr: 'قبل الإرسال',
    kickerEn: 'Before sending',
    titleAr: 'فاصل بصري أخير يهدئ الصفحة قبل الجدول الزمني والأسئلة الشائعة',
    titleEn: 'A final visual break that settles the page before the timeline and FAQ.',
    descriptionAr:
      'بعد الفورم وقبل بقية المحتوى، أضفنا صورًا صغيرة ومختلفة لتخفيف الكثافة وإبقاء صفحة التواصل أكثر أناقة وتدرجًا.',
    descriptionEn:
      'After the form and before the rest of the content, we added smaller, varied visuals to soften the density and keep the contact page elegant and well-paced.',
    images: [
      {
        src: publicImage('WhatsApp Image 2026-02-15 at 05.05.18 (2).jpeg'),
        altAr: 'صورة ضمن صفحة التواصل',
        altEn: 'Image placed within the contact page',
        captionAr: 'تعطي الصفحة لمسة بشرية خفيفة قبل الأقسام التالية.',
        captionEn: 'Adds a soft human touch before the next sections.',
      },
      {
        src: publicImage('WhatsApp Image 2026-02-15 at 05.05.18 (3).jpeg'),
        altAr: 'صورة ثانوية لصفحة التواصل',
        altEn: 'Secondary image for the contact page',
        captionAr: 'تنويع بصري صغير لكنه مهم جدًا للإيقاع.',
        captionEn: 'A small visual variation that matters a lot for rhythm.',
      },
    ],
  },
} satisfies Record<string, PageImageShowcase>;
