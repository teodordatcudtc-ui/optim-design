import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { SITE } from "@/lib/constants";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { JsonLd } from "@/components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} – Mobilier de calitate, Galați`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.shortDesc}. Confort, stil și meșteșug. Colecție de mobilier selectat în Galați.`,
  keywords: ["mobilier", "Galați", "living", "dormitor", "dining", "Optim Design"],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: SITE.name,
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://optimdesign.ro"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <JsonLd />
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
