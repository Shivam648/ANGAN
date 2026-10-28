import type { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { BagDrawer } from "../commerce/BagDrawer";
import { QuickView } from "../commerce/QuickView";
import { SizeGuideDialog } from "../commerce/SizeGuideDialog";
import { MobileMenu } from "./MobileMenu";
import { SearchOverlay } from "../search/SearchOverlay";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
      <BagDrawer />
      <SearchOverlay />
      <MobileMenu />
      <QuickView />
      <SizeGuideDialog />
    </div>
  );
}
