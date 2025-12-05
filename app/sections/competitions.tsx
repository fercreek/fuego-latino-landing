import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const brisaSummary = ["24 coreografías", "23 podios", "Calidad sobre cantidad"];

const brisaResults = {
  oro: [
    "Bachata Duos Alumno Femenino",
    "Bachata Duos Open Femenino",
    "Bachata Parejas AM-AL",
    "Bachata Parejas Open Improvisación Social",
    "Bachata Solista Alumno Femenino",
    "Bachata Solista Amateur Masculino",
    "Bachata Solista Junior Femenino",
    "Bachata Solista Open Masculino",
    "Bachata Team Shines Open Mixto",
    "Contempo Solista Senior Masculino",
    "Jazz Solista Senior Femenino",
    "Salsa Parejas Pro-AL",
  ],
  plata: [
    "Bachata Parejas Open",
    "Bachata Solista Open Femenino",
    "Bachata Team Shines Open Femenino",
    "Contempo Solista Senior Masculino",
    "Cumbia Parejas Alumno Over 40",
    "Jazz Solista Junior Femenino",
    "Salsa Parejas Pro-AL Over 40",
  ],
  bronce: [
    "Bachata Solista Alumno Femenino",
    "Bachata Solista Open Femenino",
    "Bachata Team Shines Alumno Femenino",
    "Salsa Solista Amateur Masculino",
  ],
  especial: ["7.º lugar — Bachata Solista Alumno"],
};

const rumbayanResults = {
  oro: ["1er lugar - Solista Bachata Jr Femenil", "1er lugar - Grupo Bachata Mixto Open"],
  plata: ["2do lugar - Pareja Dúo Bachata Shines Mixto"],
  bronce: ["3er lugar - Solista Salsa Jr Femenil", "3er lugar - Solista Salsa Alumna Femenil"],
  especial: [],
};

const starCupResults = {
  oro: [
    "1er lugar – Solista Teens Jazz",
    "1er lugar – Solista Stars Contemporáneo",
    "1er lugar – Solista Stars Bachata",
    "1er lugar – Solista Young Bachata",
  ],
  plata: ["2do lugar – Solista Teens Salsa"],
  bronce: ["3er lugar – Solista Young Salsa"],
  especial: [],
};

const mamboleeResults = {
  oro: ["1.er lugar: Bachata pareja amateur-alumno"],
  plata: ["2.º lugar: Bachata men's shines"],
  bronce: [
    "3.er lugar: Bachata pareja over 65 pro-am",
    "3.er lugar: Salsa solista masculino junior",
    "3.er lugar: Salsa solista masculino alumno",
    "3.er lugar: Bachata grupo shines femenil alumnos",
  ],
  especial: [],
};

type MedalResults = {
  oro: string[];
  plata: string[];
  bronce: string[];
  especial: string[];
};

export function Competitions() {
  return (
    <>
      <BrisaCup />
      <Rumbayan />
      <StarCup />
      <Mambolee />
    </>
  );
}

const medalEmoji: Record<string, string> = {
  Oro: "🥇",
  Plata: "🥈",
  Bronce: "🥉",
  Mención: "✨",
};

function MedalColumn({ title, items, tone }: { title: string; items: string[]; tone: string }) {
  const icon = medalEmoji[title] ?? "🏅";
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border border-flame-500/20 bg-gradient-to-br ${tone} p-4 shadow-lg shadow-flame-500/10`}
    >
      <h3 className="text-lg font-bold text-flame-100 mb-3 flex items-center gap-2">
        <span>{icon}</span>
        <span>{title}</span>
      </h3>
      <ul className="space-y-2 text-sm text-foreground/70">
        {items.map((item) => (
          <li key={item} className="rounded-xl bg-ink-900/60 px-3 py-2 ring-1 ring-white/5">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function BrisaCup() {
  return (
    <section id="brisa" className="relative space-y-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,106,0,0.08),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(255,143,51,0.07),transparent_30%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400">Competencias</p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Brisa Latin Cup 2025</h2>
        <p className="text-lg text-foreground/65">Fuego Latino México brilló con pasión y respeto en la competencia.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {brisaSummary.map((item) => (
            <span
              key={item}
              className="rounded-full bg-flame-500/15 px-4 py-2 text-xs font-semibold text-flame-100 ring-1 ring-flame-500/30"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-sm text-foreground/60">
          Gracias a cada competidor, coaches, staff, familia y amigos. Seguimos promoviendo disciplina múltiple y competencia sana.
        </p>
      </motion.div>

      <ResultsGrid results={brisaResults} />
    </section>
  );
}

function Rumbayan() {
  return (
    <section id="rumbayan" className="relative space-y-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,106,0,0.08),transparent_35%),radial-gradient(circle_at_10%_10%,rgba(255,143,51,0.07),transparent_30%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400">Competencias</p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Rumbayán 2025</h2>
        <p className="text-lg text-foreground/65">Fuego Latino brilló con disciplina y buena vibra.</p>
        <p className="text-sm text-foreground/60">
          Gracias a competidores, familias y coaches por el esfuerzo y apoyo. Seguimos con competencia sana y pasión.
        </p>
      </motion.div>
      <ResultsGrid results={rumbayanResults} />
    </section>
  );
}

function StarCup() {
  return (
    <section id="star-cup" className="relative space-y-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,0,0.07),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(255,143,51,0.06),transparent_30%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400">Competencias</p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Star Cup 2025</h2>
        <p className="text-lg text-foreground/65">
          Orgullosos de cada representante de Fuego Latino por su desempeño y entrega.
        </p>
        <p className="text-sm text-foreground/60">
          Gracias a familia, amigos y coaches (@jack.barrientoss, @aly_trejo) por el apoyo. Aplausos a @starcupmx por el evento.
        </p>
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 lg:grid-cols-3"
      >
        <MedalColumn title="Oro" items={starCupResults.oro} tone="from-flame-500/20 to-amber-500/15" />
        <MedalColumn title="Plata" items={starCupResults.plata} tone="from-foreground/10 to-ink-800/90" />
        <MedalColumn title="Bronce" items={starCupResults.bronce} tone="from-orange-500/15 to-ink-800/90" />
      </motion.div>
    </section>
  );
}

function Mambolee() {
  return (
    <section id="mambolee" className="relative space-y-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.07),transparent_35%),radial-gradient(circle_at_10%_30%,rgba(255,143,51,0.06),transparent_30%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-400">Competencias</p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Mambolee One 2025</h2>
        <p className="text-lg text-foreground/65">
          Felicitaciones al equipo por el esfuerzo y la pasión reflejada en cada podio.
        </p>
        <p className="text-sm text-foreground/60">
          Agradecimiento a alumnos, maestros, amigos y familia por el apoyo. Reconocimiento especial a Aly Trejo por impulsar nuevos
          talentos. Gracias Mambolee One; nos vemos en el 10.º aniversario.
        </p>
      </motion.div>
      <ResultsGrid results={mamboleeResults} />
    </section>
  );
}

function ResultsGrid({ results }: { results: MedalResults }) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-4 lg:grid-cols-4"
    >
      <MedalColumn title="Oro" items={results.oro} tone="from-flame-500/20 to-amber-500/15" />
      <MedalColumn title="Plata" items={results.plata} tone="from-foreground/10 to-ink-800/90" />
      <MedalColumn title="Bronce" items={results.bronce} tone="from-orange-500/15 to-ink-800/90" />
      <MedalColumn title="Mención" items={results.especial} tone="from-flame-500/12 to-ink-800/90" />
    </motion.div>
  );
}

