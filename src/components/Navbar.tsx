"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Rocket, Smartphone, ShieldCheck, Calculator, Briefcase, Zap, AlertTriangle, FileCheck, HelpCircle, BarChart2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MegaMenuColumn {
    title: string;
    icon: React.ReactNode;
    links: { name: string; href: string }[];
}

interface MegaMenu {
    label: string;
    columns: MegaMenuColumn[];
    footer?: { name: string; href: string };
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const megaMenus: Record<string, MegaMenu> = {
        producto: {
            label: "Producto",
            columns: [
                {
                    title: "Facturación",
                    icon: <Rocket className="text-primary" size={18} />,
                    links: [
                        { name: "Software Verifactu", href: "/software-verifactu" },
                        { name: "Facturación electrónica", href: "/facturacion-electronica" },
                        { name: "Facturación recurrente", href: "/facturacion-recurrente" },
                        { name: "Programa para autónomos", href: "/programa-facturacion-autonomos" },
                        { name: "Programa para pymes", href: "/programa-facturacion-pymes" },
                    ]
                },
                {
                    title: "Contabilidad",
                    icon: <Calculator className="text-primary" size={18} />,
                    links: [
                        { name: "Software contabilidad online", href: "/software-contabilidad-online" },
                        { name: "Modelo 303 automático", href: "/modelo-303-automatico" },
                        { name: "Modelo 130 autónomos", href: "/modelo-130-autonomos" },
                        { name: "Contabilidad para autónomos", href: "/contabilidad-autonomos" },
                    ]
                },
                {
                    title: "Automatización",
                    icon: <Zap className="text-primary" size={18} />,
                    links: [
                        { name: "Conciliación bancaria", href: "/software-conciliacion-bancaria" },
                        { name: "OCR facturas proveedores", href: "/ocr-facturas-proveedores" },
                        { name: "CRM asesorías", href: "/software-crm-asesorias" },
                        { name: "Portal del cliente", href: "/portal-cliente" },
                        { name: "Integraciones / API", href: "/api-docs" },
                    ]
                }
            ]
        },
        soluciones: {
            label: "Soluciones",
            columns: [
                {
                    title: "Por tipo de negocio",
                    icon: <Briefcase className="text-primary" size={18} />,
                    links: [
                        { name: "Para autónomos", href: "/programa-facturacion-autonomos" },
                        { name: "Para pymes", href: "/programa-facturacion-pymes" },
                        { name: "Para asesorías", href: "/software-crm-asesorias" },
                    ]
                },
                {
                    title: "Por necesidad",
                    icon: <ShieldCheck className="text-primary" size={18} />,
                    links: [
                        { name: "Cumplir con Verifactu", href: "/software-verifactu" },
                        { name: "Automatizar impuestos", href: "/software-contabilidad-online" },
                        { name: "Evitar sanciones", href: "/verifactu/sanciones" },
                        { name: "Cambiar desde Holded", href: "/verifactool-vs-holded" },
                    ]
                }
            ]
        },
        verifactu: {
            label: "Verifactu",
            columns: [
                {
                    title: "Guía Verifactu",
                    icon: <FileCheck className="text-primary" size={18} />,
                    links: [
                        { name: "Qué es Verifactu", href: "/verifactu/que-es" },
                        { name: "Cómo funciona", href: "/verifactu/como-funciona" },
                        { name: "Cuándo entra en vigor", href: "/verifactu/cuando-entra-en-vigor" },
                        { name: "¿Es obligatorio?", href: "/verifactu/es-obligatorio-autonomos" },
                    ]
                },
                {
                    title: "Técnico y Legal",
                    icon: <AlertTriangle className="text-primary" size={18} />,
                    links: [
                        { name: "Requisitos técnicos", href: "/verifactu/requisitos-tecnicos" },
                        { name: "Sanciones", href: "/verifactu/sanciones" },
                        { name: "Errores comunes", href: "/verifactu/errores-comunes" },
                        { name: "Software compatible", href: "/verifactu/software-compatible" },
                    ]
                }
            ],
            footer: {
                name: "Software compatible con Verifactu",
                href: "/software-verifactu"
            }
        },
        recursos: {
            label: "Recursos",
            columns: [
                {
                    title: "Aprender",
                    icon: <HelpCircle className="text-primary" size={18} />,
                    links: [
                        { name: "Guía factura electrónica", href: "/facturacion-electronica" },
                        { name: "Cumplimiento Ley Antifraude", href: "/verifactu/requisitos-tecnicos" },
                        { name: "Cómo automatizar conciliación", href: "/conciliacion-bancaria-automatica" },
                        { name: "FAQ Verifactu", href: "/verifactu#faq" },
                    ]
                },
                {
                    title: "Comparativas",
                    icon: <BarChart2 className="text-primary" size={18} />,
                    links: [
                        { name: "VerifacTool vs Holded", href: "/verifactool-vs-holded" },
                        { name: "VerifacTool vs FacturaDirecta", href: "/verifactool-vs-facturadirecta" },
                        { name: "Mejor software facturación", href: "/mejor-software-facturacion-verifactu" },
                    ]
                },
                {
                    title: "Soporte",
                    icon: <Smartphone className="text-primary" size={18} />,
                    links: [
                        { name: "Centro de ayuda", href: "/ayuda" },
                        { name: "Documentación API", href: "/api-docs" },
                        { name: "Release notes", href: "/updates" },
                    ]
                }
            ]
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled || activeMenu || mobileMenuOpen
                    ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-3"
                    : "bg-transparent py-5"
            )}
            onMouseLeave={() => !mobileMenuOpen && setActiveMenu(null)}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-16 h-16">
                            <Image
                                src="/logoVerifacToolFinal.png"
                                alt="VerifacTool"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">
                            <span className="text-black">Verifac</span>
                            <span className="text-primary">Tool</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            {Object.entries(megaMenus).map(([key, menu]) => (
                                <div
                                    key={key}
                                    className="relative group"
                                    onMouseEnter={() => setActiveMenu(key)}
                                >
                                    <Link
                                        href={key === "verifactu" ? "/verifactu" : "#"}
                                        className={cn(
                                            "flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium transition-colors",
                                            activeMenu === key ? "text-primary" : "text-navy hover:text-primary"
                                        )}
                                    >
                                        {menu.label}
                                        <ChevronDown
                                            size={14}
                                            className={cn("transition-transform duration-200", activeMenu === key && "rotate-180")}
                                        />
                                    </Link>
                                </div>
                            ))}
                            <Link
                                href="/precios"
                                className="px-3 py-2 text-[15px] font-medium text-navy hover:text-primary transition-colors"
                            >
                                Precios
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 ml-4">
                            <Link
                                href="https://app.verifactool.com"
                                className="text-[15px] font-bold text-navy hover:text-primary transition-colors px-4 py-2"
                            >
                                Iniciar sesión
                            </Link>
                            <Link
                                href="/demo"
                                className="btn-primary py-2.5 px-6 text-[15px] whitespace-nowrap"
                            >
                                Prueba gratis 7 días
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-navy"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mega Menus Content */}
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl"
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                    >
                        <div className="container mx-auto px-6 py-10">
                            <div className="grid grid-cols-4 gap-12">
                                {megaMenus[activeMenu].columns.map((col, idx) => (
                                    <div key={idx}>
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center">
                                                {col.icon}
                                            </div>
                                            <h4 className="font-bold text-navy text-sm uppercase tracking-wider">{col.title}</h4>
                                        </div>
                                        <ul className="space-y-4">
                                            {col.links.map((link, lIdx) => (
                                                <li key={lIdx}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-[15px] text-text-body hover:text-primary transition-colors flex items-center gap-2 group"
                                                        onClick={() => setActiveMenu(null)}
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-primary transition-colors" />
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                {/* Visual side block common for mega menus */}
                                <div className="col-span-1 bg-accent-blue rounded-3xl p-8 flex flex-col justify-between">
                                    <div>
                                        <h5 className="font-bold text-navy mb-4">¿Por qué VerifacTool?</h5>
                                        <p className="text-sm text-text-body leading-relaxed mb-6">
                                            Automatización real para empresas que no tienen tiempo que perder.
                                        </p>
                                    </div>
                                    {megaMenus[activeMenu].footer ? (
                                        <Link
                                            href={megaMenus[activeMenu].footer!.href}
                                            className="btn-primary text-center py-2 text-xs"
                                        >
                                            {megaMenus[activeMenu].footer!.name}
                                        </Link>
                                    ) : (
                                        <Link href="/demo" className="btn-primary text-center py-2 text-xs">
                                            Empezar ahora gratis
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 top-[65px] bg-white z-40 overflow-y-auto"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {Object.entries(megaMenus).map(([key, menu]) => (
                                <div key={key} className="space-y-4">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{menu.label}</h4>
                                    <div className="grid grid-cols-1 gap-6 pl-2">
                                        {menu.columns.map((col, idx) => (
                                            <div key={idx} className="space-y-3">
                                                <p className="text-sm font-bold text-navy flex items-center gap-2">
                                                    {col.icon} {col.title}
                                                </p>
                                                <div className="flex flex-col gap-3 pl-6">
                                                    {col.links.map((link, lIdx) => (
                                                        <Link
                                                            key={lIdx}
                                                            href={link.href}
                                                            className="text-text-body hover:text-primary transition-colors"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <hr className="border-gray-100" />
                                </div>
                            ))}

                            <Link
                                href="/precios"
                                className="text-lg font-bold text-navy"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Precios
                            </Link>

                            <div className="flex flex-col gap-4 mt-4 pb-12">
                                <Link
                                    href="https://app.verifactool.com/login"
                                    className="btn-secondary text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    href="/demo"
                                    className="btn-primary text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Prueba gratis 7 días
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
