import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Routes to prerender - skip dynamic ones like /products/:id
const routes = ["/", "/products", "/about", "/industries", "/news", "/account"]

const template = fs.readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8")

// Dynamically import the server build
const { render } = await import("./dist/server/entry-server.js")

for (const route of routes) {
 try {
    const appHtml = await render(route)

    const headTags = [...appHtml.matchAll(/<title[^>]*>.*?<\/title>|<meta[^>]*(?:\/>|>)/gs)]
      .map(m => m[0])
      .join('\n')

    // Remove them from body
    const bodyHtml = appHtml
      .replace(/<title[^>]*>.*?<\/title>/gs, '')
      .replace(/<meta[^>]*(?:\/>|>)/g, '')

    // Put tags in <head>, clean HTML in root div
    const html = template
      .replace('</head>', `${headTags}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)

    const filePath = route === "/" ? path.resolve(__dirname, "dist/index.html") : path.resolve(__dirname, `dist${route}/index.html`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)

    console.log(`✅ Prerendered: ${route}`)
  } catch (e) {
    console.error(`❌ Failed on route: ${route}`, e.message)
  }
}

console.log("🎉 Prerender complete!")
