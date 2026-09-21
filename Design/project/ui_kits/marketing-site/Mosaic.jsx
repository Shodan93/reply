function Mosaic({ height = 220 }) {
  const tiles = new Array(32).fill(0).map((_, i) => {
    const cyc = i % 8;
    const color = cyc === 0 ? 'var(--surface-mosaic-a)' : cyc === 2 ? 'var(--surface-mosaic-b)' : cyc === 4 ? 'var(--surface-mosaic-c)' : cyc === 6 ? 'var(--surface-mosaic-d)' : 'var(--surface-mosaic-e)';
    return React.createElement('div', { key: i, style: { background: color } });
  });
  return React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', height } }, tiles);
}

Object.assign(window, { Mosaic });
