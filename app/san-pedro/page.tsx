"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { locations } from "../lib/locations";

const loc = locations["san-pedro"];
const waLink = `https://wa.me/${loc.waNumber}?text=${encodeURIComponent(loc.waMessage)}`;

const styles = [
  {
    name: "Salsa",
    emoji: "🔥",
    desc: "On1 y On2, todos los niveles. Del básico al performance.",
  },
  {
    name: "Bachata",
    emoji: "🌹",
    desc: "Sensual y tradicional. Conexión, técnica y musicalidad.",
  },
  {
    name: "Urbano",
    emoji: "⚡",
    desc: "Reggaeton, hip-hop y fusión. Energía pura.",
  },
  {
    name: "Jazz & Contempo",
    emoji: "🎭",
    desc: "Técnica clásica moderna. Expresión corporal y estilo.",
  },
];

export default function SanPedroPage() {
  const [form, setForm] = useState({ nombre: "", tel: "", interes: "Salsa" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre} (${form.tel}). Me interesa: ${form.interes}. Quiero agendar una clase muestra en Fuego San Pedro.`;
    window.open(
      `https://wa.me/${loc.waNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-flame-500/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <Link href="https://www.fuegolatino.dance" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-flame-500/20 blur-xl group-hover:bg-flame-400/30 transition-colors duration-300 rounded-lg" />
              <Image
                src="/syb-fuego-logo.jpg"
                alt="Salsa y Bachata Fuego"
                width={110}
                height={36}
                className="relative object-contain rounded-md"
                style={{ padding: "4px 6px", background: "#fff" }}
              />
            </div>
            <p className="text-[10px] font-medium text-flame-300/70 tracking-wide hidden sm:block">
              SAN PEDRO GARZA GARCÍA
            </p>
          </Link>
          <Link
            href={waLink}
            target="_blank"
            className="hidden sm:flex rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-5 py-2 text-sm font-bold text-ink-950 shadow-lg shadow-flame-500/30 hover:shadow-flame-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Agenda en WhatsApp
          </Link>
        </div>
      </header>

      {/* MUDANZA CALLOUT */}
      {loc.moving?.active && (
        <div className="bg-flame-500/10 border-b border-flame-500/30">
          <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-8 flex items-center gap-3 text-sm">
            <span className="text-flame-400 font-semibold shrink-0">📦 Próximamente:</span>
            <span className="text-foreground/80">
              Nos mudamos a <strong className="text-flame-300">{loc.moving.plazaName}</strong> —{" "}
              {loc.moving.newAddressShort}
            </span>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-32 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-flame-950/40 via-background to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-flame-500/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-flame-400 uppercase">
            {loc.municipality}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-flame-50 sm:text-6xl leading-tight">
            Salsa y Bachata{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-400 to-flame-600">
              Fuego
            </span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-xl mx-auto">
            Academia de baile en San Pedro. Salsa, bachata, urbano y más. Grupos
            reducidos, instructores con experiencia y ambiente de comunidad real.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={waLink}
              target="_blank"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-8 py-4 text-base font-bold text-ink-950 shadow-xl shadow-flame-500/30 hover:shadow-2xl hover:shadow-flame-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">Agenda clase muestra gratis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href={`tel:${loc.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-flame-500/40 px-8 py-4 text-base font-medium text-flame-300 hover:bg-flame-500/10 hover:border-flame-400/60 transition-all duration-300"
            >
              📞 {loc.phone}
            </Link>
          </div>
        </div>
      </section>

      {/* DIRECCIÓN ACTUAL */}
      <section className="px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Ubicación actual */}
            <div className="rounded-2xl border border-flame-500/20 bg-ink-900/40 p-6 backdrop-blur-sm">
              <p className="mb-1 text-xs font-semibold tracking-widest text-flame-400 uppercase">
                Ubicación actual
              </p>
              <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                {loc.address}
              </p>
              {loc.mapsUrl && (
                <Link
                  href={loc.mapsUrl}
                  target="_blank"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-flame-400 hover:text-flame-300 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Ver en Google Maps
                </Link>
              )}
            </div>

            {/* Próxima ubicación */}
            {loc.moving?.active && (
              <div className="rounded-2xl border border-flame-500/50 bg-flame-500/10 p-6 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-flame-500 px-2.5 py-0.5 text-[10px] font-bold text-ink-950 uppercase tracking-wider">
                    Próximamente
                  </span>
                </div>
                <p className="mb-1 text-xs font-semibold tracking-widest text-flame-400 uppercase">
                  Nueva ubicación — {loc.moving.plazaName}
                </p>
                <p className="text-sm font-medium text-foreground/90 leading-relaxed pr-24">
                  {loc.moving.newAddress}
                </p>
                <p className="mt-3 text-xs text-flame-300/70">
                  Espéranos pronto en un espacio más grande y mejor equipado.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ESTILOS */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-flame-100 sm:text-3xl">
            ¿Qué bailamos?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {styles.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-flame-500/20 bg-ink-900/40 p-5 text-center hover:border-flame-500/50 hover:bg-ink-900/60 transition-all duration-300 group"
              >
                <span className="text-3xl">{s.emoji}</span>
                <h3 className="mt-3 text-base font-bold text-flame-100 group-hover:text-flame-50">
                  {s.name}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO / CTA */}
      <section id="contacto" className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-md">
          <div className="rounded-3xl border border-flame-500/20 bg-ink-900/60 p-8 backdrop-blur-sm">
            <h2 className="mb-2 text-center text-xl font-bold text-flame-100">
              Agenda tu clase muestra gratis
            </h2>
            <p className="mb-6 text-center text-sm text-foreground/60">
              Sin compromiso. Te contactamos por WhatsApp.
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
              <select
                value={form.interes}
                onChange={(e) => setForm({ ...form, interes: e.target.value })}
                className="rounded-xl border border-flame-500/20 bg-ink-800/60 px-4 py-3 text-sm text-foreground focus:border-flame-500/50 focus:outline-none focus:ring-1 focus:ring-flame-500/30 transition-all"
              >
                <option>Salsa</option>
                <option>Bachata</option>
                <option>Urbano</option>
                <option>Jazz & Contempo</option>
                <option>No sé, quiero explorar</option>
              </select>
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-flame-500 to-flame-600 py-3.5 text-sm font-bold text-ink-950 shadow-lg shadow-flame-500/30 hover:shadow-xl hover:shadow-flame-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Enviar por WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-flame-500/20 bg-ink-900/60">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/syb-fuego-logo.jpg" alt="Salsa y Bachata Fuego" width={100} height={34} className="object-contain" />
            <div>
              <p className="font-bold text-flame-100 text-sm">Salsa y Bachata Fuego</p>
              <p className="text-xs text-foreground/50">San Pedro Garza García, N.L.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href={waLink}
              target="_blank"
              className="text-foreground/60 hover:text-flame-300 transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href={`https://www.instagram.com/${loc.instagram}/`}
              target="_blank"
              className="text-foreground/60 hover:text-flame-300 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://www.fuegolatino.dance"
              className="text-foreground/60 hover:text-flame-300 transition-colors"
            >
              Sede Chapultepec
            </Link>
          </div>
        </div>
      </footer>

      {/* WA FLOAT */}
      <Link
        href={waLink}
        target="_blank"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300"
        aria-label="Abrir WhatsApp"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </Link>
    </div>
  );
}
