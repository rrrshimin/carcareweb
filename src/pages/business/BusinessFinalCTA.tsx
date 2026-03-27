import { AppStoreButton, GooglePlayButton } from "../landing/StoreButtons";

export function BusinessFinalCTA() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="relative rounded-md border overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center"
          style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, #0051E8 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            <h2
              className="text-[24px] md:text-[36px] leading-tight mb-4"
              style={{ fontWeight: 800 }}
            >
              Ready to take control of your{" "}
              <span style={{ color: "#367DFF" }}>fleet maintenance?</span>
            </h2>
            <p
              className="text-[16px] max-w-[560px] mx-auto mb-10"
              style={{ color: "#A3ACBF" }}
            >
              Start with one vehicle for free. Upgrade to Pro when you're ready
              to manage your full fleet with cost tracking, reminders, and
              exportable records.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-[16px] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0051E8", fontWeight: 600 }}
              >
                Get Started — It's Free
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
