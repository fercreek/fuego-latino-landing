"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect, useMemo, useState } from "react";

const whatsappNumber = "5218110404188";
const whatsappMessage =
  "Hola, quiero agendar una clase muestra en Fuego Latino Dance Studio.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Estilos", href: "#estilos" },
  { label: "Horarios", href: "#horarios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

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
    level: "Intermedio",
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
      { time: "8:00 PM", classes: ["Salsa Básico", "Salsa Intermedio"] },
      { time: "9:00 PM", classes: ["Bachata Básico", "Bachata Intermedio"] },
    ],
  },
  {
    day: "Martes",
    emoji: "🔥",
    slots: [
      { time: "8:00 PM", classes: ["Salsa Básico", "Salsa Intermedio", "Urbano"] },
      { time: "9:00 PM", classes: ["Bachata Básico", "Bachata Intermedio"] },
    ],
  },
  {
    day: "Jueves",
    emoji: "✨",
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
  { src: "/images/fuego-1.jpg", alt: "Bailarines Fuego Latino", speed: -8 },
  { src: "/images/fuego-2.jpg", alt: "Clase en el estudio", speed: -4 },
  { src: "/images/fuego-3.jpg", alt: "Comunidad Fuego Latino", speed: -2 },
];

const photoGridItems = [
  { src: "/images/fuego-4.jpg", alt: "Show Fuego Latino", span: "row-span-2" },
  { src: "/images/fuego-5.jpg", alt: "Grupo en clase", span: "" },
  { src: "/images/fuego-6.jpg", alt: "Ambiente del estudio", span: "" },
  { src: "/images/studio-fuego.jpg", alt: "Espacio seguro para bailar", span: "" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const currentTestimonial = useMemo(
    () => testimonials[testimonialIndex],
    [testimonialIndex],
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const interest = formData.get("interest")?.toString().trim() || "";
    const message = `Hola, soy ${name || "un estudiante interesado"} (${
      email || "sin correo"
    }). Quiero info sobre ${interest || "clases"} en Fuego Latino.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-24 pt-8 sm:px-8 lg:px-12">
          <Hero />
          <Highlights />
          <Styles />
          <Schedule />
          <PhotoGrid />
          <Testimonials current={currentTestimonial} setIndex={setTestimonialIndex} />
          <ParallaxShowcase />
          <FinalCta onSubmit={handleFormSubmit} />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/80 border-b border-flame-500/10 shadow-lg shadow-flame-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-12">
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-flame-500/30 blur-xl group-hover:bg-flame-400/40 transition-colors" />
            <Image
              src="/logo.png"
              alt="Fuego Latino logo"
              width={52}
              height={52}
              className="relative rounded-full ring-2 ring-flame-500/50 group-hover:ring-flame-400/70 transition-all"
            />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-flame-100 group-hover:text-flame-50 transition-colors">
              Fuego Latino
            </p>
            <p className="text-[11px] font-medium text-flame-300/70 tracking-wide">DANCE STUDIO · MTY</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-foreground/70 hover:text-flame-100 hover:bg-flame-500/10 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={whatsappLink}
          target="_blank"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-lg shadow-flame-500/25 transition-all hover:shadow-xl hover:shadow-flame-500/30 hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="hidden sm:inline">Agenda en</span> WhatsApp
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </motion.header>
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
            alt="Fuego Latino Dance Studio"
            fill
            priority
            sizes="(min-width: 1280px) 60vw, 100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-flame-500/10 via-transparent to-transparent" />
        </div>
        
        <div className="relative grid gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-20">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-flame-500/15 px-4 py-2 text-sm font-semibold text-flame-100 ring-1 ring-flame-500/30 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-flame-400 animate-pulse" />
                Clase muestra sin costo
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-foreground">Baile latino</span>
              <br />
              <span className="bg-gradient-to-r from-flame-400 via-flame-500 to-amber-500 bg-clip-text text-transparent">
                moderno en MTY
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-foreground/70 max-w-lg"
            >
              Salsa, bachata, urbano, jazz y contemporáneo en un espacio seguro y cálido.
              Comunidad que acompaña tu proceso, cero juicios y mucho ritmo.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href={whatsappLink}
                target="_blank"
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-8 py-4 text-base font-bold text-ink-950 shadow-xl shadow-flame-500/30 transition-all hover:shadow-2xl hover:shadow-flame-500/40 hover:-translate-y-1"
              >
                <span className="relative z-10">Agenda clase por WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="#horarios"
                className="inline-flex items-center justify-center rounded-full border-2 border-flame-500/30 px-6 py-3.5 text-base font-semibold text-flame-100 transition-all hover:-translate-y-0.5 hover:border-flame-400/50 hover:bg-flame-500/10"
              >
                Ver horarios →
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-flame-500/20 to-flame-600/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-flame-500/20 bg-ink-900/80 shadow-2xl">
                <Image
                  src="/images/fuego-4.jpg"
                  alt="Show Fuego Latino"
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
          className="group relative overflow-hidden rounded-2xl border border-flame-500/20 bg-gradient-to-br from-ink-900/90 to-ink-800/90 p-6 transition-all hover:border-flame-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-flame-500/10"
        >
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-flame-500/10 blur-2xl group-hover:bg-flame-500/20 transition-colors" />
          <div className="relative">
            <span className="text-3xl mb-4 block">{item.icon}</span>
            <p className="text-lg font-bold text-flame-100">{item.title}</p>
            <p className="mt-2 text-sm text-foreground/60">{item.detail}</p>
          </div>
        </motion.div>
      ))}
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
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Ritmos latinos y urbanos
        </h2>
        <p className="text-lg text-foreground/60">
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
            className={`group relative overflow-hidden rounded-2xl border border-flame-500/20 bg-gradient-to-br ${style.gradient} p-6 transition-all hover:border-flame-500/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-flame-500/15`}
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-flame-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <span className="text-4xl mb-4 block">{style.emoji}</span>
              <h3 className="text-xl font-bold text-flame-100 mb-2">{style.name}</h3>
              <span className="inline-block rounded-full bg-flame-500/20 px-3 py-1 text-xs font-semibold text-flame-200 mb-3">
                {style.level}
              </span>
              <p className="text-sm text-foreground/60">{style.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="horarios" className="space-y-10">
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
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Tu semana de baile
        </h2>
        <p className="text-lg text-foreground/60">
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
            className="rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-4 py-2 text-xs font-bold text-ink-950 shadow-lg shadow-flame-500/25 transition hover:-translate-y-0.5"
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
        className="grid gap-5 lg:grid-cols-3"
      >
        {schedule.map((row) => (
          <motion.div
            key={row.day}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-flame-500/25 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-ink-800/90 p-6 transition-all hover:border-flame-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-flame-500/15"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-flame-500/15 blur-3xl group-hover:bg-flame-500/25 transition-colors" />
            <div className="absolute inset-px rounded-[22px] border border-white/5 pointer-events-none" />
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
                    className="rounded-2xl bg-ink-800/60 p-4 border border-flame-500/15 shadow-inner shadow-black/30"
                  >
                    <p className="text-flame-300 font-bold text-sm mb-2">{slot.time}</p>
                    <div className="flex flex-wrap gap-2">
                      {slot.classes.map((cls) => (
                        <span
                          key={cls}
                          className="rounded-full bg-flame-500/15 px-3 py-1.5 text-xs font-semibold text-flame-50 ring-1 ring-flame-500/30"
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
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
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Nuestra comunidad
        </h2>
        <p className="text-lg text-foreground/60">
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
            className={`group relative overflow-hidden rounded-2xl border border-flame-500/20 shadow-xl shadow-flame-500/10 ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-sm font-semibold text-flame-100 drop-shadow">{item.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
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
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          La comunidad opina
        </h2>
        <p className="text-lg text-foreground/60">
          Alumnos de sociales, shows y competencias que ya bailan con seguridad.
        </p>
      </motion.div>
      
      <div className="relative overflow-hidden rounded-3xl border border-flame-500/20 bg-gradient-to-br from-ink-900/90 to-ink-800/90 px-6 py-12 sm:px-12 shadow-2xl shadow-flame-500/10">
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
              <span className="text-5xl mb-6 block">{current.avatar}</span>
              <p className="text-2xl font-medium text-flame-50 mb-6 leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="text-lg font-bold text-flame-100">{current.name}</p>
              <p className="text-sm text-foreground/50">{current.role}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.name}
                onClick={() => setIndex(idx)}
                className={`h-3 rounded-full transition-all ${
                  idx === testimonials.indexOf(current)
                    ? "w-10 bg-flame-500"
                    : "w-3 bg-ink-700 hover:bg-ink-600"
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
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Luces, vibe y energía latina
        </h2>
        <p className="text-lg text-foreground/60">
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
              className="group relative h-[280px] overflow-hidden rounded-2xl border border-flame-500/20 shadow-xl shadow-flame-500/10"
          >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
              <div className="absolute inset-0 bg-flame-500/0 group-hover:bg-flame-500/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-lg font-bold text-flame-100">{item.alt}</p>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </section>
  );
}

function FinalCta({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
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
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Agenda tu clase muestra gratis
            </h3>
            <p className="text-lg text-foreground/60 max-w-md">
              Escríbenos por WhatsApp y empieza tu semana de baile. También preparamos shows para eventos.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={whatsappLink}
            target="_blank"
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-8 py-4 text-base font-bold text-ink-950 shadow-xl shadow-flame-500/30 transition-all hover:shadow-2xl hover:shadow-flame-500/40 hover:-translate-y-1"
              >
                <span className="relative z-10">Abrir WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <p className="text-foreground/50 font-medium">+52 1 81 1040 4188</p>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-flame-500/20 bg-ink-900/80 backdrop-blur-xl p-6 shadow-xl"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="text-sm font-semibold text-foreground/80 mb-2 block">Nombre</span>
                <input
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-flame-500/20 bg-ink-800/80 px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-flame-500 focus:outline-none focus:ring-2 focus:ring-flame-500/20 transition-all"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground/80 mb-2 block">Correo</span>
                <input
                  name="email"
                  type="email"
                  placeholder="tucorreo@email.com"
                  className="w-full rounded-xl border border-flame-500/20 bg-ink-800/80 px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-flame-500 focus:outline-none focus:ring-2 focus:ring-flame-500/20 transition-all"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground/80 mb-2 block">¿Qué te interesa?</span>
                <select
                  name="interest"
                  className="w-full rounded-xl border border-flame-500/20 bg-ink-800/80 px-4 py-3.5 text-sm text-foreground focus:border-flame-500 focus:outline-none focus:ring-2 focus:ring-flame-500/20 transition-all"
                >
                  <option>Salsa</option>
                  <option>Bachata Sensual</option>
                  <option>Urbano</option>
                  <option>Jazz & Contempo</option>
                  <option>Clase privada</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-flame-500 to-flame-600 px-6 py-4 text-base font-bold text-ink-950 shadow-lg shadow-flame-500/25 transition-all hover:shadow-xl hover:shadow-flame-500/30 hover:-translate-y-0.5"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-flame-500/10 bg-ink-900/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Fuego Latino" width={40} height={40} className="rounded-full" />
            <div>
              <p className="font-bold text-flame-100">Fuego Latino Dance Studio</p>
              <p className="text-sm text-foreground/50">Monterrey, N.L.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href={whatsappLink} target="_blank" className="text-sm font-medium text-foreground/60 hover:text-flame-300 transition-colors">
              WhatsApp
            </Link>
            <Link href="https://www.facebook.com/FuegoLatinoDS" target="_blank" className="text-sm font-medium text-foreground/60 hover:text-flame-300 transition-colors">
              Facebook
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-flame-500/10 text-center">
          <p className="text-sm text-foreground/40">© 2024 Fuego Latino Dance Studio. Todos los derechos reservados.</p>
        </div>
    </div>
    </footer>
  );
}
