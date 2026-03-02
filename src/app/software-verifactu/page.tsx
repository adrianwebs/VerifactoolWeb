import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ShieldCheck,
    QrCode,
    Share2,
    FileText,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    MousePointerClick,
    Sparkles,
    Send,
    Smartphone,
    CreditCard,
    Star,
    Plus,
    Users
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import JsonLd from "@/components/SEO/JsonLd";
import FAQ from "@/components/FAQ"; // Reuse FAQ component but with specific questions or implement inline
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Software de Facturación Verifactu-ready | VerifacTool",
    description: "Software de facturación compatible con Verifactu en España. QR, hash SHA-256 y envío AEAT automático. Prueba gratis para autónomos y pymes. Cumple la normativa 2026 sin sanciones.",
    openGraph: {
        title: "Software de Facturación Verifactu-ready | VerifacTool",
        description: "Programa de facturación Verifactu para España: facturación electrónica legal con QR y AEAT. Empieza gratis hoy.",
        images: ["/og-verifactu-dashboard.jpg"],
        url: "https://verifactool.com/software-verifactu",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/software-verifactu",
    }
};

export default function VerifactuPage() {
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "VerifacTool",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web PWA",
        "description": "Software de facturación compatible con Verifactu: QR, hash y envío AEAT para autónomos España.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
        "url": "https://verifactool.com/software-verifactu"
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
                "name": "Software Verifactu",
                "item": "https://verifactool.com/software-verifactu"
            }
        ]
    };

    const verifactuFaqs = [
        {
            question: "¿Qué es software facturación Verifactu?",
            answer: "Herramienta que genera facturas con hash, QR y envío AEAT. Obligatorio 2026."
        },
        {
            question: "¿VerifacTool envía a la AEAT?",
            answer: "Sí, automático vía API. Gestiona rechazos y subsanaciones."
        },
        {
            question: "¿Multas si uso programa no compatible?",
            answer: "Las sanciones pueden ir desde los 300€ hasta los 30.000€ por factura irregular. Además de posibles bloqueos en las deducciones de IVA."
        },
        {
            question: "¿Importo facturas antiguas?",
            answer: "Sí, permitimos la importación vía Excel/CSV y el sistema ayuda a reconstruir la cadena hash necesaria para el cumplimiento."
        },
        {
            question: "¿Funciona en móvil?",
            answer: "Sí, disponemos de una PWA instalable 100% funcional que permite incluso escanear tickets con la cámara."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": verifactuFaqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    return (
        <main className="min-h-screen">
            <JsonLd data={softwareSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                                Compatible Verifactu 2026
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                                Software de Facturación compatible con Verifactu en España
                            </h1>
                            <p className="text-xl text-text-body mb-8 leading-relaxed">
                                El programa de facturación Verifactu más sencillo para autónomos y pymes. Genera facturas electrónicas legales con QR, hash y envío automático a la AEAT.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={20} />
                                    <p className="text-navy font-medium">Facturas encadenadas con hash SHA-256 y QR dinámico Verifactu.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={20} />
                                    <p className="text-navy font-medium">Envío AEAT automático: pendiente, aceptada o rechazada.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={20} />
                                    <p className="text-navy font-medium">Prueba gratis 14 días sin tarjeta.</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link href="/precios" className="bg-success hover:bg-success/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-success/20 w-full sm:w-auto text-center">
                                    🚀 Empieza prueba gratis
                                </Link>
                                <Link href="/demo" className="text-primary font-bold hover:underline flex items-center gap-2">
                                    Ver demo 2 min <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-white rounded-[32px] p-6 shadow-2xl border border-gray-100 relative z-10">
                                <div className="bg-gray-50 rounded-2xl aspect-[1.4/1] overflow-hidden flex items-center justify-center p-8 border border-gray-200">
                                    {/* Simplified Invoice Editor Mockup */}
                                    <div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
                                        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                            <div className="flex gap-2">
                                                <div className="w-8 h-2 bg-gray-300 rounded" />
                                                <div className="w-4 h-2 bg-gray-200 rounded" />
                                            </div>
                                            <div className="w-12 h-4 bg-primary/20 rounded-full" />
                                        </div>
                                        <div className="p-4 flex-1 space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-2">
                                                    <div className="w-20 h-2 bg-gray-200 rounded" />
                                                    <div className="w-32 h-2 bg-gray-100 rounded" />
                                                </div>
                                                <QrCode size={40} className="text-navy opacity-80" />
                                            </div>
                                            <div className="space-y-4 pt-4">
                                                <div className="h-4 w-full bg-gray-50 rounded" />
                                                <div className="h-4 w-full bg-gray-50 rounded" />
                                                <div className="h-4 w-2/3 bg-gray-50 rounded" />
                                            </div>
                                        </div>
                                        <div className="p-4 bg-navy/5 text-xs text-navy/40 font-mono flex items-center gap-2">
                                            <Share2 size={12} /> hash: a7d3...f2e9
                                        </div>
                                    </div>
                                </div>
                                {/* PDF Label */}
                                <div className="absolute -bottom-4 -right-4 bg-navy text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-white/20">
                                    Factura Legal PDF Generated
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Urgency Section */}
            <section className="py-24 bg-[#FFFBEB]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-6">
                                <AlertTriangle size={18} /> Inminente 2026
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                Verifactu obligatorio 2026: evita multas de hasta 30.000€
                            </h2>
                            <p className="text-lg text-text-body mb-8 leading-relaxed">
                                Desde julio 2026 todas las facturas en España deben ser inalterables (Real Decreto 1007/2023): hash criptográfico, QR único y registros enviados a AEAT. Excel, Word o software no compatible = sanciones inmediatas.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="p-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
                                    <p className="text-amber-800 font-bold mb-2">📅 Fecha clave</p>
                                    <p className="text-text-body text-sm">1 julio 2026 (autónomos/pymes); 2027 grandes empresas.</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-red-200 shadow-sm">
                                    <p className="text-red-700 font-bold mb-2">⚠️ Riesgo</p>
                                    <p className="text-text-body text-sm">300€-30.000€ por factura irregular + bloqueo deducciones IVA.</p>
                                </div>
                            </div>

                            <p className="text-navy font-bold mb-6">VerifacTool: Migra en 5 min, cumple 100% sin cambiar hábitos.</p>

                            <div className="flex flex-wrap gap-4 text-sm font-bold">
                                <Link href="/verifactu/que-es" className="text-primary hover:underline">Qué es Verifactu →</Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/verifactu/sanciones" className="text-primary hover:underline">Sanciones →</Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/verifactu/requisitos-tecnicos" className="text-primary hover:underline">Requisitos técnicos →</Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-3xl p-10 shadow-xl border border-amber-50">
                                <h4 className="font-bold text-navy text-xl mb-10">Timeline Regulatorio</h4>
                                <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[2px] before:bg-amber-100">
                                    <div className="relative pl-16">
                                        <div className="absolute left-0 top-1 w-12 h-12 rounded-full border-4 border-white bg-amber-400 flex items-center justify-center text-white z-10 shadow-md">
                                            <Plus size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy">Hoy</p>
                                            <p className="text-text-body text-sm">Oportunidad para digitalizarte sin presión.</p>
                                        </div>
                                    </div>
                                    <div className="relative pl-16">
                                        <div className="absolute left-0 top-1 w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white z-10 shadow-md">
                                            <Smartphone size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy">1 Jul 2026</p>
                                            <p className="text-text-body text-sm font-bold text-primary italic">Obligación Verifactu en vigor.</p>
                                        </div>
                                    </div>
                                    <div className="relative pl-16">
                                        <div className="absolute left-0 top-1 w-12 h-12 rounded-full border-4 border-white bg-red-500 flex items-center justify-center text-white z-10 shadow-md">
                                            <AlertTriangle size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-red-600">Post-2026</p>
                                            <p className="text-text-body text-sm">Inspecciones de software y sanciones.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Facturación Verifactu en 3 clics</h2>
                        <p className="text-text-body text-lg">Digitaliza tu negocio de forma legal en cuestión de minutos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Decorative arrows (visible on md+) */}
                        <div className="hidden md:block absolute top-1/2 left-[30%] -translate-y-1/2 w-[10%] h-[2px] bg-accent-blue" />
                        <div className="hidden md:block absolute top-1/2 left-[60%] -translate-y-1/2 w-[10%] h-[2px] bg-accent-blue" />

                        {[
                            {
                                title: "📝 Crea factura",
                                desc: "Cliente + productos + IVA. Auto-hash de factura anterior + QR Verifactu generado.",
                                icon: <MousePointerClick className="text-primary" />
                            },
                            {
                                title: "✨ Personaliza PDF",
                                desc: "Editor visual: logo, colores, multidivisa. Previsualiza antes de firmar.",
                                icon: <Sparkles className="text-primary" />
                            },
                            {
                                title: "📤 Envía legal",
                                desc: "1 clic: AEAT (asíncrono) + email cliente + descarga PDF. Estados trackeados.",
                                icon: <Send className="text-primary" />
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 feature-card">
                                <div className="w-16 h-16 rounded-2xl bg-accent-blue flex items-center justify-center mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                                <p className="text-text-body text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Software facturación Verifactu completo</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Core Verifactu", desc: "Ordinarias, simplificadas, rectificativas. Encadenamiento hash + QR único.", icon: <ShieldCheck /> },
                            { title: "AEAT inteligente", desc: "Gestión errores + reenvío subsanación. Nunca pierdas el hilo de tus estados presidenciales.", icon: <Sparkles /> },
                            { title: "Editor PDF pro", desc: "Drag & drop logos/colores para que tu marca destaque legalmente.", icon: <FileText /> },
                            { title: "Móvil PWA", desc: "Escanea tickets con la cámara del móvil y digitaliza tus gastos vía OCR.", icon: <Smartphone /> },
                            { title: "Cobros Integrados", desc: "Botón 'Pagar ahora' con Stripe y PayPal directamente en el PDF de la factura.", icon: <CreditCard /> },
                            { title: "Soporte Legal", desc: "Consultoría gratuita sobre cómo adaptar tu histórico de facturas a Verifactu.", icon: <Users /> }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all group relative cursor-help">
                                <div className="w-12 h-12 rounded-2xl bg-accent-blue flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                    {feature.icon as any}
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-3">{feature.title}</h4>
                                <p className="text-text-body text-sm leading-relaxed">{feature.desc}</p>

                                {/* Hover tooltip hint */}
                                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">Mini-demo</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-navy text-center mb-16">Comparativa de Software Verifactu</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="py-6 px-4 font-bold text-navy">Característica</th>
                                    <th className="py-6 px-4 font-bold text-primary text-center bg-primary/5 rounded-t-2xl border-x border-t border-primary/10">VerifacTool</th>
                                    <th className="py-6 px-4 font-bold text-navy text-center">Holded</th>
                                    <th className="py-6 px-4 font-bold text-navy text-center">Sage 50</th>
                                    <th className="py-6 px-4 font-bold text-navy text-center">FacturaDirecta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Verifactu 2026", values: ["✅ Gratis siempre", "✅ (19€+)", "✅ (28€+)", "⚠️ En proceso"] },
                                    { name: "Envío AEAT auto", values: ["✅ Incluido", "✅", "✅", "❌ Manual"] },
                                    { name: "Editor PDF visual", values: ["✅ Drag & drop", "✅", "❌", "✅"] },
                                    { name: "OCR tickets móvil", values: ["✅ Cámara", "❌", "✅ Extra", "❌"] },
                                    { name: "Precio inicio", values: ["0€ prueba", "19€/mes", "28€/mes", "9€/mes"] },
                                    { name: "PWA completa", values: ["✅", "✅", "❌", "✅"] },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-5 px-4 text-navy font-medium">{row.name}</td>
                                        <td className="py-5 px-4 text-center bg-primary/5 border-x border-primary/10 font-bold text-primary">{row.values[0]}</td>
                                        <td className="py-5 px-4 text-center text-text-body">{row.values[1]}</td>
                                        <td className="py-5 px-4 text-center text-text-body">{row.values[2]}</td>
                                        <td className="py-5 px-4 text-center text-text-body">{row.values[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-text-body mb-6">VerifacTool: cumplimiento + simplicidad sin extras pagados.</p>
                        <Link href="/precios" className="text-primary font-bold hover:underline">Ver precios completos →</Link>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-navy mb-4">+500 autónomos ya facturan legal</h2>
                        <div className="flex justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            { name: "Juan Pérez", role: "Autónomo carpintero", content: "De Excel a Verifactu en 10 min. AEAT acepta todo al primer envío." },
                            { name: "Ana López", role: "Freelance marketing", content: "El QR y hash automáticos salvan horas. Perfecto para mi asesoría." }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                                <p className="text-text-body italic text-lg mb-6 leading-relaxed">"{t.content}"</p>
                                <div>
                                    <p className="font-bold text-navy">{t.name}</p>
                                    <p className="text-xs text-text-body uppercase tracking-wider">{t.role}</p>
                                </div>
                                <div className="absolute top-8 right-8 text-primary/10">
                                    <Star size={40} className="fill-current" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                        <p className="text-center text-sm font-semibold text-text-body mb-8 grayscale opacity-50">Empresas que ya confían en VerifacTool</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
                            <span className="font-bold text-xl">Asesoría Murcia</span>
                            <span className="font-bold text-xl uppercase tracking-tighter">GymFitness</span>
                            <span className="font-bold text-xl italic tracking-tight">TiendaOnline</span>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-success/10 text-success font-bold text-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                            </span>
                            +500 facturas Verifactu emitidas hoy
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordions */}
            <section className="py-24 bg-white" id="faq">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy text-center mb-16">Preguntas sobre software compatible Verifactu</h2>
                    <div className="space-y-4">
                        {verifactuFaqs.map((f, i) => (
                            <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden hover:border-primary/20 transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-navy group-open:bg-gray-50 transition-colors">
                                    <span>{f.question}</span>
                                    <span className="group-open:rotate-180 transition-transform"><AlertTriangle size={20} className="text-gray-300" /></span>
                                </summary>
                                <div className="p-6 text-text-body leading-relaxed border-t border-gray-50">
                                    {f.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#7C3AED] relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¡Cumple Verifactu hoy sin riesgos!</h2>
                        <p className="text-white/80 text-xl mb-10">Prueba gratis 14 días. Migra datos gratis. Sin tarjeta.</p>

                        <div className="bg-white p-2 rounded-[40px] shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto mb-10">
                            <input
                                type="email"
                                placeholder="Tu email profesional"
                                className="flex-1 px-8 py-4 bg-transparent text-navy outline-none"
                            />
                            <button className="bg-success text-white px-10 py-4 rounded-full font-bold hover:bg-success/90 transition-all">
                                🚀 Prueba gratuita ya
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/60 text-sm">
                            <p>⏰ 18 meses para obligación legal</p>
                            <Link href="/demo" className="text-white font-bold hover:underline flex items-center gap-2">
                                📅 Reserva demo personalizada
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Abstract background shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </section>

            <Footer />
        </main>
    );
}
