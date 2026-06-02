# ⚡ أوامر سريعة - Quick Commands

## 🚀 البدء السريع

```bash
# تشغيل الموقع
npm run dev

# البناء للإنتاج
npm run build

# معاينة الإنتاج
npm run preview

# الفحص والإصلاح
npm run lint
npm run lint:fix
```

---

## 🌐 الروابط الرئيسية

### صفحات الخدمات الجديدة:
```
http://localhost:5173/services/seo
http://localhost:5173/services/ui-ux
http://localhost:5173/en/services/seo
http://localhost:5173/en/services/ui-ux
```

### الصفحات الأخرى:
```
http://localhost:5173/                      # الرئيسية
http://localhost:5173/services              # الخدمات
http://localhost:5173/projects              # المشاريع
http://localhost:5173/about                 # عن
http://localhost:5173/contact               # تواصل
```

---

## 📝 الملفات الرئيسية للتعديل

### لإضافة خدمة جديدة:
```
src/data/enhancedServices.ts
```

### لتخصيص المكون الرئيسي:
```
src/components/DetailPageEnhanced.tsx
```

### لإضافة صور:
```
public/images/services/
public/images/projects/
```

---

## 🎨 تغيير الألوان والأنماط

### الألوان الأساسية (Tailwind):
```
from-cyan-400/16       - أزرق سماوي
from-emerald-400/16    - أخضر
from-amber-400/16      - برتقالي
from-violet-400/16     - بنفسجي
from-pink-400/16       - وردي
from-indigo-400/16     - أرجواني
```

### تغيير اللون:
1. افتح `src/data/enhancedServices.ts`
2. عدّل حقل `accent` في الخدمة
3. احفظ وجدّد المتصفح

---

## 🔍 البحث والاستكشاف

### البحث عن ملف:
```bash
# في Terminal
Ctrl+P      # فتح البحث السريع
```

### البحث في الملف:
```bash
Ctrl+F      # البحث في الملف الحالي
Ctrl+H      # البحث والاستبدال
```

### البحث في المشروع:
```bash
Ctrl+Shift+F    # البحث في كل الملفات
```

---

## 🧹 الصيانة والتنظيف

### تنظيف المشروع:
```bash
# حذف مجلد node_modules
rm -r node_modules          # Linux/Mac
rmdir /s node_modules       # Windows

# إعادة التثبيت
npm install
```

### مسح ذاكرة التخزين المؤقت:
```bash
npm cache clean --force
```

### بناء جديد:
```bash
npm run build
```

---

## 🐛 استكشاف الأخطاء

### فتح أدوات المطور:
```
F12                 # Windows/Linux
Cmd+Option+I        # Mac
```

### أنماط الأخطاء الشائعة:

| الخطأ | الحل |
|-------|------|
| Module not found | `npm install` |
| Port already in use | غيّر port في vite.config.ts |
| Styles not updating | `Ctrl+Shift+R` hard refresh |
| Build fails | `npm run build` check errors |

---

## 📊 قائمة التحقق السريعة

### قبل الإطلاق:
- [ ] تشغيل `npm run dev` بنجاح
- [ ] الصفحات الجديدة تعمل
- [ ] اللغات العربية والإنجليزية صحيحة
- [ ] الصور تظهر بشكل صحيح
- [ ] الأنيميشنات سلسة
- [ ] لا توجد أخطاء في Console

### بعد التعديلات:
- [ ] احفظ جميع الملفات
- [ ] جدّد المتصفح (Ctrl+Shift+R)
- [ ] تحقق من عدم وجود أخطاء
- [ ] اختبر جميع الروابط

---

## 🎯 نصائح الإنتاجية

### اختصارات مفيدة:
```
Ctrl+S          # حفظ الملف
Ctrl+Z          # تراجع
Ctrl+Shift+Z    # إعادة
Ctrl+/          # تعليق/إلغاء تعليق
Ctrl+D          # حذف السطر
Ctrl+Shift+K    # حذف السطر (بديل)
Alt+Up/Down     # نقل السطر
```

### مفاتيح تنقل سريعة:
```
Ctrl+G          # اذهب إلى سطر
Ctrl+K Ctrl+I   # معلومات الرمز
F2              # إعادة تسمية الرمز
```

---

## 📚 الملفات الموصى بقراءتها

### للمبتدئين:
1. QUICK_START.md
2. ADDING_SERVICES.md
3. ENHANCEMENTS_GUIDE.md

### للمتقدمين:
1. ENHANCEMENTS_GUIDE.md (كامل)
2. FUTURE_ENHANCEMENTS.md
3. TESTING_GUIDE.md

### للمطورين:
1. src/data/enhancedServices.ts
2. src/components/DetailPageEnhanced.tsx
3. src/pages/ServiceDetailEnhancedPage.tsx

---

## 🔗 الموارد الخارجية

### التوثيق:
- [React 18](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)

### الأيقونات:
- [Lucide React](https://lucide.dev)

---

## 💡 الحيل والنصائح

### سرعة التطوير:
```
1. اترك `npm run dev` يعمل طول الوقت
2. عدّل الملفات وسيحدّث مباشرة
3. لا حاجة لإعادة البدء في الغالب
```

### الاستكشاف السريع:
```
1. استخدم Ctrl+P للبحث عن ملف
2. استخدم Ctrl+Shift+F للبحث في المشروع
3. استخدم F12 للتفتيش والتصحيح
```

### الصيانة الدورية:
```
1. تحديث المكتبات: npm update
2. فحص الأخطاء: npm run lint
3. بناء الإنتاج: npm run build
```

---

## 🚨 التحذيرات المهمة

### ❌ لا تفعل:
- لا تعدّل ملفات الإعدادات (vite.config.ts) إلا إذا كنت متأكداً
- لا تحذف مجلدات أساسية (node_modules يمكن إعادة إنشاؤها)
- لا تعدّل package-lock.json مباشرة
- لا تترك `console.log` في الكود النهائي

### ✅ افعل دائماً:
- احفظ ملفاتك (Ctrl+S)
- استخدم git للنسخ الاحتياطية
- اختبر قبل الإطلاق
- اقرأ الأخطاء بعناية

---

## 📞 التواصل والدعم

### المساعدة:
- اقرأ التوثيق المرفقة
- تحقق من TESTING_GUIDE.md
- ابحث في FUTURE_ENHANCEMENTS.md

### الإبلاغ عن الأخطاء:
- افتح Console (F12)
- اقرأ رسالة الخطأ بعناية
- قارن مع TESTING_GUIDE.md

---

## 📈 التطور التالي

### بعد الإطلاق الأول:
1. جمع تقييمات المستخدمين
2. إضافة خدمات إضافية
3. تحسين الأداء

### الميزات المستقبلية:
- انظر FUTURE_ENHANCEMENTS.md
- اختر الميزات الأولوية
- طبّقها تدريجياً

---

## 🎉 الخلاصة

**تذكّر:** كل شيء مجهز ومنظم. استمتع بالتطوير! 🚀

**الملفات المهمة جداً:**
1. QUICK_START.md - ابدأ من هنا
2. ADDING_SERVICES.md - إضافة خدمات
3. PROJECT_SUMMARY.md - ملخص المشروع

**سؤالك التالي؟** اقرأ الملف المناسب أو جرّب الكود مباشرة! 💻
