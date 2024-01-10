import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercelServerless from '@astrojs/vercel/serverless'

export default defineConfig({
    integrations: [react()], 
    root: "./",
    output: 'server',
    adapter: vercelServerless(),
  });