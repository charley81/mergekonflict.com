# SoundCloud Player — CMS‑Driven Numeric Playlist ID

## Overview

Replace the hardcoded numeric playlist ID (`2168797649`) in the SoundCloud
player with a CMS‑controlled field. Add a new `soundcloudPlaylistId` string
field to the `siteSettings` Sanity schema, update the GROQ query to include it,
pass it through the page → mixes section → player component chain, and remove
the hardcoded constant. After this phase, changing the playlist requires only
editing a number in the Sanity Studio — no code deploys.

## Prerequisites

- Phase 1 (Sanity CMS) complete — `siteSettings` schema exists
- Phase 2 (Site Build) complete — `SectionMixes`, `SoundCloudPlayer`,
  `useSoundCloudWidget` exist
- SoundCloud player is currently working with the hardcoded ID `2168797649`
- Sanity Studio accessible at `/studio`

## Requirements

### 1. Add `soundcloudPlaylistId` Field to Sanity Schema

- File: `src/sanity/schemaTypes/siteSettings.ts`
- Add a new `defineField` inside the existing `fields` array:
  ```typescript
  defineField({
    name: 'soundcloudPlaylistId',
    title: 'SoundCloud Playlist ID (numeric)',
    type: 'string',
    description:
      'Numeric playlist ID from the SoundCloud embed code. Used to construct the widget player URL.',
  })
  ```
