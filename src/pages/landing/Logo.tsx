import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.png";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const imgClass = size === "large" ? "h-12" : "h-10";

  return (
    <Link to="/" className="flex items-center">
      <img src={logoWhite} alt="CarCare Diary" className={imgClass} />
    </Link>
  );
}
