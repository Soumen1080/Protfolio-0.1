import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-vendor': ['react', 'react-dom'],
          'motion': ['motion', 'framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
});
