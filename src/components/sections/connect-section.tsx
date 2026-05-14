import { client } from '@/sanity/lib/client'
import { HugeiconsIcon } from '@hugeicons/react'
import * as Icons from '@hugeicons/core-free-icons'
import { Link01Icon } from '@hugeicons/core-free-icons'
import Link from 'next/link'

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
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
            // Dynamically get the icon component from the Icons object
            const IconComponent = (Icons as Record<string, any>)[link.icon] || Link01Icon

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
