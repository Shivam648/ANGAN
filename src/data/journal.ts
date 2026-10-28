import type { ImageRef, JournalArticle } from "../lib/types";

const img = (name: string, alt: string, position?: string): ImageRef => ({
  name,
  alt,
  position,
});

export const journal: JournalArticle[] = [
  {
    slug: "winter-mornings-of-magadh",
    title: "The Winter Mornings of Magadh",
    excerpt:
      "On fog, courtyards, the first cup of tea, and the particular warmth of a sweater pulled on before sunrise.",
    category: "Heritage",
    readTime: "6 min read",
    date: "12 October 2026",
    image: img(
      "winter-field",
      "A field of mustard flowers in soft winter fog at first light",
      "center",
    ),
    intro:
      "In Magadh, winter does not arrive all at once. It settles in — first in the early mornings, then in the shade of the courtyard, then in the way everyone begins to sit a little closer together.",
    body: [
      {
        type: "p",
        text: "The fog comes before the light. It softens the edges of the fields, the roofs, the neem trees, until the whole landscape looks like a drawing that has not quite been finished. Somewhere a door opens. A bicycle bell rings twice. The day begins without hurry.",
      },
      {
        type: "p",
        text: "This is the hour the collection was imagined for: not the bright, polished cold of a city winter, but the slower cold of the village, when the first thing you do is reach for something warm.",
      },
      {
        type: "quote",
        text: "Warmth is not a luxury here. It is a daily practice.",
      },
      {
        type: "h2",
        text: "The architecture of warmth",
      },
      {
        type: "p",
        text: "Old houses in this part of Bihar were built around the courtyard. The rooms turn inward; the veranda holds the morning sun; the walls remember the heat of the day long after the light has gone. In winter, the courtyard becomes a kind of clock. You move around it as the sun moves, following the warm patch of stone.",
      },
      {
        type: "p",
        text: "A sweater belongs to this choreography. It is worn indoors and out, over a shirt, under a shawl, folded at the foot of a bed. It is not an occasion. It is a layer of ordinary comfort.",
      },
      {
        type: "image",
        image: img(
          "village-road",
          "A quiet village road with simple houses and a cyclist",
          "center",
        ),
        caption: "A village road, early in the day.",
      },
      {
        type: "h2",
        text: "What we carry",
      },
      {
        type: "p",
        text: "Ask anyone who grew up in a cold house what they remember of winter, and they will rarely describe the weather. They will describe a garment: a father's cardigan, a grandmother's shawl, the sweater that was too big and therefore perfect. Clothing holds memory in a way that few objects do. It is worn against the skin; it goes where we go.",
      },
      {
        type: "p",
        text: "We wanted to make garments that could enter that kind of memory. Not a costume of heritage, but a real, useful thing — warm, quiet, and made with enough care to be kept.",
      },
      {
        type: "p",
        text: "The fog will lift. The day will warm. The sweater will be folded over the back of a chair, waiting for tomorrow. This, too, is a form of inheritance.",
      },
    ],
  },
  {
    slug: "beauty-of-things-made-by-hand",
    title: "The Beauty of Things Made by Hand",
    excerpt:
      "A handmade garment carries the time it took. On small irregularities, human rhythm, and why perfection is not the point.",
    category: "Craft",
    readTime: "5 min read",
    date: "28 September 2026",
    image: img(
      "hands-knitting",
      "Hands knitting with cream wool and wooden needles",
      "center",
    ),
    intro:
      "There is a moment, near the end of a hand-knitted piece, when the maker runs a hand across the surface and knows it is finished. Not because it is flawless, but because it is alive.",
    body: [
      {
        type: "p",
        text: "A machine can produce a perfect stitch. It can repeat that stitch thousands of times without fatigue, without distraction, without a change in tension. A hand cannot. A hand has a mood, a temperature, a rhythm. The evidence of that rhythm is what we mean when we say a garment has character.",
      },
      {
        type: "h2",
        text: "The evidence of a hand",
      },
      {
        type: "p",
        text: "Look closely at a hand-knitted sweater and you will see small shifts: a stitch that sits a little tighter, a row that catches the light differently, a seam that has been eased rather than forced. These are not defects. They are the signature of a person who was present.",
      },
      {
        type: "quote",
        text: "The hand leaves a signature that a machine cannot.",
      },
      {
        type: "h2",
        text: "Time as a material",
      },
      {
        type: "p",
        text: "Handwork asks for time, and time is the most expensive material we use. A single garment can pass through several pairs of hands: the knitter, the finisher, the person who checks the seams and folds it for dispatch. This is not a story of romance. It is a story of labour, skill, and patience — and it should be valued as such.",
      },
      {
        type: "image",
        image: img(
          "hands-knitting-2",
          "Close-up of hands guiding yarn and knitting needles",
          "center",
        ),
        caption: "The rhythm of the work is visible in the cloth.",
      },
      {
        type: "h2",
        text: "A different kind of value",
      },
      {
        type: "p",
        text: "When a thing is made by hand, it is difficult to treat as disposable. You notice the work in it. You are more likely to mend it, to keep it, to pass it on. That is the quiet argument for handmade clothing: not that it is perfect, but that it is worth caring for.",
      },
      {
        type: "p",
        text: "We do not make every garment by hand. Some are machine-knitted and finished by hand; we say so plainly. What matters is that the making is honest, and that the person who wears the garment can feel the difference between something made in a hurry and something made with intention.",
      },
    ],
  },
  {
    slug: "why-we-choose-what-lasts",
    title: "Why We Choose What Lasts",
    excerpt:
      "Heirlooms are rarely precious. They are ordinary things that were cared for long enough to become irreplaceable.",
    category: "Slow Living",
    readTime: "4 min read",
    date: "9 September 2026",
    image: img(
      "stack-beige",
      "A stack of soft beige knitted sweaters",
      "center",
    ),
    intro:
      "The things we keep are not always the things we thought we would. A plain sweater. A wooden comb. A steel tumbler. Objects become heirlooms by accident, through years of use.",
    body: [
      {
        type: "p",
        text: "We are surrounded by things designed to be replaced. Newer, faster, cheaper, brighter. The result is a wardrobe that is always full and never quite enough. Slow fashion begins with a simple refusal: not more, but better.",
      },
      {
        type: "h2",
        text: "The long middle",
      },
      {
        type: "p",
        text: "An heirloom is not defined by its price. It is defined by the length of its life. A garment becomes an heirloom in the long middle between buying and passing on: the years of wear, the repairs, the small alterations, the associations. You cannot manufacture that. You can only make something worthy of it.",
      },
      {
        type: "quote",
        text: "Not made for a season. Made for the years that follow.",
      },
      {
        type: "h2",
        text: "Keeping, not collecting",
      },
      {
        type: "p",
        text: "There is a difference between a wardrobe and a collection. A collection grows; a wardrobe is edited. The aim is not to own every colour, but to own the few things that work together, again and again, until they feel like yours.",
      },
      {
        type: "list",
        items: [
          "Choose natural fibres that age well and can be repaired.",
          "Buy for the life you actually live, not the life you imagine.",
          "Learn to wash and store wool properly; most garments are ruined by carelessness, not wear.",
          "Keep a small mending kit. A loose seam is not the end of a sweater.",
        ],
      },
      {
        type: "p",
        text: "Aangan is a young house. We cannot claim generations of history, and we will not invent one. What we can do is make carefully, describe honestly, and design for the years that follow. The rest is up to time.",
      },
    ],
  },
  {
    slug: "a-guide-to-caring-for-wool",
    title: "A Guide to Caring for Wool",
    excerpt:
      "Wool is more resilient than it seems. A few quiet habits will keep a sweater in good company for years.",
    category: "Care",
    readTime: "5 min read",
    date: "21 August 2026",
    image: img(
      "yarn-knit",
      "Cream yarn resting on a soft knitted surface",
      "center",
    ),
    intro:
      "Wool does not need much. It needs less washing than most of us give it, a little air, and a place to dry flat. Treat it gently and it will keep its shape, its softness, and its warmth.",
    body: [
      {
        type: "p",
        text: "The first rule of wool care is counterintuitive: wash it less. Wool is naturally resistant to odour and dirt. Airing a sweater overnight is often enough to refresh it. When it does need washing, hand wash is kindest.",
      },
      {
        type: "h2",
        text: "Washing",
      },
      {
        type: "list",
        items: [
          "Fill a basin with cool water and a small amount of gentle wool detergent.",
          "Submerge the garment and let it soak for five to ten minutes. Do not rub or agitate.",
          "Rinse in cool water without wringing. Press the water out gently with your palms.",
          "Roll the garment in a clean towel to absorb excess water before drying.",
        ],
      },
      {
        type: "h2",
        text: "Drying",
      },
      {
        type: "p",
        text: "Always dry wool flat. Hanging a wet sweater will stretch the shoulders and distort the body. Lay it on a clean towel or drying rack, away from direct sun and radiators, and reshape it gently while damp. Turn it once if the underside is still wet.",
      },
      {
        type: "h2",
        text: "Storing",
      },
      {
        type: "p",
        text: "Fold, do not hang. Hangers put stress on the shoulders and neckline. Store clean wool in a dry place, with cedar or lavender if moths are a concern. Avoid plastic bags, which trap moisture.",
      },
      {
        type: "image",
        image: img(
          "wool-texture",
          "Close-up of beige wool fabric with a soft texture",
          "center",
        ),
        caption: "A little air, a little rest, and wool keeps its character.",
      },
      {
        type: "h2",
        text: "Mending",
      },
      {
        type: "p",
        text: "Small holes and loose seams are best dealt with early. A simple darn, worked from the inside with matching wool, will often disappear into the texture. If a repair is beyond you, a good tailor or knitwear specialist can help. The goal is not invisibility; it is another decade of wear.",
      },
      {
        type: "quote",
        text: "Care is not maintenance. It is a relationship.",
      },
    ],
  },
  {
    slug: "quiet-geometry-of-a-cable-knit",
    title: "The Quiet Geometry of a Cable Knit",
    excerpt:
      "A cable is a small piece of mathematics: stitches crossing, returning, and holding their shape in cloth.",
    category: "Craft",
    readTime: "4 min read",
    date: "2 August 2026",
    image: img(
      "cable-knit",
      "Close-up of a cream cable knit pattern",
      "center",
    ),
    intro:
      "A cable knit looks simple from a distance. Up close, it is a landscape of crossings — a record of decisions made stitch by stitch.",
    body: [
      {
        type: "p",
        text: "Cable knitting works by holding stitches to one side while others are worked, then crossing them back. The result is a braid, a rope, a wave. The technique is used in knitting traditions around the world, and each tradition has its own grammar of pattern and proportion.",
      },
      {
        type: "h2",
        text: "A grammar of crossings",
      },
      {
        type: "p",
        text: "The width of a cable, the tension of the yarn, the frequency of the crossings: these choices determine whether the final cloth feels rugged or refined. A tight cable can look sculptural; a looser one moves with the body. The knitter is always balancing structure against softness.",
      },
      {
        type: "quote",
        text: "A cable is a pattern you can read with your hands.",
      },
      {
        type: "image",
        image: img(
          "wool-macro",
          "Macro detail of warm beige wool fibres",
          "center",
        ),
        caption: "The surface of a knit is never entirely still.",
      },
      {
        type: "h2",
        text: "Reading a sweater",
      },
      {
        type: "p",
        text: "When you look at a cable knit, look for tension and symmetry. Do the crossings sit evenly? Does the rib at the edge hold the pattern without pulling? Is the neckline finished with the same care as the front? These are the small signs of a garment that was made to last.",
      },
      {
        type: "p",
        text: "Our Patna Heritage Knit uses a single broad cable, kept quiet by a plain ground. The intention is not to display the technique, but to let it settle into the garment. A detail you notice on the second wearing, not the first.",
      },
    ],
  },
  {
    slug: "a-wardrobe-for-slow-days",
    title: "A Wardrobe for Slow Days",
    excerpt:
      "On repetition, neutral layers, and the quiet pleasure of wearing the same good sweater again.",
    category: "Style",
    readTime: "4 min read",
    date: "18 July 2026",
    image: img(
      "editorial-duo",
      "Two women in quiet beige clothing standing in an open landscape",
      "center",
    ),
    intro:
      "The most useful wardrobe is not the most varied one. It is the one whose pieces know how to keep each other company.",
    body: [
      {
        type: "p",
        text: "A good sweater does not need a occasion. It needs a few companions: a pair of trousers that hold their line, a shirt with a collar that sits well, a coat that leaves room for a layer. The rest is repetition.",
      },
      {
        type: "h2",
        text: "Start with one sweater",
      },
      {
        type: "p",
        text: "Choose a colour that sits between the tones you already wear. Oatmeal, charcoal, moss, espresso: these are colours that recede and let the texture speak. A neutral sweater will work harder than a statement one, and it will look better for longer.",
      },
      {
        type: "list",
        items: [
          "Wear a fine turtleneck under a heavier crewneck for a clean, warm layer.",
          "Let a cardigan act as a jacket indoors; it softens the line of a shirt.",
          "Keep the palette close. Two or three tones are enough.",
          "Repeat. The point of a good garment is not novelty; it is familiarity.",
        ],
      },
      {
        type: "h2",
        text: "The case for repetition",
      },
      {
        type: "p",
        text: "There is a particular pleasure in wearing the same sweater for years: the way it softens at the cuff, the way it remembers the shape of your shoulders. This is not a failure of imagination. It is the reward of choosing well.",
      },
      {
        type: "quote",
        text: "Style is what remains when you stop trying to be noticed.",
      },
      {
        type: "p",
        text: "Build slowly. Keep what works. Mend what you can. The wardrobe that lasts is the one you actually wear.",
      },
    ],
  },
];

export const articleBySlug = (slug: string) =>
  journal.find((article) => article.slug === slug);

export const journalCategories = [
  "All",
  "Heritage",
  "Craft",
  "Care",
  "Slow Living",
  "Style",
] as const;
