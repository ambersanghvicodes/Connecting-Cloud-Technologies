import { CONTACT_EMAIL } from '../lib/config';

export default function Privacy() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-24 text-slate-700 font-medium leading-relaxed space-y-5">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">Privacy notice</p>
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">How we handle your information</h1>
      <p>
        Connecting Cloud Technologies (&ldquo;we&rdquo;) operates connectingcloud.co. This notice explains what we collect through this website
        and how we use it.
      </p>
      <h2 className="text-2xl font-black text-slate-900 pt-4">What we collect</h2>
      <p>
        When you use the contact form we receive the details you enter: name, organization, role, email address, area of interest
        and message. If analytics is enabled, we collect aggregated, cookie-free usage statistics (pages viewed, referrer, country,
        device type) that do not identify you personally.
      </p>
      <h2 className="text-2xl font-black text-slate-900 pt-4">How we use it</h2>
      <p>
        We use contact details only to respond to your enquiry and any follow-up conversation you ask for. We do not sell your information
        or use it for unrelated marketing. Form submissions may be delivered through an email service provider acting on our behalf.
      </p>
      <h2 className="text-2xl font-black text-slate-900 pt-4">Retention and your choices</h2>
      <p>
        We keep enquiry correspondence for as long as needed to respond and maintain a business relationship. To access, correct or delete
        your information, email <a className="text-blue-600 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
}
