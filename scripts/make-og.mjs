import sharp from "sharp";

const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1A2A21" stop-opacity="0.88"/>
      <stop offset="0.62" stop-color="#1A2A21" stop-opacity="0.48"/>
      <stop offset="1" stop-color="#1A2A21" stop-opacity="0.25"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#B49A68" stroke-width="1" opacity="0.75"/>
  <text x="88" y="150" fill="#F5F0E6" font-family="Georgia, serif" font-size="24" letter-spacing="8">MAGADH · BIHAR</text>
  <text x="84" y="330" fill="#F5F0E6" font-family="Georgia, serif" font-size="104" letter-spacing="14">AANGAN</text>
  <text x="88" y="415" fill="#F5F0E6" font-family="Georgia, serif" font-size="38" font-style="italic" opacity="0.92">An heirloom, in the making.</text>
  <text x="88" y="525" fill="#D9CDBB" font-family="Arial, sans-serif" font-size="18" letter-spacing="4">HANDCRAFTED KNITWEAR · MADE TO BE KEPT</text>
</svg>`);

await sharp("public/images/hero-knit-2000.webp")
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: overlay }])
  .png({ quality: 90 })
  .toFile("public/og-cover.png");

console.log("og-cover.png written");
