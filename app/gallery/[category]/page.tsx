"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const galleryCategories = {
  "brisa-cup": {
    title: "Brisa Cup",
    description: "Galería de imágenes de Brisa Cup",
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
    description: "Galería de imágenes de nuestras clases",
    images: [
      "/images/fuego-clases/clase1.jpeg",
      "/images/fuego-clases/clase2.jpeg",
    ],
  },
  "fuego-ladies": {
    title: "Fuego Ladies",
    description: "Galería de imágenes de Fuego Ladies",
    images: [
      "/images/fuego-ladies/ladies1.jpeg",
    ],
  },
  "mambolee-one": {
    title: "Mambolee One",
    description: "Galería de imágenes de Mambolee One",
    images: [
      "/images/mambolee-one/mambole2025_1.jpeg",
      "/images/mambolee-one/mambole2025_2.jpeg",
      "/images/mambolee-one/mambole2025_3.jpeg",
      "/images/mambolee-one/mambole2025_4.jpeg",
      "/images/mambolee-one/mambole2025_5.jpeg",
    ],
  },
};

export default function GalleryPage() {
  const params = useParams();
  const category = params?.category as string;
  const [galleryData, setGalleryData] = useState<typeof galleryCategories[keyof typeof galleryCategories] | null>(null);

  useEffect(() => {
    if (category && category in galleryCategories) {
      setGalleryData(galleryCategories[category as keyof typeof galleryCategories]);
    }
  }, [category]);

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-flame-400 hover:text-flame-300 transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
            <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">
              {galleryData.title}
            </span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium">{galleryData.description}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.images.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-flame-500/25 shadow-xl shadow-flame-500/15 transition-all duration-500 hover:border-flame-500/50 hover:shadow-2xl hover:shadow-flame-500/30 aspect-square"
            >
              <Image
                src={src}
                alt={`${galleryData.title} - Imagen ${idx + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                loading="lazy"
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-flame-500/0 group-hover:bg-flame-500/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
