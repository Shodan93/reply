import React from 'react';
export function Toast(props) {
  const { tone = 'ink', icon, children } = props;
  const tones = {
    ink: { background: 'var(--ink-900)', color: 'var(--paper)' },
    teal: { background: 'var(--teal-500)', color: 'var(--white)' },
    coral: { background: 'var(--coral-500)', color: 'var(--white)' },
  };
  return React.createElement('div', {
    style: { display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 18px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-small)', ...tones[tone] },
  }, icon ? React.createElement('i', { className: `ph ph-${icon}` }) : null, children);
}
