# Current Feature: Refactor Data Fetching: Centralize Queries & Add Cache Tags

## Status
Completed

## Goals
- Create `src/lib/queries.ts` and move all GROQ query strings there (Done)
- Add `sanityFetch` helper to `src/sanity/lib/client.ts` (Done)
- Update each section component to import queries and use `sanityFetch` with tags (Done)
- Ensure tags match document types (`show`, `siteSettings`) (Done)
- Add `heroTitle` field to Sanity and use it in HeroSection (Done)
- Verify build and revalidation (Done)

## Notes
- Centralized all GROQ queries into `src/lib/queries.ts`.
- Implemented `sanityFetch` helper with support for Next.js cache tags and `revalidate: 0` for tag-based revalidation.
- Updated all section components to use the new fetching pattern with proper type interfaces.
- Added `heroTitle` to `siteSettings` schema to allow independent control of hero text vs artist name.
- Fixed several build errors related to missing type definitions and accidental placeholders.
- Cleaned up unused imports and improved type safety by using `unknown` instead of `any`.
- Verified build passes with zero errors.

## History
- 2026-05-15: Initialized feature branch `refactor/centralize-groq-queries`.
- 2026-05-15: Centralized queries, implemented helper, and updated components. Fixed minor build issues and finalized caching strategy.
- 2026-05-15: Added `heroTitle` field to Sanity schema and HeroSection. Verified successful build.
- 2026-05-15: Final code scanner cleanup (unused imports, type safety). Verified successful build.
