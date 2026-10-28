import { useId } from "react";
import { cn } from "../../lib/cn";

type SizeSelectorProps = {
  sizes: string[];
  selected: string;
  onChange: (size: string) => void;
  onOpenGuide?: () => void;
  unavailable?: string[];
  className?: string;
};

export function SizeSelector({
  sizes,
  selected,
  onChange,
  onOpenGuide,
  unavailable = [],
  className,
}: SizeSelectorProps) {
  const name = useId();

  return (
    <fieldset className={className}>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <legend className="field-label mb-0">Size</legend>
        {onOpenGuide ? (
          <button
            type="button"
            onClick={onOpenGuide}
            className="text-[0.625rem] uppercase tracking-[0.16em] text-espresso/60 underline decoration-line underline-offset-4 transition-colors hover:text-forest"
          >
            Size guide
          </button>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const isUnavailable = unavailable.includes(size);
          return (
            <label
              key={size}
              className={cn("cursor-pointer", isUnavailable && "cursor-not-allowed")}
              title={isUnavailable ? `${size} — currently unavailable` : size}
            >
              <input
                type="radio"
                name={name}
                value={size}
                checked={selected === size}
                onChange={() => onChange(size)}
                disabled={isUnavailable}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "size-option peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest",
                  selected === size && "bg-forest text-ivory border-forest",
                  isUnavailable && "pointer-events-none opacity-30 line-through",
                )}
              >
                {size}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
