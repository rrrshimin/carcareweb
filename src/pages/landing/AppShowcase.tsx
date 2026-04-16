import screenshotCarPage from "../../assets/phone_screenshot_car_page.png";
import logCategories from "../../assets/log_categories_illustration_mid_size.png";
import analyticsUi from "../../assets/analytics_ui_illustration_mid_size.png";
import sharedBrowserView from "../../assets/phone_screenshot_shared_car_browser_view.png";

const showcaseItems = [
  {
    title: "Know Exactly What's Due",
    description:
      "See your vehicle's full maintenance status at a glance. Upcoming services, current mileage, spending summary, and every maintenance category - all in one view.",
    image: screenshotCarPage,
    alt: "CarCare Diary vehicle dashboard showing maintenance status, mileage, and service categories",
    imageStyle: "max-w-[280px] md:max-w-[320px]",
  },
  {
    title: "Never Miss A Service Again",
    description:
      "Color-coded status shows what's due soon, what's coming up, and what's overdue. Stay ahead of every oil change, filter replacement, and scheduled inspection.",
    image: logCategories,
    alt: "CarCare Diary service reminders showing due and overdue maintenance items",
    imageStyle: "max-w-[320px] md:max-w-[380px]",
  },
  {
    title: "Understand Your Maintenance Costs",
    description:
      "See how much you spend on car upkeep month by month. Track which categories cost the most and spot trends in your vehicle's maintenance spending.",
    image: analyticsUi,
    alt: "CarCare Diary maintenance spending analytics with monthly chart and category breakdown",
    imageStyle: "max-w-[320px] md:max-w-[380px]",
  },
  {
    title: "Share Your Car's Full Service History",
    description:
      "When it's time to sell, generate a public link to your vehicle's complete maintenance record. Buyers can see every logged service, building trust and supporting your asking price.",
    image: sharedBrowserView,
    alt: "CarCare Diary shareable vehicle service history page opened in a mobile browser",
    imageStyle: "max-w-[280px] md:max-w-[320px]",
  },
];

export function AppShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Inside The App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Your Car's Maintenance Diary,{" "}
            <span className="text-accent">Always Up To Date</span>
          </h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">
            A clear, organized view of every service, reminder, and record -
            designed to make car maintenance simple.
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
