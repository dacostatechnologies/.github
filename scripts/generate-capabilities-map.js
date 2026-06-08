import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
mkdirSync(dist, { recursive: true });

const p = {
  black: '#000000',
  carbon: '#050505',
  graphite: '#0D0D0D',
  panel: '#080808',
  line: '#242424',
  line2: '#343434',
  paper: '#F6F6F6',
  slate: '#9A9A9A',
  muted: '#646464',
  dim: '#404040',
  white: '#FFFFFF',
};

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

const nodes = [
  { id: 'PRODUCT', label: 'Product\nEngineering', x: 186, y: 92, tone: p.white },
  { id: 'BACKEND', label: 'Backend\nSystems', x: 478, y: 92, tone: p.slate },
  { id: 'DATA', label: 'Data &\nPipelines', x: 770, y: 92, tone: p.muted },
  { id: 'AUTOMATION', label: 'Automation\n& Tooling', x: 1040, y: 92, tone: p.slate },
  { id: 'INTERFACES', label: 'Interfaces\n& Design Systems', x: 186, y: 268, tone: p.muted },
  { id: 'INFRA', label: 'Infrastructure\n& DevOps', x: 478, y: 268, tone: p.white },
  { id: 'SECURITY', label: 'Security\n& Identity', x: 770, y: 268, tone: p.slate },
  { id: 'ARCH', label: 'Architecture\n& Consulting', x: 1040, y: 268, tone: p.white },
];

function node({ id, label, x, y, tone }) {
  const [a, b] = label.split('\n');
  return `
    <g transform="translate(${x} ${y})">
      <rect x="-116" y="-52" width="232" height="104" rx="20" fill="${p.panel}" stroke="${p.line}"/>
      <rect x="-116" y="-52" width="4" height="104" rx="2" fill="${tone}" opacity="0.86"/>
      <circle cx="90" cy="-27" r="5" fill="${tone}" opacity="0.86"/>
      <text x="-88" y="-7" fill="${p.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="19" font-weight="650">${escapeXml(a)}</text>
      <text x="-88" y="21" fill="${p.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="19" font-weight="650">${escapeXml(b)}</text>
      <text x="-88" y="42" fill="${p.muted}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="10" letter-spacing="0.14em">${id}</text>
    </g>`;
}

const connections = [
  [186, 92, 478, 92],
  [478, 92, 770, 92],
  [770, 92, 1040, 92],
  [186, 268, 478, 268],
  [478, 268, 770, 268],
  [770, 268, 1040, 268],
  [478, 92, 478, 268],
  [770, 92, 770, 268],
  [186, 92, 186, 268],
  [1040, 92, 1040, 268],
  [478, 92, 770, 268],
  [770, 92, 478, 268],
];

const lineSvg = connections
  .map(([x1, y1, x2, y2], i) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${i > 7 ? 'url(#line-soft)' : p.line2}" stroke-width="1.4" stroke-dasharray="${i > 5 ? '5 7' : '0'}" opacity="${i > 7 ? '0.38' : '0.68'}"/>`)
  .join('\n');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="360" viewBox="0 0 1200 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Dacosta Technologies capability map</title>
  <desc id="desc">Capability map connecting product engineering, backend systems, data, automation, interfaces, infrastructure, security, and architecture.</desc>
  <defs>
    <linearGradient id="line-soft" x1="80" y1="40" x2="1120" y2="320" gradientUnits="userSpaceOnUse">
      <stop stop-color="${p.white}" stop-opacity="0.64"/>
      <stop offset="0.5" stop-color="${p.slate}" stop-opacity="0.32"/>
      <stop offset="1" stop-color="${p.white}" stop-opacity="0.22"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="360" rx="28" fill="${p.black}"/>
  <rect x="20" y="20" width="1160" height="320" rx="24" fill="${p.carbon}" stroke="${p.line}"/>

  <g opacity="0.78">
    ${lineSvg}
  </g>

  <circle cx="624" cy="180" r="54" fill="${p.panel}" stroke="url(#line-soft)" stroke-width="2"/>
  <text x="624" y="173" text-anchor="middle" fill="${p.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="18" font-weight="720">Dacosta</text>
  <text x="624" y="198" text-anchor="middle" fill="${p.slate}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="10" letter-spacing="0.14em">SYSTEMS</text>

  ${nodes.map(node).join('\n')}
</svg>
`;

writeFileSync(join(dist, 'capabilities-map.svg'), svg, 'utf8');
