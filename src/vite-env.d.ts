/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_SITE_TECHNICAL_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_OWNER_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
