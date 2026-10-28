import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type EmptyStateProps = {
  title: string;
  copy: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ title, copy, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center border border-line px-6 py-16 text-center sm:py-24",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="mb-6 flex h-14 w-14 items-center justify-center border border-gold/50 text-gold"
      >
        <svg
          viewBox="0 0 40 40"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 31V17c0-4.4 3.6-8 8-8s8 3.6 8 8v14" />
          <path d="M8 31h24" />
        </svg>
      </span>
      <h2 className="display-sm max-w-md">{title}</h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-espresso/70">
        {copy}
      </p>
      {action ? <div className="mt-7">{action}</div> : null}
    </div>
  );
}
