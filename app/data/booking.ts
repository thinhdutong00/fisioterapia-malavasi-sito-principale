import { specialistItems, treatmentGroups } from "./navigation";

export type BookingKind = "area" | "percorso" | "non-so";

export type BookingOption = {
  id: string;
  label: string;
  href: string;
  children: BookingOption[];
};

export type BookingContext = {
  kind?: BookingKind;
  areaId?: string;
  areaLabel?: string;
  treatmentId?: string;
  treatmentLabel?: string;
  pathwayId?: string;
  pathwayLabel?: string;
  pathwayDetailId?: string;
  pathwayDetailLabel?: string;
  sourcePath?: string;
};

function toBookingOption(item: (typeof treatmentGroups)[number]): BookingOption {
  return {
    id: item.id,
    label: item.label,
    href: item.href,
    children: (item.children ?? []).map((child) => ({
      id: child.id,
      label: child.label,
      href: child.href,
      children: [],
    })),
  };
}

/**
 * Booking choices intentionally reuse the public navigation taxonomy. Adding a
 * treatment to navigation therefore also makes it available in the assessment.
 */
export const bookingAreas: BookingOption[] = treatmentGroups.map(toBookingOption);
export const bookingPathways: BookingOption[] = specialistItems.map(toBookingOption);

export const generalSymptoms = [
  "Dolore",
  "Rigidità o difficoltà di movimento",
  "Debolezza o instabilità",
  "Difficoltà nel cammino o nell’equilibrio",
  "Recupero dopo un intervento o un infortunio",
];

export const generalLimitations = [
  "Attività quotidiane",
  "Lavoro o studio",
  "Sport o attività fisica",
  "Sonno e riposo",
];

export const generalGoals = [
  "Ridurre il dolore",
  "Muovermi con più sicurezza",
  "Recuperare autonomia",
  "Tornare al lavoro o allo sport",
];

export type BookingAssessmentPreset = {
  condition: string;
  symptoms: string[];
  limitations: string[];
  goals: string[];
  context: BookingContext;
};

