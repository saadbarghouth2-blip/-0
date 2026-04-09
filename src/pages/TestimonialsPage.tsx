import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Quote,
  Sparkles,
  Star,
  TrendingUp,
  Users2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { illustrationAssets } from '../lib/illustrationAssets';
import { getPageSeoByPath } from '../lib/pageSeo';

const testimonials = [
  {
    nameAr: 'أحمد القحطاني',
    nameEn: 'Ahmed Al-Qahtani',
    roleAr: 'الرئيس التنفيذي، إيليت للضيافة',
    roleEn: 'CEO, Elite Hospitality',
    quoteAr:
      'التنفيذ كان احترافيًا جدًا من أول عرض بصري حتى تسليم الموقع، والنتيجة فعلاً رفعت صورة الشركة أمام العملاء.',
    quoteEn:
      'The execution was highly professional from the first visual direction to launch, and it genuinely elevated how clients see our company.',
  },
  {
    nameAr: 'د. مي محمود',
    nameEn: 'Dr. May Mahmoud',
    roleAr: 'قائدة مشروع، منصة تعليمي',
    roleEn: 'Project Lead, Taaleemi Platform',
    quoteAr:
      'أكثر شيء ميّز التجربة هو وضوح الفكرة داخل الواجهة. لم يكن مجرد تصميم جميل، بل منصة مفهومة ومقنعة ومريحة للاستخدام.',
    quoteEn:
      'What stood out most was the clarity of the idea inside the interface. It was not just beautiful design, but a clear and convincing platform.',
  },
  {
    nameAr: 'محمد جابر',
    nameEn: 'Mohamed Jaber',
    roleAr: 'مدير العمليات، شركة جيو',
    roleEn: 'Operations Director, Geo Company',
    quoteAr:
      'احتجنا موقع شركة تقني لكن سهل الفهم لغير المتخصص، والنتيجة نجحت في إظهار خبرتنا بشكل واضح جدًا.',
    quoteEn:
      'We needed a technical company site that still felt accessible to non-specialists, and the result made our expertise instantly clear.',
  },
  {
    nameAr: 'سارة العتيبي',
    nameEn: 'Sara Al-Otaibi',
    roleAr: 'مديرة العلامة التجارية',
    roleEn: 'Brand Director',
    quoteAr:
      'الصفحات صارت أكثر نضجًا وثقة، والعميل أصبح يفهم الخدمة من أول زيارة بدون شرح طويل.',
    quoteEn:
      'The pages now feel far more mature and confident, and visitors understand the service from the very first visit without extra explanation.',
  },
  {
    nameAr: 'خالد سامح',
    nameEn: 'Khaled Sameh',
    roleAr: 'مؤسس فريق ستارت-أب',
    roleEn: 'Startup Founder',
    quoteAr:
      'التنظيم داخل الموقع وفر علينا كثيرًا، لأننا أصبحنا نرسل الصفحة للعميل فتشرح نفسها تقريبًا.',
    quoteEn:
      'The structure of the site saved us a lot of effort because we can now send the page to prospects and it almost explains itself.',
  },
  {
    nameAr: 'نجلاء إبراهيم',
    nameEn: 'Naglaa Ibrahim',
    roleAr: 'مسؤولة التواصل المؤسسي',
    roleEn: 'Corporate Communications Lead',
    quoteAr:
      'أكثر ما أعجبنا هو أن كل صفحة أصبحت تحمل هدفًا واضحًا بدل أن تكون مجرد جزء صغير داخل الرئيسية.',
    quoteEn:
      'What impressed us most is that every page now carries a clear purpose instead of feeling like a small fragment inside the homepage.',
  },
  {
    nameAr: 'جون سميث',
    nameEn: 'John Smith',
    roleAr: 'المدير التقني، شركة الابتكارات',
    roleEn: 'CTO, Innovations Company',
    quoteAr:
      'الموقع أحدث تحولاً كاملاً في تواجدنا الرقمي. التصميم الاحترافي والرسائل الواضحة ساعدتنا في جذب عملاء دوليين وزيادة معدلات التحويل بشكل كبير.',
    quoteEn:
      'The website transformed our digital presence. The professional design and clear messaging helped us attract international clients and improve conversion rates significantly.',
  },
  {
    nameAr: 'ماريا رودريغيز',
    nameEn: 'Maria Rodriguez',
    roleAr: 'مديرة التسويق، حلول عالمية',
    roleEn: 'Marketing Director, Global Solutions',
    quoteAr:
      'العمل مع هذا الفريق كان استثنائياً. لقد فهموا رؤيتنا العالمية للعلامة التجارية بشكل مثالي، وقدموا موقعاً يلقى صدى لدى الجماهير عبر مختلف الثقافات.',
    quoteEn:
      'Working with this team was exceptional. They understood our global brand vision and translated it into a site that resonates across cultures.',
  },
  {
    nameAr: 'أحمد حسن',
    nameEn: 'Ahmed Hassan',
    roleAr: 'الرئيس التنفيذي، فنتشرز الشرق الأوسط',
    roleEn: 'CEO, Middle East Ventures',
    quoteAr:
      'الاهتمام بالتفاصيل والنهج الاحترافي تجاوز توقعاتنا. أصبح موقعنا الجديد أداة قوية لتطوير الأعمال في أسواق متعددة.',
    quoteEn:
      'Their attention to detail and professional process exceeded our expectations. Our new site has become a strong business development asset across multiple markets.',
  },
  {
    nameAr: 'ليزا تشين',
    nameEn: 'Lisa Chen',
    roleAr: 'مديرة المنتجات، آسيا كورب',
    roleEn: 'Product Director, Asia Corp',
    quoteAr:
      'تصميم تجربة المستخدم متميز للغاية. يجد عملاؤنا من مختلف البلدان الواجهة سهلة الاستخدام والمحتوى واضحاً، مما أدى إلى تفاعل ورضا أفضل.',
    quoteEn:
      'The UX is outstanding. Customers across different markets find the interface easy to use and the content clear, which improved engagement and satisfaction.',
  },
  {
    nameAr: 'ديفيد ويلسون',
    nameEn: 'David Wilson',
    roleAr: 'مؤسس مسرعة الأعمال',
    roleEn: 'Startup Accelerator Founder',
    quoteAr:
      'لقد قدموا بالضبط ما كنا نحتاجه لتوسعنا الدولي. يدعم الموقع الآن لغات وعملات متعددة، مما فتح الأبواب أمام أسواق جديدة بوضوح تام.',
    quoteEn:
      'They delivered exactly what we needed for international expansion. The site now supports multiple languages and currencies and opened clear paths into new markets.',
  },
  {
    nameAr: 'فاطمة الزهراء',
    nameEn: 'Fatima Al-Zahraa',
    roleAr: 'المديرة الرقمية للمجموعة',
    roleEn: 'Group Digital Director',
    quoteAr:
      'التفكير الاستراتيجي وراء تصميم الموقع مثير للإعجاب. فهو لا يبدو احترافياً فحسب، بل يحقق أيضاً نتائج أعمال حقيقية وملوسة.',
    quoteEn:
      'The strategic thinking behind the site is impressive. It not only looks professional, but also drives real and measurable business outcomes.',
  },
  {
    nameAr: 'ياسر العامري',
    nameEn: 'Yasser Al-Amri',
    roleAr: 'مدير تسويق، رائد الحلول',
    roleEn: 'Marketing Manager, Pioneer Solutions',
    quoteAr:
      'التعاون مع نطق كان مثمراً والنتائج فاقت التوقعات، الموقع أصبح الواجهة الأساسية لكل صفقاتنا الجديدة الناجحة.',
    quoteEn:
      'Working with Notaq was productive and the results exceeded expectations. The site has become the main front door for our new business.',
  },
  {
    nameAr: 'ليلى الصالح',
    nameEn: 'Laila Al-Saleh',
    roleAr: 'مؤسسة متجر إشراق',
    roleEn: 'Founder, Ishraq Store',
    quoteAr:
      'تجربة فريدة من نوعها، اهتمام بالتفاصيل ودقة في المواعيد، استطاعوا تحويل أفكاري إلى واقع رقمي مبهر.',
    quoteEn:
      'A truly unique experience with real care for detail and timing. They turned my ideas into a polished digital reality.',
  },
  {
    nameAr: 'عمر الفاروق',
    nameEn: 'Omar Al-Farouq',
    roleAr: 'مدير عمليات، منصة تعليمي',
    roleEn: 'Operations Manager, Taaleemi Platform',
    quoteAr:
      'استطاع الفريق تحويل رؤيتنا المعقدة إلى واجهة بسيطة وسهلة الاستخدام، وهذا ما كنا نبحث عنه بالضبط لعملائنا.',
    quoteEn:
      'The team translated a complex vision into a simple, usable interface, which is exactly what we needed for our audience.',
  },
  {
    nameAr: 'نورة السديري',
    nameEn: 'Noura Al-Sudairi',
    roleAr: 'مديرة علاقات عامة',
    roleEn: 'Public Relations Director',
    quoteAr:
      'الموقع الجديد أعطى انطباعاً بالفخامة والاحترافية، مما زاد من ثقة عملائنا في خدماتنا بشكل ملحوظ وسريع.',
    quoteEn:
      'The new site created a premium and highly professional impression, which quickly improved client confidence in our services.',
  },
  {
    nameAr: 'فيصل القحطاني',
    nameEn: 'Faisal Al-Qahtani',
    roleAr: 'مؤسس شركة تكنو-لاين',
    roleEn: 'Founder, Techno-Line',
    quoteAr:
      'السرعة في الأداء والجودة في التصميم كانت هي المعادلة الصعبة التي حققها لنا فريق نطق باقتدار عالي.',
    quoteEn:
      'The mix of speed and design quality is a hard balance, and Notaq handled it with confidence.',
  },
  {
    nameAr: 'منى الراشد',
    nameEn: 'Mona Al-Rashed',
    roleAr: 'مستشارة أعمال مستقلة',
    roleEn: 'Independent Business Consultant',
    quoteAr:
      'أصبح من السهل جداً عرض خدماتي الآن، الموقع يشرح كل شيء باحترافية تغنيني عن الكثير من الكلام.',
    quoteEn:
      'It is now much easier to present my services. The site explains everything professionally and saves me a lot of talking.',
  },
  {
    nameAr: 'إبراهيم الفوزان',
    nameEn: 'Ibrahim Al-Fawzan',
    roleAr: 'مدير فني، استوديو أبعاد',
    roleEn: 'Art Director, Abaad Studio',
    quoteAr:
      'الدقة في التعامل واللمسة الفنية المبدعة هي ما جعلنا نختار نطق لتكون شريكنا التقني الدائم.',
    quoteEn:
      'The precision in collaboration and the creative artistic touch are why we chose Notaq as a long-term technical partner.',
  },
  {
    nameAr: 'هند السبيعي',
    nameEn: 'Hind Al-Subaie',
    roleAr: 'صاحبة مشروع منزلي لمنتجات الورد',
    roleEn: 'Founder, Home Floral Brand',
    quoteAr:
      'لم أتوقع أن يظهر مشروعي الصغير بهذا الحجم والجمال، التصميم أعطى لمنتجاتي قيمة مضاعفة عند الزبائن.',
    quoteEn:
      'I did not expect my small project to look this polished. The design doubled the perceived value of my products for customers.',
  },
  {
    nameAr: 'وليد البقمي',
    nameEn: 'Waleed Al-Buqami',
    roleAr: 'رئيس جمعية خيرية',
    roleEn: 'Chairman, Nonprofit Association',
    quoteAr:
      'ساهم الموقع في شرح أهدافنا بوضوح ويسّر عملية التبرع، مما أدى لزيادة كبيرة في التفاعل مع برامجنا.',
    quoteEn:
      'The website clarified our mission and made donations easier, which led to a major increase in engagement with our programs.',
  },
  {
    nameAr: 'مشاعل العبدالله',
    nameEn: 'Mashaael Al-Abdullah',
    roleAr: 'مديرة مبيعات إقليمية',
    roleEn: 'Regional Sales Director',
    quoteAr:
      'واجهة احترافية، أداء سريع، وتجربة مستخدم لا مثيل لها. الفريق فاهم جداً لمتطلبات السوق السعودي.',
    quoteEn:
      'A professional interface, fast performance, and an excellent user experience. The team clearly understands the Saudi market.',
  },
  {
    nameAr: 'فادي الحمصي',
    nameEn: 'Fadi Al-Homsi',
    roleAr: 'مؤسس حلول ذكية للبرمجيات',
    roleEn: 'Founder, Smart Software Solutions',
    quoteAr:
      'كفريق تقني، نحن نقدّر الكود النظيف والجودة العالية، وهذا بالضبط ما وجدناه في تنفيذ فريق نطق.',
    quoteEn:
      'As a technical team, we value clean code and high quality, and that is exactly what we found in Notaq’s execution.',
  },
  {
    nameAr: 'غادة الشريف',
    nameEn: 'Ghada Al-Sharif',
    roleAr: 'أخصائية تسويق محتوى',
    roleEn: 'Content Marketing Specialist',
    quoteAr:
      'أصبح الموقع الآن يحكي قصة علاماتنا التجارية بشكل بصري مذهل، وهذا ساعدنا كثيراً في حملاتنا الإعلانية.',
    quoteEn:
      'The website now tells our brand story visually in a compelling way, and that has strongly supported our campaigns.',
  },
];

