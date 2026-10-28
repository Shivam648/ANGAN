import { cn } from "../../lib/cn";

type MotifProps = {
  variant: "arch" | "lotus" | "stitch" | "mithila";
  className?: string;
};

export function Motif({ variant, className }: MotifProps) {
  if (variant === "arch") {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        aria-hidden="true"
        className={cn("h-16 w-16", className)}
      >
        <rect x="6" y="6" width="68" height="68" />
        <path d="M24 68V38c0-8.8 7.2-16 16-16s16 7.2 16 16v30" />
        <path d="M18 68h44" />
        <circle cx="40" cy="45" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (variant === "lotus") {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        aria-hidden="true"
        className={cn("h-16 w-16", className)}
      >
        <path d="M40 62c-13 0-23-7-28-17 7-2 13-1 18 2-3-9-1-17 4-23 5 6 7 14 4 23 5-3 11-4 18-2-5 10-15 17-28 17Z" />
        <path d="M40 62V44" />
        <path d="M20 68h40" />
        <circle cx="40" cy="37" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (variant === "mithila") {
    // Abstract Mithila-inspired lotus and line work. Decorative, not a reproduction.
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        aria-hidden="true"
        className={cn("h-16 w-16", className)}
      >
        <path d="M8 45c7-8 14-8 21 0s14 8 21 0 14-8 22 0" />
        <path d="M14 54c6-6 12-6 18 0 6-6 12-6 18 0" />
        <path d="M40 16c-5 6-5 13 0 19 5-6 5-13 0-19Z" />
        <path d="M28 24c-3 6 0 12 7 15 1-7-1-12-7-15Z" />
        <path d="M52 24c3 6 0 12-7 15-1-7 1-12 7-15Z" />
        <path d="M22 66h36" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      aria-hidden="true"
      className={cn("h-16 w-16", className)}
    >
      <path d="M8 30c8-10 16-10 24 0s16 10 24 0 16-10 24 0" />
      <path d="M8 44c8-10 16-10 24 0s16 10 24 0 16-10 24 0" />
      <path d="M8 58c8-10 16-10 24 0s16 10 24 0 16-10 24 0" />
    </svg>
  );
}
