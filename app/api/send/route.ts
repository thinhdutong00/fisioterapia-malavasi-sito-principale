import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // AGGIUNTO 'indirizzo' qui per estrarlo dai dati inviati dal modulo
    const { nome, email, telefono, motivo, sede, indirizzo, data, ora } = body;

    const { data: resendData, error } = await resend.emails.send({
      // IL MITTENTE: usa il dominio verificato
      from: 'Studio Malavasi <notifiche@fisioterapiamalavasi.it>', 
      
      // IL DESTINATARIO: la mail dello studio
      to: ['fisioterapiamalavasi@gmail.com'], 
      
      subject: `Nuova Prenotazione: ${nome}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #022166; line-height: 1.6;">
          <h2 style="color: #55B4FF; border-bottom: 2px solid #55B4FF; padding-bottom: 10px;">Nuova richiesta dal sito</h2>
          
          <p style="margin-top: 20px;"><strong>Dati Paziente:</strong></p>
          <ul style="list-style: none; padding-left: 0;">
            <li><strong>Nome:</strong> ${nome}</li>
            <li><strong>Telefono:</strong> ${telefono}</li>
            <li><strong>Email:</strong> ${email}</li>
          </ul>

          <p><strong>Dettagli Appuntamento:</strong></p>
          <ul style="list-style: none; padding-left: 0;">
            <li><strong>Data:</strong> ${data}</li>
            <li><strong>Ora:</strong> ${ora}</li>
            <li><strong>Sede scelta:</strong> ${sede}</li>
            
            ${/* Mostra l'indirizzo SOLO se la sede è Domicilio */
              sede === 'Domicilio' 
              ? `<li style="color: #d9534f;"><strong>📍 Indirizzo di residenza:</strong> ${indirizzo}</li>` 
              : ''
            }
          </ul>

          <div style="background-color: #f4f7f6; padding: 15px; border-radius: 10px; margin-top: 20px;">
            <p style="margin-top: 0;"><strong>Motivo della visita:</strong></p>
            <p style="font-style: italic;">${motivo}</p>
          </div>

          <footer style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; pt-10px;">
            Messaggio generato automaticamente dal sistema di prenotazione online.
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error("Errore Resend:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(resendData);
  } catch (err) {
    console.error("Errore Server:", err);
    return NextResponse.json({ error: "Errore durante l'invio" }, { status: 500 });
  }
}