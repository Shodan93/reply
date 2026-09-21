const JOBS = [
  { id: 'JO-DEU-1996', title: '(Junior) Consultant Marketing Automation – Microsoft Dynamics 365 (m/w/d)', city: 'München', area: 'Consulting' },
  { id: 'JO-DEU-2041', title: 'Senior Cloud Engineer – AWS (m/w/d)', city: 'Berlin', area: 'Engineering' },
  { id: 'JO-DEU-1877', title: 'UX Designer – Digital Commerce (m/w/d)', city: 'Hamburg', area: 'Design' },
  { id: 'JO-DEU-2103', title: 'Data Engineer – Analytics Platforms (m/w/d)', city: 'München', area: 'Engineering' },
  { id: 'JO-DEU-1954', title: 'Consultant Cybersecurity (m/w/d)', city: 'Frankfurt', area: 'Consulting' },
];

function CareersScreen({ Card, Select, Input, Tag, onOpenJob }) {
  return React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-7) var(--gutter)' } },
    React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 800, margin: '0 0 20px' } }, 'Offene Stellen'),
    React.createElement('div', { style: { display: 'flex', gap: 16, marginBottom: 20, maxWidth: 640 } },
      React.createElement(Input, { placeholder: 'Suche nach Titel oder Stichwort' }),
      React.createElement(Select, { options: ['Alle Standorte', 'München', 'Berlin', 'Hamburg', 'Frankfurt'] }),
    ),
    React.createElement('div', { style: { display: 'flex', gap: 8, marginBottom: 24 } },
      React.createElement(Tag, { onRemove: () => {} }, 'Consulting'), React.createElement(Tag, { onRemove: () => {} }, 'München'),
    ),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
      JOBS.map((j) => React.createElement(Card, { key: j.id, variant: 'bordered', style: { cursor: 'pointer', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, onClick: () => onOpenJob(j) },
        React.createElement('div', null,
          React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-body-lg)', marginBottom: 4 } }, j.title),
          React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--text-muted)' } }, `${j.id} · ${j.city} · ${j.area}`),
        ),
        React.createElement('i', { className: 'ph ph-arrow-right', style: { fontSize: 20, color: 'var(--text-secondary)' } }),
      )),
    ),
  );
}

Object.assign(window, { CareersScreen, JOBS });
