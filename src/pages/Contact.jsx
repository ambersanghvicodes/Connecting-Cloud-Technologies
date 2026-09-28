import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CalendarDays, CheckCircle2, Mail, Phone } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from '../components/Link';
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE, EMAILJS, EMAILJS_CONFIGURED, LINKEDIN_URL, track } from '../lib/config';
import { buildEnquiryMailto } from '../lib/mailto';
import { Container, PageHeader } from '../components/ui';

const INTERESTS = [
  'Working session',
  'ERP Decision Sprint',
  'SAP S/4HANA implementation or rollout',
  'SAP CPQ / VC / AVC',
  'SAP BTP / integration',
  'Salesforce',
  'AI & automation',
  'Managed services / AMC',
  'Other',
];

const inputClass =
  'w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl font-semibold text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20';

function initialInterest() {
  const requested = new URLSearchParams(window.location.search).get('interest');
  return INTERESTS.includes(requested) ? requested : INTERESTS[0];
}

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error
  const [interest, setInterest] = useState(initialInterest);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.company_website) return; // honeypot: bots fill hidden fields

    if (!EMAILJS_CONFIGURED) {
      window.location.href = buildEnquiryMailto(CONTACT_EMAIL, data);
      track('Contact Submit', { interest: data.interest, method: 'mailto' });
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, { publicKey: EMAILJS.publicKey });
      track('Contact Submit', { interest: data.interest, method: 'emailjs' });
      form.reset();
      setStatus('sent');
    } catch (err) {
      console.error('EmailJS error', err);
      setStatus('error');
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your landscape."
        intro="Tell us about your systems, goals and timeline. A practice lead will get back to you."
      />
      <section className="pb-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
            <aside className="rounded-[2rem] bg-slate-950 text-white p-8 md:p-10 h-fit">
              {BOOKING_URL ? (
                <div className="mb-10">
                  <h2 className="text-2xl font-black mb-3">Prefer to pick a time?</h2>
                  <p className="text-slate-400 font-medium mb-6">Book a 30-minute call directly in our calendar.</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('Book Click', { source: 'contact' })}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-950 px-6 py-4 text-sm font-black hover:bg-blue-50"
                  >
                    <CalendarDays size={18} /> Book a call
                  </a>
                </div>
              ) : null}
              <h2 className="text-2xl font-black mb-6">Reach us directly</h2>
              <ul className="space-y-5">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 font-bold hover:text-blue-300">
                    <Mail className="text-blue-400" size={20} /> {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-4 font-bold hover:text-blue-300">
                    <Phone className="text-blue-400" size={20} /> {CONTACT_PHONE}
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 font-bold hover:text-blue-300">
                    <FaLinkedinIn className="text-blue-400" size={20} /> LinkedIn
                  </a>
                </li>
              </ul>
            </aside>

            <div className="rounded-[2rem] border border-slate-200 p-6 md:p-10">
              {status === 'sent' ? (
                <div
                  role="status"
                  ref={(el) => el?.scrollIntoView({ block: 'center', behavior: 'smooth' })}
                  className="py-16 flex flex-col items-center text-center"
                >
                  <CheckCircle2 size={44} className="text-emerald-500 mb-4" />
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Thank you. We&rsquo;ve received your message.</h2>
                  <p className="text-slate-600 font-medium mb-6">A practice lead will get back to you.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="text-sm font-black text-blue-600 hover:text-blue-700">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                  {status === 'error' ? (
                    <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      We couldn&rsquo;t send your message. Please try again, or email us at{' '}
                      <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                    </div>
                  ) : null}
                  {status === 'mailto' ? (
                    <div role="status" className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800">
                      Your email app should have opened with the message ready to send. If it didn&rsquo;t, email us at{' '}
                      <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                    </div>
                  ) : null}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" htmlFor="name">
                      <input id="name" required name="name" type="text" autoComplete="name" className={inputClass} />
                    </Field>
                    <Field label="Organization" htmlFor="organization">
                      <input id="organization" required name="organization" type="text" autoComplete="organization" className={inputClass} />
                    </Field>
                    <Field label="Work email" htmlFor="email">
                      <input id="email" required name="email" type="email" autoComplete="email" className={inputClass} />
                    </Field>
                    <Field label="Role (optional)" htmlFor="role">
                      <input id="role" name="role" type="text" autoComplete="organization-title" className={inputClass} />
                    </Field>
                  </div>
                  <Field label="I'm interested in" htmlFor="interest">
                    <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className={inputClass}>
                      {INTERESTS.map((i) => <option key={i}>{i}</option>)}
                    </select>
                  </Field>
                  <Field label="Your landscape and goals" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Current systems, what you're trying to decide or fix, timeline…"
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                  <div className="hidden" aria-hidden="true">
                    <label>Company website <input name="company_website" type="text" tabIndex={-1} autoComplete="off" /></label>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-60 transition-colors"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                  <p className="text-xs text-slate-500 font-medium">
                    We use your details only to respond to your enquiry. See our <Link to="/privacy" className="underline">privacy notice</Link>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-black uppercase tracking-widest text-slate-600 mb-2">{label}</label>
      {children}
    </div>
  );
}
