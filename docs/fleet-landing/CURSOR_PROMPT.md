# Cursor task: Three CarCare Fleet landing pages

**Repository:** `CarCareWeb` (NOT the GTM repo). **Assets:** `src/assets/fleet-assets/`.
**Goal:** Publish three persuasive, fast, accessible landing pages: `/fleet-us`, `/fleet-uk`, `/fleet-fr`, using the **existing website's** visual language and components. Reuse ONE page structure with three locale configs. Keep implementation lean.

## Read before editing
1. Inspect existing routes, page layouts, header/footer, store badges + real store URLs, typography, styles, analytics, SEO handling and mobile patterns. Check current `/fleet-management-app` and preserve existing routes/behavior.
2. Inventory files under `src/assets/fleet-assets/` and identify exact US/UK/FR screenshot filenames by their contents. Known US examples: `US-fleet.PNG`, `US-car-inner.PNG`, `US-log-view.PNG`, `US-inspections.PNG`, `US-analytics.PNG`, `US-shared-car.PNG`. **Do not assume** those names or equivalents exist for other locales; use actual filenames. Never show miles or English app UI as a French or UK screenshot. If assets are missing, clearly report them; don't fabricate translations or screenshots.
3. Read the attached `FLEET_COPY.md` for approved claims and localized copy. Use its wording as the starting content, refining small phrasing issues only when necessary. Do not invent product functionality or plan/pricing details.

## Pages and layout
- Implement one shared `FleetLandingPage` (or matching project convention) plus small US/UK/FR content configs; no duplicate page trees, no new design system.
- Brand the marketing page **CarCare Fleet** while clearly identifying **CarCare Diary** as the app people download. Do not imply a separate store app.
- **Sticky header on every page and breakpoint**: existing brand/logo + TWO real, clickable App Store and Google Play badges. They must remain visible during scroll. On narrow phones use compact accessible badges, respect safe areas, avoid covering content, and do not obscure the site's existing navigation.
- Sections: (1) fleet-focused hero with headline, supporting copy, store badges and prominent **Fleet overview** screenshot; (2) at-a-glance benefits; (3) alternating, screenshot-led features for maintenance due/overdue, vehicle history/logs, multi-vehicle mileage updates, inspections, spending analytics/exports, and documents; (4) suitable for fleets of many sizes; (5) clear free-plan vs 1-month-trial explanation; (6) concise FAQ; (7) final store badges.
- Prefer actual screenshots, legible and cropped with restraint. Feature images should demonstrate the corresponding exact feature. Optimize responsive sizes, image loading and accessibility. Prioritize Fleet, Vehicle detail, Service log, Inspections, Analytics. The public shared-vehicle screenshot includes browser chrome; use only if genuinely helpful, not as primary hero visual.
- US route: English (US), US screenshot set, **miles**. UK route: English (UK), UK screenshot set, **km**. FR route: **natural French throughout**, French screenshot set, **km**. Never translate text embedded in screenshots through DOM overlays.
- One simple country/language switcher linking these routes; don't change global site language behavior.
- The page must look native to the **existing CarCare website**, not a new generic AI landing-page template. Preserve existing site header/footer conventions wherever compatible with sticky store badges.

## Accuracy and conversion rules
- Approved: any number of vehicles (including large fleets), manual/bulk mileage updates, maintenance reminders and overdue visibility, service/repair logs and history, inspection checklists, expense and fuel-category spending logs, analytics, documents, export of spending reports/data. Free: one vehicle with logs and due reminders. A **1-month free trial is available**. Do not show fixed subscription prices; these depend on the stores.
- Explicitly **not supported**: team accounts/roles/shared collaboration, GPS/live vehicle location, telematics/automatic mileage, routes, driver management, guaranteed compliance or quantified savings. Don't imply fuel consumption is read automatically; it is logged as an expense. Avoid guaranteed downtime reduction; you may say maintenance visibility helps plan ahead and *may* reduce avoidable downtime.
- CTA copy: **Download the app** (FR: **Télécharger l’application**); store badges are the actual links, not a fake in-browser trial. No meeting/demo forms.
- Do not imply all fleet features are permanently free. If the actual in-app trial eligibility/setup differs from the brief, flag this before publishing; don't invent requirements like no credit card needed.

## SEO and measurement
- Three unique titles, descriptions, headings and `lang`; self-canonical URLs and reciprocal `hreflang` for `en-US`, `en-GB`, `fr-FR` (add x-default only if appropriate). Use project-native SEO implementation. No broken routes, duplicate canonical URLs or accidental noindex.
- Read existing real store URLs from the code/config. Never invent them. Keep store-click behavior working. Reuse existing analytics; if unavailable, add a minimal event hook for `store_click` containing only page locale, platform and available campaign UTMs (no user-level/in-app tracking). Preserve UTM parameters on landing navigation where appropriate and ensure instrumentation does not block store navigation. Do **not** add a new analytics service or implement GTM backend changes.
- Mobile first, a11y, image alt text, fast loading, no heavy new dependencies. Check 320px, 375px, tablet and desktop.

## Delivery / QA
- Implement and run relevant build, typecheck and existing tests.
- Inspect all three routes in desktop/mobile browser if available, especially sticky-store-badge behavior, image mapping, locale/unit consistency, FR copy, store URLs and SEO metadata.
- Report: URLs, precise asset mapping per region, any missing assets, exact reused components, tests/build result, outstanding launch blockers. Do not deploy or change the GTM repository without approval. Stop after implementation and QA.
