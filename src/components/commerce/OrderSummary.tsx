import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatINR } from "../../lib/currency";
import { cn } from "../../lib/cn";

type OrderSummaryProps = {
  onNavigate?: () => void;
  className?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showCta?: boolean;
  note?: string;
};

export function OrderSummary({
  onNavigate,
  className,
  ctaLabel = "Proceed to checkout",
  ctaHref = "/checkout",
  showCta = true,
  note,
}: OrderSummaryProps) {
  const { itemCount, subtotal } = useCart();

  return (
    <div className={cn("border border-line bg-cream/50 p-6 sm:p-7", className)}>
      <h2 className="font-display text-2xl">Order summary</h2>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-espresso/65">
            Subtotal <span className="text-espresso/40">({itemCount} items)</span>
          </dt>
          <dd className="tabular-nums">{formatINR(subtotal)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-espresso/65">Shipping</dt>
          <dd className="text-[0.6875rem] uppercase tracking-[0.1em] text-espresso/55">
            Calculated at checkout
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-espresso/65">Taxes</dt>
          <dd className="text-[0.6875rem] uppercase tracking-[0.1em] text-espresso/55">
            Calculated at checkout
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-5">
        <span className="text-[0.6875rem] uppercase tracking-[0.18em]">
          Estimated total
        </span>
        <span className="font-display text-2xl tabular-nums">
          {formatINR(subtotal)}
        </span>
      </div>

      {showCta ? (
        <Link
          to={ctaHref}
          onClick={onNavigate}
          className="btn btn-primary btn-block mt-6"
        >
          {ctaLabel}
          <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
        </Link>
      ) : null}

      <p className="mt-4 text-[0.6875rem] leading-relaxed text-espresso/50">
        {note ??
          "Shipping and taxes are confirmed at checkout. Prices are shown in Indian Rupees."}
      </p>
    </div>
  );
}
