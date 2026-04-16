import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { LandingHeader } from "../landing/LandingHeader";
import { LandingFooter } from "../landing/LandingFooter";

const SITE_URL = "https://www.carcarediary.com";

interface HelpArticleLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function HelpArticleLayout({ children, title }: HelpArticleLayoutProps) {
  useEffect(() => {
    const url = `${SITE_URL}${window.location.pathname}`;
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Help Center", item: `${SITE_URL}/help` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    };
    let el = document.querySelector(
      'script[data-seo="breadcrumb-jsonld"]'
    ) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.setAttribute("type", "application/ld+json");
      el.setAttribute("data-seo", "breadcrumb-jsonld");
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(breadcrumb);
    return () => {
      document.querySelector('script[data-seo="breadcrumb-jsonld"]')?.remove();
    };
  }, [title]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-base text-white font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(180deg, #0C111F 0%, #0E1325 40%, #0C111F 100%)",
        }}
      />
      <div className="relative z-10">
        <LandingHeader />
        <div className="pt-28 pb-2 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[1280px] mx-auto">
            <nav className="flex items-center gap-1.5 text-sm text-muted">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-muted/50" />
              <Link to="/help" className="hover:text-white transition-colors">
                Help Center
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-muted/50" />
              <span className="text-white">{title}</span>
            </nav>
          </div>
        </div>
        <main>{children}</main>
        <LandingFooter />
      </div>
    </div>
  );
}
