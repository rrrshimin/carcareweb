import { AppStoreButton, GooglePlayButton } from "./StoreButtons";

export function DownloadCTA() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="relative rounded-[14px] border overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center"
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
              Keep your maintenance history{" "}
              <span style={{ color: "#367DFF" }}>in one place</span>
            </h2>
            <p
              className="text-[16px] max-w-[520px] mx-auto mb-10"
              style={{ color: "#A3ACBF" }}
            >
              Download CarCare Diary today and take control of your vehicle's service
              records. It's free, simple, and built for everyday car owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
