import React from 'react';
export function Select(props) {
  const { label, options = [], value, onChange, disabled } = props;
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%' } },
    label ? React.createElement('span', { style: { fontSize: 'var(--text-small)', color: 'var(--text-secondary)', fontWeight: 500 } }, label) : null,
    React.createElement('div', { style: { position: 'relative' } },
      React.createElement('select', {
        value, onChange, disabled,
        style: {
          width: '100%', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', padding: '11px 14px', appearance: 'none',
          borderRadius: 'var(--radius-sm)', border: 'var(--border-w) solid var(--border-subtle)', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
          color: 'var(--text-primary)', outline: 'none',
        },
      }, options.map((o, i) => React.createElement('option', { key: i, value: o.value ?? o }, o.label ?? o))),
      React.createElement('i', { className: 'ph ph-caret-down', style: { position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-secondary)' } }),
    ),
  );
}
