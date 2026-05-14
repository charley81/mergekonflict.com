'use client'

import { Slider } from '@/components/ui/slider'

interface ProgressSliderProps {
  progress: number
  duration: number
  onSeek: (ms: number) => void
}

export function ProgressSlider({ progress, duration, onSeek }: ProgressSliderProps) {
  return (
    <Slider
      value={[progress]}
      max={duration || 100}
      onValueChange={(value) => onSeek(value[0])}
      aria-label="Seek track progress"
      className="cursor-pointer"
    />
  )
}
