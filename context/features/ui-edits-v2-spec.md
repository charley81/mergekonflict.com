# CSS Polish: Music Title Overflow & About Paragraph Spacing

## Overview

Fix two small CSS issues on the production site: the track title in the
SoundCloud player overflows its container on mobile, and the About section bio
paragraphs lack visible spacing, appearing as a wall of text. Both fixes are
one‑line changes to existing components.

## Prerequisites

- Phase 2 (Site Build) complete — all section components exist
- Phase 6.5 (UI Styling Polish) complete
- Dev server running with `pnpm dev`

## Requirements

### 1. Fix Music Title Overflow on Mobile

- **File:** `src/components/soundcloud-player/TrackDisplay.tsx` (or wherever the
  track title text element lives)
- **Problem:** The track title text breaks out of its container on narrow
  screens
- **Fix:** Add `truncate` (Tailwind utility that applies `overflow: hidden`,
  `text-overflow: ellipsis`, and `white-space: nowrap`) **and** `min-w-0` to
  the element that contains the track title text
- `min-w-0` is required because `truncate` does not work on flex children
  unless the parent allows shrinking below its content size
- If the title is inside a flex container (which it almost certainly is, given
  the player layout), `min-w-0` on the text element is mandatory

### 2. Add Space Between About Section Paragraphs

- **File:** `src/components/sections/SectionAbout.tsx`
- **Problem:** The bio text rendered by `@portabletext/react` has no margin
  between paragraphs, making it hard to read
- **Fix:** Wrap the `<PortableText>` component in a `<div>` with Tailwind's
  `prose` typography classes: `prose prose-lg dark:prose-invert`
- The `prose` class applies sensible vertical rhythm (spacing between
  paragraphs, headings, and lists) via the official Tailwind Typography plugin
- If `@tailwindcss/typography` is not installed:
  ```bash
  pnpm add @tailwindcss/typography
  ```
