'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}

const SOCIAL_LINKS = [
  { icon: <GithubIcon className="w-5 h-5" />, href: 'https://github.com/arittroc', label: 'GitHub' },
  { icon: <LinkedinIcon className="w-5 h-5" />, href: 'https://linkedin.com/in/arittroc', label: 'LinkedIn' },
  { icon: <Mail className="w-5 h-5" />, href: 'mailto:carittro@gmail.com', label: 'Email' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: 'var(--void)' }}
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, var(--amber), transparent)',
        }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-amber font-light mb-6"
            style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}
          >
            04 — GET IN TOUCH
          </p>
          <h2
            className="text-ink font-bold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)', lineHeight: 0.9 }}
          >
            Let's build<br />
            <span className="text-gradient-amber">something great</span>
          </h2>
          <p className="text-muted font-light max-w-lg mx-auto mb-12 leading-relaxed">
            Open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:carittro@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 group"
            style={{
              backgroundColor: 'var(--ink)',
              color: 'var(--void)',
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start a conversation</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <a
            href="mailto:carittro@gmail.com"
            className="flex items-center gap-2 text-muted hover:text-ink transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">carittro@gmail.com</span>
          </a>
          <div className="w-px h-4 bg-muted/30 hidden sm:block" />
          <span className="flex items-center gap-2 text-muted">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Greater Noida, India</span>
          </span>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {SOCIAL_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 hover:border-amber hover:text-amber group"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--muted)',
                backgroundColor: 'rgba(250, 250, 249, 0.02)',
              }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <span className="group-hover:text-amber transition-colors">{link.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-muted text-xs font-light">
            &copy; 2024 Arittro Chowdhury. Crafted with care.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted text-xs font-light hover:text-ink transition-colors group"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}