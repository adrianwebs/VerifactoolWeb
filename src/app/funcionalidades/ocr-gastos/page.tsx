import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import {
    Scan,
    Camera,
    Smartphone,
    Zap,
    CloudIcon,
    ShieldCheck,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Software OCR Gastos: Digitaliza tus tickets automáticamente | VerifacTool",
    description: "Deja de picar facturas. Usa el lector OCR de VerifacTool para digitalizar tus tickets y facturas de gasto con solo una foto. ¡Ahorra horas cada mes!",
    openGraph: {
        title: "OCR Gastos: El fin de la entrada de datos manual",
        description: "Tecnología inteligente para que no vuelvas a picar una factura de gasto jamás.",
        url: "https://verifactool.com/funcionalidades/ocr-gastos",
        siteName: "VerifacTool",
        type: "website",
    },
    alternates: {
        canonical: "https://verifactool.com/funcionalidades/ocr-gastos",
    }
};

export default function OcrGastosPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section with Visionary Mockup style */}
            <header className="pt-32 pb-20 bg-gradient-to-tr from-slate-50 via-white to-slate-100 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase mb-8 tracking-widest">
                                <Scan size={14} /> En desarrollo · disponible en Q1 2027
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight mb-8">
                                Haz una foto, <br /> <span className="text-primary italic">nosotros hacemos el resto</span>
                            </h1>
                            <p className="text-xl text-text-body mb-6 leading-relaxed">
                                Nuestro motor OCR avanzado extrae automáticamente la fecha, el proveedor, la base imponible y el IVA de tus facturas y tickets en segundos.
                            </p>
                            <p className="text-lg text-text-body/70 mb-8">
                                Sin errores humanos. Sin teclados. Simplemente eficacia.
                            </p>
                            <div className="mb-10 p-5 rounded-2xl bg-amber-50 border border-amber-200">
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    <strong>Todavía no está disponible.</strong> El OCR llega en Q1 2027 e irá incluido
                                    en todos los planes sin coste adicional. Hoy los gastos se registran a mano con su
                                    base, IVA e IRPF, y esa parte ya funciona. Preferimos decírtelo antes de que pagues.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link href="/demo" className="btn-primary py-5 px-12 text-lg w-full sm:w-auto shadow-2xl shadow-primary/20 hover:scale-105 transition-all text-center font-bold">
                                    Avísame cuando esté listo
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Abstract Mobile Scanner Visual */}
                            <div className="relative w-full max-w-[400px] mx-auto">
                                <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                                <div className="relative bg-navy rounded-[48px] p-6 shadow-2xl border border-white/20 aspect-[9/18]">
                                    <div className="h-full w-full rounded-[38px] bg-slate-200 overflow-hidden relative border-4 border-slate-800">
                                        {/* Mockup content */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                            <Scan className="text-primary" size={80} />
                                        </div>
                                        <div className="absolute bottom-10 left-0 right-0 px-6">
                                            <div className="bg-white rounded-2xl p-4 shadow-xl translate-y-2">
                                                <div className="h-2 bg-slate-100 rounded w-1/2 mb-2"></div>
                                                <div className="h-4 bg-primary/20 rounded w-3/4 mb-4"></div>
                                                <div className="flex justify-between">
                                                    <div className="h-4 bg-navy/20 rounded w-1/4"></div>
                                                    <div className="h-4 bg-success/20 rounded w-1/4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Workflow steps */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy">Digitalización en 3 pasos</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Captura",
                                desc: "Usa nuestra App móvil para fotografiar el ticket o sube un PDF de tu proveedor directamente ."
                            },
                            {
                                step: "02",
                                title: "Procesado",
                                desc: "Nuestra IA analiza los datos en menos de 2 segundos, extrayendo impuestos, fechas y conceptos."
                            },
                            {
                                step: "03",
                                title: "Contabilizado",
                                desc: "El gasto se guarda automáticamente en tu contabilidad y el documento queda custodiado en la nube."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative p-8 text-center group">
                                <div className="text-6xl font-black text-slate-50 absolute top-0 left-1/2 -translate-x-1/2 -z-10 group-hover:text-primary/10 transition-colors">{item.step}</div>
                                <h3 className="text-2xl font-bold text-navy mb-4 pt-10">{item.title}</h3>
                                <p className="text-text-body text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Powerful Stats */}
            <section className="py-24 bg-navy text-white my-20 rounded-t-[60px]">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Optimizado para <br /><span className="text-primary italic">auditorías sin estrés</span></h2>
                            <p className="text-lg text-white/70 mb-10 leading-relaxed">
                                No solo extraemos los datos; guardamos una copia digital certificada del ticket. Si Hacienda te solicita información en el futuro, tendrás todas tus facturas de gasto organizadas y accesibles en 10 segundos.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-success" size={20} />
                                    <span>Exportación mensual en 1 clic para tu gestor.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-success" size={20} />
                                    <span>Buscador inteligente por proveedor o fecha.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-success" size={20} />
                                    <span>Certificación de inalterabilidad Verifactu.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 text-center">
                                <div className="text-4xl font-black text-primary mb-2">99%</div>
                                <div className="text-xs uppercase font-bold text-white/50 tracking-widest">Precisión IA</div>
                            </div>
                            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 text-center">
                                <div className="text-4xl font-black text-primary mb-2">-80%</div>
                                <div className="text-xs uppercase font-bold text-white/50 tracking-widest">Tiempo gestión</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA with Silo depth */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-navy mb-10">¿Listo para dejar de picar facturas?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                        <Link href="/demo" className="btn-primary py-5 px-15 text-xl font-bold">Probar OCR Gratis</Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {[
                            { n: "Factura Electrónica", h: "/funcionalidades/facturacion-electronica" },
                            { n: "Software para Autónomos", h: "/software-facturacion/autonomos" },
                            { n: "Verifactu 2026", h: "/verifactu" },
                            { n: "Consultar Precios", h: "/precios" }
                        ].map((btn, i) => (
                            <Link key={i} href={btn.h} className="px-6 py-2 bg-slate-50 rounded-full border border-slate-200 text-xs font-bold text-navy hover:border-primary hover:text-primary transition-all uppercase tracking-wider">
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
