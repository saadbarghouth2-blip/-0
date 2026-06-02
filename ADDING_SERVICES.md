# دليل إضافة خدمات جديدة 🎯

## كيفية إضافة خدمة جديدة بسهولة

### الخطوة 1: فتح ملف البيانات
```
src/data/enhancedServices.ts
```

### الخطوة 2: نسخ كائن خدمة موجودة
اختر خدمة موجودة (SEO أو UI/UX) وانسخ كل الكود الخاص بها.

### الخطوة 3: استبدل البيانات

#### تغيير المعرف (slug):
```typescript
// من:
seo: {
  slug: 'seo',

// إلى:
web-development: {
  slug: 'web-development',
```

#### تحديث المعلومات الأساسية:
```typescript
parentPath: '/services',
parentLabel: { ar: 'الخدمات', en: 'Services' },
eyebrow: { ar: 'تطوير الويب', en: 'Web Development' },
title: {
  ar: 'احصل على موقع احترافي يعمل بسلاسة',
  en: 'Get a professional website that works flawlessly',
},
summary: {
  ar: 'نطور مواقع ويب احترافية وسريعة وآمنة...',
  en: 'We develop professional, fast, and secure websites...',
},
```

---

## نموذج كامل لخدمة جديدة

### مثال: خدمة "تطوير التطبيقات"

```typescript
'app-development': {
  slug: 'app-development',
  parentPath: '/services',
  parentLabel: { ar: 'الخدمات', en: 'Services' },
  eyebrow: { 
    ar: 'تطوير التطبيقات', 
    en: 'App Development' 
  },
  title: {
    ar: 'تطبيقات قوية وسهلة الاستخدام تحقق النتائج',
    en: 'Powerful, user-friendly apps that deliver results',
  },
  summary: {
    ar: 'تطوير تطبيقات ويب وموبايل احترافية مع أفضل الممارسات.',
    en: 'Professional web and mobile app development with best practices.',
  },
  audience: {
    ar: 'شركات تريد تطبيقاً يحل مشكلة حقيقية.',
    en: 'Companies wanting an app that solves real problems.',
  },
  promise: {
    ar: 'تطبيق جاهز للإطلاق خلال 8-12 أسبوع.',
    en: 'Production-ready app within 8-12 weeks.',
  },
  
  // الأقسام الرئيسية
  sections: [
    {
      title: { ar: 'فهم المتطلبات', en: 'Requirement Analysis' },
      body: {
        ar: 'نفهم احتياجات مستخدميك ونخطط البنية بعناية.',
        en: 'We understand user needs and plan architecture carefully.',
      },
      icon: Target,  // من lucide-react
    },
    {
      title: { ar: 'التطوير', en: 'Development' },
      body: {
        ar: 'بناء قوي مع أفضل التقنيات والممارسات.',
        en: 'Solid build with latest tech and best practices.',
      },
      icon: Zap,
    },
    {
      title: { ar: 'الاختبار والإطلاق', en: 'Testing & Launch' },
      body: {
        ar: 'اختبار شامل ثم إطلاق آمن وسلس.',
        en: 'Comprehensive testing then safe, smooth launch.',
      },
      icon: CheckCircle,
    },
  ],
  
  // المخرجات والمسلمات
  deliverables: [
    { ar: 'التطبيق الكامل', en: 'Complete application' },
    { ar: 'التوثيق الشامل', en: 'Complete documentation' },
    { ar: 'التدريب للفريق', en: 'Team training' },
    { ar: 'الدعم لمدة 3 أشهر', en: '3-month support' },
  ],
  
  // حالات الاستخدام
  useCases: [
    { ar: 'تطبيقات الإدارة الداخلية', en: 'Internal management apps' },
    { ar: 'تطبيقات العملاء', en: 'Customer-facing apps' },
    { ar: 'أتمتة العمليات', en: 'Process automation' },
  ],
  
  // المقاييس (الأرقام المهمة)
  metrics: [
    {
      value: '100%',
      label: { ar: 'اختبار وجودة', en: 'Testing & quality' },
      icon: CheckCircle,
      trend: 'up',
    },
    {
      value: '8-12 أسبوع',
      label: { ar: 'من الفكرة للإطلاق', en: 'From idea to launch' },
      icon: Gauge,
    },
    {
      value: '0 أعطال',
      label: { ar: 'التزام بالأداء', en: 'Performance commitment' },
      icon: Shield,
    },
  ],
  
  // المميزات الإضافية (اختياري)
  features: [
    {
      title: { ar: 'بنية آمنة', en: 'Secure architecture' },
      description: { ar: 'تشفير وحماية بيانات كاملة', en: 'Full encryption and data protection' },
      icon: Shield,
    },
    {
      title: { ar: 'أداء عالي', en: 'High performance' },
      description: { ar: 'تحسين لأقصى سرعة ممكنة', en: 'Optimized for maximum speed' },
      icon: Zap,
    },
  ],
  
  // المقارنة (اختياري)
  comparison: [
    {
      aspect: { ar: 'التطوير', en: 'Development' },
      before: { ar: 'فريق غير متخصص', en: 'Inexperienced team' },
      after: { ar: 'فريق خبير محترف', en: 'Expert professional team' },
    },
  ],
  
  // الأسئلة الشائعة
  faq: [
    {
      question: { ar: 'كم يكلف تطوير تطبيق؟', en: 'How much does app development cost?' },
      answer: { ar: 'يعتمد على التعقيد والميزات المطلوبة...', en: 'It depends on complexity and required features...' },
    },
    {
      question: { ar: 'كم الوقت المستغرق؟', en: 'How long does it take?' },
      answer: { ar: 'عادة 8-12 أسبوع للتطبيق الأساسي', en: 'Usually 8-12 weeks for a basic app' },
    },
  ],
  
  // الدعوة للعمل
  cta: {
    ar: 'هيا نحول فكرتك إلى تطبيق حقيقي يستخدمه آلاف الناس.',
    en: 'Let\'s turn your idea into a real app used by thousands.',
  },
  
  // لون مميز للخدمة
  accent: 'from-violet-400/16 via-purple-500/8 to-transparent',
}
```

