import type { Metadata } from "next";

const PAGE_URL = "https://www.fuegolatino.dance/salsa-y-bachata-fuego";

export const metadata: Metadata = {
  title: {
    absolute: "Clases de Baile en San Pedro Garza García | Salsa y Bachata Fuego",
  },
  description:
    "Clases de salsa, bachata, urbano y jazz en San Pedro Garza García. Grupos reducidos, instructores con experiencia y clase muestra gratis. Agenda hoy por WhatsApp.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: PAGE_URL,
    title: "Clases de Baile en San Pedro Garza García | Salsa y Bachata Fuego",
    description:
      "Clases de salsa, bachata, urbano y jazz en San Pedro Garza García. Grupos reducidos, instructores con experiencia y clase muestra gratis. Agenda hoy por WhatsApp.",
    siteName: "Salsa y Bachata Fuego",
    images: [
      {
        url: "https://www.fuegolatino.dance/images/studio-fuego.jpg",
        width: 1200,
        height: 630,
        alt: "Salsa y Bachata Fuego - Academia de baile en San Pedro Garza García, N.L.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de Baile en San Pedro Garza García | Salsa y Bachata Fuego",
    description:
      "Clases de salsa, bachata, urbano y jazz en San Pedro Garza García. Grupos reducidos, instructores con experiencia y clase muestra gratis.",
    images: ["https://www.fuegolatino.dance/images/studio-fuego.jpg"],
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
      "Clases de salsa, bachata, urbano y jazz en San Pedro Garza García. Grupos reducidos, instructores con experiencia y clase muestra gratis.",
    url: PAGE_URL,
    image: [
      "https://www.fuegolatino.dance/images/studio-fuego.jpg",
      "https://www.fuegolatino.dance/syb-fuego-logo.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "118 Plaza Kiarah, C. Murcia, Col. San Agustín",
      addressLocality: "San Pedro Garza García",
      addressRegion: "Nuevo León",
      postalCode: "66278",
      addressCountry: "MX",
    },
    telephone: "+52 81 2016 6663",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "San Pedro Garza García",
    },
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
