import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_DIR =
  process.env.IMAGE_SOURCE ??
  "C:/Users/SHIVAM/AppData/Local/Temp/opencode/aangan-hi";
const OUT_DIR = path.resolve("public/images");
const MANIFEST_PATH = path.resolve("src/data/image-manifest.json");
const WIDTHS = [600, 1200, 2000];

const images = {
  "hero-knit": 10592693,
  "wool-macro": 14882516,
  nalanda: 35638213,
  "village-road": 32915125,
  "yarn-still": 19479497,
  "hands-knitting": 5806914,
  "knit-detail": 6630834,
  "model-window": 11446771,
  "editorial-duo": 9904162,
  "winter-field": 33820501,
  "hands-knitting-2": 40003495,
  "stack-beige": 5704187,
  "sweater-chair": 4210854,
  "village-women": 35396160,
  "spinning-wool": 33937249,
  "stack-cream": 14641440,
  "cardigan-hanger": 13918752,
  "stack-close": 5710046,
  "wool-texture": 9348503,
  "wool-fibers": 37955302,
  "stack-peach": 10464371,
  "cable-knit": 6843275,
  "model-field": 19373362,
  "yarn-knit": 3693235,
  "stack-grey": 5475173,
  "sweater-chair-white": 11674667,
  "model-nainital": 5083589,
  "nalanda-2": 38186484,
  "portrait-bw": 4126346,
  "hanger-holding": 9185779,
  "sweater-hanger": 12944791,
  "clothing-rack": 6347948,
};

await mkdir(OUT_DIR, { recursive: true });
const manifest = {};

for (const [name, id] of Object.entries(images)) {
  const source = path.join(SOURCE_DIR, `${id}.jpg`);
  const image = sharp(source).rotate();
  const metadata = await image.metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not read dimensions for ${source}`);
  }

  for (const width of WIDTHS) {
    if (width > metadata.width) continue;
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(OUT_DIR, `${name}-${width}.webp`));
  }

  const average = await sharp(source)
    .rotate()
    .resize(1, 1, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer();
  const color = `#${[average[0], average[1], average[2]]
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("")}`;

  manifest[name] = {
    width: metadata.width,
    height: metadata.height,
    ratio: Number((metadata.width / metadata.height).toFixed(4)),
    color,
  };
  console.log(`${name} — ${metadata.width}×${metadata.height} — ${color}`);
}

await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\nWrote ${Object.keys(images).length} images and the manifest.`);
