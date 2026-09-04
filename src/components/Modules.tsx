"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Calculator, Users, Clock, ArrowRight } from "lucide-react";

const modules = [
    {
        title: "Facturación Verifactu sin errores",
        description: "Módulo Fiscal y Facturación",
        bullets: [
            { text: "Registro Veri*Factu en la AEAT", soon: false },
            { text: "QR reglamentario en cada PDF", soon: false },
            { text: "Rectificativas y anulaciones", soon: false },
        ],
        icon: <FileText className="text-primary" size={24} />,
        href: "/software-facturacion/verifactu",
        cta: "Ver detalles de Verifactu",
    },
    {
        title: "Gastos, IVA y modelos sin Excel",
        description: "Módulo Contable y Gastos",
        bullets: [
            { text: "Gastos por categoría contable", soon: false },
            { text: "Lectura de tickets con OCR", soon: true },
            { text: "Borradores de modelos 303 y 130", soon: true },
        ],
        icon: <Calculator className="text-primary" size={24} />,
        href: "/software-contabilidad-online",
        cta: "Ver contabilidad online",
    },
    {
        title: "Del presupuesto a la factura en un clic",
        description: "Módulo CRM y Ventas",
        bullets: [
            { text: "Presupuestos a factura en un clic", soon: false },
            { text: "Ficha de cliente con notas y avisos", soon: false },
            { text: "Portal del cliente para autogestión", soon: true },
        ],
        icon: <Users className="text-primary" size={24} />,
        href: "/software-crm-online",
        cta: "Saber más",
    },
    {
        title: "Cobros automáticos y suscripciones",
        description: "Automatización y Cobros",
        bullets: [
            { text: "Envío de la factura por email al emitir", soon: false },
            { text: "Facturas recurrentes automáticas", soon: true },
            { text: "Pagos online con Stripe", soon: true },
        ],
        icon: <Clock className="text-primary" size={24} />,
        href: "/precios",
        cta: "Ver planes y precios",
    },
];

const Modules = () => {
    return (
        <section className="py-24 bg-white" id="modulos">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        Mucho más que Verifactu: tu mini-ERP online
                    </h2>
                    <p className="text-text-body text-lg">
                        No es solo un programa de facturación, es el sistema operativo financiero que tu negocio necesita para crecer sin preocupaciones legales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {modules.map((m, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="feature-card p-8 group cursor-pointer"
                        >
                            <Link href={m.href} className="flex flex-col h-full">
                                <div className="w-12 h-12 rounded-2xl bg-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {m.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-2">{m.title}</h3>
                                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 opacity-70">
                                    {m.description}
                                </p>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {m.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-text-body text-sm leading-relaxed">
                                            <div className={`h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 ${bullet.soon ? "bg-text-body/25" : "bg-primary"}`} />
                                            <span className={bullet.soon ? "text-text-body/60" : undefined}>
                                                {bullet.text}
                                                {bullet.soon && (
                                                    <span className="ml-2 align-middle text-[10px] font-bold uppercase tracking-wider text-text-body/45 whitespace-nowrap">
                                                        En camino · Q1 2027
                                                    </span>
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                                    {m.cta} <ArrowRight size={16} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/software-facturacion/verifactu" className="text-navy font-bold hover:text-primary transition-colors flex items-center justify-center gap-2">
                        Ver todas las funciones <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Modules;
