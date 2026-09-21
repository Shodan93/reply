import React from 'react';
export function Tooltip(props) {
  const { label, children } = props;
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: { position: 'relative', display: 'inline-flex' },
    onMouseEnter: () => setShow(true), onMouseLeave: () => setShow(false),
  },
    children,
    show ? React.createElement('span', {
      style: { position: 'absolute', bottom: '120%', left: '50%', transform: 'translateX(-50%)', background: 'var(--ink-900)', color: 'var(--paper)', fontSize: 'var(--text-micro)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)', boxShadow: 'var(--shadow-md)' },
    }, label) : null,
  );
}
