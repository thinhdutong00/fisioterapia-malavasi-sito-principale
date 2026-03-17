"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight,
  Activity,
  Home,
  ArrowUpRight, 
  ClipboardCheck, 
  Stethoscope, 
  Dumbbell,
  Clock
} from 'lucide-react';

export default function SedutaFisioterapicaPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Coerente con lo stile Hub */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
{/* Breadcrumb aggiornato */}
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
  <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
  <ChevronRight size={14} />
  <Link href="/metodo" className="hover:text-[#022166] transition-colors text-[#022166] font-semibold">Modalità della seduta</Link>
  <ChevronRight size={14} />
  <span className="text-slate-400">Seduta in studio</span>
</nav>

          {/* HEADER SEZIONE */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">In Studio</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Seduta <br />Fisioterapica <span className="text-[#55B4FF]">specialistica.</span>
            </h1>
          </header>

          {/* SEZIONE 1: PREMESSA */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  L'approccio Relazionale
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Premessa.</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                    Il primo passo, quello fondamentale, è di instaurare fiducia reciproca con i pazienti che riceviamo per intraprendere ogni percorso con serenità e trasparenza.
                  </p>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium opacity-90">
                    Creare un legame tra il fisioterapista ed il paziente significa costruire delle fondamenta solide basate sull'ascolto e sulla comprensione della problematica di salute da trattare: prima della presa in carico si terrà un appropriato colloquio con un'appropriata comprensione del significato che il paziente dà al proprio disturbo, in seguito, stabiliremo degli obiettivi condivisi con il paziente, passo dopo passo nel percorso, breve o lungo che sia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: LA VISITA FISIOTERAPICA */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Protocollo Diagnostico
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight mb-6">La visita fisioterapica.</h2>
                <div className="inline-flex items-center gap-3 bg-[#022166] text-white px-6 py-3 rounded-2xl shadow-lg">
                  <Clock size={18} className="text-[#55B4FF]" />
                  <span className="text-sm font-bold tracking-tight">Durata: 45 - 60 min</span>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-6">
                  {/* Fase 1 */}
                  <div className="group bg-[#E0F2FE] p-10 rounded-[2rem] border border-white/50 transition-all duration-500 hover:shadow-lg">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#022166] shadow-sm">
                        <ClipboardCheck size={28} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]/50">Fase 01</span>
                        <h3 className="text-2xl font-bold text-[#022166] tracking-tight">Anamnesi</h3>
                        <p className="text-[#022166]/70 font-medium">Primo colloquio approfondito.</p>
                      </div>
                    </div>
                  </div>

                  {/* Fase 2 */}
                  <div className="group bg-[#F3E8FF] p-10 rounded-[2rem] border border-white/50 transition-all duration-500 hover:shadow-lg">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#022166] shadow-sm">
                        <Stethoscope size={28} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]/50">Fase 02</span>
                        <h3 className="text-2xl font-bold text-[#022166] tracking-tight">Esame Obiettivo</h3>
                        <p className="text-[#022166]/70 font-medium">Valutazione clinica e test funzionali.</p>
                      </div>
                    </div>
                  </div>

                  {/* Fase 3 */}
                  <div className="group bg-[#DCFCE7] p-10 rounded-[2rem] border border-white/50 transition-all duration-500 hover:shadow-lg">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#022166] shadow-sm">
                        <Dumbbell size={28} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]/50">Fase 03</span>
                        <h3 className="text-2xl font-bold text-[#022166] tracking-tight">Trattamento e Esercizio</h3>
                        <p className="text-[#022166]/70 font-medium">Intervento terapeutico e prescrizione di esercizi domiciliari.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



