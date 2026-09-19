export type SpecialistPageKey = "prostata" | "seno" | "intestino" | "colon" | "parkinson" | "ictus" | "cammino";

type ContentBlock = { title: string; description: string };
type PageLink = { label: string; href: string };

export type SpecialistPageData = {
  path: string;
  title: string;
  description: string;
  family: "oncologica" | "neurologica";
  breadcrumbLabel: string;
  parent: PageLink;
  hero: { lead: string; accent: string; description: string };
  pillars: ContentBlock[];
  clinical: {
    title: string;
    description: string;
    points: string[];
    asideTitle: string;
    asideDescription: string;
    note: string;
  };
  journeyTitle: string;
  journey: ContentBlock[];
  homeDescription: string;
  faq: { question: string; answer: string }[];
  related: PageLink[];
  cta: ContentBlock;
};

const oncologyParent = { label: "Riabilitazione oncologica", href: "/trattamenti/oncologica" };
const neurologyParent = { label: "Riabilitazione neurologica", href: "/trattamenti/neurologica" };
const gaitLink = { label: "Cammino ed equilibrio", href: "/trattamenti/rieducazione-cammino-equilibrio" };
const homeLink = { label: "Fisioterapia domiciliare", href: "/metodo/seduta-fisioterapica-domiciliare" };

