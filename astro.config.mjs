import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import UnoCSS from "@unocss/astro";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    solid(),
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
    icon(),
    UnoCSS({
      injectReset: true
    }),
  ],
  site: "https://portfolio-chaudhari.netlify.app",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
