import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GalleryClient } from "./GalleryClient";

const baseUrl = "https://fuegolatino.dance";

const galleryCategories = {
  "brisa-cup": {
    title: "Brisa Cup",
    description: "Galería Brisa Cup — Competencia de baile latino en Fuego Latino Dance Studio, Monterrey NL",
    longDescription: "Explora las mejores imágenes de Brisa Cup, la competencia de salsa y baile latino de Fuego Latino Dance Studio en Monterrey, Nuevo León. Momentos capturados de bailarines profesionales en acción.",
    images: [
      "/images/brisa-cup/brisa2025_1.jpeg",
      "/images/brisa-cup/brisa2025_2.jpeg",
      "/images/brisa-cup/brisa2025_3.jpeg",
      "/images/brisa-cup/brisa2025_4.jpeg",
      "/images/brisa-cup/brisa2025_5.jpeg",
    ],
  },
  "fuego-clases": {
    title: "Fuego Clases",
    description: "Clases de salsa, bachata, urbano y jazz en Fuego Latino Dance Studio, Monterrey NL — fotos reales",
    longDescription: "Descubre cómo son nuestras clases de salsa, bachata, urbano, jazz y contemporáneo en Monterrey. Estudiantes aprendiendo en un ambiente seguro, profesional y con instructores certificados.",
    images: [
      "/images/fuego-clases/clase1.jpeg",
      "/images/fuego-clases/clase2.jpeg",
    ],
  },
  "fuego-ladies": {
    title: "Fuego Ladies",
    description: "Fuego Ladies — Clases de baile exclusivas para mujeres en Fuego Latino Dance Studio, Monterrey",
    longDescription: "Galería de Fuego Ladies en Monterrey, nuestras clases de baile latino diseñadas para empoderar a mujeres a través de la salsa y bachata. Momentos de fuerza, elegancia y comunidad.",
    images: [
      "/images/fuego-ladies/ladies1.jpeg",
    ],
  },
  "mambolee-one": {
    title: "Mambolee One",
    description: "Mambolee One — Evento de baile latino en Fuego Latino Dance Studio, Monterrey NL",
    longDescription: "Revive los mejores momentos de Mambolee One, evento especial de salsa y baile latino organizado por Fuego Latino Dance Studio en Monterrey. Presentaciones, shows y la energía de nuestra comunidad.",
    images: [
      "/images/mambolee-one/mambole2025_1.jpeg",
      "/images/mambolee-one/mambole2025_2.jpeg",
      "/images/mambolee-one/mambole2025_3.jpeg",
      "/images/mambolee-one/mambole2025_4.jpeg",
      "/images/mambolee-one/mambole2025_5.jpeg",
    ],
  },
};

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const galleryData = category in galleryCategories 
    ? galleryCategories[category as keyof typeof galleryCategories]
    : null;

  if (!galleryData) {
    return {
      title: "Galería no encontrada",
    };
  }

  const url = `${baseUrl}/gallery/${category}`;
  const imageUrl = `${baseUrl}${galleryData.images[0]}`;

  return {
    title: `${galleryData.title} | Fuego Latino Dance Studio`,
    description: galleryData.longDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: url,
      title: `${galleryData.title} | Fuego Latino Dance Studio`,
      description: galleryData.longDescription,
      siteName: "Fuego Latino Dance Studio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${galleryData.title} - Fuego Latino Dance Studio`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${galleryData.title} | Fuego Latino Dance Studio`,
      description: galleryData.longDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${galleryData.title} - Fuego Latino Dance Studio`,
        },
      ],
    },
  };
}

export default async function GalleryPage({ params }: Props) {
  const { category } = await params;
  const galleryData = category in galleryCategories 
    ? galleryCategories[category as keyof typeof galleryCategories]
    : null;

  if (!galleryData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-flame-100 mb-4">Galería no encontrada</h1>
          <Link href="/" className="text-flame-400 hover:text-flame-300 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: galleryData.title,
      description: galleryData.longDescription,
      url: `${baseUrl}/gallery/${category}`,
      image: galleryData.images.map((img) => `${baseUrl}${img}`),
      publisher: {
        "@type": "Organization",
        name: "Fuego Latino Dance Studio",
        url: baseUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Galería",
          item: `${baseUrl}/gallery`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: galleryData.title,
          item: `${baseUrl}/gallery/${category}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GalleryClient galleryData={galleryData} />
    </>
  );
}

