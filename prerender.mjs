import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const { PRODUCT_ROUTES, PRODUCT_SECTION_ROUTES } = await import("./src/productRoutes.ts")

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Routes to prerender - skip dynamic ones like /products/:id
const staticRoutes = [
  "/",
  "/products",
  "/product-index",
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
  "/blog/double-block-and-bleed",
  "/blog/3-valve-manifold-operation-guide",
  "/blog/hydrogen-blog",
  "/blog/swivel-gauge-blog",
  "/blog/check-valves-blog",
  "/catalogPDFs",
  "/stock-clearance",
  // Legal pages — index,follow and required by Merchant Center, so prerender for crawlers.
  "/privacy-policy",
  "/terms-of-use",
  "/conditions-of-sale",
  // Weren't prerendered, so Azure served them the homepage's title/canonical and Google kept old titles.
  "/enquiry",
  // Prerendered so the URL serves its own (noindex) HTML instead of the homepage; excluded from the
  // sitemap below because it is noindex.
  "/enquiry/thank-you",
  "/system-integration",
  "/system-integration/air-header",
  // certificatesn
  "/certificates",
  "/certificates/qms",
  "/certificates/type-reports",
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
  // single block and bleed
  "/single-block-and-bleed-valves",
  "/single-block-and-bleed-valves/monoflange",
  "/single-block-and-bleed-valves/flange-to-pipe",
  "/single-block-and-bleed-valves/block-and-bleed",
  // High Pressure hub + category listing pages. Without these, Azure's navigationFallback served
  // the prerendered HOMEPAGE for them, so their canonical was baked as "/" (Google would fold these
  // high-traffic hubs into the homepage) and the SPA then added a 2nd, self-canonical at runtime →
  // "multiple canonical tags with different URLs". Prerendering each ships one correct canonical.
  "/high-pressure",
  "/high-pressure/needle-valves",
  "/high-pressure/double-block-and-valves",
  "/high-pressure/ball-valves",
  "/high-pressure/cones-threaded-nipples",
  "/high-pressure/2-valve-manifolds",
  "/high-pressure/fittings",
  "/high-pressure/fittings/connectors",
  "/high-pressure/fittings/unions",
  "/high-pressure/fittings/adaptors",
  "/high-pressure/fittings/elbows-tees-cross",
  "/high-pressure/fittings/end-connections",
  "/high-pressure/fittings/seals-glads",
  "/high-pressure/pipe-fittings",
  "/high-pressure/pipe-fittings/hex-nipples",
  "/high-pressure/pipe-fittings/hex-couplings",
  "/high-pressure/pipe-fittings/adapters",
  "/high-pressure/pipe-fittings/elbows",
  "/high-pressure/pipe-fittings/tees-crosses",
  "/high-pressure/pipe-fittings/plugs-caps",
  // Crawlable directory of every HP category + SKU, linked by a button on the homepage so the deep
  // HP product pages aren't orphaned (SE Ranking/Ahrefs reported 0 inlinks to them).
  "/high-pressure-index",
  // HTML sitemap: crawlable hub linking every structural page, linked sitewide from the footer so
  // pages that previously had a single inbound link gain another from a well-linked page.
  "/sitemap",
  // Filter elements listing + the "all" pipe-fittings listing (were also falling back to "/").
  "/filters/elements",
  "/instrumentation-fittings/pipe-fittings/all",
  // Blog posts that exist in the app but weren't prerendered (were canonicalising to "/").
  "/blog/how-to-specify-industrial-and-control-valves",
  "/blog/api-valve-standards-600-602-603-598-6d",
  "/blog/check-valve-guide",
  "/blog/stainless-steel-ball-valve-guide",
  "/blog/three-way-valve-l-port-t-port-guide",
  "/blog/uk-industrial-valves-buyers-guide",
  "/blog/npt-vs-bspp-vs-bspt-thread-standards",
  "/blog/manifold-valves-for-accurate-safe-instrumentation",
  "/blog/hp-series-needle-valves-high-pressure-flow-control",
  "/blog/swagelok-alternative-tube-fittings",
]
const routes = [...staticRoutes, ...PRODUCT_SECTION_ROUTES, ...PRODUCT_ROUTES]

const originalTemplate = fs.readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8")

// Dynamically import the server build
const { render } = await import("./dist/server/entry-server.js")

