# Riorganizzazione SEO e navigazione — Fisioterapia Malavasi

Documento di lavoro locale, 19 settembre 2026. Non è una pagina pubblica.

## Perimetro e protezione del lavoro precedente

Stack conservato: Next.js 16.1.6 App Router, React 19.2.3, Tailwind CSS 4, TypeScript e npm. Nessun aggiornamento di dipendenze, cambio hosting o intervento sulla produzione.

Prima dell’intervento erano presenti modifiche locali in 17 file. La baseline usa quello stato, non HEAD. Sono stati conservati hash di 77 file tracciati, diff preesistente, inventario delle 30 route, 60 acquisizioni DOM/metadati/stili (1440 e 390 px) e 14 screenshot. Artefatti in `output/playwright/baseline/`.

Tra i file preesistenti l’intervento modifica soltanto `app/components/navbar.tsx` e il valore numerico nella pagina meniscale. Footer, layout globale, CSS globali, immagini, tracking, cookie, moduli esistenti, endpoint, configurazione Next e metadata ereditati sono preservati.

## Gerarchia della navigazione

- Home: logo → `/`.
- Informazioni: collegamento diretto a `/informazioni`, ripristinato su richiesta al posto di Studio e delle relative sottovoci.
- Trattamenti: panoramica esistente `/trattamenti`; Schiena e colonna; Cervicale, cefalea e vertigini; Spalla; Gomito, polso e mano; Anca e inguine; Ginocchio; Caviglia e piede; Muscoli e tendini; Dolore persistente. Indice completo `/trattamenti/tutti`.
- Percorsi specialistici: muscoloscheletrica, sportiva, pre/post-chirurgica, neurologica (panoramica/Parkinson/ictus), oncologica (panoramica/prostata/seno/intestino/colon), cammino ed equilibrio.
- Modalità: panoramica `/metodo`; seduta fisioterapica; domicilio; Small Class.
- Contatti: pagina esistente con sottomenu Contatti, Lavora con noi e Prenota. La voce autonoma Sedi è stata rimossa su richiesta; le informazioni sulle sedi sono nella pagina Contatti.
- Prenota: CTA esistente `/prenota`.

La fonte unica, comprensiva di tutti i figli, è `app/data/navigation.ts`: viene usata da entrambe le navigazioni, dai nuovi hub e dall’indice. Le categorie Spalla e Ginocchio riusano le landing generali esistenti. Cervicalgia resta `/trattamenti/cefalee-vertigini`, senza rimuovere le parti su cefalea o vertigini. Team e Metodo puntano ad ancore già disponibili; non è stata creata una pagina Prima visita.

Desktop da 1440 px: su richiesta successiva è stato ripristinato il design precedente, con tendine bianche compatte, bordi arrotondati, ombra e voci maiuscole. Apertura al passaggio del mouse e secondo livello laterale; link e pulsanti restano distinti per uso da tastiera e tocco. Pannelli limitati allo spazio disponibile, con scorrimento interno e apertura laterale adattata ai bordi del viewport. Mobile/tablet: accordion gerarchici nel pannello con focus contenuto, Escape, ritorno al pulsante, scorrimento interno e ripristino dello scroll di pagina. Tutti i link sono presenti nell’HTML iniziale, anche nei pannelli chiusi.

## Template e conversioni

- Le 30 nuove landing muscoloscheletriche riprendono le pagine menisco e spalla: hero/questionario blu, riconoscimento della difficoltà, approccio, percorso, FAQ, collegamenti pertinenti e CTA. Dati originali per condizione, template `MusculoskeletalPage` e form `NewAssessmentForm`, senza import da parte delle vecchie pagine.
- Le quattro oncologiche mantengono il ritmo della panoramica oncologica: hero empatica, pilastri, area clinica chiara, percorso, continuità a casa da concordare e CTA blu.
- Parkinson, ictus e cammino usano la grammatica della panoramica neurologica, con pannello clinico blu, obiettivi funzionali e attenzione alle esigenze familiari. Le pagine restano distinte per contenuto e obiettivo.
- I sei hub orientano tra bisogni e approfondimenti; l’indice completo affianca la panoramica esistente senza sostituirla.
- Le due sedi utilizzano indirizzi e contatti documentati; non attribuiscono fotografie o servizi esclusivi a una sede.
- Nessuna recensione nuova o reinterpretazione delle testimonianze esistenti.

