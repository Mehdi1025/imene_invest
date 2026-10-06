export const SITE_URL = "https://www.reign-invest.com";

export const SEO = {
  siteName: "M&B by Reign",
  brand: "Reign Invest",
  title:
    "Investir à Dubaï | M&B by Reign — Consultante Immobilier Francophone",
  description:
    "M&B by Reign accompagne les investisseurs francophones dans l'acquisition de biens à Dubaï — de la sélection du bien jusqu'à la gestion locative, en partenariat exclusif avec DRN Real Estate.",
  keywords: [
    "investir à Dubaï",
    "investissement immobilier Dubaï",
    "acheter appartement Dubaï",
    "immobilier Dubai francophone",
    "Golden Visa UAE",
    "rendement locatif Dubaï",
    "expatriation Dubaï",
    "M&B by Reign",
    "Imène Reign",
    "Reign Invest",
    "DRN Real Estate",
    "gestion locative Dubaï",
    "immobilier off-plan Dubai",
    "Dubai Marina investissement",
    "JVC Dubai",
    "Palm Jumeirah",
  ],
  locale: "fr_FR",
  themeColor: "#3D0E3D",
  ogImage: "/assets/images/image-d71134b3.png",
  ogImageWidth: 1420,
  ogImageHeight: 710,
  ogImageAlt:
    "Skyline de Dubaï — Investissement immobilier avec M&B by Reign",
  icon: "/icon.png",
  appleIcon: "/apple-touch-icon.png",
  favicon: "/favicon.png",
} as const;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
