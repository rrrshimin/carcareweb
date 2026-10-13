import { useEffect, useLayoutEffect, useMemo, useRef, useState, type RefObject } from "react";
import {
  Bell,
  BookOpen,
  Calendar,
  Car,
  ChevronDown,
  ClipboardCheck,
  FileDown,
  FileText,
  Gauge,
  ListChecks,
  Search,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { LandingFooter } from "../landing/LandingFooter";
import { Logo } from "../landing/Logo";
import { AppStoreButton, GooglePlayButton } from "../landing/StoreButtons";
import { usePageSeo } from "../../lib/usePageSeo";
import { FleetAnalyticsNotice } from "../../components/FleetAnalyticsNotice";
import { captureFleetPageview } from "../../lib/fleetAnalytics";
import {
  FLEET_ANALYTICS_PREFERENCE_EVENT,
  readFleetAnalyticsPreference,
} from "../../lib/fleetAnalyticsPreference";
import { trackStoreClick, type StorePlatform } from "../../lib/storeClick";
import { FleetQrCode, PhoneHandoffButton, PhoneHandoffStrip } from "./FleetQr";
import { loadFleetImages, type FleetImages } from "./fleetAssets";
import {
  FLEET_ALTERNATES,
  FLEET_LOCALES,
  type FleetCopy,
  type FleetIcon,
  type FleetLocaleId,
} from "./fleetContent";

const PHONE_WIDTH = 828;
const PHONE_HEIGHT = 1792;

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const pagePad = "px-5 sm:px-8 lg:px-12";

const ICONS: Record<FleetIcon, LucideIcon> = {
  bell: Bell,
  history: BookOpen,
  gauge: Gauge,
  check: ClipboardCheck,
  wallet: Wallet,
  fleet: Car,
  export: FileDown,
  file: FileText,
};

const DUE_ICONS = [Car, Calendar, Bell] as const;
const HISTORY_ICONS = [Wrench, Gauge, BookOpen] as const;
const INSPECTION_ICONS = [ClipboardCheck, Car, ListChecks, Search] as const;
const SPENDING_ICONS = [Wallet, Car, FileDown] as const;
const NOTE_ICONS = [Car, Wallet, FileText] as const;

const BENEFIT_SPANS = [
  "col-span-2 lg:col-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-2 sm:col-span-1 lg:col-span-1",
  "col-span-2 lg:col-span-2",
  "col-span-2 sm:col-span-1 lg:col-span-1",
];

interface FleetLandingPageProps {
  locale: FleetLocaleId;
}

export default function FleetLandingPage({ locale }: FleetLandingPageProps) {
  const copy = FLEET_LOCALES[locale];
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(72);
  const [images, setImages] = useState<FleetImages | null>(null);

  const jsonLd = useMemo(() => buildJsonLd(copy), [copy]);

  usePageSeo({
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: copy.path,
    lang: copy.htmlLang,
    ogLocale: copy.ogLocale,
    alternates: FLEET_ALTERNATES,
    jsonLd,
  });

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => setHeaderHeight(header.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let sent = false;
    const send = () => {
      if (readFleetAnalyticsPreference() !== "allow") {
        sent = false;
        return;
      }
      if (sent) return;
      sent = true;
      captureFleetPageview(copy.path);
    };
    send();
    window.addEventListener(FLEET_ANALYTICS_PREFERENCE_EVENT, send);
    window.addEventListener("storage", send);
    return () => {
      window.removeEventListener(FLEET_ANALYTICS_PREFERENCE_EVENT, send);
      window.removeEventListener("storage", send);
    };
  }, [copy.path]);

  useEffect(() => {
    let active = true;
    setImages(null);
    loadFleetImages(locale).then(
      (next) => {
        if (active) setImages(next);
      },
      () => {
        if (active) setImages(null);
      },
    );
    return () => {
      active = false;
    };
  }, [locale]);

  return (
    <div className="min-h-screen overflow-x-clip bg-base text-white font-sans">
      <div className="relative z-10" lang={copy.htmlLang}>
        <FleetHeader copy={copy} headerRef={headerRef} />
        <main id="main" style={{ paddingTop: headerHeight }}>
          <Hero copy={copy} images={images} />
          <PhoneHandoffStrip copy={copy} />
          <Due copy={copy} />
          <Benefits copy={copy} />
          <History copy={copy} images={images} />
          <Inspections copy={copy} images={images} />
          <Spending copy={copy} images={images} />
          <Notes copy={copy} />
          <Plan copy={copy} />
          <Faq copy={copy} />
          <FinalCta copy={copy} />
        </main>
        <div lang="en">
          <LandingFooter />
        </div>
        <FleetAnalyticsNotice locale={locale} />
      </div>
    </div>
  );
}

