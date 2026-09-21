import React from 'react';
export function Tabs(props) {
  const { items = [], active, onChange } = props;
  return React.createElement('div', { style: { display: 'flex', gap: 'var(--space-6)', borderBottom: 'var(--border-w) solid var(--border-subtle)', fontFamily: 'var(--font-display)' } },
    items.map((it, i) => {
      const isActive = (active ?? 0) === i;
      return React.createElement('button', {
        key: i, onClick: () => onChange && onChange(i),
        style: {
          background: 'none', border: 'none', padding: '12px 2px', fontSize: 'var(--text-body)', fontWeight: 600,
          color: isActive ? 'var(--ink-900)' : 'var(--text-muted)', cursor: 'pointer', position: 'relative',
          borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent', marginBottom: -1.5,
          transition: 'color var(--dur-fast)',
        },
      }, it);
    }),
  );
}
