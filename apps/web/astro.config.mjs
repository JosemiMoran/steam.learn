import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node"
import vercelServerless from '@astrojs/vercel/serverless'

export default defineConfig({
    integrations: [react()], 
    root: "./",
    adapter: node({
      mode: "standalone"
    }),
  });