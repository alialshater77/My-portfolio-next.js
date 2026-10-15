"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tilt } from "react-tilt"
import { useMobile } from "@/components/hooks/use-mobile"
import { withSection } from "@/components/section-wrapper"
import { fadeIn, textVariant } from "@/lib/motion"
import type { Service } from "@/lib/portfolio-data"
import { styles } from "@/lib/styles"

const tiltOptions = {
  max: 45,
  scale: 1,
  speed: 450,
}

function ServiceCard({
  title,
  index,
  icon,
}: Service & { index: number }) {
  return (
    <Tilt className="xs:w-[250px] w-full" options={tiltOptions}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1.5)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] w-full flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function AboutSection({
  services,
  portrait,
}: {
  services: Service[]
  portrait: string
}) {
  const isMobile = useMobile()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="xs:flex-col-reverse flex items-center justify-between lg:flex-row">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 max-w-2xl text-[17px] leading-[30px]"
        >
          <span>
          Hello, I’m Ali Alshater, a Full Stack Developer and Computer & Automation Engineer with six years of experience building web applications.
            <br />
            My foundation is the front end. I specialize in React.js and Next.js, using SSR and SSG to deliver fast, scalable products, and my professional work as a Front-End Developer focused on application performance and seamless user experiences. On the back end, I build APIs and services with Node.js, Express, and TypeScript, backed by PostgreSQL, MongoDB, and Redis. That includes authentication, background job processing, and real-time features over WebSockets. I ship with Docker, automated testing, and CI/CD pipelines, and I design for security and maintainability from the start.
          </span>
          Beyond the web, I’ve created interactive 3D visualizations with Three.js. I care about clean architecture, measurable performance, and delivering end-to-end work that matters, and I’m looking to join a team building impactful products.
        </motion.p>

        {!isMobile ? (
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="xs:mt-4 xs:mb-6 xs:h-1/2 xs:w-1/2 rounded-full md:h-1/4 md:w-1/4"
          >
            <Image
              src={portrait}
              alt="Ali Alshater"
              width={360}
              height={360}
              className="h-full w-full rounded-full object-contain"
            />
          </motion.div>
        ) : null}
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export const About = withSection(AboutSection, "about")
