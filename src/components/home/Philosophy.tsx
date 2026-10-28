import { Motif } from "../ui/Motif";
import { Reveal } from "../ui/Reveal";

const principles = [
  {
    number: "I",
    motif: "arch" as const,
    title: "Rooted in Heritage",
    copy: "We begin with place: the courtyards, winters and cultural memory of Magadh. Heritage is not a pattern we apply. It is the ground we stand on.",
  },
  {
    number: "II",
    motif: "stitch" as const,
    title: "Crafted with Care",
    copy: "We work in small batches, choose fibres with intention, and finish by hand wherever we can. We say what is handmade and what is not.",
  },
  {
    number: "III",
    motif: "lotus" as const,
    title: "Made to Outlast Trends",
    copy: "Our pieces are designed to be worn often and kept for years. Not made for a season. Made for the years that follow.",
  },
];

export function Philosophy() {
  return (
    <section className="section">
      <div className="container-editorial">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-espresso/50">Our Philosophy</p>
          <h2 className="display-md mt-5">
            A little warmth. A little heritage.
            <br />
            <span className="serif-italic text-forest/85">A lot of meaning.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid border-t border-line sm:grid-cols-3 sm:border-t-0">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              delay={index * 100}
              className="border-b border-line py-9 sm:border-b-0 sm:border-l sm:px-7 sm:py-2 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
            >
              <div className="flex items-start justify-between gap-4">
                <Motif
                  variant={principle.motif}
                  className="h-12 w-12 text-gold"
                />
                <span className="font-display text-lg text-espresso/35">
                  {principle.number}
                </span>

              </div>
              <h3 className="mt-6 font-display text-[1.65rem] leading-tight">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso/65">
                {principle.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
