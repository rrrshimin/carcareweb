# Web Routing and Slugs

## Purpose
Define the route structure and slug rules for the CarCare Diary web project.

Keep routing simple.
Current implementation focus is the public vehicle page.

## Active Routes
### Root
- `/`
- existing landing page
- already implemented
- not part of the current build work

### Public vehicle page
- `/:slug`
- read-only public vehicle page
- slug resolves a shared vehicle

## Optional Static Routes
These are allowed if needed by the existing site, but are not part of the current feature build:
- `/privacy`
- `/terms`

## Route Priority
Static routes should win over dynamic slug routes.

Examples:
- `/privacy` should open privacy page, not try to resolve slug `privacy`
- `/terms` should open terms page, not try to resolve slug `terms`

## Slug Source
Slug comes from:
- `vehicles.shared_link`

Rule:
- for implementation, use the real schema field from `database.types.ts`

## Slug Usage
A valid shared vehicle page is opened by:
- reading `slug` from URL
- finding matching vehicle where `vehicles.shared_link = slug`
- rendering the public vehicle page if found and shareable

## Recommended Slug Format
Preferred slug characteristics:
- lowercase
- URL-safe
- no spaces
- words separated by hyphens if needed

Examples:
- `my-bmw-e90`
- `golf-2018`
- `family-suv`

## Current Rule for Web
The web app should not generate or edit slugs.
It should only consume the slug from the URL.

Slug creation and management belong to the mobile app or backend flow.

## Validation Rules
At minimum:
- treat empty slug as invalid
- trim obvious accidental whitespace if needed before lookup
- do not accept route values meant for static pages

Keep web-side validation light.
The DB lookup is the real check.

## Reserved Paths
Reserve these so they are not treated as vehicle slugs:
- `privacy`
- `terms`

Optional future reserved words if needed later:
- `admin`
- `app`
- `download`
- `about`

Only reserve what is actually needed.
Keep the list short.

## Case Handling
Recommended behavior:
- treat slugs as case-sensitive only if DB values are case-sensitive
- preferred product behavior is lowercase-only slug creation upstream

Practical rule for current web phase:
- expect lowercase slug inputs
- do not add complex case-normalization logic unless needed

## Trailing Slash Behavior
Recommended behavior:
- `/my-car-slug` is the canonical form
- `/my-car-slug/` should resolve safely if router allows it

Avoid duplicate-route complexity.

## Invalid Slug Behavior
Show unavailable state when:
- slug is missing
- slug does not match any shared vehicle
- slug points to a vehicle that should not be publicly viewable

Suggested outcome:
- render a clean unavailable page/state
- do not expose technical DB errors

## Not Found vs Unavailable
For current product scope, both can use one simple public-facing state.

Suggested copy direction:
- This page is unavailable
- The shared link may be invalid or inactive

## Security Rules
- slug route must only return the minimum public data for that vehicle
- slug should never expose owner account details
- invalid slug responses should not reveal whether unrelated records exist

## Acceptance Criteria
Routing is correct if:
- `/` continues to serve the landing page
- `/:slug` serves the public vehicle page
- reserved static routes are not swallowed by the slug route
- invalid slug shows clean unavailable state
- slug lookup uses `vehicles.shared_link`

