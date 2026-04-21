import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logoSrc from "../assets/logo.png";

const DISMISS_KEY = "ccd_mobile_banner_dismissed_at";
const DISMISS_COOLDOWN_MS = 1000 * 60 * 60 * 24 * 7;

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.carcarediary.app";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/carcare-diary-log/id6762228595";

type Platform = "ios" | "android" | null;

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return null;

  const ua = navigator.userAgent || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);

  if (isIOS) return "ios";
  if (isAndroid) return "android";
  return null;
}

function isIOSSafari(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari =
    /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  return isIOS && isSafari;
}

export function MobileAppBanner() {
  const [platform, setPlatform] = useState<Platform>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const detected = detectPlatform();
    if (!detected) return;

    if (detected === "ios" && isIOSSafari()) return;

    try {
      const dismissedAt = window.localStorage.getItem(DISMISS_KEY);
      if (dismissedAt) {
        const diff = Date.now() - Number(dismissedAt);
        if (!Number.isNaN(diff) && diff < DISMISS_COOLDOWN_MS) return;
      }
    } catch {
      // localStorage may be unavailable; fall through and show banner
    }

    setPlatform(detected);
    setShow(true);
  }, []);

  if (!show || !platform) return null;

  const storeUrl = platform === "ios" ? APP_STORE_URL : PLAY_URL;
  const storeLabel = platform === "ios" ? "App Store" : "Google Play";

  function dismiss() {
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // ignore
    }
    setShow(false);
  }

  return (
    <div
      className="fixed inset-x-0 top-0 z-[100] border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 md:hidden"
      role="complementary"
      aria-label="Get the CarCare Diary app"
    >
      <div className="flex items-center gap-3 px-3 py-2">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="-ml-1 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 active:bg-gray-200"
        >
          <X className="h-4 w-4" />
        </button>

        <img
          src={logoSrc}
          alt=""
          className="h-10 w-10 rounded-lg object-contain"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold leading-tight text-gray-900">
            CarCare Diary
          </p>
          <p className="truncate text-[11px] leading-tight text-gray-500">
            Free — on {storeLabel}
          </p>
        </div>

        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-blue-600 px-4 py-1.5 text-[13px] font-semibold text-white hover:bg-blue-700 active:bg-blue-800"
        >
          Get
        </a>
      </div>
    </div>
  );
}

export default MobileAppBanner;
