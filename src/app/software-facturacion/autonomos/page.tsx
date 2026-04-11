import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import Link from "next/link";
import { Metadata } from "next";
import {
    CheckCircle2,
    ArrowRight,
    Smartphone,
    Zap,
    ShieldCheck,
    BarChart3,
    FileText,
    MousePointer2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Software Facturación Autónomos 2026: Fácil y Verifactu | VerifacTool",
    description: "El programa de facturación para autónomos más sencillo y potente. Cumple con Verifactu, gestiona gastos con OCR y envía facturas en 1 clic. ¡Desde 15€/mes!",
    openGraph: {
        title: "Software Facturación Autónomos: La mejor herramienta del 2026",
        description: "Controla tu negocio de autónomo sin dolor de cabeza. Compatible con Verifactu y TicketBAI.",
        url: "https://verifactool.com/software-facturacion/autonomos",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/software-facturacion/autonomos",
    }
};

export default function SoftwareAutonomosPage() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "VerifacTool Plan Autónomos",
        "description": "Software de facturación especializado para autónomos en España, compatible con la ley Verifactu.",
        "brand": { "@type": "Brand", "name": "VerifacTool" },
        "offers": {
            "@type": "Offer",
            "price": "15.00",
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
            <header className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
                            <Zap size={16} /> Diseñado para el autónomo moderno
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight mb-8">
                            El <span className="text-secondary">software de facturación</span> que los autónomos aman
                        </h1>
                        <p className="text-xl text-text-body mb-10 max-w-2xl mx-auto">
                            Olvídate de Excel y de complicaciones legales. VerifacTool es la herramienta más rápida para facturar, gestionar gastos y cumplir con Hacienda en 2026.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/demo" className="btn-primary py-5 px-12 text-lg w-full sm:w-auto shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                                Empezar gratis ahora
                            </Link>
                            <Link href="/precios" className="text-navy font-bold hover:text-primary transition-colors flex items-center gap-2">
                                Ver planes desde 15€/mes <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features specifically for freelancers */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-accent-blue rounded-2xl flex items-center justify-center text-primary mb-8">
                                <Smartphone size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">Factura desde el móvil</h3>
                            <p className="text-text-body leading-relaxed">
                                Crea y envía facturas profesionales por WhatsApp o email justo cuando termines el trabajo. Sin esperar a llegar a casa.
                            </p>
                        </div>
                        <div className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <FileText size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">OCR: Fotos a tus tickets</h3>
                            <p className="text-text-body leading-relaxed">
                                Haz una foto a tus facturas de gasto y nosotros extraemos los datos automáticamente. ¡Se acabó picar facturas!
                            </p>
                        </div>
                        <div className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-success/10 rounded-2xl flex items-center justify-center text-success mb-8">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">100% Verifactu 2026</h3>
                            <p className="text-text-body leading-relaxed">
                                Cumple con el RD 1007/2023 de forma automática. Generamos el hash encadenado y el QR AEAT sin que tengas que hacer nada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof / Benefit */}
            <section className="py-24 bg-navy text-white rounded-[60px] mx-4 md:mx-10 my-20 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                Dedica tiempo a tu negocio, <span className="text-primary italic">no al papeleo</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Borrador de IRPF e IVA siempre listo para tu gestor.",
                                    "Control de cobros para que nada se quede sin pagar.",
                                    "Personalización completa de facturas con tu logo.",
                                    "Acceso directo para tu asesoría."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <CheckCircle2 className="text-primary shrink-0" size={24} />
                                        <span className="text-lg text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-white/5 backdrop-blur-xl rounded-[40px] p-10 border border-white/10">
                            <div className="text-center mb-8">
                                <div className="text-4xl font-black text-white mb-2">15€<span className="text-lg font-normal opacity-60">/mes</span></div>
                                <p className="text-sm uppercase tracking-widest font-bold text-primary">Plan Autónomo Todo Incluido</p>
                            </div>
                            <ul className="space-y-4 mb-10 text-sm">
                                <li className="flex justify-between border-b border-white/10 pb-4"><span>Facturas ilimitadas</span> <CheckCircle2 size={16} className="text-success" /></li>
                                <li className="flex justify-between border-b border-white/10 pb-4"><span>Garantía Verifactu 2026</span> <CheckCircle2 size={16} className="text-success" /></li>
                                <li className="flex justify-between border-b border-white/10 pb-4"><span>OCR de tickets</span> <CheckCircle2 size={16} className="text-success" /></li>
                                <li className="flex justify-between"><span>Soporte por chat</span> <CheckCircle2 size={16} className="text-success" /></li>
                            </ul>
                            <Link href="/demo" className="btn-primary w-full py-4 text-center block">Empezar ahora</Link>
                        </div>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            </section>

            {/* Silo Linking Context */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl font-bold text-navy mb-12">Soluciones de facturación relacionadas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Facturación para Pymes", href: "/software-facturacion/pymes" },
                            { name: "Normativa Verifactu", href: "/verifactu" },
                            { name: "Sanciones Verifactu", href: "/verifactu/sanciones" },
                            { name: "Software de Contabilidad", href: "/software-contabilidad-online" }
                        ].map((link, i) => (
                            <Link key={i} href={link.href} className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary transition-all flex justify-between items-center">
                                <span className="font-bold text-navy text-sm group-hover:text-primary">{link.name}</span>
                                <ArrowRight size={16} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
