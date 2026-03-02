import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    CheckCircle2,
    XCircle,
    Download,
    ArrowRight,
    Smartphone,
    ShieldCheck,
    Zap,
    BarChart3,
    Search,
    AlertTriangle,
    Info,
    SmartphoneIcon,
    CameraIcon,
    RefreshCw,
    QrCode
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Software compatible Verifactu: cómo elegir el correcto 2027",
    description: "Guía para elegir software compatible Verifactu: checklist requisitos, comparativa programas homologados y cómo evitar sanciones AEAT 2027.",
    openGraph: {
        title: "Software compatible Verifactu: cómo elegir el correcto",
        description: "Checklist para elegir programa facturación Verifactu homologado: hash, QR, declaración responsable + comparativa 2027.",
        url: "https://verifactool.com/verifactu/software-compatible",
        type: "article",
        images: ["/og-software-verifactu-comparativa.jpg"],
    },
    alternates: {
        canonical: "https://verifactool.com/verifactu/software-compatible",
    },
};

export default function SoftwareCompatibleVerifactu() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Software compatible con Verifactu: cómo elegir el correcto",
        "description": "Guía 2027: checklist software Verifactu homologado, comparativa programas + cómo evitar sanciones AEAT.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-02-18",
        "url": "https://verifactool.com/verifactu/software-compatible"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" },
            { "@type": "ListItem", "position": 3, "name": "Software compatible", "item": "https://verifactool.com/verifactu/software-compatible" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Existe lista oficial software Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. Cada proveedor emite declaración responsable RD 1007/2023. Verifica documentación." }
            },
            {
                "@type": "Question",
                "name": "¿Qué software usar para Verifactu autónomo?",
                "acceptedAnswer": { "@type": "Answer", "text": "VerifacTool (0€ inicio, PWA móvil) o Quipu (OCR integrado). Prioriza migración gratuita." }
            },
            {
                "@type": "Question",
                "name": "¿Mi TPV es compatible Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sí si genera hash/QR por ticket + logs. Prueba 3 tickets consecutivos." }
            },
            {
                "@type": "Question",
                "name": "¿Puedo seguir con Excel hasta 2027?",
                "acceptedAnswer": { "@type": "Answer", "text": "Técnicamente sí, pero arriesgas sanciones + invalidez fiscal. Migra ya." }
            },
            {
                "@type": "Question",
                "name": "¿Verifactu SÍ o NO para autónomo?",
                "acceptedAnswer": { "@type": "Answer", "text": "NO si <50 facturas/mes (solo local). SÍ si volumen alto (envío auto AEAT)." }
            }
        ]
    };

    const comparativeData = [
        { name: "VerifacTool", hasQR: "✅ Completo", decResp: "✅ Incluida", price: "0€ prueba", pwa: "✅ Completa", ocr: "✅ Cámara", migration: "✅ Excel/CSV", ideal: "Autónomos/PYMES", primary: true },
        { name: "Holded", hasQR: "✅ Básico", decResp: "✅", price: "19€/mes", pwa: "✅", ocr: "❌", migration: "❌", ideal: "Startups", primary: false },
        { name: "Sage 50", hasQR: "✅", decResp: "✅", price: "28€/mes", pwa: "❌", ocr: "✅ Extra", migration: "❌", ideal: "PYMES grandes", primary: false },
        { name: "FacturaDirecta", hasQR: "⚠️ En proceso", decResp: "Pendiente", price: "9€/mes", pwa: "✅", ocr: "❌", migration: "❌", ideal: "Autónomos básicos", primary: false },
        { name: "Odoo (custom)", hasQR: "✅", decResp: "Proveedor", price: "A medida", pwa: "✅", ocr: "✅", migration: "❌", ideal: "Empresas complejas", primary: false },
        { name: "Quipu", hasQR: "✅", decResp: "✅", price: "14€/mes", pwa: "✅", ocr: "✅", migration: "Parcial", ideal: "Freelance", primary: false },
    ];

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
                        <span className="text-slate-500">Software compatible</span>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-8">
                            Software compatible con Verifactu: cómo elegir el correcto
                        </h1>
                        <p className="text-xl text-text-body mb-8 leading-relaxed">
                            No todos los programas de facturación cumplen Verifactu. Desde 2027 necesitas software homologado que genere hash SHA-256, QR verificable y registros inalterables según RD 1007/2023.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start text-lg">
                            <Link href="/verifactu" className="font-bold text-primary flex items-center gap-2 hover:underline group">
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /> Guía principal: Todo sobre Verifactu
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* 1. Qué significa */}
                        <section id="significado" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <ShieldCheck size={14} /> Definición de Compatibilidad
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-8">No basta con "decirlo": debe cumplir técnicamente</h2>
                            <div className="prose prose-slate max-w-none text-text-body text-lg leading-relaxed">
                                <p className="mb-6">
                                    Un <strong>Software compatible Verifactu</strong> es aquel que genera automáticamente los registros exigidos por la AEAT sin intervención manual. Esto incluye:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-3">
                                        <CheckCircle2 size={20} className="text-success shrink-0 mt-1" />
                                        <span><strong>Hash SHA-256 encadenado:</strong> Cada factura referencia criptográficamente a la anterior.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 size={20} className="text-success shrink-0 mt-1" />
                                        <span><strong>QR dinámico verificable:</strong> URL de la AEAT con la clave de factura incrustada.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 size={20} className="text-success shrink-0 mt-1" />
                                        <span><strong>Registro XML inalterable:</strong> Ficheros de auditoría custodiados por 4 años mínimos.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 size={20} className="text-success shrink-0 mt-1" />
                                        <span><strong>Logs completos:</strong> Registro de quién, cuándo y qué acción realizó en el sistema.</span>
                                    </li>
                                </ul>
                                <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/10 mb-8">
                                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                        <Info size={18} /> Sin lista oficial AEAT
                                    </h4>
                                    <p className="text-text-body">
                                        Al igual que con el SII, la AEAT no publica una lista de "software autorizado". Es cada fabricante quien debe emitir una <strong>declaración responsable</strong> de cumplimiento con el RD 1007/2023.
                                    </p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 italic">
                                    <strong>Prueba real (3 min):</strong> Emite 3 facturas → verifica el QR en <code>verificadores.aeat.es</code> → intenta borrar una → el sistema debe bloquear la acción.
                                </div>
                            </div>
                        </section>

                        {/* 2. Checklist */}
                        <section id="checklist" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <CheckCircle2 size={14} /> Checklist de Elección
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-10">Checklist para elegir software Verifactu</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <h4 className="text-lg font-bold text-navy mb-6 uppercase tracking-widest text-primary">Obligatorio (Técnico)</h4>
                                    <ul className="space-y-4">
                                        {[
                                            "Hash SHA-256 encadenado",
                                            "QR verificable con URL AEAT",
                                            "Registro XML inalterable (4 años)",
                                            "Logs completos de auditoría",
                                            "Imposibilidad de borrado de facturas",
                                            "Numeración secuencial sin huecos",
                                            "Declaración responsable por escrito"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-text-body">
                                                <div className="w-5 h-5 rounded border border-success/30 flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle2 size={12} className="text-success" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm mb-6">
                                        <h4 className="text-lg font-bold text-navy mb-6 uppercase tracking-widest text-primary">Práctico y Bonus</h4>
                                        <ul className="space-y-4">
                                            {[
                                                { text: "Editor PDF visual (logo/colores)", bonus: false },
                                                { text: "PWA móvil (facturar en cliente)", bonus: false },
                                                { text: "Migración gratuita Excel/CSV", bonus: false },
                                                { text: "Envío automático AEAT (Verifactu SÍ)", bonus: true },
                                                { text: "Integración bancos / OCR gastos", bonus: true }
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-text-body">
                                                    <div className="w-5 h-5 rounded border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                                        <Search size={12} className="text-primary" />
                                                    </div>
                                                    <span>{item.text} {item.bonus && <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold ml-1 italic">BONUS</span>}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-navy p-8 rounded-[32px] text-white overflow-hidden relative">
                                        <div className="relative z-10">
                                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                                <Download size={18} /> Lead Magnet
                                            </h4>
                                            <p className="text-sm text-white/70 mb-6">Descarga el Checklist completo en PDF para comparar proveedores.</p>
                                            <button className="w-full btn-primary bg-primary border-none py-4 text-sm font-bold">
                                                Descarga Checklist PDF
                                            </button>
                                        </div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Comparativa */}
                        <section id="comparativa" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                <BarChart3 size={14} /> Comparativa 2027
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-10">VerifacTool vs principales alternativas</h2>

                            <div className="overflow-x-auto rounded-[32px] border border-slate-100 shadow-xl mb-8 ring-1 ring-slate-100">
                                <table className="w-full text-left min-w-[900px]">
                                    <thead>
                                        <tr className="bg-slate-50 text-navy font-bold text-xs uppercase tracking-widest">
                                            <th className="p-6">Software</th>
                                            <th className="p-6">✅ Hash/QR</th>
                                            <th className="p-6">Declaración</th>
                                            <th className="p-6">Precio</th>
                                            <th className="p-6">PWA Móvil</th>
                                            <th className="p-6">OCR Gastos</th>
                                            <th className="p-6">Migración</th>
                                            <th className="p-6">Ideal para</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-text-body">
                                        {comparativeData.map((row, i) => (
                                            <tr key={i} className={cn(
                                                "border-t border-slate-50 transition-colors hover:bg-slate-50/50",
                                                row.primary ? "bg-primary/5 font-medium" : ""
                                            )}>
                                                <td className="p-6 font-bold text-navy">
                                                    {row.name} {row.primary && <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full ml-1">TOP</span>}
                                                </td>
                                                <td className="p-6">{row.hasQR}</td>
                                                <td className="p-6">{row.decResp}</td>
                                                <td className="p-6">{row.price}</td>
                                                <td className="p-6">{row.pwa}</td>
                                                <td className="p-6">{row.ocr}</td>
                                                <td className="p-6">{row.migration}</td>
                                                <td className="p-6 italic">{row.ideal}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-400 text-center">
                                Metodología: Datos verificados feb 2026. Proveedores con declaración responsable pública.
                            </p>
                        </section>

                        {/* 4. Errores comunes */}
                        <section id="errores" className="scroll-mt-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase mb-6">
                                <AlertTriangle size={14} /> Evita estos fallos
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-10">Errores comunes al elegir software antes de 2027</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                        <XCircle size={24} className="text-red-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy mb-4">"Mi proveedor dice que sí"</h4>
                                    <p className="text-sm text-text-body">No te fíes solo de la palabra comercial. <strong>Pide la declaración responsable escrita</strong> firmada por el representante legal del software.</p>
                                </div>
                                <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                        <AlertTriangle size={24} className="text-primary" />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy mb-4">Software barato sin soporte</h4>
                                    <p className="text-sm text-text-body">Las multas AEAT de 2028 serán mucho mayores que el ahorro inicial de unos pocos euros al mes. Busca respaldo técnico real.</p>
                                </div>
                                <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                        <RefreshCw size={24} className="text-primary" />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy mb-4">Olvidar la migración de datos</h4>
                                    <p className="text-sm text-text-body">Perder el histórico de facturas dificulta la concatenación de hashes obligatoria. Elige un software que migre tus Excel o exportaciones gratis.</p>
                                </div>
                                <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                        <SmartphoneIcon size={24} className="text-primary" />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy mb-4">Sin PWA móvil instalable</h4>
                                    <p className="text-sm text-text-body">Muchos autónomos emiten facturas desde el cliente. Si el software solo funciona en navegador de PC, perderás agilidad y trazabilidad.</p>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <Link href="/verifactu/errores-comunes" className="text-primary font-bold hover:underline">
                                    Ver todos los errores comunes Verifactu →
                                </Link>
                            </div>
                        </section>

                        {/* CTA Final */}
                        <section id="cta" className="scroll-mt-24">
                            <div className="bg-navy rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8 mx-auto md:mx-0">
                                            <Zap size={40} className="text-primary fill-current" />
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                            VerifacTool: compatible, sencillo, desde 0€
                                        </h2>
                                        <p className="text-xl text-white/70 mb-10 max-w-xl">
                                            Cumple todos los requisitos técnicos AEAT con soporte garantizado para 2027 y más allá.
                                        </p>
                                        <ul className="space-y-4 mb-10 text-sm md:text-base">
                                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                                <CheckCircle2 size={18} className="text-primary" /> Hash automático + QR verificable
                                            </li>
                                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                                <CheckCircle2 size={18} className="text-primary" /> Migración gratuita Excel/Holded
                                            </li>
                                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                                <CheckCircle2 size={18} className="text-primary" /> PWA instalable (iOS/Android)
                                            </li>
                                        </ul>
                                        <Link href="/software-verifactu" className="btn-primary py-5 px-12 text-lg inline-flex items-center gap-3 hover:scale-105 transition-transform group">
                                            🚀 Empezar prueba VerifacTool <ArrowRight size={20} className="group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                    <div className="flex-1 hidden md:block">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                                            <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-xl relative z-10">
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="flex gap-2">
                                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                                    </div>
                                                    <span className="text-[10px] uppercase font-mono text-white/30">Dashboard Preview</span>
                                                </div>
                                                <div className="space-y-6">
                                                    <div className="h-4 bg-white/10 rounded-full w-3/4" />
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="h-20 bg-primary/10 rounded-2xl border border-primary/20 flex flex-col items-center justify-center gap-2">
                                                            <QrCode size={20} className="text-primary" />
                                                            <span className="text-[10px] font-bold">QR AEAT OK</span>
                                                        </div>
                                                        <div className="h-20 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2">
                                                            <CameraIcon size={20} className="text-white/40" />
                                                            <span className="text-[10px]">OCR SCAN</span>
                                                        </div>
                                                    </div>
                                                    <div className="h-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                                                        <BarChart3 size={32} className="text-white/20" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section className="bg-slate-50 p-12 rounded-[48px] border border-slate-200">
                            <h2 className="text-2xl font-bold text-navy mb-8 text-center uppercase tracking-widest">Preguntas Frecuentes sobre Software</h2>
                            <div className="space-y-6">
                                {faqSchema.mainEntity.map((faq, i) => (
                                    <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-sm transition-shadow">
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

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
