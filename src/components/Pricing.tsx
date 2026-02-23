"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "15€",
        period: "/mes",
        description: "El gancho perfecto para cumplir la ley sin complicaciones.",
        features: [
            { text: "Facturación Verifactu ilimitada (QR + Hash)", included: true },
            { text: "Clientes ilimitados", included: true },
            { text: "Plantillas PDF básicas", included: true },
            { text: "Envío automático por email", included: true },
            { text: "Entrada de gastos manual (Sin OCR)", included: false },
            { text: "Sin conciliación bancaria", included: false },
            { text: "Sin generación de modelos impuestos", included: false },
        ],
        buttonText: "Prueba 14 días Gratis",
        popular: false,
        href: "/demo?plan=starter",
    },
    {
        name: "Growth",
        price: "29€",
        period: "/mes",
        description: "La herramienta de gestión real para negocios que crecen.",
        features: [
            { text: "Todo lo del plan Starter", included: true },
            { text: "Gastos con OCR (Lectura automática)", included: true },
            { text: "Conciliación bancaria automática", included: true },
            { text: "Modelos 303 y 130 autorellenos", included: true },
            { text: "CRM Pro: Portal y Pagos Online", included: true },
            { text: "Soporte Prioritario", included: true },
        ],
        buttonText: "Prueba 14 días Gratis",
        popular: true,
        href: "/demo?plan=growth",
    },
    {
        name: "Asesorías",
        price: "69€",
        period: "/mes",
        description: "Control centralizado para gestionar a todos tus clientes.",
        features: [
            { text: "Multi-tenant: Todos tus clientes", included: true },
            { text: "Visión fiscal consolidada", included: true },
            { text: "Exportación a A3 / Contasol", included: true },
            { text: "White-label (Tu marca)", included: true },
            { text: "API para integraciones", included: true },
            { text: "Gestor de cuenta dedicado", included: true },
        ],
        buttonText: "Contactar Ventas",
        popular: false,
        href: "/demo?plan=asesorias",
    },
];

const Pricing = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]" id="precios">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        Elige el plan que mejor encaja con tu negocio
                    </h2>
                    <p className="text-text-body text-lg">
                        Empieza gratis y paga solo cuando tu facturación y equipo lo necesiten.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {plans.map((p, i) => (
                        <div
                            key={i}
                            className={cn(
                                "relative flex flex-col p-8 bg-white rounded-[32px] border transition-all duration-300",
                                p.popular
                                    ? "border-primary shadow-xl ring-1 ring-primary/20 scale-105 z-10"
                                    : "border-gray-200 hover:border-primary/40"
                            )}
                        >
                            {p.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                                    Recomendado
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-navy mb-2">{p.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold text-navy">{p.price}</span>
                                    <span className="text-text-body font-medium">{p.period}</span>
                                </div>
                                <p className="text-sm text-text-body leading-relaxed">{p.description}</p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow text-left">
                                {p.features.map((f, idx) => (
                                    <li key={idx} className={cn(
                                        "flex items-start gap-3 text-sm transition-opacity",
                                        f.included ? "text-text-body" : "text-text-body/50"
                                    )}>
                                        {f.included ? (
                                            <Check className="text-success mt-0.5 flex-shrink-0" size={18} />
                                        ) : (
                                            <span className="text-red-400 mt-0.5 flex-shrink-0 font-bold w-[18px] text-center">✕</span>
                                        )}
                                        <span>{f.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={p.href}
                                className={cn(
                                    "w-full py-4 px-6 rounded-full font-bold text-center transition-all duration-200",
                                    p.popular
                                        ? "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover"
                                        : "bg-white border border-gray-200 text-navy hover:bg-gray-50"
                                )}
                            >
                                {p.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/precios" className="text-primary font-bold hover:underline">
                        Ver tabla comparativa completa →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
