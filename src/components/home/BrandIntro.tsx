import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";

export function BrandIntro() {
  return (
    <section id="the-house" className="section">
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6 lg:col-start-1">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-oatmeal">
                <Picture
                  image={{
                    name: "wool-macro",
                    alt: "Macro detail of warm beige wool fibres",
                  }}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-48 border border-ivory bg-ivory p-3 shadow-sm sm:block lg:-right-10 lg:w-56">
                <div className="relative aspect-[4/3] overflow-hidden bg-oatmeal">
                  <Picture
                    image={{
                      name: "hands-knitting",
                      alt: "Hands knitting with cream wool",
                    }}
                    sizes="224px"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-[0.5625rem] uppercase tracking-[0.18em] text-espresso/55">
                  The hand, the yarn, the hours.
                </p>
              </div>
              <span
                aria-hidden="true"
                className="absolute -left-3 top-8 hidden text-[0.5625rem] uppercase tracking-[0.24em] text-espresso/40 lg:block"
                style={{ writingMode: "vertical-rl" }}
              >
                Wool · Before the garment
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-espresso/50">
                <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
                The House
              </p>
              <h2 className="display-md mt-6">
                Some things are made to last.
                <br />
                <span className="serif-italic text-forest/85">
                  Others are made to be remembered.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-7 space-y-5 text-[0.9375rem] leading-relaxed text-espresso/75">
                <p>
                  Aangan is a study in warmth. We make knitwear slowly, in small
                  batches, with an attention to the things that rarely announce
                  themselves: the weight of a hem, the softness of a collar, the
                  way a sleeve falls when you reach for a cup of tea.
                </p>
                <p>
                  Our point of view begins in Magadh — in its courtyards and cold
                  mornings, its brick and dust and winter light. We carry that
                  memory into contemporary garments, made to be worn often and
                  kept for years.
                </p>
                <p className="font-display text-[1.35rem] italic leading-snug text-forest/85">
                  Quietly made. Deeply rooted.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link to="/our-story" className="link-line">
                  Read our story
                  <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
                </Link>
                <span className="text-[0.625rem] uppercase tracking-[0.18em] text-espresso/40">
                  Magadh, Bihar
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
