export function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center gap-5"
      role="status"
      aria-live="polite"
    >
      <span className="spinner text-forest" aria-hidden="true" />
      <p className="text-[0.625rem] uppercase tracking-[0.24em] text-espresso/70">
        Aangan
      </p>
      <span className="sr-only">Loading page</span>
    </div>
  );
}
