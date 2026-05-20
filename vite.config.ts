import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import sitemap from "vite-plugin-sitemap"
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.panamvalve.com",
      generateRobotsTxt: true,
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
  "/blog/panam-valves-rg-fluid-power-partnership",
  "/blog/double-blog-and-bleed",
  "/blog/hydrogen-blog",
  "/blog/swivel-gauge-blog",
  "/blog/check-valves-blog",
  "/catalogPDFs",
  // valves
  "/valves",
  "/valves/needle-valves",
  "/valves/needle-valves/needle-valves-ib",
  "/valves/needle-valves/needle-valves-hb",
  "/valves/needle-valves/needle-valves-hp",
  "/valves/needle-valves/needle-valves-sb",
  "/valves/needle-valves/needle-valves-mini",
  "/valves/ball-valves",
  "/valves/ball-valves/two-way",
  "/valves/ball-valves/three-way",
  "/valves/ball-valves/high-bore",
  "/valves/check-valves",
  "/valves/relief-valves",
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
