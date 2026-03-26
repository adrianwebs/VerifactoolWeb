import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    ArrowRight,
    CheckCircle2,
    Users,
    Building2,
    Hammer,
    Trophy,
    Star,
    Zap,
    Quote,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Casos de Éxito: Clientes que ya usan VerifacTool",
    description:
        "Descubre cómo autónomos y pymes españolas están cumpliendo con Verifactu sin complicaciones. Casos reales de negocios locales que han migrado a VerifacTool.",
    openGraph: {
        title: "Casos de Éxito: Clientes que ya usan VerifacTool",
        description:
            "Autónomos y pymes reales que ya cumplen con Verifactu gracias a VerifacTool. Descubre sus experiencias.",
        url: "https://verifactool.com/clientes",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/clientes",
    },
};

const clients = [
    {
        name: "Carpintería Artesanal",
        type: "Autónomo",
        sector: "Carpintería y reformas",
        icon: <Hammer size={32} />,
        challenge:
            "Como autónomo carpintero, llevaba la facturación en Excel y temía las sanciones de Verifactu. Necesitaba algo sencillo que no le quitara tiempo de su oficio.",
        solution:
            "Migró a VerifacTool en menos de 1 hora. Ahora genera facturas con hash y QR verificable desde el móvil, directamente en casa del cliente.",
        results: [
            "Migración desde Excel en 45 minutos",
            "Facturas Verifactu desde el primer día",
            "Ahorro de 3 horas/semana en administración",
        ],
        quote: "Antes perdía tardes enteras con las facturas. Ahora las hago desde el taller en 2 minutos.",
    },
    {
        name: "Funditrof",
        type: "PYME",
        sector: "Serigrafía, grabado y trofeos",
        icon: <Trophy size={32} />,
        challenge:
            "Como empresa de serigrafía y trofeos con volumen medio de facturas, necesitaban un sistema que gestionara IVA, gastos y facturación Verifactu sin un ERP complejo.",
        solution:
            "Implementaron VerifacTool para toda su facturación. El sistema gestiona automáticamente el hash encadenado, QR verificable y los modelos fiscales trimestrales.",
        results: [
            "+200 facturas mensuales procesadas con Verifactu",
            "Contabilidad automática con modelo 303",
            "Control total de gastos y proveedores",
        ],
        quote: "VerifacTool nos ha simplificado la facturación enormemente. El cumplimiento Verifactu es automático, no pensamos en ello.",
    },
];

