import { useLocation } from "react-router-dom";
import appleLogoSrc from "../../assets/AppleLogo.svg";
import { DE_SITE } from "../../de-poc/deSiteChrome";
import { getMarketingLocale } from "./marketingLocale";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/carcare-diary-log/id6762228595";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.carcarediary.app";

interface StoreButtonProps {
  className?: string;
  compact?: boolean;
  /** Single-row sticky header: icon and name, kicker only from 640px up. */
  header?: boolean;
  /** Hero and closing row: side by side, together filling the content width on small screens. */
  fill?: boolean;
  kicker?: string;
  storeName?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function localizedAppStoreDefaults():
  | Pick<StoreButtonProps, "kicker" | "storeName" | "ariaLabel">
  | undefined {
  const { pathname } = useLocation();
  if (getMarketingLocale(pathname) !== "de") return undefined;
  return {
    kicker: DE_SITE.store.appStoreKicker,
    storeName: DE_SITE.store.appStoreName,
    ariaLabel: DE_SITE.store.appStoreAria,
  };
}

function localizedPlayStoreDefaults():
  | Pick<StoreButtonProps, "kicker" | "storeName" | "ariaLabel">
  | undefined {
  const { pathname } = useLocation();
  if (getMarketingLocale(pathname) !== "de") return undefined;
  return {
    kicker: DE_SITE.store.playKicker,
    storeName: DE_SITE.store.playName,
    ariaLabel: DE_SITE.store.playAria,
  };
}

export function AppStoreButton({
  className = "",
  compact = false,
  header = false,
  fill = false,
  kicker = "Download on the",
  storeName = "App Store",
  ariaLabel = "Download CarCare Diary on the App Store",
  onClick,
}: StoreButtonProps) {
  const localized = localizedAppStoreDefaults();
  const resolvedKicker = kicker === "Download on the" && localized ? localized.kicker! : kicker;
  const resolvedStoreName = storeName === "App Store" && localized ? localized.storeName! : storeName;
  const resolvedAria =
    ariaLabel === "Download CarCare Diary on the App Store" && localized
      ? localized.ariaLabel!
      : ariaLabel;
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={resolvedAria}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg bg-white hover:bg-gray-100 transition-colors ${focusClass} ${
        header
          ? "min-h-11 gap-1 px-1.5 py-1 sm:gap-2 sm:px-2.5 sm:py-1.5"
          : fill
            ? "min-h-11 w-full min-w-0 flex-1 gap-2 px-2.5 py-2.5 md:w-auto md:flex-none md:gap-3 md:px-5 md:py-3"
          : compact
            ? "min-h-11 gap-2 px-2.5 py-1.5"
            : "gap-3 px-5 py-3"
      } ${className}`}
    >
      <img
        src={appleLogoSrc}
        alt=""
        aria-hidden="true"
        className={
          header
            ? "h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
            : compact
              ? "w-4 h-4 shrink-0"
              : "w-5 h-5 md:w-6 md:h-6 shrink-0"
        }
      />
      <div className="flex flex-col text-left">
        <span
          className={`leading-tight text-gray-500 whitespace-nowrap ${
            header
              ? "sr-only sm:not-sr-only sm:text-[9px]"
              : compact
                ? "text-[9px] max-[359px]:sr-only"
                : "text-[10px] md:text-[11px]"
          }`}
        >
          {resolvedKicker}
        </span>
        <span
          className={`leading-tight text-gray-900 font-semibold whitespace-nowrap ${
            header ? "text-[11px] sm:text-[13px]" : compact ? "text-[12px]" : "text-[13px] md:text-[15px]"
          }`}
        >
          {resolvedStoreName}
        </span>
      </div>
    </a>
  );
}

export function GooglePlayButton({
  className = "",
  compact = false,
  header = false,
  fill = false,
  kicker = "GET IT ON",
  storeName = "Google Play",
  ariaLabel = "Get CarCare Diary on Google Play",
  onClick,
}: StoreButtonProps) {
  const localized = localizedPlayStoreDefaults();
  const resolvedKicker = kicker === "GET IT ON" && localized ? localized.kicker! : kicker;
  const resolvedStoreName = storeName === "Google Play" && localized ? localized.storeName! : storeName;
  const resolvedAria =
    ariaLabel === "Get CarCare Diary on Google Play" && localized
      ? localized.ariaLabel!
      : ariaLabel;
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={resolvedAria}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg bg-white hover:bg-gray-100 transition-colors ${focusClass} ${
        header
          ? "min-h-11 gap-1 px-1.5 py-1 sm:gap-2 sm:px-2.5 sm:py-1.5"
          : fill
            ? "min-h-11 w-full min-w-0 flex-1 gap-2 px-2.5 py-2.5 md:w-auto md:flex-none md:gap-3 md:px-5 md:py-3"
          : compact
            ? "min-h-11 gap-2 px-2.5 py-1.5"
            : "gap-3 px-5 py-3"
      } ${className}`}
    >
      <svg
        className={
          header
            ? "h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
            : compact
              ? "w-4 h-4 shrink-0"
              : "w-5 h-5 md:w-6 md:h-6 shrink-0"
        }
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.382.226-.72.609-.92z"
          fill="#4285F4"
        />
        <path
          d="M17.545 8.248L5.187.774C4.582.423 3.87.406 3.609 1.814L13.792 12l3.753-3.752z"
          fill="#EA4335"
        />
        <path
          d="M3.609 22.186c.261 1.408.973 1.391 1.578 1.04l12.358-7.474-3.753-3.752L3.61 22.186z"
          fill="#34A853"
        />
        <path
          d="M21.005 10.268l-3.46-2.02L13.792 12l3.753 3.752 3.46-2.02c.88-.536.88-2.928 0-3.464z"
          fill="#FBBC04"
        />
      </svg>
      <div className="flex flex-col text-left">
        <span
          className={`leading-tight text-gray-500 whitespace-nowrap ${
            header
              ? "sr-only sm:not-sr-only sm:text-[9px]"
              : compact
                ? "text-[9px] max-[359px]:sr-only"
                : "text-[10px] md:text-[11px]"
          }`}
        >
          {resolvedKicker}
        </span>
        <span
          className={`leading-tight text-gray-900 font-semibold whitespace-nowrap ${
            header ? "text-[11px] sm:text-[13px]" : compact ? "text-[12px]" : "text-[13px] md:text-[15px]"
          }`}
        >
          {resolvedStoreName}
        </span>
      </div>
    </a>
  );
}
