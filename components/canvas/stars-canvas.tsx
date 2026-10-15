"use client"

import { PointMaterial, Points, Preload } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import type { Points as ThreePoints } from "three"
import { inSphere } from "maath/random"

function Stars(props: Record<string, unknown>) {
  const ref = useRef<ThreePoints>(null)
  const [sphere] = useState(
    () => inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array,
  )

  useFrame((_state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarsCanvas() {
  return (
    <Canvas className="h-full w-full" camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
