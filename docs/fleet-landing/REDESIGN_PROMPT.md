# Cursor task: redesign CarCare Fleet landing pages

Invoke `@frontend-design` or `/frontend-design` from `.cursor/skills/frontend-design/SKILL.md` before designing. Work in the **CarCareWeb** repository, not the GTM engine repository.

## Goal
Redesign the existing `/fleet-us`, `/fleet-uk`, `/fleet-fr` pages, which currently feel chaotic and have uneven screenshot sizes, weak hierarchy, an unnecessary language switcher and an inadequate FAQ. Do not patch the current layout one card at a time: rethink composition as one persuasive mobile-app landing page with a strong editorial rhythm. The audience is someone managing business vehicles who arrives from a short cold email and should understand the app quickly and tap an App Store or Google Play button.

## Non-negotiables
- Keep all 3 routes and **one shared reusable page component**. Keep existing website branding, palette, typography, reusable components, store URLs, SEO/canonicals/hreflang, and the working `store_click`/UTM behavior.
- **Remove the US/UK/FR language switcher completely from the visible UI.** URLs already determine language/market. Keep metadata/hreflang without visible switching.
- **Both App Store and Google Play CTAs remain visible in a sticky header** from desktop down to 320px. Make them compact and legible on small devices; no overlap, clipping, unreadable shrinking, or intrusive banner. CTAs say/download, not "Start free trial" if their destination is a store listing. Keep meaningful CTAs near hero and bottom too.
- Use provided locale-matched screenshots from `src/assets/fleet-assets/`, preserving US miles/$, UK km/£, FR French/km/€. Do not mix locale images. Do not fabricate product UI or modify screenshot text. Flag any embedded untranslated strings rather than silently claiming they are translated.
- No new dependencies, external mockup generators or elaborate animation frameworks unless absolutely required. Do not rewrite `/fleet-management-app`, unrelated site pages, or analytics.

## Visual direction
- Premium, clean, confident, purposeful, mobile-first fleet-management product page. Feel aligned with existing CarCare branding, not a generic agency SaaS template.
- Build a real visual hierarchy. **One dominant hero**, fewer but richer product showcases, deliberate whitespace and alternating compositions, restrained supporting features, a substantial FAQ, and a concise conversion footer.
- Don't repeat identical rounded cards for every section; don't stack six full-height screenshots with random widths.
- Use **consistent CSS phone shells** (not stock phone imagery) around the actual screenshots. Equal device proportions / bezel treatment / shadows; ensure screenshots retain their native aspect ratio and text legibility. Crop only intentionally and never stretch. Screenshots already have status/navigation bars, so avoid duplicating them with mockup overlays. For long screenshots use a defined viewing window with a sensible focal crop, not squashed full-page images.
- Hero candidate: one large fleet-overview phone, with a smaller secondary screen only if it supports the composition. Feature showcases can use one device with a focused heading + brief benefit. Desktop: balanced text/image; mobile: controlled image sizes, never giant full-screen screenshots overwhelming the page.

## Suggested narrative (adapt composition as needed)
1. Hero: fleet overview, clear pain/value, short subcopy, store CTAs and one-month-trial note (no unsupported terms).
2. **Know what's due before it becomes overdue**: fleet health, upcoming/overdue maintenance. Avoid measurable "reduce downtime" claims.
3. **A history for every vehicle**: mileage, service/repair logs, reminders, multi-vehicle management and bulk mileage updates.
4. **Inspections and spending**: give each a distinct layout; quick/pre/post/full checks, expense tracking, categories, analysis, CSV/PDF spending exports.
5. Secondary benefits in a compact, quiet area (not endless cards): multiple vehicles, user-entered fuel expenses, documents/records where supported.
6. Transparent trial/free-plan explanation and final download CTA.
7. **Substantive FAQ**: 8–9 useful questions, with concise honest answers. Use `FAQ_COPY.md` as content guidance; adapt UK wording and write natural French, not word-by-word translation.

## Product facts / constraints
- Brand on these pages: **CarCare Fleet** (app/store identity remains CarCare Diary).
- Not limited to small fleets, but do **not** claim a benchmarked maximum/unlimited capacity.
- Manage multiple vehicles, fleet health, due/overdue, service history, mileage, bulk mileage updates, maintenance reminders, inspections, expenses/analytics, spending exports, documents.
- Fuel is logged manually as an expense category, not automatic fuel consumption tracking.
- No GPS/telematics, OBD integration, live location, driver management, separate team accounts, permissions, or web fleet dashboard claims. Sharing a login is not a collaboration feature.
- One-month trial available; free plan supports **one vehicle, service logs and due reminders**. Don't list paid prices or claim no card is needed. Store pricing/eligibility are shown in the app/stores.

## Workflow
1. Inspect existing 3 routes, asset mapping, shared website components, and the current implementation. Read only directly relevant files plus `FAQ_COPY.md`.
2. Before coding, summarize a **short design concept** (hero composition, section rhythm, phone treatment, responsive header, 4–6 existing palette tokens). Then implement it. Don't spend a round creating a long design document.
3. Build all routes via shared components and localized content config. Fix copy for actual buying questions instead of generic benefits.
4. **Visually self-review** local screenshots at 1440px, 390px and 320px (at least US desktop/mobile and FR mobile; ideally all routes). If browser screenshot capture isn't available, explicitly report that instead of claiming review. Check phone scale, section rhythm, image crops, sticky badges and FAQ in real renders. Do one refinement pass based on visible problems.
5. Run build/typecheck; confirm no broken store links, no language switcher, correct locale assets, working UTM/store events, accessible FAQ keyboard states and stable mobile overflow.
6. Do **not deploy**. Show concise change summary and request owner visual review. Don't add unrelated features.

Success = the three pages look intentionally art-directed, feature imagery reads like a coherent product showcase, visitors immediately understand the value, both store buttons remain usable at all sizes, and the FAQ answers actual objections.
