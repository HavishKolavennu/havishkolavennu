# Havish Kolavennu — Portfolio

A production-quality personal portfolio for a CS student applying to Startup Shell. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and shadcn-style components.

## Design

- **Theme**: Warm cream background with light red accents
- **Typography**: Outfit (display) + Sora (body)
- **Aesthetic**: Clean, modern, VC-backed founder level — no clutter

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replacing Content & Images

### 1. Personal info & links

Edit `src/lib/content.ts`:

- `SITE_CONFIG.email` — your email
- `SITE_CONFIG.github` — your GitHub URL
- `SITE_CONFIG.linkedin` — your LinkedIn URL
- `BUILDER_STATS` — projects shipped, hackathons, etc.
- `SKILLS` — languages, frameworks, tools
- `LOOKING_FOR` — what you’re looking for (internships, incubators, etc.)
- `SITE_CONFIG.startupName` — rename StartupOS to FounderOS or similar

### 2. Headshot

Place your headshot at:

```
/public/me.png
```

Used in the hero and about sections. Recommended: square, at least 400×400px.

### 3. Project images

For each project, add images under:

```
/public/projects/<slug>/
  hero.png   — case study hero (required)
  thumb.png  — card thumbnail (optional; fallback shown if missing)
  demo.gif   — optional demo (set hasDemo: true in content.ts)
```

Example slugs: `startupos`, `ndcutz`, `sbnj-aerospace`, `paw-services`.

### 4. Projects data

All project data lives in `src/lib/content.ts` in the `PROJECTS` array. Each project has:

- `slug`, `title`, `tagline`, `description`
- `role`, `stack`, `links`
- `featured` — show on home page
- `hasDemo` — show demo.gif in case study
- `overview`, `problem`, `solution`
- `keyDecisions`, `results`

## Project structure

```
src/
  app/           — routes (/, /projects, /projects/[slug], /contact)
  components/    — hero, project-card, featured-work, stats, about, skills, cta
  lib/           — content.ts (single source of truth), utils.ts
public/
  me.png         — your headshot
  projects/<slug>/ — hero.png, thumb.png, demo.gif
```

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- class-variance-authority, clsx, tailwind-merge

## Build & deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js host.
