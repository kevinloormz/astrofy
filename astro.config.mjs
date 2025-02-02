import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://kevinloormz.github.io.git',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: netlify()
});