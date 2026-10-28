import { journal } from "../data/journal";
import { products } from "../data/products";
import type { JournalArticle, Product } from "./types";

function normalise(value: string): string {
  return value.toLowerCase().trim();
}

export function searchProducts(query: string): Product[] {
  const q = normalise(query);
  if (!q) return [];
  return products.filter((product) => {
    const haystack = [
      product.name,
      product.subtitle,
      product.description,
      product.category,
      product.material,
      product.knitType,
      ...product.colors.map((color) => color.name),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function searchJournal(query: string): JournalArticle[] {
  const q = normalise(query);
  if (!q) return [];
  return journal.filter((article) => {
    const haystack = [
      article.title,
      article.excerpt,
      article.category,
      article.intro,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function searchAll(query: string) {
  return {
    products: searchProducts(query),
    articles: searchJournal(query),
  };
}
