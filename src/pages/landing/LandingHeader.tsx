import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { AppStoreButton, GooglePlayButton } from "./StoreButtons";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/business", label: "For Business" },
];

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-10 lg:px-16 xl:px-20"
        style={{
          backgroundColor: scrolled || menuOpen
            ? "rgba(12, 17, 31, 0.95)"
            : "rgba(12, 17, 31, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid #1F2740"
              : "1px solid transparent",
        }}
      >
        <div className="max-w-[1280px] mx-auto py-3 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[14px] transition-colors hover:text-white"
                  style={{
                    fontWeight: pathname === link.to ? 600 : 400,
                    color: pathname === link.to ? "#FFFFFF" : "#A3ACBF",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <AppStoreButton className="px-5 py-3 gap-3" />
              <GooglePlayButton className="px-5 py-3 gap-3" />
            </div>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors cursor-pointer"
            style={{ color: "#FFFFFF" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{
            backgroundColor: "#0C111F",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <div className="pt-20 px-6 flex flex-col flex-1">
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-[20px] py-3 px-4 rounded-xl transition-colors"
                  style={{
                    fontWeight: pathname === link.to ? 700 : 500,
                    color: pathname === link.to ? "#FFFFFF" : "#A3ACBF",
                    backgroundColor:
                      pathname === link.to
                        ? "rgba(0, 81, 232, 0.1)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div
              className="mt-8 pt-8 flex flex-col gap-3"
              style={{ borderTop: "1px solid #1F2740" }}
            >
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
