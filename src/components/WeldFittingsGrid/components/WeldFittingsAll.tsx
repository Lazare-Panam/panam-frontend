import { useState } from "react"
import { Box, Typography, CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { useWeldFittingFilterOptions, useWeldFittings } from "../hooks/useWeldFittings"
import { WeldFittingActiveFilters } from "./WeldFittingsActiveFilters"
import WeldFittingTable from "./WeldFittingsTable"
import { type WeldFittingFilters, EMPTY_WELD_FITTING_FILTERS } from "../hooks/weldFittingTypes"

const BRAND_BLUE = "#01B0F0"

export default function WeldFittingPage({
  defaultFittingTypes,
  section = "all",
  renderMeta = true,
}: {
  defaultFittingTypes?: string[]
  section?: string
  renderMeta?: boolean
} = {}) {
  const [filters, setFilters] = useState<WeldFittingFilters>({
    ...EMPTY_WELD_FITTING_FILTERS,
    fittingTypes: defaultFittingTypes ?? [],
  })
  const [unitSystem, setUnitSystem] = useState<"inch" | "mm">("inch")

  const { data: filterOptions, isLoading: filtersLoading } = useWeldFittingFilterOptions()
  const {
    data: models = [],
    isLoading,
    isFetching,
  } = useWeldFittings({
    ...filters,
    p1Units: [unitSystem],
  })

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <>
      {renderMeta && (
        <>
          <title>All Weld Fittings | Socket & Butt Weld | PANAM®</title>
          <meta name="description" content={'Browse the full PANAM® weld fitting range — connectors, elbows & tees in socket & butt weld. SS316, Duplex, Monel & Hastelloy. Rated to 10,000 psig.'} />
          <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings/weld-fittings/all" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Panam Valves" />
          <meta property="og:title" content="All Weld Fittings | Socket & Butt Weld | PANAM®" />
          <meta property="og:description" content={'Full PANAM® weld fitting range — connectors, elbows & tees. Socket & butt weld. SS316, Duplex, Monel & Hastelloy.'} />
          <meta property="og:url" content="https://www.panamvalve.com/instrumentation-fittings/weld-fittings/all" />
          <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="All Weld Fittings | Socket & Butt Weld | PANAM®" />
          <meta name="twitter:description" content={'Full PANAM® weld fitting range — connectors, elbows & tees. Socket & butt weld. SS316, Duplex, Monel & Hastelloy.'} />
          <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg" />
        </>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid #eee", bgcolor: "#fff" }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
            <Box>
              <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
                Weld Fittings{" "}
                <Box component="span" sx={{ color: "text.primary", fontWeight: 400 }}>
                  — 316 Stainless Steel
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
                Tube socket weld, tube butt weld and pipe socket weld fittings. Available in NPT, BSPT and BSPP thread standards.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["SS316", "TSW / TBW / PSW", "NPT / BSPT / BSPP", '1/8" – 2" / 6mm – 38mm'].map(s => (
                  <Box
                    key={s}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      bgcolor: alpha(BRAND_BLUE, 0.08),
                      color: BRAND_BLUE,
                      border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
                    }}>
                    {s}
                  </Box>
                ))}
              </Box>
            </Box>

            <ToggleButtonGroup
              value={unitSystem}
              exclusive
              onChange={(_, val) => { if (val) setUnitSystem(val) }}
              size="small"
              sx={{ alignSelf: "flex-start", mt: 1 }}>
              <ToggleButton value="inch" sx={{ fontWeight: 700, fontSize: "0.75rem", px: 2, "&.Mui-selected": { bgcolor: BRAND_BLUE, color: "#fff", "&:hover": { bgcolor: "#0090c8" } } }}>
                Imperial (in)
              </ToggleButton>
              <ToggleButton value="mm" sx={{ fontWeight: 700, fontSize: "0.75rem", px: 2, "&.Mui-selected": { bgcolor: BRAND_BLUE, color: "#fff", "&:hover": { bgcolor: "#0090c8" } } }}>
                Metric (mm)
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 }, flex: 1, display: "flex", flexDirection: "column" }}>
          <WeldFittingActiveFilters filters={filters} setFilters={setFilters} />
          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 2 }}>
            {isFetching && !isLoading ? "UPDATING..." : isLoading ? "LOADING..." : `${models.length} CONFIGURATIONS`}
          </Typography>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
              <CircularProgress sx={{ color: BRAND_BLUE }} />
            </Box>
          ) : (
            <Box sx={{ flex: 1, minHeight: 0 }}>
              <WeldFittingTable
                models={models}
                isFetching={isFetching}
                filters={filters}
                setFilters={setFilters}
                filterOptions={filterOptions}
                filtersLoading={filtersLoading}
                activeCount={activeCount}
                section={section}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}