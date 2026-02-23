"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Zap,
    ArrowRight,
    ShieldCheck,
    Database,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

function DemoForm() {
    const searchParams = useSearchParams();
    const selectedPlan = searchParams.get("plan") || "starter";

    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        plan: selectedPlan,
        message: ""
    });

    React.useEffect(() => {
        if (selectedPlan) {
            setFormData(prev => ({ ...prev, plan: selectedPlan }));
        }
    }, [selectedPlan]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-bold text-navy">¡Solicitud recibida!</h3>
                <p className="text-text-body">
                    Gracias por tu interés en VerifacTool. Hemos recibido tus datos y un experto se pondrá en contacto contigo en breve para configurar tu prueba de 7 días.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-primary font-bold hover:underline pt-4 block w-full"
                >
                    Enviar otra solicitud
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-2">Nombre</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Ej. Juan"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-navy"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-2">Apellidos</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Ej. García"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-navy"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-navy ml-2">Email Profesional</label>
                <input
                    type="email"
                    name="email"
                    placeholder="juan@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-navy"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-navy ml-2">Plan Interesado</label>
                <div className="relative">
                    <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none appearance-none transition-all cursor-pointer font-medium text-navy"
                    >
                        <option value="starter">Plan Starter - Autónomos (15€/mes)</option>
                        <option value="growth">Plan Growth - Pymes (29€/mes)</option>
                        <option value="asesorias">Plan Especial Asesorías (69€/mes)</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                        <Zap size={16} />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-navy ml-2">Mensaje (Opcional)</label>
                <textarea
                    name="message"
                    placeholder="Cuéntanos un poco más sobre tu negocio o dudas que tengas..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none font-medium text-navy"
                />
            </div>

            {status === "error" && (
                <p className="text-red-500 text-sm font-bold text-center">
                    Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.
                </p>
            )}

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary py-5 text-lg font-extrabold shadow-primary/30 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Enviando..." : "Solicitar mi prueba gratuita"}
                    {status !== "loading" && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-4 px-6 leading-relaxed">
                    Recibirás un email en menos de 24h para terminar de configurar tu cuenta y resolver cualquier duda técnica.
                </p>
            </div>
        </form>
    );
}

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero / Form Section */}
            <section className="pt-32 pb-24 bg-gradient-to-b from-accent-blue to-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side: Copy */}
                        <div className="flex-1 max-w-2xl text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6 tracking-widest">
                                <Zap size={14} /> Acceso Instantáneo
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-8">
                                Prueba VerifacTool <span className="text-primary underline decoration-primary/20">gratis</span> por 7 días
                            </h1>
                            <p className="text-xl text-text-body mb-10 leading-relaxed">
                                Descubre por qué miles de autónomos y pymes eligen VerifacTool para cumplir con Verifactu sin complicaciones técnicas. Te ayudamos con la puesta en marcha inicial.
                            </p>

                            <div className="space-y-6 text-left max-w-md mx-auto lg:mx-0">
                                {[
                                    { icon: <ShieldCheck className="text-primary" size={20} />, text: "100% Homologado con normativa AEAT" },
                                    { icon: <Zap className="text-primary" size={20} />, text: "Activación inmediata con soporte humano" },
                                    { icon: <Database className="text-primary" size={20} />, text: "Migración inicial desde tu software actual" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center p-4 bg-white/50 rounded-2xl border border-white">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-navy">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Demo Form */}
                        <div className="flex-1 w-full max-w-xl">
                            <div className="bg-white rounded-[48px] p-8 md:p-12 shadow-2xl border border-slate-100 relative">
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary text-white rounded-full flex flex-col items-center justify-center rotate-12 shadow-xl border-4 border-white font-bold leading-none">
                                    <span className="text-xs">SOLO</span>
                                    <span className="text-2xl tracking-tighter">7</span>
                                    <span className="text-[10px]">DÍAS</span>
                                </div>

                                <h2 className="text-2xl font-bold text-navy mb-8 text-center">Configura tu demo</h2>

                                <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando formulario...</div>}>
                                    <DemoForm />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative background blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </section>

            {/* Testimonials or Trust Bar */}
            <section className="py-24 bg-white border-y border-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-extrabold text-navy mb-2">+12k</div>
                            <p className="text-sm text-text-body font-medium uppercase tracking-widest">Facturas procesadas</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-extrabold text-navy mb-2">100%</div>
                            <p className="text-sm text-text-body font-medium uppercase tracking-widest">Cumplimiento AEAT</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-extrabold text-navy mb-2">4.9/5</div>
                            <p className="text-sm text-text-body font-medium uppercase tracking-widest">Valoración usuarios</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
