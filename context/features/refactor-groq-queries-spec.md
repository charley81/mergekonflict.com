# Refactor Data Fetching: Centralize Queries & Add Cache Tags

**Branch:** `refactor/centralize-groq-queries`

## Overview

Refactor all Sanity data fetching to follow the official best practice: extract
GROQ queries into a single `src/lib/queries.ts` file, create a `sanityFetch`
helper in `src/sanity/lib/client.ts` that supports Next.js cache tags, and
update every section component to use the new helper with type‑specific tags.
Once complete, publish‑triggered webhook revalidation will work correctly.

## Prerequisites

- Phase 1 (Sanity CMS) complete
- Phase 6.5 (UI Styling Polish) complete
- Revalidation route (`src/app/api/revalidate/route.ts`) already created

## Requirements

- Create `src/lib/queries.ts` and move all GROQ query strings there
- Add `sanityFetch` helper to `src/sanity/lib/client.ts` (wrapper around
  `client.fetch` with `next` cache options)
- Update each section component to import queries from `src/lib/queries.ts`
  and fetch data through `sanityFetch` with a `tags` array
- Tags must match the document types: `show` → `['show']`, `siteSettings` →
  `['siteSettings']`
- The webhook route (`src/app/api/revalidate/route.ts`) already calls
  `revalidateTag(body._type)` — no changes needed there
- `pnpm build` passes with zero errors
- Manual verification: publish a change in the Studio, hard‑refresh the
  frontend, confirm the change appears

## Implementation

### Step 1: Create Centralized Queries File

File: `src/lib/queries.ts`

```typescript
import { groq } from 'next-sanity'

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]{
  artistName,
  heroTagline,
  "heroImageUrl": heroImage.asset->url,
  "aboutImageUrl": aboutImage.asset->url,
  aboutBio,
  socialLinks[]{
    platform,
    url,
    icon
  },
  soundcloudPlaylistUrl,
  soundcloudProfileUrl,
  footerCopyright
}`

export const SHOWS_QUERY = groq`*[_type == "show"] | order(date asc){
  venue,
  date,
  timeSlot,
  ticketUrl,
  location
}`
```
