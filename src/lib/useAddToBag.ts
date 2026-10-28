import { useCallback } from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useUI } from "../context/UIContext";
import type { Product } from "./types";

type AddOptions = {
  openBag?: boolean;
  quiet?: boolean;
};

export function useAddToBag() {
  const { addItem } = useCart();
  const { openBag } = useUI();
  const { toast } = useToast();

  return useCallback(
    (
      product: Product,
      color: string,
      size: string,
      quantity = 1,
      options: AddOptions = {},
    ) => {
      addItem(product.id, color, size, quantity);
      if (options.openBag) openBag();
      if (!options.quiet) {
        toast(`${product.name} added to your bag.`, "success");
      }
    },
    [addItem, openBag, toast],
  );
}
