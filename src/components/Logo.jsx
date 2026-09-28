import cctLogo from '../assets/cct-logo.png';

export default function Logo({ className = '' }) {
  return <img src={cctLogo} alt="" width="40" height="40" className={`object-contain ${className}`} />;
}
