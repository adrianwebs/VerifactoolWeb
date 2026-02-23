import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import Urgency from "@/components/Urgency";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Software de Facturación Verifactu Online | VerifacTool",
  description:
    "VerifacTool es el software de facturación Verifactu para autónomos y pymes en España. Cumple la normativa, controla gastos e impuestos y automatiza tus cobros. Empieza gratis hoy.",
  alternates: {
    canonical: "https://verifactool.com/",
  },
  openGraph: {
    title: "Software de Facturación Verifactu Online | VerifacTool",
    description:
      "VerifacTool es el software de facturación Verifactu para autónomos y pymes en España. Cumple la normativa, controla gastos e impuestos y automatiza tus cobros.",
    url: "https://verifactool.com/",
    siteName: "VerifacTool",
    locale: "es_ES",
    type: "website",
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VerifacTool",
    "url": "https://verifactool.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://verifactool.com/blog?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VerifacTool",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Software de facturación Verifactu para autónomos y pymes en España.",
    "offers": {
      "@type": "Offer",
      "price": "12.00",
      "priceCurrency": "EUR"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://verifactool.com/"
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <JsonLd data={websiteSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Navbar />

      <Hero />

      <Modules />

      <Urgency />

      <Benefits />

      <Pricing />

      <FAQ />

      {/* Final CTA */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Potencia tu flujo de trabajo hoy
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-navy/90 transition-all shadow-xl">
              Empezar Prueba Gratuita
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Reservar Demo
            </button>
          </div>
        </div>

        {/* Decorative balls */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      </section>

      <Footer />
    </main>
  );
}
