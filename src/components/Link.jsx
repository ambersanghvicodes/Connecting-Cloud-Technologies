import { navigate } from '../lib/router';

export default function Link({ to, onClick, children, ...rest }) {
  const external = /^(https?:|mailto:|tel:)/.test(to);
  if (external) {
    const newTab = to.startsWith('http');
    return (
      <a href={to} onClick={onClick} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
