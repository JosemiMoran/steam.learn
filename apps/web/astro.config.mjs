import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

  export default defineConfig({
     output: 'server',
      adapter: vercel(),
  });