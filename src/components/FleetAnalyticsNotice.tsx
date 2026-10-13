import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FLEET_ANALYTICS_PREFERENCE_EVENT,
  readFleetAnalyticsPreference,
  writeFleetAnalyticsPreference,
  type FleetAnalyticsPreference,
} from "../lib/fleetAnalyticsPreference";
import type { FleetLocaleId } from "../pages/fleet/fleetContent";

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

interface NoticeCopy {
  title: string;
  body: string;
  allow: string;
  decline: string;
  declined: string;
  change: string;
  privacy: string;
}

const english: NoticeCopy = {
  title: "Help us improve CarCare Fleet.",
  body: "With your permission, we'll use basic analytics to understand how these pages are used. You can change your choice anytime.",
  allow: "Allow analytics",
  decline: "Decline",
  declined: "Analytics declined",
  change: "Change",
  privacy: "Privacy",
};

const COPY: Record<FleetLocaleId, NoticeCopy> = {
  us: english,
  uk: english,
  fr: {
    title: "Aidez-nous à améliorer CarCare Fleet.",
    body: "Avec votre accord, nous utiliserons des statistiques de visite pour améliorer ces pages. Vous pouvez changer d'avis à tout moment.",
    allow: "Autoriser",
    decline: "Refuser",
    declined: "Mesure refusée",
    change: "Modifier",
    privacy: "Confidentialité",
  },
};

function useFleetAnalyticsPreference() {
  const [preference, setPreference] = useState<FleetAnalyticsPreference | null>(() =>
    readFleetAnalyticsPreference(),
  );

  useEffect(() => {
    const sync = () => setPreference(readFleetAnalyticsPreference());
    window.addEventListener(FLEET_ANALYTICS_PREFERENCE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(FLEET_ANALYTICS_PREFERENCE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return preference;
}

function ChoiceButtons({
  copy,
  preference,
  onChoose,
  balanced = false,
}: {
  copy: Pick<NoticeCopy, "allow" | "decline">;
  preference: FleetAnalyticsPreference | null;
  onChoose: (value: FleetAnalyticsPreference) => void;
  balanced?: boolean;
}) {
  const allow = (
    <button
      type="button"
      className={
        balanced
          ? `min-h-11 rounded-full bg-brand px-2.5 text-[0.8125rem] font-semibold text-white hover:bg-accent ${focusClass}`
          : `rounded-full bg-brand px-3 py-1.5 text-sm font-semibold text-white ${focusClass}`
      }
      aria-pressed={preference === "allow"}
      onClick={() => onChoose("allow")}
    >
      {copy.allow}
    </button>
  );
  const decline = (
    <button
      type="button"
      className={
        balanced
          ? `min-h-11 rounded-full border border-white/20 px-2.5 text-[0.8125rem] font-semibold text-white hover:bg-white/10 ${focusClass}`
          : `rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-white ${focusClass}`
      }
      aria-pressed={preference === "decline"}
      onClick={() => onChoose("decline")}
    >
      {copy.decline}
    </button>
  );

  return (
    <div className={balanced ? "grid w-full shrink-0 grid-cols-2 gap-2 md:w-[18.75rem]" : "flex shrink-0 gap-2"}>
      {balanced ? decline : allow}
      {balanced ? allow : decline}
    </div>
  );
}

export function FleetAnalyticsNotice({ locale }: { locale: FleetLocaleId }) {
  const copy = COPY[locale];
  const preference = useFleetAnalyticsPreference();
  const [open, setOpen] = useState(preference === null);
  const changeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef(false);
  const titleId = useId();

  useEffect(() => {
    if (!returnFocus.current || preference !== "decline" || open) return;
    returnFocus.current = false;
    changeRef.current?.focus();
  }, [open, preference]);

  function choose(value: FleetAnalyticsPreference) {
    returnFocus.current = true;
    writeFleetAnalyticsPreference(value);
    setOpen(false);
  }

  if (preference === "allow" && !open) return null;

  if (preference === "decline" && !open) {
    return (
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <button
          ref={changeRef}
          type="button"
          className={`pointer-events-auto rounded-full border border-white/15 bg-panel/95 px-3 py-1.5 text-xs text-muted shadow-none backdrop-blur ${focusClass}`}
          onClick={() => setOpen(true)}
        >
          <span className="text-white">{copy.declined}</span>
          {". "}
          {copy.change}
        </button>
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <section
        aria-labelledby={titleId}
        className="pointer-events-auto w-full max-w-[40rem] rounded-2xl border border-white/10 bg-panel/95 p-3 backdrop-blur md:p-3.5"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="min-w-0">
            <p id={titleId} className="text-sm font-semibold leading-snug tracking-[-0.01em] text-white">
              {copy.title}
            </p>
            <p className="mt-1 text-[0.8125rem] leading-snug text-muted">
              {copy.body}{" "}
              <Link to="/privacy#fleet-measurement" className={`text-white underline decoration-white/40 underline-offset-2 ${focusClass}`}>
                {copy.privacy}
              </Link>
            </p>
          </div>
          <ChoiceButtons balanced copy={copy} preference={preference} onChoose={choose} />
        </div>
      </section>
    </div>
  );
}

export function FleetAnalyticsChoice() {
  const preference = useFleetAnalyticsPreference();
  const status =
    preference === "allow"
      ? "Current choice: allowed."
      : preference === "decline"
        ? "Current choice: declined."
        : "Current choice: not chosen.";

  return (
    <div id="fleet-measurement" className="scroll-mt-8 rounded-xl border border-white/10 p-4">
      <p className="text-white" style={{ fontWeight: 600 }}>
        Your choice for the Fleet pages
      </p>
      <p className="mt-2">
        Choose whether /fleet-us, /fleet-uk, and /fleet-fr may count page views and store clicks.
        The choice is saved in this browser and is not an analytics identifier.
      </p>
      <p className="mt-3" aria-live="polite">
        {status}
      </p>
      <div className="mt-3">
        <ChoiceButtons
          copy={{ allow: "Allow", decline: "Decline" }}
          preference={preference}
          onChoose={writeFleetAnalyticsPreference}
        />
      </div>
    </div>
  );
}
