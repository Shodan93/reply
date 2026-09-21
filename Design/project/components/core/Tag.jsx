import React from 'react';
export function Tag(props) {
  const { children, onRemove } = props;
  return React.createElement('span', {
    style: { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 'var(--radius-sm)', border: 'var(--border-w) solid var(--border-subtle)', fontSize: 'var(--text-small)', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', background: 'var(--surface-sunken)' },
  }, children, onRemove ? React.createElement('i', { className: 'ph ph-x', style: { cursor: 'pointer', fontSize: 12 }, onClick: onRemove }) : null);
}
