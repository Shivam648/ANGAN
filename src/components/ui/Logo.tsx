import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";
import { site } from "../../data/site";

type LogoProps = {
  className?: string;
  wordmarkClassName?: string;
  showTagline?: boolean;
  light?: boolean;
  to?: string;
};

export function Logo({
  className,
  wordmarkClassName,
  showTagline = true,
  light = false,
  to = "/",
}: LogoProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3",
        light ? "text-ivory" : "text-forest",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex h-8 w-8 flex-none items-center justify-center border transition-colors duration-500",
          light
            ? "border-ivory/35 group-hover:border-gold"
            : "border-forest/30 group-hover:border-gold",
        )}
      >
        <svg
          viewBox="0 0 40 40"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        >
          <path d="M12 31V17c0-4.4 3.6-8 8-8s8 3.6 8 8v14" />
          <path d="M8 31h24" />
          <circle cx="20" cy="22" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[1.55rem] leading-none tracking-[0.2em]",
            wordmarkClassName,
          )}
        >
          {site.wordmark}
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 text-[0.5rem] font-medium uppercase tracking-[0.28em]",
              light ? "text-ivory/55" : "text-espresso/55",
            )}
          >
            Magadh · Bihar
          </span>
        ) : null}
      </span>
      <span className="sr-only">Home</span>
    </Link>
  );
}
