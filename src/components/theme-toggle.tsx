'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { HugeiconsIcon } from '@hugeicons/react'
import { Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <HugeiconsIcon
        icon={Sun01Icon}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  )
}
