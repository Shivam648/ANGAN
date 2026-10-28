import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { JournalArticle } from "../../lib/types";
import { cn } from "../../lib/cn";
import { Picture } from "../ui/Picture";

type JournalCardProps = {
  article: JournalArticle;
  variant?: "large" | "default";
  imageAspect?: string;
  className?: string;
};

export function JournalCard({
  article,
  variant = "default",
  imageAspect,
  className,
}: JournalCardProps) {
  const isLarge = variant === "large";

  return (
    <article
      className={cn(
        "group",
        !isLarge && "flex h-full flex-col",
        className,
      )}
    >
      <Link
        to={`/journal/${article.slug}`}
        className={cn(
          "focus-visible:outline-offset-4",
          isLarge ? "block" : "flex h-full flex-col",
        )}
        aria-label={`Read ${article.title}`}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-oatmeal",
            imageAspect ?? (isLarge ? "aspect-[16/10]" : "aspect-[4/3]"),
          )}
        >
          <Picture
            image={article.image}
            sizes={isLarge ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        </div>
        <div
          className={cn(
            "pt-5",
            !isLarge && "flex flex-1 flex-col",
            isLarge && "sm:pt-6",
          )}
        >
          <p className="text-[0.5938rem] uppercase tracking-[0.2em] text-espresso/45">
            {article.category} · {article.readTime}
          </p>
          <h3
            className={cn(
              "mt-2 font-display leading-[1.03]",
              isLarge ? "display-md" : "text-[1.7rem] sm:text-[1.9rem]",
            )}
          >
            {article.title}
          </h3>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-espresso/65",
              isLarge ? "max-w-2xl" : "",
            )}
          >
            {article.excerpt}
          </p>
          <span
            className={cn(
              "link-line text-forest/75",
              isLarge ? "mt-5" : "mt-auto pt-5",
            )}
          >
            Read story
            <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
