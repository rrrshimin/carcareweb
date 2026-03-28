import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { BusinessHero } from "./business/BusinessHero";
import { BusinessValueProps } from "./business/BusinessValueProps";
import { BusinessFeatures } from "./business/BusinessFeatures";
import { BusinessUseCases } from "./business/BusinessUseCases";
import { BusinessTestimonials } from "./business/BusinessTestimonials";
import { BusinessFAQ } from "./business/BusinessFAQ";
import { BusinessFinalCTA } from "./business/BusinessFinalCTA";
import { useEffect } from "react";

function BusinessPage() {
  useEffect(() => {
    document.title = "CarCare Diary for Business - Fleet Maintenance Management";
    return () => {
      document.title = "CarCare Diary";
    };
  }, []);

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
          <BusinessHero />
          <BusinessValueProps />
          <BusinessFeatures />
          <BusinessUseCases />
          <BusinessTestimonials />
          <BusinessFAQ />
          <BusinessFinalCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

export default BusinessPage;
