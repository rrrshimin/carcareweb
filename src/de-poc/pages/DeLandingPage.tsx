import { useMemo } from "react";
import { mergeDeAlternatesForSsg } from "../dePublishing";
import { getDeProductPreviewSeo } from "../deProductPreviewMeta";
import { usePageSeo } from "../../lib/usePageSeo";
import { LandingHeader } from "../../pages/landing/LandingHeader";
import { Hero } from "../../pages/landing/Hero";
import { TrustBar } from "../../pages/landing/TrustBar";
import { Features } from "../../pages/landing/Features";
import { AppShowcase } from "../../pages/landing/AppShowcase";
import { HowItWorks } from "../../pages/landing/HowItWorks";
import { ValueSection } from "../../pages/landing/ValueSection";
import { BusinessSection } from "../../pages/landing/BusinessSection";
import { LandingFAQ } from "../../pages/landing/LandingFAQ";
import { DownloadCTA } from "../../pages/landing/DownloadCTA";
import { LandingFooter } from "../../pages/landing/LandingFooter";
import { landingStrings } from "../../pages/landing/landingStrings";

export default function DeLandingPage() {
  const str = landingStrings.de;
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "CarCare Diary",
        url: "https://www.carcarediary.com",
        image: "https://www.carcarediary.com/og-image.png",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "iOS, Android",
        description: str.seoJsonLd.softwareAppDescription,
        installUrl: "https://play.google.com/store/apps/details?id=com.carcarediary.app",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "CarCare Diary",
        url: "https://www.carcarediary.com",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CarCare Diary",
        url: "https://www.carcarediary.com",
        email: "hello@carcarediary.com",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: str.landingFaq.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
    [str.seoJsonLd.softwareAppDescription],
  );

  const baseSeo = getDeProductPreviewSeo("/de")!;
  const seo = mergeDeAlternatesForSsg({ ...baseSeo, jsonLd });

  usePageSeo({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    lang: seo.lang,
    ogLocale: seo.ogLocale,
    alternates: seo.alternates,
    jsonLd: seo.jsonLd,
    noindex: Boolean(import.meta.env.VITE_DE_POC),
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-base text-white font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(180deg, #0C111F 0%, #0E1325 40%, #0C111F 100%)",
        }}
      />
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <Hero locale="de" />
          <TrustBar locale="de" />
          <Features locale="de" />
          <AppShowcase locale="de" />
          <HowItWorks locale="de" />
          <ValueSection locale="de" />
          <BusinessSection locale="de" />
          <LandingFAQ locale="de" />
          <DownloadCTA locale="de" />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}
