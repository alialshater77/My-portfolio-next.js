"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useMobile } from "@/components/hooks/use-mobile"
import { fadeIn } from "@/lib/motion"
import { styles } from "@/lib/styles"

const ComputersCanvas = dynamic(
  () => import("@/components/canvas/computers-canvas"),
  { ssr: false },
)

type HeroProps = {
  portrait: string
}

export function Hero({ portrait }: HeroProps) {
  const isMobile = useMobile()

  return (
    <section
      id="top"
      className="relative mx-auto flex h-screen w-full flex-col items-center justify-center gap-4"
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="mb-10">
          <h1 className={`${styles.heroHeadText} whitespace-nowrap text-white`}>
            Hi , I&apos;m <span className="text-[#915eff]">Ali</span>
          </h1>
          {!isMobile ? (
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              Experienced Full-Stack <br className="hidden sm:block" />
              Developer.
            </p>
          ) : null}
        </div>
      </div>

      {isMobile ? (
        <div className="mt-32 flex w-[80%] flex-col items-center justify-center">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="flex h-1/2 w-1/2 items-center justify-center rounded-full"
          >
            <Image
              src={portrait}
              alt="Ali Alshater"
              width={320}
              height={320}
              priority
              className="w-full rounded-full object-contain"
            />
          </motion.div>
          <p className="whitespace-nowrap text-[26px] font-bold text-white">
            Front End Developer
          </p>
          <p className={`${styles.heroSubText} text-white-100 mt-2 text-center`}>
            I develop 3D visuals, user <br className="hidden sm:block" />
            interfaces and web application.
          </p>
          <a
            href="#contact"
            className="bg-tertiary shadow-primary z-20 mt-3 w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md"
          >
            Hire Me
          </a>
        </div>
      ) : (
        <div className="h-full w-full min-h-0 flex-1">
          <ComputersCanvas isMobile={isMobile} />
        </div>
      )}

      <div className="absolute bottom-[10px] flex w-full items-center justify-center">
        <a href="#about" aria-label="Scroll to about">
          <div className="border-secondary flex h-[64px] w-[30px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
