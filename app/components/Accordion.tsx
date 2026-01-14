"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set(items.map((item, index) => (item.defaultOpen ? index : -1)).filter((i) => i !== -1))
  );

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const index = items.findIndex((item) => item.id === hash);
      if (index !== -1) {
        setOpenIndexes((prev) => {
          const newSet = allowMultiple ? new Set(prev) : new Set();
          newSet.add(index);
          return newSet;
        });
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, [items, allowMultiple]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      const newSet = new Set(prev);
      const item = items[index];
      if (newSet.has(index)) {
        newSet.delete(index);
        if (item.id && window.location.hash === `#${item.id}`) {
          window.history.pushState(null, "", window.location.pathname);
        }
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
        if (item.id) {
          window.history.pushState(null, "", `#${item.id}`);
        }
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        return (
          <div
            key={index}
            id={item.id}
            className="relative overflow-hidden rounded-2xl border border-flame-500/25 bg-gradient-to-br from-ink-900/95 to-ink-800/95 transition-all duration-300 hover:border-flame-500/50 hover:shadow-2xl hover:shadow-flame-500/20 scroll-mt-20"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-flame-500/10 blur-2xl" />
            <button
              onClick={() => toggleItem(index)}
              className="relative w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between gap-4 group min-h-[60px]"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-flame-100 group-hover:text-flame-50 transition-colors">
                {item.title}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-flame-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-8 pb-4 sm:pb-6 text-base sm:text-lg text-foreground/70 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
