'use client'

import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PlayerControlsProps {
  isPlaying: boolean
  onToggle: () => void
  onPrev: () => void
  onNext: () => void
}

export function PlayerControls({ isPlaying, onToggle, onPrev, onNext }: PlayerControlsProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onPrev}
        aria-label="Previous track"
        className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted"
      >
        <SkipBack className="w-6 h-6" />
      </Button>

      <Button 
        size="icon" 
        onClick={onToggle}
        aria-label={isPlaying ? "Pause track" : "Play track"}
        className="h-14 w-14 shadow-lg transition-transform active:scale-95"
      >
        {isPlaying ? (
          <Pause className="w-8 h-8 fill-current" />
        ) : (
          <Play className="w-8 h-8 fill-current" />
        )}
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onNext}
        aria-label="Next track"
        className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted"
      >
        <SkipForward className="w-6 h-6" />
      </Button>
    </div>
  )
}
