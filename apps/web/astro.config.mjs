import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercelServerless from '@astrojs/vercel/serverless'

export default defineConfig({
    integrations: [react()], 
    output: 'server',
    root: "./",
    adapter: vercelServerless(),
  });