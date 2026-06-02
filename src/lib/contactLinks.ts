import type { Language } from '../hooks/useLanguage';
import { WHATSAPP_NUMBER } from './siteConfig';

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const getDefaultWhatsAppMessage = (lang: Language) =>
  lang === 'ar'
    ? 'مرحبًا نُطق، أريد مناقشة موقع أو صفحة خدمة تستهدف مصر والخليج.'
    : 'Hello Notaq, I want to discuss a website or service page for Egypt and Gulf clients.';
