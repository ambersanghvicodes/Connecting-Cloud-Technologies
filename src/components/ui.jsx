import { ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import Link from './Link';
import { BOOKING_URL, track } from '../lib/config';

export function Container({ className = '', children }) {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = 'text-blue-600' }) {
  return <p className={`text-[11px] font-black uppercase tracking-[0.3em] mb-4 ${className}`}>{children}</p>;
}

export function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:30px_30px] opacity-50" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-4xl md:text-6xl font-black leading-[1.02] tracking-tight text-slate-950 mb-6">{title}</h1>
        {intro ? <p className="max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-slate-600">{intro}</p> : null}
        {children}
      </Container>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, intro, dark = false }) {
  return (
    <div className="mb-12 max-w-3xl">
      <Eyebrow className={dark ? 'text-blue-400' : 'text-blue-600'}>{eyebrow}</Eyebrow>
      <h2 className={`text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {intro ? <p className={`text-lg font-medium leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{intro}</p> : null}
    </div>
  );
}

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';

export function ButtonLink({ to, variant = 'primary', children, onClick, className = '' }) {
  const styles = {
    primary: 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5',
    secondary: 'border-2 border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50',
    light: 'bg-white text-blue-700 shadow-xl hover:bg-blue-50',
    ghost: 'border border-white/25 text-white hover:bg-white/10',
  };
  return (
    <Link to={to} onClick={onClick} className={`${buttonBase} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

// "Book a working session": the booking page when configured, otherwise the contact form.
export function BookButton({ variant = 'primary', source, label = 'Book a working session', interest = 'Working session', className }) {
  const to = BOOKING_URL || `/contact?interest=${encodeURIComponent(interest)}`;
  return (
    <ButtonLink to={to} variant={variant} className={className} onClick={() => track('Book Click', { source })}>
      <CalendarDays size={18} /> {label}
    </ButtonLink>
  );
}

export function SprintButton({ variant = 'secondary', source, className }) {
  return (
    <ButtonLink to="/erp-decision-sprint" variant={variant} className={className} onClick={() => track('Sprint Click', { source })}>
      See the ERP Decision Sprint <ArrowRight size={18} />
    </ButtonLink>
  );
}

export function CheckItem({ children, dark = false }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 size={18} className={`mt-0.5 flex-shrink-0 ${dark ? 'text-blue-400' : 'text-blue-600'}`} />
      <span className={`font-semibold ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{children}</span>
    </li>
  );
}

export function CtaBand({ title, text, source }) {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 md:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/25 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{title}</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">{text}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <BookButton variant="light" source={source} />
              <SprintButton variant="ghost" source={source} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Initials({ children, size = 'md' }) {
  const sizes = { md: 'w-14 h-14 text-lg', sm: 'w-11 h-11 text-sm' };
  return (
    <div className={`${sizes[size]} flex-shrink-0 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center`} aria-hidden="true">
      {children}
    </div>
  );
}
