import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

// https://astro.build/config
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
    pagefind(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  // output: "hybrid",
  // adapter: vercel({
  //   analytics: true,
  // }),
});
