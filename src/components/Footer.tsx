import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logoVerifacToolFinal.png"
                                    alt="VerifacTool"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="text-black">Verifac</span>
                                <span className="text-[#00475b]">Tool</span>
                            </span>
                        </Link>
                        <p className="text-text-body text-sm leading-relaxed mb-6">
                            La plataforma definitiva para autónomos y pymes que buscan cumplir con la normativa Verifactu sin complicaciones. Facturación, contabilidad y CRM en un solo lugar.
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons can go here */}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-navy mb-8 text-sm uppercase tracking-widest">Producto</h4>
                        <ul className="space-y-4">
                            <li><Link href="/software-verifactu" className="text-text-body hover:text-primary transition-colors text-[15px]">Software Verifactu</Link></li>
                            <li><Link href="/software-contabilidad-online" className="text-text-body hover:text-primary transition-colors text-[15px]">Software Contabilidad Online</Link></li>
                            <li><Link href="#" className="text-text-body hover:text-primary transition-colors text-[15px]">CRM Asesorías</Link></li>
                            <li><Link href="/precios" className="text-text-body hover:text-primary transition-colors text-[15px]">Planes y Precios</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-navy mb-8 text-sm uppercase tracking-widest">Verifactu</h4>
                        <ul className="space-y-4">
                            <li><Link href="/verifactu/que-es" className="text-text-body hover:text-primary transition-colors text-[15px]">¿Qué es Verifactu?</Link></li>
                            <li><Link href="/verifactu/sanciones" className="text-text-body hover:text-primary transition-colors text-[15px]">Sanciones AEAT</Link></li>
                            <li><Link href="/verifactu/requisitos-tecnicos" className="text-text-body hover:text-primary transition-colors text-[15px]">Requisitos Técnicos</Link></li>
                            <li><Link href="/blog" className="text-text-body hover:text-primary transition-colors text-[15px]">Blog de Actualidad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-navy mb-8 text-sm uppercase tracking-widest">Comparativas</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-text-body hover:text-primary transition-colors text-[15px]">VerifacTool vs Holded</Link></li>
                            <li><Link href="#" className="text-text-body hover:text-primary transition-colors text-[15px]">VerifacTool vs FacturaDirecta</Link></li>
                            <li><Link href="/mejor-software-verifactu" className="text-text-body hover:text-primary transition-colors text-[15px]">Mejor Software Verifactu</Link></li>
                            <li><Link href="#" className="text-primary font-bold hover:underline transition-colors text-[15px]">Probar gratis 7 días</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-text-body text-[13px]">
                        © {currentYear} VerifacTool. Todos los derechos reservados. Cumplimiento Verifactu garantizado.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-text-body hover:text-primary transition-colors text-[13px]">Privacidad</Link>
                        <Link href="#" className="text-text-body hover:text-primary transition-colors text-[13px]">Cookies</Link>
                        <Link href="#" className="text-text-body hover:text-primary transition-colors text-[13px]">Aviso Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
