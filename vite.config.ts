import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/green-riders-website/' : '/',
  // base: '/',
  define: {
    __APP_VERSION__: JSON.stringify(process.env.VITE_GIT_COMMIT_ID || 'dev'),
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
