import type { ReactNode } from "react";
import { LandingHeader } from "../landing/LandingHeader";
import { LandingFooter } from "../landing/LandingFooter";

/** Shared dark gradient shell for EN marketing pages and FR preview equivalents. */
export function ProductPageShell({ children }: { children: ReactNode }) {
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
        <main>{children}</main>
        <LandingFooter />
      </div>
    </div>
  );
}
