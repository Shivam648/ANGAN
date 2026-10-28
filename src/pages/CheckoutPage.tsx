import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { EmptyState } from "../components/ui/EmptyState";
import { Notice } from "../components/ui/Notice";
import { Picture } from "../components/ui/Picture";
import { useCart } from "../context/CartContext";
import { indianStates } from "../data/site";
import { isValidEmail, isValidPhone } from "../lib/commerce";
import { formatINR } from "../lib/currency";
import { Seo } from "../lib/seo";
import { cn } from "../lib/cn";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  notes: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pin: "",
  notes: "",
};

type FieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  maxLength?: number;
  hint?: string;
  className?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
  inputMode,
  maxLength,
  hint,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className="field-input"
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="field-error flex items-center gap-1.5">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="field-hint">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function FormSection({
  title,
  step,
  children,
}: {
  title: string;
  step: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line pt-7">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl">{title}</h2>
        <span className="text-[0.5625rem] uppercase tracking-[0.18em] text-espresso/35">
          {step}
        </span>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function CheckoutPage() {
  const { lineItems, itemCount, subtotal } = useCart();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 2) {
      next.fullName = "Please enter your full name.";
    }
    if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!isValidPhone(form.phone)) {
      next.phone = "Please enter a valid Indian mobile number.";
    }
    if (form.address.trim().length < 5) {
      next.address = "Please enter your street address.";
    }
    if (form.city.trim().length < 2) {
      next.city = "Please enter your city or town.";
    }
    if (!form.state) {
      next.state = "Please select a state.";
    }
    if (!/^[1-9][0-9]{5}$/.test(form.pin)) {
      next.pin = "Please enter a valid 6-digit PIN code.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    if (!validate()) return;
    setSubmitted(true);
    window.setTimeout(() => {
      document
        .getElementById("checkout-status")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 60);
  };

  return (
    <>
      <Seo
        title="Checkout — Aangan"
        description="Review your Aangan selection. This is a design prototype and no payment is processed."
        canonical="/checkout"
        noindex
      />

      <PageHeader
        eyebrow="Almost there"
        title="Checkout"
        crumb="Checkout"
        intro={
          <p>
            A prototype checkout for Aangan. You can review the flow, but no
            payment is processed and no order is placed.
          </p>
        }
      />

      <div className="container-editorial py-12 sm:py-16">
        {lineItems.length === 0 ? (
          <EmptyState
            title="There is nothing to check out."
            copy="Your bag is empty. Add a piece to the bag and return here to see the checkout layout."
            action={
              <Link to="/shop" className="btn btn-primary btn-sm">
                Explore the collection
              </Link>
            }
          />
        ) : (
          <>
            <Notice title="Prototype checkout" className="mb-10">
              <p>
                This page demonstrates the structure of a checkout. No payment is
                processed, no card details are collected, and no order is placed.
                Connect a commerce backend and payment provider before launch.
              </p>
            </Notice>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <form onSubmit={onSubmit} noValidate className="lg:col-span-7">
                <FormSection title="Contact" step="01">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="email"
                      label="Email address"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(value) => update("email", value)}
                      error={errors.email}
                    />
                    <Field
                      id="phone"
                      label="Mobile number"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(value) => update("phone", value)}
                      error={errors.phone}
                    />
                  </div>
                </FormSection>

                <FormSection title="Shipping address" step="02">
                  <div className="grid gap-5">
                    <Field
                      id="fullName"
                      label="Full name"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.fullName}
                      onChange={(value) => update("fullName", value)}
                      error={errors.fullName}
                    />
                    <Field
                      id="address"
                      label="Street address"
                      autoComplete="street-address"
                      placeholder="House, street, area"
                      value={form.address}
                      onChange={(value) => update("address", value)}
                      error={errors.address}
                    />
                    <div className="grid gap-5 sm:grid-cols-3">
                      <Field
                        id="city"
                        label="City or town"
                        autoComplete="address-level2"
                        value={form.city}
                        onChange={(value) => update("city", value)}
                        error={errors.city}
                      />
                      <div>
                        <label htmlFor="state" className="field-label">
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={form.state}
                          onChange={(event) => update("state", event.target.value)}
                          autoComplete="address-level1"
                          aria-invalid={Boolean(errors.state)}
                          aria-describedby={
                            errors.state ? "state-error" : undefined
                          }
                          className="field-input field-select"
                        >
                          <option value="">Select a state</option>
                          {indianStates.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        {errors.state ? (
                          <p
                            id="state-error"
                            role="alert"
                            className="field-error flex items-center gap-1.5"
                          >
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.state}
                          </p>
                        ) : null}
                      </div>
                      <Field
                        id="pin"
                        label="PIN code"
                        autoComplete="postal-code"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="800001"
                        value={form.pin}
                        onChange={(value) =>
                          update("pin", value.replace(/[^0-9]/g, "").slice(0, 6))
                        }
                        error={errors.pin}
                      />
                    </div>
                    <div>
                      <label htmlFor="notes" className="field-label">
                        Order notes <span className="normal-case tracking-normal text-espresso/40">(optional)</span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={form.notes}
                        onChange={(event) => update("notes", event.target.value)}
                        placeholder="Anything we should know?"
                        className="field-input resize-none"
                      />
                    </div>
                  </div>
                </FormSection>

                <FormSection title="Shipping method" step="03">
                  <div className="border border-line bg-cream/40 p-5">
                    <p className="text-sm text-espresso/70">
                      Shipping options and rates will appear here once a
                      fulfilment provider is connected. No shipping charge is
                      calculated in this prototype.
                    </p>
                  </div>
                </FormSection>

                <FormSection title="Payment" step="04">
                  <div className="border border-line bg-cream/40 p-5">
                    <div className="flex items-center gap-2 text-forest">
                      <Lock size={14} strokeWidth={1.3} aria-hidden="true" />
                      <p className="text-[0.625rem] font-medium uppercase tracking-[0.16em]">
                        Payment provider not connected
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-espresso/70">
                      No payment is processed on this site. No card details are
                      collected. A secure payment step will be connected here
                      before the store goes live.
                    </p>
                  </div>
                </FormSection>

                {submitted ? (
                  <div
                    id="checkout-status"
                    role="alert"
                    className="mt-8 border border-burgundy/30 bg-burgundy/5 p-5"
                  >
                    <p className="text-[0.625rem] font-medium uppercase tracking-[0.18em] text-burgundy">
                      Checkout stops here
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-espresso/75">
                      Your details have not been sent anywhere, no payment has
                      been processed, and no order has been placed. This is the
                      point at which a commerce backend and payment provider would
                      take over.
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-espresso/55">
                      See the{" "}
                      <Link to="/order-confirmation" className="underline underline-offset-4">
                        order confirmation page
                      </Link>{" "}
                      for an explanation of the final step.
                    </p>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Link to="/bag" className="link-line self-start">
                    <ArrowLeft size={13} strokeWidth={1.2} aria-hidden="true" />
                    Back to bag
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Continue to payment
                    <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
                  </button>
                </div>

                <p className="mt-5 text-[0.625rem] leading-relaxed text-espresso/45">
                  By continuing you agree to our{" "}
                  <Link to="/terms" className="underline underline-offset-4">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="underline underline-offset-4">
                    privacy policy
                  </Link>
                  . This prototype does not store or transmit the details entered
                  above.
                </p>
              </form>

              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                  <div className="border border-line bg-cream/50 p-6 sm:p-7">
                    <h2 className="font-display text-2xl">Order summary</h2>
                    <ul className="mt-5 divide-y divide-line">
                      {lineItems.map((line) => (
                        <li key={line.key} className="flex gap-3 py-4 first:pt-0">
                          <Link
                            to={`/shop/${line.product.slug}`}
                            className="relative h-20 w-16 flex-none overflow-hidden bg-oatmeal"
                            aria-label={`View ${line.product.name}`}
                          >
                            <Picture
                              image={line.product.images[0]}
                              sizes="64px"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          </Link>
                          <div className="min-w-0 flex-1">
                            <p className="font-display text-[1.05rem] leading-tight">
                              {line.product.name}
                            </p>
                            <p className="mt-1 text-[0.625rem] uppercase tracking-[0.1em] text-espresso/50">
                              {line.color} · {line.size} · Qty {line.quantity}
                            </p>
                            <p className="mt-1 text-xs tabular-nums text-espresso/70">
                              {formatINR(line.product.price * line.quantity)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-espresso/65">
                          Subtotal{" "}
                          <span className="text-espresso/40">
                            ({itemCount} {itemCount === 1 ? "item" : "items"})
                          </span>
                        </dt>
                        <dd className="tabular-nums">{formatINR(subtotal)}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-espresso/65">Shipping</dt>
                        <dd className="text-[0.625rem] uppercase tracking-[0.1em] text-espresso/50">
                          Not calculated
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-espresso/65">Taxes</dt>
                        <dd className="text-[0.625rem] uppercase tracking-[0.1em] text-espresso/50">
                          Not calculated
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-5">
                      <span className="text-[0.6875rem] uppercase tracking-[0.18em]">
                        Sample total
                      </span>
                      <span className="font-display text-2xl tabular-nums">
                        {formatINR(subtotal)}
                      </span>
                    </div>

                    <p className="mt-4 text-[0.625rem] leading-relaxed text-espresso/45">
                      Sample prices in Indian Rupees. No payment is processed and
                      no order is placed.
                    </p>
                  </div>

                  <div className={cn("mt-5 border border-line p-5")}>
                    <p className="eyebrow-sm text-espresso/45">Need help?</p>
                    <p className="mt-2 text-xs leading-relaxed text-espresso/60">
                      Write to us if you have a question about sizing, materials
                      or an existing order.
                    </p>
                    <Link to="/contact" className="link-line mt-4 text-espresso/60">
                      Contact the house
                      <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </>
  );
}
