import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useUI } from "../../context/UIContext";
import { formatINR } from "../../lib/currency";
import { useAddToBag } from "../../lib/useAddToBag";
import type { Product } from "../../lib/types";
import { Dialog } from "../ui/Dialog";
import { Picture } from "../ui/Picture";
import { ColorSwatches } from "./ColorSwatches";
import { SizeSelector } from "./SizeSelector";

export function QuickView() {
  const { quickView, closeQuickView } = useUI();

  if (!quickView) return null;

  return (
    <QuickViewDialog
      key={quickView.id}
      product={quickView}
      onClose={closeQuickView}
    />
  );
}

function QuickViewDialog({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { openSizeGuide } = useUI();
  const addToBag = useAddToBag();
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState(
    product.sizes.includes("M") ? "M" : (product.sizes[0] ?? ""),
  );

  return (
    <Dialog
      open
      onClose={onClose}
      title={`Quick view — ${product.name}`}
      variant="modal"
      className="max-w-4xl"
    >
      <div className="grid md:grid-cols-[1.05fr_1fr]">
        <div className="relative hidden aspect-[4/5] bg-oatmeal md:block">
          <Picture
            image={product.images[0]}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
          <p className="eyebrow-sm text-espresso/55">Quick view</p>
          <h2 className="display-sm mt-3">{product.name}</h2>
          <p className="mt-3 text-sm text-espresso/70">{product.subtitle}</p>
          <p className="mt-5 text-lg tabular-nums">{formatINR(product.price)}</p>

          <div className="mt-7">
            <ColorSwatches
              colors={product.colors}
              selected={color}
              onChange={setColor}
            />
          </div>

          <SizeSelector
            sizes={product.sizes}
            selected={size}
            onChange={setSize}
            onOpenGuide={openSizeGuide}
            className="mt-6"
          />

          <button
            type="button"
            className="btn btn-primary btn-block mt-8"
            onClick={() => {
              addToBag(product, color || product.colors[0].name, size, 1, {
                openBag: true,
              });
              onClose();
            }}
          >
            Add to bag
          </button>

          <Link
            to={`/shop/${product.slug}`}
            onClick={onClose}
            className="link-line mt-5 self-start text-espresso/65"
          >
            View full details
            <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
          </Link>

          <p className="mt-6 text-[0.6875rem] leading-relaxed text-espresso/50">
            {product.knitType} · {product.material} · Made in {product.madeIn}
          </p>
        </div>
      </div>
    </Dialog>
  );
}
