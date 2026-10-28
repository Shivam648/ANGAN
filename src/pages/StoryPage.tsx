import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Motif } from "../components/ui/Motif";
import { Picture } from "../components/ui/Picture";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../lib/seo";

const beliefs = [
  {
    motif: "arch" as const,
    title: "Place before pattern",
    copy: "Magadh is not a mood board. It is a real landscape of brick, dust, fields and cold mornings. We begin there, with attention rather than decoration.",
  },
  {
    motif: "stitch" as const,
    title: "Honesty in the making",
    copy: "Some pieces are hand-knitted. Some are machine-knitted and finished by hand. We name the method plainly, because the difference matters.",
  },
  {
    motif: "lotus" as const,
    title: "A longer useful life",
    copy: "We design for repetition, not novelty: garments that can be worn often, cared for simply, mended when needed, and kept for years.",
  },
];

export function StoryPage() {
  return (
    <>
      <Seo
        title="Our Story — Aangan"
        description="Aangan is an heirloom knitwear house rooted in Magadh, Bihar. Read about our point of view, our relationship to place, and how we make."
        canonical="/our-story"
      />

      <header className="relative overflow-hidden bg-forest-deep text-ivory">
        <div className="absolute inset-0">
          <Picture
            image={{
              name: "village-women",
              alt: "Women walking through a rural landscape in Bihar in soft daylight",
              position: "center 40%",
            }}
            sizes="100vw"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,24,18,0.86)_0%,rgba(15,24,18,0.55)_52%,rgba(15,24,18,0.2)_100%)]" />
        <div className="absolute inset-4 border border-ivory/15 sm:inset-6" aria-hidden="true" />

        <div className="container-editorial relative z-10 py-20 sm:py-28 lg:py-36">
          <Breadcrumbs light items={[{ label: "Our Story" }]} />
          <div className="mt-10 max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-ivory/55">
              <span className="h-px w-8 bg-gold/80" aria-hidden="true" />
              Our Story
            </p>
            <h1 className="display-xl mt-6 text-ivory">
              Rooted in Magadh.
              <br />
              <span className="serif-italic text-gold/90">Made for the everyday.</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base">
              Aangan is a new knitwear house with an old sense of time. We make
              quiet garments in small batches, shaped by the place we come from
              and the lives our clothes are meant to live.
            </p>
          </div>
        </div>

        <p className="absolute bottom-6 right-8 z-10 hidden text-[0.5625rem] uppercase tracking-[0.24em] text-ivory/40 sm:block">
          Magadh · Bihar
        </p>
      </header>

      <article className="section">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow text-espresso/70">A note from the house</p>
            <p className="drop-cap mt-6 font-display text-[1.7rem] leading-[1.35] text-espresso/85 sm:text-[2rem]">
              Aangan means courtyard. It is the open centre of a home, the place
              where light arrives first and where the day is shared. We chose the
              word because it holds two things we care about: shelter and
              openness.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="prose-editorial mt-10">
              <p>
                Our work begins in Magadh, in the plain of south Bihar where
                winter arrives slowly and the morning fog softens every edge. It
                is a place with a long memory: brick ruins, pilgrimage roads,
                fields that change colour with the season, and ordinary
                courtyards where people gather to eat, talk and keep warm.
              </p>
              <p>
                We are interested in that ordinary warmth. Not heritage as
                costume, but heritage as a way of paying attention — to the weight
                of a yarn, the fall of a sleeve, the useful life of a thing.
              </p>
              <h2>A house, not a costume</h2>
              <p>
                Aangan is a new house. We do not claim generations of family
                history, a hidden archive, or a lineage of master craftspeople.
                What we have is a point of view and a commitment to making it
                real: knitwear that feels connected to this place without turning
                it into a postcard.
              </p>
              <p>
                That means designing with restraint. A cable is allowed to be a
                cable. A colour is allowed to be quiet. A garment is allowed to be
                plain, useful and beautiful at once.
              </p>
              <blockquote>
                Heritage is not a pattern we apply. It is the ground we stand on.
              </blockquote>
              <h2>What we make</h2>
              <p>
                We make sweaters, cardigans and layering pieces for cold weather.
                Some are knitted entirely by hand. Others are machine-knitted and
                finished by hand. We say which is which on every product page,
                because a garment should be honest about how it came to be.
              </p>
              <p>
                Our sample collection uses wool, lambswool and wool blends. As we
                grow, we want to document the origin of every yarn we use. Until
                that information is verified, we do not make origin or
                certification claims.
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="section bg-cream/60">
        <div className="container-editorial">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-oatmeal">
                <Picture
                  image={{
                    name: "nalanda-2",
                    alt: "Ancient brick ruins at Nalanda in warm afternoon light",
                  }}
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-[0.5625rem] uppercase tracking-[0.16em] text-espresso/70">
                The brick remembers. Nalanda, Bihar.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
              <p className="eyebrow-sm text-espresso/70">A relationship to place</p>
              <h2 className="display-md mt-3">
                We take the long view.
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-espresso/70">
                <p>
                  Bihar has been a centre of learning, trade, art and ordinary
                  human life for a very long time. We are one small, contemporary
                  voice within that much larger story.
                </p>
                <p>
                  References to regional art — including the visual traditions of
                  Mithila — are used with care, and with respect for the
                  communities who have kept them alive. When we cannot verify a
                  story, we do not tell it as fact.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Motif variant="mithila" className="text-gold/80" />
                <p className="max-w-[16rem] text-[0.5625rem] uppercase leading-relaxed tracking-[0.16em] text-espresso/70">
                  A Mithila-inspired line motif, used with care.
                </p>
              </div>
              <Link to="/craftsmanship" className="link-line mt-6">
                Inside the craft
                <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-espresso/70">What we believe</p>
            <h2 className="display-md mt-4">
              Three quiet convictions.
            </h2>
          </Reveal>

          <div className="mt-14 grid border-t border-line sm:grid-cols-3 sm:border-t-0">
            {beliefs.map((belief, index) => (
              <Reveal
                key={belief.title}
                delay={index * 100}
                className="border-b border-line py-9 sm:border-b-0 sm:border-l sm:px-7 sm:py-2 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
              >
                <Motif variant={belief.motif} className="h-12 w-12 text-gold" />
                <h3 className="mt-6 font-display text-[1.65rem] leading-tight">
                  {belief.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso/75">
                  {belief.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="grain grain-light absolute inset-0" aria-hidden="true" />
        <span
          aria-hidden="true"
          className="deva pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 text-[11rem] leading-none text-ivory/[0.05] sm:text-[16rem]"
        >
          आँगन
        </span>
        <div className="container-editorial relative z-10 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-ivory/55">
                <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
                Where we are going
              </p>
              <h2 className="display-md mt-5 text-ivory">
                Slowly, and with care.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/65">
                We are building Aangan in public, one small collection at a time.
                The next steps are practical: verify our materials, document our
                makers, publish accurate measurements, and connect a real
                fulfilment and payment partner. Until then, this site is a design
                prototype — honest about what it is.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
              <div className="flex flex-wrap gap-3">
                <Link to="/shop" className="btn btn-ivory">
                  Explore the collection
                  <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
                </Link>
                <Link to="/journal" className="btn btn-outline-ivory">
                  Read the Journal
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
