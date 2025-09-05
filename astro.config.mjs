import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://biomanage.eu',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  i18n: {
    defaultLocale: 'bg',
    locales: ['bg', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/image']
    }
  }
});
