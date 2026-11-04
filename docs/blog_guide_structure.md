# Blog / Guides Structure

This is the standard for every article under `/blog/*`. Future guides must follow it. Read this **before** creating or editing any blog article.

## Page order (top to bottom)

1. Fixed landing header (already fixed, do not re-implement).
2. Breadcrumb nav (from `ArticleLayout`).
3. `ArticleHero` — left-aligned: category pill + read time, `h1`, 2-3 sentence **direct-answer** lede. No store buttons in the hero.
4. Body sections: `ProseSection` + `ArticleH2` / `ArticleP` / custom lists. The short-answer box (or first meaningful section) comes first.
5. `<GuideDownloadCTA />` (primary blue banner) — **after** the short answer, or after the first section for symptom/diagnostic guides. Never before the answer. In guides built from section components, use `<GuideDownloadCTA standalone />` between the first and second section.
6. FAQ accordion (links to `FAQPage` JSON-LD).
7. `<GuideDownloadCTA variant="footer" />` (compact secondary banner) with "Back to Guides" link below.

## Alignment rule

Everything in the hero, prose, and CTAs is **left-aligned**. No `text-center` on headings, ledes, or meta pills. The only allowed center alignment is the "Back to Guides" link under the footer CTA.

## Content width

All blog content sections (hero, prose, CTA) use **`max-w-[900px]`** on the inner container. This applies to `ArticleHero`, `ProseSection`, and `GuideDownloadCTA`. Do not regress to `max-w-[760px]`.

Comparison / wide-table sections (e.g. `ComparisonTable` in roundup articles) use **`max-w-[1200px]`** so the full table is visible on desktop without horizontal overflow in the main content.

## Reusable components

- `src/pages/blog/ArticleLayout.tsx`
  - `ArticleLayout` — page shell with fixed header, breadcrumb, background.
  - `ArticleHero` — shared hero. Props: `category`, `readTime`, `title`, `lede`.
  - `ArticleMeta` — left-aligned category pill + read time (used by `ArticleHero`).
  - `ProseSection`, `ArticleH2`, `ArticleP` — body primitives.
- `src/pages/blog/GuideDownloadCTA.tsx`
  - `GuideDownloadCTA` — no title prop. It reads the guide slug from the route and takes its copy from `src/content/guideCta.ts`.
  - Primary (default, `variant="inline"`): bright blue gradient, "Download for free" pill, contextual headline, benefit subtitle, real in-app screenshot from `sm` up, direct App Store and Google Play buttons. `standalone` wraps it in its own page-width section.
  - Secondary (`variant="footer"`): compact deep-blue banner with the same direct store buttons, plus "Back to Guides".
  - Click tracking: `src/lib/guideCtaTracking.ts` (`guide_cta_click` with exactly two properties, `slug` and `target` such as `primary_ios` or `secondary_android`, because Vercel Pro allows 2 properties per custom event; plus the shared `store_click`).

## Contextual CTA copy per guide

Copy lives in one place: `GUIDE_CTA` in `src/content/guideCta.ts`, keyed by the guide slug (the part after `/blog/`). Each entry has a `kind` (interval, replacement, symptom, records, checklist; picks the shared subtitle), a primary `headline`, an `endHeadline` and an `image`. Unknown slugs use `GUIDE_CTA_FALLBACK`.

Rules:
- Say "free to download" only. Do not explain Free/Base/Pro tiers in article banners and do not imply paid-only features are free (for example spending analytics).
- Headlines are about logging or tracking the topic ("Log your next oil change"). For symptom guides, tie the CTA to logging repairs, never to diagnosing or preventing a problem.
- No absolute promises ("never overdue", "never miss").
- Keep headlines under ~55 characters.

## Intro / content tone rules

- **Answer the query in the first 2 sentences.** The lede must directly answer what someone typed into Google (or asked an AI assistant). No "tracking car maintenance can feel frustrating", "most people have a rough sense", "let's take a look at…", or other warm-up.
- **First paragraph of every H2 section** must lead with the answer, then explain. Not: "Most tracking problems come down to a few habits…" but: "Five habits keep a record tidy — here they are."
- Prefer numbered counts in intros ("five habits", "eight fields", "six examples") — scannable for humans and AI snippet extractors.
- Short sentences. Active voice. No hedging words: "perhaps", "tends to", "arguably", "most people".
- Keep the rest of the article substantive — examples, specs, numbers, concrete tables. No filler.

## SEO / AI-search (AEO) requirements

Every article must include:

1. `usePageSeo({ title, description, path, ogType: "article", jsonLd })` for `<title>`, canonical, OG, Twitter.
2. JSON-LD array on the page, containing all of:
   - `Article` with `headline`, `description`, `url`, `datePublished`, `dateModified`, `publisher`.
   - `speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] }` inside the `Article` object — the hero lede carries `data-speakable="true"` so Google Assistant and AI Overviews can lift it.
   - `FAQPage` generated from the page's FAQ array.
   - `HowTo` for how-to / checklist guides (with a `step` array built from the in-page numbered steps). Skip for pure reference guides (e.g. "what to include in…").
   - `BreadcrumbList` is added automatically by `ArticleLayout`.
3. Write H2s phrased as natural questions where sensible ("What To Include In Every Service Record", "How Often To Review Your Checklist"). Good for People Also Ask and AI Overviews.
4. Keep internal link sections ("Related guides") near the bottom of the body with direct anchor text.
5. Update `dateModified` whenever content is changed.

## Header / scroll behaviour

The landing header is `fixed top-0 z-50` and `ArticleLayout` reserves `pt-28`. Do not regress this — readers must be able to reach the download CTA at any scroll position through the header too.

## Do not

- Do not add center-aligned hero variants.
- Do not scatter `<AppStoreButton />` / `<GooglePlayButton />` pairs mid-article. Use `GuideDownloadCTA` instead. Minor exception: the "How CarCare Diary helps" section may carry a small inline related-links paragraph, but **not** more store buttons.
- Do not duplicate the large centered "Get the App" card. That's replaced by the footer variant of `GuideDownloadCTA`.
- Do not write hedgy intros. If the first sentence doesn't answer the query, it's wrong.

## When adding a new guide

1. Add it to `src/pages/blog/articles.ts`.
2. Create the page in `src/pages/blog/` using `ArticleLayout`, `ArticleHero`, and two `GuideDownloadCTA` blocks (primary after the short answer, footer at the end).
3. Define `ARTICLE_TITLE`, `ARTICLE_CATEGORY`, `ARTICLE_READ_TIME`, `ARTICLE_URL`, `ARTICLE_LEDE` as top-of-file constants so they're easy to review.
4. Add the slug to `GUIDE_CTA` in `src/content/guideCta.ts`.
5. Wire up `Article` + `FAQPage` + (if applicable) `HowTo` JSON-LD with `speakable` on the `Article`.
6. Add a route in `src/App.tsx` with `lazy()`.
