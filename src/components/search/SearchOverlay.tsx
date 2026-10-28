import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Search, X } from "lucide-react";
import { useUI } from "../../context/UIContext";
import { formatINR } from "../../lib/currency";
import { searchAll } from "../../lib/search";
import { Dialog } from "../ui/Dialog";
import { Picture } from "../ui/Picture";

const suggestions = ["Magadh", "Cardigan", "Wool", "Cable", "Winter"];

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useUI();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  const results = useMemo(() => searchAll(query), [query]);
  const hasQuery = query.trim().length > 0;
  const total = results.products.length + results.articles.length;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hasQuery) return;
    closeSearch();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <Dialog
      open={searchOpen}
      onClose={closeSearch}
      title="Search Aangan"
      variant="search"
    >
      <div className="px-5 py-6 sm:px-10 sm:py-8">
        <form onSubmit={onSubmit} className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <Search size={20} strokeWidth={1.1} aria-hidden="true" />
            <label htmlFor="site-search" className="sr-only">
              Search products and journal
            </label>
            <input
              id="site-search"
              type="search"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search knitwear, stories, materials…"
              className="min-w-0 flex-1 border-0 bg-transparent font-display text-2xl outline-none placeholder:font-sans placeholder:text-sm placeholder:tracking-[0.04em] placeholder:text-espresso/35 sm:text-3xl"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="flex h-8 w-8 items-center justify-center rounded-full text-espresso/50 transition-colors hover:bg-espresso/5 hover:text-forest"
              >
                <X size={16} strokeWidth={1.2} aria-hidden="true" />
              </button>
            ) : null}
            <button
              type="submit"
              className="hidden text-[0.625rem] font-medium uppercase tracking-[0.18em] text-forest sm:block"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mx-auto mt-6 max-w-3xl">
          {!hasQuery ? (
            <div>
              <p className="text-[0.625rem] uppercase tracking-[0.18em] text-espresso/45">
                Try searching for
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setQuery(suggestion)}
                    className="border border-line px-3 py-1.5 text-xs text-espresso/70 transition-colors hover:border-forest hover:text-forest"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <div className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
                {[
                  { label: "The Winter Collection", href: "/shop" },
                  { label: "Our Heritage", href: "/our-story" },
                  { label: "Craftsmanship", href: "/craftsmanship" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeSearch}
                    className="group flex items-center justify-between gap-3 py-2 text-sm text-espresso/75 transition-colors hover:text-forest"
                  >
                    {link.label}
                    <ArrowRight
                      size={13}
                      strokeWidth={1.2}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ) : total === 0 ? (
            <div className="py-8 text-center">
              <p className="font-display text-2xl">
                No results for “{query}”.
              </p>
              <p className="mt-2 text-sm text-espresso/60">
                Try a material, a colour, or a piece from the collection.
              </p>
            </div>
          ) : (
            <div className="max-h-[52vh] overflow-y-auto pr-1">
              {results.products.length > 0 ? (
                <div>
                  <p className="text-[0.625rem] uppercase tracking-[0.18em] text-espresso/45">
                    Knitwear
                  </p>
                  <ul className="mt-3 divide-y divide-line">
                    {results.products.map((product) => (
                      <li key={product.id}>
                        <Link
                          to={`/shop/${product.slug}`}
                          onClick={closeSearch}
                          className="group flex items-center gap-4 py-3"
                        >
                          <span className="relative h-16 w-12 flex-none overflow-hidden bg-oatmeal">
                            <Picture
                              image={product.images[0]}
                              sizes="48px"
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-display text-lg leading-tight">
                              {product.name}
                            </span>
                            <span className="mt-0.5 block text-[0.625rem] uppercase tracking-[0.12em] text-espresso/50">
                              {product.material} · {product.knitType}
                            </span>
                          </span>
                          <span className="flex-none text-sm tabular-nums">
                            {formatINR(product.price)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {results.articles.length > 0 ? (
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[0.625rem] uppercase tracking-[0.18em] text-espresso/45">
                    Journal
                  </p>
                  <ul className="mt-2">
                    {results.articles.slice(0, 3).map((article) => (
                      <li key={article.slug}>
                        <Link
                          to={`/journal/${article.slug}`}
                          onClick={closeSearch}
                          className="group flex items-center justify-between gap-4 border-b border-line-soft py-3"
                        >
                          <span>
                            <span className="block font-display text-lg leading-tight">
                              {article.title}
                            </span>
                            <span className="mt-0.5 block text-[0.625rem] uppercase tracking-[0.12em] text-espresso/45">
                              {article.category} · {article.readTime}
                            </span>
                          </span>
                          <ArrowRight
                            size={14}
                            strokeWidth={1.2}
                            aria-hidden="true"
                            className="flex-none text-espresso/40 transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
