import screenshotCarPage from "../../assets/phone_screenshot_car_page.png";
import logCategories from "../../assets/log_categories_illustration_mid_size.png";
import analyticsUi from "../../assets/analytics_ui_illustration_mid_size.png";
import sharedBrowserView from "../../assets/phone_screenshot_shared_car_browser_view.png";
import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";

const showcaseImages = [
  screenshotCarPage,
  logCategories,
  analyticsUi,
  sharedBrowserView,
] as const;

const imageStyles = [
  "max-w-[280px] md:max-w-[320px]",
  "max-w-[320px] md:max-w-[380px]",
  "max-w-[320px] md:max-w-[380px]",
  "max-w-[280px] md:max-w-[320px]",
] as const;

export function AppShowcase({ locale = "en" }: { locale?: LandingLocale }) {
  const { appShowcase } = landingStrings[locale];
  const showcaseItems = appShowcase.rows.map((row, i) => ({
    ...row,
    image: showcaseImages[i],
    imageStyle: imageStyles[i],
  }));
  return (
    <section className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            {appShowcase.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {appShowcase.headingLine}{" "}
            <span className="text-accent">{appShowcase.headingAccent}</span>
          </h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">
            {appShowcase.intro}
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {showcaseItems.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={item.title}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-center gap-8 md:gap-10 max-w-[860px] mx-auto`}
              >
                <div className="shrink-0 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`w-full h-auto ${item.imageStyle}`}
                    loading="lazy"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted max-w-[440px] mx-auto md:mx-0">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
