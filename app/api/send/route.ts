import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Estrazione di tutti i nuovi campi dal body del modulo a 9 step
    const { 
      problema, 
      durata, 
      limitazione, 
      obiettivo, 
      giaFattoFisio, 
      diagnosiMedica, 
      eta, 
      giorniPreferiti, 
      fasciaOraria, 
      urgenza,
      nome, 
      telefono, 
      email 
    } = body;

    const { data: resendData, error } = await resend.emails.send({
      // IL MITTENTE: dominio verificato
      from: 'Studio Malavasi <notifiche@fisioterapiamalavasi.it>', 
      
      // IL DESTINATARIO: la mail dello studio
      to: ['fisioterapiamalavasi@gmail.com'], 
      
      subject: `Nuova Analisi Caso: ${nome}`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; color: #022166; line-height: 1.6; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 25px; border-radius: 15px; border-top: 5px solid #55B4FF; shadow: 0 2px 4px rgba(0,0,0,0.1);">
            
            <h2 style="color: #55B4FF; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 15px;">
              🩺 Nuova Valutazione Online
            </h2>
            
            <h3 style="color: #022166; border-left: 4px solid #55B4FF; padding-left: 10px;">Dati Paziente</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Telefono:</strong> ${telefono}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Fascia d'età:</strong> ${eta}</p>

            <h3 style="color: #022166; border-left: 4px solid #55B4FF; padding-left: 10px; margin-top: 30px;">Analisi Clinica</h3>
            <div style="background-color: #f4f7f6; padding: 15px; border-radius: 10px;">
              <p><strong>Problema principale:</strong> ${problema}</p>
              <p><strong>Presente da:</strong> ${durata}</p>
              <p><strong>Livello di limitazione:</strong> ${limitazione}</p>
              <p><strong>Obiettivo desiderato:</strong> ${obiettivo}</p>
              <p><strong>Ha già fatto fisioterapia?</strong> ${giaFattoFisio}</p>
              <p><strong>Ha una diagnosi medica?</strong> ${diagnosiMedica}</p>
            </div>

            <h3 style="color: #022166; border-left: 4px solid #55B4FF; padding-left: 10px; margin-top: 30px;">Preferenze Appuntamento</h3>
            <p><strong>Giorni preferiti:</strong> ${Array.isArray(giorniPreferiti) ? giorniPreferiti.join(', ') : giorniPreferiti}</p>
            <p><strong>Fascia oraria:</strong> ${fasciaOraria}</p>
            <p style="color: ${urgenza === 'Sì' ? '#d9534f' : '#022166'}; font-weight: ${urgenza === 'Sì' ? 'bold' : 'normal'};">
              <strong>📍 Richiesta Urgente:</strong> ${urgenza}
            </p>

            <footer style="margin-top: 40px; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
              Questo messaggio è stato inviato dal sistema di prenotazione online di Fisioterapia Malavasi.<br>
              I dati sono trattati secondo la normativa privacy vigente.
            </footer>
          </div>
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
    return NextResponse.json({ error: "Errore durante l'elaborazione dei dati" }, { status: 500 });
  }
}