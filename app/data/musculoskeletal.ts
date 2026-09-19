export type MusculoskeletalTreatment = {
  id: string;
  path: string;
  label: string;
  category: { label: string; href: string };
  heading: string;
  accent: string;
  description: string;
  intro: string;
  symptoms: { title: string; text: string }[];
  approachTitle: string;
  approach: string;
  actions: string[];
  phases: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  limitations: string[];
  goals: string[];
  sourceIds: string[];
  related: { label: string; href: string }[];
};

// These data and their template are used exclusively by the new treatment pages.
// Clinical references and editorial review notes: docs/fonti-muscoloscheletriche.md.
export const musculoskeletalPages: MusculoskeletalTreatment[] = [
  {
    "id": "ernia-disco-discopatie",
    "path": "/trattamenti/schiena-colonna/ernia-disco-discopatie",
    "label": "Ernia del disco e discopatie",
    "category": {
      "label": "Schiena e colonna",
      "href": "/trattamenti/schiena-colonna"
    },
    "heading": "Ernia del disco.",
    "accent": "Capire, poi muoversi.",
    "description": "Ernia del disco e discopatie: valutazione funzionale, gestione dei sintomi e recupero del movimento con Fisioterapia Malavasi.",
    "intro": "Leggere “ernia” su un referto può cambiare il modo in cui ti muovi. Mettiamo in relazione esami, sintomi e attività quotidiane per costruire un percorso che tenga conto di ciò che senti davvero.",
    "symptoms": [
      {
        "title": "Dolore lombare",
        "text": "Sederti, chinarti o cambiare posizione può diventare impegnativo."
      },
      {
        "title": "Dolore verso la gamba",
        "text": "La distribuzione del dolore va valutata insieme a forza e sensibilità."
      },
      {
        "title": "Formicolio",
        "text": "Una gamba addormentata non identifica da sola una lesione del disco."
      },
      {
        "title": "Paura del movimento",
        "text": "Evitare ogni gesto può rendere difficile riprendere le abitudini."
      }
    ],
    "approachTitle": "Il referto è un punto di partenza.",
    "approach": "Un’alterazione del disco può essere presente anche senza dolore. La valutazione mette al centro la risposta ai movimenti e le difficoltà concrete, per individuare attività tollerabili e riconoscere quando serve un approfondimento medico.",
    "actions": [
      "Valutazione del movimento e dei sintomi riferiti alla gamba.",
      "Esercizi graduati secondo la risposta individuale.",
      "Indicazioni per riprendere le attività senza incrementi bruschi."
    ],
    "phases": [
      {
        "title": "Inquadrare",
        "text": "Raccogliamo storia, referti disponibili e limiti della giornata."
      },
      {
        "title": "Ritrovare fiducia",
        "text": "Selezioniamo movimenti praticabili e adattiamo il carico."
      },
      {
        "title": "Ampliare le attività",
        "text": "Rivediamo insieme autonomia, lavoro e obiettivi personali."
      }
    ],
    "faq": [
      {
        "question": "Un’ernia significa necessariamente dolore?",
        "answer": "No. Il reperto va interpretato insieme alla visita: non tutte le ernie provocano sintomi e non ogni dolore alla gamba dipende dal disco."
      },
      {
        "question": "Quando serve una valutazione urgente?",
        "answer": "Nuove difficoltà a urinare, perdita di controllo di vescica o intestino, insensibilità nell’area genitale o debolezza rapidamente crescente richiedono assistenza medica urgente, senza aspettare una seduta."
      }
    ],
    "limitations": [
      "Stare seduto o guidare",
      "Chinarmi o sollevare oggetti",
      "Camminare"
    ],
    "goals": [
      "Riprendere le attività quotidiane",
      "Gestire meglio il dolore",
      "Tornare all’attività fisica"
    ],
    "sourceIds": [
      "nhs-disc"
    ],
    "related": [
      {
        "label": "Lombalgia e sciatalgia",
        "href": "/trattamenti/lombalgia-sciatalgia"
      },
      {
        "label": "Stenosi lombare",
        "href": "/trattamenti/schiena-colonna/stenosi-lombare"
      }
    ]
  },
  {
    "id": "stenosi-lombare",
    "path": "/trattamenti/schiena-colonna/stenosi-lombare",
    "label": "Stenosi lombare",
    "category": {
      "label": "Schiena e colonna",
      "href": "/trattamenti/schiena-colonna"
    },
    "heading": "Stenosi lombare.",
    "accent": "Diamo spazio ai tuoi passi.",
    "description": "Un percorso per la stenosi lombare centrato su cammino, autonomia e gestione dei sintomi. Scopri la valutazione di Fisioterapia Malavasi.",
    "intro": "Ti fermi spesso mentre cammini e cerchi una posizione più comoda? Se hai una diagnosi di stenosi lombare, partiamo dalla tua autonomia: distanze, pause e attività che desideri recuperare.",
    "symptoms": [
      {
        "title": "Cammino limitato",
        "text": "Dolore o pesantezza alle gambe possono comparire durante il percorso."
      },
      {
        "title": "Pause frequenti",
        "text": "Sederti o cambiare posizione può modificare i disturbi."
      },
      {
        "title": "Sensazioni alle gambe",
        "text": "Formicolii e debolezza richiedono un inquadramento clinico."
      },
      {
        "title": "Uscite ridotte",
        "text": "La difficoltà a stare in piedi può condizionare commissioni e vita sociale."
      }
    ],
    "approachTitle": "Allenare la funzione, rispettare i sintomi.",
    "approach": "La stenosi è un restringimento degli spazi della colonna. La fisioterapia non allarga il canale vertebrale: lavora su capacità di movimento, tolleranza all’attività e strategie quotidiane, tenendo conto della valutazione medica.",
    "actions": [
      "Osservazione del cammino e delle posizioni più tollerabili.",
      "Attività e rinforzo dosati sulla capacità attuale.",
      "Progressione delle distanze con obiettivi verificabili."
    ],
    "phases": [
      {
        "title": "Misurare il punto di partenza",
        "text": "Valutiamo cosa succede quando stai in piedi e cammini."
      },
      {
        "title": "Dosare il movimento",
        "text": "Alterniamo esercizio, attività e pause secondo la risposta."
      },
      {
        "title": "Sostenere l’autonomia",
        "text": "Riproviamo i percorsi e i compiti che contano per te."
      }
    ],
    "faq": [
      {
        "question": "La fisioterapia elimina la stenosi?",
        "answer": "No. Il percorso riguarda sintomi e funzione; l’eventuale indicazione chirurgica dipende dalla valutazione specialistica."
      },
      {
        "question": "Se le gambe diventano più deboli?",
        "answer": "Una debolezza nuova o in rapido peggioramento va riferita tempestivamente al medico. Disturbi nuovi di vescica, intestino o sensibilità genitale richiedono assistenza urgente."
      }
    ],
    "limitations": [
      "Camminare a lungo",
      "Restare in piedi",
      "Fare commissioni"
    ],
    "goals": [
      "Aumentare l’autonomia nel cammino",
      "Organizzare meglio le attività",
      "Riprendere le uscite"
    ],
    "sourceIds": [
      "aaos-stenosis"
    ],
    "related": [
      {
        "label": "Ernia del disco e discopatie",
        "href": "/trattamenti/schiena-colonna/ernia-disco-discopatie"
      },
      {
        "label": "Riabilitazione dopo chirurgia lombare",
        "href": "/trattamenti/schiena-colonna/riabilitazione-chirurgia-lombare"
      }
    ]
  },
  {
    "id": "spondilolisi-spondilolistesi",
    "path": "/trattamenti/schiena-colonna/spondilolisi-spondilolistesi",
    "label": "Spondilolisi e spondilolistesi",
    "category": {
      "label": "Schiena e colonna",
      "href": "/trattamenti/schiena-colonna"
    },
    "heading": "Spondilolisi e spondilolistesi.",
    "accent": "Un carico adatto a te.",
    "description": "Fisioterapia per spondilolisi e spondilolistesi: gestione dei carichi, controllo del tronco e ripresa delle attività secondo il quadro clinico.",
    "intro": "Sport, lavoro e movimenti della schiena possono richiedere un nuovo equilibrio. Costruiamo il percorso a partire dalla diagnosi e dalle indicazioni dello specialista, senza trattare tutte le condizioni allo stesso modo.",
    "symptoms": [
      {
        "title": "Dolore durante lo sforzo",
        "text": "Alcuni gesti ripetuti o posizioni mantenute possono provocare fastidio."
      },
      {
        "title": "Difficoltà in piedi",
        "text": "La schiena può risentire di una giornata trascorsa a lungo in carico."
      },
      {
        "title": "Attività interrotta",
        "text": "Allenamento e lavoro possono aver subito una pausa."
      },
      {
        "title": "Dubbi sui movimenti",
        "text": "Capire cosa è consentito aiuta a organizzare la ripresa."
      }
    ],
    "approachTitle": "Stabilità significa anche saper dosare.",
    "approach": "La spondilolisi interessa una porzione ossea della vertebra; la spondilolistesi indica uno scivolamento vertebrale. Possono associarsi, ma non sono sinonimi. Età, sintomi e stabilità del quadro orientano le scelte riabilitative.",
    "actions": [
      "Lettura delle indicazioni mediche e dei limiti di carico.",
      "Esercizi per controllo del tronco e funzione degli arti inferiori.",
      "Rientro graduale nei gesti sportivi o professionali consentiti."
    ],
    "phases": [
      {
        "title": "Conoscere il quadro",
        "text": "Confrontiamo diagnosi, sintomi e richieste delle tue attività."
      },
      {
        "title": "Costruire il controllo",
        "text": "Alleniamo i movimenti nelle condizioni di carico appropriate."
      },
      {
        "title": "Riprendere con criterio",
        "text": "Verifichiamo la risposta alle attività concordate con lo specialista."
      }
    ],
    "faq": [
      {
        "question": "Posso continuare a fare sport?",
        "answer": "Dipende dalla situazione clinica e dalla fase del percorso. Una lesione ossea recente può richiedere protezione: il programma va concordato con lo specialista."
      },
      {
        "question": "Gli esercizi rimettono a posto la vertebra?",
        "answer": "Non è questo l’obiettivo della fisioterapia. Il lavoro riguarda capacità muscolare, gestione dei sintomi e qualità delle attività, rispettando il quadro strutturale."
      }
    ],
    "limitations": [
      "Allenarmi",
      "Restare in piedi",
      "Svolgere lavori fisici"
    ],
    "goals": [
      "Riprendere lo sport consentito",
      "Migliorare il controllo del tronco",
      "Gestire i carichi quotidiani"
    ],
    "sourceIds": [
      "aaos-spondylolysis",
      "nhs-spondylolisthesis"
    ],
    "related": [
      {
        "label": "Schiena e colonna",
        "href": "/trattamenti/schiena-colonna"
      },
      {
        "label": "Fisioterapia sportiva",
        "href": "/trattamenti/sportiva"
      }
    ]
  },
  {
    "id": "scoliosi",
    "path": "/trattamenti/schiena-colonna/scoliosi",
    "label": "Scoliosi",
    "category": {
      "label": "Schiena e colonna",
      "href": "/trattamenti/schiena-colonna"
    },
    "heading": "Scoliosi.",
    "accent": "Muoversi con consapevolezza.",
    "description": "Scoliosi: valutazione del movimento e percorso riabilitativo coerente con età, bisogni e indicazioni specialistiche. Fisioterapia Malavasi.",
    "intro": "Una diagnosi di scoliosi porta domande sul movimento, sullo sport e sulla vita quotidiana. Ti aiutiamo a dare un significato pratico alle indicazioni ricevute e a definire obiettivi adatti alla tua età.",
    "symptoms": [
      {
        "title": "Asimmetrie osservate",
        "text": "Differenze tra spalle o tronco meritano un inquadramento, senza autodiagnosi."
      },
      {
        "title": "Affaticamento",
        "text": "Alcune attività prolungate possono risultare più impegnative."
      },
      {
        "title": "Dolore associato",
        "text": "Quando presente, va valutato senza attribuirlo automaticamente alla curva."
      },
      {
        "title": "Incertezza sullo sport",
        "text": "Muoversi richiede indicazioni coerenti con il percorso specialistico."
      }
    ],
    "approachTitle": "La persona, oltre la curva.",
    "approach": "La scoliosi è una deformità tridimensionale della colonna e non coincide con una generica “postura scorretta”. Il lavoro fisioterapico viene definito in relazione alla valutazione specialistica, alla crescita e alle esigenze funzionali.",
    "actions": [
      "Confronto con il percorso ortopedico già impostato.",
      "Esercizio adattato per mobilità, forza e consapevolezza del movimento.",
      "Obiettivi quotidiani realistici e rivalutazione della funzione."
    ],
    "phases": [
      {
        "title": "Ascoltare e valutare",
        "text": "Raccogliamo indicazioni, eventuale uso del corsetto e attività abituali."
      },
      {
        "title": "Organizzare l’esercizio",
        "text": "Definiamo un lavoro sostenibile e compatibile con le prescrizioni."
      },
      {
        "title": "Mantenere la partecipazione",
        "text": "Seguiamo la continuità nelle attività scolastiche, lavorative e sportive."
      }
    ],
    "faq": [
      {
        "question": "La scoliosi dipende dalla postura?",
        "answer": "La scoliosi idiopatica non viene spiegata semplicemente da una postura scorretta. Asimmetrie e sospetti vanno valutati da un professionista."
      },
      {
        "question": "La fisioterapia sostituisce controlli o corsetto?",
        "answer": "No. Controlli, eventuale corsetto e altre decisioni restano di competenza specialistica. Non promettiamo la correzione della curva con un percorso standard."
      }
    ],
    "limitations": [
      "Attività prolungate",
      "Sport o movimento",
      "Organizzare gli esercizi"
    ],
    "goals": [
      "Muovermi con più consapevolezza",
      "Gestire l’affaticamento",
      "Integrare il percorso specialistico"
    ],
    "sourceIds": [
      "nhs-scoliosis"
    ],
    "related": [
      {
        "label": "Schiena e colonna",
        "href": "/trattamenti/schiena-colonna"
      },
      {
        "label": "Seduta fisioterapica",
        "href": "/metodo/seduta-fisioterapica"
      }
    ]
  },
  {
    "id": "riabilitazione-chirurgia-lombare",
    "path": "/trattamenti/schiena-colonna/riabilitazione-chirurgia-lombare",
    "label": "Riabilitazione dopo chirurgia lombare",
    "category": {
      "label": "Schiena e colonna",
      "href": "/trattamenti/schiena-colonna"
    },
    "heading": "Dopo la chirurgia lombare.",
    "accent": "Ripartire, passo dopo passo.",
    "description": "Riabilitazione dopo chirurgia lombare: movimento, cammino e attività quotidiane in continuità con le indicazioni del chirurgo.",
    "intro": "Il rientro a casa dopo un intervento alla schiena può cambiare anche i gesti più semplici. Dalla prima passeggiata alle attività lavorative, impostiamo una ripresa coerente con il tipo di chirurgia e le indicazioni ricevute.",
    "symptoms": [
      {
        "title": "Movimenti da ritrovare",
        "text": "Alzarti, sederti e cambiare posizione possono richiedere nuove strategie."
      },
      {
        "title": "Cammino da riprendere",
        "text": "Distanze e pause vanno adattate alla fase postoperatoria."
      },
      {
        "title": "Forza ridotta",
        "text": "Il periodo di inattività può rendere più faticosi i compiti abituali."
      },
      {
        "title": "Dubbi sui carichi",
        "text": "Sollevamenti, guida e lavoro richiedono indicazioni specifiche."
      }
    ],
    "approachTitle": "Un percorso che segue il tuo intervento.",
    "approach": "Decompressione, discectomia e stabilizzazione non prevedono necessariamente gli stessi limiti. Partiamo dalla lettera di dimissione e dal programma chirurgico, poi lavoriamo sulla funzione senza anticipare carichi o movimenti non autorizzati.",
    "actions": [
      "Revisione di dimissione, precauzioni e controlli programmati.",
      "Recupero progressivo dei passaggi posturali e del cammino.",
      "Esercizi e ripresa delle attività adeguati alla fase di guarigione."
    ],
    "phases": [
      {
        "title": "Continuità con l’équipe",
        "text": "Chiarifichiamo le indicazioni prima di iniziare il lavoro."
      },
      {
        "title": "Autonomia quotidiana",
        "text": "Alleniamo i gesti consentiti e costruiamo una routine sostenibile."
      },
      {
        "title": "Ritorno alle richieste",
        "text": "Aumentiamo gradualmente l’impegno in base a funzione e controlli."
      }
    ],
    "faq": [
      {
        "question": "Quando si comincia?",
        "answer": "L’avvio dipende dall’intervento e dalle indicazioni ricevute in ospedale. Porta la documentazione per concordare attività, obiettivi e tempi del percorso."
      },
      {
        "question": "Quali cambiamenti vanno segnalati?",
        "answer": "Nuova debolezza, disturbi della sensibilità, problemi di vescica o intestino e alterazioni della ferita richiedono un contatto tempestivo con l’équipe medica, urgente per i sintomi neurologici importanti."
      }
    ],
    "limitations": [
      "Alzarmi e sedermi",
      "Camminare fuori casa",
      "Riprendere il lavoro"
    ],
    "goals": [
      "Recuperare autonomia",
      "Ritrovare forza e movimento",
      "Seguire il percorso postoperatorio"
    ],
    "sourceIds": [
      "nhs-lumbar-surgery"
    ],
    "related": [
      {
        "label": "Riabilitazione pre e post-chirurgica",
        "href": "/trattamenti/chirurgica"
      },
      {
        "label": "Fisioterapia domiciliare",
        "href": "/metodo/seduta-fisioterapica-domiciliare"
      }
    ]
  },
  {
    "id": "cefalea-cervicogenica",
    "path": "/trattamenti/cervicale-cefalea-vertigini/cefalea-cervicogenica",
    "label": "Cefalea cervicogenica",
    "category": {
      "label": "Cervicale, cefalea e vertigini",
      "href": "/trattamenti/cervicale-cefalea-vertigini"
    },
    "heading": "Cefalea cervicogenica.",
    "accent": "Facciamo chiarezza.",
    "description": "Cefalea cervicogenica: valutazione del contributo cervicale, movimento e gestione delle attività. Un approfondimento di Fisioterapia Malavasi.",
    "intro": "Quando mal di testa e collo doloroso si presentano insieme, la prima domanda è capire se e come siano collegati. La valutazione serve a orientare il percorso, senza ricondurre ogni cefalea alla cervicale.",
    "symptoms": [
      {
        "title": "Mal di testa ricorrente",
        "text": "Frequenza, durata e caratteristiche degli episodi sono informazioni importanti."
      },
      {
        "title": "Movimenti del collo",
        "text": "Alcuni movimenti possono accompagnarsi al dolore, ma non bastano per una diagnosi."
      },
      {
        "title": "Rigidità cervicale",
        "text": "Una mobilità ridotta può rendere difficili guida e lavoro."
      },
      {
        "title": "Attività condizionate",
        "text": "Concentrazione, riposo e tempo libero possono risentirne."
      }
    ],
    "approachTitle": "Riconoscere il contributo del collo.",
    "approach": "La cefalea cervicogenica è attribuita a un disturbo cervicale dopo un inquadramento appropriato. Collo dolente, esami o dolore alla nuca non ne dimostrano da soli l’origine. Il percorso tiene conto della diagnosi e delle eventuali altre forme di cefalea.",
    "actions": [
      "Raccolta della storia degli episodi e delle valutazioni mediche.",
      "Valutazione di mobilità e tolleranza dei muscoli cervicali.",
      "Esercizio e gestione delle attività, con terapia manuale quando indicata."
    ],
    "phases": [
      {
        "title": "Distinguere",
        "text": "Ricostruiamo episodi, sintomi associati e relazione con il movimento."
      },
      {
        "title": "Lavorare sul contributo cervicale",
        "text": "Scegliamo gli interventi sulla base dei riscontri della valutazione."
      },
      {
        "title": "Verificare nella vita reale",
        "text": "Monitoriamo attività, frequenza dei disturbi e risposta al percorso."
      }
    ],
    "faq": [
      {
        "question": "Ogni mal di testa con dolore al collo è cervicogenico?",
        "answer": "No. Emicrania e altre cefalee possono accompagnarsi a disturbi cervicali. È necessario distinguere le condizioni e integrare, quando indicato, la valutazione medica."
      },
      {
        "question": "Quando non aspettare una seduta?",
        "answer": "Un mal di testa improvviso e molto intenso, oppure associato a nuovi disturbi del linguaggio, della forza o della vista, richiede assistenza medica urgente."
      }
    ],
    "limitations": [
      "Lavorare al computer",
      "Guidare",
      "Concentrarmi nelle attività"
    ],
    "goals": [
      "Gestire il contributo cervicale",
      "Muovere meglio il collo",
      "Ridurre l’impatto nelle giornate"
    ],
    "sourceIds": [
      "ichd-headache",
      "nice-neurology",
      "nhs-headache"
    ],
    "related": [
      {
        "label": "Cervicalgia e disturbi correlati",
        "href": "/trattamenti/cefalee-vertigini"
      },
      {
        "label": "Colpo di frusta",
        "href": "/trattamenti/cervicale-cefalea-vertigini/colpo-di-frusta"
      }
    ]
  },
  {
    "id": "vertigini-disturbi-equilibrio",
    "path": "/trattamenti/cervicale-cefalea-vertigini/vertigini-disturbi-equilibrio",
    "label": "Vertigini e disturbi dell’equilibrio",
    "category": {
      "label": "Cervicale, cefalea e vertigini",
      "href": "/trattamenti/cervicale-cefalea-vertigini"
    },
    "heading": "Vertigini e instabilità.",
    "accent": "Orientare il recupero.",
    "description": "Vertigini e disturbi dell’equilibrio: inquadramento dei bisogni e percorso riabilitativo appropriato, senza attribuire ogni sintomo alla cervicale.",
    "intro": "Girarti nel letto, muovere la testa o camminare in un ambiente affollato può diventare difficile. Partiamo dalla storia del disturbo e dalle valutazioni già effettuate per capire quale percorso sia adatto alla tua situazione.",
    "symptoms": [
      {
        "title": "Sensazione di rotazione",
        "text": "Durata degli episodi e movimenti che li provocano aiutano a orientare l’inquadramento."
      },
      {
        "title": "Instabilità in cammino",
        "text": "Il timore di perdere l’equilibrio può limitare le uscite."
      },
      {
        "title": "Fastidio muovendo il capo",
        "text": "La relazione tra testa, sguardo e sintomi va valutata."
      },
      {
        "title": "Attività evitate",
        "text": "Luoghi affollati, scale o cambi di posizione possono diventare impegnativi."
      }
    ],
    "approachTitle": "Prima l’origine, poi gli esercizi.",
    "approach": "Le vertigini possono avere cause vestibolari, neurologiche o di altra natura. Il collo non è una spiegazione automatica. Valutiamo i bisogni riabilitativi e la necessità di un inquadramento medico prima di definire attività ed esercizi.",
    "actions": [
      "Raccolta dei referti e delle indicazioni specialistiche.",
      "Valutazione funzionale dell’equilibrio e delle attività problematiche.",
      "Progressione degli esercizi appropriati al quadro e alla sicurezza personale."
    ],
    "phases": [
      {
        "title": "Orientamento clinico",
        "text": "Ricostruiamo esordio, frequenza e sintomi associati."
      },
      {
        "title": "Attività guidate",
        "text": "Impostiamo un lavoro individuale nei contesti tollerabili."
      },
      {
        "title": "Sicurezza quotidiana",
        "text": "Verifichiamo cammino, cambi di posizione e autonomia fuori casa."
      }
    ],
    "faq": [
      {
        "question": "Le vertigini dipendono sempre dalla cervicale?",
        "answer": "No. La loro origine va distinta prima del trattamento; possono essere necessari approfondimenti medici, otorinolaringoiatrici o neurologici."
      },
      {
        "question": "Quando serve assistenza urgente?",
        "answer": "Vertigini improvvise associate a difficoltà a parlare, visione doppia, nuova debolezza o marcata incapacità di stare in piedi richiedono assistenza medica urgente. Non aspettare una prenotazione online."
      }
    ],
    "limitations": [
      "Camminare fuori casa",
      "Muovere la testa",
      "Girarmi o cambiare posizione"
    ],
    "goals": [
      "Muovermi con più sicurezza",
      "Riprendere le uscite",
      "Gestire le attività che provocano instabilità"
    ],
    "sourceIds": [
      "nice-neurology",
      "nhs-vertigo",
      "nhs-vestibular"
    ],
    "related": [
      {
        "label": "Rieducazione del cammino e dell’equilibrio",
        "href": "/trattamenti/rieducazione-cammino-equilibrio"
      },
      {
        "label": "Cervicalgia e disturbi correlati",
        "href": "/trattamenti/cefalee-vertigini"
      }
    ]
  },
  {
    "id": "ernia-cervicale-radicolopatia",
    "path": "/trattamenti/cervicale-cefalea-vertigini/ernia-cervicale-radicolopatia",
    "label": "Ernia cervicale e radicolopatia",
    "category": {
      "label": "Cervicale, cefalea e vertigini",
      "href": "/trattamenti/cervicale-cefalea-vertigini"
    },
    "heading": "Ernia cervicale e radicolopatia.",
    "accent": "Ascoltiamo i segnali.",
    "description": "Dolore cervicale e disturbi al braccio: valutazione funzionale e percorso per ernia cervicale e radicolopatia presso Fisioterapia Malavasi.",
    "intro": "Il dolore dal collo al braccio, i formicolii o una presa meno sicura possono preoccupare. Mettiamo insieme sintomi, esami e attività quotidiane per impostare il lavoro e riconoscere quando è necessario il confronto medico.",
    "symptoms": [
      {
        "title": "Dolore verso il braccio",
        "text": "La distribuzione e le posizioni che lo modificano aiutano la valutazione."
      },
      {
        "title": "Formicolii alle dita",
        "text": "Non sono sempre causati da un’ernia: possono avere origini differenti."
      },
      {
        "title": "Forza ridotta",
        "text": "Una difficoltà nuova o crescente nell’uso della mano merita attenzione."
      },
      {
        "title": "Posizioni difficili",
        "text": "Lavorare, leggere o riposare può richiedere adattamenti."
      }
    ],
    "approachTitle": "Collo, braccio e funzione: uno sguardo completo.",
    "approach": "Una radicolopatia riguarda il coinvolgimento di una radice nervosa. Non si identifica soltanto da un formicolio o da un referto. La valutazione funzionale e l’inquadramento medico guidano esercizi e progressione delle attività.",
    "actions": [
      "Valutazione dei movimenti e delle limitazioni riferite all’arto superiore.",
      "Esercizi graduati secondo la risposta dei sintomi.",
      "Indicazioni per variare posizioni e carichi nella giornata."
    ],
    "phases": [
      {
        "title": "Collegare le informazioni",
        "text": "Raccogliamo distribuzione dei sintomi, storia clinica e referti."
      },
      {
        "title": "Trovare attività tollerabili",
        "text": "Adattiamo il lavoro al comportamento di collo e braccio."
      },
      {
        "title": "Ritrovare continuità",
        "text": "Verifichiamo uso della mano e ripresa delle attività concordate."
      }
    ],
    "faq": [
      {
        "question": "Un formicolio alla mano indica un’ernia?",
        "answer": "Non necessariamente. Il disturbo può interessare diverse strutture nervose o avere altre cause: la valutazione serve anche a distinguerle."
      },
      {
        "question": "Se peggiorano forza o destrezza?",
        "answer": "Segnala rapidamente al medico debolezza crescente, mani più impacciate o nuovi problemi di equilibrio e cammino. Un cambiamento improvviso importante richiede assistenza urgente."
      }
    ],
    "limitations": [
      "Usare la mano",
      "Lavorare seduto",
      "Dormire o riposare"
    ],
    "goals": [
      "Recuperare l’uso del braccio",
      "Gestire i sintomi nelle attività",
      "Muovere meglio il collo"
    ],
    "sourceIds": [
      "nhs-cervical",
      "nhs-disc"
    ],
    "related": [
      {
        "label": "Cervicalgia",
        "href": "/trattamenti/cefalee-vertigini"
      },
      {
        "label": "Tunnel carpale",
        "href": "/trattamenti/gomito-polso-mano/tunnel-carpale"
      }
    ]
  },
  {
    "id": "colpo-di-frusta",
    "path": "/trattamenti/cervicale-cefalea-vertigini/colpo-di-frusta",
    "label": "Colpo di frusta",
    "category": {
      "label": "Cervicale, cefalea e vertigini",
      "href": "/trattamenti/cervicale-cefalea-vertigini"
    },
    "heading": "Dopo un colpo di frusta.",
    "accent": "Ritrova fiducia nel movimento.",
    "description": "Colpo di frusta: un percorso di fisioterapia per mobilità cervicale e ritorno alle attività dopo il corretto inquadramento del trauma.",
    "intro": "Dopo un movimento brusco del capo, il collo può sembrare rigido e ogni gesto meno sicuro. Una volta valutato il trauma, ti accompagniamo nella ripresa delle attività con un lavoro graduale e comprensibile.",
    "symptoms": [
      {
        "title": "Rigidità del collo",
        "text": "Ruotare il capo o guardare in alto può risultare difficile."
      },
      {
        "title": "Dolore alle spalle",
        "text": "Il fastidio può estendersi alla regione delle spalle."
      },
      {
        "title": "Cefalea dopo il trauma",
        "text": "Il mal di testa va considerato nell’inquadramento complessivo."
      },
      {
        "title": "Movimenti evitati",
        "text": "La paura di riacutizzare il dolore può limitare guida e lavoro."
      }
    ],
    "approachTitle": "Dalla protezione a una ripresa attiva.",
    "approach": "Il percorso dipende dalla valutazione iniziale del trauma e dai sintomi presenti. Quando appropriato, la ripresa graduale delle attività e del movimento aiuta a recuperare funzione, senza forzare né applicare una tabella identica per tutti.",
    "actions": [
      "Verifica delle indicazioni ricevute dopo il trauma.",
      "Lavoro progressivo su mobilità e tolleranza cervicale.",
      "Adattamento delle attività e verifica della risposta nel tempo."
    ],
    "phases": [
      {
        "title": "Inquadrare il trauma",
        "text": "Raccogliamo dinamica, controlli effettuati e sintomi comparsi."
      },
      {
        "title": "Riprendere i gesti",
        "text": "Proponiamo movimenti e attività adeguati alla tolleranza."
      },
      {
        "title": "Ritrovare sicurezza",
        "text": "Rivediamo le richieste di guida, lavoro e tempo libero."
      }
    ],
    "faq": [
      {
        "question": "Devo tenere il collo completamente fermo?",
        "answer": "Dopo che il trauma è stato valutato, l’attività viene generalmente ripresa in modo graduale. Eventuali prescrizioni specifiche di protezione vanno rispettate e chiarite con il medico."
      },
      {
        "question": "Quali sintomi vanno rivalutati?",
        "answer": "Dopo un trauma, debolezza, formicolii importanti, difficoltà a camminare o dolore intenso in peggioramento richiedono una valutazione medica tempestiva."
      }
    ],
    "limitations": [
      "Girare il capo",
      "Guidare",
      "Riprendere il lavoro"
    ],
    "goals": [
      "Muovermi con meno timore",
      "Recuperare mobilità",
      "Riprendere la routine"
    ],
    "sourceIds": [
      "nhs-whiplash"
    ],
    "related": [
      {
        "label": "Cervicalgia",
        "href": "/trattamenti/cefalee-vertigini"
      },
      {
        "label": "Cefalea cervicogenica",
        "href": "/trattamenti/cervicale-cefalea-vertigini/cefalea-cervicogenica"
      }
    ]
  },
  {
    "id": "riabilitazione-chirurgia-spalla",
    "path": "/trattamenti/patologie-spalla/riabilitazione-chirurgia-spalla",
    "label": "Riabilitazione dopo chirurgia della spalla",
    "category": {
      "label": "Spalla",
      "href": "/trattamenti/patologie-spalla"
    },
    "heading": "Dopo la chirurgia della spalla.",
    "accent": "Ogni gesto ha il suo percorso.",
    "description": "Recupero dopo chirurgia della spalla: mobilità, forza e attività quotidiane secondo le precauzioni e le indicazioni del chirurgo.",
    "intro": "Vestirti, raggiungere uno scaffale o tornare al lavoro: dopo l’intervento ogni obiettivo richiede passaggi precisi. Organizziamo il percorso rispettando i tessuti trattati e le indicazioni della tua équipe chirurgica.",
    "symptoms": [
      {
        "title": "Braccio protetto",
        "text": "Tutore e precauzioni cambiano il modo di affrontare la giornata."
      },
      {
        "title": "Mobilità limitata",
        "text": "Il recupero del movimento deve rispettare ciò che è consentito."
      },
      {
        "title": "Forza da ricostruire",
        "text": "L’inattività e l’intervento possono ridurre la capacità di usare il braccio."
      },
      {
        "title": "Gesti da reimparare",
        "text": "Igiene personale, lavoro e sport hanno esigenze diverse."
      }
    ],
    "approachTitle": "Il protocollo segue l’intervento.",
    "approach": "Una riparazione tendinea, una stabilizzazione o una protesi hanno esigenze differenti. Utilizziamo la documentazione operatoria per graduare movimento e carico, coordinando gli obiettivi funzionali con le precauzioni prescritte.",
    "actions": [
      "Definizione dei movimenti consentiti e dell’uso del tutore.",
      "Progressione dalla mobilità autorizzata al controllo attivo.",
      "Recupero della forza e dei gesti richiesti, quando consentito."
    ],
    "phases": [
      {
        "title": "Proteggere con criterio",
        "text": "Chiarifichiamo le indicazioni e i gesti quotidiani possibili."
      },
      {
        "title": "Ritrovare il movimento",
        "text": "Lavoriamo sull’escursione e sul controllo nelle fasi autorizzate."
      },
      {
        "title": "Preparare il ritorno",
        "text": "Aumentiamo le richieste verso lavoro, hobby o sport."
      }
    ],
    "faq": [
      {
        "question": "Posso seguire gli esercizi di un’altra persona operata?",
        "answer": "No. Il programma varia con l’intervento, i tessuti riparati e la fase del recupero. Anche movimenti apparentemente semplici possono avere limiti specifici."
      },
      {
        "question": "Quali documenti porto?",
        "answer": "Lettera di dimissione, referto operatorio e indicazioni del chirurgo aiutano a impostare il percorso senza anticipare movimenti o carichi."
      }
    ],
    "limitations": [
      "Vestirmi e lavarmi",
      "Alzare il braccio",
      "Lavorare o fare sport"
    ],
    "goals": [
      "Recuperare autonomia del braccio",
      "Ritrovare mobilità e forza",
      "Seguire il programma postoperatorio"
    ],
    "sourceIds": [
      "aaos-shoulder-surgery",
      "nice-replacement"
    ],
    "related": [
      {
        "label": "Dolore alla spalla",
        "href": "/trattamenti/patologie-spalla"
      },
      {
        "label": "Riabilitazione pre e post-chirurgica",
        "href": "/trattamenti/chirurgica"
      }
    ]
  },
  {
    "id": "dolore-gomito",
    "path": "/trattamenti/gomito-polso-mano/dolore-gomito",
    "label": "Dolore al gomito",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Dolore al gomito.",
    "accent": "Ritrova i tuoi gesti.",
    "description": "Dolore al gomito: valutazione di movimento, presa e carichi per orientare un percorso fisioterapico specifico alle tue difficoltà.",
    "intro": "Una borsa da sollevare, un utensile da usare, il braccio da distendere. Il dolore al gomito può pesare su molti gesti: partiamo da quelli che ti limitano per comprendere il bisogno e scegliere il percorso.",
    "symptoms": [
      {
        "title": "Dolore nella presa",
        "text": "Stringere e sollevare possono mettere in difficoltà braccio e avambraccio."
      },
      {
        "title": "Rigidità",
        "text": "Piegare o estendere il gomito può risultare limitato."
      },
      {
        "title": "Fastidio durante il lavoro",
        "text": "Gesti ripetuti o posizioni prolungate possono influire sui sintomi."
      },
      {
        "title": "Sensazioni alla mano",
        "text": "Formicolii o debolezza richiedono attenzione anche alle strutture nervose."
      }
    ],
    "approachTitle": "Non tutto il dolore è epicondilite.",
    "approach": "Tendini, articolazione, nervi e conseguenze di un trauma possono richiedere percorsi diversi. Osserviamo mobilità, attività provocanti e risposta al carico, orientando verso la valutazione medica quando emergono elementi da approfondire.",
    "actions": [
      "Valutazione di gomito, polso e gesti di presa.",
      "Adattamento temporaneo dei compiti più impegnativi.",
      "Esercizi specifici per le limitazioni individuate."
    ],
    "phases": [
      {
        "title": "Dare un contesto",
        "text": "Ricostruiamo comparsa dei disturbi e richieste di lavoro o sport."
      },
      {
        "title": "Rendere praticabili i gesti",
        "text": "Modifichiamo il carico e lavoriamo sulle capacità utili."
      },
      {
        "title": "Verificare il recupero",
        "text": "Riproviamo presa, sollevamenti e movimenti della quotidianità."
      }
    ],
    "faq": [
      {
        "question": "Il dolore esterno al gomito basta per una diagnosi?",
        "answer": "No. La sede è un’informazione utile, ma va collegata a storia, esame clinico e comportamento dei sintomi."
      },
      {
        "question": "Quando serve prima un controllo medico?",
        "answer": "Dopo un trauma importante, in presenza di deformità, impossibilità a muovere il braccio o gonfiore caldo con febbre, è opportuno rivolgersi tempestivamente al medico."
      }
    ],
    "limitations": [
      "Stringere oggetti",
      "Piegare o distendere il gomito",
      "Usare utensili"
    ],
    "goals": [
      "Riprendere i gesti quotidiani",
      "Lavorare con maggiore continuità",
      "Tornare allo sport"
    ],
    "sourceIds": [
      "nhs-elbow"
    ],
    "related": [
      {
        "label": "Epicondilite ed epitrocleite",
        "href": "/trattamenti/gomito-polso-mano/epicondilite-epitrocleite"
      },
      {
        "label": "Riabilitazione dopo chirurgia del gomito",
        "href": "/trattamenti/gomito-polso-mano/riabilitazione-chirurgia-gomito"
      }
    ]
  },
  {
    "id": "epicondilite-epitrocleite",
    "path": "/trattamenti/gomito-polso-mano/epicondilite-epitrocleite",
    "label": "Epicondilite ed epitrocleite",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Epicondilite ed epitrocleite.",
    "accent": "Torniamo a dosare la forza.",
    "description": "Epicondilite ed epitrocleite: gestione dei carichi ed esercizio per presa, avambraccio e ritorno alle attività. Fisioterapia Malavasi.",
    "intro": "Il gomito si fa sentire quando stringi, sviti o sollevi? Che il dolore sia sul lato esterno o interno, il percorso parte dai gesti ripetuti e dalla capacità dei tendini di sostenere le tue attività.",
    "symptoms": [
      {
        "title": "Dolore esterno",
        "text": "Può emergere nei gesti di presa e nei movimenti del polso."
      },
      {
        "title": "Dolore interno",
        "text": "Alcune attività di flessione e rotazione possono risultare fastidiose."
      },
      {
        "title": "Presa difficile",
        "text": "Anche una tazza o una borsa possono diventare impegnative."
      },
      {
        "title": "Fastidio dopo l’attività",
        "text": "La risposta nelle ore successive aiuta a dosare il lavoro."
      }
    ],
    "approachTitle": "Allenare la tolleranza dei tendini.",
    "approach": "Epicondilite ed epitrocleite interessano regioni tendinee differenti. Il programma viene adattato ai gesti che sollecitano la zona, combinando gestione del carico, esercizio progressivo e indicazioni applicabili al lavoro o allo sport.",
    "actions": [
      "Analisi dei movimenti di polso, presa e avambraccio.",
      "Modifica dei carichi ripetuti senza sospensioni indiscriminate.",
      "Rinforzo graduato secondo sintomi e richieste personali."
    ],
    "phases": [
      {
        "title": "Individuare le richieste",
        "text": "Osserviamo quali gesti e frequenze provocano difficoltà."
      },
      {
        "title": "Costruire capacità",
        "text": "Introduciamo esercizi con intensità e progressione sostenibili."
      },
      {
        "title": "Trasferire al gesto",
        "text": "Riavviciniamo il lavoro al tuo utensile, sport o attività."
      }
    ],
    "faq": [
      {
        "question": "Succede solo a chi gioca a tennis o golf?",
        "answer": "No. Le denominazioni comuni richiamano alcuni sport, ma anche attività lavorative o domestiche ripetute possono essere coinvolte."
      },
      {
        "question": "Devo aspettare che sparisca ogni fastidio per muovermi?",
        "answer": "Il carico va adattato alla situazione. La valutazione aiuta a distinguere un’attività tollerabile da una richiesta eccessiva, senza applicare la stessa regola a tutti."
      }
    ],
    "limitations": [
      "Stringere e sollevare",
      "Lavorare con utensili",
      "Praticare sport di racchetta"
    ],
    "goals": [
      "Recuperare forza nella presa",
      "Gestire il carico lavorativo",
      "Riprendere lo sport"
    ],
    "sourceIds": [
      "nhs-tennis",
      "aaos-medial",
      "aaos-epicondylitis"
    ],
    "related": [
      {
        "label": "Dolore al gomito",
        "href": "/trattamenti/gomito-polso-mano/dolore-gomito"
      },
      {
        "label": "Tendinopatie e borsiti",
        "href": "/trattamenti/muscoli-tendini/tendinopatie-borsiti"
      }
    ]
  },
  {
    "id": "riabilitazione-chirurgia-gomito",
    "path": "/trattamenti/gomito-polso-mano/riabilitazione-chirurgia-gomito",
    "label": "Riabilitazione dopo chirurgia del gomito",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Dopo la chirurgia del gomito.",
    "accent": "Recuperare gesti utili.",
    "description": "Riabilitazione dopo chirurgia del gomito: movimento, controllo e forza nel rispetto dei tessuti operati e delle indicazioni del chirurgo.",
    "intro": "Portare la mano alla bocca, vestirti o usare il computer richiede un gomito che si muova nel modo giusto. Dopo l’intervento impostiamo il lavoro sulle funzioni che ti servono, rispettando protezioni e limiti prescritti.",
    "symptoms": [
      {
        "title": "Rigidità postoperatoria",
        "text": "Piegare e distendere possono essere difficili nelle attività personali."
      },
      {
        "title": "Rotazione ridotta",
        "text": "Girare il palmo per usare oggetti richiede un movimento specifico."
      },
      {
        "title": "Braccio da proteggere",
        "text": "Tutori e limitazioni del carico devono essere rispettati."
      },
      {
        "title": "Uso della mano limitato",
        "text": "La posizione del gomito influisce su lavoro e autonomia."
      }
    ],
    "approachTitle": "Mobilità e protezione vanno insieme.",
    "approach": "Artroscopia, stabilizzazione, chirurgia tendinea e trattamento delle fratture non condividono un unico protocollo. La documentazione dell’intervento orienta la mobilizzazione consentita e l’introduzione della forza.",
    "actions": [
      "Revisione delle indicazioni su tutore, movimenti e carico.",
      "Lavoro graduato su flessione, estensione e rotazione autorizzate.",
      "Ripresa della presa e dei compiti funzionali nelle fasi appropriate."
    ],
    "phases": [
      {
        "title": "Impostare le precauzioni",
        "text": "Definiamo cosa può muoversi e come gestire i compiti personali."
      },
      {
        "title": "Ritrovare l’escursione",
        "text": "Accompagniamo il recupero del movimento senza forzature non consentite."
      },
      {
        "title": "Reintrodurre lo sforzo",
        "text": "Progressione della forza quando l’équipe chirurgica la permette."
      }
    ],
    "faq": [
      {
        "question": "Devo forzare subito il gomito rigido?",
        "answer": "No. Intensità e ampiezza dipendono dalla chirurgia e dai tessuti coinvolti. Un lavoro più intenso non equivale automaticamente a un recupero migliore."
      },
      {
        "question": "Servono referti e protocollo?",
        "answer": "Sì, porta la documentazione disponibile: aiuta a chiarire le precauzioni e a mantenere continuità con i controlli del chirurgo."
      }
    ],
    "limitations": [
      "Portare la mano al viso",
      "Girare il palmo",
      "Usare il braccio nel lavoro"
    ],
    "goals": [
      "Recuperare l’autonomia personale",
      "Ritrovare mobilità del gomito",
      "Riprendere i carichi consentiti"
    ],
    "sourceIds": [
      "aaos-elbow-surgery",
      "nice-trauma"
    ],
    "related": [
      {
        "label": "Dolore al gomito",
        "href": "/trattamenti/gomito-polso-mano/dolore-gomito"
      },
      {
        "label": "Riabilitazione pre e post-chirurgica",
        "href": "/trattamenti/chirurgica"
      }
    ]
  },
  {
    "id": "tunnel-carpale",
    "path": "/trattamenti/gomito-polso-mano/tunnel-carpale",
    "label": "Tunnel carpale",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Tunnel carpale.",
    "accent": "Ascolta la tua mano.",
    "description": "Tunnel carpale: valutazione delle difficoltà della mano, adattamento delle attività e supporto al percorso indicato dal medico.",
    "intro": "Formicolii notturni, oggetti che sfuggono o una presa meno affidabile possono interrompere la tua routine. Mettiamo a fuoco il problema della mano e il percorso più appropriato, senza confondere ogni formicolio con tunnel carpale.",
    "symptoms": [
      {
        "title": "Disturbi notturni",
        "text": "Intorpidimento e formicolii possono disturbare il riposo."
      },
      {
        "title": "Presa incerta",
        "text": "Stringere o trattenere piccoli oggetti può diventare più difficile."
      },
      {
        "title": "Fastidio al polso",
        "text": "Posizioni e gesti ripetuti possono modificare i sintomi."
      },
      {
        "title": "Sensibilità alterata",
        "text": "Distribuzione e persistenza delle sensazioni vanno approfondite."
      }
    ],
    "approachTitle": "Funzione della mano, attenzione al nervo.",
    "approach": "La sindrome del tunnel carpale coinvolge il nervo mediano al polso. Il percorso considera gravità, funzione e indicazioni mediche: la fisioterapia può accompagnare la gestione delle attività, ma non sostituisce gli approfondimenti necessari.",
    "actions": [
      "Osservazione dei compiti manuali che provocano difficoltà.",
      "Indicazioni su posizioni e carichi ripetuti del polso.",
      "Esercizi selezionati e verifica dell’andamento dei sintomi."
    ],
    "phases": [
      {
        "title": "Inquadrare i disturbi",
        "text": "Raccogliamo diagnosi, distribuzione dei formicolii e difficoltà nella presa."
      },
      {
        "title": "Adattare le attività",
        "text": "Cerchiamo modi sostenibili di usare la mano nel quotidiano."
      },
      {
        "title": "Rivalutare la funzione",
        "text": "Controlliamo il percorso e l’eventuale necessità di confronto medico."
      }
    ],
    "faq": [
      {
        "question": "Tutti i formicolii alle dita sono tunnel carpale?",
        "answer": "No. Le cause possono riguardare nervi in sedi differenti o altre condizioni. La distribuzione dei sintomi e la visita sono fondamentali."
      },
      {
        "question": "La fisioterapia evita sempre l’intervento?",
        "answer": "No. Sintomi persistenti o in peggioramento, debolezza e perdita di funzione richiedono valutazione medica. Le opzioni si scelgono in base al quadro individuale."
      }
    ],
    "limitations": [
      "Dormire senza risvegli",
      "Trattenere oggetti",
      "Usare a lungo le mani"
    ],
    "goals": [
      "Gestire le attività manuali",
      "Migliorare la funzione della mano",
      "Orientare il percorso"
    ],
    "sourceIds": [
      "nhs-carpal"
    ],
    "related": [
      {
        "label": "Ernia cervicale e radicolopatia",
        "href": "/trattamenti/cervicale-cefalea-vertigini/ernia-cervicale-radicolopatia"
      },
      {
        "label": "Gomito, polso e mano",
        "href": "/trattamenti/gomito-polso-mano"
      }
    ]
  },
  {
    "id": "rizoartrosi",
    "path": "/trattamenti/gomito-polso-mano/rizoartrosi",
    "label": "Rizoartrosi",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Rizoartrosi.",
    "accent": "Diamo valore ai piccoli gesti.",
    "description": "Rizoartrosi del pollice: strategie quotidiane ed esercizio adattato per presa e autonomia. Scopri il percorso di Fisioterapia Malavasi.",
    "intro": "Aprire un barattolo, girare una chiave o abbottonare una camicia: quando la base del pollice fa male, i piccoli gesti diventano importanti. Partiamo da queste difficoltà per cercare soluzioni pratiche.",
    "symptoms": [
      {
        "title": "Dolore alla base del pollice",
        "text": "Le attività di pinza e presa possono sollecitare la zona."
      },
      {
        "title": "Forza ridotta",
        "text": "Trattenere oggetti piccoli o pesanti può richiedere più sforzo."
      },
      {
        "title": "Rigidità",
        "text": "L’apertura della mano può essere meno agevole."
      },
      {
        "title": "Gesti modificati",
        "text": "Usare altre dita per compensare può rendere alcune attività scomode."
      }
    ],
    "approachTitle": "Proteggere la funzione della mano.",
    "approach": "La rizoartrosi riguarda l’articolazione alla base del pollice. Il percorso non promette di ricostruire la cartilagine: mette al centro uso della mano, gestione dei carichi e strategie per mantenere l’autonomia.",
    "actions": [
      "Analisi dei gesti di pinza e delle attività più impegnative.",
      "Esercizi adattati alla mobilità e alla tolleranza del pollice.",
      "Indicazioni pratiche per distribuire lo sforzo nella giornata."
    ],
    "phases": [
      {
        "title": "Scegliere le priorità",
        "text": "Individuiamo le attività domestiche o lavorative che vuoi recuperare."
      },
      {
        "title": "Adattare e allenare",
        "text": "Lavoriamo su movimento e controllo usando carichi sostenibili."
      },
      {
        "title": "Verificare l’autonomia",
        "text": "Rivalutiamo gli stessi gesti per comprendere i cambiamenti."
      }
    ],
    "faq": [
      {
        "question": "Artrosi significa smettere di usare il pollice?",
        "answer": "Il percorso cerca un equilibrio tra attività, adattamenti e carico tollerabile. Evitare ogni uso della mano non è una soluzione da applicare automaticamente."
      },
      {
        "question": "È la stessa cosa della sindrome di De Quervain?",
        "answer": "No. La rizoartrosi interessa un’articolazione; la sindrome di De Quervain coinvolge strutture tendinee del pollice. La sede vicina può creare confusione e richiede valutazione."
      }
    ],
    "limitations": [
      "Aprire barattoli",
      "Girare chiavi",
      "Afferrare piccoli oggetti"
    ],
    "goals": [
      "Gestire meglio la presa",
      "Mantenere l’autonomia manuale",
      "Adattare i gesti dolorosi"
    ],
    "sourceIds": [
      "aaos-thumb"
    ],
    "related": [
      {
        "label": "Sindrome di De Quervain",
        "href": "/trattamenti/gomito-polso-mano/sindrome-de-quervain"
      },
      {
        "label": "Gomito, polso e mano",
        "href": "/trattamenti/gomito-polso-mano"
      }
    ]
  },
  {
    "id": "dito-a-scatto",
    "path": "/trattamenti/gomito-polso-mano/dito-a-scatto",
    "label": "Dito a scatto",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Dito a scatto.",
    "accent": "Una mano più libera.",
    "description": "Dito a scatto: valutazione delle difficoltà di movimento e supporto al percorso di recupero della mano con Fisioterapia Malavasi.",
    "intro": "Un dito che si blocca o scatta può interferire con lavoro, cucina e cura personale. Valutiamo quanto il disturbo incide sulla tua mano e come inserirci nel percorso indicato per la tua situazione.",
    "symptoms": [
      {
        "title": "Scatto nel movimento",
        "text": "Aprire o chiudere il dito può produrre un passaggio poco fluido."
      },
      {
        "title": "Blocco in flessione",
        "text": "Il dito può restare piegato e risultare difficile da distendere."
      },
      {
        "title": "Fastidio al palmo",
        "text": "Il dolore può presentarsi alla base del dito coinvolto."
      },
      {
        "title": "Rigidità al mattino",
        "text": "I primi gesti della giornata possono essere più difficili."
      }
    ],
    "approachTitle": "Capire il blocco prima di forzarlo.",
    "approach": "Il dito a scatto riguarda lo scorrimento di un tendine nella sua guaina. Adattiamo l’uso della mano e il lavoro sul movimento al quadro clinico, riconoscendo quando serve la valutazione del medico o dello specialista della mano.",
    "actions": [
      "Raccolta della storia del blocco e delle attività coinvolte.",
      "Modifica delle prese ripetute che aggravano i disturbi.",
      "Lavoro sulla funzione secondo le indicazioni cliniche ricevute."
    ],
    "phases": [
      {
        "title": "Osservare la mano",
        "text": "Valutiamo scatto, difficoltà quotidiane ed eventuali trattamenti già effettuati."
      },
      {
        "title": "Ridurre le richieste eccessive",
        "text": "Riorganizziamo i gesti e individuiamo attività tollerabili."
      },
      {
        "title": "Seguire l’evoluzione",
        "text": "Rivalutiamo movimento e necessità di un confronto specialistico."
      }
    ],
    "faq": [
      {
        "question": "Posso sbloccare il dito con forza?",
        "answer": "Forzare ripetutamente un blocco non è una strategia da adottare autonomamente. È utile valutare il problema e ricevere indicazioni specifiche."
      },
      {
        "question": "Bastano sempre gli esercizi?",
        "answer": "No. A seconda di gravità e persistenza, il medico può proporre altre opzioni. La fisioterapia si inserisce nel percorso, senza promettere di sostituire ogni trattamento."
      }
    ],
    "limitations": [
      "Aprire o chiudere la mano",
      "Usare attrezzi",
      "Cucinare o vestirmi"
    ],
    "goals": [
      "Usare meglio la mano",
      "Gestire i gesti che provocano scatto",
      "Orientare il recupero"
    ],
    "sourceIds": [
      "nhs-trigger"
    ],
    "related": [
      {
        "label": "Gomito, polso e mano",
        "href": "/trattamenti/gomito-polso-mano"
      },
      {
        "label": "Riabilitazione delle lesioni tendinee",
        "href": "/trattamenti/muscoli-tendini/riabilitazione-lesioni-tendinee"
      }
    ]
  },
  {
    "id": "sindrome-de-quervain",
    "path": "/trattamenti/gomito-polso-mano/sindrome-de-quervain",
    "label": "Sindrome di De Quervain",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Sindrome di De Quervain.",
    "accent": "Ripensiamo i gesti del pollice.",
    "description": "Dolore sul lato del pollice e sindrome di De Quervain: valutazione, adattamento dei gesti e percorso funzionale della mano.",
    "intro": "Sollevare un oggetto, prendere in braccio un bambino o ruotare il polso può provocare dolore vicino al pollice. Il percorso parte dai gesti ripetuti della tua giornata e da ciò che puoi modificare concretamente.",
    "symptoms": [
      {
        "title": "Dolore lato pollice",
        "text": "Il fastidio può concentrarsi sul margine del polso."
      },
      {
        "title": "Difficoltà a sollevare",
        "text": "Alcune prese e posizioni del pollice possono essere provocanti."
      },
      {
        "title": "Movimenti limitati",
        "text": "Ruotare il polso o aprire il pollice può risultare scomodo."
      },
      {
        "title": "Gonfiore locale",
        "text": "Quando presente, va interpretato insieme agli altri segni."
      }
    ],
    "approachTitle": "Meno sovraccarico, più possibilità.",
    "approach": "La sindrome di De Quervain riguarda i tendini che passano sul lato del pollice al polso. Il lavoro considera attività, posizione della mano e tolleranza dei tessuti, integrandosi con le indicazioni mediche quando necessarie.",
    "actions": [
      "Analisi delle prese usate al lavoro e in famiglia.",
      "Adattamenti per ridistribuire le richieste a polso e pollice.",
      "Progressione del movimento e della funzione in base alla risposta."
    ],
    "phases": [
      {
        "title": "Riconoscere le richieste",
        "text": "Osserviamo quando il dolore compare e quali gesti si ripetono."
      },
      {
        "title": "Modificare la routine",
        "text": "Cerchiamo soluzioni praticabili senza imporre un uso identico della mano a tutti."
      },
      {
        "title": "Recuperare i compiti",
        "text": "Reintroduciamo le attività più impegnative secondo la tolleranza."
      }
    ],
    "faq": [
      {
        "question": "Il dolore alla base del pollice è sempre De Quervain?",
        "answer": "No. Anche disturbi articolari, come la rizoartrosi, possono interessare questa zona. La valutazione serve a distinguere i quadri."
      },
      {
        "question": "Se il disturbo non migliora?",
        "answer": "È opportuno confrontarsi con il medico per rivalutare diagnosi e opzioni disponibili. Non tutti i casi rispondono allo stesso percorso conservativo."
      }
    ],
    "limitations": [
      "Sollevare oggetti",
      "Ruotare il polso",
      "Usare a lungo il pollice"
    ],
    "goals": [
      "Adattare le prese quotidiane",
      "Riprendere i gesti familiari",
      "Recuperare funzione di polso e pollice"
    ],
    "sourceIds": [
      "aaos-dequervain"
    ],
    "related": [
      {
        "label": "Rizoartrosi",
        "href": "/trattamenti/gomito-polso-mano/rizoartrosi"
      },
      {
        "label": "Tendinopatie e borsiti",
        "href": "/trattamenti/muscoli-tendini/tendinopatie-borsiti"
      }
    ]
  },
  {
    "id": "fratture-mano-dita",
    "path": "/trattamenti/gomito-polso-mano/fratture-mano-dita",
    "label": "Riabilitazione dopo fratture della mano e delle dita",
    "category": {
      "label": "Gomito, polso e mano",
      "href": "/trattamenti/gomito-polso-mano"
    },
    "heading": "Mano e dita dopo una frattura.",
    "accent": "Ritrovare precisione.",
    "description": "Recupero dopo fratture della mano e delle dita: mobilità, presa e gesti fini nel rispetto del consolidamento e delle indicazioni ortopediche.",
    "intro": "Dopo il gesso o un intervento, scrivere, afferrare e compiere movimenti precisi può sembrare diverso. Organizziamo il recupero della mano rispettando la stabilità della frattura e le indicazioni dell’ortopedico.",
    "symptoms": [
      {
        "title": "Dita rigide",
        "text": "Chiudere la mano o distendere le dita può essere limitato."
      },
      {
        "title": "Gonfiore residuo",
        "text": "La mano può apparire diversa e tollerare meno alcune attività."
      },
      {
        "title": "Presa ridotta",
        "text": "Il ritorno allo sforzo richiede una progressione autorizzata."
      },
      {
        "title": "Precisione da ritrovare",
        "text": "Bottoni, tastiera e piccoli oggetti richiedono coordinazione."
      }
    ],
    "approachTitle": "Muovere ciò che è pronto a muoversi.",
    "approach": "Tipo di frattura, eventuale fissazione e fase di consolidamento orientano il percorso. Mobilità e carico non vengono anticipati: il lavoro mira a recuperare una mano utile nelle attività, in continuità con i controlli ortopedici.",
    "actions": [
      "Verifica dei movimenti consentiti e delle protezioni prescritte.",
      "Esercizi graduati per mobilità e uso coordinato delle dita.",
      "Ritorno alla presa e al carico quando clinicamente autorizzato."
    ],
    "phases": [
      {
        "title": "Leggere il percorso",
        "text": "Raccogliamo referti, interventi eseguiti e indicazioni sui limiti."
      },
      {
        "title": "Recuperare i movimenti",
        "text": "Alleniamo le articolazioni e le attività consentite."
      },
      {
        "title": "Affinare il gesto",
        "text": "Progrediamo verso precisione, presa e richieste lavorative."
      }
    ],
    "faq": [
      {
        "question": "Posso stringere una pallina appena tolto il gesso?",
        "answer": "Non automaticamente. La resistenza va introdotta secondo consolidamento, stabilità e indicazioni ricevute, perché le fratture della mano non sono tutte uguali."
      },
      {
        "question": "La rigidità va valutata anche se l’osso è guarito?",
        "answer": "Sì. La guarigione ossea e il recupero completo della funzione non coincidono sempre: mobilità, coordinazione e presa possono richiedere un lavoro dedicato."
      }
    ],
    "limitations": [
      "Chiudere la mano",
      "Scrivere o usare la tastiera",
      "Trattenere oggetti"
    ],
    "goals": [
      "Recuperare movimento delle dita",
      "Ritrovare precisione e presa",
      "Tornare al lavoro manuale"
    ],
    "sourceIds": [
      "aaos-hand-fractures",
      "nice-trauma"
    ],
    "related": [
      {
        "label": "Gomito, polso e mano",
        "href": "/trattamenti/gomito-polso-mano"
      },
      {
        "label": "Riabilitazione pre e post-chirurgica",
        "href": "/trattamenti/chirurgica"
      }
    ]
  },
  {
    "id": "artrosi-anca",
    "path": "/trattamenti/anca-inguine/artrosi-anca",
    "label": "Artrosi dell’anca",
    "category": {
      "label": "Anca e inguine",
      "href": "/trattamenti/anca-inguine"
    },
    "heading": "Artrosi dell’anca.",
    "accent": "Continuiamo a muoverci.",
    "description": "Artrosi dell’anca: esercizio adattato, capacità di cammino e autonomia quotidiana. Valutazione e percorso con Fisioterapia Malavasi.",
    "intro": "Mettere le scarpe, entrare in auto o percorrere una strada in salita può diventare faticoso. Con una diagnosi di artrosi dell’anca, l’obiettivo è lavorare sulle possibilità di movimento e sulla tua autonomia.",
    "symptoms": [
      {
        "title": "Rigidità dell’anca",
        "text": "Alzarti o muovere la gamba dopo una pausa può richiedere tempo."
      },
      {
        "title": "Cammino più impegnativo",
        "text": "Distanze e terreno possono influenzare la tolleranza."
      },
      {
        "title": "Gesti personali difficili",
        "text": "Scarpe, calze e passaggi in auto richiedono mobilità."
      },
      {
        "title": "Dolore inguinale",
        "text": "Può accompagnare i disturbi dell’anca, ma ha anche altre possibili origini."
      }
    ],
    "approachTitle": "La forza sostiene le tue giornate.",
    "approach": "L’esercizio terapeutico adattato è parte della gestione dell’artrosi. Valutiamo capacità muscolare, mobilità e attività tollerate per costruire un lavoro sostenibile, senza promettere di rigenerare la cartilagine o annullare ogni sintomo.",
    "actions": [
      "Esercizi di forza e attività generale adeguati alle capacità.",
      "Lavoro sulla mobilità utile per i gesti personali.",
      "Progressione del cammino e strategie per distribuire gli sforzi."
    ],
    "phases": [
      {
        "title": "Scegliere un obiettivo utile",
        "text": "Partiamo da una distanza o da un gesto che vorresti recuperare."
      },
      {
        "title": "Allenare con regolarità",
        "text": "Costruiamo una routine compatibile con sintomi e abitudini."
      },
      {
        "title": "Rivalutare nella pratica",
        "text": "Confrontiamo cammino, scale e autonomia nelle attività personali."
      }
    ],
    "faq": [
      {
        "question": "Muoversi consuma ulteriormente l’anca?",
        "answer": "L’esercizio adattato è raccomandato nella gestione dell’artrosi. Il programma va dosato sulla persona, anche quando all’inizio compare un po’ di disagio."
      },
      {
        "question": "Quando valutare una protesi?",
        "answer": "È una decisione specialistica che considera sintomi, qualità di vita e risposta ai trattamenti. La fisioterapia non promette di rendere sempre inutile la chirurgia."
      }
    ],
    "limitations": [
      "Mettere scarpe o calze",
      "Camminare o salire le scale",
      "Entrare e uscire dall’auto"
    ],
    "goals": [
      "Mantenere autonomia",
      "Migliorare il cammino",
      "Ritrovare forza nell’arto"
    ],
    "sourceIds": [
      "nice-osteoarthritis"
    ],
    "related": [
      {
        "label": "Riabilitazione dopo protesi d’anca",
        "href": "/trattamenti/anca-inguine/riabilitazione-protesi-anca"
      },
      {
        "label": "Pubalgia e dolore inguinale",
        "href": "/trattamenti/anca-inguine/pubalgia-dolore-inguinale"
      }
    ]
  },
  {
    "id": "pubalgia-dolore-inguinale",
    "path": "/trattamenti/anca-inguine/pubalgia-dolore-inguinale",
    "label": "Pubalgia e dolore inguinale",
    "category": {
      "label": "Anca e inguine",
      "href": "/trattamenti/anca-inguine"
    },
    "heading": "Dolore all’inguine.",
    "accent": "Capire prima di ripartire.",
    "description": "Pubalgia e dolore inguinale: valutazione delle richieste sportive e quotidiane, distinguendo il sintomo dalle possibili diagnosi.",
    "intro": "Correre, calciare o cambiare direzione può diventare difficile quando senti dolore all’inguine. Prima di chiamarlo “pubalgia”, è importante comprendere il quadro e individuare quali attività stiano mettendo alla prova la zona.",
    "symptoms": [
      {
        "title": "Dolore nel gesto sportivo",
        "text": "Scatti, calci e cambi di direzione possono risultare provocanti."
      },
      {
        "title": "Fastidio nella zona pubica",
        "text": "La sede precisa e il comportamento del disturbo aiutano l’inquadramento."
      },
      {
        "title": "Ripresa difficile",
        "text": "Il dolore può ricomparire quando aumentano le richieste."
      },
      {
        "title": "Limitazioni quotidiane",
        "text": "Anche camminare o muovere l’anca può diventare meno agevole."
      }
    ],
    "approachTitle": "Un sintomo, più possibili origini.",
    "approach": "Dolore inguinale non significa automaticamente pubalgia. Possono essere coinvolti adduttori, regione addominale, anca o condizioni che richiedono una valutazione medica. Il lavoro riabilitativo parte dal corretto inquadramento.",
    "actions": [
      "Analisi delle attività e delle variazioni recenti del carico.",
      "Valutazione funzionale di anca, tronco e regione adduttoria.",
      "Progressione verso corsa e gesti specifici quando appropriata."
    ],
    "phases": [
      {
        "title": "Distinguere il problema",
        "text": "Raccogliamo storia, sedi del dolore e indicazioni cliniche."
      },
      {
        "title": "Costruire tolleranza",
        "text": "Alleniamo le capacità richieste senza ripetere subito il gesto più impegnativo."
      },
      {
        "title": "Rientrare nel contesto",
        "text": "Verifichiamo progressivamente le richieste dello sport o del lavoro."
      }
    ],
    "faq": [
      {
        "question": "Ogni dolore inguinale è una pubalgia?",
        "answer": "No. È un sintomo con cause diverse; eventuali gonfiori, sintomi addominali o altri disturbi associati vanno riferiti al medico."
      },
      {
        "question": "Il riposo basta per tornare allo sport?",
        "answer": "La riduzione dei sintomi a riposo non dimostra da sola che il carico sportivo sia tollerato. La ripresa va preparata e verificata sul gesto richiesto."
      }
    ],
    "limitations": [
      "Correre o accelerare",
      "Calciare o cambiare direzione",
      "Muovere l’anca nelle attività"
    ],
    "goals": [
      "Riprendere lo sport gradualmente",
      "Gestire il carico dell’inguine",
      "Capire le limitazioni funzionali"
    ],
    "sourceIds": [
      "aaos-pubalgia",
      "nhs-hip"
    ],
    "related": [
      {
        "label": "Artrosi dell’anca",
        "href": "/trattamenti/anca-inguine/artrosi-anca"
      },
      {
        "label": "Fisioterapia sportiva",
        "href": "/trattamenti/sportiva"
      }
    ]
  },
  {
    "id": "riabilitazione-protesi-anca",
    "path": "/trattamenti/anca-inguine/riabilitazione-protesi-anca",
    "label": "Riabilitazione dopo protesi d’anca",
    "category": {
      "label": "Anca e inguine",
      "href": "/trattamenti/anca-inguine"
    },
    "heading": "Dopo la protesi d’anca.",
    "accent": "Passi verso l’autonomia.",
    "description": "Recupero dopo protesi d’anca: cammino, forza e attività personali in continuità con il percorso ospedaliero e le indicazioni chirurgiche.",
    "intro": "Tornare a casa significa ritrovare scale, sedie e percorsi familiari. Dopo la protesi d’anca ti accompagniamo nel recupero di questi gesti, con obiettivi concreti e attenzione alle precauzioni ricevute.",
    "symptoms": [
      {
        "title": "Cammino con ausili",
        "text": "Stampelle o altri supporti fanno parte della fase di recupero indicata."
      },
      {
        "title": "Passaggi da organizzare",
        "text": "Letto, sedia e auto richiedono strategie compatibili con le precauzioni."
      },
      {
        "title": "Forza da recuperare",
        "text": "Il controllo dell’arto sostiene equilibrio e autonomia."
      },
      {
        "title": "Resistenza ridotta",
        "text": "La distanza percorsa deve crescere in modo sostenibile."
      }
    ],
    "approachTitle": "Dalla dimissione alla vita di casa.",
    "approach": "Le indicazioni cambiano con intervento, accesso chirurgico e condizioni personali. Raccogliamo le prescrizioni su carico e movimenti, poi costruiamo il programma per cammino, forza e attività quotidiane.",
    "actions": [
      "Verifica dell’uso degli ausili e dei limiti prescritti.",
      "Esercizi per controllo dell’arto e recupero della forza.",
      "Allenamento dei passaggi e delle scale secondo le possibilità."
    ],
    "phases": [
      {
        "title": "Organizzare il rientro",
        "text": "Definiamo priorità e attività consentite nella tua abitazione."
      },
      {
        "title": "Consolidare il passo",
        "text": "Lavoriamo sulla qualità del cammino e sull’autonomia."
      },
      {
        "title": "Ampliare le distanze",
        "text": "Progrediamo verso commissioni, uscite e attività concordate."
      }
    ],
    "faq": [
      {
        "question": "Quando posso togliere le stampelle?",
        "answer": "La scelta considera indicazioni chirurgiche, equilibrio e qualità del cammino. Non si basa solo sui giorni trascorsi dall’intervento."
      },
      {
        "question": "Posso iniziare a domicilio?",
        "answer": "La fisioterapia domiciliare è una modalità presente nello studio. La sua organizzazione e l’adeguatezza alla tua situazione vengono concordate al contatto."
      }
    ],
    "limitations": [
      "Camminare con sicurezza",
      "Fare le scale",
      "Alzarmi da letto o sedia"
    ],
    "goals": [
      "Recuperare autonomia in casa",
      "Ritrovare un cammino più sicuro",
      "Riprendere le uscite"
    ],
    "sourceIds": [
      "nice-replacement",
      "aaos-joint-replacement"
    ],
    "related": [
      {
        "label": "Fisioterapia domiciliare",
        "href": "/metodo/seduta-fisioterapica-domiciliare"
      },
      {
        "label": "Artrosi dell’anca",
        "href": "/trattamenti/anca-inguine/artrosi-anca"
      }
    ]
  },
  {
    "id": "lesioni-crociato-posteriore-legamenti-collaterali",
    "path": "/trattamenti/patologie-ginocchio/lesioni-crociato-posteriore-legamenti-collaterali",
    "label": "Lesioni del crociato posteriore e dei legamenti collaterali",
    "category": {
      "label": "Ginocchio",
      "href": "/trattamenti/patologie-ginocchio"
    },
    "heading": "Crociato posteriore e collaterali.",
    "accent": "Ricostruire la stabilità funzionale.",
    "description": "Percorsi dopo lesioni del crociato posteriore e dei legamenti collaterali: carichi, controllo del ginocchio e ripresa secondo diagnosi e indicazioni.",
    "intro": "Dopo un trauma, il ginocchio può sembrare poco affidabile. Crociato posteriore e collaterali svolgono ruoli diversi: il recupero deve rispettare la lesione, l’eventuale associazione con altri danni e le indicazioni ortopediche.",
    "symptoms": [
      {
        "title": "Gonfiore dopo il trauma",
        "text": "Il ginocchio può diventare rigido e difficile da caricare."
      },
      {
        "title": "Sensazione di cedimento",
        "text": "La fiducia nell’appoggio può ridursi."
      },
      {
        "title": "Dolore localizzato",
        "text": "La zona posteriore o i lati possono essere coinvolti, senza identificare da soli la lesione."
      },
      {
        "title": "Difficoltà nelle direzioni",
        "text": "Girarti o cambiare passo può risultare insicuro."
      }
    ],
    "approachTitle": "Ogni legamento richiede scelte precise.",
    "approach": "Lesioni isolate e lesioni associate non seguono necessariamente lo stesso percorso. Consideriamo diagnosi, stabilità e prescrizioni su tutore e carico per impostare esercizi che sostengano il ginocchio nelle attività richieste.",
    "actions": [
      "Verifica delle precauzioni per la struttura coinvolta.",
      "Recupero graduato della mobilità e della capacità muscolare.",
      "Lavoro sul controllo dell’appoggio e sul gesto funzionale."
    ],
    "phases": [
      {
        "title": "Definire le protezioni",
        "text": "Partiamo dall’inquadramento ortopedico e dagli eventuali interventi."
      },
      {
        "title": "Allenare il controllo",
        "text": "Introduciamo richieste compatibili con la fase del percorso."
      },
      {
        "title": "Preparare i cambi di direzione",
        "text": "Valutiamo le capacità necessarie prima delle attività più complesse."
      }
    ],
    "faq": [
      {
        "question": "Il percorso è uguale a quello del crociato anteriore?",
        "answer": "No. Strutture coinvolte e precauzioni possono differire. Il programma deve rispettare la specifica lesione e le indicazioni del medico."
      },
      {
        "question": "Serve sempre un’operazione?",
        "answer": "Dipende da lesione, instabilità e danni associati. La decisione è specialistica; la pagina non sostituisce l’inquadramento ortopedico."
      }
    ],
    "limitations": [
      "Caricare il ginocchio",
      "Cambiare direzione",
      "Scendere le scale"
    ],
    "goals": [
      "Recuperare controllo nell’appoggio",
      "Riprendere il cammino",
      "Preparare il ritorno sportivo"
    ],
    "sourceIds": [
      "aaos-pcl",
      "aaos-collateral"
    ],
    "related": [
      {
        "label": "Ricostruzione del crociato anteriore",
        "href": "/trattamenti/patologie-ginocchio/lca"
      },
      {
        "label": "Distorsione e instabilità del ginocchio",
        "href": "/trattamenti/patologie-ginocchio/distorsione-instabilita"
      }
    ]
  },
  {
    "id": "distorsione-instabilita",
    "path": "/trattamenti/patologie-ginocchio/distorsione-instabilita",
    "label": "Distorsione e instabilità del ginocchio",
    "category": {
      "label": "Ginocchio",
      "href": "/trattamenti/patologie-ginocchio"
    },
    "heading": "Ginocchio dopo una distorsione.",
    "accent": "Ritrovare un appoggio sicuro.",
    "description": "Distorsione e instabilità del ginocchio: valutazione funzionale e recupero di mobilità, forza e controllo dopo il corretto inquadramento del trauma.",
    "intro": "Una torsione, un appoggio sbagliato, un ginocchio che ora sembra cedere. Dopo aver chiarito le conseguenze del trauma, lavoriamo per recuperare fiducia nel passo e preparare le attività che vuoi riprendere.",
    "symptoms": [
      {
        "title": "Gonfiore e rigidità",
        "text": "Dopo il trauma il movimento può essere meno libero."
      },
      {
        "title": "Appoggio incerto",
        "text": "Caricare la gamba può sembrare insicuro."
      },
      {
        "title": "Cedimenti riferiti",
        "text": "La sensazione va valutata, senza attribuirla automaticamente a un legamento."
      },
      {
        "title": "Sport interrotto",
        "text": "Corsa, salti e rotazioni richiedono capacità diverse dal semplice cammino."
      }
    ],
    "approachTitle": "Dal trauma alla funzione.",
    "approach": "La distorsione descrive un evento, non la struttura eventualmente lesionata. La valutazione clinica orienta il percorso e l’eventuale approfondimento ortopedico. Il recupero viene graduato su mobilità, forza e controllo dell’arto.",
    "actions": [
      "Raccolta della dinamica e dei risultati degli accertamenti.",
      "Progressione del carico in accordo con il quadro clinico.",
      "Esercizi di forza e controllo adattati alle attività future."
    ],
    "phases": [
      {
        "title": "Chiarire il punto di partenza",
        "text": "Valutiamo i limiti attuali e le indicazioni dopo il trauma."
      },
      {
        "title": "Stabilizzare il gesto",
        "text": "Lavoriamo sull’appoggio e sulle capacità muscolari."
      },
      {
        "title": "Testare le richieste",
        "text": "Aumentiamo la complessità dei compiti prima del rientro completo."
      }
    ],
    "faq": [
      {
        "question": "Se riesco a camminare posso già tornare in campo?",
        "answer": "Cammino e sport hanno richieste differenti. Il ritorno deve considerare forza, controllo, sintomi e il tipo di attività."
      },
      {
        "question": "Quando serve una rivalutazione medica?",
        "answer": "Un ginocchio bloccato, un gonfiore importante, l’impossibilità a caricare o cedimenti ripetuti meritano una valutazione clinica prima di aumentare le attività."
      }
    ],
    "limitations": [
      "Camminare con fiducia",
      "Salire o scendere le scale",
      "Correre e cambiare direzione"
    ],
    "goals": [
      "Ritrovare controllo del ginocchio",
      "Riprendere le attività quotidiane",
      "Rientrare nello sport"
    ],
    "sourceIds": [
      "aaos-knee",
      "aaos-soft-tissue"
    ],
    "related": [
      {
        "label": "Lesioni meniscali",
        "href": "/trattamenti/patologie-ginocchio/lesioni-meniscali"
      },
      {
        "label": "Lesioni del crociato posteriore e dei collaterali",
        "href": "/trattamenti/patologie-ginocchio/lesioni-crociato-posteriore-legamenti-collaterali"
      }
    ]
  },
  {
    "id": "riabilitazione-protesi-ginocchio",
    "path": "/trattamenti/patologie-ginocchio/riabilitazione-protesi-ginocchio",
    "label": "Riabilitazione dopo protesi di ginocchio",
    "category": {
      "label": "Ginocchio",
      "href": "/trattamenti/patologie-ginocchio"
    },
    "heading": "Dopo la protesi di ginocchio.",
    "accent": "Ritrova il passo quotidiano.",
    "description": "Riabilitazione dopo protesi di ginocchio: movimento, forza, scale e cammino con un programma adattato al recupero e alle indicazioni dell’équipe.",
    "intro": "Alzarti dalla sedia, fare le scale e uscire di casa sono traguardi concreti. Dopo la protesi di ginocchio impostiamo il lavoro su questi gesti, seguendo il percorso avviato in ospedale e la tua risposta al carico.",
    "symptoms": [
      {
        "title": "Ginocchio rigido",
        "text": "Piegamento ed estensione possono limitare le attività."
      },
      {
        "title": "Muscoli meno efficienti",
        "text": "Il controllo dell’arto può richiedere un lavoro specifico."
      },
      {
        "title": "Cammino da organizzare",
        "text": "Ausili, distanze e pause vanno adattati alla fase di recupero."
      },
      {
        "title": "Scale impegnative",
        "text": "Salire e scendere richiede forza e sicurezza."
      }
    ],
    "approachTitle": "Misurare i progressi nei gesti reali.",
    "approach": "Il percorso considera tipo di intervento, indicazioni chirurgiche e capacità iniziali. Lavoriamo su movimento, controllo muscolare e attività personali, adeguando la progressione alla risposta e ai controlli programmati.",
    "actions": [
      "Esercizi per il movimento consentito del ginocchio.",
      "Recupero della forza e del controllo nell’appoggio.",
      "Pratica graduata di sedia, scale e cammino."
    ],
    "phases": [
      {
        "title": "Dare continuità",
        "text": "Raccogliamo la documentazione e rivediamo il programma domiciliare."
      },
      {
        "title": "Costruire autonomia",
        "text": "Alleniamo i compiti necessari per la vita di casa."
      },
      {
        "title": "Allargare il raggio",
        "text": "Progrediamo verso percorsi esterni e attività concordate."
      }
    ],
    "faq": [
      {
        "question": "Il recupero dipende solo da quanto piego il ginocchio?",
        "answer": "La mobilità è importante, ma contano anche forza, equilibrio, dolore e capacità di svolgere le attività personali."
      },
      {
        "question": "Devo avere gli stessi progressi di un altro paziente?",
        "answer": "No. Condizioni iniziali, intervento e risposta individuale influenzano il percorso. Gli obiettivi vanno verificati sulla tua funzione, non su confronti generici."
      }
    ],
    "limitations": [
      "Alzarmi da una sedia",
      "Piegare o distendere il ginocchio",
      "Camminare e fare le scale"
    ],
    "goals": [
      "Recuperare autonomia",
      "Ritrovare forza nell’appoggio",
      "Riprendere le uscite quotidiane"
    ],
    "sourceIds": [
      "nice-replacement",
      "aaos-joint-replacement"
    ],
    "related": [
      {
        "label": "Gonartrosi",
        "href": "/trattamenti/patologie-ginocchio/gonartrosi"
      },
      {
        "label": "Fisioterapia domiciliare",
        "href": "/metodo/seduta-fisioterapica-domiciliare"
      }
    ]
  },
  {
    "id": "distorsione-instabilita-caviglia",
    "path": "/trattamenti/caviglia-piede/distorsione-instabilita-caviglia",
    "label": "Distorsione e instabilità della caviglia",
    "category": {
      "label": "Caviglia e piede",
      "href": "/trattamenti/caviglia-piede"
    },
    "heading": "Una caviglia che cede.",
    "accent": "Ritrova il controllo.",
    "description": "Dopo una distorsione di caviglia: recupero di mobilità, forza ed equilibrio per cammino e attività sportive con Fisioterapia Malavasi.",
    "intro": "Una storta può lasciare più del dolore: l’appoggio sembra incerto e il terreno irregolare mette in difficoltà. Dopo l’inquadramento del trauma, lavoriamo per riportare controllo e fiducia nei tuoi passi.",
    "symptoms": [
      {
        "title": "Gonfiore",
        "text": "La zona può restare sensibile e rendere scomodo l’appoggio."
      },
      {
        "title": "Mobilità ridotta",
        "text": "Piegare la caviglia può influire su scale e cammino."
      },
      {
        "title": "Storte ripetute",
        "text": "La sensazione di cedimento richiede attenzione alla funzione."
      },
      {
        "title": "Terreno impegnativo",
        "text": "Superfici irregolari e cambi di direzione possono creare insicurezza."
      }
    ],
    "approachTitle": "Il recupero continua oltre il dolore.",
    "approach": "Il percorso dopo una distorsione considera gravità, eventuali lesioni associate e capacità di carico. Mobilità, forza e controllo dell’equilibrio vengono affrontati progressivamente, fino alle richieste specifiche delle tue attività.",
    "actions": [
      "Recupero graduato del movimento e dell’appoggio consentito.",
      "Esercizi per muscoli della gamba e controllo su un piede.",
      "Progressione verso terreno irregolare, corsa o cambi di direzione."
    ],
    "phases": [
      {
        "title": "Valutare l’appoggio",
        "text": "Raccogliamo dinamica, diagnosi e difficoltà dopo la storta."
      },
      {
        "title": "Allenare la stabilità",
        "text": "Proponiamo compiti con richieste crescenti e condizioni controllate."
      },
      {
        "title": "Preparare il contesto",
        "text": "Riproviamo i gesti di lavoro, passeggiata o sport."
      }
    ],
    "faq": [
      {
        "question": "Se il dolore è passato il recupero è completo?",
        "answer": "Non sempre. Forza, mobilità e controllo dell’appoggio possono richiedere ancora lavoro prima delle attività più impegnative."
      },
      {
        "question": "Quando far controllare subito la caviglia?",
        "answer": "Dopo un trauma, impossibilità a caricare, deformità, dolore marcato o sintomi in peggioramento richiedono una valutazione medica per escludere lesioni che necessitano di altro trattamento."
      }
    ],
    "limitations": [
      "Camminare su terreno irregolare",
      "Stare su un piede",
      "Correre o cambiare direzione"
    ],
    "goals": [
      "Ritrovare stabilità nell’appoggio",
      "Riprendere lo sport",
      "Camminare con più sicurezza"
    ],
    "sourceIds": [
      "aaos-ankle",
      "nhs-sprains"
    ],
    "related": [
      {
        "label": "Fisioterapia sportiva",
        "href": "/trattamenti/sportiva"
      },
      {
        "label": "Rieducazione del cammino e dell’equilibrio",
        "href": "/trattamenti/rieducazione-cammino-equilibrio"
      }
    ]
  },
  {
    "id": "fascite-plantare",
    "path": "/trattamenti/caviglia-piede/fascite-plantare",
    "label": "Fascite plantare",
    "category": {
      "label": "Caviglia e piede",
      "href": "/trattamenti/caviglia-piede"
    },
    "heading": "Fascite plantare.",
    "accent": "Ripartiamo dall’appoggio.",
    "description": "Fascite plantare: gestione del carico, esercizio e progressione delle attività per il dolore plantare al tallone. Fisioterapia Malavasi.",
    "intro": "I primi passi del mattino sono difficili, poi il piede cambia risposta durante la giornata. Se il dolore plantare limita cammino o corsa, valutiamo le tue abitudini di carico e costruiamo una ripresa sostenibile.",
    "symptoms": [
      {
        "title": "Primi passi dolorosi",
        "text": "Il fastidio può essere evidente dopo il riposo."
      },
      {
        "title": "Dolore sotto il tallone",
        "text": "La sede va valutata insieme al comportamento dei sintomi."
      },
      {
        "title": "Lunghe giornate in piedi",
        "text": "La somma delle attività può influire sulla tolleranza."
      },
      {
        "title": "Corsa ridotta",
        "text": "Aumenti di volume o intensità meritano attenzione."
      }
    ],
    "approachTitle": "Dosare il carico, sostenere il piede.",
    "approach": "La fascia plantare contribuisce al sostegno dell’arco del piede. Il percorso considera attività, mobilità e capacità muscolare; l’obiettivo è migliorare la tolleranza dell’appoggio con un programma adattato, senza affidarsi a un’unica soluzione.",
    "actions": [
      "Revisione delle attività in piedi e delle variazioni recenti.",
      "Esercizi selezionati per piede, polpaccio e mobilità.",
      "Ripresa graduata di cammino e attività fisica."
    ],
    "phases": [
      {
        "title": "Leggere la giornata",
        "text": "Ricostruiamo primi passi, lavoro e risposta dopo l’attività."
      },
      {
        "title": "Costruire una base",
        "text": "Adattiamo esercizi e carichi alle capacità attuali."
      },
      {
        "title": "Aumentare le richieste",
        "text": "Monitoriamo la risposta mentre crescono distanze o allenamento."
      }
    ],
    "faq": [
      {
        "question": "Lo sperone calcaneare spiega sempre il dolore?",
        "answer": "No. Uno sperone può essere presente anche senza sintomi e non equivale automaticamente alla causa del dolore plantare."
      },
      {
        "question": "Devo sospendere ogni attività?",
        "answer": "Le attività possono essere modificate per mantenere ciò che è tollerabile. Quantità, superfici e intensità vengono scelte secondo la valutazione individuale."
      }
    ],
    "limitations": [
      "Fare i primi passi",
      "Restare in piedi",
      "Camminare o correre"
    ],
    "goals": [
      "Tollerare meglio l’appoggio",
      "Riprendere il cammino",
      "Tornare alla corsa gradualmente"
    ],
    "sourceIds": [
      "nhs-plantar",
      "aaos-plantar"
    ],
    "related": [
      {
        "label": "Tallonite e sperone calcaneare",
        "href": "/trattamenti/caviglia-piede/tallonite-sperone-calcaneare"
      },
      {
        "label": "Caviglia e piede",
        "href": "/trattamenti/caviglia-piede"
      }
    ]
  },
  {
    "id": "tallonite-sperone-calcaneare",
    "path": "/trattamenti/caviglia-piede/tallonite-sperone-calcaneare",
    "label": "Tallonite e sperone calcaneare",
    "category": {
      "label": "Caviglia e piede",
      "href": "/trattamenti/caviglia-piede"
    },
    "heading": "Dolore al tallone.",
    "accent": "Oltre il nome del referto.",
    "description": "Tallonite e sperone calcaneare: comprendere l’origine del dolore al tallone e orientare il recupero dell’appoggio e del cammino.",
    "intro": "Il tallone fa male e sul referto compare uno sperone: sono necessariamente collegati? Prima di scegliere il trattamento, mettiamo in relazione la sede del dolore, le attività e gli accertamenti disponibili.",
    "symptoms": [
      {
        "title": "Dolore nell’appoggio",
        "text": "Il contatto con il terreno può risultare fastidioso."
      },
      {
        "title": "Fastidio sotto o dietro il tallone",
        "text": "La posizione precisa aiuta a distinguere le strutture da valutare."
      },
      {
        "title": "Variazioni con il carico",
        "text": "Cammino, corsa e tempo in piedi possono modificare i disturbi."
      },
      {
        "title": "Referto difficile da interpretare",
        "text": "Un reperto osseo va collegato alla valutazione clinica."
      }
    ],
    "approachTitle": "Tallonite descrive il sintomo.",
    "approach": "Il dolore al tallone può avere origini differenti. Lo sperone è un reperto osseo che può essere presente anche in assenza di dolore. La valutazione orienta il percorso e gli eventuali approfondimenti, evitando un trattamento basato soltanto sull’immagine.",
    "actions": [
      "Raccolta dei sintomi e osservazione delle attività in carico.",
      "Valutazione funzionale di piede, caviglia e cammino.",
      "Indicazioni ed esercizio coerenti con il problema individuato."
    ],
    "phases": [
      {
        "title": "Localizzare e distinguere",
        "text": "Partiamo dalla sede, dalla storia e dagli accertamenti già eseguiti."
      },
      {
        "title": "Adattare l’appoggio",
        "text": "Rivediamo le richieste quotidiane e selezioniamo attività tollerabili."
      },
      {
        "title": "Verificare sul cammino",
        "text": "Monitoriamo il ritorno alle distanze e alle superfici abituali."
      }
    ],
    "faq": [
      {
        "question": "Bisogna eliminare lo sperone per stare meglio?",
        "answer": "La presenza dello sperone non dimostra che sia la fonte del dolore. Le scelte dipendono dal quadro clinico, non soltanto dalla radiografia."
      },
      {
        "question": "Tallonite e fascite plantare sono la stessa cosa?",
        "answer": "No. Tallonite indica il dolore al tallone; la fascite plantare è una delle possibili condizioni associate. Distinguere la struttura coinvolta aiuta a scegliere un percorso appropriato."
      }
    ],
    "limitations": [
      "Appoggiare il tallone",
      "Camminare a lungo",
      "Restare in piedi sul lavoro"
    ],
    "goals": [
      "Comprendere il problema funzionale",
      "Recuperare il cammino",
      "Gestire le attività in carico"
    ],
    "sourceIds": [
      "aaos-plantar",
      "nhs-heel"
    ],
    "related": [
      {
        "label": "Fascite plantare",
        "href": "/trattamenti/caviglia-piede/fascite-plantare"
      },
      {
        "label": "Caviglia e piede",
        "href": "/trattamenti/caviglia-piede"
      }
    ]
  },
  {
    "id": "contratture-lesioni-muscolari",
    "path": "/trattamenti/muscoli-tendini/contratture-lesioni-muscolari",
    "label": "Contratture e lesioni muscolari",
    "category": {
      "label": "Muscoli e tendini",
      "href": "/trattamenti/muscoli-tendini"
    },
    "heading": "Muscoli doloranti o lesionati.",
    "accent": "Ripartire con criterio.",
    "description": "Contratture e lesioni muscolari: valutazione della funzione, gestione del carico e progressione verso attività quotidiane e sport.",
    "intro": "Una tensione che non passa e un dolore improvviso durante uno scatto non raccontano la stessa storia. Valutiamo come è comparso il disturbo e cosa riesci a fare, per scegliere un percorso adatto al problema.",
    "symptoms": [
      {
        "title": "Tensione persistente",
        "text": "Un muscolo percepito come contratto non indica necessariamente una lesione."
      },
      {
        "title": "Dolore dopo uno sforzo",
        "text": "Dinamica e intensità dell’attività aiutano a orientare la valutazione."
      },
      {
        "title": "Forza ridotta",
        "text": "Il gesto abituale può risultare doloroso o meno efficace."
      },
      {
        "title": "Ripresa incerta",
        "text": "Allenarti come prima può essere difficile anche dopo una pausa."
      }
    ],
    "approachTitle": "Distinguere per scegliere il carico.",
    "approach": "Affaticamento, dolore muscolare e lesione non sono sinonimi. Il percorso integra valutazione funzionale ed eventuali indicazioni mediche, graduando il lavoro sulle capacità del muscolo e sulle richieste dell’attività.",
    "actions": [
      "Analisi del gesto e delle variazioni di allenamento o lavoro.",
      "Progressione della forza e dell’ampiezza del movimento.",
      "Preparazione alle richieste più rapide o intense quando appropriate."
    ],
    "phases": [
      {
        "title": "Comprendere l’episodio",
        "text": "Raccogliamo comparsa del dolore e limitazioni presenti."
      },
      {
        "title": "Ricostruire capacità",
        "text": "Aumentiamo il lavoro muscolare in modo graduale e osservabile."
      },
      {
        "title": "Ritrovare il gesto",
        "text": "Prepariamo le richieste reali di sport e professione."
      }
    ],
    "faq": [
      {
        "question": "Ogni muscolo duro deve essere massaggiato?",
        "answer": "No. Prima di scegliere un intervento occorre capire il contesto, soprattutto dopo un trauma con dolore importante, gonfiore o perdita di forza."
      },
      {
        "question": "Posso tornare allo sport appena il dolore cala?",
        "answer": "La riduzione del dolore è un elemento, ma contano anche forza e tolleranza del gesto. Il rientro va preparato in base alle richieste dello sport."
      }
    ],
    "limitations": [
      "Contrarre il muscolo",
      "Allungarmi o muovermi",
      "Allenarmi con intensità"
    ],
    "goals": [
      "Recuperare forza",
      "Riprendere le attività senza aumenti bruschi",
      "Tornare al gesto sportivo"
    ],
    "sourceIds": [
      "nhs-sprains",
      "aaos-soft-tissue"
    ],
    "related": [
      {
        "label": "Fisioterapia sportiva",
        "href": "/trattamenti/sportiva"
      },
      {
        "label": "Tendinopatie e borsiti",
        "href": "/trattamenti/muscoli-tendini/tendinopatie-borsiti"
      }
    ]
  },
  {
    "id": "tendinopatie-borsiti",
    "path": "/trattamenti/muscoli-tendini/tendinopatie-borsiti",
    "label": "Tendinopatie e borsiti",
    "category": {
      "label": "Muscoli e tendini",
      "href": "/trattamenti/muscoli-tendini"
    },
    "heading": "Tendinopatie e borsiti.",
    "accent": "Un carico più sostenibile.",
    "description": "Tendinopatie e borsiti: riconoscere i bisogni, adattare le attività e impostare un recupero funzionale specifico con Fisioterapia Malavasi.",
    "intro": "Un dolore che ritorna quando aumenti l’attività può rendere difficile capire quanto muoverti. Tendini e borse hanno funzioni differenti: il percorso va adattato alla struttura coinvolta e alle richieste della tua giornata.",
    "symptoms": [
      {
        "title": "Dolore durante il carico",
        "text": "Sollevare, correre o ripetere un gesto può provocare fastidio."
      },
      {
        "title": "Sensibilità locale",
        "text": "La zona può essere dolente al contatto o alla pressione."
      },
      {
        "title": "Movimenti meno fluidi",
        "text": "Alcune attività diventano limitate o vengono evitate."
      },
      {
        "title": "Risposta alle ripetizioni",
        "text": "La quantità di lavoro può contare quanto il singolo gesto."
      }
    ],
    "approachTitle": "Capire il tessuto, dosare l’attività.",
    "approach": "Tendinopatia e borsite non indicano lo stesso problema e possono richiedere scelte diverse. La valutazione considera sede, irritabilità e carichi abituali, per adattare l’esercizio e riconoscere eventuali necessità mediche.",
    "actions": [
      "Revisione delle attività ripetute e delle pressioni sulla zona.",
      "Esercizio progressivo scelto in base alla struttura coinvolta.",
      "Indicazioni per regolare il carico tra sedute e vita quotidiana."
    ],
    "phases": [
      {
        "title": "Individuare il bisogno",
        "text": "Valutiamo comportamento del dolore e attività limitate."
      },
      {
        "title": "Trovare la dose",
        "text": "Definiamo richieste tollerabili e criteri per modificarle."
      },
      {
        "title": "Costruire continuità",
        "text": "Accompagniamo il ritorno a un’attività regolare e sostenibile."
      }
    ],
    "faq": [
      {
        "question": "Tendinopatia e borsite sono sinonimi?",
        "answer": "No. La prima riguarda un tendine, la seconda una borsa. Il nome generico “infiammazione” non basta per scegliere un programma."
      },
      {
        "question": "Un gonfiore caldo richiede attenzione?",
        "answer": "Sì, soprattutto se accompagnato da febbre o malessere: serve una valutazione medica tempestiva, perché alcune borsiti possono richiedere un trattamento diverso dalla fisioterapia."
      }
    ],
    "limitations": [
      "Ripetere un gesto",
      "Caricare la zona dolente",
      "Lavorare o allenarmi"
    ],
    "goals": [
      "Gestire il carico",
      "Ritrovare continuità nelle attività",
      "Migliorare la tolleranza allo sforzo"
    ],
    "sourceIds": [
      "nhs-tendon",
      "nhs-bursitis"
    ],
    "related": [
      {
        "label": "Tendinopatie della cuffia dei rotatori",
        "href": "/trattamenti/patologie-spalla/tendinopatia-cuffia"
      },
      {
        "label": "Epicondilite ed epitrocleite",
        "href": "/trattamenti/gomito-polso-mano/epicondilite-epitrocleite"
      }
    ]
  },
  {
    "id": "riabilitazione-lesioni-tendinee",
    "path": "/trattamenti/muscoli-tendini/riabilitazione-lesioni-tendinee",
    "label": "Riabilitazione delle lesioni tendinee",
    "category": {
      "label": "Muscoli e tendini",
      "href": "/trattamenti/muscoli-tendini"
    },
    "heading": "Dopo una lesione tendinea.",
    "accent": "Proteggere e ricostruire.",
    "description": "Riabilitazione delle lesioni tendinee: progressione del movimento e dei carichi dopo lesione o riparazione, secondo le indicazioni specialistiche.",
    "intro": "Dopo una lesione, operata o trattata in modo conservativo, il tendine ha bisogno di un percorso preciso. Ti aiutiamo a tradurre le indicazioni ricevute in attività concrete, rispettando protezioni e fasi del recupero.",
    "symptoms": [
      {
        "title": "Movimento protetto",
        "text": "Tutore e limiti possono cambiare le abitudini quotidiane."
      },
      {
        "title": "Forza da recuperare",
        "text": "La trasmissione della forza richiede una progressione specifica."
      },
      {
        "title": "Rigidità",
        "text": "L’immobilizzazione e la lesione possono ridurre la fluidità del gesto."
      },
      {
        "title": "Rientro da preparare",
        "text": "Lavoro e sport possono richiedere più del recupero dei movimenti di base."
      }
    ],
    "approachTitle": "Ogni tendine ha richieste diverse.",
    "approach": "Una lesione dell’Achille, un tendine della mano e una riparazione della cuffia non seguono lo stesso programma. La valutazione specialistica e le indicazioni su movimento e carico guidano la fisioterapia, senza accelerazioni non autorizzate.",
    "actions": [
      "Revisione del percorso conservativo o del referto operatorio.",
      "Introduzione del movimento e della resistenza nelle fasi consentite.",
      "Progressione verso i compiti specifici dell’arto coinvolto."
    ],
    "phases": [
      {
        "title": "Rispettare la protezione",
        "text": "Chiarifichiamo tutore, carico e movimenti inizialmente consentiti."
      },
      {
        "title": "Ricostruire la funzione",
        "text": "Alleniamo controllo e forza seguendo la progressione prescritta."
      },
      {
        "title": "Preparare le richieste finali",
        "text": "Rivalutiamo il gesto lavorativo o sportivo prima di aumentare l’impegno."
      }
    ],
    "faq": [
      {
        "question": "Posso usare un programma generico per tendini?",
        "answer": "No. Sede, tipo di lesione e trattamento modificano le precauzioni. Anche dopo un intervento, la progressione va definita sul caso individuale."
      },
      {
        "question": "Se compare un cedimento improvviso?",
        "answer": "Un nuovo episodio con dolore improvviso e perdita della funzione richiede una valutazione medica tempestiva, soprattutto durante un recupero postoperatorio."
      }
    ],
    "limitations": [
      "Muovere l’arto protetto",
      "Usare la forza",
      "Riprendere il gesto abituale"
    ],
    "goals": [
      "Seguire il percorso di guarigione",
      "Recuperare funzione dell’arto",
      "Preparare lavoro o sport"
    ],
    "sourceIds": [
      "aaos-flexor",
      "nhs-achilles",
      "aaos-shoulder-surgery"
    ],
    "related": [
      {
        "label": "Riabilitazione dopo chirurgia della spalla",
        "href": "/trattamenti/patologie-spalla/riabilitazione-chirurgia-spalla"
      },
      {
        "label": "Riabilitazione pre e post-chirurgica",
        "href": "/trattamenti/chirurgica"
      }
    ]
  }
];

export const musculoskeletalTreatments: Record<string, MusculoskeletalTreatment> =
  Object.fromEntries(musculoskeletalPages.map((page) => [page.id, page]));
