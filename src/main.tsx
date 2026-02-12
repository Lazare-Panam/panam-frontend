import React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { routes } from "./App.tsx" // Import the routes we just cleaned up

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

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}