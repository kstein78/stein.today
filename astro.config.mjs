import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://stein.today',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
