import type { InfoLdg } from "@/types";

export const infos: InfoLdg[] = [

  {
    title: "Knowledge Hub: il centro delle conoscenze",
    description:
      "Accedi a un unico punto di riferimento per guide, manuali, standard architetturali e documentazione. Un supporto indispensabile per tutti i progetti e le attività della struttura SST.",
    image: "/images/blog/placeholder-2.jpg",
    list: [
      {
        title: "Guide e Manuali",
        description: "Consulta le guide pratiche e i manuali per tutte le attività aziendali.",
        icon: "lucide:laptop",
      },
      {
        title: "Standard Condivisi",
        description: "Trova gli standard architetturali e metodologici utilizzati dalla struttura.",
        icon: "lucide:settings",
      },
      {
        title: "Documentazione Centralizzata",
        description: "Organizza e accedi facilmente alla documentazione di tutti i progetti.",
        icon: "lucide:search",
      },
    ],
  },
  {
    title: "Strumenti e Risorse per ogni necessità",
    description:
      "Scopri strumenti, collegamenti e tecnologie utili per il lavoro quotidiano. Accesso diretto a tool di AI e Gen AI, link essenziali e template per ottimizzare i flussi di lavoro.",
    image: "/images/blog/placeholder-3.jpg",
    list: [
      {
        title: "Strumenti AI/Gen AI",
        description: "Utilizza i migliori strumenti di intelligenza artificiale per i tuoi progetti.",
        icon: "lucide:settings",
      },
      {
        title: "Link Utili",
        description: "Trova velocemente i collegamenti ai sistemi e alle risorse aziendali.",
        icon: "lucide:link",
      },
      {
        title: "Template e Librerie",
        description: "Accedi a modelli predefiniti e librerie per velocizzare il lavoro.",
        icon: "lucide:layers",
      },
    ],
  },
];


export const features = [
  {
    title: "Progetti in corso",
    description: "Progetti attivi e in fase di sviluppo da parte della struttura SST.",
    link: "/projects",
  },
  {
    title: "Standard Architetturali",
    description: "Linee guida per progettare e sviluppare soluzioni scalabili e sicure.",
    link: "/guides/standard-architetturali",
  },
  {
    title: "Mappa Applicativa",
    description: "Visualizza tutte le applicazioni sviluppate da SST.",
    link: "/apps",
  },
  {
    title: "Piattaforme Tecnologiche",
    description: "Tecnologie e framework utilizzati nei progetti della struttura.",
    link: "#",
  },
  {
    title: "Formazione e Certificazioni",
    description: "Approfondisci competenze tecniche con corsi e tutorial dedicati.",
    link: "/courses",
  },
  {
    title: "Knowledge Base",
    description: "Accesso rapido a guide, manuali e documentazione.",
    link: "/docs",
  },
];

export const testimonials = [
  {
    name: "Valerio Mearelli",
    job: "Responsabile Sviluppo Sistemi",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Grazie alla knowledge base SST, tutto è finalmente al suo posto. Ora mi chiedo solo: perché non ci abbiamo pensato prima?",
  },

  {
    name: "Valerio Borrelli",
    job: "PM TSP",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Con la knowledge base SST tutto è così organizzato che il vero problema ora è trovare una scusa per non essere super efficiente.",
  },
  {
    name: "Luca Bianchi",
    job: "Architetto IT",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "La mappa applicativa di SST è uno strumento fantastico per avere una visione chiara delle interconnessioni tra i sistemi aziendali.",
  },
  {
    name: "Alessia Conti",
    job: "Analista Funzionale",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "La sezione 'Piattaforme Tecnologiche' ci ha permesso di scegliere le tecnologie giuste per i nostri nuovi progetti senza dover reinventare la ruota.",
  },
  {
    name: "Marco Esposito",
    job: "Responsabile Progetto",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "La struttura della knowledge base ci ha aiutato a migliorare il coordinamento con altre divisioni, rendendo i progetti più fluidi.",
  },
  {
    name: "Francesca Ricci",
    job: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "Finalmente un posto dove trovare guide e strumenti per lavorare sui nostri progetti di analisi dati in modo efficace.",
  },
];
