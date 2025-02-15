import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: './index.html',
      external: ['src/main.jsx'],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
