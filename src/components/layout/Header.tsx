import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";
import { useWishlist } from "../../context/WishlistContext";
import { site } from "../../data/site";
import { cn } from "../../lib/cn";
import { Logo } from "../ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { openBag, openMenu, openSearch } = useUI();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/shop") return location.pathname === "/shop";
    return location.pathname.startsWith(href);
  };

  return (
    <header className={cn("site-header", scrolled && "is-scrolled")}>
      <div className="container-editorial">
        <div className="header-inner">
          <div className="flex items-center gap-1 lg:gap-7">
            <button
              type="button"
              className="icon-btn -ml-2 lg:hidden"
              onClick={openMenu}
              aria-label="Open menu"
            >
              <Menu size={19} strokeWidth={1.2} aria-hidden="true" />
            </button>
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-7">
                {site.nav.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="nav-link"
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="justify-self-center">
            <Logo showTagline={false} />
          </div>

          <div className="flex items-center justify-end gap-1.5">
            <button
              type="button"
              className="icon-btn"
              onClick={openSearch}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.2} aria-hidden="true" />
            </button>
            <Link
              to="/wishlist"
              className="icon-btn relative hidden sm:flex"
              aria-label={`Wishlist${wishlistCount ? `, ${wishlistCount} items` : ""}`}
            >
              <Heart size={18} strokeWidth={1.2} aria-hidden="true" />
              {wishlistCount > 0 ? (
                <span className="cart-count">{wishlistCount}</span>
              ) : null}
            </Link>
            <Link
              to="/account"
              className="icon-btn hidden sm:flex"
              aria-label="Account"
            >
              <User size={18} strokeWidth={1.2} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="icon-btn relative"
              onClick={openBag}
              aria-label={`Shopping bag${itemCount ? `, ${itemCount} items` : ""}`}
            >
              <ShoppingBag size={18} strokeWidth={1.2} aria-hidden="true" />
              {itemCount > 0 ? (
                <span className="cart-count">{itemCount}</span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
