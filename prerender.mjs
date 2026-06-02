import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const { PRODUCT_ROUTES } = await import("./src/productRoutes.ts")

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Routes to prerender - skip dynamic ones like /products/:id
const staticRoutes = [
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
];
const routes = [...staticRoutes, ...PRODUCT_ROUTES]

const originalTemplate = fs.readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8")


// Dynamically import the server build
const { render } = await import("./dist/server/entry-server.js")

for (const route of routes) {
  try {
    const appHtml = await render(route)

    const headTags = [...appHtml.matchAll(/<title[^>]*>.*?<\/title>|<meta[^>]*(?:\/>|>)/gs)].map(m => m[0]).join("\n")

    // Remove them from body
    const bodyHtml = appHtml.replace(/<title[^>]*>.*?<\/title>/gs, "").replace(/<meta[^>]*(?:\/>|>)/g, "")

    // Put tags in <head>, clean HTML in root div
let html = originalTemplate
  // 1. Use a "Global" and "Case-Insensitive" regex to remove ANY existing title
  .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '') 
  
  // 2. Use a regex to find the <head> tag even if it has attributes
  .replace(/<head[^>]*>/i, (match) => `${match}\n${headTags}`)
  
  // 3. Keep your root replacement, but ensure it matches correctly
  .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  
  let preloadCount = 0;
    html = html.replace(/<link rel="preload" as="image" href="https:\/\/res\.cloudinary\.com\/[^>]*\/>/g, (match) => {
      preloadCount++;
      return preloadCount <= 1 ? match : ''; // Keep 1st, delete others
    });

    const filePath = route === "/" ? path.resolve(__dirname, "dist/index.html") : path.resolve(__dirname, `dist${route}/index.html`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)

    console.log(`✅ Prerendered: ${route}`)
  } catch (e) {
    console.error(`❌ Failed on route: ${route}`, e.message)
  }
}

console.log("🎉 Prerender complete!")
