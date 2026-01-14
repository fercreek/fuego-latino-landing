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

  const total = PRICES.dancerPass + categoriesCost;

  return (
      <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 sm:p-5 rounded-xl bg-ink-800/50 border border-flame-500/20">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={true}
              disabled
              className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded border-2 border-flame-500/50 bg-flame-500/20 text-flame-500 focus:ring-2 focus:ring-flame-500/50 cursor-not-allowed"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-base sm:text-lg font-semibold text-flame-100">Dancer Pass</span>
                <span className="text-base sm:text-lg font-bold text-flame-200">${PRICES.dancerPass.toLocaleString()} mxn</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/60 mt-1">Obligatorio</p>
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
            <span className="text-foreground/80">Costo Base (Dancer Pass)</span>
            <span className="font-semibold text-flame-100">${PRICES.dancerPass.toLocaleString()} mxn</span>
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
    </div>
  );
}
