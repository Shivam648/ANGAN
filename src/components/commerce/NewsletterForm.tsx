import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "../../lib/cn";
import { isValidEmail } from "../../lib/commerce";

type NewsletterFormProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function NewsletterForm({
  variant = "dark",
  className,
}: NewsletterFormProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    try {
      localStorage.setItem("aangan-newsletter", email.trim());
    } catch {
      // Storage may be unavailable; the confirmation still works for this visit.
    }
    setStatus("success");
    setMessage("Thank you. Your address is saved in this browser for the prototype.");
    setEmail("");
  };

  const isDark = variant === "dark";

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)} noValidate>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div
        className={cn(
          "flex items-center gap-3 border-b pb-2",
          isDark ? "border-ivory/30" : "border-line",
        )}
      >
        <input
          id={id}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
          }}
          aria-invalid={status === "error"}
          aria-describedby={message ? `${id}-message` : undefined}
          className={cn(
            "min-w-0 flex-1 border-0 bg-transparent py-2 text-sm outline-none",
            isDark
              ? "text-ivory placeholder:text-ivory/45"
              : "text-charcoal placeholder:text-espresso/40",
          )}
        />
        <button
          type="submit"
          className={cn(
            "group flex flex-none items-center gap-2 pb-1 text-[0.625rem] font-medium uppercase tracking-[0.2em] transition-colors",
            isDark ? "text-ivory/80 hover:text-ivory" : "text-forest",
          )}
        >
          Subscribe
          <ArrowRight
            size={14}
            strokeWidth={1.2}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
      {message ? (
        <p
          id={`${id}-message`}
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "mt-2 flex items-center gap-1.5 text-xs",
            status === "error"
              ? "text-burgundy"
              : isDark
                ? "text-ivory/70"
                : "text-forest/70",
          )}
        >
          {status === "success" ? (
            <Check size={13} aria-hidden="true" />
          ) : null}
          {message}
        </p>
      ) : null}
    </form>
  );
}
