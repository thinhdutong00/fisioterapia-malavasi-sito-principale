export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
};

export const treatmentGroups: NavItem[] = [
  {
    id: "schiena-colonna",
    label: "Schiena e colonna",
    href: "/trattamenti/schiena-colonna",
    children: [
      { id: "lombalgia-sciatalgia", label: "Lombalgia e sciatalgia", href: "/trattamenti/lombalgia-sciatalgia" },
      { id: "ernia-disco-discopatie", label: "Ernia del disco e discopatie", href: "/trattamenti/schiena-colonna/ernia-disco-discopatie" },
      { id: "stenosi-lombare", label: "Stenosi lombare", href: "/trattamenti/schiena-colonna/stenosi-lombare" },
      { id: "spondilolisi-spondilolistesi", label: "Spondilolisi e spondilolistesi", href: "/trattamenti/schiena-colonna/spondilolisi-spondilolistesi" },
      { id: "scoliosi", label: "Scoliosi", href: "/trattamenti/schiena-colonna/scoliosi" },
      { id: "chirurgia-lombare", label: "Riabilitazione dopo chirurgia lombare", href: "/trattamenti/schiena-colonna/riabilitazione-chirurgia-lombare" },
    ],
  },
  {
    id: "cervicale-cefalea-vertigini",
    label: "Cervicale, cefalea e vertigini",
    href: "/trattamenti/cervicale-cefalea-vertigini",
    children: [
      { id: "cervicalgia", label: "Cervicalgia", href: "/trattamenti/cefalee-vertigini" },
      { id: "cefalea-cervicogenica", label: "Cefalea cervicogenica", href: "/trattamenti/cervicale-cefalea-vertigini/cefalea-cervicogenica" },
      { id: "vertigini-equilibrio", label: "Vertigini e disturbi dell’equilibrio", href: "/trattamenti/cervicale-cefalea-vertigini/vertigini-disturbi-equilibrio" },
      { id: "ernia-cervicale", label: "Ernia cervicale e radicolopatia", href: "/trattamenti/cervicale-cefalea-vertigini/ernia-cervicale-radicolopatia" },
      { id: "colpo-di-frusta", label: "Colpo di frusta", href: "/trattamenti/cervicale-cefalea-vertigini/colpo-di-frusta" },
    ],
  },
  {
    id: "spalla",
    label: "Spalla",
    href: "/trattamenti/patologie-spalla",
    children: [
      { id: "dolore-spalla", label: "Dolore alla spalla", href: "/trattamenti/patologie-spalla" },
      { id: "cuffia-rotatori", label: "Tendinopatie e lesioni della cuffia dei rotatori", href: "/trattamenti/patologie-spalla/tendinopatia-cuffia" },
      { id: "capsulite-adesiva", label: "Spalla congelata / Capsulite adesiva", href: "/trattamenti/patologie-spalla/capsulite-adesiva" },
      { id: "lussazione-spalla", label: "Lussazione e instabilità della spalla", href: "/trattamenti/patologie-spalla/lussazione-spalla" },
      { id: "chirurgia-spalla", label: "Riabilitazione dopo chirurgia della spalla", href: "/trattamenti/patologie-spalla/riabilitazione-chirurgia-spalla" },
    ],
  },
  {
    id: "gomito-polso-mano",
    label: "Gomito, polso e mano",
    href: "/trattamenti/gomito-polso-mano",
    children: [
      { id: "dolore-gomito", label: "Dolore al gomito", href: "/trattamenti/gomito-polso-mano/dolore-gomito" },
      { id: "epicondilite-epitrocleite", label: "Epicondilite ed epitrocleite", href: "/trattamenti/gomito-polso-mano/epicondilite-epitrocleite" },
      { id: "chirurgia-gomito", label: "Riabilitazione dopo chirurgia del gomito", href: "/trattamenti/gomito-polso-mano/riabilitazione-chirurgia-gomito" },
      { id: "tunnel-carpale", label: "Tunnel carpale", href: "/trattamenti/gomito-polso-mano/tunnel-carpale" },
      { id: "rizoartrosi", label: "Rizoartrosi", href: "/trattamenti/gomito-polso-mano/rizoartrosi" },
      { id: "dito-a-scatto", label: "Dito a scatto", href: "/trattamenti/gomito-polso-mano/dito-a-scatto" },
      { id: "de-quervain", label: "Sindrome di De Quervain", href: "/trattamenti/gomito-polso-mano/sindrome-de-quervain" },
      { id: "fratture-mano-dita", label: "Riabilitazione dopo fratture della mano e delle dita", href: "/trattamenti/gomito-polso-mano/fratture-mano-dita" },
    ],
  },
  {
    id: "anca-inguine",
    label: "Anca e inguine",
    href: "/trattamenti/anca-inguine",
    children: [
      { id: "artrosi-anca", label: "Artrosi dell’anca", href: "/trattamenti/anca-inguine/artrosi-anca" },
      { id: "pubalgia", label: "Pubalgia e dolore inguinale", href: "/trattamenti/anca-inguine/pubalgia-dolore-inguinale" },
      { id: "protesi-anca", label: "Riabilitazione dopo protesi d’anca", href: "/trattamenti/anca-inguine/riabilitazione-protesi-anca" },
    ],
  },
  {
    id: "ginocchio",
    label: "Ginocchio",
    href: "/trattamenti/patologie-ginocchio",
    children: [
      { id: "dolore-ginocchio", label: "Dolore al ginocchio", href: "/trattamenti/patologie-ginocchio" },
      { id: "gonartrosi", label: "Gonartrosi", href: "/trattamenti/patologie-ginocchio/gonartrosi" },
      { id: "lesioni-meniscali", label: "Lesioni meniscali", href: "/trattamenti/patologie-ginocchio/lesioni-meniscali" },
      { id: "lca", label: "Ricostruzione del legamento crociato anteriore", href: "/trattamenti/patologie-ginocchio/lca" },
      { id: "crociato-posteriore", label: "Lesioni del crociato posteriore e dei legamenti collaterali", href: "/trattamenti/patologie-ginocchio/lesioni-crociato-posteriore-legamenti-collaterali" },
      { id: "instabilita-ginocchio", label: "Distorsione e instabilità del ginocchio", href: "/trattamenti/patologie-ginocchio/distorsione-instabilita" },
      { id: "protesi-ginocchio", label: "Riabilitazione dopo protesi di ginocchio", href: "/trattamenti/patologie-ginocchio/riabilitazione-protesi-ginocchio" },
    ],
  },
  {
    id: "caviglia-piede",
    label: "Caviglia e piede",
    href: "/trattamenti/caviglia-piede",
    children: [
      { id: "instabilita-caviglia", label: "Distorsione e instabilità della caviglia", href: "/trattamenti/caviglia-piede/distorsione-instabilita-caviglia" },
      { id: "fascite-plantare", label: "Fascite plantare", href: "/trattamenti/caviglia-piede/fascite-plantare" },
      { id: "tallonite", label: "Tallonite e sperone calcaneare", href: "/trattamenti/caviglia-piede/tallonite-sperone-calcaneare" },
    ],
  },
  {
    id: "muscoli-tendini",
    label: "Muscoli e tendini",
    href: "/trattamenti/muscoli-tendini",
    children: [
      { id: "lesioni-muscolari", label: "Contratture e lesioni muscolari", href: "/trattamenti/muscoli-tendini/contratture-lesioni-muscolari" },
      { id: "tendinopatie-borsiti", label: "Tendinopatie e borsiti", href: "/trattamenti/muscoli-tendini/tendinopatie-borsiti" },
      { id: "lesioni-tendinee", label: "Riabilitazione delle lesioni tendinee", href: "/trattamenti/muscoli-tendini/riabilitazione-lesioni-tendinee" },
    ],
  },
  { id: "dolore-persistente", label: "Dolore persistente / Dolore cronico", href: "/trattamenti/dolore-persistente" },
];

