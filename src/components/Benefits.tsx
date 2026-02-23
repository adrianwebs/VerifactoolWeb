"use client";

import React from "react";
import { Zap, BarChart3, HeartHandshake } from "lucide-react";

const benefits = [
    {
        title: "Menos tareas administrativas",
        bullets: [
            "Centraliza facturas, gastos y clientes en un solo panel.",
            "Olvídate de teclear tickets: súbelos con el móvil y deja que el OCR trabaje.",
            "Busca cualquier dato con el buscador global (Cmd/Ctrl+K).",
        ],
        icon: <Zap className="text-primary" />,
    },
    {
        title: "Control financiero en tiempo real",
        bullets: [
            "Dashboard con facturación, gastos y beneficio actualizado.",
            "IVA e IRPF estimados antes de llegar al trimestre.",
            "Visión clara del flujo de caja de tu negocio.",
        ],
        icon: <BarChart3 className="text-primary" />,
    },
    {
        title: "Mejor relación con tus clientes",
        bullets: [
            "Pipeline de ventas para no olvidar ninguna oportunidad.",
            "Presupuestos profesionales y facturas en un clic.",
            "Portal cliente para descargar facturas y pagar online.",
        ],
        icon: <HeartHandshake className="text-primary" />,
    },
];

const Benefits = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="beneficios">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        De facturas sueltas a control total de tu negocio
                    </h2>
                    <p className="text-text-body text-lg">
                        VerifacTool transforma tu estrés administrativo en una ventaja competitiva.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {benefits.map((b, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-accent-blue flex items-center justify-center mb-8">
                                {b.icon}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-6">{b.title}</h3>
                            <ul className="space-y-4">
                                {b.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-text-body text-sm leading-relaxed">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <div className="bg-navy rounded-[40px] p-8 md:p-16 text-white overflow-hidden">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-bold mb-6">Tu negocio, visualizado como nunca</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    El dashboard de VerifacTool está diseñado para darte respuestas rápidas: ¿Cuánto he facturado? ¿Cuánto me queda después de gastos? ¿Quién me debe dinero?
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-gray-700 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-400">Join +500 companies growing with VerifacTool</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="bg-white/5 backdrop-blur-sm rounded-[32px] p-6 border border-white/10 shadow-2xl">
                                    <div className="aspect-video bg-navy/50 rounded-2xl border border-white/5 flex items-center justify-center">
                                        <p className="text-white/20 font-bold uppercase tracking-widest">Dashboard Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
