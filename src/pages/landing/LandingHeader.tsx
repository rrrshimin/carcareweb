import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { to: "#features", label: "Features", hash: true },
  { to: "#how-it-works", label: "How It Works", hash: true },
  { to: "#faq", label: "FAQ", hash: true },
  { to: "/business", label: "For Business", hash: false },
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

  const scrollToSection = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else if (pathname !== "/") {
      window.location.href = "/" + hash;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-10 lg:px-16 xl:px-20 ${
          scrolled || menuOpen
            ? "bg-base/95 border-b border-panel backdrop-blur-xl"
            : "bg-base/80 border-b border-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1280px] mx-auto py-4 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hash ? (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="text-sm text-muted hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm transition-colors hover:text-white ${
                    pathname === link.to
                      ? "text-white font-medium"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("#download")}
              className="bg-brand hover:bg-brand/90 text-white text-sm font-normal px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Download App
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded text-white transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col md:hidden bg-base font-sans">
          <div className="pt-20 px-6 flex flex-col flex-1">
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) =>
                link.hash ? (
                  <button
                    key={link.to}
                    onClick={() => scrollToSection(link.to)}
                    className="text-xl py-3 px-4 rounded-lg text-left text-muted hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`text-xl py-3 px-4 rounded-lg transition-colors ${
                      pathname === link.to
                        ? "text-white font-semibold bg-brand/10"
                        : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-8 pt-8 border-t border-panel">
              <button
                onClick={() => scrollToSection("#download")}
                className="w-full bg-brand text-white text-base font-normal py-3 rounded-lg cursor-pointer"
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
