import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const BASE_URL = "https://clinicadentaluchuya.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Clínica Dental Uchuya Premium | Sonrisas que Inspiran – Tingo María & Aucayacu",
    template: "%s | Clínica Dental Uchuya Premium",
  },
  description:
    "Especialistas en odontología estética y salud dental premium en Tingo María y Aucayacu. Diseño de sonrisa, implantes, ortodoncia y blanqueamiento con tecnología de vanguardia. Reserva tu cita hoy mismo.",
  keywords: [
    "dentista Tingo María",
    "dentista Aucayacu",
    "clínica dental premium",
    "diseño de sonrisa Perú",
    "implantes dentales Tingo María",
    "ortodoncia Aucayacu",
    "blanqueamiento dental",
    "Clínica Dental Uchuya",
    "Fernando Uchuya dentista",
    "odontología estética Selva Central",
  ],
  authors: [{ name: "Clínica Dental Uchuya Premium" }],
  creator: "Clínica Dental Uchuya Premium",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: "Clínica Dental Uchuya Premium",
    title: "Clínica Dental Uchuya Premium | Transformamos Sonrisas",
    description:
      "Líderes en odontología estética con tecnología de vanguardia y atención personalizada en Tingo María y Aucayacu, Perú.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Clínica Dental Uchuya Premium – Instalaciones de lujo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Uchuya Premium | Sonrisas que Inspiran",
    description:
      "Especialistas en odontología estética y salud dental premium en la Selva Central del Perú.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
  icons: {
    icon: "/logouchuya.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Structured data – Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Clínica Dental Uchuya Premium",
              image: `${BASE_URL}/hero.png`,
              url: BASE_URL,
              telephone: "+51900755788",
              priceRange: "$$",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Av. Alameda Perú 425",
                  addressLocality: "Tingo María",
                  postalCode: "10131",
                  addressCountry: "PE",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Av. Lima 455",
                  addressLocality: "Aucayacu",
                  postalCode: "10171",
                  addressCountry: "PE",
                },
              ],
              sameAs: [
                "https://www.facebook.com/share/1Cf85rz4B8/",
                "https://www.instagram.com/clinicadentaluchuya_premium",
                "https://www.tiktok.com/@uchuya_dental_premium",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
