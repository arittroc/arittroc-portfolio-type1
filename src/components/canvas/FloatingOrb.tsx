'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (meshRef.current) {
      // Soft pulsation
      const scale = 1 + Math.sin(t * 0.8) * 0.04
      meshRef.current.scale.setScalar(scale)
      // Slow drift
      meshRef.current.position.y = Math.sin(t * 0.3) * 0.15
      meshRef.current.rotation.y = t * 0.1
    }

    if (glowRef.current) {
      const glowScale = 1 + Math.sin(t * 0.8 + 0.5) * 0.06
      glowRef.current.scale.setScalar(glowScale * 1.35)
      glowRef.current.position.y = Math.sin(t * 0.3) * 0.15
    }
  })

  return (
    <group>
      {/* Ambient light */}
      <ambientLight intensity={0.15} />

      {/* Main blue point light — creates the halo */}
      <pointLight
        position={[0, 0, 2]}
        intensity={8}
        color="#4488ff"
        distance={12}
        decay={2}
      />

      {/* Secondary fill light */}
      <pointLight
        position={[-3, 2, 1]}
        intensity={3}
        color="#2244aa"
        distance={8}
        decay={2}
      />

      {/* Glow halo sphere (slightly larger, transparent) */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#1a3aff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          emissive="#1a3aff"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Main orb */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#0a1a6e"
          emissive="#1a4aff"
          emissiveIntensity={0.9}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.95}
        />
      </mesh>
    </group>
  )
}
