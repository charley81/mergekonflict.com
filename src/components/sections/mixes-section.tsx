import { client } from '@/sanity/lib/client'
import { HugeiconsIcon } from '@hugeicons/react'
import { PlayIcon } from '@hugeicons/core-free-icons'
import SoundCloudPlayer from './soundcloud-player'

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

  return (
    <section id="mixes" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary rounded-full text-primary-foreground">
            <HugeiconsIcon icon={PlayIcon} className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
            Latest Mixes
          </h2>
        </div>

        <SoundCloudPlayer 
          playlistUrl={data.soundcloudPlaylistUrl} 
          profileUrl={data.soundcloudProfileUrl} 
        />
      </div>
    </section>
  )
}
