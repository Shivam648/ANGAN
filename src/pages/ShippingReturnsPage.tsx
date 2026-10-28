import { Link } from "react-router-dom";
import { PolicyLayout, type PolicySection } from "../components/layout/PolicyLayout";
import { Notice } from "../components/ui/Notice";
import { Seo } from "../lib/seo";

const sections: PolicySection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "This page describes how shipping and returns are intended to work at Aangan. It is sample policy copy for a design prototype, not a live commercial policy.",
      "No payment is processed on this site and no order is placed. The practical details below should be reviewed and finalised with a fulfilment partner before launch.",
    ],
    note: (
      <Notice title="Prototype policy" tone="quiet">
        <p>
          Delivery windows, return windows and charges shown here are illustrative.
          They are not a promise of service.
        </p>
      </Notice>
    ),
  },
  {
    id: "dispatch",
    title: "Dispatch",
    paragraphs: [
      "Pieces are made in small batches. Once a fulfilment service is connected, each product page and the checkout will show the dispatch timing that applies to the piece you have chosen.",
      "Because knitwear may be made to order, dispatch timing can vary by piece. Any timing shown before launch should be treated as indicative.",
    ],
  },
  {
    id: "delivery",
    title: "Delivery within India",
    paragraphs: [
      "The current design is set up for delivery within India. The PIN checker on product pages shows an indicative delivery window based on the first digit of your PIN code; it is an estimate, not a guarantee.",
      "International delivery is not configured in this prototype. If you are outside India and would like to enquire, write to the studio and we will keep you informed when it becomes available.",
    ],
    bullets: [
      "Delivery estimates are indicative and depend on your location and the fulfilment method.",
      "Final shipping charges and taxes will be shown at checkout once a commerce backend is connected.",
      "No delivery charge is calculated in this prototype.",
    ],
  },
  {
    id: "returns",
    title: "Returns & exchanges",
    paragraphs: [
      "The intended policy is that unworn, unused garments in their original condition, with tags attached, may be returned within 14 days of delivery. This window is a sample and should be confirmed with the fulfilment partner.",
      "Made-to-order or personalised pieces are not eligible for return unless faulty. Return shipping is intended to be the customer's responsibility unless the item is faulty or incorrect.",
    ],
    bullets: [
      "Contact the studio before returning anything, so the return can be tracked.",
      "Pieces must be unworn, unwashed and in their original condition with tags attached.",
      "Refunds, where applicable, would be issued to the original payment method after inspection.",
    ],
  },
  {
    id: "faulty",
    title: "Faulty or incorrect pieces",
    paragraphs: [
      "If a piece arrives faulty or is not what you ordered, contact the studio with your order details and a photograph. This prototype does not have a live order system, so the process below is a description of intent rather than a working service.",
      "Handmade and small-batch garments can vary slightly in texture, tone and finish. These variations are part of the character of the piece, not a defect.",
    ],
  },
  {
    id: "care",
    title: "Care & longevity",
    paragraphs: [
      "Wool is a durable fibre when it is cared for simply. Wash less than you think, use cool water and a gentle wool detergent, dry flat in the shade, and store folded rather than hanging.",
      "Our care guide in the Journal explains the full process. If you are unsure about a stain or a repair, write to us before treating the garment.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For a question about shipping, a return or the prototype itself, write to the studio. Email is the most reliable route while the site is in development.",
    ],
  },
];

export function ShippingReturnsPage() {
  return (
    <>
      <Seo
        title="Shipping & Returns — Aangan"
        description="Sample shipping and returns information for the Aangan prototype."
        canonical="/shipping-returns"
      />
      <PolicyLayout
        eyebrow="Care"
        title="Shipping & returns"
        crumb="Shipping & returns"
        intro="How delivery, returns and care are intended to work at Aangan. Sample policy copy for a design prototype."
        updated="Sample policy · Last updated 28 October 2026"
        sections={sections}
        aside={
          <div className="border border-line bg-cream/40 p-4">
            <p className="eyebrow-sm text-espresso/45">Quick links</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/faq" className="text-sm text-espresso/65 transition-colors hover:text-forest">
                Read the FAQ
              </Link>
              <Link to="/size-guide" className="text-sm text-espresso/65 transition-colors hover:text-forest">
                Size guide
              </Link>
              <Link to="/contact" className="text-sm text-espresso/65 transition-colors hover:text-forest">
                Contact the house
              </Link>
            </div>
          </div>
        }
      />
    </>
  );
}
