import { client } from '@/sanity/lib/client'
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
    <section id="mixes" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-foreground">
          Latest Mixes
        </h2>

        <SoundCloudPlayer 
          playlistUrl={data.soundcloudPlaylistUrl} 
          profileUrl={data.soundcloudProfileUrl} 
        />
      </div>
    </section>
  )
}
