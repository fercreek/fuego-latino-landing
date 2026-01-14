"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ScrollToTop } from "../../components/ScrollToTop";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { Accordion } from "../../components/Accordion";
import { Calculator } from "../../components/Calculator";
import { whatsappLink } from "../../constants";

const faqItems = [
  {
    question: "¿Qué son los pases Dancer Pass y Full Pass?",
    answer: "Los pases son los boletos para entrar a la competencia. El pago se hace directamente con la organización del evento (Mambolee One). Si no sabes cómo pagarlos o tienes dudas, escríbeme y te ayudo paso a paso.",
    whatsappLink: "https://wa.me/528117655605",
  },
  {
    question: "¿Cuánto cuesta inscribirse a la competencia?",
    answer: "INSCRIPCIÓN SOLISTA: El solista tendrá que pagar $400 mxn de inscripción a la competencia por categoría, además de su Dancer Pass.\n\nINSCRIPCIÓN PAREJA o DÚO: La pareja o dúo tendrá que pagar $900 mxn por inscripción a la competencia por categoría, además de su Dancer Pass.\n\nINSCRIPCIÓN GRUPO: Cada integrante deberá pagar $400 mxn de inscripción por categoría, además de su Dancer Pass.\n\nFecha límite de inscripción: 27 de Enero de 2026.",
  },
  {
    question: "¿Cuánto cuesta el vestuario?",
    answer: "Nosotros compramos todos los materiales juntos (telas, piedras, pegamento, etc.) para que sea más barato. Si cada quien comprara por separado sería más caro. Al comprar en grupo, todos ahorramos dinero y además nos vemos iguales como equipo.",
  },
  {
    question: "¿Qué son los coachings?",
    answer: "A veces traemos maestros especiales antes de la competencia para que nos den clases extras. El costo se divide entre todos. Solo hacemos esto si todos estamos de acuerdo, no es obligatorio. Hasta ahora ha funcionado muy bien para nosotros.",
  },
  {
    question: "¿Hay que pagar hotel o transporte?",
    answer: "Para este evento NO hay que pagar hotel ni transporte. Cada quien solo paga lo que quiera gastar personalmente (como si quieres quedarte en un hotel más lujo o comprar algo extra).",
  },
  {
    question: "¿Cuánto dura la música para cada categoría?",
    answer: "PAREJAS y DÚOS: Mínimo de 1:30 minutos a máximo de 2:30 minutos (incluyendo intro).\n\nGRUPOS: Mínimo de 2:00 minutos a máximo de 3:00 minutos.\n\nSOLISTAS: Mínimo de 1:10 minutos a máximo de 2:00 minutos.",
  },
  {
    question: "Notas generales importantes",
    answer: "1. Los competidores deberán presentarse 1:30 horas antes de iniciar las competencias que dan inicio a las 10 a.m. aproximadamente del Jueves, Viernes y Sábado 2 pm.\n\n2. En interés del bienestar físico de nuestros bailarines se brindará servicio de primeros auxilios durante las competencias y shows. Sin embargo, la organización de Mambolee ONE no se hace responsable por gastos médicos de lesiones o accidentes. Todos los gastos médicos corren por cuenta de los asistentes.",
  },
];

const checklistItems = [
  "Vestuario completo",
  "Zapatos de baile",
  "Accesorios",
  "Camisa de Fuego",
  "Snacks",
  "Cambio de ropa cómoda",
  "Power bank (cargador portátil)",
  "Medicamentos comunes",
];

const requerimientosPrevios = [
  {
    titulo: "Pagar vestuarios",
    descripcion: "Es importante liquidar el pago del vestuario antes de la fecha límite establecida.",
  },
  {
    titulo: "Piedras para el vestuario",
    descripcion: "Se necesitan 3 piedras tornasol y 1 piedra dorada. Costo: $170 por cada una (total: $680).",
  },
  {
    titulo: "Zapatos de baile",
    descripcion: "Si no tienes zapatos de baile, el pedido debe hacerse a más tardar el 15 de enero a las 5pm. Si no pagas a tiempo, tu pedido se hará por separado y deberás pagar el envío de $420 adicionales.",
  },
  {
    titulo: "Liquidar Dancer Pass con Mambolee One",
    descripcion: "Debes pagar tu pase Dancer Pass directamente con la organización del evento (Mambolee One).",
  },
  {
    titulo: "Pago de inscripciones",
    descripcion: "Revisa el reglamento para conocer los detalles del pago de inscripciones.",
    link: "https://a87bbf69-1003-4702-8b63-559a47f7f4ac.filesusr.com/ugd/18b507_e1e353e2c2fa476e8435faef499c449b.pdf",
    linkTexto: "Ver reglamento",
  },
];

