import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDownDoubleIcon } from '@hugeicons/core-free-icons'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

async function getHeroData() {
  const query = `*[_type == "siteSettings"][0]{
    siteName,
    tagline,
    heroBackground
  }`
  return await client.fetch(query)
}

export async function HeroSection() {
  const data = await getHeroData()
  const siteName = data?.siteName || 'MERGE KONFLICT'

  const bgImage = data?.heroBackground 
    ? urlFor(data.heroBackground).url() 
    : "/images/hero.png"

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={siteName}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content: Rotated Vertical h1 at the absolute bottom left - FLUSH */}
      <div className="absolute bottom-0 left-0 z-20 pointer-events-none">
        <h1 className="origin-bottom-left -rotate-90 translate-x-[0.95em] whitespace-nowrap text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-none text-white animate-in fade-in duration-1000">
          {siteName}
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#shows" aria-label="Scroll to Shows" className="pointer-events-auto">
          <HugeiconsIcon 
            icon={ArrowDownDoubleIcon} 
            className="w-10 h-10 text-white opacity-80 hover:opacity-100 transition-opacity" 
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}

