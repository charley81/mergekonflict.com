'use client'

import { HugeiconsIcon } from '@hugeicons/react'
import { PlayIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import type { TrackInfo } from '@/types/soundcloud'

interface TrackDisplayProps {
  currentTrack: TrackInfo | null
}

export function TrackDisplay({ currentTrack }: TrackDisplayProps) {
  const artworkUrl = currentTrack?.artwork_url 
    ? currentTrack.artwork_url.replace('-large', '-t300x300')
    : null

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {artworkUrl ? (
        <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-xl shadow-lg">
          <Image 
            src={artworkUrl} 
            alt={currentTrack?.title || 'Track Artwork'} 
            fill
            className="object-cover bg-muted"
            sizes="128px"
          />
        </div>
      ) : (
        <div className="w-32 h-32 shrink-0 rounded-xl bg-muted flex items-center justify-center">
          <HugeiconsIcon icon={PlayIcon} className="w-12 h-12 text-muted-foreground/20" />
        </div>
      )}
      
      <div className="flex-1 text-center md:text-left overflow-hidden">
        <h3 className="text-xl font-bold text-foreground truncate uppercase tracking-tight">
          {currentTrack?.title || 'Loading track...'}
        </h3>
        <p className="text-muted-foreground font-medium truncate">
          {currentTrack?.user?.username || 'Artist'}
        </p>
      </div>
    </div>
  )
}
