import type { GuideCtaEntry } from "../guideCta";
import type { HreflangAlternate, PageSeoHeadOptions } from "../../lib/pageSeoHead";

export type GuideLocale = "fr" | "de" | "es";

/**
 * A single item in a `list` block.
 * - Plain string: rendered via `renderGuideInline` (**bold**, *em*, [link](url) supported).
 * - Object: label shown as a bold heading; text as body; optional separate link line.
 */
export type ListItem =
  | string
  | { label?: string; text: string; link?: { label: string; href: string } };

export type GuideContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | {
      type: "list";
      /**
       * Visual variant:
       * - `"check"` — CheckCircle2 icon per item (use for actionable / completable items).
       * - `"steps"` — numbered circles (use for sequential instructions).
       * - `"bullet"` — explicit bullet marker (use for plain informational lists).
       * - omit for a backward-compatible bullet list (adds explicit marker to defeat preflight).
       */
      variant?: "bullet" | "check" | "steps";
      items: readonly ListItem[];
      ordered?: boolean;
    }
  | {
      type: "links";
      intro?: string;
      links: readonly { label: string; href: string }[];
    }
  | {
      type: "callout";
      /**
       * Visual tone:
       * - `"neutral"` / `"info"` — brand accent (blue, default).
       * - `"warning"` — amber (caution, non-urgent).
       * - `"danger"` — red (urgent / safety-critical).
       */
      tone?: "neutral" | "info" | "warning" | "danger";
      title: string;
      body: string;
      footnote?: string;
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly string[])[];
      /**
       * Column indices (0-based) to apply status-word colouring.
       * Recognised words: Oui/Yes → emerald; Limité/Limited → accent;
       * Non/No → muted; Non confirmé/Unclear → italic muted.
       */
      statusCols?: readonly number[];
      /** Row index (0-based) to highlight with bg-brand/5 (e.g. the site's own row). */
      highlightRow?: number;
      /** Caption text shown below the table. Supports renderGuideInline markup. */
      caption?: string;
      /**
       * Merge consecutive rows that share the same first-column value into a
       * rowSpan group. Requires first-column values to be pre-deduplicated in content.
       */
      groupByFirstCol?: boolean;
      /** Style first-column cells in accent colour and add a right border (for mileage-range tables). */
      accentFirstCol?: boolean;
    }
  /** Inline primary download banner (localized guides with EN-like CTA placement). */
  | { type: "primaryCta" }
  /**
   * Section subheading (h3).
   * - `accent: true` applies a prominent border-l-2 / border-accent treatment,
   *   matching EN SectionChecklist headings. Use for checklist category headers.
   * - Omit `accent` for inline field labels and cause names (compact h3 style).
   */
  | { type: "subheading"; text: string; level?: 3 | 4; accent?: boolean }
  /**
   * 2-column (1-col on mobile) grid of category cards.
   * Each card has a title, an optional badge in accent colour, and a list of items.
   */
  | {
      type: "cardGrid";
      /** Column count on wide viewports. Default: 2. */
      cols?: 1 | 2;
      cards: readonly CardGridItem[];
    }
  /** Structured app/product profile card matching the EN AppCard component layout. */
  | { type: "appCard"; profile: AppCardProfile }

/** A single item inside a `cardGrid` card. */
export interface CardGridItem {
  title: string;
  /** Short interval or category label shown in accent colour below the card title. */
  badge?: string;
  items: readonly string[];
  /** Visual variant for items. Defaults to "check". */
  variant?: "check" | "bullet";
}

/** Structured app/product profile card matching the EN AppCard layout. */
export interface AppCardProfile {
  name: string;
  externalUrl?: string;
  bestFor: string;
  pricing: string;
  platforms: string;
  strengths: readonly string[];
  limitation: string;
  /** Field labels — override when the article locale differs from English. */
  labels?: {
    bestFor?: string;
    pricing?: string;
    platforms?: string;
    strengths?: string;
    limitation?: string;
  };
}

export interface LocalizedGuideFaq {
  question: string;
  answer: string;
}

export interface LocalizedGuideContent {
  breadcrumbTitle: string;
  hero: {
    category: string;
    readTime: string;
    title: string;
    lede: string;
  };
  lastUpdatedLabel?: string;
  /** Optional warning/disclaimer shown before the short-answer box (e.g. troubleshooting guides). */
  prefaceCallout?: { title: string; body: string };
  /** Omit when the hero lede is the only intro (no “short answer” box). */
  shortAnswer?: {
    label: string;
    body: string;
    footnote?: string;
  };
  /** Blocks after the primary CTA (headings, prose, lists, tables, etc.). */
  blocks: readonly GuideContentBlock[];
  faqHeading: string;
  faqs: readonly LocalizedGuideFaq[];
  /** Localized URL slug (after /blog/ or /fr/blog/). Used for CTA copy lookup and tracking. */
  ctaSlug: string;
  cta: GuideCtaEntry;
  seo: PageSeoHeadOptions;
}

export interface LocalizedGuideRegistryEntry {
  id: string;
  locale: GuideLocale;
  slug: string;
  path: string;
  /** Must be set explicitly; only `true` rows are eligible for future production SSG. */
  published: boolean;
  content: LocalizedGuideContent;
}

export interface LocalizedGuideHreflang {
  hreflang: string;
  path: string;
}

/** Build Article + FAQPage JSON-LD from guide content (FAQ omitted when empty). */
export function buildGuideJsonLd(
  content: LocalizedGuideContent,
  alternatesArticleUrl: string,
): Record<string, unknown>[] {
  const articleDescription =
    content.seo.description.length > 160
      ? `${content.seo.description.slice(0, 157)}…`
      : content.seo.description;

  const nodes: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: content.seo.title,
      description: articleDescription,
      url: alternatesArticleUrl,
      datePublished: content.seo.datePublished ?? "2026-04-30",
      dateModified: content.seo.dateModified ?? "2026-08-06",
      inLanguage:
        content.seo.lang === "fr"
          ? "fr-FR"
          : content.seo.lang === "de"
            ? "de-DE"
            : content.seo.lang === "es"
              ? "es-ES"
              : content.seo.lang,
      publisher: {
        "@type": "Organization",
        name: "CarCare Diary",
        url: "https://www.carcarediary.com",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-speakable]"],
      },
    },
  ];

  if (content.faqs.length > 0) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return nodes;
}

export type { HreflangAlternate };
