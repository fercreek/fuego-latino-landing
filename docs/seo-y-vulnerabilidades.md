# Revisión SEO y vulnerabilidades

Resumen de la revisión realizada y acciones aplicadas.

---

## SEO

### Lo que ya estaba bien

- **Metadata en `app/layout.tsx`:** title, description, keywords, authors, creator, publisher.
- **Open Graph y Twitter:** imágenes, títulos y descripciones para redes.
- **metadataBase y canonical:** URL base `https://fuegolatino.dance` y canonical `/`.
- **robots:** index/follow habilitados; página de competidores con `noindex, nofollow` en su layout.
- **Sitemap:** `app/sitemap.ts` con homepage y galerías; generado en `/sitemap.xml`.
- **robots.txt:** Allow /, Disallow /api/ y /_next/, Sitemap declarado.
- **JSON-LD:** Schema.org (DanceSchool, LocalBusiness, School) con ofertas, teléfono, redes.
- **manifest.json:** PWA básico con nombre, colores e iconos.
- **Idioma:** `<html lang="es">`.

### Cambios aplicados

1. **Dirección en JSON-LD:** de texto genérico a la dirección real:  
   `Av. Chapultepec 724, Calle 7ma Zona, Col. Caracol`.
2. **Horarios en JSON-LD:** alineados con la web:  
   - Lunes y Miércoles 20:00–22:00.  
   - Martes 19:00–22:00 (incluye Jazz Lírico, Urbano, Entrenamiento Bachata).  
   - Sábado 11:00–13:30 (Danza Aérea Kids y Adultos).  
   - Eliminado jueves.
3. **robots.txt:** añadido `Disallow: /competitions/` para que los buscadores no rastreen esa sección (refuerza el noindex del layout).

### Recomendaciones opcionales

- Añadir códigos de verificación en `metadata.verification` (Google Search Console, Bing, Yandex) cuando los tengan.
- Revisar que la imagen OG (1200×630) exista en `/images/studio-fuego.jpg` o en la URL indicada.
- Si añaden más páginas públicas relevantes (ej. `/clases`, `/precios`), incluirlas en el sitemap.

---

## Vulnerabilidades (package.json y dependencias)

### Estado anterior

- **ajv:** ReDoS (moderada) — corregido con `npm audit fix`.
- **minimatch:** ReDoS (alta) en dependencias de TypeScript/ESLint — corregido con `npm audit fix`.
- **next:** varias vulnerabilidades altas (exposición de código en Server Actions, DoS en Server Components, Image Optimizer, deserialización, consumo de memoria en PPR).

### Acciones realizadas

1. Se ejecutó `npm audit fix` para corregir ajv y minimatch.
2. Se actualizó **Next.js** de `16.0.7` a **`16.1.6`** (versión parcheada).
3. Se actualizó **eslint-config-next** a `16.1.6` para mantener consistencia.

### Estado actual

- **npm audit:** 0 vulnerabilidades reportadas.

### Mantenimiento

- Ejecutar `npm audit` de forma periódica.
- Mantener Next.js y eslint-config-next en versiones parcheadas según [avisos de seguridad de Next.js](https://nextjs.org/blog/security-update-2025-12-11) y `npm audit`.
