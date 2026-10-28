# AANGAN / आँगन

An editorial storefront for a fictional, independent luxury knitwear house rooted
in Magadh, Bihar. The visual language is quiet and tactile: ivory paper, forest
green, espresso, burgundy and antique gold, with Cormorant Garamond, Inter and
Noto Serif Devanagari.

This is a **front-end prototype**. It demonstrates the design, content model,
navigation and commerce interactions, but it does not process payments, place
orders, authenticate accounts, send email or calculate live delivery rates.

> The project lives in `aangan/`. The repository root is a separate Chronos time
> tracker and is not part of this storefront. Run all commands from this folder.

---

## Quick start

```bash
cd aangan
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`.

```bash
npm run build     # TypeScript check + production build to dist/
npm run preview   # preview the production build
npm run images    # regenerate responsive images and the manifest
```

Recommended Node version: **20.19+ or 22.12+** (Vite 8 requirement).

---

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- React Router 7
- Lucide icons
- Self-hosted Fontsource fonts
- Locally hosted WebP imagery with a generated responsive manifest
- Local `localStorage` persistence for bag and wishlist

No component library, CMS or commerce SDK is required for the prototype.

---

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero, house introduction, featured edit, heritage, craft, signature edit, philosophy, journal, newsletter |
| `/shop` | Collection with category, size, colour, material and price filters, sorting, URL state, mobile filter drawer |
| `/shop/:slug` | Product detail with gallery, options, PIN checker, accordions, related pieces |
| `/our-story` | Brand story and honest positioning |
| `/craftsmanship` | Making process, studio roles, materials and care |
| `/journal` | Journal index with category filters |
| `/journal/:slug` | Article with rich body blocks and related reading |
| `/bag` | Bag page with quantity controls and summary |
| `/checkout` | Validated prototype checkout with explicit no-payment messaging |
| `/order-confirmation` | Explains the final commerce hand-off; no order is created |
| `/account` | Account layout with honest prototype states |
| `/search` | Search results and empty state |
| `/wishlist` | Locally saved pieces |
| `/contact` | Validated contact form that prepares a mail draft only |
| `/faq` | Accordion FAQ with prototype notes |
| `/shipping-returns` | Sample shipping and returns policy |
| `/size-guide` | Shared sample size chart and measuring guide |
| `/privacy`, `/terms` | Sample legal pages |
| `*` | 404 / piece-not-found state |

Account, bag, checkout, search, wishlist, order confirmation and not-found pages
are `noindex`.

---

## Project structure

```text
aangan/
├── public/
│   ├── images/                 # 600/1200/2000px WebP variants
│   ├── favicon.svg
│   ├── og-cover.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects              # Netlify SPA fallback
├── scripts/
│   └── prepare-images.mjs      # Pexels JPEGs → WebP + manifest
├── src/
│   ├── components/
│   │   ├── commerce/           # cards, bag, quick view, PIN checker, size guide
│   │   ├── home/               # homepage sections
│   │   ├── journal/            # article body and cards
│   │   ├── layout/             # header, footer, mobile menu, page headers
│   │   ├── search/             # search overlay
│   │   ├── shop/               # filters
│   │   └── ui/                 # dialog, accordion, buttons, picture, reveal…
│   ├── context/                # cart, wishlist, UI and toast providers
│   ├── data/                   # products, journal, FAQs, sizing, site config
│   ├── lib/                    # SEO, currency, validation, search, types
│   ├── pages/                  # route-level screens
│   ├── App.tsx                 # lazy routes
│   ├── index.css               # design tokens + component styles
│   └── main.tsx                # providers and font imports
├── .env.example
├── CREDITS.md
├── index.html
├── vercel.json
└── vite.config.ts
```

---

## Content editing

Product, journal, FAQ and sizing content is kept outside page components so it can
be edited without touching layout code. Brand narrative and policy copy live in
their page components.

### Products

Edit `src/data/products.ts`. Each product supports:

- `id`, `slug`, `name`, `subtitle`, `price` in whole rupees
- `description`, `story`, `details`
- `colors`, `sizes`, `material`, `composition`, `knitType`, `fit`, `care`, `madeIn`
- `images` (a local image-manifest key + alt text + optional object position)
- `category`, `collection`, `featured`, `isNew`, `badge`
- `related` product IDs

`priceBands`, `productById` and `productBySlug` are exported from the same file.
The catalogue is sample data. Confirm every composition, origin, fit and
availability claim with production before publishing.

### Journal

Edit `src/data/journal.ts`. Articles use typed body blocks (`paragraph`,
`heading`, `quote`, `image`) so the article layout stays consistent. Categories
and reading times are data-driven.

### Site, navigation and policies

- `src/data/site.ts` — brand name, tagline, email, social links, navigation,
  footer columns, Indian states and the public site URL.
- `src/data/faqs.ts` — FAQ questions and answers.
- `src/data/sizing.ts` — the shared size chart used by the size guide page and
  the product-page dialog.
- `src/pages/PrivacyPage.tsx`, `TermsPage.tsx`, `ShippingReturnsPage.tsx` —
  sample policy copy. Review with a lawyer and fulfilment partner before launch.

