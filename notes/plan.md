# A-Z Execution Plan

## Phase 1 — Project Scaffolding
1. `package.json` — all deps with exact versions
2. `tsconfig.json` — strict TS config for Next.js App Router
3. `next.config.mjs` — Next.js config (transpile Three.js packages)
4. `tailwind.config.ts` — extend theme with apple-* color tokens
5. `postcss.config.mjs` — Tailwind + autoprefixer

## Phase 2 — Global Styles & Fonts
6. `src/app/globals.css`
   - CSS custom properties (OKLCH tokens)
   - `.glass` glassmorphism utility
   - `.text-gradient` utility
   - Custom scrollbar styles
   - Base resets

## Phase 3 — App Shell
7. `src/app/layout.tsx`
   - Inter font import
   - Lenis SmoothScrollProvider wrapping `<body>`
   - Global metadata (title, description)
8. `src/app/page.tsx`
   - Renders: Navbar + Hero + Projects + Skills

## Phase 4 — Hooks
9. `src/hooks/useSmoothScroll.ts`
   - Lenis instance creation
   - RAF (requestAnimationFrame) loop that ticks Lenis
   - Returns lenis instance for use in layout

## Phase 5 — UI Primitives
10. `src/components/ui/Navbar.tsx`
    - Fixed top bar, frosted glass
    - Left: ARITTRO brand
    - Center: smooth-scroll nav links
    - Right: Get in Touch pill button (mailto:)
11. `src/components/ui/GlassCard.tsx`
    - Reusable glassmorphism card component
    - Accepts className + children

## Phase 6 — 3D Canvas
12. `src/components/canvas/FloatingOrb.tsx`
    - `useFrame` oscillation: scale = 1 + sin(clock * 0.8) * 0.04
    - MeshStandardMaterial with emissive blue matching --apple-accent
    - Ambient light + PointLight for halo glow
13. `src/components/canvas/Scene.tsx`
    - R3F `<Canvas>` wrapper: `dpr={[1, 2]}`, `camera={{ position: [0,0,5] }}`
    - Wrapped in `<Suspense fallback={null}>`
    - Renders FloatingOrb

## Phase 7 — Sections
14. `src/components/sections/Hero.tsx`
    - Full-viewport height
    - Scene (absolute, z-0, full bleed)
    - Framer Motion text: "Arittro C." (delay 0.2s) + subtitle (delay 0.5s)
    - Scroll indicator: vertical line + "SCROLL TO EXPLORE"
15. `src/components/sections/Projects.tsx`
    - GSAP ScrollTrigger horizontal pin setup in useEffect
    - `w-[400vw]` inner track
    - 5 GlassCard project tiles
    - Giant faded number, tag pills, title, description
16. `src/components/sections/Skills.tsx`
    - "Technical Matrix" heading
    - 4-column responsive grid
    - 4 skill cards with SVG icons, stagger Framer Motion reveal
    - Hover: border glow + icon bg lift

## Phase 8 — Polish & Type Safety
17. Audit all files for TypeScript errors
18. Ensure all interactive components have `"use client"`
19. Ensure Suspense boundaries around R3F
20. Test mobile breakpoints (1-col sm, 2-col md, 4-col lg for skills)
21. Verify all section `id` attrs match navbar scroll targets:
    - `id="experience"` → Projects
    - `id="infrastructure"` → (can map to Skills or a future section)
    - `id="matrix"` → Skills

## File Tree (Final)
```
D:\vibecoding\Portfolio\
├── notes/
│   ├── overview.md
│   ├── tech-stack.md
│   └── plan.md
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── FloatingOrb.tsx
│   │   │   └── Scene.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   └── ui/
│   │       ├── GlassCard.tsx
│   │       └── Navbar.tsx
│   └── hooks/
│       └── useSmoothScroll.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Status Tracking
- [x] Notes created
- [ ] package.json
- [ ] tsconfig.json
- [ ] next.config.mjs
- [ ] tailwind.config.ts
- [ ] postcss.config.mjs
- [ ] globals.css
- [ ] layout.tsx
- [ ] page.tsx
- [ ] useSmoothScroll.ts
- [ ] Navbar.tsx
- [ ] GlassCard.tsx
- [ ] FloatingOrb.tsx
- [ ] Scene.tsx
- [ ] Hero.tsx
- [ ] Projects.tsx
- [ ] Skills.tsx
