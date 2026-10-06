import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const root = join(import.meta.dirname, "..");
const indexPath = join(root, "public", "index.html");
const jsonLd = readFileSync(
  join(root, "public", "structured-data.json"),
  "utf8",
).replace(/\s+/g, " ").trim();

const keywords =
  "investir à Dubaï, investissement immobilier Dubaï, acheter appartement Dubaï, immobilier Dubai francophone, Golden Visa UAE, rendement locatif Dubaï, expatriation Dubaï, M&B by Reign, Imène Reign, Reign Invest, DRN Real Estate, gestion locative Dubaï, immobilier off-plan Dubai, Dubai Marina, JVC Dubai, Palm Jumeirah";

const headSeo = `\t<title>Investir à Dubaï | M&amp;B by Reign — Consultante Immobilier Francophone</title>
\t<meta name="description" content="M&amp;B by Reign accompagne les investisseurs francophones dans l'acquisition de biens à Dubaï — de la sélection du bien jusqu'à la gestion locative, en partenariat exclusif avec DRN Real Estate.">
\t<meta name="keywords" content="${keywords}">
\t<meta name="author" content="M&amp;B by Reign">
\t<meta name="creator" content="M&amp;B by Reign">
\t<meta name="publisher" content="M&amp;B by Reign">
\t<meta name="application-name" content="Reign Invest">
\t<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
\t<meta name="googlebot" content="index, follow">
\t<meta name="theme-color" content="#3D0E3D">
\t<meta name="format-detection" content="telephone=no">
\t<meta name="geo.region" content="AE-DU">
\t<meta name="geo.placename" content="Dubai">
\t<link rel="canonical" href="https://www.reign-invest.com/">
\t<link rel="alternate" hreflang="fr" href="https://www.reign-invest.com/">
\t<link rel="alternate" hreflang="x-default" href="https://www.reign-invest.com/">
\t<meta name="framer-search-index" content="/assets/meta/meta-1a054059.json">
\t<meta name="framer-search-index-fallback" content="/assets/meta/meta-0aa53d61.json">
\t<link rel="icon" type="image/png" sizes="32x32" href="/icon.png">
\t<link rel="icon" type="image/png" sizes="192x192" href="/icon.png">
\t<link rel="shortcut icon" href="/favicon.png">
\t<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
\t<link rel="manifest" href="/site.webmanifest">
\t<meta property="og:type" content="website">
\t<meta property="og:locale" content="fr_FR">
\t<meta property="og:site_name" content="M&amp;B by Reign">
\t<meta property="og:url" content="https://www.reign-invest.com/">
\t<meta property="og:title" content="Investir à Dubaï | M&amp;B by Reign — Consultante Immobilier Francophone">
\t<meta property="og:description" content="M&amp;B by Reign accompagne les investisseurs francophones dans l'acquisition de biens à Dubaï — de la sélection du bien jusqu'à la gestion locative, en partenariat exclusif avec DRN Real Estate.">
\t<meta property="og:image" content="https://www.reign-invest.com/assets/images/image-d71134b3.png">
\t<meta property="og:image:secure_url" content="https://www.reign-invest.com/assets/images/image-d71134b3.png">
\t<meta property="og:image:type" content="image/png">
\t<meta property="og:image:width" content="1420">
\t<meta property="og:image:height" content="710">
\t<meta property="og:image:alt" content="Skyline de Dubaï — Investissement immobilier avec M&amp;B by Reign">
\t<meta name="twitter:card" content="summary_large_image">
\t<meta name="twitter:title" content="Investir à Dubaï | M&amp;B by Reign — Consultante Immobilier Francophone">
\t<meta name="twitter:description" content="M&amp;B by Reign accompagne les investisseurs francophones à Dubaï : achat immobilier, rendements 7-10%, Golden Visa et gestion locative.">
\t<meta name="twitter:image" content="https://www.reign-invest.com/assets/images/image-d71134b3.png">
\t<meta name="twitter:image:alt" content="Skyline de Dubaï — Investissement immobilier avec M&amp;B by Reign">
\t<script type="application/ld+json">${jsonLd.replace(/<\//g, "<\\/")}</script>`;

let html = readFileSync(indexPath, "utf8");

html = html.replace(
  /\t<title>[\s\S]*?<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  headSeo,
);

writeFileSync(indexPath, html, "utf8");
console.log("Patched index.html SEO head");

for (const metaFile of ["meta-1a054059.json", "meta-0aa53d61.json"]) {
  const metaPath = join(root, "public", "assets", "meta", metaFile);
  const meta = JSON.parse(readFileSync(metaPath, "utf8"));
  meta["/"].title =
    "Investir à Dubaï | M&B by Reign — Consultante Immobilier Francophone";
  meta["/"].description =
    "M&B by Reign accompagne les investisseurs francophones dans l'acquisition de biens à Dubaï — de la sélection du bien jusqu'à la gestion locative, en partenariat exclusif avec DRN Real Estate.";
  meta["/"].keywords = keywords;
  writeFileSync(metaPath, JSON.stringify(meta), "utf8");
  console.log(`Updated ${metaFile}`);
}
