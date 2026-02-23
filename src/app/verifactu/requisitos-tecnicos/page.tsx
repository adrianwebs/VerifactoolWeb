import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    Cpu,
    ShieldCheck,
    History,
    Search,
    FileCode,
    QrCode,
    CheckCircle2,
    ArrowRight,
    Download,
    Lock,
    Eye,
    Zap,
    Scale,
    XCircle,
    Info
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Requisitos Técnicos Verifactu AEAT: qué debe cumplir tu software",
    description: "Requisitos técnicos Verifactu RD 1007/2023: hash SHA-256, QR, registros inalterables, formatos XML. Guía completa para software homologado AEAT.",
    openGraph: {
        title: "Requisitos Técnicos Verifactu: qué debe cumplir tu software",
        description: "Hash SHA-256, QR dinámico, registros XML inalterables: todos los requisitos técnicos Verifactu para autónomos y pymes.",
        url: "https://verifactool.com/verifactu/requisitos-tecnicos",
        type: "article",
        images: ["/og-requisitos-verifactu.jpg"],
    },
};

export default function RequisitosTecnicosVerifactu() {
    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Requisitos técnicos de Verifactu: qué debe cumplir tu software",
        "description": "Hash SHA-256, QR verificable, XML inalterables: especificaciones técnicas RD 1007/2023 para software Verifactu homologado.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-02-18",
        "url": "https://verifactool.com/verifactu/requisitos-tecnicos"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" },
            { "@type": "ListItem", "position": 3, "name": "Requisitos técnicos", "item": "https://verifactool.com/verifactu/requisitos-tecnicos" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué es hash encadenado Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "Es una huella digital digital SHA-256 que une la factura N con la N-1. Si se manipula cualquier dato de la secuencia, la cadena se rompe y la alerta salta automáticamente en el sistema." }
            },
            {
                "@type": "Question",
                "name": "¿Necesita firma electrónica?",
                "acceptedAnswer": { "@type": "Answer", "text": "Es opcional si usas el sistema Verifactu básico (SÍ). En cualquier caso, el hash encadenado y los registros de eventos (logs) son suficientes para la homologación reglamentaria." }
            },
            {
                "@type": "Question",
                "name": "¿XML obligatorio en factura PDF?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. El XML de auditoría se gestiona de forma interna o separada. El PDF visual solo debe mostrar obligatoriamente el hash y el código QR." }
            },
            {
                "@type": "Question",
                "name": "¿Mi TPV cumple requisitos Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "Cumple si el fabricante ha adaptado el software para generar hash/QR por cada ticket emitido y mantiene los logs de eventos obligatorios." }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={techArticleSchema} />
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
                        <span className="text-slate-500">Requisitos técnicos</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase mb-6 border border-primary/30">
                            <Cpu size={14} /> RD 1007/2023 Technical Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-8">
                            Requisitos técnicos de Verifactu: qué debe cumplir tu software
                        </h1>
                        <p className="text-xl text-text-body mb-8 leading-relaxed">
                            Tu software de facturación debe generar hash criptográfico, QR verificable y registros inalterables. Esta guía detalla exatamente qué exige la AEAT para evitar sanciones de hasta 50.000€.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10 text-lg">
                            <Link href="/verifactu" className="font-bold text-primary flex items-center gap-2 hover:underline">
                                <ArrowRight size={20} /> Todo sobre Verifactu
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
            </header>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* 1. Especificaciones del sistema */}
                        <section id="especificaciones" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <ShieldCheck size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Los 4 pilares técnicos del RD 1007/2023</h2>
                            </div>
                            <p className="text-lg text-text-body mb-10">
                                La Agencia Tributaria exige garantías absolutas de integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad de todos los registros de facturación.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {[
                                    { p: "Integridad", d: "Firma electrónica cada factura + hash encadenado", pr: "Detecta cualquier modificación", icon: <Lock size={20} /> },
                                    { p: "Conservación", d: "4 años mínimo, backups encriptados", pr: "Auditorías históricas", icon: <History size={20} /> },
                                    { p: "Trazabilidad", d: "Log completo: quién, qué, cuándo modificó", pr: "Responsabilidad individual", icon: <Eye size={20} /> },
                                    { p: "Inalterabilidad", d: "Imposible borrar sin rastro", pr: "Evita numeraciones fantasma", icon: <ShieldCheck size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-[32px] border border-slate-100 bg-slate-50 relative overflow-hidden group">
                                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform" />
                                        <div className="flex items-center gap-3 mb-4 text-primary relative z-10">
                                            {item.icon}
                                            <span className="font-bold uppercase tracking-wider text-sm">{item.p}</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-navy mb-2 relative z-10">{item.d}</h4>
                                        <p className="text-sm text-text-body relative z-10"><strong>Propósito:</strong> {item.pr}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 p-8 rounded-[32px] border border-red-100 flex gap-6 items-start">
                                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                                    <XCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-red-900 mb-2">Software NO válido post-2027</h4>
                                    <p className="text-red-700/80">Excel, Word, Access y cualquier programa que permita borrar facturas o modificar importes sin registro informático seguro.</p>
                                </div>
                            </div>
                        </section>

                        {/* 2. Formatos de archivo */}
                        <section id="formatos" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <FileCode size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Estructura técnica de cada factura Verifactu</h2>
                            </div>
                            <p className="text-lg text-text-body mb-8">
                                El <strong>Registro de Facturación (RF)</strong> es un XML estructurado que contiene metadatos criptográficos invisibles al ojo humano pero auditables por la AEAT.
                            </p>

                            <div className="bg-navy p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden group mb-12">
                                <h4 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest">Factura Verifactu = PDF Visual + XML</h4>
                                <div className="space-y-4 font-mono text-sm mb-10">
                                    <div className="flex items-center gap-3 text-success">
                                        <CheckCircle2 size={16} /> Hash_Secuencial (SHA-256)
                                    </div>
                                    <div className="flex items-center gap-3 text-success">
                                        <CheckCircle2 size={16} /> QR_Verificable (URL_AEAT + Clave)
                                    </div>
                                    <div className="flex items-center gap-3 text-white/50">
                                        <CheckCircle2 size={16} /> Datos_Fiscales (NIF, importe, IVA, fecha)
                                    </div>
                                    <div className="flex items-center gap-3 text-white/50">
                                        <CheckCircle2 size={16} /> Firma_Electrónica (opcional)
                                    </div>
                                    <div className="flex items-center gap-3 text-white/30">
                                        <CheckCircle2 size={16} /> Registro_Eventos (log de cambios)
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                                        <QrCode size={20} className="text-primary" /> Elementos del QR (obligatorio)
                                    </h4>
                                    <div className="bg-slate-50 p-6 rounded-3xl font-mono text-xs text-slate-500 space-y-2">
                                        <p className="text-primary">https://verificadores.aeat.es/verifactu/</p>
                                        <p>└── clave_factura_unica (EMISOR_YYYYMMDD_NUM)</p>
                                        <p>└── hash_encadenado</p>
                                        <p>└── datos_minimos (NIF, importe total)</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                                        <Search size={20} className="text-primary" /> Fichero de auditoría (XML único)
                                    </h4>
                                    <ul className="space-y-3 text-sm text-text-body">
                                        <li className="flex gap-2">
                                            <CheckCircle2 size={14} className="text-success mt-1" /> Cronología completa de facturas
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 size={14} className="text-success mt-1" /> Timestamps + usuario responsable
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 size={14} className="text-success mt-1" /> Conservación 4 años mínimo
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. Funciones obligatorias */}
                        <section id="funciones" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Funciones obligatorias del software</h2>
                            </div>

                            <div className="space-y-12">
                                <div className="p-8 rounded-[40px] border border-slate-100 bg-white shadow-sm ring-1 ring-slate-100">
                                    <h4 className="text-xl font-bold text-navy mb-4">Huella digital (Hash SHA-256 encadenado)</h4>
                                    <div className="bg-navy/5 p-4 rounded-xl font-mono text-sm text-navy/60 mb-6">
                                        Hash_N = SHA256(Hash_N-1 + Datos_Factura_N + Timestamp)
                                    </div>
                                    <p className="text-text-body">
                                        Cada factura referencia criptográficamente a la anterior. Esto hace que sea técnicamente imposible insertar o borrar una factura en medio de una serie sin romper toda la cadena posterior.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-navy uppercase text-xs tracking-widest border-b border-slate-100 pb-2">Registros de eventos (logs)</h4>
                                        <div className="bg-slate-50 p-4 rounded-xl space-y-2 font-mono text-[11px] text-slate-400">
                                            <p>2026-02-18 16:45:23 | user@... | EMISIÓN | Fact_001</p>
                                            <p>2026-02-18 16:46:12 | user@... | ANULACIÓN | Fact_002</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-center p-8 bg-red-50/50 rounded-3xl border border-red-50">
                                        <h4 className="font-bold text-red-700 uppercase text-xs tracking-widest mb-4">Funciones bloqueadas</h4>
                                        <div className="space-y-4 font-bold text-navy">
                                            <div className="flex items-center gap-2 justify-center text-red-500"><XCircle size={16} /> Borrar facturas</div>
                                            <div className="flex items-center gap-2 justify-center text-red-500"><XCircle size={16} /> Reutilizar numeraciones</div>
                                            <div className="flex items-center gap-2 justify-center text-red-500"><XCircle size={16} /> Modificar sin rastro</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <Link href="/verifactu/errores-comunes" className="text-primary font-bold hover:underline">
                                    Descubrir errores técnicos comunes →
                                </Link>
                            </div>
                        </section>

                        {/* 4. Certificación y homologación */}
                        <section id="certificacion" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Zap size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Cómo saber si tu software está homologado</h2>
                            </div>
                            <div className="bg-slate-50 p-10 rounded-[48px] border border-slate-200 mb-12">
                                <p className="text-text-body mb-8 font-medium">
                                    <strong>IMPORTANTE:</strong> NO existe una lista oficial de la AEAT. Cada proveedor de software es quien debe emitir una <strong>declaración responsable</strong> que certifique el cumplimiento.
                                </p>
                                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Lock size={120} />
                                    </div>
                                    <h4 className="font-bold text-navy mb-6 text-center border-b pb-4">MODELO DECLARACIÓN RESPONSABLE</h4>
                                    <div className="space-y-3 text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
                                        <p>• Razón social / NIF del proveedor de software</p>
                                        <p>• Nombre comercial del programa + versión exacta</p>
                                        <p className="text-success font-bold">• ✅ Cumple RD 1007/2023 Artículos 4 al 11</p>
                                        <p>• Certificación de hash encadenado y QR AEAT</p>
                                        <p>• Firma digital del responsable técnico</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="font-bold text-navy">Verificación práctica (5 min)</h4>
                                    {[
                                        "Emitir 3 facturas consecutivas en tu programa.",
                                        "Escanear el QR y verificarlo en verificadores.aeat.es.",
                                        "Comprobar que la cadena hash no permite borrar nada.",
                                        "Intentar anular una factura: debe generar factura rectificativa."
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</div>
                                            <p className="text-sm text-text-body">{step}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-navy p-8 rounded-3xl text-white">
                                    <h4 className="font-bold mb-4 flex items-center gap-2">
                                        <Scale size={20} className="text-primary" /> Sanciones Software
                                    </h4>
                                    <p className="text-sm text-white/70 mb-6">Los proveedores de software asumen riesgos masivos por incumplimiento.</p>
                                    <ul className="space-y-3 text-xs">
                                        <li className="flex gap-2 text-primary font-bold">150.000€ • Por programa no conforme</li>
                                        <li className="flex gap-2">1.000€ • Por sistema sin declaración</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* CTA Final */}
                        <section id="cta" className="scroll-mt-24">
                            <div className="bg-primary rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                        VerifacTool cumple al 100% con los requisitos técnicos
                                    </h2>
                                    <p className="text-xl text-white/80 max-w-2xl mb-12 leading-relaxed">
                                        No te la juegues con software a medias. VerifacTool incluye hash, QR, logs y declaración de cumplimiento desde el primer día.
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12">
                                        {[
                                            "Hash SHA-256", "QR AEAT", "Logs XML", "Exportación Auditoría", "PWA con OCR", "Backup 4 años"
                                        ].map((tag, i) => (
                                            <div key={i} className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-xs font-bold whitespace-nowrap">
                                                ✅ {tag}
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/software-verifactu" className="btn-secondary bg-white text-navy font-bold py-5 px-12 text-lg inline-flex items-center gap-3 hover:scale-105 transition-transform group">
                                        ✅ VerifacTool: software Verifactu homologado <ArrowRight size={20} className="group-hover:translate-x-1" />
                                    </Link>
                                </div>
                                {/* Mesh Gradient */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-navy rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy rounded-full blur-[60px] translate-y-1/2 translate-x-1/2" />
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 p-12 rounded-[48px] border border-slate-200">
                            <h2 className="text-2xl font-bold text-navy mb-8 text-center uppercase tracking-widest">Preguntas Técnicas Frecuentes</h2>
                            <div className="space-y-6">
                                {faqSchema.mainEntity.map((faq, i) => (
                                    <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100">
                                        <h4 className="font-bold text-navy mb-2">{faq.name}</h4>
                                        <p className="text-sm text-text-body">{faq.acceptedAnswer.text}</p>
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
