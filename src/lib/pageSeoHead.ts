export interface HreflangAlternate {
  hreflang: string;
  path: string;
}

export interface PageSeoHeadOptions {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  lang?: string;
  ogLocale?: string;
  alternates?: readonly HreflangAlternate[];
  datePublished?: string;
  dateModified?: string;
}

export const SITE_URL = "https://www.carcarediary.com";
export const DEFAULT_OG_IMAGE = "https://www.carcarediary.com/og-image.png";

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

/** Static HTML for SSG `<head>` injection. Matches what usePageSeo sets on the client. */
export function buildPageHeadHtml(options: PageSeoHeadOptions): string {
  const {
    title,
    description,
    path,
    ogType = "website",
    ogImage = DEFAULT_OG_IMAGE,
    noindex = false,
    jsonLd,
    ogLocale,
    alternates,
  } = options;
  const canonicalUrl = `${SITE_URL}${path}`;
  const lines: string[] = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeAttr(ogType)}" />`,
    `<meta property="og:site_name" content="CarCare Diary" />`,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`,
  ];
  if (ogLocale) {
    lines.push(`<meta property="og:locale" content="${escapeAttr(ogLocale)}" />`);
  }
  if (noindex) {
    lines.push(`<meta name="robots" content="noindex, follow" data-seo="page-robots" />`);
  }
  if (alternates?.length) {
    for (const alt of alternates) {
      lines.push(
        `<link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(`${SITE_URL}${alt.path}`)}" data-seo="hreflang" />`,
      );
    }
  }
  if (jsonLd) {
    lines.push(
      `<script type="application/ld+json" data-seo="page-jsonld">${JSON.stringify(jsonLd)}</script>`,
    );
  }
  return lines.join("\n    ");
}

export function buildBreadcrumbJsonLd(
  breadcrumbTitle: string,
  path: string,
  options?: { locale?: "en" | "fr" },
) {
  const url = `${SITE_URL}${path}`;
  const fr = options?.locale === "fr" || path.startsWith("/fr/blog/");
  const homeName = fr ? "Accueil" : "Home";
  const guidesItem = fr ? `${SITE_URL}/fr/blog` : `${SITE_URL}/blog`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: guidesItem },
      { "@type": "ListItem", position: 3, name: breadcrumbTitle, item: url },
    ],
  };
}

export function buildBreadcrumbHeadScript(
  breadcrumbTitle: string,
  path: string,
  options?: { locale?: "en" | "fr" },
): string {
  const data = buildBreadcrumbJsonLd(breadcrumbTitle, path, options);
  return `<script type="application/ld+json" data-seo="breadcrumb-jsonld">${JSON.stringify(data)}</script>`;
}
