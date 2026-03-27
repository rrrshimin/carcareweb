import { ClipboardCheck, CalendarClock, History, Share2 } from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "./StoreButtons";
import heroScreenshot from "../../assets/screenshot-hero.png";

const trustBullets = [
  { icon: ClipboardCheck, text: "Log maintenance in seconds" },
  { icon: CalendarClock, text: "See what's due next" },
  { icon: History, text: "Keep a clear service history" },
  { icon: Share2, text: "Share records when selling car" },
];

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6"
            style={{ fontWeight: 800, color: "#FFFFFF" }}
          >
            Track your car maintenance{" "}
            <span style={{ color: "#367DFF" }}>without the guesswork</span>
          </h1>
          <p
            className="text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[540px] mx-auto lg:mx-0"
            style={{ color: "#A3ACBF" }}
          >
            CarCare Diary helps drivers log maintenance, monitor upcoming service needs,
            update mileage, and keep a structured history they can share when selling a vehicle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-[480px] mx-auto lg:mx-0">
            {trustBullets.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(0, 81, 232, 0.15)" }}
                >
                  <item.icon className="w-4 h-4" style={{ color: "#367DFF" }} />
                </div>
                <span className="text-[14px] text-left" style={{ color: "#A3ACBF" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-[40px] opacity-30 blur-[60px]"
              style={{ background: "radial-gradient(circle, #0051E8 0%, transparent 70%)" }}
            />
            <div
              className="relative rounded-md overflow-hidden"
              style={{ maxWidth: 420 }}
            >
              <img
                src={heroScreenshot}
                alt="CarCare Diary app"
                className="w-[420px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
