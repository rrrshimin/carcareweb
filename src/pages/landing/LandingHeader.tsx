import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { AppStoreButton, GooglePlayButton } from "./StoreButtons";

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(12, 17, 31, 0.95)" : "rgba(12, 17, 31, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #1F2740" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-3">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </header>
  );
}
