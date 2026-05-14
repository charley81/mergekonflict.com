# Phase 2: Stitch Design Extraction & Full Site Build

**Branch:** `feature/stitch-to-react`

## Overview

Extract the design system from the Google Stitch prototype, then build out every section of the site. The extracted design informs all components, and every UI element uses shadcn/ui primitives. The contact form follows the official shadcn form pattern: Zod for validation, `useActionState` for server‑side form handling (with error and pending states), and `sonner` toasts for success feedback. Contact submissions are stored in Sanity CMS for review and also emailed to you via Resend. Content for shows, bio, social links, and SoundCloud URLs is fetched from Sanity CMS in React Server Components. Images in the hero and about sections come from `/public/images`. The light/dark theme toggle lives in the top navbar.

## Prerequisites

- Phase 1 (Sanity CMS) complete — Studio at `/studio`, schemas created, development dataset live
- Phase 1.2b (shadcn/ui + theme) complete — preset `bKcD70rQG` applied, `next-themes` wired up
- Stitch MCP extension installed and API key configured (Phase 0.1)
- Stitch Agent Skills installed (Phase 0.2)
- Sanity MCP server configured (Phase 0.11)
- Sanity Agent Toolkit installed (Phase 0.12)
- Resend account created at [resend.com](https://resend.com) with a verified domain or the test address `onboarding@resend.dev`
- Resend API key generated at [resend.com/api-keys](https://resend.com/api-keys)
- Sanity write token created at [manage.sanity.io](https://manage.sanity.io) → API → Tokens → Editor role
- `/public/images/` contains `hero.jpg` and `about.jpg`

## Requirements

Add to `.env.local`

# Resend

RESEND_API_KEY=<your-resend-api-key>
EMAIL_FROM="Merge Konflict <onboarding@resend.dev>"e
EMAIL_TO=your-email@example.com

### Design Extraction

- Use the `/stitch` command to connect to the Stitch project (`9965551158283883935`)
- Extract all screens and generate a DESIGN.md file documenting the design system
- Extract the colour palette, typography, spacing, border-radius, and component patterns
- Download all screen screenshots and HTML to `.stitch/designs/`
- Make sure to use template provided in global.css for color choices (shadcn light/dark mode)

### Layoutw

- RootLayout already has `suppressHydrationWarning` and `<Providers>` from Phase 1.2b
- Build a single‑page site (`src/app/page.tsx`) that composes all section components
- Each section is a separate component in `src/components/sections/`
- Use best practive seperation of concerns
- use best practive D.R.Y

### Navbar

- Fixed top navbar with transparent background (sticky)
- Logo/artist name on the left
- Smooth‑scroll links to each section on the right
- Theme toggle button (sun/moon) integrated into the navbar
- Mobile: hamburger menu using shadcn `Sheet` component
- Links: Home, Shows, Mixes, About, Connect, Contact

### Hero Section

- Full‑screen hero (100vw/100vh)
- Background image from `/public/images/hero.jpg` (or `.png`) using `next/image` with `fill` and `objectFit: 'cover'`
- Artist name and tagline overlaid — text fetched from Sanity `siteSettings` document
- Animated with tailwind to bounce up and down scroll‑down indicator at the bottom (<HugeiconsIcon icon={ArrowDownDoubleIcon} />)

### Upcoming Shows Section

- Fetched from Sanity `show` document type, ordered by date ascending
- List view with horizontal dividers (shadcn `Separator`)
- Each row: date (formatted, e.g., "OCT 14"), venue (linked to `ticketUrl`), time slot
- Date colour: primary text; venue link colour: primary; time colour: muted text
- Empty state: "No upcoming shows" message
- Loading state: shadcn `Skeleton` rows

### Latest Mixes Section

- Fetch SoundCloud playlist URL from Sanity `siteSettings.soundcloudPlaylistUrl`
- Custom audio player component using the SoundCloud Widget API
  - Hidden iframe + `SC.Widget` JavaScript API
  - shadcn `Button` for play/pause
  - shadcn `Slider` for progress/seek
  - Track title and artwork displayed
  - All player controls coloured using Tailwind semantic tokens
- "View All" link below the player — opens `siteSettings.soundcloudProfileUrl` in a new tab

### About Section

- Two‑column layout on desktop (image left, bio right); single column on mobile
- Image from `/public/images/about.jpg` (or `.png`) — `next/image`, `objectFit: 'cover'`
- Bio text fetched from Sanity `siteSettings.aboutBio` (Portable Text)
- Use `@portabletext/react` to render the rich text

### Connect Section

- Social media links fetched from Sanity `siteSettings.socialLinks` array
- Each link: circular icon button with primary background and white icon
- Icons mapped from Lucide based on the `icon` field in the CMS
- Each icon links to the corresponding profile URL

### Contact Form

- Built with the official shadcn form pattern (no React Hook Form):
  - `<Field />` components for each input
  - `useActionState` hook from React for form state, pending state, and error handling
  - Zod schema for server‑side validation
  - Server Action (`'use server'`) for form submission
  - `sonner` toast on success
  - Field‑level error display using `<FieldError />`
- Fields: name, email, subject, message
- Labels colour: foreground; input placeholder colour: muted; border‑radius: 4.5px
- Submit button: primary background, disabled during pending
- On success: toast "Message sent!" and reset form
- On validation error: display errors next to each field, preserve user input

### Footer

- Minimalist horizontal bar
- Dark background (brand dark colour)
- Copyright text fetched from Sanity `siteSettings.footerCopyright`
- Padding: 16px all around

### Data Fetching

- Sanity client already configured in `src/sanity/lib/client.ts` (from scaffold)
- GROQ queries for each section run in React Server Components
- `siteSettings` treated as a singleton — always fetch the first document
- Revalidation: use `next.revalidate` or `fetch` cache options for ISR

## Implementation

### Step 1: Extract Designs from Stitch

Start Gemini CLI and run the `/stitch` command to extract the design:
