import { client } from '@/sanity/lib/client'
import { 
  SiSoundcloud, 
  SiInstagram, 
  SiBandcamp, 
  SiMixcloud,
  SiFacebook,
  SiYoutube,
  SiTwitch,
  SiX
} from '@icons-pack/react-simple-icons'
import { Link2, Share2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Three-tier icon resolver
function getPlatformIcon(platform: string, iconName: string) {
  const p = platform.toLowerCase()
  const i = iconName.toLowerCase()

  // Tier 1: Specific Brand Icons (Simple Icons)
  if (p.includes('soundcloud') || i.includes('soundcloud')) return SiSoundcloud
  if (p.includes('instagram') || i.includes('instagram')) return SiInstagram
  if (p.includes('bandcamp') || i.includes('bandcamp')) return SiBandcamp
  if (p.includes('mixcloud') || i.includes('mixcloud')) return SiMixcloud
  if (p.includes('facebook') || i.includes('facebook')) return SiFacebook
  if (p.includes('youtube') || i.includes('youtube')) return SiYoutube
  if (p.includes('twitch') || i.includes('twitch')) return SiTwitch
  if (p.includes('twitter') || p.includes(' x ') || i.includes('twitter') || i.includes(' x ')) return SiX

  // Tier 2: Generic Link Icon (Lucide)
  if (p.includes('link') || i.includes('link') || p.includes('website')) return Link2

  // Tier 3: Absolute Fallback (Lucide)
  return Share2
}

async function getConnectData() {
  const query = `*[_type == "siteSettings"][0]{
    socialLinks
  }`
  return await client.fetch(query) as { socialLinks: SocialLink[] | null }
}

export async function ConnectSection() {
  const data = await getConnectData()
  
  if (!data?.socialLinks || data.socialLinks.length === 0) return null

  return (
    <section id="connect" className="py-32 bg-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          Connect
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {data.socialLinks.map((link, index) => {
            const IconComponent = getPlatformIcon(link.platform, link.icon)

            return (
              <Link 
                key={index} 
                href={link.url} 
                target="_blank"
                className="group relative p-4 bg-background rounded-md border border-border/50 hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20"
                aria-label={link.platform}
              >
                <IconComponent 
                  className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" 
                />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
