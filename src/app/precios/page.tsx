import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Precios VerifacTool: software Verifactu desde 12,90€/mes | Sin permanencia",
    description: "Precios transparentes de VerifacTool: Autónomo 12,90€/mes, Negocio 24,90€/mes y Asesoría desde 6,90€ por NIF. Registro Veri*Factu en la AEAT, 14 días de prueba sin tarjeta y sin permanencia.",
    openGraph: {
        title: "Precios VerifacTool: software Verifactu desde 12,90€/mes",
        description: "Encuentra el plan que mejor se adapte a tu negocio. 14 días de prueba sin tarjeta y sin compromiso.",
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
                                        <th className="py-6 px-4 font-bold text-navy text-center">Autónomo</th>
                                        <th className="py-6 px-4 font-bold text-navy text-center bg-accent-blue/20">Negocio</th>
                                        <th className="py-6 px-4 font-bold text-navy text-center">Asesoría</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Precio", values: ["12,90€/mes", "24,90€/mes", "6,90€/NIF · mín. 10"] },
                                        { name: "Registro Veri*Factu en la AEAT", values: ["✅", "✅", "✅"] },
                                        { name: "Facturas y presupuestos", values: ["Ilimitados", "Ilimitados", "Ilimitados"] },
                                        { name: "Rectificativas y anulaciones", values: ["✅", "✅", "✅"] },
                                        { name: "Clientes y proveedores", values: ["Ilimitados", "Ilimitados", "Ilimitados"] },
                                        { name: "Registro manual de gastos", values: ["✅", "✅", "✅"] },
                                        { name: "Multi-usuario", values: ["1 usuario", "Hasta 5", "Ilimitado"] },
                                        { name: "Acceso para tu asesor", values: ["✅", "✅", "—"] },
                                        { name: "Varios NIF en una cuenta", values: ["❌", "❌", "✅"] },
                                        { name: "Consola Verifactu multi-cliente", values: ["❌", "❌", "✅"] },
                                        { name: "Gastos con OCR", values: ["Q1 2027", "Q1 2027", "Q1 2027"] },
                                        { name: "Modelos 303 y 130", values: ["Q1 2027", "Q1 2027", "Q1 2027"] },
                                        { name: "Conciliación bancaria", values: ["❌", "Q1 2027", "Q1 2027"] },
                                        { name: "Portal del cliente y pagos online", values: ["❌", "Q1 2027", "Q1 2027"] },
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
                        <p className="text-center text-sm text-text-body/70 mt-8 max-w-2xl mx-auto">
                            Las funciones marcadas con un trimestre todavía no están disponibles: son las que estamos
                            construyendo y las verás incluidas en tu plan cuando lleguen, sin coste adicional.
                            Preferimos decírtelo antes de que pagues.
                        </p>
                    </div>
                </section>

                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
