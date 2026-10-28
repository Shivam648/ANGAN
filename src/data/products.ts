import type { ImageRef, Product } from "../lib/types";

const img = (name: string, alt: string, position?: string): ImageRef => ({
  name,
  alt,
  position,
});

const colors = {
  oatmeal: { name: "Oatmeal", hex: "#d9cdbb" },
  ivory: { name: "Ivory", hex: "#f1ead9" },
  moss: { name: "Moss", hex: "#5b6650" },
  espresso: { name: "Espresso", hex: "#403027" },
  camel: { name: "Camel", hex: "#b08b62" },
  forest: { name: "Forest", hex: "#24382d" },
  burgundy: { name: "Burgundy", hex: "#713b43" },
  charcoal: { name: "Charcoal", hex: "#35342f" },
  olive: { name: "Olive", hex: "#6b6a4e" },
  sand: { name: "Sand", hex: "#c9b79e" },
  clay: { name: "Clay", hex: "#a8795e" },
  grey: { name: "Grey", hex: "#9a9892" },
  rosewood: { name: "Rosewood", hex: "#7c4a4a" },
};

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

/**
 * Sample catalogue.
 *
 * Prices, compositions, fit notes and availability are editable sample data for
 * this prototype. Confirm every product claim with the supplier and update the
 * data here before launching a real store.
 */
