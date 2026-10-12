import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.png";

export function Logo({
  size = "default",
  className = "",
}: {
  size?: "default" | "large" | "compact";
  className?: string;
}) {
  const imgClass =
    size === "large" ? "h-12" : size === "compact" ? "h-7 sm:h-8" : "h-10";

  return (
    <Link to="/" className={`flex shrink-0 items-center ${className}`}>
      <img src={logoWhite} alt="CarCare Diary" className={imgClass} />
    </Link>
  );
}
