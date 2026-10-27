import Image from "next/image"

export function HeroBackdrop() {
  return (
    <Image
      src="/images/herobg.webp"
      alt=""
      fill
      priority
      sizes="100vw"
      className="pointer-events-none -z-10 object-cover object-center"
    />
  )
}
