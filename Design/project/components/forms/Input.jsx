import React from 'react';
export function Input(props) {
  const { label, placeholder, type = 'text', error, disabled, value, onChange } = props;
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%' } },
    label ? React.createElement('span', { style: { fontSize: 'var(--text-small)', color: 'var(--text-secondary)', fontWeight: 500 } }, label) : null,
    React.createElement('input', {
      type, placeholder, disabled, value, onChange,
      style: {
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', padding: '11px 14px',
        borderRadius: 'var(--radius-sm)', border: `var(--border-w) solid ${error ? 'var(--coral-600)' : focus ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
        outline: 'none', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)', color: 'var(--text-primary)',
        boxShadow: focus ? 'var(--shadow-focus)' : 'none', transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      },
      onFocus: () => setFocus(true), onBlur: () => setFocus(false),
    }),
    error ? React.createElement('span', { style: { fontSize: 'var(--text-micro)', color: 'var(--coral-600)' } }, error) : null,
  );
}
