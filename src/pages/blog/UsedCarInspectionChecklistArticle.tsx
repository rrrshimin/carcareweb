import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "Used Car Inspection Checklist";
const ARTICLE_CATEGORY = "Guides";
const ARTICLE_READ_TIME = "7 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/used-car-inspection-checklist";
const ARTICLE_LEDE =
  "Buying a used car involves a lot of trust. The car may look clean and drive well on a short test drive while hiding deferred maintenance, past damage, or mechanical problems that only become apparent later. A systematic inspection — covering the exterior, interior, under the bonnet, underneath the car, and a proper test drive — significantly reduces the chance of an expensive surprise.";
const CTA_TITLE = "Ask the seller for their CarCare Diary service history — or start tracking yours today";

const exteriorChecks = [
  { label: "Panel gaps and alignment", note: "Uneven or inconsistent gaps between panels (door, bonnet, bumper) suggest accident damage and repair. Run your hand along panel edges to feel for filler." },
  { label: "Paint colour match between panels", note: "Slight colour differences between adjacent panels indicate a resprayed panel following accident repair. Check in daylight at a slight angle." },
  { label: "Rust spots, bubbling paint, or surface corrosion", note: "Pay attention to wheel arches, the underside of door sills, around window seals, and boot floor. Surface rust can hide structural rust underneath." },
  { label: "Glass — chips, cracks, or delamination", note: "Check all windows and the windscreen. Chips and cracks may be a negotiation point or a safety issue. Delamination shows as a cloudy haze between glass layers." },
  { label: "Tyre condition and wear pattern", note: "Check tread depth on all four tyres and look for uneven wear. Inside edge wear points to alignment issues. Cupping suggests worn shock absorbers. Mismatched tyres suggest budget-oriented ownership." },
  { label: "Lights — cracks, water ingress, or haze in lenses", note: "Cloudy or water-stained headlight lenses reduce light output significantly and are expensive to replace. Cracks in lens covers can fail safety inspections." },
];

const interiorChecks = [
  { label: "Odometer reading and mileage consistency", note: "Check that the displayed mileage is consistent with the car's age and general wear. Heavily worn pedal rubbers, steering wheel, seat bolsters, or gear selector on a supposedly low-mileage car is suspicious." },
  { label: "Warning lights on startup", note: "Turn the ignition to position 2 (before cranking) — all warning lights should illuminate briefly as a bulb check. Start the engine and watch for any lights that remain on or come on after starting." },
  { label: "Air conditioning — cooling and heating", note: "Run the A/C fully cold and fully hot. Air conditioning that does not cool well may need a regas, compressor work, or cabin filter replacement." },
  { label: "All controls, switches, and windows", note: "Test every electric window, mirror adjuster, seat adjustment, infotainment button, and USB port. Repairing minor electrical faults adds up." },
  { label: "Seat condition and adjustment", note: "All seats should adjust and lock correctly. Check for tears, stains, or signs of water damage in the upholstery (musty smell, tide marks)." },
  { label: "Smell inside the cabin", note: "Musty or mildew smell suggests water ingress — check carpet padding and boot lining for dampness. Smoke smell is very difficult to fully remove." },
  { label: "Boot and spare wheel area", note: "Check the boot floor for rust or water staining. Lift the spare wheel cover and check for a spare (full-size, space saver, or foam sealant kit)." },
];

const engineChecks = [
  { label: "Engine oil level and condition", note: "Pull the dipstick — the level should be between MIN and MAX. Oil that is milky or frothy suggests coolant contamination (head gasket). Very black, thick oil suggests neglected service intervals." },
  { label: "Coolant level and colour", note: "Check the coolant reservoir when cold. Coolant should be brightly coloured (green, orange, or blue depending on type) — not rusty brown or contaminated. Check for a oily film on the surface, which can suggest head gasket issues." },
  { label: "Brake fluid reservoir level", note: "A low level may indicate brake pad wear (normal) or a brake fluid leak (not normal). Check the condition — very dark fluid suggests it has not been changed in a long time." },
  { label: "Any visible oil leaks around the engine", note: "Look for wet or oily areas on the engine block, valve cover, oil pan, and underneath the car. Minor seeping around gaskets is common at higher mileage; active leaks are a cost to factor in." },
  { label: "Belts — condition and tension", note: "The serpentine belt should be free of cracks, fraying, or glazing. If the car has a timing belt, ask when it was last replaced — this is one of the most important service records to verify." },
  { label: "Battery terminals — corrosion or looseness", note: "Heavy white or blue-green corrosion on battery terminals suggests a neglected battery or a charging system issue." },
  { label: "Air filter condition", note: "A very dirty or clogged air filter suggests maintenance has been deferred across the board." },
];

