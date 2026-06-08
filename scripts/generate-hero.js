import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
mkdirSync(dist, { recursive: true });

const brandIcon = readFileSync(join(root, 'assets', 'brand', 'logoicon-white-on-black.png')).toString('base64');

const palette = {
  black: '#000000',
  carbon: '#050505',
  graphite: '#0D0D0D',
  graphite2: '#141414',
  panel: '#080808',
  line: '#242424',
  lineStrong: '#343434',
  paper: '#F6F6F6',
  white: '#FFFFFF',
  slate: '#9A9A9A',
  muted: '#6C6C6C',
  dim: '#3D3D3D',
};

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="330" viewBox="0 0 1200 330" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Dacosta Technologies</title>
  <desc id="desc">Dacosta Technologies — software, infrastructure, automation, and systems architecture built with precision.</desc>
  <defs>
    <linearGradient id="neutral-sheen" x1="64" y1="58" x2="1120" y2="284" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${palette.white}" stop-opacity="0.14"/>
      <stop offset="0.48" stop-color="${palette.white}" stop-opacity="0.03"/>
      <stop offset="1" stop-color="${palette.white}" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="neutral-line" x1="78" y1="0" x2="1060" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${palette.white}" stop-opacity="0.92"/>
      <stop offset="0.5" stop-color="${palette.slate}" stop-opacity="0.72"/>
      <stop offset="1" stop-color="${palette.white}" stop-opacity="0.26"/>
    </linearGradient>
    <clipPath id="frame-clip">
      <rect x="22" y="22" width="1156" height="286" rx="30"/>
    </clipPath>
    <clipPath id="brand-icon-clip">
      <rect x="74" y="70" width="168" height="168" rx="30"/>
    </clipPath>
  </defs>

  <rect width="1200" height="330" rx="34" fill="${palette.black}"/>
  <rect x="22" y="22" width="1156" height="286" rx="30" fill="${palette.carbon}" stroke="${palette.line}"/>

  <g clip-path="url(#frame-clip)">
    <path d="M-60 282 C154 190 320 342 522 210 C738 68 908 144 1270 18" stroke="url(#neutral-sheen)" stroke-width="72" stroke-linecap="round" opacity="0.72"/>
    <path d="M64 74 H1136" stroke="${palette.line}" stroke-width="1"/>
    <path d="M64 268 H1136" stroke="${palette.line}" stroke-width="1"/>
    <path d="M958 38 V292" stroke="${palette.line}" stroke-width="1"/>
    <path d="M1008 38 V292" stroke="${palette.line}" stroke-width="1" opacity="0.55"/>
    <path d="M1058 38 V292" stroke="${palette.line}" stroke-width="1" opacity="0.32"/>
  </g>

  <g clip-path="url(#brand-icon-clip)">
    <image href="data:image/png;base64,${brandIcon}" x="74" y="70" width="168" height="168" preserveAspectRatio="xMidYMid slice"/>
  </g>
  <rect x="74" y="70" width="168" height="168" rx="30" stroke="${palette.lineStrong}"/>

  <g transform="translate(282 88)">
    <text x="0" y="58" fill="${palette.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="53" font-weight="520" letter-spacing="0.018em">dacosta technologies</text>
    <path d="M4 124 H514" stroke="url(#neutral-line)" stroke-width="2" stroke-linecap="round"/>
    <text x="4" y="165" fill="${palette.paper}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="21" font-weight="460">Software, infrastructure, automation, and systems architecture.</text>
    <text x="4" y="196" fill="${palette.slate}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="12" letter-spacing="0.15em">LESS NOISE · MORE ARCHITECTURE</text>
  </g>

  <g transform="translate(1002 96)" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="12" letter-spacing="0.12em">
    <text x="0" y="0" fill="${palette.slate}">SOFTWARE</text>
    <text x="0" y="28" fill="${palette.slate}">BACKEND</text>
    <text x="0" y="56" fill="${palette.slate}">DEVOPS</text>
    <text x="0" y="84" fill="${palette.slate}">LINUX</text>
    <text x="0" y="112" fill="${palette.slate}">AUTOMATION</text>
    <text x="0" y="140" fill="${palette.slate}">ARCHITECTURE</text>
    <circle cx="-24" cy="-4" r="4" fill="${palette.white}"/>
    <circle cx="-24" cy="24" r="4" fill="${palette.slate}"/>
    <circle cx="-24" cy="52" r="4" fill="${palette.muted}"/>
    <circle cx="-24" cy="80" r="4" fill="${palette.slate}"/>
    <circle cx="-24" cy="108" r="4" fill="${palette.muted}"/>
    <circle cx="-24" cy="136" r="4" fill="${palette.white}" opacity="0.58"/>
  </g>

  <text x="78" y="286" fill="${palette.muted}" font-family="JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace" font-size="12" letter-spacing="0.12em">TECHNOLOGY BUILT WITH PRECISION · BRAZILIAN ENGINEERING COMPANY</text>
</svg>
`;

writeFileSync(join(dist, 'hero.svg'), svg, 'utf8');
