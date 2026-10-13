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
  region: string;
  body: string;
  allow: string;
  decline: string;
  allowed: string;
  declined: string;
  change: string;
  privacy: string;
}

const COPY: Record<FleetLocaleId, NoticeCopy> = {
  us: {
    region: "Analytics choice",
    body: "We count page views and store clicks on this page only if you allow it. This choice is saved in this browser.",
    allow: "Allow",
    decline: "Decline",
    allowed: "Analytics allowed",
    declined: "Analytics declined",
    change: "Change",
    privacy: "Privacy",
  },
  uk: {
    region: "Analytics choice",
    body: "We count page views and store clicks on this page only if you allow it. This choice is stored in this browser.",
    allow: "Allow",
    decline: "Decline",
    allowed: "Analytics allowed",
    declined: "Analytics declined",
    change: "Change",
    privacy: "Privacy",
  },
  fr: {
    region: "Choix de mesure",
    body: "Nous comptons les pages vues et les clics vers les boutiques sur cette page uniquement si vous l'autorisez. Ce choix est enregistré dans ce navigateur.",
    allow: "Autoriser",
    decline: "Refuser",
    allowed: "Mesure autorisée",
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
}: {
  copy: Pick<NoticeCopy, "allow" | "decline">;
  preference: FleetAnalyticsPreference | null;
  onChoose: (value: FleetAnalyticsPreference) => void;
}) {
  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        className={`rounded-full bg-brand px-3 py-1.5 text-sm font-semibold text-white ${focusClass}`}
        aria-pressed={preference === "allow"}
        onClick={() => onChoose("allow")}
      >
        {copy.allow}
      </button>
      <button
        type="button"
        className={`rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-white ${focusClass}`}
        aria-pressed={preference === "decline"}
        onClick={() => onChoose("decline")}
      >
        {copy.decline}
      </button>
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
    if (!returnFocus.current || preference === null || open) return;
    returnFocus.current = false;
    changeRef.current?.focus();
  }, [open, preference]);

  function choose(value: FleetAnalyticsPreference) {
    returnFocus.current = true;
    writeFleetAnalyticsPreference(value);
    setOpen(false);
  }

  if (preference !== null && !open) {
    return (
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <button
          ref={changeRef}
          type="button"
          className={`pointer-events-auto rounded-full border border-white/15 bg-panel/95 px-3 py-1.5 text-xs text-muted shadow-none backdrop-blur ${focusClass}`}
          onClick={() => setOpen(true)}
        >
          <span className="text-white">{preference === "allow" ? copy.allowed : copy.declined}</span>
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
        className="pointer-events-auto flex w-full max-w-[680px] flex-col gap-3 rounded-2xl border border-white/10 bg-panel/95 p-3 backdrop-blur sm:flex-row sm:items-center sm:p-3.5"
      >
        <p id={titleId} className="min-w-0 text-sm leading-snug text-muted">
          <span className="sr-only">{copy.region}. </span>
          {copy.body}{" "}
          <Link to="/privacy#fleet-measurement" className={`text-white underline ${focusClass}`}>
            {copy.privacy}
          </Link>
        </p>
        <ChoiceButtons copy={copy} preference={preference} onChoose={choose} />
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
