# Phase 6.1: Sanity Data Seeding (Development Dataset)

**Branch:** `chore/seed-data`

## Overview

Create seed data files for the `show` and `siteSettings` document types,
then import them into the Sanity `development` dataset. This populates the
Upcoming Shows, Hero, About, Connect, Footer, and SoundCloud sections with
realistic placeholder content so the frontend can be fully visualised and
tested locally. No production data is touched.

## Prerequisites

- Phase 1 (Sanity CMS) complete — `show`, `siteSettings`, and
  `contactSubmission` schemas exist, `development` dataset created
- Phase 2 (Site Build) complete — all frontend sections are implemented
- `.env.local` contains:
