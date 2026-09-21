function ServicesScreen({ Card, Tabs, Badge }) {
  const [tab, setTab] = React.useState(0);
  const services = [
    { t: 'Artificial Intelligence', d: 'Agentische KI, LLM-Integration und produktionsreife ML-Pipelines.', a: 'var(--violet-500)', tone: 'violet' },
    { t: 'Cloud Computing', d: 'Migration, FinOps und Betrieb über alle Hyperscaler.', a: 'var(--teal-500)', tone: 'teal' },
    { t: 'Cybersecurity', d: 'Bedrohungsanalyse, Zero-Trust-Architektur, Incident Response.', a: 'var(--coral-500)', tone: 'coral' },
    { t: 'Data World', d: 'Data Platforms, Governance und Analytics an einem Ort.', a: 'var(--amber-500)', tone: 'amber' },
    { t: 'CX & Digital Commerce', d: 'Commerce-Plattformen und Customer-Experience-Design.', a: 'var(--violet-500)', tone: 'violet' },
    { t: 'Supply Chain Management', d: 'Resiliente, transparente Lieferketten.', a: 'var(--teal-500)', tone: 'teal' },
  ];
  return React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-7) var(--gutter)' } },
    React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 800, margin: '0 0 20px' } }, 'Services'),
    React.createElement(Tabs, { items: ['Alle', 'Technology', 'Strategy', 'Experience'], active: tab, onChange: setTab }),
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 28 } },
      services.map((s) => React.createElement(Card, { key: s.t, title: s.t, accent: s.a }, s.d, React.createElement('div', { style: { marginTop: 8 } }, React.createElement(Badge, { tone: s.tone }, 'Reply-genre service')))),
    ),
  );
}

Object.assign(window, { ServicesScreen });
