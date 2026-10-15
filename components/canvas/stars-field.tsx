"use client"

import dynamic from "next/dynamic"
import { useNearViewport } from "@/components/hooks/use-near-viewport"

const StarsCanvas = dynamic(() => import("@/components/canvas/stars-canvas"), {
  ssr: false,
})

export function StarsField() {
  const { ref, visible } = useNearViewport("240px")

  return (
    <div ref={ref} className="pointer-events-none absolute inset-1 z-[-1] h-full w-auto">
      {visible ? <StarsCanvas /> : null}
    </div>
  )
}
