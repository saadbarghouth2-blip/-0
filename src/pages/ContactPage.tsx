import { motion } from 'framer-motion';
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  ArrowUpLeft,
  Building2,
  CheckCircle,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  Landmark,
  Loader2,
  Mail,
  MapPinned,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import PageHero from '../components/PageHero';
import PageImageShowcaseSection from '../components/PageImageShowcase';
import {
  contactFaqs,
  inquiryTypes,
  languageOptions,
  pageNeedOptions,
  timelineOptions,
  websiteTypeOptions,
} from '../data/contactPageContent';
import { pageImageShowcases } from '../data/pageImageShowcases';
import { portfolioProfile } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { trackEvent } from '../lib/analytics';
import { clientFacingText } from '../lib/repairText';

const legalIssuerIcons = {
  registry: Building2,
  tax: Landmark,
  'tax-file': ReceiptText,
  address: MapPinned,
};
import { buildWhatsAppUrl, getDefaultWhatsAppMessage } from '../lib/contactLinks';
import { CONTACT_EMAIL, isEmailJsConfigured, sendContactEmails } from '../lib/emailjsClient';
import { illustrationAssets } from '../lib/illustrationAssets';
import { getPageSeoByPath } from '../lib/pageSeo';

type FormState = {
  name: string;
  email: string;
  phone_or_whatsapp: string;
  company: string;
  inquiry_type: string;
  website_type: string;
  timeline: string;
  preferred_language: string;
  pages_needed: string[];
  details: string;
  botField: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  phone_or_whatsapp: '',
  company: '',
  inquiry_type: inquiryTypes[0]?.key ?? '',
  website_type: websiteTypeOptions[0]?.key ?? '',
  timeline: timelineOptions[0]?.key ?? '',
  preferred_language: languageOptions[2]?.key ?? '',
  pages_needed: ['home', 'services', 'contact'],
  details: '',
  botField: '',
};

const socialProofStats = [
  {
    icon: Rocket,
    valueAr: '180+',
    valueEn: '180+',
    labelAr: 'نماذج ومشاريع منفذة',
    labelEn: 'Delivered projects and showcases',
  },
  {
    icon: Clock3,
    valueAr: '< 24h',
    valueEn: '< 24h',
    labelAr: 'متوسط وقت الرد الأول',
    labelEn: 'Average first-response time',
  },
  {
    icon: ShieldCheck,
    valueAr: 'دعم أولي',
    valueEn: 'Initial support',
    labelAr: 'متابعة بعد الإطلاق حسب نطاق المشروع',
    labelEn: 'Post-launch follow-up based on scope',
  },
];

const workflowSteps = [
  {
    titleAr: 'مراجعة سريعة للاحتياج',
    titleEn: 'Fast discovery review',
    descAr: 'نقرأ الفكرة، السوق، ونقطة التحويل الأساسية قبل أي اقتراح تنفيذي.',
    descEn: 'We review the idea, market, and key conversion point before recommending the build path.',
  },
  {
    titleAr: 'تحديد المسار المناسب',
    titleEn: 'Defining the right path',
    descAr: 'نحدد هل الأنسب موقع شركة، صفحة خدمة، متجر، أو تجربة أكثر تخصصًا.',
    descEn: 'We define whether you need a company website, a service page, an e-commerce flow, or something more custom.',
  },
  {
    titleAr: 'رد عملي واضح',
    titleEn: 'Clear practical response',
    descAr: 'ترجع لك صورة أوضح للخطوة التالية، المدى المتوقع، وكيف نتحرك بسرعة.',
    descEn: 'You get a clearer next step, an expected range, and a practical direction to move quickly.',
  },
];

const contactPromises = [
  {
    icon: Target,
    titleAr: 'نحدد الهدف قبل العرض',
    titleEn: 'Goal before proposal',
    descAr: 'لن تحصل على رقم عام قبل فهم المطلوب؛ ستعرف المسار الأنسب بناءً على هدف شركتك.',
    descEn: 'We do not start with a generic quote. We understand the need, then suggest the right path.',
  },
  {
    icon: Zap,
    titleAr: 'رد سريع ومفيد',
    titleEn: 'Fast useful response',
    descAr: 'الرد الأول يكون عمليًا: اتجاه، أسئلة مهمة، وخطوة تالية واضحة.',
    descEn: 'The first response is practical: direction, key questions, and a clear next step.',
  },
  {
    icon: FileText,
    titleAr: 'Brief مرتب',
    titleEn: 'Structured brief',
    descAr: 'ستتحول رسالتك إلى نقاط منظمة تساعدك على اتخاذ قرار أوضح بثقة.',
    descEn: 'Your message becomes organized points that help you decide with confidence.',
  },
];

const optionLabel = (
  options: Array<{ key: string; ar: string; en: string }>,
  key: string,
  isArabic: boolean,
) => options.find((item) => item.key === key)?.[isArabic ? 'ar' : 'en'] ?? key;

