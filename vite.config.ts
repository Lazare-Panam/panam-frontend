import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import sitemap from "vite-plugin-sitemap"
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(),
     sitemap({
       hostname: "https://www.panamvalve.com",
      dynamicRoutes: [
        "/",
        "/products",
        "/about",
        "/industries",
        "/blog",
        "/industries/marine-subsea",
        "/industries/oil-gas",
        "/industries/hydrogen",
        "/industries/aerospace-defense",
        "/industries/chemicals-petrochemical",
        "/industries/food-beverages",
        "/blog/panam-valves-rg-fluid-power-partnership"
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              "vendor-react": ["react", "react-dom"],
              "vendor-mui": ["@mui/material", "@emotion/react", "@emotion/styled"],
              "vendor-utils": ["framer-motion", "swiper", "axios"],
            },
          },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/vitest.setup.ts"],
    globals: true,
  },
}))
