import { LandingHeader } from "./landing/LandingHeader";
import { Hero } from "./landing/Hero";
import { Features } from "./landing/Features";
import { HowItWorks } from "./landing/HowItWorks";
import { DownloadCTA } from "./landing/DownloadCTA";
import { LandingFooter } from "./landing/LandingFooter";

function LandingPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#0C111F", color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ backgroundColor: "#0051E8" }}
        />
        <div
          className="absolute top-[40%] right-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ backgroundColor: "#367DFF" }}
        />
        <div
          className="absolute bottom-[-100px] left-[30%] w-[700px] h-[400px] rounded-full opacity-[0.06] blur-[140px]"
          style={{ backgroundColor: "#0051E8" }}
        />
      </div>
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <DownloadCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

export default LandingPage;
