# Phase 6.6: Icon Migration & Connect Section Update

## Overview

Remove the `hugeicons-react` library from the project and replace every
instance with Lucide (for UI/action icons) or Simple Icons (for brand logos).
Update the Connect section to display brand icons for Bandcamp, Instagram,
SoundCloud, and Mixcloud using `@icons-pack/react-simple-icons`. Implement a
three‑tier icon resolver so future unknown platforms never render a broken
icon. Verify the contact form email delivery via Resend.

## Prerequisites

- Phase 6.5 (UI Styling Polish) complete
- `hugeicons-react` is currently installed and imported in at least one component
- Resend account and API key ready
- `.env.local` contains `RESEND_API_KEY`, `EMAIL_FROM`, and `EMAIL_TO`

## Requirements

### 1. Remove Hugeicons

- Uninstall `hugeicons-react` from the project
- Find every file that imports from `hugeicons-react` and replace those
  imports with Lucide equivalents
- The known usage: the hero scroll‑down indicator uses `ArrowDownDoubleIcon`.
  Replace it with `ChevronsDown` from `lucide-react`
- After all replacements are complete, confirm zero references to
  `hugeicons-react` remain in the codebase

### 2. Install Simple Icons

- Install the official React wrapper for Simple Icons:
  ```bash
  pnpm add @icons-pack/react-simple-icons
  ```
