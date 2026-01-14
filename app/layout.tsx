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
    "Fuego Latino Dance Studio: Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey, Nuevo León. Espacio seguro, instructores profesionales y comunidad cálida. Clase muestra gratis. Tu estudio de baile latino moderno en MTY.",
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
  metadataBase: new URL("https://fuegolatino.dance"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: ["es"],
    url: "https://fuegolatino.dance",
    title: "Fuego Latino Dance Studio | Clases de Baile en Monterrey",
    description:
      "Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Espacio seguro, instructores profesionales y comunidad cálida. Agenda tu clase muestra gratis.",
    siteName: "Fuego Latino Dance Studio",
    images: [
      {
        url: "https://fuegolatino.dance/images/studio-fuego.jpg",
        width: 1200,
        height: 630,
        alt: "Fuego Latino Dance Studio - Estudio de baile latino moderno en Monterrey, Nuevo León",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuego Latino Dance Studio | Clases de Baile en Monterrey",
    description:
      "Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Espacio seguro, instructores profesionales y comunidad cálida. Agenda tu clase muestra gratis.",
    images: [
      {
        url: "https://fuegolatino.dance/images/studio-fuego.jpg",
        width: 1200,
        height: 630,
        alt: "Fuego Latino Dance Studio - Estudio de baile latino moderno en Monterrey",
      },
    ],
    creator: "@fuegolatino.dancestudio",
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
    // bing: "tu-codigo-bing",
  },
  other: {
    "msvalidate.01": "", // Agregar código de Bing cuando esté disponible
    "yandex-verification": "", // Agregar código de Yandex cuando esté disponible
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["DanceSchool", "LocalBusiness", "School"],
    name: "Fuego Latino Dance Studio",
    description:
      "Clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Espacio seguro, instructores profesionales y comunidad cálida. Agenda tu clase muestra gratis.",
    url: "https://fuegolatino.dance",
    logo: "https://fuegolatino.dance/logo.png",
    image: [
      "https://fuegolatino.dance/images/studio-fuego.jpg",
      "https://fuegolatino.dance/logo.png",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      addressCountry: "MX",
      streetAddress: "Monterrey, Nuevo León",
    },
    telephone: "+52 1 81 1040 4188",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday"],
        opens: "20:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday"],
        opens: "20:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday"],
        opens: "20:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/fuegolatino.dancestudio/",
      "https://www.facebook.com/FuegoLatinoDS",
    ],
    areaServed: {
      "@type": "City",
      name: "Monterrey",
    },
    offers: {
      "@type": "Offer",
      name: "Clase muestra gratis",
      description: "Clase muestra sin costo para nuevos estudiantes",
      price: "0",
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      url: "https://fuegolatino.dance#contacto",
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
            description: "Footwork limpio, musicalidad y conexiones sociales. Todos los niveles.",
            provider: {
              "@type": "Organization",
              name: "Fuego Latino Dance Studio",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Bachata Sensual",
            description: "Flow caribeño, body rolls y giros suaves. Niveles básico e intermedio.",
            provider: {
              "@type": "Organization",
              name: "Fuego Latino Dance Studio",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Baile Urbano",
            description: "Reggaetón y comercial para soltar energía. Nivel básico.",
            provider: {
              "@type": "Organization",
              name: "Fuego Latino Dance Studio",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Jazz & Contemporáneo",
            description: "Líneas largas, técnica y flow escénico para adultos.",
            provider: {
              "@type": "Organization",
              name: "Fuego Latino Dance Studio",
            },
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
