import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import {
    Users,
    Heart,
    BarChart3,
    PieChart,
    MessageSquare,
    Zap,
    ShieldCheck,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Software CRM Online para Pymes y Autónomos 2026 | VerifacTool",
    description: "Gestiona tus clientes y facturación en un solo lugar. El CRM online más sencillo para controlar ventas, presupuestos y cumplimiento Verifactu. ¡Pruébalo gratis!",
    openGraph: {
        title: "CRM Integrado con Facturacion Verifactu",
        description: "Controla el ciclo de vida de tus clientes desde el primer contacto hasta el cobro de la factura.",
        url: "https://verifactool.com/software-crm-online",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/software-crm-online",
    }
};

export default function CrmOnlinePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Premium CRM Hero */}
            <header className="pt-32 pb-24 bg-navy text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase mb-8 tracking-widest">
                            <Heart size={14} className="fill-primary" /> Relaciones que facturan
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                            El <span className="text-primary italic">CRM</span> que entiende tu facturación
                        </h1>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed">
                            No pierdas oportunidades por falta de seguimiento. VerifacTool combina la gestión de contactos con la potencia de Verifactu para que vendas más y cobres antes.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link href="/demo" className="btn-primary py-5 px-12 text-lg w-full sm:w-auto shadow-2xl shadow-primary/20 hover:scale-105 transition-all text-center">
                                Empezar gratis
                            </Link>
                            <Link href="/precios" className="text-white/80 hover:text-white font-bold transition-colors">
                                Ver planes y precios
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[160px]" />
                </div>
            </header>

            {/* CRM Features */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Todo lo que necesitas para crecer</h2>
                    <p className="text-text-body">Simplificamos la gestión de clientes para que no te quite tiempo de lo importante.</p>
                </div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users size={28} />,
                                title: "Ficha de Cliente 360",
                                desc: "Accede a todo el historial: emails, presupuestos enviados, facturas pagadas y deudas pendientes en una sola pantalla."
                            },
                            {
                                icon: <PieChart size={28} />,
                                title: "Pipeline de Ventas",
                                desc: "Visualiza tus oportunidades y mueve a tus clientes por las distintas fases de venta de forma intuitiva."
                            },
                            {
                                icon: <MessageSquare size={28} />,
                                title: "Presupuestos en 1 Clic",
                                desc: "Crea presupuestos profesionales desde la ficha del cliente y conviértelos en facturas Verifactu automáticamente tras la aceptación."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-12 rounded-[48px] bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all group text-center lg:text-left">
                                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-primary mb-8 mx-auto lg:mx-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
                                <p className="text-text-body text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Integrated Advantage */}
            <section className="py-24 bg-accent-blue/5 border-y border-accent-blue/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <div className="bg-white p-1 rounded-[40px] shadow-2xl">
                                <div className="bg-navy rounded-[38px] p-8">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center text-white/50 text-xs uppercase font-black tracking-widest">
                                            <span>Actividad Reciente</span>
                                            <Zap size={14} className="text-primary" />
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="text-primary text-xs font-bold mb-1">Presupuesto aceptado</div>
                                            <div className="text-white font-medium">Diseño Web - TechSolutions S.L.</div>
                                        </div>
                                        <div className="p-4 bg-primary/20 rounded-2xl border border-primary/20">
                                            <div className="text-primary text-xs font-bold mb-1">FACTURA GENERADA</div>
                                            <div className="text-white font-medium">Factura #2024-082 (Homologada)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 leading-tight">Por qué separar <br /> el CRM de la facturación es un error</h2>
                            <p className="text-lg text-text-body mb-8 leading-relaxed">
                                Usar herramientas distintas te obliga a duplicar datos, aumenta el riesgo de errores y te impide ver la salud real de tu negocio.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Sincronización instantánea de datos de contacto.",
                                    "Conversión directa de Oportunidad a Factura.",
                                    "Analítica unificada de ventas y cobros.",
                                    "Cumplimiento Verifactu en cada documento generado."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-success" size={20} />
                                        <span className="font-bold text-navy text-md">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-navy mb-6 italic">Haz crecer tu negocio hoy</h2>
                    <p className="text-text-body text-lg mb-12 max-w-2xl mx-auto">Más de 500 autónomos y pymes ya usan nuestro CRM integrado para controlar su negocio de principio a fin.</p>
                    <Link href="/demo" className="btn-primary py-5 px-20 text-xl font-black rounded-3xl shadow-2xl shadow-primary/20">Prueba Gratis VerifacTool</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
