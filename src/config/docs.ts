import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Guida all'Uso",
      href: "/docs/help",
    },
    {
      title: "Supporto e FAQ",
      href: "/docs/support",
    },
    {
      title: "Strumenti e Template",
      href: "/docs/resources",
    },
  ],
  sidebarNav: [
    {
      title: "Knowledge Base SST",
      items: [
        {
          title: "Home",
          href: "/docs/getting-started",
        },
      ],
    },
    {
      title: "Esplora le Funzionalità",
      items: [
        {
          title: "Guida all'Uso",
          href: "/docs/help",
        },
        {
          title: "Supporto e FAQ",
          href: "/docs/support",
        },
        {
          title: "Strumenti e Template",
          href: "/docs/resources",
        },
      ],
    },
    {
      title: "Approfondimenti e Risorse",
      items: [
        {
          title: "Reperibilità",
          href: "/docs/availability",
        },
        {
          title: "Manuali Tecnici",
          href: "/docs/manuals",
        },
      ],
    },
  ],
};