const optionLabels = (
  options: Array<{ key: string; ar: string; en: string }>,
  keys: string[],
  isArabic: boolean,
) => keys.map((key) => optionLabel(options, key, isArabic)).join(', ');

const getSubmitErrorMessage = (error: unknown, isArabic: boolean) => {
  const maybeEmailJsError = error as { status?: number; text?: string; message?: string };
  const details = maybeEmailJsError.text || maybeEmailJsError.message || '';

  if (/account not found/i.test(details)) {
    return isArabic
      ? 'إعداد EmailJS غير صحيح: الحساب غير موجود أو الـ Public Key لا يطابق الحساب. تقدر ترسل نفس الطلب الآن على واتساب.'
      : 'EmailJS setup is not valid: account not found or the public key does not match this account. You can send the same request on WhatsApp now.';
  }

  if (!details) {
    return isArabic
      ? 'حدثت مشكلة أثناء الإرسال. افتح الكونسول لمعرفة السبب أو استخدم زر الإيميل البديل.'
      : 'Something went wrong while sending. Check the console or use the fallback email button.';
  }

  return isArabic
    ? `فشل الإرسال من EmailJS: ${details}`
    : `EmailJS sending failed: ${details}`;
};

type ContactSelectProps = {
  isArabic: boolean;
  label: string;
  name: keyof FormState;
  onValueChange: (name: keyof FormState, value: string) => void;
  options: Array<{ key: string; ar: string; en: string }>;
  value: string;
};

