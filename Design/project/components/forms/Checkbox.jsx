import React from 'react';
export function Checkbox(props) {
  const { label, checked, onChange, disabled } = props;
  return React.createElement('label', { style: { display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 } },
    React.createElement('span', {
      style: {
        width: 20, height: 20, borderRadius: 'var(--radius-sm)', border: `var(--border-w) solid ${checked ? 'var(--ink-900)' : 'var(--border-strong)'}`,
        background: checked ? 'var(--ink-900)' : 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--dur-fast)',
      },
    }, checked ? React.createElement('i', { className: 'ph ph-check', style: { color: 'var(--paper)', fontSize: 13 } }) : null),
    React.createElement('input', { type: 'checkbox', checked, onChange, disabled, style: { display: 'none' } }),
    label,
  );
}
