import React from 'react';
export function Card(props) {
  const { title, eyebrow, children, variant = 'bordered', accent, style: styleProp } = props;
  const variants = {
    bordered: { background: 'var(--surface-card)', border: 'var(--border-w) solid var(--border-subtle)', boxShadow: 'none' },
    elevated: { background: 'var(--surface-card)', border: 'none', boxShadow: 'var(--shadow-md)' },
    inverse: { background: 'var(--ink-900)', border: 'none', boxShadow: 'none', color: 'var(--paper)' },
  };
  return React.createElement('div', {
    style: { borderRadius: 'var(--radius-md)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-body)', borderTop: accent ? `4px solid ${accent}` : undefined, ...variants[variant], ...styleProp },
  },
    eyebrow ? React.createElement('span', { style: { fontSize: 'var(--text-micro)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: variant === 'inverse' ? 'var(--ink-300)' : 'var(--text-muted)', fontWeight: 600 } }, eyebrow) : null,
    title ? React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', fontWeight: 700, margin: 0, color: variant === 'inverse' ? 'var(--paper)' : 'var(--text-primary)' } }, title) : null,
    children,
  );
}
