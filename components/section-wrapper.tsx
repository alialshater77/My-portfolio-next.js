"use client"

import { motion } from "framer-motion"
import type { ComponentType } from "react"
import { staggerContainer } from "@/lib/motion"
import { styles } from "@/lib/styles"

export function withSection<P extends object>(
  Component: ComponentType<P>,
  idName?: string,
) {
  function WrappedSection(props: P) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        {idName ? (
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
        ) : null}
        <Component {...props} />
      </motion.section>
    )
  }

  WrappedSection.displayName = `Section(${
    Component.displayName || Component.name || "Component"
  })`

  return WrappedSection
}
