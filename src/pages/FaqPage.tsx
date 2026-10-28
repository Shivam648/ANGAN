import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { Accordion } from "../components/ui/Accordion";
import { Notice } from "../components/ui/Notice";
import { faqs } from "../data/faqs";
import { Seo } from "../lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ — Aangan"
        description="Answers to common questions about Aangan knitwear: sizing, materials, care, delivery, returns and the prototype."
        canonical="/faq"
        jsonLd={jsonLd}
      />

      <PageHeader
        eyebrow="Help"
        title="Frequently asked questions."
        crumb="FAQ"
        intro={
          <p>
            Sizing, materials, care and the practical details of ordering. If your
            question is not here, write to us.
          </p>
        }
      />

      <div className="container-narrow py-12 sm:py-16">
        <Notice title="A note on this prototype" className="mb-10">
          <p>
            Aangan is a design prototype. Product details, prices and policies are
            sample content. No payment is processed and no order is placed. The
            answers below describe how the finished store is intended to work.
          </p>
        </Notice>

        <Accordion
          allowMultiple={false}
          items={faqs.map((faq, index) => ({
            id: `faq-${index}`,
            title: faq.question,
            content: <p>{faq.answer}</p>,
            defaultOpen: index === 0,
          }))}
        />

        <div className="mt-12 border border-line bg-cream/40 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Mail
                size={18}
                strokeWidth={1.1}
                aria-hidden="true"
                className="mt-1 flex-none text-gold"
              />
              <div>
                <h2 className="font-display text-2xl">Still wondering?</h2>
                <p className="mt-1 text-sm leading-relaxed text-espresso/65">
                  Write to the studio with your measurements or question. For this
                  prototype, email is the most reliable route.
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-outline btn-sm flex-none self-start sm:self-auto">
              Contact us
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-[0.625rem] uppercase tracking-[0.14em] text-espresso/45">
          <Link to="/shipping-returns" className="transition-colors hover:text-forest">
            Shipping & returns
          </Link>
          <Link to="/size-guide" className="transition-colors hover:text-forest">
            Size guide
          </Link>
          <Link to="/journal/a-guide-to-caring-for-wool" className="transition-colors hover:text-forest">
            Care guide
          </Link>
        </div>
      </div>
    </>
  );
}
