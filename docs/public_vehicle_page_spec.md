# Public Vehicle Page Spec

## Purpose
Define the read-only public vehicle page opened by slug.

Route:
- `/[slug]`

Example:
- `carcare.com/my-car-slug`

## Goal
Show a shared vehicle and its maintenance history in a simple public web view.

## Page Structure
1. Header
2. Vehicle summary card
3. Category tabs
4. Maintenance items list for selected category
5. History entries inside each item

## Header
Should include:
- CarCare Diary logo
- optional app download buttons if already part of shared site header

Header should stay simple and not include owner controls.

## Vehicle Summary Card
Show if available:
- vehicle image
- display name
- year
- fuel type
- transmission
- current odometer

Notes:
- If some fields are missing, hide them rather than showing placeholders like `-`.
- If no image exists, show a clean fallback state.

## Category Tabs
Tabs replace the old single "All Logs" view.

Tabs should:
- be driven by actual category-linked maintenance data
- show only categories that have at least one matching log item
- switch content without page reload

Examples:
- Engine
- Fluids
- Brakes
- Tires
- Battery

Default behavior:
- open the first available category tab

Ordering:
- use a stable category order if one exists in data
- otherwise sort by category name

## Content Inside Each Tab
Inside the selected category, show maintenance items for that category.

Each item block should include:
- item name
- optional item icon if available later
- item history entries

Examples of item names:
- Engine Oil
- Oil Filter
- Brake Fluid
- Air Filter

Ordering of items:
- sort alphabetically unless a later rule defines a product-specific order

## History Entry Structure
Each maintenance item contains one or more history entries.

Each entry should show when available:
- change/service date
- odometer value
- specs/value text
- notes

Rules:
- newest entries first
- hide rows for fields that are fully empty
- notes should appear only if notes exist

## Grouping Logic
Expected display logic:
1. Find vehicle by slug
2. Load logs for that vehicle
3. Join each log to its log type
4. Join each log type to its category
5. Build tabs from categories
6. Group logs under maintenance items within each category

Result shape should be:
- category
  - item
    - history entries

## States
### Loading
Show lightweight loading state for:
- vehicle summary
- tabs/content area

### Invalid or unavailable slug
Show a clean unavailable state when:
- slug does not exist
- vehicle is not shareable
- record cannot be returned safely

Suggested copy direction:
- This page is unavailable
- The shared vehicle link may be invalid or no longer active

### No image
Show fallback vehicle image area or placeholder card.

### No logs
If vehicle exists but no logs are available, show vehicle summary and a simple empty state in the content area.

Suggested copy direction:
- No maintenance history has been shared yet

### Empty category
Normally should not happen if tabs only show categories with data.
If it does happen, show a lightweight empty state.

## Interaction Rules
- read-only only
- no edit buttons
- no delete actions
- no owner-only controls
- no expandable admin tools
- tab click changes visible category content only

## Responsive Rules
### Desktop
Preferred layout:
- vehicle summary card on the left
- tabs and maintenance content on the right

### Mobile
Stack layout:
- vehicle summary first
- tabs below
- maintenance content below tabs

Tabs on small screens should remain usable without clutter.

## Data Rules
Implementation must use real schema from `database.types.ts`.
Do not assume doc-friendly column names.

Important mapping reminders:
- slug from `vehicles.shared_link`
- logs from `user_logs.car_id`
- log type from `user_logs.log_type`
- category from `log_types.category_link`

## Exclusions
This page does not include:
- editing
- creating logs
- mileage updates
- share management
- sign in
- owner account info
- subscription prompts tied to vehicle ownership

## Acceptance Criteria
The page is correct if:
- visiting a valid slug shows the correct vehicle
- category tabs are built from actual maintenance data
- each tab shows maintenance items for that category
- each item shows its history entries newest first
- page is fully read-only
- invalid slug state is handled cleanly
- layout works on desktop and mobile

## Open Questions For Later
Leave these for follow-up docs or implementation decisions:
- exact visual design of tab component
- exact empty/error/loading copy
- exact category order if product wants fixed ordering
- exact field formatting for dates and odometer units
- exact image fallback design

