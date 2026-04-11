import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import {
    ArrowRight,
    Rocket,
    Smartphone,
    Briefcase,
    ShieldCheck,
    BarChart2,
    Plus,
    CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Software de Facturación Online: Homologado Verifactu | VerifacTool",
    description: "Digitaliza tu negocio con el software de facturación online líder en cumplimiento Verifactu. Especializado para autónomos y pymes en España. ¡Prueba gratis!",
    openGraph: {
        title: "Software Facturación Online España: Homologado AEAT",
        description: "Encuentra la solución de facturación perfecta para tu perfil. Autónomos, Pymes y Asesorías.",
        url: "https://verifactool.com/software-facturacion",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/software-facturacion",
    }
};

const solutions = [
    {
        title: "Para Autónomos",
        desc: "Sencillez radical. Factura desde el móvil, saca fotos a tus tickets con OCR y cumple la ley sin esfuerzo.",
        href: "/software-facturacion/autonomos",
        icon: <Smartphone size={24} />,
        price: "15€/mes"
    },
    {
        title: "Para PYMES",
        desc: "Control total multiusuario. Gestión de clientes, conciliación bancaria y analítica avanzada para tu empresa.",
        href: "/software-facturacion/pymes",
        icon: <Briefcase size={24} />,
        price: "29€/mes"
    },
    {
        title: "Software Verifactu",
        desc: "Nuestra solución 100% nativa para la nueva normativa AEAT. Garantía legal absoluta y soporte experto.",
        href: "/software-facturacion/verifactu",
        icon: <ShieldCheck size={24} />,
        price: "Desde 12€/mes"
    }
];

export default function SoftwareFacturacionHub() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Hub */}
            <header className="pt-32 pb-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6 tracking-widest">
                            <Rocket size={14} /> Soluciones 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight mb-8">
                            Elige el <span className="text-primary">software de facturación</span> ideal para ti
                        </h1>
                        <p className="text-xl text-text-body max-w-2xl mx-auto mb-4 font-medium">
                            Encuentra la herramienta diseñada específicamente para tu forma de trabajar.
                        </p>
                    </div>
                </div>
            </header>

            {/* Solution Selector */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {solutions.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="group p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-14 h-14 bg-accent-blue rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-text-body text-sm leading-relaxed mb-8">{item.desc}</p>
                                </div>
                                <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                                    <span className="font-black text-navy">{item.price}</span>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                        <Plus size={20} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Digitalize */}
            <section className="py-24 bg-navy text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Mucho más que emitir una factura PDF</h2>
                            <p className="text-lg text-white/70 mb-10">El software de facturación moderno es el cerebro de tu negocio. Automatiza tareas tediosas para que puedas centrarte en vender más.</p>
                            <div className="space-y-6">
                                {[
                                    { t: "Impuestos controlados", d: "Sabes cuánto IVA tendrás que pagar mañana, no el trimestre que viene." },
                                    { t: "Cobros sin pérdidas", d: "Recordatorios de pago automáticos para tus clientes olvidadizos." },
                                    { t: "Seguridad Verifactu", d: "Cumplimiento legal garantizado por diseño, sin parches de última hora." }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{benefit.t}</h4>
                                            <p className="text-sm text-white/50">{benefit.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-tr from-white/5 to-white/10 rounded-[60px] border border-white/5 p-12 flex items-center justify-center">
                                <BarChart2 size={200} className="text-primary opacity-40 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Silo Authority Link Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h3 className="text-2xl font-bold text-navy mb-10">¿Buscas algo más específico?</h3>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {[
                            { n: "Comparativa vs Holded", h: "/comparativas/holded-alternativa" },
                            { n: "Cómo Funciona Verifactu", h: "/verifactu/como-funciona" },
                            { n: "Contabilidad Online", h: "/software-contabilidad-online" },
                            { n: "Ver todos los precios", h: "/precios" }
                        ].map((btn, i) => (
                            <Link key={i} href={btn.h} className="px-8 py-3 bg-slate-50 rounded-full border border-slate-200 text-sm font-bold text-navy hover:border-primary hover:text-primary transition-all">
                                {btn.n}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
