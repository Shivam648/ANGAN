import { Check } from "lucide-react";
import type { CSSProperties } from "react";
import {
  allColors,
  categories,
  materials,
  priceBands,
  products,
} from "../../data/products";

export type ShopFilters = {
  categories: string[];
  sizes: string[];
  colors: string[];
  materials: string[];
  price: string[];
};

export const emptyFilters: ShopFilters = {
  categories: [],
  sizes: [],
  colors: [],
  materials: [],
  price: [],
};

export const allSizes = Array.from(
  new Set(products.flatMap((product) => product.sizes)),
);

type FilterKey = keyof ShopFilters;

type FilterPanelProps = {
  filters: ShopFilters;
  onToggle: (key: FilterKey, value: string) => void;
  onClear: () => void;
  activeCount: number;
};

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line py-5 first:pt-0">
      <h3 className="mb-3 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-espresso/70">
        {title}
      </h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function CheckRow({
  checked,
  onChange,
  label,
  swatch,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  swatch?: string;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="flex h-3.5 w-3.5 flex-none items-center justify-center border border-line text-transparent transition-colors peer-checked:border-forest peer-checked:bg-forest peer-checked:text-ivory peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest">
        <Check size={9} strokeWidth={2} aria-hidden="true" />
      </span>
      {swatch ? (
        <span
          className="h-2.5 w-2.5 flex-none rounded-full border border-espresso/15"
          style={{ backgroundColor: swatch } as CSSProperties}
          aria-hidden="true"
        />
      ) : null}
      <span className="text-sm text-espresso/75 transition-colors group-hover:text-forest">
        {label}
      </span>
    </label>
  );
}

export function FilterPanel({
  filters,
  onToggle,
  onClear,
  activeCount,
}: FilterPanelProps) {
  return (
    <div>
      {activeCount > 0 ? (
        <div className="flex justify-end pb-5">
          <button
            type="button"
            onClick={onClear}
            className="text-[0.625rem] uppercase tracking-[0.14em] text-espresso/55 underline decoration-line underline-offset-4 transition-colors hover:text-forest"
          >
            Clear all
          </button>
        </div>
      ) : null}

      <FilterGroup title="Category">
        {categories.map((category) => (
          <CheckRow
            key={category}
            checked={filters.categories.includes(category)}
            onChange={() => onToggle("categories", category)}
            label={category}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="grid grid-cols-4 gap-x-2 gap-y-2">
          {allSizes.map((size) => (
            <label key={size} className="cursor-pointer">
              <input
                type="checkbox"
                checked={filters.sizes.includes(size)}
                onChange={() => onToggle("sizes", size)}
                className="peer sr-only"
              />
              <span className="flex h-9 items-center justify-center border border-line text-[0.625rem] tracking-[0.08em] text-espresso/70 transition-colors peer-checked:border-forest peer-checked:bg-forest peer-checked:text-ivory peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest">
                {size}
              </span>
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Colour">
        {allColors.map((color) => (
          <CheckRow
            key={color.name}
            checked={filters.colors.includes(color.name)}
            onChange={() => onToggle("colors", color.name)}
            label={color.name}
            swatch={color.hex}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {materials.map((material) => (
          <CheckRow
            key={material}
            checked={filters.materials.includes(material)}
            onChange={() => onToggle("materials", material)}
            label={material}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceBands.map((band) => (
          <CheckRow
            key={band.id}
            checked={filters.price.includes(band.id)}
            onChange={() => onToggle("price", band.id)}
            label={band.label}
          />
        ))}
      </FilterGroup>
    </div>
  );
}
