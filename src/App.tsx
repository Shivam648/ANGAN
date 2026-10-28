import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { PageLoader } from "./components/ui/PageLoader";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const ShopPage = lazy(() =>
  import("./pages/ShopPage").then((module) => ({ default: module.ShopPage })),
);
const ProductPage = lazy(() =>
  import("./pages/ProductPage").then((module) => ({
    default: module.ProductPage,
  })),
);
const StoryPage = lazy(() =>
  import("./pages/StoryPage").then((module) => ({ default: module.StoryPage })),
);
const CraftPage = lazy(() =>
  import("./pages/CraftPage").then((module) => ({ default: module.CraftPage })),
);
const JournalPage = lazy(() =>
  import("./pages/JournalPage").then((module) => ({
    default: module.JournalPage,
  })),
);
const JournalArticlePage = lazy(() =>
  import("./pages/JournalArticlePage").then((module) => ({
    default: module.JournalArticlePage,
  })),
);
const BagPage = lazy(() =>
  import("./pages/BagPage").then((module) => ({ default: module.BagPage })),
);
const CheckoutPage = lazy(() =>
  import("./pages/CheckoutPage").then((module) => ({
    default: module.CheckoutPage,
  })),
);
const OrderConfirmationPage = lazy(() =>
  import("./pages/OrderConfirmationPage").then((module) => ({
    default: module.OrderConfirmationPage,
  })),
);
const AccountPage = lazy(() =>
  import("./pages/AccountPage").then((module) => ({
    default: module.AccountPage,
  })),
);
const SearchPage = lazy(() =>
  import("./pages/SearchPage").then((module) => ({
    default: module.SearchPage,
  })),
);
const WishlistPage = lazy(() =>
  import("./pages/WishlistPage").then((module) => ({
    default: module.WishlistPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);
const FaqPage = lazy(() =>
  import("./pages/FaqPage").then((module) => ({ default: module.FaqPage })),
);
const ShippingReturnsPage = lazy(() =>
  import("./pages/ShippingReturnsPage").then((module) => ({
    default: module.ShippingReturnsPage,
  })),
);
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((module) => ({
    default: module.PrivacyPage,
  })),
);
const TermsPage = lazy(() =>
  import("./pages/TermsPage").then((module) => ({ default: module.TermsPage })),
);
const SizeGuidePage = lazy(() =>
  import("./pages/SizeGuidePage").then((module) => ({
    default: module.SizeGuidePage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

export function App() {
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:slug" element={<ProductPage />} />
              <Route path="/collection" element={<Navigate to="/shop" replace />} />
              <Route path="/our-story" element={<StoryPage />} />
              <Route path="/craftsmanship" element={<CraftPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journal/:slug" element={<JournalArticlePage />} />
              <Route path="/bag" element={<BagPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route
                path="/order-confirmation"
                element={<OrderConfirmationPage />}
              />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route
                path="/shipping-returns"
                element={<ShippingReturnsPage />}
              />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/size-guide" element={<SizeGuidePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </>
  );
}
