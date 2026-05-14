import { client } from '@/sanity/lib/client'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { PlayIcon } from '@hugeicons/core-free-icons'
import Link from 'next/link'

async function getMixesData() {
  const query = `*[_type == "siteSettings"][0]{
    soundcloudPlaylistUrl,
    soundcloudProfileUrl
  }`
  return await client.fetch(query)
}

export async function MixesSection() {
  const data = await getMixesData()
  
  if (!data?.soundcloudPlaylistUrl) return null

  // Encode URL for SoundCloud embed
  const encodedUrl = encodeURIComponent(data.soundcloudPlaylistUrl)
  
  // External API requires Hex. #E1381B is the primary brand color in design extraction.
  const primaryColorHex = "E1381B" 
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23${primaryColorHex}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`

  return (
    <section id="mixes" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary rounded-full text-primary-foreground">
              <HugeiconsIcon icon={PlayIcon} className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
              Latest Mixes
            </h2>
          </div>
          
          {data.soundcloudProfileUrl && (
            <Button asChild variant="link" className="text-primary font-bold text-lg p-0 hover:text-primary/80">
              <Link href={data.soundcloudProfileUrl} target="_blank">
                View All on SoundCloud →
              </Link>
            </Button>
          )}
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-black/40 aspect-video md:aspect-[21/9] w-full max-w-5xl mx-auto border border-border/50">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={embedUrl}
            title="SoundCloud Player"
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}
