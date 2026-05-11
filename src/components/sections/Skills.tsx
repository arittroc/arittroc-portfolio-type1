'use client'

import { motion } from 'framer-motion'
import { Server, Cpu, Palette, Code2, Database, Cloud, Box, Layers } from 'lucide-react'

interface SkillGroup {
  category: string
  icon: React.ReactNode
  skills: string[]
  accent: string
  description: string
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Core Engineering',
    icon: <Server className="w-6 h-6" />,
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform', 'GitOps'],
    description: 'Infrastructure as code, cloud-native deployments',
    accent: '#F59E0B',
  },
  {
    category: 'Data & ML',
    icon: <Cpu className="w-6 h-6" />,
    skills: ['ZenML', 'MLflow', 'Python', 'FastAPI', 'PostgreSQL'],
    description: 'End-to-end ML pipelines and model serving',
    accent: '#8B5CF6',
  },
  {
    category: 'Creative Tech',
    icon: <Palette className="w-6 h-6" />,
    skills: ['WebGL', 'Three.js', 'GSAP', 'Framer Motion', 'GLSL'],
    description: 'Immersive web experiences and 3D interfaces',
    accent: '#F97316',
  },
  {
    category: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'REST APIs'],
    description: 'Modern web applications and UI systems',
    accent: '#22C55E',
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: 'var(--void)' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250, 250, 249, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250, 250, 249, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.03), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-amber font-light mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}
          >
            03 — CAPABILITIES
          </p>
          <h2
            className="text-ink font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
          >
            Tech Stack
          </h2>
          <p className="text-muted font-light mt-4 max-w-xl mx-auto">
            A curated toolkit built through real-world projects and continuous learning
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <SkillCard group={group} />
            </motion.div>
          ))}
        </div>

        {/* Tech logos / badges section */}
        <motion.div
          className="mt-20 pt-16 border-t"
          style={{ borderColor: 'var(--border)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-center text-muted text-sm tracking-widest mb-10">
            TECHNOLOGIES I WORK WITH
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {TECH_LOGOS.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 hover:border-amber/30 group"
                style={{ borderColor: 'var(--border)', backgroundColor: 'rgba(250, 250, 249, 0.02)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -2 }}
              >
                <span className="text-lg">{tech.emoji}</span>
                <span className="text-muted text-sm font-light group-hover:text-ink transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div
      className="relative rounded-3xl p-8 h-full overflow-hidden group cursor-default"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Hover glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${group.accent}15, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
          style={{
            backgroundColor: `${group.accent}15`,
            border: `1px solid ${group.accent}30`,
          }}
        >
          <div style={{ color: group.accent }}>{group.icon}</div>
        </div>

        {/* Category */}
        <h3 className="text-ink font-semibold text-xl tracking-tight mb-2">{group.category}</h3>
        <p className="text-muted text-sm font-light mb-6">{group.description}</p>

        {/* Skills list */}
        <div className="space-y-3">
          {group.skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ backgroundColor: group.accent }}
              />
              <span className="text-muted text-sm font-light group-hover:text-ink transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5"
        style={{
          background: `linear-gradient(to right, ${group.accent}, transparent)`,
          width: '0%',
        }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${group.accent}10, transparent 60%)`,
        }}
      />
    </div>
  )
}

const TECH_LOGOS = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Kubernetes', emoji: '☸️' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'Three.js', emoji: '🎮' },
  { name: 'Framer', emoji: '🎭' },
  { name: 'ZenML', emoji: '🔮' },
  { name: 'Git', emoji: '📦' },
]