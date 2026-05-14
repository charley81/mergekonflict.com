import { client } from '@/sanity/lib/client'
import { HugeiconsIcon } from '@hugeicons/react'
import { 
  SoundcloudIcon, 
  InstagramIcon, 
  Facebook02Icon, 
  YoutubeIcon, 
  TwitchIcon,
  Link01Icon 
} from '@hugeicons/core-free-icons'
import Link from 'next/link'

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Hugeicons uses a specific format for their icons
type HugeiconType = [string, Record<string, string | number>][]

const ICON_MAP: Record<string, HugeiconType> = {
  SoundcloudIcon: SoundcloudIcon as unknown as HugeiconType,
  InstagramIcon: InstagramIcon as unknown as HugeiconType,
  Facebook02Icon: Facebook02Icon as unknown as HugeiconType,
  YoutubeIcon: YoutubeIcon as unknown as HugeiconType,
  TwitchIcon: TwitchIcon as unknown as HugeiconType,
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
    <section id="connect" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          Connect
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {data.socialLinks.map((link, index) => {
            const IconComponent = (ICON_MAP[link.icon] || Link01Icon) as HugeiconType

            return (
              <Link 
                key={index} 
                href={link.url} 
                target="_blank"
                className="group relative p-4 bg-background rounded-full border border-border/50 hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20"
                aria-label={link.platform}
              >
                <HugeiconsIcon 
                  icon={IconComponent} 
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
