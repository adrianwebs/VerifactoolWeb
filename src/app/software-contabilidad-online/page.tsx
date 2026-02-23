import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    Calculator,
    Smartphone,
    BarChart3,
    Landmark,
    CircleDollarSign,
    CheckCircle2,
    ArrowRight,
    Zap,
    Users,
    ChevronDown
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Software Contabilidad Online PYMES Autónomos | VerifacTool",
    description: "Software contabilidad online para autónomos y pymes. Automatiza modelo 303, modelo 130, OCR facturas y conciliación bancaria. Prueba gratis 14 días.",
    openGraph: {
        title: "Software Contabilidad Online PYMES Autónomos | VerifacTool",
        description: "Programa contabilidad online: mod 303/130 automáticos, OCR tickets, conciliación bancos. Controla tu negocio desde móvil.",
        images: ["/og-contabilidad-dashboard.jpg"],
        url: "https://verifactool.com/software-contabilidad-online",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/software-contabilidad-online",
    },
};

export default function ContabilidadPage() {
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "VerifacTool Contabilidad",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web PWA",
        "description": "Software contabilidad online para pymes/autónomos: OCR, modelo 303/130, conciliación bancaria automática.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
        "url": "https://verifactool.com/software-contabilidad-online"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿VerifacTool genera modelo 303 automáticamente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, calcula IVA desde facturas/gastos. Borrador oficial AEAT listo."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contabilidad Online" }
        ]
    };

    return (
        <main className="min-h-screen">
            <JsonLd data={softwareSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <Navbar />

            {/* Hero Section */}
            <section className="hero-section pt-32 pb-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                                <Zap size={14} /> Compatible SII + Verifactu
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                                Software de Contabilidad Online para pymes y autónomos
                            </h1>
                            <p className="text-xl text-text-body leading-relaxed mb-10">
                                Centraliza ingresos, gastos e impuestos en un dashboard. Genera modelos 303/130 automáticos y olvídate del Excel para siempre.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    { title: "OCR automático", desc: "Sube tickets → extrae IVA/proveedor." },
                                    { title: "Modelos fiscales", desc: "303/130 listos con 1 clic." },
                                    { title: "Conciliación", desc: "Bancos + facturas emparejados automáticamente." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-success mt-1" size={20} />
                                        <div className="text-navy font-medium">
                                            <span className="font-bold">{item.title}:</span> {item.desc}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link href="/precios" className="btn-primary bg-success hover:bg-success/90 py-4 px-10 text-lg w-full sm:w-auto text-center shadow-lg shadow-success/20">
                                    🚀 Prueba gratis 14 días
                                </Link>
                                <Link href="/demo" className="text-primary font-bold hover:underline flex items-center gap-2">
                                    Ver demo contabilidad <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            {/* Dashboard Mockup for Accounting */}
                            <div className="bg-white rounded-[32px] p-2 shadow-2xl border border-gray-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                                <div className="bg-slate-50 rounded-[28px] overflow-hidden border border-slate-100">
                                    <div className="bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center text-xs font-bold text-navy">
                                        <span>Buscador Global...</span>
                                        <div className="flex gap-4">
                                            <span className="text-primary">Ingresos</span>
                                            <span className="text-orange-500">Gastos</span>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Beneficio Neto</p>
                                                <p className="text-2xl font-bold text-navy">12.840€</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-2xl border border-slate-200 border-l-4 border-l-orange-500">
                                                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Alerta IVA</p>
                                                <p className="text-2xl font-bold text-orange-600">3.120€</p>
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100 h-40 flex items-end justify-between gap-2 px-8">
                                            {[50, 80, 40, 90, 60, 45, 95].map((h, i) => (
                                                <div key={i} className="w-full flex flex-col gap-1 items-center">
                                                    <div style={{ height: `${h}%` }} className={cn("w-full rounded-t-lg", i === 6 ? "bg-primary" : "bg-primary/20")} />
                                                    <span className="text-[8px] font-bold text-slate-300">D{i + 1}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Tu contabilidad automatizada en 5 módulos</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Gestión Gastos + OCR",
                                desc: "Drag & drop tickets → extracción automática. Categorización inteligente.",
                                icon: <Smartphone size={24} />,
                                link: "/ocr-facturas-proveedores",
                                linkText: "Saber más"
                            },
                            {
                                title: "Modelo 303 Automático",
                                desc: "Cálculo real-time IVA repercutido/soportado. Borrador AEAT listo.",
                                icon: <BarChart3 size={24} />,
                                link: "/modelo-303-automatico",
                                linkText: "Ver IVA"
                            },
                            {
                                title: "Modelo 130 Autónomos",
                                desc: "IRPF estimado + pagos fraccionados automáticos. Exporta PDF.",
                                icon: <CircleDollarSign size={24} />,
                                link: "/modelo-130-autonomos",
                                linkText: "Gestionar IRPF"
                            },
                            {
                                title: "Conciliación Bancaria",
                                desc: "API PSD2 bancos españoles. Match automático 85% movimientos.",
                                icon: <Landmark size={24} />,
                                link: "/conciliacion-bancaria-automatica",
                                linkText: "Ver bancos"
                            },
                            {
                                title: "Dashboard Rentabilidad",
                                desc: "Beneficio real, tesorería proyectada y alertas fiscales.",
                                icon: <Calculator size={24} />,
                                link: "/demo",
                                linkText: "Ver Demo"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-accent-blue flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    {card.icon}
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-4 leading-tight">{card.title}</h4>
                                <p className="text-text-body text-sm leading-relaxed mb-6">{card.desc}</p>
                                <Link href={card.link} className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                    {card.linkText} <ArrowRight size={14} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Perfecto para tu situación</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Autónomo Freelance",
                                quote: "Subo tickets del súper con móvil → clasificados. Veo mi IVA a devolver antes del 303. Sin Excel ni cuaderno.",
                                avatar: "AF",
                                benefits: ["Adiós al Excel", "IVA siempre bajo control", "Tickets digitalizados"]
                            },
                            {
                                title: "Pyme Comercio",
                                quote: "Conciliamos 200 movimientos banco/mes automáticamente. Dashboard beneficio por producto. Modelos listos para asesor.",
                                avatar: "PC",
                                benefits: ["Bancos sincronizados", "Rentabilidad por producto", "Preparado para asesor"]
                            },
                            {
                                title: "Asesoría 5 clientes",
                                quote: "Roles separados: cliente ve gastos/facturas, yo controlo bancos/modelos. Exporto listados contables en Excel.",
                                avatar: "A5",
                                benefits: ["Acceso colaborativo", "Exportación contable", "Menos emails con clientes"]
                            }
                        ].map((useCase, i) => (
                            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-6">
                                    {useCase.avatar}
                                </div>
                                <h4 className="font-bold text-navy text-xl mb-6">{useCase.title}</h4>
                                <p className="italic text-text-body mb-8">"{useCase.quote}"</p>
                                <div className="flex flex-col gap-3 w-full">
                                    {useCase.benefits.map((b, j) => (
                                        <div key={j} className="flex items-center gap-2 text-sm font-medium text-navy bg-slate-50 p-2 rounded-xl">
                                            <CheckCircle2 size={14} className="text-success" /> {b}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UI Showcase / Carousel Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Control total en 90 segundos</h2>
                        <p className="text-text-body">Mira cómo fluye la información desde tu móvil hasta tus impuestos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Dashboard financiero", img: "bg-slate-200" },
                            { title: "OCR procesando ticket", img: "bg-slate-200" },
                            { title: "Conciliación sugerida", img: "bg-slate-200" },
                            { title: "Borrador de Modelo 303", img: "bg-slate-200" }
                        ].map((item, i) => (
                            <div key={i} className="group relative rounded-[32px] overflow-hidden border border-slate-100 aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                                <div className={cn("w-full h-full animate-pulse", item.img)} />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent flex items-end p-8">
                                    <p className="text-white font-bold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Preguntas sobre contabilidad online</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: "¿Qué es software contabilidad online?",
                                a: "Plataforma nube que automatiza gastos, impuestos y bancos. Acceso desde móvil/PC."
                            },
                            {
                                q: "¿VerifacTool genera modelo 303 automáticamente?",
                                a: "Sí, calcula IVA trimestral desde facturas/gastos. Borrador oficial AEAT.",
                                link: "/modelo-303-automatico",
                                linkText: "Ver más"
                            },
                            {
                                q: "¿Cómo funciona OCR facturas proveedores?",
                                a: "Foto ticket → extrae NIF/IVA/total en 5s. 95% precisión.",
                                link: "/ocr-facturas-proveedores",
                                linkText: "Ver OCR"
                            },
                            {
                                q: "¿Conciliación bancaria gratuita?",
                                a: "Sí, API PSD2 gratuita con bancos españoles. Match automático 85% movimientos."
                            },
                            {
                                q: "¿Puedo invitar a mi asesor?",
                                a: "Roles RBAC: cliente ve gastos, asesor ve todo. Exporta contabilidad completa."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                <details className="group">
                                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-navy">
                                        {faq.q}
                                        <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-6 pt-0 text-text-body space-y-4 border-t border-slate-50">
                                        <p>{faq.a}</p>
                                        {faq.link && (
                                            <Link href={faq.link} className="text-primary font-bold text-xs uppercase underline">
                                                {faq.linkText}
                                            </Link>
                                        )}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-navy relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Controla tu contabilidad hoy mismo</h2>
                            <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto lg:mx-0">
                                Demo guiada 15 min + migración gratuita Excel. Sin tarjeta. Cancelación anytime.
                            </p>

                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[40px] border border-white/10 max-w-md mx-auto lg:mx-0">
                                <form className="space-y-4">
                                    <input type="email" placeholder="Tu email profesional" className="w-full bg-white px-6 py-4 rounded-full font-medium text-navy focus:ring-2 focus:ring-primary outline-none" />
                                    <select className="w-full bg-white px-6 py-4 rounded-full font-medium text-navy focus:ring-2 focus:ring-primary outline-none appearance-none">
                                        <option>Soy autónomo</option>
                                        <option>Soy Pyme</option>
                                        <option>Soy Asesoría</option>
                                    </select>
                                    <button type="button" className="w-full btn-primary bg-success hover:bg-success/90 py-4 text-lg">
                                        📅 Reserva demo personalizada
                                    </button>
                                </form>
                                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/precios" className="text-white/50 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                                        O probar gratis 14 días →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-white/10 backdrop-blur-2xl rounded-[40px] p-8 border border-white/10 shadow-2xl relative">
                                <div className="absolute top-4 right-8 bg-success text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">+500 autónomos automatizados</div>
                                <div className="space-y-6 opacity-80">
                                    <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 bg-white/10 rounded-2xl" />
                                        <div className="h-24 bg-white/10 rounded-2xl" />
                                    </div>
                                    <div className="h-32 bg-white/5 rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative background blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-success/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </section>

            <Footer />
        </main>
    );
}