export default function ClientesPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://verifactool.com/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Clientes",
            },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Qué tipo de negocios usan VerifacTool?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "VerifacTool es utilizado por autónomos (carpinteros, fontaneros, diseñadores), pymes (serigrafía, comercio local) y profesionales liberales en toda España.",
                },
            },
            {
                "@type": "Question",
                name: "¿Cuánto se tarda en migrar a VerifacTool?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "La migración desde Excel o un sistema anterior suele completarse en menos de 1 hora. VerifacTool incluye herramientas de importación gratuitas para CSV y Excel.",
                },
            },
            {
                "@type": "Question",
                name: "¿VerifacTool es adecuado para asesorías fiscales?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. VerifacTool incluye roles multi-usuario y acceso de asesoría para gestionar la facturación y contabilidad de múltiples clientes desde un mismo panel. Estamos trabajando en funcionalidades avanzadas específicas para el canal asesorías.",
                },
            },
        ],
    };

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <Navbar />

            {/* Hero Section */}
            <header className="hero-section pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <nav
                        className="flex items-center gap-2 text-sm font-medium text-primary mb-8"
                        aria-label="Breadcrumb"
                    >
                        <Link href="/" className="hover:underline">
                            Inicio
                        </Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <span className="text-slate-500">Clientes</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                            <Users size={14} /> Casos de Éxito
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-8">
                            Negocios reales que ya facturan con Verifactu
                        </h1>
                        <p className="text-xl text-text-body mb-10 leading-relaxed max-w-2xl">
                            Autónomos y pymes españolas que han dejado Excel atrás
                            y ahora cumplen con la normativa Verifactu sin
                            complicaciones. Descubre sus experiencias.
                        </p>
                    </div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            </header>

            {/* Client Cases */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto space-y-20">
                        {clients.map((client, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[48px] border border-slate-100 shadow-xl overflow-hidden"
                            >
                                {/* Header */}
                                <div className="bg-navy p-8 md:p-12 text-white flex flex-col md:flex-row items-start md:items-center gap-6">
                                    <div className="w-16 h-16 bg-primary/20 rounded-3xl flex items-center justify-center text-primary shrink-0">
                                        {client.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                                            {client.name}
                                        </h2>
                                        <div className="flex gap-4 text-sm text-white/60">
                                            <span className="flex items-center gap-1">
                                                <Building2 size={14} />{" "}
                                                {client.type}
                                            </span>
                                            <span>•</span>
                                            <span>{client.sector}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div>
                                            <h3 className="font-bold text-navy text-sm uppercase tracking-widest mb-4 text-red-500">
                                                El Reto
                                            </h3>
                                            <p className="text-text-body leading-relaxed">
                                                {client.challenge}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-sm uppercase tracking-widest mb-4 text-primary">
                                                La Solución
                                            </h3>
                                            <p className="text-text-body leading-relaxed">
                                                {client.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                                        <h3 className="font-bold text-navy text-sm uppercase tracking-widest mb-6 text-center">
                                            Resultados
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {client.results.map((result, j) => (
                                                <div
                                                    key={j}
                                                    className="flex gap-3 items-start"
                                                >
                                                    <CheckCircle2
                                                        size={20}
                                                        className="text-success shrink-0 mt-0.5"
                                                    />
                                                    <span className="text-sm text-text-body font-medium">
                                                        {result}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="flex gap-6 items-start bg-primary/5 p-8 rounded-[32px] border border-primary/10">
                                        <Quote
                                            size={32}
                                            className="text-primary/30 shrink-0"
                                        />
                                        <div>
                                            <p className="text-navy font-medium italic text-lg leading-relaxed mb-4">
                                                &ldquo;{client.quote}&rdquo;
                                            </p>
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <Star
                                                        key={s}
                                                        size={16}
                                                        className="text-yellow-400 fill-yellow-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Asesorías Section — Coming Soon */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                            <Users size={14} /> Canal Asesorías — Próximamente
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">
                            ¿Eres asesoría fiscal? Multiplica clientes con VerifacTool
                        </h2>
                        <p className="text-lg text-text-body mb-12 max-w-2xl mx-auto leading-relaxed">
                            Estamos preparando un programa exclusivo para asesorías
                            fiscales que quieran ofrecer Verifactu como servicio a sus
                            clientes. Una asesoría = múltiples negocios gestionados
                            desde un solo panel.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    title: "Panel Multi-cliente",
                                    desc: "Gestiona la facturación y contabilidad de todos tus clientes desde un único dashboard.",
                                },
                                {
                                    title: "Acceso Delegado",
                                    desc: "Tus clientes facturan, tú revisas. Roles diferenciados asesor vs. cliente.",
                                },
                                {
                                    title: "Precios Especiales",
                                    desc: "Descuentos por volumen para asesorías con más de 5 clientes activos.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm text-left"
                                >
                                    <h4 className="font-bold text-navy mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-text-body">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/demo"
                            className="btn-primary py-4 px-10 text-lg inline-flex items-center gap-3 group"
                        >
                            Solicitar acceso anticipado{" "}
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-navy rounded-[48px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                <Zap
                                    size={32}
                                    className="text-primary fill-current"
                                />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                Únete a ellos. Cumple Verifactu sin esfuerzo.
                            </h2>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                                Prueba VerifacTool gratis durante 7 días y descubre
                                por qué negocios locales ya nos eligen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/demo"
                                    className="bg-primary text-white py-5 px-12 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
                                >
                                    🚀 Prueba gratis 7 días
                                </Link>
                                <Link
                                    href="/precios"
                                    className="border border-white/30 py-5 px-10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
                                >
                                    Ver precios
                                </Link>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-2xl font-extrabold text-navy mb-12 text-center uppercase tracking-widest">
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-6">
                        {faqSchema.mainEntity.map((faq: any, i: number) => (
                            <div
                                key={i}
                                className="p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-sm transition-shadow"
                            >
                                <h4 className="font-bold text-navy mb-4">
                                    {faq.name}
                                </h4>
                                <p className="text-sm text-text-body leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
