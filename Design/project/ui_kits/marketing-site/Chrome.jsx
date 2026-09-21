function SiteHeader({ active }) {
  const items = ['Services', 'Industries', 'Insights & Labs', 'We are', 'Careers'];
  return React.createElement('header', {
    style: { position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px var(--gutter)', background: 'rgba(253,253,250,0.92)', backdropFilter: 'blur(8px)', borderBottom: 'var(--border-w) solid var(--border-subtle)' },
  },
    React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: 'var(--ls-tight)' } }, 'Arclight'),
    React.createElement('nav', { style: { display: 'flex', gap: 28, fontFamily: 'var(--font-body)', fontSize: 'var(--text-small)', fontWeight: 500 } },
      items.map((it) => React.createElement('span', { key: it, style: { color: it === active ? 'var(--ink-900)' : 'var(--text-secondary)', cursor: 'pointer', fontWeight: it === active ? 700 : 500 } }, it)),
    ),
    React.createElement('button', { style: { background: 'var(--ink-900)', color: 'var(--paper)', border: 'none', borderRadius: 'var(--radius-md)', padding: '10px 18px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, cursor: 'pointer' } }, 'Kontakt'),
  );
}
function SiteFooter() {
  const cols = [
    { h: 'Services', items: ['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Data World', 'CX & Digital Commerce'] },
    { h: 'Industries', items: ['Automotive & Manufacturing', 'Financial Services', 'Retail & Consumer Products', 'Telco & Media'] },
    { h: 'We are', items: ['Company Profile', 'Offices', 'Newsroom', 'Investors'] },
    { h: 'Careers', items: ['Job Search', 'Life at Arclight', 'Graduate Programs'] },
  ];
  return React.createElement('footer', { style: { background: 'var(--ink-900)', color: 'var(--paper)', padding: 'var(--space-8) var(--gutter)', fontFamily: 'var(--font-body)' } },
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, maxWidth: 'var(--container-max)', margin: '0 auto' } },
      cols.map((c) => React.createElement('div', { key: c.h },
        React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--ink-300)', marginBottom: 14 } }, c.h),
        c.items.map((it) => React.createElement('div', { key: it, style: { fontSize: 'var(--text-small)', color: 'var(--ink-200)', marginBottom: 10, cursor: 'pointer' } }, it)),
      )),
    ),
    React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '48px auto 0', paddingTop: 24, borderTop: '1px solid var(--ink-700)', fontSize: 'var(--text-micro)', color: 'var(--ink-400)' } }, 'Arclight © 2026 — fictional demonstration brand, not affiliated with any real company.'),
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
