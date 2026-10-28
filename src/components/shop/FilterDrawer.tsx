import { Dialog } from "../ui/Dialog";
import { FilterPanel, type ShopFilters } from "./FilterPanel";

type FilterDrawerProps = {
  open: boolean;
  onClose: () => void;
  filters: ShopFilters;
  onToggle: (key: keyof ShopFilters, value: string) => void;
  onClear: () => void;
  resultCount: number;
  activeCount: number;
};

export function FilterDrawer({
  open,
  onClose,
  filters,
  onToggle,
  onClear,
  resultCount,
  activeCount,
}: FilterDrawerProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Filter the collection"
      variant="drawer-left"
    >
      <div className="flex h-full flex-col">
        <header className="flex-none border-b border-line px-6 py-6 pr-16">
          <p className="eyebrow-sm text-espresso/50">Refine</p>
          <h2 className="mt-1 font-display text-3xl">Filters</h2>
        </header>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <FilterPanel
            filters={filters}
            onToggle={onToggle}
            onClear={onClear}
            activeCount={activeCount}
          />
        </div>
        <footer className="flex-none border-t border-line bg-cream/50 px-6 py-5">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary btn-block"
          >
            View {resultCount} {resultCount === 1 ? "piece" : "pieces"}
          </button>
        </footer>
      </div>
    </Dialog>
  );
}
