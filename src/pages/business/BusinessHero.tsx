import { Monitor, Smartphone } from "lucide-react";

export function BusinessHero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style={{ borderColor: "#1F2740", backgroundColor: "#141A2B" }}
        >
          <span className="text-[13px]" style={{ color: "#367DFF", fontWeight: 600 }}>
            For Business &amp; Fleet
          </span>
        </div>

        <h1
          className="text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6 max-w-[800px]"
          style={{ fontWeight: 800, color: "#FFFFFF" }}
        >
          Fleet maintenance,{" "}
          <span style={{ color: "#367DFF" }}>finally under control</span>
        </h1>

        <p
          className="text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[620px]"
          style={{ color: "#A3ACBF" }}
        >
          Track maintenance across your entire fleet. See spending by vehicle
          and by month. Never miss a service interval again.
        </p>

        <div className="mb-12">
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[10px] text-[16px] text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0051E8", fontWeight: 600 }}
          >
            Get Started
          </a>
        </div>

        <div className="relative w-full max-w-[900px]">
          <div
            className="absolute -inset-8 rounded-[40px] opacity-20 blur-[60px]"
            style={{ background: "radial-gradient(circle, #0051E8 0%, transparent 70%)" }}
          />
          <div
            className="relative rounded-[20px] border overflow-hidden"
            style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
          >
            <div className="flex items-end justify-center gap-6 md:gap-10 p-6 md:p-10">
              <div className="flex flex-col items-center gap-3 flex-1 max-w-[520px]">
                <div className="flex items-center gap-2 mb-1">
                  <Monitor className="w-5 h-5" style={{ color: "#367DFF" }} />
                  <span className="text-[13px]" style={{ color: "#A3ACBF" }}>Web Dashboard</span>
                </div>
                <div
                  className="w-full aspect-[16/10] rounded-[14px] border"
                  style={{ backgroundColor: "#0C111F", borderColor: "#1F2740" }}
                >
                  <div className="p-4 md:p-5 space-y-3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-3 w-24 rounded-full" style={{ backgroundColor: "#1F2740" }} />
                      <div className="h-3 w-16 rounded-full ml-auto" style={{ backgroundColor: "#1F2740" }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="rounded-lg p-3" style={{ backgroundColor: "#141A2B" }}>
                          <div className="h-2 w-10 rounded-full mb-2" style={{ backgroundColor: "#1F2740" }} />
                          <div className="h-4 w-14 rounded-full" style={{ backgroundColor: "rgba(0, 81, 232, 0.2)" }} />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2 mt-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg shrink-0" style={{ backgroundColor: "#141A2B" }} />
                          <div className="flex-1">
                            <div className="h-2 w-20 rounded-full mb-1.5" style={{ backgroundColor: "#1F2740" }} />
                            <div className="h-2 w-32 rounded-full" style={{ backgroundColor: "#1F2740", opacity: 0.5 }} />
                          </div>
                          <div className="h-2 w-12 rounded-full" style={{ backgroundColor: "#1F2740" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4" style={{ color: "#367DFF" }} />
                  <span className="text-[13px]" style={{ color: "#A3ACBF" }}>Mobile App</span>
                </div>
                <div
                  className="w-[130px] md:w-[150px] aspect-[9/18] rounded-[18px] border"
                  style={{ backgroundColor: "#0C111F", borderColor: "#1F2740" }}
                >
                  <div className="p-3 space-y-2">
                    <div className="h-2 w-12 rounded-full" style={{ backgroundColor: "#1F2740" }} />
                    <div className="h-2 w-16 rounded-full" style={{ backgroundColor: "#1F2740", opacity: 0.5 }} />
                    <div className="mt-3 space-y-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="rounded-lg p-2" style={{ backgroundColor: "#141A2B" }}>
                          <div className="h-1.5 w-10 rounded-full mb-1" style={{ backgroundColor: "#1F2740" }} />
                          <div className="h-1.5 w-14 rounded-full" style={{ backgroundColor: "#1F2740", opacity: 0.5 }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
