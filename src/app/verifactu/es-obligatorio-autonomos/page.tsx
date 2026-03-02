import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    UserCircle2,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    ArrowRight,
    Download,
    Info,
    Calendar,
    Zap,
    Scale,
    Palette,
    Briefcase,
    Building2,
    CheckSquare
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verifactu obligatorio autónomos 2027: quién debe cumplir",
    description: "¿Verifactu obligatorio para autónomos? SÍ desde 1 julio 2027 (excepto módulos sin facturar, agrarios). Guía definitiva regímenes + fechas.",
    openGraph: {
        title: "¿Es Verifactu obligatorio para autónomos? Respuesta definitiva",
        description: "Verifactu autónomos 2027: obligatorio estimación directa/objetiva, voluntario módulos. Excepciones y fechas exactas.",
        url: "https://verifactool.com/verifactu/es-obligatorio-autonomos",
        type: "article",
        images: ["/og-verifactu-autonomos.jpg"],
    },
    alternates: {
        canonical: "https://verifactool.com/verifactu/es-obligatorio-autonomos",
    },
};

export default function EsObligatorioAutonomosVerifactu() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "¿Es Verifactu obligatorio para autónomos? Respuesta definitiva",
        "description": "Verifactu autónomos 2027: obligatorio estimación directa, voluntario módulos. Excepciones, fechas y checklist.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-02-18",
        "url": "https://verifactool.com/verifactu/es-obligatorio-autonomos"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" },
            { "@type": "ListItem", "position": 3, "name": "Autónomos", "item": "https://verifactool.com/verifactu/es-obligatorio-autonomos" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Verifactu obligatorio autónomos?",
                "acceptedAnswer": { "@type": "Answer", "text": "SÍ, para estimación directa y objetiva desde julio 2027. NO para módulos sin facturación habitual." }
            },
            {
                "@type": "Question",
                "name": "¿Peluquería en módulos debe usar Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "NO para tickets a particulares. SÍ si emite una factura a una empresa." }
            },
            {
                "@type": "Question",
                "name": "¿Un freelance de diseño web necesita Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "SÍ, todas sus facturas deberán ser Verifactu desde julio 2027." }
            },
            {
                "@type": "Question",
                "name": "¿Puedo seguir con Excel hasta junio 2027?",
                "acceptedAnswer": { "@type": "Answer", "text": "Técnicamente sí, pero arriesgas sanciones por software no homologado y una migración caótica de última hora." }
            },
            {
                "@type": "Question",
                "name": "¿Cuánto cuesta un software Verifactu para autónomo?",
                "acceptedAnswer": { "@type": "Answer", "text": "Suele oscilar entre 5-20€/mes. VerifacTool es gratuito los primeros meses." }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <Navbar />

            {/* Hero Section */}
            <header className="hero-section pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm font-medium text-primary mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:underline">Inicio</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <Link href="/verifactu" className="hover:underline">Verifactu</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <span className="text-slate-500">¿Es obligatorio para autónomos?</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                            <UserCircle2 size={14} /> Guía Específica para Autónomos
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-navy leading-tight mb-8">
                            ¿Es Verifactu obligatorio para autónomos? Respuesta definitiva
                        </h1>
                        <p className="text-xl text-text-body mb-8 leading-relaxed">
                            SÍ, Verifactu será obligatorio para la mayoría de autónomos desde el <strong>1 de julio de 2027</strong>. Aquí respondemos todas tus dudas según el régimen fiscal y el tipo de facturación.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 mb-10 text-lg">
                            <Link href="/verifactu" className="font-bold text-primary flex items-center gap-2 hover:underline">
                                <ArrowRight size={20} /> Guía completa Verifactu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            </header>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* 1. Quién debe cumplir */}
                        <section id="obligacion" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Scale size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Quién debe cumplir según la ley</h2>
                            </div>
                            <p className="text-lg text-text-body mb-10 leading-relaxed">
                                La regla es simple: si emites alguna factura con programa informático, es <strong>OBLIGATORIO</strong> cumplir con Verifactu. Esto afecta al 85% de los autónomos en España.
                            </p>

                            <div className="overflow-x-auto rounded-[40px] border border-slate-100 shadow-xl mb-8 ring-1 ring-slate-100">
                                <table className="w-full text-left min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-50 text-navy font-bold text-xs uppercase tracking-widest">
                                            <th className="p-6">Régimen Autónomo</th>
                                            <th className="p-6">Obligado</th>
                                            <th className="p-6">Cuándo</th>
                                            <th className="p-6">Motivo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-text-body">
                                        {[
                                            { r: "Estimación Directa", o: "✅ OBLIGATORIO", c: "01/07/2027", m: "Emite facturas a clientes" },
                                            { r: "Módulos / REGE", o: "⚠️ SOLO SI FACTURA", c: "01/07/2027", m: "Operaciones específicas" },
                                            { r: "Agrario (exento IVA)", o: "❌ EXENTO", c: "-", m: "No factura IVA" },
                                            { r: "Artísticos", o: "✅ OBLIGATORIO", c: "01/07/2027", m: "Facturación habitual" },
                                            { r: "Profesionales liberales", o: "✅ OBLIGATORIO", c: "01/07/2027", m: "Facturas de servicios" }
                                        ].map((row, i) => (
                                            <tr key={i} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                <td className="p-6 font-bold text-navy">{row.r}</td>
                                                <td className="p-6 font-medium">{row.o}</td>
                                                <td className="p-6">{row.c}</td>
                                                <td className="p-6 text-slate-500">{row.m}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 2. Autónomos módulos */}
                        <section id="modulos" className="scroll-mt-24">
                            <div className="p-12 bg-slate-50 rounded-[48px] border border-slate-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-navy text-white rounded-2xl flex items-center justify-center">
                                        <Briefcase size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-navy">Autónomos módulos: el caso especial</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <h4 className="font-bold text-success flex items-center gap-2">
                                            <CheckCircle2 size={18} /> EXENTOS CUANDO:
                                        </h4>
                                        <ul className="space-y-3 text-sm text-text-body">
                                            <li className="flex gap-2">• Operaciones habituales sin factura (bar, peluquería).</li>
                                            <li className="flex gap-2">• Solo entregas recibos simples o efectivo.</li>
                                            <li className="flex gap-2">• El cliente es un particular, no un empresario.</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="font-bold text-red-600 flex items-center gap-2">
                                            <AlertTriangle size={18} /> OBLIGADOS CUANDO:
                                        </h4>
                                        <ul className="space-y-3 text-sm text-text-body">
                                            <li className="flex gap-2">• El cliente es empresario y pide factura.</li>
                                            <li className="flex gap-2">• Emite facturas voluntarias con IVA (exportaciones).</li>
                                            <li className="flex gap-2">• Realiza servicios profesionales puntuales.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-12 bg-white p-8 rounded-[32px] border border-slate-100 flex gap-6 items-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Palette size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-navy mb-1 uppercase tracking-widest">Ejemplo Peluquería</p>
                                        <p className="text-sm text-text-body">
                                            ✅ Cliente particular → <strong>TIKET OK (No Verifactu)</strong><br />
                                            ❌ Cliente empresa → <strong>FACTURA VERIFACTU OBLIGATORIA</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Casos excepcionales */}
                        <section id="excepciones" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold text-navy mb-10">4 excepciones claras al Verifactu</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { t: "Sector Agrario", d: "Agrarios, ganaderos y pesqueros exentos de IVA que no emiten facturas." },
                                    { t: "Módulos Minoristas", d: "Aquellos sin facturación habitual que solo emiten tickets simples a particulares." },
                                    { t: "Facturación Manual", d: "Facturas en papel aisladas (<10/año) siguen permitidas en casos muy específicos." },
                                    { t: "Recibos Agrarios", d: "En los casos donde es el comprador quien emite el recibo de compra." }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm flex flex-col justify-center gap-4 group hover:border-primary/30 transition-colors">
                                        <h4 className="font-bold text-navy flex items-center gap-2 group-hover:text-primary transition-colors">
                                            <XCircle size={20} /> {item.t}
                                        </h4>
                                        <p className="text-sm text-text-body leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-10 bg-navy text-white rounded-[48px] shadow-2xl relative overflow-hidden">
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                                    <div>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Fotógrafo en Módulos</p>
                                        <p className="text-sm">OBLIGADO si factura a un evento de empresa.</p>
                                    </div>
                                    <div className="md:border-x md:border-white/10 md:px-8">
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Peluquera REGE</p>
                                        <p className="text-sm">NO OBLIGADA si solo emite tickets particulares.</p>
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Diseñador freelancer</p>
                                        <p className="text-sm">OBLIGADO en el 100% de sus facturas.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. Fechas límite */}
                        <section id="fechas" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Calendar size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Fechas límite autónomos 2027</h2>
                            </div>

                            <div className="max-w-2xl mx-auto space-y-8 relative">
                                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />

                                <div className="relative z-10 flex items-center justify-between gap-12 group">
                                    <div className="flex-1 text-right">
                                        <h4 className="font-bold text-navy">29/07/2025</h4>
                                        <p className="text-xs text-slate-500">Lanzamiento software</p>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10" />
                                    <div className="flex-1">
                                        <p className="text-sm text-text-body italic">Proveedores lanzan versiones Verifactu.</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-between gap-12 group">
                                    <div className="flex-1 text-right">
                                        <h4 className="font-bold text-navy uppercase text-xs tracking-wider">AÑO 2026</h4>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-slate-300" />
                                    <div className="flex-1">
                                        <p className="text-sm text-text-body font-bold">Periodo Transitorio</p>
                                        <p className="text-xs text-slate-500">Adopción voluntaria sin sanciones.</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-between gap-12 group">
                                    <div className="flex-1 text-right">
                                        <h4 className="font-bold text-red-600">01/07/2027</h4>
                                        <p className="text-xs text-red-400">FECHA LÍMITE</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-8 ring-red-100">
                                        <Zap size={14} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-red-600 font-bold uppercase">Obligatoriedad total</p>
                                        <p className="text-xs text-slate-500">Multas automáticas por software no homologado.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 bg-slate-50 p-10 rounded-[48px] border border-slate-100">
                                <h3 className="text-2xl font-bold text-navy mb-8 text-center uppercase tracking-widest">Plan de Preparación Recomendado</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { t: "ENE-MAR 2027", d: "Elegir el mejor software Verifactu." },
                                        { t: "ABR-MAY 2027", d: "Migrar tus Excel o sistema actual." },
                                        { t: "JUNIO 2027", d: "Mes de pruebas y formación final." }
                                    ].map((step, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-4 italic">{i + 1}</div>
                                            <h4 className="font-bold text-navy mb-2">{step.t}</h4>
                                            <p className="text-sm text-text-body">{step.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Checklist Final */}
                        <section id="checklist" className="scroll-mt-24">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-bold text-navy flex items-center gap-3">
                                        <CheckSquare size={24} className="text-primary" /> Checklist Autónomo
                                    </h3>
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest border-b pb-2">Tu Situación</h4>
                                        {[
                                            "Estimación directa → OBLIGADO julio 2027",
                                            "Módulos/REGE → Solo si facturo a empresas",
                                            "Agrario → EXENTO",
                                            "Artístico/profesional → OBLIGADO"
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 text-sm text-text-body p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-default">
                                                <div className="w-5 h-5 rounded border border-slate-300 bg-white" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-primary p-12 rounded-[48px] text-white flex flex-col justify-center items-center text-center shadow-xl">
                                    <Download size={48} className="mb-6 opacity-30" />
                                    <h3 className="text-2xl font-bold mb-4">Descarga el Checklist para Autónomos</h3>
                                    <p className="text-white/70 mb-8">Guía en PDF con los pasos exactos para tu régimen fiscal.</p>
                                    <button className="w-full py-5 bg-white text-primary font-extrabold rounded-2xl shadow-lg hover:bg-slate-50 transition-colors">
                                        PDF GRATUITO
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* CTA Final */}
                        <section id="cta" className="scroll-mt-24">
                            <div className="bg-navy rounded-[60px] p-16 text-center text-white relative overflow-hidden shadow-2xl">
                                <div className="relative z-10 max-w-3xl mx-auto">
                                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-primary/20">
                                        <Building2 size={32} className="text-primary" />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8">VerifacTool: creado para autónomos</h2>
                                    <p className="text-xl text-white/70 mb-12">
                                        Perfecto para freelancers. Simplifica Verifactu y céntrate en tu negocio.
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                                        {["0€ primeros 3 meses", "Hash/QR automáticos", "PWA móvil completa", "Migración Excel gratis", "Módulos Inteligente"].map((tag, i) => (
                                            <div key={i} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                                                ✅ {tag}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Link href="/software-verifactu" className="btn-primary py-5 px-12 text-lg font-extrabold rounded-2xl hover:scale-105 transition-all">
                                            🚀 Probar VerifacTool Autónomos
                                        </Link>
                                        <Link href="#" className="btn-outline border-white/30 text-white hover:bg-white/10 py-5 px-10 text-lg font-bold rounded-2xl">
                                            Ver programa específico
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 p-12 rounded-[48px] border border-slate-100">
                            <h2 className="text-2xl font-extrabold text-navy mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes Autónomos</h2>
                            <div className="space-y-6">
                                {faqSchema.mainEntity.map((faq, i) => (
                                    <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-sm transition-shadow">
                                        <h4 className="font-bold text-navy mb-4 flex gap-2">
                                            <Info size={18} className="text-primary shrink-0" />
                                            {faq.name}
                                        </h4>
                                        <p className="text-sm text-text-body leading-relaxed">{faq.acceptedAnswer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

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
