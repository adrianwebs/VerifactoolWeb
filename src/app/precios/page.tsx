import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Planes y Precios | VerifacTool",
    description: "Precios transparentes para autónomos, pymes y asesorías. Empieza gratis hoy mismo y cumple con Verifactu.",
    openGraph: {
        title: "Planes y Precios | VerifacTool",
        description: "Encuentra el plan que mejor se adapte a tu negocio. Prueba gratuita de 14 días.",
        url: "https://verifactool.com/precios",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/precios",
    }
};

export default function PreciosPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Pricing />

                {/* Detailed Comparison Table could go here */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-navy text-center mb-16">Comparativa de Funciones</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-6 px-4 font-bold text-navy">Funcionalidades</th>
                                        <th className="py-6 px-4 font-bold text-navy text-center">Autónomos</th>
                                        <th className="py-6 px-4 font-bold text-navy text-center bg-accent-blue/20">Pymes</th>
                                        <th className="py-6 px-4 font-bold text-navy text-center">Asesorías</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Cumplimiento Verifactu", values: ["✅", "✅", "✅"] },
                                        { name: "Tickets OCR", values: ["50/mes", "Ilimitado", "Ilimitado"] },
                                        { name: "Borradores Impuestos", values: ["✅", "✅", "✅"] },
                                        { name: "Pipeline CRM", values: ["❌", "✅", "✅"] },
                                        { name: "Pagos Online", values: ["❌", "✅", "✅"] },
                                        { name: "Acceso Asesor", values: ["✅", "✅", "✅"] },
                                        { name: "Multi-usuario", values: ["1 usuario", "Hasta 5", "Ilimitado"] },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-4 text-text-body font-medium">{row.name}</td>
                                            <td className="py-4 px-4 text-center">{row.values[0]}</td>
                                            <td className="py-4 px-4 text-center bg-accent-blue/10">{row.values[1]}</td>
                                            <td className="py-4 px-4 text-center">{row.values[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
