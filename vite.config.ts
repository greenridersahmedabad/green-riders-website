import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log("process.env.NODE_ENV", process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/green-riders-website/' : '/',
  // base: '/',
  define: {
    __APP_VERSION__: JSON.stringify(process.env.VITE_GIT_COMMIT_ID || 'dev'),
    isprod: process.env.NODE_ENV === 'production'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
