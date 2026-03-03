# Planeación: Pagos en línea (Mercado Pago / Stripe)

**Contexto:** Ya se cuenta con acceso a las APIs de Mercado Pago y Stripe (credenciales y terminal). Este documento es solo **planeación**: qué construir, dónde y en qué orden.

**Objetivo:** Permitir cobrar en línea desde la web de Fuego Latino (clases, paquetes, Danza Aérea, etc.) con una implementación sencilla.

---

## 1. Comparativa rápida

| Criterio | Mercado Pago | Stripe |
|----------|--------------|--------|
| **En México** | Muy usado, pesos (MXN), Link, QR, terminal | Muy usado, MXN y más monedas, terminal |
| **Comisiones (aprox.)** | ~3.99% + $4 MXN por transacción | ~3.6% + $3 MXN por transacción (varía por tipo de tarjeta) |
| **API / SDK** | REST + SDK JS (Checkout Pro, Preferencias) | REST + Stripe.js (Checkout Session, Payment Element) |
| **Link de pago** | Preferencia → link o ventana de pago | Checkout Session → redirect a página de Stripe |
| **Sin backend propio** | Sí (Preferencia + link; webhook opcional) | Mejor con backend (crear Session desde servidor) |
| **Terminal que ya tienen** | Compatible con misma cuenta MP | Compatible con misma cuenta Stripe |
| **Webhooks** | Para confirmar pago y actualizar estado | Idem; recomendable para automatizar |

Conclusión: los dos son viables. **Mercado Pago** suele ser más rápido de integrar si quieren solo “un link/botón que abre el pago”. **Stripe** da más control y es muy estándar si planean crecer (suscripciones, varios productos, etc.).

---

## 2. Implementación sencilla recomendada

### Opción A: Mercado Pago (Checkout Pro / Preferencia)

- Crear una **Preferencia** (desde backend o, en flujo mínimo, desde front con clave pública limitada).
- El usuario hace clic en “Pagar” → se abre la ventana de MP o se redirige a la URL de pago.
- No se guardan tarjetas en tu servidor; MP maneja todo (PCI).

**Flujo mínimo:**

1. Backend (API Route en Next.js): recibe descripción + monto (ej. “Clase Danza Aérea Adultos – Sábado”, $200).
2. Crea una Preferencia con el SDK de Mercado Pago (server-side).
3. Devuelve al front el `preference_id` o la `init_point` (URL).
4. Front: botón “Pagar con Mercado Pago” que abre esa URL o usa el SDK de MP para abrir el checkout en modal.

**Dependencia:** `mercadopago` (Node) en el servidor.

---

### Opción B: Stripe (Checkout Session)

- Crear una **Checkout Session** desde tu backend con precio y descripción.
- El usuario hace clic en “Pagar” → redirige a la página de pago de Stripe.
- Tras el pago, Stripe redirige de vuelta a tu sitio (success/cancel).

**Flujo mínimo:**

1. Backend (API Route): recibe producto + monto (ej. “Danza Aérea Kids”, $200).
2. Crea un **Price** (o usa uno ya creado en el Dashboard) y una **Checkout Session** con ese price.
3. Devuelve `url` de la Session.
4. Front: botón “Pagar con tarjeta” que hace `window.location.href = url` (o abrir en nueva pestaña).

**Dependencia:** `stripe` (Node) en el servidor.

---

## 3. Dónde encajar en tu sitio

- **Horarios / Clases:** en cada tarjeta de día (Lunes, Martes, Sábado, etc.) o en una sección “Clases”, un botón “Reservar y pagar” que:
  - Opción 1: sigue llevando a WhatsApp (como ahora) para coordinar.
  - Opción 2: abre pago en línea (MP o Stripe) con ítem “Clase [nombre] – [día/hora]” y monto (ej. $200 o $600 paquete).
- **Danza Aérea:** mismo esquema: “Pagar clase Kids”, “Pagar clase Adultos”, “Pagar paquete 4 clases ($600)”.
- **Competencias / Mambolee:** el desglose que ya tienen en la calculadora podría terminar en un botón “Pagar en línea” que crea un pago por el total (o por ítems) en MP o Stripe.

Todo puede seguir conviviendo con WhatsApp para dudas o reservas sin pago en línea.

---

## 4. Requerimientos técnicos (planeación)

- **Variables de entorno:** usar las credenciales ya disponibles; documentar nombres en `.env.example` (claves en servidor, nunca en front).
- **Backend:** 1 API Route que reciba producto/monto y cree Preferencia (MP) o Checkout Session (Stripe).
- **Webhooks (opcional):** planear URL de confirmación para actualizar estado o enviar confirmación cuando el pago se acredite.

---

## 5. Plan de implementación (orden sugerido)

| Fase | Qué | Dónde en el sitio |
|------|-----|-------------------|
| **1** | Decidir primer proveedor (MP o Stripe) y primer producto (ej. 1 clase Danza Aérea $200 o paquete $600). | — |
| **2** | API Route de checkout: recibe `{ productId o description, amount }`, devuelve URL de pago. | `app/api/checkout/route.ts` (o similar) |
| **3** | Botón “Pagar en línea” que llama a la API y redirige a la URL. | Donde ya hay precios: Danza Aérea, horarios, etc. |
| **4** | (Opcional) Página o modal de resumen antes de ir a pagar. | Misma sección o ruta `/pagar` |
| **5** | (Opcional) Webhook para confirmación de pago. | `app/api/webhooks/...` |

---

## 6. Decisiones pendientes (solo planeación)

- **Proveedor inicial:** ¿Mercado Pago, Stripe o ambos (el usuario elige)?
- **Primer flujo:** ¿Solo Danza Aérea (clase $200 / paquete $600), o también clases de la semana / competencias?
- **UX:** ¿Solo botón “Pagar” que abre el link, o pantalla de resumen (ítem, monto, luego “Ir a pagar”)?

Con estas definiciones se puede pasar a implementación cuando lo decidan.