export const specialistPages: Record<SpecialistPageKey, SpecialistPageData> = {
  prostata: {
    path: "/trattamenti/oncologica/prostata",
    title: "Riabilitazione oncologica: prostata",
    description: "Un percorso di movimento adattato durante e dopo le cure per il tumore della prostata: forza, fatigue e autonomia, in accordo con il team curante.",
    family: "oncologica",
    breadcrumbLabel: "Prostata",
    parent: oncologyParent,
    hero: {
      lead: "Riabilitazione oncologica:",
      accent: "prostata.",
      description: "Le cure possono cambiare le energie a disposizione e il modo di affrontare una giornata. Partiamo da quello che oggi ti pesa di più, per costruire un percorso di movimento compatibile con la tua situazione.",
    },
    pillars: [
      { title: "Ritrovare forza", description: "Alzarti dalla sedia, portare una borsa, affrontare le scale: lavoriamo su obiettivi concreti, con esercizi adeguati alle tue capacità." },
      { title: "Gestire le energie", description: "La fatigue può accompagnare le terapie, anche quelle ormonali. Alterniamo attività e recupero senza chiederti di ignorare la stanchezza." },
      { title: "Restare attivo", description: "Una passeggiata o un’attività a cui tieni diventano il riferimento per scegliere insieme un impegno sostenibile." },
    ],
    clinical: {
      title: "Un sostegno al movimento, nel tuo percorso di cura.",
      description: "La fisioterapia affianca le cure oncologiche. Durante la terapia di deprivazione androgenica, l’esercizio aerobico e di forza supervisionato può aiutare a ridurre la fatigue e sostenere la qualità di vita. La proposta va adattata alle indicazioni del medico e alla tua risposta.",
      points: ["Valutazione di forza, mobilità e tolleranza allo sforzo", "Ripresa graduale delle attività dopo un periodo di ridotta mobilità", "Esercizio adattato alla fase di cura e alle condizioni generali", "Confronto sulle difficoltà che richiedono un altro professionista"],
      asideTitle: "Ogni bisogno ha il suo riferimento",
      asideDescription: "Perdite urinarie e disturbi sessuali richiedono un inquadramento dedicato con l’urologo e, quando indicato, professionisti del pavimento pelvico. Il lavoro sul movimento, sulla forza e sulle attività quotidiane non sostituisce questi percorsi dedicati.",
      note: "Porta le indicazioni dell’urologo o dell’oncologo e segnala eventuali limitazioni al carico o al movimento.",
    },
    journeyTitle: "Dalle tue abitudini, il nostro punto di partenza.",
    journey: [
      { title: "Ascoltare la giornata", description: "Ci racconti quali attività sono diventate faticose, quali terapie stai seguendo e quale risultato avrebbe più valore per te." },
      { title: "Trovare il carico adatto", description: "Valutiamo il movimento e scegliamo esercizi, pause e attività da integrare nella tua routine, rispettando le indicazioni cliniche." },
      { title: "Rivedere il percorso", description: "Verifichiamo insieme come tolleri l’impegno. Le giornate diverse non sono un fallimento: possono richiedere un programma diverso." },
    ],
    homeDescription: "Se raggiungere lo studio è difficile, possiamo valutare la possibilità di una seduta a domicilio. Modalità e disponibilità vengono concordate in base alle necessità e alla zona.",
    faq: [
      { question: "Posso iniziare mentre seguo le terapie?", answer: "In alcuni casi sì. Prima definiamo l’idoneità e le eventuali precauzioni con le informazioni del team curante: il programma non è uguale per tutte le terapie o per tutte le persone." },
      { question: "Il percorso è riservato a chi è stato operato?", answer: "No. Il bisogno può riguardare anche chi sta affrontando altri trattamenti e incontra difficoltà motorie o stanchezza. La valutazione chiarisce quale supporto fisioterapico è appropriato." },
      { question: "La fisioterapia sostituisce le cure del tumore?", answer: "No. L’obiettivo è sostenere la funzione e la vita quotidiana. Terapie oncologiche, controlli e follow-up restano affidati al team medico." },
      { question: "Quante sedute occorrono?", answer: "Non esiste un numero valido per tutti. Lo concordiamo dopo la valutazione e lo rivediamo in base agli obiettivi, alla fase di cura e alla risposta al lavoro proposto." },
    ],
    related: [oncologyParent, gaitLink, homeLink],
    cta: { title: "Riparti da ciò che conta per te.", description: "Raccontaci le tue esigenze e le indicazioni ricevute. Valutiamo insieme come accompagnare il tuo movimento, con attenzione ai tuoi tempi." },
  },
  seno: {
    path: "/trattamenti/oncologica/seno",
    title: "Riabilitazione oncologica: seno",
    description: "Recupero della mobilità di braccio e spalla, gestione delle rigidità e supporto nel linfedema dopo le cure per il tumore al seno. Percorso individuale.",
    family: "oncologica",
    breadcrumbLabel: "Seno",
    parent: oncologyParent,
    hero: {
      lead: "Riabilitazione oncologica:",
      accent: "seno.",
      description: "Vestirti, sollevare il braccio, tornare ai gesti di ogni giorno. Dopo le cure al seno, anche un movimento semplice può aver bisogno di tempo e attenzione. Ti accompagniamo a ritrovare confidenza con il tuo corpo.",
    },
    pillars: [
      { title: "Braccio e spalla", description: "Un lavoro progressivo sulla mobilità, costruito intorno ai gesti che risultano limitati dopo chirurgia o radioterapia." },
      { title: "Rigidità e cicatrici", description: "Valutiamo le limitazioni del movimento e, quando le condizioni dei tessuti lo consentono, il ruolo della cicatrice nel tuo disagio." },
      { title: "Gonfiore e linfedema", description: "Il gonfiore merita un inquadramento appropriato. Il percorso viene definito dopo la valutazione, in accordo con le indicazioni mediche." },
    ],
    clinical: {
      title: "Il gesto quotidiano torna al centro.",
      description: "Dopo un intervento o la radioterapia al seno, una limitazione persistente del braccio e della spalla può beneficiare di una valutazione fisioterapica individuale. Gli esercizi vanno adattati al tipo di trattamento e alle condizioni personali, senza forzare tempi uguali per tutte.",
      points: ["Movimento di spalla e braccio per le attività quotidiane", "Esercizio terapeutico con progressione individuale", "Valutazione delle rigidità e dei tessuti cicatriziali", "Supporto nel linfedema quando indicato dal quadro clinico"],
      asideTitle: "Indicazioni condivise, cura personale",
      asideDescription: "Il lavoro tiene conto dell’intervento, di un’eventuale ricostruzione e delle terapie in corso. In presenza di linfedema, le scelte sul trattamento e sulla compressione richiedono una valutazione dedicata: non si riducono a un massaggio standard.",
      note: "Un gonfiore nuovo o in rapido aumento va segnalato al team curante prima di trattarlo come un semplice ristagno.",
    },
    journeyTitle: "Un percorso che rispetta il tuo corpo.",
    journey: [
      { title: "Capire cosa ti limita", description: "Partiamo dalle indicazioni ricevute e dai movimenti che oggi rendono difficile vestirti, raggiungere uno scaffale o riposare comodamente." },
      { title: "Muoversi con gradualità", description: "Proviamo attività adatte alla tua fase di recupero. Ti aiutiamo a riconoscere un impegno tollerabile e a eseguire gli esercizi concordati." },
      { title: "Ritrovare continuità", description: "Rivediamo mobilità e gesti funzionali, adattando il programma quando cambiano le terapie o le esigenze della tua giornata." },
    ],
    homeDescription: "Quando gli spostamenti sono impegnativi, il domicilio può essere una modalità da valutare insieme. La disponibilità e l’adeguatezza del setting vengono concordate prima di organizzare il percorso.",
    faq: [
      { question: "Serve soltanto dopo una mastectomia?", answer: "No. La necessità di recuperare mobilità può presentarsi anche dopo altri interventi al seno o radioterapia. Conta la difficoltà che incontri e il tipo di cura ricevuto." },
      { question: "Quando posso cominciare a muovere il braccio?", answer: "Segui le indicazioni del team chirurgico, soprattutto in presenza di ricostruzione o particolari precauzioni. La valutazione serve a tradurle in un lavoro adatto alla tua situazione." },
      { question: "Se ho linfedema devo evitare ogni attività?", answer: "L’attività fisica non va esclusa automaticamente: può essere adattata alle esigenze della persona. Prima di iniziare o modificare il programma, condividi la situazione con i professionisti che ti seguono." },
      { question: "Cosa porto alla prima valutazione?", answer: "La documentazione sull’intervento e sulle terapie, le indicazioni per il movimento e gli eventuali ausili o capi compressivi già prescritti. Sono utili anche esempi dei gesti che ti preoccupano." },
    ],
    related: [oncologyParent, { label: "Dolore alla spalla", href: "/trattamenti/patologie-spalla" }, homeLink],
    cta: { title: "Diamo spazio ai tuoi gesti.", description: "Una valutazione per ascoltare quello che senti, comprendere le limitazioni e scegliere insieme il prossimo passo." },
  },
  intestino: {
    path: "/trattamenti/oncologica/intestino",
    title: "Riabilitazione oncologica: intestino",
    description: "Orientamento al recupero motorio nei percorsi oncologici intestinali: energie, autonomia e movimento adattato. Approfondimento dedicato al colon.",
    family: "oncologica",
    breadcrumbLabel: "Intestino",
    parent: oncologyParent,
    hero: {
      lead: "Riabilitazione oncologica:",
      accent: "intestino.",
      description: "Un percorso oncologico intestinale può cambiare abitudini, energie e sicurezza nel movimento. Mettiamo ordine nei bisogni, per capire dove la fisioterapia può affiancare le cure e la tua vita quotidiana.",
    },
    pillars: [
      { title: "Orientarsi nel percorso", description: "Intestino tenue, colon e retto non sono la stessa sede. Partiamo dalla tua storia e dalle cure ricevute, senza applicare un programma uguale a tutti." },
      { title: "Riconoscere le energie", description: "Diamo spazio a stanchezza e tolleranza all’attività, scegliendo obiettivi che abbiano senso nella fase di cura che stai vivendo." },
      { title: "Proteggere l’autonomia", description: "Muoversi in casa, uscire per una commissione, riprendere una passeggiata: il lavoro si misura anche nelle cose che contano per te." },
    ],
    clinical: {
      title: "Bisogni diversi, un quadro da comprendere.",
      description: "Questa è una panoramica del supporto motorio nei percorsi oncologici intestinali. Il colon è una parte dell’intestino, ma sede della malattia, interventi e terapie possono comportare esigenze differenti. Per il recupero legato al colon trovi un approfondimento dedicato tra i percorsi collegati.",
      points: ["Ridotta attività e perdita di fiducia nel movimento", "Affaticamento durante le attività abituali", "Ripresa del cammino e della mobilità quotidiana", "Definizione di obiettivi compatibili con le cure"],
      asideTitle: "Una rete di riferimenti",
      asideDescription: "La fisioterapia si occupa del recupero funzionale e dell’esercizio adattato. Problemi intestinali, nutrizione e gestione di un’eventuale stomia restano da condividere con oncologo, chirurgo e professionisti dedicati.",
      note: "Per costruire il percorso servono la diagnosi già formulata e le indicazioni del team curante, non un’interpretazione dei sintomi da sola.",
    },
    journeyTitle: "Prima il quadro d’insieme, poi il movimento.",
    journey: [
      { title: "Raccogliere i riferimenti", description: "Esaminiamo con te le indicazioni ricevute e distinguiamo i bisogni motori dalle necessità da riportare al team medico." },
      { title: "Scegliere una priorità", description: "Non devi recuperare tutto insieme. Individuiamo un’attività utile e un punto di partenza sostenibile per esercizi e movimento." },
      { title: "Adattarsi alle fasi", description: "Il programma viene riconsiderato quando cambiano le cure, la tolleranza allo sforzo o gli obiettivi personali." },
    ],
    homeDescription: "Se la logistica rende difficile mantenere continuità, parliamone nella valutazione. Una modalità domiciliare può essere considerata in base al quadro, alla zona e alla disponibilità del servizio.",
    faq: [
      { question: "Intestino e colon indicano lo stesso percorso?", answer: "Il colon fa parte dell’intestino. Questa pagina offre un orientamento generale; quella dedicata al colon approfondisce i bisogni funzionali collegati a quel percorso, soprattutto dopo la chirurgia." },
      { question: "La fisioterapia serve a regolare l’intestino?", answer: "Qui parliamo di movimento, capacità fisica e autonomia. Disturbi dell’alvo o digestivi richiedono una valutazione medica; non sono automaticamente un problema trattabile con gli esercizi proposti in questo percorso." },
      { question: "Posso muovermi se mi sento molto stanco?", answer: "La stanchezza va ascoltata e condivisa con il team curante. Un’attività adeguata può far parte del supporto alla fatigue, ma tipo e carico dipendono dalle condizioni della persona e non si stabiliscono da una pagina web." },
      { question: "Devo avere terminato le cure?", answer: "Il momento appropriato si valuta individualmente. Porta le indicazioni relative alle terapie in corso: ci aiutano a capire se e come inserire il lavoro fisioterapico." },
    ],
    related: [ { label: "Riabilitazione oncologica: colon", href: "/trattamenti/oncologica/colon" }, oncologyParent, homeLink ],
    cta: { title: "Facciamo chiarezza, insieme.", description: "Raccontaci il tuo percorso e ciò che vorresti riuscire a fare con meno fatica. Da qui possiamo valutare un supporto concreto." },
  },
  colon: {
    path: "/trattamenti/oncologica/colon",
    title: "Riabilitazione oncologica: colon",
    description: "Recupero funzionale nel percorso oncologico del colon: cammino, attività quotidiane e progressione del movimento dopo chirurgia, secondo indicazioni cliniche.",
    family: "oncologica",
    breadcrumbLabel: "Colon",
    parent: oncologyParent,
    hero: {
      lead: "Riabilitazione oncologica:",
      accent: "colon.",
      description: "Dopo un intervento al colon, tornare a casa non significa sentirsi già pronti a tutto. Ti aiutiamo a ritrovare un ritmo nel movimento, rispettando le indicazioni chirurgiche e le eventuali terapie successive.",
    },
    pillars: [
      { title: "Riprendere il cammino", description: "La distanza utile è quella sostenibile oggi. Partiamo dalla tua capacità di muoverti e dalla risposta allo sforzo." },
      { title: "Affrontare i gesti di casa", description: "Alzarti, spostarti e recuperare autonomia nelle attività abituali diventano obiettivi da costruire con gradualità." },
      { title: "Gestire la progressione", description: "Esercizio e carichi rispettano le precauzioni dopo l’intervento. Non chiediamo alla parete addominale più di quanto sia indicato nella tua fase." },
    ],
    clinical: {
      title: "Dalle dimissioni, un percorso su misura.",
      description: "La ripresa dopo chirurgia del colon dipende dall’intervento e dalle condizioni individuali. La fisioterapia può affiancare il ritorno al movimento, senza sostituire il controllo chirurgico. Se sono previste altre cure, organizziamo gli obiettivi tenendo conto anche di quelle.",
      points: ["Lettura delle precauzioni riportate alla dimissione", "Valutazione del cammino e dei passaggi di posizione", "Attività graduale per forza e tolleranza allo sforzo", "Revisione dei carichi prima di riprendere attività più impegnative"],
      asideTitle: "Se è presente una stomia",
      asideDescription: "La stomia non è presente in ogni percorso. Quando c’è, il lavoro motorio deve rispettare le indicazioni del chirurgo e dello stomaterapista. La cura della stomia e la scelta dei presidi restano affidate ai professionisti dedicati.",
      note: "Per sollevamenti, lavoro fisico e attività sportiva, fai riferimento alle limitazioni personali ricevute: non esiste una scadenza unica per tutti.",
    },
    journeyTitle: "Ritrovare il tuo ritmo, senza saltare passaggi.",
    journey: [
      { title: "Partire dalle dimissioni", description: "Condividi il tipo di intervento, le indicazioni del chirurgo e le difficoltà incontrate al rientro a casa." },
      { title: "Rendere utile ogni gesto", description: "Il programma considera spostamenti, cammino e attività quotidiane, con esercizi scelti sulla base della valutazione." },
      { title: "Preparare le attività successive", description: "Rivediamo quanto riesci a fare prima di aumentare l’impegno, considerando controlli, terapie e richieste del lavoro o del tempo libero." },
    ],
    homeDescription: "Nelle fasi in cui gli spostamenti sono difficili, possiamo valutare insieme l’opzione domiciliare. L’organizzazione dipende dalle esigenze cliniche, dalla zona e dalla disponibilità.",
    faq: [
      { question: "Quando posso riprendere a camminare di più?", answer: "Segui le indicazioni ricevute alla dimissione. In valutazione definiamo come distribuire e far progredire il movimento in base alle tue condizioni, senza fissare distanze o tempi universali." },
      { question: "Posso già fare addominali o sollevare pesi?", answer: "Non è una decisione da prendere in base al solo tempo trascorso. Servono le indicazioni del chirurgo e una valutazione della fase di recupero, anche quando ti senti più energico." },
      { question: "Una stomia impedisce di fare riabilitazione?", answer: "Non esclude automaticamente il movimento. Occorre adattare le attività e rispettare le indicazioni specifiche; eventuali dubbi sulla stomia vanno condivisi con il team che la segue." },
      { question: "Il programma cambia se proseguo con altre terapie?", answer: "Il lavoro dopo l’intervento deve restare compatibile con terapie e controlli successivi. Se il quadro o la tolleranza allo sforzo cambiano, anche gli obiettivi e l’impegno richiesto vengono rivalutati." },
    ],
    related: [ { label: "Percorso oncologico intestinale", href: "/trattamenti/oncologica/intestino" }, oncologyParent, gaitLink ],
    cta: { title: "Il ritorno a casa è un punto di partenza.", description: "Porta le tue indicazioni cliniche e raccontaci le difficoltà quotidiane. Valutiamo il prossimo passo nel recupero del movimento." },
  },
  parkinson: {
    path: "/trattamenti/neurologica/parkinson",
    title: "Riabilitazione per Parkinson",
    description: "Fisioterapia per il Parkinson: movimento, equilibrio e attività quotidiane. Un percorso individuale con obiettivi condivisi e attenzione ai caregiver.",
    family: "neurologica",
    breadcrumbLabel: "Parkinson",
    parent: neurologyParent,
    hero: {
      lead: "Riabilitazione per il",
      accent: "Parkinson.",
      description: "Quando i gesti diventano meno spontanei, la giornata può richiedere più attenzione. Costruiamo con te un lavoro sul movimento che tenga conto delle difficoltà reali e delle attività che vuoi continuare a vivere.",
    },
    pillars: [
      { title: "Movimenti quotidiani", description: "Alzarti, girarti, iniziare un passo: partiamo dalle situazioni in cui senti di aver bisogno di una strategia più chiara." },
      { title: "Equilibrio e cammino", description: "Valutiamo stabilità e spostamenti per scegliere un allenamento mirato alle tue capacità e alle difficoltà incontrate." },
      { title: "Continuità nel tempo", description: "Il percorso si adatta: rivediamo obiettivi e attività quando cambiano le esigenze, coinvolgendo chi ti aiuta se lo desideri." },
    ],
    clinical: {
      title: "Un lavoro specifico, nella tua quotidianità.",
      description: "La fisioterapia per il Parkinson può aiutare ad affrontare problemi motori e di equilibrio. L’obiettivo è sostenere funzione e partecipazione, all’interno del percorso seguito dal neurologo: non sostituire i farmaci né promettere di arrestare la malattia.",
      points: ["Pratica dei gesti che risultano meno agevoli", "Esercizi per forza, mobilità ed equilibrio", "Lavoro sul cammino e sui cambi di direzione", "Indicazioni condivise per mantenere un’attività sostenibile"],
      asideTitle: "Una persona, giornate diverse",
      asideDescription: "Ci interessa sapere in quali momenti ti senti più o meno libero nel movimento. Portare queste osservazioni alla valutazione aiuta a organizzare il lavoro e a condividere eventuali cambiamenti con il neurologo.",
      note: "La terapia farmacologica rimane di competenza medica. Non modificare dosi o orari per adattarli agli esercizi.",
    },
    journeyTitle: "Obiettivi che trovano posto nella tua vita.",
    journey: [
      { title: "Osservare le difficoltà", description: "Raccogliamo la tua esperienza e osserviamo i gesti scelti insieme, per capire quali capacità allenare e quali situazioni richiedono attenzione." },
      { title: "Allenare ciò che serve", description: "Proponiamo attività individuali, ripetibili e collegate agli obiettivi concordati, con un livello di assistenza adeguato." },
      { title: "Mantenere il dialogo", description: "Rivediamo il programma nel tempo. Familiari e caregiver possono condividere osservazioni e imparare come sostenere le attività concordate." },
    ],
    homeDescription: "Il domicilio può essere una possibilità quando uscire è complesso o quando è utile lavorare sui gesti nell’ambiente abituale. Valutiamo appropriatezza, disponibilità e organizzazione insieme alla persona e alla famiglia.",
    faq: [
      { question: "Serve aspettare che camminare diventi difficile?", answer: "Una valutazione può essere utile anche nelle fasi iniziali per ricevere indicazioni sull’attività fisica e individuare obiettivi. La presenza di difficoltà motorie o di equilibrio orienta poi il lavoro specifico." },
      { question: "Il programma resta sempre uguale?", answer: "No. Le attività devono rimanere pertinenti alle tue esigenze. Cambiamenti nel movimento o nella vita quotidiana sono occasioni per rivedere il percorso." },
      { question: "Posso venire con un familiare?", answer: "Sì, se lo desideri. La sua presenza può aiutare a condividere le difficoltà di ogni giorno e le indicazioni pratiche, mantenendo al centro le tue preferenze." },
      { question: "La fisioterapia risolve ogni sintomo del Parkinson?", answer: "No. Il lavoro riguarda il movimento e la funzione. Difficoltà di voce, deglutizione o altri sintomi richiedono il confronto con il neurologo e con i professionisti appropriati." },
    ],
    related: [neurologyParent, gaitLink, homeLink],
    cta: { title: "Diamo una direzione al prossimo passo.", description: "Partiamo da un gesto che vuoi rendere più agevole. Una valutazione per costruire obiettivi chiari, insieme a te." },
  },
  ictus: {
    path: "/trattamenti/neurologica/ictus",
    title: "Riabilitazione post-ictus",
    description: "Riabilitazione motoria dopo ictus ischemico o emorragico: autonomia, passaggi di posizione, braccio, equilibrio e cammino, con obiettivi individuali.",
    family: "neurologica",
    breadcrumbLabel: "Post-ictus",
    parent: neurologyParent,
    hero: {
      lead: "Riabilitazione",
      accent: "post-ictus.",
      description: "Dopo un ictus, un gesto conosciuto può diventare una nuova conquista. Ti accompagniamo nel recupero motorio partendo dalle capacità presenti, dalle indicazioni cliniche e da ciò che rende importante la tua autonomia.",
    },
    pillars: [
      { title: "Passaggi e spostamenti", description: "Sederti, alzarti, passare dal letto alla sedia: obiettivi concreti che orientano la pratica e il supporto necessario." },
      { title: "Uso degli arti", description: "Il lavoro considera le difficoltà del braccio, della mano o della gamba e i gesti utili nella vita quotidiana." },
      { title: "Una famiglia coinvolta", description: "Con il tuo consenso, condividiamo le indicazioni con chi ti assiste per dare continuità al percorso fuori dalla seduta." },
    ],
    clinical: {
      title: "Il recupero parte dalla tua situazione.",
      description: "Gli esiti di un ictus ischemico o emorragico possono coinvolgere movimento, sensibilità ed equilibrio in modi diversi. Il percorso motorio viene definito dopo la valutazione e coordinato con le indicazioni del team curante, senza prevedere risultati o tempi identici per tutte le persone.",
      points: ["Valutazione delle capacità motorie e delle attività prioritarie", "Pratica di compiti funzionali con assistenza adeguata", "Esercizio per forza, controllo del tronco ed equilibrio", "Progressione del cammino quando appropriata"],
      asideTitle: "Parte di un percorso più ampio",
      asideDescription: "La riabilitazione dopo ictus può richiedere più professionisti. Linguaggio, deglutizione e aspetti cognitivi non coincidono con la sola fisioterapia: il confronto con il team di riferimento aiuta a mantenere coerenti i diversi interventi.",
      note: "La prima valutazione considera la documentazione di dimissione, gli ausili utilizzati e gli obiettivi già condivisi con i curanti.",
    },
    journeyTitle: "Un obiettivo concreto alla volta.",
    journey: [
      { title: "Definire le priorità", description: "Ascoltiamo la persona e chi la affianca. Individuiamo una difficoltà quotidiana sulla quale concentrare il lavoro iniziale." },
      { title: "Praticare e adattare", description: "Proponiamo attività collegate all’obiettivo, modulando aiuto, ripetizioni e pause in base alla tolleranza e alle necessità." },
      { title: "Verificare la funzione", description: "Rivediamo ciò che cambia nei gesti reali e concordiamo come proseguire, anche quando occorre ricalibrare le aspettative." },
    ],
    homeDescription: "Se gli spostamenti risultano difficili, il lavoro a domicilio può essere valutato nel quadro delle indicazioni riabilitative. Disponibilità e modalità vengono concordate, considerando anche il supporto familiare e l’ambiente.",
    faq: [
      { question: "Il percorso comprende gli esiti di ictus ischemico?", answer: "Sì. La riabilitazione motoria può riguardare esiti di ictus ischemico o emorragico. Il programma dipende dalle difficoltà presenti e dalle condizioni cliniche, non soltanto dal nome dell’evento." },
      { question: "Si può lavorare anche a distanza di tempo?", answer: "Una valutazione aiuta a capire quali obiettivi siano ancora pertinenti: recupero di una funzione, mantenimento delle capacità o gestione più agevole delle attività. Il tempo trascorso da solo non basta a definire il programma." },
      { question: "È possibile prevedere quando tornerò a camminare?", answer: "Non da una pagina o da una diagnosi isolata. Le possibilità dipendono da numerosi fattori e vengono valutate nel percorso clinico. Gli obiettivi si discutono e si aggiornano sulla base della risposta individuale." },
      { question: "Devo sospendere la riabilitazione già in corso?", answer: "No. Porta il progetto e le indicazioni del team che ti segue. Prima di aggiungere un nuovo intervento è utile chiarirne ruolo e coordinamento, evitando attività non concordate o sovrapposizioni." },
    ],
    related: [neurologyParent, gaitLink, homeLink],
    cta: { title: "Ripartiamo dalle possibilità di oggi.", description: "Un incontro per ascoltare la tua storia, comprendere le necessità motorie e concordare il prossimo obiettivo." },
  },
  cammino: {
    path: "/trattamenti/rieducazione-cammino-equilibrio",
    title: "Rieducazione del cammino e dell’equilibrio",
    description: "Valutazione e rieducazione di cammino ed equilibrio: passi, cambi di direzione e autonomia quotidiana. Un percorso adattato alle difficoltà della persona.",
    family: "neurologica",
    breadcrumbLabel: "Cammino ed equilibrio",
    parent: { label: "Trattamenti", href: "/trattamenti" },
    hero: {
      lead: "Rieducazione del",
      accent: "cammino e dell’equilibrio.",
      description: "Sentirti incerto quando ti alzi, giri o cammini può restringere le tue abitudini. Partiamo dalle situazioni che ti mettono in difficoltà per costruire un lavoro orientato agli spostamenti di ogni giorno.",
    },
    pillars: [
      { title: "Capire l’incertezza", description: "La difficoltà può avere origini diverse. La valutazione aiuta a riconoscere i bisogni motori e quando è necessario un approfondimento medico." },
      { title: "Allenare il movimento", description: "Forza, equilibrio e coordinazione vengono considerati insieme alle attività che vuoi affrontare con maggiore sicurezza." },
      { title: "Ritrovare partecipazione", description: "Un percorso in casa, una passeggiata, una rampa di scale: scegliamo riferimenti vicini alla tua vita, senza misurare tutto solo in metri." },
    ],
    clinical: {
      title: "Non esiste un solo modo di perdere stabilità.",
      description: "Dopo una patologia neurologica, un periodo di ridotta attività o altre difficoltà motorie, il cammino può richiedere un lavoro dedicato. Le cause non si riconoscono dal solo sintomo: la rieducazione viene proposta quando è appropriata al quadro della persona.",
      points: ["Osservazione del passo e dei cambi di direzione", "Passaggi dalla posizione seduta a quella in piedi", "Esercizi progressivi di equilibrio e forza", "Condivisione delle difficoltà nell’ambiente quotidiano"],
      asideTitle: "Cadute: guardare il quadro completo",
      asideDescription: "Cadute ripetute o paura di cadere meritano attenzione. L’esercizio può essere parte del percorso, ma farmaci, vista e altri fattori possono richiedere valutazioni da parte dei rispettivi professionisti.",
      note: "Se la difficoltà compare all’improvviso, soprattutto con debolezza, disturbi del linguaggio o della vista, cerca assistenza medica urgente senza attendere una seduta.",
    },
    journeyTitle: "Dal primo appoggio, verso i tuoi obiettivi.",
    journey: [
      { title: "Raccontare i momenti difficili", description: "Ci interessa sapere dove ti senti instabile, se ci sono state cadute e quali attività hai iniziato a evitare. Porta gli ausili che utilizzi." },
      { title: "Scegliere una pratica adatta", description: "Definiamo esercizi e compiti funzionali commisurati alle capacità osservate, con appoggi e supervisione quando necessari." },
      { title: "Rivedere la sicurezza", description: "Valutiamo la risposta nelle attività concordate e adattiamo il percorso. Un miglioramento in studio va accompagnato da indicazioni per la vita quotidiana." },
    ],
    homeDescription: "Quando la difficoltà emerge soprattutto negli spazi di casa, possiamo valutare l’utilità di lavorare nell’ambiente abituale. La possibilità del domicilio è soggetta a valutazione e disponibilità nella tua zona.",
    faq: [
      { question: "È un percorso solo per persone con patologie neurologiche?", answer: "No. La difficoltà nel cammino può comparire in situazioni differenti. La prima valutazione serve proprio a capire quali aspetti siano affrontabili con la fisioterapia e quali richiedano altri riferimenti." },
      { question: "Se ho vertigini devo iniziare dagli esercizi di equilibrio?", answer: "Non automaticamente. Le vertigini possono avere cause diverse e vanno inquadrate. Un lavoro sul movimento deve seguire la valutazione appropriata, senza attribuire il sintomo alla cervicale o a una sola causa." },
      { question: "Gli esercizi eliminano il rischio di cadere?", answer: "Non è possibile garantire l’assenza di cadute. Un programma individuale può affrontare alcuni fattori motori; gli altri elementi di rischio vanno considerati insieme ai professionisti competenti." },
      { question: "Posso usare il bastone o il deambulatore durante la seduta?", answer: "Porta l’ausilio che utilizzi abitualmente e le eventuali indicazioni ricevute. Osservarne l’uso aiuta a comprendere il tuo modo di muoverti e a organizzare il lavoro con il supporto necessario." },
    ],
    related: [neurologyParent, { label: "Riabilitazione per Parkinson", href: "/trattamenti/neurologica/parkinson" }, { label: "Riabilitazione post-ictus", href: "/trattamenti/neurologica/ictus" }],
    cta: { title: "Torniamo a dare spazio al movimento.", description: "Raccontaci dove ti senti in difficoltà. Costruiamo una valutazione intorno ai tuoi spostamenti e alle attività che vuoi ritrovare." },
  },
};