Il nuovo questionario mantiene il contratto JSON dell’endpoint `/api/send`, con passaggi condizionali Altro, referto facoltativo e domicilio; esito positivo verso `/conferma`. Nessun endpoint o evento analytics nuovo. La Privacy Policy delle nuove pagine punta alla route valida `/privacy`. I form precedenti non vengono modificati.

## SEO

Ogni nuova pagina espone HTML renderizzato, un H1, title e description specifici, canonical autonomo assoluto, Open Graph/Twitter e breadcrumb visibili con `BreadcrumbList`. Dominio usato: `https://www.fisioterapiamalavasi.it`; URL senza slash finale, come nel progetto.

La nuova sitemap comprende 74 URL: 28 pagine pubbliche precedenti e 46 nuove. `/conferma`, `/grazie` e gli endpoint sono esclusi dall’elenco, senza cambiare accessibilità o direttive delle pagine. Nessun `lastmod` non verificabile, URL localhost, rating o entità aziendale inventata. Robots e metadata delle pagine precedenti restano invariati.

## Fonti cliniche e criteri editoriali

Riferimenti e collegamento fra affermazioni e pagine:

- [Fonti per le pagine muscoloscheletriche](fonti-muscoloscheletriche.md).
- [Fonti per oncologia, neurologia e cammino](fonti-percorsi-specialistici.md).

Le introduzioni dei nuovi hub sono orientative e usano le stesse fonti dei rispettivi approfondimenti: Schiena/colonna (discopatie, stenosi e lombalgia); Cervicale (ICHD-3, NICE NG127 e fonti sulle vertigini); Gomito/polso/mano (fonti AAOS/NHS specifiche); Anca (artrosi e protesi); Caviglia/piede (distorsioni, fascite, dolore al tallone); Muscoli/tendini (lesioni e sovraccarico).

Fonti esterne sostengono le informazioni cliniche, non dimostrano che lo studio eroghi ogni prestazione citata nelle linee guida. Nei nuovi testi non vengono attribuite competenze pelviche, stomaterapiche o manovre vestibolari non documentate. La fisioterapia oncologica è presentata come supporto funzionale alle cure, non trattamento del tumore. Nessun risultato garantito, percentuale inventata o tempo universale.

Intestino offre un orientamento generale ai bisogni nei percorsi oncologici intestinali e collega Colon. Colon approfondisce il recupero funzionale dopo chirurgia, con vincoli del percorso medico. Introduzioni, bisogni, percorso e FAQ differenti; canonical autonomi.

## Modifica meniscale autorizzata

Solo il nodo testuale della card «Settimane per tornare / alla vita quotidiana» cambia da `2-4` a `6-8`. Posizione, classi, a capo, resto del testo e altre tempistiche restano identici. È una modifica editoriale richiesta dal committente, da sottoporre allo studio: non costituisce una nuova affermazione clinica validata da questa attività.

## Problemi preesistenti e conferme prima della pubblicazione

- Le vecchie pagine ereditano title/description generici; nel codice iniziale non sono definiti canonical o dati strutturati per pagina. Non modificati.
- Alcuni vecchi moduli collegano `/privacy-policy`, mentre la route disponibile è `/privacy`. Segnalato, non corretto nei contenuti vincolati.
- CAP discordanti: Cavezzo 41032/41011, Rovereto 41039/41016. Non ripresi nelle nuove sedi.
- Orari generali del footer diversi dagli orari dettagliati di Contatti e mappa; attribuzione alle singole sedi non documentata. Non aggiunti alle nuove schede.
- Embed mappa Rovereto in Contatti contiene identificativi dubbi. Nuove sedi usano i link alle indicazioni stradali già documentati; nessuna correzione alla pagina esistente.
- Le foto locali non sono associate con certezza a una delle due sedi: nessuna attribuzione nuova.
- Confermare presa in carico dei percorsi oncologici specifici, organizzazione del raccordo medico e disponibilità domiciliare; revisionare clinicamente i nuovi testi e il numero meniscale prima di pubblicare.
- Il CSS globale preesistente usa `scroll-behavior: smooth` senza attributo HTML dedicato segnalato da Next; non modificato fuori perimetro.

