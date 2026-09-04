"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
    {
        name: "Autónomo",
        price: "12,90€",
        period: "/mes",
        yearly: "129€/año — dos meses gratis",
        description: "Cumple Verifactu y lleva el control de tu negocio con un solo NIF.",
        features: [
            { text: "Facturas y presupuestos ilimitados", included: true },
            { text: "Registro Veri*Factu en la AEAT con QR", included: true },
            { text: "Clientes y proveedores ilimitados", included: true },
            { text: "PDF con tu logo y envío por email", included: true },
            { text: "Registro manual de gastos por categoría", included: true },
            { text: "Facturas rectificativas y anulaciones", included: true },
        ],
        soon: ["Gastos con OCR", "Modelos 303 y 130"],
        buttonText: "Prueba 14 días gratis",
        popular: false,
        href: "/demo?plan=autonomo",
    },
    {
        name: "Negocio",
        price: "24,90€",
        period: "/mes",
        yearly: "249€/año — dos meses gratis",
        description: "Para pymes con equipo que además quieren cerrar el círculo fiscal.",
        features: [
            { text: "Todo lo del plan Autónomo", included: true },
            { text: "Hasta 5 usuarios con permisos", included: true },
            { text: "Acceso de solo lectura para tu asesor", included: true },
            { text: "Series de facturación personalizadas", included: true },
            { text: "Exportación de libros registro", included: true },
            { text: "Soporte prioritario", included: true },
        ],
        soon: ["Gastos con OCR", "Modelos 303, 130 y 347", "Conciliación bancaria"],
        buttonText: "Prueba 14 días gratis",
        popular: true,
        href: "/demo?plan=negocio",
    },
    {
        name: "Asesoría",
        price: "6,90€",
        period: "/NIF al mes",
        yearly: "Mínimo 10 NIF — desde 69€/mes",
        description: "Todos tus clientes y su estado con la AEAT en una sola pantalla.",
        features: [
            { text: "Cambio de NIF sin cerrar sesión", included: true },
            { text: "Consola Verifactu de todos tus clientes", included: true },
            { text: "Alta y baja de NIF cuando la necesites", included: true },
            { text: "Usuarios ilimitados de tu despacho", included: true },
            { text: "Exportación consolidada en Excel", included: true },
            { text: "Onboarding y migración acompañados", included: true },
        ],
        soon: ["Exportación a A3 y Contasol", "API para integraciones"],
        buttonText: "Hablamos 20 minutos",
        popular: false,
        href: "/demo?plan=asesoria",
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
                        14 días de prueba sin tarjeta y sin permanencia. Lo que está construido aparece con un check; lo que llega después, en «En camino».
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
                                <p className="text-xs font-semibold text-primary mb-3">{p.yearly}</p>
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

                            {p.soon.length > 0 && (
                                <div className="mb-8 -mt-4 pt-5 border-t border-dashed border-gray-200 text-left">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-body/50 mb-2">
                                        En camino · Q1 2027
                                    </p>
                                    <p className="text-xs text-text-body/70 leading-relaxed">
                                        {p.soon.join(" · ")}
                                    </p>
                                </div>
                            )}

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
