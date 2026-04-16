# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check + production build (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

There are no tests in this project.

## Architecture

Single-page personal website built with React 19, TypeScript, Vite, and Tailwind CSS v4.

**Page structure** — `App.tsx` renders five full-page sections in order: `HeroSection → TimelineSection → VisionSection → SituationSection → ContactSection`. Each section lives under `src/sections/<Name>/`.

**Scroll-reveal animation pattern** — Elements that should animate in on scroll are wrapped in `<RevealOnScroll>` (from `src/components/Reveal/RevealOnScroll.tsx`). It uses the `useInViewOnce` hook (`src/hooks/useInViewOnce.ts`), which fires an `IntersectionObserver` once and never resets. The actual animation is driven by CSS classes `reveal-hidden` / `reveal-pop` defined in `src/index.css`. A separate `droplet-pop` animation (with `droplet-from-left` / `droplet-from-right` variants) is used for circle/icon elements.

**Styling** — Tailwind CSS v4 (PostCSS plugin, not the v3 CLI). Custom CSS variables for colors and fonts are declared in `src/index.css` under `@layer base`. Custom utility classes (fonts, animations) are added under `@layer utilities`. Three font stacks are available as utilities: `font-didot`, `font-cardo`, `font-cormorant`. The `cn()` helper (`src/lib/cn.ts`) is a minimal className joiner — no external dependency.

**Component exports** — All reusable components are re-exported from `src/components/index.ts`. Sections are re-exported from `src/sections/index.ts`.

**Icons** — SVG sprite at `public/icons.svg`; individual icons are referenced via `<use href="/icons.svg#icon-name">`.
