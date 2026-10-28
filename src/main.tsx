import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource-variable/inter";
import "@fontsource/noto-serif-devanagari/devanagari-400.css";

import "./index.css";
import { App } from "./App";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { UIProvider } from "./context/UIContext";
import { WishlistProvider } from "./context/WishlistContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <WishlistProvider>
          <CartProvider>
            <UIProvider>
              <App />
            </UIProvider>
          </CartProvider>
        </WishlistProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
