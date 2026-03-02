import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solicitar Demo Verifactu Gratis | VerifacTool",
    description: "Solicita tu prueba gratuita de 7 días de VerifacTool. Configuración guiada para cumplir con la ley Verifactu AEAT sin complicaciones técnicas.",
    alternates: {
        canonical: "https://verifactool.com/demo",
    },
};

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
