# Phase 6.2: Fix SoundCloud Player — Custom UI with Widget API

**Branch:** `fix/soundcloud-player-url`

## Overview

Fix the “You have not provided a valid SoundCloud URL” error by constructing the
hidden iframe `src` with a properly URL‑encoded playlist URL and the required
`url` query parameter (`https://w.soundcloud.com/player/?url=ENCODED_URL`).
Then replace the default SoundCloud iframe UI with a fully custom audio player
built with shadcn/ui `Button` and `Slider` components, driven entirely by the
SoundCloud Widget JavaScript API. All playback control, track metadata, and
progress tracking come from the widget, while the visual presentation is 100 %
your shadcn design. The “View All” link remains below the player, opening the
SoundCloud profile in a new tab.

## Prerequisites

- Phase 2 (Site Build) complete — `SectionMixes` and `SoundCloudPlayer`
  components exist
- A valid SoundCloud playlist URL stored in Sanity `siteSettings` (e.g.,
  `https://soundcloud.com/YOUR_USER/sets/YOUR_PLAYLIST`)
- shadcn `Button` and `Slider` components installed (Phase 1.2b)
- `next/script` available for loading the Widget API script

## Requirements

### Fix the “Invalid URL” Error

- Replace the raw‑URL iframe `src` with the correct embed format:
  `https://w.soundcloud.com/player/?url=ENCODED_PLAYLIST_URL`
- Use `encodeURIComponent()` to URL‑encode the playlist URL
- Suppress the default SoundCloud UI entirely with widget parameters:
  `&show_artwork=false&buying=false&sharing=false&download=false&show_playcount=false&show_user=false`
- Hide the iframe visually using `position: absolute; clip: rect(0,0,0,0)` —
  never use `display: none` (the browser must render the iframe for the Widget
  API to function)

### Custom Audio Player UI (shadcn‑only)

- **Play/Pause** — shadcn `Button` (size `icon`) that toggles between Lucide
  `Play` and `Pause` icons
- **Previous / Next** — shadcn `Button` (size `icon`, variant `ghost`) with
  Lucide `SkipBack` / `SkipForward` icons (skip tracks in the playlist)
- **Progress Bar** — shadcn `Slider` displaying current playback position;
  dragging the slider seeks to the selected position via `widget.seekTo()`
- **Track Info** — current track title (`text-foreground`) and artist
  (`text-muted-foreground`)
- **Track Artwork** — square thumbnail from `currentSound.artwork_url`
  (replace `-large` with `-t300x300` for a reasonable size)
- **Loading State** — shadcn `Skeleton` placeholders (artwork block + two text
  lines + slider bar) while the widget initialises
- **Error State** — fallback message with a link to the SoundCloud profile
- **Empty State** — if `playlistUrl` is not provided, render nothing (return
  `null`)

### Widget API Integration

- Load the official Widget API script via Next.js `<Script>` with
  `strategy="afterInteractive"`
- Initialise the widget inside a `useEffect` once the script has loaded
  (`SC.Widget(iframeElement)`)
- Bind event listeners:
  - `READY` — fetch initial track info, enable controls
  - `PLAY` — update isPlaying state, fetch current track metadata
  - `PAUSE` — update isPlaying state
  - `PLAY_PROGRESS` — update the slider position in real time
  - `FINISH` — reset isPlaying (playlist auto‑advance handled by widget)
- Use `widget.getCurrentSound(callback)` to retrieve track title, artwork,
  and artist
- Use `widget.getDuration(callback)` and `widget.getPosition(callback)` for
  progress tracking
- Seek: `widget.seekTo(milliseconds)` called when the user drags the shadcn
  `Slider`

### Visual Design

- All colours reference Tailwind semantic tokens — no hardcoded hex values
- Player container: max‑width 2xl, centred
- Controls row: centred, gap‑4 between buttons
- Primary play/pause button: larger than skip buttons (`h-12 w-12`)
- “View All” link: centred below the player, primary colour, underlined,
  with `ExternalLink` icon

## Implementation Steps

### Step 1: Fix the iframe `src` construction

The SoundCloud Widget API requires the embed URL format:
