import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";

export function SignatureBanner() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-ivory">
      <div className="absolute inset-0">
        <Picture
          image={{
            name: "editorial-duo",
            alt: "Two women in quiet beige clothing standing in an open landscape",
            position: "center 35%",
          }}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,24,18,0.82)_0%,rgba(15,24,18,0.5)_45%,rgba(15,24,18,0.18)_100%)]" />
      <div className="absolute inset-4 border border-ivory/20 sm:inset-6" aria-hidden="true" />

      <div className="container-editorial relative z-10 flex min-h-[68vh] items-center py-20 sm:min-h-[74vh]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-ivory/60">
            <span className="h-px w-8 bg-gold/80" aria-hidden="true" />
            The Signature Collection
          </p>
          <h2 className="display-lg mt-6 text-ivory">
            A quieter kind
            <br />
            <span className="serif-italic text-gold/90">of luxury.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70 sm:text-base">
            Timeless knits for colder mornings and slower days. Made in small
            numbers, with the kind of detail you notice over time.
          </p>
          <Link to="/shop" className="btn btn-ivory mt-8">
            Shop the Winter Collection
            <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      <p className="absolute bottom-6 right-8 z-10 hidden text-[0.5625rem] uppercase tracking-[0.24em] text-ivory/45 sm:block">
        Photographed in natural light
      </p>
    </section>
  );
}