export const products: Product[] = [
  {
    id: "magadh-crewneck",
    slug: "magadh-crewneck",
    name: "The Magadh Crewneck",
    subtitle: "A quiet crewneck, made for the first cold morning.",
    price: 8900,
    description:
      "A generous crewneck with a soft ribbed collar and a hand-finished hem. It is the kind of sweater that settles into a wardrobe quietly, then becomes the one you reach for first.",
    story:
      "The Magadh Crewneck began with a simple idea: a sweater that feels like an old favourite from the moment it is worn. The stitch is kept deliberately plain so the texture of the yarn can do the talking. It is made in small batches and finished by hand at the neck, cuffs and hem.",
    details: [
      "Relaxed, slightly boxy fit",
      "Ribbed collar, cuffs and hem",
      "Hand-finished neckline and seams",
      "Small-batch production",
    ],
    colors: [colors.oatmeal, colors.moss, colors.espresso],
    sizes,
    material: "Pure wool",
    composition: "100% wool",
    knitType: "Hand-knitted",
    fit: "Relaxed fit. Fits true to size. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Store folded; avoid hanging.",
    ],
    madeIn: "India",
    images: [
      img(
        "stack-cream",
        "Folded cream knitted sweaters stacked on a pale surface",
        "center",
      ),
      img("knit-detail", "Close-up of a soft cream knit stitch"),
      img("cable-knit", "Detail of a cream cable knit pattern"),
      img(
        "model-window",
        "Woman wearing an oatmeal knit sweater beside a window",
        "center 30%",
      ),
    ],
    category: "Crewneck",
    collection: "The Winter Collection",
    featured: true,
    isNew: true,
    badge: "New",
    related: ["ganga-cardigan", "patna-heritage-knit", "vaishali-turtleneck"],
  },
  {
    id: "ganga-cardigan",
    slug: "ganga-cardigan",
    name: "The Ganga Cardigan",
    subtitle: "An open cardigan for slow mornings and long walks.",
    price: 11400,
    description:
      "A soft, open cardigan with a clean shawl collar and a relaxed line. Made to layer over a shirt, a fine knit, or whatever the morning asks for.",
    story:
      "Named for the river that has carried so much of Bihar's life and memory, the Ganga Cardigan is an exercise in ease. The collar is shaped to fall softly, the pockets are set into the seam, and the hem is finished by hand so it keeps its line over time.",
    details: [
      "Open front with a soft shawl collar",
      "Set-in pockets",
      "Hand-finished seams and hem",
      "Machine-knitted, with hand-finished details",
    ],
    colors: [colors.ivory, colors.camel, colors.forest],
    sizes,
    material: "Wool blend",
    composition: "Wool blend",
    knitType: "Machine-knitted, hand-finished",
    fit: "Easy, relaxed fit. Size down for a closer line. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Steam lightly to refresh; store folded.",
    ],
    madeIn: "India",
    images: [
      img(
        "cardigan-hanger",
        "Cream knitted cardigan hanging on a wooden hanger",
        "center",
      ),
      img("wool-macro", "Macro detail of warm beige wool fibres"),
      img("hanger-holding", "Woman holding a knitted garment on a hanger"),
      img(
        "model-window",
        "Woman wearing a soft knit beside a window",
        "center 35%",
      ),
    ],
    category: "Cardigan",
    collection: "The Winter Collection",
    featured: true,
    isNew: false,
    badge: "Signature",
    related: ["magadh-crewneck", "bodhi-wool-pullover", "sonepur-cable-knit"],
  },
  {
    id: "patna-heritage-knit",
    slug: "patna-heritage-knit",
    name: "The Patna Heritage Knit",
    subtitle: "A traditional cable, drawn with a cleaner line.",
    price: 9800,
    description:
      "A heritage cable knit reworked for a modern wardrobe. The cable is traditional; the silhouette is calm, uncluttered and easy to wear.",
    story:
      "Cable knitting is a language of crossings and returns. For this piece, we kept the central cable broad and quiet, then pared everything else back. The result is a sweater that carries the memory of the technique without feeling costume-like.",
    details: [
      "Central cable panel with a clean rib border",
      "Slightly dropped shoulder",
      "Hand-finished collar and cuffs",
      "Small-batch production",
    ],
    colors: [colors.oatmeal, colors.burgundy, colors.charcoal],
    sizes,
    material: "Pure wool",
    composition: "100% wool",
    knitType: "Hand-knitted",
    fit: "Relaxed fit with room for layering. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Store folded; avoid hanging.",
    ],
    madeIn: "India",
    images: [
      img("stack-close", "Close-up of folded knitted sweaters in neutral tones"),
      img("wool-texture", "Textured beige wool fabric in close-up"),
      img("sweater-chair", "Brown knitted sweater draped over a wooden chair"),
      img("knit-detail", "Detail of a soft knitted surface"),
    ],
    category: "Cable knit",
    collection: "The Winter Collection",
    featured: true,
    isNew: false,
    related: ["magadh-crewneck", "sonepur-cable-knit", "rajgir-textured-sweater"],
  },
  {
    id: "bodhi-wool-pullover",
    slug: "bodhi-wool-pullover",
    name: "The Bodhi Wool Pullover",
    subtitle: "A deep, warm pullover with a quiet presence.",
    price: 10600,
    description:
      "A simple crew-neck pullover in a deep, warm tone. The shoulder is slightly dropped, the body is generous, and the neck is finished by hand to sit softly against the skin.",
    story:
      "Bodh Gaya is a place of stillness. This pullover takes its name from that feeling rather than its imagery: a garment that asks nothing of you, and gives a great deal in return. It is made to be worn over everything, for years.",
    details: [
      "Slightly dropped shoulder",
      "Hand-finished crew neckline",
      "Ribbed cuffs and hem",
      "Small-batch production",
    ],
    colors: [colors.espresso, colors.charcoal, colors.olive],
    sizes,
    material: "Lambswool",
    composition: "Lambswool",
    knitType: "Hand-knitted",
    fit: "Generous fit. Fits true to size. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Store folded; avoid hanging.",
    ],
    madeIn: "India",
    images: [
      img("sweater-chair", "Brown knitted sweater draped over a wooden chair"),
      img("wool-fibers", "Macro detail of tan wool fibres"),
      img("knit-detail", "Close-up of a soft cream knit stitch"),
      img(
        "model-window",
        "Woman wearing a warm knit sweater beside a window",
        "center 30%",
      ),
    ],
    category: "Pullover",
    collection: "The Winter Collection",
    featured: true,
    isNew: false,
    related: ["magadh-crewneck", "patna-heritage-knit", "ganga-cardigan"],
  },
  {
    id: "rajgir-textured-sweater",
    slug: "rajgir-textured-sweater",
    name: "The Rajgir Textured Sweater",
    subtitle: "A textured stitch, shaped by the ridgelines of Rajgir.",
    price: 9200,
    description:
      "A textured sweater with a subtle structure that holds its shape. Soft to the touch, with a surface that catches the light like the hills at dusk.",
    story:
      "The hills around Rajgir rise in quiet layers. This sweater borrows their rhythm: a repeating texture that is visible up close and almost plain from a distance. It is a piece for people who prefer their details quiet.",
    details: [
      "Textured stitch with a soft hand",
      "Ribbed collar and cuffs",
      "Hand-finished details",
      "Machine-knitted, with hand-finished details",
    ],
    colors: [colors.sand, colors.clay, colors.forest],
    sizes,
    material: "Wool blend",
    composition: "Wool blend",
    knitType: "Machine-knitted, hand-finished",
    fit: "Relaxed fit. Fits true to size. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Store folded; avoid hanging.",
    ],
    madeIn: "India",
    images: [
      img("stack-peach", "Stack of textured knitted sweaters in warm tones"),
      img("cable-knit", "Close-up of a cream cable knit pattern"),
      img("wool-macro", "Macro detail of warm beige wool fibres"),
      img(
        "model-field",
        "Woman in a sweater standing in a rural field at dusk",
        "center 25%",
      ),
    ],
    category: "Textured knit",
    collection: "The Winter Collection",
    featured: false,
    isNew: true,
    badge: "New",
    related: ["patna-heritage-knit", "sonepur-cable-knit", "mithila-heritage-knit"],
  },
  {
    id: "mithila-heritage-knit",
    slug: "mithila-heritage-knit",
    name: "The Mithila Heritage Knit",
    subtitle: "A fine knit with a border motif drawn from Mithila.",
    price: 12800,
    description:
      "A fine-gauge knit with a delicate motif at the cuff. Understated from a distance; quietly detailed up close. A meeting of two traditions: knit and line.",
    story:
      "Mithila's visual language is one of patience and repetition: fine lines, small marks, a whole world built from the edge inward. For this piece, we translated a single border motif into a knitted cuff, keeping the palette restrained so the detail remains a discovery rather than a statement.",
    details: [
      "Fine-gauge knit",
      "Motif detail at the cuff",
      "Hand-finished neckline",
      "Small-batch production",
    ],
    colors: [colors.ivory, colors.rosewood, colors.forest],
    sizes,
    material: "Fine wool",
    composition: "Fine wool",
    knitType: "Hand-knitted",
    fit: "Slim, close fit. Size up for a more relaxed line. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Store folded; avoid hanging.",
    ],
    madeIn: "India",
    images: [
      img("stack-beige", "Stack of beige knitted sweaters on a pale surface"),
      img("yarn-knit", "Cream yarn resting on a knitted surface"),
      img("knit-detail", "Close-up of a fine cream knit"),
      img(
        "editorial-duo",
        "Two women in quiet beige clothing standing in a landscape",
        "center 30%",
      ),
    ],
    category: "Fine knit",
    collection: "The Winter Collection",
    featured: false,
    isNew: false,
    badge: "Limited",
    related: ["ganga-cardigan", "rajgir-textured-sweater", "vaishali-turtleneck"],
  },
  {
    id: "sonepur-cable-knit",
    slug: "sonepur-cable-knit",
    name: "The Sonepur Cable Knit",
    subtitle: "A heavier cable for the coldest weeks.",
    price: 8400,
    description:
      "A substantial cable knit with a soft roll neck and a fit that leaves room for a shirt underneath. Made for the weeks when the fog does not lift until noon.",
    story:
      "Sonepur is a place of gathering: markets, animals, voices, the press of people keeping warm. This sweater has that same generous spirit. It is the heaviest knit in the collection, with a cable that runs wide and a neck that folds softly.",
    details: [
      "Soft roll neck",
      "Wide cable panel",
      "Ribbed cuffs and hem",
      "Machine-knitted, with hand-finished details",
    ],
    colors: [colors.grey, colors.oatmeal, colors.espresso],
    sizes,
    material: "Lambswool",
    composition: "Lambswool",
    knitType: "Machine-knitted, hand-finished",
    fit: "Relaxed, roomy fit. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Store folded; avoid hanging.",
    ],
    madeIn: "India",
    images: [
      img("stack-grey", "Stack of grey knitted sweaters on a white surface"),
      img("cable-knit", "Close-up of a cream cable knit pattern"),
      img("wool-texture", "Textured beige wool fabric in close-up"),
      img(
        "portrait-bw",
        "Black and white portrait of a woman in a soft knit",
        "center 20%",
      ),
    ],
    category: "Cable knit",
    collection: "The Winter Collection",
    featured: false,
    isNew: false,
    related: ["patna-heritage-knit", "rajgir-textured-sweater", "bodhi-wool-pullover"],
  },
  {
    id: "vaishali-turtleneck",
    slug: "vaishali-turtleneck",
    name: "The Vaishali Turtleneck",
    subtitle: "A fine rib turtleneck, made for layering.",
    price: 7900,
    description:
      "A light turtleneck in a fine rib, designed to sit under a jacket or cardigan without bulk. The neck is finished by hand so it rests softly against the skin.",
    story:
      "Vaishali is one of the oldest remembered places in the region, a name that carries layers of history. This piece is similarly layered: fine enough to wear under a coat, warm enough to wear on its own. A quiet foundation for the colder months.",
    details: [
      "Fine rib knit",
      "Hand-finished neckline",
      "Close, layer-friendly fit",
      "Machine-knitted, with hand-finished details",
    ],
    colors: [colors.ivory, colors.charcoal, colors.camel],
    sizes,
    material: "Fine wool",
    composition: "Fine wool",
    knitType: "Machine-knitted, hand-finished",
    fit: "Close fit. Fits true to size. Model is 5'9\" and wears a size S.",
    care: [
      "Hand wash in cool water with a gentle wool detergent.",
      "Do not wring or tumble dry.",
      "Dry flat in shade, reshaping gently while damp.",
      "Store folded; avoid hanging.",
    ],
    madeIn: "India",
    images: [
      img(
        "sweater-chair-white",
        "White knitted sweater draped over a wooden chair",
        "center",
      ),
      img("knit-detail", "Close-up of a soft cream knit stitch"),
      img("wool-fibers", "Macro detail of tan wool fibres"),
      img(
        "model-nainital",
        "Woman in a knit cap and sweater in the hills",
        "center 20%",
      ),
    ],
    category: "Turtleneck",
    collection: "The Winter Collection",
    featured: false,
    isNew: false,
    related: ["magadh-crewneck", "mithila-heritage-knit", "ganga-cardigan"],
  },
];

export const productBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const productById = (id: string) =>
  products.find((product) => product.id === id);

export const featuredProducts = products.filter((product) => product.featured);

export const materials = Array.from(
  new Set(products.map((product) => product.material)),
);

export const allColors = Array.from(
  new Map(
    products.flatMap((product) =>
      product.colors.map((color) => [color.name, color] as const),
    ),
  ).values(),
);

export const priceBands = [
  { id: "under-8000", label: "Under ₹8,000", min: 0, max: 7999 },
  { id: "8000-10000", label: "₹8,000 – ₹10,000", min: 8000, max: 10000 },
  { id: "10000-12000", label: "₹10,000 – ₹12,000", min: 10000, max: 12000 },
  { id: "above-12000", label: "Above ₹12,000", min: 12000, max: Infinity },
];

export const categories = Array.from(
  new Set(products.map((product) => product.category)),
);
