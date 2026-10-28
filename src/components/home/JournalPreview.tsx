import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { journal } from "../../data/journal";
import { JournalCard } from "../journal/JournalCard";
import { Reveal } from "../ui/Reveal";

export function JournalPreview() {
  const [featured, ...rest] = journal;

  return (
    <section className="section bg-cream/60">
      <div className="container-editorial">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-espresso/50">
              <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
              The Journal
            </p>
            <h2 className="display-lg mt-5">
              Notes on craft,
              <br />
              <span className="serif-italic text-forest/85">
                memory and slow living.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/journal" className="link-line">
              Read the Journal
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <JournalCard
              article={featured}
              variant="large"
              imageAspect="aspect-[16/10] lg:aspect-[4/3]"
            />
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-8">
            {rest.slice(0, 2).map((article, index) => (
              <Reveal key={article.slug} delay={index * 100}>
                <JournalCard
                  article={article}
                  imageAspect="aspect-[4/3] lg:aspect-[16/9]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
