"use client"

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error(`Unable to load ${src}`))
    image.src = src
  })
}

async function rasterizeSvg(src: string) {
  const response = await fetch(src)
  const markup = await response.text()
  const sizedMarkup = markup.replace(/<svg\b([^>]*)>/, (_match, attrs: string) =>
    /\swidth=/.test(attrs) ? `<svg${attrs}>` : `<svg width="256" height="256"${attrs}>`,
  )
  const objectUrl = URL.createObjectURL(
    new Blob([sizedMarkup], { type: "image/svg+xml" }),
  )

  try {
    const image = await loadImage(objectUrl)
    const canvas = document.createElement("canvas")
    canvas.width = 256
    canvas.height = 256
    const context = canvas.getContext("2d")
    if (!context) return src
    context.drawImage(image, 0, 0, 256, 256)
    return canvas.toDataURL("image/png")
  } finally {
    URL.revokeObjectURL(objectUrl)
  }
}

function useDecalSource(src: string) {
  const [source, setSource] = useState(src.endsWith(".svg") ? "" : src)

  useEffect(() => {
    if (!src.endsWith(".svg")) {
      setSource(src)
      return
    }

    let cancelled = false
    rasterizeSvg(src)
      .then((raster) => {
        if (!cancelled) setSource(raster)
      })
      .catch(() => {
        if (!cancelled) setSource(src)
      })

    return () => {
      cancelled = true
    }
  }, [src])

  return source
}

function Ball({ imgUrl }: { imgUrl: string }) {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight intensity={1} position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export default function BallCanvas({ icon }: { icon: string }) {
  const decalSource = useDecalSource(icon)
  if (!decalSource) return null

  return (
    <Canvas
      className="h-full w-full"
      frameloop="demand"
      dpr={[1, 1.25]}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={decalSource} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
