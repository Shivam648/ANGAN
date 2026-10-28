import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";

export function HeritageSection() {
  return (
    <section className="section">
      <div className="container-editorial">
        <div className="grid items-stretch gap-0 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-oatmeal lg:aspect-auto lg:h-full lg:min-h-[620px]">
              <Picture
                image={{
                  name: "nalanda",
                  alt: "Ancient brick ruins at Nalanda in warm afternoon light",
                }}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="absolute bottom-4 left-4 max-w-[16rem] bg-ivory/90 px-3 py-2 text-[0.5625rem] uppercase leading-relaxed tracking-[0.16em] text-espresso/65 backdrop-blur">
              The brick remembers. Nalanda, Bihar.
            </p>
          </Reveal>

          <div className="relative flex flex-col justify-center bg-forest px-6 py-12 text-ivory sm:px-10 lg:col-span-5 lg:px-14 lg:py-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-ivory/55">
                <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
                Our Heritage
              </p>
              <h2 className="display-md mt-6 text-ivory">
                From the heart of Bihar,
                <br />
                <span className="serif-italic text-gold/90">
                  with a warmth of its own.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-7 space-y-4 text-sm leading-relaxed text-ivory/70">
                <p>
                  Magadh is a landscape of layers: old brick and new growth,
                  courtyards and open fields, the quiet after a festival and the
                  ordinary warmth of a winter kitchen. We draw from that
                  atmosphere, not from a postcard.
                </p>
                <p>
                  Our work is shaped by the changing seasons of Bihar and by the
                  value of things made slowly. A sweater is not a costume of
                  heritage. It is a useful, beautiful object that can carry
                  memory into daily life.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 border-t border-ivory/15 pt-6">
                <p className="font-display text-2xl italic text-ivory/85">
                  “Tradition, in every thread.”
                </p>
                <Link
                  to="/our-story"
                  className="link-line mt-5 text-ivory/75 hover:text-ivory"
                >
                  Read our heritage
                  <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <span
              aria-hidden="true"
              className="deva pointer-events-none absolute bottom-4 right-5 text-6xl text-ivory/10 lg:text-7xl"
            >
              आँगन
            </span>
          </div>
        </div>

        <Reveal className="mt-6 grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
          <div className="relative aspect-[16/9] overflow-hidden bg-oatmeal">
            <Picture
              image={{
                name: "village-road",
                alt: "A quiet village road with simple houses and a cyclist in rural Bihar",
              }}
              sizes="(min-width: 640px) 40vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="max-w-md sm:pl-6">
            <p className="eyebrow-sm text-espresso/45">A note on place</p>
            <p className="mt-2 text-sm leading-relaxed text-espresso/70">
              We are inspired by Magadh and by the broader cultural memory of
              Bihar. References to regional art — including the visual traditions
              of Mithila — are used with care, and with respect for the
              communities who have kept them alive.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
