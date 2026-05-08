import React from 'react'
import Image from 'next/image'

interface HeroProps {
  readonly className?: string
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section
      id="hero"
      className={`relative w-full h-screen min-h-150 flex flex-col items-center justify-center text-center ${className}`}
    >
      <Image
        src="/images/hero.png"
        alt="Merge Konflict performing live"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary opacity-30"></div>
      <h1 className="relative z-10 font-black text-[min(15vw,185.4px)] md:text-[185.4px] text-background uppercase wrap-break-word w-full leading-[0.85] tracking-tighter px-6">
        MERGE
        <br />
        KONFLICT
      </h1>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <a
          href="#shows"
          className="text-background/60 hover:text-background transition-colors"
        >
          <span className="material-symbols-outlined text-5xl">
            keyboard_double_arrow_down
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero
