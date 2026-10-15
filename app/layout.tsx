import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Ali Alshater | Full Stack Developer",
  description:
    "Portfolio of Ali Alshater, a full-stack developer building high-performance web applications with React, Next.js, and Node.js.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className={`${poppins.className} min-h-full bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
