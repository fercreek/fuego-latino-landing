"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type GalleryData = {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
};

export function GalleryClient({ galleryData }: { galleryData: GalleryData }) {
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
