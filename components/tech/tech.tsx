"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useNearViewport } from "@/components/hooks/use-near-viewport"
import { withSection } from "@/components/section-wrapper"
import type { Technology } from "@/lib/portfolio-data"

const BallCanvas = dynamic(() => import("@/components/canvas/ball-canvas"), {
  ssr: false,
})

function TechSection({ technologies }: { technologies: Technology[] }) {
  const { ref, visible } = useNearViewport()

  return (
    <div ref={ref} className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          {visible ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <Image
              src={technology.icon}
              alt={technology.name}
              width={80}
              height={80}
              className="h-full w-full object-contain p-4"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export const Tech = withSection(TechSection)
