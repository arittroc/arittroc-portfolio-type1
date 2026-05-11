'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, ArrowUpRight, Layers, Cloud, Box, BarChart3, Cpu, Sparkles, Zap } from 'lucide-react'
import { useCursor } from '@/hooks/useCursor'

interface Project {
  num: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  tags: string[]
  icon: React.ReactNode
  accent: string
  gradient: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'ReleasePilot',
    subtitle: 'Cloud-Native Release Monitoring',
    description: 'K3s microservices platform with Prometheus observability, Traefik ingress, and self-hosted GitHub Actions runners.',
    longDescription: 'A production-grade platform providing real-time fleet status, automated incident tracking, and zero-downtime deployment orchestration. Features rolling updates with imagePullPolicy: Always, Kubernetes secrets management, and Discord alerting via Grafana webhooks.',
    tags: ['Kubernetes', 'K3s', 'Prometheus', 'GitOps', 'PostgreSQL', 'Traefik'],
    icon: <Cloud className="w-8 h-8" />,
    accent: '#F59E0B',
    gradient: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245, 158, 11, 0.2), transparent)',
    link: 'https://github.com/arittroc/releasepilot',
  },
  {
    num: '02',
    title: 'House Price Oracle',
    subtitle: 'MLOps Pipeline for Indian Real Estate',
    description: 'End-to-end ML pipeline orchestrated with ZenML, tracked via MLflow. Automated feature engineering and REST API serving.',
    longDescription: 'A comprehensive ML system handling Indian housing market data through automated feature pipelines, model versioning with MLflow, and FastAPI-based inference serving. Implements cross-validation, hyperparameter tuning, and A/B testing capabilities.',
    tags: ['ZenML', 'MLflow', 'Python', 'FastAPI', 'Scikit-learn', 'Pandas'],
    icon: <Cpu className="w-8 h-8" />,
    accent: '#8B5CF6',
    gradient: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.2), transparent)',
    link: 'https://github.com/arittroc/ml-price-prediction',
  },
  {
    num: '03',
    title: 'Ascend the Pass',
    subtitle: 'Interactive Web Experience — Nathu La',
    description: 'High-fidelity WebGL experience of the historic mountain pass with procedural terrain and atmospheric effects.',
    longDescription: 'An immersive 3D visualization recreating the Nathu La pass on the India-China border. Features procedural terrain generation, dynamic weather simulation, atmospheric scattering, and spatial audio. Built with React Three Fiber for WebGL rendering.',
    tags: ['WebGL', 'React Three Fiber', 'GSAP', 'Three.js', 'GLSL'],
    icon: <Box className="w-8 h-8" />,
    accent: '#F97316',
    gradient: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249, 115, 22, 0.2), transparent)',
    link: 'https://github.com/arittroc/ascend-the-pass',
  },
  {
    num: '04',
    title: 'MBFS Dashboard',
    subtitle: 'Mercedes-Benz Financial Services',
    description: 'Enterprise Power BI dashboard tracking sales pipeline, payments, and portfolio performance across regions.',
    longDescription: 'A comprehensive business intelligence platform for Mercedes-Benz Financial Services India. Features executive KPI dashboards, automated report generation, cross-regional data consolidation, and predictive analytics for payment collection optimization.',
    tags: ['Power BI', 'DAX', 'SQL Server', 'ETL', 'SSIS'],
    icon: <BarChart3 className="w-8 h-8" />,
    accent: '#EC4899',
    gradient: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(236, 72, 153, 0.2), transparent)',
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile || !sectionRef.current || !trackRef.current) return

    let gsapModule: typeof import('gsap') | null = null
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger | null = null

    const loadGsap = async () => {
      gsapModule = await import('gsap')
      const st = await import('gsap/ScrollTrigger')
      ScrollTrigger = st.ScrollTrigger
      gsapModule.gsap.registerPlugin(ScrollTrigger)

      const totalWidth = trackRef.current!.scrollWidth - window.innerWidth

      const tween = gsapModule.gsap.fromTo(
        trackRef.current,
        { x: 0 },
        {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=2500',
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      )

      return () => {
        tween.kill()
        ScrollTrigger?.getAll().forEach((st) => st.kill())
      }
    }

    let cleanup: (() => void) | undefined
    loadGsap().then((c) => { cleanup = c })

    return () => cleanup?.()
  }, [isMobile])

  if (isMobile) {
    return (
      <section
        id="work"
        className="relative py-32 px-6"
        style={{ backgroundColor: 'var(--void)' }}
      >
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-amber font-light mb-4" style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}>
            02 — SELECTED WORK
          </p>
          <h2 className="text-ink font-bold tracking-tight" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>
            Projects
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCardMobile
              key={project.num}
              project={project}
              index={i}
              isActive={activeProject === i}
              onHover={() => setActiveProject(i)}
              onLeave={() => setActiveProject(null)}
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Section label */}
      <div className="absolute top-10 left-10 z-20">
        <motion.p
          className="text-amber font-light mb-2"
          style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          02 — SELECTED WORK
        </motion.p>
        <motion.h2
          className="text-ink font-bold tracking-tight"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-10 left-10 z-20 flex items-center gap-4">
        <div
          className="h-px bg-muted/30"
          style={{ width: '100px' }}
        />
        <span className="text-muted text-xs tracking-widest">SCROLL</span>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center"
        style={{ paddingLeft: '15vw', paddingRight: '15vw', width: 'max-content' }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            isActive={activeProject === i}
            onHover={() => setActiveProject(i)}
            onLeave={() => setActiveProject(null)}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  project: Project
  index: number
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-[2.5rem] flex-shrink-0 overflow-hidden cursor-pointer group"
      style={{
        height: '70vh',
        width: 'clamp(500px, 60vw, 800px)',
        marginRight: 'clamp(2rem, 5vw, 6rem)',
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={() => {
        onLeave()
        mouseX.set(0)
        mouseY.set(0)
      }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: project.gradient,
          opacity: isActive ? 1 : 0.3,
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-between p-12" style={{ transform: 'translateZ(50px)' }}>
        {/* Top section */}
        <div>
          {/* Number and icon row */}
          <div className="flex items-start justify-between mb-8">
            <span
              className="font-bold text-[6rem] leading-none select-none"
              style={{ color: 'rgba(245, 158, 11, 0.08)' }}
            >
              {project.num}
            </span>
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
              style={{
                backgroundColor: isActive ? `${project.accent}20` : 'rgba(250, 250, 249, 0.05)',
                border: `1px solid ${isActive ? project.accent + '40' : 'var(--border)'}`,
              }}
            >
              <motion.div
                style={{ color: isActive ? project.accent : 'var(--muted)' }}
                animate={{ scale: isActive ? 1.1 : 1 }}
              >
                {project.icon}
              </motion.div>
            </motion.div>
          </div>

          {/* Title and subtitle */}
          <div>
            <h3
              className="text-ink font-bold tracking-tight leading-tight mb-2"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {project.title}
            </h3>
            <p
              className="font-light tracking-wide mb-6"
              style={{
                color: project.accent,
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              }}
            >
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Middle section - Description */}
        <div className="flex-1 flex items-center">
          <motion.p
            className="text-muted font-light leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
            animate={{ opacity: isActive ? 1 : 0.7 }}
          >
            {isActive ? project.longDescription : project.description}
          </motion.p>
        </div>

        {/* Bottom section */}
        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.slice(0, isActive ? undefined : 4).map((tag) => (
              <motion.span
                key={tag}
                className="px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(250, 250, 249, 0.03)',
                  borderColor: isActive ? `${project.accent}40` : 'var(--border)',
                  color: isActive ? project.accent : 'var(--muted)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
            {!isActive && project.tags.length > 4 && (
              <span className="text-muted text-xs">+{project.tags.length - 4}</span>
            )}
          </div>

          {/* CTA link */}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
              style={{ color: isActive ? project.accent : 'var(--muted)' }}
              whileHover={{ x: 4 }}
            >
              <span>View Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Hover accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

function ProjectCardMobile({
  project,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  project: Project
  index: number
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => setExpanded(!expanded)}
      style={{
        border: '1px solid var(--border)',
      }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: project.gradient,
          opacity: isActive ? 0.5 : 0.2,
        }}
      />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-muted text-xs font-light tracking-widest mb-2 block">{project.num}</span>
            <h3 className="text-ink font-bold text-2xl tracking-tight">{project.title}</h3>
            <p className="text-muted text-sm mt-1">{project.subtitle}</p>
          </div>
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: `${project.accent}15`,
              color: project.accent,
            }}
          >
            {project.icon}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted font-light leading-relaxed mb-6">
          {expanded ? project.longDescription : project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs border"
              style={{
                borderColor: `${project.accent}30`,
                color: project.accent,
                backgroundColor: `${project.accent}08`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: project.accent }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>View on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}