const stats = [
  { value: '100%', labelAr: 'رضا العملاء', labelEn: 'Client satisfaction' },
  { value: '+180', labelAr: 'مشروع منجز', labelEn: 'Completed projects' },
  { value: '+160', labelAr: 'عميل سعيد', labelEn: 'Happy clients' },
  { value: '24/7', labelAr: 'متابعة وتواصل', labelEn: 'Ongoing communication' },
];

const trustPoints = [
  {
    ar: 'وضوح الفكرة وسهولة قراءة الصفحات',
    en: 'Clear messaging and easy-to-read pages',
  },
  {
    ar: 'تحسين صورة الشركة أمام العملاء',
    en: 'A stronger brand impression in front of clients',
  },
  {
    ar: 'تنظيم المحتوى والخدمات بشكل أقوى',
    en: 'Better structure for content and service presentation',
  },
  {
    ar: 'الاهتمام بالموبايل والديسكتوب معًا',
    en: 'Equal care for mobile and desktop experiences',
  },
];

const proofLayers = [
  {
    titleAr: 'وضوح الرسالة',
    titleEn: 'Clear messaging',
    descriptionAr: 'العميل يفهم النشاط والخدمة بسرعة أكبر من أول زيارة.',
    descriptionEn: 'Visitors understand the business and service more quickly from the first visit.',
  },
  {
    titleAr: 'ثقة أعلى',
    titleEn: 'Stronger trust',
    descriptionAr: 'الموقع يظهر بصورة ناضجة ومؤسسية تليق بعلامة تجارية جادة.',
    descriptionEn: 'The website looks mature and business-ready in a way that suits a serious brand.',
  },
  {
    titleAr: 'عرض أسهل',
    titleEn: 'Easier presentation',
    descriptionAr: 'يمكن مشاركة الصفحات مباشرة مع العملاء أو الفرق بدون شرح طويل.',
    descriptionEn: 'Pages can be shared directly with clients or teams without needing long explanations.',
  },
  {
    titleAr: 'تجربة أنظف',
    titleEn: 'Cleaner experience',
    descriptionAr: 'سهولة التصفح والتنقل تجعل الانطباع النهائي أكثر احترافية.',
    descriptionEn: 'Smooth browsing and navigation make the final impression feel more professional.',
  },
];

