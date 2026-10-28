import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../../lib/cn";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center border border-forest/20 bg-ivory/90 text-forest shadow-sm backdrop-blur transition-all duration-500 hover:bg-forest hover:text-ivory",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp size={16} strokeWidth={1.2} aria-hidden="true" />
    </button>
  );
}
