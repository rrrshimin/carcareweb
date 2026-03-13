# Supabase Web Integration Notes

## Purpose
Define the minimum Supabase integration rules for the web project.

Keep implementation simple, safe, and aligned with the public slug page scope.

## Current Web Use Case
The web app needs Supabase only for:
- reading one shared vehicle by slug
- reading its related maintenance data
- resolving image URLs if needed

The web app does not currently need write operations.

## Stack Context
Web stack:
- React 18
- TypeScript
- Vite
- Tailwind CSS v4

Supabase access should fit a normal React + Vite client setup unless a later decision introduces a backend layer.

## Source of Truth
For schema and field names:
- use `database.types.ts`

If shared docs conflict with generated schema:
- follow `database.types.ts`

## Environment Variables
Recommended client env names:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Rules:
- only Vite public env names should be used in browser code
- do not place service role keys in the frontend
- do not hardcode project URL or anon key in source files

## Client Setup
Recommended approach:
- create one shared Supabase client module
- reuse it across fetch utilities
- type it with generated database types if practical

Suggested location example:
- `src/lib/supabase.ts`

## Public Read Strategy
The public slug page is intentionally shareable.
That does not mean all tables should be publicly readable.

Implementation must ensure:
- only the shared vehicle page data can be read publicly
- only minimum required fields are returned
- no owner/account/private records are exposed

## Recommended Safety Principle
Prefer one of these safe strategies:
1. strict RLS policies that allow only the shared vehicle data needed for the page
2. a narrow public view or RPC that returns already-filtered public page data

For v1, choose the simplest safe option.

## Public Query Scope
Allowed public data should be limited to what the slug page needs:
- vehicle summary fields
- image reference or image URL
- maintenance log data needed for display
- maintenance type/category labels

Avoid exposing:
- user account data
- device/user-device data
- unrelated vehicles
- internal metadata not shown on page

## Table Usage Reminder
Likely main data path:
- `vehicles.shared_link`
- `user_logs.car_id`
- `user_logs.log_type`
- `log_types.category_link`

Use `schema-reality-map.md` as a quick implementation check.

## Image Handling
If vehicle image is stored in Supabase Storage or by stored path:
- resolve only the image needed for the current shared vehicle
- prefer a clean helper function for URL resolution
- if image is missing or URL fails, show UI fallback

Do not block the whole page on image failure.

## Error Handling
- missing/invalid slug -> unavailable state
- query failure -> fail safely
- image failure -> fallback image state
- partial broken data -> do not invent values

Do not expose raw Supabase errors directly in UI.

## Performance Notes
- create Supabase client once
- fetch only needed columns
- avoid repeated requests on tab switch if all page data is already loaded
- shape raw data into a view model before rendering

## Auth Notes
Current public page scope does not require sign-in.
Do not add auth dependencies unless later features require them.

## Write Access Notes
Current web scope does not include:
- creating logs
- editing vehicles
- changing slug
- disabling sharing

Do not implement write flows in this phase.

## Acceptance Criteria
Integration is correct if:
- browser app reads env from Vite variables
- frontend uses anon key only
- public page fetches only required shared vehicle data
- raw schema names come from `database.types.ts`
- page stays read-only
- no private account data is exposed

