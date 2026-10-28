import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { CartLineItem } from "../components/commerce/CartLineItem";
import { OrderSummary } from "../components/commerce/OrderSummary";
import { ProductGrid } from "../components/commerce/ProductGrid";
import { EmptyState } from "../components/ui/EmptyState";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Seo } from "../lib/seo";

export function BagPage() {
  const { lineItems, itemCount } = useCart();

  const suggestions = products
    .filter(
      (product) => !lineItems.some((line) => line.productId === product.id),
    )
    .slice(0, 3);

  return (
    <>
      <Seo
        title="Your Bag — Aangan"
        description="Review the pieces in your Aangan bag."
        canonical="/bag"
        noindex
      />

      <PageHeader
        eyebrow="Your selection"
        title="Your bag"
        crumb="Bag"
        intro={
          <p>
            {itemCount > 0
              ? `${itemCount} ${itemCount === 1 ? "piece" : "pieces"} held for you in this browser. Shipping and taxes are confirmed at checkout.`
              : "A quiet place for the pieces you are considering."}
          </p>
        }
      />

      <div className="container-editorial py-12 sm:py-16">
        {lineItems.length === 0 ? (
          <EmptyState
            title="Your bag is quiet."
            copy="Nothing here yet. Begin with a piece that feels like it has always belonged to you."
            action={
              <Link to="/shop" className="btn btn-primary btn-sm">
                Explore the collection
              </Link>
            }
          />
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                <p className="eyebrow-sm text-espresso/45">
                  {itemCount} {itemCount === 1 ? "piece" : "pieces"}
                </p>
                <Link to="/shop" className="link-line text-espresso/55">
                  Continue shopping
                </Link>
              </div>
              <ul className="divide-y divide-line">
                {lineItems.map((line) => (
                  <li key={line.key}>
                    <CartLineItem line={line} />
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 text-sm text-espresso/60 sm:flex-row sm:items-center sm:justify-between">
                <Link to="/shop" className="link-line self-start">
                  <ArrowLeft size={13} strokeWidth={1.2} aria-hidden="true" />
                  Back to the collection
                </Link>
                <p className="text-[0.625rem] uppercase tracking-[0.14em] text-espresso/40">
                  Your bag is saved in this browser
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                <OrderSummary
                  note="This is a prototype bag. Shipping and taxes are not calculated, and no payment is processed. Connect a commerce backend before launch."
                />
                <div className="mt-5 border border-line p-5">
                  <p className="eyebrow-sm text-espresso/45">A note on delivery</p>
                  <p className="mt-2 text-xs leading-relaxed text-espresso/60">
                    Delivery estimates shown on product pages are indicative.
                    Final dispatch timing is confirmed once a fulfilment service
                    is connected.
                  </p>
                  <Link
                    to="/shipping-returns"
                    className="link-line mt-4 text-espresso/60"
                  >
                    Shipping & returns
                    <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {lineItems.length > 0 && suggestions.length > 0 ? (
          <div className="mt-20 border-t border-line pt-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow-sm text-espresso/45">Perhaps also</p>
                <h2 className="display-sm mt-2">Pieces that sit well together.</h2>
              </div>
              <Link to="/shop" className="link-line self-start sm:self-end">
                View all knitwear
                <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8">
              <ProductGrid products={suggestions} columns={3} priorityCount={0} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
