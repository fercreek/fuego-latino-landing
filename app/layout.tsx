import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuego Latino Dance Studio",
  description:
    "Clases de salsa, bachata y urbano en Monterrey. Agenda tu clase muestra en Fuego Latino.",
  openGraph: {
    title: "Fuego Latino Dance Studio",
    description:
      "Clases de salsa, bachata y urbano en Monterrey. Agenda tu clase muestra en Fuego Latino.",
    type: "website",
    url: "https://fuego-latino-landing.vercel.app",
  },
  metadataBase: new URL("https://fuego-latino-landing.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
