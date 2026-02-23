import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Star,
    CheckCircle2,
    XCircle,
    ChevronRight,
    ShieldCheck,
    Zap,
    Award,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import JsonLd from "@/components/SEO/JsonLd";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Los 5 Mejores Software Verifactu del 2026 | Comparativa y Opiniones",
    description: "Analizamos el mejor software Verifactu para autónomos y pymes. Comparativa de precios, requisitos AEAT y facilidad de uso. Holded vs Sage vs VerifacTool.",
    alternates: {
        canonical: "https://verifactool.com/mejor-software-verifactu",
    }
};

const softwares = [
    {
        name: "VerifacTool",
        rating: 5,
        target: "Autónomos y Pymes",
        pros: ["100% Nativo Verifactu", "Activación instantánea", "Soporte humano en español", "Precio imbatible"],
        cons: ["Enfocado solo a mercado español"],
        score: "9.9/10",
        bestFor: "Cumplir la ley sin complicaciones técnicas",
        href: "/software-verifactu",
        isWinner: true
    },
    {
        name: "Holded",
        rating: 4.5,
        target: "Empresas con mucho volumen",
        pros: ["ERP completo", "Interfaz muy bonita", "Gestión de inventario"],
        cons: ["Precio elevado", "Configuración Verifactu externa"],
        score: "9.2/10",
        bestFor: "Empresas que necesitan gestión integral",
        href: "/verifactool-vs-holded",
        isWinner: false
    },
    {
        name: "Sage 50 / 200",
        rating: 4,
        target: "Grandes corporaciones/Asesorías",
        pros: ["Solidez histórica", "Múltiples módulos", "Ecosistema fiscal"],
        cons: ["Curva de aprendizaje alta", "Interfaz anticuada", "Costes de implementación"],
        score: "8.5/10",
        bestFor: "Empresas con contabilidad muy compleja",
        href: "/verifactool-vs-sage",
        isWinner: false
    }
];

export default function MejorSoftwareVerifactu() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Mejor Software Verifactu", "item": "https://verifactool.com/mejor-software-verifactu" }
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={breadcrumbSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="hero-section pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <nav className="flex items-center justify-center gap-2 text-sm font-medium text-primary mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:underline">Inicio</Link>
                        <ChevronRight size={14} />
                        <span>Mejor Software Verifactu</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-8 leading-tight max-w-4xl mx-auto">
                        ¿Cuál es el <span className="text-primary">mejor software Verifactu</span> en 2026?
                    </h1>
                    <p className="text-xl text-text-body max-w-2xl mx-auto mb-10">
                        Analizamos las principales herramientas del mercado español para que elijas el programa de facturación que realmente te libre de sanciones.
                    </p>
                    <div className="flex justify-center gap-4 text-sm font-bold text-navy/60">
                        <span className="flex items-center gap-1"><ShieldCheck size={16} /> AEAT Certificado</span>
                        <span className="flex items-center gap-1"><Zap size={16} /> Actualizado 2026</span>
                    </div>
                </div>
            </header>

            {/* Ranking List */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto space-y-12">
                        {softwares.map((sw, i) => (
                            <div key={i} className={cn(
                                "bg-white rounded-[40px] overflow-hidden border transition-all duration-300",
                                sw.isWinner ? "border-primary shadow-2xl scale-[1.02]" : "border-slate-100 hover:border-slate-200 shadow-sm"
                            )}>
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                                        <div>
                                            {sw.isWinner && (
                                                <div className="inline-flex items-center gap-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                                                    <Award size={12} /> Ganador Calidad/Precio 2026
                                                </div>
                                            )}
                                            <h2 className="text-3xl font-extrabold text-navy flex items-center gap-3">
                                                {i + 1}. {sw.name}
                                            </h2>
                                            <p className="text-text-body mt-2 font-medium">Ideal para: {sw.target}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex gap-1 mb-2">
                                                {[...Array(5)].map((_, star) => (
                                                    <Star key={star} size={20} className={star < Math.floor(sw.rating) ? "fill-primary text-primary" : "text-slate-200"} />
                                                ))}
                                            </div>
                                            <div className="text-2xl font-black text-navy">{sw.score}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-navy text-sm uppercase tracking-wider">Puntos Fuertes</h4>
                                            <ul className="space-y-3">
                                                {sw.pros.map((pro, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-text-body">
                                                        <CheckCircle2 size={18} className="text-success shrink-0" /> {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-navy text-sm uppercase tracking-wider">A mejorar</h4>
                                            <ul className="space-y-3">
                                                {sw.cons.map((con, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-text-body/70">
                                                        <XCircle size={18} className="text-red-400 shrink-0" /> {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-navy/80 text-center">
                                        "Lo mejor es {sw.bestFor.toLowerCase()}."
                                    </div>

                                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href={sw.href}
                                            className={cn(
                                                "flex-1 py-4 px-8 rounded-full font-bold text-center transition-all",
                                                sw.isWinner ? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02]" : "bg-navy text-white hover:bg-navy/90"
                                            )}
                                        >
                                            {sw.isWinner ? "Ver Oferta VerifacTool" : `Ver comparativa vs ${sw.name}`}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">Qué buscar en el mejor software Verifactu</h2>
                    <p className="text-lg text-text-body mb-6 leading-relaxed">
                        No todos los programas de facturación que dicen ser "compatibles" con Verifactu cumplen realmente los <strong>requisitos técnicos de la AEAT</strong> de forma nativa. Para elegir la mejor opción, asegúrate de que incluya:
                    </p>
                    <ul className="space-y-6 mb-12">
                        {[
                            { t: "Hash encadenado SHA-256", d: "Cada factura debe incluir una huella digital de la anterior. Si rompes la cadena, el software no es legal." },
                            { t: "QR Verificable", d: "El código QR debe permitir al cliente (o inspector) verificar en la web de la AEAT que la factura se ha registrado." },
                            { t: "Remisión inmediata", d: "La capacidad de enviar el registro a Hacienda en tiempo real o diferido de forma automática." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">{i + 1}</div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">{item.t}</h4>
                                    <p className="text-sm text-text-body">{item.d}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="p-10 bg-accent-blue/20 rounded-[40px] border border-accent-blue/30 text-center">
                        <h3 className="text-2xl font-bold text-navy mb-4">¿Dudas sobre cuál elegir?</h3>
                        <p className="text-text-body mb-8">Te asesoramos gratis según el volumen de facturación de tu negocio.</p>
                        <Link href="/demo" className="btn-primary py-4 px-10">
                            Hablar con un experto
                        </Link>
                    </div>
                </div>
            </section>

            {/* Interlinking clusters */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm font-bold text-navy/40 uppercase tracking-widest mb-8">Guías recomendadas</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/verifactu/que-es" className="text-navy/60 hover:text-primary transition-colors text-sm font-medium">¿Qué es Verifactu?</Link>
                        <Link href="/verifactu/sanciones" className="text-navy/60 hover:text-primary transition-colors text-sm font-medium">Sanciones 2026</Link>
                        <Link href="/verifactu/como-funciona" className="text-navy/60 hover:text-primary transition-colors text-sm font-medium">Cómo funciona</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

