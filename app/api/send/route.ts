import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const allowedDays = new Set(["Lun", "Mar", "Mer", "Gio", "Ven"]);
const allowedAttachmentTypes = new Set(["application/pdf", "image/jpeg", "image/png", ""]);

function readText(value: unknown, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function emailRow(label: string, value: string, emphasis = false) {
  return `<p style="margin:8px 0;${emphasis ? "color:#b42318;font-weight:700;" : ""}"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value || "Non indicato")}</p>`;
}

type ValidAttachment = {
  filename: string;
  content: string;
  contentType?: string;
};

function parseAttachment(value: unknown): ValidAttachment | null | "invalid" {
  if (value == null) return null;
  if (typeof value !== "object") return "invalid";

  const candidate = value as Record<string, unknown>;
  const filename = readText(candidate.filename, 180);
  const content = readText(candidate.content, 8_000_000);
  const contentType = readText(candidate.contentType, 100);
  const validExtension = /\.(pdf|jpe?g|png)$/i.test(filename);
  const validBase64 = /^[A-Za-z0-9+/]*={0,2}$/.test(content);
  const byteLength = validBase64 ? Buffer.byteLength(content, "base64") : Number.POSITIVE_INFINITY;

  if (!filename || !content || !validExtension || !allowedAttachmentTypes.has(contentType) || byteLength > MAX_ATTACHMENT_BYTES) {
    return "invalid";
  }

  return { filename, content, ...(contentType ? { contentType } : {}) };
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "Servizio email non configurato" }, { status: 500 });

    const rawBody: unknown = await request.json();
    if (!rawBody || typeof rawBody !== "object") return NextResponse.json({ error: "Dati non validi" }, { status: 400 });
    const body = rawBody as Record<string, unknown>;

    // Honeypot: answer successfully without sending anything to avoid helping bots adapt.
    if (readText(body.website, 200)) return NextResponse.json({ ok: true });

    const tipoRichiesta = readText(body.tipoRichiesta, 30);
    const area = readText(body.area, 160);
    const trattamento = readText(body.trattamento, 200);
    const percorso = readText(body.percorso, 200);
    const percorsoDettaglio = readText(body.percorsoDettaglio, 200);
    const paginaOrigine = readText(body.paginaOrigine, 300);
    const problema = readText(body.problema, 300);
    const problemaSpecifico = readText(body.problemaSpecifico, 500);
    const durata = readText(body.durata, 100);
    const limitazione = readText(body.limitazione, 300);
    const obiettivo = readText(body.obiettivo, 300);
    const obiettivoSpecifico = readText(body.obiettivoSpecifico, 500);
    const giaFattoFisio = readText(body.giaFattoFisio, 50);
    const diagnosiMedica = readText(body.diagnosiMedica, 50);
    const eta = readText(body.eta, 50);
    const fasciaOraria = readText(body.fasciaOraria, 50);
    const urgenza = readText(body.urgenza, 50);
    const sede = readText(body.sede, 100);
    const indirizzo = readText(body.indirizzo, 300);
    const nome = readText(body.nome, 100);
    const telefono = readText(body.telefono, 30);
    const email = readText(body.email, 254);
    const privacy = body.privacy === true;
    const giorniPreferiti = Array.isArray(body.giorniPreferiti)
      ? body.giorniPreferiti.map((day) => readText(day, 10)).filter((day) => allowedDays.has(day))
      : [];

    const phoneDigits = telefono.replace(/\D/g, "");
    const validEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPhone = phoneDigits.length >= 7 && phoneDigits.length <= 15 && /^[+\d\s().-]+$/.test(telefono);
    const requiredFields = [problema, durata, limitazione, obiettivo, giaFattoFisio, diagnosiMedica, eta, fasciaOraria, urgenza, sede, nome, telefono];

    if (requiredFields.some((value) => !value) || !giorniPreferiti.length || !validPhone || !validEmail || !privacy) {
      return NextResponse.json({ error: "Completa correttamente i campi obbligatori" }, { status: 400 });
    }
    if (sede === "Domicilio" && indirizzo.length < 5) {
      return NextResponse.json({ error: "Indirizzo del domicilio non valido" }, { status: 400 });
    }

    const attachment = parseAttachment(body.attachment);
    if (attachment === "invalid") return NextResponse.json({ error: "Allegato non valido" }, { status: 400 });

    const requestLabel = percorsoDettaglio || trattamento || percorso || area || problema;
    const safeSubjectName = nome.replace(/[\r\n]+/g, " ").slice(0, 80);
    const safeSubjectContext = requestLabel.replace(/[\r\n]+/g, " ").slice(0, 100);
    const resend = new Resend(apiKey);

    const { data: resendData, error } = await resend.emails.send({
      from: "Studio Malavasi <notifiche@fisioterapiamalavasi.it>",
      to: ["fisioterapiamalavasi@gmail.com"],
      subject: `[${safeSubjectContext}] ${safeSubjectName} — ${sede}`,
      attachments: attachment ? [{ filename: attachment.filename, content: attachment.content }] : [],
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#022166;line-height:1.5;max-width:640px;margin:0 auto;padding:20px;">
          <div style="border-bottom:2px solid #55B4FF;padding-bottom:20px;margin-bottom:30px;">
            <h1 style="font-size:24px;margin:0;color:#022166;">Nuova richiesta di valutazione</h1>
            <p style="font-size:13px;color:#55B4FF;margin:5px 0 0;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Studio Fisioterapico Malavasi</p>
          </div>

          <div style="margin-bottom:30px;padding:18px;background:#f0f9ff;border-left:4px solid #55B4FF;border-radius:8px;">
            <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;color:#022166;">Contesto della richiesta</h2>
            ${emailRow("Ingresso", tipoRichiesta === "non-so" ? "Problema da definire insieme" : tipoRichiesta || "Pagina specifica")}
            ${area ? emailRow("Area", area) : ""}
            ${trattamento ? emailRow("Trattamento", trattamento) : ""}
            ${percorso ? emailRow("Percorso", percorso) : ""}
            ${percorsoDettaglio ? emailRow("Approfondimento", percorsoDettaglio) : ""}
            ${paginaOrigine ? emailRow("Pagina di provenienza", paginaOrigine) : ""}
          </div>

          <div style="margin-bottom:30px;">
            <h2 style="font-size:18px;text-transform:uppercase;letter-spacing:1px;margin-bottom:15px;color:#55B4FF;">Contatti</h2>
            ${emailRow("Nome", nome)}
            ${emailRow("Telefono", telefono)}
            ${emailRow("Email", email || "Non indicata")}
            ${emailRow("Fascia d’età", eta)}
          </div>

          <div style="margin-bottom:30px;">
            <h2 style="font-size:18px;text-transform:uppercase;letter-spacing:1px;margin-bottom:15px;color:#55B4FF;">Quadro riferito</h2>
            ${emailRow("Difficoltà principale", problema)}
            ${problemaSpecifico ? emailRow("Descrizione", problemaSpecifico) : ""}
            ${emailRow("Durata", durata)}
            ${emailRow("Limitazione", limitazione)}
            ${emailRow("Obiettivo", obiettivo)}
            ${obiettivoSpecifico ? emailRow("Dettaglio obiettivo", obiettivoSpecifico) : ""}
            ${emailRow("Fisioterapia precedente", giaFattoFisio)}
            ${emailRow("Diagnosi o referto", diagnosiMedica)}
            ${attachment ? `<p style="margin-top:15px;padding:12px;border:1px solid #55B4FF;border-radius:8px;"><strong>Allegato:</strong> ${escapeHtml(attachment.filename)}</p>` : ""}
          </div>

          <div style="margin-bottom:30px;">
            <h2 style="font-size:18px;text-transform:uppercase;letter-spacing:1px;margin-bottom:15px;color:#55B4FF;">Preferenze per l’appuntamento</h2>
            ${emailRow("Sede", sede)}
            ${sede === "Domicilio" ? emailRow("Indirizzo", indirizzo, true) : ""}
            ${emailRow("Giorni", giorniPreferiti.join(", "))}
            ${emailRow("Fascia oraria", fasciaOraria)}
            ${emailRow("Dolore acuto o peggiorato di recente", urgenza, urgenza === "Sì")}
          </div>

          <div style="border-top:1px solid #eee;padding-top:20px;margin-top:40px;text-align:center;">
            <p style="font-size:12px;color:#777;margin:0;">Richiesta ricevuta tramite fisioterapiamalavasi.it</p>
          </div>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error: "Invio non riuscito" }, { status: 502 });
    return NextResponse.json(resendData);
  } catch {
    return NextResponse.json({ error: "Errore durante l’invio" }, { status: 500 });
  }
}
