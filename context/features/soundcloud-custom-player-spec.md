# Custom SoundCloud Audio Player Spec

**Branch:** `feature/soundcloud-custom-player`

## Overview

Replace the standard SoundCloud iframe embed in the Mixes section with a fully
custom audio player. The official SoundCloud Widget API drives playback behind a
hidden iframe, while all visible controls use shadcn/ui `Button` and `Slider`
components styled with the project’s Tailwind semantic colour tokens. Track
metadata (title, artwork) is extracted via the Widget’s `getCurrentSound`
getter and displayed in the custom UI.

## Prerequisites

- Phase 2 (Stitch Design Extraction & Full Site Build) is in progress or
  complete — the `SectionMixes` component exists and receives `playlistUrl` and
  `profileUrl` as props
- shadcn `Button` and `Slider` components are installed (Phase 1.2b)
- `@/components/ui/slider` and `@/components/ui/button` are importable

## Requirements

- Create a client component `src/components/SoundCloudPlayer.tsx` that:
  - Accepts `playlistUrl: string` and `profileUrl: string` as props
  - Loads the SoundCloud Widget API script via Next.js `<Script />` with
    `strategy="afterInteractive"`
  - Renders a **hidden** `<iframe>` pointing to the SoundCloud playlist URL
  - Initialises `SC.Widget(iframeElement)` inside a `useEffect` that runs once
    after the script loads
  - Exposes custom controls built with shadcn/ui:
    - **Play/Pause** — shadcn `Button` with play/pause Lucide icons
    - **Next / Previous** — shadcn `Button`s (skip to next/previous track in
      the playlist)
    - **Progress bar** — shadcn `Slider` that displays current playback
      position and allows seeking via `seekTo()`
    - **Track info** — displays the current track’s title and artwork
  - Binds to Widget events:
    - `READY` — initialise track info and enable controls
    - `PLAY_PROGRESS` — update the progress slider in real time
    - `PLAY` / `PAUSE` — toggle the play/pause button state
    - `FINISH` — auto‑advance to the next track (already handled by the
      widget for playlists)
  - Handles all states:
    - **Loading** — shadcn `Skeleton` placeholders while the widget is
      initialising
    - **Error** — a fallback message if the widget fails to load
    - **Empty** — if `playlistUrl` is not provided, render nothing
- The `SectionMixes` component (already in `src/components/sections/`)
  should be updated to import and use `<SoundCloudPlayer />` instead of the
  raw iframe embed
- “View All” link below the player still opens `profileUrl` in a new tab

## Technical Details

### Widget API Reference

The SoundCloud Widget API is documented at:
https://developers.soundcloud.com/docs/api/html5-widget

**Script URL:** `https://w.soundcloud.com/player/api.js`
**Entry point:** `SC.Widget(iframeElement | iframeElementID)`
**Communication:** `window.postMessage` (all getters are asynchronous and
accept a callback).

### Key Methods

| Method                 | Description                                 |
| ---------------------- | ------------------------------------------- |
| `play()`               | Starts playback                             |
| `pause()`              | Pauses playback                             |
| `toggle()`             | Toggles play/pause                          |
| `seekTo(milliseconds)` | Seeks to a position in the current sound    |
| `next()`               | Skips to the next sound (playlist only)     |
| `prev()`               | Skips to the previous sound (playlist only) |
| `setVolume(0–100)`     | Sets the volume                             |

### Key Getters (async — accept a callback)

| Getter                      | Callback Receives                |
| --------------------------- | -------------------------------- |
| `getCurrentSound(callback)` | `{ title, artwork_url, … }`      |
| `getDuration(callback)`     | Duration in milliseconds         |
| `getPosition(callback)`     | Current position in milliseconds |
| `isPaused(callback)`        | Boolean                          |

### Key Events

| Event                            | Data Passed to Listener                          |
| -------------------------------- | ------------------------------------------------ |
| `SC.Widget.Events.READY`         | —                                                |
| `SC.Widget.Events.PLAY`          | —                                                |
| `SC.Widget.Events.PAUSE`         | —                                                |
| `SC.Widget.Events.FINISH`        | —                                                |
| `SC.Widget.Events.PLAY_PROGRESS` | `{ relativePosition: 0–1, currentPosition: ms }` |
| `SC.Widget.Events.SEEK`          | `{ relativePosition: 0–1, currentPosition: ms }` |
| `SC.Widget.Events.ERROR`         | —                                                |

### Hidden iframe Approach

The iframe must remain in the DOM for the Widget API to function. Hide it
visually using CSS rather than `display: none` (which can cause the browser
to not render the iframe at all):

```css
.soundcloud-hidden-iframe {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
```
