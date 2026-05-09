import { useEffect, useState } from 'react';
import { Box, ChevronDown, FileText, Menu, Settings, Share2, Target, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'systems', label: 'Systems' },
    { id: 'process', label: 'CCT Method' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'efficiency', label: 'Results' },
  ];

  const capabilityLinks = [
    {
      id: 'sf',
      label: 'Salesforce',
      description: 'Revenue Cloud and CRM',
      icon: <Target size={16} />,
    },
    {
      id: 'sap-cpq',
      label: 'SAP CPQ',
      description: 'Complex quoting logic',
      icon: <FileText size={16} />,
    },
    {
      id: 's4-avc',
      label: 'S/4HANA AVC',
      description: 'Advanced configuration',
      icon: <Box size={16} />,
    },
    {
      id: 'sap-cpi',
      label: 'SAP CPI',
      description: 'BTP orchestration',
      icon: <Share2 size={16} />,
    },
    {
      id: 'sap-vc',
      label: 'SAP VC',
      description: 'Classic VC modeling',
      icon: <Settings size={16} />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setMobileMenuOpen(false);
    setCapabilitiesOpen(false);
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setCapabilitiesOpen(false);
    }

    setMobileMenuOpen((open) => !open);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 py-3 shadow-sm backdrop-blur-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="text-left transition-transform hover:scale-[1.01]"
              aria-label="Go to home section"
            >
              <BrandLogo />
            </button>

            <div className="hidden lg:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setCapabilitiesOpen(true)}
                onMouseLeave={() => setCapabilitiesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setCapabilitiesOpen((open) => !open)}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-600 transition-all hover:bg-slate-50 hover:text-blue-600"
                >
                  <span>Capabilities</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${capabilitiesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 w-72 origin-top-left rounded-3xl border border-slate-100 bg-white p-4 shadow-2xl transition-all duration-300 ${
                    capabilitiesOpen ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
                  }`}
                >
                  <div className="grid gap-2">
                    {capabilityLinks.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className="group flex items-start gap-3 rounded-2xl p-3 text-left transition-colors hover:bg-blue-50"
                      >
                        <div className="mt-1 text-slate-400 transition-colors group-hover:text-blue-600">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-wider text-slate-900">
                            {item.label}
                          </p>
                          <p className="text-[10px] font-medium text-slate-500">{item.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-600 transition-all hover:bg-slate-50 hover:text-blue-600"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex rounded-full bg-slate-900 px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-blue-600"
              >
                Free L2C Audit
              </button>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="rounded-full p-2 text-slate-900 lg:hidden"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-6">
          <button type="button" onClick={() => scrollToSection('home')} className="text-left">
            <BrandLogo />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full p-2 text-slate-900"
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="h-full overflow-y-auto px-8 pb-32 pt-8">
          <div className="space-y-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-4xl font-black tracking-tight text-slate-900 transition-colors hover:text-blue-600"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-100 pt-8">
            <p className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Capabilities</p>
            <div className="space-y-5">
              {capabilityLinks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left"
                >
                  <p className="text-2xl font-black text-slate-700 transition-colors hover:text-blue-600">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">{item.description}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="mt-10 w-full rounded-2xl bg-slate-900 px-6 py-4 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-blue-600"
          >
            Free L2C Audit
          </button>
        </div>
      </div>
    </>
  );
}
