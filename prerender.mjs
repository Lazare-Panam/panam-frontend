import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Routes to prerender - skip dynamic ones like /products/:id
const routes = [
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
  "/catalogPDFs"
];
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
