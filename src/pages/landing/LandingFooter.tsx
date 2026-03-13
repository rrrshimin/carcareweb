import { Logo } from "./Logo";

export function LandingFooter() {
  return (
    <footer
      className="border-t px-6 sm:px-10 lg:px-16 xl:px-20 py-10"
      style={{ borderColor: "#1F2740" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />

        <div className="flex items-center gap-6 text-[14px]" style={{ color: "#A3ACBF" }}>
          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
        </div>

        <p className="text-[14px]" style={{ color: "#A3ACBF" }}>
          &copy; {new Date().getFullYear()} CarCare Diary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
