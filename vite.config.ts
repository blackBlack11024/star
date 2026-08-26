import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  assetsInclude: ['**/*.glsl', '**/*.bin'],
  build: {
    target: 'esnext',
  },
  server: {
    open: true,
  },
});
