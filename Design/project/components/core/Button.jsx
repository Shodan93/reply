import React from 'react';
export function Button(props) {
  const { variant = 'primary', size = 'md', disabled, icon, children, onClick } = props;
  const pad = { sm: '8px 16px', md: '12px 22px', lg: '16px 30px' }[size];
  const fontSize = { sm: 'var(--text-small)', md: 'var(--text-body)', lg: 'var(--text-body-lg)' }[size];
  const base = {
    fontFamily: 'var(--font-display)', fontWeight: 600, borderRadius: 'var(--radius-md)',
    padding: pad, fontSize, display: 'inline-flex', alignItems: 'center', gap: 8,
    cursor: disabled ? 'not-allowed' : 'pointer', border: 'var(--border-w) solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), opacity var(--dur-fast)',
    opacity: disabled ? 0.45 : 1,
  };
  const variants = {
    primary: { background: 'var(--ink-900)', color: 'var(--paper)' },
    accent: { background: 'var(--accent-primary)', color: 'var(--text-on-accent)' },
    secondary: { background: 'transparent', color: 'var(--ink-900)', borderColor: 'var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--ink-900)' },
  };
  const hovers = {
    primary: { background: 'var(--ink-700)' },
    accent: { background: 'var(--accent-primary-hover)' },
    secondary: { background: 'var(--surface-sunken)' },
    ghost: { background: 'var(--surface-sunken)' },
  };
  const [hover, setHover] = React.useState(false);
  const style = { ...base, ...variants[variant], ...(hover && !disabled ? hovers[variant] : {}) };
  return React.createElement('button', {
    style, disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }, icon ? React.createElement('i', { className: `ph ph-${icon}` }) : null, children);
}