const proofCards = [
  {
    kicker: 'Outcome',
    titleAr: 'صفحات تشرح نفسها',
    titleEn: 'Pages that explain themselves',
    descriptionAr: 'نعرض هنا كيف تحوّل التصميم من مجرد صفحة إلى أداة عرض بيعية ومهنية.',
    descriptionEn: 'This is where design moves from a page into a serious sales and presentation tool.',
  },
  {
    kicker: 'Proof',
    titleAr: 'تجربة أكثر وضوحًا',
    titleEn: 'A clearer experience',
    descriptionAr: 'العملاء يذكرون بشكل متكرر أن الموقع صار يشرح الخدمة دون حاجة لشرح طويل.',
    descriptionEn: 'Clients repeatedly mention that the website now explains the service without extra explanation.',
  },
  {
    kicker: 'Result',
    titleAr: 'أثر قابل للعرض',
    titleEn: 'Visible impact',
    descriptionAr: 'تمت الإشارة إلى زيادة الموثوقية والإحساس بأن الموقع يعمل كواجهة أعمال حقيقية.',
    descriptionEn: 'Feedback consistently points to stronger credibility and a more business-ready public presence.',
  },
];

const successMetrics = [
  { value: '98%', labelAr: 'رضا العملاء', labelEn: 'Client satisfaction' },
  { value: '4.9/5', labelAr: 'متوسط التقييم', labelEn: 'Average rating' },
  { value: '85%', labelAr: 'زيادة في التحويلات', labelEn: 'Conversion growth' },
  { value: '24/7', labelAr: 'دعم فني متواصل', labelEn: 'Continuous support' },
];