{/* SEZIONE 3: STEP 1 - PRIMO COLLOQUIO */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Colonna Sinistra: Titolo e Label */}
              <div className="lg:col-span-4 sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-[2px] bg-[#55B4FF]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166]">Approfondimento Clinico</span>
                </div>
                <h2 className="text-4xl font-bold text-[#022166] tracking-tight leading-none mb-6">
                  Step 1:<br />Primo Colloquio.
                </h2>
                <p className="text-slate-500 font-medium text-sm leading-relaxed pr-8">
                  La ragione del primo colloquio sarà quella di garantire al fisioterapista di elaborare alcune ipotesi diagnostiche legate alla natura del disturbo.
                </p>
              </div>

              {/* Colonna Destra: Contenuto Dettagliato */}
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
                    Il primo colloquio con il paziente serve a fornire le informazioni più importanti e necessarie per stabilire le sedute da seguire. In questa fase discuteremo insieme di:
                  </p>

                  <div className="grid grid-cols-1 gap-10">
                    {/* Punto 1 */}
                    <div className="flex gap-6">
                      <span className="text-[#55B4FF] font-black text-xl opacity-40">01</span>
                      <div>
                        <h4 className="text-[#022166] font-bold text-lg mb-2 uppercase tracking-tight">Sintomatologia</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">
                          Analisi di tutti i sintomi (difficoltà di movimento, dolore, rigidità o formicolio) con le proprie caratteristiche e le problematiche correlate.
                        </p>
                      </div>
                    </div>

                    {/* Punto 2 */}
                    <div className="flex gap-6">
                      <span className="text-[#55B4FF] font-black text-xl opacity-40">02</span>
                      <div>
                        <h4 className="text-[#022166] font-bold text-lg mb-2 uppercase tracking-tight">Stile di Vita</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">
                          Aspetti legati alla vita quotidiana: lavoro, sport, attività ludiche o qualunque altra attività che possa essere la causa del disturbo.
                        </p>
                      </div>
                    </div>

                    {/* Punto 3 */}
                    <div className="flex gap-6">
                      <span className="text-[#55B4FF] font-black text-xl opacity-40">03</span>
                      <div>
                        <h4 className="text-[#022166] font-bold text-lg mb-2 uppercase tracking-tight">Quadro Medico Generale</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">
                          Diagnosi clinica, presenza di altre patologie, necessità di farmaci o familiarità per specifiche condizioni mediche.
                        </p>
                      </div>
                    </div>

                    {/* Punto 4 */}
                    <div className="flex gap-6">
                      <span className="text-[#55B4FF] font-black text-xl opacity-40">04</span>
                      <div>
                        <h4 className="text-[#022166] font-bold text-lg mb-2 uppercase tracking-tight">Note Significative</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">
                          Qualunque altro aspetto che il paziente o il fisioterapista ritengano rilevante per la completa comprensione del caso.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>





