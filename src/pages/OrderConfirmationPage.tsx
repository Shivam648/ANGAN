import { Link } from "react-router-dom";
import { ArrowRight, Check, Info } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { Seo } from "../lib/seo";

const fields = [
  "An order number and the date",
  "The pieces, colours and sizes selected",
  "The delivery address and chosen shipping method",
  "A payment status confirmed by the payment provider",
  "A link to care notes for each garment",
];

export function OrderConfirmationPage() {
  return (
    <>
      <Seo
        title="Order Confirmation — Aangan"
        description="This prototype does not process payments or create orders."
        canonical="/order-confirmation"
        noindex
      />

      <PageHeader
        eyebrow="The final step"
        title="Order confirmation"
        crumb="Order confirmation"
        intro={
          <p>
            This page shows where a real confirmation would live. No order has
            been placed, and there is nothing to confirm.
          </p>
        }
      />

      <div className="container-editorial py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4 border border-line bg-cream/40 p-6 sm:p-8">
              <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gold/50 text-gold">
                <Info size={17} strokeWidth={1.2} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow-sm text-espresso/45">No order placed</p>
                <h2 className="display-sm mt-2">There is nothing to confirm.</h2>
                <p className="mt-3 text-sm leading-relaxed text-espresso/70">
                  Aangan is a design prototype. The checkout does not collect
                  payment details, process payment, or create an order. If you
                  arrived here from the checkout, your details were not sent
                  anywhere.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow-sm text-espresso/45">
                When a commerce backend is connected
              </p>
              <h2 className="display-sm mt-2">
                What a confirmation will include.
              </h2>
              <ul className="mt-6 space-y-3">
                {fields.map((field) => (
                  <li
                    key={field}
                    className="flex items-start gap-3 border-b border-line-soft pb-3 text-sm leading-relaxed text-espresso/70"
                  >
                    <Check
                      size={15}
                      strokeWidth={1.3}
                      aria-hidden="true"
                      className="mt-0.5 flex-none text-gold"
                    />
                    {field}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/shop" className="btn btn-primary">
                Explore the collection
                <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
              </Link>
              <Link to="/journal" className="btn btn-outline">
                Read the Journal
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-dashed border-line bg-cream/30 p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow-sm text-espresso/40">Sample layout</p>
                <span className="border border-line px-2 py-0.5 text-[0.5625rem] uppercase tracking-[0.14em] text-espresso/45">
                  No data
                </span>
              </div>
              <p className="mt-5 font-display text-3xl text-espresso/35">
                AAN-0000
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4 border-b border-line-soft pb-3">
                  <dt className="text-espresso/45">Status</dt>
                  <dd className="text-[0.625rem] uppercase tracking-[0.12em] text-burgundy">
                    Not placed
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line-soft pb-3">
                  <dt className="text-espresso/45">Payment</dt>
                  <dd className="text-[0.625rem] uppercase tracking-[0.12em] text-espresso/45">
                    Not processed
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-espresso/45">Pieces</dt>
                  <dd className="text-[0.625rem] uppercase tracking-[0.12em] text-espresso/45">
                    None
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-[0.625rem] leading-relaxed text-espresso/40">
                This card is a visual placeholder for the confirmation design. It
                is not an order record.
              </p>
            </div>

            <div className="mt-5 border border-line p-5">
              <p className="eyebrow-sm text-espresso/45">Questions?</p>
              <p className="mt-2 text-xs leading-relaxed text-espresso/60">
                For sizing, materials or a question about the prototype, write to
                the studio.
              </p>
              <Link to="/contact" className="link-line mt-4 text-espresso/60">
                Contact the house
                <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