for (const route of routes) {
  try {
    const appHtml = await render(route)

    // Tags React renders as document metadata (title/meta/link) land wherever they sit in the
    // component tree during SSR — they must be pulled out and moved into <head> manually, or
    // canonical links end up buried in <body>. React 19 hoists these same tags on the client, so
    // hydration skips them and moving them is safe.
    //
    // JSON-LD <script>s are deliberately LEFT IN PLACE: React does not hoist <script>, so on the
    // client it expects each one exactly where the component renders it. Moving them to <head>
    // made every page fail hydration (React #418), which threw away the prerendered HTML and
    // re-rendered from scratch — for ~1s crawlers saw a page with no content and no <h1>
    // (SE Ranking "H1 tag missing"), and it hurt LCP/CLS. Google reads JSON-LD anywhere in the page.
    const headTags = [...appHtml.matchAll(/<title[^>]*>.*?<\/title>/gs), ...appHtml.matchAll(/<meta[^>]*(?:\/>|>)/gs), ...appHtml.matchAll(/<link[^>]*(?:\/>|>)/gs)].map(m => m[0]).join("\n")

    // Collapse duplicate <meta name="description"> down to the first one. Search engines expect a
    // single description per page; if more than one ends up in <head> (e.g. a wrapper page and an
    // inner component each render one during SSR, or React re-hoists the component's copy alongside
    // the one injected here) SE Ranking flags "multiple meta description tags". This mirrors the
    // stray-<title> stripping below — keep the first (page-level) description, drop the rest.
    let keptDescription = false
    const dedupedHeadTags = headTags.replace(/<meta[^>]*\bname=["']description["'][^>]*>/gi, match => (keptDescription ? "" : ((keptDescription = true), match)))

    // X (Twitter) Card. Many components already emit their own twitter:* tags; only pages that
    // don't (e.g. product detail pages, About, several listings/blogs) were flagged as missing the
    // card. Inject a default ONLY when the page has none, so every page ends up with exactly one
    // twitter:card and never a duplicate. X fills title/image from each page's Open Graph tags.
    const twitterCardTag = /name=["']twitter:card["']/.test(dedupedHeadTags) ? "" : '<meta name="twitter:card" content="summary_large_image" />'

    // Open Graph image. Many hub/sub/listing pages render no og:image, so link/social previews come
    // up blank (flagged on ~85 pages). Inject a brand default ONLY when the page has none, so every
    // page has exactly one og:image; pages with their own keep it. Swap for a 1200x630 social card.
    const DEFAULT_OG_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/panam-no-bg.png"
    const ogImageTag = /property=["']og:image["']/.test(dedupedHeadTags) ? "" : `<meta property="og:image" content="${DEFAULT_OG_IMAGE}" />`

    // Remove them from body
    const bodyHtml = appHtml
      .replace(/<title[^>]*>.*?<\/title>/gs, "")
      .replace(/<meta[^>]*(?:\/>|>)/g, "")
      .replace(/<link[^>]*(?:\/>|>)/g, "")

    // Put tags in <head>, clean HTML in root div
    let html = originalTemplate
      // 1. Use a "Global" and "Case-Insensitive" regex to remove ANY existing title
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")

      // 2. Use a regex to find the <head> tag even if it has attributes
      .replace(/<head[^>]*>/i, match => `${match}\n${dedupedHeadTags}\n${twitterCardTag}\n${ogImageTag}`)

      // 3. Keep your root replacement, but ensure it matches correctly
      // data-prerendered-route lets main.tsx tell real prerendered HTML apart from the homepage copy
      // Azure's navigationFallback serves for routes that weren't prerendered (see main.tsx).
      .replace('<div id="root"></div>', `<div id="root" data-prerendered-route="${route}">${bodyHtml}</div>`)

    let preloadCount = 0
    html = html.replace(/<link rel="preload" as="image" href="https:\/\/res\.cloudinary\.com\/[^>]*\/>/g, match => {
      preloadCount++
      return preloadCount <= 1 ? match : "" // Keep 1st, delete others
    })

    const filePath = route === "/" ? path.resolve(__dirname, "dist/index.html") : path.resolve(__dirname, `dist${route}/index.html`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)

    console.log(`✅ Prerendered: ${route}`)
  } catch (e) {
    console.error(`❌ Failed on route: ${route}`, e.message)
  }
}

console.log("🎉 Prerender complete!")

// ── XML sitemap ────────────────────────────────────────────────────────────────────────────────
// Built from the same `routes` list we prerender, so the sitemap and the crawlable pages never drift
// apart. robots.txt (in public/) points search engines here. Only indexable, canonical pages are in
// `routes` — noindex pages (e.g. /enquiry/thank-you) are deliberately excluded by not being listed.
const SITE_ORIGIN = "https://www.panamvalve.com"
const lastmod = new Date().toISOString().split("T")[0]
// Routes that are prerendered but marked noindex — keep them out of the sitemap.
const SITEMAP_EXCLUDE = new Set(["/enquiry/thank-you"])
const sitemapUrls = [...new Set(routes)]
  .filter(route => !SITEMAP_EXCLUDE.has(route))
  .map(route => {
    const loc = `${SITE_ORIGIN}${route === "/" ? "" : route}`
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  })
  .join("\n")
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`
fs.writeFileSync(path.resolve(__dirname, "dist/sitemap.xml"), sitemapXml)
console.log(`🗺️  Sitemap written: ${[...new Set(routes)].length} URLs`)
