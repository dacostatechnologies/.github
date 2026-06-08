# Dacosta Technologies GitHub profile

This repository powers the public GitHub organization profile for **Dacosta Technologies**.

GitHub organization profile READMEs are rendered from:

```text
profile/README.md
```

inside a public repository named:

```text
.github
```

## Structure

```text
.
├── profile/
│   └── README.md
├── scripts/
│   ├── generate-hero.js
│   ├── generate-capabilities-map.js
│   ├── generate-stack-strip.js
│   └── validate-assets.js
├── .github/
│   └── workflows/
│       └── profile-assets.yml
└── package.json
```

## Local validation

```bash
npm run check
```

The generated SVG files are written to `dist/` locally and published to the `output` branch by GitHub Actions.
