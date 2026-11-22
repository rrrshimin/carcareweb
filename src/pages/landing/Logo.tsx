import { Link, useLocation } from "react-router-dom";
import logoWhite from "../../assets/logo-white.png";
import { FR_HOME_PATH, isFrLocalizedMarketingPath } from "../../fr-poc/frSiteChrome";

export function Logo({
  size = "default",
  className = "",
}: {
  size?: "default" | "large" | "compact";
  className?: string;
}) {
  const { pathname } = useLocation();
  const homeTo = isFrLocalizedMarketingPath(pathname) ? FR_HOME_PATH : "/";
  const imgClass =
    size === "large" ? "h-12" : size === "compact" ? "h-7 sm:h-8" : "h-10";

  return (
    <Link to={homeTo} className={`flex shrink-0 items-center ${className}`}>
      <img src={logoWhite} alt="CarCare Diary" className={imgClass} />
    </Link>
  );
}
