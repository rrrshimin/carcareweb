# Web Product Scope

## Purpose
This document defines the scope of the CarCare Diary web project.

The web project exists to support two public-facing needs:
1. A landing page at the root domain.
2. A read-only public vehicle page opened through a shared slug.

The landing page is already implemented and is not part of the current build scope. The current focus is the public vehicle share experience.

## Tech Stack
The web project should follow this stack:
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React for icons

The web implementation should stay aligned with the shared product docs and real Supabase schema, but should use web-appropriate patterns rather than React Native patterns.

## Product Goal
Allow a vehicle owner to generate a public share link from the mobile app so another person can open a browser URL and view that vehicle's maintenance information in a clean, read-only format.

Example route pattern:
- `/[slug]`

Example public URL:
- `carcare.com/some-vehicle-slug`

## In Scope
### 1. Public vehicle page
Build a read-only web page for a shared vehicle slug.

The page should:
- Resolve the slug from the URL.
- Load the linked vehicle from Supabase.
- Show core vehicle information.
- Show vehicle image if available.
- Show current odometer.
- Show maintenance data grouped into category tabs such as Engine, Fluids, Brakes, and similar categories based on actual data.
- Show maintenance items inside each category.
- Show maintenance history entries for each item.
- Work well on desktop and mobile web.

### 2. Public states
The page must include the following states:
- loading state
- invalid slug or unavailable page state
- vehicle without image state
- vehicle without logs state
- category without items state, if applicable

### 3. Read-only sharing experience
The public page is for viewing only.
No editing, account creation, write actions, or owner-only controls should be available there.

### 4. Shared design language
The web page should visually align with the CarCare Diary product style where practical, while still behaving like a normal responsive website.

## Out of Scope
The following are not part of this implementation:
- Building or reworking the landing page
- Full web dashboard or full browser version of the app
- User authentication on web
- Editing vehicle details on web
- Adding logs on web
- Mileage updates on web
- Share link creation on web
- Share link disable/delete on web
- Subscription flows on web
- Multi-vehicle account management on web
- Admin tools
- CMS features
- PDF export
- SEO/content marketing work beyond what is required for the existing landing page and the basic public page metadata

## Ownership Split Between Mobile and Web
### Mobile app responsibilities
The mobile app remains the source of truth for owner actions.
It is responsible for:
- creating or enabling the share link
- generating or assigning the slug on the vehicle record
- allowing the owner to copy the share link
- disabling sharing if that feature exists
- all data creation and editing

### Web responsibilities
The web app is responsible for:
- resolving the slug from the browser URL
- fetching public read-only data for that slug
- presenting the vehicle and maintenance history clearly
- handling invalid or unavailable public links gracefully

## Route Scope
### Current active route scope
- `/[slug]` - public vehicle page

### Existing but not current implementation focus
- `/` - landing page already built separately

### Optional future static routes
These are not in current scope unless already needed by the existing site:
- `/privacy`
- `/terms`

## Public Vehicle Page Content Scope
The public vehicle page should include:
- app/site header area
- vehicle card or vehicle summary section
- vehicle image
- vehicle make, model, and year if available from actual schema
- fuel type and transmission if available
- current odometer summary
- category tabs driven by actual maintenance categories
- maintenance item groups within the selected category
- history rows/cards for each maintenance item
- note text where present
- dates and relevant specs where present

## Behavior Rules
- The page must be read-only.
- The slug page should only show data for a vehicle that is explicitly shareable through its stored slug.
- Invalid or missing slug should show a proper unavailable state, not a broken page.
- Data mapping must use the actual generated Supabase types as implementation truth.
- The UI may reshape raw Supabase data into cleaner frontend view models.
- Categories shown in tabs should come from actual linked maintenance data, unless a later spec defines a fixed category order.
- Maintenance history should be presented in a user-friendly order, normally newest first unless another spec says otherwise.

## Data Scope Principles
The web app should only fetch and expose data required for the public page.
It should not expose private owner data or unrelated tables.

Only include public-facing vehicle and maintenance information needed to render:
- vehicle identity information
- vehicle image
- odometer display value
- maintenance category and item labels
- maintenance history entries
- notes/specification text that belongs to those entries

## Security and Access Principles
The public slug page must be treated as intentionally shared content.
That does not mean the full database is public.

Implementation should ensure:
- only data tied to the slugged shared vehicle is returned
- only the minimum required fields are returned
- no owner email, account details, or unrelated vehicles are exposed
- the final implementation respects Supabase RLS or another safe public-read strategy

## UX Principles
The public page should feel simple and trustworthy.

Design principles:
- immediate clarity about which vehicle is being viewed
- maintenance information easy to scan
- category navigation clear and lightweight
- no clutter from owner-only actions
- good mobile responsiveness
- graceful empty states

## Delivery Scope for Current Phase
The current implementation phase should produce:
1. React web route for slug-based public vehicle pages
2. Supabase fetch flow for shared vehicle data
3. Public page layout with vehicle summary and category tabs
4. Maintenance history rendering for each category/item
5. Loading, empty, and invalid states
6. Responsive styling using Tailwind CSS v4

## Deferred Decisions
These are intentionally left for later documents:
- exact slug validation rules
- exact tab ordering rules
- exact field-to-UI mapping for every maintenance entry
- exact RLS strategy or whether to use a view/RPC
- exact SEO metadata for slug pages
- exact image fallback treatment
- exact copywriting for empty and error states

These should be defined in separate web-specific docs such as:
- `public-vehicle-page-spec.md`
- `public-data-fetching-spec.md`
- `schema-reality-map.md`
- `seo-and-metadata-spec.md`

## Acceptance Summary
This web project is successful for the current phase if:
- a shared vehicle slug opens a readable public page
- the page shows the correct vehicle and its maintenance information
- the page is read-only
- invalid or unavailable slugs are handled cleanly
- the implementation uses the agreed React + Vite + Tailwind stack
- the solution remains clearly separated from the mobile app codebase while staying aligned to the same product and data model