const driveChecks = [
  { label: "Cold start behaviour", note: "A healthy engine should start promptly without excessive cranking, rough running, or smoke. Brief white vapour on a cold day is normal. Persistent smoke or a rough idle after warm-up is not." },
  { label: "Braking — straight, firm, and progressive", note: "The car should stop in a straight line without pulling. The pedal should feel firm, not spongy or soft. Any grinding, vibration, or pulling under braking needs investigation." },
  { label: "Acceleration — smooth and responsive", note: "Hesitation, surging, misfiring, or a noticeable lack of power suggests engine or fuel system issues." },
  { label: "Transmission shifting — automatic and manual", note: "Automatic: shifts should be smooth and prompt, not harsh, delayed, or with a shudder. Manual: gear selection should be clean and positive. Any grinding when selecting gears is a concern." },
  { label: "Steering — straight tracking and feel", note: "On a flat, level road the car should track straight without pulling. Steering should feel responsive, not vague or excessively light. Any vibration, knocking, or notchiness should be noted." },
  { label: "Suspension noise", note: "Listen for clunking, rattling, or knocking over bumps and during slow turns. These point to worn shock absorbers, struts, ball joints, or bushings." },
  { label: "Warning lights during the drive", note: "Drive long enough for the engine management system to run its checks. Any warning lights that appear should be noted and investigated." },
];

