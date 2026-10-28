import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Motif } from "../components/ui/Motif";
import { Notice } from "../components/ui/Notice";
import { Picture } from "../components/ui/Picture";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../lib/seo";

const stages = [
  {
    number: "01",
    title: "The yarn",
    copy: "We begin with the fibre: its softness, its weight, the way it holds warmth. The yarn is chosen before the silhouette is drawn. Our sample collection uses wool, lambswool and wool blends; each product page states the composition.",
    image: {
      name: "yarn-still",
      alt: "Balls of natural wool yarn and knitting needles on a dark surface",
    },
  },
  {
    number: "02",
    title: "The knit",
    copy: "Some pieces are knitted entirely by hand. Others are machine-knitted and finished by hand. The method changes the rhythm of the work, but not the standard: even tension, a soft hand, a surface that feels considered.",
    image: {
      name: "hands-knitting",
      alt: "Hands knitting with cream wool and wooden needles",
    },
  },
  {
    number: "03",
    title: "The finish",
    copy: "Seams are eased, cuffs are shaped, necklines are checked against the body. The final work is done slowly, by hand. It is the stage most people never see, and the one that decides how a garment wears.",
    image: {
      name: "knit-detail",
      alt: "Close-up of a soft cream knitted surface",
    },
  },
  {
    number: "04",
    title: "The life after",
    copy: "A garment leaves the studio ready for a life: worn often, washed carefully, mended when needed, and kept for years. We would rather make fewer things that are cared for than more things that are replaced.",
    image: {
      name: "sweater-chair",
      alt: "A brown knitted sweater draped over a wooden chair",
    },
  },
];

const careSteps = [
  {
    title: "Wash less",
    copy: "Air a sweater between wears. Wool does not need frequent washing; fresh air and a soft brush do a great deal.",
  },
  {
    title: "Hand wash cool",
    copy: "Use a gentle wool detergent in cool water. Soak briefly, press gently, and avoid wringing or twisting.",
  },
  {
    title: "Dry flat",
    copy: "Lay the garment flat in the shade, reshaping it gently while damp. Never tumble dry or hang a wet knit.",
  },
  {
    title: "Store folded",
    copy: "Fold rather than hang, and keep away from damp. Cedar or lavender can help protect natural fibres.",
  },
];

const people = [
  {
    role: "The knitter",
    copy: "Works the yarn into panels and whole garments, reading the tension of the stitch as the piece grows. Hand-knitting is slow, rhythmic work.",
    image: {
      name: "hands-knitting",
      alt: "Hands knitting with cream wool and wooden needles",
    },
  },
  {
    role: "The finisher",
    copy: "Eases seams, shapes cuffs and checks necklines against the body. The final hand-work is quiet, and it decides how the garment wears.",
    image: {
      name: "knit-detail",
      alt: "Close-up of a soft cream knitted surface",
    },
  },
  {
    role: "The studio",
    copy: "Chooses the fibre, keeps the sample records and checks each piece before it is wrapped. Care is part of the making, not an afterthought.",
    image: {
      name: "yarn-still",
      alt: "Balls of natural wool yarn and knitting needles on a dark surface",
    },
  },
];

