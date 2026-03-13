# Public Page View Model

## Purpose
Define the frontend data shape for the public vehicle slug page.

This model sits between raw Supabase rows and rendered React components.

Rule:
- database queries should use real schema from `database.types.ts`
- UI components should consume this cleaner view model

## Top-Level Shape

```ts
type PublicVehiclePageModel = {
  vehicle: PublicVehicle
  categories: PublicCategory[]
}
```

## Vehicle

```ts
type PublicVehicle = {
  id: string
  slug: string
  displayName: string
  year?: number | null
  fuelType?: string | null
  transmission?: string | null
  imageUrl?: string | null
  currentOdometer?: number | null
}
```

Notes:
- `slug` maps from `vehicles.shared_link`
- `displayName` is a UI-ready name built from available vehicle fields
- missing optional fields should be omitted cleanly in UI

## Category

```ts
type PublicCategory = {
  id: string
  label: string
  items: PublicMaintenanceItem[]
}
```

Notes:
- one tab = one category
- categories should include only categories that have visible items/logs

## Maintenance Item

```ts
type PublicMaintenanceItem = {
  id: string
  label: string
  iconName?: string | null
  historyEntries: PublicHistoryEntry[]
}
```

Notes:
- usually maps from `log_types`
- `label` is the UI title shown inside the selected category
- `iconName` is optional and should not block rendering

## History Entry

```ts
type PublicHistoryEntry = {
  id: string
  serviceDate?: string | null
  odometer?: number | null
  specs?: string | null
  notes?: string | null
}
```

Notes:
- one row/card in the maintenance history list
- newest first in each item
- do not render empty fields unnecessarily

## Mapping Intent
Use the model to convert:
- raw vehicle row -> `PublicVehicle`
- raw category row -> `PublicCategory`
- raw log type row -> `PublicMaintenanceItem`
- raw user log row -> `PublicHistoryEntry`

## Expected Tree

```ts
PublicVehiclePageModel
- vehicle
- categories[]
  - items[]
    - historyEntries[]
```

## Display Rules
- `categories` should already be filtered to visible categories only
- `items` should already be grouped under the correct category
- `historyEntries` should already be sorted newest first before render
- components should render this structure directly with minimal extra logic

## Empty State Rules
- vehicle exists + no logs -> `categories` should be empty
- invalid slug -> do not build this model, show unavailable state instead
- partial broken data -> prefer dropping invalid fragments rather than inventing values

## Naming Rules
Use clean UI names in components.
Do not pass raw DB field names deep into presentational components.

Examples:
- use `slug`, not `shared_link`
- use `currentOdometer`, not raw DB naming
- use `label`, not mixed title/name field names in UI

## Implementation Note
This file defines the target UI model, not exact database columns.
Exact field mapping should follow:
- `schema-reality-map.md`
- `public-data-fetching-spec.md`
- `database.types.ts`

## Acceptance Check
The view model is correct if:
- React components can render the full public page from this shape alone
- raw Supabase naming does not leak into UI components
- tabs, items, and history are already grouped before render

