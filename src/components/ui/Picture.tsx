import manifest from "../../data/image-manifest.json";
import type { ImageRef } from "../../lib/types";
import { cn } from "../../lib/cn";
import { getImageUrl } from "../../lib/imageUrl";

type ManifestEntry = {
  width: number;
  height: number;
  ratio: number;
  color: string;
};

const imageManifest = manifest as Record<string, ManifestEntry>;
const widths = [600, 1200, 2000];

type PictureProps = {
  image: ImageRef;
  sizes?: string;
  className?: string;
  priority?: boolean;
  draggable?: boolean;
};

export function Picture({
  image,
  sizes = "100vw",
  className,
  priority = false,
  draggable = false,
}: PictureProps) {
  const meta = imageManifest[image.name];
  if (!meta) {
    return null;
  }
  const available = widths.filter((width) => width <= meta.width);
  const fallback = available[available.length - 1] ?? 600;
  const srcSet = available
    .map((width) => `${getImageUrl(image.name, width)} ${width}w`)
    .join(", ");

  return (
    <img
      src={getImageUrl(image.name, fallback)}
      srcSet={srcSet}
      sizes={sizes}
      alt={image.alt}
      width={meta.width}
      height={meta.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      draggable={draggable}
      className={cn(className)}
      style={{
        objectPosition: image.position ?? "center",
        backgroundColor: meta.color,
      }}
    />
  );
}
