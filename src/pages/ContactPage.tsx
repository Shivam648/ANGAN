import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { Notice } from "../components/ui/Notice";
import { isValidEmail } from "../lib/commerce";
import { site } from "../data/site";
import { Seo } from "../lib/seo";

const subjects = [
  "General enquiry",
  "Sizing & fit",
  "An order",
  "Press & wholesale",
  "Something else",
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    if (!subject) next.subject = "Please choose a subject.";
    if (message.trim().length < 10) {
      next.message = "Please write a little more.";
    }
    setErrors(next);
    setReady(Object.keys(next).length === 0);
  };

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    subject || "Enquiry from the Aangan website",
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  )}`;

  return (
    <>
      <Seo
        title="Contact — Aangan"
        description="Write to Aangan about sizing, materials, an order, press or wholesale."
        canonical="/contact"
      />

      <PageHeader
        eyebrow="The House"
        title="Write to us."
        crumb="Contact"
        intro={
          <p>
            Questions about a piece, a material, sizing or the project itself are
            welcome. For this prototype, email is the most reliable route.
          </p>
        }
      />

      <div className="container-editorial py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="field-label">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="field-input"
                    placeholder="Your name"
                  />
                  {errors.name ? (
                    <p id="contact-name-error" role="alert" className="field-error">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="field-label">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    className="field-input"
                    placeholder="you@example.com"
                  />
                  {errors.email ? (
                    <p id="contact-email-error" role="alert" className="field-error">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="field-label">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "contact-subject-error" : undefined
                  }
                  className="field-input field-select"
                >
                  <option value="">Choose a subject</option>
                  {subjects.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.subject ? (
                  <p id="contact-subject-error" role="alert" className="field-error">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="field-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className="field-input resize-none"
                  placeholder="Tell us what you have in mind."
                />
                {errors.message ? (
                  <p id="contact-message-error" role="alert" className="field-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn btn-primary">
                  Prepare message
                  <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
                </button>
                <p className="text-[0.625rem] uppercase tracking-[0.14em] text-espresso/40">
                  This form does not send email
                </p>
              </div>
            </form>

            {ready ? (
              <div className="mt-8" role="status">
                <Notice title="Your message is ready">
                  <p>
                    This prototype form is not connected to a mail service, so
                    your message has not been sent. You can open it in your email
                    app, or write to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="underline underline-offset-4"
                    >
                      {site.email}
                    </a>{" "}
                    directly.
                  </p>
                  <a href={mailto} className="btn btn-outline btn-sm mt-4">
                    Open in email app
                    <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
                  </a>
                </Notice>
              </div>
            ) : null}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-line">
              <div className="flex items-start gap-4 border-b border-line py-6">
                <Mail
                  size={18}
                  strokeWidth={1.1}
                  aria-hidden="true"
                  className="mt-1 flex-none text-gold"
                />
                <div>
                  <h2 className="font-display text-xl">Email</h2>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block text-sm text-espresso/70 underline decoration-line underline-offset-4 transition-colors hover:text-forest"
                  >
                    {site.email}
                  </a>
                  <p className="mt-2 text-xs leading-relaxed text-espresso/55">
                    Placeholder address for this prototype. Replace it with a
                    monitored studio inbox before launch.
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-espresso/55">
                    For press, wholesale and collaboration enquiries, please use
                    the same address with a clear subject line.
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
                  <h2 className="font-display text-xl">The studio</h2>
                  <p className="mt-1 text-sm text-espresso/70">{site.studio}</p>
                  <p className="mt-2 text-xs leading-relaxed text-espresso/55">
                    Aangan is a design prototype. No physical store or visitor
                    address is published.
                  </p>
                </div>
              </div>

              <div className="py-6">
                <p className="eyebrow-sm text-espresso/45">Before you write</p>
                <p className="mt-2 text-xs leading-relaxed text-espresso/60">
                  Sizing, materials, delivery and returns are covered in our FAQ
                  and care pages. You may find an answer there.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link to="/faq" className="link-line text-espresso/60">
                    Read the FAQ
                    <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
                  </Link>
                  <Link to="/shipping-returns" className="link-line text-espresso/60">
                    Shipping & returns
                    <ArrowRight size={12} strokeWidth={1.2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
