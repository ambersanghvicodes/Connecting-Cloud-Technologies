import { Mail, Phone } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from './Link';
import { CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL } from '../lib/config';
import { PRACTICES } from '../data/content';
import Logo from './Logo';

const COMPANY = [
  { to: '/industries/pharma', label: 'Pharma & Life Sciences' },
  { to: '/erp-decision-sprint', label: 'ERP Decision Sprint' },
  { to: '/approach', label: 'Our Approach' },
  { to: '/team', label: 'Team' },
  { to: '/insights', label: 'Insights' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-8 w-8" />
              <span className="font-black uppercase tracking-tight">Connecting Cloud</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Architecture-led consulting and hands-on delivery for complex enterprise landscapes.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connecting Cloud on LinkedIn"
              className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
          <div>
            <h2 className="font-black text-[11px] uppercase tracking-widest text-blue-400 mb-6">Services</h2>
            <ul className="space-y-3 text-slate-400 text-sm font-bold">
              {PRACTICES.map((p) => (
                <li key={p.id}><Link to={p.path} className="hover:text-white">{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-black text-[11px] uppercase tracking-widest text-blue-400 mb-6">Company</h2>
            <ul className="space-y-3 text-slate-400 text-sm font-bold">
              {COMPANY.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-black text-[11px] uppercase tracking-widest text-blue-400 mb-6">Contact</h2>
            <ul className="space-y-3 text-slate-400 text-sm font-bold">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-white"><Mail size={16} className="flex-shrink-0" /> <span className="break-all">{CONTACT_EMAIL}</span></a></li>
              <li><a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-white"><Phone size={16} /> {CONTACT_PHONE}</a></li>
              <li><Link to="/contact" className="hover:text-white">Contact form</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} Connecting Cloud Technologies. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white">Privacy Notice</Link>
        </div>
      </div>
    </footer>
  );
}
