'use client'

import Script from 'next/script'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { useSoundCloudWidget } from '@/hooks/use-soundcloud-widget'
import { PlayerControls } from './soundcloud-player/player-controls'
import { TrackDisplay } from './soundcloud-player/track-display'
import { ProgressSlider } from './soundcloud-player/progress-slider'

interface SoundCloudPlayerProps {
  playlistUrl: string
  profileUrl?: string
}

export default function SoundCloudPlayer({ playlistUrl, profileUrl }: SoundCloudPlayerProps) {
  const { iframeRef, states, actions } = useSoundCloudWidget(playlistUrl)
  const { isLoaded, isPlaying, currentTrack, progress, duration, error } = states

  if (!playlistUrl) return null

  const encodedPlaylistUrl = encodeURIComponent(playlistUrl)
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodedPlaylistUrl}&show_artwork=false&buying=false&sharing=false&download=false&show_playcount=false&show_user=false&visual=false`

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <Script 
        src="https://w.soundcloud.com/player/api.js" 
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.onSCReady) {
            window.onSCReady()
          }
        }}
      />
      
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title="SoundCloud Widget"
        style={{ 
          position: 'absolute', 
          clip: 'rect(0,0,0,0)', 
          width: '1px', 
          height: '1px', 
          margin: '-1px', 
          overflow: 'hidden' 
        }}
        aria-hidden="true"
      />

      <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-2xl space-y-6">
        {error ? (
          <div className="text-center py-8 space-y-4">
            <p className="text-destructive font-medium">{error}</p>
            {profileUrl && (
              <Button asChild variant="outline">
                <Link href={profileUrl} target="_blank">Listen on SoundCloud</Link>
              </Button>
            )}
          </div>
        ) : !isLoaded ? (
          <PlayerSkeleton />
        ) : (
          <>
            <TrackDisplay currentTrack={currentTrack} />
            <div className="space-y-4">
              <ProgressSlider 
                progress={progress} 
                duration={duration} 
                onSeek={actions.seek} 
              />
              <PlayerControls 
                isPlaying={isPlaying} 
                onToggle={actions.toggle} 
                onPrev={actions.prev} 
                onNext={actions.next} 
              />
            </div>
          </>
        )}
      </div>

      {profileUrl && (
        <div className="flex justify-center">
          <Button asChild variant="link" className="text-primary font-bold group">
            <Link href={profileUrl} target="_blank" className="flex items-center gap-2">
              View All Mixes on SoundCloud
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

function PlayerSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Skeleton className="w-32 h-32 rounded-xl" />
        <div className="flex-1 space-y-3 w-full text-center md:text-left">
          <Skeleton className="h-6 w-3/4 mx-auto md:mx-0" />
          <Skeleton className="h-4 w-1/2 mx-auto md:mx-0" />
        </div>
      </div>
      <Skeleton className="h-2 w-full" />
      <div className="flex justify-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  )
}