/** Presets used by the original treatment pages while they share the new form. */
export const assessmentPresets = {
  "/trattamenti/cefalee-vertigini": {
    condition: "Cervicalgia e disturbi correlati",
    symptoms: ["Dolore al collo", "Cefalea o mal di testa", "Vertigini o sbandamenti"],
    limitations: ["Lavorare al computer", "Dormire", "Guidare o girare il collo"],
    goals: ["Ridurre il dolore", "Ridurre la frequenza degli episodi", "Muovermi con più sicurezza"],
    context: { kind: "area", areaId: "cervicale-cefalea-vertigini", areaLabel: "Cervicale, cefalea e vertigini", treatmentId: "cervicalgia", treatmentLabel: "Cervicalgia", sourcePath: "/trattamenti/cefalee-vertigini" },
  },
  "/trattamenti/chirurgica": {
    condition: "Riabilitazione pre e post-chirurgica",
    symptoms: ["Devo ancora operarmi", "Uso stampelle o tutore", "Cammino ma con dolore", "Sono autonomo ma limitato"],
    limitations: ["Camminare e spostarmi", "Vestirmi e gestire le attività quotidiane", "Lavorare o guidare", "Riprendere lo sport"],
    goals: ["Prepararmi all’intervento", "Recuperare mobilità e autonomia", "Ridurre il dolore", "Tornare allo sport"],
    context: { kind: "percorso", pathwayId: "chirurgica", pathwayLabel: "Riabilitazione pre e post-chirurgica", sourcePath: "/trattamenti/chirurgica" },
  },
  "/trattamenti/lombalgia-sciatalgia": {
    condition: "Lombalgia e sciatalgia",
    symptoms: ["Mal di schiena", "Dolore che scende alla gamba", "Rigidità o blocco nei movimenti"],
    limitations: ["Stare seduto o guidare", "Chinarmi o sollevare oggetti", "Camminare o stare in piedi"],
    goals: ["Ridurre il dolore", "Tornare a fare sport", "Muovermi con fiducia", "Prevenire nuovi episodi"],
    context: { kind: "area", areaId: "schiena-colonna", areaLabel: "Schiena e colonna", treatmentId: "lombalgia-sciatalgia", treatmentLabel: "Lombalgia e sciatalgia", sourcePath: "/trattamenti/lombalgia-sciatalgia" },
  },
  "/trattamenti/patologie-ginocchio/gonartrosi": {
    condition: "Gonartrosi",
    symptoms: ["Dolore nel camminare", "Rigidità mattutina", "Gonfiore al ginocchio"],
    limitations: ["Camminare", "Salire e scendere le scale", "Alzarmi o sedermi", "Fare attività fisica"],
    goals: ["Camminare con meno dolore", "Recuperare autonomia", "Tornare a fare attività fisica", "Prepararmi o recuperare da un intervento"],
    context: { kind: "area", areaId: "ginocchio", areaLabel: "Ginocchio", treatmentId: "gonartrosi", treatmentLabel: "Gonartrosi", sourcePath: "/trattamenti/patologie-ginocchio/gonartrosi" },
  },
  "/trattamenti/patologie-ginocchio/lca": {
    condition: "Ricostruzione del legamento crociato anteriore",
    symptoms: ["Instabilità o cedimento", "Dolore o gonfiore", "Paura di muovermi", "Recupero dopo l’intervento"],
    limitations: ["Camminare e cambiare direzione", "Correre o saltare", "Allenarmi", "Lavorare"],
    goals: ["Tornare allo sport", "Recuperare stabilità", "Prepararmi all’intervento", "Recuperare dopo l’intervento"],
    context: { kind: "area", areaId: "ginocchio", areaLabel: "Ginocchio", treatmentId: "lca", treatmentLabel: "Ricostruzione del legamento crociato anteriore", sourcePath: "/trattamenti/patologie-ginocchio/lca" },
  },
  "/trattamenti/patologie-ginocchio/lesioni-meniscali": {
    condition: "Lesioni meniscali",
    symptoms: ["Dolore sul lato del ginocchio", "Ginocchio bloccato", "Instabilità o cedimento", "Recupero dopo l’intervento"],
    limitations: ["Piegare il ginocchio", "Correre o saltare", "Fare le scale", "Accovacciarmi"],
    goals: ["Ridurre il dolore", "Sbloccare il movimento", "Tornare allo sport", "Recuperare dopo l’intervento"],
    context: { kind: "area", areaId: "ginocchio", areaLabel: "Ginocchio", treatmentId: "lesioni-meniscali", treatmentLabel: "Lesioni meniscali", sourcePath: "/trattamenti/patologie-ginocchio/lesioni-meniscali" },
  },
  "/trattamenti/patologie-spalla/capsulite-adesiva": {
    condition: "Spalla congelata / Capsulite adesiva",
    symptoms: ["Spalla rigida o bloccata", "Dolore notturno", "Dolore durante i movimenti"],
    limitations: ["Vestirmi", "Dormire", "Alzare il braccio", "Lavorare o guidare"],
    goals: ["Ridurre il dolore", "Recuperare il movimento", "Tornare a dormire", "Riprendere le attività quotidiane"],
    context: { kind: "area", areaId: "spalla", areaLabel: "Spalla", treatmentId: "capsulite-adesiva", treatmentLabel: "Spalla congelata / Capsulite adesiva", sourcePath: "/trattamenti/patologie-spalla/capsulite-adesiva" },
  },
  "/trattamenti/patologie-spalla/lussazione-spalla": {
    condition: "Lussazione e instabilità della spalla",
    symptoms: ["Sensazione di instabilità", "Dolore durante il movimento", "Paura di muovere il braccio", "Recupero dopo una lussazione"],
    limitations: ["Alzare il braccio", "Dormire", "Lavorare", "Allenarmi"],
    goals: ["Muovermi senza timore", "Recuperare stabilità", "Tornare ad allenarmi", "Ridurre il dolore"],
    context: { kind: "area", areaId: "spalla", areaLabel: "Spalla", treatmentId: "lussazione-spalla", treatmentLabel: "Lussazione e instabilità della spalla", sourcePath: "/trattamenti/patologie-spalla/lussazione-spalla" },
  },
  "/trattamenti/patologie-spalla/tendinopatia-cuffia": {
    condition: "Tendinopatie e lesioni della cuffia dei rotatori",
    symptoms: ["Dolore durante il movimento", "Dolore a riposo o di notte", "Debolezza del braccio"],
    limitations: ["Alzare il braccio", "Vestirmi", "Dormire", "Lavorare o fare sport"],
    goals: ["Ridurre il dolore", "Recuperare forza", "Tornare allo sport", "Riprendere i gesti quotidiani"],
    context: { kind: "area", areaId: "spalla", areaLabel: "Spalla", treatmentId: "cuffia-rotatori", treatmentLabel: "Tendinopatie e lesioni della cuffia dei rotatori", sourcePath: "/trattamenti/patologie-spalla/tendinopatia-cuffia" },
  },
  "/trattamenti/dolore-persistente": {
    condition: "Dolore persistente / Dolore cronico",
    symptoms: ["Dolore presente da molto tempo", "Dolore che cambia o si sposta", "Paura di muovermi", "Attività sempre più ridotte"],
    limitations: ["Muovermi nelle attività quotidiane", "Dormire", "Lavorare", "Fare attività fisica"],
    goals: ["Comprendere meglio il dolore", "Tornare a muovermi con fiducia", "Recuperare autonomia", "Riprendere un’attività importante"],
    context: { kind: "area", areaId: "dolore-persistente", areaLabel: "Dolore persistente / Dolore cronico", sourcePath: "/trattamenti/dolore-persistente" },
  },
  "/trattamenti/muscoloscheletrica": {
    condition: "Fisioterapia muscoloscheletrica",
    symptoms: generalSymptoms,
    limitations: generalLimitations,
    goals: generalGoals,
    context: { kind: "percorso", pathwayId: "muscoloscheletrica", pathwayLabel: "Fisioterapia muscoloscheletrica", sourcePath: "/trattamenti/muscoloscheletrica" },
  },
  "/trattamenti/sportiva": {
    condition: "Fisioterapia sportiva",
    symptoms: ["Dolore durante l’attività", "Infortunio recente", "Recupero dopo un periodo di stop", "Problema che si ripresenta"],
    limitations: ["Allenarmi", "Correre o saltare", "Cambiare direzione", "Partecipare a gare o partite"],
    goals: ["Tornare ad allenarmi", "Rientrare in gara", "Recuperare forza e fiducia", "Ridurre il rischio di nuovi infortuni"],
    context: { kind: "percorso", pathwayId: "sportiva", pathwayLabel: "Fisioterapia sportiva", sourcePath: "/trattamenti/sportiva" },
  },
  "/trattamenti/neurologica": {
    condition: "Riabilitazione neurologica",
    symptoms: ["Difficoltà nel cammino", "Perdita di equilibrio", "Movimenti meno controllati", "Ridotta autonomia quotidiana"],
    limitations: ["Camminare", "Alzarmi e cambiare posizione", "Usare braccio o mano", "Gestire le attività quotidiane"],
    goals: ["Recuperare autonomia", "Camminare con più sicurezza", "Migliorare equilibrio e controllo", "Supportare chi mi assiste"],
    context: { kind: "percorso", pathwayId: "neurologica", pathwayLabel: "Riabilitazione neurologica", sourcePath: "/trattamenti/neurologica" },
  },
  "/trattamenti/neurologica/parkinson": {
    condition: "Riabilitazione per Parkinson",
    symptoms: ["Difficoltà a iniziare il movimento", "Passi piccoli o blocchi nel cammino", "Perdita di equilibrio", "Rigidità nei gesti quotidiani"],
    limitations: ["Camminare fuori casa", "Alzarmi o girarmi", "Affrontare scale e ostacoli", "Gestire le attività quotidiane"],
    goals: ["Muovermi con più sicurezza", "Mantenere autonomia", "Allenare equilibrio e cammino", "Trovare strategie per i gesti difficili"],
    context: { kind: "percorso", pathwayId: "neurologica", pathwayLabel: "Riabilitazione neurologica", pathwayDetailId: "parkinson", pathwayDetailLabel: "Riabilitazione per Parkinson", sourcePath: "/trattamenti/neurologica/parkinson" },
  },
  "/trattamenti/neurologica/ictus": {
    condition: "Riabilitazione post-ictus",
    symptoms: ["Difficoltà a muovere un lato del corpo", "Difficoltà nel cammino", "Perdita di equilibrio", "Ridotta autonomia nei passaggi"],
    limitations: ["Alzarmi e trasferirmi", "Camminare", "Usare braccio o mano", "Gestire le attività quotidiane"],
    goals: ["Recuperare autonomia", "Migliorare cammino ed equilibrio", "Usare meglio il lato coinvolto", "Rendere più sicuri i passaggi"],
    context: { kind: "percorso", pathwayId: "neurologica", pathwayLabel: "Riabilitazione neurologica", pathwayDetailId: "ictus", pathwayDetailLabel: "Riabilitazione post-ictus", sourcePath: "/trattamenti/neurologica/ictus" },
  },
  "/trattamenti/oncologica": {
    condition: "Riabilitazione oncologica",
    symptoms: ["Affaticamento", "Ridotta mobilità", "Debolezza dopo cure o intervento", "Difficoltà a riprendere le attività"],
    limitations: ["Camminare e uscire", "Gestire le attività quotidiane", "Lavorare", "Fare attività fisica"],
    goals: ["Recuperare autonomia", "Gestire meglio la fatica", "Riprendere il movimento", "Ritrovare fiducia nelle attività"],
    context: { kind: "percorso", pathwayId: "oncologica", pathwayLabel: "Riabilitazione oncologica", sourcePath: "/trattamenti/oncologica" },
  },
  "/trattamenti/oncologica/prostata": {
    condition: "Riabilitazione oncologica: prostata",
    symptoms: ["Debolezza dopo l’intervento", "Affaticamento", "Ridotta autonomia", "Difficoltà a riprendere il movimento"],
    limitations: ["Camminare e uscire", "Alzarmi e spostarmi", "Lavorare", "Fare attività fisica"],
    goals: ["Recuperare autonomia", "Gestire meglio la fatica", "Riprendere attività fisica", "Tornare alla routine quotidiana"],
    context: { kind: "percorso", pathwayId: "oncologica", pathwayLabel: "Riabilitazione oncologica", pathwayDetailId: "prostata", pathwayDetailLabel: "Riabilitazione oncologica: prostata", sourcePath: "/trattamenti/oncologica/prostata" },
  },
  "/trattamenti/oncologica/seno": {
    condition: "Riabilitazione oncologica: seno",
    symptoms: ["Rigidità o dolore alla spalla", "Gonfiore o pesantezza del braccio", "Tensione dopo l’intervento", "Affaticamento"],
    limitations: ["Alzare il braccio", "Vestirmi e curarmi", "Dormire", "Riprendere attività e lavoro"],
    goals: ["Recuperare il movimento del braccio", "Gestire gonfiore e pesantezza", "Riprendere autonomia", "Tornare alle attività abituali"],
    context: { kind: "percorso", pathwayId: "oncologica", pathwayLabel: "Riabilitazione oncologica", pathwayDetailId: "seno", pathwayDetailLabel: "Riabilitazione oncologica: seno", sourcePath: "/trattamenti/oncologica/seno" },
  },
  "/trattamenti/oncologica/intestino": {
    condition: "Riabilitazione oncologica: intestino",
    symptoms: ["Affaticamento", "Ridotta tolleranza allo sforzo", "Debolezza dopo cure o intervento", "Difficoltà a riprendere il cammino"],
    limitations: ["Camminare e uscire", "Gestire le attività di casa", "Lavorare", "Fare attività fisica"],
    goals: ["Recuperare autonomia", "Gestire meglio la fatica", "Riprendere il cammino", "Tornare gradualmente alle attività"],
    context: { kind: "percorso", pathwayId: "oncologica", pathwayLabel: "Riabilitazione oncologica", pathwayDetailId: "intestino", pathwayDetailLabel: "Riabilitazione oncologica: intestino", sourcePath: "/trattamenti/oncologica/intestino" },
  },
  "/trattamenti/oncologica/colon": {
    condition: "Riabilitazione oncologica: colon",
    symptoms: ["Debolezza dopo l’intervento", "Affaticamento", "Difficoltà nel cammino", "Ridotta autonomia a casa"],
    limitations: ["Alzarmi e spostarmi", "Camminare", "Gestire le attività quotidiane", "Riprendere lavoro o attività fisica"],
    goals: ["Recuperare autonomia", "Riprendere il cammino", "Aumentare gradualmente le attività", "Tornare alla routine quotidiana"],
    context: { kind: "percorso", pathwayId: "oncologica", pathwayLabel: "Riabilitazione oncologica", pathwayDetailId: "colon", pathwayDetailLabel: "Riabilitazione oncologica: colon", sourcePath: "/trattamenti/oncologica/colon" },
  },
  "/trattamenti/rieducazione-cammino-equilibrio": {
    condition: "Rieducazione del cammino e dell’equilibrio",
    symptoms: ["Instabilità in piedi", "Paura di cadere", "Cammino lento o incerto", "Cadute o quasi-cadute"],
    limitations: ["Camminare fuori casa", "Affrontare scale e ostacoli", "Alzarmi e cambiare direzione", "Spostarmi senza aiuto"],
    goals: ["Camminare con più sicurezza", "Migliorare l’equilibrio", "Ridurre il rischio di caduta", "Recuperare autonomia negli spostamenti"],
    context: { kind: "percorso", pathwayId: "cammino-equilibrio", pathwayLabel: "Rieducazione del cammino e dell’equilibrio", sourcePath: "/trattamenti/rieducazione-cammino-equilibrio" },
  },
} satisfies Record<string, BookingAssessmentPreset>;

