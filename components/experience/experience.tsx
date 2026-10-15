"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { withSection } from "@/components/section-wrapper"
import { fadeIn, textVariant } from "@/lib/motion"
import type { Experience as ExperienceItem } from "@/lib/portfolio-data"
import { styles } from "@/lib/styles"

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={64}
            height={64}
            className="h-full w-full rounded-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point) => (
          <li
            key={point}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

function ExperienceSection({ experiences }: { experiences: ExperienceItem[] }) {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i can offer</p>
        <h2 className={styles.sectionHeadText}>What I Do.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
      I turn ideas into fast, reliable web products. I work across the full stack, from polished React and Next.js interfaces to the APIs, databases, and deployment behind them, so features ship end to end without handoff gaps.
      </motion.p>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export const Experience = withSection(ExperienceSection, "work")
