import { NewsletterForm } from "../commerce/NewsletterForm";
import { Reveal } from "../ui/Reveal";

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <div className="grain grain-light absolute inset-0" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="deva pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 text-[12rem] leading-none text-ivory/[0.045] sm:text-[18rem]"
      >
        आँगन
      </span>

      <div className="container-editorial relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow flex items-center gap-3 text-ivory/55">
              <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
              Letters from Magadh
            </p>
            <h2 className="display-md mt-5 text-ivory">
              Stories of craft,
              <br />
              <span className="serif-italic text-gold/90">
                quiet living, and things worth keeping.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-relaxed text-ivory/65">
              Occasional letters from the studio: new pieces, notes on making,
              and small observations from the season. No noise. Just the things
              worth saying.
            </p>
            <NewsletterForm className="mt-6" />
            <p className="mt-3 text-[0.625rem] uppercase tracking-[0.14em] text-ivory/35">
              By subscribing you agree to our privacy policy.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
