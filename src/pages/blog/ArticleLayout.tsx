import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { LandingHeader } from "../landing/LandingHeader";
import { LandingFooter } from "../landing/LandingFooter";
import { buildBreadcrumbJsonLd } from "../../lib/pageSeoHead";
import { FR_BLOG_HUB_PATH, FR_SITE, isFrBlogSitePath } from "../../fr-poc/frSiteChrome";

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function ArticleLayout({ children, title }: ArticleLayoutProps) {
  const { pathname } = useLocation();
  const fr = isFrBlogSitePath(pathname);

  useEffect(() => {
    const breadcrumb = buildBreadcrumbJsonLd(title, window.location.pathname, {
      locale: fr ? "fr" : "en",
    });
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
  }, [title, fr]);

  const guidesPath = fr ? FR_BLOG_HUB_PATH : "/blog";
  const homeLabel = fr ? FR_SITE.breadcrumbHome : "Home";
  const guidesLabel = FR_SITE.breadcrumbGuides;
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
                {homeLabel}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-muted/50" />
              <Link to={guidesPath} className="hover:text-white transition-colors">
                {guidesLabel}
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
    <div className="flex items-center gap-3 justify-start mb-4">
      <span className="text-xs font-semibold text-accent bg-brand/10 border border-accent/20 px-3 py-1 rounded-full">
        {category}
      </span>
      <span className="text-xs text-muted">{readTime}</span>
    </div>
  );
}

export function ArticleHero({
  category,
  readTime,
  title,
  lede,
}: {
  category: string;
  readTime: string;
  title: string;
  lede: React.ReactNode;
}) {
  return (
    <section className="pt-8 pb-6 md:pt-10 md:pb-8 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[900px] mx-auto">
        <ArticleMeta category={category} readTime={readTime} />
        <h1 className="text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold mb-5 text-left">
          {title}
        </h1>
        <p
          data-speakable="true"
          className="text-lg leading-relaxed text-muted text-left"
        >
          {lede}
        </p>
      </div>
    </section>
  );
}

export function ProseSection({
  children,
  wide,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="py-12 md:py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className={`${wide ? "max-w-[1200px]" : "max-w-[900px]"} mx-auto`}>{children}</div>
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

export function ArticleH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold text-white mb-1 mt-1">
      {children}
    </h4>
  );
}

export function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-white mb-1.5 mt-4 first:mt-0">
      {children}
    </h3>
  );
}
