import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Car, Wrench } from "lucide-react";
import NotFoundPage from "./NotFoundPage";
import { fetchPageData } from "../lib/fetchPageData";
import { buildViewModel } from "../lib/buildViewModel";
import { buildPageTitle } from "../lib/format";
import type { PublicVehiclePageModel, PublicCategory } from "../lib/types";
import { Header } from "../components/Header";
import { VehicleSummaryCard } from "../components/VehicleSummaryCard";
import { CategoryTabs } from "../components/CategoryTabs";
import { MaintenanceItemSection } from "../components/MaintenanceItemSection";

type PageState =
  | { status: "loading" }
  | { status: "unavailable" }
  | { status: "error" }
  | { status: "ready"; model: PublicVehiclePageModel };

function VehiclePage() {
  const { slug } = useParams<{ slug: string }>();
  const [state, setState] = useState<PageState>({ status: "loading" });

  useEffect(() => {
    if (!slug || !slug.trim()) {
      setState({ status: "unavailable" });
      return;
    }

    let cancelled = false;

    async function load() {
      const result = await fetchPageData(slug!);
      if (cancelled) return;

      if (result.status === "found") {
        setState({ status: "ready", model: buildViewModel(result.data, slug!) });
      } else {
        setState({ status: result.status });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (state.status === "ready") {
      document.title = buildPageTitle(state.model.vehicle.displayName);
    } else {
      document.title = "CarCare Diary – Vehicle Maintenance";
    }
  }, [state]);

  if (state.status === "loading") return <LoadingState />;
  if (state.status === "unavailable") return <NotFoundPage />;
  if (state.status === "error") return <ErrorState />;

  return <PublicVehiclePage model={state.model} />;
}

function LoadingState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        <p className="text-sm text-gray-500">Loading vehicle…</p>
      </div>
    </div>
  );
}


function ErrorState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="mx-auto max-w-xs text-center">
        <Car className="mx-auto mb-4 h-12 w-12 text-gray-300" />
        <h1 className="mb-2 text-xl font-semibold text-gray-800">
          Something Went Wrong
        </h1>
        <p className="text-sm leading-relaxed text-gray-500">
          Unable to load vehicle data right now. Please try again later.
        </p>
      </div>
    </div>
  );
}

function PublicVehiclePage({ model }: { model: PublicVehiclePageModel }) {
  const { vehicle, categories } = model;

  const [activeCatId, setActiveCatId] = useState<number | null>(
    categories.length > 0 ? categories[0].id : null,
  );

  const activeCategory: PublicCategory | undefined = useMemo(
    () => categories.find((c) => c.id === activeCatId),
    [categories, activeCatId],
  );

  const visibleItems = activeCategory?.items ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-5xl px-4 pt-19 pb-5 sm:pt-22 sm:pb-8">
        <div className="gap-6 lg:flex lg:gap-8">
          <div className="mb-5 w-full shrink-0 lg:mb-0 lg:w-80">
            <div className="lg:sticky lg:top-20">
              <VehicleSummaryCard vehicle={vehicle} />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            {categories.length === 0 ? (
              <EmptyMaintenance />
            ) : (
              <>
                <CategoryTabs
                  categories={categories}
                  activeId={activeCatId ?? -1}
                  onSelect={setActiveCatId}
                />

                <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
                  {visibleItems.length > 0 ? (
                    visibleItems.map((item) => (
                      <MaintenanceItemSection
                        key={item.id}
                        item={item}
                        odometerUnit={vehicle.odometerUnit}
                      />
                    ))
                  ) : (
                    <EmptyCategoryContent />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyMaintenance() {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-white px-6 py-14 text-center shadow-sm sm:py-16">
      <Wrench className="mb-3 h-10 w-10 text-gray-300" />
      <p className="text-sm font-medium text-gray-600">
        No maintenance history yet
      </p>
      <p className="mt-1 text-xs text-gray-400">
        Maintenance records will appear here once shared.
      </p>
    </div>
  );
}

function EmptyCategoryContent() {
  return (
    <div className="rounded-md bg-white px-6 py-10 text-center shadow-sm">
      <p className="text-sm text-gray-400">No items in this category.</p>
    </div>
  );
}

export default VehiclePage;
