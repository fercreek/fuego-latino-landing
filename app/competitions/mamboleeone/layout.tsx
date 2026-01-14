import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competidores - Mambolee One",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MamboleeOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
