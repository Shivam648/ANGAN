import { useId, type CSSProperties } from "react";
import type { ColorOption } from "../../lib/types";

type ColorSwatchesProps = {
  colors: ColorOption[];
  selected: string;
  onChange: (name: string) => void;
  size?: "sm" | "lg";
  showLabel?: boolean;
};

export function ColorSwatches({
  colors,
  selected,
  onChange,
  size = "lg",
  showLabel = true,
}: ColorSwatchesProps) {
  const name = useId();

  return (
    <fieldset>
      {showLabel ? (
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <legend className="field-label mb-0">Colour</legend>
          <span className="text-xs text-espresso/65">{selected}</span>
        </div>
      ) : (
        <legend className="sr-only">Colour</legend>
      )}
      <div className="flex flex-wrap items-center gap-1.5">
        {colors.map((color) => (
          <label
            key={color.name}
            className="cursor-pointer"
            title={color.name}
          >
            <input
              type="radio"
              name={name}
              value={color.name}
              checked={selected === color.name}
              onChange={() => onChange(color.name)}
              className="peer sr-only"
            />
            <span
              className={`swatch ${size === "lg" ? "swatch-lg" : ""} peer-checked:border-forest peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-forest`}
              style={{ "--swatch-color": color.hex } as CSSProperties}
            >
              <span className="sr-only">{color.name}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
