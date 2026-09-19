# Fonti e confini dei nuovi percorsi specialistici

Documento di lavoro interno. Non è una pagina del sito e non sostituisce la revisione clinica dello studio.

Data di consultazione: 19 settembre 2026. I nuovi contenuti sono originali; le fonti sostengono il perimetro clinico, non dimostrano l'offerta effettiva di un servizio da parte dello studio. Nessuna vecchia pagina è stata riscritta durante questa attività.

## Pagine e template

| Nuova URL | Intento distinto | Famiglia visiva |
| --- | --- | --- |
| `/trattamenti/oncologica/prostata` | Forza, fatigue e attività quotidiane durante/dopo le cure; separazione dai percorsi pelvici dedicati | Oncologica |
| `/trattamenti/oncologica/seno` | Mobilità di spalla/braccio, rigidità, cicatrici e inquadramento del linfedema | Oncologica |
| `/trattamenti/oncologica/intestino` | Orientamento generale ai bisogni motori nei diversi percorsi oncologici intestinali | Oncologica |
| `/trattamenti/oncologica/colon` | Recupero motorio dopo chirurgia del colon, dimissione, attività e carichi; eventuale stomia | Oncologica |
| `/trattamenti/neurologica/parkinson` | Continuità del lavoro motorio, equilibrio e attività nella malattia di Parkinson | Neurologica |
| `/trattamenti/neurologica/ictus` | Obiettivi funzionali dopo ictus ischemico o emorragico, partecipazione della persona e caregiver | Neurologica |
| `/trattamenti/rieducazione-cammino-equilibrio` | Funzione trasversale: cammino, trasferimenti, equilibrio e bisogni di approfondimento | Neurologica |

Il template dedicato `app/components/new-pages/SpecialistPage.tsx` e i dati `app/data/specialist-pages.ts` sono utilizzati soltanto dalle nuove route. Riprendono contenitori, colori, tipografia, card e funnel delle pagine locali oncologica e neurologica: hero, pilastri, area clinica, percorso, possibilità del domicilio, FAQ, risorse pertinenti, richiesta di valutazione. Le pagine originarie non importano il nuovo template.

Intestino e Colon hanno testi, bisogni, tappe e FAQ differenti. Intestino collega esplicitamente Colon. Entrambe hanno canonical autonomo. Cammino ed equilibrio ha un solo URL, condiviso nei collegamenti da neurologia e dagli altri percorsi.

## Documentazione locale dell'offerta

La pagina esistente `app/trattamenti/oncologica/page.tsx` documenta fatigue, linfedema, drenaggio manuale/bendaggi, mobilità, cicatrici, recupero post-mastectomia, esercizio adattato e collaborazione con i curanti. La pagina esistente `app/trattamenti/neurologica/page.tsx` documenta Parkinson, esiti di ictus ischemico ed emorragico, equilibrio, autonomia e caregiver. Il domicilio è già presentato nelle due pagine e in `/metodo/seduta-fisioterapica-domiciliare`.

Non è stata trovata documentazione locale di riabilitazione del pavimento pelvico, trattamento delle disfunzioni sessuali, stomaterapia, logopedia o servizio neuropsicologico. Nessuno di questi viene presentato come prestazione dello studio nelle nuove pagine. Il nuovo copy condiziona la possibilità del domicilio a valutazione e disponibilità, senza attribuire prestazioni a una sede specifica.

## Mappa delle affermazioni e fonti

