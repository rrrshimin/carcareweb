import { AppStoreButton, GooglePlayButton } from "./StoreButtons";
import heroScreenshot from "../../assets/hero-screenshots-mockups.png";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Car Maintenance Tracker App
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            Track Car Maintenance And Service History{" "}
            <span className="text-accent">In One App</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary is a free car maintenance tracker for iPhone and
            Android. Log every service, monitor your mileage, get reminders
            when maintenance is due, and share your vehicle's complete service
            history.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>

          <p className="text-sm text-muted">
            Free for iPhone & Android
          </p>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ maxWidth: 594 }}
            >
              <img
                src={heroScreenshot}
                alt="CarCare Diary car maintenance tracker app showing vehicle service log and mileage tracking"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