export default function MamboleeOnePage() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem("mambolee-checklist");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCheckedItems(new Set(parsed));
      } catch (e) {
        console.error("Error loading checklist:", e);
      }
    }
  }, []);

  const handleChecklistToggle = (index: number) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      localStorage.setItem("mambolee-checklist", JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  };

  const accordionItems = [
    {
      id: "horarios",
      title: "📅 Horarios de Competencia",
      defaultOpen: true,
      content: (
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-foreground/70">
            Aquí puedes ver a qué hora compites. El calendario se actualiza con los horarios oficiales del evento. Los horarios importantes son a partir de las 6pm.
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-flame-500/20 bg-ink-800/50 p-2 sm:p-4">
            <div className="w-full rounded-xl overflow-hidden bg-ink-900/50 border border-flame-500/20" style={{ minHeight: "400px" }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=9e0740c5570db7cd1af36b2aae07807bafe917983f49acc90766c1ff0780fd0c%40group.calendar.google.com&ctz=America%2FMexico_City&mode=WEEK"
                style={{ border: 0, width: "100%", height: "100%", minHeight: "400px" }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Calendario Mambolee One 2026"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "fechas",
      title: "📆 Fechas Importantes",
      defaultOpen: false,
      content: (
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-foreground/70">
            Estas son las fechas límite y las fechas del evento que debes tener en cuenta:
          </p>
          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-flame-500/20 to-flame-600/10 border-2 border-flame-500/40 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">📅</span>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-flame-100 mb-1">15 de enero a las 5pm</h4>
                  <p className="text-base sm:text-lg text-foreground/80">Fecha límite para pedido de zapatos de baile</p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-flame-500/20 to-flame-600/10 border-2 border-flame-500/40 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">📅</span>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-flame-100 mb-1">27 de enero de 2026</h4>
                  <p className="text-base sm:text-lg text-foreground/80">Fecha límite de inscripción</p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/40 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">🏆</span>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-200 mb-1">Jueves 12 de febrero desde las 10 AM</h4>
                  <p className="text-base sm:text-lg text-foreground/80">ELIMINATORIA</p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500/40 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">🎯</span>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-amber-200 mb-1">Viernes 13 y Sábado 14 de febrero desde las 2 PM</h4>
                  <p className="text-base sm:text-lg text-foreground/80">FINALES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "costos",
      title: "💰 Información General: Costos y Dinámica",
      defaultOpen: false,
      content: (
        <div className="space-y-4 sm:space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="space-y-3 pb-6 border-b border-flame-500/10 last:border-0 last:pb-0">
              <h4 className="text-base sm:text-lg font-semibold text-flame-200">{item.question}</h4>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed whitespace-pre-line">
                {item.answer}
              </p>
              {item.whatsappLink && (
                <Link
                  href={item.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-3 sm:px-5 sm:py-3 rounded-xl bg-green-600/20 hover:bg-green-600/30 text-green-300 transition-colors text-base sm:text-lg min-h-[44px]"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Enviar WhatsApp
                </Link>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "calculadora",
      title: "🧮 Calculadora de Costos",
      defaultOpen: false,
      content: (
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-foreground/70">
            Calcula el costo total de tu participación en la competencia. El Dancer Pass es obligatorio y puedes agregar las categorías en las que te inscribas.
          </p>
          <Calculator />
        </div>
      ),
    },
    {
      id: "checklist",
      title: "✅ Checklist del Competidor",
      defaultOpen: false,
      content: (
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-foreground/70 mb-4">
            Antes del evento, revisa esta lista para no olvidar nada importante:
          </p>
          <ul className="space-y-3">
            {checklistItems.map((item, index) => {
              const isChecked = checkedItems.has(index);
              return (
                <li key={index}>
                  <button
                    onClick={() => handleChecklistToggle(index)}
                    className="flex items-start gap-3 w-full text-left p-2 sm:p-3 rounded-lg hover:bg-ink-800/50 transition-colors min-h-[44px]"
                  >
                    <span
                      className={`mt-0.5 sm:mt-1 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                        isChecked
                          ? "border-flame-500 bg-flame-500"
                          : "border-flame-500/50 bg-flame-500/10"
                      }`}
                    >
                      {isChecked && (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-ink-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className={`text-base sm:text-lg flex-1 pt-0.5 ${isChecked ? "text-foreground/60 line-through" : "text-foreground/80"}`}>
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ),
    },
    {
      id: "ubicacion",
      title: "📍 Ubicación del Evento",
      defaultOpen: false,
      content: (
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-foreground/70">
            Aquí encontrarás la dirección del evento y cómo llegar.
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-flame-500/20 bg-ink-800/50 p-2 sm:p-4">
            <div className="w-full rounded-xl overflow-hidden bg-ink-900/50 border border-flame-500/20" style={{ minHeight: "300px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9263657255856!2d-100.29403857207727!3d25.653486159073456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfc7ef55f7a9%3A0x6ca9acf43b9c7b54!2sFiesta%20Inn%20Monterrey%20Tecnol%C3%B3gico!5e0!3m2!1ses-419!2smx!4v1768383731632!5m2!1ses-419!2smx"
                width="100%"
                height="450"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Mambolee One 2026 - Fiesta Inn Monterrey Tecnológico"
                className="w-full"
              />
            </div>
          </div>
          <Link
            href="https://maps.app.goo.gl/PNoSLYPdbTqPTMSH6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto mt-4 px-5 py-3 rounded-xl bg-flame-500/20 hover:bg-flame-500/30 text-flame-100 transition-colors text-base sm:text-lg font-medium min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Abrir en Google Maps
          </Link>
        </div>
      ),
    },
    {
      id: "requerimientos",
      title: "📋 Requerimientos Previos al Evento",
      defaultOpen: false,
      content: (
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-foreground/70 mb-4">
            Antes del evento, asegúrate de cumplir con estos requerimientos:
          </p>
          <div className="space-y-4">
            {requerimientosPrevios.map((req, index) => (
              <div key={index} className="p-4 sm:p-5 rounded-xl bg-ink-800/50 border border-flame-500/20 space-y-2 sm:space-y-3">
                <h4 className="text-base sm:text-lg font-semibold text-flame-100">{req.titulo}</h4>
                <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                  {req.titulo === "Zapatos de baile" ? (
                    <>
                      Si no tienes zapatos de baile, el pedido debe hacerse a más tardar el{" "}
                      <span className="font-bold text-flame-300 px-2 py-1 rounded bg-flame-500/20">15 de enero a las 5pm</span>.
                      Si no pagas a tiempo, tu pedido se hará por separado y deberás pagar el envío de $420 adicionales.
                    </>
                  ) : req.titulo === "Pago de inscripciones" ? (
                    <>
                      Revisa el reglamento para conocer los detalles del pago de inscripciones.{" "}
                      <span className="font-bold text-flame-300">Fecha límite: 27 de enero de 2026</span>.
                    </>
                  ) : (
                    req.descripcion
                  )}
                </p>
                {req.link && (
                  <Link
                    href={req.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-3 sm:px-5 sm:py-3 rounded-xl bg-flame-500/20 hover:bg-flame-500/30 text-flame-100 transition-colors text-base sm:text-lg min-h-[44px]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {req.linkTexto}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24 lg:gap-32 px-4 pb-20 sm:pb-32 pt-8 sm:pt-12 sm:px-8 lg:px-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-flame-100 to-flame-300 bg-clip-text text-transparent">
              Información para Competidores
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 font-medium">
            Mambolee One 2026 - Todo lo que necesitas saber
          </p>
          <p className="text-sm sm:text-base text-foreground/50">
            Haz clic en las secciones para ver más información. Puedes abrir las que necesites.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          <Accordion items={accordionItems} allowMultiple={true} />
        </motion.section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}