const articleFaqs = [
  {
    question: "Should I Always Get a Pre-Purchase Inspection?",
    answer:
      "Yes, for any significant purchase. A pre-purchase inspection by an independent mechanic — ideally on a lift — gives you a complete view of the car's condition beyond what a visual check and test drive can reveal. The cost is typically modest and can save significantly if it uncovers a hidden problem. Some buyers skip this step when buying from a dealer; it is still worthwhile.",
  },
  {
    question: "What Service Records Should a Used Car Have?",
    answer:
      "Ideally, you want records of regular oil changes (by mileage), any major services performed (timing belt, coolant, transmission fluid), tyre and brake work, and any repairs. A complete and consistent service history indicates a well-maintained vehicle. Gaps in service history — particularly at high mileage — are a risk factor. Ask for receipts or a logbook if possible.",
  },
  {
    question: "What Is a CarCare Diary Shared History?",
    answer:
      "CarCare Diary lets vehicle owners generate a shareable public link to their vehicle's service history. As a buyer, asking the seller for this link lets you see logged oil changes, services, repairs, and notes before you visit. As a seller, sharing your maintenance history builds trust and demonstrates the car has been looked after.",
  },
  {
    question: "How Do I Check if a Car Has Been in an Accident?",
    answer:
      "Panel gaps, paint colour inconsistencies, and visible filler are visual clues. In many markets, vehicle history reports (from providers such as Carfax, AutoCheck, or local equivalents) can show recorded accident damage, insurance claims, and ownership history. A pre-purchase inspection on a lift can also reveal structural repairs that cosmetic work hides.",
  },
  {
    question: "What Are the Most Expensive Problems to Miss When Buying a Used Car?",
    answer:
      "Head gasket failure or a cracked cylinder head (can cost as much or more than the car's value to repair), automatic transmission problems, timing belt failure on an interference engine (causes catastrophic engine damage), serious structural rust, and active oil leaks into the engine or gearbox. These are the areas a pre-purchase inspection specifically looks for.",
  },
  {
    question: "Can I Negotiate Based on Inspection Findings?",
    answer:
      "Yes. Any issues found during a pre-purchase inspection are legitimate negotiation points. You can ask the seller to fix the issue before purchase, reduce the price to reflect the repair cost, or walk away entirely. Having a mechanic's written assessment makes negotiation much clearer.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Used Car Inspection Checklist",
    description:
      "A practical used car inspection checklist covering exterior, interior, engine bay, and test drive — plus what service records to ask for.",
    url: ARTICLE_URL,
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    publisher: { "@type": "Organization", name: "CarCare Diary", url: "https://www.carcarediary.com" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: articleFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function UsedCarInspectionChecklistArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Used Car Inspection Checklist",
    description:
      "A practical used car inspection checklist covering exterior, interior, engine bay, and test drive — plus what service records to ask for.",
    path: "/blog/used-car-inspection-checklist",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Used car inspection checklist"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Before buying, check{" "}
          <strong className="text-white">panel gaps and paint match,
          rust, tyre wear, oil and coolant condition, all warning lights,
          braking and steering on a test drive, and any available service
          history</strong>. A pre-purchase inspection by an independent
          mechanic is strongly recommended for any significant purchase.
        </ShortAnswerBox>

        <div className="rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 mb-8">
          <p className="text-sm font-semibold text-accent mb-1.5">Ask for the service history first</p>
          <p className="text-sm leading-relaxed text-muted">
            Before spending time inspecting a car in person, ask the seller
            for their service records. A seller using CarCare Diary can share
            a public link to the vehicle's full maintenance history — oil
            changes, services, repairs, mileage, and notes. A complete,
            consistent service history significantly reduces the risk of
            hidden maintenance problems.
          </p>
          <p className="mt-2">
            <Link to="/share-car-maintenance-history" className="text-accent font-semibold text-sm hover:text-white transition-colors">
              → How shareable service history works
            </Link>
          </p>
        </div>

        <CheckSection heading="Exterior" items={exteriorChecks} />
        <CheckSection heading="Interior" items={interiorChecks} />
        <CheckSection heading="Engine bay" items={engineChecks} />
        <CheckSection heading="Test drive" items={driveChecks} />

        <ArticleH2>What to do with your findings</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { label: "Get a pre-purchase inspection", note: "An independent mechanic on a lift can identify issues a visual check and test drive miss — structural rust, frame damage, hidden leaks, worn suspension. Budget for this on any serious purchase." },
            { label: "Request a vehicle history report", note: "In many markets, services such as Carfax, AutoCheck, or local equivalents can show accident history, insurance claims, number of previous owners, and recorded mileage at registration. These reports are not exhaustive but are a useful data point." },
            { label: "Negotiate based on findings", note: "Any issue found is a legitimate reason to adjust the price or ask for a repair before purchase. A mechanic's written quote for a needed repair is the clearest basis for negotiation." },
            { label: "Walk away if records are absent and inspection raises concerns", note: "A seller with no service records and a car with inspection red flags is a risk. There are always other cars." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>After you buy: start tracking immediately</ArticleH2>
        <ArticleP>
          Once you own the vehicle, log what you know — the mileage at
          purchase, any services done before or at handover, and any
          issues found during inspection. CarCare Diary lets you build
          a complete service history from day one, which protects your
          investment and gives you the same transparent record to share
          when you eventually sell.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/what-to-include-in-a-car-service-history", label: "what to include in a service history" },
            { to: "/blog/car-maintenance-checklist", label: "car maintenance checklist" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance schedule by mileage" },
            { to: "/share-car-maintenance-history", label: "share car service history" },
            { to: "/car-service-history-app", label: "service history app" },
          ].map((link, i) => (
            <span key={link.to}>
              {i > 0 && " · "}
              <Link to={link.to} className="text-accent font-semibold hover:text-white transition-colors">{link.label}</Link>
            </span>
          ))}
        </p>

        <ArticleH2>Frequently asked questions</ArticleH2>
        <ArticleFAQ faqs={articleFaqs} />
      </ProseSection>
      <GuideDownloadCTA title={CTA_TITLE} variant="footer" />
    </ArticleLayout>
  );
}

function CheckSection({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; note: string }[];
}) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-accent pl-3">{heading}</h3>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LastUpdated() {
  return (
    <div className="flex items-center gap-2 mb-6 text-xs text-muted">
      <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">
        Last updated: August 2026
      </span>
    </div>
  );
}

function ShortAnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/30 bg-brand/5 px-5 py-5 mb-8">
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Short answer</p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function ArticleFAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 mt-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`rounded-xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            >
              <span className="text-[15px] font-semibold text-white pr-4">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
