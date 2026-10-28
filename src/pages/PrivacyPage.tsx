import { PolicyLayout, type PolicySection } from "../components/layout/PolicyLayout";
import { Notice } from "../components/ui/Notice";
import { Seo } from "../lib/seo";

const sections: PolicySection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "This privacy page describes how the Aangan prototype handles information. It is sample copy, not legal advice, and should be reviewed by a qualified adviser before a real store launches.",
      "Aangan is a design prototype. The site does not process payments, create orders, or send form submissions to a server.",
    ],
  },
  {
    id: "information",
    title: "Information we collect",
    paragraphs: [
      "In this prototype, the only information stored is what you choose to keep in your own browser: your bag, your wishlist, and a newsletter email address if you enter one. This information stays on your device.",
      "The contact and checkout forms are not connected to a backend. Details entered there are not transmitted or stored by Aangan.",
    ],
  },
  {
    id: "use",
    title: "How information is used",
    paragraphs: [
      "A bag and wishlist are stored locally so that your selection is still there when you return to the site in the same browser. A newsletter email address entered in this prototype is stored locally and is not sent anywhere.",
      "When a real newsletter and commerce service are connected, this policy will be updated to explain what is collected, why, how long it is kept, and who processes it.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & local storage",
    paragraphs: [
      "This prototype does not use advertising or analytics trackers. It uses browser local storage for the bag and wishlist, and for a newsletter email address if you enter one.",
      "You can clear this information at any time by clearing site data in your browser. Clearing site data will remove your saved bag and wishlist from that browser.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing",
    paragraphs: [
      "Because this prototype does not transmit the information described above, it does not share it with third parties. A live store would need to disclose its hosting, analytics, payment and fulfilment providers here.",
    ],
  },
  {
    id: "choices",
    title: "Your choices",
    paragraphs: [
      "You can browse the site without creating an account. You can remove items from the bag or wishlist, clear the wishlist, and clear site data in your browser at any time.",
      "If you have questions about privacy, write to the studio and we will do our best to help.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "The site is intended for a general audience and is not directed at children. A live store should set an appropriate minimum age and a process for handling any data relating to children.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "This sample policy may change as the prototype develops. The date below records the version shown on this page.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For a privacy question about this prototype, write to the studio. Email is the most reliable route while the site is in development.",
    ],
  },
];

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy — Aangan"
        description="Sample privacy information for the Aangan design prototype."
        canonical="/privacy"
      />
      <PolicyLayout
        eyebrow="Legal"
        title="Privacy policy"
        crumb="Privacy policy"
        intro="How this prototype handles information. Sample copy for a design prototype, not legal advice."
        updated="Sample policy · Last updated 28 October 2026"
        sections={sections}
        aside={
          <Notice title="In short" tone="quiet">
            <p>
              Your bag and wishlist stay in this browser. Forms are not connected.
              No payment is processed.
            </p>
          </Notice>
        }
      />
    </>
  );
}
