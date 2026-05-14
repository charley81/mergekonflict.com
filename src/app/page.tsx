import { Suspense } from 'react'
import { HeroSection } from '@/components/sections/hero-section'
import { ShowsSection } from '@/components/sections/shows-section'
import { MixesSection } from '@/components/sections/mixes-section'
import { AboutSection } from '@/components/sections/about-section'
import { ConnectSection } from '@/components/sections/connect-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/sections/footer'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ShowsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <MixesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ConnectSection />
      </Suspense>

      <ContactSection />

      <Suspense fallback={<div className="h-20 w-full bg-black" />}>
        <Footer />
      </Suspense>
    </div>
  )
}

function SectionSkeleton() {
  return (
    <div className="py-24 container mx-auto px-4">
      <Skeleton className="h-12 w-64 mb-12" />
      <div className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    </div>
  )
}
