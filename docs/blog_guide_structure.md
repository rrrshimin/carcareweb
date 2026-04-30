# Blog / Guides Structure

This is the standard for every article under `/blog/*`. Future guides must follow it. Read this **before** creating or editing any blog article.

## Page order (top to bottom)

1. Fixed landing header (already fixed, do not re-implement).
2. Breadcrumb nav (from `ArticleLayout`).
3. `ArticleHero` — left-aligned: category pill + read time, `h1`, 2-3 sentence **direct-answer** lede. No store buttons in the hero.
4. `GuideDownloadCTA` (inline variant) — immediately after the hero.
5. Body sections: `ProseSection` + `ArticleH2` / `ArticleP` / custom lists.
6. FAQ accordion (links to `FAQPage` JSON-LD).
7. `GuideDownloadCTA` (footer variant) with "Back to Guides" link below.

## Alignment rule

Everything in the hero, prose, and CTAs is **left-aligned**. No `text-center` on headings, ledes, or meta pills. The only allowed center alignment is the "Back to Guides" link under the footer CTA.

## Reusable components

- `src/pages/blog/ArticleLayout.tsx`
  - `ArticleLayout` — page shell with fixed header, breadcrumb, background.
  - `ArticleHero` — shared hero. Props: `category`, `readTime`, `title`, `lede`.
  - `ArticleMeta` — left-aligned category pill + read time (used by `ArticleHero`).
  - `ProseSection`, `ArticleH2`, `ArticleP` — body primitives.
- `src/pages/blog/GuideDownloadCTA.tsx`
  - `GuideDownloadCTA` — compact panel with left-side title + subtitle and right-side App Store + Google Play buttons.
  - Variants: `"inline"` (default, used after the hero) and `"footer"` (used at the bottom; slightly larger, adds "Back to Guides" link).
  - `DEFAULT_GUIDE_CTA_SUBTITLE` — shared subtitle string used by every guide unless overridden.

## Dynamic CTA title per guide

The CTA `title` must be tailored to the guide topic so it matches search intent. The subtitle stays shared.

Current guides:

| Guide | CTA title |
| --- | --- |
| Car Maintenance Checklist | "Stay on top of car maintenance with CarCare Diary" |
| How To Track Car Maintenance | "Track car maintenance with the CarCare Diary app" |
| What To Include In A Car Service History | "Keep a complete car service history with CarCare Diary" |
| How To Keep Car Service Records Organized | "Organize your car service records with CarCare Diary" |

Pattern: `"<Action verb> <the primary keyword/topic> with CarCare Diary"` or `"<Topic outcome> with CarCare Diary"`. Keep under ~60 characters.

### Shared subtitle

```
CarCare Diary is a free app for iPhone and Android. Log every service in
seconds, track mileage, and keep a complete, shareable history of your car.
```

Only override when the shared copy truly doesn't fit - document why in the PR.

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
2. Create the page in `src/pages/blog/` using `ArticleLayout`, `ArticleHero`, and two `GuideDownloadCTA` blocks (inline + footer).
3. Define `ARTICLE_TITLE`, `ARTICLE_CATEGORY`, `ARTICLE_READ_TIME`, `ARTICLE_URL`, `ARTICLE_LEDE`, `CTA_TITLE` as top-of-file constants so they're easy to review.
4. Wire up `Article` + `FAQPage` + (if applicable) `HowTo` JSON-LD with `speakable` on the `Article`.
5. Add a route in `src/App.tsx` with `lazy()`.
