import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Breadcrumbs } from "../ui/Breadcrumbs";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumb?: string;
  children?: ReactNode;
  className?: string;
  align?: "split" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
  children,
  className,
  align = "split",
}: PageHeaderProps) {
  return (
    <header className={cn("border-b border-line bg-cream/40", className)}>
      <div className="container-editorial py-12 sm:py-16 lg:py-20">
        {crumb ? <Breadcrumbs items={[{ label: crumb }]} /> : null}

        <div
          className={cn(
            "mt-8",
            align === "split"
              ? "grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10"
              : "mx-auto max-w-3xl text-center",
          )}
        >
          <div className={align === "split" ? "lg:col-span-7" : undefined}>
            <p
              className={cn(
                "eyebrow flex items-center gap-3 text-espresso/50",
                align === "center" && "justify-center",
              )}
            >
              <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="display-lg mt-5">{title}</h1>
          </div>

          {intro ? (
            <div
              className={cn(
                align === "split" ? "lg:col-span-4 lg:col-start-9" : "mt-6",
              )}
            >
              <div className="lead text-[0.9375rem] leading-relaxed text-espresso/70">
                {intro}
              </div>
              {children ? <div className="mt-6">{children}</div> : null}
            </div>
          ) : children ? (
            <div
              className={cn(
                align === "split" ? "lg:col-span-4 lg:col-start-9" : "mt-6",
              )}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