---

## الخطوات السريعة

### 1. انسخ كائن خدمة موجودة
### 2. غير الـ slug إلى معرف فريد
### 3. حدّث جميع النصوص (ar و en)
### 4. اختر أيقونات من lucide-react
### 5. اختر لوناً مميزاً للخدمة
### 6. احفظ الملف

---

## أيقونات متاحة من lucide-react

استخدم هذه الأيقونات:
```typescript
import {
  Sparkles,    // براق ومميز
  Zap,         // سريع وقوي
  Target,      // هدف ودقة
  BarChart3,   // إحصائيات
  Shield,      // حماية وأمان
  Users,       // فريق ومستخدمون
  Layers3,     // طبقات وتفاصيل
  CheckCircle, // علامة موافقة
  TrendingUp,  // نمو
  Gauge,       // قياس
  Lock,        // قفل وأمان
  AlertCircle, // تنبيه
  Clock,       // وقت
  Briefcase,   // عمل وتجارة
  Code,        // برمجة
  Palette,     // تصميم
  // ... وأكثر من 300 أيقونة أخرى
} from 'lucide-react';
```

---

## ألوان مميزة للخدمات

```typescript
// استخدم هذه الألوان:
'from-cyan-400/16 via-sky-500/8 to-transparent'        // أزرق سماوي
'from-emerald-400/16 via-teal-500/8 to-transparent'    // أخضر
'from-amber-400/16 via-orange-500/8 to-transparent'    // برتقالي
'from-violet-400/16 via-purple-500/8 to-transparent'   // بنفسجي
'from-pink-400/16 via-rose-500/8 to-transparent'       // وردي
'from-indigo-400/16 via-blue-500/8 to-transparent'     // أرجواني
'from-green-400/16 via-emerald-500/8 to-transparent'   // أخضر داكن
```

---

## اختبار الخدمة الجديدة

بعد الإضافة:
1. احفظ الملف
2. جدّد المتصفح (Ctrl+Shift+R)
3. جرّب الرابط: `http://localhost:5173/services/[slug-الجديد]`
4. تحقق من أن كل شيء يعمل

---

## الأخطاء الشائعة وكيفية حلها

### ❌ الخدمة لا تظهر
**السبب:** الـ slug غير صحيح أو غير موجود  
**الحل:** تأكد من تطابق الـ slug في الملف مع الرابط

### ❌ النصوص مختلطة
**السبب:** تركت حقل ar أو en فارغاً  
**الحل:** تأكد من ملء جميع القيم بلغتي العربية والإنجليزية

### ❌ الأيقونات غير صحيحة
**السبب:** استوردت أيقونة لم تستخدمها في الـ sections  
**الحل:** أضف import للأيقونات التي تستخدمها

### ❌ الألوان غير صحيحة
**السبب:** نسخت لون شيء آخر  
**الحل:** استخدم الألوان من القائمة أعلاه

---

## نصائح مهمة

✅ **دائماً استخدم ar و en** لكل حقل نصي  
✅ **استخدم أيقونات من lucide-react فقط**  
✅ **اجعل النصوص واضحة وموجزة**  
✅ **اختر ألوان تناسب الخدمة**  
✅ **اختبر الصفحة بعد الإضافة**  

---

## مثال سريع من خط واحد

```typescript
// انسخ هذا وعدّله:
'my-service': {
  slug: 'my-service',
  parentPath: '/services',
  parentLabel: { ar: 'الخدمات', en: 'Services' },
  eyebrow: { ar: 'الخدمة', en: 'Service' },
  title: { ar: 'العنوان', en: 'Title' },
  summary: { ar: 'الملخص', en: 'Summary' },
  audience: { ar: 'الجمهور', en: 'Audience' },
  promise: { ar: 'الوعد', en: 'Promise' },
  // ... بقية الحقول
}
```

---

## الخلاصة

✨ **إضافة خدمة جديدة سهلة جداً!**

فقط:
1. انسخ خدمة موجودة
2. غيّر البيانات
3. احفظ
4. اختبر

والخدمة الجديدة ستكون مباشرة على الموقع! 🚀
