import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { LandingHeader } from "../pages/landing/LandingHeader";
import { LandingFooter } from "../pages/landing/LandingFooter";
import { usePageSeo } from "../lib/usePageSeo";
import { getFrBlogHubRegistryEntries } from "@fr-poc-hub-registry";
import { buildFrBlogHubJsonLd, FR_BLOG_HUB_PATH, FR_SITE } from "./frSiteChrome";
import { blogHubAlternates } from "./frPublishing";

const DEFAULT_FR_HUB_ALTERNATES = [
  { hreflang: "en" as const, path: "/blog" },
  { hreflang: "fr" as const, path: FR_BLOG_HUB_PATH },
  { hreflang: "x-default" as const, path: "/blog" },
];

export default function FrBlogPage() {
  const guides = useMemo(
    () =>
      [...getFrBlogHubRegistryEntries()].sort((a, b) =>
        a.content.hero.title.localeCompare(b.content.hero.title, "fr"),
      ),
    [],
  );

  const jsonLd = useMemo(() => buildFrBlogHubJsonLd(guides), [guides]);

  const hubAlternates = useMemo(
    () => blogHubAlternates() ?? DEFAULT_FR_HUB_ALTERNATES,
    [],
  );

  usePageSeo({
    title: FR_SITE.blogHub.seoTitle,
    description: FR_SITE.blogHub.seoDescription,
    path: FR_BLOG_HUB_PATH,
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: hubAlternates,
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
          <section className="pt-36 pb-14 md:pt-44 md:pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
            <div className="max-w-[680px] mx-auto">
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                {FR_SITE.blogHub.eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold mb-5">{FR_SITE.blogHub.title}</h1>
              <p className="text-base md:text-lg leading-relaxed text-muted mb-4">
                {FR_SITE.blogHub.lede}
              </p>
              <p className="text-sm text-muted">
                Ces guides accompagnent{" "}
                <Link
                  to="/"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  CarCare Diary
                </Link>
                {FR_SITE.blogHub.ledeAppSuffix}
              </p>
            </div>
          </section>

          <section className="pb-24 md:pb-32 px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {guides.map((entry) => (
                  <Link
                    key={entry.path}
                    to={entry.path}
                    className="group rounded-xl border border-panel bg-surface p-7 flex flex-col justify-between hover:border-accent/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-accent bg-brand/10 border border-accent/20 px-3 py-1 rounded-full">
                          {entry.content.hero.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <Clock className="w-3.5 h-3.5" />
                          {entry.content.hero.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                        {entry.content.hero.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-muted">
                        {entry.content.seo.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-accent mt-6">
                      {FR_SITE.readGuide}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}
