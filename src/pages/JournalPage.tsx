import { useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/layout/PageHeader";
import { JournalCard } from "../components/journal/JournalCard";
import { EmptyState } from "../components/ui/EmptyState";
import { NewsletterSection } from "../components/home/NewsletterSection";
import { Seo } from "../lib/seo";
import { journal, journalCategories } from "../data/journal";
import { cn } from "../lib/cn";

type Category = (typeof journalCategories)[number];

export function JournalPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category");
  const category: Category = journalCategories.includes(requested as Category)
    ? (requested as Category)
    : "All";

  const filtered =
    category === "All"
      ? journal
      : journal.filter((article) => article.category === category);

  const [featured, ...rest] = filtered;

  return (
    <>
      <Seo
        title="The Journal — Aangan"
        description="Notes on craft, heritage, care and slow living from Aangan, an heirloom knitwear house rooted in Magadh, Bihar."
        canonical="/journal"
      />

      <PageHeader
        eyebrow="The Journal"
        title={
          <>
            Notes on craft,
            <br />
            <span className="serif-italic text-forest/85">
              memory and slow living.
            </span>
          </>
        }
        intro={
          <p>
            Occasional writing from the studio: on place and heritage, the making
            of things by hand, caring for what we own, and the quiet pleasure of a
            wardrobe that lasts.
          </p>
        }
      />

      <div className="border-b border-line">
        <div className="container-editorial">
          <div
            className="hide-scrollbar flex gap-6 overflow-x-auto py-4"
            role="group"
            aria-label="Filter journal by category"
          >
            {journalCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => {
                  const next = new URLSearchParams(searchParams);
                  if (item === "All") {
                    next.delete("category");
                  } else {
                    next.set("category", item);
                  }
                  setSearchParams(next, { replace: true });
                }}
                className={cn(
                  "relative flex-none py-1 text-[0.625rem] font-medium uppercase tracking-[0.18em] transition-colors",
                  category === item
                    ? "text-forest"
                    : "text-espresso/45 hover:text-forest",
                )}
              >
                {item}
                {category === item ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-1 h-px bg-forest"
                  />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-editorial py-12 sm:py-16">
        {filtered.length === 0 ? (
          <EmptyState
            title="No stories in this chapter yet."
            copy="Try another category, or return to the full Journal."
            action={
              <button
                type="button"
                onClick={() => setSearchParams({}, { replace: true })}
                className="btn btn-outline btn-sm"
              >
                View all stories
              </button>
            }
          />
        ) : category === "All" && featured ? (
          <>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <JournalCard article={featured} variant="large" />
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="eyebrow-sm text-espresso/40">From the house</p>
                <h2 className="display-sm mt-3">
                  A journal of things worth keeping.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-espresso/65">
                  We write about the ideas behind the clothes: the winters of
                  Magadh, the evidence of a hand in a garment, the practical care
                  of wool, and the case for wearing the same good thing for years.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-espresso/65">
                  New stories are added slowly, when there is something worth
                  saying.
                </p>
              </div>
            </div>

            {rest.length > 0 ? (
              <div className="mt-16 border-t border-line pt-12">
                <p className="eyebrow-sm text-espresso/40">More reading</p>
                <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((article) => (
                    <JournalCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <JournalCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>

      <NewsletterSection />
    </>
  );
}
