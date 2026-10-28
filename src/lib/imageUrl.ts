import { site } from "../data/site";

export function getImageUrl(name: string, width: number) {
  return `${import.meta.env.BASE_URL}images/${name}-${width}.webp`;
}

export function getAbsoluteImageUrl(name: string, width: number) {
  return new URL(getImageUrl(name, width), `${new URL(site.url).origin}/`).href;
}