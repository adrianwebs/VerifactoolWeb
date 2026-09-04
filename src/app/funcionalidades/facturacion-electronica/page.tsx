import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import Link from "next/link";
import { Metadata } from "next";
import {
    ShieldCheck,
    Zap,
    ArrowRight,
    FileJson,
    Send,
    Clock,
    CheckCircle2,
    Lock
} from "lucide-react";

export const metadata: Metadata = {
    title: "Software Factura Electrónica: Ley Crea y Crece 2026 | VerifacTool",
    description: "Cumple con la obligatoriedad de la factura electrónica en España. Software homologado para la Ley Crea y Crece y Verifactu. ¡Empieza hoy gratis!",
    openGraph: {
        title: "Factura Electrónica Obligatoria 2026: Guía y Software",
        description: "Todo lo que necesitas para adaptar tu empresa a la Ley Crea y Crece. Emisión y recepción automática de facturas electrónicas.",
        url: "https://verifactool.com/funcionalidades/facturacion-electronica",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/funcionalidades/facturacion-electronica",
    }
};

export default function FacturacionElectronicaPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cuándo es obligatoria la factura electrónica en España?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La factura electrónica será obligatoria para todas las empresas y autónomos en sus relaciones comerciales B2B a partir de 2026, siguiendo los plazos de la Ley Crea y Crece."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué es la Ley Crea y Crece?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Es una normativa que busca impulsar la digitalización, reducir la morosidad y obligar al uso de la factura electrónica entre empresas y autónomos en España."
                }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <JsonLd data={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-3/5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase mb-6 tracking-widest">
                                <ShieldCheck size={14} /> Solución Homologada Crea y Crece
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight mb-8">
                                Domina la <span className="text-primary italic">Factura Electrónica</span> obligatoria
                            </h1>
                            <p className="text-xl text-text-body mb-10 leading-relaxed max-w-2xl">
                                Adelántate a los plazos de la Ley Crea y Crece. Nuestra plataforma te permite emitir y recibir facturas electrónicas de forma segura, automática y 100% legal.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link href="/demo" className="btn-primary py-5 px-12 text-lg w-full sm:w-auto shadow-2xl shadow-primary/20 hover:scale-105 transition-all text-center font-bold">
                                    Probar Gratis ahora
                                </Link>
                                <Link href="/verifactu/requisitos-tecnicos" className="text-navy font-bold hover:text-primary transition-colors flex items-center gap-2">
                                    Ver especificaciones técnicas <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-2/5 relative">
                            <div className="bg-gradient-to-tr from-primary to-secondary p-1 rounded-[40px] shadow-2xl">
                                <div className="bg-navy rounded-[38px] p-8 text-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><FileJson size={24} className="text-primary" /></div>
                                        <div>
                                            <div className="text-xs uppercase font-bold opacity-50">Formato Standard</div>
                                            <div className="font-bold">FacturaE XML / Peppol</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mb-8 opacity-40">
                                        <div className="h-2 bg-white rounded-full w-full"></div>
                                        <div className="h-2 bg-white rounded-full w-3/4"></div>
                                        <div className="h-2 bg-white rounded-full w-5/6"></div>
                                    </div>
                                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                                        <span className="text-sm font-medium">Estado de envío</span>
                                        <span className="px-3 py-1 bg-success/20 text-success text-[10px] font-black rounded-full uppercase">Entregado AEAT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Key Benefits */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">¿Por qué usar VerifacTool para tu facturación electrónica?</h2>
                        <p className="text-text-body">Cumplir con la ley es solo el principio. Nuestra plataforma optimiza todo tu flujo de caja.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Send className="text-primary" />,
                                title: "Envío Multicanal",
                                desc: "Envía tus facturas vía email, portal del cliente o directamente al FACE (Administración Pública) en un solo clic."
                            },
                            {
                                icon: <Lock className="text-primary" />,
                                title: "Firma Electrónica",
                                desc: "Firmamos tus facturas por ti con certificados digitales válidos, garantizando la integridad de cada documento."
                            },
                            {
                                icon: <Clock size={28} className="text-primary" />,
                                title: "Control de Estados",
                                desc: "Recibe notificaciones reales cuando tu cliente abra la factura o cuando sea aceptada/rechazada por la Administración."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                                <p className="text-text-body leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulation focus */}
            <section className="py-24 bg-navy text-white rounded-[60px] mx-4 md:mx-10 overflow-hidden">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 italic text-primary">Adiós al papel, hola al ahorro</h2>
                    <p className="text-lg text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Se calcula que la factura electrónica ahorra una media de <strong>1,20€ por factura emitida</strong>. Multiplica eso por tu volumen anual. Menos errores, menos tiempo de gestión y cobros más rápidos.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "100% Sin Papel",
                            "Espacio en la Nube",
                            "Auditorías Rápidas",
                            "Cobros Automatizados"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center justify-center gap-3 bg-white/5 py-4 px-6 rounded-full border border-white/10 italic font-bold">
                                <CheckCircle2 className="text-primary" size={20} />
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Secondary Silo Links */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <h3 className="text-2xl font-bold text-navy mb-12">Explora más funcionalidades clave</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { n: "Software de Contabilidad", h: "/software-contabilidad-online" },
                            { n: "Qué es Verifactu", h: "/verifactu" },
                            { n: "Planes para Autónomos", h: "/software-facturacion/autonomos" },
                            { n: "Gestión de Pymes", h: "/software-facturacion/pymes" }
                        ].map((link, i) => (
                            <Link key={i} href={link.h} className="group p-6 bg-white border border-slate-200 rounded-2xl flex justify-between items-center hover:border-primary transition-all">
                                <span className="font-bold text-navy group-hover:text-primary text-sm">{link.n}</span>
                                <ArrowRight size={16} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
