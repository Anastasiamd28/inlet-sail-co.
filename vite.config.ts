import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tanstackStart } from "@tanstack/start/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      spa: true, // Включаем режим SPA (чистый статический экспорт)
    }),
    react(),
  ],
  build: {
    outDir: "dist", // Чтобы всё собиралось в одну папку dist
  }
});
