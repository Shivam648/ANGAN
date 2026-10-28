import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Link2 } from "lucide-react";
import { ArticleBody } from "../components/journal/ArticleBody";
import { JournalCard } from "../components/journal/JournalCard";
import { NewsletterSection } from "../components/home/NewsletterSection";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { EmptyState } from "../components/ui/EmptyState";
import { Picture } from "../components/ui/Picture";
import { useToast } from "../context/ToastContext";
import { articleBySlug, journal } from "../data/journal";
import { site } from "../data/site";
import { Seo } from "../lib/seo";

export function JournalArticlePage() {
  const { slug } = useParams();
  const article = slug ? articleBySlug(slug) : undefined;
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <>
        <Seo
          title="Story not found — Aangan"
          description="This journal story could not be found."
          noindex
        />
        <div className="container-editorial py-20 sm:py-28">
          <EmptyState
            title="This story is not here."
            copy="The page may have moved, or the story may not have been published. Return to the Journal to keep reading."
            action={
              <Link to="/journal" className="btn btn-primary btn-sm">
                Back to the Journal
              </Link>
            }
          />
        </div>
      </>
    );
  }

  const related = journal
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: { "@type": "Organization", name: "Aangan" },
    publisher: {
      "@type": "Organization",
      name: "Aangan",
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/og-cover.png`,
      },
    },
    image: [`${site.url}/images/${article.image.name}-1200.webp`],
    mainEntityOfPage: `${site.url}/journal/${article.slug}`,
    articleSection: article.category,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast("Link copied to your clipboard.", "success");
    } catch {
      toast("The link could not be copied in this browser.", "error");
    }
  };

  return (
    <>
      <Seo
        title={`${article.title} — Aangan Journal`}
        description={article.excerpt}
        canonical={`/journal/${article.slug}`}
        type="article"
        image={`/images/${article.image.name}-1200.webp`}
        jsonLd={jsonLd}
      />

      <article>
        <header className="container-narrow pb-10 pt-10 sm:pb-14 sm:pt-14">
          <Breadcrumbs
            items={[
              { label: "Journal", href: "/journal" },
              { label: article.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.625rem] uppercase tracking-[0.18em] text-espresso/45">
            <span className="text-forest">{article.category}</span>
            <span aria-hidden="true" className="h-px w-5 bg-line" />
            <time>{article.date}</time>
            <span aria-hidden="true" className="h-px w-5 bg-line" />
            <span>{article.readTime}</span>
          </div>
          <h1 className="display-lg mt-5">{article.title}</h1>
          <p className="lead mt-6 max-w-2xl">{article.intro}</p>
          <p className="mt-6 text-[0.625rem] uppercase tracking-[0.18em] text-espresso/40">
            Words · The Aangan Journal
          </p>
        </header>

        <div className="container-editorial">
          <div className="relative aspect-[16/10] overflow-hidden bg-oatmeal sm:aspect-[2/1]">
            <Picture
              image={article.image}
              sizes="(min-width: 1500px) 1400px, 100vw"
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="container-narrow py-12 sm:py-16">
          <ArticleBody blocks={article.body} />

          <div className="mt-14 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/journal" className="link-line text-espresso/60">
              <ArrowLeft size={13} strokeWidth={1.2} aria-hidden="true" />
              Back to the Journal
            </Link>
            <button
              type="button"
              onClick={copyLink}
              className="link-line self-start text-espresso/60 sm:self-auto"
            >
              {copied ? (
                <Check size={13} strokeWidth={1.4} aria-hidden="true" />
              ) : (
                <Link2 size={13} strokeWidth={1.2} aria-hidden="true" />
              )}
              {copied ? "Link copied" : "Copy link"}
            </button>
          </div>
        </div>
      </article>

      <section className="section-sm border-t border-line bg-cream/50">
        <div className="container-editorial">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-sm text-espresso/45">Keep reading</p>
              <h2 className="display-sm mt-2">More from the Journal.</h2>
            </div>
            <Link to="/journal" className="link-line self-start sm:self-end">
              All stories
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <JournalCard key={item.slug} article={item} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
