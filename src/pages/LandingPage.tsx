import { useMemo } from "react";
import { LandingHeader } from "./landing/LandingHeader";
import { Hero } from "./landing/Hero";
import { TrustBar } from "./landing/TrustBar";
import { Features } from "./landing/Features";
import { AppShowcase } from "./landing/AppShowcase";
import { HowItWorks } from "./landing/HowItWorks";
import { ValueSection } from "./landing/ValueSection";
import { BusinessSection } from "./landing/BusinessSection";
import { LandingFAQ, landingFaqs } from "./landing/LandingFAQ";
import { DownloadCTA } from "./landing/DownloadCTA";
import { LandingFooter } from "./landing/LandingFooter";
import { usePageSeo } from "../lib/usePageSeo";

const LANDING_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
    image: "https://www.carcarediary.com/og-image.png",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    description:
      "Car maintenance tracker app. Log services, track mileage, get reminders, and share your vehicle's maintenance history.",
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
    mainEntity: landingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

function LandingPage() {
  const jsonLd = useMemo(() => LANDING_JSON_LD, []);

  usePageSeo({
    title: "CarCare Diary - Car Maintenance Tracker & Service Log App",
    description:
      "Log car maintenance, track mileage, get service reminders, and share your vehicle's complete history. Free car maintenance tracker app for iPhone & Android.",
    path: "/",
    jsonLd,
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
          <Hero />
          <TrustBar />
          <Features />
          <AppShowcase />
          <HowItWorks />
          <ValueSection />
          <BusinessSection />
          <LandingFAQ />
          <DownloadCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

export default LandingPage;
