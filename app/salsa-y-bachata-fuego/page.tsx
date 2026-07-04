"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { locations, sucursales } from "../lib/locations";

const loc = locations["salsa-y-bachata-fuego"];
const waLink = `https://wa.me/${loc.waNumber}?text=${encodeURIComponent(loc.waMessage)}`;

const styles = [
  { num: "01", name: "Salsa", desc: "On1 y On2, todos los niveles. Del básico al performance." },
  { num: "02", name: "Bachata", desc: "Sensual y tradicional. Conexión, técnica y musicalidad." },
  { num: "03", name: "Cumbia", desc: "Ritmo y sabor tradicional. Para bailar en pareja o en grupo." },
];

export default function SanPedroPage() {
  const [form, setForm] = useState({ nombre: "", tel: "", interes: "Salsa" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre} (${form.tel}). Me interesa: ${form.interes}. Quiero agendar una clase muestra en Salsa y Bachata Fuego.`;
    window.open(
      `https://wa.me/${loc.waNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="https://www.fuegolatino.dance" className="flex items-center gap-3">
            <div className="relative w-36 h-12 shrink-0">
              <Image
                src="/syb-fuego-logo.jpg"
                alt="Salsa y Bachata Fuego"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <Link
            href={waLink}
            target="_blank"
            className="rounded-lg bg-[#d05020] hover:bg-[#b04010] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200"
          >
            Agenda en WhatsApp
          </Link>
        </div>
      </header>

      {/* MUDANZA BANNER */}
      {loc.moving?.active && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-2.5 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Próximamente:</span>{" "}
            nos mudamos a <span className="font-semibold">{loc.moving.plazaName}</span>{" "}
            — {loc.moving.newAddressShort}
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Texto */}
            <div className="flex-1 min-w-0">
              <p className="mb-6 text-xs tracking-[0.3em] text-gray-400 uppercase font-medium">
                Academia de Baile
              </p>
              <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-black tracking-tighter leading-[0.9] text-gray-900">
                Salsa y Bachata{" "}
                <span className="text-[#d05020]">Fuego</span>
              </h1>
              <p className="mt-8 text-lg text-gray-500 max-w-md leading-relaxed">
                Aprende a bailar en San Pedro. Grupos reducidos, instructores
                con experiencia y comunidad real desde el primer día.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href={waLink}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-lg bg-[#d05020] hover:bg-[#b04010] px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200"
                >
                  Agenda clase muestra gratis
                </Link>
                <Link
                  href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 hover:border-gray-300 px-7 py-3.5 text-base font-medium text-gray-700 transition-colors duration-200"
                >
                  {loc.phone}
                </Link>
              </div>
            </div>
            {/* Foto real de clase — reemplaza la animación genérica por prueba social real */}
            <div className="w-full lg:w-[480px] shrink-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60 ring-1 ring-gray-100">
                <Image
                  src="/images/fuego-clases/syb-hero.jpg"
                  alt="Clase de baile en Salsa y Bachata Fuego, San Pedro"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 backdrop-blur px-3 py-1.5">
                  <p className="text-xs font-bold text-gray-900">Comunidad real, desde el primer día</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-100 mx-6" />

      {/* SUCURSALES */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs tracking-[0.3em] text-gray-400 uppercase font-medium">
            Sucursales
          </p>
          <h2 className="mb-10 text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            Dónde estamos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sucursales.map((s) => (
              <div
                key={s.id}
                className={`p-7 rounded-xl border ${s.comingSoon ? "border-gray-100 bg-gray-50" : "border-gray-200 bg-white"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold tracking-widest text-[#d05020] uppercase">
                    {s.name}
                  </p>
                  {s.comingSoon && (
                    <span className="rounded-md bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      Próximamente
                    </span>
                  )}
                </div>
                {s.address ? (
                  <p className="text-sm text-gray-700 leading-relaxed">{s.address}</p>
                ) : (
                  <p className="text-sm text-gray-400 italic">Dirección por confirmar</p>
                )}
                {s.moving?.active && (
                  <p className="mt-2 text-xs text-[#d05020] font-medium">
                    → Próximo: {s.moving.newAddressShort}
                  </p>
                )}
                {s.styles && (
                  <p className="mt-3 text-xs text-gray-500">
                    <span className="font-semibold text-gray-600">Estilos:</span> {s.styles}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-4">
                  {s.mapsUrl && (
                    <Link
                      href={s.mapsUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d05020] hover:text-[#b04010] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      Ver en Google Maps
                    </Link>
                  )}
                  {s.facebookUrl && (
                    <Link
                      href={s.facebookUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d05020] hover:text-[#b04010] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z" />
                      </svg>
                      Facebook
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-100 mx-6" />

      {/* ESTILOS */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs tracking-[0.3em] text-gray-400 uppercase font-medium">
            Clases disponibles
          </p>
          <h2 className="mb-12 text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            ¿Qué bailamos?
          </h2>
          <div className="grid gap-px bg-gray-100 sm:grid-cols-3 rounded-xl overflow-hidden border border-gray-100">
            {styles.map((s) => (
              <div
                key={s.name}
                className="bg-white p-8 hover:bg-gray-50 transition-colors duration-200 group"
              >
                <p className="text-4xl font-black tracking-tighter text-[#d05020]/20 group-hover:text-[#d05020]/40 transition-colors mb-4">
                  {s.num}
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-100 mx-6" />

      {/* FORMULARIO */}
      <section id="contacto" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-lg">
          <p className="mb-2 text-xs tracking-[0.3em] text-gray-400 uppercase font-medium">
            Primera clase
          </p>
          <h2 className="mb-8 text-3xl font-black tracking-tight text-gray-900">
            Agenda tu clase muestra gratis
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              required
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#d05020]/50 focus:outline-none focus:ring-1 focus:ring-[#d05020]/20 transition-all bg-white"
            />
            <input
              required
              type="tel"
              placeholder="WhatsApp"
              value={form.tel}
              onChange={(e) => setForm({ ...form, tel: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#d05020]/50 focus:outline-none focus:ring-1 focus:ring-[#d05020]/20 transition-all bg-white"
            />
            <select
              value={form.interes}
              onChange={(e) => setForm({ ...form, interes: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#d05020]/50 focus:outline-none focus:ring-1 focus:ring-[#d05020]/20 transition-all bg-white"
            >
              <option>Salsa</option>
              <option>Bachata</option>
              <option>Urbano</option>
              <option>Jazz &amp; Contempo</option>
              <option>No sé, quiero explorar</option>
            </select>
            <button
              type="submit"
              className="mt-1 rounded-lg bg-[#d05020] hover:bg-[#b04010] py-3.5 text-sm font-semibold text-white transition-colors duration-200"
            >
              Enviar por WhatsApp →
            </button>
            <p className="text-center text-xs text-gray-400 mt-1">
              Sin compromiso. Te contactamos por WhatsApp.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/syb-fuego-logo.jpg"
              alt="Salsa y Bachata Fuego"
              width={120}
              height={42}
              className="object-contain"
            />
            <p className="text-xs text-gray-400">San Pedro Garza García, N.L.</p>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <Link href={waLink} target="_blank" className="hover:text-gray-600 transition-colors">
              WhatsApp
            </Link>
            {loc.instagram && (
              <Link
                href={`https://www.instagram.com/${loc.instagram}/`}
                target="_blank"
                className="hover:text-gray-600 transition-colors"
              >
                Instagram
              </Link>
            )}
            <Link href="https://www.fuegolatino.dance" className="hover:text-gray-600 transition-colors">
              Sede Chapultepec
            </Link>
          </div>
        </div>
      </footer>

      {/* WA FLOAT */}
      <Link
        href={waLink}
        target="_blank"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform duration-200"
        aria-label="Abrir WhatsApp"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </Link>

    </div>
  );
}
