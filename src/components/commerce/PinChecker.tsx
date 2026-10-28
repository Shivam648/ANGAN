import { useId, useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, MapPin } from "lucide-react";
import { getDeliveryEstimate, type DeliveryEstimate } from "../../lib/commerce";

export function PinChecker() {
  const id = useId();
  const [pin, setPin] = useState("");
  const [estimate, setEstimate] = useState<DeliveryEstimate | null>(null);
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = getDeliveryEstimate(pin);
    if (!result) {
      setEstimate(null);
      setError("Please enter a valid 6-digit Indian PIN code.");
      return;
    }
    setError("");
    setEstimate(result);
  };

  return (
    <div className="border border-line p-5">
      <div className="flex items-center gap-2">
        <MapPin size={14} strokeWidth={1.2} aria-hidden="true" />
        <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em]">
          Delivery estimate
        </h3>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-espresso/60">
        Enter your PIN code to see an indicative delivery window.
      </p>
      <form onSubmit={onSubmit} className="mt-4" noValidate>
        <label htmlFor={id} className="sr-only">
          PIN code
        </label>
        <div className="flex items-center gap-3 border-b border-line pb-2">
          <input
            id={id}
            name="pin"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={6}
            placeholder="6-digit PIN code"
            value={pin}
            onChange={(event) => {
              setPin(event.target.value.replace(/[^0-9]/g, "").slice(0, 6));
              if (error) setError("");
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : `${id}-hint`}
            className="min-w-0 flex-1 border-0 bg-transparent py-1 text-sm tracking-[0.12em] outline-none placeholder:tracking-normal placeholder:text-espresso/40"
          />
          <button
            type="submit"
            className="group flex flex-none items-center gap-1.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-forest"
          >
            Check
            <ArrowRight
              size={13}
              strokeWidth={1.2}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>
        {error ? (
          <p
            id={`${id}-error`}
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-xs text-burgundy"
          >
            <AlertCircle size={12} aria-hidden="true" />
            {error}
          </p>
        ) : (
          <p id={`${id}-hint`} className="sr-only">
            Delivery estimates are indicative only.
          </p>
        )}
      </form>

      {estimate ? (
        <div className="mt-4 border-t border-line pt-4" role="status">
          <p className="text-[0.6875rem] uppercase tracking-[0.14em] text-espresso/50">
            {estimate.zone} · {estimate.pin}
          </p>
          <p className="mt-1 text-sm text-espresso">
            Estimated delivery in{" "}
            <span className="font-medium text-forest">
              {estimate.minDays}–{estimate.maxDays} working days
            </span>
          </p>
          <p className="mt-1 text-[0.625rem] leading-relaxed text-espresso/45">
            Estimate only. Dispatch timing is confirmed at checkout.
          </p>
        </div>
      ) : null}
    </div>
  );
}
