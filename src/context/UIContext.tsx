import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../lib/types";

type UIContextValue = {
  bagOpen: boolean;
  openBag: () => void;
  closeBag: () => void;
  menuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  quickView: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  sizeGuideOpen: boolean;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [bagOpen, setBagOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const openBag = useCallback(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setBagOpen(true);
  }, []);
  const closeBag = useCallback(() => setBagOpen(false), []);

  const openMenu = useCallback(() => {
    setBagOpen(false);
    setSearchOpen(false);
    setMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const openSearch = useCallback(() => {
    setBagOpen(false);
    setMenuOpen(false);
    setSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const openQuickView = useCallback((product: Product) => {
    setQuickView(product);
  }, []);
  const closeQuickView = useCallback(() => setQuickView(null), []);

  const openSizeGuide = useCallback(() => setSizeGuideOpen(true), []);
  const closeSizeGuide = useCallback(() => setSizeGuideOpen(false), []);

  const value = useMemo(
    () => ({
      bagOpen,
      openBag,
      closeBag,
      menuOpen,
      openMenu,
      closeMenu,
      searchOpen,
      openSearch,
      closeSearch,
      quickView,
      openQuickView,
      closeQuickView,
      sizeGuideOpen,
      openSizeGuide,
      closeSizeGuide,
    }),
    [
      bagOpen,
      openBag,
      closeBag,
      menuOpen,
      openMenu,
      closeMenu,
      searchOpen,
      openSearch,
      closeSearch,
      quickView,
      openQuickView,
      closeQuickView,
      sizeGuideOpen,
      openSizeGuide,
      closeSizeGuide,
    ],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used inside UIProvider");
  return context;
}
