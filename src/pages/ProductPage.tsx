import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Maximize2,
} from "lucide-react";
import { Accordion } from "../components/ui/Accordion";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Dialog } from "../components/ui/Dialog";
import { EmptyState } from "../components/ui/EmptyState";
import { Picture } from "../components/ui/Picture";
import { QuantityStepper } from "../components/ui/QuantityStepper";
import { ColorSwatches } from "../components/commerce/ColorSwatches";
import { PinChecker } from "../components/commerce/PinChecker";
import { ProductGrid } from "../components/commerce/ProductGrid";
import { SizeSelector } from "../components/commerce/SizeSelector";
import { useToast } from "../context/ToastContext";
import { useUI } from "../context/UIContext";
import { useWishlist } from "../context/WishlistContext";
import { productBySlug, products } from "../data/products";
import { site } from "../data/site";
import { cn } from "../lib/cn";
import { formatINR } from "../lib/currency";
import { Seo } from "../lib/seo";
import type { Product } from "../lib/types";
import { useAddToBag } from "../lib/useAddToBag";

function ProductFacts({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-3 text-[0.6875rem]",
        className,
      )}
    >
      <div>
        <dt className="uppercase tracking-[0.14em] text-espresso/70">Make</dt>
        <dd className="mt-1 text-espresso/75">{product.knitType}</dd>
      </div>
      <div>
        <dt className="uppercase tracking-[0.14em] text-espresso/70">Fibre</dt>
        <dd className="mt-1 text-espresso/75">{product.material}</dd>
      </div>
      <div>
        <dt className="uppercase tracking-[0.14em] text-espresso/70">
          Made in
        </dt>
        <dd className="mt-1 text-espresso/75">{product.madeIn}</dd>
      </div>
      <div>
        <dt className="uppercase tracking-[0.14em] text-espresso/70">
          Collection
        </dt>
        <dd className="mt-1 text-espresso/75">{product.collection}</dd>
      </div>
    </dl>
  );
}

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? productBySlug(slug) : undefined;

  if (!product) {
    return (
      <>
        <Seo
          title="Piece not found — Aangan"
          description="This piece could not be found. Explore the Aangan collection."
          noindex
        />
        <div className="container-editorial py-20 sm:py-28">
          <EmptyState
            title="This piece has wandered off."
            copy="The page you are looking for may have moved, or the piece may no longer be part of the current collection."
            action={
              <Link to="/shop" className="btn btn-primary btn-sm">
                Explore the collection
              </Link>
            }
          />
        </div>
      </>
    );
  }

  return <ProductDetail key={product.id} product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  const { openSizeGuide } = useUI();
  const { isWishlisted, toggle } = useWishlist();
  const { toast } = useToast();
  const addToBag = useAddToBag();
  const navigate = useNavigate();

  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState(
    product.sizes.includes("M") ? "M" : (product.sizes[0] ?? ""),
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const wished = isWishlisted(product.id);
  const lightboxImage =
    lightbox !== null ? product.images[lightbox] : undefined;

  const related = product.related
    .map((id) => products.find((item) => item.id === id))
    .filter((item): item is Product => Boolean(item));

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      disambiguatingDescription:
        "Sample product data for the Aangan design prototype. No payment is processed and no order can be placed.",
      image: product.images.map(
        (image) => `${site.url}/images/${image.name}-1200.webp`,
      ),
      sku: product.id.toUpperCase(),
      brand: { "@type": "Brand", name: "Aangan" },
      material: product.composition,
      color: product.colors.map((option) => option.name).join(", "),
      offers: {
        "@type": "Offer",
        url: `${site.url}/shop/${product.slug}`,
        priceCurrency: "INR",
        price: product.price,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    }),
    [product],
  );

  const handleWishlist = () => {
    const added = toggle(product.id);
    toast(
      added
        ? `${product.name} saved to your wishlist.`
        : `${product.name} removed from your wishlist.`,
    );
  };

  const handleBuyNow = () => {
    addToBag(product, color, size, quantity, { quiet: true });
    navigate("/checkout");
  };

  const shiftLightbox = (direction: number) => {
    setLightbox((current) => {
      if (current === null) return 0;
      return (
        (current + direction + product.images.length) % product.images.length
      );
    });
  };

  return (
    <>
      <Seo
        title={`${product.name} — Aangan`}
        description={`${product.subtitle} ${product.description}`}
        canonical={`/shop/${product.slug}`}
        type="product"
        image={`/images/${product.images[0].name}-1200.webp`}
        jsonLd={jsonLd}
      />

      <div className="container-editorial pt-8">
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/shop" },
            { label: product.name },
          ]}
        />
      </div>

      <div className="container-editorial py-8 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0">
                {product.images.map((image, index) => (
                  <button
                    key={`${image.name}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1} of ${product.name}`}
                    aria-pressed={activeImage === index}
                    className={cn(
                      "relative aspect-[4/5] w-16 flex-none overflow-hidden border bg-oatmeal transition-colors lg:w-full",
                      activeImage === index
                        ? "border-forest"
                        : "border-transparent hover:border-line",
                    )}
                  >
                    <Picture
                      image={image}
                      sizes="88px"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setLightbox(activeImage)}
                className="group relative order-1 aspect-[4/5] overflow-hidden bg-oatmeal lg:order-2"
                aria-label={`Open image gallery for ${product.name}`}
              >
                <Picture
                  image={product.images[activeImage]}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  priority
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/85 text-forest backdrop-blur transition-colors group-hover:bg-ivory">
                  <Maximize2 size={14} strokeWidth={1.2} aria-hidden="true" />
                </span>
              </button>
            </div>

            <p className="mt-4 hidden text-[0.5625rem] uppercase tracking-[0.18em] text-espresso/70 sm:block">
              {product.images.length} views · Photographed in natural light
            </p>
            <div className="mt-8 hidden border-t border-line pt-6 lg:block">
              <p className="eyebrow-sm text-espresso/70">The making</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso/75">
                {product.knitType === "Hand-knitted"
                  ? "Worked by hand, stitch by stitch. Small variations in tension are part of the garment's character."
                  : "Knitted for consistency, then finished by hand at the seams, cuffs and neckline."}
              </p>
              <ProductFacts
                product={product}
                className="mt-6 border-t border-line-soft pt-4"
              />
              <Link to="/craftsmanship" className="link-line mt-6">
                Inside the craft
                <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <div className="flex flex-wrap items-center gap-2">
              <p className="eyebrow-sm text-espresso/70">{product.collection}</p>
              {product.badge ? (
                <span className="border border-line px-2 py-0.5 text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-forest">
                  {product.badge}
                </span>
              ) : null}
            </div>

            <h1 className="display-md mt-4">{product.name}</h1>
            <p className="mt-3 text-sm leading-relaxed text-espresso/75">
              {product.subtitle}
            </p>
            <p className="mt-5 text-xl tabular-nums text-forest">
              {formatINR(product.price)}
            </p>
            <p className="mt-1 text-[0.625rem] uppercase tracking-[0.14em] text-espresso/70">
              Sample price and product details · Taxes and shipping confirmed at
              checkout
            </p>

            <p className="mt-6 text-[0.9375rem] leading-relaxed text-espresso/75">
              {product.description}
            </p>

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

            <div className="mt-7 flex flex-wrap items-stretch gap-3">
              <QuantityStepper
                value={quantity}
                onChange={setQuantity}
                label={`Quantity for ${product.name}`}
              />
              <button
                type="button"
                onClick={() =>
                  addToBag(product, color, size, quantity, { openBag: true })
                }
                className="btn btn-primary min-w-[12rem] flex-1"
              >
                Add to bag
              </button>
            </div>

            <button
              type="button"
              onClick={handleBuyNow}
              className="btn btn-outline btn-block mt-3"
            >
              Buy now
              <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleWishlist}
              aria-pressed={wished}
              className="mt-4 inline-flex items-center gap-2 text-[0.625rem] uppercase tracking-[0.16em] text-espresso/70 transition-colors hover:text-forest"
            >
              <Heart
                size={14}
                strokeWidth={1.2}
                fill={wished ? "currentColor" : "none"}
                aria-hidden="true"
              />
              {wished ? "Saved to wishlist" : "Save to wishlist"}
            </button>

            <div className="mt-7">
              <PinChecker />
            </div>

            <Accordion
              className="mt-8"
              items={[
                {
                  id: "details",
                  title: "The details",
                  content: (
                    <ul className="space-y-2">
                      {product.details.map((detail) => (
                        <li key={detail} className="flex gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[0.65em] h-1 w-1 flex-none rounded-full bg-gold"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ),
                },
                {
                  id: "composition",
                  title: "Composition & care",
                  content: (
                    <div>
                      <p>
                        <span className="text-forest">{product.composition}</span>
                        {" · "}
                        {product.knitType}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {product.care.map((instruction) => (
                          <li key={instruction}>{instruction}</li>
                        ))}
                      </ul>
                      <Link
                        to="/journal/a-guide-to-caring-for-wool"
                        className="link-line mt-4 text-espresso/75"
                      >
                        Read the full care guide
                        <ArrowRight
                          size={12}
                          strokeWidth={1.2}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  ),
                },
                {
                  id: "fit",
                  title: "Fit & sizing",
                  content: (
                    <div>
                      <p>{product.fit}</p>
                      <button
                        type="button"
                        onClick={openSizeGuide}
                        className="link-line mt-4 text-espresso/75"
                      >
                        Open the size guide
                        <ArrowRight
                          size={12}
                          strokeWidth={1.2}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  ),
                },
                {
                  id: "delivery",
                  title: "Delivery & returns",
                  content: (
                    <div className="space-y-3">
                      <p>
                        Delivery windows are indicative and depend on your PIN
                        code. A final estimate will be confirmed once a fulfilment
                        service is connected.
                      </p>
                      <p>
                        Unworn pieces in their original condition may be returned
                        within the sample 14-day window described in our policy.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          to="/shipping-returns"
                          className="link-line text-espresso/75"
                        >
                          Shipping & returns
                        </Link>
                        <Link
                          to="/faq"
                          className="link-line text-espresso/75"
                        >
                          Read the FAQ
                        </Link>
                      </div>
                    </div>
                  ),
                },
              ]}
            />

            <ProductFacts
              product={product}
              className="mt-8 border-t border-line pt-6 lg:hidden"
            />

            <p className="mt-5 text-[0.625rem] leading-relaxed text-espresso/70">
              Sample product information for this design prototype. Confirm
              composition, origin, measurements and availability with production
              before publishing.
            </p>
          </div>
        </div>
      </div>

      <section className="section-sm border-t border-line bg-cream/50">
        <div className="container-editorial">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-sm text-espresso/70">Continue exploring</p>
              <h2 className="display-sm mt-2">Pieces that sit well together.</h2>
            </div>
            <Link to="/shop" className="link-line self-start sm:self-end">
              View all knitwear
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10">
            <ProductGrid products={related} columns={3} priorityCount={0} />
          </div>
        </div>
      </section>

      <Dialog
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
        title={`${product.name} — image gallery`}
        variant="modal"
        className="max-w-5xl"
      >
        {lightboxImage ? (
          <div className="bg-cream">
            <div className="relative flex min-h-[50vh] items-center justify-center bg-oatmeal/40 sm:min-h-[70vh]">
              <Picture
                image={lightboxImage}
                sizes="90vw"
                className="max-h-[78vh] w-full object-contain"
              />
              <button
                type="button"
                onClick={() => shiftLightbox(-1)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/85 text-forest backdrop-blur transition-colors hover:bg-ivory sm:left-4"
              >
                <ChevronLeft size={18} strokeWidth={1.2} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => shiftLightbox(1)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/85 text-forest backdrop-blur transition-colors hover:bg-ivory sm:right-4"
              >
                <ChevronRight size={18} strokeWidth={1.2} aria-hidden="true" />
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="text-[0.625rem] uppercase tracking-[0.16em] text-espresso/70">
                {product.name} · {product.material}
              </p>
              <p className="text-[0.625rem] tabular-nums text-espresso/70">
                {(lightbox ?? 0) + 1} / {product.images.length}
              </p>
            </div>
          </div>
        ) : null}
      </Dialog>
    </>
  );
}
