// Runtime configuration. Set these in `.env.local` (see `.env.example`).
export const CONTACT_EMAIL = 'info@connectingcloud.co';
export const CONTACT_PHONE = '+91 9052477277';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/connectingcloud';

export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
export const EMAILJS_CONFIGURED = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

// Calendly / Cal.com link. When unset, "book" buttons go to the contact page.
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || '';

export const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN || '';

export function track(event, props) {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(event, props ? { props } : undefined);
  }
}
