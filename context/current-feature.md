# Current Feature: Payload CMS & Database Setup

## Status
Completed

## Goals
- Install Payload CMS 3.0 + Postgres adapter + Lexical rich text
- Install `@payloadcms/storage-vercel-blob`
- Create `src/payload.config.ts`
- Create `src/collections/Users.ts`, `src/collections/Media.ts`, `src/collections/Shows.ts`, and `src/collections/ContactSubmissions.ts`
- Create `src/globals/About.ts` and `src/globals/SiteConfig.ts`
- Configure `next.config.ts` with `withPayload`
- Create Payload route files in `src/app/(payload)`
- Set up environment variables in `.env`
- Verify admin panel loads and generate types
- Resolve hydration and TypeScript declaration issues

## Notes
- Using Neon (PostgreSQL) as database
- Using Vercel Blob for storage
- Payload 3.0 is Next.js native (App Router)
- **Important:** Disabled `reactCompiler` in `next.config.ts` to fix compatibility issues with Payload 3.0 Admin UI.
- Layouts are split into `(site)` and `(payload)` route groups to avoid duplicate `<html>` tags.
- Created `src/types/payload.d.ts` to resolve `TS2882` on CSS imports.
- REST API uses `[[...slug]]` and Admin UI uses `[[...segments]]` to satisfy internal Payload expectations.

## History
- 2026-05-10: Started implementation of Payload CMS infrastructure.
- 2026-05-10: Resolved hydration errors and duplicate tag issues by restructuring app directory.
- 2026-05-10: Unified catch-all parameters and fixed 404 issues by disabling React Compiler.
- 2026-05-10: Added full schema (Shows, ContactSubmissions, About, SiteConfig) and synchronized database.
- 2026-05-10: Resolved TypeScript `TS2882` error via custom module declarations.
- 2026-05-10: Finalized App Router structure for reliable routing in Next.js 16.
- 2026-05-10: Completed Payload 3.0 installation, configuration, and verification.
