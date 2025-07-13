import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/',
  output: 'static',
  trailingSlash: 'never',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
});