import feature1 from "../../assets/feature-1.png";
import feature2 from "../../assets/feature-2.png";
import feature3 from "../../assets/feature-3.png";
import feature4 from "../../assets/feature-4.png";

const features = [
  {
    title: "Vehicle Profile",
    description:
      "Add your vehicle details once, including photo, make and model, year, fuel type, transmission, odometer, and unit preference.",
    image: feature1,
  },
  {
    title: "Maintenance Tracking",
    description:
      "Log maintenance events like oil changes, filters, spark plugs, brakes, fluids, and more \u2014 with date, mileage, specifications, and notes.",
    image: feature2,
  },
  {
    title: "Due Status & Reminders",
    description:
      "See what service is coming up next based on previous logs, mileage, and maintenance intervals \u2014 and get reminders when attention is needed.",
    image: feature3,
  },
  {
    title: "Shareable Maintenance History",
    description:
      "Generate a public link to show your vehicle\u2019s maintenance history \u2014 useful when selling your car and proving it has been properly looked after.",
    image: feature4,
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
            Everything you need to stay on top of{" "}
            <span style={{ color: "#367DFF" }}>vehicle maintenance</span>
          </h2>
          <p
            className="text-[16px] max-w-[560px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            From adding your vehicle to sharing its service history, CarCare Diary keeps everything organized in one place.
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
                  <div className="rounded-[14px] overflow-hidden w-[280px] md:w-[320px]">
                    <img
                      src={feature.image}
                      alt={feature.title}
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
