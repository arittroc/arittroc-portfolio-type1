'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, Globe } from 'lucide-react'

const STATS = [
  { label: 'Projects Shipped', value: '12+' },
  { label: 'Technologies', value: '25+' },
  { label: 'Years Learning', value: '4+' },
]

const EDUCATION = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Galgotias University',
    location: 'Greater Noida, India',
    period: '2024 — Present',
    status: 'Current',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Amity University Kolkata',
    location: 'Kolkata, India',
    period: '2021 — 2024',
    status: 'Completed',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: 'var(--void)' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(245, 158, 11, 0.03), transparent)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-amber font-light mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}
          >
            01 — BACKGROUND
          </p>
          <h2
            className="text-ink font-bold tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
          >
            About Me
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - Bio */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Large decorative number */}
              <span
                className="absolute -top-12 -left-4 font-bold text-[8rem] leading-none select-none pointer-events-none"
                style={{ color: 'rgba(245, 158, 11, 0.05)' }}
              >
                A
              </span>

              <p className="relative text-ink text-lg md:text-xl font-light leading-relaxed mb-8">
                I'm <span className="text-amber font-medium">Arittro Chowdhury</span>, a technology
                professional and MCA student at Galgotias University, passionate about building
                intelligent systems at the intersection of <span className="text-gradient-amber">cloud infrastructure</span> and{' '}
                <span className="text-gradient-amber">machine learning</span>.
              </p>

              <p className="relative text-muted font-light leading-relaxed mb-8">
                My work spans designing production-grade ML pipelines, creating immersive web
                experiences with WebGL, and orchestrating cloud-native microservices. I'm
                particularly interested in the intersection of elegant engineering and beautiful
                design — where systems thinking meets aesthetic sensibility.
              </p>

              <p className="relative text-muted font-light leading-relaxed">
                Currently focused on mastering the full lifecycle of ML systems: from data
                pipelines and model training to deployment and monitoring. Every project I take
                on is an opportunity to push boundaries and create something memorable.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-amber font-bold text-3xl mb-1">{stat.value}</div>
                  <div className="text-muted text-xs tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Education cards */}
          <div className="lg:col-span-5 space-y-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="glass rounded-3xl p-8 relative overflow-hidden group"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, var(--amber-dim), transparent 60%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                        style={{
                          backgroundColor: 'var(--amber-dim)',
                          color: 'var(--amber)',
                        }}
                      >
                        {edu.short}
                      </span>
                      <h3 className="text-ink font-semibold text-lg leading-tight">{edu.degree}</h3>
                    </div>
                    <span
                      className="text-xs font-medium px-2 py-1 rounded"
                      style={{
                        backgroundColor: edu.status === 'Current' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(113, 113, 122, 0.15)',
                        color: edu.status === 'Current' ? '#22c55e' : 'var(--muted)',
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-amber" />
                    <span className="text-muted text-sm">{edu.institution}</span>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to right, transparent, var(--amber), transparent)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}