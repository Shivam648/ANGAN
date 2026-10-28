import { PolicyLayout, type PolicySection } from "../components/layout/PolicyLayout";
import { Notice } from "../components/ui/Notice";
import { Seo } from "../lib/seo";

const sections: PolicySection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "These terms describe the use of the Aangan prototype. They are sample copy, not legal advice, and should be reviewed by a qualified adviser before a real store launches.",
      "By using this site, you accept that it is a design demonstration. No payment is processed, no order is placed, and no commercial relationship is created.",
    ],
  },
  {
    id: "prototype",
    title: "The prototype",
    paragraphs: [
      "Aangan is a front-end design prototype for an heirloom knitwear house. Product names, descriptions, prices, measurements and policies are sample content.",
      "The checkout and account areas are built to show where a commerce backend, authentication provider and payment provider would connect. They do not perform those functions.",
    ],
    note: (
      <Notice title="No real orders" tone="quiet">
        <p>
          Nothing on this site constitutes an offer for sale. No payment is
          collected and no order is created.
        </p>
      </Notice>
    ),
  },
  {
    id: "use",
    title: "Use of the site",
    paragraphs: [
      "You may browse the site for personal, non-commercial purposes. You may not attempt to disrupt the site, access it in an unauthorised way, or use its content to mislead others.",
      "The site is provided as-is for demonstration. Features may change or be removed without notice.",
    ],
  },
  {
    id: "products",
    title: "Product information & pricing",
    paragraphs: [
      "Product descriptions, compositions, measurements, colours and prices are sample data. They should not be relied on as accurate specifications for a real garment.",
      "Photography is placeholder imagery used to demonstrate the design direction. Colours may appear differently on different screens. Handmade and small-batch garments can vary in texture and finish.",
      "All prices are shown in Indian Rupees (INR) for demonstration only. Shipping and taxes are not calculated in this prototype.",
    ],
  },
  {
    id: "orders",
    title: "Orders & payment",
    paragraphs: [
      "No payment is processed on this site. No card details are collected. The checkout stops before any payment step, and no order confirmation is created.",
      "When a live store is launched, separate terms covering orders, payment, delivery, cancellation and returns will apply.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    paragraphs: [
      "The Aangan name, wordmark, visual identity and site design are presented as part of this prototype. Placeholder photography remains the property of its original photographers and is used under the applicable Pexels licence.",
      "You may not reproduce the site design or content for commercial use without permission.",
    ],
  },
  {
    id: "submissions",
    title: "Messages & submissions",
    paragraphs: [
      "The contact form in this prototype does not send messages to a server. If you choose to open a message in your email app, that message is sent through your own email provider and is subject to its terms.",
      "Do not send confidential information through the prototype forms.",
    ],
  },
  {
    id: "liability",
    title: "Disclaimers & liability",
    paragraphs: [
      "The site is provided for demonstration without warranties of any kind. To the extent permitted by law, Aangan is not liable for any loss arising from use of the prototype or reliance on its sample content.",
      "Nothing in these terms limits rights that cannot be limited under applicable law.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These sample terms are intended to be governed by the laws of India. A live store should confirm the appropriate jurisdiction and include a valid dispute-resolution process.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "These sample terms may change as the prototype develops. The date below records the version shown on this page.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For a question about these terms or the prototype, write to the studio. Email is the most reliable route while the site is in development.",
    ],
  },
];

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions — Aangan"
        description="Sample terms and conditions for the Aangan design prototype."
        canonical="/terms"
      />
      <PolicyLayout
        eyebrow="Legal"
        title="Terms & conditions"
        crumb="Terms & conditions"
        intro="The terms of use for this design prototype. Sample copy, not legal advice."
        updated="Sample policy · Last updated 28 October 2026"
        sections={sections}
        aside={
          <Notice title="In short" tone="quiet">
            <p>
              This is a design prototype. No payment is processed and no order is
              placed. Product information is sample content.
            </p>
          </Notice>
        }
      />
    </>
  );
}
