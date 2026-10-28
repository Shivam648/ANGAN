import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../ui/Breadcrumbs";

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: ReactNode;
};

type PolicyLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  crumb: string;
  sections: PolicySection[];
  aside?: ReactNode;
};

export function PolicyLayout({
  eyebrow,
  title,
  intro,
  updated,
  crumb,
  sections,
  aside,
}: PolicyLayoutProps) {
  return (
    <>
      <header className="border-b border-line bg-cream/40">
        <div className="container-editorial py-12 sm:py-16">
          <Breadcrumbs items={[{ label: crumb }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-espresso/50">
                <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
                {eyebrow}
              </p>
              <h1 className="display-lg mt-5">{title}</h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-relaxed text-espresso/70">{intro}</p>
              {updated ? (
                <p className="mt-4 text-[0.625rem] uppercase tracking-[0.16em] text-espresso/45">
                  {updated}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <div className="container-editorial py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <p className="eyebrow-sm text-espresso/45">On this page</p>
              <nav aria-label="On this page" className="mt-4">
                <ul className="space-y-2.5 border-l border-line">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-espresso/60 transition-colors hover:border-forest hover:text-forest"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              {aside ? <div className="mt-8">{aside}</div> : null}
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="space-y-12 sm:space-y-14">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-title`}
                  className="scroll-mt-32"
                >
                  <h2
                    id={`${section.id}-title`}
                    className="display-sm border-b border-line pb-4"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-[0.9375rem] leading-relaxed text-espresso/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-5 space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-[0.9375rem] leading-relaxed text-espresso/75"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.7em] h-1 w-1 flex-none rounded-full bg-gold"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.note ? <div className="mt-6">{section.note}</div> : null}
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-line pt-8">
              <p className="text-sm leading-relaxed text-espresso/65">
                Questions about this page? Write to us and we will do our best to
                help.
              </p>
              <Link to="/contact" className="link-line mt-4">
                Contact the house
                <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
