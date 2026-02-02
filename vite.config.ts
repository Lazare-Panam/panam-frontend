import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // This breaks the 900KB giant into smaller, cached files
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
})
