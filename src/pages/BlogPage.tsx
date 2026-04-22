import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { usePageSeo } from "../lib/usePageSeo";
import { guides } from "./blog/articles";

const SITE_URL = "https://www.carcarediary.com";

const BLOG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Car Maintenance Guides",
  description:
    "Practical guides for car owners on maintenance, service records, checklists, and keeping vehicles in good shape.",
  url: `${SITE_URL}/blog`,
  itemListElement: guides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.title,
    description: guide.description,
    url: `${SITE_URL}${guide.path}`,
  })),
};

export default function BlogPage() {
  const jsonLd = useMemo(() => BLOG_JSON_LD, []);

  usePageSeo({
    title: "Car Maintenance Guides for Everyday Drivers",
    description:
      "Practical guides for car owners on maintenance, service records, checklists, and keeping your vehicle in good shape. Free resources from CarCare Diary.",
    path: "/blog",
    jsonLd,
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-base text-white font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(180deg, #0C111F 0%, #0E1325 40%, #0C111F 100%)",
        }}
      />
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <HubHero />
          <GuidesList />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function HubHero() {
  return (
    <section className="pt-36 pb-14 md:pt-44 md:pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[680px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary Guides
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          Car Maintenance Guides for Everyday Drivers
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-4">
          Practical, people-first guides on keeping your car maintained,
          organized, and ready for the road. Topics covered include car
          maintenance checklists, how to track services and mileage, what
          belongs in a service history, and how to keep records organized over
          time.
        </p>
        <p className="text-sm text-muted">
          These guides accompany{" "}
          <Link
            to="/"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            CarCare Diary
          </Link>
          , a free car maintenance tracker for iPhone and Android.
        </p>
      </div>
    </section>
  );
}

function GuidesList() {
  return (
    <section className="pb-24 md:pb-32 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.path}
                to={guide.path}
                className="group rounded-xl border border-panel bg-surface p-7 flex flex-col justify-between hover:border-accent/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent bg-brand/10 border border-accent/20 px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {guide.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-accent mt-6">
                  Read guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            <div className="rounded-xl border border-panel/40 border-dashed p-7 flex flex-col items-start justify-center opacity-50">
              <p className="text-sm font-semibold text-white mb-1">
                More guides coming soon
              </p>
              <p className="text-sm text-muted">
                Covering service intervals, seasonal maintenance, and more.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
