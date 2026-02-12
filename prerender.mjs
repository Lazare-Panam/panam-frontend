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
  "/news",
  "/contact",
]

const template = fs.readFileSync(
  path.resolve(__dirname, "dist/index.html"),
  "utf-8"
)

// Dynamically import the server build
const { render } = await import("./dist/server/entry-server.js")

for (const route of routes) {
  const appHtml = await render(route)

  const html = template.replace(
    `<div id="root"></div>`,
    `<div id="root">${appHtml}</div>`
  )

  // Work out the output path
  const filePath =
    route === "/"
      ? path.resolve(__dirname, "dist/index.html")
      : path.resolve(__dirname, `dist${route}/index.html`)

  // Make sure the directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html)

  console.log(`✅ Prerendered: ${route}`)
}

console.log("🎉 Prerender complete!")