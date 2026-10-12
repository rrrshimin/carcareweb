import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { QrCode, X } from "lucide-react";
import QRCode from "qrcode";
import { useLocation } from "react-router-dom";
import type { FleetCopy } from "./fleetContent";
import { fleetHandoffUrl } from "./fleetUrl";

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function FleetQrCode({ size, alt }: { size: number; alt: string }) {
  const location = useLocation();
  const [src, setSrc] = useState("");

  useEffect(() => {
    const value = fleetHandoffUrl(window.location.origin, location.pathname, location.search);
    let active = true;
    QRCode.toDataURL(value, {
      errorCorrectionLevel: "Q",
      margin: 2,
      width: 512,
      color: { dark: "#0C111F", light: "#FFFFFF" },
    }).then(
      (next) => {
        if (active) setSrc(next);
      },
      () => {
        if (active) setSrc("");
      },
    );
    return () => {
      active = false;
    };
  }, [location.pathname, location.search]);

  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white p-1.5"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt={alt} width={512} height={512} className="h-full w-full" />
      ) : (
        <span className="sr-only">{alt}</span>
      )}
    </span>
  );
}

export function PhoneHandoffButton({ copy }: { copy: FleetCopy }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (wasOpen.current && !open) triggerRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`hidden lg:inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-lg px-2 text-[13px] font-medium text-muted hover:text-white ${focusClass}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <QrCode className="h-4 w-4" aria-hidden="true" />
        {copy.qrAction}
      </button>
      {open ? <PhoneHandoffDialog copy={copy} onClose={close} /> : null}
    </>
  );
}

function PhoneHandoffDialog({ copy, onClose }: { copy: FleetCopy; onClose: () => void }) {
  const titleId = useId();
  const bodyId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = [...dialog.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])")];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-base/80" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        className="relative w-full max-w-[22rem] rounded-2xl border border-white/10 bg-surface p-5 text-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7)]"
      >
        <div className="flex items-start justify-between gap-3">
          <h2 id={titleId} className="text-base font-semibold tracking-[-0.02em] text-white">
            {copy.qrModalTitle}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted hover:text-white ${focusClass}`}
            onClick={onClose}
          >
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">{copy.qrClose}</span>
          </button>
        </div>
        <p id={bodyId} className="mt-2 text-sm leading-relaxed text-muted">{copy.qrModalBody}</p>
        <div className="mt-4 flex justify-center">
          <FleetQrCode size={196} alt={copy.qrAlt} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function PhoneHandoffStrip({ copy }: { copy: FleetCopy }) {
  return (
    <section className="hidden border-y border-white/10 bg-panel lg:mt-10 lg:block">
      <div className="mx-auto flex min-h-[136px] max-w-[1120px] items-center gap-5 px-12 py-3">
        <FleetQrCode size={112} alt={copy.qrAlt} />
        <div className="min-w-0">
          <h2 className="text-lg font-semibold tracking-[-0.02em]">{copy.qrStripTitle}</h2>
          <p className="mt-1 max-w-[58ch] text-sm leading-relaxed text-muted">{copy.qrStripBody}</p>
        </div>
      </div>
    </section>
  );
}
