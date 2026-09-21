import React from 'react';
export function Radio(props) {
  const { label, checked, onChange, name, disabled } = props;
  return React.createElement('label', { style: { display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 } },
    React.createElement('span', {
      style: {
        width: 20, height: 20, borderRadius: '50%', border: `var(--border-w) solid ${checked ? 'var(--ink-900)' : 'var(--border-strong)'}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      },
    }, checked ? React.createElement('span', { style: { width: 10, height: 10, borderRadius: '50%', background: 'var(--ink-900)' } }) : null),
    React.createElement('input', { type: 'radio', name, checked, onChange, disabled, style: { display: 'none' } }),
    label,
  );
}
