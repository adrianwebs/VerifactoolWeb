import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import {
    AlertTriangle,
    Calendar,
    CheckCircle2,
    ChevronRight,
    Info,
    ShieldAlert,
    Code,
    FileText,
    Download,
    ArrowRight,
    ListFilter,
    Smartphone,
    Zap
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Qué es Verifactu: Guía Completa Normativa AEAT España 2026",
    description: "Qué es Verifactu, sistema AEAT obligatorio 2026. Requisitos, fechas, sanciones y cómo cumplir para autónomos/pymes. Guía paso a paso + software compatible.",
    openGraph: {
        title: "Qué es Verifactu: Guía Completa Normativa AEAT España 2026",
        description: "Verifactu obligatorio: qué es, fechas 2026-2027, sanciones y cómo adaptarte. Pilar definitivo para autónomos y pymes.",
        images: ["/og-verifactu-guia.jpg"],
        url: "https://verifactool.com/verifactu",
        type: "article",
    },
    alternates: {
        canonical: "https://verifactool.com/verifactu",
    },
};

export default function VerifactuPillarPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Qué es Verifactu: Guía Completa Normativa AEAT España 2026",
        "description": "Pilar Verifactu: definición, fechas, sanciones, requisitos y cómo cumplir.",
        "author": { "@type": "Organization", "name": "VerifacTool" },
        "publisher": { "@type": "Organization", "name": "VerifacTool" }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué es Verifactu?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sistema AEAT para facturas verificables con hash/QR. Obligatorio 2027." }
            },
            {
                "@type": "Question",
                "name": "¿Verifactu obligatorio autónomos?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sí, julio 2027. Excepción recibos agrarios." }
            }
        ]
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Cómo adaptarse a Verifactu",
        "step": [
            { "@type": "HowToStep", "text": "Audita software actual" },
            { "@type": "HowToStep", "text": "Elige Verifactu SÍ/NO" },
            { "@type": "HowToStep", "text": "Migra datos e importa facturas antiguas" },
            { "@type": "HowToStep", "text": "Capacita a tu equipo" },
            { "@type": "HowToStep", "text": "Testea con la AEAT" },
            { "@type": "HowToStep", "text": "Activa copias de seguridad" },
            { "@type": "HowToStep", "text": "Monitorea estados de facturación" }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://verifactool.com/" },
            { "@type": "ListItem", "position": 2, "name": "Verifactu", "item": "https://verifactool.com/verifactu" }
        ]
    };

    const sections = [
        { id: "que-es", title: "Qué es Verifactu" },
        { id: "a-quien-afecta", title: "A quién afecta" },
        { id: "cuando-entra", title: "Cuándo entra en vigor" },
        { id: "requisitos", title: "Requisitos técnicos" },
        { id: "sanciones", title: "Sanciones" },
        { id: "como-adaptarse", title: "Cómo adaptarse" },
        { id: "software-compatible", title: "Software compatible" },
    ];

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={howToSchema} />
            <JsonLd data={breadcrumbSchema} />

            <Navbar />

            <header className="hero-section pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <nav className="flex items-center justify-center gap-2 text-sm font-medium text-primary mb-6">
                            <Link href="/" className="hover:underline">Inicio</Link>
                            <ChevronRight size={14} />
                            <span>Verifactu</span>
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-8 leading-tight">
                            Qué es Verifactu: Guía Completa Normativa AEAT 2026
                        </h1>
                        <p className="text-xl text-text-body mb-8 leading-relaxed">
                            Descubre qué es Verifactu, el nuevo sistema obligatorio de la AEAT. Requisitos, fechas clave, sanciones y los pasos para adaptar tu negocio sin riesgos.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span>Actualizado: Feb 2026</span>
                            <span>•</span>
                            <span>Lectura: 15 min</span>
                            <span>•</span>
                            <span>Autor: Equipo VerifacTool</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-12 border-b border-slate-100 sticky top-[65px] bg-white/90 backdrop-blur-md z-30 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-6 overflow-x-auto no-scrollbar py-2 text-sm font-bold text-navy">
                        {sections.map(s => (
                            <a key={s.id} href={`#${s.id}`} className="hover:text-primary whitespace-nowrap transition-colors uppercase tracking-tight">
                                {s.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <article className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content */}
                        <div className="lg:w-2/3 space-y-24">

                            {/* Introduction */}
                            <section id="que-es" className="scroll-mt-32">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
                                    <Info size={14} /> Definición Oficial
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">¿Qué es Verifactu?</h2>
                                <div className="prose prose-slate max-w-none prose-headings:text-navy prose-p:text-text-body prose-p:text-lg prose-p:leading-relaxed space-y-6">
                                    <p>
                                        <strong>Verifactu</strong> es el Sistema de Verificación de Facturas impulsado por la Agencia Tributaria Española (AEAT), bajo el marco del <strong>Real Decreto 1007/2023</strong> y la <strong>Ley Antifraude 11/2021</strong>.
                                    </p>
                                    <p>
                                        Este nuevo estándar obliga a que todos los sistemas informáticos de facturación generen registros verificables que garanticen tres pilares fundamentales: <strong>integridad, inalterabilidad y trazabilidad</strong> de cada operación comercial.
                                    </p>

                                    <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 mt-10">
                                        <h3 className="text-xl font-bold text-navy mb-6">Objetivos clave de la normativa:</h3>
                                        <ul className="space-y-4">
                                            <li className="flex gap-3">
                                                <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                                                <span><strong>Combatir el fraude fiscal:</strong> Eliminar el uso de software de "doble uso" o contabilidades paralelas.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                                                <span><strong>Digitalización total:</strong> Implementación de códigos <strong>QR únicos</strong> y encadenamiento mediante <strong>hash SHA-256</strong>.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                                                <span><strong>Comunicación transparente:</strong> Posibilidad de envío automático a la AEAT para una fiscalidad en tiempo real.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="border-l-4 border-primary pl-6 py-2 italic text-navy font-medium bg-primary/5 rounded-r-2xl">
                                        Verifactu no es un software nuevo que debas comprar a la AEAT, sino un conjunto de requisitos que tu programa de facturación actual debe integrar y certificar (SIF homologado). Las facturas en Excel, Word o papel dejarán de ser válidas a partir de 2026-2027.
                                    </p>
                                </div>
                            </section>

                            {/* A quién afecta */}
                            <section id="a-quien-afecta" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-navy mb-10">¿A quién afecta Verifactu?</h2>
                                <p className="text-lg text-text-body mb-10">
                                    La normativa Verifactu es de aplicación casi universal en el territorio español (excepto País Vasco y Navarra, que cuentan con TicketBAI). Afecta a más de 3 millones de autónomos y al 99% de las pymes.
                                </p>

                                <div className="overflow-x-auto rounded-3xl border border-slate-200">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-navy text-white uppercase text-[10px] tracking-widest font-bold">
                                                <th className="p-5 border-b border-navy/10">Tipo Empresa</th>
                                                <th className="p-5 border-b border-navy/10">Obligado</th>
                                                <th className="p-5 border-b border-navy/10">Excepciones</th>
                                                <th className="p-5 border-b border-navy/10">Fecha Inicio</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="p-5 font-bold text-navy">Autónomos</td>
                                                <td className="p-5 text-success">✅ Todos (REGE, módulos, etc.)</td>
                                                <td className="p-5 text-slate-500 italic">Recibos agrarios</td>
                                                <td className="p-5 font-bold">1 julio 2027</td>
                                            </tr>
                                            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="p-5 font-bold text-navy">PYMES (SL/SA pequeñas)</td>
                                                <td className="p-5 text-success">✅ Obligado</td>
                                                <td className="p-5 text-slate-500 italic">Ninguna</td>
                                                <td className="p-5 font-bold">1 enero 2027</td>
                                            </tr>
                                            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="p-5 font-bold text-navy">Grandes Empresas</td>
                                                <td className="p-5 text-success">✅ Obligado</td>
                                                <td className="p-5 text-slate-500 italic">Ninguna</td>
                                                <td className="p-5 font-bold">1 enero 2027</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-8">
                                    <Link href="/verifactu/es-obligatorio-autonomos" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                        Ver detalles para autónomos <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </section>

                            {/* Cuándo entra en vigor */}
                            <section id="cuando-entra" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-navy mb-10">Calendario y Fechas Clave</h2>
                                <p className="text-lg text-text-body mb-12">
                                    Tras el Real Decreto de finales de 2025, el gobierno ajustó el calendario para dar margen de adaptación. Estas son las fechas definitivas:
                                </p>

                                <div className="relative pl-12 space-y-16 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                                    <div className="relative">
                                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-white border-4 border-primary z-10" />
                                        <h4 className="text-xl font-bold text-navy mb-2">2025 (29 jul)</h4>
                                        <p className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">Periodo transitorio voluntario</p>
                                        <p className="text-text-body">Fase de preparación. Las empresas pueden empezar a testear sus sistemas y los desarrolladores deben adaptar el software.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-white z-10" />
                                        <h4 className="text-xl font-bold text-navy mb-2">2027 (1 ene)</h4>
                                        <p className="font-bold text-navy mb-2 uppercase text-xs tracking-widest">Obligatorio Empresas / Pymes</p>
                                        <p className="text-text-body">Todas las sociedades jurídicas deben emitir facturas bajo el sistema Verifactu.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-white z-10" />
                                        <h4 className="text-xl font-bold text-navy mb-2">2027 (1 jul)</h4>
                                        <p className="font-bold text-navy mb-2 uppercase text-xs tracking-widest">Obligatorio Autónomos</p>
                                        <p className="text-text-body">Fecha límite de adaptación para profesionales en estimación directa y módulos.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-red-500 border-4 border-white z-10" />
                                        <h4 className="text-xl font-bold text-red-600 mb-2">2028 en adelante</h4>
                                        <p className="font-bold text-red-600 mb-2 uppercase text-xs tracking-widest">Sanciones Plenas</p>
                                        <p className="text-text-body">Comienzo de las inspecciones masivas y auditorías de registros digitales automáticas.</p>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <Link href="/verifactu/cuando-entra-en-vigor" className="btn-secondary">
                                        Ver detalle de plazos completos
                                    </Link>
                                </div>
                            </section>

                            {/* Requisitos técnicos */}
                            <section id="requisitos" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-navy mb-10">Requisitos Técnicos del Software</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Hash SHA-256", desc: "Encadenamiento de registros. Cada factura referencia a la anterior, haciendo imposible borrar facturas intermedias sin romper la cadena.", icon: <Code /> },
                                        { title: "QR Dinámico", desc: "Cada factura debe llevar un código QR con la URL de cotejo de la AEAT para que el cliente pueda verificarla al instante.", icon: <Smartphone /> },
                                        { title: "Registro Inalterable", desc: "Generación de ficheros de alta XML con firma electrónica que garantice que los datos no han sido manipulados.", icon: <ShieldAlert /> },
                                        { title: "Verifactu SÍ/NO", desc: "Opción de optar por el envío automático a la AEAT (Verifactu SÍ), lo que reduce las obligaciones de custodia.", icon: <FileText /> }
                                    ].map((req, i) => (
                                        <div key={i} className="p-8 rounded-[32px] border border-slate-100 bg-white">
                                            <div className="w-12 h-12 rounded-2xl bg-accent-blue text-primary flex items-center justify-center mb-6">
                                                {req.icon}
                                            </div>
                                            <h4 className="text-xl font-bold text-navy mb-4">{req.title}</h4>
                                            <p className="text-text-body text-sm leading-relaxed">{req.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <Link href="/verifactu/requisitos-tecnicos" className="text-primary font-bold hover:underline">
                                        Guía técnica completa para IT →
                                    </Link>
                                </div>
                            </section>

                            {/* Sanciones */}
                            <section id="sanciones" className="scroll-mt-32">
                                <div className="p-10 rounded-[40px] bg-red-50 border border-red-100 overflow-hidden relative">
                                    <div className="relative z-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase mb-6">
                                            <ShieldAlert size={14} /> Riesgos Fiscales
                                        </div>
                                        <h2 className="text-3xl font-bold text-navy mb-8">Sanciones por Incumplimiento</h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-red-100">
                                                <p className="text-[10px] font-bold text-red-500 uppercase mb-2">Software no homologado</p>
                                                <p className="text-lg font-bold text-navy mb-2">Hasta 50.000€</p>
                                                <p className="text-xs text-text-body">Por el simple hecho de tener instalado un software que permita la contabilidad paralela.</p>
                                            </div>
                                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-red-100">
                                                <p className="text-[10px] font-bold text-red-500 uppercase mb-2">Manipulación registros</p>
                                                <p className="text-lg font-bold text-navy mb-2">Hasta 150.000€</p>
                                                <p className="text-xs text-text-body">Por la alteración o destrucción de los registros inalterables ya generados.</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-text-body mb-8">
                                            Además de las multas económicas, utilizar software no-Verifactu (como Excel o Word) a partir de 2027 provocará que tus facturas sean <strong>inválidas fiscalmente</strong>, impidiéndote deducir gastos.
                                        </p>

                                        <Link href="/verifactu/sanciones" className="text-red-600 font-bold underline flex items-center gap-2">
                                            Ver listado completo de sanciones <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Cómo adaptarse */}
                            <section id="como-adaptarse" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-navy mb-10">Cómo adaptarse en 7 días</h2>
                                <div className="space-y-6">
                                    {[
                                        "Audita tu software actual: ¿Genera hash/QR? Pide el certificado de homologación.",
                                        "Elige modalidad (SÍ/NO): Verifactu SÍ se recomienda si emites facturas a diario.",
                                        "Migra tus datos: Importa tus facturas antiguas de forma segura para no perder el histórico.",
                                        "Capacita a tu equipo: Dedica 1 hora a entender los nuevos estados de facturación.",
                                        "Realiza un test: Emite facturas de prueba y verifica el QR con un móvil.",
                                        "Backups activos: Asegura que tus copias de seguridad son diarias y encriptadas."
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                                {i + 1}
                                            </div>
                                            <p className="text-text-body leading-relaxed">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Lead Magnet */}
                                <div className="mt-16 p-10 bg-gradient-to-br from-primary to-primary-hover rounded-[40px] text-white flex flex-col md:flex-row items-center gap-10">
                                    <div className="grow">
                                        <h4 className="text-2xl font-bold mb-4">Descarga el Checklist Verifactu</h4>
                                        <p className="text-white/80 mb-0">Guía paso a paso en PDF para que no se te escape ningún detalle legal.</p>
                                    </div>
                                    <button className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold shadow-xl whitespace-nowrap">
                                        <Download size={20} /> Descargar PDF
                                    </button>
                                </div>
                            </section>

                            {/* Software Compatible */}
                            <section id="software-compatible" className="scroll-mt-32">
                                <div className="bg-accent-blue rounded-[40px] p-12 text-center border border-primary/10">
                                    <h2 className="text-3xl font-bold text-navy mb-6">Software Compatible con Verifactu</h2>
                                    <p className="text-text-body mb-10 max-w-2xl mx-auto">
                                        No esperes a 2027. **VerifacTool** ya cumple con todos los requisitos del Reglamento Verifactu. Empieza a facturar con seguridad hoy mismo.
                                    </p>
                                    <Link href="/software-verifactu" className="btn-primary py-4 px-12 text-lg inline-flex items-center gap-3">
                                        Ver funciones VerifacTool <ArrowRight size={20} />
                                    </Link>
                                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale">
                                        {/* Partner logos or features icons */}
                                        <div className="text-navy font-bold text-[10px] uppercase tracking-widest">Hash SHA-256</div>
                                        <div className="text-navy font-bold text-[10px] uppercase tracking-widest">QR AEAT</div>
                                        <div className="text-navy font-bold text-[10px] uppercase tracking-widest">Sincro AEAT</div>
                                        <div className="text-navy font-bold text-[10px] uppercase tracking-widest">SIF Homologado</div>
                                    </div>
                                </div>
                            </section>

                            {/* Internal Links Silo */}
                            <section className="bg-slate-50 rounded-[40px] p-10">
                                <h4 className="text-xl font-bold text-navy mb-8">Índice del Silo Verifactu</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { name: "Qué es Verifactu", href: "/verifactu/que-es" },
                                        { name: "Cómo funciona", href: "/verifactu/como-funciona" },
                                        { name: "Cuándo entra en vigor", href: "/verifactu/cuando-entra-en-vigor" },
                                        { name: "Obligatorio autónomos", href: "/verifactu/es-obligatorio-autonomos" },
                                        { name: "Sanciones Verifactu", href: "/verifactu/sanciones" },
                                        { name: "Errores comunes", href: "/verifactu/errores-comunes" },
                                        { name: "Requisitos técnicos", href: "/verifactu/requisitos-tecnicos" },
                                        { name: "Software compatible", href: "/verifactu/software-compatible" }
                                    ].map((link, i) => (
                                        <Link key={i} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-primary group transition-all">
                                            <span className="text-sm font-bold text-navy group-hover:text-primary">{link.name}</span>
                                            <ChevronRight size={16} className="text-slate-300 group-hover:text-primary" />
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar / TOC */}
                        <aside className="lg:w-1/3 space-y-8">
                            <div className="bg-white border border-slate-100 rounded-[32px] p-8 sticky top-32 shadow-sm">
                                <h4 className="font-bold text-navy mb-8 flex items-center gap-2">
                                    <ListFilter size={18} /> Tabla de Contenidos
                                </h4>
                                <nav className="space-y-4 text-sm font-medium">
                                    {sections.map(s => (
                                        <a key={s.id} href={`#${s.id}`} className="block text-text-body hover:text-primary hover:pl-2 transition-all border-l-2 border-transparent hover:border-primary pl-0">
                                            {s.title}
                                        </a>
                                    ))}
                                </nav>

                                <hr className="my-8 border-slate-100" />

                                <div className="space-y-6">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">¿Necesitas ayuda?</p>
                                    <div className="bg-primary p-6 rounded-2xl text-white">
                                        <p className="text-sm font-bold mb-4">Adaptamos tu empresa a Verifactu gratis.</p>
                                        <Link href="/demo" className="text-xs bg-white text-primary px-4 py-2 rounded-full font-bold block text-center">
                                            Solicitar Asesoría
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </article>

            {/* FAQ Bottom */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-navy text-center mb-16">Preguntas Frecuentes sobre Verifactu</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { q: "¿Qué es Verifactu?", a: "Es el nuevo sistema de la AEAT para garantizar que las facturas no se manipulan ni borran gracias a códigos QR y registros encadenados." },
                            { q: "¿Es obligatorio para autónomos?", a: "Sí, a partir del 1 de julio de 2027. Las pymes deben adaptarse antes, el 1 de enero de 2027." },
                            { q: "¿Hay sanciones por seguir usando Excel?", a: "Sí, Excel no cumple los criterios de inalterabilidad. Las facturas no serán válidas y habrá multas de hasta 50.000€ por software no homologado." },
                            { q: "¿Cuál es la diferencia entre Verifactu SÍ y NO?", a: "Verifactu SÍ envía automáticamente las facturas a la AEAT al emitirlas. El NO solo mantiene los registros locales para una posible auditoría." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                <details className="group">
                                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-navy">
                                        {faq.q}
                                        <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-6 pt-0 text-text-body border-t border-slate-50">
                                        {faq.a}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy mb-8">¿Listo para Verifactu?</h2>
                    <Link href="/precios" className="btn-primary py-4 px-12 text-lg inline-flex items-center gap-3">
                        Probar VerifacTool Gratis <Zap size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ChevronDown({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
