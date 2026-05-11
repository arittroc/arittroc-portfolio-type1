'use client'

import { Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

export function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const y = useTransform(scrollY, [0, 400], [0, 100])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '700px' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250, 250, 249, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250, 250, 249, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Amber gradient orb - top right */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--amber-dim) 0%, transparent 70%)',
          top: '-20%',
          right: '-10%',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary glow - bottom left */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Foreground content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl"
        style={{ opacity, y }}
      >
        {/* Status badge */}
        <motion.div
          className="flex items-center gap-2 mb-12 px-4 py-2 rounded-full border"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'rgba(245, 158, 11, 0.05)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="text-amber text-xs font-medium tracking-wide">Available for opportunities</span>
        </motion.div>

        {/* Main name - massive display typography */}
        <motion.h1
          className="font-bold tracking-tighter leading-[0.85] text-center"
          style={{
            fontSize: 'clamp(4rem, 15vw, 12rem)',
            letterSpacing: '-0.03em',
          }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient">Arittro</span>
          <br />
          <span
            className="text-gradient-amber"
            style={{
              WebkitTextStroke: '1px rgba(245, 158, 11, 0.3)',
            }}
          >
            Chowdhury
          </span>
        </motion.h1>

        {/* Role / tagline */}
        <motion.p
          className="mt-8 text-muted font-light tracking-wide"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '0.1em' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Technology Professional & MCA Student
        </motion.p>

        {/* Tagline cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <TagPill icon={<Sparkles className="w-3 h-3" />} text="AI Development" />
          <TagPill text="Cloud Infrastructure" />
          <TagPill text="MLOps Engineering" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center gap-4 mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#work"
            className="group relative px-8 py-4 rounded-full font-medium text-sm tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--ink)',
              color: 'var(--void)',
            }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: 'var(--amber)' }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="mailto:carittro@gmail.com"
            className="px-8 py-4 rounded-full font-medium text-sm tracking-wide border transition-all duration-300 hover:border-amber hover:text-amber"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--muted)',
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-muted font-light" style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function TagPill({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full border"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'rgba(250, 250, 249, 0.02)',
      }}
    >
      {icon && <span className="text-amber">{icon}</span>}
      <span className="text-muted text-xs font-light tracking-wide">{text}</span>
    </div>
  )
}