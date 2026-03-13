# Public Data Fetching Spec

## Purpose
Define the minimum data-fetching flow for the public vehicle slug page.

Use this doc to keep queries simple, safe, and aligned with the real Supabase schema.

## Route Input
Input:
- `slug` from URL path `/[slug]`

Source field:
- `vehicles.shared_link`

## Fetching Goal
Return only the data needed to render:
- vehicle summary
- category tabs
- maintenance items
- history entries

## Source of Truth
For implementation, use `database.types.ts` as the schema truth.
If shared docs conflict with real generated types, follow `database.types.ts`.

## Minimum Fetch Flow
### Step 1. Fetch vehicle by slug
Query `vehicles` using:
- `shared_link = slug`

Return only fields needed for public display, such as:
- `id`
- `shared_link`
- vehicle display fields needed for summary card
- image reference if available
- odometer/current mileage field if available

Rules:
- if no vehicle found, show unavailable state
- if slug is empty or invalid, do not continue further fetches

### Step 2. Fetch logs for that vehicle
Query `user_logs` using:
- `car_id = vehicle.id`

Return only fields needed for display, such as:
- `id`
- `car_id`
- `log_type`
- date field(s)
- odometer field(s)
- notes/spec fields needed on public page
- `odo_log` if needed for display logic

Rules:
- if no logs found, still render vehicle summary and empty content state

### Step 3. Fetch log types used by those logs
Query `log_types` using IDs from:
- `user_logs.log_type`

Return only fields needed for grouping/display, such as:
- `id`
- item name/title field
- `category_link`
- optional icon/meta fields if actually used

Rules:
- fetch only the log types used by returned logs

### Step 4. Fetch categories used by those log types
Query `log_categories` using IDs from:
- `log_types.category_link`

Return only fields needed for tabs, such as:
- `id`
- category name/title field
- optional ordering/icon fields if actually used

Rules:
- fetch only categories used by returned log types

## Preferred Shaping Flow
After raw fetches complete, shape data in frontend code into a clean public-page model.

Suggested shaping steps:
1. `vehicle`
2. `logs`
3. `logTypeById`
4. `categoryById`
5. build category tabs
6. group logs under items inside each category
7. sort entries newest first

## Target View Shape
Target UI structure:
- vehicle summary
- categories[]
  - items[]
    - historyEntries[]

This is a view model, not a database shape.

## Query Rules
- keep queries minimal
- request only needed columns
- do not fetch owner/account/device data
- do not fetch unrelated vehicles
- do not fetch all log types or all categories globally
- avoid nested over-fetching if a simple staged fetch is clearer

## Safety Rules
- slug page is public read-only content
- return only the shared vehicle's minimum needed data
- respect Supabase RLS or another approved public-read strategy
- do not expose private user details

## Error Handling Rules
### Vehicle fetch fails or returns nothing
Show unavailable state.
Do not continue normal rendering.

### Logs fetch fails
Prefer unavailable or error state for content area.
Do not show fake empty data.

### Log type/category fetch partially fails
Fail safely.
Prefer not to render broken grouped data.

## Empty Data Rules
### Vehicle found, no logs
Render:
- vehicle summary
- empty maintenance state

### Logs found, but some log types missing
Treat as data integrity issue.
Do not silently invent labels.

### Categories missing for some log types
Treat as data integrity issue unless a fallback rule is defined later.

## Performance Rules
- fetch in small stages
- keep payloads narrow
- memoize shaped data where useful
- do not create extra requests on tab switch if all needed data is already loaded

## Recommended Initial Strategy
For v1 public slug page:
- fetch all needed data once when page loads
- build tabs from fetched data
- switch tabs client-side

This keeps the page simple and avoids repeated category fetches.

## Exclusions
This doc does not define:
- exact UI layout
- exact formatting rules for dates/units
- exact SEO behavior
- exact RLS implementation details
- exact storage/image URL resolution details

Those belong in separate docs if needed.

## Acceptance Criteria
The fetching strategy is correct if:
- slug resolves vehicle using `vehicles.shared_link`
- logs are fetched using `user_logs.car_id`
- log types are resolved from `user_logs.log_type`
- categories are resolved from `log_types.category_link`
- only minimum public data is returned
- page can render summary, tabs, items, and history from the fetched data

