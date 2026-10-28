import { useEffect } from "react";
import { site } from "../data/site";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "product";
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_URL = site.url.replace(/\/+$/, "");

function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function Seo({
  title,
  description,
  image = "/og-cover.png",
  type = "website",
  canonical,
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const imageUrl = absoluteUrl(image);
    const href = canonical ? absoluteUrl(canonical) : undefined;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    if (href) {
      upsertMeta("property", "og:url", href);
    } else {
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    let canonicalLink = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (href) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = href;
    } else if (canonicalLink) {
      canonicalLink.remove();
    }

    const scriptId = "aangan-page-jsonld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [title, description, image, type, canonical, noindex, jsonLd]);

  return null;
}
