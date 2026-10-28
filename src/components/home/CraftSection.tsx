import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";

const stages = [
  {
    number: "01",
    title: "The Yarn",
    copy: "We begin with the fibre: its softness, its weight, the way it holds warmth. The yarn is chosen before the silhouette is drawn.",
    image: {
      name: "yarn-still",
      alt: "Balls of natural wool yarn and knitting needles on a dark surface",
    },
  },
  {
    number: "02",
    title: "The Knit",
    copy: "Some pieces are knitted entirely by hand. Others are machine-knitted and finished by hand. We name the method on every product page.",
    image: {
      name: "hands-knitting",
      alt: "Hands knitting with cream wool and wooden needles",
    },
  },
  {
    number: "03",
    title: "The Finish",
    copy: "Seams are eased, cuffs are shaped, necklines are checked against the body. The final work is done slowly, by hand.",
    image: {
      name: "knit-detail",
      alt: "Close-up of a soft cream knitted surface",
    },
  },
  {
    number: "04",
    title: "The Heirloom",
    copy: "A garment leaves the studio ready for a life: worn often, washed carefully, mended when needed, and kept for years.",
    image: {
      name: "sweater-chair",
      alt: "A brown knitted sweater draped over a wooden chair",
    },
  },
];

export function CraftSection() {
  return (
    <section className="section bg-cream/60">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3 text-espresso/50">
              <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
              Craftsmanship
            </p>
            <h2 className="display-lg mt-5">
              Not rushed. Not ordinary.
              <br />
              <span className="serif-italic text-forest/85">
                Made with intention.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-espresso/65">
              Four stages, one standard: that the garment should feel considered
              in the hand, on the body, and years later.
            </p>
            <Link to="/craftsmanship" className="link-line mt-5">
              Inside the craft
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <Reveal key={stage.number} delay={index * 90}>
              <div className="relative aspect-[4/5] overflow-hidden bg-oatmeal">
                <Picture
                  image={stage.image}
                  sizes="(min-width: 1024px) 23vw, 46vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 bg-ivory/85 px-2 py-1 text-[0.5625rem] font-medium tracking-[0.16em] text-forest backdrop-blur">
                  {stage.number}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[1.55rem] leading-tight">
                {stage.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-espresso/65">
                {stage.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
