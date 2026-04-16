import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { LandingHeader } from "../landing/LandingHeader";
import { LandingFooter } from "../landing/LandingFooter";

const SITE_URL = "https://www.carcarediary.com";

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function ArticleLayout({ children, title }: ArticleLayoutProps) {
  useEffect(() => {
    const url = `${SITE_URL}${window.location.pathname}`;
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    };
    let el = document.querySelector('script[data-seo="breadcrumb-jsonld"]') as HTMLScriptElement | null;
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
              <Link to="/blog" className="hover:text-white transition-colors">
                Guides
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

export function ArticleMeta({
  category,
  readTime,
}: {
  category: string;
  readTime: string;
}) {
  return (
    <div className="flex items-center gap-3 justify-center mb-5">
      <span className="text-xs font-semibold text-accent bg-brand/10 border border-accent/20 px-3 py-1 rounded-full">
        {category}
      </span>
      <span className="text-xs text-muted">{readTime}</span>
    </div>
  );
}

export function ProseSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 md:py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[760px] mx-auto">{children}</div>
    </section>
  );
}

export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
      {children}
    </h2>
  );
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-muted mb-4">{children}</p>
  );
}
