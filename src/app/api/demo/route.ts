import { NextRequest, NextResponse } from 'next/server';

/**
 * Solicitud de demo. La web solo valida y reenvía: quien guarda el lead y envía
 * los correos (aviso interno y autorespuesta) es la app, que ya tiene el SMTP
 * de verifactool.com configurado. Así hay una sola tubería de correo y las
 * credenciales viven en un único sitio.
 */

const LEADS_API_URL = process.env.LEADS_API_URL ?? 'https://app.verifactool.com/api/leads';

const recortar = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const nombre = recortar(body.firstName, 120);
        const apellidos = recortar(body.lastName, 120);
        const email = recortar(body.email, 200).toLowerCase();
        const plan = recortar(body.plan, 40);
        const mensaje = recortar(body.message, 4000);

        if (!nombre || !email) {
            return NextResponse.json(
                { error: 'Necesitamos tu nombre y tu email para poder responderte.' },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            return NextResponse.json(
                { error: 'Ese email no parece válido. Revísalo y vuelve a enviarlo.' },
                { status: 400 }
            );
        }

        const apiKey = process.env.LEADS_API_KEY;
        if (!apiKey) {
            console.error('LEADS_API_KEY sin configurar: no se puede registrar el lead');
            return NextResponse.json(
                { error: 'No hemos podido registrar tu solicitud. Escríbenos a hola@verifactool.com y lo resolvemos.' },
                { status: 500 }
            );
        }

        const res = await fetch(LEADS_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Lead-Key': apiKey },
            body: JSON.stringify({
                nombre,
                apellidos,
                email,
                plan,
                mensaje,
                origen: recortar(req.headers.get('referer'), 300),
            }),
            signal: AbortSignal.timeout(15000),
        });

        if (!res.ok) {
            console.error('La API de leads respondió', res.status, await res.text().catch(() => ''));
            return NextResponse.json(
                { error: 'No hemos podido registrar tu solicitud. Escríbenos a hola@verifactool.com y lo resolvemos.' },
                { status: 502 }
            );
        }

        const { id } = await res.json();
        return NextResponse.json({ success: true, leadId: id ?? null });
    } catch (err) {
        console.error('Error en /api/demo:', err);
        return NextResponse.json(
            { error: 'Algo ha fallado por nuestra parte. Inténtalo de nuevo en un minuto.' },
            { status: 500 }
        );
    }
}
