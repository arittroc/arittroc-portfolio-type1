'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export function useCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const trailRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleElementMouseEnter = () => setIsHovering(true)
    const handleElementMouseLeave = () => setIsHovering(false)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleElementMouseEnter)
      el.addEventListener('mouseleave', handleElementMouseLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Smooth cursor animation
    let rafId: number
    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.15
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.15

      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`
      }

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(rafId)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementMouseEnter)
        el.removeEventListener('mouseleave', handleElementMouseLeave)
      })
    }
  }, [])

  return { position, isHovering, isClicking, isVisible, trailRef }
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const { position, isHovering, isClicking, isVisible, trailRef } = useCursor()

  return (
    <>
      {children}
      {/* Custom cursor */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Main cursor dot */}
        <div
          className="absolute w-3 h-3 rounded-full transition-all duration-150"
          style={{
            backgroundColor: isHovering ? 'var(--amber)' : 'var(--ink)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
        {/* Outer ring */}
        <div
          className="absolute w-10 h-10 rounded-full border transition-all duration-300"
          style={{
            borderColor: isHovering ? 'var(--amber)' : 'rgba(250, 250, 249, 0.3)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            opacity: isClicking ? 0.5 : 1,
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          }}
        />
      </div>
    </>
  )
}