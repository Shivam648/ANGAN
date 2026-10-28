import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { ProductGrid } from "../components/commerce/ProductGrid";
import { JournalCard } from "../components/journal/JournalCard";
import { EmptyState } from "../components/ui/EmptyState";
import { searchAll } from "../lib/search";
import { Seo } from "../lib/seo";

const suggestions = [
  "Magadh",
  "Cardigan",
  "Cable knit",
  "Wool",
  "Winter",
  "Turtleneck",
];

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q")?.trim() ?? "";
  const [input, setInput] = useState(q);

  useEffect(() => {
    setInput(q);
  }, [q]);

  const results = useMemo(() => searchAll(q), [q]);
  const total = results.products.length + results.articles.length;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = new URLSearchParams(searchParams);
    if (input.trim()) {
      next.set("q", input.trim());
    } else {
      next.delete("q");
    }
    setSearchParams(next, { replace: true });
  };

  return (
    <>
      <Seo
        title={q ? `Search: ${q} — Aangan` : "Search — Aangan"}
        description="Search Aangan knitwear and journal stories."
        canonical="/search"
        noindex
      />

      <PageHeader
        eyebrow="Search"
        title="Find a piece or a story."
        crumb="Search"
        intro={
          <p>
            Search by garment, material, colour or idea. Try “cable”, “wool” or
            “winter”.
          </p>
        }
      />

      <div className="container-editorial py-10 sm:py-14">
        <form onSubmit={onSubmit} className="max-w-3xl" role="search">
          <label htmlFor="search-page-input" className="sr-only">
            Search products and journal
          </label>
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <Search size={20} strokeWidth={1.1} aria-hidden="true" />
            <input
              id="search-page-input"
              type="search"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Search knitwear, stories, materials…"
              className="min-w-0 flex-1 border-0 bg-transparent font-display text-2xl outline-none placeholder:font-sans placeholder:text-sm placeholder:tracking-[0.04em] placeholder:text-espresso/35 sm:text-3xl"
            />
            <button
              type="submit"
              className="text-[0.625rem] font-medium uppercase tracking-[0.18em] text-forest"
            >
              Search
            </button>
          </div>
        </form>

        {!q ? (
          <div className="mt-10 max-w-3xl">
            <p className="text-[0.625rem] uppercase tracking-[0.18em] text-espresso/45">
              Try searching for
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    const next = new URLSearchParams(searchParams);
                    next.set("q", suggestion);
                    setSearchParams(next, { replace: true });
                  }}
                  className="border border-line px-3 py-1.5 text-xs text-espresso/70 transition-colors hover:border-forest hover:text-forest"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
              {[
                { label: "The Winter Collection", href: "/shop" },
                { label: "Our Heritage", href: "/our-story" },
                { label: "Craftsmanship", href: "/craftsmanship" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
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
          <div className="mt-10">
            <EmptyState
              title={`No results for “${q}”.`}
              copy="Try a material, a colour, or a piece from the collection. You can also browse the full edit."
              action={
                <Link to="/shop" className="btn btn-outline btn-sm">
                  Browse the collection
                </Link>
              }
            />
          </div>
        ) : (
          <div className="mt-10">
            <p className="text-[0.625rem] uppercase tracking-[0.18em] text-espresso/45">
              {total} {total === 1 ? "result" : "results"} for “{q}”
            </p>

            {results.products.length > 0 ? (
              <section className="mt-8">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="display-sm">Knitwear</h2>
                  <Link to="/shop" className="link-line text-espresso/55">
                    View all
                    <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-7">
                  <ProductGrid
                    products={results.products}
                    columns={3}
                    priorityCount={0}
                  />
                </div>
              </section>
            ) : null}

            {results.articles.length > 0 ? (
              <section className="mt-16 border-t border-line pt-10">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="display-sm">Journal</h2>
                  <Link to="/journal" className="link-line text-espresso/55">
                    All stories
                    <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-7 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {results.articles.map((article) => (
                    <JournalCard key={article.slug} article={article} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
