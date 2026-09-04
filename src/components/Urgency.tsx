"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

const Urgency = () => {
    return (
        <section className="py-24 bg-[#FFFBEB]" id="verifactu">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-3/5">
                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-6">
                            <AlertTriangle size={16} /> Deadline Regulatorio
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                            Verifactu será obligatorio en 2027: prepárate con margen, no a última hora
                        </h2>
                        <p className="text-lg text-text-body mb-8 leading-relaxed">
                            El RD-ley 15/2025 aplazó Verifactu al <strong>1 de enero de 2027</strong> para sociedades y al <strong>1 de julio de 2027</strong> para autónomos. La norma no cambia: cada factura debe registrarse, encadenarse y quedar inalterable. Lo único que has ganado es tiempo para migrar con calma en vez de a la carrera.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Cumplimiento Verifactu desde el día uno, sin cambiar tu forma de trabajar.",
                                "Evitas sanciones y auditorías sorpresa por uso de software no homologado.",
                                "Migración sencilla desde tu ERP actual o desde Excel.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-navy font-medium">
                                    <ShieldCheck className="text-success mt-1 flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="#precios" className="btn-primary py-4 px-8 inline-block shadow-amber-200">
                            Asegura tu cumplimiento Verifactu hoy
                        </Link>
                    </div>

                    <div className="lg:w-2/5 w-full">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-50">
                            <h4 className="text-navy font-bold mb-8 text-xl">Cronología Verifactu</h4>
                            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-amber-100">
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-amber-400 z-10" />
                                    <p className="font-bold text-navy">Hoy</p>
                                    <p className="text-sm text-text-body">Adopción voluntaria y sin sanciones. El mejor momento para migrar sin prisa.</p>
                                </div>
                                <div className="relative pl-10 opacity-80">
                                    <div className="absolute left-2.5 top-1 w-1 h-20 bg-amber-400 rotate-0 -z-0" />
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-400 border-4 border-white z-10" />
                                    <p className="font-bold text-navy">1 enero 2027</p>
                                    <p className="text-sm text-text-body">Obligatorio para sociedades (SL, SA y demás sujetos al Impuesto sobre Sociedades).</p>
                                </div>

                                <div className="relative pl-10 opacity-80">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white z-10" />
                                    <p className="font-bold text-navy">1 julio 2027</p>
                                    <p className="text-sm text-text-body">Obligatorio para autónomos en estimación directa y demás obligados fuera del SII.</p>
                                </div>
                                <div className="relative pl-10 opacity-50">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-400 border-4 border-white z-10" />
                                    <p className="font-bold text-red-600">Después</p>
                                    <p className="text-sm text-text-body">Sanciones por usar software de facturación no adaptado.</p>
                                </div>
                            </div>

                            <div className="mt-10 p-4 rounded-2xl bg-success/5 border border-success/20 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center text-white font-bold text-xs uppercase">100%</div>
                                <p className="text-sm font-semibold text-success">VerifacTool ya emite en formato Verifactu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Urgency;
