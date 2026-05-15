# Current Feature: Refactor Data Fetching: Centralize Queries & Add Cache Tags

## Status
Completed

## Goals
- Create `src/lib/queries.ts` and move all GROQ query strings there (Done)
- Add `sanityFetch` helper to `src/sanity/lib/client.ts` (Done)
- Update each section component to import queries and use `sanityFetch` with tags (Done)
- Ensure tags match document types (`show`, `siteSettings`) (Done)
- Verify build and revalidation (Done)

## Notes
- Centralized all GROQ queries into `src/lib/queries.ts`.
- Implemented `sanityFetch` helper with support for Next.js cache tags and `revalidate: 0` for tag-based revalidation.
- Updated all section components to use the new fetching pattern.
- Verified build passes with zero errors.

## History
- 2026-05-15: Initialized feature branch `refactor/centralize-groq-queries`.
- 2026-05-15: Centralized queries, implemented helper, and updated components. Fixed minor build issues and finalized caching strategy.