function FleetHeader({
  copy,
  headerRef,
}: {
  copy: FleetCopy;
  headerRef: RefObject<HTMLElement>;
}) {
  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-base/95 backdrop-blur-xl pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
    >
      <div className={`mx-auto flex max-w-[1120px] items-center gap-2 py-2 sm:gap-3 sm:py-3 ${pagePad}`}>
        <Logo size="compact" />
        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <PhoneHandoffButton copy={copy} />
          <StorePair copy={copy} header />
        </div>
      </div>
    </header>
  );
}

function StorePair({ copy, header = false, fill = false }: { copy: FleetCopy; header?: boolean; fill?: boolean }) {
  const onStore = (platform: StorePlatform) => () => {
    trackStoreClick(copy.htmlLang, platform);
  };

  return (
    <>
      <AppStoreButton
        header={header}
        fill={fill}
        kicker={copy.appStoreKicker}
        storeName={copy.appStoreName}
        ariaLabel={copy.appStoreAria}
        onClick={onStore("app_store")}
      />
      <GooglePlayButton
        header={header}
        fill={fill}
        kicker={copy.playKicker}
        storeName={copy.playName}
        ariaLabel={copy.playAria}
        onClick={onStore("google_play")}
      />
    </>
  );
}

function Hero({ copy, images }: { copy: FleetCopy; images: FleetImages | null }) {
  return (
    <section className={`relative overflow-x-clip ${pagePad}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-8 h-[520px] w-[520px] rounded-full bg-brand/30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-48 h-[220px] w-[220px] rounded-full bg-accent/25 blur-[80px]"
      />
      <div className="relative mx-auto max-w-[1120px] py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="min-w-0 shrink-0 md:w-[42%] lg:w-[38%]">
            <h1 className="text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.04em] min-[390px]:text-[2.85rem] sm:text-5xl sm:leading-[1.05] lg:text-[3.35rem]">
              {copy.h1}
            </h1>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-muted md:text-lg">{copy.hero}</p>
            <p className="mt-6 text-sm font-semibold text-white lg:mt-8">{copy.cta}</p>
            <div className="mt-3 flex w-full gap-2.5 md:w-auto">
              <StorePair copy={copy} fill />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <HeroStage copy={copy} images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStage({
  copy,
  images,
}: {
  copy: FleetCopy;
  images: FleetImages | null;
}) {
  const phones = [
    { src: images?.fleet, alt: copy.heroAlt, priority: true },
    { src: images?.vehicle, alt: copy.vehicleAlt },
    { src: images?.analytics, alt: copy.spendingAlt },
  ];

  return (
    <>
      <div className="relative mx-auto w-full md:hidden">
        <div className="w-[72%]">
          <PhoneFrame src={images?.fleet} alt={copy.heroAlt} priority />
        </div>
        <div className="relative z-10 -mt-[118%] ml-auto w-[78%]">
          <PhoneFrame src={images?.vehicle} alt={copy.vehicleAlt} />
        </div>
      </div>
      <div className="hidden gap-3 sm:gap-4 md:flex">
        {phones.map((phone, i) => (
          <div key={i} className="w-[180px] shrink-0 sm:w-[200px] lg:w-[220px]">
            <PhoneFrame src={phone.src} alt={phone.alt} priority={phone.priority} />
          </div>
        ))}
      </div>
    </>
  );
}

function Due({ copy }: { copy: FleetCopy }) {
  return (
    <section className="border-y border-white/10 bg-surface">
      <div className={`mx-auto max-w-[1120px] py-16 md:py-24 ${pagePad}`}>
        <div className="max-w-[40rem]">
          <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.03em] md:text-[2.6rem]">
            {copy.dueTitle}
          </h2>
          <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted md:text-lg">{copy.dueBody}</p>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {copy.duePoints.map((point, index) => {
            const Icon = DUE_ICONS[index] ?? Bell;
            return (
              <li key={point} className="bg-surface px-5 py-6 md:px-6 md:py-8">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <p className="mt-4 text-base font-semibold leading-snug text-white">{point}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Benefits({ copy }: { copy: FleetCopy }) {
  return (
    <section className={`mx-auto max-w-[1120px] py-16 md:py-24 ${pagePad}`}>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {copy.benefits.map((benefit, index) => {
          const Icon = ICONS[benefit.icon];
          const lead = index === 0 || index === 4;
          return (
            <li
              key={benefit.title}
              className={`${BENEFIT_SPANS[index]} min-w-0 rounded-2xl border border-white/10 ${
                lead ? "bg-gradient-to-br from-brand/25 via-panel to-panel p-6 md:p-8" : "bg-panel/50 p-4 md:p-5"
              }`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className={`mt-4 font-semibold tracking-[-0.02em] text-white ${lead ? "text-xl md:text-2xl" : "text-base"}`}>
                {benefit.title}
              </h2>
              <p className={`mt-2 leading-relaxed text-white ${lead ? "max-w-[36ch] text-sm md:text-[1rem]" : "text-sm"}`}>
                {benefit.body}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function History({ copy, images }: { copy: FleetCopy; images: FleetImages | null }) {
  return (
    <section className="border-t border-white/10">
      <div className={`mx-auto grid max-w-[1120px] items-center gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 ${pagePad}`}>
        <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-[300px]">
          <PhoneFrame src={images?.log} alt={copy.historyAlt} />
        </div>
        <div className="min-w-0">
          <h2 className="max-w-[16ch] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] md:text-[2.6rem]">
            {copy.historyTitle}
          </h2>
          <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted">{copy.historyBody}</p>
          <ol className="mt-8 max-w-[32rem] border-l border-accent/40">
            {copy.historyPoints.map((point, index) => {
              const Icon = HISTORY_ICONS[index] ?? Wrench;
              return (
                <li key={point} className="relative py-4 pl-6">
                  <span className="absolute -left-[13px] top-5 flex h-6 w-6 items-center justify-center rounded-full bg-base text-accent ring-1 ring-accent/50">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="text-base leading-snug text-white">{point}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Inspections({ copy, images }: { copy: FleetCopy; images: FleetImages | null }) {
  return (
    <section className="bg-surface">
      <div className={`mx-auto max-w-[1120px] py-16 md:py-24 ${pagePad}`}>
        <div className="max-w-[40rem]">
          <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.03em] md:text-[2.6rem]">
            {copy.inspectionsTitle}
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted">{copy.inspectionsBody}</p>
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
          <div className="mx-auto w-full max-w-[260px] lg:mx-0">
            <PhoneFrame src={images?.inspections} alt={copy.inspectionsAlt} />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {copy.inspectionsPoints.map((point, index) => {
              const Icon = INSPECTION_ICONS[index] ?? ClipboardCheck;
              return (
                <li key={point} className="flex min-w-0 items-start gap-3 rounded-xl bg-base px-4 py-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-accent">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="pt-1.5 text-sm font-semibold leading-snug text-white">{point}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Spending({ copy, images }: { copy: FleetCopy; images: FleetImages | null }) {
  return (
    <section className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-brand/20 blur-[100px]"
      />
      <div className={`relative mx-auto max-w-[1120px] py-16 md:py-24 ${pagePad}`}>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-0">
          <div className="min-w-0 shrink-0 md:w-[46%] lg:w-[42%]">
            <h2 className="max-w-[14ch] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] md:text-[2.75rem]">
              {copy.spendingTitle}
            </h2>
            <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted md:text-lg">{copy.spendingBody}</p>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-[180px] shrink-0 sm:w-[200px] lg:w-[220px]">
                <PhoneFrame src={images?.analytics} alt={copy.spendingAlt} />
              </div>
              <div className="w-[180px] shrink-0 sm:w-[200px] lg:w-[220px]">
                <PhoneFrame src={images?.analyticsVehicle} alt={copy.spendingVehicleAlt} />
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          {copy.spendingPoints.map((point, index) => {
            const Icon = SPENDING_ICONS[index] ?? Wallet;
            return (
              <li key={point} className="flex min-w-0 items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <p className="text-base font-semibold text-white">{point}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Notes({ copy }: { copy: FleetCopy }) {
  return (
    <section className="border-t border-white/10 bg-surface">
      <div className={`mx-auto max-w-[1120px] py-14 md:py-20 ${pagePad}`}>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{copy.notesTitle}</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {copy.notes.map((note, index) => {
            const Icon = NOTE_ICONS[index] ?? FileText;
            return (
              <li key={note.title} className="min-w-0">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold text-white">{note.title}</h3>
                <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted">{note.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Plan({ copy }: { copy: FleetCopy }) {
  return (
    <section className={`mx-auto grid max-w-[1120px] items-end gap-8 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16 md:py-24 ${pagePad}`}>
      <h2 className="max-w-[14ch] text-3xl font-semibold leading-[1.08] tracking-[-0.035em] md:text-5xl">
        {copy.planTitle}
      </h2>
      <div className="min-w-0">
        <p className="text-base leading-relaxed text-muted">{copy.planBody}</p>
        <p className="mt-4 text-sm text-muted">{copy.microcopy}</p>
      </div>
    </section>
  );
}

function Faq({ copy }: { copy: FleetCopy }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-white/10 bg-surface">
      <div className={`mx-auto max-w-[760px] py-16 md:py-24 ${pagePad}`}>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{copy.faqTitle}</h2>
        <div className="mt-8 border-t border-white/10">
          {copy.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `fleet-faq-${copy.id}-${index}`;
            const buttonId = `${panelId}-button`;
            return (
              <div key={faq.question} className="border-b border-white/10">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left ${focusClass}`}
                >
                  <span className="text-base font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-muted motion-safe:transition-transform motion-safe:duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="pb-5">
                  <p className="max-w-[62ch] text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ copy }: { copy: FleetCopy }) {
  return (
    <section id="download" className={`mx-auto max-w-[1120px] py-16 md:py-24 ${pagePad}`}>
      <h2 className="max-w-[16ch] text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-[2.6rem]">
        {copy.finalTitle}
      </h2>
      <p className="mt-6 text-sm font-semibold text-white">{copy.cta}</p>
      <div className="mt-3 flex flex-col items-start gap-5 lg:flex-row lg:flex-wrap lg:items-center">
        <div className="flex w-full gap-2.5 md:w-auto">
          <StorePair copy={copy} fill />
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <FleetQrCode size={112} alt={copy.qrAlt} />
          <p className="max-w-md text-sm leading-relaxed text-muted">{copy.qrCtaHint}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">{copy.microcopy}</p>
    </section>
  );
}

function PhoneFrame({
  src,
  alt,
  priority = false,
}: {
  src?: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="rounded-[2.15rem] bg-gradient-to-b from-white/40 via-white/12 to-white/4 p-px shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7),0_8px_16px_-8px_rgba(0,20,80,0.4)]">
      <div className="rounded-[2.1rem] bg-[#0c111b] p-[7px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
        <div className="aspect-[828/1792] overflow-hidden rounded-[1.55rem] bg-[#070b14]">
          {src ? (
            <img
              src={src}
              alt={alt}
              width={PHONE_WIDTH}
              height={PHONE_HEIGHT}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <span className="sr-only">{alt}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function buildJsonLd(copy: FleetCopy) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "CarCare Diary",
      alternateName: "CarCare Fleet",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android",
      url: `https://www.carcarediary.com${copy.path}`,
      description: copy.seoDescription,
      inLanguage: copy.htmlLang,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: copy.htmlLang,
      mainEntity: copy.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
