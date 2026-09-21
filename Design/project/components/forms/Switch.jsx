import React from 'react';
export function Switch(props) {
  const { checked, onChange, disabled, label } = props;
  return React.createElement('label', { style: { display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)' } },
    React.createElement('span', {
      style: {
        width: 40, height: 24, borderRadius: 'var(--radius-pill)', background: checked ? 'var(--accent-primary)' : 'var(--ink-200)',
        position: 'relative', transition: 'background var(--dur-normal) var(--ease-out)', flexShrink: 0,
      },
    }, React.createElement('span', {
      style: { position: 'absolute', top: 3, left: checked ? 19 : 3, width: 18, height: 18, borderRadius: '50%', background: 'var(--white)', transition: 'left var(--dur-normal) var(--ease-out)', boxShadow: 'var(--shadow-sm)' },
    })),
    React.createElement('input', { type: 'checkbox', checked, onChange, disabled, style: { display: 'none' } }),
    label,
  );
}
