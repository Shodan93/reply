import React from 'react';
export function Badge(props) {
  const { children, tone = 'ink' } = props;
  const tones = {
    ink: { background: 'var(--ink-900)', color: 'var(--paper)' },
    violet: { background: 'var(--violet-100)', color: 'var(--violet-700)' },
    amber: { background: 'var(--amber-100)', color: 'var(--amber-600)' },
    teal: { background: 'var(--teal-100)', color: 'var(--teal-600)' },
    coral: { background: 'var(--coral-100)', color: 'var(--coral-600)' },
  };
  return React.createElement('span', {
    style: { display: 'inline-flex', alignItems: 'center', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', ...tones[tone] },
  }, children);
}
