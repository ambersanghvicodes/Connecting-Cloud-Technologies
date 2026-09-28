// Runtime configuration. Set these in `.env` (see `.env.example`).
export const SITE_URL = 'https://www.connectingcloud.co';
export const CONTACT_EMAIL = 'info@connectingcloud.co';
export const CONTACT_PHONE = '+91 9052477277';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/connectingcloud';

// Google Apps Script web app that appends enquiries to the Briefings sheet and
// emails CONTACT_EMAIL (setup in README). When unset, the form falls back to mailto.
export const BRIEFING_SCRIPT_URL = import.meta.env.VITE_BRIEFING_SCRIPT_URL || '';

// Calendly / Cal.com link. When unset, "book" buttons go to the contact page.
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || '';

export const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN || '';

export function track(event, props) {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(event, props ? { props } : undefined);
  }
}
