import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
    integrations: [react()], 
    output: 'server',
    root: "./",
    adapter: vercel(),
  });