import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";
import { NewsletterForm } from "../commerce/NewsletterForm";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="site-footer grain grain-light">
      <div className="container-editorial relative z-[2] pb-24 pt-16 sm:pb-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.7fr_0.7fr_1.1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
              An heirloom knitwear house rooted in Magadh. Made by hand. Made
              slowly. Made to be kept.
            </p>
            <p className="deva mt-6 text-2xl text-gold/80">{site.deva}</p>
          </div>

          <div>
            <h2 className="footer-heading">Shop</h2>
            <ul className="space-y-2.5">
              {site.footer.shop.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">The House</h2>
            <ul className="space-y-2.5">
              {site.footer.house.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Care</h2>
            <ul className="space-y-2.5">
              {site.footer.care.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Letters from Magadh</h2>
            <p className="mb-4 text-sm leading-relaxed text-ivory/65">
              Stories of craft, quiet living, and things worth keeping.
            </p>
            <NewsletterForm />
            <div className="mt-7 flex flex-wrap items-center gap-4">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-[0.625rem] uppercase tracking-[0.16em] text-ivory/60 transition-colors hover:text-ivory"
                >
                  {item.label}
                  <ArrowUpRight
                    size={11}
                    strokeWidth={1.2}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-6">
          <div className="flex flex-col gap-4 text-[0.625rem] uppercase tracking-[0.13em] text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Aangan. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link to="/privacy" className="transition-colors hover:text-ivory">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition-colors hover:text-ivory">
                Terms & Conditions
              </Link>
              <span>INR · India</span>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-[0.625rem] leading-relaxed text-ivory/30">
            Aangan is a design prototype. Product details, prices, imagery and
            policies are sample content for demonstration. No payment is
            processed and no order is placed.
          </p>
        </div>
      </div>
    </footer>
  );
}
