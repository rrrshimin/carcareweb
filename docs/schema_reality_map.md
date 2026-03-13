# Schema Reality Map

Use this file as the quick bridge between product docs and the real Supabase schema.

Rule:
- For implementation, `database.types.ts` is the source of truth.
- If any shared doc conflicts with actual generated types, follow `database.types.ts`.

## Why this exists
Some shared docs use cleaner conceptual names. The real database currently uses different field names. This file helps avoid wrong queries, wrong joins, and hallucinated columns.

## Main table mapping

### Vehicles
Docs may describe:
- `shared_link_slug`
- `device_id`

Actual schema uses:
- `vehicles.shared_link`
- `vehicles.user_id_link`

Notes:
- Public slug lookup should use `vehicles.shared_link`.
- Do not invent a `shared_link_slug` column unless the schema is changed later.

### User logs
Docs may describe:
- `vehicle_id`
- `log_type_id`
- `auto_log`

Actual schema uses:
- `user_logs.car_id`
- `user_logs.log_type`
- `user_logs.odo_log`

Notes:
- Vehicle join should use `user_logs.car_id -> vehicles.id`.
- Log type join should use `user_logs.log_type -> log_types.id`.
- Automatic odometer flag/value logic should check `odo_log`, not `auto_log`.

### Log types
Docs may describe:
- `category_id`

Actual schema uses:
- `log_types.category_link`

Notes:
- Category join should use `log_types.category_link -> log_categories.id`.

### Devices / users
Docs may describe:
- `devices`

Actual schema uses:
- `user_devices`

Notes:
- Be careful not to query a non-existent `devices` table.
- For the public slug page, device/user tables should usually not be needed.

## Quick mapping table

| Docs name | Actual schema |
|---|---|
| `vehicles.shared_link_slug` | `vehicles.shared_link` |
| `vehicles.device_id` | `vehicles.user_id_link` |
| `devices` | `user_devices` |
| `user_logs.vehicle_id` | `user_logs.car_id` |
| `user_logs.log_type_id` | `user_logs.log_type` |
| `user_logs.auto_log` | `user_logs.odo_log` |
| `log_types.category_id` | `log_types.category_link` |

## Safe implementation rules
- Always check `database.types.ts` before writing queries.
- Map raw DB fields into cleaner frontend names if needed.
- Keep this mapping layer in code rather than pretending the DB already uses doc-friendly names.
- For the web public page, avoid querying tables not needed for slug-based read-only display.

## Suggested frontend aliases
Use aliases in code only, not in SQL assumptions.

Suggested frontend names:
- `sharedSlug` -> from `vehicles.shared_link`
- `vehicleId` -> from `user_logs.car_id`
- `logTypeId` -> from `user_logs.log_type`
- `isOdoLog` or `odoLog` -> from `user_logs.odo_log`
- `categoryId` -> from `log_types.category_link`

## Current impact on web public page
For the slug page, the likely main join path is:
1. find vehicle by `vehicles.shared_link`
2. get logs by `user_logs.car_id`
3. join log type by `user_logs.log_type`
4. join category by `log_types.category_link`

## Maintenance rule
Keep this file short and update it only when the real schema changes or when shared docs are corrected.

