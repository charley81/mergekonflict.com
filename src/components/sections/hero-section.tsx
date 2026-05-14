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
  const tagline = data?.tagline || 'Dark Techstep & Amen Heavy DNB'
  
  const bgImage = data?.heroBackground 
    ? urlFor(data.heroBackground).url() 
    : "/images/hero.png"

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={`${siteName} - ${tagline}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-[12vw] md:text-[185.4px] font-black uppercase tracking-tighter leading-none text-white mb-4 animate-in fade-in zoom-in duration-1000">
          {siteName}
        </h1>
        <p className="text-lg md:text-2xl font-medium text-white/80 uppercase tracking-widest max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          {tagline}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#shows" aria-label="Scroll to Shows">
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
