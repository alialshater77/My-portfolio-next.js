import { cacheLife, cacheTag } from "next/cache"
import { About } from "@/components/about/about"
import { StarsField } from "@/components/canvas/stars-field"
import { Contact } from "@/components/contact/contact"
import { Experience } from "@/components/experience/experience"
import { HeroBackdrop } from "@/components/hero/hero-backdrop"
import { Hero } from "@/components/hero/hero"
import { Navbar } from "@/components/navbar/navbar"
import { Tech } from "@/components/tech/tech"
import { Works } from "@/components/works/works"
import { getPortfolioContent } from "@/lib/portfolio"

export default async function HomePage() {
  "use cache"
  cacheLife("max")
  cacheTag("portfolio-page")

  const content = await getPortfolioContent()

  return (
    <div className="relative z-0 bg-primary">
      <Navbar links={content.navLinks} />
      <div className="relative min-h-screen">
        <HeroBackdrop />
        <Hero portrait={content.portrait} />
      </div>
      <About services={content.services} portrait={content.portrait} />
      <Experience experiences={content.experiences} />
      <Tech technologies={content.technologies} />
      <Works projects={content.projects} />
      <div className="relative z-0">
        <Contact />
        <StarsField />
      </div>
    </div>
  )
}
