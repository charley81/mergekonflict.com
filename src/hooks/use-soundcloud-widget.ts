'use client'

import { useEffect, useRef, useState } from 'react'
import type { TrackInfo } from '@/types/soundcloud'

interface SoundCloudWidget {
  bind: (event: string, callback: Function) => void
  unbind: (event: string) => void
  toggle: () => void
  prev: () => void
  next: () => void
  seekTo: (ms: number) => void
  getCurrentSound: (callback: (sound: TrackInfo) => void) => void
  getDuration: (callback: (duration: number) => void) => void
}

declare global {
  interface Window {
    SC: {
      Widget: {
        (element: HTMLIFrameElement): SoundCloudWidget
        Events: {
          READY: string
          PLAY: string
          PAUSE: string
          FINISH: string
          PLAY_PROGRESS: string
          ERROR: string
        }
      }
    }
    onSCReady?: () => void
  }
}

export function useSoundCloudWidget(playlistUrl: string, playlistId?: string) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const widgetRef = useRef<SoundCloudWidget | null>(null)
  
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<TrackInfo | null>(null)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!playlistUrl) return

    const initWidget = () => {
      if (!window.SC || !iframeRef.current) return

      try {
        const widget = window.SC.Widget(iframeRef.current)
        widgetRef.current = widget

        const { Events } = window.SC.Widget

        widget.bind(Events.READY, () => {
          setIsLoaded(true)
          updateTrackInfo(widget)
        })

        widget.bind(Events.PLAY, () => {
          setIsPlaying(true)
          updateTrackInfo(widget)
        })

        widget.bind(Events.PAUSE, () => setIsPlaying(false))
        widget.bind(Events.FINISH, () => setIsPlaying(false))
        
        widget.bind(Events.PLAY_PROGRESS, (data: { currentPosition: number }) => {
          setProgress(data.currentPosition)
        })

        widget.bind(Events.ERROR, () => setError("Failed to load SoundCloud player"))
      } catch (err) {
        console.error("SoundCloud Widget initialization error:", err)
        setError("Error initializing player")
      }
    }

    if (window.SC) {
      initWidget()
    } else {
      window.onSCReady = initWidget
    }

    return () => {
      if (widgetRef.current && window.SC) {
        const { Events } = window.SC.Widget
        Object.values(Events).forEach(event => widgetRef.current?.unbind(event))
      }
    }
  }, [playlistUrl, playlistId])

  const updateTrackInfo = (widget: SoundCloudWidget) => {
    widget.getCurrentSound((sound: TrackInfo) => {
      if (sound) {
        setCurrentTrack(sound)
        widget.getDuration((d: number) => setDuration(d))
      }
    })
  }

  const actions = {
    toggle: () => widgetRef.current?.toggle(),
    prev: () => widgetRef.current?.prev(),
    next: () => widgetRef.current?.next(),
    seek: (ms: number) => {
      widgetRef.current?.seekTo(ms)
      setProgress(ms)
    }
  }

  return {
    iframeRef,
    states: { isLoaded, isPlaying, currentTrack, progress, duration, error },
    actions
  }
}
