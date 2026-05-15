# Phase 6.5: UI Styling Polish

## Overview

Apply targeted CSS, layout, and spacing fixes across every section of the site
while preserving all existing functionality. This phase covers section
whitespace, border-radius on buttons and inputs, navbar background on light
mode, mobile sidebar padding, hero text layout, and the mixes section title.
No icons are changed here — that work belongs to Phase 6.6. No new packages are
installed. No existing imports or component logic are altered.

## Prerequisites

- Phase 2 (Site Build) complete — all section components exist and render
- Phase 1.2b (shadcn/ui + theme) complete — preset `bKcD70rQG` applied
- Dev server running with `pnpm dev`

## Requirements

### 1. Double Section Spacing (Sections Between Hero & Footer)

- Double the current vertical whitespace between every section that sits below
  the hero and above the footer
- The simplest way: if sections currently use `py-16`, change to `py-32`; if
  they use `py-12`, change to `py-24`; if they use `py-20`, change to `py-40`
- All sections (`SectionShows`, `SectionMixes`, `SectionAbout`,
  `SectionConnect`, `SectionContact`) must be updated

### 2. Restore shadcn Default Border Radius on All Buttons

- The current shadcn preset `bKcD70rQG` may have overridden the standard
  shadcn border-radius
- Locate `--radius` in `globals.css` inside the `:root` block and set it to
  `0.5rem` (the shadcn default) if it's different
- This automatically resets border-radius on all shadcn components including
  `Button`, `Input`, `Textarea`, `Card`, `Badge`, `Dialog`, `Sheet`
- If `--radius` doesn't exist in `globals.css`, the preset likely uses the
  standard shadcn variable. In that case, verify all `Button` elements render
  with `rounded-md` (the default shadcn button radius) and override only if
  needed

### 3. Navbar Light Mode Background

- On **light mode only**, the navbar must have an opaque background matching
  the page background so the dark-coloured navigation links are legible over
  the hero image
- Implementation: add `bg-background` to the navbar element. Since the theme
  toggle applies the `.dark` class on `<html>`, the `bg-background` CSS
  variable automatically resolves to the correct colour for each mode
- The navbar should remain transparent in dark mode — use Tailwind's built-in
  dark variant: remove any hardcoded transparent class and let
  `bg-background` handle both modes
- Existing sticky/fixed positioning, z‑index, and blur effects must be
  preserved

### 4. Navbar Mobile Sidebar Padding

- The link list inside the shadcn `Sheet` (mobile menu) must have the same
  horizontal padding as the header row that contains the logo and close button
- Locate the existing `SheetContent` or its children and ensure `px-*`
  matches whatever padding the Sheet's header region uses

### 5. Hero Text — Vertical h1, No Subtitle

- Remove the subtitle (`heroTagline`) line from the hero section entirely —
  both the rendered element and the Sanity fetch are affected (remove only the
  rendering; the data fetch can remain unchanged)
- Rotate the `<h1>` (artist name) **-90 degrees** so it reads bottom‑to‑top
  using Tailwind's transform utilities: `-rotate-90 origin-bottom-left`
- Position the rotated h1 on the **left edge** of the hero, on the same
  vertical line as the navbar logo
- The h1 must remain vertically centred relative to the hero height
- The hero background image (`next/image` with `fill`) and its overlay stay
  untouched

### 6. Mixes Section Title

- Remove the play icon next to the "Latest Mixes" heading
- Left‑align the heading so it sits on the same vertical line as the "Upcoming
  Shows" header above it

### 7. Contact Form Inputs — Default Border Radius

- All `Input` and `Textarea` elements in the contact form must use the shadcn
  default border-radius
- This should be automatically fixed by Step 2 (changing `--radius` to
  `0.5rem`). If not, apply `rounded-md` directly to the affected input
  components

## Implementation Steps

### Step 1: Audit current section spacing

Open one of the section component files (e.g., `SectionShows.tsx`). Find the
outermost `<section>` element and note its `py-*` class. Double that value.
Apply the same multiplier to all section components: `SectionShows`,
`SectionMixes`, `SectionAbout`, `SectionConnect`, `SectionContact`. Do not
modify `SectionHero` or `Footer` — they are excluded.

### Step 2: Reset `--radius` to 0.5rem

Open `globals.css` (or `src/app/globals.css`). Find the `:root` block. If
`--radius` exists and is not `0.5rem`, change it to `0.5rem`. If it doesn't
exist, add: `--radius: 0.5rem;`. Save and verify that all buttons and inputs
render with the default shadcn border-radius.

### Step 3: Navbar background on light mode

Open `src/components/Navbar.tsx`. Find the outermost `<header>` or `<nav>`
element and ensure it has the class `bg-background` (replace any static
background class). The navbar will now be opaque in light mode and opaque in
dark mode — verify the dark‑mode appearance is acceptable.

### Step 4: Mobile Sheet padding

In the same `Navbar.tsx`, find the `<SheetContent>` or its children. Match
the `px` value to whatever the Sheet header row uses. If the header uses
`px-4`, apply `px-4` to the link list container.

### Step 5: Rotate hero h1, remove subtitle

Open `SectionHero.tsx`.

- Delete the line that renders `heroTagline`.
- Replace the h1 with: `<h1 className="-rotate-90 origin-bottom-left text-foreground ...">`
- Adjust the h1's position so it sits on the left edge, vertically centred,
  and aligned with the navbar logo. A common pattern:
  ```html
  <div className="absolute left-8 top-1/2 -translate-y-1/2">
    <h1
      className="-rotate-90 origin-bottom-left whitespace-nowrap text-6xl font-bold text-foreground"
    >
      {artistName}
    </h1>
  </div>
  ```
