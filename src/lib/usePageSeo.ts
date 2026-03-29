import { useEffect } from "react";

const SITE_URL = "https://carcarediary.com";
const DEFAULT_TITLE = "CarCare Diary – Car Maintenance Tracker App for iOS & Android";
const DEFAULT_DESCRIPTION =
  "Track car maintenance, log service history, monitor mileage, get reminders when service is due, and share records when selling. Free app for iOS and Android.";

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
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

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
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

export function usePageSeo({ title, description, path, ogType = "website", jsonLd }: PageSeoOptions) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;

    setMetaTag("name", "description", description);
    setCanonical(canonicalUrl);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "CarCare Diary");

    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    if (jsonLd) {
      setJsonLd(jsonLd);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaTag("name", "description", DEFAULT_DESCRIPTION);
      setCanonical(SITE_URL);
      setMetaTag("property", "og:title", DEFAULT_TITLE);
      setMetaTag("property", "og:description", DEFAULT_DESCRIPTION);
      setMetaTag("property", "og:url", SITE_URL);
      setMetaTag("property", "og:type", "website");
      setMetaTag("name", "twitter:title", DEFAULT_TITLE);
      setMetaTag("name", "twitter:description", DEFAULT_DESCRIPTION);
      removeJsonLd();
    };
  }, [title, description, path, ogType, jsonLd]);
}
