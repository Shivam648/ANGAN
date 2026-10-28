import { Link } from "react-router-dom";
import { Heart, Plus } from "lucide-react";
import type { Product } from "../../lib/types";
import { formatINR } from "../../lib/currency";
import { cn } from "../../lib/cn";
import { Picture } from "../ui/Picture";
import { useWishlist } from "../../context/WishlistContext";
import { useToast } from "../../context/ToastContext";
import { useUI } from "../../context/UIContext";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function ProductCard({
  product,
  priority = false,
  sizes = "(min-width: 1280px) 24vw, (min-width: 768px) 31vw, 46vw",
  className,
}: ProductCardProps) {
  const { isWishlisted, toggle } = useWishlist();
  const { toast } = useToast();
  const { openQuickView } = useUI();
  const wished = isWishlisted(product.id);

  return (
    <article className={cn("product-card group", className)}>
      <div className="product-media">
        <Link
          to={`/shop/${product.slug}`}
          className="absolute inset-0 z-[1]"
          aria-label={`View ${product.name}`}
        >
          <Picture
            image={product.images[0]}
            sizes={sizes}
            priority={priority}
            className="product-img-primary"
          />
          <Picture
            image={product.images[1] ?? product.images[0]}
            sizes={sizes}
            className="product-img-secondary"
          />
        </Link>

        {product.badge ? (
          <span className="product-badge">{product.badge}</span>
        ) : null}

        <button
          type="button"
          className="wishlist-btn"
          aria-label={
            wished
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={wished}
          onClick={() => {
            const added = toggle(product.id);
            toast(
              added
                ? `${product.name} saved to your wishlist.`
                : `${product.name} removed from your wishlist.`,
            );
          }}
        >
          <Heart
            size={15}
            strokeWidth={1.2}
            fill={wished ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </button>

        <div className="quick-add">
          <button
            type="button"
            onClick={() => openQuickView(product)}
            className="btn btn-ivory btn-sm btn-block border border-line/50"
          >
            <Plus size={13} strokeWidth={1.2} aria-hidden="true" />
            Quick add
          </button>
        </div>
      </div>

      <div className="pt-3 sm:pt-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-[1.0625rem] leading-tight sm:text-[1.35rem]">
              <Link
                to={`/shop/${product.slug}`}
                className="transition-colors hover:text-forest/70"
              >
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-[0.5625rem] uppercase tracking-[0.12em] text-espresso/50 sm:text-[0.6875rem] sm:tracking-[0.13em]">
              {product.material}
            </p>
          </div>
          <p className="flex-none text-[0.8125rem] tabular-nums text-espresso sm:text-sm">
            {formatINR(product.price)}
          </p>
        </div>
        <div className="mt-2 flex items-center gap-1.5 sm:mt-3">
          {product.colors.map((color) => (
            <span
              key={color.name}
              title={color.name}
              className="h-2 w-2 rounded-full border border-espresso/15"
              style={{ backgroundColor: color.hex }}
            />
          ))}
          <span className="ml-1 hidden text-[0.625rem] text-espresso/45 sm:inline">
            {product.colors.length} colours
          </span>
        </div>
      </div>
    </article>
  );
}
