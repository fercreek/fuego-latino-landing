"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect, useMemo, useState } from "react";
import { Competitions } from "./sections/competitions";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { whatsappNumber, whatsappLink } from "./constants";

const highlights = [
  { icon: "🤝", title: "Acompañamiento cercano", detail: "Instructores que guían paso a paso y sin juicios." },
  { icon: "🧡", title: "Espacio seguro", detail: "Ambiente respetuoso para todas las edades y ritmos." },
  { icon: "🎉", title: "Comunidad viva", detail: "Sociales, grupos y amigos que bailan juntos." },
];

const stylesOffered = [
  {
    name: "Salsa",
    emoji: "🕺",
    description: "Footwork limpio, musicalidad y conexiones sociales.",
    level: "Todos los niveles",
    gradient: "from-flame-500/20 to-flame-600/10",
  },
  {
    name: "Bachata Sensual",
    emoji: "💫",
    description: "Flow caribeño, body rolls y giros suaves.",
    level: "Básico / Intermedio",
    gradient: "from-amber-500/20 to-flame-500/10",
  },
  {
    name: "Urbano",
    emoji: "🔊",
    description: "Reggaetón y comercial para soltar energía.",
    level: "Básico",
    gradient: "from-red-500/20 to-flame-500/10",
  },
  {
    name: "Jazz & Contempo",
    emoji: "✨",
    description: "Líneas largas, técnica y flow escénico para adultos.",
    level: "Adultos",
    gradient: "from-orange-500/20 to-flame-500/10",
  },
];

const schedule = [
  {
    day: "Lunes",
    emoji: "🌙",
    slots: [
      { time: "8:00 PM", classes: ["Salsa"] },
      { time: "9:00 PM", classes: ["Bachata"] },
    ],
  },
  {
    day: "Martes",
    emoji: "🔥",
    slots: [
      { time: "8:00 PM", classes: ["Urbano"] },
    ],
  },
  {
    day: "Miércoles",
    emoji: "✨",
    slots: [
      { time: "8:00 PM", classes: ["Salsa"] },
      { time: "9:00 PM", classes: ["Bachata"] },
    ],
  },
  {
    day: "Jueves",
    emoji: "💫",
    slots: [
      { time: "8:00 PM", classes: ["Jazz & Contempo Adultos"] },
    ],
  },
];

const testimonials = [
  {
    name: "Mariana G.",
    role: "Alumna de Bachata",
    quote:
      "En un mes ya bailaba social sin miedo. Las clases son dinámicas y el ambiente es súper cálido.",
    avatar: "🌸",
  },
  {
    name: "Luis R.",
    role: "Salsa y Social",
    quote:
      "Aprendí técnica y musicalidad real, no solo pasos. Además hacen comunidad, siempre hay eventos.",
    avatar: "🎯",
  },
  {
    name: "Andrea P.",
    role: "Urbano",
    quote:
      "Las coreos se sienten de show. Las instalaciones son modernas y los coaches súper atentos.",
    avatar: "💃",
  },
];

const gallery = [
  { src: "/images/fuego-1.jpg", alt: "Bailarines profesionales de Fuego Latino Dance Studio en presentación de baile latino en Monterrey", speed: -8 },
  { src: "/images/fuego-2.jpg", alt: "Clase de baile en Fuego Latino Dance Studio - Estudiantes aprendiendo salsa y bachata", speed: -4 },
  { src: "/images/fuego-3.jpg", alt: "Comunidad de bailarines de Fuego Latino Dance Studio en evento social de baile", speed: -2 },
];

