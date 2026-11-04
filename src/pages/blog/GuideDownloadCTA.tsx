import { Link, useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../landing/StoreButtons";
import {
  GUIDE_CTA_END_SUBTITLE,
  GUIDE_CTA_SUBTITLES,
  getGuideCta,
  guideSlugFromPath,
  type GuideCtaImage,
} from "../../content/guideCta";
import { trackGuideCtaClick, type GuideCtaPlacement } from "../../lib/guideCtaTracking";
import addLogScreenshot from "../../assets/phone_screenshot_adding_log.png";

const IMAGES: Record<GuideCtaImage, { src: string; alt: string }> = {
  log: { src: addLogScreenshot, alt: "CarCare Diary screen for adding a service log entry" },
};

const PRIMARY_GRADIENT = "linear-gradient(135deg, #0051E8 0%, #1E6AF5 60%, #367DFF 100%)";
const SECONDARY_GRADIENT = "linear-gradient(135deg, #0B2A73 0%, #0F46BF 100%)";

interface GuideDownloadCTAProps {
  /** "inline" is the primary banner (after the answer). "footer" is the compact end-of-article banner. */
  variant?: "inline" | "footer";
  /** Primary only. Wraps the banner in its own page-width section; use between top-level sections. */
  standalone?: boolean;
}

/** Direct store links with per-guide click tracking. White on the blue banners. */
function StoreButtons({ slug, placement }: { slug: string; placement: GuideCtaPlacement }) {
  // White focus ring on blue. Stacked and full width on phones, side by side from 640px.
  const btn = "w-full sm:w-auto min-h-12 focus-visible:outline-white!";
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <AppStoreButton
        className={btn}
        ariaLabel="Download CarCare Diary for free on the App Store"
        onClick={() => trackGuideCtaClick(slug, placement, "app_store")}
      />
      <GooglePlayButton
        className={btn}
        ariaLabel="Download CarCare Diary for free on Google Play"
        onClick={() => trackGuideCtaClick(slug, placement, "google_play")}
      />
    </div>
  );
}

export function GuideDownloadCTA({ variant = "inline", standalone = false }: GuideDownloadCTAProps) {
  const { pathname } = useLocation();
  const slug = guideSlugFromPath(pathname);
  const entry = getGuideCta(slug);
  const isFooter = variant === "footer";
  const headingId = `guide-cta-${isFooter ? "end" : "main"}`;

  if (isFooter) {
    return (
      <section className="pt-10 pb-20 md:pt-14 md:pb-28 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[900px] mx-auto">
          <aside
            aria-labelledby={headingId}
            data-guide-cta="secondary"
            data-guide-slug={slug}
            className="rounded-2xl border border-[#367DFF]/60 px-5 py-5 md:px-7 md:py-6 text-white"
            style={{ background: SECONDARY_GRADIENT }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="min-w-0 md:flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9DC0FF]">
                  Download for free
                </p>
                <p id={headingId} className="mt-1 text-lg md:text-xl font-semibold leading-snug">
                  {entry.endHeadline}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">{GUIDE_CTA_END_SUBTITLE}</p>
              </div>
              <div className="md:shrink-0 md:w-[22rem]">
                <StoreButtons slug={slug} placement="secondary" />
              </div>
            </div>
          </aside>
          <div className="mt-6 text-center">
            <Link
              to="/blog"
              className="text-sm text-accent font-semibold hover:text-white transition-colors"
            >
              Back to Guides
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const image = entry.image ? IMAGES[entry.image] : undefined;
  const banner = (
    <aside
      aria-labelledby={headingId}
      data-guide-cta="primary"
      data-guide-slug={slug}
      className={`relative overflow-hidden rounded-2xl text-white shadow-lg shadow-[#0051E8]/20 ${standalone ? "" : "my-8 md:my-10"}`}
      style={{ background: PRIMARY_GRADIENT }}
    >
      <div className="flex items-stretch">
        <div className="min-w-0 flex-1 px-5 py-6 sm:px-8 sm:py-8">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download for free
          </p>
          <p
            id={headingId}
            className="mt-3 text-2xl md:text-[28px] font-semibold leading-tight"
          >
            {entry.headline}
          </p>
          <p className="mt-2 mb-5 max-w-[34rem] text-sm md:text-[1rem] leading-relaxed text-white">
            {GUIDE_CTA_SUBTITLES[entry.kind]}
          </p>
          <div className="sm:max-w-[22rem]">
            <StoreButtons slug={slug} placement="primary" />
          </div>
        </div>
        {image && (
          <div className="relative mr-6 md:mr-10 hidden sm:block w-40 md:w-48 shrink-0 self-end">
            <div className="h-44 md:h-52 overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width={1127}
                height={2296}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </aside>
  );

  if (!standalone) return banner;

  return (
    <section className="px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[900px] mx-auto">{banner}</div>
    </section>
  );
}