function normalizePath(path: string) {
  const cleanPath = path.split("?")[0].split("#")[0];
  if (!cleanPath || cleanPath === "/") return cleanPath;
  return cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
}

export function getAssessmentPreset(sourcePath?: string): BookingAssessmentPreset | undefined {
  if (!sourcePath) return undefined;
  return (assessmentPresets as Record<string, BookingAssessmentPreset>)[normalizePath(sourcePath)];
}

/** Resolve a page URL into the context that should already be selected. */
export function getBookingContextByPath(sourcePath?: string): BookingContext {
  if (!sourcePath) return {};

  const path = normalizePath(sourcePath);

  for (const area of bookingAreas) {
    if (normalizePath(area.href) === path) {
      return {
        kind: "area",
        areaId: area.id,
        areaLabel: area.label,
        sourcePath: path,
      };
    }

    const treatment = area.children.find((item) => normalizePath(item.href) === path);
    if (treatment) {
      return {
        kind: "area",
        areaId: area.id,
        areaLabel: area.label,
        treatmentId: treatment.id,
        treatmentLabel: treatment.label,
        sourcePath: path,
      };
    }
  }

  for (const pathway of bookingPathways) {
    if (normalizePath(pathway.href) === path) {
      return {
        kind: "percorso",
        pathwayId: pathway.id,
        pathwayLabel: pathway.label,
        sourcePath: path,
      };
    }

    const detail = pathway.children.find((item) => normalizePath(item.href) === path);
    if (detail) {
      return {
        kind: "percorso",
        pathwayId: pathway.id,
        pathwayLabel: pathway.label,
        pathwayDetailId: detail.id,
        pathwayDetailLabel: detail.label,
        sourcePath: path,
      };
    }
  }

  return { sourcePath: path };
}

export function bookingHref(sourcePath: string) {
  return `/prenota?from=${encodeURIComponent(sourcePath)}`;
}
