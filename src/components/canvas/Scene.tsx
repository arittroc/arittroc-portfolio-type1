'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { FloatingOrb } from './FloatingOrb'

export function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <FloatingOrb />
        </Suspense>
      </Canvas>
    </div>
  )
}
