import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    ChevronRight,
    Zap,
    ArrowRight,
    FileText,
    ShieldCheck,
    QrCode,
    Send,
    Database,
    ArrowRightLeft,
    Settings,
    CheckCircle2,
    Info,
    Cpu,
    Lock,
    Search,
    RefreshCw,
    XCircle
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cómo funciona Verifactu: el proceso técnico paso a paso",
    description: "Guía visual y técnica sobre el funcionamiento de Verifactu: generación de registros, encadenamiento hash, códigos QR y envío a la AEAT RD 1007/2023.",
    openGraph: {
        title: "Cómo funciona Verifactu: guía técnica visual",
        description: "Descubre el flujo de Verifactu: desde la emisión de factura hasta el envío a la AEAT. Hash, QR y registros inalterables.",
        url: "https://verifactool.com/verifactu/como-funciona",
        type: "article",
        images: ["/og-como-funciona-verifactu.jpg"],
    },
    alternates: {
        canonical: "https://verifactool.com/verifactu/como-funciona",
    },
};

export default function ComoFuncionaVerifactu() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Cómo funciona Verifactu: el proceso paso a paso",
        "description": "Explicación técnica y visual del flujo de facturación Verifactu: registros informáticos, hash encadenado y códigos QR.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "datePublished": "2026-02-18",
        "url": "https://verifactool.com/verifactu/como-funciona"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" },
            { "@type": "ListItem", "position": 3, "name": "Cómo funciona", "item": "https://verifactool.com/verifactu/como-funciona" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cómo funciona el hash encadenado en Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "Cada factura genera un hash SHA-256 que incluye los datos de la factura actual más el hash de la factura anterior. Esto crea una cadena criptográfica: si se borra o modifica una factura intermedia, la cadena se rompe y la AEAT lo detecta automáticamente." }
            },
            {
                "@type": "Question",
                "name": "¿Qué es el código QR de Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "Es un código QR obligatorio que se incluye en cada factura PDF. Contiene la URL de verificación de la AEAT y los datos clave de la factura, permitiendo que cualquier receptor compruebe su autenticidad escaneándolo con el móvil." }
            },
            {
                "@type": "Question",
                "name": "¿Cuál es la diferencia entre Verifactu SÍ y Verifactu NO?",
                "acceptedAnswer": { "@type": "Answer", "text": "Verifactu SÍ envía los registros de facturación a la AEAT automáticamente en tiempo real. Verifactu NO solo almacena los registros localmente con garantías de integridad y los mantiene disponibles para inspección. Ambos cumplen la normativa, pero la AEAT recomienda Verifactu SÍ." }
            },
            {
                "@type": "Question",
                "name": "¿Qué pasa si se borra una factura en un sistema Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "El sistema no permite borrar facturas. Si se necesita corregir, se emite una factura rectificativa que queda vinculada a la original. Esto garantiza la trazabilidad completa exigida por el RD 1007/2023." }
            }
        ]
    };

    const steps = [
        {
            title: "Emisión de Factura",
            desc: "Al crear una factura, el software genera automáticamente un Registro Informático de Facturación (RIF) en formato XML.",
            icon: <FileText size={24} />,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Encadenamiento Hash",
            desc: "El sistema genera una huella digital (SHA-256) que une la factura actual con la anterior, creando una cadena irrompible.",
            icon: <Lock size={24} />,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Generación de QR",
            desc: "Se añade un código QR al PDF con la URL de la AEAT y los datos de identificación para que el cliente pueda verificarla.",
            icon: <QrCode size={24} />,
            color: "bg-orange-100 text-orange-600"
        },
        {
            title: "Registro de Eventos",
            desc: "Cualquier anulación o rectificación queda grabada en un log de eventos inalterable (trazabilidad total).",
            icon: <HistoryIcon size={24} />,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Envío o Custodia",
            desc: "La factura se envía a la AEAT en tiempo real (Sistemas Verifactu) o se custodia para auditoría (Sistemas No Verifactu).",
            icon: <Send size={24} />,
            color: "bg-primary/20 text-primary"
        }
    ];

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
                        <span className="text-slate-500">Cómo funciona</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase mb-6 border border-primary/30">
                            <Zap size={14} /> Workflow Técnico RD 1007/2023
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-navy leading-tight mb-8">
                            Cómo funciona Verifactu: el proceso paso a paso
                        </h1>
                        <p className="text-xl text-text-body mb-12 leading-relaxed max-w-2xl">
                            Verifactu transforma la facturación tradicional en un sistema blindado criptográficamente. Descubre cómo interactúa tu software con la AEAT de forma transparente.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/verifactu/requisitos-tecnicos" className="btn-primary py-4 px-10 text-lg flex items-center gap-2">
                                <Settings size={20} /> Especificaciones técnicas
                            </Link>
                            <Link href="/verifactu" className="text-primary hover:text-navy transition-colors flex items-center gap-2 font-bold py-4">
                                <ArrowRight size={20} /> Guía Pilar Verifactu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
            </header>

            {/* Visual Workflow */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">El flujo de facturación blindado</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            Desde que pulsas "Guardar" hasta que la AEAT recibe la información, Verifactu realiza estos 5 pasos críticos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                        {/* Horizontal line for desktop */}
                        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-slate-100" />

                        {steps.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                <div className={`w-[88px] h-[88px] rounded-[32px] ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 border-4 border-white`}>
                                    {step.icon}
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-3">{step.title}</h4>
                                <p className="text-sm text-text-body line-clamp-3">{step.desc}</p>
                                <div className="mt-4 text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    PASO 0{i + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Sections */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* 1. Generación de Registro */}
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-[20px] flex items-center justify-center text-primary">
                                    <Database size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy">Paso 1: El Registro de Facturación (XML)</h2>
                                <p className="text-lg text-text-body leading-relaxed">
                                    A diferencia de una factura tradicional que es solo un PDF o papel, Verifactu obliga a crear un <strong>fichero informático estructurado</strong>.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-sm">
                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                        <span>Contiene NIF, importes, bases e IVA de forma granular.</span>
                                    </li>
                                    <li className="flex gap-3 text-sm">
                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                        <span>Incluye marcas de tiempo (Timestamps) inalterables.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 bg-white p-8 rounded-[48px] border border-slate-200 shadow-xl overflow-hidden relative">
                                <pre className="text-[10px] text-slate-400 font-mono leading-relaxed">
                                    {`<?xml version="1.0" encoding="UTF-8"?>
<RegistroFacturacion>
  <IDFactura>
    <IDEmisorFactura>B12345678</IDEmisorFactura>
    <NumSerieFactura>F-2026-001</NumSerieFactura>
    <FechaExpedicion>18-02-2026</FechaExpedicion>
  </IDFactura>
  <DatosFactura>
    <BaseImponible>1000.00</BaseImponible>
    <CuotaIVA>210.00</CuotaIVA>
    <Total>1210.00</Total>
  </DatosFactura>
  <HuellaEncadenamiento>
    <HashAnterior>sha256:d41d8cd98...</HashAnterior>
    <HashActual>sha256:4f8e32a1...</HashActual>
  </HuellaEncadenamiento>
</RegistroFacturacion>`}
                                </pre>
                            </div>
                        </div>

                        {/* 2. Hash y QR */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="p-10 bg-white rounded-[48px] border border-slate-100 shadow-sm flex flex-col gap-6">
                                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center shadow-sm">
                                    <Lock size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy">Encadenamiento Criptográfico</h3>
                                <p className="text-text-body">
                                    Es el corazón de Verifactu. El Hash de la factura 1 se usa como semilla para crear el Hash de la factura 2. Si alguien intenta borrar la factura 1, la factura 2 dejará de ser válida porque su "padre" ha desaparecido.
                                </p>
                                <Link href="/verifactu/requisitos-tecnicos" className="text-primary font-bold hover:underline">
                                    Más sobre SHA-256 →
                                </Link>
                            </div>
                            <div className="p-10 bg-white rounded-[48px] border border-slate-100 shadow-sm flex flex-col gap-6">
                                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-3xl flex items-center justify-center shadow-sm">
                                    <QrCode size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy">El Código QR Verificable</h3>
                                <p className="text-text-body">
                                    Cada PDF impreso debe llevar un QR. Escaneándolo con un móvil, cualquier cliente puede ver en la web de la AEAT si esa factura ha sido correctamente registrada. <strong>Transparencia total.</strong>
                                </p>
                                <Link href="/verifactu/es-obligatorio-autonomos" className="text-primary font-bold hover:underline">
                                    ¿A quién obliga el QR? →
                                </Link>
                            </div>
                        </div>

                        {/* 3. Comparativa Sistemas */}
                        <div className="bg-navy p-12 rounded-[60px] text-white overflow-hidden relative shadow-2xl">
                            <div className="relative z-10">
                                <div className="flex flex-col items-center text-center mb-16">
                                    <h2 className="text-3xl font-extrabold mb-6">Verifactu SÍ vs No Verifactu</h2>
                                    <p className="text-white/60 max-w-xl">El reglamento permite dos formas de cumplir, aunque la AEAT recomienda el envío en tiempo real.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-primary/20 text-primary rounded-lg font-bold text-xs">SISTEMA A</div>
                                            <h4 className="text-xl font-bold">Verifactu (SÍ)</h4>
                                        </div>
                                        <ul className="space-y-4 text-sm text-white/70">
                                            <li className="flex gap-3"><CheckCircle2 size={18} className="text-primary shrink-0" /> Envío automático de facturas al generarlas.</li>
                                            <li className="flex gap-3"><CheckCircle2 size={18} className="text-primary shrink-0" /> No es necesario archivar backups XML (AEAT los tiene).</li>
                                            <li className="flex gap-3"><CheckCircle2 size={18} className="text-primary shrink-0" /> Máxima presunción de veracidad ante inspección.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-colors opacity-70">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-slate-400/20 text-slate-400 rounded-lg font-bold text-xs">SISTEMA B</div>
                                            <h4 className="text-xl font-bold">No Verifactu</h4>
                                        </div>
                                        <ul className="space-y-4 text-sm text-white/50">
                                            <li className="flex gap-3"><XCircle size={18} className="text-red-400 shrink-0" /> No se envían las facturas al instante.</li>
                                            <li className="flex gap-3"><XCircle size={18} className="text-red-400 shrink-0" /> Obligación de conservar backups inalterables 4 años.</li>
                                            <li className="flex gap-3"><XCircle size={18} className="text-red-400 shrink-0" /> Posible firma electrónica obligatoria por registro.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-primary rounded-[48px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                Automatiza Verifactu con VerifacTool
                            </h2>
                            <p className="text-xl text-white/80 mb-12">
                                Olvídate de XML, Hash o normativas técnicas complejos. Nosotros nos encargamos de que toda tu facturación sea 100% compliant.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/software-verifactu" className="bg-white text-navy px-12 py-5 rounded-2xl font-extrabold text-xl hover:scale-105 transition-transform">
                                    🚀 Empezar ahora
                                </Link>
                                <Link href="/verifactu/es-obligatorio-autonomos" className="border border-white/30 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                                    ¿Es para mí? <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-navy rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function HistoryIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M12 7v5l3 2" />
        </svg>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
