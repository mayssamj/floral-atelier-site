# Floral Atelier Site

High‑end floral installations & art — digital portfolio.

---

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (CSS variables for dynamic themes)
- **Framer Motion** (micro‑animations)
- **Sanity CMS** (headless content)
- **Vercel** (CI + hosting)

## Getting Started
```bash
pnpm install      # or npm install / yarn install
pnpm dev          # http://localhost:3000
```

## Scripts
| Command | Purpose |
|---------|---------|
| `pnpm dev`   | Local development |
| `pnpm build` | Production build |
| `pnpm start` | Run built site |
| `pnpm lint`  | ESLint + TypeScript checks |

## Project Structure (initial)
```
floral-atelier-site/
├─ public/                # Static assets (images, videos)
├─ src/
│  ├─ components/         # Reusable UI pieces
│  ├─ pages/              # Next.js routes (to migrate to app/ later)
│  ├─ styles/             # Tailwind config & globals
│  ├─ theme/              # Color palettes & theme switcher
│  └─ lib/                # API helpers, CMS fetchers
├─ .github/workflows/     # CI pipeline
└─ package.json
```

## Deployment
Pushing to **`main`** auto‑deploys to Vercel (configured later). Preview branches are auto‑aliased.

## Branching Model
- **`main`** – production
- **`design-system`** – Figma exports & visual tokens
- Feature branches → PR → main

---
© 2025 Floral Atelier. All rights reserved.
