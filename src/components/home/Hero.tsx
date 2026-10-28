import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Picture } from "../ui/Picture";

export function Hero() {
  return (
    <section className="hero grain grain-light" aria-labelledby="hero-title">
      <div className="hero-media">
        <Picture
          image={{
            name: "hero-knit",
            alt: "A woman in a textured brown cable-knit sweater holding a vintage camera in warm natural light",
            position: "58% 44%",
          }}
          sizes="100vw"
          priority
        />
      </div>

      <div className="hero-content container-editorial">
        <div className="max-w-4xl">
          <p className="eyebrow flex items-center gap-3 text-ivory/70">
            <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
            Magadh · Bihar · The Winter Collection
          </p>

          <h1 id="hero-title" className="hero-title display-xl mt-7">
            <span className="block">An heirloom,</span>
            <span className="block">
              <em>in the making.</em>
            </span>
          </h1>

          <p className="mt-7 max-w-xl font-display text-[1.45rem] leading-snug text-ivory/90 sm:text-[1.7rem]">
            Handcrafted knitwear, rooted in the soul of Magadh.
          </p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory/65">
            Every stitch carries the warmth of a tradition worth keeping.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#featured" className="btn btn-ivory">
              Discover the Collection
              <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
            </a>
            <Link to="/our-story" className="btn btn-outline-ivory">
              Our Story
            </Link>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6 sm:mt-16">
          <a
            href="#the-house"
            className="hero-scroll text-ivory/60 transition-colors hover:text-ivory"
          >
            <span className="hero-scroll-line" aria-hidden="true" />
            Scroll to discover
          </a>
          <p className="hidden max-w-[13rem] text-right text-[0.625rem] uppercase leading-relaxed tracking-[0.18em] text-ivory/45 sm:block">
            Made by hand. Rooted in Magadh. Made to be kept.
          </p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="writing-vertical absolute right-5 top-1/2 hidden -translate-y-1/2 text-[0.5625rem] uppercase tracking-[0.32em] text-ivory/35 xl:block"
      >
        Aangan · Winter 2026
      </span>
    </section>
  );
}
