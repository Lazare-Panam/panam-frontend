import { renderToString } from "react-dom/server"
import { createStaticRouter, StaticRouterProvider } from "react-router-dom"
import { createStaticHandler } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { routes } from "./App"

export async function render(url: string) {
  const handler = createStaticHandler(routes)
  const request = new Request(`http://localhost${url}`)
  const context = await handler.query(request)

  if (context instanceof Response) throw context

  const router = createStaticRouter(handler.dataRoutes, context)
  const queryClient = new QueryClient()

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouterProvider router={router} context={context} />
    </QueryClientProvider>
  )

  return html
}
