export type ImageRef = {
  name: string;
  alt: string;
  position?: string;
};

export type ColorOption = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  story: string;
  details: string[];
  colors: ColorOption[];
  sizes: string[];
  material: string;
  composition: string;
  knitType: "Hand-knitted" | "Machine-knitted, hand-finished";
  fit: string;
  care: string[];
  madeIn: string;
  images: ImageRef[];
  category: string;
  collection: string;
  featured: boolean;
  isNew: boolean;
  badge?: string;
  related: string[];
};

export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; image: ImageRef; caption?: string };

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Heritage" | "Craft" | "Care" | "Slow Living" | "Style";
  readTime: string;
  date: string;
  image: ImageRef;
  intro: string;
  body: JournalBlock[];
};

export type CartLine = {
  productId: string;
  color: string;
  size: string;
  quantity: number;
};
