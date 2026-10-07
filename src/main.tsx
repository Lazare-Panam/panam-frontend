import React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { routes } from "./App.tsx" // Import the routes we just cleaned up
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community"
import "./index.css"
ModuleRegistry.registerModules([AllCommunityModule])
const queryClient = new QueryClient()

// Create the browser-specific router here
const router = createBrowserRouter(routes)

const app = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)

const rootElement = document.getElementById("root")!

// The prerenderer bakes a static <title> into <head>. React 19 also hoists the <title> each
// route renders but can't reconcile it with that static tag, so a duplicate appears (and stale
// ones linger across SPA navigation). Tag the prerender-injected title, then remove it ONLY once
// React has added its own — i.e. only when more than one <title> exists. This never touches
// React's title and never leaves the page with zero titles.
document.head.querySelector("title")?.setAttribute("data-prerender-title", "")
new MutationObserver(() => {
  if (document.head.querySelectorAll("title").length > 1) {
    document.head.querySelector("title[data-prerender-title]")?.remove()
  }
}).observe(document.head, { childList: true })

// Only hydrate HTML that was prerendered for THIS route. Routes that aren't prerendered (e.g. the
// API-driven tube-fitting product pages) are served the homepage's HTML by Azure's
// navigationFallback; hydrating that always fails (React #418), and while React recovers the page
// shows neither the homepage nor the product — crawlers recorded "H1 tag missing" there. Render
// those from scratch instead.
const normalizePath = (p: string) => {
  try { p = decodeURI(p) } catch { /* malformed escape — compare as-is */ }
  return p.replace(/\/+$/, "") || "/"
}
const prerenderedRoute = rootElement.dataset.prerenderedRoute
if (rootElement.hasChildNodes() && prerenderedRoute && normalizePath(prerenderedRoute) === normalizePath(window.location.pathname)) {
  hydrateRoot(rootElement, app)
} else {
  rootElement.replaceChildren()
  createRoot(rootElement).render(app)
}
