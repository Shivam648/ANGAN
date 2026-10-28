import { Hero } from "../components/home/Hero";
import { ValuesStrip } from "../components/home/ValuesStrip";
import { BrandIntro } from "../components/home/BrandIntro";
import { FeaturedCollection } from "../components/home/FeaturedCollection";
import { HeritageSection } from "../components/home/HeritageSection";
import { CraftSection } from "../components/home/CraftSection";
import { SignatureBanner } from "../components/home/SignatureBanner";
import { Philosophy } from "../components/home/Philosophy";
import { JournalPreview } from "../components/home/JournalPreview";
import { NewsletterSection } from "../components/home/NewsletterSection";
import { Seo } from "../lib/seo";
import { site } from "../data/site";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aangan",
    url: site.url,
    description: site.description,
    email: site.email,
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aangan",
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
];

export function HomePage() {
  return (
    <>
      <Seo
        title="Aangan — Handcrafted Knitwear from Magadh, Bihar"
        description={site.description}
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <ValuesStrip />
      <BrandIntro />
      <FeaturedCollection />
      <HeritageSection />
      <CraftSection />
      <SignatureBanner />
      <Philosophy />
      <JournalPreview />
      <NewsletterSection />
    </>
  );
}