## Mappa delle pagine esistenti

Tutte le seguenti URL sono preservate:

| URL esistente | Gestione |
|---|---|
| `/` | Preservata |
| `/conferma` | Preservata |
| `/contatti` | Preservata |
| `/contatti/lavora-con-noi` | Preservata |
| `/cookie` | Preservata |
| `/grazie` | Preservata |
| `/informazioni` | Preservata |
| `/metodo` | Preservata |
| `/metodo/seduta-fisioterapica` | Preservata |
| `/metodo/seduta-fisioterapica-domiciliare` | Preservata |
| `/metodo/small-class` | Preservata |
| `/prenota` | Preservata |
| `/privacy` | Preservata |
| `/trattamenti` | Preservata |
| `/trattamenti/cefalee-vertigini` | Preservata |
| `/trattamenti/chirurgica` | Preservata |
| `/trattamenti/dolore-persistente` | Preservata |
| `/trattamenti/lombalgia-sciatalgia` | Preservata |
| `/trattamenti/muscoloscheletrica` | Preservata |
| `/trattamenti/neurologica` | Preservata |
| `/trattamenti/oncologica` | Preservata |
| `/trattamenti/patologie-ginocchio` | Preservata |
| `/trattamenti/patologie-ginocchio/gonartrosi` | Preservata |
| `/trattamenti/patologie-ginocchio/lca` | Preservata |
| `/trattamenti/patologie-ginocchio/lesioni-meniscali` | Contenuto invariato salvo valore numerico autorizzato |
| `/trattamenti/patologie-spalla` | Preservata |
| `/trattamenti/patologie-spalla/capsulite-adesiva` | Preservata |
| `/trattamenti/patologie-spalla/lussazione-spalla` | Preservata |
| `/trattamenti/patologie-spalla/tendinopatia-cuffia` | Preservata |
| `/trattamenti/sportiva` | Preservata |

## Mappa delle nuove pagine

46 URL: 30 muscoloscheletriche, 7 specialistiche, 6 hub, indice e 2 sedi.

