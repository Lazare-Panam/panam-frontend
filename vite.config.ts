import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import sitemap from "vite-plugin-sitemap"
import { PRODUCT_ROUTES, PRODUCT_SECTION_ROUTES } from "./src/productRoutes"

const BLOG_POSTS = [
  "/blog/panam-valves-rg-fluid-power-partnership",
  "/blog/double-blog-and-bleed",
  "/blog/hydrogen-blog",
  "/blog/swivel-gauge-blog",
  "/blog/check-valves-blog",
]

// Category/industry/hub pages — one level below the homepage in importance.
const CATEGORY_ROUTES = [
  "/products",
  "/product-index",
  ...PRODUCT_SECTION_ROUTES,
  "/about",
  "/industries",
  "/blog",
  "/industries/marine-subsea",
  "/industries/oil-gas",
  "/industries/hydrogen",
  "/industries/aerospace-defense",
  "/industries/chemicals-petrochemical",
  "/industries/food-beverages",
  "/catalogPDFs",
  // certificates
  "/certificates",
  "/certificates/qms",
  "/certificates/type-reports",
  "/certificates/registrations",
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
  // instrumentation fittings
  "/instrumentation-fittings",
  "/instrumentation-fittings/tube-fittings",
  "/instrumentation-fittings/tube-fittings/connectors",
  "/instrumentation-fittings/tube-fittings/union",
  "/instrumentation-fittings/tube-fittings/reducer",
  "/instrumentation-fittings/tube-fittings/adapter",
  "/instrumentation-fittings/tube-fittings/port-connector",
  "/instrumentation-fittings/tube-fittings/weld-gauge",
  "/instrumentation-fittings/tube-fittings/accessories",
  "/instrumentation-fittings/tube-fittings/die-electric",
  "/instrumentation-fittings/jic-fittings",
  "/instrumentation-fittings/jic-fittings/all",
  "/instrumentation-fittings/jic-fittings/connectors",
  "/instrumentation-fittings/jic-fittings/unions-swivel",
  "/instrumentation-fittings/jic-fittings/adapters-reducers",
  "/instrumentation-fittings/jic-fittings/elbows",
  "/instrumentation-fittings/jic-fittings/tees",
  "/instrumentation-fittings/jic-fittings/plugs-caps-nuts",
  "/instrumentation-fittings/pipe-fittings",
  "/instrumentation-fittings/pipe-fittings/nipples-couplings",
  "/instrumentation-fittings/pipe-fittings/adapters-plugs",
  "/instrumentation-fittings/pipe-fittings/unions-connectors",
  "/instrumentation-fittings/pipe-fittings/elbows",
  "/instrumentation-fittings/pipe-fittings/tees-cross",
  "/instrumentation-fittings/weld-fittings",
  "/instrumentation-fittings/weld-fittings/all",
  "/instrumentation-fittings/weld-fittings/connectors",
  "/instrumentation-fittings/weld-fittings/elbows",
  "/instrumentation-fittings/weld-fittings/tees",
  "/instrumentation-fittings/tube-clamps",
  "/instrumentation-fittings/tube-clamps/twin-series",
  "/instrumentation-fittings/tube-clamps/single-layer",
  "/instrumentation-fittings/tube-clamps/double-layer",
  "/instrumentation-fittings/tube-clamps/heavy-single-layer",
  "/instrumentation-fittings/tube-clamps/heavy-double-layer",
  "/instrumentation-fittings/swivel-gauge-adaptors",
  // filters
  "/filters",
  "/filters/t-type",
  "/filters/i-type",
  // manifolds
  "/manifolds",
  "/manifolds/2VM",
  "/manifolds/3VM",
  "/manifolds/5VM",
  // double block and bleed
  "/double-block-and-bleed-valves",
  "/double-block-and-bleed-valves/pipe-to-pipe",
  "/double-block-and-bleed-valves/flange-to-pipe",
  "/double-block-and-bleed-valves/flange-to-flange",
]

// vite-plugin-sitemap only matches per-route overrides by exact path or a single "*" wildcard
// (no prefix/glob support) — so the per-page-type priority/changefreq map is built explicitly
// here instead of left at the plugin's flat defaults (priority 1, changefreq "daily" for every
// URL), which read as a fabricated signal on a 2,500+ URL sitemap.
const priorityByRoute: Record<string, number> = { "*": 0.5, "/": 1 }
const changefreqByRoute: Record<string, string> = { "*": "monthly", "/": "daily" }
for (const route of CATEGORY_ROUTES) {
  priorityByRoute[route] = 0.8
  changefreqByRoute[route] = "weekly"
}
for (const route of BLOG_POSTS) {
  priorityByRoute[route] = 0.6
  changefreqByRoute[route] = "monthly"
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
 sitemap({
      hostname: "https://www.panamvalve.com",
      generateRobotsTxt: true,
      priority: priorityByRoute,
      changefreq: changefreqByRoute,
      // "/" is deliberately omitted here — vite-plugin-sitemap also globs physical files already
      // in outDir, dist/index.html always exists by this point, and the plugin doesn't dedup
      // against dynamicRoutes, so listing "/" here produced two identical <url> entries for it.
      // The plugin runs every route through path.parse() and keeps only `.name`, so a part number
      // with a dot (PTN-4M-2.75-SS, PHLN-2N-SS-L-1.5-10K) lost everything after it ("PTN-4M-2") —
      // a URL that doesn't exist, falls back to the homepage and canonicalises to "/". Appending
      // ".html" makes that the parsed extension, so the full part number survives intact.
      dynamicRoutes: [
        ...CATEGORY_ROUTES,
        ...BLOG_POSTS,
        ...PRODUCT_ROUTES,
      ].map(route => (route.split("/").pop()!.includes(".") ? `${route}.html` : route)),
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
