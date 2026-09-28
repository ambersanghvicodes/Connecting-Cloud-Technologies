import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from './Link';
import { usePath } from '../lib/router';
import { PRACTICES } from '../data/content';
import Logo from './Logo';

const LINKS = [
  { to: '/industries/pharma', label: 'Pharma' },
  { to: '/approach', label: 'Approach' },
  { to: '/team', label: 'Team' },
  { to: '/insights', label: 'Insights' },
];

export default function Navigation() {
  const path = usePath();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(path);

  // Close menus on navigation.
  if (menuPath !== path) {
    setMenuPath(path);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const isActive = (to) => path === to || path.startsWith(`${to}/`);
  const servicesActive = PRACTICES.some((p) => isActive(p.path));
  const linkClass = (active) =>
    `px-3 xl:px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
      active ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
    }`;

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || mobileOpen ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Connecting Cloud Technologies home">
            <Logo className="h-9 w-9" />
            <span className="text-left leading-tight">
              <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Connecting Cloud</span>
              <span className="block text-[9px] uppercase tracking-[0.1em] text-blue-600 font-bold">Technologies</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((o) => !o)}
                className={`flex items-center gap-1 ${linkClass(servicesActive)}`}
              >
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 p-3 grid gap-1">
                  {PRACTICES.map((p) => (
                    <Link key={p.id} to={p.path} className={`block p-3 rounded-2xl hover:bg-blue-50 ${isActive(p.path) ? 'bg-blue-50' : ''}`}>
                      <span className="block text-xs font-black uppercase tracking-wider text-slate-900">{p.name}</span>
                      <span className="block text-xs text-slate-500 font-medium">{p.tagline}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className={linkClass(isActive(l.to))}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/erp-decision-sprint"
              className="hidden sm:inline-flex bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
            >
              ERP Decision Sprint
            </Link>
            <Link
              to="/contact"
              className="hidden lg:inline-flex border border-slate-200 bg-white text-slate-900 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 text-slate-900"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`lg:hidden fixed inset-0 top-[64px] bg-white z-[99] transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full overflow-y-auto">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Services</p>
          {PRACTICES.map((p) => (
            <Link key={p.id} to={p.path} className="block text-2xl font-black text-slate-900 mb-4 hover:text-blue-600">
              {p.name}
            </Link>
          ))}
          <div className="border-t border-slate-100 my-6" />
          {[...LINKS, { to: '/erp-decision-sprint', label: 'ERP Decision Sprint' }, { to: '/contact', label: 'Contact' }].map((l) => (
            <Link key={l.to} to={l.to} className="block text-2xl font-black text-slate-900 mb-4 hover:text-blue-600">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
