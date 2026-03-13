import logoWhite from "../../assets/logo-white.png";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const imgClass = size === "large" ? "h-10" : "h-8";

  return (
    <a href="/" className="flex items-center">
      <img src={logoWhite} alt="CarCare Diary" className={imgClass} />
    </a>
  );
}