const photoGridItems = [
  { src: "/images/fuego-4.jpg", alt: "Show de baile profesional Fuego Latino Dance Studio - Presentación en escenario", span: "row-span-2" },
  { src: "/images/fuego-5.jpg", alt: "Grupo de estudiantes en clase de baile latino en Fuego Latino Dance Studio Monterrey", span: "" },
  { src: "/images/fuego-6.jpg", alt: "Ambiente moderno del estudio de baile Fuego Latino Dance Studio en Monterrey", span: "" },
  { src: "/images/studio-fuego.jpg", alt: "Espacio seguro y profesional para clases de baile en Fuego Latino Dance Studio Monterrey", span: "" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  // const [testimonialIndex, setTestimonialIndex] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  //   }, 5000);
  //   return () => clearInterval(id);
  // }, []);

  // const currentTestimonial = useMemo(
  //   () => testimonials[testimonialIndex],
  //   [testimonialIndex],
  // );

  const [formState, setFormState] = useState<{
    loading: boolean;
    error: string;
    success: boolean;
  }>({ loading: false, error: "", success: false });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ loading: true, error: "", success: false });

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const interest = formData.get("interest")?.toString().trim() || "";

    if (!name) {
      setFormState({ loading: false, error: "Por favor ingresa tu nombre", success: false });
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormState({ loading: false, error: "Por favor ingresa un correo válido", success: false });
      return;
    }

    const message = `Hola, soy ${name}${email ? ` (${email})` : ""}. Quiero info sobre ${interest || "clases"} en Fuego Latino.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setFormState({ loading: false, error: "", success: true });
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setFormState({ loading: false, error: "", success: false });
      }, 3000);
    }, 500);
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main className="mx-auto flex max-w-7xl flex-col gap-32 px-4 pb-32 pt-12 sm:px-8 lg:px-12">
          <Hero />
          <Highlights />
          <SocialMedia />
          <Styles />
          <Schedule />
          <PhotoGrid />
          <GalleryCategories />
          <Competitions />
          {/* <Testimonials current={currentTestimonial} setIndex={setTestimonialIndex} /> */}
          <ParallaxShowcase />
          <FinalCta onSubmit={handleFormSubmit} formState={formState} />
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppFloat />
      </div>
    </ParallaxProvider>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-flame-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-flame-600/10 blur-[100px] pointer-events-none" />

      <div className="relative rounded-[2.5rem] border border-flame-500/20 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-ink-800/90 overflow-hidden shadow-2xl shadow-flame-500/10">
        <div className="absolute inset-0">
        <Image
            src="/images/studio-fuego.jpg"
            alt="Fuego Latino Dance Studio - Estudio de baile latino moderno en Monterrey, Nuevo León"
            fill
          priority
            sizes="(min-width: 1280px) 60vw, 100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-flame-500/10 via-transparent to-transparent" style={{ left: '4px', top: '32px' }} />
        </div>

        <div className="relative grid gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-20 overflow-hidden" style={{ borderRadius: '199px' }}>
          <div className="absolute inset-0 -z-10 pointer-events-none" style={{ borderRadius: '199px' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-flame-500/15 to-transparent animate-pulse" />
            <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-flame-600/25 via-flame-500/15 to-transparent blur-2xl" style={{ animation: 'flicker 3s ease-in-out infinite' }} />
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-amber-500/25 via-flame-400/15 to-transparent blur-2xl" style={{ animation: 'flicker 2s ease-in-out infinite 0.5s' }} />
            <div className="absolute bottom-0 left-1/4 h-2/3 w-1/2 bg-gradient-to-t from-flame-500/20 via-flame-400/12 to-transparent blur-3xl" style={{ animation: 'flicker 2.5s ease-in-out infinite 1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-3/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-flame-500/15 via-flame-400/8 to-transparent blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 h-3/4 w-1/3 bg-gradient-to-t from-flame-600/18 via-flame-500/10 to-transparent blur-3xl" style={{ animation: 'flicker 2.2s ease-in-out infinite 0.3s' }} />
            <div className="absolute top-0 left-1/3 h-1/2 w-1/3 bg-gradient-to-b from-flame-500/20 via-flame-400/10 to-transparent blur-2xl" style={{ animation: 'flicker 2.8s ease-in-out infinite 0.7s' }} />
            <div className="absolute bottom-1/4 left-0 h-1/2 w-1/4 bg-gradient-to-r from-flame-600/20 to-transparent blur-2xl" style={{ animation: 'flicker 2.3s ease-in-out infinite 0.4s' }} />
          </div>
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 relative z-10"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-flame-500/15 px-4 py-2 text-sm font-semibold text-flame-100 ring-1 ring-flame-500/30 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-flame-400 animate-pulse" />
                Clase muestra sin costo
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="text-foreground drop-shadow-lg">Baile latino</span>
              <br />
              <span className="bg-gradient-to-r from-flame-400 via-flame-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,106,0,0.5)] burning-text">
                moderno en MTY
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl leading-relaxed text-foreground/80 max-w-lg font-medium"
            >
              Salsa, bachata, urbano, jazz y contemporáneo en un espacio seguro y cálido.
              Comunidad que acompaña tu proceso, cero juicios y mucho ritmo.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href={whatsappLink}
                target="_blank"
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-8 py-4 text-base font-bold text-ink-950 shadow-xl shadow-flame-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-flame-500/50 hover:-translate-y-1.5 hover:scale-105"
              >
                <span className="relative z-10">Agenda clase por WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="#horarios"
                className="inline-flex items-center justify-center rounded-full border-2 border-flame-500/40 px-6 py-3.5 text-base font-semibold text-flame-100 transition-all duration-300 hover:-translate-y-1 hover:border-flame-400/60 hover:bg-flame-500/15 hover:shadow-lg hover:shadow-flame-500/20"
              >
                Ver horarios →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }}
            className="relative flex items-center justify-center lg:justify-end z-10"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-flame-500/20 to-flame-600/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-flame-500/20 bg-ink-900/80 shadow-2xl">
                <Image
                  src="/images/studio-fuego.jpg"
                  alt="Fuego Latino Dance Studio - Estudio de baile latino moderno en Monterrey"
                  width={1200}
                  height={1600}
                  className="h-[380px] w-full object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 rounded-2xl bg-ink-900/80 backdrop-blur-xl p-4 border border-flame-500/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-flame-500/20 text-2xl">
                      🔥
                    </div>
                    <div>
                      <p className="text-base font-bold text-flame-100">Espacio seguro</p>
                      <p className="text-sm text-foreground/60">Para disfrutar, aprender y compartir baile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <motion.section
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-4 sm:grid-cols-3"
    >
      {highlights.map((item) => (
        <motion.div
          key={item.title}
          variants={scaleIn}
          className="group relative overflow-hidden rounded-2xl border border-flame-500/25 bg-gradient-to-br from-ink-900/95 to-ink-800/95 p-7 transition-all duration-300 hover:border-flame-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-flame-500/20 hover:scale-[1.02]"
        >
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-flame-500/10 blur-2xl group-hover:bg-flame-500/20 transition-colors" />
          <div className="absolute inset-0 bg-flame-500/0 group-hover:bg-flame-500/10 transition-colors duration-500" style={{ left: '4px', top: '32px' }} />
          <div className="relative">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-4xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <p className="text-xl font-bold text-flame-100 mb-2">{item.title}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

function SocialMedia() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-flame-500/30 bg-gradient-to-br from-ink-900/90 to-ink-800/90 p-8 sm:p-12 shadow-2xl shadow-flame-500/10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-flame-500/10 blur-[80px]" />
        <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-flame-600/10 blur-[60px]" />

        <div className="relative text-center space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400 mb-4">
              Síguenos
            </p>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">Únete a nuestra comunidad</span>
            </h3>
            <p className="text-lg text-foreground/70 font-medium max-w-2xl mx-auto">
              Mira nuestras clases, shows y momentos especiales en nuestras redes sociales.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://www.instagram.com/fuegolatino.dancestudio/"
              target="_blank"
              className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="https://www.facebook.com/FuegoLatinoDS"
              target="_blank"
              className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-6 py-3.5 text-base font-bold text-ink-950 shadow-lg shadow-flame-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-flame-500/40 hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Styles() {
  return (
    <section id="estilos" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400 mb-4">
          Estilos que impartimos
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-5">
          <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">Ritmos latinos y urbanos</span>
        </h2>
        <p className="text-lg text-foreground/70 font-medium">
          Aprende pasos sociales, escenario y coreos. Grupos reducidos y acompañamiento personalizado.
        </p>
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stylesOffered.map((style) => (
          <motion.div
            key={style.name}
            variants={fadeUp}
            className={`group relative overflow-hidden rounded-2xl border border-flame-500/25 bg-gradient-to-br ${style.gradient} p-7 transition-all duration-300 hover:border-flame-500/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-flame-500/25 hover:scale-[1.03]`}
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-flame-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <span className="text-5xl mb-5 block transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">{style.emoji}</span>
              <h3 className="text-xl font-bold text-flame-100 mb-3">{style.name}</h3>
              <span className="inline-block rounded-full bg-flame-500/25 px-3 py-1.5 text-xs font-semibold text-flame-200 mb-4 ring-1 ring-flame-500/30">
                {style.level}
              </span>
              <p className="text-sm text-foreground/70 leading-relaxed">{style.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="horarios" className="relative space-y-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,143,51,0.06),transparent_30%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400">
          Horarios
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">Tu semana de baile</span>
        </h2>
        <p className="text-lg text-foreground/70 font-medium">
          Presencial en Monterrey. Grupos cercanos, cupo limitado y cambio de nivel según tu avance.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-flame-500/15 px-4 py-2 text-xs font-semibold text-flame-100 ring-1 ring-flame-500/30">
            Reserva por WhatsApp
          </span>
          <span className="rounded-full bg-ink-800 px-4 py-2 text-xs font-semibold text-foreground/70 ring-1 ring-flame-500/15">
            Niveles: Básico e Intermedio
          </span>
          <Link
            href={whatsappLink}
            target="_blank"
            className="rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-4 py-2 text-xs font-bold text-ink-950 shadow-lg shadow-flame-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-flame-500/40 hover:-translate-y-1 hover:scale-105"
          >
            Agendar horario
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {schedule.map((row) => (
          <motion.div
            key={row.day}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-flame-500/30 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-ink-800/90 p-7 transition-all duration-300 hover:border-flame-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-flame-500/25 hover:scale-[1.02]"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-flame-500/15 blur-3xl group-hover:bg-flame-500/25 transition-colors" />
            <div className="absolute inset-px rounded-[22px] border border-white/5 backdrop-blur-[2px] pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{row.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-flame-100">{row.day}</h3>
                    <p className="text-xs text-foreground/50">Cupo limitado · Reserva</p>
                  </div>
                </div>
                <span className="rounded-full bg-flame-500/15 px-3 py-1 text-[11px] font-semibold text-flame-100 ring-1 ring-flame-500/30">
                  Presencial
                </span>
              </div>
              <div className="space-y-4">
                {row.slots.map((slot) => (
                  <div
                    key={slot.time}
                    className="rounded-2xl bg-ink-800/80 p-5 border border-flame-500/25 shadow-inner shadow-black/40 transition-all duration-300 group-hover:border-flame-500/40"
                  >
                    <p className="text-flame-100 font-semibold text-sm mb-3">{slot.time}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {slot.classes.map((cls) => (
                        <span
                          key={cls}
                          className="rounded-full bg-flame-500/15 px-3 py-1.5 text-xs font-semibold text-flame-50 ring-1 ring-flame-500/40"
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hola, quiero reservar clase el ${row.day} a las ${slot.time} en Fuego Latino.\n\nClases disponibles:\n${slot.classes.map(cls => `• ${cls}`).join('\n')}`
                      )}`}
                      target="_blank"
                      className="inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-flame-500 to-flame-600 px-4 py-2.5 text-xs font-bold text-ink-950 shadow-lg shadow-flame-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-flame-500/35 hover:-translate-y-1 hover:scale-[1.02]"
                    >
                      Reservar {slot.time}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function PhotoGrid() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400 mb-4">
          Momentos
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-5">
          <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">Nuestra comunidad</span>
        </h2>
        <p className="text-lg text-foreground/70 font-medium">
          Clases, sociales y shows con la gente que hace Fuego Latino.
        </p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px]">
        {photoGridItems.map((item) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group relative overflow-hidden rounded-2xl border border-flame-500/25 shadow-xl shadow-flame-500/15 transition-all duration-500 hover:border-flame-500/50 hover:shadow-2xl hover:shadow-flame-500/30 ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              loading="lazy"
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-flame-500/0 group-hover:bg-flame-500/10 transition-colors duration-500" style={{ left: '4px', top: '32px' }} />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-bold text-flame-100 drop-shadow-lg">{item.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function GalleryCategories() {
  const categories = [
    {
      id: "brisa-cup",
      title: "Brisa Cup",
      image: "/images/brisa-cup/brisa2025_1.jpeg",
      gradient: "from-blue-500/20 to-flame-500/10",
    },
    {
      id: "fuego-clases",
      title: "Fuego Clases",
      image: "/images/fuego-clases/clase1.jpeg",
      gradient: "from-flame-500/20 to-amber-500/10",
    },
    {
      id: "fuego-ladies",
      title: "Fuego Ladies",
      image: "/images/fuego-ladies/ladies1.jpeg",
      gradient: "from-pink-500/20 to-flame-500/10",
    },
    {
      id: "mambolee-one",
      title: "Mambolee One",
      image: "/images/mambolee-one/mambole2025_1.jpeg",
      gradient: "from-purple-500/20 to-flame-500/10",
    },
  ];

  return (
    <section className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400 mb-4">
          Galerías
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-5">
          <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">Nuestros eventos y clases</span>
        </h2>
        <p className="text-lg text-foreground/70 font-medium">
          Explora nuestras galerías de eventos, competencias y clases.
        </p>
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={fadeUp}
          >
            <Link
              href={`/gallery/${category.id}`}
              className={`group relative overflow-hidden rounded-2xl border border-flame-500/25 bg-gradient-to-br ${category.gradient} transition-all duration-300 hover:border-flame-500/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-flame-500/25 hover:scale-[1.03] block`}
            >
              <div className="relative h-[280px] sm:h-[320px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                <div className="absolute inset-0 bg-flame-500/0 group-hover:bg-flame-500/10 transition-colors duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-flame-100 mb-2 drop-shadow-lg">
                  {category.title}
                </h3>
                <p className="text-sm text-flame-200/80 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  Ver galería
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Testimonials({
  current,
  setIndex,
}: {
  current: (typeof testimonials)[number];
  setIndex: (value: number) => void;
}) {
  return (
    <section id="testimonios" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400 mb-4">
          Testimonios
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-5">
          <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">La comunidad opina</span>
        </h2>
        <p className="text-lg text-foreground/70 font-medium">
          Alumnos de sociales, shows y competencias que ya bailan con seguridad.
        </p>
      </motion.div>

      <div className="relative overflow-hidden rounded-3xl border border-flame-500/30 bg-gradient-to-br from-ink-900/95 to-ink-800/95 px-6 py-16 sm:px-12 shadow-2xl shadow-flame-500/20">
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-flame-500/10 blur-3xl" />
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-flame-600/10 blur-3xl" />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-6xl mb-8 block transform scale-100">{current.avatar}</span>
              <p className="text-2xl sm:text-3xl font-medium text-flame-50 mb-8 leading-relaxed max-w-3xl mx-auto">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="text-xl font-bold text-flame-100 mb-1">{current.name}</p>
              <p className="text-sm text-foreground/60 font-medium">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.name}
                onClick={() => setIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === testimonials.indexOf(current)
                    ? "w-12 bg-flame-500 shadow-lg shadow-flame-500/50"
                    : "w-3 bg-ink-700 hover:bg-ink-600 hover:w-6"
                }`}
                aria-label={`Ver testimonio de ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParallaxShowcase() {
  return (
    <section className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400 mb-4">
          El estudio
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-5">
          <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">Luces, vibe y energía latina</span>
        </h2>
        <p className="text-lg text-foreground/70 font-medium">
          Un espacio diseñado para que fluya tu baile.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {gallery.map((item, idx) => (
          <Parallax speed={item.speed} key={item.src}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[320px] overflow-hidden rounded-2xl border border-flame-500/25 shadow-xl shadow-flame-500/15 transition-all duration-500 hover:border-flame-500/50 hover:shadow-2xl hover:shadow-flame-500/30"
          >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                loading="lazy"
                className="object-cover transition-all duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-flame-500/0 group-hover:bg-flame-500/15 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-bold text-flame-100 drop-shadow-lg">{item.alt}</p>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </section>
  );
}

function FinalCta({
  onSubmit,
  formState
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formState: { loading: boolean; error: string; success: boolean };
}) {
  return (
    <section id="contacto">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-flame-500/30 bg-gradient-to-br from-ink-900 via-ink-900/95 to-ink-800 p-8 sm:p-12 shadow-2xl shadow-flame-500/15">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-flame-500/15 blur-[80px]" />
        <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-flame-600/10 blur-[60px]" />

        <div className="relative grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400">
              ¿Listo para bailar?
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
              <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">Agenda tu clase muestra gratis</span>
            </h3>
            <p className="text-lg text-foreground/70 font-medium max-w-md leading-relaxed">
              Escríbenos por WhatsApp y empieza tu semana de baile. También preparamos shows para eventos.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={whatsappLink}
            target="_blank"
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-8 py-4 text-base font-bold text-ink-950 shadow-xl shadow-flame-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-flame-500/50 hover:-translate-y-1.5 hover:scale-105"
              >
                <span className="relative z-10">Abrir WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a href="tel:+528110404188" className="text-foreground/70 font-medium hover:text-flame-300 transition-colors duration-300">
                +52 1 81 1040 4188
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-flame-500/30 bg-ink-900/90 backdrop-blur-xl p-8 shadow-2xl shadow-flame-500/10"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="text-sm font-semibold text-foreground/80 mb-2 block">Nombre</span>
                <input
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-flame-500/25 bg-ink-800/90 px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-flame-500 focus:outline-none focus:ring-2 focus:ring-flame-500/30 transition-all duration-300 hover:border-flame-500/40"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground/80 mb-2 block">Correo</span>
                <input
                  name="email"
                  type="email"
                  placeholder="tucorreo@email.com"
                  className="w-full rounded-xl border border-flame-500/25 bg-ink-800/90 px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-flame-500 focus:outline-none focus:ring-2 focus:ring-flame-500/30 transition-all duration-300 hover:border-flame-500/40"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground/80 mb-2 block">¿Qué te interesa?</span>
                <select
                  name="interest"
                  className="w-full rounded-xl border border-flame-500/25 bg-ink-800/90 px-4 py-3.5 text-sm text-foreground focus:border-flame-500 focus:outline-none focus:ring-2 focus:ring-flame-500/30 transition-all duration-300 hover:border-flame-500/40"
                >
                  <option>Salsa</option>
                  <option>Bachata Sensual</option>
                  <option>Urbano</option>
                  <option>Jazz & Contempo</option>
                  <option>Clase privada</option>
                </select>
              </label>
              <AnimatePresence>
                {formState.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-xl bg-red-500/20 border border-red-500/30 px-4 py-3 text-sm text-red-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formState.error}
                  </motion.div>
                )}
                {formState.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-xl bg-green-500/20 border border-green-500/30 px-4 py-3 text-sm text-green-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ¡Mensaje enviado! Redirigiendo a WhatsApp...
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="submit"
                disabled={formState.loading}
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-flame-500 to-flame-600 px-6 py-4 text-base font-bold text-ink-950 shadow-lg shadow-flame-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-flame-500/40 hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
              >
                {formState.loading ? "Enviando..." : "Enviar por WhatsApp"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

