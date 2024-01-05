import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

console.log('siteUrl', siteUrl)
  export default defineConfig({
    integrations: [react()], 
    output: 'server',
    root: "./",
    adapter: vercel({
      speedInsights: {
        enabled: true,
      },
    }) 
  });