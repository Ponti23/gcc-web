# CLAUDE.md

Project guide for working on **gcc-web** (Grace Community Church website) with Claude. This file is auto-loaded by Claude Code in every session.

---

## What this is

A marketing site for Grace Community Church. Single-page React app with a small set of routes — Home, About, Leadership, Resources. No backend; everything ships as static assets.

Origin: scaffolded from a Lovable template (hence the `lovable-tagger` plugin in `vite.config.ts`). The Lovable lineage isn't load-bearing — feel free to remove tagger references if Lovable is no longer in use.

GitHub: https://github.com/Ponti23/gcc-web

---

## Tech stack

- **Build:** Vite 5 + `@vitejs/plugin-react-swc`
- **Framework:** React 18 + TypeScript 5 (strict)
- **Routing:** React Router v6 (`BrowserRouter`)
- **Styling:** Tailwind CSS 3 + custom theme tokens (see `tailwind.config.ts`, `src/index.css`)
- **UI primitives:** shadcn/ui (Radix-based, generated into `src/components/ui/`)
- **State/data:** TanStack Query (provider is set up in `App.tsx` but no queries are wired yet)
- **Forms:** React Hook Form + Zod
- **Icons:** lucide-react
- **Testing:** Vitest (unit, jsdom) + Playwright (e2e)
- **Package manager:** **npm** (`package-lock.json` is the source of truth — do not introduce `bun.lock` or `yarn.lock`)

---

## Folder layout

```
gcc-web/
├── docs/                  Reference material (not shipped)
│   ├── brand-kit/         Standalone React tool for brand exploration
│   └── content/           Source content: church-info.txt + original images
├── e2e/                   Playwright e2e specs
├── public/                Static assets served at site root (favicon, pastor photos)
├── src/
│   ├── main.tsx           Entry point
│   ├── App.tsx            Router + global providers
│   ├── index.css          Tailwind layer + global styles
│   ├── assets/            Imported assets (bundled by Vite)
│   ├── components/        Feature components (HeroSection, Navbar, Footer, etc.)
│   │   └── ui/            shadcn/ui primitives — regenerate via shadcn CLI, don't hand-edit
│   ├── pages/             Route components (Index, About, Leadership, Resources, NotFound)
│   ├── hooks/             Custom hooks (use-mobile, use-toast, useReveal)
│   ├── lib/utils.ts       `cn()` helper (tailwind-merge + clsx)
│   └── test/              Vitest setup + example
├── components.json        shadcn/ui config
├── tailwind.config.ts     Theme tokens (brand colors, fonts)
├── vite.config.ts         Path alias `@` → `src/`; dev server on PORT (default 8080)
└── playwright.config.ts
```

**Routes** (`src/App.tsx`): `/`, `/about`, `/leadership`, `/resources`, `*` → `NotFound`.

---

## Commands

```bash
npm install              # install deps
npm run dev              # dev server on http://localhost:8080 (or $env:PORT)
npm run build            # production build into dist/
npm run preview          # serve the production build locally
npm run lint             # eslint
npm test                 # vitest run (unit)
npm run test:watch       # vitest watch mode
npm run test:e2e         # builds, then runs Playwright against the build
```

---

## Conventions

- **Path alias:** import from `@/...` (e.g. `import { Button } from "@/components/ui/button"`). The alias is set in both `vite.config.ts` and `tsconfig.app.json`.
- **Pages live in `src/pages/`**, one file per route. Don't nest by feature — the site is small enough that flat is fine.
- **Feature sections** (HeroSection, AboutSection, etc.) live in `src/components/`. They're composed into pages.
- **shadcn/ui primitives** in `src/components/ui/` are generated. Prefer adding new ones via the shadcn CLI rather than writing by hand.
- **Static assets:** put images that need a stable URL (e.g. pastor photos referenced by string path) in `public/`. Put assets that are imported into JS in `src/assets/`.
- **Brand colors and fonts** are defined as CSS custom properties in `src/index.css` and exposed to Tailwind via `tailwind.config.ts`. Reference them as `bg-brand-green`, `font-display`, etc.
- **Commits:** short imperative subject (`fix:`, `chore:`, `docs:`, `feat:`). Co-author tag is fine.

---

## Known gotchas

- **Pastor photo filenames are inconsistent.** Dawson/Alex/Diony use `.PNG` (uppercase); Anand/Gilbert use `.jpeg` (lowercase). The Leadership page and e2e test reference them as-is. If you rename one, update **both** `src/pages/Leadership.tsx` and `e2e/leadership.spec.ts`.
- **`test:e2e` builds first.** It's slow because it runs `npm run build` before launching Playwright. For iteration, run `npx playwright test` against an already-running `npm run preview`.
- **Dev server port comes from `process.env.PORT`** with 8080 as fallback. If 8080 is in use, set `$env:PORT = "8081"` (PowerShell) or `PORT=8081 npm run dev` (bash) before starting.
- **The `lovable-tagger` plugin only runs in dev mode.** It adds metadata to JSX for the Lovable web editor. Production builds are unaffected.
- **Large public assets.** `Ps_Anand.jpeg` is 1.3 MB and `church.png` in `src/assets/` is 2.3 MB. They render fine but hurt page load — worth compressing before any performance pass.

---

## What's in `docs/`

- **`docs/brand-kit/`** — a separate small React app for exploring brand directions (logo, palettes, typography, mockups). Not deployed with the site. Has its own `index.html` and JSX files. Useful for reference, not for editing the live site.
- **`docs/content/`** — source materials. `church-info.txt` is the canonical text content (service times, addresses, mission, etc.); `images/` holds the original full-resolution pastor photos before they were placed in `public/`.

If you need to update church info on the site, update `docs/content/church-info.txt` **and** the relevant component (`AboutSection`, `Footer`, etc.) — they're not auto-synced.

---

## Working with this project from a new device

1. `git clone https://github.com/Ponti23/gcc-web.git`
2. `cd gcc-web && npm install`
3. `npm run dev` — site comes up on http://localhost:8080
4. Open Claude Code in the project root; this file loads automatically.
