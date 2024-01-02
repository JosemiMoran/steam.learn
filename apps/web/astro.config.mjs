import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

const siteUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://steam-learn-web.vercel.app/' // 'your.prod.domain.here'
    : 'http://localhost:4321/'

console.log('siteUrl', siteUrl)
  export default defineConfig({
    integrations: [react()], 
    output: 'server',
    site: siteUrl,
    adapter: vercel({
      speedInsights: {
        enabled: true,
      },
    }) 
  });