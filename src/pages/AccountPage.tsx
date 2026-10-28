import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  MapPin,
  Package,
  User,
} from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { Notice } from "../components/ui/Notice";
import { useWishlist } from "../context/WishlistContext";
import { isValidEmail } from "../lib/commerce";
import { Seo } from "../lib/seo";
import { cn } from "../lib/cn";

type Mode = "signin" | "create";

export function AccountPage() {
  const { count } = useWishlist();
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    if (mode === "create" && name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Please enter at least 6 characters.");
      return;
    }
    setError("");
    setStatus(
      "Accounts are not connected in this prototype. No credentials have been stored or sent.",
    );
  };

  return (
    <>
      <Seo
        title="Your Account — Aangan"
        description="Account access for Aangan. This is a design prototype; accounts are not connected."
        canonical="/account"
        noindex
      />

      <PageHeader
        eyebrow="The House"
        title="Your account"
        crumb="Account"
        intro={
          <p>
            A place for orders, addresses and saved pieces. In this prototype, the
            account area shows the intended structure without storing any
            credentials.
          </p>
        }
      />

      <div className="container-editorial py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="border border-line bg-cream/40 p-6 sm:p-8">
              <div className="flex gap-5 border-b border-line">
                {(
                  [
                    { value: "signin", label: "Sign in" },
                    { value: "create", label: "Create account" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => {
                      setMode(tab.value);
                      setError("");
                      setStatus("");
                    }}
                    aria-pressed={mode === tab.value}
                    className={cn(
                      "-mb-px border-b py-3 text-[0.625rem] font-medium uppercase tracking-[0.16em] transition-colors",
                      mode === tab.value
                        ? "border-forest text-forest"
                        : "border-transparent text-espresso/45 hover:text-forest",
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <form onSubmit={onSubmit} noValidate className="mt-6">
                <div className="grid gap-5">
                  {mode === "create" ? (
                    <div>
                      <label htmlFor="account-name" className="field-label">
                        Full name
                      </label>
                      <input
                        id="account-name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="field-input"
                        placeholder="Your name"
                      />
                    </div>
                  ) : null}

                  <div>
                    <label htmlFor="account-email" className="field-label">
                      Email address
                    </label>
                    <input
                      id="account-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "account-error" : undefined}
                      className="field-input"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="account-password" className="field-label">
                      Password
                    </label>
                    <input
                      id="account-password"
                      name="password"
                      type="password"
                      autoComplete={
                        mode === "create" ? "new-password" : "current-password"
                      }
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "account-error" : undefined}
                      className="field-input"
                      placeholder="At least 6 characters"
                    />
                    {error ? (
                      <p id="account-error" role="alert" className="field-error">
                        {error}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-7">
                  {mode === "create" ? "Create account" : "Sign in"}
                  <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
                </button>
              </form>

              {status ? (
                <div role="status" className="mt-5">
                  <Notice title="Prototype account">{status}</Notice>
                </div>
              ) : null}

              <p className="mt-5 text-[0.625rem] leading-relaxed text-espresso/45">
                This form does not create an account, send an email or store your
                password. Connect an authentication provider before launch.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-line">
              <div className="flex items-start gap-4 border-b border-line py-6">
                <Package
                  size={18}
                  strokeWidth={1.1}
                  aria-hidden="true"
                  className="mt-1 flex-none text-gold"
                />
                <div>
                  <h2 className="font-display text-xl">Orders</h2>
                  <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                    No orders yet. Once a commerce backend is connected, past and
                    current orders will appear here.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-line py-6">
                <MapPin
                  size={18}
                  strokeWidth={1.1}
                  aria-hidden="true"
                  className="mt-1 flex-none text-gold"
                />
                <div>
                  <h2 className="font-display text-xl">Addresses</h2>
                  <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                    Saved delivery addresses will live here. This prototype does
                    not store address details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-line py-6">
                <Heart
                  size={18}
                  strokeWidth={1.1}
                  aria-hidden="true"
                  className="mt-1 flex-none text-gold"
                />
                <div>
                  <h2 className="font-display text-xl">Wishlist</h2>
                  <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                    {count > 0
                      ? `${count} ${count === 1 ? "piece" : "pieces"} saved in this browser.`
                      : "Nothing saved yet. Pieces you keep will appear here."}
                  </p>
                  <Link to="/wishlist" className="link-line mt-3 text-espresso/60">
                    View wishlist
                    <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 py-6">
                <User
                  size={18}
                  strokeWidth={1.1}
                  aria-hidden="true"
                  className="mt-1 flex-none text-gold"
                />
                <div>
                  <h2 className="font-display text-xl">A slower relationship</h2>
                  <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                    An account should be useful, not noisy. We intend to use it
                    for order history, care reminders and the occasional letter —
                    never for clutter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
