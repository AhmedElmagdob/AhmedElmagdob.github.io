import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ahmedelmagdob.github.io',
  integrations: [tailwind()],
  build: {
    assets: 'assets',
  },
});