| Pagina / argomento | Affermazioni sostenute e impiego | Fonte |
| --- | --- | --- |
| Prostata | Fatigue nella terapia di deprivazione androgenica; esercizio aerobico e di forza supervisionato a supporto di fatigue/qualità di vita. Nessun dosaggio universale riprodotto nel copy. | [NICE NG131, raccomandazioni 1.4.18–1.4.19](https://www.nice.org.uk/guidance/ng131/chapter/Recommendations) |
| Seno | Valutazione fisioterapica per ridotta mobilità persistente di braccio/spalla dopo chirurgia o radioterapia; esercizi adattati; inquadramento del linfedema, attività fisica e compressione individualizzate. | [NICE NG101, sezione 1.14](https://www.nice.org.uk/guidance/ng101/chapter/Recommendations) |
| Percorsi oncologici: fatigue e attività | La fatigue può accompagnare le cure; l'attività adattata e il supporto alla funzione si concordano con il team, senza promettere risoluzione o usare percentuali. | [National Cancer Institute, Cancer Fatigue](https://www.cancer.gov/about-cancer/treatment/side-effects/fatigue) |
| Intestino | La sede intestinale non coincide sempre con il colon. Orientamento tra intestino tenue e area colorettale, senza presentare protocolli oncologici. | [National Cancer Institute, Small Intestine Cancer](https://www.cancer.gov/types/small-intestine), [Colorectal Cancer](https://www.cancer.gov/types/colorectal) |
| Colon | Il percorso può comprendere chirurgia e, in alcuni casi, colostomia/ileostomia. La stomia non viene descritta come obbligatoria. | [NHS, Treatment for bowel cancer](https://www.nhs.uk/conditions/bowel-cancer/treatment/) |
| Colon e stomia | Ripresa graduale, attenzione ai carichi dopo chirurgia e distinzione tra lavoro motorio e cura della stomia. Non si trasferiscono tempi medi o prescrizioni alimentari alla landing. | [NHS, Recovery and lifestyle changes after a colostomy](https://www.nhs.uk/tests-and-treatments/colostomy/recovery-and-lifestyle-changes-after-a-colostomy/) |
| Parkinson | Indicazioni per valutazione e attività fisica anche nelle fasi iniziali; fisioterapia specifica per problemi motori/equilibrio; distinzione dai bisogni logopedici. | [NICE NG71, sezione 1.7](https://www.nice.org.uk/guidance/ng71/chapter/Recommendations) |
| Parkinson: pratica funzionale | Lavoro su cammino e attività funzionali pertinenti alla persona. Nessun metodo proprietario, dispositivo o certificazione è attribuito allo studio. | [APTA/ANPT, Physical Therapist Management of Parkinson Disease](https://www.neuropt.org/practice-resources/anpt-clinical-practice-guidelines/pt-management-of-parkinson-disease), [testo della linea guida su PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9046970/) |
| Post-ictus | Attività orientate agli obiettivi, bisogni individuali e caregiver; fisioterapia per difficoltà di movimento/equilibrio. Approccio coordinato con gli altri interventi. | [NICE NG236, sezioni 1.2 e 1.13](https://www.nice.org.uk/guidance/ng236/chapter/Recommendations) |
| Cammino, equilibrio e cadute | Esercizio individualizzato e progressivo; forza/equilibrio/coordinazione; rischio di caduta con fattori non solo motori. La linea guida ha popolazione anziana o di almeno 50 anni a rischio aumentato: non viene estesa come protocollo universale a tutti i pazienti. | [NICE NG249, sezioni 1.2–1.3](https://www.nice.org.uk/guidance/ng249/chapter/Recommendations/) |
| Cammino: comparsa improvvisa e vertigini | Necessità di valutare cause diverse; difficoltà improvvise associate a segni neurologici richiedono assistenza urgente. Nessuna attribuzione automatica alla cervicale. | [NICE NG127, sezione 1.2](https://www.nice.org.uk/guidance/ng127/chapter/Recommendations-for-adults-aged-over-16), [NHS, Vertigo](https://www.nhs.uk/conditions/vertigo/) |

Modalità di consultazione: i testi delle raccomandazioni NICE e i numeri dei paragrafi sono stati letti nei risultati indicizzati del motore di ricerca. Alcune aperture dirette di NICE hanno restituito HTTP 403 al browser di ricerca; non si dichiara quindi il download integrale di quelle linee guida. NCI, NHS e ANPT sono stati consultati nei contenuti accessibili o indicizzati delle rispettive fonti primarie. Le fonti si riferiscono alla redazione corrente e vanno ricontrollate in fase di revisione clinica/pubblicazione.

## Confini mantenuti nei nuovi testi

- Nessuna fisioterapia presentata come cura del tumore o sostituzione delle terapie mediche.
- Nessuna promessa di guarigione, neuroprotezione o arresto del Parkinson, recupero completo post-ictus o assenza futura di cadute.
- Nessuna percentuale, numero standard di sedute, tempo universale di recupero o programma di esercizi da autoadottare.
- Nessuna recensione o caso clinico inserito; nessuna qualifica professionale inventata.
- Nessuna diagnosi desunta dal solo sintomo; chiari riferimenti ai curanti quando la funzione non esaurisce il bisogno.
- Nessuna nuova forma di raccolta dati: CTA a `/prenota`, telefono già presente e modalità domiciliare esistente. FAQ HTML native e contenuto renderizzato sul server.

## Verifiche richieste allo studio prima della pubblicazione

1. Rilettura clinica di tutti i nuovi copy e conferma del perimetro effettivo dei quattro percorsi oncologici specifici.
2. Conferma delle modalità di collaborazione con oncologo, chirurgo, neurologo e altri professionisti: non si dichiarano convenzioni, team interni o accordi formali non documentati.
3. Conferma della disponibilità concreta del domicilio e dell'appropriatezza nelle varie condizioni, senza generalizzare la disponibilità a ogni zona o situazione.
4. Conferma delle modalità di presa in carico del linfedema/cicatrici e delle eventuali precauzioni da comunicare al singolo paziente.
5. Nessuna estensione a pavimento pelvico, stomaterapia, logopedia o protocolli vestibolari specialistici senza documentazione e revisione specifiche.

La variazione numerica meniscale richiesta dal committente è distinta da queste nuove pagine: non è validata dalle fonti qui raccolte e va inclusa nella verifica editoriale dello studio.

## Verifiche tecniche di questo sottosistema

- ESLint mirato su dati, template e sette nuove route: eseguito, nessun errore.
- Le sette route hanno title/description specifici, canonical di produzione e breadcrumb tramite gli helper condivisi riservati alle nuove pagine.
- Nessun file precedente modificato da questo sottosistema; gli esiti di build, confronto delle vecchie pagine, navigazione e verifica visuale complessiva sono nel documento principale di riorganizzazione.
- QA delle sette specialistiche a 375/768/1440 px: route 200 e nessun overflow testuale dopo la correzione del padding tablet delle nuove card. Verificate apertura/chiusura delle FAQ da tastiera e destinazioni delle CTA. Le richieste esterne e `/api/send` erano bloccate; nessun invio eseguito. Screenshot e dettagli in `output/playwright/content-audit/README.md`.
