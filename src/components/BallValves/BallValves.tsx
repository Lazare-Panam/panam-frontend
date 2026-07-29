import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useBallValveFilterOptions, useBallValves } from "./components/useBallValve"
import { BallValveSidebar } from "./components/BallValveSidebar"
import { BallValveActiveFilters } from "./components/BallValvesActiveFilters"
import BallValveTable from "./components/BallValveTable"
import { type BallValveFilters, EMPTY_BALL_VALVE_FILTERS } from "./components/types"

const BRAND_BLUE = "#01B0F0"

interface BallValvePageProps {
  title?: string
  description?: string
  chips?: string[]
  defaultSeries?: string[]
  defaultBodyMaterials?: string[]
  defaultConfigurations?: string[]
}

export default function BallValvePage({
  title = "Ball Valves",
  description = "2-Way and 3-Way floating-ball valves rated to 10,000 psig. T-port and L-port flow paths, full range of end connections, NACE certification available. Expand any row for full specs and to add to quote.",
  chips = ["10,000 psig max", '1/8" – 2"', "SS316 / Duplex / Monel", "NACE / CE"],
  defaultSeries,
  defaultBodyMaterials,
  defaultConfigurations,
}: BallValvePageProps = {}) {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<BallValveFilters>({
    ...EMPTY_BALL_VALVE_FILTERS,
    series: defaultSeries ?? [],
    bodyMaterials: defaultBodyMaterials ?? [],
    configurations: defaultConfigurations ?? [],
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useBallValveFilterOptions()
  const { data: models = [], isLoading, isFetching } = useBallValves(filters)

  const activeCount = filters.series.length + filters.bodyMaterials.length + filters.threadTypes.length + filters.endConnectionTypes.length + filters.connectionSizes.length + filters.configurations.length + filters.seatMaterials.length + filters.handles.length + filters.pressureRatings.length + filters.options.length

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {chips.map(s => (
            <Box
              key={s}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: 600,
                bgcolor: alpha(BRAND_BLUE, 0.08),
                color: "#0277BD",
                border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
              }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <BallValveActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {isFetching && !isLoading ? "UPDATING..." : isLoading ? "LOADING..." : `${models.length} CONFIGURATIONS`}
        </Typography>

        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
            <CircularProgress sx={{ color: BRAND_BLUE }} />
          </Box>
        ) : (
          <BallValveTable models={models} isFetching={isFetching} filters={filters} setFilters={setFilters} filterOptions={filterOptions} filtersLoading={filtersLoading} activeCount={activeCount} isMobile={isMobile} />
        )}

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <BallValveSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} filtersLoading={filtersLoading} activeCount={activeCount} />
        </Drawer>
      </Box>
    </Box>
  )
}
