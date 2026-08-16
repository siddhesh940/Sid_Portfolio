# AGENTS.md

Siddhesh Patil's portfolio — "AI + Full-Stack Software Developer". Next.js 14 (App Router) + TypeScript (strict) + Tailwind v3 + Framer Motion, deployed to Vercel.

## Commands

- `npm run dev` — dev server (port 3000)
- `npm run build` — production build (must pass before considering work done)
- `npm run lint` — ESLint (`next lint`; `next/core-web-vitals` + `next/typescript`)
- `npx tsc --noEmit` — typecheck (no npm script exists; run this explicitly)

No test framework exists. Verify changes via `npm run lint`, `npx tsc --noEmit`, and `npm run build`.

## CRITICAL: `portfolio/` is a stale duplicate

A commit (`9176261`) moved the app from `portfolio/` to the repo root. `portfolio/` still holds an old tracked copy of the whole site (its own `src/`, `public/`, `.env.local`, Geist fonts). **Never edit `portfolio/`** — the live app is `src/`. Grep results and file listings will show both; always verify the path starts with `src/`.

## Architecture

- Home (`src/app/page.tsx`) stacks section components from `src/sections/`. Separate pages exist for `/about`, `/skills`, `/projects` + `/projects/[slug]`, `/blogs` + `/blogs/[slug]`, `/experience`, `/education`, `/achievements`, `/contact`, `/resume`.
- Cinematic story on home: `ScrollStory` (`src/components/scroll/`) observes section ids (`hero`→`about`→`skills`→`engineer`→`ai-stack`→`projects`→`experience`→`education`→`achievements`→`final-cta`) and drives the `00–09` side rail + background tint. Keep those ids in sync if you rename/reorder sections.
- Sections beyond the story: `#architecture` (SystemArchitectureSection), `#terminal` (TerminalSection), plus github/blogs/resume/contact ids used by Navbar scroll-spy.
- Project images open a preview modal (`src/components/projects/ProjectModal.tsx`, ESC/+/-/backdrop; body scroll locked). It is rendered as a sibling of each card (never inside the card's `motion.div`) so its `position: fixed` isn't broken by card transforms.
- `@/*` → `./src/*` (tsconfig). Tailwind `content` only scans `./src/**` — classes in `portfolio/` or other dirs won't be generated.
- Nearly every component is `"use client"`; keep client/server boundaries in mind when adding code. `react-github-calendar` is loaded via `next/dynamic({ ssr: false })` (GithubActivity).
- Theme: `darkMode: "class"` (ThemeProvider). Custom palette tokens: `primary-*`, `dark-*`, `light-*`. Fonts loaded via `next/font/google` (Poppins + Inter) in `src/app/layout.tsx`.
- The 3D hero (`src/components/hero/EngineeringCore.tsx`) is pure CSS 3D transforms + Framer Motion springs with `ec-*` keyframes in `globals.css` — **not** WebGL. Three.js/R3F are installed but currently unused; don't add heavy 3D without checking perf. Global `prefers-reduced-motion` handling lives in `globals.css`.
- Orphaned duplicate files exist at `src/components/RouteProgress.tsx` and `src/components/ui/CustomCursor.tsx` (unused). The wired versions are `src/components/navigation/RouteProgress.tsx` and `src/components/CustomCursor.tsx`.
- New sections use the shared `SectionHeading` (`src/components/ui/SectionHeading.tsx`) which renders the story number/label + gradient underline. Skills cross-highlight state lives in `SkillsSection` and flows down through `SkillCard`/`SkillCategory`/`SkillIcon` (`dimmed`/`active` props).

## Content rules (non-negotiable)

- **Resume:** every resume link/button (Navbar, HeroButtons, ContactInfo, ResumeSection, AboutPageContent, portfolioAI) must point to `/Resume/Siddhesh_Patil_Software_Developer.pdf` (served from `public/Resume/`). Never wire `Siddhesh_Patil_GenAI.pdf` to UI actions — it's content-reference only.
- **No fabrication:** projects, experience, achievements, links, and tech stacks already exist and must be preserved. Never invent metrics. The one supported metric: Mauli Infotech AWR/ASH pipeline cut analysis "from hours to under 4 minutes".
- **Education:** degree must show **CGPA: 8.30** (never 7.91 or "Upto 7th Semester"). HSC 65.73%, SSC 90.00%.
- Content sources: root `Projects/Projects.md`, `Experience/EXPERIENCE.md`, `Achievments/ACHIEVEMENTS.md`, both `Resume/*.pdf`, plus `src/lib/` data files (`projectsData.ts`, `blogData.ts`, `portfolioAI.ts`). Update `portfolioAI.ts` knowledge base when facts change so the chatbot stays consistent.

## Gotchas

- Contact form (EmailJS) requires `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`; no root `.env` is tracked (`.env*.local` gitignored).
- Custom cursor (`src/components/CustomCursor.tsx`) is desktop-only, respects `prefers-reduced-motion`, and must not interfere with touch devices.
- SEO/metadata + JSON-LD are centralized in `src/app/layout.tsx`; update there, not per-page.
- Vercel auto-deploys on push to `main` (project `sid-portfolio-app`). Verify `npm run build` before pushing.
