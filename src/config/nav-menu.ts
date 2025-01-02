import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  redNav: [
    {
      title: "R&D",
      items: [
        {
          title: "Progetti",
          href: "/projects",
          description: "Scopri i progetti attualmente in corso nella struttura SST.",
          image: "/images/blog/placeholder-2.jpg",
        },
        {
          title: "Standard Architetturali SST",
          href: "/guides/standard-architetturali/",
          description: "Consulta gli standard architetturali adottati.",
          image: "/images/blog/placeholder-2.jpg",
        },
        {
          title: "Mappa Applicativa",
          href: "/apps",
          description: "Dettaglio delle applicazioni SST.",
          image: "/images/blog/placeholder-2.jpg",
        },
        {
          title: "Piattaforme e Tecnologie",
          href: "/releases",
          description: "Esplora le piattaforme e le tecnologie standard.",
          image: "/images/blog/placeholder-2.jpg",
          disabled: true,
        },
        {
          title: "Roadmap di Innovazione",
          href: "/animes",
          description: "Pianificazione strategica per l'innovazione tecnologica.",
          image: "/images/blog/placeholder-2.jpg",
          disabled: true,
        },
      ],
    },
  ],
  toolNav: [
    {
      title: "Strumenti e Risorse",
      items: [
        {
          title: "Manuali e Guide Utili",
          href: "/guides",
          description: "Guide e manuali utili per la struttura SST.",
          image: "/images/blog/placeholder-2.jpg",
        },
        {
          title: "Strumenti AI/Gen AI",
          href: "/tools",
          description: "Accesso agli strumenti di Intelligenza Artificiale per SST.",
          image: "/images/blog/placeholder-2.jpg",
        },
        {
          title: "Link Utili",
          href: "/",
          description: "Raccolta di collegamenti utili per la struttura SST.",
          image: "/images/blog/placeholder-2.jpg",
          disabled: true,
        },
        {
          title: "Template e Librerie",
          href: "/",
          description: "Template e risorse per semplificare lo sviluppo.",
          image: "/images/blog/placeholder-2.jpg",
          disabled: true,
        },
      ],
    },
  ],

  courseNav: [
    {
      title: "Corsi e Formazione",
      items: [
        {
          title: "Catalogo Corsi",
          href: "/courses",
          description: "Esplora i corsi di formazione disponibili.",
          image: "/images/blog/placeholder-2.jpg",
        },
        {
          title: "Tutorial e Pillole Formative",
          href: "/",
          description: "Approfondisci con tutorial e contenuti brevi.",
          image: "/images/blog/placeholder-2.jpg",
          disabled: true,
        },
        {
          title: "Programmi di Certificazione",
          href: "/",
          description: "Scopri i programmi di certificazione disponibili.",
          image: "/images/blog/placeholder-2.jpg",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "News",
      href: "/blog",
      description: "Aggiornamenti, Notizie, Storie di successo ed Eventi.",
      image: "/images/blog/placeholder-2.jpg",
    },
    {
      title: "Contatti",
      href: "/about",
      description: "Informazioni per contattare i referenti della struttura.",
      image: "/images/blog/placeholder-2.jpg",
    },
    // {
    //   title: "Changelog",
    //   href: "/releases",
    //   description: "Rilasci delle versioni e delle novità.",
    //   image: "/images/blog/placeholder-2.jpg",
    // },
  ],
};
