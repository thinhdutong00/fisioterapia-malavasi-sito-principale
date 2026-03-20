import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      problema, problemaSpecifico, // Aggiunto specifica problema
      durata, limitazione, obiettivo, obiettivoSpecifico, // Aggiunto specifica obiettivo
      giaFattoFisio, diagnosiMedica, eta, giorniPreferiti, fasciaOraria, urgenza,
      sede, indirizzo, nome, telefono, email, attachment 
    } = body;

    const attachments = attachment ? [
      {
        filename: attachment.filename,
        content: attachment.content,
      }
    ] : [];

    const { data: resendData, error } = await resend.emails.send({
      from: 'Studio Malavasi <notifiche@fisioterapiamalavasi.it>', 
      to: ['fisioterapiamalavasi@gmail.com'], 
      subject: `Nuova prenotazione dal sito: ${nome} - ${sede}`,
      attachments: attachments,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #022166; line-height: 1.5; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="border-bottom: 2px solid #55B4FF; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="font-size: 24px; margin: 0; color: #022166;">Nuova Prenotazione Online - MG</h1>
            <p style="font-size: 14px; color: #55B4FF; margin: 5px 0 0 0; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Studio Fisioterapico Malavasi</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="font-size: 18px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; color: #55B4FF;">Dati Paziente</h2>
            <p style="margin: 5px 0;"><strong>Nome:</strong> ${nome}</p>
            <p style="margin: 5px 0;"><strong>Telefono:</strong> ${telefono}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Fascia d'età:</strong> ${eta}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="font-size: 18px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; color: #55B4FF;">Analisi Clinica</h2>
            <p style="margin: 8px 0;"><strong>Problema:</strong> ${problema}</p>
            
            ${problema === 'Altro' && problemaSpecifico 
              ? `<p style="margin: 8px 0; padding: 10px; background-color: #f0f9ff; border-left: 4px solid #55B4FF;"><strong>Dettaglio Problema:</strong> ${problemaSpecifico}</p>` 
              : ''
            }

            <p style="margin: 8px 0;"><strong>Durata:</strong> ${durata}</p>
            <p style="margin: 8px 0;"><strong>Limitazione:</strong> ${limitazione}</p>
            <p style="margin: 8px 0;"><strong>Obiettivo:</strong> ${obiettivo}</p>

            ${obiettivo === 'Altro' && obiettivoSpecifico 
              ? `<p style="margin: 8px 0; padding: 10px; background-color: #f0f9ff; border-left: 4px solid #55B4FF;"><strong>Dettaglio Obiettivo:</strong> ${obiettivoSpecifico}</p>` 
              : ''
            }

            <p style="margin: 8px 0;"><strong>Fisio precedente:</strong> ${giaFattoFisio}</p>
            <p style="margin: 8px 0;"><strong>Diagnosi medica:</strong> ${diagnosiMedica}</p>
            
            ${attachment 
              ? `<div style="margin-top: 15px; padding: 12px; border: 1px solid #55B4FF; border-radius: 8px; color: #022166;">
                  <strong>📎 Allegato:</strong> ${attachment.filename}
                 </div>` 
              : ''
            }
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="font-size: 18px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; color: #55B4FF;">Appuntamento</h2>
            <p style="margin: 8px 0;"><strong>Sede:</strong> ${sede}</p>
            
            ${sede === 'Domicilio' && indirizzo
              ? `<p style="margin: 8px 0; color: #d9534f;"><strong>📍 Indirizzo:</strong> ${indirizzo}</p>` 
              : ''
            }

            <p style="margin: 8px 0;"><strong>Giorni:</strong> ${Array.isArray(giorniPreferiti) ? giorniPreferiti.join(', ') : giorniPreferiti}</p>
            <p style="margin: 8px 0;"><strong>Fascia oraria:</strong> ${fasciaOraria}</p>
            <p style="margin: 8px 0; color: ${urgenza === 'Sì' ? '#d9534f' : '#022166'}; font-weight: bold;">
              <strong>⚡ Urgenza:</strong> ${urgenza}
            </p>
          </div>

          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 40px; text-align: center;">
            <p style="font-size: 12px; color: #999; margin: 0;">
              Richiesta ricevuta tramite fisioterapiamalavasi.it
            </p>
          </div>

        </div>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 400 });
    return NextResponse.json(resendData);
  } catch (err) {
    return NextResponse.json({ error: "Errore durante l'invio" }, { status: 500 });
  }
}