import { Minus, Plus } from "lucide-react";

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
};

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
  label = "Quantity",
}: QuantityStepperProps) {
  return (
    <div className="qty-stepper" role="group" aria-label={label}>
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus size={13} strokeWidth={1.4} aria-hidden="true" />
      </button>
      <span aria-live="polite" aria-atomic="true">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus size={13} strokeWidth={1.4} aria-hidden="true" />
      </button>
    </div>
  );
}
