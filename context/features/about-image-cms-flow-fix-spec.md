# Feature: aboutImage Full‑Flow Integration

**Branch:** `feature/about-image-full-flow`

## Overview

Ensure the `aboutImage` field is correctly integrated into every layer of the
site: Sanity schema, GROQ query, Next.js data fetching, and the About section
component. The field must be fully functional in production — including when
no image has been uploaded yet (null‑safe). This spec also confirms the
production dataset is ready for the image to be uploaded after deployment.

## Goals

- Add `aboutImage` to the `siteSettings` Sanity schema if it is missing
- Update the GROQ query to project `aboutImage` with a resolved URL and null
  safety (`"aboutImageUrl": aboutImage.asset->url`)
- Update the About section component to consume the new `aboutImageUrl`
  string (not an object) and handle the `null` case gracefully (fallback to
  `/images/about.jpg` or a placeholder)
- Verify the production build succeeds and the About section renders without
  errors even before an image is uploaded
- After deployment, confirm the image can be uploaded in the production Studio
  and appears on the live site

## Requirements

1. **Schema** – Open `src/sanity/schemaTypes/siteSettings.ts` and ensure this
   field exists inside the `fields` array:
   ```ts
   defineField({
     name: 'aboutImage',
     title: 'About Image',
     type: 'image',
     options: { hotspot: true },
   })
   ```
