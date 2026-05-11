# Arittro Chowdhury — Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11-FF0054?style=for-the-badge&logo=framer&logoColor=white)

> A premium, high-end developer portfolio showcasing AI development, MLOps engineering, and creative web experiences.

---

## About This Portfolio

A distinctive, production-grade developer portfolio built with modern web technologies. The design emphasizes **premium aesthetics**, **smooth animations**, and **exceptional user experience** — avoiding generic "AI slop" design patterns in favor of a bold, memorable visual identity.

### Key Features

- **Dark Theme with Amber Accents** — Luxury tech aesthetic with golden highlights
- **3D Tilt Effects** — Mouse-tracking parallax on project cards
- **Custom Cursor** — Smooth trailing cursor animation
- **Horizontal Scroll Gallery** — GSAP-powered project showcase
- **Smooth Scrolling** — Lenis-powered fluid navigation
- **Responsive Design** — Mobile-first approach with accordion layouts
- **Performance Optimized** — 53.4 kB first load JS, Lighthouse-ready

---

## Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5 | React framework with App Router |
| TypeScript | 5.6 | Type-safe development |
| React | 18.3 | UI library |
| Tailwind CSS | 3.4 | Utility-first styling |

### Animation & Motion
| Technology | Purpose |
|------------|---------|
| Framer Motion | Page transitions, scroll animations, hover effects |
| GSAP ScrollTrigger | Horizontal scroll on project section |
| Lenis | Smooth scroll with custom easing |

### 3D & Creative
| Technology | Purpose |
|------------|---------|
| React Three Fiber | 3D backgrounds and effects |
| Three.js | WebGL rendering |

### UI & Icons
| Technology | Purpose |
|------------|---------|
| Lucide React | Consistent icon system |
| Google Fonts | Instrument Sans, Instrument Serif |

---

## Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout with providers
│   │   └── globals.css       # Global styles and CSS variables
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx      # Hero with name, role, CTAs
│   │   │   ├── About.tsx     # Background, education, stats
│   │   │   ├── Projects.tsx  # Horizontal scroll gallery
│   │   │   ├── Skills.tsx    # Categorized tech stack
│   │   │   └── Footer.tsx    # Contact, socials, CTA
│   │   ├── ui/
│   │   │   └── Navbar.tsx    # Fixed navigation with blur
│   │   └── canvas/
│   │       └── Scene.tsx     # 3D background components
│   ├── hooks/
│   │   └── useCursor.tsx     # Custom cursor hook
│   └── components/ui/
│       └── LenisProvider.tsx # Smooth scroll wrapper
├── tailwind.config.ts        # Custom design tokens
├── package.json
└── README.md
```

---

## Sections Overview

### 1. Hero Section
- Massive display typography with gradient text
- "Available for opportunities" status badge
- Specialization tag pills
- Parallax scroll effects
- Animated scroll indicator

### 2. About Section
- Professional bio with highlighted keywords
- Stats row (12+ Projects, 25+ Technologies, 4+ Years)
- Education cards with status indicators
- Hover glow effects

### 3. Projects Section
Four showcase projects with unique accent colors:

| Project | Accent | Description |
|---------|--------|-------------|
| **ReleasePilot** | Amber | K3s microservices platform with Prometheus observability |
| **House Price Oracle** | Purple | End-to-end MLOps pipeline with ZenML and MLflow |
| **Ascend the Pass** | Orange | WebGL interactive mountain experience with React Three Fiber |
| **MBFS Dashboard** | Pink | Enterprise Power BI dashboard for Mercedes-Benz Financial |

### 4. Skills Section
Categorized tech stack display:
- **Core Engineering** — Kubernetes, Docker, CI/CD, Terraform, GitOps
- **Data & ML** — ZenML, MLflow, Python, FastAPI, PostgreSQL
- **Creative Tech** — WebGL, Three.js, GSAP, Framer Motion, GLSL
- **Frontend** — React, Next.js, TypeScript, Tailwind, REST APIs

### 5. Footer
- Large CTA typography
- Contact information
- Social links (GitHub, LinkedIn)
- Back-to-top button

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/arittroc/arittroc_Portfolio_type1.git
cd arittroc_Portfolio_type1

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at [http://localhost:8200](http://localhost:8200)

### Build for Production

```bash
npm run build
npm start
```

---

## Design System

### Color Palette
| Variable | Value | Usage |
|----------|-------|-------|
| `--void` | #0A0A0B | Deep black background |
| `--surface` | #111113 | Card backgrounds |
| `--ink` | #FAFAF9 | Primary text |
| `--muted` | #71717A | Secondary text |
| `--amber` | #F59E0B | Primary accent |
| `--border` | rgba(250,250,249,0.08) | Subtle borders |

### Typography
- **Display**: Instrument Sans Bold
- **Body**: Instrument Sans Light/Regular
- **Accent**: Instrument Serif Italic

### Utilities
```css
.glass           /* Glassmorphism card */
.glass-strong    /* Stronger blur effect */
.text-gradient   /* Text gradient effect */
.glow-amber      /* Amber glow shadow */
```

---

## Problems & Solutions

During development, several challenges were encountered and resolved:

1. **Lucide Icons** — GitHub/Linkedin icons not exported in v1.14.0 → Created custom inline SVG components
2. **JSX in .ts files** — Next.js requires `.tsx` for JSX syntax → Renamed hook files
3. **GSAP Type Safety** — ScrollTrigger possibly null → Added optional chaining
4. **Mobile Horizontal Scroll** — Touch devices don't support GSAP horizontal scroll → Responsive detection with vertical fallback

---

## Performance

| Metric | Value |
|--------|-------|
| First Load JS | 53.4 kB |
| Total Bundle | 156 kB |
| Lighthouse Score | 90+ (target) |
| Static Generation | ✓ |

---

## Connect With Me

| Platform | Link |
|----------|------|
| GitHub | [github.com/arittroc](https://github.com/arittroc) |
| LinkedIn | [linkedin.com/in/arittroc](https://linkedin.com/in/arittroc) |
| Email | carittro@gmail.com |

---

## License

MIT License — feel free to use this portfolio as a template for your own.

---

*Crafted with care by Arittro Chowdhury*