"use client"

import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

function Computers({ isMobile }: { isMobile: boolean }) {
  const computer = useGLTF("/desktop_pc/scene.gltf")

  return (
    <>
      <ambientLight />
      <pointLight intensity={4} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <directionalLight intensity={2} />
      <mesh>
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={5}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.5 : 0.7}
          position={isMobile ? [0, -3, -1] : [0, -3.5, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  )
}

export default function ComputersCanvas({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas
      className="h-full w-full"
      frameloop="demand"
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

useGLTF.preload("/desktop_pc/scene.gltf")
