import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import Link from "next/link";
import { Metadata } from "next";
import {
    ChevronRight,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Award,
    ShieldAlert,
    TrendingDown,
    Zap
} from "lucide-react";

export const metadata: Metadata = {
    title: "Alternativa a Holded 2026: Por qué VerifacTool es Mejor para Autónomos",
    description: "¿Buscas una alternativa a Holded más económica y 100% Verifactu? Compara VerifacTool vs Holded: precios, usabilidad y cumplimiento legal. ¡Migra hoy gratis!",
    openGraph: {
        title: "VerifacTool: La Alternativa Definitiva a Holded en España",
        description: "Ahorra más del 50% en tu software de facturación con el cumplimiento Verifactu más sencillo del mercado.",
        url: "https://verifactool.com/comparativas/holded-alternativa",
        siteName: "VerifacTool",
        type: "article",
    },
    alternates: {
        canonical: "https://verifactool.com/comparativas/holded-alternativa",
    }
};

export default function AlternativaHoldedPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "La Mejor Alternativa a Holded en 2026 para Autónomos y Pymes",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-04-11"
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleSchema} />
            <Navbar />

            {/* Hero Versus */}
            <header className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-8">
                            <Award size={14} /> Comparativa Actualizada 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight mb-8">
                            ¿Buscando una <span className="text-primary italic">alternativa a Holded</span> real?
                        </h1>
                        <p className="text-xl text-text-body max-w-2xl mx-auto mb-10">
                            Holded es potente, pero a veces necesitas algo <strong>más sencillo, más barato y que realmente cumpla Verifactu</strong> sin configuraciones externas.
                        </p>

                        <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-2xl mx-auto rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl">
                            <div className="flex-1 p-8 bg-white flex flex-col items-center justify-center border-r border-slate-100">
                                <div className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">Holded</div>
                                <div className="text-3xl font-black text-slate-300">32€<span className="text-sm">/mes</span></div>
                            </div>
                            <div className="w-12 bg-primary flex items-center justify-center text-white font-black text-xl z-10 -mx-2 md:rotate-0 rotate-90">VS</div>
                            <div className="flex-1 p-8 bg-primary/5 flex flex-col items-center justify-center">
                                <div className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">VerifacTool</div>
                                <div className="text-3xl font-black text-navy">15€<span className="text-sm">/mes</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Why change? */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">Razones por las que los autónomos se mudan a VerifacTool</h2>

                        <div className="space-y-12">
                            {[
                                {
                                    t: "Ahorro real del 50% cada mes",
                                    d: "Holded ha subido precios progresivamente. VerifacTool ofrece lo que un autónomo necesita (Facturación + OCR + Gastos) por menos de la mitad de precio, para siempre.",
                                    icon: <TrendingDown className="text-success" />
                                },
                                {
                                    t: "Nativo Verifactu vs Adaptado",
                                    d: "En VerifacTool, el cumplimiento legal es el núcleo. No necesitas añadir módulos ni pagar pluses por tener tus facturas homologadas por la AEAT.",
                                    icon: <ShieldAlert className="text-primary" />
                                },
                                {
                                    t: "Soporte Humano (De verdad)",
                                    d: "Si tienes una duda con Hacienda o el software, te respondemos en español por chat en minutos. En Holded, las esperas por email pueden ser de días.",
                                    icon: <Zap className="text-secondary" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-[40px] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-navy mb-4">{item.t}</h3>
                                        <p className="text-text-body leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary Check Table */}
            <section className="py-24 bg-navy text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-black mb-12 text-center">Tabla Comparativa</h2>
                        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="p-6 font-bold uppercase tracking-widest text-xs">Característica</th>
                                        <th className="p-6 font-bold text-center text-slate-400">Holded</th>
                                        <th className="p-6 font-bold text-center text-primary">VerifacTool</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { n: "Precio (Plan Base)", h: "32€/mes", v: "15€/mes" },
                                        { n: "Verifactu Incluido", h: "Configurable", v: "Nativo 100%" },
                                        { n: "OCR de tickets", h: "Paga más", v: "Incluido" },
                                        { n: "Simplicidad", h: "Media-Baja", v: "Muy Alta" },
                                        { n: "Soporte Chat", h: "Módulo Premium", v: "Incluido" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/5">
                                            <td className="p-6 text-sm font-medium">{row.n}</td>
                                            <td className="p-6 text-center text-slate-400 text-sm">{row.h}</td>
                                            <td className="p-6 text-center text-white font-bold bg-white/5">{row.v}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-12 text-center">
                            <Link href="/demo" className="btn-primary py-5 px-15 text-xl font-black">¡Migrar a VerifacTool gratis!</Link>
                            <p className="text-white/40 text-xs mt-6 italic">Nos encargamos de importar tus datos de Holded sin coste adicional.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Silo Links */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { t: "Mejor Software Facturación", h: "/comparativas/mejor-software-facturacion" },
                            { t: "Verifactu para Autónomos", h: "/verifactu/es-obligatorio-autonomos" },
                            { t: "Planes y Precios", h: "/precios" },
                            { t: "Qué es Verifactu", h: "/verifactu/que-es" }
                        ].map((l, i) => (
                            <Link key={i} href={l.h} className="group p-6 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center hover:border-primary transition-all">
                                <span className="font-bold text-navy group-hover:text-primary">{l.t}</span>
                                <ArrowRight size={18} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
