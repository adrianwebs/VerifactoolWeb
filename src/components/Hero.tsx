"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
    return (
        <header className="hero-section pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue text-primary text-xs font-bold tracking-wider uppercase mb-6">
                                ERP online compatible Verifactu 2026
                            </span>
                            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Software de facturación Verifactu para autónomos y pymes
                            </h1>
                            <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto lg:mx-0">
                                Cumple Verifactu sin complicarte y centraliza facturas, gastos y clientes en un solo ERP online.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                                <Link href="#precios" className="btn-primary py-4 px-10 text-lg w-full sm:w-auto text-center">
                                    Empieza gratis
                                </Link>
                                <Link href="/demo" className="btn-secondary py-4 px-10 text-lg w-full sm:w-auto text-center">
                                    Ver demo en 5 minutos
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                                {[
                                    "Alineado con normativa Verifactu 2026",
                                    "Facturación, gastos e impuestos",
                                    "CRM visual con pipeline de ventas",
                                    "Diseñado para autónomos y pymes",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-text-body font-medium">
                                        <CheckCircle2 size={18} className="text-success" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            {/* Mockup Placeholder */}
                            <div className="bg-white rounded-[32px] p-2 shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                                <div className="bg-slate-50 rounded-[28px] overflow-hidden border border-slate-100">
                                    {/* Toolbar */}
                                    <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-sm bg-primary" />
                                            </div>
                                            <div className="h-4 w-32 bg-slate-100 rounded-full" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-100" />
                                            <div className="w-20 h-8 rounded-lg bg-primary/5 border border-primary/10" />
                                        </div>
                                    </div>

                                    {/* Dashboard Content */}
                                    <div className="p-6 bg-slate-50/50">
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            {/* KPI 1: Ingresos */}
                                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Ventas Mes</p>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-xl font-bold text-navy">12.450€</span>
                                                    <span className="text-[10px] text-success font-bold mb-1">+12%</span>
                                                </div>
                                            </div>
                                            {/* KPI 2: Impuestos */}
                                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">IVA Pendiente</p>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-xl font-bold text-orange-600">3.420€</span>
                                                    <div className="absolute top-0 right-0 w-12 h-12 bg-orange-50 -mr-4 -mt-4 rounded-full" />
                                                </div>
                                            </div>
                                            {/* KPI 3: Clientes */}
                                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Conversión</p>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-xl font-bold text-primary">24.5%</span>
                                                    <span className="text-[10px] text-primary font-bold mb-1">↑</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Chart Area */}
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="h-4 w-40 bg-slate-100 rounded-full" />
                                                <div className="flex gap-2">
                                                    <div className="h-3 w-12 bg-slate-50 rounded-full" />
                                                    <div className="h-3 w-12 bg-slate-50 rounded-full" />
                                                </div>
                                            </div>

                                            {/* Mock Chart Bars */}
                                            <div className="flex items-end justify-between h-32 gap-2 mt-4 px-2">
                                                {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 45, 75].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${h}%` }}
                                                        transition={{ delay: 0.5 + (i * 0.05), duration: 0.8 }}
                                                        className={cn(
                                                            "w-full rounded-t-sm",
                                                            i === 7 ? "bg-primary" : "bg-primary/20"
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'].map((m, i) => (
                                                    <span key={i} className="text-[8px] font-bold text-slate-300 uppercase">{m}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Floating Notification */}
                                        <motion.div
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1.5 }}
                                            className="absolute -right-4 top-1/2 bg-white p-3 rounded-xl shadow-xl border border-slate-100 max-w-[150px]"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-2 h-2 rounded-full bg-success" />
                                                <p className="text-[9px] font-bold text-navy">Factura Verificada</p>
                                            </div>
                                            <p className="text-[8px] text-slate-500">Hash SHA-256 generado con éxito para AEAT.</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent-blue rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>

                {/* Social Proof logotypes */}
                <div className="mt-24 pt-10 border-t border-gray-100">
                    <p className="text-center text-sm font-semibold text-text-body/60 uppercase tracking-widest mb-10">
                        Sistemas Compatibles y Conectividad
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
                        {/* Mock logos simple text for now */}
                        <span className="text-xl font-bold tracking-tighter">AEAT</span>
                        <span className="text-xl font-bold tracking-tighter">stripe</span>
                        <span className="text-xl font-bold tracking-tighter">BBVA</span>
                        <span className="text-xl font-bold tracking-tighter">CaixaBank</span>
                        <span className="text-xl font-bold tracking-tighter">Sabadell</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
