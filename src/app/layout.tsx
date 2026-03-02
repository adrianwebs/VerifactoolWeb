import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verifactool.com"),
  title: {
    default: "VerifacTool - Gestión ERP para Verifactu",
    template: "%s | VerifacTool"
  },
  description: "La solución definitiva para tu Facturación y Cumplimiento Verifactu para autónomos y pymes en España.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "VerifacTool - Gestión ERP para Verifactu",
    description: "La solución definitiva para tu Facturación y Cumplimiento Verifactu para autónomos y pymes en España.",
    url: "https://verifactool.com",
    siteName: "VerifacTool",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VerifacTool - Gestión ERP para Verifactu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
