> ⚠️ **STALE — 37 días sin actualizar** (última vez 2026-07-04).
> **Las tareas vivas de este proyecto están en `focus`** (1 en `landings`): `make wip` · `make next`.
> _Marcado 2026-08-10 al reconciliar los pickup points; el contenido de abajo NO se tocó._

# NEXT — fuego-latino-landing
> Update: 2026-07-04 · Deploy: fuegolatino.dance · Repo: ~/Documents/landings/fuego-latino-landing

## ⚡ En proceso (retomar aquí)

- [ ] **Precios reales de SyB Fuego** — `hasOfferCatalog` en `layout.tsx` no tiene montos MXN (FOCUS-850). Preguntar a Fernando/cliente, no inventar.
- [ ] **Nombre del socio de San Jerónimo** — confirmado que es distinto al de San Agustín, falta el nombre (FOCUS-851). Actualizar `syb-fuego-brand.md` + `venom/registry/people.json` cuando se sepa.
- [ ] **Logo SyB Fuego transparente** — el logo actual (`/public/syb-fuego-logo.jpg`) tiene fondo blanco JPEG. Pedir PNG con transparencia a Aly. Mientras: card wrapper temporal en header/footer (ya agrandado 2026-07-04).

## ✅ Hecho 2026-07-04 (rediseño /salsa-y-bachata-fuego)

- [x] Rename ruta `/san-pedro` → `/salsa-y-bachata-fuego` + redirect 308
- [x] Allowlist AI (15 bots) en `robots.ts`
- [x] OG card premium: foto real del estudio SyB Fuego (no Fuego Latino), recorte 1200x630
- [x] San Jerónimo: dirección real, Facebook + Instagram, ya NO "próximamente"
- [x] San Agustín: dirección actual (ya no "mudanza pendiente" — ya se mudaron)
- [x] Estilos corregidos: Salsa/Bachata/Cumbia únicamente (Urbano/Jazz nunca aplicaron)
- [x] Des-mezcla de fotos: galería de 3 fotos de Fuego Latino removida (marca hermana, no la misma)
- [x] Fix metadata `layout.tsx` (bug gemelo del de Contreras Code — dirección/copy/imagen vieja sobrevivía ahí)
- [x] Logo más grande + fondo cálido con textura (antes plano/blanco, "se veía muy solo")
- [x] Instagram por sucursal: `@salsaybachatafuego` (San Agustín) y `@salsa_y_bachata_fuego_san_jemo` (San Jerónimo)

## ✅ Hecho sesión 2026-06-28

- [x] Landing `/san-pedro` creada con data de SyB Fuego
- [x] Logo SyB Fuego movido a `/public/syb-fuego-logo.jpg` (temporal, JPEG sin transparencia)
- [x] Colores SyB Fuego aplicados: `.syb-fuego-theme` en `globals.css` → `flame-500: #D05020` (terracotta, pixel-sampled del logo oficial)
- [x] Brand kit actualizado: `angels/landing/fuego-latino/syb-fuego-brand.md` + `cero/cero-content/clients/syb-fuego.json`
- [x] Mudanza banner activo: Plaza Kiarah → Plaza Saaghi, Av. Real San Agustín 302
- [x] WA unificado: `5218110404188` en todos los CTAs
- [x] Venom graph: Aly Trejo + Dany Xavier + deal SyB Fuego agregados (`registry/people.json`)

## 💡 Backlog

- [ ] Landing `/san-jeronimo` — sucursal Fenix Dance Center (Blvd. Puerta del Sol 1009)
- [ ] Meta Pixel — pendiente Pixel ID del cliente
- [ ] GA4 — pendiente Google account del cliente
- [ ] `llms.txt` en `/public/` para GEO
- [ ] Canonical `www` + redirect 307→308 en Vercel

## 🔒 Bloqueado

- Logo transparente: necesita archivo PNG de Aly
- Instagram San Pedro: necesita confirmación de Aly/Xavi
- Meta Pixel / GA4: necesita acceso del cliente
