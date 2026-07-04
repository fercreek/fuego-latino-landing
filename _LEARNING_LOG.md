# _LEARNING_LOG.md — fuego-latino-landing

### 2026-07-04 · SyB Fuego /salsa-y-bachata-fuego — corrección en cascada

**Pros (qué salió bien):**
- Verificación en vivo (curl/screenshot) después de cada push, sin excepción — atrapó un deploy con dato viejo antes de dejarlo como "listo".
- Detecté sin que se pidiera: redirect 301/308 faltante en `/san-pedro`, y un bug gemelo de metadata-override (`layout.tsx`) ya visto esa misma noche en otro repo.

**Cons (qué se atoró o sobrecomplicó):**
- Usé 3 fotos de Fuego Latino (marca madre) en el landing de Salsa y Bachata Fuego (marca hermana, visualmente distinta) — el brand-kit (`angels/landing/fuego-latino/syb-fuego-brand.md`) ya advertía esto explícito, no lo apliqué al elegir assets.
- Asumí una diferenciación de estilos por sucursal que Fernando no pidió y tuvo que corregir.
- El bug de `app/salsa-y-bachata-fuego/layout.tsx` con metadata vieja (dirección, estilos, foto) no se cachó hasta que el deploy lo mostró — ya sabía de este patrón por Contreras Code esa misma noche.

**Consejo Claude Code (cómo prompteamos mejor):**
- Antes de insertar cualquier foto/logo en un repo con brand-kit de "colaboración/marca hermana" → releer la sección de advertencias del brand-kit como checklist explícito.
- Al arreglar metadata Next.js: `grep -rln "metadata\|openGraph\|structuredData" <ruta>/` primero, para saber cuántos archivos definen esa página.

**Patrón nuevo capturado:**
- El check "es contenido real, no inventado" necesita un segundo check separado: "es de la marca EXACTA, no de una relacionada". Ver `angels/focus/_PATTERNS.md`.
