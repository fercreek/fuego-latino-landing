"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, whatsappLink } from "../constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      setScrollProgress((scrolled / windowHeight) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-flame-500/20 z-50"
        style={{ transform: `scaleX(${scrollProgress / 100})`, transformOrigin: 'left' }}
      />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-background/90 border-b border-flame-500/20 shadow-2xl shadow-flame-500/10"
            : "bg-transparent"
        }`}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-flame-500/30 blur-xl group-hover:bg-flame-400/40 transition-colors duration-300" />
            <Image
              src="/logo.png"
              alt="Fuego Latino Dance Studio - Logo del estudio de baile en Monterrey"
              width={52}
              height={52}
              className="relative rounded-full ring-2 ring-flame-500/50 group-hover:ring-flame-400/70 transition-all duration-300"
            />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-flame-100 group-hover:text-flame-50 transition-colors">
              Fuego Latino
            </p>
            <p className="text-[11px] font-medium text-flame-300/70 tracking-wide">DANCE STUDIO · MTY</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={isHomePage ? item.href : `/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-4 py-2 rounded-full text-foreground/70 hover:text-flame-100 hover:bg-flame-500/15 transition-all duration-300 hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={whatsappLink}
            target="_blank"
            className="hidden sm:flex group relative overflow-hidden rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-lg shadow-flame-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-flame-500/40 hover:-translate-y-1 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="hidden sm:inline">Agenda en</span> WhatsApp
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-flame-100 hover:bg-flame-500/15 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-flame-500/20 bg-background/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={isHomePage ? item.href : `/${item.href}`}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-xl text-foreground/70 hover:text-flame-100 hover:bg-flame-500/15 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={whatsappLink}
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-flame-500 to-flame-600 text-sm font-bold text-ink-950 shadow-lg shadow-flame-500/30 text-center transition-all duration-300 hover:shadow-xl hover:shadow-flame-500/40"
              >
                Agenda en WhatsApp
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
