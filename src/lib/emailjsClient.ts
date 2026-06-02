import emailjs from '@emailjs/browser';

const cleanEnvValue = (value: unknown) =>
  typeof value === 'string' ? value.trim() : '';

const DEFAULT_CONTACT_EMAIL = 'info@xn--2gbwk.site';
const DEFAULT_CONTACT_EMAIL_DISPLAY = 'info@\u0646\u0637\u0642.site';
const DEFAULT_PUBLIC_KEY = 'OgwjeXTbElFzbUd5l';
const DEFAULT_SERVICE_ID = 'service_g76vwgw';
const DEFAULT_OWNER_TEMPLATE_ID = 'template_p5pv7og';
const DEFAULT_AUTOREPLY_TEMPLATE_ID = 'template_0ccy00s';

export const CONTACT_EMAIL =
  cleanEnvValue(import.meta.env.VITE_CONTACT_EMAIL) || DEFAULT_CONTACT_EMAIL;
export const CONTACT_EMAIL_DISPLAY =
  cleanEnvValue(import.meta.env.VITE_CONTACT_EMAIL_DISPLAY) ||
  DEFAULT_CONTACT_EMAIL_DISPLAY;

export const emailJsConfig = {
  publicKey: cleanEnvValue(import.meta.env.VITE_EMAILJS_PUBLIC_KEY) || DEFAULT_PUBLIC_KEY,
  serviceId: cleanEnvValue(import.meta.env.VITE_EMAILJS_SERVICE_ID) || DEFAULT_SERVICE_ID,
  ownerTemplateId:
    cleanEnvValue(import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID) || DEFAULT_OWNER_TEMPLATE_ID,
  autoReplyTemplateId:
    cleanEnvValue(import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID) ||
    DEFAULT_AUTOREPLY_TEMPLATE_ID,
};

export const isEmailJsConfigured = () =>
  Boolean(
    emailJsConfig.publicKey &&
      emailJsConfig.serviceId &&
      emailJsConfig.ownerTemplateId,
  );

export type ContactEmailPayload = Record<string, string>;

let isEmailJsInitialized = false;

const ensureEmailJsInitialized = () => {
  if (isEmailJsInitialized) {
    return;
  }

  emailjs.init({
    publicKey: emailJsConfig.publicKey,
  });
  isEmailJsInitialized = true;
};

export const sendContactEmails = async (payload: ContactEmailPayload) => {
  if (!isEmailJsConfigured()) {
    throw new Error('EmailJS is not configured.');
  }

  ensureEmailJsInitialized();

  const templateParams = {
    ...payload,
    to_email: CONTACT_EMAIL,
    display_email: CONTACT_EMAIL_DISPLAY,
    reply_to: payload.email,
    customer_email: payload.email,
    customer_name: payload.name,
  };

  await emailjs.send(
    emailJsConfig.serviceId,
    emailJsConfig.ownerTemplateId,
    templateParams,
  );

  if (emailJsConfig.autoReplyTemplateId) {
    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.autoReplyTemplateId,
        templateParams,
      );
    } catch (error) {
      console.warn('EmailJS auto-reply failed after owner notification was sent.', error);
    }
  }
};
