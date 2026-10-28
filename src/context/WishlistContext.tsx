import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { productById } from "../data/products";

const STORAGE_KEY = "aangan-wishlist-v1";

type WishlistContextValue = {
  ids: string[];
  count: number;
  isWishlisted: (productId: string) => boolean;
  toggle: (productId: string) => boolean;
  remove: (productId: string) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

function readWishlist(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (id): id is string => typeof id === "string" && Boolean(productById(id)),
    );
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>(readWishlist);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // Ignore storage restrictions.
    }
  }, [ids]);

  const isWishlisted = useCallback(
    (productId: string) => ids.includes(productId),
    [ids],
  );

  const toggle = useCallback((productId: string) => {
    let added = false;
    setIds((current) => {
      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      }
      added = true;
      return [...current, productId];
    });
    return added;
  }, []);

  const remove = useCallback((productId: string) => {
    setIds((current) => current.filter((id) => id !== productId));
  }, []);

  const clear = useCallback(() => setIds([]), []);

  const value = useMemo(
    () => ({
      ids,
      count: ids.length,
      isWishlisted,
      toggle,
      remove,
      clear,
    }),
    [ids, isWishlisted, toggle, remove, clear],
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
}
