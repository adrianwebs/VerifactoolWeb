"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import JsonLd from "./SEO/JsonLd";

const faqs = [
    {
        question: "¿Qué es Verifactu y por qué necesito un software compatible?",
        answer: "Verifactu es el reglamento de la AEAT (RD 1007/2023) que obliga a los sistemas de facturación a garantizar la integridad, conservación e inalterabilidad de los registros. Tras la prórroga del RD-ley 15/2025, será obligatorio usar un software que cumpla estos requisitos desde el 1 de enero de 2027 para sociedades y desde el 1 de julio de 2027 para autónomos.",
    },
    {
        question: "¿VerifacTool cumple la normativa Verifactu de la AEAT?",
        answer: "Sí. VerifacTool registra cada factura en la AEAT en modo Veri*Factu a través de un colaborador social homologado, con encadenamiento, huella y el código QR reglamentario impreso en el PDF.",
    },
    {
        question: "¿Puedo migrar mis datos desde Excel u otro programa de facturación?",
        answer: "Sí. Te acompañamos en la migración: nos pasas tu listado de clientes y tu histórico y lo dejamos cargado antes de que empieces. La importación autoservicio llegará en Q1 2027.",
    },
    {
        question: "¿VerifacTool sirve tanto para autónomos como para pymes?",
        answer: "Absolutamente. VerifacTool es escalable. Desde un autónomo que solo necesita emitir facturas legales, hasta una pyme que requiere CRM, control de gastos y gestión de equipos.",
    },
    {
        question: "¿Cómo llevo los gastos en VerifacTool?",
        answer: "Registras cada factura de proveedor con su base, IVA e IRPF y la asignas a una categoría contable de las que usa Hacienda, sin necesidad de saber contabilidad. La lectura automática de tickets con OCR y los borradores de los modelos 303 y 130 están en desarrollo para Q1 2027.",
    },
    {
        question: "¿Puedo invitar a mi asesor para que revise mis datos?",
        answer: "Sí. Tu asesor entra con su propio usuario y ve tus facturas y gastos sin que tengas que mandarle archivos por email. Si tu asesoría trabaja con varios clientes, puede gestionar todos sus NIF desde una sola cuenta.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer,
            },
        })),
    };

    return (
        <section className="py-24 bg-white" id="faq">
            <JsonLd data={faqSchema} />
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        Preguntas frecuentes sobre Verifactu y VerifacTool
                    </h2>
                    <p className="text-text-body text-lg">
                        Todo lo que necesitas saber para digitalizar tu facturación con total tranquilidad.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="font-bold text-navy pr-8">{f.question}</span>
                                {openIndex === i ? (
                                    <ChevronUp size={20} className="text-primary flex-shrink-0" />
                                ) : (
                                    <ChevronDown size={20} className="text-text-body flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-text-body leading-relaxed border-t border-gray-50">
                                            {f.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-text-body mb-6">¿Tienes otra duda?</p>
                    <Link href="#" className="btn-secondary py-3 px-8">
                        Reserva una llamada de asesoramiento
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
