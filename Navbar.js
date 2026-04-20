import React, { useState, useEffect } from 'react';
import { X, Menu, ChevronDown } from 'lucide-react';
import { NAV_LINKS, EXPERTISE_ITEMS } from '../constants';
import { Logo } from './Logo'; // Assuming Logo is in its own file

export function Navbar({ activePage, capabilityType, navigateTo, selectCapability, onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (pageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
    setExpertiseOpen(false);
  };

  const handleCapSelect = (type) => {
    selectCapability(type);
    setMobileMenuOpen(false);
    setExpertiseOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
                <Logo className="h-6 w-auto" />
              </div>
              <div className="hidden sm:block text-left leading-tight">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Connecting Cloud</p>
                <p className="text-[9px] uppercase tracking-[0.1em] text-blue-600 font-bold">Technologies</p>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <div className="relative" onMouseEnter={() => setExpertiseOpen(true)} onMouseLeave={() => setExpertiseOpen(false)}>
                <button className={`flex items-center space-x-1 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activePage === 'architecture' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>
                  <span>Capabilities</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${expertiseOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 transition-all duration-300 origin-top-left ${expertiseOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <div className="grid gap-2">
                    {EXPERTISE_ITEMS.map((item) => (
                      <button key={item.id} onClick={() => handleCapSelect(item.id)} className={`flex items-start text-left gap-3 p-3 rounded-2xl hover:bg-blue-50 group transition-colors ${capabilityType === item.id && activePage === 'architecture' ? 'bg-blue-50' : ''}`}>
                        <div className={`mt-1 transition-colors ${capabilityType === item.id && activePage === 'architecture' ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}>{item.icon}</div>
                        <div>
                          <p className={`text-[10px] font-black uppercase tracking-wider transition-colors ${capabilityType === item.id && activePage === 'architecture' ? 'text-blue-600' : 'text-slate-900'}`}>{item.title}</p>
                          <p className="text-[10px] text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {NAV_LINKS.filter(l => l.id !== 'home').map((link) => (
                <button key={link.id} onClick={() => handleNav(link.id)} className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activePage === link.id ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button onClick={onContactClick} className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95">
                Connect Now
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-900">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[110] transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* ... Mobile menu JSX ... */}
      </div>
    </>
  );
}