{/* SEZIONE 4: STEP 2 - ESAME OBIETTIVO */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Colonna Sinistra: Titolo e Label */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-[2px] bg-[#55B4FF]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166]">Analisi Funzionale</span>
                </div>
                <h2 className="text-4xl font-bold text-[#022166] tracking-tight leading-none mb-6">
                  Step 2:<br />Esame Obiettivo.
                </h2>
                <p className="text-slate-500 font-medium text-sm leading-relaxed pr-8">
                  La fase clinica in cui le ipotesi formulate durante il colloquio vengono validate attraverso test fisici e misurazioni oggettive.
                </p>
              </div>

              {/* Colonna Destra: Contenuto Dettagliato */}
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
                    Dopo aver trattato con il paziente quali potrebbero essere le cause più probabili del dolore, vi è l'esame obiettivo, cioè la vera e propria visita fisica.
                  </p>

                  {/* Lista Test - Grid a 2 colonne per leggibilità */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {[
                      "Valutazione del movimento attivo",
                      "Valutazione del movimento passivo",
                      "Palpazione",
                      "Valutazione dell'estensibilità muscolare",
                      "Movimento attivo funzionale",
                      "Osservazione statica e dinamica",
                      "Test specifici e ortopedici"
                    ].map((test, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-slate-50">
                        <div className="w-1.5 h-1.5 bg-[#55B4FF] rounded-full"></div>
                        <span className="text-sm font-bold text-[#022166] uppercase tracking-tight">{test}</span>
                      </div>
                    ))}
                  </div>

                  {/* Conclusione Valutazione - Card Evidenziata */}
                  <div className="bg-[#F3E8FF] p-8 rounded-[1.5rem] border border-white/50">
                    <h4 className="text-[#022166] font-black text-[10px] uppercase tracking-[0.2em] mb-4">Esito della valutazione</h4>
                    <p className="text-[#022166]/80 font-medium leading-relaxed mb-6 text-sm md:text-base">
                      Terminato l'esame obiettivo, il fisioterapista mostrerà al paziente gli esiti della valutazione e le radici del problema emerse. Verrà stabilito il piano di trattamento (tipologia, numero di sedute e frequenza) per garantire una risoluzione efficace.
                    </p>
                    <div className="flex items-center gap-2 text-[#022166] font-black text-[10px] uppercase tracking-[0.3em] pt-4 border-t border-[#022166]/10">
                      Pianificazione terapeutica condivisa
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>





          {/* SEZIONE 5: STEP 3 - TRATTAMENTO E ESERCIZI */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Colonna Sinistra: Titolo e Label */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-[2px] bg-[#55B4FF]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166]">Intervento Terapeutico</span>
                </div>
                <h2 className="text-4xl font-bold text-[#022166] tracking-tight leading-none mb-6">
                  Step 3:<br />Trattamento e Autonomia.
                </h2>
                <p className="text-slate-500 font-medium text-sm leading-relaxed pr-8">
                  La fase operativa dove la strategia clinica si trasforma in gesti concreti e prescrizioni personalizzate per il recupero funzionale.
                </p>
              </div>

              {/* Colonna Destra: Contenuto Dettagliato */}
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
                    Al termine della valutazione, il paziente insieme al fisioterapista inizieranno il trattamento preliminare stabilito nelle fasi precedenti.
                  </p>

                  <div className="space-y-6 mb-12">
                    {/* Esercizi Terapeutici */}
                    <div className="p-8 bg-[#DCFCE7] rounded-[1.5rem] border border-white/50">
                      <h4 className="text-[#022166] font-bold text-lg mb-4 flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#022166] rounded-full"></div>
                        Esercizi Terapeutici Mirati
                      </h4>
                      <p className="text-[#022166]/70 text-sm md:text-base leading-relaxed font-medium">
                        Rinforzo muscolare, incremento della mobilità articolare, riduzione della rigidità, miglioramento del controllo motorio, incremento dell'estensibilità e della resistenza muscolare.
                      </p>
                    </div>

                    {/* Tecniche Manuali */}
                    <div className="p-8 bg-[#E0F2FE] rounded-[1.5rem] border border-white/50">
                      <h4 className="text-[#022166] font-bold text-lg mb-4 flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#022166] rounded-full"></div>
                        Tecniche Manuali
                      </h4>
                      <p className="text-[#022166]/70 text-sm md:text-base leading-relaxed font-medium">
                        Mobilizzazioni o manipolazioni articolari e tecniche muscolari specifiche per la riduzione del dolore e il ripristino del movimento.
                      </p>
                    </div>
                  </div>

                  {/* Conclusione e Autonomia */}
                  <div className="border-t border-slate-100 pt-10">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#022166] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <ArrowUpRight size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#022166] mb-3 tracking-tight">Prescrizione ed Esercizio Domiciliare</h4>
                        <p className="text-slate-500 font-medium leading-relaxed italic">
                          "Al termine del trattamento preliminare, il fisioterapista prescriverà al paziente esercizi terapeutici specifici in modo da renderlo autonomo nella gestione del proprio problema anche fuori dallo studio."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>



           {/* SEZIONE 3: CALL TO ACTION - IN STUDIO */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            {/* Background Icon - Activity per richiamare il setting clinico */}
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Activity size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Riabilitazione e Fisioterapia Malavasi</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Riprendi il controllo <br />
                <span className="text-[#55B4FF]">in studio.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Accedi a tecnologie d'avanguardia e a un ambiente progettato per massimizzare i risultati della tua riabilitazione.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-[0_20px_40px_rgba(85,180,255,0.2)] transition-all active:scale-95"
                >
                  Prenota Valutazione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Parla con un Fisioterapista
                </a>
              </div>
            </div>
          </section>




          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/metodo" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna a Modalità
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Hub Clinico</span>
          </div>

        </div>
      </div>
    </main>
  );
}