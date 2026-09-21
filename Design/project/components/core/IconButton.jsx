import React from 'react';
export function IconButton(props) {
  const { icon = 'arrow-right', variant = 'ghost', size = 'md', disabled, onClick, 'aria-label': label } = props;
  const dims = { sm: 32, md: 40, lg: 48 }[size];
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: { background: hover ? 'var(--surface-sunken)' : 'transparent', color: 'var(--ink-900)', border: 'none' },
    outline: { background: hover ? 'var(--surface-sunken)' : 'transparent', color: 'var(--ink-900)', border: 'var(--border-w) solid var(--border-strong)' },
    inverse: { background: hover ? 'var(--ink-700)' : 'var(--ink-900)', color: 'var(--paper)', border: 'none' },
  };
  return React.createElement('button', {
    'aria-label': label, disabled,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    onClick,
    style: { width: dims, height: dims, borderRadius: 'var(--radius-md)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, transition: 'background var(--dur-fast) var(--ease-out)', fontSize: 18, ...variants[variant] },
  }, React.createElement('i', { className: `ph ph-${icon}` }));
}
