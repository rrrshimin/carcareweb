import logoSrc from "../assets/logo.png";
import appStoreSvg from "../assets/appstore_btn.svg";
import googlePlaySvg from "../assets/google_play_btn.svg";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="/">
          <img src={logoSrc} alt="CarCare Diary" className="h-8 sm:h-9" />
        </a>

        <div className="flex items-center gap-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={appStoreSvg}
              alt="Download on App Store"
              className="h-8 sm:h-9"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={googlePlaySvg}
              alt="Get it on Google Play"
              className="h-8 sm:h-9"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
