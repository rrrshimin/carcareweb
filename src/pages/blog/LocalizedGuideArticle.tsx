import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import type { AppCardProfile, GuideContentBlock, ListItem, LocalizedGuideContent } from "../../content/guides/types";

function renderStatusCell(value: string) {
  if (value === "Oui" || value === "Yes")
    return <span className="text-[13px] font-semibold text-emerald-400">{value}</span>;
  if (value === "Limité" || value === "Limited")
    return <span className="text-[13px] font-semibold text-accent">{value}</span>;
  if (value === "Non" || value === "No")
    return <span className="text-[13px] text-muted/60">{value}</span>;
  if (value === "Non confirmé" || value === "Unclear")
    return <span className="text-[13px] italic text-muted/50">{value}</span>;
  return <span className="text-[13px] text-muted">{value}</span>;
}
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleH3,
  ArticleH4,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";
import { mergeFrAlternatesForSsg, resolveFrGuideInternalHref } from "../../fr-poc/frPublishing";
import { renderGuideInline } from "./guideInlineRichText";

interface LocalizedGuideArticleProps {
  content: LocalizedGuideContent;
}

export function LocalizedGuideArticle({ content }: LocalizedGuideArticleProps) {
  const jsonLd = useMemo(() => content.seo.jsonLd, [content.seo.jsonLd]);

  const pageSeo = useMemo(
    () => mergeFrAlternatesForSsg({ ...content.seo, jsonLd }),
    [content.seo, jsonLd],
  );

  usePageSeo(pageSeo);

  return (
    <ArticleLayout title={content.breadcrumbTitle}>
      <ArticleHero
        category={content.hero.category}
        readTime={content.hero.readTime}
        title={content.hero.title}
        lede={renderGuideInline(content.hero.lede, "hero-")}
      />
      <ProseSection>
        {content.lastUpdatedLabel ? (
          <p className="text-xs text-muted mb-6">
            <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">
              {content.lastUpdatedLabel}
            </span>
          </p>
        ) : null}
        {content.prefaceCallout ? (
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 mb-6">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
              {content.prefaceCallout.title}
            </p>
            <p className="text-sm leading-relaxed text-muted">{renderGuideInline(content.prefaceCallout.body, "pf-")}</p>
          </div>
        ) : null}
        {content.shortAnswer ? (
          <div className="rounded-xl border border-accent/30 bg-brand/5 px-5 py-5 mb-8">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
              {content.shortAnswer.label}
            </p>
            <p className="text-sm leading-relaxed text-muted">{renderGuideInline(content.shortAnswer.body, "sa-")}</p>
            {content.shortAnswer.footnote ? (
              <p className="text-xs text-muted/60 mt-3 italic">
                {renderGuideInline(content.shortAnswer.footnote, "saf-")}
              </p>
            ) : null}
          </div>
        ) : null}

        {!content.blocks.some((b) => b.type === "primaryCta") ? (
          <GuideDownloadCTA cta={content.cta} trackingSlug={content.ctaSlug} />
        ) : null}

        {content.blocks.map((block, index) => (
          <GuideContentBlockView
            key={`${block.type}-${index}`}
            block={block}
            cta={content.cta}
            trackingSlug={content.ctaSlug}
          />
        ))}

        <ArticleH2>{content.faqHeading}</ArticleH2>
        <GuideFaqAccordion faqs={content.faqs} />
      </ProseSection>
      <GuideDownloadCTA variant="footer" cta={content.cta} trackingSlug={content.ctaSlug} />
    </ArticleLayout>
  );
}

