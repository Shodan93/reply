function InsightsScreen({ Card, Badge }) {
  const articles = [
    { t: 'Scaling AI in 2026', d: 'Wie Unternehmen KI vom Pilot in die Fläche bringen.', tag: 'AI', tone: 'violet' },
    { t: 'AI for Retailers', d: 'Agentische Systeme im Handel — vom Regal bis zur Kasse.', tag: 'Retail', tone: 'amber' },
    { t: 'Industrial Agentic AI', d: 'Skalierung agentischer KI in der Fertigung.', tag: 'Manufacturing', tone: 'teal' },
  ];
  return React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-7) var(--gutter)' } },
    React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 800, margin: '0 0 20px' } }, 'Insights & Labs'),
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 } },
      articles.map((a) => React.createElement(Card, { key: a.t, variant: 'elevated', title: a.t }, a.d, React.createElement('div', { style: { marginTop: 4 } }, React.createElement(Badge, { tone: a.tone }, a.tag)))),
    ),
  );
}

Object.assign(window, { InsightsScreen });
