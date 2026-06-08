import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

const required = ['hero.svg', 'capabilities-map.svg', 'stack-strip.svg'];

let failed = false;

for (const file of required) {
  const path = join(dist, file);
  if (!existsSync(path)) {
    console.error(`missing asset: ${file}`);
    failed = true;
    continue;
  }

  const content = readFileSync(path, 'utf8');
  const checks = [
    ['xml declaration', content.startsWith('<?xml version="1.0" encoding="UTF-8"?>')],
    ['svg element', /<svg[\s>]/.test(content)],
    ['title element', /<title id="title">/.test(content)],
    ['desc element', /<desc id="desc">/.test(content)],
    ['no unresolved template', !content.includes('${')],
    ['closed svg', content.trim().endsWith('</svg>')],
    ['no raw ampersands', !/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/.test(content)],
  ];

  for (const [label, ok] of checks) {
    if (!ok) {
      console.error(`${file}: failed ${label}`);
      failed = true;
    }
  }
}

const readme = readFileSync(join(root, 'profile', 'README.md'), 'utf8');
for (const file of required) {
  if (!readme.includes(`/output/${file}`)) {
    console.error(`README does not reference output/${file}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log(`validated ${required.length} SVG assets and README references`);
