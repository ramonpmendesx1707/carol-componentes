import type { Metadata } from "next";
import "./globals.css";
import "./movement.css";

export const metadata: Metadata = {
  title: "Carol Componentes Industriais | Joinville",
  description: "Componentes industriais, catálogo técnico e atendimento especializado em Joinville. Encontre a peça para seu próximo projeto.",
  robots: { index: false, follow: false },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
