"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tilt } from "react-tilt"
import { withSection } from "@/components/section-wrapper"
import { fadeIn, textVariant } from "@/lib/motion"
import type { Project } from "@/lib/portfolio-data"
import { styles } from "@/lib/styles"

const tiltOptions = {
  max: 45,
  scale: 1,
  speed: 450,
}

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo,
}: Project & { index: number }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-full"
    >
      <Tilt
        options={tiltOptions}
        className="bg-tertiary flex h-full w-full flex-col items-start justify-between rounded-2xl p-5"
      >
        <div className="w-full">
          <div className="relative h-auto w-full sm:h-[250px] md:h-[230px] lg:h-[200px]">
            <Image
              src={image}
              alt={name}
              width={1366}
              height={768}
              sizes="(min-width: 1366px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-2xl sm:absolute sm:inset-0 sm:h-full"
            />

            <div className="card-img-hover absolute inset-0 m-3 flex justify-end gap-2">
              {source_code_link ? (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} source code`}
                  className="black-gradient flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <Image
                    src="/images/github.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              ) : null}

              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} live demo`}
                className="black-gradient flex h-10 w-10 items-center justify-center rounded-full"
              >
                <Image
                  src="/images/link.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-1/2 w-1/2 object-contain"
                />
              </a>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

function WorksSection({ projects }: { projects: Project[] }) {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="flex h-full w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described,
          with links to live demos where applicable. Some of these projects were
          developed collaboratively with my team during my professional work,
          and while I cannot share the code, they reflect my contributions in
          solving complex problems, working with diverse technologies, and
          managing projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid h-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export const Works = withSection(WorksSection, "my-projects")
