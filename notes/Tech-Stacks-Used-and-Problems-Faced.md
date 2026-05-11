# Tech Stack & Problems Faced

## Technologies Used

### Core Framework
- **Next.js 15.5.15** (App Router)
- **React 18.3.1**
- **TypeScript 5.6.3**

### Styling
- **Tailwind CSS 3.4.14**
- Custom CSS variables for theming
- CSS utilities for gradients and glass effects

### Animations
- **Framer Motion 11.11.11** — Page transitions, hover effects, scroll animations
- **GSAP 3.12.5** + ScrollTrigger — Horizontal scroll on projects section
- **Lenis 1.1.14** — Smooth scrolling

### 3D & Creative
- **React Three Fiber 8.17.10** — 3D backgrounds (via existing components)
- **Three.js 0.169.0** — WebGL rendering

### Icons
- **Lucide React 1.14.0** — UI icons

### Other
- **Google Fonts** — Instrument Sans, Instrument Serif

---

## Problems Faced & Solutions

### Problem 1: Lucide React Icon Export Names
**Issue:** Icons like `Github` and `Linkedin` were not exported from `lucide-react` v1.14.0

**Error:**
```
Module '"lucide-react"' has no exported member 'Github'
```

**Solution:**
- Created custom inline SVG components for GitHub and LinkedIn
- Added these as `GithubIcon` and `LinkedinIcon` functions in Footer.tsx

```typescript
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626..."/>
    </svg>
  )
}
```

---

### Problem 2: useCursor Hook JSX Syntax Error
**Issue:** Created `useCursor.ts` but Next.js requires `.tsx` extension for JSX/TSX files

**Error:**
```
Error: Expression expected
    78 |     <>
    79 |       {children}
```

**Solution:**
- Renamed file from `useCursor.ts` to `useCursor.tsx`
- Next.js TypeScript config requires proper extensions for files containing JSX

---

### Problem 3: GSAP ScrollTrigger Type Error
**Issue:** `ScrollTrigger` could be null during async import

**Error:**
```
Type error: 'ScrollTrigger' is possibly 'null'.
```

**Solution:**
- Added optional chaining: `ScrollTrigger?.getAll()`

```typescript
return () => {
  tween.kill()
  ScrollTrigger?.getAll().forEach((st) => st.kill())
}
```

---

### Problem 4: Lucide Icons Missing in Projects.tsx
**Issue:** Accidentally imported `ExternalLink` and `Github` from lucide-react which didn't exist

**Solution:**
- Removed unused imports, kept only needed icons: `Layers, Cloud, Box, BarChart3`

---

### Problem 5: Port Already in Use
**Issue:** Dev server failed to start because previous instance was still running

**Error:**
```
Error: listen EADDRINUSE: address already in use :::8200
```

**Solution:**
- No action needed — server was already running
- Existing process handles new requests

---

### Problem 6: Horizontal Scroll on Mobile
**Issue:** GSAP horizontal scroll doesn't work well on touch devices

**Solution:**
- Added responsive detection with `useState` and `useEffect`
- Mobile devices (<1024px) use vertical stacked layout instead
- Desktop uses horizontal scroll with GSAP ScrollTrigger

```typescript
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 1024)
  checkMobile()
  window.addEventListener('resize', checkMobile)
  return () => window.removeEventListener('resize', checkMobile)
}, [])
```

---

## Lessons Learned

1. **Always check library versions** — Icon names and exports can vary between versions
2. **TypeScript strict mode** — Handle nullable values with optional chaining
3. **File extensions matter** — Use `.tsx` for files containing JSX
4. **Mobile-first approach** — Test horizontal scroll behaviors across devices
5. **Async imports** — GSAP and similar libraries may need dynamic imports for SSR compatibility

---

## Future Improvements

- Add loading skeletons for better perceived performance
- Implement dark/light theme toggle
- Add more project detail pages
- Integrate contact form
- Add blog section for technical articles

---

*Last Updated: 2024*