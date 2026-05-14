# Phase 1.2b: shadcn/ui Preset + Component Library + Theme System

**Branch:** `chore/project-scaffold-ui`

## Overview

Apply the shadcn preset `bKcD70rQG` to the existing project, which injects all
85 theme tokens (colors, radius, fonts, light‑and‑dark CSS variables) into
`globals.css` and reinstalls any already‑present shadcn components to match the
new preset. Then install `next-themes`, wire up the official dark‑mode toggle
(ThemeProvider, ThemeToggle, Providers wrapper, `suppressHydrationWarning`), and
add a core set of shadcn/ui components that every section will need. The end
result is a project with a complete design system, a working dark‑mode toggle,
and a library of ready‑to‑use UI primitives.

## Prerequisites

- Next.js project with App Router, TypeScript, Tailwind
- pnpm installed
- Phase 1 (Sanity CMS) complete (unrelated but the project exists)
- `components.json` already exists from a previous `npx shadcn@latest init`

## Requirements

- Apply the custom shadcn preset:

  ```bash
  npx shadcn@latest apply --preset bKcD70rQG
  ```

  The ThemeToggle component is fully functional but is not currently placed anywhere in the UI. It will be integrated into the Navbar component when the base layout is built in a later phase (Phase 3.x). If you want to manually verify the toggle works now, you can temporarily import and place <ThemeToggle /> inside src/app/providers.tsx or layout.tsx — but this is optional and should be removed before committing.
