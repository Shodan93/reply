import React from 'react';
export function Dialog(props) {
  const { open, title, children, onClose, footer } = props;
  if (!open) return null;
  return React.createElement('div', {
    style: { position: 'fixed', inset: 0, background: 'rgba(22,22,22,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 },
    onClick: onClose,
  },
    React.createElement('div', {
      onClick: (e) => e.stopPropagation(),
      style: { background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: 460, maxWidth: '90vw', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--font-body)' },
    },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
        React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', margin: 0, fontWeight: 700 } }, title),
        React.createElement('i', { className: 'ph ph-x', style: { cursor: 'pointer', fontSize: 20 }, onClick: onClose }),
      ),
      React.createElement('div', { style: { color: 'var(--text-secondary)', lineHeight: 'var(--lh-normal)' } }, children),
      footer ? React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 8 } }, footer) : null,
    ),
  );
}
