import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, SlidersHorizontal, X } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { FilterDrawer } from "../components/shop/FilterDrawer";
import {
  FilterPanel,
  type ShopFilters,
} from "../components/shop/FilterPanel";
import { ProductGrid } from "../components/commerce/ProductGrid";
import { EmptyState } from "../components/ui/EmptyState";
import { Seo } from "../lib/seo";
import { products, priceBands } from "../data/products";
import type { Product } from "../lib/types";

type SortKey = "featured" | "newest" | "price-asc" | "price-desc" | "name";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
  { value: "name", label: "Name, A–Z" },
];

const filterParams: Record<keyof ShopFilters, string> = {
  categories: "category",
  sizes: "size",
  colors: "color",
  materials: "material",
  price: "price",
};

function matchesQuery(product: Product, query: string) {
  const haystack = [
    product.name,
    product.subtitle,
    product.description,
    product.category,
    product.collection,
    product.material,
    product.knitType,
    ...product.colors.map((color) => color.name),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const sortParam = searchParams.get("sort");
  const sort: SortKey = sortOptions.some((option) => option.value === sortParam)
    ? (sortParam as SortKey)
    : "featured";
  const featuredOnly = searchParams.get("featured") === "true";
  const collection = searchParams.get("collection");
  const query = searchParams.get("q")?.trim() ?? "";

  const filters: ShopFilters = {
    categories: searchParams.getAll("category"),
    sizes: searchParams.getAll("size"),
    colors: searchParams.getAll("color"),
    materials: searchParams.getAll("material"),
    price: searchParams.getAll("price"),
  };

  const activeCount =
    filters.categories.length +
    filters.sizes.length +
    filters.colors.length +
    filters.materials.length +
    filters.price.length;

  const filtered = useMemo(() => {
    const list = products.filter((product) => {
      if (featuredOnly && !product.featured) return false;
      if (
        collection &&
        !product.collection.toLowerCase().includes(collection.toLowerCase())
      ) {
        return false;
      }
      if (query && !matchesQuery(product, query)) return false;
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.category)
      ) {
        return false;
      }
      if (
        filters.sizes.length > 0 &&
        !product.sizes.some((size) => filters.sizes.includes(size))
      ) {
        return false;
      }
      if (
        filters.colors.length > 0 &&
        !product.colors.some((color) => filters.colors.includes(color.name))
      ) {
        return false;
      }
      if (
        filters.materials.length > 0 &&
        !filters.materials.includes(product.material)
      ) {
        return false;
      }
      if (filters.price.length > 0) {
        const inBand = priceBands.some(
          (band) =>
            filters.price.includes(band.id) &&
            product.price >= band.min &&
            product.price <= band.max,
        );
        if (!inBand) return false;
      }
      return true;
    });

    const sorted = [...list];
    switch (sort) {
      case "newest":
        sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }
    return sorted;
  }, [featuredOnly, collection, query, filters, sort]);

  const toggleFilter = (key: keyof ShopFilters, value: string) => {
    const next = new URLSearchParams(searchParams);
    const param = filterParams[key];
    const current = next.getAll(param);
    next.delete(param);
    const updated = current.includes(value)
      ? current.filter((entry) => entry !== value)
      : [...current, value];
    updated.forEach((entry) => next.append(param, entry));
    setSearchParams(next, { replace: true });
  };

  const clearFilters = () => {
    const next = new URLSearchParams(searchParams);
    Object.values(filterParams).forEach((param) => next.delete(param));
    setSearchParams(next, { replace: true });
  };

  const clearAll = () => {
    const next = new URLSearchParams();
    if (sort !== "featured") next.set("sort", sort);
    setSearchParams(next, { replace: true });
  };

  const activeChips: { key: keyof ShopFilters; value: string; label: string }[] =
    [
      ...filters.categories.map((value) => ({
        key: "categories" as const,
        value,
        label: value,
      })),
      ...filters.sizes.map((value) => ({
        key: "sizes" as const,
        value,
        label: `Size ${value}`,
      })),
      ...filters.colors.map((value) => ({
        key: "colors" as const,
        value,
        label: value,
      })),
      ...filters.materials.map((value) => ({
        key: "materials" as const,
        value,
        label: value,
      })),
      ...filters.price.map((value) => ({
        key: "price" as const,
        value,
        label: priceBands.find((band) => band.id === value)?.label ?? value,
      })),
    ];

  return (
    <>
      <Seo
        title="The Winter Collection — Aangan"
        description="Explore the Aangan Winter Collection: handcrafted knitwear made slowly in small batches, rooted in Magadh, Bihar."
        canonical="/shop"
      />

      <PageHeader
        eyebrow="The Collection"
        title={
          <>
            The Winter Collection
            <br />
            <span className="serif-italic text-forest/85">
              for the cold, kept for years.
            </span>
          </>
        }
        intro={
          <p>
            A small, considered collection of knitwear for the season. Each piece
            is made in limited numbers and finished by hand. Filter by size,
            colour, material or price to find your own.
          </p>
        }
      >
        {featuredOnly ? (
          <p className="text-[0.625rem] uppercase tracking-[0.16em] text-espresso/50">
            Showing the Signature Edit
          </p>
        ) : null}
      </PageHeader>

      <div className="sticky top-[var(--header-h)] z-30 border-b border-line bg-ivory/95 backdrop-blur">
        <div className="container-editorial flex items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-forest lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.2} aria-hidden="true" />
            Filters
            {activeCount > 0 ? (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-forest px-1 text-[0.5625rem] text-ivory">
                {activeCount}
              </span>
            ) : null}
          </button>

          <p className="hidden text-[0.625rem] uppercase tracking-[0.16em] text-espresso/50 lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            {query ? ` for “${query}”` : ""}
          </p>

          <div className="flex items-center gap-3">
            <label
              htmlFor="shop-sort"
              className="hidden text-[0.625rem] uppercase tracking-[0.16em] text-espresso/45 sm:block"
            >
              Sort
            </label>
            <select
              id="shop-sort"
              value={sort}
              onChange={(event) => {
                const next = new URLSearchParams(searchParams);
                if (event.target.value === "featured") {
                  next.delete("sort");
                } else {
                  next.set("sort", event.target.value);
                }
                setSearchParams(next, { replace: true });
              }}
              className="field-select cursor-pointer border-0 bg-transparent py-1 text-[0.625rem] uppercase tracking-[0.14em] text-forest outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container-editorial py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-h)+4.5rem)]">
              <FilterPanel
                filters={filters}
                onToggle={toggleFilter}
                onClear={clearFilters}
                activeCount={activeCount}
              />
            </div>
          </aside>

          <div>
            {activeChips.length > 0 ? (
              <div className="mb-8 flex flex-wrap items-center gap-2">
                {activeChips.map((chip) => (
                  <button
                    key={`${chip.key}-${chip.value}`}
                    type="button"
                    onClick={() => toggleFilter(chip.key, chip.value)}
                    className="group inline-flex items-center gap-1.5 border border-line px-2.5 py-1.5 text-[0.625rem] uppercase tracking-[0.1em] text-espresso/70 transition-colors hover:border-forest hover:text-forest"
                  >
                    {chip.label}
                    <X
                      size={11}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="text-espresso/40 group-hover:text-forest"
                    />
                    <span className="sr-only">Remove filter</span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-1 text-[0.625rem] uppercase tracking-[0.14em] text-espresso/45 underline decoration-line underline-offset-4 transition-colors hover:text-forest"
                >
                  Clear all
                </button>
              </div>
            ) : null}

            {query ? (
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                <p className="text-sm text-espresso/65">
                  Results for <span className="text-forest">“{query}”</span>
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="link-line text-espresso/55"
                >
                  Clear search
                </button>
              </div>
            ) : null}

            <p className="sr-only" aria-live="polite" aria-atomic="true">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}{" "}
              shown.
            </p>

            {filtered.length > 0 ? (
              <ProductGrid products={filtered} columns={3} priorityCount={3} />
            ) : (
              <EmptyState
                title="Nothing matches just yet."
                copy="Try removing a filter or two, or explore the full collection. Our knitwear is made in small numbers, so the edit is intentionally compact."
                action={
                  <button
                    type="button"
                    onClick={clearAll}
                    className="btn btn-outline btn-sm"
                  >
                    Clear filters
                  </button>
                }
              />
            )}

            <div className="mt-16 grid gap-6 border-t border-line pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="max-w-xl">
                <p className="eyebrow-sm text-espresso/45">A note on sizing</p>
                <p className="mt-2 text-sm leading-relaxed text-espresso/65">
                  Our knits are designed with a little room for layering. Each
                  product page carries a fit note, and our size guide lists sample
                  garment measurements in centimetres.
                </p>
              </div>
              <Link to="/size-guide" className="link-line self-start sm:self-end">
                View the size guide
                <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FilterDrawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        filters={filters}
        onToggle={toggleFilter}
        onClear={clearFilters}
        resultCount={filtered.length}
        activeCount={activeCount}
      />
    </>
  );
}
