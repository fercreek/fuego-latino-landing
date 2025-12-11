import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fuego Latino Dance Studio | Clases de Baile en Monterrey",
    template: "%s | Fuego Latino Dance Studio",
  },
  description:
    "Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Espacio seguro, instructores profesionales y comunidad cálida. Agenda tu clase muestra gratis. Fuego Latino Dance Studio - Tu estudio de baile latino en MTY.",
  keywords: [
    "clases de baile monterrey",
    "salsa monterrey",
    "bachata monterrey",
    "baile latino monterrey",
    "dance studio monterrey",
    "clases de salsa",
    "clases de bachata",
    "baile urbano monterrey",
    "jazz contemporáneo monterrey",
    "fuego latino",
    "estudio de baile monterrey",
    "clases de baile para adultos",
    "sociales de baile monterrey",
    "competencia de baile",
  ],
  authors: [{ name: "Fuego Latino Dance Studio" }],
  creator: "Fuego Latino Dance Studio",
  publisher: "Fuego Latino Dance Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fuego-latino-landing.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://fuego-latino-landing.vercel.app",
    title: "Fuego Latino Dance Studio | Clases de Baile en Monterrey",
    description:
      "Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Espacio seguro, instructores profesionales y comunidad cálida. Agenda tu clase muestra gratis.",
    siteName: "Fuego Latino Dance Studio",
    images: [
      {
        url: "/images/studio-fuego.jpg",
        width: 1200,
        height: 630,
        alt: "Fuego Latino Dance Studio - Estudio de baile en Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuego Latino Dance Studio | Clases de Baile en Monterrey",
    description:
      "Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Agenda tu clase muestra gratis.",
    images: ["/images/studio-fuego.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar cuando tengas los códigos de verificación
    // google: "tu-codigo-google",
    // yandex: "tu-codigo-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: "Fuego Latino Dance Studio",
    description:
      "Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Espacio seguro, instructores profesionales y comunidad cálida.",
    url: "https://fuego-latino-landing.vercel.app",
    logo: "https://fuego-latino-landing.vercel.app/logo.png",
    image: "https://fuego-latino-landing.vercel.app/images/studio-fuego.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      addressCountry: "MX",
    },
    telephone: "+52 1 81 1040 4188",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "20:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/fuegolatino.dancestudio/",
      "https://www.facebook.com/FuegoLatinoDS",
    ],
    offers: {
      "@type": "Offer",
      name: "Clase muestra gratis",
      description: "Clase muestra sin costo para nuevos estudiantes",
      price: "0",
      priceCurrency: "MXN",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clases de Baile",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Salsa",
            description: "Footwork limpio, musicalidad y conexiones sociales",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Bachata Sensual",
            description: "Flow caribeño, body rolls y giros suaves",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Baile Urbano",
            description: "Reggaetón y comercial para soltar energía",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Jazz & Contemporáneo",
            description: "Líneas largas, técnica y flow escénico para adultos",
          },
        },
      ],
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${manrope.variable} antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