export const specialistItems: NavItem[] = [
  { id: "muscoloscheletrica", label: "Fisioterapia muscoloscheletrica", href: "/trattamenti/muscoloscheletrica" },
  { id: "sportiva", label: "Fisioterapia sportiva", href: "/trattamenti/sportiva" },
  { id: "chirurgica", label: "Riabilitazione pre e post-chirurgica", href: "/trattamenti/chirurgica" },
  {
    id: "neurologica",
    label: "Riabilitazione neurologica",
    href: "/trattamenti/neurologica",
    children: [
      { id: "neurologica-panoramica", label: "Panoramica del percorso", href: "/trattamenti/neurologica" },
      { id: "parkinson", label: "Riabilitazione per Parkinson", href: "/trattamenti/neurologica/parkinson" },
      { id: "ictus", label: "Riabilitazione post-ictus", href: "/trattamenti/neurologica/ictus" },
    ],
  },
  {
    id: "oncologica",
    label: "Riabilitazione oncologica",
    href: "/trattamenti/oncologica",
    children: [
      { id: "oncologica-panoramica", label: "Panoramica del percorso", href: "/trattamenti/oncologica" },
      { id: "prostata", label: "Riabilitazione oncologica: prostata", href: "/trattamenti/oncologica/prostata" },
      { id: "seno", label: "Riabilitazione oncologica: seno", href: "/trattamenti/oncologica/seno" },
      { id: "intestino", label: "Riabilitazione oncologica: intestino", href: "/trattamenti/oncologica/intestino" },
      { id: "colon", label: "Riabilitazione oncologica: colon", href: "/trattamenti/oncologica/colon" },
    ],
  },
  { id: "cammino-equilibrio", label: "Rieducazione del cammino e dell’equilibrio", href: "/trattamenti/rieducazione-cammino-equilibrio" },
];

export const navigation: NavItem[] = [
  { id: "informazioni", label: "Informazioni", href: "/informazioni" },
  {
    id: "trattamenti",
    label: "Trattamenti",
    href: "/trattamenti",
    children: [
      ...treatmentGroups,
      { id: "tutti-trattamenti", label: "Tutti i trattamenti", href: "/trattamenti/tutti" },
    ],
  },
  { id: "percorsi-specialistici", label: "Percorsi specialistici", href: "/trattamenti/tutti#percorsi-specialistici", children: specialistItems },
  {
    id: "modalita",
    label: "Modalità",
    href: "/metodo",
    children: [
      { id: "seduta", label: "Seduta fisioterapica", href: "/metodo/seduta-fisioterapica" },
      { id: "domiciliare", label: "Fisioterapia domiciliare", href: "/metodo/seduta-fisioterapica-domiciliare" },
      { id: "small-class", label: "Small Class", href: "/metodo/small-class" },
    ],
  },
  {
    id: "contatti",
    label: "Contatti",
    href: "/contatti",
    children: [
      { id: "contatti-pagina", label: "Contatti", href: "/contatti" },
      { id: "lavora-con-noi", label: "Lavora con noi", href: "/contatti/lavora-con-noi" },
      { id: "prenota", label: "Prenota", href: "/prenota" },
    ],
  },
];
