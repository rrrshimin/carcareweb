import appleLogoSrc from "../../assets/AppleLogo.svg";

interface StoreButtonProps {
  className?: string;
}

export function AppStoreButton({ className = "" }: StoreButtonProps) {
  return (
    <a
      href="https://apps.apple.com/us/app/carcare-diary-log/id6762228595"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download CarCare Diary on the App Store"
      className={`inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors ${className}`}
    >
      <img
        src={appleLogoSrc}
        alt=""
        aria-hidden="true"
        className="w-5 h-5 md:w-6 md:h-6 shrink-0"
      />
      <div className="flex flex-col text-left">
        <span className="text-[10px] md:text-[11px] leading-tight text-gray-500">
          Download on the
        </span>
        <span className="text-[13px] md:text-[15px] leading-tight text-gray-900 font-semibold">
          App Store
        </span>
      </div>
    </a>
  );
}

export function GooglePlayButton({ className = "" }: StoreButtonProps) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.carcarediary.app"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get CarCare Diary on Google Play"
      className={`inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors ${className}`}
    >
      <svg
        className="w-5 h-5 md:w-6 md:h-6 shrink-0"
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
        <span className="text-[10px] md:text-[11px] leading-tight text-gray-500">
          GET IT ON
        </span>
        <span className="text-[13px] md:text-[15px] leading-tight text-gray-900 font-semibold">
          Google Play
        </span>
      </div>
    </a>
  );
}
