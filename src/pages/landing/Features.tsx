import feature1 from "../../assets/feature-1.png";
import feature2 from "../../assets/feature-2.png";
import feature3 from "../../assets/feature-3.png";
import feature4 from "../../assets/feature-4.png";

const features = [
  {
    title: "Vehicle Profile",
    description:
      "Set up your vehicle once with photo, make and model, year, fuel type, transmission, and current odometer reading. Your car's identity in one place.",
    image: feature1,
    alt: "CarCare Diary vehicle profile screen with car details and photo",
  },
  {
    title: "Maintenance Log",
    description:
      "Record every service \u2014 oil changes, filters, spark plugs, brakes, fluids, and more \u2014 with date, mileage, specs, and notes. Build a detailed vehicle maintenance log over time.",
    image: feature2,
    alt: "CarCare Diary maintenance log showing service entries with dates and mileage",
  },
  {
    title: "Service Reminders & Due Status",
    description:
      "See what's coming up next based on your maintenance log, current mileage, and service intervals. Get reminders so you never miss an oil change or scheduled service.",
    image: feature3,
    alt: "CarCare Diary due status dashboard showing upcoming service reminders",
  },
  {
    title: "Shareable Service History",
    description:
      "Generate a public link to your car's full maintenance history. Useful when selling your vehicle \u2014 buyers can see exactly how it's been maintained.",
    image: feature4,
    alt: "CarCare Diary shareable maintenance history page for vehicle resale",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >
            A complete car maintenance tracker{" "}
            <span style={{ color: "#367DFF" }}>in your pocket</span>
          </h2>
          <p
            className="text-[16px] max-w-[560px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            From your vehicle profile to a shareable service history, CarCare Diary keeps your maintenance log organized and up to date.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12 max-w-[800px] mx-auto`}
              >
                <div className="shrink-0">
                  <div className="rounded-md overflow-hidden w-[280px] md:w-[320px]">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    className="text-[20px] md:text-[24px] mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed" style={{ color: "#A3ACBF" }}>
                    {feature.description}
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
