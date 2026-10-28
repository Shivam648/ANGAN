import { Link } from "react-router-dom";
import { ArrowRight, Heart, Search, User } from "lucide-react";
import { useUI } from "../../context/UIContext";
import { site } from "../../data/site";
import { Dialog } from "../ui/Dialog";
import { Logo } from "../ui/Logo";

export function MobileMenu() {
  const { menuOpen, closeMenu, openSearch } = useUI();

  return (
    <Dialog
      open={menuOpen}
      onClose={closeMenu}
      title="Menu"
      variant="drawer-left"
    >
      <div className="flex h-full flex-col overflow-y-auto">
        <header className="flex-none border-b border-line px-6 py-6 pr-16">
          <Logo showTagline={false} />
        </header>

        <nav aria-label="Mobile" className="flex-1 px-6 py-8">
          <ul className="space-y-1">
            {site.nav.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                <Link
                  to={item.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-line-soft py-4"
                >
                  <span className="font-display text-3xl leading-none">
                    {item.label}
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.1}
                    aria-hidden="true"
                    className="text-espresso/30 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-1">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                openSearch();
              }}
              className="flex items-center gap-3 py-2.5 text-sm text-espresso/70"
            >
              <Search size={16} strokeWidth={1.2} aria-hidden="true" />
              Search
            </button>
            <Link
              to="/wishlist"
              onClick={closeMenu}
              className="flex items-center gap-3 py-2.5 text-sm text-espresso/70"
            >
              <Heart size={16} strokeWidth={1.2} aria-hidden="true" />
              Wishlist
            </Link>
            <Link
              to="/account"
              onClick={closeMenu}
              className="flex items-center gap-3 py-2.5 text-sm text-espresso/70"
            >
              <User size={16} strokeWidth={1.2} aria-hidden="true" />
              Account
            </Link>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="eyebrow-sm text-espresso/45">The House</p>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Contact", href: "/contact" },
                { label: "Shipping & Returns", href: "/shipping-returns" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="text-sm text-espresso/65 transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <footer className="flex-none border-t border-line bg-cream/60 px-6 py-6">
          <p className="deva text-lg text-forest/80">{site.deva}</p>
          <p className="mt-1 text-[0.625rem] uppercase tracking-[0.18em] text-espresso/45">
            {site.studio}
          </p>
        </footer>
      </div>
    </Dialog>
  );
}
