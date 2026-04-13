import { useMemo } from "react";
import { LandingHeader } from "./landing/LandingHeader";
import { Hero } from "./landing/Hero";
import { Features } from "./landing/Features";
import { HowItWorks } from "./landing/HowItWorks";
import { LandingFAQ, landingFaqs } from "./landing/LandingFAQ";
import { DownloadCTA } from "./landing/DownloadCTA";
import { LandingFooter } from "./landing/LandingFooter";
import { usePageSeo } from "../lib/usePageSeo";

const LANDING_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CarCare Diary",
    url: "https://carcarediary.com",
    image: "https://carcarediary.com/og-image.png",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    description:
      "Car maintenance tracker app. Log services, track mileage, get reminders, and share your vehicle's maintenance history.",
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
    url: "https://carcarediary.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CarCare Diary",
    url: "https://carcarediary.com",
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
    title: "CarCare Diary – Car Maintenance Tracker App for iOS & Android",
    description:
      "Track car maintenance, log service history, monitor mileage, get reminders when service is due, and share records when selling. Free app for iOS and Android.",
    path: "/",
    jsonLd,
  });

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#0C111F", color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px]"
          style={{ backgroundColor: "#0051E8" }}
        />
        <div
          className="absolute top-[40%] right-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.02] blur-[100px]"
          style={{ backgroundColor: "#367DFF" }}
        />
        <div
          className="absolute bottom-[-100px] left-[30%] w-[700px] h-[400px] rounded-full opacity-[0.025] blur-[140px]"
          style={{ backgroundColor: "#0051E8" }}
        />
      </div>
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <LandingFAQ />
          <DownloadCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

export default LandingPage;
