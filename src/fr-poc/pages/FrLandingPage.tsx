import { useMemo } from "react";
import { mergeFrAlternatesForSsg } from "../frPublishing";
import { getFrProductPreviewSeo } from "../frProductPreviewMeta";
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

export default function FrLandingPage() {
  const str = landingStrings.fr;
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

  const baseSeo = getFrProductPreviewSeo("/fr")!;
  const seo = mergeFrAlternatesForSsg({ ...baseSeo, jsonLd });

  usePageSeo({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    lang: seo.lang,
    ogLocale: seo.ogLocale,
    alternates: seo.alternates,
    jsonLd: seo.jsonLd,
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
          <Hero locale="fr" />
          <TrustBar locale="fr" />
          <Features locale="fr" />
          <AppShowcase locale="fr" />
          <HowItWorks locale="fr" />
          <ValueSection locale="fr" />
          <BusinessSection locale="fr" />
          <LandingFAQ locale="fr" />
          <DownloadCTA locale="fr" />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}
