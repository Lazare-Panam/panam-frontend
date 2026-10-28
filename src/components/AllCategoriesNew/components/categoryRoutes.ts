// Category id → its landing page; anything not listed falls back to /products/:id.
export const CATEGORY_ROUTES: Record<string, string> = {
  "instrumentation-fittings":       "/instrumentation-fittings",
  "filters":                        "/filters",
  "quick-coupling-and-hoses":       "/quick-coupling-and-tubing",
  "hydrogen":                       "/high-pressure",
  "valves":                         "/valves",
  "valve-manifolds":                "/manifolds",
  "double-block-and-bleed-valves":  "/double-block-and-bleed-valves",
  "single-block-and-bleed-valves":  "/single-block-and-bleed-valves",
  "tubing":                         "/quick-coupling-and-tubing/tubing",
  "pressure-regulator-transmitter": "/system-integration",
  "system-integration":             "/system-integration",
}
