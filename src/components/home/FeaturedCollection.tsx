import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "../../data/products";
import { ProductGrid } from "../commerce/ProductGrid";
import { Reveal } from "../ui/Reveal";

export function FeaturedCollection() {
  return (
    <section id="featured" className="section bg-cream/60">
      <div className="container-editorial">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-espresso/50">
              <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
              The Winter Collection
            </p>
            <h2 className="display-lg mt-5 max-w-2xl">
              Pieces for the cold,
              <br />
              <span className="serif-italic text-forest/85">made to be kept.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:max-w-xs">
            <p className="text-sm leading-relaxed text-espresso/65">
              A small, considered collection of knitwear for the season. Each
              piece is made in limited numbers and finished by hand.
            </p>
            <Link to="/shop" className="link-line mt-5">
              Explore all knitwear
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-12 sm:mt-16">
          <ProductGrid
            products={featuredProducts}
            columns={4}
            className="featured-offset"
          />
        </Reveal>

        <div className="mt-14 flex justify-center lg:mt-24">
          <Link to="/shop" className="btn btn-outline">
            View the collection
            <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
