import type { Product } from "../../lib/types";
import { cn } from "../../lib/cn";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  columns?: 3 | 4;
  className?: string;
  priorityCount?: number;
};

export function ProductGrid({
  products,
  columns = 4,
  className,
  priorityCount = 4,
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14",
        columns === 4 ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-3",
        className,
      )}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < priorityCount}
          sizes={
            columns === 4
              ? "(min-width: 1024px) 24vw, (min-width: 768px) 31vw, 46vw"
              : "(min-width: 1024px) 29vw, (min-width: 768px) 31vw, 46vw"
          }
        />
      ))}
    </div>
  );
}
