"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { locations } from "../lib/locations";

const loc = locations["san-nicolas"];
const mainWaLink = `https://wa.me/${loc.waNumber}?text=${encodeURIComponent(loc.waMessage)}`;

const styles = [
  { name: "Salsa", emoji: "🔥", desc: "On1 y On2, todos los niveles." },
  { name: "Bachata", emoji: "🌹", desc: "Sensual y tradicional." },
  { name: "Urbano", emoji: "⚡", desc: "Reggaeton, hip-hop y fusión." },
  { name: "Jazz & Contempo", emoji: "🎭", desc: "Técnica y expresión." },
];

export default function SanNicolasPage() {
  const [form, setForm] = useState({ nombre: "", tel: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre} (${form.tel}). Me interesa Salsa y Bachata Fuego cuando abran en San Nicolás. ¡Avísenme!`;
    window.open(
      `https://wa.me/${loc.waNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-flame-500/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <Link href="https://www.fuegolatino.dance" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-flame-500/30 blur-xl group-hover:bg-flame-400/40 transition-colors duration-300" />
              <Image
                src="/logo.png"
                alt="Fuego Latino Dance Studio"
                width={44}
                height={44}
                className="relative rounded-full ring-2 ring-flame-500/50"
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold text-flame-100">Fuego Latino</p>
              <p className="text-[10px] font-medium text-flame-300/70 tracking-wide">
                SAN NICOLÁS DE LOS GARZA
              </p>
            </div>
          </Link>
          <Link
            href={mainWaLink}
            target="_blank"
            className="hidden sm:flex rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-5 py-2 text-sm font-bold text-ink-950 shadow-lg shadow-flame-500/30 hover:shadow-flame-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Avísame cuando abran
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-36 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-flame-950/40 via-background to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-flame-500/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl">
          {/* Coming soon badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-flame-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-flame-400 uppercase">
              Próximamente en San Nicolás
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-flame-50 sm:text-6xl leading-tight">
            Salsa y Bachata{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-400 to-flame-600">
              Fuego
            </span>
            <br />
            <span className="text-2xl sm:text-4xl text-foreground/60 font-medium">
              llega a San Nicolás
            </span>
          </h1>

          <p className="mt-6 text-lg text-foreground/70 max-w-xl mx-auto">
            La academia de baile que está transformando el norte de Monterrey
            llega a San Nicolás de los Garza. Deja tus datos y te avisamos
            cuando abramos.
          </p>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="px-4 pb-20 sm:px-8">
        <div className="mx-auto max-w-md">
          <div className="rounded-3xl border border-flame-500/30 bg-ink-900/60 p-8 backdrop-blur-sm">
            {sent ? (
              <div className="text-center py-6">
                <span className="text-4xl">🔥</span>
                <h3 className="mt-4 text-lg font-bold text-flame-100">
                  ¡Listo! Te avisamos cuando abramos
                </h3>
                <p className="mt-2 text-sm text-foreground/60">
                  Pendientes en WhatsApp.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-2 text-center text-xl font-bold text-flame-100">
                  Sé el primero en saber
                </h2>
                <p className="mb-6 text-center text-sm text-foreground/60">
                  Cupo limitado en apertura. Registra tus datos y te contactamos.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="rounded-xl border border-flame-500/20 bg-ink-800/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-flame-500/50 focus:outline-none focus:ring-1 focus:ring-flame-500/30 transition-all"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Tu WhatsApp"
                    value={form.tel}
                    onChange={(e) => setForm({ ...form, tel: e.target.value })}
                    className="rounded-xl border border-flame-500/20 bg-ink-800/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-flame-500/50 focus:outline-none focus:ring-1 focus:ring-flame-500/30 transition-all"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-flame-500 to-flame-600 py-3.5 text-sm font-bold text-ink-950 shadow-lg shadow-flame-500/30 hover:shadow-xl hover:shadow-flame-500/50 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Avísame cuando abran →
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Mientras tanto */}
          <div className="mt-6 rounded-2xl border border-flame-500/10 bg-ink-900/30 p-5 text-center">
            <p className="text-sm text-foreground/60 mb-3">
              ¿No quieres esperar? Visítanos en nuestras sedes activas:
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.fuegolatino.dance"
                className="text-sm font-medium text-flame-400 hover:text-flame-300 transition-colors"
              >
                🔥 Chapultepec (sede principal)
              </Link>
              <Link
                href="/san-pedro"
                className="text-sm font-medium text-flame-400 hover:text-flame-300 transition-colors"
              >
                📍 San Pedro Garza García
              </Link>
              <Link
                href="https://g.co/kgs/san-jeronimo-fuego"
                className="text-sm font-medium text-flame-400 hover:text-flame-300 transition-colors"
              >
                📍 San Jerónimo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESTILOS PREVIEW */}
      <section className="px-4 py-16 sm:px-8 border-t border-flame-500/10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-xs font-semibold tracking-widest text-flame-400 uppercase">
            Lo que viene a San Nicolás
          </p>
          <h2 className="mb-10 text-center text-2xl font-bold text-flame-100">
            ¿Qué vamos a bailar?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {styles.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-flame-500/20 bg-ink-900/40 p-5 text-center hover:border-flame-500/40 transition-all duration-300 group"
              >
                <span className="text-3xl">{s.emoji}</span>
                <h3 className="mt-3 text-sm font-bold text-flame-100">{s.name}</h3>
                <p className="mt-1 text-xs text-foreground/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-flame-500/20 bg-ink-900/60">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Fuego Latino" width={36} height={36} className="rounded-full" />
            <div>
              <p className="font-bold text-flame-100 text-sm">Salsa y Bachata Fuego</p>
              <p className="text-xs text-foreground/50">Próximamente en San Nicolás de los Garza</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href={mainWaLink}
              target="_blank"
              className="text-foreground/60 hover:text-flame-300 transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href="https://www.fuegolatino.dance"
              className="text-foreground/60 hover:text-flame-300 transition-colors"
            >
              Sede principal
            </Link>
          </div>
        </div>
      </footer>

      {/* WA FLOAT */}
      <Link
        href={mainWaLink}
        target="_blank"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300"
        aria-label="Avísame cuando abran"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </Link>
    </div>
  );
}