| Nuova URL | Famiglia |
|---|---|
| [/sedi/cavezzo](http://127.0.0.1:3000/sedi/cavezzo) | Sede |
| [/sedi/rovereto-sulla-secchia](http://127.0.0.1:3000/sedi/rovereto-sulla-secchia) | Sede |
| [/trattamenti/anca-inguine](http://127.0.0.1:3000/trattamenti/anca-inguine) | Hub orientativo |
| [/trattamenti/anca-inguine/artrosi-anca](http://127.0.0.1:3000/trattamenti/anca-inguine/artrosi-anca) | Muscoloscheletrica |
| [/trattamenti/anca-inguine/pubalgia-dolore-inguinale](http://127.0.0.1:3000/trattamenti/anca-inguine/pubalgia-dolore-inguinale) | Muscoloscheletrica |
| [/trattamenti/anca-inguine/riabilitazione-protesi-anca](http://127.0.0.1:3000/trattamenti/anca-inguine/riabilitazione-protesi-anca) | Muscoloscheletrica |
| [/trattamenti/caviglia-piede](http://127.0.0.1:3000/trattamenti/caviglia-piede) | Hub orientativo |
| [/trattamenti/caviglia-piede/distorsione-instabilita-caviglia](http://127.0.0.1:3000/trattamenti/caviglia-piede/distorsione-instabilita-caviglia) | Muscoloscheletrica |
| [/trattamenti/caviglia-piede/fascite-plantare](http://127.0.0.1:3000/trattamenti/caviglia-piede/fascite-plantare) | Muscoloscheletrica |
| [/trattamenti/caviglia-piede/tallonite-sperone-calcaneare](http://127.0.0.1:3000/trattamenti/caviglia-piede/tallonite-sperone-calcaneare) | Muscoloscheletrica |
| [/trattamenti/cervicale-cefalea-vertigini](http://127.0.0.1:3000/trattamenti/cervicale-cefalea-vertigini) | Hub orientativo |
| [/trattamenti/cervicale-cefalea-vertigini/cefalea-cervicogenica](http://127.0.0.1:3000/trattamenti/cervicale-cefalea-vertigini/cefalea-cervicogenica) | Muscoloscheletrica |
| [/trattamenti/cervicale-cefalea-vertigini/colpo-di-frusta](http://127.0.0.1:3000/trattamenti/cervicale-cefalea-vertigini/colpo-di-frusta) | Muscoloscheletrica |
| [/trattamenti/cervicale-cefalea-vertigini/ernia-cervicale-radicolopatia](http://127.0.0.1:3000/trattamenti/cervicale-cefalea-vertigini/ernia-cervicale-radicolopatia) | Muscoloscheletrica |
| [/trattamenti/cervicale-cefalea-vertigini/vertigini-disturbi-equilibrio](http://127.0.0.1:3000/trattamenti/cervicale-cefalea-vertigini/vertigini-disturbi-equilibrio) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano](http://127.0.0.1:3000/trattamenti/gomito-polso-mano) | Hub orientativo |
| [/trattamenti/gomito-polso-mano/dito-a-scatto](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/dito-a-scatto) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano/dolore-gomito](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/dolore-gomito) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano/epicondilite-epitrocleite](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/epicondilite-epitrocleite) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano/fratture-mano-dita](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/fratture-mano-dita) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano/riabilitazione-chirurgia-gomito](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/riabilitazione-chirurgia-gomito) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano/rizoartrosi](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/rizoartrosi) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano/sindrome-de-quervain](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/sindrome-de-quervain) | Muscoloscheletrica |
| [/trattamenti/gomito-polso-mano/tunnel-carpale](http://127.0.0.1:3000/trattamenti/gomito-polso-mano/tunnel-carpale) | Muscoloscheletrica |
| [/trattamenti/muscoli-tendini](http://127.0.0.1:3000/trattamenti/muscoli-tendini) | Hub orientativo |
| [/trattamenti/muscoli-tendini/contratture-lesioni-muscolari](http://127.0.0.1:3000/trattamenti/muscoli-tendini/contratture-lesioni-muscolari) | Muscoloscheletrica |
| [/trattamenti/muscoli-tendini/riabilitazione-lesioni-tendinee](http://127.0.0.1:3000/trattamenti/muscoli-tendini/riabilitazione-lesioni-tendinee) | Muscoloscheletrica |
| [/trattamenti/muscoli-tendini/tendinopatie-borsiti](http://127.0.0.1:3000/trattamenti/muscoli-tendini/tendinopatie-borsiti) | Muscoloscheletrica |
| [/trattamenti/neurologica/ictus](http://127.0.0.1:3000/trattamenti/neurologica/ictus) | Neurologica |
| [/trattamenti/neurologica/parkinson](http://127.0.0.1:3000/trattamenti/neurologica/parkinson) | Neurologica |
| [/trattamenti/oncologica/colon](http://127.0.0.1:3000/trattamenti/oncologica/colon) | Oncologica |
| [/trattamenti/oncologica/intestino](http://127.0.0.1:3000/trattamenti/oncologica/intestino) | Oncologica |
| [/trattamenti/oncologica/prostata](http://127.0.0.1:3000/trattamenti/oncologica/prostata) | Oncologica |
| [/trattamenti/oncologica/seno](http://127.0.0.1:3000/trattamenti/oncologica/seno) | Oncologica |
| [/trattamenti/patologie-ginocchio/distorsione-instabilita](http://127.0.0.1:3000/trattamenti/patologie-ginocchio/distorsione-instabilita) | Muscoloscheletrica |
| [/trattamenti/patologie-ginocchio/lesioni-crociato-posteriore-legamenti-collaterali](http://127.0.0.1:3000/trattamenti/patologie-ginocchio/lesioni-crociato-posteriore-legamenti-collaterali) | Muscoloscheletrica |
| [/trattamenti/patologie-ginocchio/riabilitazione-protesi-ginocchio](http://127.0.0.1:3000/trattamenti/patologie-ginocchio/riabilitazione-protesi-ginocchio) | Muscoloscheletrica |
| [/trattamenti/patologie-spalla/riabilitazione-chirurgia-spalla](http://127.0.0.1:3000/trattamenti/patologie-spalla/riabilitazione-chirurgia-spalla) | Muscoloscheletrica |
| [/trattamenti/rieducazione-cammino-equilibrio](http://127.0.0.1:3000/trattamenti/rieducazione-cammino-equilibrio) | Cammino ed equilibrio |
| [/trattamenti/schiena-colonna](http://127.0.0.1:3000/trattamenti/schiena-colonna) | Hub orientativo |
| [/trattamenti/schiena-colonna/ernia-disco-discopatie](http://127.0.0.1:3000/trattamenti/schiena-colonna/ernia-disco-discopatie) | Muscoloscheletrica |
| [/trattamenti/schiena-colonna/riabilitazione-chirurgia-lombare](http://127.0.0.1:3000/trattamenti/schiena-colonna/riabilitazione-chirurgia-lombare) | Muscoloscheletrica |
| [/trattamenti/schiena-colonna/scoliosi](http://127.0.0.1:3000/trattamenti/schiena-colonna/scoliosi) | Muscoloscheletrica |
| [/trattamenti/schiena-colonna/spondilolisi-spondilolistesi](http://127.0.0.1:3000/trattamenti/schiena-colonna/spondilolisi-spondilolistesi) | Muscoloscheletrica |
| [/trattamenti/schiena-colonna/stenosi-lombare](http://127.0.0.1:3000/trattamenti/schiena-colonna/stenosi-lombare) | Muscoloscheletrica |
| [/trattamenti/tutti](http://127.0.0.1:3000/trattamenti/tutti) | Indice completo |

## Esiti delle verifiche della prima configurazione

Verifiche eseguite in locale il 19 settembre 2026. I report e gli screenshot sono conservati in `output/playwright/`.

| Controllo | Esito e prova |
|---|---|
| Preservazione dei file | Confronto degli hash dei 77 file tracciati con lo stato iniziale: cambiano solo navbar e nodo meniscale. Le modifiche locali precedenti sono preservate. `preservation-results.json` |
| Preservazione delle 30 pagine | 60 confronti a 1440/390 px: testo, titoli, sezioni, immagini, link/CTA, campi dei moduli, metadata e stili tipografici uguali; consentita esclusivamente la sostituzione meniscale. Nessuna differenza inattesa. `baseline/rendered.json`, `after/rendered.json` |
| Inventario route | 76 pagine esplicite totali: 30 precedenti + 46 nuove, senza collisioni. Tutte le nuove route restituiscono 200. Una route inesistente restituisce 404. |
| Nuove pagine | 150 acquisizioni: tutte le 46 a 375/768/1440 px e sei campioni a 390/1024 px. Controllati HTML iniziale, H1, title/description distinti, canonical, BreadcrumbList, immagini, ancore, link e overflow. `new-pages/results.json` |
| Destinazioni e sitemap | 68 destinazioni collegate dai nuovi contenuti rispondono 200; collegamenti dei menu verificati separatamente. Sitemap valida con 74 URL pubbliche, senza conferme/API né `lastmod`. |
| Navigazione | 124/124 controlli superati: 110 principali + 14 integrativi. Tastiera, Tab/Shift+Tab, Escape, focus, click esterno, pagina attiva, navigazione/ancore, blocco e ripristino dello scroll, scorrimento interno, desktop 1440/1920 e compatto 375/390/768/1024. Verificato anche viewport basso 1440×500. `nav-audit/results.json`, `edge-results.json` |
| Parità dei menu | Medesime 74 destinazioni uniche in desktop e mobile; tutti gli href sono nel markup iniziale anche a pannelli chiusi. |
| Questionario | 72/72 controlli superati: 66 su flussi/payload/allegati e 6 sul cambio landing. Entrambi i rami Altro, domicilio/sede, avanti/indietro, campi obbligatori, email facoltativa, privacy, PDF e bytes, rimozione, formato/dimensione invalidi, doppio invio, errore e nuovo tentativo, redirect a `/conferma`. `form-audit/results.json`, `route-change-results.json` |
| Protezione degli invii | Tre POST simulati intercettati nel browser: 500, 200, 200. Nessuna richiesta reale a `/api/send`, nessuna email o prenotazione inviata. Host esterni/tracking bloccati e consensi disabilitati nei profili di test. |
| Build | `npm run build` completata: compilazione, TypeScript e generazione statica 81/81 completati. `build-final.log` |
| TypeScript | `npx tsc --noEmit --incremental false` superato. `typescript-final.log` |
| Lint | `npm run lint -- --format json`: zero errori, 132 avvisi preesistenti; nessun avviso nei nuovi sorgenti. `lint-final.json` |

L’audit ha individuato spazi insufficienti per alcune parole nelle card dei nuovi template a 768 px e nell’indice a 1024 px. Corretti padding e possibilità di andare a capo esclusivamente nei nuovi componenti. Il controllo conclusivo comprende altre 52 acquisizioni, senza overflow né altre anomalie: `new-pages-final/results.json`. La ricerca iniziale di segnaposto segnalava per errore «TODO» dentro «metodo»: corretta con confini di parola; non era testo provvisorio nel sito.

La verifica visuale aggiuntiva comprende 48 combinazioni dei sette percorsi specialistici, sei hub, indice e due sedi; dettagli in `content-audit/README.md`. Screenshot prima/dopo delle pagine precedenti in `baseline/` e `after/`; menu in `nav-audit/`; nuove pagine e questionario in `new-pages/`, `content-audit/`, `form-audit/`.

Il CSS mobile preesistente usa `content-visibility:auto`: per catturare interamente le nuove pagine è stato applicato un override temporaneo nel solo browser di test, senza cambiare i file del sito. Durante ricompilazioni concorrenti sono comparsi un 404 e un errore risorse/RSC transitori: le route sono state ricontrollate con esito 200; il controllo dedicato Rovereto non ha rilevato errori console. Nessuna modifica alle impostazioni di produzione per queste osservazioni.

La build esplorativa iniziale interrotta è stata sostituita da build complete riuscite. Alla prima consegna locale non erano stati eseguiti commit, push o deploy; la successiva richiesta di push è registrata sotto.

## Aggiornamento del menu richiesto dopo la consegna

Intervento limitato a `app/components/navbar.tsx`, `app/data/navigation.ts` e a questo report. Nessuna pagina clinica, sede, modulo, metadata o URL modificata.

- Eliminata la voce principale Sedi.
- Ripristinato Contatti → Contatti, Lavora con noi, Prenota; Lavora con noi è stato spostato da Studio.
- Ripristinate tendine compatte e flyout laterali con palette, maiuscole, spaziature, bordi e ombra del menu originale conservato nella baseline.
- Apertura desktop al passaggio del mouse, con continuità fra tendina e flyout; su touch rimangono pulsanti dedicati e accordion.
- Successivo adeguamento mobile: pannello bianco a schermo intero, senza margini esterni, angoli arrotondati o sfondo del sito visibile. Verificati 375/390/768/1024 px, altezza dinamica del viewport, blocco dello sfondo e chiusura con Escape; lint del componente superato.
- Mantenuti markup iniziale completo, evidenza della pagina attiva, accesso da tastiera, Escape e ritorno del focus. Le destinazioni uniche sono ora 72, identiche tra desktop e mobile (esclusa Home aggiuntiva nel pannello mobile).
- Verifiche della revisione: 73 controlli principali e 23 aggiuntivi, inclusi tutti i flyout su finestra 1440×500, passaggi con Tab/Shift+Tab, focus con Escape, hover fra livelli, navigazione e viewport mobile. Lint mirato e TypeScript superati. Build locale completata.
- Screenshot e verifiche di questa revisione: `output/playwright/menu-restyle/`. I conteggi e screenshot della sezione precedente documentano la prima configurazione, sostituita per il solo menu da questa revisione.

## Preparazione del push su main richiesto dal committente

Dopo le revisioni del menu, il committente ha richiesto il push su `main`. La voce Informazioni torna a essere un collegamento diretto a `/informazioni`, senza il sottomenu Studio. Contatti conserva Contatti, Lavora con noi e Prenota; il menu mobile occupa tutto lo schermo.

La versione preparata comprende l’intero sito nello stato locale verificato: nuove pagine e navigazione, modifica meniscale e le 17 modifiche locali preesistenti, conservate senza ulteriori interventi. Questo mantiene allineati il codice trasferito e l’anteprima approvata, incluse le impostazioni di qualità delle immagini e caricamento degli script. Le modifiche preesistenti rimangono distinguibili nel diff e nella baseline locale.

Il commit include i sorgenti `app/`, `next.config.ts` e i documenti `docs/`. Screenshot, snapshot, report grezzi del browser e file `.env` restano locali. La revisione clinica e dei dati descritta in questo documento resta di competenza dello studio; il push è stato richiesto esplicitamente dopo la consegna dell’anteprima.

## Anteprima e riavvio

Server di sviluppo verificato e lasciato attivo su [http://127.0.0.1:3000](http://127.0.0.1:3000). [Indice completo dei trattamenti](http://127.0.0.1:3000/trattamenti/tutti) e [sitemap](http://127.0.0.1:3000/sitemap.xml).

Per riavviare, dalla directory del progetto, quando la porta è libera:

```sh
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Se la porta è occupata da un processo estraneo, scegliere un’altra porta libera senza interromperlo. Il server locale non costituisce pubblicazione del sito. Restano da approvare dallo studio i nuovi testi clinici, l’effettiva disponibilità dei percorsi specifici, i dati delle sedi e la variazione meniscale.

## Inventario dei file dell’intervento

File preesistenti modificati rispetto alla baseline:

- `app/components/navbar.tsx`
- `app/trattamenti/patologie-ginocchio/lesioni-meniscali/page.tsx`

File sorgente/documentazione aggiunti:

- `app/components/new-pages/Breadcrumbs.tsx`
- `app/components/new-pages/HubPage.tsx`
- `app/components/new-pages/LocationPage.tsx`
- `app/components/new-pages/MusculoskeletalPage.tsx`
- `app/components/new-pages/NewAssessmentForm.tsx`
- `app/components/new-pages/SpecialistPage.tsx`
- `app/data/locations.ts`
- `app/data/musculoskeletal.ts`
- `app/data/navigation.ts`
- `app/data/site-routes.ts`
- `app/data/specialist-pages.ts`
- `app/data/treatment-hubs.ts`
- `app/lib/page-seo.ts`
- `app/sedi/cavezzo/page.tsx`
- `app/sedi/rovereto-sulla-secchia/page.tsx`
- `app/sitemap.ts`
- `app/trattamenti/anca-inguine/artrosi-anca/page.tsx`
- `app/trattamenti/anca-inguine/page.tsx`
- `app/trattamenti/anca-inguine/pubalgia-dolore-inguinale/page.tsx`
- `app/trattamenti/anca-inguine/riabilitazione-protesi-anca/page.tsx`
- `app/trattamenti/caviglia-piede/distorsione-instabilita-caviglia/page.tsx`
- `app/trattamenti/caviglia-piede/fascite-plantare/page.tsx`
- `app/trattamenti/caviglia-piede/page.tsx`
- `app/trattamenti/caviglia-piede/tallonite-sperone-calcaneare/page.tsx`
- `app/trattamenti/cervicale-cefalea-vertigini/cefalea-cervicogenica/page.tsx`
- `app/trattamenti/cervicale-cefalea-vertigini/colpo-di-frusta/page.tsx`
- `app/trattamenti/cervicale-cefalea-vertigini/ernia-cervicale-radicolopatia/page.tsx`
- `app/trattamenti/cervicale-cefalea-vertigini/page.tsx`
- `app/trattamenti/cervicale-cefalea-vertigini/vertigini-disturbi-equilibrio/page.tsx`
- `app/trattamenti/gomito-polso-mano/dito-a-scatto/page.tsx`
- `app/trattamenti/gomito-polso-mano/dolore-gomito/page.tsx`
- `app/trattamenti/gomito-polso-mano/epicondilite-epitrocleite/page.tsx`
- `app/trattamenti/gomito-polso-mano/fratture-mano-dita/page.tsx`
- `app/trattamenti/gomito-polso-mano/page.tsx`
- `app/trattamenti/gomito-polso-mano/riabilitazione-chirurgia-gomito/page.tsx`
- `app/trattamenti/gomito-polso-mano/rizoartrosi/page.tsx`
- `app/trattamenti/gomito-polso-mano/sindrome-de-quervain/page.tsx`
- `app/trattamenti/gomito-polso-mano/tunnel-carpale/page.tsx`
- `app/trattamenti/muscoli-tendini/contratture-lesioni-muscolari/page.tsx`
- `app/trattamenti/muscoli-tendini/page.tsx`
- `app/trattamenti/muscoli-tendini/riabilitazione-lesioni-tendinee/page.tsx`
- `app/trattamenti/muscoli-tendini/tendinopatie-borsiti/page.tsx`
- `app/trattamenti/neurologica/ictus/page.tsx`
- `app/trattamenti/neurologica/parkinson/page.tsx`
- `app/trattamenti/oncologica/colon/page.tsx`
- `app/trattamenti/oncologica/intestino/page.tsx`
- `app/trattamenti/oncologica/prostata/page.tsx`
- `app/trattamenti/oncologica/seno/page.tsx`
- `app/trattamenti/patologie-ginocchio/distorsione-instabilita/page.tsx`
- `app/trattamenti/patologie-ginocchio/lesioni-crociato-posteriore-legamenti-collaterali/page.tsx`
- `app/trattamenti/patologie-ginocchio/riabilitazione-protesi-ginocchio/page.tsx`
- `app/trattamenti/patologie-spalla/riabilitazione-chirurgia-spalla/page.tsx`
- `app/trattamenti/rieducazione-cammino-equilibrio/page.tsx`
- `app/trattamenti/schiena-colonna/ernia-disco-discopatie/page.tsx`
- `app/trattamenti/schiena-colonna/page.tsx`
- `app/trattamenti/schiena-colonna/riabilitazione-chirurgia-lombare/page.tsx`
- `app/trattamenti/schiena-colonna/scoliosi/page.tsx`
- `app/trattamenti/schiena-colonna/spondilolisi-spondilolistesi/page.tsx`
- `app/trattamenti/schiena-colonna/stenosi-lombare/page.tsx`
- `app/trattamenti/tutti/page.tsx`
- `docs/fonti-muscoloscheletriche.md`
- `docs/fonti-percorsi-specialistici.md`
- `docs/riorganizzazione-seo-malavasi.md`

Artefatti di verifica e screenshot: `output/playwright/`. Log tecnici del browser: `.playwright-cli/`. Non fanno parte delle pagine pubbliche.
