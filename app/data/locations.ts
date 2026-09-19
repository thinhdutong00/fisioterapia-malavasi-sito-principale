export const locations = {
  cavezzo: {
    path: "/sedi/cavezzo",
    name: "Cavezzo",
    address: "Via I Maggio 95, Cavezzo (MO)",
    description: "La sede di Fisioterapia Malavasi a Cavezzo, in Via I Maggio 95. Contatti, indicazioni stradali e richiesta di valutazione.",
    intro: "A Cavezzo ci trovi in Via I Maggio 95. Se stai cercando un punto di partenza per affrontare una difficoltà di movimento, puoi richiedere una valutazione e indicare questa sede nella prenotazione.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Via%20I%20Maggio%2095%2C%20Cavezzo%20MO",
    arrivalTitle: "Il tuo appuntamento a Cavezzo.",
    arrivalText: "Usa l’indirizzo completo di Via I Maggio 95 per impostare il percorso. Per concordare l’appuntamento o chiarire esigenze di accesso, contatta lo studio: orario e organizzazione della visita vengono confermati direttamente.",
    other: "rovereto-sulla-secchia" as const,
  },
  "rovereto-sulla-secchia": {
    path: "/sedi/rovereto-sulla-secchia",
    name: "Rovereto sulla Secchia",
    address: "Via Savino Forti 61, Rovereto sulla Secchia (MO)",
    description: "Fisioterapia Malavasi a Rovereto sulla Secchia, in Via Savino Forti 61. Trova l’indirizzo, contatta lo studio e richiedi un appuntamento.",
    intro: "La sede di Rovereto sulla Secchia si trova in Via Savino Forti 61. Per organizzare il tuo percorso in questa sede, seleziona Rovereto nel modulo di prenotazione: lo studio ti ricontatterà per concordare l’appuntamento.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Via%20Savino%20Forti%2061%2C%20Rovereto%20sulla%20Secchia%20MO",
    arrivalTitle: "Raggiungerci a Rovereto sulla Secchia.",
    arrivalText: "Il collegamento alle indicazioni utilizza Via Savino Forti 61 e la località completa, Rovereto sulla Secchia, in provincia di Modena. Se devi organizzare uno spostamento o hai una necessità specifica, chiamaci prima dell’appuntamento per concordare i dettagli.",
    other: "cavezzo" as const,
  },
};
export type LocationKey = keyof typeof locations;