const ContactSelect = ({
  isArabic,
  label,
  name,
  onValueChange,
  options,
  value,
}: ContactSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = optionLabel(options, value, isArabic);
  const displayLang = isArabic ? 'ar' : 'en';
  const inputId = `contact-select-${name}`;

  return (
    <div className="relative space-y-2">
      <label className="block text-sm text-slate-300" htmlFor={inputId}>
        {label}
      </label>
      <input id={inputId} name={name} type="hidden" value={value} />
      <button
        aria-expanded={isOpen}
        className={`group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#06090f]/55 px-4 py-3 text-white outline-none transition-all hover:border-cyan-300/35 hover:bg-[#07131f]/85 focus:border-cyan-400/60 focus:bg-[#06090f]/80 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.1)] ${
          isOpen ? 'border-cyan-400/55 shadow-[0_0_0_4px_rgba(45,212,191,0.08)]' : ''
        }`}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className={`min-w-0 flex-1 truncate text-sm font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>
          {clientFacingText(selectedLabel, displayLang)}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-cyan-200 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen ? (
        <div
          className={`absolute z-40 mt-2 max-h-72 w-full overflow-auto rounded-2xl border border-cyan-300/20 bg-[#07111d]/98 p-1.5 shadow-[0_22px_70px_rgba(0,0,0,0.65)] backdrop-blur-xl ${
            isArabic ? 'right-0 text-right' : 'left-0 text-left'
          }`}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          {options.map((item) => {
            const isSelected = item.key === value;
            return (
              <button
                key={item.key}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  isSelected
                    ? 'bg-cyan-300/14 text-cyan-50'
                    : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                } ${isArabic ? 'flex-row-reverse' : ''}`}
                onClick={() => {
                  onValueChange(name, item.key);
                  setIsOpen(false);
                }}
                type="button"
              >
                <span className="min-w-0 flex-1 truncate">{clientFacingText(isArabic ? item.ar : item.en, displayLang)}</span>
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isSelected
                      ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                      : 'border-white/10 text-transparent'
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const ContactPage = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const isMobile = useIsMobile();
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  usePageMetadata(getPageSeoByPath('/contact', lang));

  const content = useMemo(() => {
    const rawContent = {
      heroKicker: isArabic ? 'تواصل احترافي مباشر' : 'Direct professional contact',
      heroTitle: isArabic
        ? 'رتّب احتياج شركتك الرقمي في خطوة واضحة'
        : 'Organize your company�s digital need in one clear step',
      heroDescription: isArabic
        ? 'إذا كانت شركتك تستهدف عملاء في مصر أو الخليج، يساعدك فريق نُطق على ترتيب الرسالة، شكل العرض، ومسار التنفيذ بما يناسب السوق والهدف التجاري.'
        : 'If your company targets audiences in Egypt or the Gulf, Notaq helps shape the message, presentation, and execution path around the market and business goal.',
      directChannels: isArabic ? 'قنوات التواصل المباشرة' : 'Direct channels',
      directChannelsNote: isArabic
        ? 'يمكنك إرسال الطلب عبر النموذج أو بدء الحديث فورًا على واتساب.'
        : 'You can send a structured brief through the form or start the conversation immediately on WhatsApp.',
      formKicker: isArabic ? 'نموذج الطلب' : 'Lead intake',
      formTitle: isArabic ? 'أرسل تفاصيل الاحتياج' : 'Send the project need',
      formDescription: isArabic
        ? 'كلما كانت التفاصيل أوضح، كان الرد أدق وأسرع.'
        : 'The clearer the brief, the faster and sharper our response can be.',
      heroSideTitle: isArabic ? 'ماذا يحدث بعد رسالتك؟' : 'What happens after your message?',
      heroSideBody: isArabic
        ? 'نقرأ الهدف، نرتب الأولويات، ثم نرجع لك بخطوة عملية يمكن تنفيذها.'
        : 'We read the goal, organize priorities, then come back with a practical next move.',
      briefHint: isArabic ? 'اكتب التفاصيل المتاحة الآن، وسنساعدك على ترتيب الصورة المهنية الكاملة.' : 'Share the available details now, and we will help structure the full professional picture.',
      nameLabel: isArabic ? 'الاسم' : 'Name',
      emailLabel: isArabic ? 'البريد الإلكتروني' : 'Email',
      phoneLabel: isArabic ? 'الهاتف أو واتساب' : 'Phone or WhatsApp',
      companyLabel: isArabic ? 'اسم الشركة أو النشاط' : 'Company or business name',
      inquiryLabel: isArabic ? 'نوع الطلب' : 'Inquiry type',
      detailsLabel: isArabic ? 'تفاصيل سريعة عن الهدف والسوق وما تحتاجه' : 'A quick brief about the goal, market, and what you need',
      submitLabel: isArabic ? 'إرسال الطلب' : 'Send request',
      loadingLabel: isArabic ? 'جارٍ إرسال الطلب...' : 'Sending your request...',
      successLabel: isArabic
        ? 'تم استلام طلبك. سنعود إليك قريبًا.'
        : 'Your request was received. We will get back to you shortly.',
      errorLabel: isArabic
        ? 'حدثت مشكلة أثناء الإرسال. جرّب مرة أخرى أو تواصل عبر واتساب.'
        : 'Something went wrong while sending. Please try again or use WhatsApp.',
      whatsappLabel: isArabic ? 'راسلنا على واتساب' : 'Message us on WhatsApp',
      workflowKicker: isArabic ? 'بعد الإرسال' : 'After you send it',
      workflowTitle: isArabic ? 'كيف نتحرك بعد الرسالة الأولى؟' : 'What happens after the first message?',
      workflowDescription: isArabic
        ? 'نحافظ على الخطوة الأولى بسيطة، لكن نربطها بمسار عمل عملي وواضح.'
        : 'We keep the first step simple, but connect it to a practical and clear workflow.',
      faqTitle: isArabic ? 'أسئلة شائعة قبل التواصل' : 'Common questions before reaching out',
      statsKicker: isArabic ? 'مؤشرات ثقة' : 'Trust signals',
      promiseKicker: isArabic ? 'قبل أن تبدأ' : 'Before you start',
      promiseTitle: isArabic ? 'تواصل بسيط، لكن نتيجته أوضح' : 'Simple contact, clearer outcome',
    };

    return Object.fromEntries(
      Object.entries(rawContent).map(([key, value]) => [key, clientFacingText(value, lang)]),
    ) as typeof rawContent;
  }, [isArabic, lang]);

  const copy = (value: string) => clientFacingText(value, lang);
  const copyLegacyPair = (ar: string, en: string) => copy(isArabic ? ar : en);
  const copyPair = (value: { ar: string; en: string }) => copy(isArabic ? value.ar : value.en);
  const whatsappUrl = buildWhatsAppUrl(getDefaultWhatsAppMessage(lang));
  const faqDesktopCardClass = isArabic
    ? 'group relative h-full overflow-hidden rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.9),rgba(8,13,22,0.82))] p-4 text-right shadow-[0_18px_42px_-34px_rgba(0,0,0,0.8)] transition-colors hover:border-cyan-400/22 md:p-5'
    : 'group relative h-full overflow-hidden rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.9),rgba(8,13,22,0.82))] p-4 text-left shadow-[0_18px_42px_-34px_rgba(0,0,0,0.8)] transition-colors hover:border-cyan-400/22 md:p-5';

  const contactCards = [
    {
      icon: Mail,
      label: isArabic ? 'البريد الإلكتروني' : 'Email',
      value: portfolioProfile.email,
      href: `mailto:${portfolioProfile.email}`,
      onClick: () => undefined,
    },
    {
      icon: Phone,
      label: isArabic ? 'الهاتف' : 'Phone',
      value: portfolioProfile.phone,
      href: `tel:${portfolioProfile.phoneHref}`,
      onClick: () =>
        trackEvent('phone_click', {
          placement: 'contact_page',
          language: lang,
          phone_number: portfolioProfile.phoneHref,
        }),
    },
    {
      icon: MessageCircle,
      label: isArabic ? 'واتساب' : 'WhatsApp',
      value: isArabic ? 'راسل فريق نُطق مباشرة' : 'Message the Notaq team directly',
      href: whatsappUrl,
      onClick: () =>
        trackEvent('whatsapp_click', {
          placement: 'contact_page_card',
          language: lang,
        }),
    },
    {
      icon: MapPin,
      label: isArabic ? 'المنطقة' : 'Region',
      value: isArabic ? 'القاهرة | نخدم مصر والخليج' : 'Cairo | Serving Egypt and the Gulf',
      href: '#region',
      onClick: () => undefined,
    },
  ];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handlePageNeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormState((current) => ({
      ...current,
      pages_needed: checked
        ? Array.from(new Set([...current.pages_needed, value]))
        : current.pages_needed.filter((item) => item !== value),
    }));
  };

  const handleSelectChange = (name: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const fallbackMailBody = [
    `${isArabic ? 'الاسم' : 'Name'}: ${formState.name}`,
    `${isArabic ? 'الإيميل' : 'Email'}: ${formState.email}`,
    `${isArabic ? 'الهاتف/واتساب' : 'Phone/WhatsApp'}: ${formState.phone_or_whatsapp}`,
    `${isArabic ? 'الشركة/المشروع' : 'Company/project'}: ${formState.company}`,
    `${isArabic ? 'نوع الطلب' : 'Inquiry type'}: ${optionLabel(inquiryTypes, formState.inquiry_type, isArabic)}`,
    `${isArabic ? 'نوع الموقع' : 'Website type'}: ${optionLabel(websiteTypeOptions, formState.website_type, isArabic)}`,
    `${isArabic ? 'المدة' : 'Timeline'}: ${optionLabel(timelineOptions, formState.timeline, isArabic)}`,
    `${isArabic ? 'لغة الموقع' : 'Website language'}: ${optionLabel(languageOptions, formState.preferred_language, isArabic)}`,
    `${isArabic ? 'الصفحات المطلوبة' : 'Needed pages'}: ${optionLabels(pageNeedOptions, formState.pages_needed, isArabic)}`,
    '',
    `${isArabic ? 'التفاصيل' : 'Details'}:`,
    formState.details,
  ].join('\n');
  const fallbackMailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    isArabic ? 'طلب جديد من موقع نطق' : 'New request from Notaq website',
  )}&body=${encodeURIComponent(fallbackMailBody)}`;
  const formWhatsAppBody = [
    isArabic ? 'طلب جديد من موقع نطق' : 'New request from Notaq website',
    '',
    fallbackMailBody,
  ].join('\n');
  const formWhatsAppUrl = buildWhatsAppUrl(formWhatsAppBody);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('idle');
    setSubmitErrorMessage('');
    setIsSubmitting(true);

    try {
      const inquiryTypeLabel = optionLabel(inquiryTypes, formState.inquiry_type, isArabic);
      const websiteTypeLabel = optionLabel(websiteTypeOptions, formState.website_type, isArabic);
      const timelineLabel = optionLabel(timelineOptions, formState.timeline, isArabic);
      const preferredLanguageLabel = optionLabel(languageOptions, formState.preferred_language, isArabic);
      const pagesNeededLabel = optionLabels(pageNeedOptions, formState.pages_needed, isArabic);
      const emailCopy = {
        email_lang: isArabic ? 'ar' : 'en',
        email_dir: isArabic ? 'rtl' : 'ltr',
        email_align: isArabic ? 'right' : 'left',
        brand_label: isArabic ? 'نُطق | NOTAQ' : 'NOTAQ | نُطق',
        owner_subject: isArabic
          ? `طلب جديد من موقع نُطق - ${websiteTypeLabel} - ${formState.name}`
          : `New Notaq website request - ${websiteTypeLabel} - ${formState.name}`,
        auto_reply_subject: isArabic
          ? 'وصلنا طلبك في نُطق'
          : 'Notaq received your request',
        owner_kicker: isArabic ? 'طلب جديد من الموقع' : 'New website lead',
        owner_heading: isArabic ? 'وصل طلب جديد من صفحة التواصل' : 'A new contact request arrived',
        owner_intro: isArabic
          ? 'راجع تفاصيل العميل والاحتياج، ثم أرسل رداً عملياً يوضح الخطوة التالية.'
          : 'Review the client and project need, then reply with a practical next step.',
        auto_kicker: isArabic ? 'نُطق' : 'Notaq',
        auto_heading: isArabic ? 'استلمت نُطق طلبك بنجاح' : 'Notaq received your request',
        auto_intro: isArabic
          ? `شكرًا لتواصلك مع نُطق يا ${formState.name}. وصلت تفاصيل الاحتياج وستتم مراجعتها قبل العودة بخطوة واضحة.`
          : `Thanks for reaching out to Notaq, ${formState.name}. The company need was received and will be reviewed before a clear next step is sent.`,
        next_title: isArabic ? 'ماذا يحدث الآن؟' : 'What happens next?',
        next_body: isArabic
          ? 'هنراجع الهدف، نوع الموقع، الجمهور، والأقسام المطلوبة. بعدها نرد عليك بأسئلة قليلة ومهمة أو اتجاه تنفيذي واضح.'
          : 'Notaq will review the goal, website type, audience, and needed sections, then reply with important questions or a clear execution direction.',
        footer_note: isArabic
          ? 'لو حابب تضيف أي تفاصيل، تقدر ترد على نفس الإيميل.'
          : 'If you want to add more details, you can reply to this email.',
        section_customer: isArabic ? 'بيانات العميل' : 'Client details',
        section_project: isArabic ? 'تفاصيل المشروع' : 'Project details',
        section_message: isArabic ? 'رسالة العميل' : 'Client message',
        section_summary: isArabic ? 'ملخص طلبك' : 'Your request summary',
        label_name: isArabic ? 'الاسم' : 'Name',
        label_email: isArabic ? 'الإيميل' : 'Email',
        label_phone: isArabic ? 'الهاتف/واتساب' : 'Phone/WhatsApp',
        label_company: isArabic ? 'الشركة/المشروع' : 'Company/project',
        label_inquiry: isArabic ? 'نوع الطلب' : 'Inquiry type',
        label_website_type: isArabic ? 'نوع الموقع' : 'Website type',
        label_timeline: isArabic ? 'المدة' : 'Timeline',
        label_language: isArabic ? 'لغة الموقع' : 'Website language',
        label_pages: isArabic ? 'الصفحات المطلوبة' : 'Needed pages',
        label_submitted_from: isArabic ? 'الصفحة' : 'Page',
        label_submitted_at: isArabic ? 'وقت الإرسال' : 'Submitted at',
      };

      const payload = {
        'form-name': 'lead-intake',
        ...emailCopy,
        name: formState.name,
        email: formState.email,
        phone_or_whatsapp: formState.phone_or_whatsapp,
        company: formState.company,
        inquiry_type: formState.inquiry_type,
        inquiry_type_label: inquiryTypeLabel,
        website_type: formState.website_type,
        website_type_label: websiteTypeLabel,
        timeline: formState.timeline,
        timeline_label: timelineLabel,
        preferred_language: formState.preferred_language,
        preferred_language_label: preferredLanguageLabel,
        pages_needed: formState.pages_needed.join(', '),
        pages_needed_label: pagesNeededLabel,
        details: formState.details,
        submitted_from: window.location.href,
        submitted_at: new Date().toLocaleString(isArabic ? 'ar-EG' : 'en-US'),
        'bot-field': formState.botField,
      };

      await sendContactEmails(payload);

      trackEvent('lead_form_submit', {
        language: lang,
        inquiry_type: formState.inquiry_type,
        website_type: formState.website_type,
      });

      setSubmitState('success');
      setFormState({
        ...initialFormState,
        inquiry_type: inquiryTypes[0]?.key ?? '',
        website_type: websiteTypeOptions[0]?.key ?? '',
        timeline: timelineOptions[0]?.key ?? '',
        preferred_language: languageOptions[2]?.key ?? '',
        pages_needed: ['home', 'services', 'contact'],
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitErrorMessage(getSubmitErrorMessage(error, isArabic));
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-x-hidden pb-0 pt-14 md:pb-4 md:pt-20">
      <div className="pointer-events-none absolute left-[-10%] top-10 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-8%] right-[-6%] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[140px]" />

      <PageHero
        description={content.heroDescription}
        kicker={content.heroKicker}
        metrics={socialProofStats.map((item) => ({
          value: copyLegacyPair(item.valueAr, item.valueEn),
          label: copyLegacyPair(item.labelAr, item.labelEn),
        }))}
        primaryAction={{
          external: true,
          href: whatsappUrl,
          icon: <MessageCircle className="h-4 w-4" />,
          label: content.whatsappLabel,
          onClick: () =>
            trackEvent('whatsapp_click', {
              placement: 'contact_page_hero',
              language: lang,
            }),
        }}
        profileId="contact"
        secondaryAction={{
          href: `tel:${portfolioProfile.phoneHref}`,
          icon: <Phone className="h-4 w-4" />,
          label: portfolioProfile.phone,
          onClick: () =>
            trackEvent('phone_click', {
              placement: 'contact_page_hero',
              language: lang,
              phone_number: portfolioProfile.phoneHref,
            }),
        }}
        title={content.heroTitle}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_38%)]" />
          <div className="absolute inset-y-0 left-0 hidden w-[42%] md:block">
            <img
              src={illustrationAssets.cloudSync.src}
              alt={illustrationAssets.cloudSync.alt}
              className="h-full w-full object-cover object-center opacity-[0.08] blur-[2px]"
              loading="eager"
            />
          </div>

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={isMobile ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <p className="section-kicker border-cyan-400/25 bg-cyan-400/10 text-cyan-100">
                <Sparkles className={`${isArabic ? 'ml-2' : 'mr-2'} inline h-3.5 w-3.5`} />
                {content.heroKicker}
              </p>
              <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.12] tracking-tight text-white md:text-[4.3rem]">
                {content.heroTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-xl md:leading-9">
                {content.heroDescription}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="btn-primary inline-flex items-center justify-center gap-2"
                  href={whatsappUrl}
                  onClick={() =>
                    trackEvent('whatsapp_click', {
                      placement: 'contact_page_hero',
                      language: lang,
                    })
                  }
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="h-4 w-4" />
                  {content.whatsappLabel}
                </a>
                <a
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                  href={`tel:${portfolioProfile.phoneHref}`}
                  onClick={() =>
                    trackEvent('phone_click', {
                      placement: 'contact_page_hero',
                      language: lang,
                      phone_number: portfolioProfile.phoneHref,
                    })
                  }
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">{portfolioProfile.phone}</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={isMobile ? false : { opacity: 0, scale: 0.96, y: 18 }}
              animate={isMobile ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.45, ease: 'easeOut' }}
              whileHover={isMobile ? undefined : { y: -6, scale: 1.01 }}
              className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#06090f]/70 p-4 shadow-[0_26px_80px_-48px_rgba(0,0,0,0.9)] backdrop-blur-2xl md:rounded-[2.2rem] md:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_36%)]" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/80">
                      {content.promiseKicker}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
                      {content.heroSideTitle}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{content.heroSideBody}</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-300 p-3 text-slate-950 shadow-[0_0_34px_rgba(45,212,191,0.35)]">
                    <ArrowUpLeft className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={`hero-${step.titleEn}`}
                      animate={isMobile ? undefined : { opacity: [0.82, 1, 0.82] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35, ease: 'easeInOut' }}
                      className="flex items-start gap-3 rounded-[1.1rem] border border-white/8 bg-white/[0.035] p-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{copyLegacyPair(step.titleAr, step.titleEn)}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {copyLegacyPair(step.descAr, step.descEn)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-center text-xs font-bold text-cyan-100">
                  {content.briefHint}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-8 text-center">
            <p className="section-kicker mx-auto">{content.promiseKicker}</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-4xl">
              {content.promiseTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {contactPromises.map((item, index) => (
              <motion.div
                key={item.titleEn}
                initial={isMobile ? false : { opacity: 0, y: 18 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                whileHover={isMobile ? undefined : { y: -7 }}
                className="surface-card group relative overflow-hidden rounded-[1.45rem] p-4 md:rounded-[2rem] md:p-6"
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 transition-colors group-hover:bg-cyan-300 group-hover:text-slate-950">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{copyLegacyPair(item.titleAr, item.titleEn)}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{copyLegacyPair(item.descAr, item.descEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="space-y-8 lg:sticky lg:top-28">
            <div className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.5rem] md:p-8">
              <h2 className="font-display text-2xl font-bold text-white">{content.directChannels}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{content.directChannelsNote}</p>

              <div className="mt-6 grid gap-3">
                {contactCards.map((card, index) => (
                  <motion.a
                    key={card.label}
                    initial={isMobile ? false : { opacity: 0, x: isArabic ? 18 : -18 }}
                    whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={isMobile ? undefined : { x: isArabic ? -5 : 5 }}
                    className="group flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05]"
                    href={card.href}
                    onClick={card.onClick}
                    rel={card.href.startsWith('https://') ? 'noreferrer' : undefined}
                    target={card.href.startsWith('https://') ? '_blank' : undefined}
                  >
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300 transition-colors group-hover:bg-cyan-400 group-hover:text-slate-950">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{card.label}</p>
                      <p className="mt-1 break-all text-sm font-medium text-white md:text-base">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[1.8rem] border-emerald-300/14 bg-emerald-300/[0.035] p-5 md:rounded-[2.5rem] md:p-8">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-emerald-300/10 p-3 text-emerald-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="section-kicker mb-3 border-emerald-300/25 bg-emerald-300/10 text-emerald-100">
                    {isArabic ? 'بيانات التوثيق الأساسية' : 'Basic verification details'}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {portfolioProfile.legalDocumentation.map((item, index) => {
                  const IssuerIcon = legalIssuerIcons[item.issuerMark];

                  return (
                    <motion.div
                      key={item.value}
                      initial={isMobile ? false : { opacity: 0, y: 12 }}
                      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-[1.15rem] border border-white/8 bg-black/20 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="mt-1 h-4 w-4 shrink-0 text-emerald-200" />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                              {copyLegacyPair(item.label, item.englishLabel)}
                            </p>
                            <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-2.5 py-1 text-[11px] font-bold text-emerald-100/85">
                              <IssuerIcon className="h-3.5 w-3.5 shrink-0" />
                              <span className="truncate">
                                {copyLegacyPair(item.issuerLabel, item.englishIssuerLabel)}
                              </span>
                            </span>
                          </div>
                          <p className="mt-2 break-all font-display text-lg font-black text-white" dir="ltr">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div id="region" className="surface-card rounded-[1.8rem] p-5 md:rounded-[2.5rem] md:p-8">
              <SectionTitle
                description={content.workflowDescription}
                kicker={content.workflowKicker}
                title={content.workflowTitle}
              />
              <div className="relative mt-6 grid gap-3">
                <div className="pointer-events-none absolute bottom-4 start-5 top-4 hidden w-px bg-gradient-to-b from-cyan-300/40 via-white/10 to-transparent md:block" />
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.titleEn}
                    initial={isMobile ? false : { opacity: 0, y: 18 }}
                    {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 } } : {})}
                    transition={{ delay: index * 0.08 }}
                    whileHover={isMobile ? undefined : { y: -4 }}
                    className="relative rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 md:ps-16"
                  >
                    <p className="absolute start-4 top-4 hidden h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-[11px] font-black text-slate-950 shadow-[0_0_26px_rgba(45,212,191,0.25)] md:flex">
                      0{index + 1}
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300 md:hidden">0{index + 1}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">
                      {copyLegacyPair(step.titleAr, step.titleEn)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {copyLegacyPair(step.descAr, step.descEn)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } } : {})}
            className="surface-card-strong relative overflow-hidden rounded-[1.8rem] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.8)] md:rounded-[3rem] md:p-10"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
            <div className="pointer-events-none absolute -end-12 -top-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
            <p className="section-kicker">{content.formKicker}</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-4xl">
              {content.formTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">{content.formDescription}</p>
            {!isEmailJsConfigured() ? (
              <p className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm leading-7 text-amber-100">
                {isArabic
                  ? 'تنبيه: مفاتيح EmailJS غير مكتملة. استخدم زر واتساب أو الإيميل الجاهز حتى يتم ضبطها.'
                  : 'Note: EmailJS keys are incomplete. Use WhatsApp or the prepared email button until they are fixed.'}
              </p>
            ) : null}

            <form
              className="relative z-10 mt-8 space-y-5"
              method="POST"
              name="lead-intake"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="lead-intake" />
              <input type="hidden" name="bot-field" value={formState.botField} />
              <input type="hidden" name="to_email" value={CONTACT_EMAIL} />
              <input type="hidden" name="pages_needed" value={formState.pages_needed.join(', ')} />
              <input type="hidden" name="pages_needed_label" value={optionLabels(pageNeedOptions, formState.pages_needed, isArabic)} />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-slate-300">{content.nameLabel}</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-[#06090f]/45 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-[#06090f]/72 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.08)]"
                    name="name"
                    onChange={handleChange}
                    placeholder={isArabic ? 'الاسم الكامل' : 'Full name'}
                    required
                    type="text"
                    value={formState.name}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-slate-300">{content.emailLabel}</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-[#06090f]/45 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-[#06090f]/72 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.08)]"
                    name="email"
                    onChange={handleChange}
                    placeholder={isArabic ? 'name@company.com' : 'name@company.com'}
                    required
                    type="email"
                    value={formState.email}
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-slate-300">{content.phoneLabel}</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-[#06090f]/45 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-[#06090f]/72 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.08)]"
                    name="phone_or_whatsapp"
                    onChange={handleChange}
                    placeholder={isArabic ? '+20...' : '+20...'}
                    required
                    type="text"
                    value={formState.phone_or_whatsapp}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-slate-300">{content.companyLabel}</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-[#06090f]/45 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-[#06090f]/72 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.08)]"
                    name="company"
                    onChange={handleChange}
                    placeholder={isArabic ? 'اسم الشركة أو البراند' : 'Company or brand name'}
                    required
                    type="text"
                    value={formState.company}
                  />
                </label>
              </div>

              <ContactSelect
                isArabic={isArabic}
                label={content.inquiryLabel}
                name="inquiry_type"
                onValueChange={handleSelectChange}
                options={inquiryTypes}
                value={formState.inquiry_type}
              />

              <div className="grid gap-5 md:grid-cols-2">
                <ContactSelect
                  isArabic={isArabic}
                  label={isArabic ? '\u0646\u0648\u0639 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628' : 'Website type'}
                  name="website_type"
                  onValueChange={handleSelectChange}
                  options={websiteTypeOptions}
                  value={formState.website_type}
                />

                <ContactSelect
                  isArabic={isArabic}
                  label={isArabic ? '\u0645\u0648\u0639\u062f \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0623\u0648 \u0627\u0644\u062a\u0633\u0644\u064a\u0645' : 'Timeline'}
                  name="timeline"
                  onValueChange={handleSelectChange}
                  options={timelineOptions}
                  value={formState.timeline}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <ContactSelect
                  isArabic={isArabic}
                  label={isArabic ? '\u0644\u063a\u0629 \u0627\u0644\u0645\u0648\u0642\u0639' : 'Website language'}
                  name="preferred_language"
                  onValueChange={handleSelectChange}
                  options={languageOptions}
                  value={formState.preferred_language}
                />
              </div>

              <fieldset className="space-y-3">
                <legend className="text-sm text-slate-300">
                  {isArabic ? 'الصفحات أو الأقسام المطلوبة' : 'Needed pages or sections'}
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {pageNeedOptions.map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#06090f]/35 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/5"
                    >
                      <input
                        checked={formState.pages_needed.includes(item.key)}
                        className="h-4 w-4 accent-cyan-300"
                        name="page_need"
                        onChange={handlePageNeedChange}
                        type="checkbox"
                        value={item.key}
                      />
                      <span>{copyPair(item)}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="space-y-2">
                <span className="text-sm text-slate-300">{content.detailsLabel}</span>
                <textarea
                  className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-[#06090f]/45 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-[#06090f]/72 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.08)]"
                  name="details"
                  onChange={handleChange}
                  placeholder={
                    isArabic
                      ? 'ما نوع النشاط؟ من الجمهور؟ هل الهدف طلبات أكثر، ظهور أقوى، أو إطلاق جديد؟'
                      : 'What is the business, who is the audience, and is the goal more leads, stronger positioning, or a new launch?'
                  }
                  required
                  value={formState.details}
                />
              </label>

              {submitState === 'success' ? (
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-emerald-100">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm leading-7">{content.successLabel}</p>
                </div>
              ) : null}

              {submitState === 'error' ? (
                <div className="space-y-3 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm leading-7 text-rose-100">
                  <p>{submitErrorMessage || content.errorLabel}</p>
                  <a
                    className="inline-flex rounded-xl border border-rose-200/25 bg-white/10 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-white/15"
                    href={fallbackMailUrl}
                  >
                    {isArabic ? 'افتح الإيميل بالطلب جاهز' : 'Open prepared email'}
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-200/30 bg-cyan-300/15 px-3 py-2 text-xs font-bold text-cyan-50 transition-colors hover:bg-cyan-300/20"
                    href={formWhatsAppUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    {isArabic ? 'أرسل نفس الطلب على واتساب' : 'Send this request on WhatsApp'}
                  </a>
                </div>
              ) : null}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <button
                  className="btn-primary inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 sm:flex-1"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {content.loadingLabel}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {content.submitLabel}
                    </>
                  )}
                </button>
                <a
                  className="btn-secondary inline-flex items-center justify-center gap-2 sm:flex-1"
                  href={formWhatsAppUrl}
                  onClick={() =>
                    trackEvent('whatsapp_click', {
                      placement: 'contact_page_form_side',
                      language: lang,
                    })
                  }
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="h-4 w-4" />
                  {isArabic ? 'أرسل الطلب على واتساب' : 'Send request on WhatsApp'}
                </a>
              </div>
            </form>
          </motion.div>
        </div>

        <PageImageShowcaseSection showcase={pageImageShowcases.contact} />

        <div className="mt-14 border-y border-white/5 py-6 md:py-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {content.statsKicker}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {socialProofStats.map((item, index) => (
              <motion.div
                key={item.labelEn}
                initial={isMobile ? false : { opacity: 0, y: 18 }}
                {...(!isMobile ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 } } : {})}
                transition={{ delay: index * 0.08 }}
                className="surface-card flex items-center gap-4 rounded-[1.5rem] p-4 md:p-5"
              >
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-white">
                    {copyLegacyPair(item.valueAr, item.valueEn)}
                  </p>
                  <p className="text-sm leading-7 text-slate-400">
                    {copyLegacyPair(item.labelAr, item.labelEn)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/12 via-white/[0.035] to-violet-400/10 p-5 md:mt-12 md:rounded-[2.6rem] md:p-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="section-kicker">{isArabic ? 'جاهز للخطوة الأولى؟' : 'Ready for the first step?'}</p>
              <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-4xl">
                {isArabic ? 'أرسل الاحتياج الآن لتحصل على مسار أوضح' : 'Send the need now to get a clearer path'}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                {isArabic
                  ? 'لا تحتاج تجهيز كل شيء. اكتب ما تعرفه عن شركتك والهدف، وسنساعدك على ترتيب الباقي.'
                  : 'Everything does not need to be prepared in advance. Share what is known about the company and goal, and Notaq will help organize the rest.'}
              </p>
            </div>
            <a
              className="btn-primary justify-center"
              href={whatsappUrl}
              onClick={() =>
                trackEvent('whatsapp_click', {
                  placement: 'contact_page_bottom_cta',
                  language: lang,
                })
              }
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" />
              {content.whatsappLabel}
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden md:mt-12">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-white md:text-4xl">
            {content.faqTitle}
          </h2>
          <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2 md:items-start lg:gap-4">
            {contactFaqs.map((faq, index) => (
              <motion.article
                key={faq.qEn}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className={faqDesktopCardClass}
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/10 font-display text-[0.68rem] font-black text-cyan-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="break-words text-[0.96rem] font-semibold leading-6 text-white">
                      {copyLegacyPair(faq.qAr, faq.qEn)}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {copyLegacyPair(faq.aAr, faq.aEn)}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
