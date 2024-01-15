import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
    integrations: [react()], 
    root: "./",
    output: 'server',
    adapter: node({
      mode: "standalone"
    }),
  });