const TestimonialsPage = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const content = {
    title: isArabic ? 'آراء العملاء' : 'Client testimonials',
    description: isArabic
      ? 'آراء العملاء تعكس كيفية تحسين مواقع نُطق لصورة الشركات ووضوح الرسالة وتحويل الزوار إلى عملاء بثقة.'
      : 'Client testimonials show how Notaq websites improve brand perception, message clarity, and conversion confidence.',
    kicker: isArabic ? 'آراء العملاء' : 'Testimonials',
    heroTitle: isArabic
      ? 'صفحة مستقلة لآراء العملاء تبني الثقة وتوضح أثر التنفيذ'
      : 'A dedicated testimonials page that builds trust and shows project impact',
    heroBody: isArabic
      ? 'هذه الصفحة مخصصة بالكامل لعرض ردود الفعل والانطباعات والنتائج التي يشعر بها العميل بعد تحوّل الموقع أو الصفحة إلى تجربة أوضح وأكثر احترافية.'
      : 'This page is fully dedicated to client feedback, impressions, and the results teams feel once their website becomes clearer and more professional.',
    projectsCta: isArabic ? 'شاهد الأعمال' : 'View projects',
    impactNote: isArabic
      ? 'الثقة لا تأتي من الشكل فقط، بل من إحساس العميل أن الموقع يشرح الخدمة بوضوح ويبدو جاهزًا فعلًا للاستخدام والعرض.'
      : 'Trust does not come from appearance alone. It comes from a site that explains the service clearly and feels truly ready for use and presentation.',
    feedbackDescription: isArabic
      ? 'كل شهادة هنا تضيف زاوية مختلفة: وضوح، ثقة، تنظيم، أو تحسين في صورة البراند أمام العميل.'
      : 'Each testimonial adds a different angle: clarity, trust, structure, or a stronger brand impression.',
    feedbackTitle: isArabic ? 'ما الذي يقوله العملاء بعد التنفيذ؟' : 'What do clients say after launch?',
    trustDescription: isArabic
      ? 'هذه الصفحة لا تعرض المدح فقط، بل توضّح العناصر التي أحدثت فرقًا فعليًا عند العميل بعد تطوير التجربة.'
      : 'This page is not only about praise. It highlights the specific improvements clients actually felt after the experience was upgraded.',
    trustTitle: isArabic ? 'ما الذي يبني الثقة فعلًا؟' : 'What actually builds trust?',
    proofTitle: isArabic ? 'كيف نقرأ آراء العملاء بشكل احترافي؟' : 'How should we read testimonials professionally?',
    proofDescription: isArabic
      ? 'الشهادات ليست مجرد اقتباسات، بل إشارات واضحة إلى نوع التحسن الذي حدث في التجربة والصورة العامة للمشروع.'
      : 'Testimonials are not just quotes. They are clear signals about the kind of improvement that happened in the experience and the brand image.',
  };

  usePageMetadata(getPageSeoByPath('/testimonials', lang));

  return (
    <section className="section-shell pb-20 pt-14 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="section-kicker">
              <Sparkles className="ml-2 inline h-3.5 w-3.5" />
              {content.kicker}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              {content.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">{content.heroBody}</p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" to="/contact">
                {isArabic ? 'ابدأ مشروعك' : 'Start your project'}
              </Link>
              <Link className="btn-secondary" to="/projects">
                {content.projectsCta}
              </Link>
            </div>
          </div>

          <div className="surface-card-strong rounded-[2.4rem] p-7 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.labelEn}
                  className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-5 text-center"
                >
                  <p className="font-display text-4xl font-semibold text-[#6ea8ff]">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{isArabic ? item.labelAr : item.labelEn}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-5">
              <div className="flex items-start gap-3">
                <TrendingUp className="mt-1 h-5 w-5 text-cyan-300" />
                <p className="text-sm leading-7 text-slate-300">{content.impactNote}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle
            align="center"
            description={content.feedbackDescription}
            kicker="Client Feedback"
            title={content.feedbackTitle}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={`${item.nameEn}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="surface-card rounded-[2rem] p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Quote className="h-6 w-6" />
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-base leading-8 text-slate-300">
                  {isArabic ? item.quoteAr : item.quoteEn}
                </p>
                <div className="mt-6 border-t border-white/8 pt-5">
                  <p className="font-medium text-white">{isArabic ? item.nameAr : item.nameEn}</p>
                  <p className="mt-1 text-sm text-slate-400">{isArabic ? item.roleAr : item.roleEn}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              description={content.trustDescription}
              kicker="Trust Signals"
              title={content.trustTitle}
            />
          </div>

          <div className="surface-card rounded-[2rem] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item.en} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-start gap-3">
                    <Users2 className="mt-1 h-5 w-5 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-300">{isArabic ? item.ar : item.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {proofCards.map((item) => (
            <div key={item.kicker} className="surface-card rounded-[2rem] p-6 bg-slate-950/90">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.kicker}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                {isArabic ? item.titleAr : item.titleEn}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {isArabic ? item.descriptionAr : item.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card rounded-[2.4rem] p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">Proof Layers</p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white">
                {content.proofTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">{content.proofDescription}</p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className={`mt-8 flex ${isArabic ? 'justify-start lg:justify-end' : 'justify-start'}`}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full max-w-[320px] overflow-hidden rounded-[2.2rem] border border-cyan-400/20 bg-[#09111c]/90 p-4 shadow-[0_30px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.12),transparent_55%)]" />
                  <div className="relative rounded-[1.8rem] border border-white/8 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 p-4">
                    <img
                      src={illustrationAssets.cloudSync.src}
                      alt={illustrationAssets.cloudSync.alt}
                      className="h-[220px] w-full object-contain drop-shadow-[0_24px_40px_rgba(45,212,191,0.16)]"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {proofLayers.map((item) => (
                <div
                  key={item.titleEn}
                  className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {isArabic ? item.descriptionAr : item.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {successMetrics.map((item, index) => (
            <motion.div
              key={item.labelEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="surface-card rounded-[2rem] p-6 text-center"
            >
              <p className="font-display text-4xl font-semibold text-cyan-300">{item.value}</p>
              <p className="mt-2 text-sm text-slate-400">{isArabic ? item.labelAr : item.labelEn}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
