import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
mkdirSync(dist, { recursive: true });

const palette = {
  carbon: '#050706',
  graphite: '#111514',
  graphite2: '#171D1A',
  slate: '#6F7773',
  line: '#26302B',
  paper: '#F4F7F2',
  white: '#FFFFFF',
  lime: '#A6D83D',
  green: '#49C776',
  teal: '#22C7B8',
  cyan: '#43D9E8',
};

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="330" viewBox="0 0 1200 330" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Dacosta Technologies</title>
  <desc id="desc">Dacosta Technologies — software, infrastructure, and systems design built with precision.</desc>
  <defs>
    <linearGradient id="accent" x1="180" y1="60" x2="980" y2="270" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${palette.lime}"/>
      <stop offset="0.42" stop-color="${palette.green}"/>
      <stop offset="0.75" stop-color="${palette.teal}"/>
      <stop offset="1" stop-color="${palette.cyan}"/>
    </linearGradient>
    <linearGradient id="soft-accent" x1="0" y1="0" x2="1200" y2="330" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${palette.lime}" stop-opacity="0.28"/>
      <stop offset="0.5" stop-color="${palette.teal}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${palette.cyan}" stop-opacity="0.24"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.20 0 0 0 0 0.95 0 0 0 0 0.75 0 0 0 0.35 0" result="colored"/>
      <feMerge>
        <feMergeNode in="colored"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <clipPath id="frame-clip">
      <rect x="22" y="22" width="1156" height="286" rx="30"/>
    </clipPath>
  </defs>

  <rect width="1200" height="330" rx="34" fill="${palette.carbon}"/>
  <rect x="22" y="22" width="1156" height="286" rx="30" fill="${palette.graphite}" stroke="${palette.line}"/>
  <g clip-path="url(#frame-clip)">
    <path d="M-60 308 C160 190 285 377 492 224 C709 63 865 139 1262 -24" stroke="url(#soft-accent)" stroke-width="84" stroke-linecap="round" opacity="0.26"/>
    <path d="M1040 -40 L1200 120 L1098 222 L938 62 Z" fill="url(#accent)" opacity="0.08"/>
    <path d="M64 268 H1136" stroke="${palette.line}" stroke-width="1"/>
    <path d="M64 74 H1136" stroke="${palette.line}" stroke-width="1"/>
    <path d="M964 38 V292" stroke="${palette.line}" stroke-width="1"/>
  </g>

  <g transform="translate(78 84)">
    <rect x="0" y="0" width="156" height="156" rx="30" fill="${palette.carbon}" stroke="${palette.line}"/>
    <path d="M49 32 H84 C112 32 130 51 130 78 C130 105 112 124 84 124 H49 V32Z" stroke="${palette.paper}" stroke-width="10" stroke-linejoin="round"/>
    <path d="M89 48 C73 51 62 62 62 78 C62 94 73 105 89 108" stroke="url(#accent)" stroke-width="10" stroke-linecap="round" filter="url(#glow)"/>
    <path d="M34 36 L34 120" stroke="url(#accent)" stroke-width="5" stroke-linecap="round" opacity="0.94"/>
    <circle cx="34" cy="36" r="5" fill="${palette.lime}"/>
    <circle cx="34" cy="120" r="5" fill="${palette.cyan}"/>
  </g>

  <g transform="translate(270 88)">
    <text x="0" y="56" fill="${palette.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="54" font-weight="750" letter-spacing="0.04em">DACOSTA</text>
    <text x="4" y="96" fill="${palette.slate}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="17" font-weight="500" letter-spacing="0.28em">TECHNOLOGIES</text>
    <path d="M4 124 H426" stroke="url(#accent)" stroke-width="3" stroke-linecap="round"/>
    <text x="4" y="165" fill="${palette.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="22" font-weight="520">Software, infrastructure, and systems design built with precision.</text>
  </g>

  <g transform="translate(1000 96)" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="12" letter-spacing="0.12em">
    <text x="0" y="0" fill="${palette.slate}">PRODUCT</text>
    <text x="0" y="28" fill="${palette.slate}">BACKEND</text>
    <text x="0" y="56" fill="${palette.slate}">DEVOPS</text>
    <text x="0" y="84" fill="${palette.slate}">LINUX</text>
    <text x="0" y="112" fill="${palette.slate}">AUTOMATION</text>
    <text x="0" y="140" fill="${palette.slate}">ARCHITECTURE</text>
    <circle cx="-24" cy="-4" r="4" fill="${palette.lime}"/>
    <circle cx="-24" cy="24" r="4" fill="${palette.green}"/>
    <circle cx="-24" cy="52" r="4" fill="${palette.teal}"/>
    <circle cx="-24" cy="80" r="4" fill="${palette.cyan}"/>
    <circle cx="-24" cy="108" r="4" fill="${palette.green}" opacity="0.8"/>
    <circle cx="-24" cy="136" r="4" fill="${palette.lime}" opacity="0.7"/>
  </g>

  <text x="78" y="286" fill="${palette.slate}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="12" letter-spacing="0.12em">LESS NOISE · MORE ARCHITECTURE · TECHNOLOGY BUILT WITH PRECISION</text>
</svg>
`;

writeFileSync(join(dist, 'hero.svg'), svg, 'utf8');
