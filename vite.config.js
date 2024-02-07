import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://dream-dormicile-server.vercel.app',
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
