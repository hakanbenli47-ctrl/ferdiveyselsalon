import type { Metadata } from "next";
import { FloatingContact } from "@/components/FloatingContact";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ferdi Veysel Salon | Batman Saç & Güzellik",
    template: "%s | Ferdi Veysel Salon",
  },
  description:
    "Batman'da kişiye özel saç tasarımı, renklendirme, gelin saçı, makyaj ve bakım uygulamaları için Ferdi Veysel Salon.",
  keywords: [
    "Batman bayan kuaförü",
    "Batman güzellik salonu",
    "Batman saç tasarım",
    "Batman gelin saçı",
    "Ferdi Veysel Salon",
  ],
  icons: { icon: "/favicon.svg" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Ferdi Veysel Salon",
  telephone: "+90 543 773 91 98",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batman Merkez",
    addressRegion: "Batman",
    addressCountry: "TR",
  },
  areaServed: "Batman",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}
