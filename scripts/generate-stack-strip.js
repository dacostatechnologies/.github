import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
mkdirSync(dist, { recursive: true });

const p = {
  carbon: '#050706',
  graphite: '#111514',
  panel: '#0B0F0D',
  line: '#27312C',
  paper: '#F4F7F2',
  slate: '#8A938E',
  muted: '#56615B',
  lime: '#A6D83D',
  green: '#49C776',
  teal: '#22C7B8',
  cyan: '#43D9E8',
};

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

const groups = [
  ['CORE', ['TypeScript', 'Go', 'Rust']],
  ['FRONTEND', ['SolidJS', 'TanStack', 'Rsbuild', 'TailwindCSS']],
  ['DATA', ['PostgreSQL', 'Redis', 'Drizzle', 'GORM']],
  ['MESSAGING', ['NATS', 'Kafka', 'Streams']],
  ['INFRA', ['Linux', 'Docker', 'Nginx', 'CI/CD']],
  ['SECURITY', ['Zitadel', 'Keycloak', 'Casbin', 'CASL']],
  ['OPERATIONS', ['Observability', 'Health checks', 'Metrics', 'Logs']],
  ['ARCHITECTURE', ['DDD', 'Clean Architecture', 'Event-driven', 'Zero Trust']],
];

const colors = [p.lime, p.green, p.teal, p.cyan, p.teal, p.green, p.lime, p.cyan];
const cardWidth = 260;
const cardHeight = 78;
const gapX = 22;
const gapY = 22;
const startX = 58;
const startY = 76;

const cards = groups.map(([label, items], index) => {
  const col = index % 4;
  const row = Math.floor(index / 4);
  const x = startX + col * (cardWidth + gapX);
  const y = startY + row * (cardHeight + gapY);
  const color = colors[index % colors.length];
  const midpoint = Math.ceil(items.length / 2);
  const firstLine = items.slice(0, midpoint).join(' · ');
  const secondLine = items.slice(midpoint).join(' · ');

  return `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${cardWidth}" height="${cardHeight}" rx="17" fill="${p.panel}" stroke="${p.line}"/>
      <path d="M18 18 H${cardWidth - 18}" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      <text x="18" y="36" fill="${p.slate}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="9.5" letter-spacing="0.16em">${escapeXml(label)}</text>
      <text x="18" y="56" fill="${p.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="13.5" font-weight="620">${escapeXml(firstLine)}</text>
      <text x="18" y="72" fill="${p.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="13.5" font-weight="620">${escapeXml(secondLine)}</text>
    </g>`;
}).join('\n');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="278" viewBox="0 0 1200 278" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Dacosta Technologies technology foundation</title>
  <desc id="desc">Core technology foundation including TypeScript, Go, Rust, SolidJS, TanStack, Rsbuild, PostgreSQL, Redis, NATS, Kafka, Linux, Docker, CI/CD, identity, security, and observability.</desc>
  <defs>
    <linearGradient id="accent" x1="56" y1="24" x2="1144" y2="254" gradientUnits="userSpaceOnUse">
      <stop stop-color="${p.lime}"/>
      <stop offset="0.38" stop-color="${p.green}"/>
      <stop offset="0.72" stop-color="${p.teal}"/>
      <stop offset="1" stop-color="${p.cyan}"/>
    </linearGradient>
    <clipPath id="clip">
      <rect x="20" y="20" width="1160" height="238" rx="24"/>
    </clipPath>
  </defs>
  <rect width="1200" height="278" rx="28" fill="${p.carbon}"/>
  <rect x="20" y="20" width="1160" height="238" rx="24" fill="${p.graphite}" stroke="${p.line}"/>
  <text x="58" y="52" fill="${p.slate}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="12" letter-spacing="0.18em">TECHNOLOGY FOUNDATION</text>
  <g clip-path="url(#clip)">
    <path d="M-20 242 C214 92 382 250 622 112 C837 -16 986 96 1230 38" stroke="url(#accent)" stroke-width="52" stroke-linecap="round" opacity="0.08"/>
    ${cards}
  </g>
</svg>
`;

writeFileSync(join(dist, 'stack-strip.svg'), svg, 'utf8');
