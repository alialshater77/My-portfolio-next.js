"use client"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { useNearViewport } from "@/components/hooks/use-near-viewport"
import { withSection } from "@/components/section-wrapper"
import { emailConfig } from "@/lib/email"
import { fadeIn, slideIn, textVariant } from "@/lib/motion"
import { styles } from "@/lib/styles"

const EarthCanvas = dynamic(() => import("@/components/canvas/earth-canvas"), {
  ssr: false,
})

type ContactForm = {
  name: string
  email: string
  message: string
}

const emptyForm: ContactForm = {
  name: "",
  email: "",
  message: "",
}

function ContactSection() {
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [loading, setLoading] = useState(false)
  const { ref, visible } = useNearViewport()

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const { serviceId, templateId, publicKey } = emailConfig

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false)
      alert("Email service is not configured.")
      return
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: emailConfig.toName,
          from_email: form.email,
          to_email: emailConfig.toEmail,
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setLoading(false)
        alert("Thank you. Your message has been sent, and I will get back to you soon.")
        setForm(emptyForm)
      })
      .catch(() => {
        setLoading(false)
        alert("Something went wrong.")
      })
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        If you would like more information or to discuss collaboration
        opportunities, please feel free to contact me via the email or mobile
        number provided in the contact information. I look forward to working
        with you and achieving new successes in web application development.
      </motion.p>

      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        >
          <div className="xs:flex-col mb-10 flex items-center justify-between md:flex-row">
            <p className="text-[26px] text-white">mobile number :</p>
            <p className="text-[26px]">+963993171809</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white"
              />
            </label>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/ali-alshater-603670222/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="blue-gradient flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1"
                >
                  <LinkedInIcon sx={{ color: "white" }} />
                </a>
                <a
                  href="https://wa.me/963997996076"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] transition hover:-translate-y-1"
                >
                  <WhatsAppIcon sx={{ color: "white" }} />
                </a>
                <a
                  href="https://github.com/alialshater77"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="black-gradient flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1"
                >
                  <Image
                    src="/images/github.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          ref={ref}
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          {visible ? <EarthCanvas /> : null}
        </motion.div>
      </div>
    </>
  )
}

export const Contact = withSection(ContactSection, "contact")
