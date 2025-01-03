import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://mango-flower-0edf37903.4.azurestaticapps.net/",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    pagefind({
      // Escludi la classe ai.astro (e qualsiasi percorso derivato da essa)
      exclude: ["/ai"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "hybrid", // Necessario per supportare la pagina dinamica ai.astro
  adapter: vercel({
    analytics: true, // Attiva il tracciamento analitico su Vercel
  }),
  },
);
