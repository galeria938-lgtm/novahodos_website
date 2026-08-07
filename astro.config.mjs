import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://novahodos.com',
  output: 'static',
  // Build Output API so Vercel ships dist/.well-known (plain static dist often drops dot-dirs)
  adapter: vercel(),
});
