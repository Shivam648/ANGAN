import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";
import { formatINR } from "../../lib/currency";
import { Dialog } from "../ui/Dialog";
import { CartLineItem } from "./CartLineItem";

export function BagDrawer() {
  const { bagOpen, closeBag } = useUI();
  const { lineItems, itemCount, subtotal } = useCart();

  return (
    <Dialog
      open={bagOpen}
      onClose={closeBag}
      title="Shopping bag"
      variant="drawer-right"
    >
      <div className="flex h-full flex-col">
        <header className="flex-none border-b border-line px-6 py-6 pr-16">
          <p className="eyebrow-sm text-espresso/50">Your selection</p>
          <div className="mt-1 flex items-baseline gap-2">
            <h2 className="font-display text-3xl">Shopping bag</h2>
            <span className="text-xs text-espresso/50">
              ({itemCount} {itemCount === 1 ? "piece" : "pieces"})
            </span>
          </div>
        </header>

        {lineItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span
              aria-hidden="true"
              className="mb-5 flex h-14 w-14 items-center justify-center border border-gold/50 text-gold"
            >
              <svg
                viewBox="0 0 40 40"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 31V17c0-4.4 3.6-8 8-8s8 3.6 8 8v14" />
                <path d="M8 31h24" />
              </svg>
            </span>
            <h3 className="display-sm">Your bag is quiet.</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-espresso/65">
              Nothing here yet. Begin with a piece that feels like it has always
              belonged to you.
            </p>
            <Link
              to="/shop"
              onClick={closeBag}
              className="btn btn-outline btn-sm mt-6"
            >
              Explore the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              <ul className="divide-y divide-line">
                {lineItems.map((line) => (
                  <li key={line.key}>
                    <CartLineItem line={line} compact onNavigate={closeBag} />
                  </li>
                ))}
              </ul>
            </div>

            <footer className="flex-none border-t border-line bg-cream/50 px-6 py-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.6875rem] uppercase tracking-[0.18em]">
                  Subtotal
                </span>
                <span className="font-display text-2xl tabular-nums">
                  {formatINR(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-[0.6875rem] text-espresso/50">
                Shipping and taxes are confirmed at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={closeBag}
                className="btn btn-primary btn-block mt-4"
              >
                Checkout
                <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
              </Link>
              <Link
                to="/bag"
                onClick={closeBag}
                className="link-line mt-4 flex justify-center text-espresso/60"
              >
                View bag
              </Link>
            </footer>
          </>
        )}
      </div>
    </Dialog>
  );
}
