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
    "Academia de baile en Monterrey: salsa, bachata, urbano, jazz y danza aérea. Instructores profesionales, grupos reducidos y clase muestra gratis. ¡Reserva hoy!",
  keywords: [
    "clases de baile monterrey",
    "salsa monterrey",
    "bachata monterrey",
    "salsa y bachata mty",
    "clases de salsa mty",
    "clases de bachata mty",
    "academia de baile monterrey",
    "escuela de baile monterrey",
    "baile latino monterrey",
    "clases de baile cerca de mí",
    "dance studio monterrey",
    "clases de salsa monterrey",
    "clases de bachata monterrey",
    "baile urbano monterrey",
    "jazz contemporáneo monterrey",
    "danza aérea monterrey",
    "clases de danza aérea mty",
    "fuego latino",
    "fuego latino dance studio",
    "estudio de baile monterrey",
    "clases de baile para adultos monterrey",
    "sociales de baile monterrey",
    "competencia de baile monterrey",
    "clase muestra gratis baile monterrey",
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
      "Academia de baile en Monterrey: salsa, bachata, urbano, jazz y danza aérea. Grupos reducidos, instructores profesionales y clase muestra gratis. ¡Reserva hoy!",
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
      "Academia de baile en Monterrey: salsa, bachata, urbano, jazz y danza aérea. Grupos reducidos, instructores profesionales y clase muestra gratis. ¡Reserva hoy!",
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
    google: "IgoSOySDI3CbKThsvpwaenl8S64AZDlCwmIOQysvPh8",
  },
  other: {
    "msvalidate.01": "", // Agregar código de Bing cuando esté disponible
    "yandex-verification": "", // Agregar código de Yandex cuando esté disponible
    "geo.region": "MX-NLE",
    "geo.placename": "Monterrey, Nuevo León",
    "geo.position": "25.6714;-100.3101",
    "ICBM": "25.6714, -100.3101",
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
      streetAddress: "Av. Chapultepec 724, Calle 7ma Zona, Col. Caracol",
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
        opens: "19:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "11:00",
        closes: "13:30",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.6714",
      longitude: "-100.3101",
    },
    hasMap: "https://maps.google.com/?q=Av.+Chapultepec+724+Caracol+Monterrey",
    sameAs: [
      "https://www.instagram.com/fuegolatino.dancestudio/",
      "https://www.facebook.com/FuegoLatinoDS",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mariana G." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "En un mes ya bailaba social sin miedo. Las clases son dinámicas y el ambiente es súper cálido.",
        name: "Alumna de Bachata",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Luis R." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Aprendí técnica y musicalidad real, no solo pasos. Además hacen comunidad, siempre hay eventos.",
        name: "Salsa y Social",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Andrea P." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Las coreos se sienten de show. Las instalaciones son modernas y los coaches súper atentos.",
        name: "Urbano",
      },
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
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Danza Aérea",
            description: "Danza aérea para kids y adultos los sábados. Fortalece tu cuerpo y descubre todo lo que eres capaz de lograr.",
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