export function CraftPage() {
  return (
    <>
      <Seo
        title="Craftsmanship — Aangan"
        description="How Aangan knitwear is made: yarn selection, hand and machine knitting, hand-finishing, and the care that extends a garment's life."
        canonical="/craftsmanship"
      />

      <header className="relative overflow-hidden bg-forest-deep text-ivory">
        <div className="absolute inset-0">
          <Picture
            image={{
              name: "spinning-wool",
              alt: "Hands spinning natural wool into yarn",
              position: "center 45%",
            }}
            sizes="100vw"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,24,18,0.88)_0%,rgba(15,24,18,0.58)_52%,rgba(15,24,18,0.2)_100%)]" />
        <div className="absolute inset-4 border border-ivory/15 sm:inset-6" aria-hidden="true" />

        <div className="container-editorial relative z-10 py-20 sm:py-28 lg:py-36">
          <Breadcrumbs light items={[{ label: "Craftsmanship" }]} />
          <div className="mt-10 max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-ivory/55">
              <span className="h-px w-8 bg-gold/80" aria-hidden="true" />
              Craftsmanship
            </p>
            <h1 className="display-xl mt-6 text-ivory">
              The work is
              <br />
              <span className="serif-italic text-gold/90">in the details.</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base">
              Four stages, one standard: that the garment should feel considered
              in the hand, on the body, and years later.
            </p>
          </div>
        </div>
      </header>

      <article className="section">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow text-espresso/70">A slower kind of making</p>
            <p className="drop-cap mt-6 font-display text-[1.7rem] leading-[1.35] text-espresso/85 sm:text-[2rem]">
              A machine can produce a perfect stitch. A hand cannot. A hand has a
              mood, a temperature, a rhythm — and the evidence of that rhythm is
              what we mean when we say a garment has character.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="prose-editorial mt-10">
              <p>
                We are not against machines. We are against pretending. Some of
                our pieces are made entirely by hand; others are knitted on
                machines and finished by hand. Both can be good. What matters is
                that the making is honest, and that the person who wears the
                garment can feel the difference between something made in a hurry
                and something made with intention.
              </p>
              <p>
                This page describes our process in plain terms. It is not a
                romance of craft, but a record of the decisions that shape a
                garment: which fibre, which stitch, which finish, and how it
                should be cared for afterwards.
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="bg-cream/60">
        <div className="container-editorial py-16 sm:py-24">
          <div className="space-y-16 sm:space-y-24">
            {stages.map((stage, index) => (
              <Reveal key={stage.number}>
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-14">
                  <div
                    className={`lg:col-span-6 lg:row-start-1 ${
                      index % 2 === 1 ? "lg:col-start-7" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-oatmeal">
                      <Picture
                        image={stage.image}
                        sizes="(min-width: 1024px) 48vw, 100vw"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 bg-ivory/85 px-2 py-1 text-[0.5625rem] font-medium tracking-[0.16em] text-forest backdrop-blur">
                        {stage.number}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-5 lg:row-start-1 ${
                      index % 2 === 1 ? "lg:col-start-1" : "lg:col-start-8"
                    }`}
                  >
                    <p className="eyebrow-sm text-espresso/70">
                      Stage {stage.number}
                    </p>
                    <h2 className="display-md mt-3">{stage.title}</h2>
                    <p className="mt-5 text-[0.9375rem] leading-relaxed text-espresso/70">
                      {stage.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-espresso/70">Handmade, stated plainly</p>
            <h2 className="display-md mt-4">
              Two methods. One standard.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="border border-line bg-cream/40 p-7 sm:p-9">
              <p className="eyebrow-sm text-gold">Hand-knitted</p>
              <h3 className="mt-3 font-display text-[1.8rem] leading-tight">
                Made stitch by stitch.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-espresso/70">
                A hand-knitted garment carries small variations in tension and
                surface. These are not defects; they are the signature of a person
                who was present. Hand-knitting asks for time, and time is the most
                expensive material we use.
              </p>
              <p className="mt-4 text-[0.625rem] uppercase tracking-[0.14em] text-espresso/70">
                Look for “Hand-knitted” on the product page.
              </p>
            </Reveal>

            <Reveal delay={100} className="border border-line bg-cream/40 p-7 sm:p-9">
              <p className="eyebrow-sm text-gold">Machine-knitted, hand-finished</p>
              <h3 className="mt-3 font-display text-[1.8rem] leading-tight">
                Precision, then the human touch.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-espresso/70">
                These pieces are knitted on machines for consistency, then
                finished by hand: necklines, seams, cuffs and hems are checked and
                eased individually. It is a different process, not a lesser one.
              </p>
              <p className="mt-4 text-[0.625rem] uppercase tracking-[0.14em] text-espresso/70">
                Look for "Machine-knitted, hand-finished" on the product page.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-cream/40">
        <div className="container-editorial">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-espresso/70">
                <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
                The people
              </p>
              <h2 className="display-md mt-5">
                The hands behind
                <br />
                <span className="serif-italic text-forest/85">the work.</span>
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <Motif variant="mithila" className="text-gold/80" />
                <p className="max-w-[16rem] text-[0.5625rem] uppercase leading-relaxed tracking-[0.16em] text-espresso/70">
                  A Mithila-inspired line motif, used with care.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-relaxed text-espresso/75">
                A garment passes through several pairs of hands. These are the
                roles we are building the studio around, described plainly rather
                than turned into a romance.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {people.map((person, index) => (
              <Reveal key={person.role} delay={index * 80}>
                <div className="relative aspect-[4/3] overflow-hidden bg-oatmeal">
                  <Picture
                    image={person.image}
                    sizes="(min-width: 768px) 31vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <p className="eyebrow-sm mt-5 text-gold">0{index + 1}</p>
                <h3 className="mt-2 font-display text-[1.65rem] leading-tight">
                  {person.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/75">
                  {person.copy}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-10">
            <Notice title="A note on this prototype">
              Names, portraits and individual maker stories are intentionally not
              invented here. When the studio's maker documentation is complete,
              this section will introduce the people who knit, finish and check
              each piece, with their permission.
            </Notice>
          </Reveal>
        </div>
      </section>

      <section className="section bg-forest text-ivory">
        <div className="container-editorial">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow flex items-center gap-3 text-ivory/55">
                <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
                The fibre
              </p>
              <h2 className="display-md mt-5 text-ivory">
                Natural fibres,
                <br />
                <span className="serif-italic text-gold/90">chosen with care.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ivory/65">
                Wool is a living fibre. It breathes, regulates temperature, and
                softens with wear. Our sample collection uses wool, lambswool and
                wool blends; the exact composition is listed on each product page.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/65">
                We are working to document the origin of every yarn we use. Until
                that information is verified, we do not make origin or
                certification claims.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-oatmeal">
                <Picture
                  image={{
                    name: "wool-macro",
                    alt: "Macro detail of warm beige wool fibres",
                  }}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-[0.5625rem] uppercase tracking-[0.16em] text-ivory/35">
                The surface of the fibre, before the garment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-espresso/70">Care</p>
              <h2 className="display-md mt-4">
                A longer life
                <br />
                <span className="serif-italic text-forest/85">is a quiet choice.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-espresso/75">
                Care is part of craftsmanship. A wool garment that is washed less,
                dried flat and stored folded will keep its shape and softness for
                years.
              </p>
              <Link to="/journal/a-guide-to-caring-for-wool" className="link-line mt-6">
                Read the care guide
                <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {careSteps.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={index * 80}
                  className="border-t border-line pt-5"
                >
                  <p className="font-display text-2xl text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-[1.45rem] leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/75">
                    {step.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream/50">
        <div className="container-editorial py-14 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow-sm text-espresso/70">See the work</p>
              <h2 className="display-sm mt-2">Explore the collection.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="btn btn-primary">
                Shop knitwear
                <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
              </Link>
              <Link to="/our-story" className="btn btn-outline">
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
