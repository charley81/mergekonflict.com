# Current Feature: Seed Production Database

## Status
Completed

## Goals
- Update `scripts/seed-data.json` to match Sanity schema definitions. (Done)
- Update Sanity schemas (`show`, `siteSettings`) to match `seed-data.json`. (Done)
- Update frontend components to use new field names (`artistName`, `timeSlot`, `ticketUrl`). (Done)
- Seed Sanity `development` and `production` datasets with initial content. (Done)
- Add safety fallbacks for dynamic links to prevent `null` href errors. (Done)

## Notes
- Branch: `feature/seed-production-db`
- Field renames: 
  - `siteSettings.siteName` -> `artistName`
  - `show.time` -> `timeSlot`
  - `show.url` -> `ticketUrl`
- Deleted old documents with outdated schemas from both datasets.

## History
- 2026-05-15: Initialized feature branch `feature/seed-production-db`.
- 2026-05-15: Updated Sanity schemas and frontend components.
- 2026-05-15: Seeded and published documents in `development` and `production` datasets.
- 2026-05-15: Verified content and resolved `null` href prop-type errors.
