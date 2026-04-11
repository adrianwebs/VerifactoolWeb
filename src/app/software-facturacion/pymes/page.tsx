import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import Link from "next/link";
import { Metadata } from "next";
import {
    CheckCircle2,
    ArrowRight,
    Layers,
    Users,
    ShieldCheck,
    TrendingUp,
    Clock,
    Share2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Software Facturación para Pymes: Gestión Completa Verifactu | VerifacTool",
    description: "La solución de facturación para pymes que escalan. Multiusuario, control de cobros, conciliación bancaria y cumplimiento Verifactu 2026. Prueba gratis hoy.",
    openGraph: {
        title: "Software Facturación Pymes: Control Total y Verifactu",
        description: "Gestiona tu pyme de forma profesional. Multiusuario, roles y cumplimiento legal garantizado.",
        url: "https://verifactool.com/software-facturacion/pymes",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/software-facturacion/pymes",
    }
};

export default function SoftwarePymesPage() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "VerifacTool Plan Pymes",
        "description": "Software de facturación corporativo para pequeñas y medianas empresas, adaptado a Verifactu y multiusuarios.",
        "brand": { "@type": "Brand", "name": "VerifacTool" },
        "offers": {
            "@type": "Offer",
            "price": "29.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://verifactool.com/precios"
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={productSchema} />
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-20 bg-navy text-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase mb-8 tracking-widest">
                            <Layers size={14} /> Solución Profesional para PYMES
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Potencia el crecimiento de tu empresa <span className="text-primary italic">sin riesgos legales</span>
                        </h1>
                        <p className="text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                            VerifacTool ofrece a las pymes un control total sobre su facturación y clientes, asegurando que cada factura emitida cumple al 100% con la nueva normativa de Hacienda.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link href="/demo" className="btn-primary py-5 px-12 text-lg w-full sm:w-auto shadow-2xl shadow-primary/20 hover:scale-105 transition-all text-center">
                                Reservar Demo Gratuita
                            </Link>
                            <Link href="/precios" className="text-white font-bold hover:text-primary transition-colors flex items-center gap-2">
                                Ver planes Pyme desde 29€ <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Decorative mesh */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </header>

            {/* Pyme Value Props */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Herramientas corporativas a tu alcance</h2>
                    <p className="text-text-body max-w-2xl mx-auto">Diseñado para que tu equipo trabaje en sintonía mientras tú mantienes el control de la caja y los impuestos.</p>
                </div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Users size={24} />,
                                title: "Multiusuario y Roles",
                                desc: "Configura accesos para administración, ventas y almacén. Tú decides qué puede ver cada uno."
                            },
                            {
                                icon: <TrendingUp size={24} />,
                                title: "Analítica Ventas",
                                desc: "Descubre qué productos o servicios son más rentables con informes automáticos."
                            },
                            {
                                icon: <Clock size={24} />,
                                title: "Cobros Pendientes",
                                desc: "No pierdas ni un céntimo. Detecta impagos y envía recordatorios automáticos."
                            },
                            {
                                icon: <Share2 size={24} />,
                                title: "Conectado con Gestor",
                                desc: "Exporta todo en un clic o da acceso directo a tu gestora para liquidaciones."
                            }
                        ].map((card, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-primary transition-all">
                                <div className="text-primary mb-6">{card.icon}</div>
                                <h3 className="font-bold text-navy text-xl mb-4">{card.title}</h3>
                                <p className="text-text-body text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verifactu Compliance Pillar for Pymes */}
            <section className="py-24 bg-accent-blue/10 border-y border-accent-blue/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-navy mb-6">Tranquilidad absoluta frente a inspecciones</h2>
                                <p className="text-text-body mb-8 leading-relaxed">
                                    Con la <Link href="/verifactu" className="text-primary font-bold hover:underline">Ley Verifactu</Link>, las multas para empresas pueden ser devastadoras. VerifacTool es un **Sistema Informático de Facturación (SIF)** homologado que garantiza la inalterabilidad de tus registros financieros.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-success mt-1" />
                                        <span className="text-sm font-medium">Hash SHA-256 encadenado por normativa.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-success mt-1" />
                                        <span className="text-sm font-medium">Cualquier cambio deja rastro en el sistema.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-success mt-1" />
                                        <span className="text-sm font-medium">Declaración responsable de cumplimiento AEAT.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100">
                                <div className="bg-navy rounded-2xl p-6 text-white text-center mb-6">
                                    <div className="text-xs uppercase font-bold tracking-widest opacity-60 mb-2">Multa potencial</div>
                                    <div className="text-4xl font-black">50.000€</div>
                                    <div className="text-[10px] mt-2 italic opacity-60">*Sanción mínima por uso de software no homologado</div>
                                </div>
                                <Link href="/verifactu/sanciones" className="btn-secondary w-full py-4 text-center block bg-slate-100 text-navy hover:bg-slate-200">
                                    Leer Guía de Sanciones
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-navy mb-6">¿Preparado para subir de nivel tu gestión?</h2>
                    <p className="text-text-body text-lg mb-12 max-w-2xl mx-auto">Únete a cientos de empresas que ya han digitalizado su negocio con total seguridad jurídica.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/demo" className="btn-primary py-5 px-15 text-xl font-bold rounded-2xl shadow-xl shadow-primary/20">Solicitar Demo Personalizada</Link>
                    </div>
                    <p className="text-xs text-slate-400 mt-8 font-medium italic">Sin compromiso • Sin tarjeta de crédito • Migración gratuita incluida</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
