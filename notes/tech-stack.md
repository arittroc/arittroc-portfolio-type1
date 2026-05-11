# Tech Stack Reference

## Core Framework
- **Next.js 14+** (App Router) — `next@14.2.x`
- **TypeScript** — strict typing throughout, no `any`
- **React 18** — concurrent features, Suspense boundaries

## Styling
- **Tailwind CSS 3** — utility classes, custom theme extension
- **OKLCH color tokens** — defined as CSS custom properties in globals.css
  - `--apple-bg`: oklch(18% 0.012 250) — near-black navy
  - `--apple-surface`: oklch(12% 0.012 250) — darker surface
  - `--apple-fg`: oklch(99% 0.002 240) — near-white
  - `--apple-muted`: oklch(54% 0.012 250) — muted grey
  - `--apple-border`: oklch(25% 0.012 250) — subtle border
  - `--apple-accent`: oklch(58% 0.18 255) — blue accent
- **Inter font** — weights 300, 400, 600, 800 via Google Fonts

## 3D / WebGL
- **Three.js** — base 3D library
- **@react-three/fiber** — React renderer for Three.js
- **@react-three/drei** — helper abstractions (Environment, etc.)

## Animation
- **GSAP + ScrollTrigger** — horizontal scroll pinning in Projects section
- **Framer Motion** — entrance reveals (hero text, skill cards stagger)
- **@studio-freight/lenis** — smooth inertia scrolling

## Key Version Targets
```json
{
  "next": "14.2.29",
  "react": "^18.3.1",
  "three": "^0.169.0",
  "@react-three/fiber": "^8.17.10",
  "@react-three/drei": "^9.117.3",
  "gsap": "^3.12.5",
  "framer-motion": "^11.11.11",
  "@studio-freight/lenis": "^1.1.14",
  "tailwindcss": "^3.4.14",
  "typescript": "^5.6.3"
}
```

## Architecture Notes
- All interactive/3D components must have `"use client"` directive
- R3F Canvas must be wrapped in `<Suspense fallback={null}>`
- Canvas uses `dpr={[1, 2]}` for retina display sharpness
- Lenis initialized globally in `layout.tsx` via a provider component
- ScrollTrigger registered once in Projects component on mount
