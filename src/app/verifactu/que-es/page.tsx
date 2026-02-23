import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    Info,
    History,
    Cpu,
    ArrowRightLeft,
    CheckSquare,
    Zap,
    Scale,
    Code,
    Smartphone,
    FileText,
    Download,
    ArrowRight,
    Search
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Qué es Verifactu: Definición Oficial y Funcionamiento | VerifacTool",
    description: "Qué es Verifactu según AEAT: definición completa, funcionamiento técnico y obligaciones legales. Diferencias con factura electrónica + software compatible.",
    openGraph: {
        title: "Qué es Verifactu: Definición Oficial y Funcionamiento",
        description: "Verifactu explicado: qué es, cómo funciona técnicamente, origen legal y diferencias con factura electrónica clásica.",
        images: ["/og-verifactu-que-es.jpg"],
        url: "https://verifactool.com/verifactu/que-es",
        type: "article",
    },
    alternates: {
        canonical: "https://verifactool.com/verifactu/que-es",
    },
};

export default function QueEsVerifactu() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Qué es Verifactu: definición, funcionamiento y obligaciones",
        "description": "Definición oficial Verifactu AEAT, funcionamiento técnico, diferencias factura electrónica.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-02-16",
        "url": "https://verifactool.com/verifactu/que-es"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" },
            { "@type": "ListItem", "position": 3, "name": "Qué es Verifactu", "item": "https://verifactool.com/verifactu/que-es" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "¿Para qué sirve Verifactu?",
            "acceptedAnswer": { "@type": "Answer", "text": "Garantizar integridad facturas con hash/QR inalterables." }
        }]
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <Navbar />

            {/* Hero Section */}
            <header className="hero-section pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumbs UI */}
                        <nav className="flex items-center gap-2 text-sm font-medium text-primary mb-8" aria-label="Breadcrumb">
                            <Link href="/" className="hover:underline">Inicio</Link>
                            <ChevronRight size={14} className="text-slate-300" />
                            <Link href="/verifactu" className="hover:underline">Verifactu</Link>
                            <ChevronRight size={14} className="text-slate-300" />
                            <span className="text-slate-500">Qué es Verifactu</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-8">
                            Qué es Verifactu: definición, funcionamiento y obligaciones
                        </h1>

                        <p className="text-xl text-text-body mb-10 leading-relaxed">
                            Verifactu es el sistema obligatorio de la AEAT para garantizar la integridad de las facturas desde 2026-2027. Obliga a software de facturación que genere hash criptográfico, QR verificable y registros inalterables.
                        </p>

                        <p className="text-lg text-text-body mb-10">
                            Esta guía oficial explica la definición exacta según la AEAT, su funcionamiento técnico y qué cambia para autónomos/pymes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/verifactu" className="btn-primary py-4 px-8 inline-flex items-center gap-2 group">
                                Continúa en la guía completa <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* 1. Definición Oficial */}
                        <section id="definicion" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <Info size={14} /> Definición Oficial
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-8">Qué dice exactamente la Agencia Tributaria</h2>
                            <div className="prose prose-slate max-w-none prose-p:text-text-body prose-p:text-lg prose-p:leading-relaxed">
                                <p>
                                    <strong>Verifactu</strong> es el Sistema de Verificación de Facturas de la AEAT, regulado por el <strong>Real Decreto 1007/2023</strong>.
                                </p>
                                <div className="bg-slate-50 p-8 rounded-[32px] border-l-4 border-l-primary mb-8 mt-6">
                                    <p className="italic text-navy font-medium mb-4">"Los sistemas informáticos de facturación deberán incorporar mecanismos que permitan el registro cronológico de los datos de facturación con garantía de integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad durante al menos el plazo de prescripción."</p>
                                    <p className="text-sm text-slate-500 font-bold">— Artículo 1 del Real Decreto 1007/2023</p>
                                </div>
                                <p>
                                    En palabras simples: <strong>Cada factura genera un registro informático único</strong> que no se puede modificar una vez emitida. Incluye un <strong>hash SHA-256 encadenado</strong> (donde la factura actual referencia criptográficamente a la anterior) y un <strong>código QR dinámico</strong> que permite el cotejo público por parte de cualquier cliente o inspector.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-8">
                                    {['sistema verifactu', 'integridad', 'inalterabilidad', 'hash criptográfico'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold font-mono">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 2. Origen Legal */}
                        <section id="origen" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <History size={14} /> Evolución Normativa
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-8">Origen Legal: Ley Antifraude + RD 1007/2023</h2>
                            <div className="space-y-12 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
                                <div className="relative pl-14">
                                    <div className="absolute left-0 top-1 w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary font-bold z-10">21</div>
                                    <h4 className="text-xl font-bold text-navy mb-2">Ley 11/2021 Antifraude</h4>
                                    <p className="text-text-body">Primera mención al "registro verificable de facturas" con el objetivo claro de combatir la manipulación de datos en herramientas como Excel o Word.</p>
                                </div>
                                <div className="relative pl-14">
                                    <div className="absolute left-0 top-1 w-12 h-12 bg-primary rounded-2xl shadow-sm flex items-center justify-center text-white font-bold z-10">23</div>
                                    <h4 className="text-xl font-bold text-navy mb-2">Real Decreto 1007/2023 (14 dic)</h4>
                                    <p className="text-text-body leading-relaxed">
                                        Reglamento técnico definitivo que detalla los requisitos técnicos obligatorios: <strong>Hash SHA-256</strong>, <strong>código QR</strong>, ficheros <strong>XML de auditoría</strong> y comunicación voluntaria AEAT.
                                    </p>
                                </div>
                                <div className="relative pl-14">
                                    <div className="absolute left-0 top-1 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 font-bold z-10">25</div>
                                    <h4 className="text-xl font-bold text-navy mb-2">Prórroga Oficial</h4>
                                    <p className="text-text-body">El Gobierno anunció un retraso de un año para facilitar la adaptación, estableciendo la fecha definitiva para autónomos en <strong>julio de 2027</strong>.</p>
                                </div>
                            </div>
                            <div className="mt-12 p-8 rounded-[40px] bg-accent-blue border border-primary/5 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-navy mb-2">Objetivo final de la AEAT</h4>
                                    <p className="text-sm text-text-body">Lograr la digitalización total de la facturación en España, permitiendo un cruce automático de datos con las entidades bancarias.</p>
                                </div>
                                <Link href="/verifactu" className="btn-secondary whitespace-nowrap">
                                    Guía completa Verifactu
                                </Link>
                            </div>
                        </section>

                        {/* 3. Funcionamiento Técnico */}
                        <section id="tecnico" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <Cpu size={14} /> Funcionamiento Técnico
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-8">Flujo completo de una factura Verifactu</h2>

                            <div className="bg-navy rounded-[40px] p-8 md:p-12 text-white overflow-hidden relative mb-12">
                                <div className="relative z-10 space-y-8">
                                    {[
                                        { step: 1, title: "EMISIÓN", desc: "Cliente + productos + IVA → Se concatena el Hash de la factura anterior con los datos actuales." },
                                        { step: 2, title: "QR GENERADO", desc: "Se crea un QR único con la URL de la AEAT, la clave de factura y la firma criptográfica." },
                                        { step: 3, title: "PDF FINAL", desc: "✅ La factura sale con el Hash y el QR incrustados de forma visible y verificable." },
                                        { step: 4, title: "REGISTRO LOCAL", desc: "Se genera un fichero XML inalterable que debe custodiarse durante 4 años." },
                                        { step: 5, title: "ENVÍO AEAT", desc: "Si activas 'Verifactu SÍ', la factura se envía a Hacienda en milisegundos." }
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="flex flex-col items-center">
                                                <div className="w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center font-bold text-xs group-hover:bg-primary transition-colors">
                                                    {s.step}
                                                </div>
                                                {i < 4 && <div className="grow w-px bg-white/10 my-1" />}
                                            </div>
                                            <div className="pb-4">
                                                <h4 className="font-bold text-primary text-sm uppercase mb-1 tracking-widest">{s.title}</h4>
                                                <p className="text-white/70 text-[15px]">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 rounded-[32px] border border-slate-100 bg-white">
                                    <h4 className="font-bold text-navy mb-6 flex items-center gap-2">
                                        <Code size={18} className="text-primary" /> Hash SHA-256
                                    </h4>
                                    <p className="text-sm text-text-body mb-4 leading-relaxed">Enlaza cada factura con la anterior. Si intentas borrar la factura 4, el hash de la factura 5 dará error al no coincidir la cadena.</p>
                                    <div className="bg-slate-50 p-3 rounded-lg text-[10px] font-mono text-slate-400 truncate">
                                        SHA256(factura_003) + Data(004) → 8f2b3...
                                    </div>
                                </div>
                                <div className="p-8 rounded-[32px] border border-slate-100 bg-white">
                                    <h4 className="font-bold text-navy mb-6 flex items-center gap-2">
                                        <Smartphone size={18} className="text-primary" /> QR Dinámico
                                    </h4>
                                    <p className="text-sm text-text-body mb-4 leading-relaxed">Cada PDF impreso incluye un código para que el receptor verifique la autenticidad en el portal de la AEAT.</p>
                                    <div className="bg-slate-50 p-3 rounded-lg text-xs font-mono text-primary truncate hover:underline cursor-pointer">
                                        https://verificadores.aeat.es/v...
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                                <h4 className="font-bold text-navy mb-6">Verifactu SÍ vs Verifactu NO</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <p className="font-bold text-primary text-sm uppercase mb-2">Verifactu SÍ</p>
                                        <p className="text-sm text-text-body">Envío automático e inmediato a AEAT. Es la opción recomendada para volúmenes superiores a 50 facturas/mes.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-400 text-sm uppercase mb-2">Verifactu NO</p>
                                        <p className="text-sm text-text-body">Solo se mantiene el registro local seguro y homologado. Menor carga de red pero sujeto a auditorías tradicionales.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. Verifactu vs Factura Electrónica Clásica */}
                        <section id="comparativa" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <ArrowRightLeft size={14} /> Diferencias Clave
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-10">Verifactu vs Factura Electrónica Clásica</h2>
                            <p className="text-lg text-text-body mb-10 leading-relaxed">
                                A menudo se confunden, pero son conceptos distintos. La factura electrónica tradicional enviada por FACe no garantiza necesariamente la inalterabilidad de tu registro interno.
                            </p>

                            <div className="overflow-x-auto rounded-[32px] border border-slate-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 text-navy font-bold text-sm">
                                            <th className="p-6">Aspecto</th>
                                            <th className="p-6">Factura Electrónica</th>
                                            <th className="p-6 text-primary">Verifactu (2027+)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-text-body">
                                        <tr className="border-t border-slate-50">
                                            <td className="p-6 font-bold text-navy">Formato</td>
                                            <td className="p-6">PDF o XML FACe</td>
                                            <td className="p-6">PDF + Hash + QR</td>
                                        </tr>
                                        <tr className="border-t border-slate-50">
                                            <td className="p-6 font-bold text-navy">Inalterabilidad</td>
                                            <td className="p-6">No siempre garantizada</td>
                                            <td className="p-6 text-success font-bold">✅ Criptográfica</td>
                                        </tr>
                                        <tr className="border-t border-slate-50">
                                            <td className="p-6 font-bold text-navy">Encadenamiento</td>
                                            <td className="p-6">Independientes</td>
                                            <td className="p-6">✅ Hash secuencial</td>
                                        </tr>
                                        <tr className="border-t border-slate-50">
                                            <td className="p-6 font-bold text-navy">Válido en Excel</td>
                                            <td className="p-6 text-success">✅ Válido hoy</td>
                                            <td className="p-6 text-red-500 font-bold">❌ Invalidez Total</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-8 text-sm text-text-body italic">
                                Resumen: Verifactu es una evolución que añade capas de criptografía y auditoría automática sobre la factura electrónica convencional.
                            </p>
                        </section>

                        {/* 5. Obligaciones Prácticas */}
                        <section id="obligaciones" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <CheckSquare size={14} /> Checklist Práctica
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-8">Qué debes hacer desde hoy</h2>
                            <p className="text-lg text-text-body mb-10 leading-relaxed">
                                No esperes al último día. La adaptación técnica requiere revisar tu gestión actual y migrar datos.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                                <div className="space-y-6">
                                    {[
                                        "Auditar software actual: ¿Genera hash/QR?",
                                        "Elegir proveedor Verifactu-ready.",
                                        "Migrar facturas antiguas (reconstruir cadena hash)."
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                                            <p className="text-navy font-bold leading-tight">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-200">
                                    <h4 className="font-bold text-navy mb-6">Checklist de Cumplimiento</h4>
                                    <ul className="space-y-4">
                                        {[
                                            "Software genera hash SHA-256 encadenado",
                                            "QR verificable en cada PDF",
                                            "Fichero XML auditoría (4 años)",
                                            "Roles RBAC (asesor vs cliente)",
                                            "Backup encriptado diario"
                                        ].map((check, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-text-body">
                                                <CheckSquare size={18} className="text-success" /> {check}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full btn-secondary mt-8 flex items-center justify-center gap-2">
                                        <Download size={16} /> Descargar Checklist PDF
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section id="software" className="scroll-mt-24">
                            <div className="bg-navy rounded-[40px] p-12 text-center text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Cumple Verifactu sin complicaciones</h2>
                                    <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
                                        VerifacTool es el software de facturación Verifactu-ready diseñado para que autónomos y pymes se olviden de la burocracia técnica.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
                                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                                            <Zap size={20} className="text-primary" />
                                            <span className="text-sm font-bold text-white/90">Hash + QR Automático</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                                            <Scale size={20} className="text-primary" />
                                            <span className="text-sm font-bold text-white/90">Envío AEAT Inteligente</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                                            <FileText size={20} className="text-primary" />
                                            <span className="text-sm font-bold text-white/90">Editor PDF Visual</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                                            <CheckSquare size={20} className="text-primary" />
                                            <span className="text-sm font-bold text-white/90">Migración gratis Excel</span>
                                        </div>
                                    </div>

                                    <Link href="/software-verifactu" className="btn-primary bg-primary border-none py-5 px-12 text-lg inline-flex items-center gap-3 hover:scale-105 transition-transform">
                                        🚀 Prueba VerifacTool gratis <ArrowRight size={20} />
                                    </Link>
                                </div>
                                {/* Decorative background blobs */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                            </div>
                        </section>

                    </div>
                </div>
            </section>

            {/* Internal Links Silo */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h4 className="text-xl font-bold text-navy mb-10 text-center uppercase tracking-widest">Contenido relacionado</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Guía completa Verifactu 2026", href: "/verifactu" },
                                { title: "Cuándo entra en vigor para autónomos", href: "/verifactu/cuando-entra-en-vigor" },
                                { title: "Sanciones por no usar software homologado", href: "/verifactu/sanciones" },
                                { title: "Requisitos técnicos AEAT", href: "/verifactu/requisitos-tecnicos" }
                            ].map((item, i) => (
                                <Link key={i} href={item.href} className="p-6 bg-white rounded-[32px] border border-slate-200 hover:border-primary transition-all flex justify-between items-center group shadow-sm">
                                    <span className="font-bold text-navy">{item.title}</span>
                                    <ArrowRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
