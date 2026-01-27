"use client";

import { useState } from "react";

const PRICES = {
  dancerPass: 2199,
  solista: 400,
  pareja: 900,
  grupo: 400,
};

const CATEGORIES = [
  { id: "bachata-men-shines", name: "Bachata Men Shines", type: "solista", price: PRICES.solista },
  { id: "bachata-grupo-parejas", name: "Bachata Grupo Parejas", type: "grupo", price: PRICES.grupo },
  { id: "bachata-ladies", name: "Bachata Ladies", type: "solista", price: PRICES.solista },
  { id: "bachata-parejas", name: "Bachata Parejas", type: "pareja", price: PRICES.pareja / 2 },
  { id: "bachata-solistas", name: "Bachata Solistas", type: "solista", price: PRICES.solista },
];

export function Calculator() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [dancerPassPagado, setDancerPassPagado] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const categoriesCost = Array.from(selectedCategories).reduce((total, categoryId) => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    return total + (category?.price || 0);
  }, 0);

  const total = (dancerPassPagado ? 0 : PRICES.dancerPass) + categoriesCost;

  const generarMensajeWhatsApp = () => {
    const categoriasSeleccionadas = Array.from(selectedCategories)
      .map((categoryId) => {
        const category = CATEGORIES.find((cat) => cat.id === categoryId);
        return category ? `• ${category.name}: $${category.price.toLocaleString()} mxn` : null;
      })
      .filter(Boolean)
      .join("\n");

    let mensaje = `Hola, mi nombre completo es: ${nombreCompleto || "[Nombre completo]"}\n\n`;
    mensaje += `📋 DESGLOSE DE PAGO - Mambolee One\n\n`;
    mensaje += `Dancer Pass: ${dancerPassPagado ? "✅ Ya pagado (no se suma)" : `$${PRICES.dancerPass.toLocaleString()} mxn`}\n\n`;
    
    if (categoriasSeleccionadas) {
      mensaje += `Categorías adicionales:\n${categoriasSeleccionadas}\n\n`;
    } else {
      mensaje += `Categorías adicionales: Ninguna seleccionada\n\n`;
    }
    
    mensaje += `💰 TOTAL A PAGAR: $${total.toLocaleString()} mxn\n\n`;
    mensaje += `Realizaré el depósito a la cuenta que indique la directora.`;

    return mensaje;
  };

  const handleEnviarWhatsApp = () => {
    if (!nombreCompleto.trim()) {
      alert("Por favor, ingresa tu nombre completo antes de enviar.");
      return;
    }
    const mensaje = generarMensajeWhatsApp();
    const whatsappNumber = "5218117655606";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
      <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 sm:p-5 rounded-xl bg-ink-800/50 border border-flame-500/20">
          <label className="block mb-2 text-base sm:text-lg font-semibold text-flame-100">
            Nombre completo
          </label>
          <input
            type="text"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            placeholder="Ingresa tu nombre completo"
            className="w-full px-4 py-3 rounded-lg bg-ink-900/50 border border-flame-500/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-flame-500/50 focus:border-flame-500 text-base sm:text-lg"
          />
          <p className="mt-2 text-sm text-foreground/60">
            Necesitamos tu nombre completo para corroborar con los depósitos
          </p>
        </div>
        <div className="p-4 sm:p-5 rounded-xl bg-ink-800/50 border border-flame-500/20 hover:border-flame-500/40 transition-colors">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={dancerPassPagado}
              onChange={(e) => setDancerPassPagado(e.target.checked)}
              className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded border-2 border-flame-500/50 bg-flame-500/10 text-flame-500 focus:ring-2 focus:ring-flame-500/50 cursor-pointer transition-all checked:bg-flame-500 checked:border-flame-500"
            />
            <div className="flex-1 flex items-center justify-between">
              <div>
                <span className="text-base sm:text-lg font-semibold text-flame-100">Dancer Pass</span>
                <p className="text-sm sm:text-base text-foreground/60 mt-0.5">¿Ya lo pagaste?</p>
              </div>
              <span className="text-base sm:text-lg font-bold text-flame-200">${PRICES.dancerPass.toLocaleString()} mxn</span>
            </div>
          </label>
        </div>

        <div className="space-y-3">
          <h4 className="text-base sm:text-lg font-semibold text-flame-200 mb-3">Categorías adicionales</h4>
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategories.has(category.id);
          return (
            <div
              key={category.id}
              className="p-4 sm:p-5 rounded-xl bg-ink-800/50 border border-flame-500/20 hover:border-flame-500/40 transition-colors"
            >
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded border-2 border-flame-500/50 bg-flame-500/10 text-flame-500 focus:ring-2 focus:ring-flame-500/50 cursor-pointer transition-all checked:bg-flame-500 checked:border-flame-500"
                />
                <div className="flex-1 flex items-center justify-between">
                  <span className={`text-base sm:text-lg ${isSelected ? "text-flame-100 font-medium" : "text-foreground/80"}`}>
                    {category.name}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-flame-300">${category.price.toLocaleString()} mxn</span>
                </div>
              </label>
            </div>
          );
        })}
        </div>
      </div>

      <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-flame-500/20 to-flame-600/10 border-2 border-flame-500/40 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-base sm:text-lg">
            <span className="text-foreground/80">
              {dancerPassPagado ? "Dancer Pass (ya pagado, no se suma)" : "Costo Base (Dancer Pass)"}
            </span>
            <span className="font-semibold text-flame-100">
              {dancerPassPagado ? "—" : `$${PRICES.dancerPass.toLocaleString()} mxn`}
            </span>
          </div>
          <div className="flex items-center justify-between text-base sm:text-lg">
            <span className="text-foreground/80">Inscripciones adicionales ({selectedCategories.size} categoría{selectedCategories.size !== 1 ? "s" : ""})</span>
            <span className="font-semibold text-flame-100">${categoriesCost.toLocaleString()} mxn</span>
          </div>
          <div className="border-t border-flame-500/30 pt-3 mt-3">
            <div className="flex items-center justify-between">
              <span className="text-lg sm:text-xl font-bold text-flame-100">Total</span>
              <span className="text-xl sm:text-2xl font-extrabold text-flame-200">${total.toLocaleString()} mxn</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleEnviarWhatsApp}
        disabled={!nombreCompleto.trim()}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Enviar cálculo por WhatsApp
      </button>
    </div>
  );
}
