function HomeScreen({ Button, Card, Badge, IconButton, Mosaic, onNavigate }) {
  const services = [
    { t: 'Artificial Intelligence', d: 'Von Piloten zu produktiven Agenten.', a: 'var(--violet-500)' },
    { t: 'Cloud Computing', d: 'Migration, Betrieb, Skalierung.', a: 'var(--teal-500)' },
    { t: 'Cybersecurity', d: 'Schutz für kritische Systeme.', a: 'var(--coral-500)' },
    { t: 'Data World', d: 'Von Rohdaten zu Entscheidungen.', a: 'var(--amber-500)' },
  ];
  return React.createElement('div', null,
    React.createElement('section', { style: { padding: 'var(--space-9) var(--gutter) var(--space-8)', maxWidth: 'var(--container-max)', margin: '0 auto' } },
      React.createElement(Badge, { tone: 'violet' }, 'Digital Consulting'),
      React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-1)', fontWeight: 800, letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-tight)', margin: '20px 0 24px', maxWidth: 820 } }, 'Wir bauen, was als Nächstes kommt.'),
      React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: 560, lineHeight: 'var(--lh-relaxed)', margin: '0 0 32px' } }, 'Beratung, System-Integration und digitale Services für Unternehmen, die schneller wachsen wollen als ihr Bestand es erlaubt.'),
      React.createElement('div', { style: { display: 'flex', gap: 14 } },
        React.createElement(Button, { variant: 'accent', icon: 'arrow-right', onClick: () => onNavigate('services') }, 'Leistungen entdecken'),
        React.createElement(Button, { variant: 'secondary', onClick: () => onNavigate('careers') }, 'Karriere'),
      ),
    ),
    React.createElement(Mosaic, { height: 160 }),
    React.createElement('section', { style: { padding: 'var(--space-8) var(--gutter)', maxWidth: 'var(--container-max)', margin: '0 auto' } },
      React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-micro)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: 20 } }, 'Services'),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 } },
        services.map((s) => React.createElement(Card, { key: s.t, eyebrow: 'Service', title: s.t, accent: s.a, style: { cursor: 'pointer' }, onClick: () => onNavigate('services') }, s.d)),
      ),
    ),
    React.createElement('section', { style: { background: 'var(--ink-900)', color: 'var(--paper)', padding: 'var(--space-8) var(--gutter)' } },
      React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' } },
        [['+2,1 Mrd. €', 'Umsatz 2025'], ['14.798', 'Mitarbeitende'], ['30', 'Jahre am Markt'], ['20+', 'Länder']].map(([n, l]) => React.createElement('div', { key: l },
          React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 800, color: 'var(--amber-500)' } }, n),
          React.createElement('div', { style: { fontSize: 'var(--text-small)', color: 'var(--ink-300)', marginTop: 6 } }, l),
        )),
      ),
    ),
  );
}

Object.assign(window, { HomeScreen });
