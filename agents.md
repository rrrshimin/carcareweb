# AGENTS.md

## Purpose
This file is the quick-start guide for AI coding agents working in this web project.

Read this first.
Use it to understand scope, priorities, and which docs matter most.

## Project Type
CarCare Diary web project.

Current focus:
- public read-only vehicle page by slug

Already exists:
- landing page at `/`

Do not spend time rebuilding or redesigning the landing page in the current task.

## Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React

## Current Goal
Implement the public vehicle page at:
- `/:slug`

This page should:
- resolve a vehicle by shared slug
- show vehicle summary
- show category tabs
- show grouped maintenance history
- remain fully read-only

## Do Not Do
- do not rebuild the landing page
- do not add auth
- do not add write flows
- do not invent schema fields
- do not add speculative features
- do not over-abstract early

## Source of Truth Priority
Use docs in this order:

1. `docs/database.types.ts`
2. `docs/schema-reality-map.md`
3. `docs/web-product-scope.md`
4. `docs/public-vehicle-page-spec.md`
5. `docs/public-data-fetching-spec.md`
6. `docs/public-page-view-model.md`
7. `docs/web-routing-and-slugs.md`
8. `docs/supabase-web-integration-notes.md`
9. `docs/cursor-task-breakdown-web.md`

Rule:
- if any conceptual doc conflicts with `database.types.ts`, follow `database.types.ts`

## Working Style
Work in small phases.
Do not try to solve the whole project in one pass.

Preferred flow:
1. read only the docs needed for the current phase
2. implement one phase
3. keep code small and typed
4. avoid unrelated changes
5. summarize what changed

## Data Rules
The public page is intentionally shareable, but only minimal public data should be exposed.

Likely main path:
- `vehicles.shared_link`
- `user_logs.car_id`
- `user_logs.log_type`
- `log_types.category_link`

Use real field names from generated types.

## UI Rules
The page should be:
- simple
- readable
- responsive
- read-only

Main display structure:
- vehicle summary
- category tabs
- maintenance items
- history entries

## Cost Control Rules
Keep token and code cost low.

Preferred behavior:
- read targeted docs, not everything every time
- avoid long speculative planning
- avoid generating large unused file trees
- prefer direct implementation over multiple alternative proposals
- keep helper files compact

## Done Criteria
The current task is successful if:
- `/:slug` works
- valid slug shows the correct vehicle page
- invalid slug shows a clean unavailable state
- tabs and grouped history render correctly
- implementation stays read-only and aligned with real schema

