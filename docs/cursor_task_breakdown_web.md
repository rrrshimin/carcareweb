# Cursor Task Breakdown - Web

## Purpose
Keep implementation focused, incremental, and low-cost.

Rule:
- build in small steps
- verify each step before moving on
- avoid broad rewrites

## Phase 1. Project setup
Tasks:
- confirm React + Vite + TypeScript project structure
- confirm Tailwind CSS v4 is working
- confirm shared docs are present in `/docs`
- confirm Supabase env variables are wired
- create shared Supabase client module

Done when:
- app runs locally
- Supabase client can be imported

## Phase 2. Routing shell
Tasks:
- confirm root route remains landing page
- add public slug route `/:slug`
- add simple placeholder page for slug route
- ensure static routes are not swallowed if they exist

Done when:
- visiting a test slug opens slug page shell

## Phase 3. Public vehicle fetch
Tasks:
- read slug from route
- fetch vehicle by `vehicles.shared_link`
- handle missing or invalid slug
- render loading and unavailable states

Done when:
- valid slug returns a vehicle shell
- invalid slug shows unavailable state

## Phase 4. Related maintenance fetch
Tasks:
- fetch logs by `user_logs.car_id`
- fetch related `log_types`
- fetch related `log_categories`
- keep queries minimal

Done when:
- page has enough raw data to build grouped content

## Phase 5. View-model shaping
Tasks:
- map raw Supabase data into public page view model
- group data into category -> item -> history entries
- sort entries newest first
- keep UI components free of raw DB naming

Done when:
- one clean model can drive the full page

## Phase 6. Page UI
Tasks:
- build vehicle summary card
- build category tabs
- build maintenance item sections
- build history entry rows/cards
- add image fallback

Done when:
- valid slug renders a readable public page

## Phase 7. Empty and edge states
Tasks:
- no logs state
- missing image state
- empty category protection
- safe handling for partial broken data

Done when:
- page handles non-ideal states gracefully

## Phase 8. Responsive polish
Tasks:
- desktop layout
- mobile stacked layout
- tab usability on small screens
- spacing and typography cleanup

Done when:
- page feels usable on desktop and mobile

## Phase 9. Cleanup
Tasks:
- remove debug code
- keep fetch helpers small
- keep component props typed
- avoid dead files and speculative abstractions

Done when:
- implementation is clean enough for handoff or next feature work

## Rules For Cursor
- do not implement landing page work in this task
- do not add auth
- do not add write flows
- do not invent schema fields
- use `database.types.ts` as schema truth
- prefer small files and simple fetch flow
- ask less, implement one phase at a time

## Recommended Working Pattern
For each phase:
1. implement only that phase
2. run/check it
3. summarize what changed
4. move to next phase

## Acceptance Check
This breakdown is successful if Cursor can build the public slug page step by step without drifting into unrelated web-app features.

