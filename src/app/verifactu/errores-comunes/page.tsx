import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    AlertTriangle,
    CheckCircle2,
    ArrowRight,
    FileWarning,
    Code2,
    ShieldAlert,
    FileCode2,
    XCircle,
    RefreshCw,
    Info,
    ShieldCheck,
    Zap,
    Scale,
    Search,
    Download
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Errores comunes Verifactu AEAT: códigos y soluciones técnicas",
    description: "Errores Verifactu más frecuentes: códigos AEAT 1109, 4105, XML inválido, NIF incorrecto. Soluciones paso a paso + cómo evitarlos con software automatizado.",
    openGraph: {
        title: "Errores comunes Verifactu: códigos AEAT y soluciones",
        description: "Top 10 errores envío Verifactu AEAT: XML malformado, certificados caducados, NIF inválido. Guía técnica completa 2027.",
        url: "https://verifactool.com/verifactu/errores-comunes",
        type: "article",
        images: ["/og-errores-verifactu.jpg"],
    },
    alternates: {
        canonical: "https://verifactool.com/verifactu/errores-comunes",
    },
};

export default function ErroresComunesVerifactu() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Errores comunes al enviar facturas a Verifactu y cómo resolverlos",
        "description": "Códigos AEAT Verifactu 1109, 4105, XML inválido: top 10 errores + soluciones técnicas paso a paso.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-02-18",
        "url": "https://verifactool.com/verifactu/errores-comunes"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" },
            { "@type": "ListItem", "position": 3, "name": "Errores comunes", "item": "https://verifactool.com/verifactu/errores-comunes" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué significa error 1109 Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "NIF emisor/receptor inválido o no censado AEAT. Solución: validar DNI/NIF antes de crear el cliente en el sistema." }
            },
            {
                "@type": "Question",
                "name": "¿Cómo arreglo error 4105 certificado?",
                "acceptedAnswer": { "@type": "Answer", "text": "Debes usar un certificado CIF de empresa, no un DNI personal. Asegúrate de renovar Cl@ve PIN si ha caducado." }
            },
            {
                "@type": "Question",
                "name": "¿Por qué mi XML Verifactu es rechazado?",
                "acceptedAnswer": { "@type": "Answer", "text": "Suele deberse a caracteres especiales no permitidos, decimales de más o campos obligatorios vacíos. Un software verificado valida el esquema antes de enviarlo." }
            },
            {
                "@type": "Question",
                "name": "¿Qué hacer con hash encadenado roto?",
                "acceptedAnswer": { "@type": "Answer", "text": "Es necesario reconstruir la cadena desde la primera factura del ejercicio. Las soluciones profesionales de software realizan este proceso de forma automática." }
            }
        ]
    };

    const topErrors = [
        { code: "1109", error: "NIF emisor/receptor no válido", cause: "DNI/NIF mal digitado o no censado AEAT", solution: "Validar NIF en censo AEAT antes de crear el cliente" },
        { code: "4105", error: "Certificado caducado/no autorizado", cause: "Certificado personal vs empresa", solution: "Renovar certificado Cl@ve / usar empresarial" },
        { code: "1122", error: "País-IDType incoherente", cause: "España + NIE extranjero", solution: "Configurar: España = NIF/DNI/CIF" },
        { code: "1154", error: "Factura rectificativa mal referenciada", cause: "Falta factura origen o tipo rectificación", solution: "Especificar: 'Por diferencias' + número original" },
        { code: "1160", error: "IVA/recargo incompatibles", cause: "REGE + 21% general", solution: "Sincronizar tipos IVA con régimen fiscal cliente" },
        { code: "4102", error: "XML no cumple esquema AEAT", cause: "Caracteres especiales UTF-8", solution: "Normalizar XML: sin ñ/acentos en campos clave" },
        { code: "3501", error: "Hash encadenado roto", cause: "Borrada factura intermedia", solution: "Reconstruir cadena desde primera factura" },
        { code: "4119", error: "Fecha formato incorrecto", cause: "DD/MM/AAAA vs AAAA-MM-DD", solution: "Usar ISO8601: 2026-02-18T16:45:23Z" },
        { code: "1284", error: "Numeración duplicada/huecos", cause: "Reutilizado número o gap secuencia", solution: "Numeración correlativa sin excepciones" },
        { code: "4132", error: "Apoderamiento no vigente", cause: "Asesoría sin autorización AEAT", solution: "Renovar apoderamiento en sede electrónica" }
    ];

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <Navbar />

            {/* Hero Section */}
            <header className="hero-section pt-32 pb-20 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <nav className="flex items-center gap-2 text-sm font-medium text-primary mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:underline">Inicio</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <Link href="/verifactu" className="hover:underline">Verifactu</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <span className="text-slate-500">Errores comunes</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase mb-6 border border-red-100">
                            <AlertTriangle size={14} /> Guía de Soporte Técnico
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-navy leading-tight mb-8">
                            Errores comunes Verifactu y cómo resolverlos
                        </h1>
                        <p className="text-xl text-text-body mb-8 leading-relaxed">
                            El 80% de los rechazos Verifactu se deben a 10 errores repetitivos. Esta guía técnica detalla los códigos AEAT más frecuentes con soluciones paso a paso para asegurar tus envíos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10 text-lg">
                            <Link href="/verifactu" className="font-bold text-primary flex items-center gap-2 hover:underline">
                                <ArrowRight size={20} /> Todo sobre Verifactu
                            </Link>
                            <Link href="/verifactu/requisitos-tecnicos" className="font-bold text-slate-500 flex items-center gap-2 hover:underline">
                                <Search size={20} /> Requisitos técnicos
                            </Link>
                        </div>

                        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                            </div>
                            <p className="text-sm text-slate-500">
                                <strong>Estadística:</strong> 65% errores = datos cliente; 25% certificados; 10% técnicos.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto space-y-24">

                        {/* Top 10 Errores */}
                        <section id="top-errores" className="scroll-mt-24">
                            <div className="flex flex-col items-center text-center mb-16">
                                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-6">
                                    <FileWarning size={32} />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">Top 10 Errores Verifactu</h2>
                                <p className="text-slate-500 text-lg">Los códigos de rechazo más frecuentes en la sede de la AEAT.</p>
                            </div>

                            <div className="overflow-x-auto rounded-[40px] border border-slate-100 shadow-2xl ring-1 ring-slate-100">
                                <table className="w-full text-left min-w-[800px]">
                                    <thead>
                                        <tr className="bg-slate-50 text-navy font-bold text-sm">
                                            <th className="p-6">Código AEAT</th>
                                            <th className="p-6">Error</th>
                                            <th className="p-6">Posible Causa</th>
                                            <th className="p-6">Solución Inmediata</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-text-body">
                                        {topErrors.map((item, i) => (
                                            <tr key={i} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                <td className="p-6 font-mono font-bold text-red-600 bg-red-50/30">{item.code}</td>
                                                <td className="p-6 font-bold text-navy">{item.error}</td>
                                                <td className="p-6">{item.cause}</td>
                                                <td className="p-6 bg-green-50/20 text-green-800 font-medium">✅ {item.solution}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Errores XML */}
                        <section id="xml" className="scroll-mt-24">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <Code2 size={24} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-navy">Errores XML más frecuentes</h2>
                                    </div>
                                    <p className="text-lg text-text-body mb-8 leading-relaxed">
                                        Problemas estructurales que invalidan las facturas antes siquiera de ser procesadas por la lógica fiscal.
                                    </p>

                                    <div className="space-y-10">
                                        {[
                                            { t: "Campos obligatorios vacíos", e: "<NIF>❌ VACÍO</NIF> ← Error 1109", s: "Validación automática de campos pre-envío." },
                                            { t: "Decimales mal redondeados", e: "Base: 123.45678 ❌ → 123.46 ✅", s: "Software con redondeo EU a 2 decimales." },
                                            { t: "Caracteres no UTF-8", e: "\"José García\" → \"Jos? Garc?a\" ❌", s: "Normalización de strings antes de generar XML." },
                                            { t: "Inconsistencia Base vs Cuota", e: "Base: 1000€ | IVA: 209€ ❌", s: "Cálculo preciso de cuotas por el motor fiscal." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">{i + 1}</div>
                                                <div>
                                                    <h4 className="font-bold text-navy mb-2">{item.t}</h4>
                                                    <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-slate-500 mb-2 border border-slate-100">
                                                        {item.e}
                                                    </div>
                                                    <p className="text-sm text-primary font-medium">Solución: {item.s}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-navy p-10 rounded-[60px] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 mb-4">
                                            <RefreshCw size={32} className="text-primary group-hover:rotate-180 transition-transform duration-500" />
                                        </div>
                                        <h3 className="text-3xl font-extrabold mb-4">Validación Pre-Envío VerifacTool</h3>
                                        <p className="text-white/70 mb-8 leading-relaxed">
                                            Nuestro motor de validación local comprueba más de 200 puntos críticos antes de intentar el envío a la AEAT, reduciendo la tasa de rechazo a prácticamente cero.
                                        </p>
                                        <ul className="space-y-4 text-sm">
                                            <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary" /> Normalización UTF-8 automática</li>
                                            <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary" /> Redondeo EU forzado</li>
                                            <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary" /> Verificación de Censo NIF</li>
                                        </ul>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                </div>
                            </div>
                        </section>

                        {/* Conexión y Certificados */}
                        <section id="certificados" className="scroll-mt-24">
                            <div className="flex flex-col md:flex-row gap-16">
                                <div className="flex-1 p-12 bg-slate-50 rounded-[48px] border border-slate-100">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <ShieldAlert size={24} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-navy">Problemas de Certificado (41xx)</h2>
                                    </div>
                                    <div className="space-y-12">
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-red-600 text-sm uppercase tracking-widest">Error 4105 / 4112</h4>
                                            <p className="text-navy font-bold">Certificado no pertenece al NIF emisor</p>
                                            <p className="text-sm text-text-body">Ocurre cuando se usa el certificado personal (DNIe) para facturar como Sociedad (CIF).</p>
                                            <div className="p-4 bg-white rounded-2xl border border-slate-100 text-sm italic">
                                                <strong>Solución:</strong> Instalar y configurar el certificado de Representante de Persona Jurídica.
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-red-600 text-sm uppercase tracking-widest">Error 4132</h4>
                                            <p className="text-navy font-bold">Apoderamiento no vigente o no autorizado</p>
                                            <p className="text-sm text-text-body">La asesoría o el software de terceros no tiene permiso de envío en tu nombre.</p>
                                            <div className="p-4 bg-white rounded-2xl border border-slate-100 text-sm italic">
                                                <strong>Solución:</strong> Renovar el apoderamiento técnico en la Sede de la AEAT (Código 10 dígitos).
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-12 py-12">
                                    <h2 className="text-3xl font-bold text-navy">Cómo evitar estos errores</h2>
                                    <div className="space-y-8">
                                        {[
                                            { i: <ShieldCheck className="text-primary" />, t: "Automatización de Certificados", d: "Detección automática de la vigencia y tipo de certificado antes de la firma." },
                                            { i: <Zap className="text-primary" />, t: "Validación NIF Real-Time", d: "Conexión directa con el censo de la AEAT para validar clientes antes de crear facturas." },
                                            { i: <RefreshCw className="text-primary" />, t: "Gestión de Timeouts", d: "Reenvío inteligente asíncrono si los servidores de la AEAT están saturados." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6">
                                                <div className="w-14 h-14 bg-white rounded-[20px] shadow-sm ring-1 ring-slate-100 flex items-center justify-center shrink-0">
                                                    {item.i}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-navy mb-1">{item.t}</h4>
                                                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-8">
                                        <Link href="/software-facturacion/verifactu" className="btn-primary py-4 px-8 inline-flex items-center gap-3 hover:scale-105 transition-transform group">
                                            🚀 Probar VerifacTool sin errores <ArrowRight size={20} className="group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Checklist Final */}
                        <section id="checklist" className="scroll-mt-24">
                            <div className="bg-primary rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row gap-12 items-center">
                                        <div className="flex-1 text-center md:text-left">
                                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Checklist Anti-Errores</h2>
                                            <p className="text-xl text-white/80 mb-10 leading-relaxed">
                                                Guía rápida para asegurar que cada envío termine en "ACEPTADA" por la AEAT.
                                            </p>
                                            <button className="bg-white text-primary font-bold py-5 px-10 rounded-2xl flex items-center gap-3 mx-auto md:mx-0 hover:bg-slate-50 transition-colors">
                                                <Download size={20} /> Descargar Checklist PDF
                                            </button>
                                        </div>
                                        <div className="flex-1 bg-white/10 rounded-[32px] p-8 border border-white/20 backdrop-blur-sm">
                                            <ul className="space-y-6">
                                                {[
                                                    { t: "Pre-Emisión", i: ["NIF cliente validado AEAT", "Certificado vigente y correcto", "Numeración correlativa sin saltos"] },
                                                    { t: "Post-Envío", i: ["Trackeo de estados (Pendiente/Aceptada)", "Backup de XML de auditoría", "Verificación aleatoria de QR"] }
                                                ].map((box, i) => (
                                                    <li key={i} className="space-y-4">
                                                        <h4 className="font-bold text-primary uppercase text-xs tracking-widest">{box.t}</h4>
                                                        {box.i.map((txt, j) => (
                                                            <div key={j} className="flex gap-3 text-sm font-medium">
                                                                <CheckCircle2 size={18} className="text-primary shrink-0" /> {txt}
                                                            </div>
                                                        ))}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                                    <div className="absolute top-0 left-0 w-64 h-64 bg-navy rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-slate-50 p-12 rounded-[48px] border border-slate-200">
                            <h2 className="text-2xl font-bold text-navy mb-12 text-center uppercase tracking-widest">Preguntas Técnicas Frecuentes</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {faqSchema.mainEntity.map((faq, i) => (
                                    <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
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
