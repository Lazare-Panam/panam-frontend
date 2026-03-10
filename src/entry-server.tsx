import { renderToPipeableStream } from "react-dom/server"
import { createStaticRouter, StaticRouterProvider } from "react-router-dom"
import { createStaticHandler } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { routes } from "./App"
import { Writable } from "node:stream"

export async function render(url: string): Promise<string> {
  const handler = createStaticHandler(routes)
  const request = new Request(`http://localhost${url}`)
  const context = await handler.query(request)

  if (context instanceof Response) throw context

  const router = createStaticRouter(handler.dataRoutes, context)
  const queryClient = new QueryClient()

  return new Promise((resolve, reject) => {
    let html = ""
    const { pipe } = renderToPipeableStream(
      <QueryClientProvider client={queryClient}>
        <StaticRouterProvider router={router} context={context} />
      </QueryClientProvider>,
      {
        onAllReady() {
          const writable = new Writable({
            write(chunk, _, cb) {
              html += chunk.toString()
              cb()
            },
          })
          writable.on("finish", () => resolve(html))
          pipe(writable)
        },
        onError: reject,
      }
    )
  })
}