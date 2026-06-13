import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/start/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      spa: true, // Включаем статический SPA режим
    }),
  ],
  build: {
    outDir: "dist", // Собираем в папку dist
  }
});
