import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel/static'

export default defineConfig({
    integrations: [react()], 
    output: 'static',
    root: "./",
    adapter: vercel(),
  });