import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, motivo, sede, data, ora } = body;

    const { data: resendData, error } = await resend.emails.send({
      // IL MITTENTE: usa il dominio che abbiamo appena verificato
      from: 'Studio Malavasi <notifiche@fisioterapiamalavasi.it>', 
      
      // IL DESTINATARIO: dove il dottore riceve le mail
      to: ['fisioterapiamalavasi@gmail.com'], 
      
      subject: `Nuova Prenotazione: ${nome}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #022166;">
          <h2 style="color: #55B4FF;">Nuova richiesta dal sito</h2>
          <p><strong>Paziente:</strong> ${nome}</p>
          <p><strong>Telefono:</strong> ${telefono}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sede:</strong> ${sede}</p>
          <p><strong>Appuntamento:</strong> il ${data} alle ore ${ora}</p>
          <p><strong>Motivo:</strong> ${motivo}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(resendData);
  } catch (err) {
    return NextResponse.json({ error: "Errore durante l'invio" }, { status: 500 });
  }
}