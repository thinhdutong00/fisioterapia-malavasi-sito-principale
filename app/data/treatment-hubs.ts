export type TreatmentHub = {
  id: string;
  path: string;
  title: string;
  description: string;
  accent: string;
  intro: string;
  needs: { title: string; text: string }[];
  approach: string;
};

export const treatmentHubs: TreatmentHub[] = [
  {
    id: "schiena-colonna", path: "/trattamenti/schiena-colonna", title: "Schiena e colonna", accent: "Ritrovare fiducia nel movimento.",
    description: "Dolore lombare, discopatie, scoliosi o recupero dopo chirurgia: orientati tra i percorsi per la schiena dello Studio Malavasi.",
    intro: "Una schiena che limita il lavoro, il sonno o una passeggiata merita ascolto. Qui trovi i percorsi dedicati alla colonna: un punto di partenza per comprendere il tuo bisogno e arrivare a una valutazione con maggiore chiarezza.",
    needs: [
      { title: "Dolore e attività quotidiane", text: "Il dolore lombare può presentarsi in situazioni diverse. Raccontare quando compare e quali movimenti limita aiuta a orientare la valutazione, senza attribuirlo automaticamente a un disco o alla postura." },
      { title: "Un referto da contestualizzare", text: "Ernia, discopatia e stenosi non sono termini intercambiabili. Le informazioni degli esami vanno considerate insieme alla storia clinica e alla funzione, evitando di ricavare un percorso dal solo referto." },
      { title: "Dopo un intervento", text: "La ripresa dopo chirurgia lombare parte dalle indicazioni dell’équipe chirurgica. Tipo di intervento, limitazioni e obiettivi personali guidano la progressione delle attività." },
    ],
    approach: "Partiamo da ciò che vuoi tornare a fare e dalle difficoltà che incontri oggi. La valutazione permette di discutere un percorso individuale, oppure la necessità di un approfondimento medico. Una gamba addormentata, per esempio, descrive una sensazione: da sola non identifica una sciatalgia.",
  },
  {
    id: "cervicale-cefalea-vertigini", path: "/trattamenti/cervicale-cefalea-vertigini", title: "Cervicale, cefalea e vertigini", accent: "Capire prima di trattare.",
    description: "Orientamento tra cervicalgia, cefalea cervicogenica, vertigini, radicolopatia e colpo di frusta. Percorsi distinti e valutazione individuale.",
    intro: "Dolore al collo, mal di testa e sensazione di instabilità possono influenzare molto la giornata. Possono anche avere origini differenti: scegliere un percorso significa prima comprendere quali valutazioni siano appropriate.",
    needs: [
      { title: "Il collo che limita", text: "Rigidità e dolore durante le rotazioni possono rendere difficili gesti semplici. La pagina sulla cervicalgia presenta il percorso generale; gli approfondimenti riguardano situazioni più specifiche." },
      { title: "Un mal di testa da inquadrare", text: "La cefalea cervicogenica è una forma specifica di cefalea. La presenza contemporanea di dolore al collo non dimostra che ogni mal di testa abbia origine cervicale." },
      { title: "Vertigini ed equilibrio", text: "La sensazione che l’ambiente giri e l’insicurezza nel camminare non coincidono. L’inquadramento clinico orienta la scelta tra valutazione medica e possibile lavoro riabilitativo." },
    ],
    approach: "Ascoltiamo la storia dei sintomi, gli eventuali traumi e gli accertamenti già svolti. Formicolii alle mani o alle dita possono avere cause diverse e richiedono una valutazione: non li attribuiamo automaticamente alla cervicale. Per sintomi improvvisi e insoliti è prioritario il confronto medico.",
  },
  {
    id: "gomito-polso-mano", path: "/trattamenti/gomito-polso-mano", title: "Gomito, polso e mano", accent: "Dare spazio ai gesti di ogni giorno.",
    description: "Percorsi per dolore al gomito, tunnel carpale, rizoartrosi, dito a scatto, De Quervain e recupero dopo chirurgia o fratture della mano.",
    intro: "Afferrare una tazza, usare il mouse, vestirsi: quando un gesto diventa faticoso, il problema si sente in tutta la giornata. Questi percorsi aiutano a orientarti tra disturbi differenti di gomito, polso e mano.",
    needs: [
      { title: "Presa e carico", text: "Un dolore durante la presa può coinvolgere sedi e strutture diverse. Il percorso per il gomito distingue l’orientamento generale dagli approfondimenti su epicondilite ed epitrocleite." },
      { title: "Pollice e dita", text: "Dolore alla base del pollice, scatto di un dito e dolore sul lato del polso non indicano la stessa condizione. Le pagine dedicate spiegano bisogni e obiettivi funzionali specifici." },
      { title: "Dopo frattura o chirurgia", text: "Il recupero della mobilità e della presa deve rispettare la stabilità dei tessuti e le indicazioni del chirurgo. Porta alla valutazione referti e istruzioni ricevute." },
    ],
    approach: "Osserviamo i movimenti e le attività che vuoi recuperare, considerando lavoro, sport e carichi abituali. Se avverti formicolii, la sede del sintomo è un’informazione utile, ma non basta per diagnosticare un tunnel carpale: serve un inquadramento appropriato.",
  },
  {
    id: "anca-inguine", path: "/trattamenti/anca-inguine", title: "Anca e inguine", accent: "Tornare a muoversi con consapevolezza.",
    description: "Artrosi dell’anca, dolore inguinale e riabilitazione dopo protesi: trova il percorso pertinente alle tue difficoltà quotidiane o sportive.",
    intro: "Camminare, alzarsi da una sedia o cambiare direzione nello sport possono mettere in evidenza difficoltà dell’anca e dell’area inguinale. Il primo passo è distinguere il sintomo dalla condizione che lo provoca.",
    needs: [
      { title: "Rigidità e cammino", text: "Nell’artrosi dell’anca il percorso si concentra sulle attività che risultano limitate, sul movimento e sulla gestione dei carichi, tenendo conto della valutazione clinica." },
      { title: "Dolore nella regione inguinale", text: "Non ogni dolore inguinale è pubalgia e non tutti i dolori di questa area dipendono dall’anca. La valutazione serve anche a riconoscere quando occorre un approfondimento medico." },
      { title: "Dopo una protesi", text: "La riabilitazione si costruisce attorno all’intervento effettuato e alle indicazioni alla dimissione. Gli obiettivi riguardano autonomia, cammino e ripresa graduale delle attività." },
    ],
    approach: "Diamo valore a ciò che il dolore ti impedisce di fare. Valutiamo la funzione e definiamo obiettivi realistici, rispettando eventuali prescrizioni e adattando il percorso alla risposta individuale.",
  },
  {
    id: "caviglia-piede", path: "/trattamenti/caviglia-piede", title: "Caviglia e piede", accent: "Ogni passo merita attenzione.",
    description: "Orientamento per distorsioni di caviglia, instabilità, fascite plantare e dolore al tallone, con percorsi dedicati alla ripresa del cammino.",
    intro: "Appoggiare il piede, affrontare le scale o ritornare alla corsa richiedono mobilità, forza e fiducia. Un trauma alla caviglia e un dolore al tallone hanno bisogni diversi: qui trovi gli approfondimenti dedicati.",
    needs: [
      { title: "Dopo una distorsione", text: "Gonfiore, difficoltà di carico e sensazione di cedimento vanno inquadrati. Dopo un trauma può essere necessaria una valutazione medica prima di iniziare il percorso riabilitativo." },
      { title: "Dolore sotto il piede", text: "La fascite plantare riguarda una specifica condizione dell’area plantare. Il lavoro riabilitativo considera attività, tolleranza al carico e limitazioni individuali." },
      { title: "Un tallone doloroso", text: "Tallonite descrive un dolore, non una causa unica. Anche uno sperone osservato a un esame deve essere messo in relazione con i sintomi e la valutazione." },
    ],
    approach: "Il percorso parte dal modo in cui cammini e dalle richieste della tua giornata. La progressione viene adattata alle attività da recuperare, evitando di confondere la scomparsa momentanea del dolore con il recupero completo della funzione.",
  },
  {
    id: "muscoli-tendini", path: "/trattamenti/muscoli-tendini", title: "Muscoli e tendini", accent: "Ritrovare il proprio carico.",
    description: "Contratture, lesioni muscolari, tendinopatie, borsiti e lesioni tendinee: percorsi distinti per il recupero della funzione e delle attività.",
    intro: "Un fastidio che cresce con gli allenamenti e una lesione improvvisa non richiedono lo stesso percorso. Comprendere come è iniziato il problema aiuta a scegliere l’approfondimento e la valutazione più pertinenti.",
    needs: [
      { title: "Tensione o lesione muscolare", text: "La sensazione di un muscolo contratto non identifica da sola una lesione. Storia dell’episodio, limitazioni e accertamenti disponibili aiutano a inquadrare il problema." },
      { title: "Dolore legato al carico", text: "Tendinopatie e borsiti comprendono condizioni differenti. Il percorso considera la sede coinvolta e come le richieste di lavoro o sport si rapportano alla capacità attuale." },
      { title: "Dopo una lesione tendinea", text: "Una lesione, soprattutto se riparata chirurgicamente, richiede attenzione alle indicazioni mediche e alla protezione dei tessuti. La ripresa dei carichi segue il percorso concordato." },
    ],
    approach: "Non usiamo il solo dolore per decidere quando aumentare l’attività. La valutazione della funzione e la risposta agli esercizi guidano obiettivi e progressione, con criteri adattati al tuo problema e alle richieste quotidiane.",
  },
];
