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
import type { CartLine, Product } from "../lib/types";

const STORAGE_KEY = "aangan-cart-v1";

export type CartLineItem = CartLine & {
  key: string;
  product: Product;
};

type CartContextValue = {
  lines: CartLine[];
  lineItems: CartLineItem[];
  itemCount: number;
  subtotal: number;
  addItem: (
    productId: string,
    color: string,
    size: string,
    quantity?: number,
  ) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
  hasItem: (productId: string) => boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export const lineKey = (line: Pick<CartLine, "productId" | "color" | "size">) =>
  `${line.productId}::${line.color}::${line.size}`;

function readCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((entry) => {
      if (!entry || typeof entry !== "object") return [];
      const line = entry as Partial<CartLine>;
      if (
        typeof line.productId !== "string" ||
        typeof line.color !== "string" ||
        typeof line.size !== "string" ||
        typeof line.quantity !== "number" ||
        !productById(line.productId)
      ) {
        return [];
      }
      return [
        {
          productId: line.productId,
          color: line.color,
          size: line.size,
          quantity: Math.min(10, Math.max(1, Math.round(line.quantity))),
        },
      ];
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(readCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // A private browser session may not allow storage; the bag still works
      // for the current visit.
    }
  }, [lines]);

  const addItem = useCallback(
    (productId: string, color: string, size: string, quantity = 1) => {
      const nextQuantity = Math.min(10, Math.max(1, quantity));
      setLines((current) => {
        const key = lineKey({ productId, color, size });
        const existing = current.find((line) => lineKey(line) === key);
        if (existing) {
          return current.map((line) =>
            lineKey(line) === key
              ? {
                  ...line,
                  quantity: Math.min(10, line.quantity + nextQuantity),
                }
              : line,
          );
        }
        return [...current, { productId, color, size, quantity: nextQuantity }];
      });
    },
    [],
  );

  const updateQuantity = useCallback((key: string, quantity: number) => {
    if (quantity <= 0) {
      setLines((current) => current.filter((line) => lineKey(line) !== key));
      return;
    }
    setLines((current) =>
      current.map((line) =>
        lineKey(line) === key
          ? { ...line, quantity: Math.min(10, Math.max(1, quantity)) }
          : line,
      ),
    );
  }, []);

  const removeItem = useCallback((key: string) => {
    setLines((current) => current.filter((line) => lineKey(line) !== key));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const lineItems = useMemo(
    () =>
      lines.flatMap((line) => {
        const product = productById(line.productId);
        if (!product) return [];
        return [{ ...line, key: lineKey(line), product }];
      }),
    [lines],
  );

  const itemCount = useMemo(
    () => lineItems.reduce((total, line) => total + line.quantity, 0),
    [lineItems],
  );

  const subtotal = useMemo(
    () =>
      lineItems.reduce(
        (total, line) => total + line.product.price * line.quantity,
        0,
      ),
    [lineItems],
  );

  const hasItem = useCallback(
    (productId: string) =>
      lines.some((line) => line.productId === productId),
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      lineItems,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      hasItem,
    }),
    [
      lines,
      lineItems,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      hasItem,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
