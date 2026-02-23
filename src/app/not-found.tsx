import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Home, ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-24 flex flex-col items-center justify-center text-center px-4">
                <div className="relative mb-8">
                    <div className="text-[180px] font-extrabold text-slate-50 leading-none">404</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AlertTriangle size={80} className="text-primary animate-bounce" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">
                    Página no encontrada
                </h1>

                <p className="text-xl text-text-body max-w-lg mx-auto mb-12">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida. Puedes volver al inicio o explorar nuestro pilar de Verifactu.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/" className="btn-primary py-4 px-10 flex items-center gap-2 text-lg">
                        <Home size={20} /> Volver al Inicio
                    </Link>
                    <Link href="/verifactu" className="btn-secondary py-4 px-10 flex items-center gap-2 text-lg">
                        <Search size={20} /> Guía Verifactu
                    </Link>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
                    {[
                        { title: "Sanciones", desc: "¿Cuáles son los riesgos?", href: "/verifactu/sanciones" },
                        { title: "Cuándo empieza", desc: "Fechas oficiales 2027", href: "/verifactu/cuando-entra-en-vigor" },
                        { title: "Software", desc: "Soluciones homologadas", href: "/software-verifactu" }
                    ].map((item, i) => (
                        <Link key={i} href={item.href} className="p-8 rounded-[32px] border border-slate-100 bg-slate-50 hover:border-primary/30 transition-all group">
                            <h4 className="font-bold text-navy mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                            <p className="text-sm text-text-body">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
