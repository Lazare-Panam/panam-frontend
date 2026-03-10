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

    const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)

    const filePath = route === "/" ? path.resolve(__dirname, "dist/index.html") : path.resolve(__dirname, `dist${route}/index.html`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)

    console.log(`✅ Prerendered: ${route}`)
  } catch (e) {
    console.error(`❌ Failed on route: ${route}`, e.message)
  }
}

console.log("🎉 Prerender complete!")
