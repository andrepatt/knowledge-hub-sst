import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Knowledge Hub SST",
  description:
    "Il Knowledge Hub di Sviluppo Sistemi è una piattaforma di Knowledge Sharing per la condivisione di informazioni, documentazione, best practices e risorse utili, con un pizzo di AI.",
  url: "https://mango-flower-0edf37903.4.azurestaticapps.net/",
  ogImage: "https://mango-flower-0edf37903.4.azurestaticapps.net//og.jpg",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];