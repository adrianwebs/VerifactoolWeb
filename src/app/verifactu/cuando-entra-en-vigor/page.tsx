import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    Calendar,
    Clock,
    AlertTriangle,
    CheckCircle2,
    ArrowRight,
    Download,
    Building2,
    UserCircle2,
    ShieldAlert,
    Zap,
    MapPin,
    ArrowDown
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verifactu cuándo entra en vigor: fechas oficiales 2027 España",
    description: "Fechas obligatorias Verifactu 2027: 1 enero empresas, 1 julio autónomos. Timeline completo, consecuencias retrasos y checklist preparación.",
    openGraph: {
        title: "Verifactu cuándo entra en vigor: fechas oficiales 2027",
        description: "Calendario Verifactu actualizado: plazos empresas vs autónomos, consecuencias no adaptarse y cómo prepararte antes 2027.",
        url: "https://verifactool.com/verifactu/cuando-entra-en-vigor",
        type: "article",
        images: ["/og-timeline-verifactu.jpg"],
    },
};

export default function CuandoEntraEnVigorVerifactu() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Cuándo entra en vigor Verifactu: fechas y plazos 2027",
        "description": "Timeline oficial Verifactu: 1 enero 2027 empresas, 1 julio 2027 autónomos. Checklist preparación + consecuencias retraso.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-02-18",
        "url": "https://verifactool.com/verifactu/cuando-entra-en-vigor"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" },
            { "@type": "ListItem", "position": 3, "name": "Cuándo entra en vigor", "item": "https://verifactool.com/verifactu/cuando-entra-en-vigor" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cuándo entra en vigor Verifactu para empresas?",
                "acceptedAnswer": { "@type": "Answer", "text": "1 enero 2027. Todas las personas jurídicas deben usar software homologado." }
            },
            {
                "@type": "Question",
                "name": "¿Autónomos tienen fecha diferente?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sí, 1 julio 2027 (6 meses más). Excepción recibos agrarios." }
            },
            {
                "@type": "Question",
                "name": "¿Hay periodo transitorio 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Voluntario. Puedes emitir Verifactu sin sanciones desde julio 2025." }
            },
            {
                "@type": "Question",
                "name": "¿Qué pasa si me retraso 1 mes?",
                "acceptedAnswer": { "@type": "Answer", "text": "Facturas inválidas + inicio sanciones. AEAT detecta automáticamente." }
            }
        ]
    };

    const timelineItems = [
        { date: "JULIO 2025", title: "Software disponible", content: "29/07/2025: Proveedores lanzan versiones Verifactu. Empieza la cuenta atrás.", status: "active" },
        { date: "AÑO 2026", title: "Periodo transitorio", content: "Voluntario: emitir facturas Verifactu sin sanciones. Ideal para pruebas reales.", status: "future" },
        { date: "ENERO 2027", title: "OBLIGATORIO empresas", content: "01/01/2027: SL/SA y entidades sin personalidad jurídica deben cumplir.", status: "warning" },
        { date: "JULIO 2027", title: "OBLIGATORIO autónomos", content: "01/07/2027: Profesionales, estimación directa y objetiva (módulos).", status: "warning" },
        { date: "2028+", title: "Sanciones plenas", content: "Fiscalización total e inspecciones masivas de la AEAT.", status: "danger" }
    ];

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <Navbar />

            {/* Hero Section */}
            <header className="hero-section pt-32 pb-20 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm font-medium text-primary mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:underline">Inicio</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <Link href="/verifactu" className="hover:underline">Verifactu</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <span className="text-slate-500">Cuándo entra en vigor</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase mb-6 border border-blue-200">
                            <Clock size={14} /> Actualizado: RD-ley 15/2025
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-navy leading-tight mb-8">
                            Cuándo entra en vigor Verifactu: fechas y plazos
                        </h1>
                        <p className="text-xl text-text-body mb-8 leading-relaxed">
                            Última prórroga: empresas obligadas el <strong>1 de enero de 2027</strong> y autónomos el <strong>1 de julio de 2027</strong>. Esta guía detalla hitos, consecuencias y cómo prepararte.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 mb-10 text-lg">
                            <Link href="/verifactu" className="font-bold text-primary flex items-center gap-2 hover:underline">
                                <ArrowRight size={20} /> Volver a la guía principal
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </header>

            {/* Timeline Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">Timeline Visual Verifactu 2025-2028</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto italic">
                            Basado en el RD-ley 15/2025 que prorroga el calendario oficial un año más.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical line for desktop */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 md:hidden" />
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-200 to-slate-100 -translate-x-1/2" />

                        <div className="space-y-16 relative">
                            {timelineItems.map((item, i) => (
                                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8`}>
                                    <div className="flex-1 w-full md:text-right">
                                        {i % 2 === 0 && (
                                            <div className="hidden md:block">
                                                <span className="text-sm font-bold text-primary uppercase tracking-widest">{item.date}</span>
                                                <h3 className="text-2xl font-bold text-navy mt-2">{item.title}</h3>
                                                <p className="text-text-body mt-2">{item.content}</p>
                                            </div>
                                        )}
                                        {i % 2 !== 0 && (
                                            <div className="md:hidden pt-2 pl-16">
                                                <span className="text-sm font-bold text-primary uppercase tracking-widest">{item.date}</span>
                                                <h3 className="text-2xl font-bold text-navy mt-2">{item.title}</h3>
                                                <p className="text-text-body mt-2">{item.content}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className={`relative z-10 w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-lg ${item.status === 'active' ? 'bg-primary text-white ring-8 ring-primary/10' :
                                        item.status === 'warning' ? 'bg-orange-500 text-white ring-8 ring-orange-500/10' :
                                            item.status === 'danger' ? 'bg-red-600 text-white ring-8 ring-red-600/10' :
                                                'bg-white text-slate-400 border-4 border-slate-100'
                                        }`}>
                                        <Calendar size={24} />
                                    </div>

                                    <div className="flex-1 w-full text-left">
                                        {i % 2 !== 0 && (
                                            <div className="hidden md:block">
                                                <span className="text-sm font-bold text-primary uppercase tracking-widest">{item.date}</span>
                                                <h3 className="text-2xl font-bold text-navy mt-2">{item.title}</h3>
                                                <p className="text-text-body mt-2">{item.content}</p>
                                            </div>
                                        )}
                                        {i % 2 === 0 && (
                                            <div className="md:hidden pt-2 pl-16">
                                                <span className="text-sm font-bold text-primary uppercase tracking-widest">{item.date}</span>
                                                <h3 className="text-2xl font-bold text-navy mt-2">{item.title}</h3>
                                                <p className="text-text-body mt-2">{item.content}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Split Sections */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">

                        {/* Empresas */}
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-navy text-white rounded-[24px] flex items-center justify-center">
                                <Building2 size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy">Empresas: obligadas desde 1 enero 2027</h2>
                            <p className="text-lg text-text-body leading-relaxed">
                                Personas jurídicas (SL/SA), fundaciones y comunidades de bienes deben emitir facturas exclusivamente con Verifactu desde el inicio del ejercicio 2027.
                            </p>
                            <div className="bg-white p-8 rounded-[40px] border border-slate-200 space-y-4">
                                <h4 className="font-bold text-navy uppercase tracking-widest text-xs border-b pb-4">Impacto Inmediato</h4>
                                <ul className="space-y-3 text-sm text-text-body">
                                    <li className="flex gap-3">
                                        <AlertTriangle size={18} className="text-red-500 shrink-0" />
                                        <span>Facturas en Excel o Word serán fiscalmente <strong>inválidas</strong>.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <AlertTriangle size={18} className="text-red-500 shrink-0" />
                                        <span>Software no adaptado supone multas de hasta <strong>50.000€</strong>.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <AlertTriangle size={18} className="text-red-500 shrink-0" />
                                        <span>La AEAT podrá cruzar datos bancarios con facturas automáticas.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center pt-4">
                                <Link href="/verifactu/sanciones" className="text-primary font-bold hover:underline flex items-center gap-2 justify-center">
                                    Ver todas las sanciones detalladas <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Autonomos */}
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-primary text-white rounded-[24px] flex items-center justify-center">
                                <UserCircle2 size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy">Autónomos: margen hasta julio 2027</h2>
                            <p className="text-lg text-text-body leading-relaxed">
                                Los profesionales y autónomos en estimación directa u objetiva (módulos) disponen de 6 meses adicionales para su adaptación.
                            </p>
                            <div className="bg-navy p-8 rounded-[40px] text-white space-y-6 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="font-bold text-primary uppercase tracking-widest text-xs border-b border-white/10 pb-4">Ventaja del Plazo Extra</h4>
                                    <ul className="space-y-4 pt-4">
                                        <li className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 size={18} className="text-primary" /> Probar software de forma traquila.
                                        </li>
                                        <li className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 size={18} className="text-primary" /> Migrar Excel sin las prisas del cierre de año.
                                        </li>
                                        <li className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 size={18} className="text-primary" /> Evitar el colapso de soporte en enero.
                                        </li>
                                    </ul>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-slate-200">
                                <p className="text-sm font-medium text-navy italic">"Recomendamos empezar en primavera 2027 para llegar a julio con el sistema 100% auditado."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preparation Checklist */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <ShieldAlert size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy">Checklist de Preparación por Fechas</h2>
                        </div>

                        <div className="space-y-12">
                            {[
                                {
                                    date: "AHORA (Feb 2026)",
                                    items: [
                                        "Auditar: ¿mi software genera hash/QR?",
                                        "Realizar checklist técnica completa",
                                        "Presupuestar costes de migración"
                                    ]
                                },
                                {
                                    date: "ABRIL-JUNIO 2026",
                                    items: [
                                        "Elegir proveedor homologado (ej. VerifacTool)",
                                        "Migrar histórico de facturas actuales",
                                        "Hacer pruebas con 10 facturas/mes"
                                    ]
                                },
                                {
                                    date: "ENE-ABR 2027 (Autónomos)",
                                    items: [
                                        "Formación del equipo (aprox. 2 horas)",
                                        "Configurar accesos para asesoría",
                                        "Realizar backup del sistema antiguo"
                                    ]
                                },
                                {
                                    date: "ÚLTIMO MES PRE-VIGOR",
                                    items: [
                                        "Emitir 100 facturas de prueba",
                                        "Verificar lectura de todos los QR",
                                        "Documentar el proceso interno de anulación"
                                    ]
                                }
                            ].map((phase, i) => (
                                <div key={i} className="relative pl-12">
                                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <h4 className="font-extrabold text-navy text-xl mb-6">{phase.date}</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {phase.items.map((item, j) => (
                                            <div key={j} className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
                                                <div className="w-5 h-5 rounded border border-slate-300 bg-white mt-0.5" />
                                                <span className="text-sm text-text-body">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-10 bg-navy rounded-[48px] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
                            <div className="flex-1 relative z-10 text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-4">Descarga el Calendario PDF</h3>
                                <p className="text-white/70">Calendario Verifactu personalizable con tus hitos de migración.</p>
                            </div>
                            <button className="btn-primary py-5 px-10 text-lg flex items-center gap-3 relative z-10 hover:scale-105 transition-transform">
                                <Download size={20} /> Descargar PDF Gratuito
                            </button>
                            <div className="absolute top-0 right-0 w-full h-full opacity-10">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-primary rounded-[60px] p-16 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-10">
                                <Zap size={40} className="text-white fill-current" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                                Prepárate para 2027 hoy mismo
                            </h2>
                            <p className="text-xl text-white/80 mb-12 leading-relaxed">
                                VerifacTool está listo desde julio 2025 para cumplir con todas las fases de Verifactu. Empieza sin prisas ni riesgos.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/software-verifactu" className="btn-secondary bg-navy text-white hover:bg-navy/80 py-5 px-15 text-xl font-bold rounded-2xl transition-all">
                                    🚀 Probar Verifactu Gratis
                                </Link>
                                <Link href="/verifactu" className="btn-outline border-white/40 text-white hover:bg-white/10 py-5 px-10 text-xl font-bold rounded-2xl transition-all">
                                    Guía Verifactu
                                </Link>
                            </div>
                        </div>
                        {/* Background mesh */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-navy rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/2" />
                            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-navy text-center mb-16">Preguntas Frecuentes sobre el Calendario</h2>
                    <div className="space-y-8">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                                <h4 className="text-xl font-bold text-navy mb-4">{faq.name}</h4>
                                <p className="text-text-body text-lg">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
