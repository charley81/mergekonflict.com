# Phase 1.2a: Payload CMS & Database Setup

**Branch:** `chore/project-scaffold-cms`

## Overview

Install Payload CMS 3.0 inside the existing Next.js project, connect it to the
Neon `dev` database via the `@payloadcms/db-postgres` adapter (Drizzle inside),
configure Vercel Blob storage for media, set up the `/admin` route, and create
a minimal Users collection for admin authentication. No frontend components are
touched – only Payload infrastructure.

## Prerequisites

- Next.js project exists with App Router, TypeScript, Tailwind
- `.env.local` contains `DATABASE_URL` pointing to the Neon `dev` branch
- Node.js 18+
- pnpm installed

## Requirements

- Install Payload CMS 3.0 + Postgres adapter + Lexical rich text
- Install `@payloadcms/storage-vercel-blob`
- Create `src/payload.config.ts` with `postgresAdapter`, `lexicalEditor`, Vercel
  Blob plugin, empty collections/globals, admin config
- Create minimal `src/collections/Users.ts` for admin auth
- Wrap Next.js config with `withPayload()` in `next.config.ts` (or `.mjs`)
- Create Payload route files:
  - `src/app/(payload)/layout.tsx`
  - `src/app/(payload)/admin/[[...segments]]/page.tsx`
  - `src/app/(payload)/api/[[...segments]]/route.ts`
  - `src/app/(payload)/importMap.js`
- Add `PAYLOAD_SECRET` and `BLOB_READ_WRITE_TOKEN` to `.env.local`
  - Generate `PAYLOAD_SECRET` with `openssl rand -base64 32`
  - For local dev, either obtain a Vercel Blob token or disable the plugin
- Verify dev server starts and `/admin` loads (create first admin user)
- Generate types with `pnpm payload generate:types`
- Push schema to the dev database with `pnpm payload migrate:create` then
  `pnpm payload migrate` (or rely on auto push in dev)

## Implementation Steps (in order)

1. Install packages using pnpm:
