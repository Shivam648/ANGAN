import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { cn } from "../../lib/cn";

type NoticeProps = {
  title?: string;
  children: ReactNode;
  tone?: "default" | "quiet";
  className?: string;
};

export function Notice({
  title,
  children,
  tone = "default",
  className,
}: NoticeProps) {
  return (
    <div
      className={cn(
        "flex gap-3 border p-4 text-sm leading-relaxed sm:p-5",
        tone === "default"
          ? "border-gold/40 bg-cream/60 text-espresso/75"
          : "border-line bg-transparent text-espresso/65",
        className,
      )}
    >
      <Info
        size={16}
        strokeWidth={1.2}
        aria-hidden="true"
        className="mt-0.5 flex-none text-gold"
      />
      <div>
        {title ? (
          <p className="mb-1 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-forest">
            {title}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}