function GuideContentBlockView({
  block,
  cta,
  trackingSlug,
}: {
  block: GuideContentBlock;
  cta: LocalizedGuideContent["cta"];
  trackingSlug: string;
}) {
  switch (block.type) {
    case "primaryCta":
      return <GuideDownloadCTA cta={cta} trackingSlug={trackingSlug} />;
    case "heading":
      return <ArticleH2>{block.text}</ArticleH2>;
    case "subheading":
      if (block.level === 4) return <ArticleH4>{block.text}</ArticleH4>;
      if (block.accent) {
        return (
          <h3 className="text-lg font-semibold text-white mb-4 mt-6 border-l-2 border-accent pl-3 first:mt-0">
            {block.text}
          </h3>
        );
      }
      return <ArticleH3>{block.text}</ArticleH3>;
    case "paragraph":
      return <ArticleP>{renderGuideInline(block.text)}</ArticleP>;
    case "list": {
      const { variant, items, ordered } = block;

      if (variant === "check") {
        return (
          <ul className="flex flex-col gap-3 mb-6">
            {items.map((item: ListItem, idx: number) => {
              if (typeof item === "string") {
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed text-muted">
                      {renderGuideInline(item, `chk-${idx}-`)}
                    </span>
                  </li>
                );
              }
              return (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    {item.label ? (
                      <p className="text-sm font-semibold text-white mb-0.5">{item.label}</p>
                    ) : null}
                    <p className="text-sm leading-relaxed text-muted">
                      {renderGuideInline(item.text, `chkt-${idx}-`)}
                    </p>
                    {item.link ? (
                      <Link
                        to={resolveFrGuideInternalHref(item.link.href)}
                        className="text-xs text-accent font-semibold hover:text-white transition-colors mt-1 inline-block"
                      >
                        → {item.link.label}
                      </Link>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        );
      }

      if (variant === "steps") {
        return (
          <ol className="flex flex-col gap-3 mb-6">
            {items.map((item: ListItem, idx: number) => {
              const content = typeof item === "string" ? item : item.text;
              return (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-[11px] font-bold text-accent shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {renderGuideInline(content, `stp-${idx}-`)}
                  </span>
                </li>
              );
            })}
          </ol>
        );
      }

      // "bullet" or no variant — explicit markers defeat Tailwind v4 preflight
      const Tag = ordered ? "ol" : "ul";
      return (
        <Tag className="flex flex-col gap-2 mb-6">
          {items.map((item: ListItem, idx: number) => {
            const content = typeof item === "string" ? item : item.text;
            return (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                {ordered ? (
                  <span className="shrink-0 font-semibold text-muted/60 min-w-[1.25rem] text-right">
                    {idx + 1}.
                  </span>
                ) : (
                  <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-accent/60 block" />
                )}
                <span>{renderGuideInline(content, `lst-${idx}-`)}</span>
              </li>
            );
          })}
        </Tag>
      );
    }
    case "links":
      return (
        <p className="text-sm text-muted mb-8">
          {block.intro ? `${block.intro} ` : null}
          {block.links.map((link, i) => (
            <span key={link.href}>
              {i > 0 ? " · " : null}
              <Link
                to={resolveFrGuideInternalHref(link.href)}
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      );
    case "callout": {
      const tone = block.tone ?? "neutral";
      const toneStyles = {
        neutral: { border: "border-accent/30", bg: "bg-brand/5", label: "text-accent" },
        info:    { border: "border-accent/30", bg: "bg-brand/5", label: "text-accent" },
        warning: { border: "border-amber-400/20", bg: "bg-amber-400/5", label: "text-amber-400" },
        danger:  { border: "border-red-400/20",  bg: "bg-red-400/5",   label: "text-red-400" },
      } as const;
      const ts = toneStyles[tone];
      return (
        <div className={`rounded-xl border ${ts.border} ${ts.bg} px-5 py-5 mb-8`}>
          <p className={`text-xs font-semibold ${ts.label} uppercase tracking-wider mb-2`}>
            {block.title}
          </p>
          <p className="text-sm leading-relaxed text-muted">{renderGuideInline(block.body)}</p>
          {block.footnote ? (
            <p className="text-xs text-muted/60 mt-3 italic">{renderGuideInline(block.footnote, "cf-")}</p>
          ) : null}
        </div>
      );
    }
    case "table": {
      const {
        headers,
        rows,
        statusCols,
        highlightRow,
        caption,
        groupByFirstCol,
        accentFirstCol,
      } = block;
      const statusSet = new Set<number>(statusCols ?? []);
      const isStatusTable = (statusCols?.length ?? 0) > 0;

      // Precompute rowSpan groups when groupByFirstCol is true
      const spanMap = new Map<number, number>(); // rowIdx → span count, or -1 to skip first col
      if (groupByFirstCol) {
        let i = 0;
        while (i < rows.length) {
          const key = rows[i][0];
          let span = 1;
          while (i + span < rows.length && rows[i + span][0] === key) span++;
          spanMap.set(i, span);
          for (let j = 1; j < span; j++) spanMap.set(i + j, -1);
          i += span;
        }
      }

      const minWidth = headers.length > 7 ? "min-w-[1000px]" : "min-w-[720px]";

      return (
        <div className="overflow-x-auto mb-6 max-w-full -mx-1 px-1">
          <table
            className={`${minWidth} w-full text-sm text-left border border-panel rounded-xl overflow-hidden`}
          >
            <thead className="bg-surface">
              <tr>
                {headers.map((h, hi) => (
                  <th
                    key={hi}
                    className={
                      isStatusTable
                        ? "px-3 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wide whitespace-nowrap border-b border-panel first:pl-5"
                        : accentFirstCol
                        ? "text-left px-5 py-3.5 font-semibold text-white text-sm whitespace-nowrap border-b border-panel"
                        : "px-4 py-3 font-semibold text-white border-b border-panel"
                    }
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => {
                const isHighlighted = highlightRow !== undefined && ri === highlightRow;
                const spanVal = groupByFirstCol ? (spanMap.get(ri) ?? 1) : 1;
                const skipFirst = spanVal === -1;
                const rowSpan = spanVal > 1 ? spanVal : undefined;

                return (
                  <tr
                    key={ri}
                    className={`border-b border-panel last:border-0 ${isHighlighted ? "bg-brand/5" : ""}`}
                  >
                    {!skipFirst ? (
                      <td
                        rowSpan={rowSpan}
                        className={
                          accentFirstCol
                            ? "px-5 py-3.5 font-semibold text-accent whitespace-nowrap align-top border-r border-panel"
                            : isHighlighted
                            ? "pl-5 pr-3 py-3 text-sm font-semibold text-accent whitespace-nowrap"
                            : "pl-5 pr-3 py-3 text-sm font-semibold text-white whitespace-nowrap"
                        }
                      >
                        {renderGuideInline(row[0], `c-${ri}-0-`)}
                      </td>
                    ) : null}
                    {row.slice(1).map((cell, ci) => {
                      const colIndex = ci + 1;
                      const isStatus = statusSet.has(colIndex);
                      const isLastCol = colIndex === row.length - 1;
                      return (
                        <td
                          key={ci}
                          className={
                            isStatus
                              ? "px-3 py-2.5 text-center"
                              : isLastCol && isStatusTable
                              ? "px-3 pr-5 py-3 text-xs text-muted leading-snug max-w-[200px]"
                              : accentFirstCol && colIndex === 1
                              ? "px-5 py-3.5 text-white font-medium whitespace-nowrap align-top"
                              : accentFirstCol
                              ? "px-5 py-3.5 text-muted leading-relaxed"
                              : "px-4 py-3 text-muted leading-relaxed"
                          }
                        >
                          {isStatus
                            ? renderStatusCell(cell)
                            : renderGuideInline(cell, `c-${ri}-${colIndex}-`)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {caption ? (
            <p className="text-xs text-muted/60 mt-3">{renderGuideInline(caption, "cap-")}</p>
          ) : null}
        </div>
      );
    }
    case "cardGrid": {
      const { cols = 2, cards } = block;
      return (
        <div className={`grid grid-cols-1 ${cols === 2 ? "sm:grid-cols-2" : ""} gap-5 mb-8`}>
          {cards.map((card, ci) => (
            <div key={ci} className="rounded-xl border border-panel bg-surface p-6">
              <div className="mb-4">
                <h3 className="text-base font-semibold text-white mb-1">{card.title}</h3>
                {card.badge ? (
                  <p className="text-xs font-semibold text-accent">{card.badge}</p>
                ) : null}
              </div>
              <ul className="flex flex-col gap-2.5">
                {card.items.map((item, ii) => {
                  const v = card.variant ?? "check";
                  return (
                    <li key={ii} className="flex items-start gap-2.5">
                      {v === "check" ? (
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      ) : (
                        <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-accent/60 block" />
                      )}
                      <span className="text-sm leading-snug text-muted">
                        {renderGuideInline(item, `cg-${ci}-${ii}-`)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      );
    }
    case "appCard":
      return <AppCardView profile={block.profile} />;
    default:
      return null;
  }
}

function AppCardView({ profile }: { profile: AppCardProfile }) {
  const L = {
    bestFor: profile.labels?.bestFor ?? "Best for",
    pricing: profile.labels?.pricing ?? "Pricing",
    platforms: profile.labels?.platforms ?? "Platforms",
    strengths: profile.labels?.strengths ?? "Strengths",
    limitation: profile.labels?.limitation ?? "Limitation",
  };
  const nameEl = profile.externalUrl ? (
    <a
      href={profile.externalUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-xl font-semibold text-white hover:text-accent transition-colors"
    >
      {profile.name}
    </a>
  ) : (
    <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
  );
  return (
    <div className="rounded-xl border border-panel bg-surface px-6 py-6 mb-6">
      <div className="mb-4">{nameEl}</div>
      <div className="flex flex-col gap-3 text-sm">
        {(
          [
            [L.bestFor, profile.bestFor],
            [L.pricing, profile.pricing],
            [L.platforms, profile.platforms],
          ] as [string, string][]
        ).map(([label, value]) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-3">
            <span className="font-semibold text-white shrink-0 sm:w-[140px]">{label}</span>
            <span className="text-muted leading-relaxed">{renderGuideInline(value, `ac-${label}-`)}</span>
          </div>
        ))}
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="font-semibold text-white shrink-0 sm:w-[140px]">{L.strengths}</span>
          <ul className="text-muted leading-relaxed flex flex-col gap-1">
            {profile.strengths.map((s, si) => (
              <li key={si} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span>{renderGuideInline(s, `str-${si}-`)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="font-semibold text-white shrink-0 sm:w-[140px]">{L.limitation}</span>
          <span className="text-muted leading-relaxed">{renderGuideInline(profile.limitation, "lim-")}</span>
        </div>
      </div>
    </div>
  );
}

function GuideFaqAccordion({
  faqs,
}: {
  faqs: LocalizedGuideContent["faqs"];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 mt-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`rounded-xl border overflow-hidden bg-surface transition-colors ${
              isOpen ? "border-accent/40" : "border-panel"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            >
              <span className="text-[15px] font-semibold text-white pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5">
                <p className="text-sm leading-relaxed text-muted">{renderGuideInline(faq.answer, `faq-${i}-`)}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
