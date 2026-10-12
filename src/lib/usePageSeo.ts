import { useEffect } from "react";

const SITE_URL = "https://www.carcarediary.com";
const DEFAULT_TITLE = "CarCare Diary - Car Maintenance Tracker & Service Log App";
const DEFAULT_DESCRIPTION =
  "Log car maintenance, track mileage, get service reminders, and share your vehicle's complete history. Free car maintenance tracker app for iPhone & Android.";
const DEFAULT_OG_IMAGE = "https://www.carcarediary.com/og-image.png";

export interface HreflangAlternate {
  hreflang: string;
  path: string;
}

interface PageSeoOptions {
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
}

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMetaTag(attr: string, key: string) {
  document.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setRobotsNoindex() {
  let el = document.querySelector('meta[name="robots"][data-seo="page-robots"]') as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "robots");
    el.setAttribute("data-seo", "page-robots");
    document.head.appendChild(el);
  }
  el.setAttribute("content", "noindex, follow");
}

function removeRobotsNoindex() {
  document.querySelector('meta[name="robots"][data-seo="page-robots"]')?.remove();
}

function setJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.querySelector('script[data-seo="page-jsonld"]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-seo", "page-jsonld");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd() {
  document.querySelector('script[data-seo="page-jsonld"]')?.remove();
}

function clearHreflang() {
  document.querySelectorAll('link[data-seo="hreflang"]').forEach((el) => el.remove());
}

function setHreflang(alternates: readonly HreflangAlternate[]) {
  clearHreflang();
  for (const alt of alternates) {
    const el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", alt.hreflang);
    el.setAttribute("href", `${SITE_URL}${alt.path}`);
    el.setAttribute("data-seo", "hreflang");
    document.head.appendChild(el);
  }
}

export function usePageSeo({
  title,
  description,
  path,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
  lang,
  ogLocale,
  alternates,
}: PageSeoOptions) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;
    if (lang) document.documentElement.lang = lang;

    setMetaTag("name", "description", description);
    setCanonical(canonicalUrl);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "CarCare Diary");
    setMetaTag("property", "og:image", ogImage);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);
    if (ogLocale) setMetaTag("property", "og:locale", ogLocale);
    if (alternates?.length) setHreflang(alternates);

    if (noindex) {
      setRobotsNoindex();
    } else {
      removeRobotsNoindex();
    }

    if (jsonLd) {
      setJsonLd(jsonLd);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      document.documentElement.lang = "en";
      setMetaTag("name", "description", DEFAULT_DESCRIPTION);
      setCanonical(`${SITE_URL}/`);
      setMetaTag("property", "og:title", DEFAULT_TITLE);
      setMetaTag("property", "og:description", DEFAULT_DESCRIPTION);
      setMetaTag("property", "og:url", `${SITE_URL}/`);
      setMetaTag("property", "og:type", "website");
      setMetaTag("property", "og:image", DEFAULT_OG_IMAGE);
      setMetaTag("name", "twitter:card", "summary_large_image");
      setMetaTag("name", "twitter:title", DEFAULT_TITLE);
      setMetaTag("name", "twitter:description", DEFAULT_DESCRIPTION);
      setMetaTag("name", "twitter:image", DEFAULT_OG_IMAGE);
      removeRobotsNoindex();
      removeMetaTag("property", "og:locale");
      clearHreflang();
      removeMetaTag("property", "og:image:width");
      removeMetaTag("property", "og:image:height");
      removeMetaTag("property", "og:image:alt");
      removeJsonLd();
    };
  }, [title, description, path, ogType, ogImage, noindex, jsonLd, lang, ogLocale, alternates]);
}
