import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/toDoList-react/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgo: true,
        prettier: true,
      },
    }),
  ],
});
