import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: "./",
  build: {
    outDir: "dist",
  },
  base: "/linguas/",
  publicDir: "public",
  define: {
    "process.env.VITE_PROJECT_URL_API": JSON.stringify(
      process.env.VITE_PROJECT_URL_API
    ),
    "process.env.VITE_PROJECT_URL": JSON.stringify(
      process.env.VITE_PROJECT_URL
    ),
  },
});
