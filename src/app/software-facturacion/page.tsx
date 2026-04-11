import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Software de Facturación Online para Autónomos y Pymes | VerifacTool",
    description: "Simplifica tu facturación con VerifacTool. Programa en la nube 100% compatible con Verifactu y la Ley Crea y Crece. Prueba gratis 14 días.",
    alternates: {
        canonical: "https://verifactool.com/software-facturacion",
    }
};

export default function SoftwareFacturacionPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">
                    Software de Facturación Online
                </h1>
                <p className="text-xl text-text-body max-w-3xl mx-auto mb-10">
                    Estamos construyendo la mejor experiencia de facturación para tu negocio.
                    Pronto disponible toda la información detallada sobre nuestras soluciones segmentadas.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="/software-facturacion/verifactu" className="btn-primary py-3 px-8">Ver solución Verifactu</a>
                    <a href="/precios" className="btn-secondary py-3 px-8">Ver Precios</a>
                </div>
            </section>
            <Footer />
        </main>
    );
}
