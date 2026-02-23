import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, plan, message } = body;

        const resend = new Resend(process.env.RESEND_API_KEY);
        console.log('API Key length:', process.env.RESEND_API_KEY?.length || 0);

        console.log('--- Nueva solicitud de demo ---');
        console.log('Datos:', { firstName, lastName, email, plan });

        if (!firstName || !email) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        if (!process.env.RESEND_API_KEY) {
            console.error('Error: RESEND_API_KEY no configurada en el servidor');
            return NextResponse.json({ error: 'Configuración del servidor incompleta' }, { status: 500 });
        }

        const { data, error } = await resend.emails.send({
            from: 'VerifacTool <onboarding@resend.dev>',
            to: ['adrygoleador@gmail.com'],
            subject: `🚀 Nuevo LEAD: Demo solicitada por ${firstName} ${lastName}`,
            html: `
        <h1>Nuevo Lead de VerifacTool</h1>
        <p>Se ha recibido una nueva solicitud de demo con los siguientes detalles:</p>
        <hr />
        <ul>
          <li><strong>Nombre completo:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Plan interesado:</strong> ${plan}</li>
          <li><strong>Mensaje:</strong> ${message || 'Sin mensaje adicional'}</li>
        </ul>
        <hr />
        <p>Este correo ha sido enviado automáticamente desde el formulario de demo.</p>
      `,
        });

        if (error) {
            console.error('Error de Resend:', error);
            return NextResponse.json({ error: error.message || 'Error al enviar el email' }, { status: 500 });
        }

        console.log('Email enviado correctamente:', data);
        return NextResponse.json({ success: true, data });
    } catch (err: any) {
        console.error('Error interno API demo:', err);
        return NextResponse.json({
            error: 'Error interno del servidor',
            details: err.message
        }, { status: 500 });
    }
}
