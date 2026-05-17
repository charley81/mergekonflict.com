# Current Feature: SoundCloud Player — CMS-Driven Numeric Playlist ID

## Status
Completed

## Goals
- Add `soundcloudPlaylistId` field to `siteSettings` Sanity schema. (Done)
- Update GROQ query in `src/lib/queries.ts` to include `soundcloudPlaylistId`. (Done)
- Update `src/app/page.tsx` to pass `soundcloudPlaylistId` to `MixesSection`. (Note: MixesSection fetches its own data, so updated it directly) (Done)
- Update `src/components/sections/mixes-section.tsx` to accept and pass the ID to `SoundCloudPlayer`. (Done)
- Update `src/components/sections/soundcloud-player.tsx` to use the dynamic ID instead of the hardcoded one. (Done)
- Update `src/hooks/use-soundcloud-widget.ts` to include `playlistId` in dependencies. (Done)
- Verify build and functionality. (Done)

## Notes
- Transitioned from a hardcoded numeric playlist ID to a CMS-controlled one.
- Implemented a fallback ID (`2168797649`) in `SoundCloudPlayer` to ensure the player remains functional if the CMS field is empty.
- Updated `useSoundCloudWidget` hook to re-initialize if the numeric ID changes.

## History
- 2026-05-17: Initialized feature branch `feature/soundcloud-sanity-id`.
- 2026-05-17: Completed implementation: updated schema, queries, components, and hooks. Verified successful build.
