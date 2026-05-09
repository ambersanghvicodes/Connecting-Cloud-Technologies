import cctLogo from '../assets/cct-logo.png';

export default function BrandLogo({ compact = false, dark = false }) {
  const wrapperClasses = compact
    ? 'relative flex h-10 w-10 items-center justify-center rounded-3xl bg-white/10 border border-white/15 shadow-lg shadow-black/10'
    : 'relative flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-100 shadow-lg shadow-blue-100/40 ring-1 ring-blue-200/40';

  const imageClasses = compact ? 'h-7 w-auto object-contain' : 'h-8 w-auto object-contain';
  const titleClasses = dark
    ? 'text-sm font-black text-white tracking-tight uppercase'
    : 'text-[10px] font-bold uppercase tracking-[0.35em] text-blue-600';
  const subtitleClasses = dark
    ? 'text-[10px] uppercase tracking-[0.35em] text-slate-400'
    : 'hidden';

  return (
    <div className="flex items-center gap-4">
      <div className={wrapperClasses}>
        <img src={cctLogo} alt="CCT logo" className={imageClasses} />
      </div>
      <div className="leading-tight">
        <p className={titleClasses}>{dark ? 'CCT' : 'Connecting Cloud Technologies'}</p>
        {dark ? <p className={subtitleClasses}>Connecting Cloud Tech</p> : null}
      </div>
    </div>
  );
}
