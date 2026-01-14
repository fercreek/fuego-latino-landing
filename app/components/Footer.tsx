import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "../constants";

export function Footer() {
  return (
    <footer className="border-t border-flame-500/20 bg-ink-900/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Fuego Latino Dance Studio - Logo del estudio de baile en Monterrey" width={40} height={40} className="rounded-full" />
            <div>
              <p className="font-bold text-flame-100">Fuego Latino Dance Studio</p>
              <p className="text-sm text-foreground/50">Monterrey, N.L.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href={whatsappLink} target="_blank" className="text-sm font-medium text-foreground/70 hover:text-flame-300 transition-all duration-300 hover:scale-105">
              WhatsApp
            </Link>
            <Link href="https://www.instagram.com/fuegolatino.dancestudio/" target="_blank" className="text-sm font-medium text-foreground/70 hover:text-flame-300 transition-all duration-300 hover:scale-105">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/FuegoLatinoDS" target="_blank" className="text-sm font-medium text-foreground/70 hover:text-flame-300 transition-all duration-300 hover:scale-105">
              Facebook
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-flame-500/10 text-center">
          <p className="text-sm text-foreground/40">© 2024 Fuego Latino Dance Studio. Todos los derechos reservados.</p>
        </div>
    </div>
    </footer>
  );
}
