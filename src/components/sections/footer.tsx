import { sanityFetch } from '@/sanity/lib/client'
import { SITE_SETTINGS_QUERY } from '@/lib/queries'

async function getFooterData() {
  return await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    tags: ['siteSettings']
  })
}

export async function Footer() {
  const data = await getFooterData()
  const year = new Date().getFullYear()
  const copyrightTemplate = data?.footerCopyright || '© {year} merge konflict. All rights reserved.'
  const copyright = copyrightTemplate.replace('{year}', year.toString())

  return (
    <footer className="py-8 bg-secondary/5 border-t border-border/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
          {copyright}
        </p>
      </div>
    </footer>
  )
}
