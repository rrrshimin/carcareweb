const features = [
  {
    title: "Vehicle Profile",
    description:
      "Add your vehicle details once, including photo, make and model, year, fuel type, transmission, odometer, and unit preference.",
    image:
      "https://images.unsplash.com/photo-1748801584058-29faa47242ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwc2NyZWVuJTIwcG9ydHJhaXQlMjBtb2NrdXB8ZW58MXx8fHwxNzczMzI1NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Maintenance Tracking",
    description:
      "Log maintenance events like oil changes, filters, spark plugs, brakes, fluids, and more \u2014 with date, mileage, specifications, and notes.",
    image:
      "https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHNjcmVlbiUyMHZlcnRpY2FsJTIwZGFya3xlbnwxfHx8fDE3NzMzMjU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Due Status & Reminders",
    description:
      "See what service is coming up next based on previous logs, mileage, and maintenance intervals \u2014 and get reminders when attention is needed.",
    image:
      "https://images.unsplash.com/photo-1759931300350-39eb98d8ed74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGFwcCUyMGludGVyZmFjZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzMyNTUxNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Shareable Maintenance History",
    description:
      "Generate a public link to show your vehicle\u2019s maintenance history \u2014 useful when selling your car and proving it has been properly looked after.",
    image:
      "https://images.unsplash.com/photo-1645529471544-12721793a797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdmVydGljYWwlMjBzY3JlZW4lMjBkaXNwbGF5fGVufDF8fHx8MTc3MzMyNTUxNnww&ixlib=rb-4.1.0&q=80&w=1080",
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
                } items-center gap-10 md:gap-16`}
              >
                <div className="flex-1 w-full flex justify-center">
                  <div
                    className="rounded-[14px] overflow-hidden border max-w-[280px] w-full"
                    style={{ borderColor: "#1F2740" }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[480px] md:h-[540px] object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 w-full">
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
