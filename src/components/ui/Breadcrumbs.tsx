import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-[0.625rem] uppercase tracking-[0.18em]",
          light ? "text-ivory/55" : "text-espresso/60",
        )}
      >
        <li>
          <Link
            to="/"
            className={cn(
              "transition-colors",
              light ? "hover:text-ivory" : "hover:text-forest",
            )}
          >
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight
              size={11}
              strokeWidth={1.2}
              aria-hidden="true"
              className={light ? "text-ivory/30" : "text-espresso/35"}
            />
            {item.href ? (
              <Link
                to={item.href}
                className={cn(
                  "transition-colors",
                  light ? "hover:text-ivory" : "hover:text-forest",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={light ? "text-ivory/80" : "text-forest"}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
