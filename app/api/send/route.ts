import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Estrazione di tutti i campi, inclusi i nuovi step condizionali (sede e indirizzo)
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
      sede,      // NUOVO
      indirizzo, // NUOVO
      nome, 
      telefono, 
      email 
    } = body;

    const { data: resendData, error } = await resend.emails.send({
      // IL MITTENTE: dominio verificato
      from: 'Studio Malavasi <notifiche@fisioterapiamalavasi.it>', 
      
      // IL DESTINATARIO: la mail dello studio
      to: ['fisioterapiamalavasi@gmail.com'], 
      
      subject: `Nuova Prenotazione: ${nome} (${sede})`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; color: #022166; line-height: 1.6; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 25px; border-radius: 15px; border-top: 5px solid #55B4FF; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            
            <h2 style="color: #55B4FF; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 15px; text-align: center;">
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

            <h3 style="color: #022166; border-left: 4px solid #55B4FF; padding-left: 10px; margin-top: 30px;">Dettagli Appuntamento</h3>
            <div style="padding-left: 5px;">
              <p><strong>Sede scelta:</strong> <span style="color: #55B4FF; font-weight: bold;">${sede}</span></p>
              
              ${/* Visualizza l'indirizzo solo se la sede è Domicilio */
                sede === 'Domicilio' 
                ? `<p style="background-color: #fff4f4; padding: 10px; border-radius: 8px; border: 1px solid #d9534f; color: #d9534f;">
                    <strong>📍 Indirizzo Domicilio:</strong> ${indirizzo}
                   </p>` 
                : ''
              }

              <p><strong>Giorni preferiti:</strong> ${Array.isArray(giorniPreferiti) ? giorniPreferiti.join(', ') : giorniPreferiti}</p>
              <p><strong>Fascia oraria:</strong> ${fasciaOraria}</p>
              
              <p style="color: ${urgenza === 'Sì' ? '#d9534f' : '#022166'}; font-weight: ${urgenza === 'Sì' ? 'bold' : 'normal'};">
                <strong>⚡ Urgenza:</strong> ${urgenza}
              </p>
            </div>

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
    return NextResponse.json({ error: "Errore durante l'invio della mail" }, { status: 500 });
  }
}