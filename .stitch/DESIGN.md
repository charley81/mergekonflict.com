# Merge Konflict Design System

## Overview
- **Vibe**: Dark, moody, high-contrast, aggressive yet sophisticated.
- **Platform**: Web (Desktop-first with mobile responsiveness).
- **Core Aesthetic**: Massive display typography, high-contrast red accents against deep blacks and warm off-whites.

## Design System (Tailwind V4 / shadcn/ui)

This project uses **Tailwind CSS V4** with semantic CSS variables defined in `src/app/globals.css`.

### Colors
Semantic tokens for Light and Dark modes.

| Token | Light Mode (OKLCH) | Dark Mode (OKLCH) | Role |
| :--- | :--- | :--- | :--- |
| `--background` | `1 0 0` | `0.141 0.005 285.823` | Main page background |
| `--foreground` | `0.141 0.005 285.823` | `0.985 0 0` | Main text color |
| `--primary` | `0.553 0.195 38.402` | `0.47 0.157 37.304` | Brand Primary (Bold Red) |
| `--primary-foreground` | `0.98 0.016 73.684` | `0.98 0.016 73.684` | Text on primary background |
| `--secondary` | `0.967 0.001 286.375` | `0.274 0.006 286.033` | Secondary backgrounds/surfaces |
| `--muted` | `0.967 0.001 286.375` | `0.274 0.006 286.033` | Muted elements/placeholders |
| `--muted-foreground` | `0.552 0.016 285.938` | `0.705 0.015 286.067` | Muted text |
| `--accent` | `0.967 0.001 286.375` | `0.274 0.006 286.033` | Interactive accents |
| `--border` | `0.92 0.004 286.32` | `1 0 0 / 10%` | Default border color |

### Typography
Font Family: **Inter** (Primary), **Arial** (Fallback/Inputs).

| Level | Size | Weight | Line Height | Case |
| :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `185.4px` | 900 | `1.0` | Uppercase |
| **Heading 1** | `25.2px` | 700 | `1.2` | Uppercase |
| **Heading 2** | `20px` | 700 | `1.6` | Normal |
| **Body Main** | `12.6px` | 400 | `1.7` | Normal |
| **Button Text** | `12.6px` | 600 | `1.0` | Uppercase |

### Spacing & Layout
- **Max Container**: `1200px`
- **Section Padding**: `64px` (Vertical)
- **Rhythm (Gap)**: `44px`
- **Gutter**: `24px`

### Borders & Shapes
- **Radius (`--radius`)**: `0.45rem`
- **Radius (Button)**: `9999px` (Full/Pill)

## Component Patterns

### Navbar
- Sticky, high-z-index navigation bar.
- Glassmorphism effect (`backdrop-blur-md`) when scrolled.
- Artist logo (Left), Links (Right), Theme Toggle (Right).

### Buttons
- **Primary**: Pill-shaped (`rounded-full`), `bg-primary` background, `text-primary-foreground`, bold.
- **Secondary**: Pill-shaped, transparent background, `border-primary` border, `text-primary`.
- **Ghost**: No background/border, `text-primary`.

### Section: Hero
- Full-height viewport.
- Large background image with dark overlay.
- Centered massive display text using `--foreground`.
- Scroll-down indicator at bottom center.

### Section: Audio Player (Mixes)
- Grid layout for multiple mixes.
- Custom controls using shadcn `Slider` for progress.
- Play/Pause with primary colored buttons (`bg-primary`).
- Artwork on the left, info and controls on the right.

### Section: Forms (Contact)
- Clean, vertical stack.
- Labels using `text-foreground`.
- Inputs with `bg-secondary` background and subtle `border-input`.
- Massive full-width "Submit" button at the end (`rounded-lg`).
