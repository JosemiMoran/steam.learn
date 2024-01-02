import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel"; 

  export default defineConfig({
    integrations: [react()], 
    output: 'server',
    adapter: vercel() 
  });