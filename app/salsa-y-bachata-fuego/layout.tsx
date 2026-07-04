import type { Metadata } from "next";

const PAGE_URL = "https://www.fuegolatino.dance/salsa-y-bachata-fuego";

export const metadata: Metadata = {
  title: {
    absolute: "Clases de Baile en San Agustín y San Jerónimo | Salsa y Bachata Fuego",
  },
  description:
    "Clases de salsa, bachata y cumbia en San Agustín (San Pedro Garza García) y San Jerónimo, Monterrey. Grupos reducidos, instructores con experiencia y clase muestra gratis. Agenda hoy por WhatsApp.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: PAGE_URL,
    title: "Clases de Baile en San Agustín y San Jerónimo | Salsa y Bachata Fuego",
    description:
      "Clases de salsa, bachata y cumbia en San Agustín (San Pedro Garza García) y San Jerónimo, Monterrey. Grupos reducidos, instructores con experiencia y clase muestra gratis. Agenda hoy por WhatsApp.",
    siteName: "Salsa y Bachata Fuego",
    images: [
      {
        url: "https://www.fuegolatino.dance/images/fuego-clases/syb-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Salsa y Bachata Fuego - Academia de baile en San Agustín y San Jerónimo, N.L.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de Baile en San Agustín y San Jerónimo | Salsa y Bachata Fuego",
    description:
      "Clases de salsa, bachata y cumbia en San Agustín (San Pedro Garza García) y San Jerónimo, Monterrey. Grupos reducidos, instructores con experiencia y clase muestra gratis.",
    images: ["https://www.fuegolatino.dance/images/fuego-clases/syb-hero.jpg"],
  },
};

export default function SalsaYBachataFuegoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["DanceSchool", "LocalBusiness"],
    name: "Salsa y Bachata Fuego",
    description:
      "Clases de salsa, bachata y cumbia en San Agustín (San Pedro Garza García) y San Jerónimo, Monterrey. Grupos reducidos, instructores con experiencia y clase muestra gratis.",
    url: PAGE_URL,
    image: [
      "https://www.fuegolatino.dance/images/fuego-clases/syb-hero.jpg",
      "https://www.fuegolatino.dance/syb-fuego-logo.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Real San Agustín 302, Plaza Saaghi, Residencial San Agustín 1er Sector",
      addressLocality: "San Pedro Garza García",
      addressRegion: "Nuevo León",
      postalCode: "66260",
      addressCountry: "MX",
    },
    telephone: "+52 81 2016 6663",
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "San Pedro Garza García" },
      { "@type": "City", name: "Monterrey" },
    ],
    hasMap:
      "https://www.google.com/maps/place/Salsa+y+Bachata+Fuego/@25.6337583,-100.3318433,17z",
    parentOrganization: {
      "@type": "Organization",
      name: "Fuego Latino Dance Studio",
      url: "https://www.fuegolatino.dance",
    },
    offers: {
      "@type": "Offer",
      name: "Clase muestra gratis",
      description: "Clase muestra sin costo para nuevos estudiantes",
      price: "0",
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#contacto`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
