import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { useUI } from "../context/UIContext";
import { Seo } from "../lib/seo";

export function NotFoundPage() {
  const { openSearch } = useUI();

  return (
    <>
      <Seo
        title="Page not found — Aangan"
        description="This page could not be found."
        noindex
      />

      <section className="relative overflow-hidden bg-forest-deep text-ivory">
        <div className="grain grain-light absolute inset-0" aria-hidden="true" />
        <span
          aria-hidden="true"
          className="deva pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 text-[14rem] leading-none text-ivory/[0.04] sm:text-[22rem]"
        >
          आँगन
        </span>

        <div className="container-editorial relative z-10 flex min-h-[72vh] flex-col justify-center py-20 sm:py-28">
          <p className="eyebrow flex items-center gap-3 text-ivory/55">
            <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
            404 · Page not found
          </p>
          <p className="mt-6 font-display text-[clamp(5rem,16vw,12rem)] leading-[0.8] text-ivory/20">
            404
          </p>
          <h1 className="display-lg mt-4 max-w-2xl text-ivory">
            This path leads to
            <br />
            <span className="serif-italic text-gold/90">a quiet courtyard.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ivory/65">
            The page you are looking for may have moved, or it may never have
            existed. Return to the collection, or search for a piece or a story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="btn btn-ivory">
              Explore the collection
              <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={openSearch}
              className="btn btn-outline-ivory"
            >
              <Search size={14} strokeWidth={1.2} aria-hidden="true" />
              Search
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-[0.625rem] uppercase tracking-[0.14em] text-ivory/45">
            <Link to="/" className="transition-colors hover:text-ivory">
              Home
            </Link>
            <Link to="/journal" className="transition-colors hover:text-ivory">
              Journal
            </Link>
            <Link to="/our-story" className="transition-colors hover:text-ivory">
              Our story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
