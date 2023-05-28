import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'


import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    UnoCSS({
      injectReset: true // or a path to the reset file
    }),
  ],
});