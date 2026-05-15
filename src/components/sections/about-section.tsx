import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { SITE_SETTINGS_QUERY } from '@/lib/queries'

interface AboutData {
  aboutBio: unknown[]
}

async function getAboutData() {
  return await sanityFetch<AboutData>({
    query: SITE_SETTINGS_QUERY,
    tags: ['siteSettings']
  })
}

export async function AboutSection() {
  const data = await getAboutData()

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Column 1: Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border border-border/50">
            <Image
              src="/images/about.png"
              alt="Merge Konflict artist portrait"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Column 2: Bio */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-foreground">
              About
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {data?.aboutBio ? (
                <PortableText value={data.aboutBio as any} />
              ) : (
                <p>
                  Merge Konflict is a producer and DJ pushing the boundaries of dark techstep and amen-heavy drum and bass. 
                  Known for clinical production and aggressive, high-energy sets, he has established himself as a 
                  formidable force in the underground scene.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
