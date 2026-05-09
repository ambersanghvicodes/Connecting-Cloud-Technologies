import BrandLogo from './BrandLogo';

export default function SiteFooter() {
  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'process', label: 'Architecture' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-slate-950 py-16 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <button type="button" onClick={() => scrollToSection('home')} className="text-left">
          <BrandLogo compact dark />
        </button>
        <div className="flex space-x-12 text-sm font-bold uppercase tracking-widest">
          {footerLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
        <p className="text-xs">&copy; 2026 NexaEnterprise L2C Systems. Built for Scale.</p>
      </div>
    </footer>
  );
}
