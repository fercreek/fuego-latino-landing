import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GalleryClient } from "./GalleryClient";

const baseUrl = "https://fuegolatino.dance";

const galleryCategories = {
  "brisa-cup": {
    title: "Brisa Cup",
    description: "Galería de imágenes de Brisa Cup - Competencia de baile latino en Fuego Latino Dance Studio",
    longDescription: "Explora las mejores imágenes de Brisa Cup, nuestra competencia de baile latino en Monterrey. Momentos capturados de bailarines profesionales en acción.",
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
    description: "Galería de imágenes de nuestras clases de baile en Fuego Latino Dance Studio",
    longDescription: "Descubre cómo son nuestras clases de salsa, bachata, urbano y más. Estudiantes aprendiendo en un ambiente seguro y profesional en Monterrey.",
    images: [
      "/images/fuego-clases/clase1.jpeg",
      "/images/fuego-clases/clase2.jpeg",
    ],
  },
  "fuego-ladies": {
    title: "Fuego Ladies",
    description: "Galería de imágenes de Fuego Ladies - Clases exclusivas para mujeres",
    longDescription: "Galería de Fuego Ladies, nuestras clases exclusivas diseñadas para empoderar a través del baile. Momentos de fuerza, elegancia y comunidad.",
    images: [
      "/images/fuego-ladies/ladies1.jpeg",
    ],
  },
  "mambolee-one": {
    title: "Mambolee One",
    description: "Galería de imágenes de Mambolee One - Evento especial de baile",
    longDescription: "Revive los mejores momentos de Mambolee One, nuestro evento especial de baile latino. Presentaciones, shows y la energía de nuestra comunidad.",
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
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
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

export default function GalleryPage({ params }: Props) {
  const category = params.category;
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

  const structuredData = {
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
  };

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

