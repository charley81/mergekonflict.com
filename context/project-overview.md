# mergekonflict.com Project Specification

## 1. Core Concept & Problem Statement

- **Problem:** The drum and bass DJ "merge konflict" needs a strong, professional, and centralized online presence to promote himself, share his music, announce shows, and connect with his audience. He currently lacks a single, easily updatable source of truth for his brand.
- **Solution:** A high-performance, single-page website (evolving to multi-page) that acts as a digital hub. It will dynamically showcase his brand, music, and events while being straightforward to manage via a headless CMS.
- **Unique Value Proposition:** ["Dark Techstep and amen-heavy dnb" focused brand. The site will reflect this genre's aesthetic through dark, moody design with aggressive accent colors.]

## 2. Target Users

- **Primary:** Fans of dark techstep, jungle, and amen-heavy drum and bass.
- **Secondary:** Event promoters, booking agents, label representatives, and music bloggers.
- **Admin:** The DJ "merge konflict," who will manage the site's content.

## 3. Feature Requirements (v1.0)

- **3.1. Global Layout & Navigation**
  - **3.1.1. Header:**
    - Fixed/sticky navigation bar at the top of the viewport.
    - Logo (linking to the top of the page).
    - Smooth-scroll anchor links to: `#about`, `#shows`, `#mixes`, `#connect`, `#contact`.
    - A prominent CTA button stylized as a link: "Book Me" / "Contact" that also smooth-scrolls to the `#contact` section.
  - **3.1.2. Footer:**
    - Site logo.
    - Copyright text dynamically updating the year: `© {currentYear} merge konflict. All rights reserved.`

- **3.2. Hero Section (`#hero`)**
  - Full-viewport height background with a custom artist photo or a CSS/SVG dark abstract pattern.
  - Headline: Artist name in a large, bold display font (e.g., "MERGE KONFLICT").

- **3.3. Upcoming Shows (`#shows`)**
  - **Data Source:** Payload CMS `Shows` Collection.
  - **Display Logic:**
    - Query shows where the `date` is >= the current date.
    - Sort shows by `date` in ascending order.
    - Display a maximum of 5 upcoming shows.
    - If no upcoming shows exist, display a well-designed empty state message: "No shows announced yet. Check back soon or follow me on social media for updates."
    - **Edge Case:** A show for the current day must still be displayed until its `time` has passed (or a defined end time).
  - **Data Displayed:** Date (formatted as a human-readable string - mm dd), URL, time of show in two hours ex. 2-4pm EST.

- **3.4. Latest Mixes (`#mixes`)**
  - **Data Source:** server-side fetch from the SoundCloud API (using either a custom proxy endpoint to secure client ID or oEmbed).
  - **Fetching:** Fetch the latest N tracks from a designated playlist. (Start with a hardcoded playlist URL, then move to a Payload Global for admin control).
  - **Display Logic:**
    - Display a grid of track cards. (Max 3 tracks on load).
    - **Custom Player Component:** A shared audio player (floating) that can be controlled programmatically. Clicking a track card plays it in this shared player.
    - **Track Card Data:** Artwork (`artwork_url`), Title, Genre/Tag, Playback duration, Waveform image (if available).
    - **"View All" Link:** A secondary button/link that opens the SoundCloud playlist in a new tab (`target="_blank"`).
  - **States:** Loading (skeleton cards), Empty (message if playlist is empty), Error (message if fetch fails).

- **3.5. About Section (`#about`)**
  - **Data Source:** Payload CMS `About` Global.
  - Two-column layout on desktop (stacking on mobile).
  - **Column 1:** A professional artist photo (optimized with `next/image`).
  - **Column 2:** The artist bio formatted as rich text (headings, paragraphs, links).

- **3.6. Connect Section (`#connect`)**
  - **Data Source:** Payload CMS `Connect` Global.
  - A horizontally centered list of social media icons (SoundCloud, Instagram, Facebook, YouTube, Bandcamp, Twitch).
  - Each icon is a link, opening in a new tab. The list of icons should be easily configurable from the CMS.

- **3.7. Contact Form (`#contact`)**
  - **Data Source:** Payload CMS `Contact Submissions` Collection.
  - **Form Fields:** Name (text), Email (email), Subject (text, optional), Message (textarea).
  - **Tech:** `react-hook-form` for state management, `zod` for validation, and Shadcn UI components (Input, Textarea, Button, useToast).
  - **Logic:** On submit, send the form data to a Next.js Server Action, which creates a new document in the `Contact Submissions` collection.
  - **User Feedback:** On success, reset the form and display a success toast. On error, display an error toast. Show a loading state on the submit button during submission.

## 4. Data Architecture & Modeling (Payload CMS)

All content will be modeled in Payload CMS. This defines the shape of the API response consumed by the Next.js frontend.

- **4.1. `Shows` Collection**
  - `date`: `date` field (required, admin UI to only pick future dates optionally).
  - `time`: `text` field (e.g., "10:00 PM - 2:00 AM").
  - `Url`: `text` field (required).

- **4.2. `Contact Submissions` Collection**
  - `name`: `text` field (required).
  - `email`: `email` field (required).
  - `subject`: `text` field (optional).
  - `message`: `textarea` field (required).
  - `createdAt`: Automatically managed timestamp.
  - _Admin configuration:_ Disable public API access for this collection (access: `create: () => true, read: () => false`).

- **4.3. `About` Global**
  - `artistPhoto`: `upload` field (required, single image).
  - `bio`: `richText` field (required).

- **4.4. `Site Config` Global**
  - `siteName`: `text` field (default: "merge konflict").
  - `tagline`: `text` field (default: "Dark Techstep & Amen Heavy DNB").
  - `heroBackground`: `upload` field (image) OR `text` field (CSS value for a gradient/pattern). This gives you flexibility.

- **4.5. `Social Links` Array Field** (within a Global or Site Config)
  - `platform`: `select` field (with options like SoundCloud, Instagram, etc.).
  - `url`: `text` field (required, URL).
  - `icon`: `text` field (to map a platform to a Lucide React icon name). Alternatively, a custom component could handle this mapping.

## 5. UI/UX Design System

- **5.1. Color Scheme & CSS Variables**
  All colors will be defined as CSS custom properties in `app/globals.css` for maintainability.
  - `--color-primary`: `#E1381A` (CTA buttons, links, accent elements)
  - `--color-light`: `#FAF4F3` (Primary text on dark backgrounds)
  - `--color-dark`: `#370E06` (Primary background, bold text)
  - `--color-dark-grey`: `#A4918E` (Secondary text, borders, muted elements)
  - `--color-light-grey`: `#F2EEEE` (Card backgrounds, subtle section backgrounds)

- **5.2. Typography**
  Use the `next/font` module for performance.
  - **FONT:** Font ( `Inter` for a clean look). Defined via a CSS variable `--font-primary`.

- **5.3. Responsiveness**
  - **First Principle:** Mobile-first design. All layouts begin with a single-column structure and add complexity using `md:` or `lg:` breakpoints.
  - **Container:** A max-width container (`max-w-7xl` or custom) centered on the page with appropriate padding.

- **5.4. Micro-interactions**
  - **Smooth Scroll:** `scroll-behavior: smooth;` on the `html` element.
  - **Toast Notifications:** Use Shadcn UI's `sonner` or `useToast` component for success/error messages.
  - **Loading States:** Use Shadcn UI's `Skeleton` component to create ghost-UI loading placeholders for mixes, shows, etc. This significantly improves perceived performance.

## 6. Technology Stack & Integration

- **6.1. Frontend Framework:** Next.js (using App Router for layout, server components, and streaming). **Constraint:** All new components must be built using Shadcn UI primitives, and styled with Tailwind CSS.

- **6.2. Backend & Content Management:**
  - **Payload CMS:** Installed directly within the Next.js `/app` folder for a unified application.
  - **Database:** Neon (serverless PostgreSQL). The `POSTGRES_URL` environment variable in Vercel handles the connection.
  - **Storage:** Vercel Blob Storage (for uploaded images, as configured in Payload's `payload.config.ts`).

- **6.3. Music Integration:**
  - **API:** SoundCloud API.
  - **Method: Stream URLs (Server/Client).**
    - Fetch track data server-side using a library like `soundcloud.ts`.
    - In the custom player component, use an HTML5 `<audio>` element directly with the fetched `stream_url`.
    - **Pros:** Complete native control, no iframe overhead, easier to style a fully custom UI.
    - **Cons:** Requires securely handling a SoundCloud `client_id`, and ensuring you comply with SoundCloud's Developer Terms of Service regarding streaming.

- **6.4. Deployment & Hosting:**
  - **Platform:** Vercel.
  - **Process:** The entire application (frontend + CMS) is deployed as a single, unified Next.js project.

## 7. Component Architecture (React Tree)

A proposed structure for your Next.js `app` directory:

app/
├── layout.tsx (includes Navbar, Footer; wraps children)
├── page.tsx (assembles all sections)
├── globals.css (CSS variables, Tailwind directives)
components/
├── ui/ (shadcn primitives)
├── section-hero.tsx
├── section-shows.tsx (fetches shows and handles empty state)
├── section-mixes.tsx (SoundCloud player + “View All” link)
├── section-about.tsx
├── section-connect.tsx
├── section-contact.tsx (form with validation + submission action)
├── navbar.tsx
├── footer.tsx
├── soundcloud-player.tsx (custom player using Widget API)
└── toast-provider.tsx
lib/
├── payload.ts (Payload client config)
├── soundcloud.ts (fetch playlist/oEmbed data)
server-actions/
├── submit-contact.ts (saves to Payload)

## Important

- Database migration
  - NEVER use prisma db push or directly update the database structure. ALWAYS create migrations that run in the development first, then production
