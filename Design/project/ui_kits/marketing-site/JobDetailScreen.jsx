function JobDetailScreen({ job, Button, Badge, Dialog, onBack }) {
  const [open, setOpen] = React.useState(false);
  if (!job) return null;
  return React.createElement('div', { style: { maxWidth: 780, margin: '0 auto', padding: 'var(--space-7) var(--gutter)' } },
    React.createElement('div', { onClick: onBack, style: { cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 'var(--text-small)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6 } },
      React.createElement('i', { className: 'ph ph-arrow-left' }), 'Zurück zu offenen Stellen'),
    React.createElement(Badge, { tone: 'violet' }, job.area),
    React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 800, margin: '16px 0 12px' } }, job.title),
    React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--text-muted)', marginBottom: 28 } }, `${job.id} · ${job.city}, Deutschland · Vollzeit`),
    React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-h4)' } }, 'Deine Aufgaben'),
    React.createElement('ul', { style: { color: 'var(--text-secondary)', lineHeight: 'var(--lh-relaxed)', paddingLeft: 20 } },
      React.createElement('li', null, 'Konzeption und Umsetzung von Marketing-Automation-Kampagnen auf Basis von Microsoft Dynamics 365.'),
      React.createElement('li', null, 'Beratung unserer Kunden zu CRM- und Automatisierungsprozessen.'),
      React.createElement('li', null, 'Enge Zusammenarbeit mit Sales- und Data-Teams.'),
    ),
    React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-h4)' } }, 'Dein Profil'),
    React.createElement('ul', { style: { color: 'var(--text-secondary)', lineHeight: 'var(--lh-relaxed)', paddingLeft: 20, marginBottom: 28 } },
      React.createElement('li', null, 'Erfahrung mit Microsoft Dynamics 365 oder vergleichbaren CRM-Systemen.'),
      React.createElement('li', null, 'Sehr gute Deutsch- und Englischkenntnisse.'),
    ),
    React.createElement(Button, { variant: 'accent', size: 'lg', onClick: () => setOpen(true) }, 'Jetzt bewerben'),
    React.createElement(Dialog, { open, onClose: () => setOpen(false), title: 'Bewerbung senden', footer: React.createElement(Button, { variant: 'accent', onClick: () => setOpen(false) }, 'Absenden') },
      `Lade deinen Lebenslauf hoch, um dich auf ${job.id} zu bewerben.`),
  );
}

Object.assign(window, { JobDetailScreen });