The placeholder email is `hello@aangan.example`. Replace it with a monitored
studio inbox before launch. Social links currently point to the Instagram and
Pinterest home pages and should be replaced with real profiles.

---

## Environment and deployment

Copy `.env.example` to `.env` and set the public origin:

```bash
VITE_SITE_URL=https://your-domain.example
```

The URL is used for canonical links, Open Graph URLs, Twitter metadata and
product structured data. Do not add a trailing slash. The fallback is
`https://aangan.example`.

The Vite config also substitutes `%SITE_URL%` in `index.html`, so the static
Open Graph image and URL are absolute in the built HTML.

### Netlify

`public/_redirects` already contains:

```text
/*    /index.html   200
```

Set `VITE_SITE_URL` in the Netlify environment, build with `npm run build`, and
publish `dist`.

### Vercel

`vercel.json` contains the SPA rewrite. Set `VITE_SITE_URL` in the project
environment, use the Vite preset, and deploy the `dist` output.

### Any static host

Build with `npm run build` and serve `dist` with a fallback to `index.html` for
unknown routes. Update `public/sitemap.xml` and `public/robots.txt` with the real
domain, or generate them during deployment.

---

## Commerce integration points

The prototype deliberately stops at the edge of a real transaction.

| Area | Current behaviour | Where to integrate |
| --- | --- | --- |
| Bag | React context + `localStorage` key `aangan-cart-v1` | `src/context/CartContext.tsx` → commerce API or state library |
| Wishlist | React context + `localStorage` key `aangan-wishlist-v1` | `src/context/WishlistContext.tsx` → customer account API |
| Product availability | Static sample catalogue | `src/data/products.ts` or a product/CMS API |
| Checkout validation | Client-side validation only | `src/pages/CheckoutPage.tsx` → server-side validation |
| Payment | No provider, no card fields, no charge | Add a hosted payment element or redirect flow after the form step |
| Order creation | No order is created; success state is explanatory | Call an order API only after payment confirmation |
| Order confirmation | Sample explanation page | `src/pages/OrderConfirmationPage.tsx` → server-returned order |
| Account | Forms validate but do not authenticate or store credentials | Replace with an auth provider; never store passwords client-side |
| Newsletter | Local success state only | `src/components/commerce/NewsletterForm.tsx` → email platform |
| Contact | Builds a `mailto:` draft | Replace with a server-side form endpoint and spam protection |
| PIN checker | Indicative copy based on PIN prefix; no carrier lookup | `src/components/commerce/PinChecker.tsx` → fulfilment API |
| Shipping/tax | Explicitly “not calculated” | Add rates and tax rules at checkout |
| Search | Client-side catalogue matching | `src/lib/search.ts` → search service if the catalogue grows |

When adding a provider, keep the honest states: loading, empty, validation error,
payment failure and order failure should all be visible and understandable.

---

## Imagery

All images are placeholders from Pexels, downloaded locally and converted to
WebP at 600, 1200 and 2000px. They are not Aangan products, artisans or premises.
See [CREDITS.md](./CREDITS.md) for source IDs.

To replace them:

1. Put source JPEGs in the directory expected by `scripts/prepare-images.mjs`
   (`C:/Users/SHIVAM/AppData/Local/Temp/opencode/aangan-hi` by default), or set
   `IMAGE_SOURCE` to another folder.
2. Update the image name → Pexels/source ID map in that script.
3. Run `npm run images`.
4. Update product and page image references to the new manifest keys.

`src/components/ui/Picture.tsx` reads `src/data/image-manifest.json` for
intrinsic dimensions, average colour and `srcSet` generation.

---

## Design and accessibility notes

- Global design tokens and component styles live in `src/index.css`.
- A skip link, visible focus styles, semantic landmarks, labelled controls,
  `aria-pressed` states and dialog focus handling are included.
- Motion respects `prefers-reduced-motion`; the marquee, reveals and hero zoom
  are disabled or simplified.
- Images carry descriptive alt text and explicit dimensions to reduce layout
  shift.
- The layout is responsive from small mobile widths through wide editorial
  screens, with a dedicated mobile menu, filter drawer, bag drawer and search
  overlay.
- Type is set in Cormorant Garamond, Inter and Noto Serif Devanagari, self-hosted
  through Fontsource so the site does not depend on Google Fonts at runtime.

Please re-test keyboard order, contrast and screen-reader labels after changing
colours, typography or interactive components.

---

## Prototype limitations

This project does **not** include:

- a real payment processor or card collection
- order creation, order history or inventory reservation
- authentication or customer accounts
- a CMS, product API or image CDN
- live shipping rates, tax calculation or delivery guarantees
- a newsletter backend or contact-form backend
- verified supplier, composition, origin or certification claims

The footer, checkout, FAQ, size guide, policies and account page say this
explicitly in the interface. Keep those disclaimers until the corresponding
services are genuinely connected.

---

## Credits

- Design, code and sample copy: Aangan prototype
- Photography: [Pexels](https://www.pexels.com/) — see [CREDITS.md](./CREDITS.md)
- Typefaces: Cormorant Garamond, Inter and Noto Serif Devanagari via
  [Fontsource](https://fontsource.org/)
- Icons: [Lucide](https://lucide.dev/)
