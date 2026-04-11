import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    AlertTriangle,
    ShieldAlert,
    ChevronRight,
    Scale,
    FileWarning,
    Gavel,
    CheckCircle2,
    ArrowRight,
    Download,
    Cpu,
    Building2,
    UserCircle2,
    Zap,
    FileText,
    CheckSquare
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sanciones Verifactu 2026: Multas de hasta 150.000€ por Incumplimiento",
    description: "Guía completa de sanciones Verifactu: multas de 50.000€ por software no homologado, 150.000€ para fabricantes. Conoce los riesgos y cómo evitarlos con un checklist práctico.",
    openGraph: {
        title: "Sanciones Verifactu 2026: Multas de hasta 150.000€ por Incumplimiento",
        description: "Guía completa sobre las multas de la AEAT por Verifactu. Evita sanciones de hasta 150.000€.",
        url: "https://verifactool.com/verifactu/sanciones",
        type: "article",
    },
    alternates: {
        canonical: "https://verifactool.com/verifactu/sanciones",
    },
};

export default function SancionesVerifactu() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Sanciones por no cumplir con Verifactu: multas y riesgos",
        "description": "Guía sobre las sanciones por no cumplir con Verifactu: importes, riesgos por perfil y checklist para evitarlas.",
        "author": {
            "@type": "Organization",
            "name": "VerifacTool"
        },
        "datePublished": "2026-02-18",
        "url": "https://verifactool.com/verifactu/sanciones"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://verifactool.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Verifactu",
                "item": "https://verifactool.com/verifactu"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Sanciones"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cuáles son las sanciones por usar software de facturación no homologado?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La tenencia o uso de software no adaptado a Verifactu puede sancionarse con hasta 50.000 euros por ejercicio fiscal para empresas y autónomos, según el artículo 201 bis de la LGT."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué riesgo tengo si sigo facturando con Excel o Word?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A partir de la entrada en vigor de Verifactu, las facturas emitidas con Excel o Word pueden considerarse no válidas a efectos fiscales y dar lugar a sanciones, además de la pérdida de deducibilidad de gastos."
                }
            },
            {
                "@type": "Question",
                "name": "¿También se sanciona a los fabricantes de software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, los fabricantes o comercializadores de software no conforme pueden enfrentarse a multas de hasta 150.000 euros por ejercicio y por cada programa distinto, además de 1.000 euros por sistema sin declaración responsable."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cómo puedo evitar sanciones por Verifactu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Debes usar un software de facturación compatible con Verifactu, conservar la declaración responsable del proveedor, asegurarte de que se generan hash y QR en cada factura y no mantener instalado software antiguo no adaptado."
                }
            },
            {
                "@type": "Question",
                "name": "¿A partir de cuándo se aplicarán las sanciones?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las sanciones específicas por software no adaptado se aplicarán cuando Verifactu sea obligatorio para cada colectivo, de acuerdo con los plazos fijados en el Reglamento y la Ley Antifraude."
                }
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
            <header className="hero-section pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <nav className="flex items-center gap-2 text-sm font-medium text-primary mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:underline">Inicio</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <Link href="/verifactu" className="hover:underline">Verifactu</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <span className="text-slate-500">Sanciones</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase mb-6">
                            <AlertTriangle size={14} /> Zona de Riesgo Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-8">
                            Sanciones por no cumplir con Verifactu: multas y riesgos
                        </h1>
                        <p className="text-xl text-text-body mb-8 leading-relaxed">
                            Verifactu no es solo un cambio técnico: no adaptar tu software puede costarte hasta <strong>50.000 € por ejercicio</strong> solo por tener un programa no homologado, aunque no lo uses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10 text-lg">
                            <Link href="/verifactu" className="font-bold text-primary flex items-center gap-2 hover:underline">
                                <ArrowRight size={20} /> Guía completa Verifactu
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* 1. Qué dice la ley */}
                        <section id="ley" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Gavel size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Qué dice la ley sobre sanciones Verifactu</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-text-body text-lg leading-relaxed">
                                <p className="mb-6">Las sanciones por no cumplir con Verifactu se apoyan en tres pilares normativos principales:</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-3">
                                        <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                                        <span><strong>Ley 11/2021 de Medidas de Prevención:</strong> Conocida como Ley Antifraude, establece las bases para combatir la manipulación de facturas.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                                        <span><strong>Real Decreto 1007/2023:</strong> Regula de forma específica los Sistemas Informáticos de Facturación (SIF).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                                        <span><strong>Artículo 201 bis de la LGT:</strong> Tipifica como infracción grave la tenencia y uso de software de doble uso o no adaptado.</span>
                                    </li>
                                </ul>
                                <div className="bg-slate-50 p-8 rounded-[32px] border-l-4 border-l-primary">
                                    <p className="italic text-navy font-medium">
                                        "La ley sanciona tanto a usuarios (autónomos, pymes) como a fabricantes de programas de facturación que permitan manipular datos o no cumplan los requisitos técnicos."
                                    </p>
                                </div>
                                <div className="mt-8 flex gap-4">
                                    <Link href="/verifactu/que-es" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                                        <ArrowRight size={14} /> Leer más: ¿Qué es Verifactu?
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* 2. Multas concretas */}
                        <section id="multas" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Scale size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Multas concretas: importes y casos típicos</h2>
                            </div>
                            <p className="text-lg text-text-body mb-10">
                                La normativa recoge diferentes tipos de infracción con cuantías que pueden acumularse por ejercicio y por tipo de software.
                            </p>

                            <div className="overflow-x-auto rounded-[32px] border border-slate-200 shadow-sm mb-8">
                                <table className="w-full text-left min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-50 text-navy font-bold text-sm">
                                            <th className="p-6">Incumplimiento típico</th>
                                            <th className="p-6">Sanción orientativa</th>
                                            <th className="p-6">Responsable</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-text-body">
                                        <tr className="border-t border-slate-100">
                                            <td className="p-6 font-medium text-navy">Uso o tenencia de software no homologado</td>
                                            <td className="p-6 text-red-600 font-bold">Hasta 50.000 € / ejercicio</td>
                                            <td className="p-6">Empresa / autónomo</td>
                                        </tr>
                                        <tr className="border-t border-slate-100 bg-slate-50/30">
                                            <td className="p-6 font-medium text-navy">Fabricar/comercializar software no conforme</td>
                                            <td className="p-6 text-red-600 font-bold">Hasta 150.000 € / ejercicio</td>
                                            <td className="p-6">Fabricante / proveedor</td>
                                        </tr>
                                        <tr className="border-t border-slate-100">
                                            <td className="p-6 font-medium text-navy">Sin declaración responsable</td>
                                            <td className="p-6 text-red-600 font-bold">1.000 € / sistema</td>
                                            <td className="p-6">Fabricante / distribuidor</td>
                                        </tr>
                                        <tr className="border-t border-slate-100 bg-slate-50/30">
                                            <td className="p-6 font-medium text-navy">No adaptación del SIF</td>
                                            <td className="p-6 text-red-600 font-bold">150.000 € / ejercicio</td>
                                            <td className="p-6">Fabricante</td>
                                        </tr>
                                        <tr className="border-t border-slate-100">
                                            <td className="p-6 font-medium text-navy">No emitir facturas en formato exigido</td>
                                            <td className="p-6 text-red-600 font-bold">1-2% importe (mín. 300 €)</td>
                                            <td className="p-6">Empresa / autónomo</td>
                                        </tr>
                                        <tr className="border-t border-slate-100 bg-slate-50/30">
                                            <td className="p-6 font-medium text-navy">Facturas falsas o doble uso</td>
                                            <td className="p-6 text-red-600 font-bold">Hasta el 75% del importe</td>
                                            <td className="p-6">Empresa / autónomo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-slate-500 italic">
                                * Las cifras señaladas son máximos legales; la cuantía concreta dependerá de la gravedad, reincidencia y criterio inspector.
                            </p>
                        </section>

                        {/* 3. Riesgos por perfil */}
                        <section id="riesgos" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <ShieldAlert size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Riesgos reales según tu perfil</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Autonomos */}
                                <div className="p-8 rounded-[40px] border border-slate-100 shadow-xl bg-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <UserCircle2 size={80} />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy mb-6">Autónomos</h4>
                                    <ul className="space-y-4 text-sm text-text-body">
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Multas de 50.000€ incluso con poca facturación.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Invalidación de Excel/Word y pérdida de deducciones.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Mayor probabilidad de auditoría de trazabilidad.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Pymes */}
                                <div className="p-8 rounded-[40px] border border-slate-100 shadow-xl bg-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <Building2 size={80} />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy mb-6">PYMES y empresas</h4>
                                    <ul className="space-y-4 text-sm text-text-body">
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Sanciones por ejercicio fiscal acumulativas.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Riesgo de acusación de "doble uso" si hay ediciones.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Pérdida de acceso a ayudas y licitaciones públicas.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Fabricantes */}
                                <div className="p-8 rounded-[40px] border border-slate-100 shadow-xl bg-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <Cpu size={80} />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy mb-6">Fabricantes de Software</h4>
                                    <ul className="space-y-4 text-sm text-text-body">
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Multas de 150.000€ por cada programa no adaptado.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Sanción por comercializar sin declaración responsable.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <FileWarning size={18} className="text-red-500 shrink-0" />
                                            <span>Responsabilidad solidaria en ocultación de ventas.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <Link href="/verifactu/errores-comunes" className="text-primary font-bold hover:underline">
                                    Ver errores comunes que provocan sanciones →
                                </Link>
                            </div>
                        </section>

                        {/* 4. Checklist de adaptacion */}
                        <section id="checklist" className="scroll-mt-24">
                            <div className="bg-slate-50 p-12 rounded-[48px] border border-slate-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <CheckSquare size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-navy">Cómo evitar sanciones: checklist práctico</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="font-bold text-navy mb-4 border-b border-primary/20 pb-2">Software y Proveedor</h4>
                                            <ul className="space-y-3">
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    Software declara cumplimiento RD 1007/2023.
                                                </li>
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    Tengo archivada la declaración responsable.
                                                </li>
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    He desinstalado software antiguo no adaptado.
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy mb-4 border-b border-primary/20 pb-2">Funcionalidad Técnica</h4>
                                            <ul className="space-y-3">
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-primary/30 mt-0.5 shrink-0" />
                                                    <Link href="/verifactu/requisitos-tecnicos" className="text-primary font-medium hover:underline">
                                                        Genera hash SHA-256 encadenado.
                                                    </Link>
                                                </li>
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    PDF incluye QR verificable AEAT.
                                                </li>
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    No permite borrar facturas sin dejar rastro.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="font-bold text-navy mb-4 border-b border-primary/20 pb-2">Procesos Internos</h4>
                                            <ul className="space-y-3">
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    Personal capacitado en el nuevo flujo.
                                                </li>
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    Procedimiento de rectificación documentado.
                                                </li>
                                                <li className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-slate-300 mt-0.5" />
                                                    Backups encriptados de facturación.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-primary p-6 rounded-3xl text-white">
                                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                                <Download size={18} /> Lead Magnet
                                            </h4>
                                            <p className="text-sm text-white/80 mb-6">Descarga la checklist completa en PDF para tu asesoría o empresa.</p>
                                            <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl hover:bg-slate-100 transition-colors">
                                                Descargar Checklist PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <Link href="/verifactu/software-compatible" className="text-primary font-bold hover:underline">
                                    Ver software compatible Verifactu →
                                </Link>
                            </div>
                        </section>

                        {/* CTA Final */}
                        <section id="cta" className="scroll-mt-24">
                            <div className="bg-navy rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/30">
                                        <Zap size={40} className="text-primary fill-current" />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                        Evita multas usando software compatible Verifactu
                                    </h2>
                                    <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
                                        La forma más directa de evitar sanciones es dejar de depender de Excel/Word o programas obsoletos y migrar a un software de facturación compatible Verifactu.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-primary" />
                                            <span className="text-sm font-medium">Requisitos técnicos del RD 1007/2023</span>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-primary" />
                                            <span className="text-sm font-medium">Elimina riesgo de software no homologado</span>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-primary" />
                                            <span className="text-sm font-medium">Centraliza gastos y modelos fiscales</span>
                                        </div>
                                    </div>

                                    <Link href="/software-facturacion/verifactu" className="btn-primary py-5 px-12 text-lg inline-flex items-center gap-3 hover:scale-105 transition-transform group">
                                        🚀 Probar software Verifactu compatible <ArrowRight size={20} className="group-hover:translate-x-1" />
                                    </Link>
                                </div>
                                {/* Mesh Gradient Background */}
                                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
