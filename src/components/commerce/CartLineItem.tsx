import { Link } from "react-router-dom";
import { X } from "lucide-react";
import type { CartLineItem as CartLineItemType } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";
import { formatINR } from "../../lib/currency";
import { cn } from "../../lib/cn";
import { Picture } from "../ui/Picture";
import { QuantityStepper } from "../ui/QuantityStepper";

type CartLineItemProps = {
  line: CartLineItemType;
  compact?: boolean;
  onNavigate?: () => void;
};

export function CartLineItem({
  line,
  compact = false,
  onNavigate,
}: CartLineItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product } = line;

  return (
    <div className={cn("flex gap-4", compact ? "py-4" : "py-6")}>
      <Link
        to={`/shop/${product.slug}`}
        onClick={onNavigate}
        className={cn(
          "relative flex-none overflow-hidden bg-oatmeal",
          compact ? "h-24 w-[76px]" : "h-36 w-28",
        )}
        aria-label={`View ${product.name}`}
      >
        <Picture
          image={product.images[0]}
          sizes={compact ? "76px" : "112px"}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-[1.15rem] leading-tight">
              <Link
                to={`/shop/${product.slug}`}
                onClick={onNavigate}
                className="transition-colors hover:text-forest/70"
              >
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.12em] text-espresso/55">
              {line.color} · {line.size}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(line.key)}
            aria-label={`Remove ${product.name} from bag`}
            className="flex-none p-1 text-espresso/45 transition-colors hover:text-burgundy"
          >
            <X size={14} strokeWidth={1.2} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <QuantityStepper
            value={line.quantity}
            onChange={(quantity) => updateQuantity(line.key, quantity)}
            label={`Quantity for ${product.name}`}
          />
          <p className="text-sm tabular-nums">
            {formatINR(product.price * line.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
