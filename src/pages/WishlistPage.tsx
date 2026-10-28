import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { ProductGrid } from "../components/commerce/ProductGrid";
import { EmptyState } from "../components/ui/EmptyState";
import { useWishlist } from "../context/WishlistContext";
import { productById } from "../data/products";
import { Seo } from "../lib/seo";

export function WishlistPage() {
  const { ids, clear } = useWishlist();

  const items = ids.flatMap((id) => {
    const product = productById(id);
    return product ? [product] : [];
  });

  return (
    <>
      <Seo
        title="Wishlist — Aangan"
        description="Pieces you have saved from the Aangan collection."
        canonical="/wishlist"
        noindex
      />

      <PageHeader
        eyebrow="Saved pieces"
        title="Your wishlist"
        crumb="Wishlist"
        intro={
          <p>
            {items.length > 0
              ? `${items.length} ${items.length === 1 ? "piece" : "pieces"} kept in this browser. A quiet shortlist for later.`
              : "A place for the pieces you want to return to. Saved locally in this browser."}
          </p>
        }
      />

      <div className="container-editorial py-12 sm:py-16">
        {items.length === 0 ? (
          <EmptyState
            title="Nothing saved yet."
            copy="Tap the heart on a piece to keep it here. Your wishlist stays in this browser and is not shared."
            action={
              <Link to="/shop" className="btn btn-primary btn-sm">
                Explore the collection
              </Link>
            }
          />
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <p className="text-[0.625rem] uppercase tracking-[0.16em] text-espresso/50">
                {items.length} {items.length === 1 ? "piece" : "pieces"}
              </p>
              <button
                type="button"
                onClick={clear}
                className="text-[0.625rem] uppercase tracking-[0.14em] text-espresso/45 underline decoration-line underline-offset-4 transition-colors hover:text-burgundy"
              >
                Clear wishlist
              </button>
            </div>

            <div className="mt-10">
              <ProductGrid
                products={items}
                columns={4}
                priorityCount={4}
              />
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <p className="max-w-md text-sm leading-relaxed text-espresso/60">
                Saved pieces are stored only in this browser. They are not
                reserved or held in stock.
              </p>
              <Link to="/shop" className="link-line">
                Continue exploring
                <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
