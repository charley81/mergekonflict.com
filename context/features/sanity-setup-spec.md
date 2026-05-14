# Phase 1: Sanity CMS Setup

**Branch:** `chore/sanity-cms-setup`

## Overview

Install Sanity CMS into the existing Next.js project using the official
`next-sanity` toolkit. Scaffold the embedded Studio at `/studio`, create the
`show`, `siteSettings`, and `contactSubmission` document types, set up isolated
`development` and `production` datasets, configure CORS, and verify everything
works. This phase produces a working Sanity Studio — no frontend data‑fetching
or Visual Editing yet.

## Prerequisites

- Next.js project with App Router, TypeScript, Tailwind
- Node 18+
- pnpm
- Sanity account (https://www.sanity.io)
- Sanity MCP server configured (`pnpm dlx sanity@latest mcp configure` – already done)
- Sanity Agent Toolkit installed (`pnpm dlx skills add sanity-io/agent-toolkit` – already done)

## Requirements

- Run `pnpm dlx sanity@latest init` to scaffold Sanity
  - Embedded Studio at `/studio`
  - Create or connect a Sanity project (the CLI will prompt)
- Create a private `development` dataset for local work
- Update `sanity.config.ts` to read dataset from `SANITY_STUDIO_DATASET`, falling back to `production`
- Set up `.env` with `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET=development`
- Delete example schema types and create three required schemas:
  - `src/sanity/schemaTypes/show.ts`
  - `src/sanity/schemaTypes/siteSettings.ts`
  - `src/sanity/schemaTypes/contactSubmission.ts`
- Register schemas in `src/sanity/schemaTypes/index.ts`
- Add CORS origin `http://localhost:3000` with credentials
- Verify Studio at `/studio` and create test documents
- Production dataset (`production`) already exists – no extra setup needed
- `pnpm build` passes

## Implementation Steps

### 1. Scaffold Sanity

```bash
pnpm dlx sanity@latest init
```
