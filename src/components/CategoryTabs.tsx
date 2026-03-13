import type { PublicCategory } from "../lib/types";

export function CategoryTabs({
  categories,
  activeId,
  onSelect,
}: {
  categories: PublicCategory[];
  activeId: number;
  onSelect: (id: number) => void;
}) {
  return (
    <nav
      className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-px sm:mx-0 sm:px-0"
      role="tablist"
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(cat.id)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isActive
                ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
