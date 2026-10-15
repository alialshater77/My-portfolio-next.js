"use client"

import Image from "next/image"
import { useState } from "react"
import type { NavLink } from "@/lib/portfolio-data"
import { styles } from "@/lib/styles"

type NavbarProps = {
  links: NavLink[]
}

export function Navbar({ links }: NavbarProps) {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 flex w-full items-center bg-primary py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
          }}
        >
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            unoptimized
          />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            Ali Alshater&nbsp;
            <span className="hidden sm:block">| Full Stack Developer</span>
          </p>
        </a>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {links.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            type="button"
            className="cursor-pointer"
            aria-label={toggle ? "Close menu" : "Open menu"}
            onClick={() => setToggle((open) => !open)}
          >
            <Image
              src={toggle ? "/images/close.svg" : "/images/menu.svg"}
              alt=""
              width={28}
              height={28}
              className="h-[28px] w-[28px] object-contain"
              unoptimized
            />
          </button>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } black-gradient absolute top-20 right-0 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } cursor-pointer text-[18px] font-medium hover:text-white`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(false)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
