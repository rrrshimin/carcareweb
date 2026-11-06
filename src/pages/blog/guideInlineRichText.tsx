import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { resolveFrGuideInternalHref } from "../../fr-poc/frPublishing";

const INLINE_TOKEN =
  /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

/** Render **bold**, *emphasis/labels*, and [text](url) in localized guide strings. */
export function renderGuideInline(text: string, keyPrefix = ""): ReactNode[] {
  const parts = text.split(INLINE_TOKEN);
  return parts.map((part, i) => {
    const key = `${keyPrefix}${i}`;
    if (!part) return null;

    const bold = part.match(/^\*\*(.+)\*\*$/);
    if (bold) {
      return (
        <strong key={key} className="font-semibold text-white">
          {bold[1]}
        </strong>
      );
    }

    const italic = part.match(/^\*(.+)\*$/);
    if (italic) {
      const inner = italic[1];
      const isLabel = /:\s*$/.test(inner);
      if (isLabel) {
        return (
          <strong key={key} className="font-semibold text-white">
            {inner}
          </strong>
        );
      }
      return (
        <em key={key} className="italic">
          {inner}
        </em>
      );
    }

    const mdLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLink) {
      const label = mdLink[1];
      const href = resolveFrGuideInternalHref(mdLink[2]);
      if (isExternalHref(href)) {
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            {label}
          </a>
        );
      }
      return (
        <Link
          key={key}
          to={href}
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          {label}
        </Link>
      );
    }

    return part;
  });
}
