import type { Metadata } from "next";
import { SEO, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: SEO.siteName }],
  creator: SEO.siteName,
  publisher: SEO.siteName,
  applicationName: SEO.brand,
  category: "Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SEO.locale,
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
    url: `${SITE_URL}/`,
    images: [
      {
        url: SEO.ogImage,
        width: SEO.ogImageWidth,
        height: SEO.ogImageHeight,
        alt: SEO.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  icons: {
    icon: [
      { url: SEO.icon, sizes: "32x32", type: "image/png" },
      { url: SEO.icon, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: SEO.appleIcon, sizes: "180x180" }],
    shortcut: SEO.favicon,
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "fr-FR": `${SITE_URL}/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
